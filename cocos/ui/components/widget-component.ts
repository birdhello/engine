/*
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
  worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
  not use Cocos Creator software for developing other software or tools that's
  used for developing games. You are not granted to publish, distribute,
  sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

/**
 * @category ui
 */

import { Component} from '../../core/components';
import { UITransformComponent } from '../../core/components/ui-base/ui-transfrom-component';
import { ccclass, executeInEditMode, executionOrder, menu, property, requireComponent } from '../../core/data/class-decorator';
import { Size, Vec3 } from '../../core/math';
import { errorID } from '../../core/platform/debug';
import { SystemEventType } from '../../core/platform/event-manager/event-enum';
import { View } from '../../core/platform/view';
import visibleRect from '../../core/platform/visible-rect';
import { Scene } from '../../core/scene-graph';
import { Node } from '../../core/scene-graph/node';
import { INode } from '../../core/utils/interfaces';
import { ccenum } from '../../core/value-types/enum';

const _zeroVec3 = new Vec3();

// returns a readonly size of the node
export function getReadonlyNodeSize (parent: INode) {
    if (parent instanceof Scene) {
        // @ts-ignore
        if (CC_EDITOR) {
            // const canvasComp = parent.getComponentInChildren(CanvasComponent);
            if (!View.instance) {
                throw new Error('cc.view uninitiated');
            }

            return View.instance.getDesignResolutionSize();
        }

        return visibleRect;
    } else {
        return parent.getContentSize();
    }
}

export function computeInverseTransForTarget (widgetNode: INode, target: INode, out_inverseTranslate: Vec3, out_inverseScale: Vec3) {
    let scale = widgetNode.parent ? widgetNode.parent.getScale() : _zeroVec3;
    let scaleX = scale.x;
    let scaleY = scale.y;
    let translateX = 0;
    let translateY = 0;
    for (let node = widgetNode.parent; ;) {
        if (!node) {
            // ERROR: widgetNode should be child of target
            out_inverseTranslate.x = out_inverseTranslate.y = 0;
            out_inverseScale.x = out_inverseScale.y = 1;
            return;
        }

        const pos = node.getPosition();
        translateX += pos.x;
        translateY += pos.y;
        node = node.parent;    // loop increment

        if (node !== target) {
            scale = node ? node.getScale() : _zeroVec3;
            const sx = scale.x;
            const sy = scale.y;
            translateX *= sx;
            translateY *= sy;
            scaleX *= sx;
            scaleY *= sy;
        } else {
            break;
        }
    }
    out_inverseScale.x = scaleX !== 0 ? (1 / scaleX) : 1;
    out_inverseScale.y = scaleY !== 0 ? (1 / scaleY) : 1;
    out_inverseTranslate.x = -translateX;
    out_inverseTranslate.y = -translateY;
}

/**
 * @zh
 * Widget 的对齐模式，表示 Widget 应该何时刷新。
 * 可通过 cc.WidgetComponent 获得此组件
 */
export enum AlignMode {
    /**
     * @zh
     * 仅在 Widget 第一次激活时对齐一次，便于脚本或动画继续控制当前节点。<br/>
     * 开启后会在 onEnable 时所在的那一帧结束前对齐一次，然后立刻禁用该 Widget。
     */
    ONCE = 0,
    // /**
    //  * @zh
    //  * 一开始会像 ONCE 一样对齐一次，之后每当窗口大小改变时还会重新对齐。
    //  */
    // ON_WINDOW_RESIZE = 1,
    /**
     * @zh
     * 始终保持对齐。
     */
    ALWAYS = 1,
}

ccenum(AlignMode);

/**
 * @zh
 * Widget 的对齐标志，表示 Widget 选择对齐状态。
 */
export enum AlignFlags {
    /**
     * @zh
     * 上边对齐。
     */
    TOP = 1 << 0,
    /**
     * @zh
     * 垂直中心对齐。
     */
    MID = 1 << 1,
    /**
     * @zh
     * 下边对齐。
     */
    BOT = 1 << 2,
    /**
     * @zh
     * 左边对齐。
     */
    LEFT = 1 << 3,
    /**
     * @zh
     * 横向中心对齐。
     */
    CENTER = 1 << 4,
    /**
     * @zh
     * 右边对齐。
     */
    RIGHT = 1 << 5,
    /**
     * @zh
     * 横向对齐。
     */
    HORIZONTAL = LEFT | CENTER | RIGHT,
    /**
     * @zh
     * 纵向对齐。
     */
    VERTICAL = TOP | MID | BOT,
}

