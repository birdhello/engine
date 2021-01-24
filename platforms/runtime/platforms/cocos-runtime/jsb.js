(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _rt = loadRuntime();

_util["default"].exportTo("onShow", _rt, jsb);

_util["default"].exportTo("onHide", _rt, jsb);

_util["default"].exportTo("offShow", _rt, jsb);

_util["default"].exportTo("offHide", _rt, jsb);

},{"../../util":18}],2:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _rt = loadRuntime();

_util["default"].exportTo("loadSubpackage", _rt, jsb);

},{"../../util":18}],3:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _rt = loadRuntime();

_util["default"].exportTo("env", _rt, jsb);

_util["default"].exportTo("getSystemInfo", _rt, jsb);

_util["default"].exportTo("getSystemInfoSync", _rt, jsb);

},{"../../util":18}],4:[function(require,module,exports){
"use strict";

var _rt = loadRuntime();

var _touches = [];

var _getTouchIndex = function _getTouchIndex(touch) {
  var element;

  for (var index = 0; index < _touches.length; index++) {
    element = _touches[index];

    if (touch.identifier === element.identifier) {
      return index;
    }
  }

  return -1;
};

var _copyObject = function _copyObject(fromObj, toObject) {
  for (var key in fromObj) {
    if (fromObj.hasOwnProperty(key)) {
      toObject[key] = fromObj[key];
    }
  }
};

var _listenerMap = {
  "touchstart": [],
  "touchmove": [],
  "touchend": [],
  "touchcancel": []
};

function _addListener(key, value) {
  var listenerArr = _listenerMap[key];

  for (var index = 0, length = listenerArr.length; index < length; index++) {
    if (value === listenerArr[index]) {
      return;
    }
  }

  listenerArr.push(value);
}

function _removeListener(key, value) {
  var listenerArr = _listenerMap[key] || [];
  var length = listenerArr.length;

  for (var index = 0; index < length; ++index) {
    if (value === listenerArr[index]) {
      listenerArr.splice(index, 1);
      return;
    }
  }
}

var _hasDellWith = false;

var _systemInfo = _rt.getSystemInfoSync();

if (window.innerWidth && _systemInfo.windowWidth !== window.innerWidth) {
  _hasDellWith = true;
}

var _touchEventHandlerFactory = function _touchEventHandlerFactory(type) {
  return function (changedTouches) {
    if (typeof changedTouches === "function") {
      _addListener(type, changedTouches);

      return;
    }

    var touchEvent = new TouchEvent(type);
    var index;

    if (type === "touchstart") {
      changedTouches.forEach(function (touch) {
        index = _getTouchIndex(touch);

        if (index >= 0) {
          _copyObject(touch, _touches[index]);
        } else {
          var tmp = {};

          _copyObject(touch, tmp);

          _touches.push(tmp);
        }
      });
    } else if (type === "touchmove") {
      changedTouches.forEach(function (element) {
        index = _getTouchIndex(element);

        if (index >= 0) {
          _copyObject(element, _touches[index]);
        }
      });
    } else if (type === "touchend" || type === "touchcancel") {
      changedTouches.forEach(function (element) {
        index = _getTouchIndex(element);

        if (index >= 0) {
          _touches.splice(index, 1);
        }
      });
    }

    var touches = [].concat(_touches);
    var _changedTouches = [];
    changedTouches.forEach(function (touch) {
      var length = touches.length;

      for (var _index = 0; _index < length; ++_index) {
        var _touch = touches[_index];

        if (touch.identifier === _touch.identifier) {
          _changedTouches.push(_touch);

          return;
        }
      }

      _changedTouches.push(touch);
    });
    touchEvent.touches = touches;
    touchEvent.targetTouches = touches;
    touchEvent.changedTouches = _changedTouches;

    if (_hasDellWith) {
      touches.forEach(function (touch) {
        touch.clientX /= window.devicePixelRatio;
        touch.clientY /= window.devicePixelRatio;
        touch.pageX /= window.devicePixelRatio;
        touch.pageY /= window.devicePixelRatio;
      });

      if (type === "touchcancel" || type === "touchend") {
        _changedTouches.forEach(function (touch) {
          touch.clientX /= window.devicePixelRatio;
          touch.clientY /= window.devicePixelRatio;
          touch.pageX /= window.devicePixelRatio;
          touch.pageY /= window.devicePixelRatio;
        });
      }
    }

    var listenerArr = _listenerMap[type];
    var length = listenerArr.length;

    for (var _index2 = 0; _index2 < length; _index2++) {
      listenerArr[_index2](touchEvent);
    }
  };
};

if (_rt.onTouchStart) {
  jsb.onTouchStart = _rt.onTouchStart;
  jsb.offTouchStart = _rt.offTouchStart;
} else {
  jsb.onTouchStart = _touchEventHandlerFactory('touchstart');

  jsb.offTouchStart = function (callback) {
    _removeListener("touchstart", callback);
  };
}

if (_rt.onTouchMove) {
  jsb.onTouchMove = _rt.onTouchMove;
  jsb.offTouchMove = _rt.offTouchMove;
} else {
  jsb.onTouchMove = _touchEventHandlerFactory('touchmove');

  jsb.offTouchMove = function (callback) {
    _removeListener("touchmove", callback);
  };
}

if (_rt.onTouchCancel) {
  jsb.onTouchCancel = _rt.onTouchCancel;
  jsb.offTouchCancel = _rt.offTouchCancel;
} else {
  jsb.onTouchCancel = _touchEventHandlerFactory('touchcancel');

  jsb.offTouchCancel = function (callback) {
    _removeListener("touchcancel", callback);
  };
}

if (_rt.onTouchEnd) {
  jsb.onTouchEnd = _rt.onTouchEnd;
  jsb.offTouchEnd = _rt.offTouchEnd;
} else {
  jsb.onTouchEnd = _touchEventHandlerFactory('touchend');

  jsb.offTouchEnd = function (callback) {
    _removeListener("touchend", callback);
  };
}

},{}],5:[function(require,module,exports){
"use strict";

var _rt = loadRuntime();

var _systemInfo = _rt.getSystemInfoSync();

var _listeners = [];
jsb.device = jsb.device || {};

if (_rt.offAccelerometerChange) {
  var _alpha = 0.8;
  var _gravity = [0, 0, 0];

  var _onAccelerometerChange;

  var _dispatchEvent = function _dispatchEvent(data) {
    _gravity[0] = _alpha * _gravity[0] + (1 - _alpha) * data.x;
    _gravity[1] = _alpha * _gravity[1] + (1 - _alpha) * data.y;
    _gravity[2] = _alpha * _gravity[2] + (1 - _alpha) * data.z;

    _listeners.forEach(function (listener) {
      listener({
        acceleration: {
          x: data.x - _gravity[0],
          y: data.y - _gravity[1],
          z: data.z - _gravity[2]
        },
        accelerationIncludingGravity: {
          x: data.x,
          y: data.y,
          z: data.z
        }
      });
    });
  };

  if (_systemInfo.platform.toLowerCase() === "android") {
    _onAccelerometerChange = function _onAccelerometerChange(data) {
      data.x *= -10;
      data.y *= -10;
      data.z *= -10;

      _dispatchEvent(data);
    };
  } else {
    _onAccelerometerChange = function _onAccelerometerChange(data) {
      data.x *= 10;
      data.y *= 10;
      data.z *= 10;

      _dispatchEvent(data);
    };
  }

  jsb.onAccelerometerChange = function (listener) {
    if (typeof listener === "function") {
      var length = _listeners.length;

      for (var index = 0; index < length; ++index) {
        if (listener === _listeners[index]) {
          return;
        }
      }

      _listeners.push(listener);

      if (length === 0) {
        _rt.onAccelerometerChange(_onAccelerometerChange);
      }
    }
  };

  jsb.offAccelerometerChange = function (listener) {
    var length = _listeners.length;

    for (var index = 0; index < length; ++index) {
      if (listener === _listeners[index]) {
        _listeners.splice(index, 1);

        if (length === 1) {
          _rt.offAccelerometerChange(_onAccelerometerChange);
        }

        return;
      }
    }
  };

  jsb.stopAccelerometer = _rt.stopAccelerometer.bind(_rt);
  jsb.startAccelerometer = _rt.startAccelerometer.bind(_rt);

  jsb.device.setMotionEnabled = function (enable) {
    if (enable) {
      _rt.startAccelerometer({
        type: "accelerationIncludingGravity"
      });
    } else {
      _rt.stopAccelerometer({});
    }
  };
} else {
  jsb.onAccelerometerChange = function (listener) {
    if (typeof listener === "function") {
      var length = _listeners.length;

      for (var index = 0; index < length; ++index) {
        if (listener === _listeners[index]) {
          return;
        }
      }

      _listeners.push(listener);
    }
  };

  jsb.offAccelerometerChange = function (listener) {
    var length = _listeners.length;

    for (var index = 0; index < length; ++index) {
      if (listener === _listeners[index]) {
        _listeners.splice(index, 1);

        return;
      }
    }
  };

  jsb.device.dispatchDeviceMotionEvent = function (event) {
    _listeners.forEach(function (listener) {
      listener(event);
    });
  };

  jsb.stopAccelerometer = function () {
    jsb.device.setMotionEnabled(false);
  };

  jsb.startAccelerometer = function () {
    jsb.device.setMotionEnabled(true);
  };
}

},{}],6:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _rt = loadRuntime();

_util["default"].exportTo("getBatteryInfo", _rt, jsb);

_util["default"].exportTo("getBatteryInfoSync", _rt, jsb);

},{"../../util":18}],7:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _rt = loadRuntime();

_util["default"].exportTo("getFileSystemManager", _rt, jsb);

_util["default"].exportTo("downloadFile", _rt, jsb);

},{"../../util":18}],8:[function(require,module,exports){
"use strict";

if (!window.jsb) {
  window.jsb = {};
}

require("./base/lifecycle");

require("./base/subpackage");

require("./base/system-info");

require("./base/touch-event");

require("./device/accelerometer");

require("./device/battery");

require("./file/file-system-manager");

require("./interface/keyboard");

require("./interface/window");

require("./media/audio");

require("./media/video");

require("./rendering/canvas");

require("./rendering/font");

require("./rendering/frame");

require("./rendering/image");

},{"./base/lifecycle":1,"./base/subpackage":2,"./base/system-info":3,"./base/touch-event":4,"./device/accelerometer":5,"./device/battery":6,"./file/file-system-manager":7,"./interface/keyboard":9,"./interface/window":10,"./media/audio":11,"./media/video":12,"./rendering/canvas":13,"./rendering/font":14,"./rendering/frame":15,"./rendering/image":16}],9:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _rt = loadRuntime();

_util["default"].exportTo("onKeyboardInput", _rt, jsb);

_util["default"].exportTo("onKeyboardConfirm", _rt, jsb);

_util["default"].exportTo("onKeyboardComplete", _rt, jsb);

_util["default"].exportTo("offKeyboardInput", _rt, jsb);

_util["default"].exportTo("offKeyboardConfirm", _rt, jsb);

_util["default"].exportTo("offKeyboardComplete", _rt, jsb);

_util["default"].exportTo("hideKeyboard", _rt, jsb);

_util["default"].exportTo("showKeyboard", _rt, jsb);

_util["default"].exportTo("updateKeyboard", _rt, jsb);

},{"../../util":18}],10:[function(require,module,exports){
"use strict";

var _rt = loadRuntime();

var _onWindowResize = _rt.onWindowResize;

jsb.onWindowResize = function (callBack) {
  _onWindowResize(function (size) {
    callBack(size.width || size.windowWidth, size.height || size.windowHeight);
  });
};

},{}],11:[function(require,module,exports){
"use strict";

var _innerContext = _interopRequireDefault(require("../../inner-context"));

var _util = _interopRequireDefault(require("../../util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _rt = loadRuntime();

_util["default"].exportTo("AudioEngine", _rt, jsb);

_util["default"].exportTo("createInnerAudioContext", _rt, jsb, function () {
  if (_rt.AudioEngine) {
    jsb.createInnerAudioContext = function () {
      return (0, _innerContext["default"])(_rt.AudioEngine);
    };
  }
});

},{"../../inner-context":17,"../../util":18}],12:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _rt = loadRuntime();

_util["default"].exportTo("createVideo", _rt, jsb);

},{"../../util":18}],13:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _rt = loadRuntime();

_util["default"].exportTo("createCanvas", _rt, jsb, function () {
  if (document && typeof document.createElement === "function") {
    jsb.createCanvas = function () {
      return document.createElement("canvas");
    };
  }
});

},{"../../util":18}],14:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _rt = loadRuntime();

_util["default"].exportTo("loadFont", _rt, jsb);

},{"../../util":18}],15:[function(require,module,exports){
"use strict";

var _rt = loadRuntime();

if (jsb.setPreferredFramesPerSecond) {
  jsb.setPreferredFramesPerSecond = jsb.setPreferredFramesPerSecond.bind(jsb);
} else if (_rt.setPreferredFramesPerSecond) {
  jsb.setPreferredFramesPerSecond = _rt.setPreferredFramesPerSecond.bind(_rt);
} else {
  jsb.setPreferredFramesPerSecond = function () {
    console.error("The setPreferredFramesPerSecond is not define!");
  };
}

},{}],16:[function(require,module,exports){
"use strict";

var _util = _interopRequireDefault(require("../../util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _rt = loadRuntime();

_util["default"].exportTo("loadImageData", _rt, jsb);

_util["default"].exportTo("createImage", _rt, jsb, function () {
  if (document && typeof document.createElement === "function") {
    jsb.createCanvas = function () {
      return document.createElement("image");
    };
  }
});

},{"../../util":18}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _CANPLAY_CALLBACK = "canplayCallbacks";
var _ENDED_CALLBACK = "endedCallbacks";
var _ERROR_CALLBACK = "errorCallbacks";
var _PAUSE_CALLBACK = "pauseCallbacks";
var _PLAY_CALLBACK = "playCallbacks";
var _SEEKED_CALLBACK = "seekedCallbacks";
var _SEEKING_CALLBACK = "seekingCallbacks";
var _STOP_CALLBACK = "stopCallbacks";
var _TIME_UPDATE_CALLBACK = "timeUpdateCallbacks";
var _WAITING_CALLBACK = "waitingCallbacks";
var _ERROR_CODE = {
  ERROR_SYSTEM: 10001,
  ERROR_NET: 10002,
  ERROR_FILE: 10003,
  ERROR_FORMAT: 10004,
  ERROR_UNKNOWN: -1
};
var _STATE = {
  ERROR: -1,
  INITIALIZING: 0,
  PLAYING: 1,
  PAUSED: 2
};
var _audioEngine = undefined;

var _weakMap = new WeakMap();

var _offCallback = function _offCallback(target, type, callback) {
  var privateThis = _weakMap.get(target);

  if (typeof callback !== "function" || !privateThis) {
    return -1;
  }

  var callbacks = privateThis[type] || [];

  for (var i = 0, len = callbacks.length; i < len; ++i) {
    if (callback === callbacks[i]) {
      callbacks.splice(i, 1);
      return callback.length + 1;
    }
  }

  return 0;
};

var _onCallback = function _onCallback(target, type, callback) {
  var privateThis = _weakMap.get(target);

  if (typeof callback !== "function" || !privateThis) {
    return -1;
  }

  var callbacks = privateThis[type];

  if (!callbacks) {
    callbacks = privateThis[type] = [callback];
  } else {
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      if (callback === callbacks[i]) {
        return 0;
      }
    }

    callbacks.push(callback);
  }

  return callbacks.length;
};

var _dispatchCallback = function _dispatchCallback(target, type) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var privateThis = _weakMap.get(target);

  if (privateThis) {
    var callbacks = privateThis[type] || [];

    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(target, args);
    }
  }
};

function InnerAudioContext() {
  this.startTime = 0;
  this.autoplay = false;

  _weakMap.set(this, {
    src: "",
    volume: 1,
    loop: false
  });

  Object.defineProperty(this, "loop", {
    set: function set(value) {
      value = !!value;

      var privateThis = _weakMap.get(this);

      if (privateThis) {
        var audioID = privateThis.audioID;

        if (typeof audioID === "number" && audioID >= 0) {
          _audioEngine.setLoop(audioID, value);
        }

        privateThis.loop = value;
      }
    },
    get: function get() {
      var privateThis = _weakMap.get(this);

      return privateThis ? privateThis.loop : false;
    }
  });
  Object.defineProperty(this, "volume", {
    set: function set(value) {
      if (typeof value === "number") {
        if (value < 0) {
          value = 0;
        } else if (value > 1) {
          value = 1;
        }
      } else {
        value = 1;
      }

      var privateThis = _weakMap.get(this);

      if (privateThis) {
        var audioID = privateThis.audioID;

        if (typeof audioID === "number" && audioID >= 0) {
          _audioEngine.setVolume(audioID, value);
        }

        privateThis.volume = value;
      }
    },
    get: function get() {
      var privateThis = _weakMap.get(this);

      return privateThis ? privateThis.volume : 1;
    }
  });
  Object.defineProperty(this, "src", {
    set: function set(value) {
      var privateThis = _weakMap.get(this);

      if (!privateThis) {
        return;
      }

      var oldSrc = privateThis.src;
      privateThis.src = value;

      if (typeof value === "string") {
        var audioID = privateThis.audioID;

        if (typeof audioID === "number" && audioID >= 0 && _audioEngine.getState(audioID) === _STATE.PAUSED && oldSrc !== value) {
          _audioEngine.stop(audioID);

          privateThis.audioID = -1;
        }

        if (this.autoplay) {
          this.play();
        }
      }
    },
    get: function get() {
      var privateThis = _weakMap.get(this);

      return privateThis ? privateThis.src : "";
    }
  });
  Object.defineProperty(this, "duration", {
    get: function get() {
      var privateThis = _weakMap.get(this);

      if (privateThis) {
        var audioID = privateThis.audioID;

        if (typeof audioID === "number" && audioID >= 0) {
          return _audioEngine.getDuration(audioID);
        }
      }

      return NaN;
    },
    set: function set() {}
  });
  Object.defineProperty(this, "currentTime", {
    get: function get() {
      var privateThis = _weakMap.get(this);

      if (privateThis) {
        var audioID = privateThis.audioID;

        if (typeof audioID === "number" && audioID >= 0) {
          return _audioEngine.getCurrentTime(audioID);
        }
      }

      return 0;
    },
    set: function set() {}
  });
  Object.defineProperty(this, "paused", {
    get: function get() {
      var privateThis = _weakMap.get(this);

      if (privateThis) {
        var audioID = privateThis.audioID;

        if (typeof audioID === "number" && audioID >= 0) {
          return _audioEngine.getState(audioID) === _STATE.PAUSED;
        }
      }

      return true;
    },
    set: function set() {}
  });
  Object.defineProperty(this, "buffered", {
    get: function get() {
      var privateThis = _weakMap.get(this);

      if (privateThis) {
        var audioID = privateThis.audioID;

        if (typeof audioID === "number" && audioID >= 0) {
          return _audioEngine.getBuffered(audioID);
        }
      }

      return 0;
    },
    set: function set() {}
  });
}

var _prototype = InnerAudioContext.prototype;

_prototype.destroy = function () {
  var privateThis = _weakMap.get(this);

  if (privateThis) {
    var audioID = privateThis.audioID;

    if (typeof audioID === "number" && audioID >= 0) {
      _audioEngine.stop(audioID);

      privateThis.audioID = -1;

      _dispatchCallback(this, _STOP_CALLBACK);
    }

    privateThis[_CANPLAY_CALLBACK] = [];
    privateThis[_ENDED_CALLBACK] = [];
    privateThis[_ERROR_CALLBACK] = [];
    privateThis[_PAUSE_CALLBACK] = [];
    privateThis[_PLAY_CALLBACK] = [];
    privateThis[_SEEKED_CALLBACK] = [];
    privateThis[_SEEKING_CALLBACK] = [];
    privateThis[_STOP_CALLBACK] = [];
    privateThis[_TIME_UPDATE_CALLBACK] = [];
    privateThis[_WAITING_CALLBACK] = [];
    clearInterval(privateThis.intervalID);
  }
};