const TOP_BOT = AlignFlags.TOP | AlignFlags.BOT;
const LEFT_RIGHT = AlignFlags.LEFT | AlignFlags.RIGHT;

/**
 * @zh
 * Widget 组件，用于设置和适配其相对于父节点的边距，Widget 通常被用于 UI 界面，也可以用于其他地方。<br/>
 * Widget 会自动调整当前节点的坐标和宽高，不过目前调整后的结果要到下一帧才能在脚本里获取到，除非你先手动调用 [[updateAlignment]]。
 */
@ccclass('cc.WidgetComponent')
@executionOrder(110)
@menu('UI/Widget')
@requireComponent(UITransformComponent)
@executeInEditMode
export class WidgetComponent extends Component {
    /**
     * @zh
     * 指定一个对齐目标，只能是当前节点的其中一个父节点，默认为空，为空时表示当前父节点。
     */
    @property({
        type: Node,
    })
    get target () {
        return this._target;
    }

    set target (value: INode | null) {
        if (this._target === value){
            return;
        }

        this._unregisterTargetEvents();
        this._target = value;
        this._registerTargetEvents();
        if (CC_EDITOR /*&& !cc.engine._isPlaying*/ && this.node.parent) {
            // adjust the offsets to keep the size and position unchanged after target chagned
            cc._widgetManager.updateOffsetsToStayPut(this);
        }

        this._validateTargetInDEV();

        this._recursiveDirty();
    }

    /**
     * @zh
     * 是否对齐上边。
     */
    @property
    get isAlignTop () {
        return (this._alignFlags & AlignFlags.TOP) > 0;
    }
    set isAlignTop (value) {
        this._setAlign(AlignFlags.TOP, value);
        this._recursiveDirty();
    }

    /**
     * @zh
     * 是否对齐下边。
     */
    @property
    get isAlignBottom () {
        return (this._alignFlags & AlignFlags.BOT) > 0;
    }
    set isAlignBottom (value) {
        this._setAlign(AlignFlags.BOT, value);
        this._recursiveDirty();
    }

    /**
     * @zh
     * 是否对齐左边。
     */
    @property
    get isAlignLeft () {
        return (this._alignFlags & AlignFlags.LEFT) > 0;
    }
    set isAlignLeft (value) {
        this._setAlign(AlignFlags.LEFT, value);
        this._recursiveDirty();
    }

    /**
     * @zh
     * 是否对齐右边。
     */
    @property
    get isAlignRight () {
        return (this._alignFlags & AlignFlags.RIGHT) > 0;
    }
    set isAlignRight (value) {
        this._setAlign(AlignFlags.RIGHT, value);
        this._recursiveDirty();
    }

    /**
     * @zh
     * 是否垂直方向对齐中点，开启此项会将垂直方向其他对齐选项取消。
     */
    @property
    get isAlignVerticalCenter () {
        return (this._alignFlags & AlignFlags.MID) > 0;
    }
    set isAlignVerticalCenter (value) {
        if (value) {
            this.isAlignTop = false;
            this.isAlignBottom = false;
            this._alignFlags |= AlignFlags.MID;
        } else {
            this._alignFlags &= ~AlignFlags.MID;
        }

        this._recursiveDirty();
    }

    /**
     * @zh
     * 是否水平方向对齐中点，开启此选项会将水平方向其他对齐选项取消。
     */
    @property
    get isAlignHorizontalCenter () {
        return (this._alignFlags & AlignFlags.CENTER) > 0;
    }
    set isAlignHorizontalCenter (value) {
        if (value) {
            this.isAlignLeft = false;
            this.isAlignRight = false;
            this._alignFlags |= AlignFlags.CENTER;
        } else {
            this._alignFlags &= ~AlignFlags.CENTER;
        }
        this._recursiveDirty();
    }

    /**
     * @zh
     * 当前是否水平拉伸。当同时启用左右对齐时，节点将会被水平拉伸。此时节点的宽度（只读）。
     */
    @property({
        visible: false,
    })
    get isStretchWidth () {
        return (this._alignFlags & LEFT_RIGHT) === LEFT_RIGHT;
    }

    /**
     * @zh
     * 当前是否垂直拉伸。当同时启用上下对齐时，节点将会被垂直拉伸，此时节点的高度（只读）。
     */
    @property({
        visible: false,
    })
    get isStretchHeight () {
        return (this._alignFlags & TOP_BOT) === TOP_BOT;
    }