_prototype.play = function () {
  var privateThis = _weakMap.get(this);

  if (!privateThis) {
    return;
  }

  var src = privateThis.src;
  var audioID = privateThis.audioID;

  if (typeof src !== "string" || src === "") {
    _dispatchCallback(this, _ERROR_CALLBACK, [{
      errMsg: "invalid src",
      errCode: _ERROR_CODE.ERROR_FILE
    }]);

    return;
  }

  if (typeof audioID === "number" && audioID >= 0) {
    if (_audioEngine.getState(audioID) === _STATE.PAUSED) {
      _audioEngine.resume(audioID);

      _dispatchCallback(this, _PLAY_CALLBACK);

      return;
    } else {
      _audioEngine.stop(audioID);

      privateThis.audioID = -1;
    }
  }

  audioID = _audioEngine.play(src, this.loop, this.volume);

  if (audioID === -1) {
    _dispatchCallback(this, _ERROR_CALLBACK, [{
      errMsg: "unknown",
      errCode: _ERROR_CODE.ERROR_UNKNOWN
    }]);

    return;
  }

  privateThis.audioID = audioID;

  if (typeof this.startTime === "number" && this.startTime > 0) {
    _audioEngine.setCurrentTime(audioID, this.startTime);
  }

  _dispatchCallback(this, _WAITING_CALLBACK);

  var self = this;

  _audioEngine.setCanPlayCallback(audioID, function () {
    if (src === self.src) {
      _dispatchCallback(self, _CANPLAY_CALLBACK);

      _dispatchCallback(self, _PLAY_CALLBACK);
    }
  });

  _audioEngine.setWaitingCallback(audioID, function () {
    if (src === self.src) {
      _dispatchCallback(self, _WAITING_CALLBACK);
    }
  });

  _audioEngine.setErrorCallback(audioID, function () {
    if (src === self.src) {
      privateThis.audioID = -1;

      _dispatchCallback(self, _ERROR_CALLBACK);
    }
  });

  _audioEngine.setFinishCallback(audioID, function () {
    if (src === self.src) {
      privateThis.audioID = -1;

      _dispatchCallback(self, _ENDED_CALLBACK);
    }
  });
};

_prototype.pause = function () {
  var privateThis = _weakMap.get(this);

  if (privateThis) {
    var audioID = privateThis.audioID;

    if (typeof audioID === "number" && audioID >= 0) {
      _audioEngine.pause(audioID);

      _dispatchCallback(this, _PAUSE_CALLBACK);
    }
  }
};

_prototype.seek = function (position) {
  var privateThis = _weakMap.get(this);

  if (privateThis && typeof position === "number" && position >= 0) {
    var audioID = privateThis.audioID;

    if (typeof audioID === "number" && audioID >= 0) {
      _audioEngine.setCurrentTime(audioID, position);

      _dispatchCallback(this, _SEEKING_CALLBACK);

      _dispatchCallback(this, _SEEKED_CALLBACK);
    }
  }
};

_prototype.stop = function () {
  var privateThis = _weakMap.get(this);

  if (privateThis) {
    var audioID = privateThis.audioID;

    if (typeof audioID === "number" && audioID >= 0) {
      _audioEngine.stop(audioID);

      privateThis.audioID = -1;

      _dispatchCallback(this, _STOP_CALLBACK);
    }
  }
};

_prototype.offCanplay = function (callback) {
  _offCallback(this, _CANPLAY_CALLBACK, callback);
};

_prototype.offEnded = function (callback) {
  _offCallback(this, _ENDED_CALLBACK, callback);
};

_prototype.offError = function (callback) {
  _offCallback(this, _ERROR_CALLBACK, callback);
};

_prototype.offPause = function (callback) {
  _offCallback(this, _PAUSE_CALLBACK, callback);
};

_prototype.offPlay = function (callback) {
  _offCallback(this, _PLAY_CALLBACK, callback);
};

_prototype.offSeeked = function (callback) {
  _offCallback(this, _SEEKED_CALLBACK, callback);
};

_prototype.offSeeking = function (callback) {
  _offCallback(this, _SEEKING_CALLBACK, callback);
};

_prototype.offStop = function (callback) {
  _offCallback(this, _STOP_CALLBACK, callback);
};

_prototype.offTimeUpdate = function (callback) {
  var result = _offCallback(this, _TIME_UPDATE_CALLBACK, callback);

  if (result === 1) {
    clearInterval(_weakMap.get(this).intervalID);
  }
};

_prototype.offWaiting = function (callback) {
  _offCallback(this, _WAITING_CALLBACK, callback);
};

_prototype.onCanplay = function (callback) {
  _onCallback(this, _CANPLAY_CALLBACK, callback);
};

_prototype.onEnded = function (callback) {
  _onCallback(this, _ENDED_CALLBACK, callback);
};

_prototype.onError = function (callback) {
  _onCallback(this, _ERROR_CALLBACK, callback);
};

_prototype.onPause = function (callback) {
  _onCallback(this, _PAUSE_CALLBACK, callback);
};

_prototype.onPlay = function (callback) {
  _onCallback(this, _PLAY_CALLBACK, callback);
};

_prototype.onSeeked = function (callback) {
  _onCallback(this, _SEEKED_CALLBACK, callback);
};

_prototype.onSeeking = function (callback) {
  _onCallback(this, "seekingCallbacks", callback);
};

_prototype.onStop = function (callback) {
  _onCallback(this, _STOP_CALLBACK, callback);
};

_prototype.onTimeUpdate = function (callback) {
  var result = _onCallback(this, _TIME_UPDATE_CALLBACK, callback);

  if (result === 1) {
    var privateThis = _weakMap.get(this);

    var self = this;
    var intervalID = setInterval(function () {
      var privateThis = _weakMap.get(self);

      if (privateThis) {
        var audioID = privateThis.audioID;

        if (typeof audioID === "number" && audioID >= 0 && _audioEngine.getState(audioID) === _STATE.PLAYING) {
          _dispatchCallback(self, _TIME_UPDATE_CALLBACK);
        }
      } else {
        clearInterval(intervalID);
      }
    }, 500);
    privateThis.intervalID = intervalID;
  }
};

_prototype.onWaiting = function (callback) {
  _onCallback(this, _WAITING_CALLBACK, callback);
};

function _default(AudioEngine) {
  if (_audioEngine === undefined) {
    _audioEngine = Object.assign({}, AudioEngine);
    Object.keys(AudioEngine).forEach(function (name) {
      if (typeof AudioEngine[name] === "function") {
        AudioEngine[name] = function () {
          console.warn("AudioEngine." + name + " is deprecated");
          return _audioEngine[name].apply(AudioEngine, arguments);
        };
      }
    });
  }

  return new InnerAudioContext();
}