    // ALIGN MARGINS

    /**
     * @zh
     * 本节点顶边和父节点顶边的距离，可填写负值，只有在 isAlignTop 开启时才有作用。
     */
    @property
    get top () {
        return this._top;
    }
    set top (value) {
        this._top = value;
        this._recursiveDirty();
    }

    /**
     * @zh
     * 本节点底边和父节点底边的距离，可填写负值，只有在 isAlignBottom 开启时才有作用。
     */
    @property
    get bottom () {
        return this._bottom;
    }
    set bottom (value) {
        this._bottom = value;
        this._recursiveDirty();
    }

    /**
     * @zh
     * 本节点左边和父节点左边的距离，可填写负值，只有在 isAlignLeft 开启时才有作用。
     */
    @property
    get left () {
        return this._left;
    }
    set left (value) {
        this._left = value;
        this._recursiveDirty();
    }

    /**
     * @zh
     * 本节点右边和父节点右边的距离，可填写负值，只有在 isAlignRight 开启时才有作用。
     */
    @property
    get right () {
        return this._right;
    }
    set right (value) {
        this._right = value;
        this._recursiveDirty();
    }

    /**
     * @zh
     * 水平居中的偏移值，可填写负值，只有在 isAlignHorizontalCenter 开启时才有作用。
     */
    @property
    get horizontalCenter () {
        return this._horizontalCenter;
    }
    set horizontalCenter (value) {
        this._horizontalCenter = value;
        this._recursiveDirty();
    }

    /**
     * @zh
     * 垂直居中的偏移值，可填写负值，只有在 isAlignVerticalCenter 开启时才有作用。
     */
    @property
    get verticalCenter () {
        return this._verticalCenter;
    }
    set verticalCenter (value) {
        this._verticalCenter = value;
        this._recursiveDirty();
    }

    /**
     * @zh
     * 如果为 true，"top" 将会以像素作为边距，否则将会以相对父物体高度的百分比（0 到 1）作为边距。
     */
    @property
    get isAbsoluteTop () {
        return this._isAbsTop;
    }
    set isAbsoluteTop (value) {
        if (this._isAbsTop === value){
            return;
        }

        this._isAbsTop = value;
        this._autoChangedValue(AlignFlags.TOP, this._isAbsTop);
    }

    /**
     * @zh
     * 如果为 true，"bottom" 将会以像素作为边距，否则将会以相对父物体高度的百分比（0 到 1）作为边距。
     */
    @property
    get isAbsoluteBottom () {
        return this._isAbsBottom;
    }
    set isAbsoluteBottom (value) {
        if (this._isAbsBottom === value){
            return;
        }

        this._isAbsBottom = value;
        this._autoChangedValue(AlignFlags.BOT, this._isAbsBottom);
    }

    /**
     * @zh
     * 如果为 true，"left" 将会以像素作为边距，否则将会以相对父物体宽度的百分比（0 到 1）作为边距。
     */
    @property
    get isAbsoluteLeft () {
        return this._isAbsLeft;
    }
    set isAbsoluteLeft (value) {
        if (this._isAbsLeft === value) {
            return;
        }

        this._isAbsLeft = value;
        this._autoChangedValue(AlignFlags.LEFT, this._isAbsLeft);
    }

    /**
     * @zh
     * 如果为 true，"right" 将会以像素作为边距，否则将会以相对父物体宽度的百分比（0 到 1）作为边距。
     */
    @property
    get isAbsoluteRight () {
        return this._isAbsRight;
    }
    set isAbsoluteRight (value) {
        if (this._isAbsRight === value){
            return;
        }

        this._isAbsRight = value;
        this._autoChangedValue(AlignFlags.RIGHT, this._isAbsRight);
    }

    /**
     * @zh
     * 指定 Widget 的对齐模式，用于决定 Widget 应该何时刷新。
     *
     * @example
     * ```
     * widget.alignMode = cc.Widget.AlignMode.ON_WINDOW_RESIZE;
     * ```
     */
    @property({
        type: AlignMode,
    })
    get alignMode () {
        return this._alignMode;
    }

    set alignMode (value) {
        this._alignMode = value;
        this._recursiveDirty();
    }

    /**
     * @zh
     * 如果为 true，"horizontalCenter" 将会以像素作为偏移值，反之为百分比（0 到 1）。
     */
    @property
    get isAbsoluteHorizontalCenter () {
        return this._isAbsHorizontalCenter;
    }

    set isAbsoluteHorizontalCenter (value) {
        if (this._isAbsHorizontalCenter === value) {
            return;
        }

        this._isAbsHorizontalCenter = value;
        this._autoChangedValue(AlignFlags.CENTER, this._isAbsHorizontalCenter);
    }

    /**
     * @zh
     * 如果为 true，"verticalCenter" 将会以像素作为偏移值，反之为百分比（0 到 1）。
     */
    @property
    get isAbsoluteVerticalCenter () {
        return this._isAbsVerticalCenter;
    }
    set isAbsoluteVerticalCenter (value) {
        if (this._isAbsVerticalCenter === value){
            return;
        }

        this._isAbsVerticalCenter = value;
        this._autoChangedValue(AlignFlags.MID, this._isAbsVerticalCenter);
    }

    /**
     * @zh
     * 对齐开关，由 AlignFlags 组成
     */
    @property
    get alignFlags () {
        return this._alignFlags;
    }

    set alignFlags (value) {
        if (this._alignFlags === value) {
            return;
        }

        this._alignFlags = value;
        this._recursiveDirty();
    }

    public static AlignMode = AlignMode;

    public _lastPos = new Vec3();
    public _lastSize = new Size();
    public _dirty = true;

    @property
    private _alignFlags = 0;
    @property
    private _target: INode | null = null;
    @property
    private _left = 0;
    @property
    private _right = 0;
    @property
    private _top = 0;
    @property
    private _bottom = 0;
    @property
    private _horizontalCenter = 0;
    @property
    private _verticalCenter = 0;
    @property
    private _isAbsLeft = true;
    @property
    private _isAbsRight = true;
    @property
    private _isAbsTop = true;
    @property
    private _isAbsBottom = true;
    @property
    private _isAbsHorizontalCenter = true;
    @property
    private _isAbsVerticalCenter = true;
    // original size before align
    @property
    private _originalWidth = 0;
    @property
    private _originalHeight = 0;
    @property
    private _alignMode = AlignMode.ALWAYS;

    /**
     * @zh
     * 立刻执行 widget 对齐操作。这个接口一般不需要手工调用。
     * 只有当你需要在当前帧结束前获得 widget 对齐后的最新结果时才需要手动调用这个方法。
     *
     * @example
     * ```typescript
     * widget.top = 10;       // change top margin
     * cc.log(widget.node.y); // not yet changed
     * widget.updateAlignment();
     * cc.log(widget.node.y); // changed
     * ```
     */
    public updateAlignment () {
        cc._widgetManager.updateAlignment(this.node as Node);
    }

    public _validateTargetInDEV () {
        if (!CC_DEV) {
            return;
        }

        const target = this._target;
        if (target) {
            const isParent = this.node !== target && this.node.isChildOf(target);
            if (!isParent) {
                errorID(6500);
                this.target = null;
            }
        }

    }

    public setDirty (){
        this._recursiveDirty();
    }

    public onEnable () {
        this.node.getPosition(this._lastPos);
        this.node.getContentSize(this._lastSize);
        cc._widgetManager.add(this);
        this._registerEvent();
        this._registerTargetEvents();
    }

    public onDisable () {
        cc._widgetManager.remove(this);
        this._unregisterEvent();
        this._unregisterTargetEvents();
    }

    public onDestroy () {
        this._removeParentEvent();
    }