;

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = {
  exportTo: function exportTo(name, from, to, errCallback) {
    if (_typeof(from) !== "object" || _typeof(to) !== "object") {
      console.warn("invalid exportTo: ", name);
      return;
    }

    var fromProperty = from[name];

    if (fromProperty) {
      if (typeof fromProperty === "function") {
        to[name] = fromProperty.bind(from);
      } else {
        to[name] = fromProperty;
      }
    } else {
      to[name] = function () {
        console.error(name + " is not support!");
        return {};
      };

      if (typeof errCallback === "function") {
        errCallback();
      }
    }
  }
};
exports["default"] = _default;

},{}]},{},[8]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb2Nvcy1ydW50aW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdXRpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9ydCA9IGxvYWRSdW50aW1lKCk7XG5cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcIm9uU2hvd1wiLCBfcnQsIGpzYik7XG5cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcIm9uSGlkZVwiLCBfcnQsIGpzYik7XG5cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcIm9mZlNob3dcIiwgX3J0LCBqc2IpO1xuXG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJvZmZIaWRlXCIsIF9ydCwganNiKTtcblxufSx7XCIuLi8uLi91dGlsXCI6MTh9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX3V0aWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlsXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfcnQgPSBsb2FkUnVudGltZSgpO1xuXG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJsb2FkU3VicGFja2FnZVwiLCBfcnQsIGpzYik7XG5cbn0se1wiLi4vLi4vdXRpbFwiOjE4fV0sMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX3J0ID0gbG9hZFJ1bnRpbWUoKTtcblxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiZW52XCIsIF9ydCwganNiKTtcblxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiZ2V0U3lzdGVtSW5mb1wiLCBfcnQsIGpzYik7XG5cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImdldFN5c3RlbUluZm9TeW5jXCIsIF9ydCwganNiKTtcblxufSx7XCIuLi8uLi91dGlsXCI6MTh9XSw0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX3J0ID0gbG9hZFJ1bnRpbWUoKTtcblxudmFyIF90b3VjaGVzID0gW107XG5cbnZhciBfZ2V0VG91Y2hJbmRleCA9IGZ1bmN0aW9uIF9nZXRUb3VjaEluZGV4KHRvdWNoKSB7XG4gIHZhciBlbGVtZW50O1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBfdG91Y2hlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBlbGVtZW50ID0gX3RvdWNoZXNbaW5kZXhdO1xuXG4gICAgaWYgKHRvdWNoLmlkZW50aWZpZXIgPT09IGVsZW1lbnQuaWRlbnRpZmllcikge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn07XG5cbnZhciBfY29weU9iamVjdCA9IGZ1bmN0aW9uIF9jb3B5T2JqZWN0KGZyb21PYmosIHRvT2JqZWN0KSB7XG4gIGZvciAodmFyIGtleSBpbiBmcm9tT2JqKSB7XG4gICAgaWYgKGZyb21PYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdG9PYmplY3Rba2V5XSA9IGZyb21PYmpba2V5XTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBfbGlzdGVuZXJNYXAgPSB7XG4gIFwidG91Y2hzdGFydFwiOiBbXSxcbiAgXCJ0b3VjaG1vdmVcIjogW10sXG4gIFwidG91Y2hlbmRcIjogW10sXG4gIFwidG91Y2hjYW5jZWxcIjogW11cbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcihrZXksIHZhbHVlKSB7XG4gIHZhciBsaXN0ZW5lckFyciA9IF9saXN0ZW5lck1hcFtrZXldO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMCwgbGVuZ3RoID0gbGlzdGVuZXJBcnIubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIGlmICh2YWx1ZSA9PT0gbGlzdGVuZXJBcnJbaW5kZXhdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgbGlzdGVuZXJBcnIucHVzaCh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVMaXN0ZW5lcihrZXksIHZhbHVlKSB7XG4gIHZhciBsaXN0ZW5lckFyciA9IF9saXN0ZW5lck1hcFtrZXldIHx8IFtdO1xuICB2YXIgbGVuZ3RoID0gbGlzdGVuZXJBcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7ICsraW5kZXgpIHtcbiAgICBpZiAodmFsdWUgPT09IGxpc3RlbmVyQXJyW2luZGV4XSkge1xuICAgICAgbGlzdGVuZXJBcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cblxudmFyIF9oYXNEZWxsV2l0aCA9IGZhbHNlO1xuXG52YXIgX3N5c3RlbUluZm8gPSBfcnQuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcblxuaWYgKHdpbmRvdy5pbm5lcldpZHRoICYmIF9zeXN0ZW1JbmZvLndpbmRvd1dpZHRoICE9PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICBfaGFzRGVsbFdpdGggPSB0cnVlO1xufVxuXG52YXIgX3RvdWNoRXZlbnRIYW5kbGVyRmFjdG9yeSA9IGZ1bmN0aW9uIF90b3VjaEV2ZW50SGFuZGxlckZhY3RvcnkodHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNoYW5nZWRUb3VjaGVzKSB7XG4gICAgaWYgKHR5cGVvZiBjaGFuZ2VkVG91Y2hlcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBfYWRkTGlzdGVuZXIodHlwZSwgY2hhbmdlZFRvdWNoZXMpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRvdWNoRXZlbnQgPSBuZXcgVG91Y2hFdmVudCh0eXBlKTtcbiAgICB2YXIgaW5kZXg7XG5cbiAgICBpZiAodHlwZSA9PT0gXCJ0b3VjaHN0YXJ0XCIpIHtcbiAgICAgIGNoYW5nZWRUb3VjaGVzLmZvckVhY2goZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICAgIGluZGV4ID0gX2dldFRvdWNoSW5kZXgodG91Y2gpO1xuXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgX2NvcHlPYmplY3QodG91Y2gsIF90b3VjaGVzW2luZGV4XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHRtcCA9IHt9O1xuXG4gICAgICAgICAgX2NvcHlPYmplY3QodG91Y2gsIHRtcCk7XG5cbiAgICAgICAgICBfdG91Y2hlcy5wdXNoKHRtcCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ0b3VjaG1vdmVcIikge1xuICAgICAgY2hhbmdlZFRvdWNoZXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpbmRleCA9IF9nZXRUb3VjaEluZGV4KGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgX2NvcHlPYmplY3QoZWxlbWVudCwgX3RvdWNoZXNbaW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcInRvdWNoZW5kXCIgfHwgdHlwZSA9PT0gXCJ0b3VjaGNhbmNlbFwiKSB7XG4gICAgICBjaGFuZ2VkVG91Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGluZGV4ID0gX2dldFRvdWNoSW5kZXgoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICBfdG91Y2hlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgdG91Y2hlcyA9IFtdLmNvbmNhdChfdG91Y2hlcyk7XG4gICAgdmFyIF9jaGFuZ2VkVG91Y2hlcyA9IFtdO1xuICAgIGNoYW5nZWRUb3VjaGVzLmZvckVhY2goZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gdG91Y2hlcy5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIF9pbmRleCA9IDA7IF9pbmRleCA8IGxlbmd0aDsgKytfaW5kZXgpIHtcbiAgICAgICAgdmFyIF90b3VjaCA9IHRvdWNoZXNbX2luZGV4XTtcblxuICAgICAgICBpZiAodG91Y2guaWRlbnRpZmllciA9PT0gX3RvdWNoLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICBfY2hhbmdlZFRvdWNoZXMucHVzaChfdG91Y2gpO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF9jaGFuZ2VkVG91Y2hlcy5wdXNoKHRvdWNoKTtcbiAgICB9KTtcbiAgICB0b3VjaEV2ZW50LnRvdWNoZXMgPSB0b3VjaGVzO1xuICAgIHRvdWNoRXZlbnQudGFyZ2V0VG91Y2hlcyA9IHRvdWNoZXM7XG4gICAgdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlcyA9IF9jaGFuZ2VkVG91Y2hlcztcblxuICAgIGlmIChfaGFzRGVsbFdpdGgpIHtcbiAgICAgIHRvdWNoZXMuZm9yRWFjaChmdW5jdGlvbiAodG91Y2gpIHtcbiAgICAgICAgdG91Y2guY2xpZW50WCAvPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgdG91Y2guY2xpZW50WSAvPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgdG91Y2gucGFnZVggLz0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIHRvdWNoLnBhZ2VZIC89IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBcInRvdWNoY2FuY2VsXCIgfHwgdHlwZSA9PT0gXCJ0b3VjaGVuZFwiKSB7XG4gICAgICAgIF9jaGFuZ2VkVG91Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uICh0b3VjaCkge1xuICAgICAgICAgIHRvdWNoLmNsaWVudFggLz0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgICAgdG91Y2guY2xpZW50WSAvPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgICB0b3VjaC5wYWdlWCAvPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgICB0b3VjaC5wYWdlWSAvPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVyQXJyID0gX2xpc3RlbmVyTWFwW3R5cGVdO1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lckFyci5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBfaW5kZXgyID0gMDsgX2luZGV4MiA8IGxlbmd0aDsgX2luZGV4MisrKSB7XG4gICAgICBsaXN0ZW5lckFycltfaW5kZXgyXSh0b3VjaEV2ZW50KTtcbiAgICB9XG4gIH07XG59O1xuXG5pZiAoX3J0Lm9uVG91Y2hTdGFydCkge1xuICBqc2Iub25Ub3VjaFN0YXJ0ID0gX3J0Lm9uVG91Y2hTdGFydDtcbiAganNiLm9mZlRvdWNoU3RhcnQgPSBfcnQub2ZmVG91Y2hTdGFydDtcbn0gZWxzZSB7XG4gIGpzYi5vblRvdWNoU3RhcnQgPSBfdG91Y2hFdmVudEhhbmRsZXJGYWN0b3J5KCd0b3VjaHN0YXJ0Jyk7XG5cbiAganNiLm9mZlRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBfcmVtb3ZlTGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGNhbGxiYWNrKTtcbiAgfTtcbn1cblxuaWYgKF9ydC5vblRvdWNoTW92ZSkge1xuICBqc2Iub25Ub3VjaE1vdmUgPSBfcnQub25Ub3VjaE1vdmU7XG4gIGpzYi5vZmZUb3VjaE1vdmUgPSBfcnQub2ZmVG91Y2hNb3ZlO1xufSBlbHNlIHtcbiAganNiLm9uVG91Y2hNb3ZlID0gX3RvdWNoRXZlbnRIYW5kbGVyRmFjdG9yeSgndG91Y2htb3ZlJyk7XG5cbiAganNiLm9mZlRvdWNoTW92ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIF9yZW1vdmVMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBjYWxsYmFjayk7XG4gIH07XG59XG5cbmlmIChfcnQub25Ub3VjaENhbmNlbCkge1xuICBqc2Iub25Ub3VjaENhbmNlbCA9IF9ydC5vblRvdWNoQ2FuY2VsO1xuICBqc2Iub2ZmVG91Y2hDYW5jZWwgPSBfcnQub2ZmVG91Y2hDYW5jZWw7XG59IGVsc2Uge1xuICBqc2Iub25Ub3VjaENhbmNlbCA9IF90b3VjaEV2ZW50SGFuZGxlckZhY3RvcnkoJ3RvdWNoY2FuY2VsJyk7XG5cbiAganNiLm9mZlRvdWNoQ2FuY2VsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgX3JlbW92ZUxpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgY2FsbGJhY2spO1xuICB9O1xufVxuXG5pZiAoX3J0Lm9uVG91Y2hFbmQpIHtcbiAganNiLm9uVG91Y2hFbmQgPSBfcnQub25Ub3VjaEVuZDtcbiAganNiLm9mZlRvdWNoRW5kID0gX3J0Lm9mZlRvdWNoRW5kO1xufSBlbHNlIHtcbiAganNiLm9uVG91Y2hFbmQgPSBfdG91Y2hFdmVudEhhbmRsZXJGYWN0b3J5KCd0b3VjaGVuZCcpO1xuXG4gIGpzYi5vZmZUb3VjaEVuZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIF9yZW1vdmVMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGNhbGxiYWNrKTtcbiAgfTtcbn1cblxufSx7fV0sNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9ydCA9IGxvYWRSdW50aW1lKCk7XG5cbnZhciBfc3lzdGVtSW5mbyA9IF9ydC5nZXRTeXN0ZW1JbmZvU3luYygpO1xuXG52YXIgX2xpc3RlbmVycyA9IFtdO1xuanNiLmRldmljZSA9IGpzYi5kZXZpY2UgfHwge307XG5cbmlmIChfcnQub2ZmQWNjZWxlcm9tZXRlckNoYW5nZSkge1xuICB2YXIgX2FscGhhID0gMC44O1xuICB2YXIgX2dyYXZpdHkgPSBbMCwgMCwgMF07XG5cbiAgdmFyIF9vbkFjY2VsZXJvbWV0ZXJDaGFuZ2U7XG5cbiAgdmFyIF9kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gX2Rpc3BhdGNoRXZlbnQoZGF0YSkge1xuICAgIF9ncmF2aXR5WzBdID0gX2FscGhhICogX2dyYXZpdHlbMF0gKyAoMSAtIF9hbHBoYSkgKiBkYXRhLng7XG4gICAgX2dyYXZpdHlbMV0gPSBfYWxwaGEgKiBfZ3Jhdml0eVsxXSArICgxIC0gX2FscGhhKSAqIGRhdGEueTtcbiAgICBfZ3Jhdml0eVsyXSA9IF9hbHBoYSAqIF9ncmF2aXR5WzJdICsgKDEgLSBfYWxwaGEpICogZGF0YS56O1xuXG4gICAgX2xpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoe1xuICAgICAgICBhY2NlbGVyYXRpb246IHtcbiAgICAgICAgICB4OiBkYXRhLnggLSBfZ3Jhdml0eVswXSxcbiAgICAgICAgICB5OiBkYXRhLnkgLSBfZ3Jhdml0eVsxXSxcbiAgICAgICAgICB6OiBkYXRhLnogLSBfZ3Jhdml0eVsyXVxuICAgICAgICB9LFxuICAgICAgICBhY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5OiB7XG4gICAgICAgICAgeDogZGF0YS54LFxuICAgICAgICAgIHk6IGRhdGEueSxcbiAgICAgICAgICB6OiBkYXRhLnpcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKF9zeXN0ZW1JbmZvLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkgPT09IFwiYW5kcm9pZFwiKSB7XG4gICAgX29uQWNjZWxlcm9tZXRlckNoYW5nZSA9IGZ1bmN0aW9uIF9vbkFjY2VsZXJvbWV0ZXJDaGFuZ2UoZGF0YSkge1xuICAgICAgZGF0YS54ICo9IC0xMDtcbiAgICAgIGRhdGEueSAqPSAtMTA7XG4gICAgICBkYXRhLnogKj0gLTEwO1xuXG4gICAgICBfZGlzcGF0Y2hFdmVudChkYXRhKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF9vbkFjY2VsZXJvbWV0ZXJDaGFuZ2UgPSBmdW5jdGlvbiBfb25BY2NlbGVyb21ldGVyQ2hhbmdlKGRhdGEpIHtcbiAgICAgIGRhdGEueCAqPSAxMDtcbiAgICAgIGRhdGEueSAqPSAxMDtcbiAgICAgIGRhdGEueiAqPSAxMDtcblxuICAgICAgX2Rpc3BhdGNoRXZlbnQoZGF0YSk7XG4gICAgfTtcbiAgfVxuXG4gIGpzYi5vbkFjY2VsZXJvbWV0ZXJDaGFuZ2UgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHZhciBsZW5ndGggPSBfbGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICBpZiAobGlzdGVuZXIgPT09IF9saXN0ZW5lcnNbaW5kZXhdKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgICAgX3J0Lm9uQWNjZWxlcm9tZXRlckNoYW5nZShfb25BY2NlbGVyb21ldGVyQ2hhbmdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAganNiLm9mZkFjY2VsZXJvbWV0ZXJDaGFuZ2UgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICB2YXIgbGVuZ3RoID0gX2xpc3RlbmVycy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICBpZiAobGlzdGVuZXIgPT09IF9saXN0ZW5lcnNbaW5kZXhdKSB7XG4gICAgICAgIF9saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgX3J0Lm9mZkFjY2VsZXJvbWV0ZXJDaGFuZ2UoX29uQWNjZWxlcm9tZXRlckNoYW5nZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGpzYi5zdG9wQWNjZWxlcm9tZXRlciA9IF9ydC5zdG9wQWNjZWxlcm9tZXRlci5iaW5kKF9ydCk7XG4gIGpzYi5zdGFydEFjY2VsZXJvbWV0ZXIgPSBfcnQuc3RhcnRBY2NlbGVyb21ldGVyLmJpbmQoX3J0KTtcblxuICBqc2IuZGV2aWNlLnNldE1vdGlvbkVuYWJsZWQgPSBmdW5jdGlvbiAoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgX3J0LnN0YXJ0QWNjZWxlcm9tZXRlcih7XG4gICAgICAgIHR5cGU6IFwiYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eVwiXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3J0LnN0b3BBY2NlbGVyb21ldGVyKHt9KTtcbiAgICB9XG4gIH07XG59IGVsc2Uge1xuICBqc2Iub25BY2NlbGVyb21ldGVyQ2hhbmdlID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gX2xpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgaWYgKGxpc3RlbmVyID09PSBfbGlzdGVuZXJzW2luZGV4XSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cbiAgfTtcblxuICBqc2Iub2ZmQWNjZWxlcm9tZXRlckNoYW5nZSA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIHZhciBsZW5ndGggPSBfbGlzdGVuZXJzLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgIGlmIChsaXN0ZW5lciA9PT0gX2xpc3RlbmVyc1tpbmRleF0pIHtcbiAgICAgICAgX2xpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAganNiLmRldmljZS5kaXNwYXRjaERldmljZU1vdGlvbkV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgX2xpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoZXZlbnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGpzYi5zdG9wQWNjZWxlcm9tZXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBqc2IuZGV2aWNlLnNldE1vdGlvbkVuYWJsZWQoZmFsc2UpO1xuICB9O1xuXG4gIGpzYi5zdGFydEFjY2VsZXJvbWV0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAganNiLmRldmljZS5zZXRNb3Rpb25FbmFibGVkKHRydWUpO1xuICB9O1xufVxuXG59LHt9XSw2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX3V0aWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlsXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfcnQgPSBsb2FkUnVudGltZSgpO1xuXG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJnZXRCYXR0ZXJ5SW5mb1wiLCBfcnQsIGpzYik7XG5cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImdldEJhdHRlcnlJbmZvU3luY1wiLCBfcnQsIGpzYik7XG5cbn0se1wiLi4vLi4vdXRpbFwiOjE4fV0sNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX3J0ID0gbG9hZFJ1bnRpbWUoKTtcblxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiZ2V0RmlsZVN5c3RlbU1hbmFnZXJcIiwgX3J0LCBqc2IpO1xuXG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJkb3dubG9hZEZpbGVcIiwgX3J0LCBqc2IpO1xuXG59LHtcIi4uLy4uL3V0aWxcIjoxOH1dLDg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmICghd2luZG93LmpzYikge1xuICB3aW5kb3cuanNiID0ge307XG59XG5cbnJlcXVpcmUoXCIuL2Jhc2UvbGlmZWN5Y2xlXCIpO1xuXG5yZXF1aXJlKFwiLi9iYXNlL3N1YnBhY2thZ2VcIik7XG5cbnJlcXVpcmUoXCIuL2Jhc2Uvc3lzdGVtLWluZm9cIik7XG5cbnJlcXVpcmUoXCIuL2Jhc2UvdG91Y2gtZXZlbnRcIik7XG5cbnJlcXVpcmUoXCIuL2RldmljZS9hY2NlbGVyb21ldGVyXCIpO1xuXG5yZXF1aXJlKFwiLi9kZXZpY2UvYmF0dGVyeVwiKTtcblxucmVxdWlyZShcIi4vZmlsZS9maWxlLXN5c3RlbS1tYW5hZ2VyXCIpO1xuXG5yZXF1aXJlKFwiLi9pbnRlcmZhY2Uva2V5Ym9hcmRcIik7XG5cbnJlcXVpcmUoXCIuL2ludGVyZmFjZS93aW5kb3dcIik7XG5cbnJlcXVpcmUoXCIuL21lZGlhL2F1ZGlvXCIpO1xuXG5yZXF1aXJlKFwiLi9tZWRpYS92aWRlb1wiKTtcblxucmVxdWlyZShcIi4vcmVuZGVyaW5nL2NhbnZhc1wiKTtcblxucmVxdWlyZShcIi4vcmVuZGVyaW5nL2ZvbnRcIik7XG5cbnJlcXVpcmUoXCIuL3JlbmRlcmluZy9mcmFtZVwiKTtcblxucmVxdWlyZShcIi4vcmVuZGVyaW5nL2ltYWdlXCIpO1xuXG59LHtcIi4vYmFzZS9saWZlY3ljbGVcIjoxLFwiLi9iYXNlL3N1YnBhY2thZ2VcIjoyLFwiLi9iYXNlL3N5c3RlbS1pbmZvXCI6MyxcIi4vYmFzZS90b3VjaC1ldmVudFwiOjQsXCIuL2RldmljZS9hY2NlbGVyb21ldGVyXCI6NSxcIi4vZGV2aWNlL2JhdHRlcnlcIjo2LFwiLi9maWxlL2ZpbGUtc3lzdGVtLW1hbmFnZXJcIjo3LFwiLi9pbnRlcmZhY2Uva2V5Ym9hcmRcIjo5LFwiLi9pbnRlcmZhY2Uvd2luZG93XCI6MTAsXCIuL21lZGlhL2F1ZGlvXCI6MTEsXCIuL21lZGlhL3ZpZGVvXCI6MTIsXCIuL3JlbmRlcmluZy9jYW52YXNcIjoxMyxcIi4vcmVuZGVyaW5nL2ZvbnRcIjoxNCxcIi4vcmVuZGVyaW5nL2ZyYW1lXCI6MTUsXCIuL3JlbmRlcmluZy9pbWFnZVwiOjE2fV0sOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX3J0ID0gbG9hZFJ1bnRpbWUoKTtcblxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwib25LZXlib2FyZElucHV0XCIsIF9ydCwganNiKTtcblxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwib25LZXlib2FyZENvbmZpcm1cIiwgX3J0LCBqc2IpO1xuXG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJvbktleWJvYXJkQ29tcGxldGVcIiwgX3J0LCBqc2IpO1xuXG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJvZmZLZXlib2FyZElucHV0XCIsIF9ydCwganNiKTtcblxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwib2ZmS2V5Ym9hcmRDb25maXJtXCIsIF9ydCwganNiKTtcblxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwib2ZmS2V5Ym9hcmRDb21wbGV0ZVwiLCBfcnQsIGpzYik7XG5cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImhpZGVLZXlib2FyZFwiLCBfcnQsIGpzYik7XG5cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcInNob3dLZXlib2FyZFwiLCBfcnQsIGpzYik7XG5cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcInVwZGF0ZUtleWJvYXJkXCIsIF9ydCwganNiKTtcblxufSx7XCIuLi8uLi91dGlsXCI6MTh9XSwxMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9ydCA9IGxvYWRSdW50aW1lKCk7XG5cbnZhciBfb25XaW5kb3dSZXNpemUgPSBfcnQub25XaW5kb3dSZXNpemU7XG5cbmpzYi5vbldpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uIChjYWxsQmFjaykge1xuICBfb25XaW5kb3dSZXNpemUoZnVuY3Rpb24gKHNpemUpIHtcbiAgICBjYWxsQmFjayhzaXplLndpZHRoIHx8IHNpemUud2luZG93V2lkdGgsIHNpemUuaGVpZ2h0IHx8IHNpemUud2luZG93SGVpZ2h0KTtcbiAgfSk7XG59O1xuXG59LHt9XSwxMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbm5lckNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9pbm5lci1jb250ZXh0XCIpKTtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX3J0ID0gbG9hZFJ1bnRpbWUoKTtcblxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiQXVkaW9FbmdpbmVcIiwgX3J0LCBqc2IpO1xuXG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dFwiLCBfcnQsIGpzYiwgZnVuY3Rpb24gKCkge1xuICBpZiAoX3J0LkF1ZGlvRW5naW5lKSB7XG4gICAganNiLmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICgwLCBfaW5uZXJDb250ZXh0W1wiZGVmYXVsdFwiXSkoX3J0LkF1ZGlvRW5naW5lKTtcbiAgICB9O1xuICB9XG59KTtcblxufSx7XCIuLi8uLi9pbm5lci1jb250ZXh0XCI6MTcsXCIuLi8uLi91dGlsXCI6MTh9XSwxMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX3J0ID0gbG9hZFJ1bnRpbWUoKTtcblxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwiY3JlYXRlVmlkZW9cIiwgX3J0LCBqc2IpO1xuXG59LHtcIi4uLy4uL3V0aWxcIjoxOH1dLDEzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX3V0aWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi91dGlsXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfcnQgPSBsb2FkUnVudGltZSgpO1xuXG5fdXRpbFtcImRlZmF1bHRcIl0uZXhwb3J0VG8oXCJjcmVhdGVDYW52YXNcIiwgX3J0LCBqc2IsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKGRvY3VtZW50ICYmIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBqc2IuY3JlYXRlQ2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgfTtcbiAgfVxufSk7XG5cbn0se1wiLi4vLi4vdXRpbFwiOjE4fV0sMTQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdXRpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL3V0aWxcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9ydCA9IGxvYWRSdW50aW1lKCk7XG5cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImxvYWRGb250XCIsIF9ydCwganNiKTtcblxufSx7XCIuLi8uLi91dGlsXCI6MTh9XSwxNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9ydCA9IGxvYWRSdW50aW1lKCk7XG5cbmlmIChqc2Iuc2V0UHJlZmVycmVkRnJhbWVzUGVyU2Vjb25kKSB7XG4gIGpzYi5zZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQgPSBqc2Iuc2V0UHJlZmVycmVkRnJhbWVzUGVyU2Vjb25kLmJpbmQoanNiKTtcbn0gZWxzZSBpZiAoX3J0LnNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZCkge1xuICBqc2Iuc2V0UHJlZmVycmVkRnJhbWVzUGVyU2Vjb25kID0gX3J0LnNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZC5iaW5kKF9ydCk7XG59IGVsc2Uge1xuICBqc2Iuc2V0UHJlZmVycmVkRnJhbWVzUGVyU2Vjb25kID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgc2V0UHJlZmVycmVkRnJhbWVzUGVyU2Vjb25kIGlzIG5vdCBkZWZpbmUhXCIpO1xuICB9O1xufVxuXG59LHt9XSwxNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF91dGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdXRpbFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX3J0ID0gbG9hZFJ1bnRpbWUoKTtcblxuX3V0aWxbXCJkZWZhdWx0XCJdLmV4cG9ydFRvKFwibG9hZEltYWdlRGF0YVwiLCBfcnQsIGpzYik7XG5cbl91dGlsW1wiZGVmYXVsdFwiXS5leHBvcnRUbyhcImNyZWF0ZUltYWdlXCIsIF9ydCwganNiLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChkb2N1bWVudCAmJiB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAganNiLmNyZWF0ZUNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1hZ2VcIik7XG4gICAgfTtcbiAgfVxufSk7XG5cbn0se1wiLi4vLi4vdXRpbFwiOjE4fV0sMTc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xudmFyIF9DQU5QTEFZX0NBTExCQUNLID0gXCJjYW5wbGF5Q2FsbGJhY2tzXCI7XG52YXIgX0VOREVEX0NBTExCQUNLID0gXCJlbmRlZENhbGxiYWNrc1wiO1xudmFyIF9FUlJPUl9DQUxMQkFDSyA9IFwiZXJyb3JDYWxsYmFja3NcIjtcbnZhciBfUEFVU0VfQ0FMTEJBQ0sgPSBcInBhdXNlQ2FsbGJhY2tzXCI7XG52YXIgX1BMQVlfQ0FMTEJBQ0sgPSBcInBsYXlDYWxsYmFja3NcIjtcbnZhciBfU0VFS0VEX0NBTExCQUNLID0gXCJzZWVrZWRDYWxsYmFja3NcIjtcbnZhciBfU0VFS0lOR19DQUxMQkFDSyA9IFwic2Vla2luZ0NhbGxiYWNrc1wiO1xudmFyIF9TVE9QX0NBTExCQUNLID0gXCJzdG9wQ2FsbGJhY2tzXCI7XG52YXIgX1RJTUVfVVBEQVRFX0NBTExCQUNLID0gXCJ0aW1lVXBkYXRlQ2FsbGJhY2tzXCI7XG52YXIgX1dBSVRJTkdfQ0FMTEJBQ0sgPSBcIndhaXRpbmdDYWxsYmFja3NcIjtcbnZhciBfRVJST1JfQ09ERSA9IHtcbiAgRVJST1JfU1lTVEVNOiAxMDAwMSxcbiAgRVJST1JfTkVUOiAxMDAwMixcbiAgRVJST1JfRklMRTogMTAwMDMsXG4gIEVSUk9SX0ZPUk1BVDogMTAwMDQsXG4gIEVSUk9SX1VOS05PV046IC0xXG59O1xudmFyIF9TVEFURSA9IHtcbiAgRVJST1I6IC0xLFxuICBJTklUSUFMSVpJTkc6IDAsXG4gIFBMQVlJTkc6IDEsXG4gIFBBVVNFRDogMlxufTtcbnZhciBfYXVkaW9FbmdpbmUgPSB1bmRlZmluZWQ7XG5cbnZhciBfd2Vha01hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbnZhciBfb2ZmQ2FsbGJhY2sgPSBmdW5jdGlvbiBfb2ZmQ2FsbGJhY2sodGFyZ2V0LCB0eXBlLCBjYWxsYmFjaykge1xuICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGFyZ2V0KTtcblxuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIgfHwgIXByaXZhdGVUaGlzKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgdmFyIGNhbGxiYWNrcyA9IHByaXZhdGVUaGlzW3R5cGVdIHx8IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoY2FsbGJhY2sgPT09IGNhbGxiYWNrc1tpXSkge1xuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgIHJldHVybiBjYWxsYmFjay5sZW5ndGggKyAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxudmFyIF9vbkNhbGxiYWNrID0gZnVuY3Rpb24gX29uQ2FsbGJhY2sodGFyZ2V0LCB0eXBlLCBjYWxsYmFjaykge1xuICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGFyZ2V0KTtcblxuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIgfHwgIXByaXZhdGVUaGlzKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgdmFyIGNhbGxiYWNrcyA9IHByaXZhdGVUaGlzW3R5cGVdO1xuXG4gIGlmICghY2FsbGJhY2tzKSB7XG4gICAgY2FsbGJhY2tzID0gcHJpdmF0ZVRoaXNbdHlwZV0gPSBbY2FsbGJhY2tdO1xuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGlmIChjYWxsYmFjayA9PT0gY2FsbGJhY2tzW2ldKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsYmFja3MubGVuZ3RoO1xufTtcblxudmFyIF9kaXNwYXRjaENhbGxiYWNrID0gZnVuY3Rpb24gX2Rpc3BhdGNoQ2FsbGJhY2sodGFyZ2V0LCB0eXBlKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcblxuICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGFyZ2V0KTtcblxuICBpZiAocHJpdmF0ZVRoaXMpIHtcbiAgICB2YXIgY2FsbGJhY2tzID0gcHJpdmF0ZVRoaXNbdHlwZV0gfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGFyZ2V0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIElubmVyQXVkaW9Db250ZXh0KCkge1xuICB0aGlzLnN0YXJ0VGltZSA9IDA7XG4gIHRoaXMuYXV0b3BsYXkgPSBmYWxzZTtcblxuICBfd2Vha01hcC5zZXQodGhpcywge1xuICAgIHNyYzogXCJcIixcbiAgICB2b2x1bWU6IDEsXG4gICAgbG9vcDogZmFsc2VcbiAgfSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwibG9vcFwiLCB7XG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gISF2YWx1ZTtcblxuICAgICAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRoaXMpO1xuXG4gICAgICBpZiAocHJpdmF0ZVRoaXMpIHtcbiAgICAgICAgdmFyIGF1ZGlvSUQgPSBwcml2YXRlVGhpcy5hdWRpb0lEO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYXVkaW9JRCA9PT0gXCJudW1iZXJcIiAmJiBhdWRpb0lEID49IDApIHtcbiAgICAgICAgICBfYXVkaW9FbmdpbmUuc2V0TG9vcChhdWRpb0lELCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlVGhpcy5sb29wID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcblxuICAgICAgcmV0dXJuIHByaXZhdGVUaGlzID8gcHJpdmF0ZVRoaXMubG9vcCA6IGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInZvbHVtZVwiLCB7XG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IDEpIHtcbiAgICAgICAgICB2YWx1ZSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gMTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRoaXMpO1xuXG4gICAgICBpZiAocHJpdmF0ZVRoaXMpIHtcbiAgICAgICAgdmFyIGF1ZGlvSUQgPSBwcml2YXRlVGhpcy5hdWRpb0lEO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYXVkaW9JRCA9PT0gXCJudW1iZXJcIiAmJiBhdWRpb0lEID49IDApIHtcbiAgICAgICAgICBfYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGF1ZGlvSUQsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGVUaGlzLnZvbHVtZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG5cbiAgICAgIHJldHVybiBwcml2YXRlVGhpcyA/IHByaXZhdGVUaGlzLnZvbHVtZSA6IDE7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwic3JjXCIsIHtcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRoaXMpO1xuXG4gICAgICBpZiAoIXByaXZhdGVUaGlzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9sZFNyYyA9IHByaXZhdGVUaGlzLnNyYztcbiAgICAgIHByaXZhdGVUaGlzLnNyYyA9IHZhbHVlO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHZhciBhdWRpb0lEID0gcHJpdmF0ZVRoaXMuYXVkaW9JRDtcblxuICAgICAgICBpZiAodHlwZW9mIGF1ZGlvSUQgPT09IFwibnVtYmVyXCIgJiYgYXVkaW9JRCA+PSAwICYmIF9hdWRpb0VuZ2luZS5nZXRTdGF0ZShhdWRpb0lEKSA9PT0gX1NUQVRFLlBBVVNFRCAmJiBvbGRTcmMgIT09IHZhbHVlKSB7XG4gICAgICAgICAgX2F1ZGlvRW5naW5lLnN0b3AoYXVkaW9JRCk7XG5cbiAgICAgICAgICBwcml2YXRlVGhpcy5hdWRpb0lEID0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hdXRvcGxheSkge1xuICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcblxuICAgICAgcmV0dXJuIHByaXZhdGVUaGlzID8gcHJpdmF0ZVRoaXMuc3JjIDogXCJcIjtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJkdXJhdGlvblwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG5cbiAgICAgIGlmIChwcml2YXRlVGhpcykge1xuICAgICAgICB2YXIgYXVkaW9JRCA9IHByaXZhdGVUaGlzLmF1ZGlvSUQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhdWRpb0lEID09PSBcIm51bWJlclwiICYmIGF1ZGlvSUQgPj0gMCkge1xuICAgICAgICAgIHJldHVybiBfYXVkaW9FbmdpbmUuZ2V0RHVyYXRpb24oYXVkaW9JRCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE5hTjtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KCkge31cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImN1cnJlbnRUaW1lXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcblxuICAgICAgaWYgKHByaXZhdGVUaGlzKSB7XG4gICAgICAgIHZhciBhdWRpb0lEID0gcHJpdmF0ZVRoaXMuYXVkaW9JRDtcblxuICAgICAgICBpZiAodHlwZW9mIGF1ZGlvSUQgPT09IFwibnVtYmVyXCIgJiYgYXVkaW9JRCA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIF9hdWRpb0VuZ2luZS5nZXRDdXJyZW50VGltZShhdWRpb0lEKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KCkge31cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBhdXNlZFwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG5cbiAgICAgIGlmIChwcml2YXRlVGhpcykge1xuICAgICAgICB2YXIgYXVkaW9JRCA9IHByaXZhdGVUaGlzLmF1ZGlvSUQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhdWRpb0lEID09PSBcIm51bWJlclwiICYmIGF1ZGlvSUQgPj0gMCkge1xuICAgICAgICAgIHJldHVybiBfYXVkaW9FbmdpbmUuZ2V0U3RhdGUoYXVkaW9JRCkgPT09IF9TVEFURS5QQVVTRUQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCgpIHt9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJidWZmZXJlZFwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG5cbiAgICAgIGlmIChwcml2YXRlVGhpcykge1xuICAgICAgICB2YXIgYXVkaW9JRCA9IHByaXZhdGVUaGlzLmF1ZGlvSUQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhdWRpb0lEID09PSBcIm51bWJlclwiICYmIGF1ZGlvSUQgPj0gMCkge1xuICAgICAgICAgIHJldHVybiBfYXVkaW9FbmdpbmUuZ2V0QnVmZmVyZWQoYXVkaW9JRCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCgpIHt9XG4gIH0pO1xufVxuXG52YXIgX3Byb3RvdHlwZSA9IElubmVyQXVkaW9Db250ZXh0LnByb3RvdHlwZTtcblxuX3Byb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJpdmF0ZVRoaXMgPSBfd2Vha01hcC5nZXQodGhpcyk7XG5cbiAgaWYgKHByaXZhdGVUaGlzKSB7XG4gICAgdmFyIGF1ZGlvSUQgPSBwcml2YXRlVGhpcy5hdWRpb0lEO1xuXG4gICAgaWYgKHR5cGVvZiBhdWRpb0lEID09PSBcIm51bWJlclwiICYmIGF1ZGlvSUQgPj0gMCkge1xuICAgICAgX2F1ZGlvRW5naW5lLnN0b3AoYXVkaW9JRCk7XG5cbiAgICAgIHByaXZhdGVUaGlzLmF1ZGlvSUQgPSAtMTtcblxuICAgICAgX2Rpc3BhdGNoQ2FsbGJhY2sodGhpcywgX1NUT1BfQ0FMTEJBQ0spO1xuICAgIH1cblxuICAgIHByaXZhdGVUaGlzW19DQU5QTEFZX0NBTExCQUNLXSA9IFtdO1xuICAgIHByaXZhdGVUaGlzW19FTkRFRF9DQUxMQkFDS10gPSBbXTtcbiAgICBwcml2YXRlVGhpc1tfRVJST1JfQ0FMTEJBQ0tdID0gW107XG4gICAgcHJpdmF0ZVRoaXNbX1BBVVNFX0NBTExCQUNLXSA9IFtdO1xuICAgIHByaXZhdGVUaGlzW19QTEFZX0NBTExCQUNLXSA9IFtdO1xuICAgIHByaXZhdGVUaGlzW19TRUVLRURfQ0FMTEJBQ0tdID0gW107XG4gICAgcHJpdmF0ZVRoaXNbX1NFRUtJTkdfQ0FMTEJBQ0tdID0gW107XG4gICAgcHJpdmF0ZVRoaXNbX1NUT1BfQ0FMTEJBQ0tdID0gW107XG4gICAgcHJpdmF0ZVRoaXNbX1RJTUVfVVBEQVRFX0NBTExCQUNLXSA9IFtdO1xuICAgIHByaXZhdGVUaGlzW19XQUlUSU5HX0NBTExCQUNLXSA9IFtdO1xuICAgIGNsZWFySW50ZXJ2YWwocHJpdmF0ZVRoaXMuaW50ZXJ2YWxJRCk7XG4gIH1cbn07XG5cbl9wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRoaXMpO1xuXG4gIGlmICghcHJpdmF0ZVRoaXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc3JjID0gcHJpdmF0ZVRoaXMuc3JjO1xuICB2YXIgYXVkaW9JRCA9IHByaXZhdGVUaGlzLmF1ZGlvSUQ7XG5cbiAgaWYgKHR5cGVvZiBzcmMgIT09IFwic3RyaW5nXCIgfHwgc3JjID09PSBcIlwiKSB7XG4gICAgX2Rpc3BhdGNoQ2FsbGJhY2sodGhpcywgX0VSUk9SX0NBTExCQUNLLCBbe1xuICAgICAgZXJyTXNnOiBcImludmFsaWQgc3JjXCIsXG4gICAgICBlcnJDb2RlOiBfRVJST1JfQ09ERS5FUlJPUl9GSUxFXG4gICAgfV0pO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhdWRpb0lEID09PSBcIm51bWJlclwiICYmIGF1ZGlvSUQgPj0gMCkge1xuICAgIGlmIChfYXVkaW9FbmdpbmUuZ2V0U3RhdGUoYXVkaW9JRCkgPT09IF9TVEFURS5QQVVTRUQpIHtcbiAgICAgIF9hdWRpb0VuZ2luZS5yZXN1bWUoYXVkaW9JRCk7XG5cbiAgICAgIF9kaXNwYXRjaENhbGxiYWNrKHRoaXMsIF9QTEFZX0NBTExCQUNLKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBfYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lEKTtcblxuICAgICAgcHJpdmF0ZVRoaXMuYXVkaW9JRCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGF1ZGlvSUQgPSBfYXVkaW9FbmdpbmUucGxheShzcmMsIHRoaXMubG9vcCwgdGhpcy52b2x1bWUpO1xuXG4gIGlmIChhdWRpb0lEID09PSAtMSkge1xuICAgIF9kaXNwYXRjaENhbGxiYWNrKHRoaXMsIF9FUlJPUl9DQUxMQkFDSywgW3tcbiAgICAgIGVyck1zZzogXCJ1bmtub3duXCIsXG4gICAgICBlcnJDb2RlOiBfRVJST1JfQ09ERS5FUlJPUl9VTktOT1dOXG4gICAgfV0pO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJpdmF0ZVRoaXMuYXVkaW9JRCA9IGF1ZGlvSUQ7XG5cbiAgaWYgKHR5cGVvZiB0aGlzLnN0YXJ0VGltZSA9PT0gXCJudW1iZXJcIiAmJiB0aGlzLnN0YXJ0VGltZSA+IDApIHtcbiAgICBfYXVkaW9FbmdpbmUuc2V0Q3VycmVudFRpbWUoYXVkaW9JRCwgdGhpcy5zdGFydFRpbWUpO1xuICB9XG5cbiAgX2Rpc3BhdGNoQ2FsbGJhY2sodGhpcywgX1dBSVRJTkdfQ0FMTEJBQ0spO1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICBfYXVkaW9FbmdpbmUuc2V0Q2FuUGxheUNhbGxiYWNrKGF1ZGlvSUQsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3JjID09PSBzZWxmLnNyYykge1xuICAgICAgX2Rpc3BhdGNoQ2FsbGJhY2soc2VsZiwgX0NBTlBMQVlfQ0FMTEJBQ0spO1xuXG4gICAgICBfZGlzcGF0Y2hDYWxsYmFjayhzZWxmLCBfUExBWV9DQUxMQkFDSyk7XG4gICAgfVxuICB9KTtcblxuICBfYXVkaW9FbmdpbmUuc2V0V2FpdGluZ0NhbGxiYWNrKGF1ZGlvSUQsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3JjID09PSBzZWxmLnNyYykge1xuICAgICAgX2Rpc3BhdGNoQ2FsbGJhY2soc2VsZiwgX1dBSVRJTkdfQ0FMTEJBQ0spO1xuICAgIH1cbiAgfSk7XG5cbiAgX2F1ZGlvRW5naW5lLnNldEVycm9yQ2FsbGJhY2soYXVkaW9JRCwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChzcmMgPT09IHNlbGYuc3JjKSB7XG4gICAgICBwcml2YXRlVGhpcy5hdWRpb0lEID0gLTE7XG5cbiAgICAgIF9kaXNwYXRjaENhbGxiYWNrKHNlbGYsIF9FUlJPUl9DQUxMQkFDSyk7XG4gICAgfVxuICB9KTtcblxuICBfYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JRCwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChzcmMgPT09IHNlbGYuc3JjKSB7XG4gICAgICBwcml2YXRlVGhpcy5hdWRpb0lEID0gLTE7XG5cbiAgICAgIF9kaXNwYXRjaENhbGxiYWNrKHNlbGYsIF9FTkRFRF9DQUxMQkFDSyk7XG4gICAgfVxuICB9KTtcbn07XG5cbl9wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcblxuICBpZiAocHJpdmF0ZVRoaXMpIHtcbiAgICB2YXIgYXVkaW9JRCA9IHByaXZhdGVUaGlzLmF1ZGlvSUQ7XG5cbiAgICBpZiAodHlwZW9mIGF1ZGlvSUQgPT09IFwibnVtYmVyXCIgJiYgYXVkaW9JRCA+PSAwKSB7XG4gICAgICBfYXVkaW9FbmdpbmUucGF1c2UoYXVkaW9JRCk7XG5cbiAgICAgIF9kaXNwYXRjaENhbGxiYWNrKHRoaXMsIF9QQVVTRV9DQUxMQkFDSyk7XG4gICAgfVxuICB9XG59O1xuXG5fcHJvdG90eXBlLnNlZWsgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgdmFyIHByaXZhdGVUaGlzID0gX3dlYWtNYXAuZ2V0KHRoaXMpO1xuXG4gIGlmIChwcml2YXRlVGhpcyAmJiB0eXBlb2YgcG9zaXRpb24gPT09IFwibnVtYmVyXCIgJiYgcG9zaXRpb24gPj0gMCkge1xuICAgIHZhciBhdWRpb0lEID0gcHJpdmF0ZVRoaXMuYXVkaW9JRDtcblxuICAgIGlmICh0eXBlb2YgYXVkaW9JRCA9PT0gXCJudW1iZXJcIiAmJiBhdWRpb0lEID49IDApIHtcbiAgICAgIF9hdWRpb0VuZ2luZS5zZXRDdXJyZW50VGltZShhdWRpb0lELCBwb3NpdGlvbik7XG5cbiAgICAgIF9kaXNwYXRjaENhbGxiYWNrKHRoaXMsIF9TRUVLSU5HX0NBTExCQUNLKTtcblxuICAgICAgX2Rpc3BhdGNoQ2FsbGJhY2sodGhpcywgX1NFRUtFRF9DQUxMQkFDSyk7XG4gICAgfVxuICB9XG59O1xuXG5fcHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcblxuICBpZiAocHJpdmF0ZVRoaXMpIHtcbiAgICB2YXIgYXVkaW9JRCA9IHByaXZhdGVUaGlzLmF1ZGlvSUQ7XG5cbiAgICBpZiAodHlwZW9mIGF1ZGlvSUQgPT09IFwibnVtYmVyXCIgJiYgYXVkaW9JRCA+PSAwKSB7XG4gICAgICBfYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lEKTtcblxuICAgICAgcHJpdmF0ZVRoaXMuYXVkaW9JRCA9IC0xO1xuXG4gICAgICBfZGlzcGF0Y2hDYWxsYmFjayh0aGlzLCBfU1RPUF9DQUxMQkFDSyk7XG4gICAgfVxuICB9XG59O1xuXG5fcHJvdG90eXBlLm9mZkNhbnBsYXkgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgX29mZkNhbGxiYWNrKHRoaXMsIF9DQU5QTEFZX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuXG5fcHJvdG90eXBlLm9mZkVuZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vZmZDYWxsYmFjayh0aGlzLCBfRU5ERURfQ0FMTEJBQ0ssIGNhbGxiYWNrKTtcbn07XG5cbl9wcm90b3R5cGUub2ZmRXJyb3IgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgX29mZkNhbGxiYWNrKHRoaXMsIF9FUlJPUl9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcblxuX3Byb3RvdHlwZS5vZmZQYXVzZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb2ZmQ2FsbGJhY2sodGhpcywgX1BBVVNFX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuXG5fcHJvdG90eXBlLm9mZlBsYXkgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgX29mZkNhbGxiYWNrKHRoaXMsIF9QTEFZX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuXG5fcHJvdG90eXBlLm9mZlNlZWtlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb2ZmQ2FsbGJhY2sodGhpcywgX1NFRUtFRF9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcblxuX3Byb3RvdHlwZS5vZmZTZWVraW5nID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vZmZDYWxsYmFjayh0aGlzLCBfU0VFS0lOR19DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcblxuX3Byb3RvdHlwZS5vZmZTdG9wID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vZmZDYWxsYmFjayh0aGlzLCBfU1RPUF9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcblxuX3Byb3RvdHlwZS5vZmZUaW1lVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBfb2ZmQ2FsbGJhY2sodGhpcywgX1RJTUVfVVBEQVRFX0NBTExCQUNLLCBjYWxsYmFjayk7XG5cbiAgaWYgKHJlc3VsdCA9PT0gMSkge1xuICAgIGNsZWFySW50ZXJ2YWwoX3dlYWtNYXAuZ2V0KHRoaXMpLmludGVydmFsSUQpO1xuICB9XG59O1xuXG5fcHJvdG90eXBlLm9mZldhaXRpbmcgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgX29mZkNhbGxiYWNrKHRoaXMsIF9XQUlUSU5HX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuXG5fcHJvdG90eXBlLm9uQ2FucGxheSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBfb25DYWxsYmFjayh0aGlzLCBfQ0FOUExBWV9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcblxuX3Byb3RvdHlwZS5vbkVuZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vbkNhbGxiYWNrKHRoaXMsIF9FTkRFRF9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcblxuX3Byb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vbkNhbGxiYWNrKHRoaXMsIF9FUlJPUl9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcblxuX3Byb3RvdHlwZS5vblBhdXNlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vbkNhbGxiYWNrKHRoaXMsIF9QQVVTRV9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcblxuX3Byb3RvdHlwZS5vblBsYXkgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgX29uQ2FsbGJhY2sodGhpcywgX1BMQVlfQ0FMTEJBQ0ssIGNhbGxiYWNrKTtcbn07XG5cbl9wcm90b3R5cGUub25TZWVrZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgX29uQ2FsbGJhY2sodGhpcywgX1NFRUtFRF9DQUxMQkFDSywgY2FsbGJhY2spO1xufTtcblxuX3Byb3RvdHlwZS5vblNlZWtpbmcgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgX29uQ2FsbGJhY2sodGhpcywgXCJzZWVraW5nQ2FsbGJhY2tzXCIsIGNhbGxiYWNrKTtcbn07XG5cbl9wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vbkNhbGxiYWNrKHRoaXMsIF9TVE9QX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuXG5fcHJvdG90eXBlLm9uVGltZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0ID0gX29uQ2FsbGJhY2sodGhpcywgX1RJTUVfVVBEQVRFX0NBTExCQUNLLCBjYWxsYmFjayk7XG5cbiAgaWYgKHJlc3VsdCA9PT0gMSkge1xuICAgIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldCh0aGlzKTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF93ZWFrTWFwLmdldChzZWxmKTtcblxuICAgICAgaWYgKHByaXZhdGVUaGlzKSB7XG4gICAgICAgIHZhciBhdWRpb0lEID0gcHJpdmF0ZVRoaXMuYXVkaW9JRDtcblxuICAgICAgICBpZiAodHlwZW9mIGF1ZGlvSUQgPT09IFwibnVtYmVyXCIgJiYgYXVkaW9JRCA+PSAwICYmIF9hdWRpb0VuZ2luZS5nZXRTdGF0ZShhdWRpb0lEKSA9PT0gX1NUQVRFLlBMQVlJTkcpIHtcbiAgICAgICAgICBfZGlzcGF0Y2hDYWxsYmFjayhzZWxmLCBfVElNRV9VUERBVEVfQ0FMTEJBQ0spO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgfVxuICAgIH0sIDUwMCk7XG4gICAgcHJpdmF0ZVRoaXMuaW50ZXJ2YWxJRCA9IGludGVydmFsSUQ7XG4gIH1cbn07XG5cbl9wcm90b3R5cGUub25XYWl0aW5nID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIF9vbkNhbGxiYWNrKHRoaXMsIF9XQUlUSU5HX0NBTExCQUNLLCBjYWxsYmFjayk7XG59O1xuXG5mdW5jdGlvbiBfZGVmYXVsdChBdWRpb0VuZ2luZSkge1xuICBpZiAoX2F1ZGlvRW5naW5lID09PSB1bmRlZmluZWQpIHtcbiAgICBfYXVkaW9FbmdpbmUgPSBPYmplY3QuYXNzaWduKHt9LCBBdWRpb0VuZ2luZSk7XG4gICAgT2JqZWN0LmtleXMoQXVkaW9FbmdpbmUpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgQXVkaW9FbmdpbmVbbmFtZV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBBdWRpb0VuZ2luZVtuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJBdWRpb0VuZ2luZS5cIiArIG5hbWUgKyBcIiBpcyBkZXByZWNhdGVkXCIpO1xuICAgICAgICAgIHJldHVybiBfYXVkaW9FbmdpbmVbbmFtZV0uYXBwbHkoQXVkaW9FbmdpbmUsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3IElubmVyQXVkaW9Db250ZXh0KCk7XG59XG5cbjtcblxufSx7fV0sMTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGV4cG9ydFRvOiBmdW5jdGlvbiBleHBvcnRUbyhuYW1lLCBmcm9tLCB0bywgZXJyQ2FsbGJhY2spIHtcbiAgICBpZiAoX3R5cGVvZihmcm9tKSAhPT0gXCJvYmplY3RcIiB8fCBfdHlwZW9mKHRvKSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgY29uc29sZS53YXJuKFwiaW52YWxpZCBleHBvcnRUbzogXCIsIG5hbWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBmcm9tUHJvcGVydHkgPSBmcm9tW25hbWVdO1xuXG4gICAgaWYgKGZyb21Qcm9wZXJ0eSkge1xuICAgICAgaWYgKHR5cGVvZiBmcm9tUHJvcGVydHkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0b1tuYW1lXSA9IGZyb21Qcm9wZXJ0eS5iaW5kKGZyb20pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9bbmFtZV0gPSBmcm9tUHJvcGVydHk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKG5hbWUgKyBcIiBpcyBub3Qgc3VwcG9ydCFcIik7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlb2YgZXJyQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBlcnJDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se31dfSx7fSxbOF0pO1xuIl0sImZpbGUiOiJjb2Nvcy1ydW50aW1lLmpzIn0=