    public _adjustWidgetToAllowMovingInEditor (eventType: SystemEventType) {
        if (/*!CC_EDITOR ||*/ eventType !== SystemEventType.POSITION_PART) {
            return;
        }

        if (cc._widgetManager.isAligning) {
            return;
        }

        const self = this;
        const newPos = self.node.getPosition();
        const oldPos = this._lastPos;
        const delta = new Vec3(newPos);
        delta.subtract(oldPos);

        let target = self.node.parent;
        const inverseScale = new Vec3(1, 1, 1);

        if (self.target) {
            target = self.target as INode;
            computeInverseTransForTarget(self.node, target, new Vec3(), inverseScale);
        }
        if (!target) {
            return;
        }

        const targetSize = getReadonlyNodeSize(target);
        const deltaInPercent = new Vec3();
        if (targetSize.width !== 0 && targetSize.height !== 0) {
            Vec3.set(deltaInPercent, delta.x / targetSize.width * 100, delta.y / targetSize.height * 100, deltaInPercent.z);
        }

        if (self.isAlignTop) {
            self.top -= (self.isAbsoluteTop ? delta.y : deltaInPercent.y) * inverseScale.y;
        }
        if (self.isAlignBottom) {
            self.bottom += (self.isAbsoluteBottom ? delta.y : deltaInPercent.y) * inverseScale.y;
        }
        if (self.isAlignLeft) {
            self.left += (self.isAbsoluteLeft ? delta.x : deltaInPercent.x) * inverseScale.x;
        }
        if (self.isAlignRight) {
            self.right -= (self.isAbsoluteRight ? delta.x : deltaInPercent.x) * inverseScale.x;
        }
        if (self.isAlignHorizontalCenter) {
            self.horizontalCenter += (self.isAbsoluteHorizontalCenter ? delta.x : deltaInPercent.x) * inverseScale.x;
        }
        if (self.isAlignVerticalCenter) {
            self.verticalCenter += (self.isAbsoluteVerticalCenter ? delta.y : deltaInPercent.y) * inverseScale.y;
        }
    }

    public _adjustWidgetToAllowResizingInEditor () {
        // if (!CC_EDITOR) {
        //     return;
        // }

        if (cc._widgetManager.isAligning) {
            return;
        }

        this.setDirty();

        const self = this;
        const newSize = self.node.getContentSize();
        const oldSize = this._lastSize;
        const delta = new Vec3(newSize.width - oldSize.width, newSize.height - oldSize.height, 0);

        let target = self.node.parent;
        const inverseScale = new Vec3(1, 1, 1);
        if (self.target) {
            target = self.target as INode;
            computeInverseTransForTarget(self.node, target, new Vec3(), inverseScale);
        }
        if (!target) {
            return;
        }

        const targetSize = getReadonlyNodeSize(target);
        const deltaInPercent = new Vec3();
        if (targetSize.width !== 0 && targetSize.height !== 0) {
            Vec3.set(deltaInPercent, delta.x / targetSize.width * 100, delta.y / targetSize.height * 100, deltaInPercent.z);
        }

        const anchor = self.node.getAnchorPoint();

        if (self.isAlignTop) {
            self.top -= (self.isAbsoluteTop ? delta.y : deltaInPercent.y) * (1 - anchor.y) * inverseScale.y;
        }
        if (self.isAlignBottom) {
            self.bottom -= (self.isAbsoluteBottom ? delta.y : deltaInPercent.y) * anchor.y * inverseScale.y;
        }
        if (self.isAlignLeft) {
            self.left -= (self.isAbsoluteLeft ? delta.x : deltaInPercent.x) * anchor.x * inverseScale.x;
        }
        if (self.isAlignRight) {
            self.right -= (self.isAbsoluteRight ? delta.x : deltaInPercent.x) * (1 - anchor.x) * inverseScale.x;
        }
    }

    public _adjustWidgetToAnchorChanged () {
        this.setDirty();
    }

    public _adjustTargetToParentChanged (oldParent: Node) {
        if (oldParent) {
            this._unregisterOldParentEvents(oldParent);
        }
        if (this.node.getParent()) {
            this._registerTargetEvents();
        }
    }

    protected _registerEvent () {
        this.node.on(SystemEventType.TRANSFORM_CHANGED, this._adjustWidgetToAllowMovingInEditor, this);
        this.node.on(SystemEventType.SIZE_CHANGED, this._adjustWidgetToAllowResizingInEditor, this);
        this.node.on(SystemEventType.ANCHOR_CHANGED, this._adjustWidgetToAnchorChanged, this);
        this.node.on(SystemEventType.PARENT_CHANGED, this._adjustTargetToParentChanged, this);
    }

    protected _unregisterEvent () {
        this.node.off(SystemEventType.TRANSFORM_CHANGED, this._adjustWidgetToAllowMovingInEditor, this);
        this.node.off(SystemEventType.SIZE_CHANGED, this._adjustWidgetToAllowResizingInEditor, this);
        this.node.off(SystemEventType.ANCHOR_CHANGED, this._adjustWidgetToAnchorChanged, this);
    }

    protected _removeParentEvent () {
        this.node.off(SystemEventType.PARENT_CHANGED, this._adjustTargetToParentChanged, this);
    }

    protected _autoChangedValue (flag: AlignFlags, isAbs: boolean){
        const current = (this._alignFlags & flag) > 0;
        if (!current || !this.node.parent || !this.node.parent.uiTransfromComp){
            return;
        }

        const size = this.node.parent!.getContentSize();
        if (this.isAlignLeft && flag === AlignFlags.LEFT) {
            this._left = isAbs ? this._left / 100 * size.width : this._left * 100 / size.width;
        } else if (this.isAlignRight && flag === AlignFlags.RIGHT) {
            this._right = isAbs ? this._right / 100 * size.width : this._right * 100 / size.width;
        } else if (this.isAlignHorizontalCenter && flag === AlignFlags.CENTER) {
            this._horizontalCenter = isAbs ? this._horizontalCenter / 100 * size.width : this._horizontalCenter * 100 / size.width;
        } else if (this.isAlignTop && flag === AlignFlags.TOP) {
            this._top = isAbs ? this._top / 100 * size.height : this._top * 100 / size.height;
        } else if (this.isAlignBottom && flag === AlignFlags.BOT) {
            this._bottom = isAbs ? this._bottom / 100 * size.height : this._bottom * 100 / size.height;
        } else if (this.isAbsoluteVerticalCenter && flag === AlignFlags.MID) {
            this._verticalCenter = isAbs ? this._verticalCenter / 100 * size.height : this._verticalCenter * 100 / size.height;
        }

        this._recursiveDirty();
    }

    protected _registerTargetEvents () {
        const target = this._target || this.node.parent;
        if (target) {
            if (target.getComponent(UITransformComponent)) {
                target.on(SystemEventType.TRANSFORM_CHANGED, this._targetChangedOperation, this);
                target.on(SystemEventType.SIZE_CHANGED, this._targetChangedOperation, this);
            } else {
                cc.warnID(6501, this.node.name);
            }
        }
    }

    protected _unregisterTargetEvents () {
        const target = this._target || this.node.parent;
        if (target) {
            target.off(SystemEventType.TRANSFORM_CHANGED, this._targetChangedOperation, this);
            target.off(SystemEventType.SIZE_CHANGED, this._targetChangedOperation, this);
        }
    }

    protected _unregisterOldParentEvents ( oldParent: Node ) {
        const target = this._target || oldParent;
        if (target) {
            target.off(SystemEventType.TRANSFORM_CHANGED, this._targetChangedOperation, this);
            target.off(SystemEventType.SIZE_CHANGED, this._targetChangedOperation, this);
        }
    }

    protected _targetChangedOperation (){
        this._recursiveDirty();
    }

    private _setAlign (flag: AlignFlags, isAlign: boolean) {
        const current = (this._alignFlags & flag) > 0;
        if (isAlign === current) {
            return;
        }
        const isHorizontal = (flag & LEFT_RIGHT) > 0;
        if (isAlign) {
            this._alignFlags |= flag;

            if (isHorizontal) {
                this.isAlignHorizontalCenter = false;
                if (this.isStretchWidth) {
                    // become stretch
                    this._originalWidth = this.node.width!;
                    // test check conflict
                    if (CC_EDITOR /*&& !cc.engine.isPlaying*/) {
                        // TODO:
                        // _Scene.DetectConflict.checkConflict_Widget(this);
                    }
                }
            } else {
                this.isAlignVerticalCenter = false;
                if (this.isStretchHeight) {
                    // become stretch
                    this._originalHeight = this.node.height!;
                    // test check conflict
                    if (CC_EDITOR /*&& !cc.engine.isPlaying*/) {
                        // TODO:
                        // _Scene.DetectConflict.checkConflict_Widget(this);
                    }
                }
            }

            if (CC_EDITOR && this.node.parent) {
                // adjust the offsets to keep the size and position unchanged after alignment chagned
                cc._widgetManager.updateOffsetsToStayPut(this, flag);
            }
        } else {
            if (isHorizontal) {
                if (this.isStretchWidth) {
                    // will cancel stretch
                    this.node.width = this._originalWidth;
                }
            } else {
                if (this.isStretchHeight) {
                    // will cancel stretch
                    this.node.height = this._originalHeight;
                }
            }

            this._alignFlags &= ~flag;
        }
    }

    private _recursiveDirty () {
        if (this._dirty){
            return;
        }

        this._dirty = true;
    }
}

// @ts-ignore
cc.WidgetComponent = WidgetComponent;

// cc.Widget = module.exports = Widget;