(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

!function () {
  function e(e) {
    this.message = e;
  }

  var t = "undefined" != typeof exports ? exports : "undefined" != typeof self ? self : $.global,
      r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  e.prototype = new Error(), e.prototype.name = "InvalidCharacterError", t.btoa || (t.btoa = function (t) {
    for (var o, n, a = String(t), i = 0, f = r, c = ""; a.charAt(0 | i) || (f = "=", i % 1); c += f.charAt(63 & o >> 8 - i % 1 * 8)) {
      if (n = a.charCodeAt(i += .75), n > 255) throw new e("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
      o = o << 8 | n;
    }

    return c;
  }), t.atob || (t.atob = function (t) {
    var o = String(t).replace(/[=]+$/, "");
    if (o.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");

    for (var n, a, i = 0, f = 0, c = ""; a = o.charAt(f++); ~a && (n = i % 4 ? 64 * n + a : a, i++ % 4) ? c += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) {
      a = r.indexOf(a);
    }

    return c;
  });
}();

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (n) {
  "use strict";

  function t(n, t) {
    var r = (65535 & n) + (65535 & t);
    return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
  }

  function r(n, t) {
    return n << t | n >>> 32 - t;
  }

  function e(n, e, o, u, c, f) {
    return t(r(t(t(e, n), t(u, f)), c), o);
  }

  function o(n, t, r, o, u, c, f) {
    return e(t & r | ~t & o, n, t, u, c, f);
  }

  function u(n, t, r, o, u, c, f) {
    return e(t & o | r & ~o, n, t, u, c, f);
  }

  function c(n, t, r, o, u, c, f) {
    return e(t ^ r ^ o, n, t, u, c, f);
  }

  function f(n, t, r, o, u, c, f) {
    return e(r ^ (t | ~o), n, t, u, c, f);
  }

  function i(n, r) {
    n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r;
    var e,
        i,
        a,
        d,
        h,
        l = 1732584193,
        g = -271733879,
        v = -1732584194,
        m = 271733878;

    for (e = 0; e < n.length; e += 16) {
      i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h);
    }

    return [l, g, v, m];
  }

  function a(n) {
    var t,
        r = "",
        e = 32 * n.length;

    for (t = 0; t < e; t += 8) {
      r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
    }

    return r;
  }

  function d(n) {
    var t,
        r = [];

    for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) {
      r[t] = 0;
    }

    var e = 8 * n.length;

    for (t = 0; t < e; t += 8) {
      r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
    }

    return r;
  }

  function h(n) {
    return a(i(d(n), 8 * n.length));
  }

  function l(n, t) {
    var r,
        e,
        o = d(n),
        u = [],
        c = [];

    for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1) {
      u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r];
    }

    return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640));
  }

  function g(n) {
    var t,
        r,
        e = "";

    for (r = 0; r < n.length; r += 1) {
      t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
    }

    return e;
  }

  function v(n) {
    return unescape(encodeURIComponent(n));
  }

  function m(n) {
    return h(v(n));
  }

  function p(n) {
    return g(m(n));
  }

  function s(n, t) {
    return l(v(n), v(t));
  }

  function C(n, t) {
    return g(s(n, t));
  }

  function A(n, t, r) {
    return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n);
  }

  "function" == typeof define && define.amd ? define(function () {
    return A;
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = A : n.md5 = A;
}(void 0);

},{}],3:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HTMLAudioElement2 = _interopRequireDefault(require("./HTMLAudioElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Audio = function (_HTMLAudioElement) {
  _inherits(Audio, _HTMLAudioElement);

  var _super = _createSuper(Audio);

  function Audio(url) {
    _classCallCheck(this, Audio);

    return _super.call(this, url);
  }

  return Audio;
}(_HTMLAudioElement2["default"]);

exports["default"] = Audio;

},{"./HTMLAudioElement":15}],4:[function(require,module,exports){
(function (global){(function (){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global) {
  (function (factory) {
    if (typeof define === "function" && define.amd) {
      define(["exports"], factory);
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof exports.nodeName !== "string") {
      factory(exports);
    } else {
      factory(global);
    }
  })(function (exports) {
    "use strict";

    exports.URL = global.URL || global.webkitURL;

    if (global.Blob && global.URL) {
      try {
        new Blob();
        return;
      } catch (e) {}
    }

    var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MozBlobBuilder || function () {
      var get_class = function get_class(object) {
        return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
      },
          FakeBlobBuilder = function BlobBuilder() {
        this.data = [];
      },
          FakeBlob = function Blob(data, type, encoding) {
        this.data = data;
        this.size = data.length;
        this.type = type;
        this.encoding = encoding;
      },
          FBB_proto = FakeBlobBuilder.prototype,
          FB_proto = FakeBlob.prototype,
          FileReaderSync = global.FileReaderSync,
          FileException = function FileException(type) {
        this.code = this[this.name = type];
      },
          file_ex_codes = ("NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR " + "NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR").split(" "),
          file_ex_code = file_ex_codes.length,
          real_URL = global.URL || global.webkitURL || exports,
          real_create_object_URL = real_URL.createObjectURL,
          real_revoke_object_URL = real_URL.revokeObjectURL,
          URL = real_URL,
          btoa = global.btoa,
          atob = global.atob,
          ArrayBuffer = global.ArrayBuffer,
          Uint8Array = global.Uint8Array,
          origin = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;

      FakeBlob.fake = FB_proto.fake = true;

      while (file_ex_code--) {
        FileException.prototype[file_ex_codes[file_ex_code]] = file_ex_code + 1;
      }

      if (!real_URL.createObjectURL) {
        URL = exports.URL = function (uri) {
          var uri_info = document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              uri_origin;
          uri_info.href = uri;

          if (!("origin" in uri_info)) {
            if (uri_info.protocol.toLowerCase() === "data:") {
              uri_info.origin = null;
            } else {
              uri_origin = uri.match(origin);
              uri_info.origin = uri_origin && uri_origin[1];
            }
          }

          return uri_info;
        };
      }

      URL.createObjectURL = function (blob) {
        var type = blob.type,
            data_URI_header;

        if (type === null) {
          type = "application/octet-stream";
        }

        if (blob instanceof FakeBlob) {
          data_URI_header = "data:" + type;

          if (blob.encoding === "base64") {
            return data_URI_header + ";base64," + blob.data;
          } else if (blob.encoding === "URI") {
            return data_URI_header + "," + decodeURIComponent(blob.data);
          }

          if (btoa) {
            return data_URI_header + ";base64," + btoa(blob.data);
          } else {
            return data_URI_header + "," + encodeURIComponent(blob.data);
          }
        } else if (real_create_object_URL) {
          return real_create_object_URL.call(real_URL, blob);
        }
      };

      URL.revokeObjectURL = function (object_URL) {
        if (object_URL.substring(0, 5) !== "data:" && real_revoke_object_URL) {
          real_revoke_object_URL.call(real_URL, object_URL);
        }
      };

      FBB_proto.append = function (data) {
        var bb = this.data;

        if (Uint8Array && (data instanceof ArrayBuffer || data instanceof Uint8Array)) {
          var str = "",
              buf = new Uint8Array(data),
              i = 0,
              buf_len = buf.length;

          for (; i < buf_len; i++) {
            str += String.fromCharCode(buf[i]);
          }

          bb.push(str);
        } else if (get_class(data) === "Blob" || get_class(data) === "File") {
          if (FileReaderSync) {
            var fr = new FileReaderSync();
            bb.push(fr.readAsBinaryString(data));
          } else {
            throw new FileException("NOT_READABLE_ERR");
          }
        } else if (data instanceof FakeBlob) {
          if (data.encoding === "base64" && atob) {
            bb.push(atob(data.data));
          } else if (data.encoding === "URI") {
            bb.push(decodeURIComponent(data.data));
          } else if (data.encoding === "raw") {
            bb.push(data.data);
          }
        } else {
          if (typeof data !== "string") {
            data += "";
          }

          bb.push(unescape(encodeURIComponent(data)));
        }
      };

      FBB_proto.getBlob = function (type) {
        if (!arguments.length) {
          type = null;
        }

        return new FakeBlob(this.data.join(""), type, "raw");
      };

      FBB_proto.toString = function () {
        return "[object BlobBuilder]";
      };

      FB_proto.slice = function (start, end, type) {
        var args = arguments.length;

        if (args < 3) {
          type = null;
        }

        return new FakeBlob(this.data.slice(start, args > 1 ? end : this.data.length), type, this.encoding);
      };

      FB_proto.toString = function () {
        return "[object Blob]";
      };

      FB_proto.close = function () {
        this.size = 0;
        delete this.data;
      };

      return FakeBlobBuilder;
    }();

    exports.Blob = function (blobParts, options) {
      var type = options ? options.type || "" : "";
      var builder = new BlobBuilder();

      if (blobParts) {
        for (var i = 0, len = blobParts.length; i < len; i++) {
          if (Uint8Array && blobParts[i] instanceof Uint8Array) {
            builder.append(blobParts[i].buffer);
          } else {
            builder.append(blobParts[i]);
          }
        }
      }

      var blob = builder.getBlob(type);

      if (!blob.slice && blob.webkitSlice) {
        blob.slice = blob.webkitSlice;
      }

      return blob;
    };

    var getPrototypeOf = Object.getPrototypeOf || function (object) {
      return object.__proto__;
    };

    exports.Blob.prototype = getPrototypeOf(new exports.Blob());
  });
})(typeof self !== "undefined" && self || typeof window !== "undefined" && window || typeof global !== "undefined" && global || (void 0).content || void 0);

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOMRect = function DOMRect(x, y, width, height) {
  _classCallCheck(this, DOMRect);

  this.x = x ? x : 0;
  this.y = y ? y : 0;
  this.width = width ? width : 0;
  this.height = height ? height : 0;
  this.left = this.x;
  this.top = this.y;
  this.right = this.x + this.width;
  this.bottom = this.y + this.height;
};

module.exports = DOMRect;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DOMTokenList = function () {
  function DOMTokenList() {
    _classCallCheck(this, DOMTokenList);

    this.length = 0;
  }

  _createClass(DOMTokenList, [{
    key: "add",
    value: function add() {
      console.warn("DOMTokenList add isn't implemented!");
    }
  }, {
    key: "contains",
    value: function contains() {
      console.warn("DOMTokenList contains isn't implemented!");
    }
  }, {
    key: "entries",
    value: function entries() {
      console.warn("DOMTokenList entries isn't implemented!");
    }
  }, {
    key: "forEach",
    value: function forEach() {
      console.warn("DOMTokenList forEach isn't implemented!");
    }
  }, {
    key: "item",
    value: function item() {
      console.warn("DOMTokenList item isn't implemented!");
    }
  }, {
    key: "keys",
    value: function keys() {
      console.warn("DOMTokenList keys isn't implemented!");
    }
  }, {
    key: "remove",
    value: function remove() {
      console.warn("DOMTokenList remove isn't implemented!");
    }
  }, {
    key: "replace",
    value: function replace() {
      console.warn("DOMTokenList replace isn't implemented!");
    }
  }, {
    key: "supports",
    value: function supports() {
      console.warn("DOMTokenList supports isn't implemented!");
    }
  }, {
    key: "toggle",
    value: function toggle() {}
  }, {
    key: "value",
    value: function value() {
      console.warn("DOMTokenList value isn't implemented!");
    }
  }, {
    key: "values",
    value: function values() {
      console.warn("DOMTokenList values isn't implemented!");
    }
  }]);

  return DOMTokenList;
}();

exports["default"] = DOMTokenList;

},{}],7:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Event2 = _interopRequireDefault(require("./Event"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DeviceMotionEvent = function (_Event) {
  _inherits(DeviceMotionEvent, _Event);

  var _super = _createSuper(DeviceMotionEvent);

  function DeviceMotionEvent(initArgs) {
    var _this;

    _classCallCheck(this, DeviceMotionEvent);

    _this = _super.call(this, 'devicemotion');

    if (initArgs) {
      _this._acceleration = initArgs.acceleration ? initArgs.acceleration : {
        x: 0,
        y: 0,
        z: 0
      };
      _this._accelerationIncludingGravity = initArgs.accelerationIncludingGravity ? initArgs.accelerationIncludingGravity : {
        x: 0,
        y: 0,
        z: 0
      };
      _this._rotationRate = initArgs.rotationRate ? initArgs.rotationRate : {
        alpha: 0,
        beta: 0,
        gamma: 0
      };
      _this._interval = initArgs.interval;
    } else {
      _this._acceleration = {
        x: 0,
        y: 0,
        z: 0
      };
      _this._accelerationIncludingGravity = {
        x: 0,
        y: 0,
        z: 0
      };
      _this._rotationRate = {
        alpha: 0,
        beta: 0,
        gamma: 0
      };
      _this._interval = 0;
    }

    return _this;
  }

  _createClass(DeviceMotionEvent, [{
    key: "acceleration",
    get: function get() {
      return this._acceleration;
    }
  }, {
    key: "accelerationIncludingGravity",
    get: function get() {
      return this._accelerationIncludingGravity;
    }
  }, {
    key: "rotationRate",
    get: function get() {
      return this._rotationRate;
    }
  }, {
    key: "interval",
    get: function get() {
      return this._interval;
    }
  }]);

  return DeviceMotionEvent;
}(_Event2["default"]);

exports["default"] = DeviceMotionEvent;

},{"./Event":10}],8:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Audio = _interopRequireDefault(require("./Audio"));

var _FontFaceSet = _interopRequireDefault(require("./FontFaceSet"));

var _Node2 = _interopRequireDefault(require("./Node"));

var _NodeList = _interopRequireDefault(require("./NodeList"));

var _HTMLAnchorElement = _interopRequireDefault(require("./HTMLAnchorElement"));

var _HTMLElement = _interopRequireDefault(require("./HTMLElement"));

var _HTMLHtmlElement = _interopRequireDefault(require("./HTMLHtmlElement"));

var _HTMLBodyElement = _interopRequireDefault(require("./HTMLBodyElement"));

var _HTMLHeadElement = _interopRequireDefault(require("./HTMLHeadElement"));

var _HTMLCanvasElement = _interopRequireDefault(require("./HTMLCanvasElement"));

var _HTMLVideoElement = _interopRequireDefault(require("./HTMLVideoElement"));

var _HTMLScriptElement = _interopRequireDefault(require("./HTMLScriptElement"));

var _HTMLStyleElement = _interopRequireDefault(require("./HTMLStyleElement"));

var _HTMLInputElement = _interopRequireDefault(require("./HTMLInputElement"));

var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _html = new _HTMLHtmlElement["default"]();

var Document = function (_Node) {
  _inherits(Document, _Node);

  var _super = _createSuper(Document);

  _createClass(Document, [{
    key: "characterSet",
    get: function get() {
      return "UTF-8";
    }
  }, {
    key: "scripts",
    get: function get() {
      return _WeakMap["default"].get(this).scripts.slice(0);
    }
  }]);

  function Document() {
    var _this;

    _classCallCheck(this, Document);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "head", new _HTMLHeadElement["default"](_html));

    _defineProperty(_assertThisInitialized(_this), "body", new _HTMLBodyElement["default"](_html));

    _defineProperty(_assertThisInitialized(_this), "fonts", new _FontFaceSet["default"]());

    _defineProperty(_assertThisInitialized(_this), "cookie", "");

    _defineProperty(_assertThisInitialized(_this), "documentElement", _html);

    _defineProperty(_assertThisInitialized(_this), "readyState", "complete");

    _defineProperty(_assertThisInitialized(_this), "visibilityState", "visible");

    _defineProperty(_assertThisInitialized(_this), "hidden", false);

    _defineProperty(_assertThisInitialized(_this), "style", {});

    _defineProperty(_assertThisInitialized(_this), "location", window.location);

    _defineProperty(_assertThisInitialized(_this), "ontouchstart", null);

    _defineProperty(_assertThisInitialized(_this), "ontouchmove", null);

    _defineProperty(_assertThisInitialized(_this), "ontouchend", null);

    _html.appendChild(_this.head);

    _html.appendChild(_this.body);

    _WeakMap["default"].get(_assertThisInitialized(_this)).scripts = [];
    return _this;
  }

  _createClass(Document, [{
    key: "createElement",
    value: function createElement(tagName) {
      if (typeof tagName !== "string") {
        return null;
      }

      tagName = tagName.toUpperCase();

      if (tagName === 'CANVAS') {
        return new _HTMLCanvasElement["default"]();
      } else if (tagName === 'IMG') {
        return new Image();
      } else if (tagName === 'VIDEO') {
        return new _HTMLVideoElement["default"]();
      } else if (tagName === 'SCRIPT') {
        return new _HTMLScriptElement["default"]();
      } else if (tagName === "INPUT") {
        return new _HTMLInputElement["default"]();
      } else if (tagName === "AUDIO") {
        return new _Audio["default"]();
      } else if (tagName === "STYLE") {
        return new _HTMLStyleElement["default"]();
      } else if (tagName === "A") {
        return new _HTMLAnchorElement["default"]();
      }

      return new _HTMLElement["default"](tagName);
    }
  }, {
    key: "createElementNS",
    value: function createElementNS(namespaceURI, qualifiedName, options) {
      return this.createElement(qualifiedName);
    }
  }, {
    key: "createEvent",
    value: function createEvent(type) {
      if (window[type]) {
        return new window[type]();
      }

      return null;
    }
  }, {
    key: "createTextNode",
    value: function createTextNode() {
      console.warn("document.createTextNode() is not support!");
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent() {
      if (_html.dispatchEvent.apply(_html, arguments)) {
        return _get(_getPrototypeOf(Document.prototype), "dispatchEvent", this).apply(this, arguments);
      }

      return false;
    }
  }, {
    key: "appendChild",
    value: function appendChild(node) {
      var nodeName = node.nodeName;

      if (nodeName === "SCRIPT") {
        _WeakMap["default"].get(this).scripts.push(node);
      }

      return _get(_getPrototypeOf(Document.prototype), "appendChild", this).call(this, node);
    }
  }, {
    key: "removeChild",
    value: function removeChild(node) {
      var nodeName = node.nodeName;

      if (nodeName === "SCRIPT") {
        var scripts = _WeakMap["default"].get(this).scripts;

        for (var index = 0, length = scripts.length; index < length; ++index) {
          if (node === scripts[index]) {
            scripts.slice(index, 1);
            break;
          }
        }
      }

      return _get(_getPrototypeOf(Document.prototype), "removeChild", this).call(this, node);
    }
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'getElementById' on 'Document': 1 argument required, but only 0 present.";
      }

      var rootElement = this.documentElement;
      var elementArr = [].concat(rootElement.childNodes);
      var element;

      if (id === "canvas" || id === "glcanvas") {
        while (element = elementArr.pop()) {
          if (element.id === "canvas" || element.id === "glcanvas") {
            return element;
          }

          elementArr = elementArr.concat(element.childNodes);
        }
      } else {
        while (element = elementArr.pop()) {
          if (element.id === id) {
            return element;
          }

          elementArr = elementArr.concat(element.childNodes);
        }
      }

      return null;
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(names) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'getElementsByClassName' on 'Document': 1 argument required, but only 0 present.";
      }

      if (typeof names !== "string" && names instanceof String) {
        return new _NodeList["default"]();
      }

      return this.documentElement.getElementsByClassName(names);
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'getElementsByTagName' on 'Document': 1 argument required, but only 0 present.";
      }

      tagName = tagName.toUpperCase();
      var rootElement = this.documentElement;
      var result = new _NodeList["default"]();

      switch (tagName) {
        case "HEAD":
          {
            result.push(document.head);
            break;
          }

        case "BODY":
          {
            result.push(document.body);
            break;
          }

        default:
          {
            result = result.concat(rootElement.getElementsByTagName(tagName));
          }
      }

      return result;
    }
  }, {
    key: "getElementsByName",
    value: function getElementsByName(name) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'getElementsByName' on 'Document': 1 argument required, but only 0 present.";
      }

      var elementArr = [].concat(this.childNodes);
      var result = new _NodeList["default"]();
      var element;

      while (element = elementArr.pop()) {
        if (element.name === name) {
          result.push(element);
        }

        elementArr = elementArr.concat(element.childNodes);
      }

      return result;
    }
  }, {
    key: "querySelector",
    value: function querySelector(selectors) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'querySelectorAll' on 'Document': 1 argument required, but only 0 present.";
      }

      var nodeList = new _NodeList["default"]();

      switch (selectors) {
        case null:
        case undefined:
        case NaN:
        case true:
        case false:
        case "":
          return null;
      }

      if (typeof selectors !== "string" && selectors instanceof String) {
        throw "Uncaught DOMException: Failed to execute 'querySelectorAll' on 'Document': '" + selectors + "' is not a valid selector.";
      }

      var reg = /^[A-Za-z]+$/;
      var result = selectors.match(reg);

      if (result) {
        return this.getElementsByTagName(selectors);
      }

      reg = /^\.[A-Za-z$_][A-Za-z$_0-9\- ]*$/;
      result = selectors.match(reg);

      if (result) {
        var selectorArr = selectors.split(" ");
        var selector = selectorArr.shift();
        nodeList = this.getElementsByClassName(selector.substr(1));
        var length = selectorArr.length;

        if (length) {
          selectors = selectorArr.join(" ");
          length = nodeList.length;

          for (var index = 0; index < length; index++) {
            var subNodeList = nodeList[index].querySelector(selectors);

            if (subNodeList.length) {
              return subNodeList[0];
            }
          }
        }

        return nodeList[0];
      }

      reg = /^#[A-Za-z$_][A-Za-z$_0-9\-]*$/;
      result = selectors.match(reg);

      if (result) {
        var element = this.getElementById(selectors.substr(1));

        if (element) {
          nodeList.push(element);
        }
      }

      if (selectors === "*") {
        return this.getElementsByTagName(selectors);
      }

      return nodeList[0];
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(selectors) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'querySelectorAll' on 'Document': 1 argument required, but only 0 present.";
      }

      var nodeList = new _NodeList["default"]();

      switch (selectors) {
        case null:
        case undefined:
        case NaN:
        case true:
        case false:
        case "":
          return nodeList;
      }

      if (typeof selectors !== "string" && selectors instanceof String) {
        throw "Uncaught DOMException: Failed to execute 'querySelectorAll' on 'Document': '" + selectors + "' is not a valid selector.";
      }

      var reg = /^[A-Za-z]+$/;
      var result = selectors.match(reg);

      if (result) {
        return this.getElementsByTagName(selectors);
      }

      reg = /^\.[A-Za-z$_][A-Za-z$_0-9\-]*$/;
      result = selectors.match(reg);

      if (result) {
        return this.getElementsByClassName(selectors.substr(1));
      }

      reg = /^#[A-Za-z$_][A-Za-z$_0-9\-]*$/;
      result = selectors.match(reg);

      if (result) {
        var element = this.getElementById(selectors.substr(1));

        if (element) {
          nodeList.push(element);
        }
      }

      if (selectors === "*") {
        return this.getElementsByTagName(selectors);
      }

      return nodeList;
    }
  }]);

  return Document;
}(_Node2["default"]);

exports["default"] = Document;

},{"./Audio":3,"./FontFaceSet":13,"./HTMLAnchorElement":14,"./HTMLBodyElement":16,"./HTMLCanvasElement":17,"./HTMLElement":18,"./HTMLHeadElement":19,"./HTMLHtmlElement":20,"./HTMLInputElement":22,"./HTMLScriptElement":24,"./HTMLStyleElement":25,"./HTMLVideoElement":26,"./Node":31,"./NodeList":32,"./util/WeakMap":54}],9:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Node2 = _interopRequireDefault(require("./Node"));

var _NodeList = _interopRequireDefault(require("./NodeList"));

var _DOMTokenList = _interopRequireDefault(require("./DOMToken\u200BList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Element = function (_Node) {
  _inherits(Element, _Node);

  var _super = _createSuper(Element);

  function Element(tagName) {
    var _this;

    _classCallCheck(this, Element);

    _this = _super.call(this, tagName);

    _defineProperty(_assertThisInitialized(_this), "className", '');

    _defineProperty(_assertThisInitialized(_this), "children", []);

    _defineProperty(_assertThisInitialized(_this), "classList", new _DOMTokenList["default"]());

    _defineProperty(_assertThisInitialized(_this), "value", 1);

    _defineProperty(_assertThisInitialized(_this), "content", "");

    _defineProperty(_assertThisInitialized(_this), "scrollLeft", 0);

    _defineProperty(_assertThisInitialized(_this), "scrollTop", 0);

    _defineProperty(_assertThisInitialized(_this), "clientLeft", 0);

    _defineProperty(_assertThisInitialized(_this), "clientTop", 0);

    return _this;
  }

  _createClass(Element, [{
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      return {
        x: 0,
        y: 0,
        width: jsb.width,
        height: jsb.height,
        top: 0,
        left: 0,
        bottom: jsb.height,
        right: jsb.width
      };
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      tagName = tagName.toUpperCase();
      var result = new _NodeList["default"]();
      var childNodes = this.childNodes;
      var length = childNodes.length;

      for (var index = 0; index < length; index++) {
        var element = childNodes[index];

        if (element.tagName === tagName || tagName === "*") {
          result.push(element);
        }

        result = result.concat(element);
      }

      return result;
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(names) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'getElementsByClassName' on 'Document': 1 argument required, but only 0 present.";
      }

      var result = new _NodeList["default"]();

      if (typeof names !== "string" && names instanceof String) {
        return result;
      }

      var elementArr = [].concat(this.childNodes);
      var element;

      while (element = elementArr.pop()) {
        var classStr = element["class"];

        if (classStr) {
          var classArr = classStr.split(" ");
          var length = classArr.length;

          for (var index = 0; index < length; index++) {
            if (classArr[index] === names) {
              result.push(element);
              break;
            }
          }
        }

        elementArr = elementArr.concat(element.childNodes);
      }

      return result;
    }
  }, {
    key: "querySelector",
    value: function querySelector(selectors) {
      if (!arguments.length) {
        throw "Uncaught TypeError: Failed to execute 'querySelectorAll' on 'Document': 1 argument required, but only 0 present.";
      }

      var nodeList = new _NodeList["default"]();

      switch (selectors) {
        case null:
        case undefined:
        case NaN:
        case true:
        case false:
        case "":
          return null;
      }

      if (typeof selectors !== "string" && selectors instanceof String) {
        throw "Uncaught DOMException: Failed to execute 'querySelectorAll' on 'Document': '" + selectors + "' is not a valid selector.";
      }

      var reg = /^[A-Za-z]+$/;
      var result = selectors.match(reg);

      if (result) {
        return this.getElementsByTagName(selectors);
      }

      reg = /^.[A-Za-z$_][A-Za-z$_0-9\- ]*$/;
      result = selectors.match(reg);

      if (result) {
        var selectorArr = selectors.split(" ");
        var selector = selectorArr.shift();
        nodeList = this.getElementsByClassName(selector.substr(1));
        var length = selectorArr.length;

        if (length) {
          selectors = selectorArr.join(" ");
          length = nodeList.length;

          for (var index = 0; index < length; index++) {
            var subNodeList = nodeList[index].querySelector(selectors);

            if (subNodeList.length) {
              return subNodeList[0];
            }
          }
        }

        return nodeList[0];
      }

      reg = /^#[A-Za-z$_][A-Za-z$_0-9\-]*$/;
      result = selectors.match(reg);

      if (result) {
        var element = this.getElementById(selectors.substr(1));

        if (element) {
          nodeList.push(element);
        }
      }

      if (selectors === "*") {
        return this.getElementsByTagName(selectors);
      }

      return nodeList[0];
    }
  }, {
    key: "add",
    value: function add() {}
  }, {
    key: "requestFullscreen",
    value: function requestFullscreen() {}
  }, {
    key: "removeAttribute",
    value: function removeAttribute(attrName) {
      if (attrName === "style") {
        for (var styleName in this["style"]) {
          this["style"][styleName] = "";
        }
      } else {
        this[attrName] = "";
      }
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {
      if (name === "style") {
        if (typeof value == "undefined" || value == null || value == "") {
          for (var styleName in this["style"]) {
            this["style"][styleName] = "";
          }
        } else {
          value = value.replace(/\s*/g, "");
          var valueArray = value.split(";");

          for (var index in valueArray) {
            if (valueArray[index] != "") {
              var valueTemp = valueArray[index].split(":");
              this["style"][valueTemp[0]] = valueTemp[1];
            }
          }
        }
      } else {
        this[name] = value;
      }
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(name) {
      var attributeValue = null;

      if (name == "style") {
        attributeValue = JSON.stringify(this["style"]);
      } else {
        attributeValue = this[name];
      }

      return attributeValue;
    }
  }, {
    key: "setAttributeNS",
    value: function setAttributeNS(ns, name, value) {
      this.setAttribute(name, value);
    }
  }, {
    key: "focus",
    value: function focus() {}
  }, {
    key: "blur",
    value: function blur() {}
  }, {
    key: "lastChild",
    get: function get() {
      var lastChild = this.childNodes[this.childNodes.length - 1];
      return lastChild ? lastChild : this.innerHTML ? new HTMLElement() : undefined;
    }
  }, {
    key: "firstChild",
    get: function get() {
      var child = this.childNodes[0];
      return child ? child : this.innerHTML ? new HTMLElement() : undefined;
    }
  }, {
    key: "firstElementChild",
    get: function get() {
      var child = this.childNodes[0];
      return child ? child : this.innerHTML ? new HTMLElement() : undefined;
    }
  }, {
    key: "clientHeight",
    get: function get() {
      var style = this.style || {};
      return parseInt(style.fontSize || "0");
    }
  }, {
    key: "tagName",
    get: function get() {
      return this.nodeName;
    }
  }]);

  return Element;
}(_Node2["default"]);

exports["default"] = Element;

},{"./DOMToken​List":6,"./Node":31,"./NodeList":32}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Event = function () {
  function Event(type, eventInit) {
    _classCallCheck(this, Event);

    this._type = type;
    this._target = null;
    this._eventPhase = 2;
    this._currentTarget = null;
    this._canceled = false;
    this._stopped = false;
    this._passiveListener = null;
    this._timeStamp = Date.now();
  }

  _createClass(Event, [{
    key: "composedPath",
    value: function composedPath() {
      var currentTarget = this._currentTarget;

      if (currentTarget === null) {
        return [];
      }

      return [currentTarget];
    }
  }, {
    key: "stopPropagation",
    value: function stopPropagation() {}
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this._stopped = true;
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {
      if (this._passiveListener !== null) {
        console.warn("Event#preventDefault() was called from a passive listener:", this._passiveListener);
        return;
      }

      if (!this.cancelable) {
        return;
      }

      this._canceled = true;
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
  }, {
    key: "target",
    get: function get() {
      return this._target;
    }
  }, {
    key: "currentTarget",
    get: function get() {
      return this._currentTarget;
    }
  }, {
    key: "isTrusted",
    get: function get() {
      return false;
    }
  }, {
    key: "timeStamp",
    get: function get() {
      return this._timeStamp;
    },
    set: function set(value) {
      if (this.type.indexOf("touch")) {
        this._timeStamp = value;
      }
    }
  }, {
    key: "eventPhase",
    get: function get() {
      return this._eventPhase;
    }
  }, {
    key: "bubbles",
    get: function get() {
      return false;
    }
  }, {
    key: "cancelable",
    get: function get() {
      return true;
    }
  }, {
    key: "defaultPrevented",
    get: function get() {
      return this._canceled;
    }
  }, {
    key: "composed",
    get: function get() {
      return false;
    }
  }]);

  return Event;
}();

exports["default"] = Event;
Event.NONE = 0;
Event.CAPTURING_PHASE = 1;
Event.AT_TARGET = 2;
Event.BUBBLING_PHASE = 3;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TouchEvent = _interopRequireDefault(require("./TouchEvent"));

var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));

var _DeviceMotionEvent = _interopRequireDefault(require("./DeviceMotionEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _listenerStat = {};

var _onTouchStart = function _onTouchStart(e) {
  var event = new _TouchEvent["default"]("touchstart");
  window.dispatchEvent(Object.assign(event, e));
};

var _onTouchMove = function _onTouchMove(e) {
  var event = new _TouchEvent["default"]("touchmove");
  window.dispatchEvent(Object.assign(event, e));
};

var _onTouchCancel = function _onTouchCancel(e) {
  var event = new _TouchEvent["default"]("touchcancel");
  window.dispatchEvent(Object.assign(event, e));
};

var _onTouchEnd = function _onTouchEnd(e) {
  var event = new _TouchEvent["default"]("touchend");
  window.dispatchEvent(Object.assign(event, e));
};

var _onAccelerometerChange = function _onAccelerometerChange(e) {
  var event = new _DeviceMotionEvent["default"](e);
  window.dispatchEvent(event);
};

var EventTarget = function () {
  function EventTarget() {
    _classCallCheck(this, EventTarget);

    _WeakMap["default"].set(this, {});
  }

  _createClass(EventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var privateThis = _WeakMap["default"].get(this);

      if (!privateThis) {
        _WeakMap["default"].set(this, privateThis = {});
      }

      var events = _WeakMap["default"].get(privateThis);

      if (!events) {
        _WeakMap["default"].set(privateThis, events = {});
      }

      if (!events[type]) {
        events[type] = [];
      }

      var listenerArray = events[type];
      var length = listenerArray.length;

      for (var index = 0; index < length; ++index) {
        if (listenerArray[index] === listener) {
          return;
        }
      }

      listenerArray.push(listener);

      if (_listenerStat[type]) {
        ++_listenerStat[type];
      } else {
        _listenerStat[type] = 1;

        switch (type) {
          case "touchstart":
            {
              jsb.onTouchStart(_onTouchStart);
              break;
            }

          case "touchmove":
            {
              jsb.onTouchMove(_onTouchMove);
              break;
            }

          case "touchcancel":
            {
              jsb.onTouchCancel(_onTouchCancel);
              break;
            }

          case "touchend":
            {
              jsb.onTouchEnd(_onTouchEnd);
              break;
            }

          case "devicemotion":
            {
              jsb.onAccelerometerChange(_onAccelerometerChange);
              jsb.device.setMotionEnabled(true);
              break;
            }
        }
      }

      if (options.capture) {}

      if (options.once) {}

      if (options.passive) {}
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener) {
      var privateThis = _WeakMap["default"].get(this);

      var events;

      if (privateThis) {
        events = _WeakMap["default"].get(privateThis);
      }

      if (events) {
        var listeners = events[type];

        if (listeners && listeners.length > 0) {
          for (var i = listeners.length; i--; i > 0) {
            if (listeners[i] === listener) {
              listeners.splice(i, 1);

              if (--_listenerStat[type] === 0) {
                switch (type) {
                  case "touchstart":
                    {
                      jsb.offTouchStart(_onTouchStart);
                      break;
                    }

                  case "touchmove":
                    {
                      jsb.offTouchMove(_onTouchMove);
                      break;
                    }

                  case "touchcancel":
                    {
                      jsb.offTouchCancel(_onTouchCancel);
                      break;
                    }

                  case "touchend":
                    {
                      jsb.offTouchEnd(_onTouchEnd);
                      break;
                    }

                  case "devicemotion":
                    {
                      jsb.offAccelerometerChange(_onAccelerometerChange);
                      jsb.device.setMotionEnabled(false);
                      break;
                    }
                }
              }

              break;
            }
          }
        }
      }
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      event._target = event._currentTarget = this;

      if (event instanceof _TouchEvent["default"]) {
        var toucheArray = event.touches;
        var length = toucheArray.length;

        for (var index = 0; index < length; ++index) {
          toucheArray[index].target = this;
        }

        toucheArray = event.changedTouches;
        length = toucheArray.length;

        for (var _index = 0; _index < length; ++_index) {
          toucheArray[_index].target = this;
        }
      }

      var callback = this["on" + event.type];

      if (typeof callback === "function") {
        callback.call(this, event);
      }

      var privateThis = _WeakMap["default"].get(this);

      var events;

      if (privateThis) {
        events = _WeakMap["default"].get(privateThis);
      }

      if (events) {
        var listeners = events[event.type];

        if (listeners) {
          for (var i = 0; i < listeners.length; i++) {
            listeners[i].call(this, event);
          }
        }
      }

      event._target = event._currentTarget = null;
      return true;
    }
  }]);

  return EventTarget;
}();

exports["default"] = EventTarget;

},{"./DeviceMotionEvent":7,"./TouchEvent":34,"./util/WeakMap":54}],12:[function(require,module,exports){
"use strict";

var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FontFace = function () {
  function FontFace(family, source, descriptors) {
    _classCallCheck(this, FontFace);

    this.family = family;
    this.source = source;
    this.descriptors = descriptors;
    var self = this;
    var _selfPrivate = {
      status: "unloaded",
      _status: "unloaded",
      load: function load() {
        this.status = "loading";
        var source;

        if (self.source.match(/url\(\s*'\s*(.*?)\s*'\s*\)/)) {
          source = self.source;
        } else {
          source = "url('" + self.source + "')";
        }

        var family = jsb.loadFont(self.family, source);

        if (family) {
          this._status = "loaded";
        } else {
          this._status = "error";
        }

        setTimeout(function () {
          var status = _selfPrivate.status = _selfPrivate._status;

          if (status === "loaded") {
            _selfPrivate.loadResolve();
          } else {
            _selfPrivate.loadReject();
          }
        });
      }
    };

    _WeakMap["default"].set(this, _selfPrivate);

    _selfPrivate.loaded = new Promise(function (resolve, reject) {
      _selfPrivate.loadResolve = resolve;
      _selfPrivate.loadReject = reject;
    });
  }

  _createClass(FontFace, [{
    key: "load",
    value: function load() {
      _WeakMap["default"].get(this).load();

      return _WeakMap["default"].get(this).loaded;
    }
  }, {
    key: "status",
    get: function get() {
      return _WeakMap["default"].get(this).status;
    }
  }, {
    key: "loaded",
    get: function get() {
      return _WeakMap["default"].get(this).loaded;
    }
  }]);

  return FontFace;
}();

module.exports = FontFace;

},{"./util/WeakMap":54}],13:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _EventTarget2 = _interopRequireDefault(require("./EventTarget"));

var _Event = _interopRequireDefault(require("./Event"));

var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FontFaceSet = function (_EventTarget) {
  _inherits(FontFaceSet, _EventTarget);

  var _super = _createSuper(FontFaceSet);

  function FontFaceSet() {
    var _this;

    _classCallCheck(this, FontFaceSet);

    _this = _super.call(this);

    var self = _assertThisInitialized(_this);

    _WeakMap["default"].get(_assertThisInitialized(_this)).status = "loaded";
    _WeakMap["default"].get(_assertThisInitialized(_this)).ready = new Promise(function (resolve, reject) {
      _WeakMap["default"].get(self).readyResolve = resolve;
      _WeakMap["default"].get(self).readyReject = reject;
    });
    _WeakMap["default"].get(_assertThisInitialized(_this)).fontFaceSet = [];
    return _this;
  }

  _createClass(FontFaceSet, [{
    key: "add",
    value: function add(fontFace) {
      _WeakMap["default"].get(this).fontFaceSet.push(fontFace);
    }
  }, {
    key: "check",
    value: function check() {
      console.warn("FontFaceSet.check() not implements");
    }
  }, {
    key: "clear",
    value: function clear() {
      console.warn("FontFaceSet.clear() not implements");
    }
  }, {
    key: "delete",
    value: function _delete() {
      console.warn("FontFaceSet.delete() not implements");
    }
  }, {
    key: "load",
    value: function load() {
      var self = this;
      _WeakMap["default"].get(this).status = "loading";
      this.dispatchEvent(new _Event["default"]('loading'));
      return new Promise(function (resolve, reject) {
        var fontFaceSet = _WeakMap["default"].get(self).fontFaceSet;

        if (fontFaceSet) {
          for (var index in fontFaceSet) {
            var fontFace = fontFaceSet[index];

            var status = _WeakMap["default"].get(fontFace).status;

            if (status === "unloaded" || status === "error") {
              fontFace.load();

              if (_WeakMap["default"].get(fontFace)._status !== "loaded") {
                break;
              }
            }
          }

          _WeakMap["default"].get(self).status = "loaded";

          _WeakMap["default"].get(self).readyResolve([].concat(_WeakMap["default"].get(self).fontFaceSet));

          resolve([].concat(_WeakMap["default"].get(self).fontFaceSet));
          self.dispatchEvent(new _Event["default"]('loadingdone'));
          return;
        }

        _WeakMap["default"].get(self).status = "loaded";

        _WeakMap["default"].get(self).readyReject();

        reject();
        self.dispatchEvent(new _Event["default"]('loadingerror'));
      });
    }
  }, {
    key: "status",
    get: function get() {
      return _WeakMap["default"].get(this).status;
    }
  }, {
    key: "ready",
    get: function get() {
      return _WeakMap["default"].get(this).ready;
    }
  }]);

  return FontFaceSet;
}(_EventTarget2["default"]);

exports["default"] = FontFaceSet;

},{"./Event":10,"./EventTarget":11,"./util/WeakMap":54}],14:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));

var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HTMLAnchorElement = function (_HTMLElement) {
  _inherits(HTMLAnchorElement, _HTMLElement);

  var _super = _createSuper(HTMLAnchorElement);

  function HTMLAnchorElement() {
    var _this;

    _classCallCheck(this, HTMLAnchorElement);

    _this = _super.call(this, "A");
    _WeakMap["default"].get(_assertThisInitialized(_this)).protocol = ":";
    return _this;
  }

  _createClass(HTMLAnchorElement, [{
    key: "protocol",
    get: function get() {
      return _WeakMap["default"].get(this).protocol;
    }
  }]);

  return HTMLAnchorElement;
}(_HTMLElement2["default"]);

exports["default"] = HTMLAnchorElement;

},{"./HTMLElement":18,"./util/WeakMap":54}],15:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HTMLMediaElement2 = _interopRequireDefault(require("./HTMLMediaElement"));

var _Event = _interopRequireDefault(require("./Event"));

var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _ERROR = -1;

var _INITIALIZING = 0;
var _PLAYING = 1;
var _PAUSE = 2;

var _audio_valid_id = function _audio_valid_id(audioID) {
  return typeof audioID === "number";
};

var _audio_valid_src = function _audio_valid_src(src) {
  return typeof src === "string" && src !== "";
};

var HTMLAudioElement = function (_HTMLMediaElement) {
  _inherits(HTMLAudioElement, _HTMLMediaElement);

  var _super = _createSuper(HTMLAudioElement);

  function HTMLAudioElement(url) {
    _classCallCheck(this, HTMLAudioElement);

    return _super.call(this, url, 'AUDIO');
  }

  _createClass(HTMLAudioElement, [{
    key: "canPlayType",
    value: function canPlayType() {
      var mediaType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (typeof mediaType !== 'string') {
        return '';
      }

      if (mediaType.indexOf('audio/mpeg') > -1 || mediaType.indexOf('audio/mp4')) {
        return 'probably';
      }

      return '';
    }
  }, {
    key: "load",
    value: function load() {
      var privateThis = _WeakMap["default"].get(this);

      var audioID = privateThis.audioID;

      if (_audio_valid_id(audioID)) {
        jsb.AudioEngine.stop(audioID);
        privateThis.audioID = null;
      }

      var src = this.src;

      if (_audio_valid_src(src)) {
        this.dispatchEvent({
          type: "loadstart"
        });
        var self = this;
        jsb.AudioEngine.preload(this.src, function () {
          setTimeout(function () {
            if (self.src === src) {
              if (self.autoplay) {
                self.play();
              }

              self.dispatchEvent(new _Event["default"]("loadedmetadata"));
              self.dispatchEvent(new _Event["default"]("loadeddata"));
              self.dispatchEvent(new _Event["default"]("canplay"));
              self.dispatchEvent(new _Event["default"]("canplaythrough"));
            }
          });
        });
      } else {
        if (src !== "") {
          console.error("invalid src: ", src);
        }

        this.dispatchEvent(new _Event["default"]("error"));
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      var audioID = _WeakMap["default"].get(this).audioID;

      if (_audio_valid_id(audioID)) {
        var state = jsb.AudioEngine.getState(audioID);

        if (state === _INITIALIZING || state === _PLAYING) {
          jsb.AudioEngine.pause(audioID);
          this.dispatchEvent(new _Event["default"]("pause"));
        }
      }
    }
  }, {
    key: "play",
    value: function play() {
      if (!_audio_valid_src(this.src)) {
        this.dispatchEvent({
          type: "emptied"
        });
        console.error("Audio play: please define src before play");
        return;
      }

      var audioID = _WeakMap["default"].get(this).audioID;

      if (_audio_valid_id(audioID)) {
        var state = jsb.AudioEngine.getState(audioID);

        switch (state) {
          case _PAUSE:
            {
              jsb.AudioEngine.resume(audioID);
              this.dispatchEvent(new _Event["default"]("play"));
              this.dispatchEvent(new _Event["default"]("playing"));
              return;
            }

          case _PLAYING:
            {
              this.currentTime = 0;
              return;
            }

          case _INITIALIZING:
            {
              return;
            }

          case _ERROR:
          default:
            {}
        }
      }

      var self = this;
      audioID = jsb.AudioEngine.play(this.src, this.loop, this.volume);

      if (audioID === -1) {
        setTimeout(function () {
          self.dispatchEvent(new _Event["default"]("error"));
          self.dispatchEvent(new _Event["default"]("ended"));
        });
        return;
      }

      var currentTime = this.currentTime;

      if (typeof currentTime === "number" && currentTime > 0) {
        jsb.AudioEngine.setCurrentTime(audioID, currentTime);
      }

      this.dispatchEvent(new _Event["default"]("play"));
      jsb.AudioEngine.setFinishCallback(audioID, function () {
        _WeakMap["default"].get(self).audioID = null;
        self.dispatchEvent(new _Event["default"]("ended"));
      });

      if (typeof jsb.AudioEngine.setErrorCallback !== "undefined") {
        jsb.AudioEngine.setErrorCallback(audioID, function () {
          _WeakMap["default"].get(self).audioID = null;
          self.dispatchEvent(new _Event["default"]("error"));
        });
      }

      if (typeof jsb.AudioEngine.setWaitingCallback !== "undefined") {
        jsb.AudioEngine.setWaitingCallback(audioID, function () {
          self.dispatchEvent(new _Event["default"]("waiting"));
        });
      }

      if (typeof jsb.AudioEngine.setCanPlayCallback === "function") {
        jsb.AudioEngine.setCanPlayCallback(audioID, function () {
          self.dispatchEvent(new _Event["default"]("canplay"));
        });
      }

      _WeakMap["default"].get(this).audioID = audioID;
    }
  }, {
    key: "currentTime",
    get: function get() {
      var audioID = _WeakMap["default"].get(this).audioID;

      if (_audio_valid_id(audioID)) {
        return jsb.AudioEngine.getCurrentTime(audioID);
      } else {
        return _get(_getPrototypeOf(HTMLAudioElement.prototype), "currentTime", this);
      }
    },
    set: function set(value) {
      var audioID = _WeakMap["default"].get(this).audioID;

      if (_audio_valid_id(audioID)) {
        jsb.AudioEngine.setCurrentTime(audioID, value);
      }

      _set(_getPrototypeOf(HTMLAudioElement.prototype), "currentTime", value, this, true);
    }
  }, {
    key: "duration",
    get: function get() {
      var audioID = _WeakMap["default"].get(this).audioID;

      if (_audio_valid_id(audioID)) {
        return jsb.AudioEngine.getDuration(audioID);
      } else {
        return _get(_getPrototypeOf(HTMLAudioElement.prototype), "duration", this);
      }
    }
  }, {
    key: "loop",
    get: function get() {
      var audioID = _WeakMap["default"].get(this).audioID;

      if (_audio_valid_id(audioID)) {
        return jsb.AudioEngine.isLoop(audioID);
      } else {
        return _get(_getPrototypeOf(HTMLAudioElement.prototype), "loop", this);
      }
    },
    set: function set(value) {
      var audioID = _WeakMap["default"].get(this).audioID;

      if (_audio_valid_id(audioID)) {
        jsb.AudioEngine.setLoop(audioID, value);
      }

      _set(_getPrototypeOf(HTMLAudioElement.prototype), "loop", value, this, true);
    }
  }, {
    key: "volume",
    get: function get() {
      var audioID = _WeakMap["default"].get(this).audioID;

      if (_audio_valid_id(audioID)) {
        return jsb.AudioEngine.getVolume(audioID);
      } else {
        return _get(_getPrototypeOf(HTMLAudioElement.prototype), "volume", this);
      }
    },
    set: function set(value) {
      var audioID = _WeakMap["default"].get(this).audioID;

      if (_audio_valid_id(audioID)) {
        jsb.AudioEngine.setVolume(audioID, value);
      }

      _set(_getPrototypeOf(HTMLAudioElement.prototype), "volume", value, this, true);
    }
  }, {
    key: "src",
    get: function get() {
      return _get(_getPrototypeOf(HTMLAudioElement.prototype), "src", this);
    },
    set: function set(value) {
      var privateThis = _WeakMap["default"].get(this);

      var audioID = privateThis.audioID;

      if (_audio_valid_id(audioID)) {
        jsb.AudioEngine.stop(audioID);
        privateThis.audioID = null;
      }

      _set(_getPrototypeOf(HTMLAudioElement.prototype), "src", value, this, true);

      if (_audio_valid_src(value)) {
        if (this.autoplay || this.preload === "auto") {
          this.load();
        }
      } else {
        if (value !== "") {
          console.error("invalid src: ", value);
        }

        this.dispatchEvent(new _Event["default"]("error"));
      }
    }
  }]);

  return HTMLAudioElement;
}(_HTMLMediaElement2["default"]);

exports["default"] = HTMLAudioElement;

},{"./Event":10,"./HTMLMediaElement":23,"./util/WeakMap":54}],16:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HTMLBodyElement = function (_HTMLElement) {
  _inherits(HTMLBodyElement, _HTMLElement);

  var _super = _createSuper(HTMLBodyElement);

  function HTMLBodyElement(parentNode) {
    var _this;

    _classCallCheck(this, HTMLBodyElement);

    _this = _super.call(this, "BODY");

    _defineProperty(_assertThisInitialized(_this), "parentNode", null);

    _this.parentNode = parentNode;
    return _this;
  }

  return HTMLBodyElement;
}(_HTMLElement2["default"]);

exports["default"] = HTMLBodyElement;

},{"./HTMLElement.js":18}],17:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement.js"));

var _DOMRect = _interopRequireDefault(require("./DOMRect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CANVAS_DEFAULT_WIDTH = 300;
var CANVAS_DEFAULT_HEIGHT = 150;
window.jsb = window.jsb || {};
var _createCanvas = jsb.createCanvas;

var HTMLCanvasElement = function (_HTMLElement) {
  _inherits(HTMLCanvasElement, _HTMLElement);

  var _super = _createSuper(HTMLCanvasElement);

  function HTMLCanvasElement(width, height) {
    var _this;

    _classCallCheck(this, HTMLCanvasElement);

    _this = _super.call(this, 'CANVAS');
    _this.id = 'glcanvas';
    _this.type = 'canvas';
    _this.top = 0;
    _this.left = 0;

    if (_createCanvas) {
      var canvas = _createCanvas();

      canvas.__proto__.__proto__ = HTMLCanvasElement.prototype;
      Object.keys(_assertThisInitialized(_this)).forEach(function (key) {
        canvas[key] = this[key];
      }.bind(_assertThisInitialized(_this)));
      canvas.width = width >= 0 ? Math.ceil(width) : CANVAS_DEFAULT_WIDTH;
      canvas.height = height >= 0 ? Math.ceil(height) : CANVAS_DEFAULT_HEIGHT;
      canvas._targetID = _this._targetID;
      canvas._listenerCount = _this._listenerCount;
      canvas._listeners = _this._listeners;
      return _possibleConstructorReturn(_this, canvas);
    } else {
      _this._width = width ? Math.ceil(width) : CANVAS_DEFAULT_WIDTH;
      _this._height = height ? Math.ceil(height) : CANVAS_DEFAULT_HEIGHT;
      _this._context2D = null;
      _this._dataInner = null;
      _this._alignment = _this._width % 2 === 0 ? 8 : 4;
    }

    return _this;
  }

  _createClass(HTMLCanvasElement, [{
    key: "getContext",
    value: function getContext(name, opts) {
      var self = this;

      if (name === 'webgl' || name === 'experimental-webgl') {
        if (this === window.__canvas) return window.__gl;else return null;
      } else if (name === '2d') {
        if (!this._context2D) {
          this._context2D = new CanvasRenderingContext2D(this.width, this.height);
          this._context2D._innerCanvas = this;
        }

        return this._context2D;
      }

      return null;
    }
  }, {
    key: "_data",
    get: function get() {
      if (this._context2D === null) {
        return null;
      }

      if (!this._dataInner) {
        var data = this._context2D._getData();

        this._dataInner = new ImageData(data, this.width, this.height);
      }

      return this._dataInner;
    }
  }, {
    key: "clientWidth",
    get: function get() {
      return this.width;
    }
  }, {
    key: "clientHeight",
    get: function get() {
      return this.height;
    }
  }, {
    key: "width",
    set: function set(width) {
      width = parseInt(width);

      if (isNaN(width)) {
        width = CANVAS_DEFAULT_WIDTH;
      } else if (width < 0) {
        width = CANVAS_DEFAULT_WIDTH;
      }

      this._width = width;
      this._alignment = this._width % 2 === 0 ? 8 : 4;

      if (this._context2D) {
        this._context2D._width = width;
      }

      this._dataInner = null;
    },
    get: function get() {
      return this._width;
    }
  }, {
    key: "height",
    set: function set(height) {
      height = parseInt(height);

      if (isNaN(height)) {
        height = CANVAS_DEFAULT_HEIGHT;
      } else if (height < 0) {
        height = CANVAS_DEFAULT_HEIGHT;
      }

      this._height = height;

      if (this._context2D) {
        this._context2D._height = height;
      }

      this._dataInner = null;
    },
    get: function get() {
      return this._height;
    }
  }]);

  return HTMLCanvasElement;
}(_HTMLElement2["default"]);

exports["default"] = HTMLCanvasElement;

},{"./DOMRect.js":5,"./HTMLElement.js":18}],18:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Element2 = _interopRequireDefault(require("./Element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HTMLElement = function (_Element) {
  _inherits(HTMLElement, _Element);

  var _super = _createSuper(HTMLElement);

  function HTMLElement(tagName) {
    var _this;

    _classCallCheck(this, HTMLElement);

    _this = _super.call(this, tagName);

    _defineProperty(_assertThisInitialized(_this), "className", '');

    _defineProperty(_assertThisInitialized(_this), "childern", []);

    _defineProperty(_assertThisInitialized(_this), "style", {
      width: "".concat(jsb.width, "px"),
      height: "".concat(jsb.height, "px")
    });

    _defineProperty(_assertThisInitialized(_this), "insertBefore", function () {});

    _defineProperty(_assertThisInitialized(_this), "innerHTML", '');

    return _this;
  }

  _createClass(HTMLElement, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this[name] = value;
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(name) {
      return this[name];
    }
  }, {
    key: "clientWidth",
    get: function get() {
      var ret = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
      return Number.isNaN(ret) ? 0 : ret;
    }
  }, {
    key: "clientHeight",
    get: function get() {
      var ret = parseInt(this.style.fontSize, 10);
      return Number.isNaN(ret) ? 0 : ret;
    }
  }]);

  return HTMLElement;
}(_Element2["default"]);

exports["default"] = HTMLElement;

},{"./Element":9}],19:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HTMLHeadElement = function (_HTMLElement) {
  _inherits(HTMLHeadElement, _HTMLElement);

  var _super = _createSuper(HTMLHeadElement);

  function HTMLHeadElement(parentNode) {
    var _this;

    _classCallCheck(this, HTMLHeadElement);

    _this = _super.call(this, "HEAD");

    _defineProperty(_assertThisInitialized(_this), "parentNode", null);

    _this.parentNode = parentNode;
    return _this;
  }

  return HTMLHeadElement;
}(_HTMLElement2["default"]);

exports["default"] = HTMLHeadElement;

},{"./HTMLElement.js":18}],20:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HTMLHtmlElement = function (_HTMLElement) {
  _inherits(HTMLHtmlElement, _HTMLElement);

  var _super = _createSuper(HTMLHtmlElement);

  function HTMLHtmlElement() {
    _classCallCheck(this, HTMLHtmlElement);

    return _super.call(this, "HTML");
  }

  _createClass(HTMLHtmlElement, [{
    key: "version",
    get: function get() {
      return "";
    }
  }]);

  return HTMLHtmlElement;
}(_HTMLElement2["default"]);

exports["default"] = HTMLHtmlElement;

},{"./HTMLElement":18}],21:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));

var _Event = _interopRequireDefault(require("./Event"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

window.jsb = window.jsb || {};
var _creteImage = jsb.createImage;

var _image;

var _setter;

var _getter;

if (_creteImage) {
  _image = _creteImage();

  var _descriptor = Object.getOwnPropertyDescriptor(_image.__proto__, "src");

  _setter = _descriptor.set;
  _getter = _descriptor.get;
}

var HTMLImageElement = function (_HTMLElement) {
  _inherits(HTMLImageElement, _HTMLElement);

  var _super = _createSuper(HTMLImageElement);

  function HTMLImageElement(width, height, isCalledFromImage) {
    var _this;

    _classCallCheck(this, HTMLImageElement);

    if (!isCalledFromImage) {
      throw new TypeError("Illegal constructor, use 'new Image(w, h); instead!'");
    }

    _this = _super.call(this, 'IMG');
    _this.complete = false;
    _this.crossOrigin = null;
    _this.naturalWidth = 0;
    _this.naturalHeight = 0;
    _this.width = width || 0;
    _this.height = height || 0;

    if (_creteImage) {
      var image = _creteImage();

      Object.keys(_assertThisInitialized(_this)).forEach(function (key) {
        image[key] = this[key];
      }.bind(_assertThisInitialized(_this)));

      image._onload = function () {
        this.complete = true;
        this.naturalWidth = this.width;
        this.naturalHeight = this.height;
        this.dispatchEvent(new _Event["default"]("load"));
      }.bind(image);

      image._onerror = function () {
        this.dispatchEvent(new _Event["default"]("error"));
      }.bind(image);

      Object.defineProperty(image, "src", {
        configurable: true,
        enumerable: true,
        get: function get() {
          return _getter.call(this);
        },
        set: function set(value) {
          this.complete = false;
          return _setter.call(this, value);
        }
      });
      return _possibleConstructorReturn(_this, image);
    }

    return _this;
  }

  _createClass(HTMLImageElement, [{
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      return new DOMRect(0, 0, this.width, this.height);
    }
  }, {
    key: "src",
    set: function set(src) {
      var _this2 = this;

      this._src = src;

      if (src === "") {
        this.width = 0;
        this.height = 0;
        this._data = null;
        this._imageMeta = null;
        this.complete = true;
        this._glFormat = this._glInternalFormat = 0x1908;
        this.crossOrigin = null;
        return;
      }

      jsb.loadImageData(src, function (info) {
        if (!info) {
          var _event = new _Event["default"]('error');

          _this2.dispatchEvent(_event);

          return;
        }

        _this2._imageMeta = info;
        _this2.width = _this2.naturalWidth = info.width;
        _this2.height = _this2.naturalHeight = info.height;
        _this2._data = info.data;
        _this2._glFormat = info.glFormat;
        _this2._glInternalFormat = info.glInternalFormat;
        _this2._glType = info.glType;
        _this2._numberOfMipmaps = info.numberOfMipmaps;
        _this2._compressed = info.compressed;
        _this2._bpp = info.bpp;
        _this2._premultiplyAlpha = info.premultiplyAlpha;
        _this2._alignment = 1;

        if ((_this2._numberOfMipmaps == 0 || _this2._numberOfMipmaps == 1) && !_this2._compressed) {
          var bytesPerRow = _this2.width * _this2._bpp / 8;
          if (bytesPerRow % 8 == 0) _this2._alignment = 8;else if (bytesPerRow % 4 == 0) _this2._alignment = 4;else if (bytesPerRow % 2 == 0) _this2._alignment = 2;
        }

        _this2.complete = true;
        var event = new _Event["default"]('load');

        _this2.dispatchEvent(event);
      });
    },
    get: function get() {
      return this._src;
    }
  }, {
    key: "clientWidth",
    get: function get() {
      return this.width;
    }
  }, {
    key: "clientHeight",
    get: function get() {
      return this.height;
    }
  }]);

  return HTMLImageElement;
}(_HTMLElement2["default"]);

exports["default"] = HTMLImageElement;

},{"./Event":10,"./HTMLElement":18}],22:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

window.jsb = window.jsb || {};

var HTMLInputElement = function (_HTMLElement) {
  _inherits(HTMLInputElement, _HTMLElement);

  var _super = _createSuper(HTMLInputElement);

  function HTMLInputElement() {
    _classCallCheck(this, HTMLInputElement);

    return _super.call(this, "INPUT");
  }

  _createClass(HTMLInputElement, [{
    key: "focus",
    value: function focus() {
      _get(_getPrototypeOf(HTMLInputElement.prototype), "focus", this).call(this);

      if (!this.target.editable) {
        return;
      }

      var that = this;

      var onKeyboardInput = function onKeyboardInput(res) {
        var str = res ? res.value : "";
        that.inputTarget.text = str;
        that.target.event("input");
      };

      var onKeyboardConfirm = function onKeyboardConfirm(res) {
        var str = res ? res.value : "";
        that.target.text = str;
        that.target.event("input");
        that.target.focus = false;
        jsb.offKeyboardConfirm(onKeyboardConfirm);
        jsb.offKeyboardInput(onKeyboardInput);
        jsb.hideKeyboard({});
      };

      jsb.offKeyboardInput(onKeyboardInput);
      jsb.offKeyboardConfirm(onKeyboardConfirm);
      jsb.showKeyboard({
        defaultValue: this.value,
        maxLength: this.maxLength,
        multiple: this.target.multiline,
        confirmHold: false,
        inputType: this.target.type,
        success: function success(res) {},
        fail: function fail(res) {}
      });
      jsb.onKeyboardInput(onKeyboardInput);
      jsb.onKeyboardConfirm(onKeyboardConfirm);
    }
  }, {
    key: "blur",
    value: function blur() {
      _get(_getPrototypeOf(HTMLInputElement.prototype), "blur", this).call(this);

      jsb.hideKeyboard({});
    }
  }]);

  return HTMLInputElement;
}(_HTMLElement2["default"]);

exports["default"] = HTMLInputElement;

},{"./HTMLElement":18}],23:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));

var _MediaError = _interopRequireDefault(require("./MediaError"));

var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HTMLMediaElement = function (_HTMLElement) {
  _inherits(HTMLMediaElement, _HTMLElement);

  var _super = _createSuper(HTMLMediaElement);

  _createClass(HTMLMediaElement, null, [{
    key: "NETWORK_EMPTY",
    get: function get() {
      return 0;
    }
  }, {
    key: "NETWORK_IDLE",
    get: function get() {
      return 1;
    }
  }, {
    key: "NETWORK_LOADING",
    get: function get() {
      return 2;
    }
  }, {
    key: "NETWORK_NO_SOURCE",
    get: function get() {
      return 3;
    }
  }, {
    key: "HAVE_NOTHING",
    get: function get() {
      return 0;
    }
  }, {
    key: "HAVE_METADATA",
    get: function get() {
      return 1;
    }
  }, {
    key: "HAVE_CURRENT_DATA",
    get: function get() {
      return 2;
    }
  }, {
    key: "HAVE_FUTURE_DATA",
    get: function get() {
      return 3;
    }
  }, {
    key: "HAVE_ENOUGH_DATA",
    get: function get() {
      return 4;
    }
  }]);

  function HTMLMediaElement(url, type) {
    var _this;

    _classCallCheck(this, HTMLMediaElement);

    _this = _super.call(this, type);

    _defineProperty(_assertThisInitialized(_this), "audioTracks", undefined);

    _defineProperty(_assertThisInitialized(_this), "autoplay", false);

    _defineProperty(_assertThisInitialized(_this), "controller", null);

    _defineProperty(_assertThisInitialized(_this), "controls", false);

    _defineProperty(_assertThisInitialized(_this), "crossOrigin", null);

    _defineProperty(_assertThisInitialized(_this), "defaultMuted", false);

    _defineProperty(_assertThisInitialized(_this), "defaultPlaybackRate", 1.0);

    _defineProperty(_assertThisInitialized(_this), "mediaGroup", undefined);

    _defineProperty(_assertThisInitialized(_this), "mediaKeys", null);

    _defineProperty(_assertThisInitialized(_this), "mozAudioChannelType", undefined);

    _defineProperty(_assertThisInitialized(_this), "muted", false);

    _defineProperty(_assertThisInitialized(_this), "networkState", HTMLMediaElement.NETWORK_EMPTY);

    _defineProperty(_assertThisInitialized(_this), "playbackRate", 1);

    _defineProperty(_assertThisInitialized(_this), "preload", "auto");

    _defineProperty(_assertThisInitialized(_this), "loop", false);

    Object.assign(_WeakMap["default"].get(_assertThisInitialized(_this)), {
      buffered: undefined,
      currentSrc: url || "",
      duration: 0,
      ended: false,
      error: null,
      initialTime: 0,
      paused: true,
      readyState: HTMLMediaElement.HAVE_NOTHING,
      value: 1.0,
      currentTime: 0
    });

    _this.addEventListener("ended", function () {
      _WeakMap["default"].get(this).ended = true;
    });

    _this.addEventListener("play", function () {
      _WeakMap["default"].get(this).ended = false;
      _WeakMap["default"].get(this).error = null;
      _WeakMap["default"].get(this).paused = false;
    });

    _this.addEventListener("error", function () {
      _WeakMap["default"].get(this).error = true;
      _WeakMap["default"].get(this).ended = true;
      _WeakMap["default"].get(this).paused = false;
    });

    return _this;
  }

  _createClass(HTMLMediaElement, [{
    key: "canPlayType",
    value: function canPlayType(mediaType) {
      return 'maybe';
    }
  }, {
    key: "captureStream",
    value: function captureStream() {}
  }, {
    key: "fastSeek",
    value: function fastSeek() {}
  }, {
    key: "load",
    value: function load() {}
  }, {
    key: "pause",
    value: function pause() {}
  }, {
    key: "play",
    value: function play() {}
  }, {
    key: "currentTime",
    get: function get() {
      return _WeakMap["default"].get(this).currentTime;
    },
    set: function set(value) {
      _WeakMap["default"].get(this).currentTime = value;
    }
  }, {
    key: "src",
    get: function get() {
      return _WeakMap["default"].get(this).currentSrc;
    },
    set: function set(value) {
      _WeakMap["default"].get(this).currentSrc = value;
    }
  }, {
    key: "buffered",
    get: function get() {
      return _WeakMap["default"].get(this).buffered;
    }
  }, {
    key: "currentSrc",
    get: function get() {
      return _WeakMap["default"].get(this).currentSrc;
    }
  }, {
    key: "duration",
    get: function get() {
      return _WeakMap["default"].get(this).duration;
    }
  }, {
    key: "ended",
    get: function get() {
      return _WeakMap["default"].get(this).ended;
    }
  }, {
    key: "error",
    get: function get() {
      return _WeakMap["default"].get(this).error;
    }
  }, {
    key: "initialTime",
    get: function get() {
      return _WeakMap["default"].get(this).initialTime;
    }
  }, {
    key: "paused",
    get: function get() {
      return _WeakMap["default"].get(this).paused;
    }
  }, {
    key: "volume",
    get: function get() {
      return _WeakMap["default"].get(this).volume;
    },
    set: function set(value) {
      _WeakMap["default"].get(this).volume = value;
    }
  }]);

  return HTMLMediaElement;
}(_HTMLElement2["default"]);

exports["default"] = HTMLMediaElement;

},{"./HTMLElement":18,"./MediaError":29,"./util/WeakMap":54}],24:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));

var _Event = _interopRequireDefault(require("./Event"));

var _FileCache = _interopRequireDefault(require("./util/FileCache"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _BASE64_NAME = "data:application/javascript;base64,";
var _URI_NAME = "data:application/javascript,";

var _getPathFromBase64String = function _getPathFromBase64String(src) {
  if (src === null || src === undefined) {
    return src;
  }

  if (src.startsWith(_BASE64_NAME)) {
    var content = src.substring(_BASE64_NAME.length);
    var source = window.atob(content);
    var len = source.length;

    if (len > 0) {
      return _getDiskPathFromArrayBuffer(source, len);
    } else {
      return src;
    }
  } else if (src.startsWith(_URI_NAME)) {
    var _content = src.substring(_URI_NAME.length);

    var _source = decodeURIComponent(_content);

    var _len = _source.length;

    if (_len > 0) {
      return _getDiskPathFromArrayBuffer(_source, _len);
    } else {
      return src;
    }
  } else {
    return src;
  }
};

function _getDiskPathFromArrayBuffer(source, len) {
  var arrayBuffer = new ArrayBuffer(len);
  var uint8Array = new Uint8Array(arrayBuffer);

  for (var i = 0; i < len; i++) {
    uint8Array[i] = source.charCodeAt(i);
  }

  return _FileCache["default"].getCache(arrayBuffer);
}

var HTMLScriptElement = function (_HTMLElement) {
  _inherits(HTMLScriptElement, _HTMLElement);

  var _super = _createSuper(HTMLScriptElement);

  function HTMLScriptElement() {
    var _this;

    _classCallCheck(this, HTMLScriptElement);

    _this = _super.call(this, 'SCRIPT');

    var self = _assertThisInitialized(_this);

    var onAppend = function onAppend() {
      self.removeEventListener("append", onAppend);

      var src = _getPathFromBase64String(self.src);

      require(src);

      self.dispatchEvent(new _Event["default"]('load'));
    };

    _this.addEventListener("append", onAppend);

    return _this;
  }

  return HTMLScriptElement;
}(_HTMLElement2["default"]);

exports["default"] = HTMLScriptElement;

},{"./Event":10,"./HTMLElement":18,"./util/FileCache":53}],25:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _FontFace = _interopRequireDefault(require("./FontFace"));

var _HTMLElement2 = _interopRequireDefault(require("./HTMLElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HTMLStyleElement = function (_HTMLElement) {
  _inherits(HTMLStyleElement, _HTMLElement);

  var _super = _createSuper(HTMLStyleElement);

  function HTMLStyleElement() {
    var _this;

    _classCallCheck(this, HTMLStyleElement);

    _this = _super.call(this, "STYLE");

    var self = _assertThisInitialized(_this);

    var onAppend = function onAppend() {
      self.removeEventListener("append", onAppend);
      var textContent = self.textContent || self.innerHTML || "";
      var fontFaceStr = "";
      var start = 0;
      var length = textContent.length;
      var flag = 0;

      for (var index = 0; index < length; ++index) {
        if (start > 0) {
          if (textContent[index] === "{") {
            flag++;
          } else if (textContent[index] === "}") {
            flag--;

            if (flag === 0) {
              fontFaceStr = textContent.substring(start, index + 1);
              break;
            } else if (flag < 0) {
              break;
            }
          }
        } else {
          if (textContent[index] === "@" && textContent.substr(index, "@font-face".length) === "@font-face") {
            index += 9;
            start = index + 1;
          }
        }
      }

      if (fontFaceStr) {
        var fontFamily;
        var _length = fontFaceStr.length;

        var _start = fontFaceStr.indexOf("font-family");

        if (_start === -1) {
          return;
        }

        _start += "font-family".length + 1;
        var end = _start;

        for (; end < _length; ++end) {
          if (fontFaceStr[end] === ";") {
            fontFamily = fontFaceStr.substring(_start, end).trim();
            break;
          } else if (fontFaceStr[end] === ":") {
            _start = end + 1;
          }
        }

        if (!fontFamily) {
          return;
        }

        end = fontFaceStr.indexOf("url(");
        _start = 0;
        var source;

        for (; end < _length; ++end) {
          if (fontFaceStr[end] === "'" || fontFaceStr[end] === '"') {
            if (_start > 0) {
              source = fontFaceStr.substring(_start, end).trim();
              break;
            }

            _start = end + 1;
          }
        }

        if (source) {
          var fontFace = new _FontFace["default"](fontFamily, source);
          fontFace.load();
          document.fonts.add(fontFace);
        }
      }
    };

    _this.addEventListener("append", onAppend);

    return _this;
  }

  return HTMLStyleElement;
}(_HTMLElement2["default"]);

exports["default"] = HTMLStyleElement;

},{"./FontFace":12,"./HTMLElement":18}],26:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HTMLMediaElement2 = _interopRequireDefault(require("./HTMLMediaElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HTMLVideoElement = function (_HTMLMediaElement) {
  _inherits(HTMLVideoElement, _HTMLMediaElement);

  var _super = _createSuper(HTMLVideoElement);

  function HTMLVideoElement() {
    _classCallCheck(this, HTMLVideoElement);

    return _super.call(this, 'VIDEO');
  }

  _createClass(HTMLVideoElement, [{
    key: "canPlayType",
    value: function canPlayType(type) {
      return type === 'video/mp4';
    }
  }]);

  return HTMLVideoElement;
}(_HTMLMediaElement2["default"]);

exports["default"] = HTMLVideoElement;

},{"./HTMLMediaElement":23}],27:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _HTMLImageElement2 = _interopRequireDefault(require("./HTMLImageElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _Image = window.Image;

var Image = function (_HTMLImageElement) {
  _inherits(Image, _HTMLImageElement);

  var _super = _createSuper(Image);

  function Image(width, height) {
    _classCallCheck(this, Image);

    return _super.call(this, width, height, true);
  }

  return Image;
}(_HTMLImageElement2["default"]);

exports["default"] = Image;
var _creteImage = jsb.createImage;

if (_creteImage) {
  _Image.prototype.__proto__ = Image.prototype;
}

},{"./HTMLImageElement":21}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Location = function () {
  function Location() {
    _classCallCheck(this, Location);

    _defineProperty(this, "ancestorOrigins", "");

    _defineProperty(this, "hash", "");

    _defineProperty(this, "host", "");

    _defineProperty(this, "hostname", "");

    _defineProperty(this, "href", "game.js");

    _defineProperty(this, "origin", "");

    _defineProperty(this, "password", "");

    _defineProperty(this, "pathname", "game.js");

    _defineProperty(this, "port", "");

    _defineProperty(this, "protocol", "");

    _defineProperty(this, "search", "");

    _defineProperty(this, "username", "");
  }

  _createClass(Location, [{
    key: "assign",
    value: function assign() {}
  }, {
    key: "reload",
    value: function reload() {}
  }, {
    key: "replace",
    value: function replace() {}
  }, {
    key: "toString",
    value: function toString() {
      return "";
    }
  }]);

  return Location;
}();

exports["default"] = Location;

},{}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MEDIA_ERR_ABORTED = 1;
var MEDIA_ERR_NETWORK = 2;
var MEDIA_ERR_DECODE = 3;
var MEDIA_ERR_SRC_NOT_SUPPORTED = 4;

var MediaError = function () {
  function MediaError() {
    _classCallCheck(this, MediaError);
  }

  _createClass(MediaError, [{
    key: "code",
    get: function get() {
      return MEDIA_ERR_ABORTED;
    }
  }, {
    key: "message",
    get: function get() {
      return "";
    }
  }]);

  return MediaError;
}();

exports["default"] = MediaError;
module.exports = MediaError;

},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Navigator = function Navigator(platform, language) {
  _classCallCheck(this, Navigator);

  _defineProperty(this, "platform", "");

  _defineProperty(this, "language", "");

  _defineProperty(this, "appVersion", '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');

  _defineProperty(this, "userAgent", 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 NetType/WIFI Language/zh_CN');

  _defineProperty(this, "onLine", true);

  _defineProperty(this, "maxTouchPoints", 10);

  _defineProperty(this, "geolocation", {
    getCurrentPosition: function getCurrentPosition() {},
    watchPosition: function watchPosition() {},
    clearWatch: function clearWatch() {}
  });

  this.platform = platform;
  this.language = language;
};

exports["default"] = Navigator;

},{}],31:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _EventTarget2 = _interopRequireDefault(require("./EventTarget"));

var _Event = _interopRequireDefault(require("./Event"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Node = function (_EventTarget) {
  _inherits(Node, _EventTarget);

  var _super = _createSuper(Node);

  function Node(nodeName) {
    var _this;

    _classCallCheck(this, Node);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "childNodes", []);

    _defineProperty(_assertThisInitialized(_this), "parentNode", null);

    _defineProperty(_assertThisInitialized(_this), "_nodeName", "");

    _this._nodeName = nodeName;
    return _this;
  }

  _createClass(Node, [{
    key: "appendChild",
    value: function appendChild(node) {
      this.childNodes.push(node);
      node.parentNode = this;
      var nodeName = node.nodeName;

      if (nodeName === "SCRIPT" || nodeName === "STYLE") {
        node.dispatchEvent(new _Event["default"]("append"));
      }

      return node;
    }
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var copyNode = Object.create(this);
      Object.assign(copyNode, this);
      copyNode.parentNode = null;
      return copyNode;
    }
  }, {
    key: "removeChild",
    value: function removeChild(node) {
      var index = this.childNodes.findIndex(function (child) {
        return child === node;
      });

      if (index > -1) {
        var _node = this.childNodes.splice(index, 1)[0];
        _node.parentNode = null;
        return _node;
      }

      return null;
    }
  }, {
    key: "contains",
    value: function contains(node) {
      return this.childNodes.indexOf(node) > -1;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent() {
      var result = true;
      var length = this.childNodes.length;

      for (var index = length - 1; result && index >= 0; --index) {
        var _this$childNodes$inde;

        result = (_this$childNodes$inde = this.childNodes[index]).dispatchEvent.apply(_this$childNodes$inde, arguments);
      }

      if (result) {
        return _get(_getPrototypeOf(Node.prototype), "dispatchEvent", this).apply(this, arguments);
      }

      return false;
    }
  }, {
    key: "nodeName",
    get: function get() {
      return this._nodeName;
    }
  }]);

  return Node;
}(_EventTarget2["default"]);

exports["default"] = Node;

},{"./Event":10,"./EventTarget":11}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _WeakMap = _interopRequireDefault(require("./util/WeakMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NodeList = function () {
  function NodeList() {
    _classCallCheck(this, NodeList);

    _WeakMap["default"].set(this, {
      array: []
    });

    return new Proxy(this, {
      get: function get(target, key) {
        if (_typeof(key) === "symbol") {
          return function () {
            return "";
          };
        }

        if (/^[0-9]*$/.test(key)) {
          return _WeakMap["default"].get(target).array[key];
        }

        var result = target[key];

        if (typeof result === "function") {
          result = result.bind(target);
        }

        return result;
      }
    });
  }

  _createClass(NodeList, [{
    key: "push",
    value: function push(element) {
      _WeakMap["default"].get(this).array.push(element);
    }
  }, {
    key: "item",
    value: function item(index) {
      return _WeakMap["default"].get(this).array[index];
    }
  }, {
    key: "concat",
    value: function concat() {
      var array = _WeakMap["default"].get(this).array;

      return array.concat.apply(array, arguments);
    }
  }, {
    key: "length",
    get: function get() {
      return _WeakMap["default"].get(this).array.length;
    }
  }]);

  return NodeList;
}();

exports["default"] = NodeList;

},{"./util/WeakMap":54}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

window.jsb = window.jsb || {};

var Screen = function () {
  function Screen() {
    _classCallCheck(this, Screen);

    _defineProperty(this, "availTop", 0);

    _defineProperty(this, "availLeft", 0);

    _defineProperty(this, "availHeight", jsb.height);

    _defineProperty(this, "availWidth", jsb.width);

    _defineProperty(this, "colorDepth", 8);

    _defineProperty(this, "pixelDepth", 0);

    _defineProperty(this, "left", 0);

    _defineProperty(this, "top", 0);

    _defineProperty(this, "width", jsb.width);

    _defineProperty(this, "height", jsb.height);

    _defineProperty(this, "orientation", {
      type: 'portrait-primary'
    });
  }

  _createClass(Screen, [{
    key: "onorientationchange",
    value: function onorientationchange() {}
  }]);

  return Screen;
}();

exports["default"] = Screen;

},{}],34:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Event2 = _interopRequireDefault(require("./Event"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TouchEvent = function (_Event) {
  _inherits(TouchEvent, _Event);

  var _super = _createSuper(TouchEvent);

  function TouchEvent(type) {
    var _this;

    _classCallCheck(this, TouchEvent);

    _this = _super.call(this, type);
    _this.touches = [];
    _this.targetTouches = [];
    _this.changedTouches = [];
    return _this;
  }

  return TouchEvent;
}(_Event2["default"]);

exports["default"] = TouchEvent;

},{"./Event":10}],35:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Event = _interopRequireDefault(require("./Event"));

var _FileCache = _interopRequireDefault(require("./util/FileCache"));

var _XMLHttpRequestEventTarget = _interopRequireDefault(require("./XMLHttpRequestEventTarget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fsm = jsb.getFileSystemManager();
var _XMLHttpRequest = window.XMLHttpRequest;
window.jsb = window.jsb || {};

var XMLHttpRequest = function (_XMLHttpRequestEventT) {
  _inherits(XMLHttpRequest, _XMLHttpRequestEventT);

  var _super = _createSuper(XMLHttpRequest);

  function XMLHttpRequest() {
    var _this;

    _classCallCheck(this, XMLHttpRequest);

    _this = _super.call(this, new _XMLHttpRequest());

    _defineProperty(_assertThisInitialized(_this), "_isLocal", false);

    _defineProperty(_assertThisInitialized(_this), "_readyState", void 0);

    _defineProperty(_assertThisInitialized(_this), "_response", void 0);

    _defineProperty(_assertThisInitialized(_this), "_responseText", void 0);

    _defineProperty(_assertThisInitialized(_this), "_responseURL", void 0);

    _defineProperty(_assertThisInitialized(_this), "_responseXML", void 0);

    _defineProperty(_assertThisInitialized(_this), "_status", void 0);

    _defineProperty(_assertThisInitialized(_this), "_statusText", void 0);

    var xhr = _this._xhr;

    xhr.onreadystatechange = function (e) {
      var event = new _Event["default"]("readystatechange");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_assertThisInitialized(_this));

    return _this;
  }

  _createClass(XMLHttpRequest, [{
    key: "abort",
    value: function abort() {
      this._xhr.abort();
    }
  }, {
    key: "getAllResponseHeaders",
    value: function getAllResponseHeaders() {
      return this._xhr.getAllResponseHeaders();
    }
  }, {
    key: "getResponseHeader",
    value: function getResponseHeader(name) {
      return this._xhr.getResponseHeader(name);
    }
  }, {
    key: "open",
    value: function open(method, url, async, user, password) {
      if (typeof url === "string") {
        var _url = url.toLocaleString();

        if (_url.startsWith("http://") || _url.startsWith("https://")) {
          var _this$_xhr;

          this._isLocal = false;
          return (_this$_xhr = this._xhr).open.apply(_this$_xhr, arguments);
        }
      }

      this._isLocal = true;
      this._url = url;
    }
  }, {
    key: "overrideMimeType",
    value: function overrideMimeType() {
      var _this$_xhr2;

      return (_this$_xhr2 = this._xhr).overrideMimeType.apply(_this$_xhr2, arguments);
    }
  }, {
    key: "send",
    value: function send() {
      if (this._isLocal) {
        var self = this;
        var isBinary = this._xhr.responseType === "arraybuffer";
        fsm.readFile({
          filePath: this._url,
          encoding: isBinary ? "binary" : "utf8",
          success: function success(res) {
            self._status = 200;
            self._readyState = 4;
            self._response = self._responseText = res.data;

            if (isBinary) {
              _FileCache["default"].setCache(self._url, res.data);
            }

            var eventProgressStart = new _Event["default"]("progress");
            eventProgressStart.loaded = 0;
            eventProgressStart.total = isBinary ? res.data.byteLength : res.data.length;
            var eventProgressEnd = new _Event["default"]("progress");
            eventProgressEnd.loaded = eventProgressStart.total;
            eventProgressEnd.total = eventProgressStart.total;
            self.dispatchEvent(new _Event["default"]("loadstart"));
            self.dispatchEvent(eventProgressStart);
            self.dispatchEvent(eventProgressEnd);
            self.dispatchEvent(new _Event["default"]("load"));
          },
          fail: function (res) {
            if (res.errCode === 1) {
              self._status = 404;
              self._readyState = 4;
              self.dispatchEvent(new _Event["default"]("loadstart"));
              self.dispatchEvent(new _Event["default"]("load"));
            } else {
              this.dispatchEvent(new _Event["default"]("error"));
            }
          }.bind(this),
          complete: function () {
            this.dispatchEvent(new _Event["default"]("loadend"));
          }.bind(this)
        });
      } else {
        var _this$_xhr3;

        (_this$_xhr3 = this._xhr).send.apply(_this$_xhr3, arguments);
      }
    }
  }, {
    key: "setRequestHeader",
    value: function setRequestHeader() {
      var _this$_xhr4;

      (_this$_xhr4 = this._xhr).setRequestHeader.apply(_this$_xhr4, arguments);
    }
  }, {
    key: "readyState",
    get: function get() {
      if (this._isLocal) {
        return this._readyState;
      } else {
        return this._xhr.readyState;
      }
    }
  }, {
    key: "response",
    get: function get() {
      if (this._isLocal) {
        return this._response;
      } else {
        return this._xhr.response;
      }
    }
  }, {
    key: "responseText",
    get: function get() {
      if (this._isLocal) {
        return this._responseText;
      } else {
        return this._xhr.responseText;
      }
    }
  }, {
    key: "responseType",
    get: function get() {
      return this._xhr.responseType;
    },
    set: function set(value) {
      this._xhr.responseType = value;
    }
  }, {
    key: "responseURL",
    get: function get() {
      if (this._isLocal) {
        return this._responseURL;
      } else {
        return this._xhr.responseURL;
      }
    }
  }, {
    key: "responseXML",
    get: function get() {
      if (this._isLocal) {
        return this._responseXML;
      } else {
        return this._xhr.responseXML;
      }
    }
  }, {
    key: "status",
    get: function get() {
      if (this._isLocal) {
        return this._status;
      } else {
        return this._xhr.status;
      }
    }
  }, {
    key: "statusText",
    get: function get() {
      if (this._isLocal) {
        return this._statusText;
      } else {
        return this._xhr.statusText;
      }
    }
  }, {
    key: "timeout",
    get: function get() {
      return this._xhr.timeout;
    },
    set: function set(value) {
      this._xhr.timeout = value;
    }
  }, {
    key: "upload",
    get: function get() {
      return this._xhr.upload;
    }
  }, {
    key: "withCredentials",
    set: function set(value) {
      this._xhr.withCredentials = value;
    },
    get: function get() {
      return this._xhr.withCredentials;
    }
  }]);

  return XMLHttpRequest;
}(_XMLHttpRequestEventTarget["default"]);

exports["default"] = XMLHttpRequest;

},{"./Event":10,"./XMLHttpRequestEventTarget":36,"./util/FileCache":53}],36:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _EventTarget2 = _interopRequireDefault(require("./EventTarget"));

var _Event = _interopRequireDefault(require("./Event"));

var _FileCache = _interopRequireDefault(require("./util/FileCache"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var XMLHttpRequestEventTarget = function (_EventTarget) {
  _inherits(XMLHttpRequestEventTarget, _EventTarget);

  var _super = _createSuper(XMLHttpRequestEventTarget);

  function XMLHttpRequestEventTarget(xhr) {
    var _this;

    _classCallCheck(this, XMLHttpRequestEventTarget);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "_xhr", void 0);

    _this._xhr = xhr;

    xhr.onabort = function (e) {
      var event = new _Event["default"]("abort");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_assertThisInitialized(_this));

    xhr.onerror = function (e) {
      var event = new _Event["default"]("error");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_assertThisInitialized(_this));

    xhr.onload = function (e) {
      if (this.response instanceof ArrayBuffer) {
        _FileCache["default"].setItem(this.response, this._url);
      }

      var event = new _Event["default"]("load");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_assertThisInitialized(_this));

    xhr.onloadstart = function (e) {
      var event = new _Event["default"]("loadstart");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_assertThisInitialized(_this));

    xhr.onprogress = function (e) {
      var event = new _Event["default"]("progress");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_assertThisInitialized(_this));

    xhr.ontimeout = function (e) {
      var event = new _Event["default"]("timeout");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_assertThisInitialized(_this));

    xhr.onloadend = function (e) {
      var event = new _Event["default"]("loadend");
      this.dispatchEvent(Object.assign(event, e));
    }.bind(_assertThisInitialized(_this));

    return _this;
  }

  return XMLHttpRequestEventTarget;
}(_EventTarget2["default"]);

exports["default"] = XMLHttpRequestEventTarget;

},{"./Event":10,"./EventTarget":11,"./util/FileCache":53}],37:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AnalyserNode = function (_AudioNode) {
  _inherits(AnalyserNode, _AudioNode);

  var _super = _createSuper(AnalyserNode);

  function AnalyserNode(context, options) {
    var _this;

    _classCallCheck(this, AnalyserNode);

    _this = _super.call(this, context);
    _this._fftSize;
    _this.frequencyBinCount;
    _this.minDecibels;
    _this.maxDecibels;
    _this.smoothingTimeConstant;
    return _this;
  }

  _createClass(AnalyserNode, [{
    key: "getFloatFrequencyData",
    value: function getFloatFrequencyData(array) {}
  }, {
    key: "getByteFrequencyData",
    value: function getByteFrequencyData(dataArray) {
      return new Uint8Array(dataArray.length);
    }
  }, {
    key: "getFloatTimeDomainData",
    value: function getFloatTimeDomainData(dataArray) {}
  }, {
    key: "getByteTimeDomainData",
    value: function getByteTimeDomainData(dataArray) {}
  }, {
    key: "fftSize",
    set: function set(value) {
      this._fftSize = value;
      this.frequencyBinCount = value / 2;
    },
    get: function get() {
      return this._fftSize;
    }
  }]);

  return AnalyserNode;
}(_AudioNode2["default"]);

var _default = AnalyserNode;
exports["default"] = _default;

},{"./AudioNode":43}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _FileCache = _interopRequireDefault(require("../util/FileCache"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ae = jsb.AudioEngine;

var AudioBuffer = function () {
  function AudioBuffer(context, buffer) {
    _classCallCheck(this, AudioBuffer);

    this.context = context;
    this.url = "";
    this._sampleRate = 48000;
    this._length = 386681;
    this._duration = 0;
    this._numberOfChannels = 48000;

    _FileCache["default"].getPath(buffer, function (url) {
      if (!url) {
        return;
      }

      this.url = url;
      ae.preload(url, function (isSucceed, duration) {
        if (isSucceed) {
          this._duration = duration;
        }
      }.bind(this));
    }.bind(this));
  }

  _createClass(AudioBuffer, [{
    key: "sampleRate",
    get: function get() {
      return this._sampleRate;
    }
  }, {
    key: "length",
    get: function get() {
      return this._length;
    }
  }, {
    key: "duration",
    get: function get() {
      return this._duration;
    }
  }, {
    key: "numberOfChannels",
    get: function get() {
      return this._numberOfChannels;
    }
  }]);

  return AudioBuffer;
}();

var _default = AudioBuffer;
exports["default"] = _default;

},{"../util/FileCache":53}],39:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));

var _AudioParam = _interopRequireDefault(require("./AudioParam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AudioBufferSourceNode = function (_AudioNode) {
  _inherits(AudioBufferSourceNode, _AudioNode);

  var _super = _createSuper(AudioBufferSourceNode);

  function AudioBufferSourceNode(context, options) {
    var _this;

    _classCallCheck(this, AudioBufferSourceNode);

    _this = _super.call(this, context);
    _this.buffer = null;
    _this.detune = new _AudioParam["default"]({
      value: 0
    });
    _this._loop = false;
    _this.loopStart = 0;
    _this.loopEnd = 0;
    _this._playbackRate = new _AudioParam["default"]({
      value: 1.0
    });
    _this.audioEngine = jsb.AudioEngine;
    _this.audioID = -1;
    return _this;
  }

  _createClass(AudioBufferSourceNode, [{
    key: "start",
    value: function start(when, offset, duration) {
      if (!this.buffer) {
        return;
      }

      var audioEngine = this.audioEngine;

      if (this.audioID !== -1) {
        audioEngine.stop(this.audioID);
      }

      var audioID = this.audioID = audioEngine.play(this.buffer.url, this.loop, 1);
      audioEngine.setFinishCallback(audioID, this.onended);
      audioEngine.setCurrentTime(audioID, this.loopStart);
    }
  }, {
    key: "stop",
    value: function stop(when) {
      var audioEngine = this.audioEngine;

      if (this.audioID === -1) {
        return;
      }

      audioEngine.stop(this.audioID);
      this.audioID = -1;
    }
  }, {
    key: "onended",
    value: function onended() {}
  }, {
    key: "playbackRate",
    set: function set(value) {
      console.warn("playbackRate nonsupport");
      this._playbackRate = value;
    },
    get: function get() {
      return this._playbackRate;
    }
  }, {
    key: "loop",
    set: function set(value) {
      var audioEngine = this.audioEngine;
      var audioID = this.audioID;
      var loop = !!value;

      if (audioID !== -1 && audioEngine) {
        audioEngine.setLoop(audioID, loop);
      }

      this._loop = loop;
    },
    get: function get() {
      return this._loop;
    }
  }]);

  return AudioBufferSourceNode;
}(_AudioNode2["default"]);

var _default = AudioBufferSourceNode;
exports["default"] = _default;

},{"./AudioNode":43,"./AudioParam":44}],40:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BaseAudioContext2 = _interopRequireDefault(require("./BaseAudioContext"));

var _MediaElementAudioSourceNode = _interopRequireDefault(require("./MediaElementAudioSourceNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AudioContext = function (_BaseAudioContext) {
  _inherits(AudioContext, _BaseAudioContext);

  var _super = _createSuper(AudioContext);

  function AudioContext(options) {
    var _this;

    _classCallCheck(this, AudioContext);

    _this = _super.call(this);
    _this.baseLatency;
    _this.outputLatency;
    return _this;
  }

  _createClass(AudioContext, [{
    key: "close",
    value: function close() {
      console.log("AudioContext close");
    }
  }, {
    key: "createMediaElementSource",
    value: function createMediaElementSource(myMediaElement) {
      return new _MediaElementAudioSourceNode["default"](this, {
        mediaElement: myMediaElement
      });
    }
  }, {
    key: "createMediaStreamSource",
    value: function createMediaStreamSource() {}
  }, {
    key: "createMediaStreamDestination",
    value: function createMediaStreamDestination() {}
  }, {
    key: "createMediaStreamTrackSource",
    value: function createMediaStreamTrackSource() {}
  }, {
    key: "getOutputTimestamp",
    value: function getOutputTimestamp() {}
  }, {
    key: "resume",
    value: function resume() {}
  }, {
    key: "suspend",
    value: function suspend() {}
  }]);

  return AudioContext;
}(_BaseAudioContext2["default"]);

var _default = AudioContext;
exports["default"] = _default;

},{"./BaseAudioContext":46,"./MediaElementAudioSourceNode":49}],41:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AudioDestinationNode = function (_AudioNode) {
  _inherits(AudioDestinationNode, _AudioNode);

  var _super = _createSuper(AudioDestinationNode);

  function AudioDestinationNode(context) {
    var _this;

    _classCallCheck(this, AudioDestinationNode);

    _this = _super.call(this, context);
    _this.maxChannelCount = 2;
    return _this;
  }

  return AudioDestinationNode;
}(_AudioNode2["default"]);

var _default = AudioDestinationNode;
exports["default"] = _default;

},{"./AudioNode":43}],42:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));

var _AudioParam = _interopRequireDefault(require("./AudioParam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AudioListener = function (_AudioNode) {
  _inherits(AudioListener, _AudioNode);

  var _super = _createSuper(AudioListener);

  function AudioListener(context) {
    var _this;

    _classCallCheck(this, AudioListener);

    _this = _super.call(this, context);
    _this.positionX = new _AudioParam["default"]({
      value: 0
    });
    _this.positionY = new _AudioParam["default"]({
      value: 0
    });
    _this.positionZ = new _AudioParam["default"]({
      value: 0
    });
    _this.forwardX = new _AudioParam["default"]({
      value: 0
    });
    _this.forwardY = new _AudioParam["default"]({
      value: 0
    });
    _this.forwardZ = new _AudioParam["default"]({
      value: -1
    });
    _this.upX = new _AudioParam["default"]({
      value: 0
    });
    _this.upY = new _AudioParam["default"]({
      value: 1
    });
    _this.upZ = new _AudioParam["default"]({
      value: 0
    });
    return _this;
  }

  _createClass(AudioListener, [{
    key: "setOrientation",
    value: function setOrientation(x, y, z) {}
  }, {
    key: "setPosition",
    value: function setPosition(x, y, z) {
      x = x || 0;
      y = y || 0;
      z = z || 0;
      this.positionX.value = x;
      this.positionY.value = y;
      this.positionZ.value = z;
    }
  }]);

  return AudioListener;
}(_AudioNode2["default"]);

var _default = AudioListener;
exports["default"] = _default;

},{"./AudioNode":43,"./AudioParam":44}],43:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _EventTarget2 = _interopRequireDefault(require("../EventTarget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AudioNode = function (_EventTarget) {
  _inherits(AudioNode, _EventTarget);

  var _super = _createSuper(AudioNode);

  function AudioNode(context) {
    var _this;

    _classCallCheck(this, AudioNode);

    _this = _super.call(this);
    _this._context = context;
    _this.numberOfInputs = 1;
    _this.numberOfOutputs = 1;
    _this.channelCount = 2;
    _this.channelCountMode = "explicit";
    _this.channelInterpretation = "speakers";
    return _this;
  }

  _createClass(AudioNode, [{
    key: "connect",
    value: function connect(destination, outputIndex, inputIndex) {}
  }, {
    key: "disconnect",
    value: function disconnect() {}
  }, {
    key: "isNumber",
    value: function isNumber(obj) {
      return typeof obj === 'number' || obj instanceof Number;
    }
  }, {
    key: "context",
    get: function get() {
      return this._context;
    }
  }]);

  return AudioNode;
}(_EventTarget2["default"]);

var _default = AudioNode;
exports["default"] = _default;

},{"../EventTarget":11}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AudioParam = function () {
  function AudioParam() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AudioParam);

    this.automationRate = options.automationRate || "a-rate";
    this._defaultValue = options.defaultValue || 1;
    this._maxValue = options.maxValue || Number.MAX_VALUE;
    this._minValue = options.minValue || -Number.MAX_VALUE;
    this.value = options.value || 1;
  }

  _createClass(AudioParam, [{
    key: "setValueAtTime",
    value: function setValueAtTime(value, startTime) {
      this.value = value;
    }
  }, {
    key: "linearRampToValueAtTime",
    value: function linearRampToValueAtTime(value, endTime) {
      if (endTime < 0) {
        return;
      }

      var k = value / endTime;
      var self = this;

      var func = function func(dt) {
        dt = dt / 1000;

        if (dt > endTime) {
          dt = endTime;
        }

        if (dt < 0) {
          dt = 0;
        }

        endTime -= dt;
        self.value += dt * k;

        if (endTime > 0) {
          requestAnimationFrame(func);
        }
      };

      requestAnimationFrame(func);
    }
  }, {
    key: "exponentialRampToValueAtTime",
    value: function exponentialRampToValueAtTime() {}
  }, {
    key: "setTargetAtTime",
    value: function setTargetAtTime(target, startTime, timeConstant) {
      this.value = target;
    }
  }, {
    key: "setValueCurveAtTime",
    value: function setValueCurveAtTime() {}
  }, {
    key: "cancelScheduledValues",
    value: function cancelScheduledValues() {}
  }, {
    key: "cancelAndHoldAtTime",
    value: function cancelAndHoldAtTime() {}
  }, {
    key: "defaultValue",
    get: function get() {
      return this._defaultValue;
    }
  }, {
    key: "maxValue",
    get: function get() {
      return this._maxValue;
    }
  }, {
    key: "minValue",
    get: function get() {
      return this._minValue;
    }
  }, {
    key: "value",
    set: function set(value) {
      value = Math.min(this._maxValue, value);
      this._value = Math.max(this._minValue, value);
    },
    get: function get() {
      return this._value;
    }
  }]);

  return AudioParam;
}();

var _default = AudioParam;
exports["default"] = _default;

},{}],45:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AudioScheduledSourceNode = function (_AudioNode) {
  _inherits(AudioScheduledSourceNode, _AudioNode);

  var _super = _createSuper(AudioScheduledSourceNode);

  function AudioScheduledSourceNode(context) {
    _classCallCheck(this, AudioScheduledSourceNode);

    return _super.call(this, context);
  }

  _createClass(AudioScheduledSourceNode, [{
    key: "onended",
    value: function onended(event) {}
  }, {
    key: "start",
    value: function start(when, offset, duration) {}
  }, {
    key: "stop",
    value: function stop(when) {}
  }]);

  return AudioScheduledSourceNode;
}(_AudioNode2["default"]);

var _default = AudioScheduledSourceNode;
exports["default"] = _default;

},{"./AudioNode":43}],46:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _EventTarget2 = _interopRequireDefault(require("../EventTarget"));

var _AudioListener = _interopRequireDefault(require("./AudioListener"));

var _PeriodicWave = _interopRequireDefault(require("./PeriodicWave"));

var _AudioBuffer = _interopRequireDefault(require("./AudioBuffer"));

var _DynamicsCompressorNode = _interopRequireDefault(require("./DynamicsCompressorNode"));

var _AudioBufferSourceNode = _interopRequireDefault(require("./AudioBufferSourceNode"));

var _AudioDestinationNode = _interopRequireDefault(require("./AudioDestinationNode"));

var _OscillatorNode = _interopRequireDefault(require("./OscillatorNode"));

var _AnalyserNode = _interopRequireDefault(require("./AnalyserNode"));

var _PannerNode = _interopRequireDefault(require("./PannerNode"));

var _GainNode = _interopRequireDefault(require("./GainNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BaseAudioContext = function (_EventTarget) {
  _inherits(BaseAudioContext, _EventTarget);

  var _super = _createSuper(BaseAudioContext);

  function BaseAudioContext() {
    var _this;

    _classCallCheck(this, BaseAudioContext);

    _this = _super.call(this);
    _this.audioWorklet;
    _this.currentTime = 0;
    _this.destination = new _AudioDestinationNode["default"](_assertThisInitialized(_this));
    _this.listener = new _AudioListener["default"](_assertThisInitialized(_this));
    _this.sampleRate;
    _this.state = "running";
    return _this;
  }

  _createClass(BaseAudioContext, [{
    key: "createAnalyser",
    value: function createAnalyser() {
      return new _AnalyserNode["default"](this);
    }
  }, {
    key: "createBiquadFilter",
    value: function createBiquadFilter() {}
  }, {
    key: "createBuffer",
    value: function createBuffer() {}
  }, {
    key: "createBufferSource",
    value: function createBufferSource() {
      return new _AudioBufferSourceNode["default"](this);
    }
  }, {
    key: "createConstantSource",
    value: function createConstantSource() {}
  }, {
    key: "createChannelMerger",
    value: function createChannelMerger() {}
  }, {
    key: "createChannelSplitter",
    value: function createChannelSplitter() {}
  }, {
    key: "createConvolver",
    value: function createConvolver() {}
  }, {
    key: "createDelay",
    value: function createDelay() {}
  }, {
    key: "createDynamicsCompressor",
    value: function createDynamicsCompressor() {
      return new _DynamicsCompressorNode["default"](this);
    }
  }, {
    key: "createGain",
    value: function createGain() {
      return new _GainNode["default"](this);
    }
  }, {
    key: "createIIRFilter",
    value: function createIIRFilter() {}
  }, {
    key: "createOscillator",
    value: function createOscillator() {
      return new _OscillatorNode["default"](this);
    }
  }, {
    key: "createPanner",
    value: function createPanner() {
      return new _PannerNode["default"](this);
    }
  }, {
    key: "createPeriodicWave",
    value: function createPeriodicWave() {
      return new _PeriodicWave["default"](this);
    }
  }, {
    key: "createScriptProcessor",
    value: function createScriptProcessor() {}
  }, {
    key: "createStereoPanner",
    value: function createStereoPanner() {}
  }, {
    key: "createWaveShaper",
    value: function createWaveShaper() {}
  }, {
    key: "decodeAudioData",
    value: function decodeAudioData(audioData, callFunc) {
      callFunc(new _AudioBuffer["default"](this, audioData));
    }
  }, {
    key: "onstatechange",
    value: function onstatechange() {}
  }]);

  return BaseAudioContext;
}(_EventTarget2["default"]);

var _default = BaseAudioContext;
exports["default"] = _default;

},{"../EventTarget":11,"./AnalyserNode":37,"./AudioBuffer":38,"./AudioBufferSourceNode":39,"./AudioDestinationNode":41,"./AudioListener":42,"./DynamicsCompressorNode":47,"./GainNode":48,"./OscillatorNode":50,"./PannerNode":51,"./PeriodicWave":52}],47:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));

var _AudioParam = _interopRequireDefault(require("./AudioParam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DynamicsCompressorNode = function (_AudioNode) {
  _inherits(DynamicsCompressorNode, _AudioNode);

  var _super = _createSuper(DynamicsCompressorNode);

  function DynamicsCompressorNode(context) {
    var _this;

    _classCallCheck(this, DynamicsCompressorNode);

    _this = _super.call(this, context);
    _this._threshold = new _AudioParam["default"]({
      value: -24,
      defaultValue: -24,
      maxValue: 0,
      minValue: -100
    });
    _this._knee = new _AudioParam["default"]({
      value: 30,
      defaultValue: 30,
      maxValue: 40,
      minValue: 0
    });
    _this._ratio = new _AudioParam["default"]({
      value: 12,
      defaultValue: 12,
      maxValue: 20,
      minValue: 1
    });
    _this._reduction = new _AudioParam["default"]({
      value: 0,
      defaultValue: 0,
      maxValue: 0,
      minValue: -20
    });
    _this._attack = new _AudioParam["default"]({
      value: 0.003,
      defaultValue: 0.003,
      maxValue: 1,
      minValue: 0
    });
    _this._release = new _AudioParam["default"]({
      value: 0.25,
      defaultValue: 0.25,
      maxValue: 1,
      minValue: 0
    });
    return _this;
  }

  _createClass(DynamicsCompressorNode, [{
    key: "threshold",
    get: function get() {
      return this._threshold;
    }
  }, {
    key: "keen",
    get: function get() {
      return this._keen;
    }
  }, {
    key: "ratio",
    get: function get() {
      return this._ratio;
    }
  }, {
    key: "reduction",
    get: function get() {
      return this._reduction;
    }
  }, {
    key: "attack",
    get: function get() {
      return this._attack;
    }
  }, {
    key: "release",
    get: function get() {
      return this._release;
    }
  }]);

  return DynamicsCompressorNode;
}(_AudioNode2["default"]);

var _default = DynamicsCompressorNode;
exports["default"] = _default;

},{"./AudioNode":43,"./AudioParam":44}],48:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));

var _AudioParam = _interopRequireDefault(require("./AudioParam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var GainNode = function (_AudioNode) {
  _inherits(GainNode, _AudioNode);

  var _super = _createSuper(GainNode);

  function GainNode(context, options) {
    var _this;

    _classCallCheck(this, GainNode);

    _this = _super.call(this, context);
    _this._gain = options && options.gain || new _AudioParam["default"]();
    return _this;
  }

  _createClass(GainNode, [{
    key: "gain",
    get: function get() {
      return this._gain;
    }
  }]);

  return GainNode;
}(_AudioNode2["default"]);

var _default = GainNode;
exports["default"] = _default;

},{"./AudioNode":43,"./AudioParam":44}],49:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MediaElementAudioSourceNode = function (_AudioNode) {
  _inherits(MediaElementAudioSourceNode, _AudioNode);

  var _super = _createSuper(MediaElementAudioSourceNode);

  function MediaElementAudioSourceNode(context, options) {
    _classCallCheck(this, MediaElementAudioSourceNode);

    return _super.call(this, context);
  }

  return MediaElementAudioSourceNode;
}(_AudioNode2["default"]);

var _default = MediaElementAudioSourceNode;
exports["default"] = _default;

},{"./AudioNode":43}],50:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AudioScheduledSourceNode = _interopRequireDefault(require("./AudioScheduledSourceNode"));

var _AudioParam = _interopRequireDefault(require("./AudioParam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var types = {
  "sine": 0,
  "square": 0,
  "sawtooth": 0,
  "triangle": 0,
  "custom": 0
};

var OscillatorNode = function (_AudioScheduledSource) {
  _inherits(OscillatorNode, _AudioScheduledSource);

  var _super = _createSuper(OscillatorNode);

  function OscillatorNode(context, options) {
    var _this;

    _classCallCheck(this, OscillatorNode);

    _this = _super.call(this);
    options = options || {};
    _this.frequency = new _AudioParam["default"]({
      value: _this.isNumber(options.frequency) ? options.frequency : 440
    });
    _this.detune = new _AudioParam["default"]({
      value: _this.isNumber(options.detune) ? options.detune : 0
    });
    _this.type = options.type in types ? options.type : "sine";
    return _this;
  }

  _createClass(OscillatorNode, [{
    key: "setPeriodicWave",
    value: function setPeriodicWave(wave) {}
  }, {
    key: "start",
    value: function start(when) {}
  }, {
    key: "stop",
    value: function stop(wen) {}
  }]);

  return OscillatorNode;
}(_AudioScheduledSourceNode["default"]);

var _default = OscillatorNode;
exports["default"] = _default;

},{"./AudioParam":44,"./AudioScheduledSourceNode":45}],51:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AudioNode2 = _interopRequireDefault(require("./AudioNode"));

var _AudioParam = _interopRequireDefault(require("./AudioParam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PannerNode = function (_AudioNode) {
  _inherits(PannerNode, _AudioNode);

  var _super = _createSuper(PannerNode);

  function PannerNode(context, options) {
    var _this;

    _classCallCheck(this, PannerNode);

    _this = _super.call(this, context);
    _this.coneInnerAngle = 360;
    _this.coneOuterAngle = 360;
    _this.coneOuterGain = 0;
    _this.distanceModel = "inverse";
    _this.maxDistance = 10000;
    _this.orientationX = new _AudioParam["default"]({
      value: 1
    });
    _this.orientationY = new _AudioParam["default"]({
      value: 0
    });
    _this.orientationZ = new _AudioParam["default"]({
      value: 0
    });
    _this.panningModel = "equalpower";
    _this.positionX = new _AudioParam["default"]({
      value: 0
    });
    _this.positionY = new _AudioParam["default"]({
      value: 0
    });
    _this.positionZ = new _AudioParam["default"]({
      value: 0
    });
    _this.refDistance = 1;
    _this.rolloffFactor = 1;
    return _this;
  }

  _createClass(PannerNode, [{
    key: "setPosition",
    value: function setPosition(x, y, z) {
      this.positionX = x;
      this.positionY = y;
      this.positionZ = z;
    }
  }, {
    key: "setOrientation",
    value: function setOrientation(x, y, z) {
      this.orientationX = x;
      this.orientationY = y;
      this.orientationZ = z;
    }
  }, {
    key: "setVelocity",
    value: function setVelocity() {}
  }]);

  return PannerNode;
}(_AudioNode2["default"]);

var _default = PannerNode;
exports["default"] = _default;

},{"./AudioNode":43,"./AudioParam":44}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PeriodicWave = function PeriodicWave(context, options) {
  _classCallCheck(this, PeriodicWave);
};

var _default = PeriodicWave;
exports["default"] = _default;

},{}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var md5 = require("../../lib/md5.min");

var fileMgr = jsb.getFileSystemManager();
var cacheDir = jsb.env.USER_DATA_PATH + "/fileCache/";

var FileCache = function () {
  function FileCache() {
    _classCallCheck(this, FileCache);

    this._caches = {};
  }

  _createClass(FileCache, [{
    key: "getCache",
    value: function getCache(data) {
      var key = FileCache._genDataKey(data);

      if (key in this._caches) {
        return this._caches[key];
      } else {
        return "";
      }
    }
  }, {
    key: "setCache",
    value: function setCache(path, data) {
      var key = FileCache._genDataKey(data);

      this._caches[key] = path;
    }
  }, {
    key: "setItem",
    value: function setItem(data, path, key, callBack) {
      key = key || FileCache._genDataKey(data);
      var caches = this._caches;

      if (key in caches) {
        callBack && callBack(caches[key]);
        return;
      }

      if (!path) {
        path = cacheDir + key;
        fileMgr.writeFile({
          filePath: path,
          data: data,
          encoding: "binary",
          success: function success() {
            caches[key] = path;
            callBack && callBack(path);
          },
          fail: function fail() {
            callBack && callBack();
            throw path + "writeFile fail!";
          }
        });
      }
    }
  }, {
    key: "getPath",
    value: function getPath(data, callBack) {
      var key = FileCache._genDataKey(data);

      var caches = this._caches;

      if (key in caches) {
        callBack(caches[key]);
      } else {
        this.setItem(data, undefined, key, callBack);
      }
    }
  }], [{
    key: "_genDataKey",
    value: function _genDataKey(data) {
      var view = new DataView(data);
      var length = view.byteLength / 4;
      var count = 10;
      var space = length / count;
      var key = "length:" + length;
      key += "first:" + view.getInt32(0);
      key += "last:" + view.getInt32(length - 1);

      while (count--) {
        key += count + ":" + view.getInt32(Math.floor(space * count));
      }

      return md5(key);
    }
  }]);

  return FileCache;
}();

try {
  fileMgr.accessSync(cacheDir);
  fileMgr.rmdirSync(cacheDir, true);
} catch (e) {}

fileMgr.mkdirSync(cacheDir, true);

var _default = new FileCache();

exports["default"] = _default;

},{"../../lib/md5.min":2}],54:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = new WeakMap();

exports["default"] = _default;

},{}],55:[function(require,module,exports){
"use strict";

var _Audio = _interopRequireDefault(require("./Audio"));

var _AudioContext = _interopRequireDefault(require("./audioContext/AudioContext"));

var _DeviceMotionEvent = _interopRequireDefault(require("./DeviceMotionEvent"));

var _Document = _interopRequireDefault(require("./Document"));

var _Event = _interopRequireDefault(require("./Event"));

var _FontFace = _interopRequireDefault(require("./FontFace"));

var _FontFaceSet = _interopRequireDefault(require("./FontFaceSet"));

var _EventTarget = _interopRequireDefault(require("./EventTarget"));

var _HTMLElement = _interopRequireDefault(require("./HTMLElement"));

var _HTMLAudioElement = _interopRequireDefault(require("./HTMLAudioElement"));

var _HTMLCanvasElement = _interopRequireDefault(require("./HTMLCanvasElement"));

var _HTMLImageElement = _interopRequireDefault(require("./HTMLImageElement"));

var _Image = _interopRequireDefault(require("./Image"));

var _Location = _interopRequireDefault(require("./Location"));

var _Navigator = _interopRequireDefault(require("./Navigator"));

var _Screen = _interopRequireDefault(require("./Screen"));

var _TouchEvent = _interopRequireDefault(require("./TouchEvent"));

var _XMLHttpRequest = _interopRequireDefault(require("./XMLHttpRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.jsb = window.jsb || {};
window.clientTop = 0;
window.clientLeft = 0;
window.devicePixelRatio = jsb.pixelRatio;
window.document = new _Document["default"]();
window.frameElement = null;
window.fullScreen = true;
window.innerHeight = jsb.height;
window.innerWidth = jsb.width;
window.length = 0;
window.location = new _Location["default"]();
window.name = "runtime";
window.navigator = new _Navigator["default"](jsb.platform, jsb.language);
window.outerHeight = jsb.height;
window.outerWidth = jsb.width;
window.pageXOffset = 0;
window.pageYOffset = 0;
window.parent = window;
window.screen = new _Screen["default"]();
window.screenLeft = 0;
window.screenTop = 0;
window.screenX = 0;
window.screenY = 0;
window.scrollX = 0;
window.scrollY = 0;
window.self = window;
window.top = window;
window.window = window;
window.alert = window.console.error;

var _require = require('../lib/base64.min.js'),
    btoa = _require.btoa,
    atob = _require.atob;

window.atob = atob;
window.btoa = btoa;

window.close = function () {
  console.warn("window.close() is deprecated!");
};

window.print = window.console.log;
window.addEventListener = _EventTarget["default"].prototype.addEventListener;
window.removeEventListener = _EventTarget["default"].prototype.removeEventListener;
var _dispatchEvent = _EventTarget["default"].prototype.dispatchEvent;

window.dispatchEvent = function (event) {
  if (window.document.dispatchEvent(event)) {
    return _dispatchEvent.apply(this || window, arguments);
  }

  return false;
};

window.getComputedStyle = function () {
  return {
    position: 'absolute',
    left: '0px',
    top: '0px',
    height: '0px',
    paddingLeft: 0
  };
};

jsb.onWindowResize(function (width, height) {
  window.innerWidth = width;
  window.innerHeight = height;
  window.outerWidth = window.innerWidth;
  window.outerHeight = window.innerHeight;
  window.screen.availWidth = window.innerWidth;
  window.screen.availHeight = window.innerHeight;
  window.screen.width = window.innerWidth;
  window.screen.height = window.innerHeight;
  var event = new _Event["default"]("resize");
  window.dispatchEvent(event);
});

window.stop = function () {
  console.warn("window.stop() not implemented");
};

window.Audio = _Audio["default"];
window.AudioContext = _AudioContext["default"];
window.DeviceMotionEvent = _DeviceMotionEvent["default"];
window.Event = _Event["default"];
window.FontFace = _FontFace["default"];
window.FontFaceSet = _FontFaceSet["default"];
window.HTMLElement = _HTMLElement["default"];
window.HTMLAudioElement = _HTMLAudioElement["default"];
window.HTMLCanvasElement = _HTMLCanvasElement["default"];
window.HTMLImageElement = _HTMLImageElement["default"];
window.Image = _Image["default"];
window.TouchEvent = _TouchEvent["default"];
window.XMLHttpRequest = _XMLHttpRequest["default"];

if (!window.Blob || !window.URL) {
  var _require2 = require('./Blob.js'),
      Blob = _require2.Blob,
      URL = _require2.URL;

  window.Blob = Blob;
  window.URL = URL;
}

if (!window.DOMParser) {
  window.DOMParser = require('./xmldom/dom-parser.js').DOMParser;
}

},{"../lib/base64.min.js":1,"./Audio":3,"./Blob.js":4,"./DeviceMotionEvent":7,"./Document":8,"./Event":10,"./EventTarget":11,"./FontFace":12,"./FontFaceSet":13,"./HTMLAudioElement":15,"./HTMLCanvasElement":17,"./HTMLElement":18,"./HTMLImageElement":21,"./Image":27,"./Location":28,"./Navigator":30,"./Screen":33,"./TouchEvent":34,"./XMLHttpRequest":35,"./audioContext/AudioContext":40,"./xmldom/dom-parser.js":56}],56:[function(require,module,exports){
"use strict";

function DOMParser(options) {
  this.options = options || {
    locator: {}
  };
}

DOMParser.prototype.parseFromString = function (source, mimeType) {
  var options = this.options;
  var sax = new XMLReader();
  var domBuilder = options.domBuilder || new DOMHandler();
  var errorHandler = options.errorHandler;
  var locator = options.locator;
  var defaultNSMap = options.xmlns || {};
  var isHTML = /\/x?html?$/.test(mimeType);
  var entityMap = isHTML ? htmlEntity.entityMap : {
    'lt': '<',
    'gt': '>',
    'amp': '&',
    'quot': '"',
    'apos': "'"
  };

  if (locator) {
    domBuilder.setDocumentLocator(locator);
  }

  sax.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
  sax.domBuilder = options.domBuilder || domBuilder;

  if (isHTML) {
    defaultNSMap[''] = 'http://www.w3.org/1999/xhtml';
  }

  defaultNSMap.xml = defaultNSMap.xml || 'http://www.w3.org/XML/1998/namespace';

  if (source) {
    sax.parse(source, defaultNSMap, entityMap);
  } else {
    sax.errorHandler.error("invalid doc source");
  }

  return domBuilder.doc;
};

function buildErrorHandler(errorImpl, domBuilder, locator) {
  if (!errorImpl) {
    if (domBuilder instanceof DOMHandler) {
      return domBuilder;
    }

    errorImpl = domBuilder;
  }

  var errorHandler = {};
  var isCallback = errorImpl instanceof Function;
  locator = locator || {};

  function build(key) {
    var fn = errorImpl[key];

    if (!fn && isCallback) {
      fn = errorImpl.length == 2 ? function (msg) {
        errorImpl(key, msg);
      } : errorImpl;
    }

    errorHandler[key] = fn && function (msg) {
      fn('[xmldom ' + key + ']\t' + msg + _locator(locator));
    } || function () {};
  }

  build('warning');
  build('error');
  build('fatalError');
  return errorHandler;
}

function DOMHandler() {
  this.cdata = false;
}

function position(locator, node) {
  node.lineNumber = locator.lineNumber;
  node.columnNumber = locator.columnNumber;
}

DOMHandler.prototype = {
  startDocument: function startDocument() {
    this.doc = new DOMImplementation().createDocument(null, null, null);

    if (this.locator) {
      this.doc.documentURI = this.locator.systemId;
    }
  },
  startElement: function startElement(namespaceURI, localName, qName, attrs) {
    var doc = this.doc;
    var el = doc.createElementNS(namespaceURI, qName || localName);
    var len = attrs.length;
    appendElement(this, el);
    this.currentElement = el;
    this.locator && position(this.locator, el);

    for (var i = 0; i < len; i++) {
      var namespaceURI = attrs.getURI(i);
      var value = attrs.getValue(i);
      var qName = attrs.getQName(i);
      var attr = doc.createAttributeNS(namespaceURI, qName);
      this.locator && position(attrs.getLocator(i), attr);
      attr.value = attr.nodeValue = value;
      el.setAttributeNode(attr);
    }
  },
  endElement: function endElement(namespaceURI, localName, qName) {
    var current = this.currentElement;
    var tagName = current.tagName;
    this.currentElement = current.parentNode;
  },
  startPrefixMapping: function startPrefixMapping(prefix, uri) {},
  endPrefixMapping: function endPrefixMapping(prefix) {},
  processingInstruction: function processingInstruction(target, data) {
    var ins = this.doc.createProcessingInstruction(target, data);
    this.locator && position(this.locator, ins);
    appendElement(this, ins);
  },
  ignorableWhitespace: function ignorableWhitespace(ch, start, length) {},
  characters: function characters(chars, start, length) {
    chars = _toString.apply(this, arguments);

    if (chars) {
      if (this.cdata) {
        var charNode = this.doc.createCDATASection(chars);
      } else {
        var charNode = this.doc.createTextNode(chars);
      }

      if (this.currentElement) {
        this.currentElement.appendChild(charNode);
      } else if (/^\s*$/.test(chars)) {
        this.doc.appendChild(charNode);
      }

      this.locator && position(this.locator, charNode);
    }
  },
  skippedEntity: function skippedEntity(name) {},
  endDocument: function endDocument() {
    this.doc.normalize();
  },
  setDocumentLocator: function setDocumentLocator(locator) {
    if (this.locator = locator) {
      locator.lineNumber = 0;
    }
  },
  comment: function comment(chars, start, length) {
    chars = _toString.apply(this, arguments);
    var comm = this.doc.createComment(chars);
    this.locator && position(this.locator, comm);
    appendElement(this, comm);
  },
  startCDATA: function startCDATA() {
    this.cdata = true;
  },
  endCDATA: function endCDATA() {
    this.cdata = false;
  },
  startDTD: function startDTD(name, publicId, systemId) {
    var impl = this.doc.implementation;

    if (impl && impl.createDocumentType) {
      var dt = impl.createDocumentType(name, publicId, systemId);
      this.locator && position(this.locator, dt);
      appendElement(this, dt);
    }
  },
  warning: function warning(error) {
    console.warn('[xmldom warning]\t' + error, _locator(this.locator));
  },
  error: function error(_error) {
    console.error('[xmldom error]\t' + _error, _locator(this.locator));
  },
  fatalError: function fatalError(error) {
    console.error('[xmldom fatalError]\t' + error, _locator(this.locator));
    throw error;
  }
};

function _locator(l) {
  if (l) {
    return '\n@' + (l.systemId || '') + '#[line:' + l.lineNumber + ',col:' + l.columnNumber + ']';
  }
}

function _toString(chars, start, length) {
  if (typeof chars == 'string') {
    return chars.substr(start, length);
  } else {
    if (chars.length >= start + length || start) {
      return new java.lang.String(chars, start, length) + '';
    }

    return chars;
  }
}

"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (key) {
  DOMHandler.prototype[key] = function () {
    return null;
  };
});

function appendElement(hander, node) {
  if (!hander.currentElement) {
    hander.doc.appendChild(node);
  } else {
    hander.currentElement.appendChild(node);
  }
}

var htmlEntity = require('./entities');

var XMLReader = require('./sax').XMLReader;

var DOMImplementation = exports.DOMImplementation = require('./dom').DOMImplementation;

exports.XMLSerializer = require('./dom').XMLSerializer;
exports.DOMParser = DOMParser;

},{"./dom":57,"./entities":58,"./sax":59}],57:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function copy(src, dest) {
  for (var p in src) {
    dest[p] = src[p];
  }
}

function _extends(Class, Super) {
  var pt = Class.prototype;

  if (!(pt instanceof Super)) {
    var t = function t() {};

    ;
    t.prototype = Super.prototype;
    t = new t();
    copy(pt, t);
    Class.prototype = pt = t;
  }

  if (pt.constructor != Class) {
    if (typeof Class != 'function') {
      console.error("unknow Class:" + Class);
    }

    pt.constructor = Class;
  }
}

var htmlns = 'http://www.w3.org/1999/xhtml';
var NodeType = {};
var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
var TEXT_NODE = NodeType.TEXT_NODE = 3;
var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
var ExceptionCode = {};
var ExceptionMessage = {};
var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);

function DOMException(code, message) {
  if (message instanceof Error) {
    var error = message;
  } else {
    error = this;
    Error.call(this, ExceptionMessage[code]);
    this.message = ExceptionMessage[code];
    if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
  }

  error.code = code;
  if (message) this.message = this.message + ": " + message;
  return error;
}

;
DOMException.prototype = Error.prototype;
copy(ExceptionCode, DOMException);

function NodeList() {}

;
NodeList.prototype = {
  length: 0,
  item: function item(index) {
    return this[index] || null;
  },
  toString: function toString(isHTML, nodeFilter) {
    for (var buf = [], i = 0; i < this.length; i++) {
      serializeToString(this[i], buf, isHTML, nodeFilter);
    }

    return buf.join('');
  }
};

function LiveNodeList(node, refresh) {
  this._node = node;
  this._refresh = refresh;

  _updateLiveList(this);
}

function _updateLiveList(list) {
  var inc = list._node._inc || list._node.ownerDocument._inc;

  if (list._inc != inc) {
    var ls = list._refresh(list._node);

    __set__(list, 'length', ls.length);

    copy(ls, list);
    list._inc = inc;
  }
}

LiveNodeList.prototype.item = function (i) {
  _updateLiveList(this);

  return this[i];
};

_extends(LiveNodeList, NodeList);

function NamedNodeMap() {}

;

function _findNodeIndex(list, node) {
  var i = list.length;

  while (i--) {
    if (list[i] === node) {
      return i;
    }
  }
}

function _addNamedNode(el, list, newAttr, oldAttr) {
  if (oldAttr) {
    list[_findNodeIndex(list, oldAttr)] = newAttr;
  } else {
    list[list.length++] = newAttr;
  }

  if (el) {
    newAttr.ownerElement = el;
    var doc = el.ownerDocument;

    if (doc) {
      oldAttr && _onRemoveAttribute(doc, el, oldAttr);

      _onAddAttribute(doc, el, newAttr);
    }
  }
}

function _removeNamedNode(el, list, attr) {
  var i = _findNodeIndex(list, attr);

  if (i >= 0) {
    var lastIndex = list.length - 1;

    while (i < lastIndex) {
      list[i] = list[++i];
    }

    list.length = lastIndex;

    if (el) {
      var doc = el.ownerDocument;

      if (doc) {
        _onRemoveAttribute(doc, el, attr);

        attr.ownerElement = null;
      }
    }
  } else {
    throw DOMException(NOT_FOUND_ERR, new Error(el.tagName + '@' + attr));
  }
}

NamedNodeMap.prototype = {
  length: 0,
  item: NodeList.prototype.item,
  getNamedItem: function getNamedItem(key) {
    var i = this.length;

    while (i--) {
      var attr = this[i];

      if (attr.nodeName == key) {
        return attr;
      }
    }
  },
  setNamedItem: function setNamedItem(attr) {
    var el = attr.ownerElement;

    if (el && el != this._ownerElement) {
      throw new DOMException(INUSE_ATTRIBUTE_ERR);
    }

    var oldAttr = this.getNamedItem(attr.nodeName);

    _addNamedNode(this._ownerElement, this, attr, oldAttr);

    return oldAttr;
  },
  setNamedItemNS: function setNamedItemNS(attr) {
    var el = attr.ownerElement,
        oldAttr;

    if (el && el != this._ownerElement) {
      throw new DOMException(INUSE_ATTRIBUTE_ERR);
    }

    oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);

    _addNamedNode(this._ownerElement, this, attr, oldAttr);

    return oldAttr;
  },
  removeNamedItem: function removeNamedItem(key) {
    var attr = this.getNamedItem(key);

    _removeNamedNode(this._ownerElement, this, attr);

    return attr;
  },
  removeNamedItemNS: function removeNamedItemNS(namespaceURI, localName) {
    var attr = this.getNamedItemNS(namespaceURI, localName);

    _removeNamedNode(this._ownerElement, this, attr);

    return attr;
  },
  getNamedItemNS: function getNamedItemNS(namespaceURI, localName) {
    var i = this.length;

    while (i--) {
      var node = this[i];

      if (node.localName == localName && node.namespaceURI == namespaceURI) {
        return node;
      }
    }

    return null;
  }
};

function DOMImplementation(features) {
  this._features = {};

  if (features) {
    for (var feature in features) {
      this._features = features[feature];
    }
  }
}

;
DOMImplementation.prototype = {
  hasFeature: function hasFeature(feature, version) {
    var versions = this._features[feature.toLowerCase()];

    if (versions && (!version || version in versions)) {
      return true;
    } else {
      return false;
    }
  },
  createDocument: function createDocument(namespaceURI, qualifiedName, doctype) {
    var doc = new Document();
    doc.implementation = this;
    doc.childNodes = new NodeList();
    doc.doctype = doctype;

    if (doctype) {
      doc.appendChild(doctype);
    }

    if (qualifiedName) {
      var root = doc.createElementNS(namespaceURI, qualifiedName);
      doc.appendChild(root);
    }

    return doc;
  },
  createDocumentType: function createDocumentType(qualifiedName, publicId, systemId) {
    var node = new DocumentType();
    node.name = qualifiedName;
    node.nodeName = qualifiedName;
    node.publicId = publicId;
    node.systemId = systemId;
    return node;
  }
};

function Node() {}

;
Node.prototype = {
  firstChild: null,
  lastChild: null,
  previousSibling: null,
  nextSibling: null,
  attributes: null,
  parentNode: null,
  childNodes: null,
  ownerDocument: null,
  nodeValue: null,
  namespaceURI: null,
  prefix: null,
  localName: null,
  insertBefore: function insertBefore(newChild, refChild) {
    return _insertBefore(this, newChild, refChild);
  },
  replaceChild: function replaceChild(newChild, oldChild) {
    this.insertBefore(newChild, oldChild);

    if (oldChild) {
      this.removeChild(oldChild);
    }
  },
  removeChild: function removeChild(oldChild) {
    return _removeChild(this, oldChild);
  },
  appendChild: function appendChild(newChild) {
    return this.insertBefore(newChild, null);
  },
  hasChildNodes: function hasChildNodes() {
    return this.firstChild != null;
  },
  cloneNode: function cloneNode(deep) {
    return _cloneNode(this.ownerDocument || this, this, deep);
  },
  normalize: function normalize() {
    var child = this.firstChild;

    while (child) {
      var next = child.nextSibling;

      if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
        this.removeChild(next);
        child.appendData(next.data);
      } else {
        child.normalize();
        child = next;
      }
    }
  },
  isSupported: function isSupported(feature, version) {
    return this.ownerDocument.implementation.hasFeature(feature, version);
  },
  hasAttributes: function hasAttributes() {
    return this.attributes.length > 0;
  },
  lookupPrefix: function lookupPrefix(namespaceURI) {
    var el = this;

    while (el) {
      var map = el._nsMap;

      if (map) {
        for (var n in map) {
          if (map[n] == namespaceURI) {
            return n;
          }
        }
      }

      el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
    }

    return null;
  },
  lookupNamespaceURI: function lookupNamespaceURI(prefix) {
    var el = this;

    while (el) {
      var map = el._nsMap;

      if (map) {
        if (prefix in map) {
          return map[prefix];
        }
      }

      el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
    }

    return null;
  },
  isDefaultNamespace: function isDefaultNamespace(namespaceURI) {
    var prefix = this.lookupPrefix(namespaceURI);
    return prefix == null;
  }
};

function _xmlEncoder(c) {
  return c == '<' && '&lt;' || c == '>' && '&gt;' || c == '&' && '&amp;' || c == '"' && '&quot;' || '&#' + c.charCodeAt() + ';';
}

copy(NodeType, Node);
copy(NodeType, Node.prototype);

function _visitNode(node, callback) {
  if (callback(node)) {
    return true;
  }

  if (node = node.firstChild) {
    do {
      if (_visitNode(node, callback)) {
        return true;
      }
    } while (node = node.nextSibling);
  }
}

function Document() {}

function _onAddAttribute(doc, el, newAttr) {
  doc && doc._inc++;
  var ns = newAttr.namespaceURI;

  if (ns == 'http://www.w3.org/2000/xmlns/') {
    el._nsMap[newAttr.prefix ? newAttr.localName : ''] = newAttr.value;
  }
}

function _onRemoveAttribute(doc, el, newAttr, remove) {
  doc && doc._inc++;
  var ns = newAttr.namespaceURI;

  if (ns == 'http://www.w3.org/2000/xmlns/') {
    delete el._nsMap[newAttr.prefix ? newAttr.localName : ''];
  }
}

function _onUpdateChild(doc, el, newChild) {
  if (doc && doc._inc) {
    doc._inc++;
    var cs = el.childNodes;

    if (newChild) {
      cs[cs.length++] = newChild;
    } else {
      var child = el.firstChild;
      var i = 0;

      while (child) {
        cs[i++] = child;
        child = child.nextSibling;
      }

      cs.length = i;
    }
  }
}

function _removeChild(parentNode, child) {
  var previous = child.previousSibling;
  var next = child.nextSibling;

  if (previous) {
    previous.nextSibling = next;
  } else {
    parentNode.firstChild = next;
  }

  if (next) {
    next.previousSibling = previous;
  } else {
    parentNode.lastChild = previous;
  }

  _onUpdateChild(parentNode.ownerDocument, parentNode);

  return child;
}

function _insertBefore(parentNode, newChild, nextChild) {
  var cp = newChild.parentNode;

  if (cp) {
    cp.removeChild(newChild);
  }

  if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
    var newFirst = newChild.firstChild;

    if (newFirst == null) {
      return newChild;
    }

    var newLast = newChild.lastChild;
  } else {
    newFirst = newLast = newChild;
  }

  var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;
  newFirst.previousSibling = pre;
  newLast.nextSibling = nextChild;

  if (pre) {
    pre.nextSibling = newFirst;
  } else {
    parentNode.firstChild = newFirst;
  }

  if (nextChild == null) {
    parentNode.lastChild = newLast;
  } else {
    nextChild.previousSibling = newLast;
  }

  do {
    newFirst.parentNode = parentNode;
  } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));

  _onUpdateChild(parentNode.ownerDocument || parentNode, parentNode);

  if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
    newChild.firstChild = newChild.lastChild = null;
  }

  return newChild;
}

function _appendSingleChild(parentNode, newChild) {
  var cp = newChild.parentNode;

  if (cp) {
    var pre = parentNode.lastChild;
    cp.removeChild(newChild);
    var pre = parentNode.lastChild;
  }

  var pre = parentNode.lastChild;
  newChild.parentNode = parentNode;
  newChild.previousSibling = pre;
  newChild.nextSibling = null;

  if (pre) {
    pre.nextSibling = newChild;
  } else {
    parentNode.firstChild = newChild;
  }

  parentNode.lastChild = newChild;

  _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);

  return newChild;
}

Document.prototype = {
  nodeName: '#document',
  nodeType: DOCUMENT_NODE,
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function insertBefore(newChild, refChild) {
    if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
      var child = newChild.firstChild;

      while (child) {
        var next = child.nextSibling;
        this.insertBefore(child, refChild);
        child = next;
      }

      return newChild;
    }

    if (this.documentElement == null && newChild.nodeType == ELEMENT_NODE) {
      this.documentElement = newChild;
    }

    return _insertBefore(this, newChild, refChild), newChild.ownerDocument = this, newChild;
  },
  removeChild: function removeChild(oldChild) {
    if (this.documentElement == oldChild) {
      this.documentElement = null;
    }

    return _removeChild(this, oldChild);
  },
  importNode: function importNode(importedNode, deep) {
    return _importNode(this, importedNode, deep);
  },
  getElementById: function getElementById(id) {
    var rtv = null;

    _visitNode(this.documentElement, function (node) {
      if (node.nodeType == ELEMENT_NODE) {
        if (node.getAttribute('id') == id) {
          rtv = node;
          return true;
        }
      }
    });

    return rtv;
  },
  createElement: function createElement(tagName) {
    var node = new Element();
    node.ownerDocument = this;
    node.nodeName = tagName;
    node.tagName = tagName;
    node.childNodes = new NodeList();
    var attrs = node.attributes = new NamedNodeMap();
    attrs._ownerElement = node;
    return node;
  },
  createDocumentFragment: function createDocumentFragment() {
    var node = new DocumentFragment();
    node.ownerDocument = this;
    node.childNodes = new NodeList();
    return node;
  },
  createTextNode: function createTextNode(data) {
    var node = new Text();
    node.ownerDocument = this;
    node.appendData(data);
    return node;
  },
  createComment: function createComment(data) {
    var node = new Comment();
    node.ownerDocument = this;
    node.appendData(data);
    return node;
  },
  createCDATASection: function createCDATASection(data) {
    var node = new CDATASection();
    node.ownerDocument = this;
    node.appendData(data);
    return node;
  },
  createProcessingInstruction: function createProcessingInstruction(target, data) {
    var node = new ProcessingInstruction();
    node.ownerDocument = this;
    node.tagName = node.target = target;
    node.nodeValue = node.data = data;
    return node;
  },
  createAttribute: function createAttribute(name) {
    var node = new Attr();
    node.ownerDocument = this;
    node.name = name;
    node.nodeName = name;
    node.localName = name;
    node.specified = true;
    return node;
  },
  createEntityReference: function createEntityReference(name) {
    var node = new EntityReference();
    node.ownerDocument = this;
    node.nodeName = name;
    return node;
  },
  createElementNS: function createElementNS(namespaceURI, qualifiedName) {
    var node = new Element();
    var pl = qualifiedName.split(':');
    var attrs = node.attributes = new NamedNodeMap();
    node.childNodes = new NodeList();
    node.ownerDocument = this;
    node.nodeName = qualifiedName;
    node.tagName = qualifiedName;
    node.namespaceURI = namespaceURI;

    if (pl.length == 2) {
      node.prefix = pl[0];
      node.localName = pl[1];
    } else {
      node.localName = qualifiedName;
    }

    attrs._ownerElement = node;
    return node;
  },
  createAttributeNS: function createAttributeNS(namespaceURI, qualifiedName) {
    var node = new Attr();
    var pl = qualifiedName.split(':');
    node.ownerDocument = this;
    node.nodeName = qualifiedName;
    node.name = qualifiedName;
    node.namespaceURI = namespaceURI;
    node.specified = true;

    if (pl.length == 2) {
      node.prefix = pl[0];
      node.localName = pl[1];
    } else {
      node.localName = qualifiedName;
    }

    return node;
  }
};

_extends(Document, Node);

function Element() {
  this._nsMap = {};
}

;
Element.prototype = {
  nodeType: ELEMENT_NODE,
  hasAttribute: function hasAttribute(name) {
    return this.getAttributeNode(name) != null;
  },
  getAttribute: function getAttribute(name) {
    var attr = this.getAttributeNode(name);
    return attr && attr.value || '';
  },
  getAttributeNode: function getAttributeNode(name) {
    return this.attributes.getNamedItem(name);
  },
  setAttribute: function setAttribute(name, value) {
    var attr = this.ownerDocument.createAttribute(name);
    attr.value = attr.nodeValue = "" + value;
    this.setAttributeNode(attr);
  },
  removeAttribute: function removeAttribute(name) {
    var attr = this.getAttributeNode(name);
    attr && this.removeAttributeNode(attr);
  },
  appendChild: function appendChild(newChild) {
    if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
      return this.insertBefore(newChild, null);
    } else {
      return _appendSingleChild(this, newChild);
    }
  },
  setAttributeNode: function setAttributeNode(newAttr) {
    return this.attributes.setNamedItem(newAttr);
  },
  setAttributeNodeNS: function setAttributeNodeNS(newAttr) {
    return this.attributes.setNamedItemNS(newAttr);
  },
  removeAttributeNode: function removeAttributeNode(oldAttr) {
    return this.attributes.removeNamedItem(oldAttr.nodeName);
  },
  removeAttributeNS: function removeAttributeNS(namespaceURI, localName) {
    var old = this.getAttributeNodeNS(namespaceURI, localName);
    old && this.removeAttributeNode(old);
  },
  hasAttributeNS: function hasAttributeNS(namespaceURI, localName) {
    return this.getAttributeNodeNS(namespaceURI, localName) != null;
  },
  getAttributeNS: function getAttributeNS(namespaceURI, localName) {
    var attr = this.getAttributeNodeNS(namespaceURI, localName);
    return attr && attr.value || '';
  },
  setAttributeNS: function setAttributeNS(namespaceURI, qualifiedName, value) {
    var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
    attr.value = attr.nodeValue = "" + value;
    this.setAttributeNode(attr);
  },
  getAttributeNodeNS: function getAttributeNodeNS(namespaceURI, localName) {
    return this.attributes.getNamedItemNS(namespaceURI, localName);
  },
  getElementsByTagName: function getElementsByTagName(tagName) {
    return new LiveNodeList(this, function (base) {
      var ls = [];

      _visitNode(base, function (node) {
        if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)) {
          ls.push(node);
        }
      });

      return ls;
    });
  },
  getElementsByTagNameNS: function getElementsByTagNameNS(namespaceURI, localName) {
    return new LiveNodeList(this, function (base) {
      var ls = [];

      _visitNode(base, function (node) {
        if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)) {
          ls.push(node);
        }
      });

      return ls;
    });
  }
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;

_extends(Element, Node);

function Attr() {}

;
Attr.prototype.nodeType = ATTRIBUTE_NODE;

_extends(Attr, Node);

function CharacterData() {}

;
CharacterData.prototype = {
  data: '',
  substringData: function substringData(offset, count) {
    return this.data.substring(offset, offset + count);
  },
  appendData: function appendData(text) {
    text = this.data + text;
    this.nodeValue = this.data = text;
    this.length = text.length;
  },
  insertData: function insertData(offset, text) {
    this.replaceData(offset, 0, text);
  },
  appendChild: function appendChild(newChild) {
    throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
  },
  deleteData: function deleteData(offset, count) {
    this.replaceData(offset, count, "");
  },
  replaceData: function replaceData(offset, count, text) {
    var start = this.data.substring(0, offset);
    var end = this.data.substring(offset + count);
    text = start + text + end;
    this.nodeValue = this.data = text;
    this.length = text.length;
  }
};

_extends(CharacterData, Node);

function Text() {}

;
Text.prototype = {
  nodeName: "#text",
  nodeType: TEXT_NODE,
  splitText: function splitText(offset) {
    var text = this.data;
    var newText = text.substring(offset);
    text = text.substring(0, offset);
    this.data = this.nodeValue = text;
    this.length = text.length;
    var newNode = this.ownerDocument.createTextNode(newText);

    if (this.parentNode) {
      this.parentNode.insertBefore(newNode, this.nextSibling);
    }

    return newNode;
  }
};

_extends(Text, CharacterData);

function Comment() {}

;
Comment.prototype = {
  nodeName: "#comment",
  nodeType: COMMENT_NODE
};

_extends(Comment, CharacterData);

function CDATASection() {}

;
CDATASection.prototype = {
  nodeName: "#cdata-section",
  nodeType: CDATA_SECTION_NODE
};

_extends(CDATASection, CharacterData);

function DocumentType() {}

;
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;

_extends(DocumentType, Node);

function Notation() {}

;
Notation.prototype.nodeType = NOTATION_NODE;

_extends(Notation, Node);

function Entity() {}

;
Entity.prototype.nodeType = ENTITY_NODE;

_extends(Entity, Node);

function EntityReference() {}

;
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;

_extends(EntityReference, Node);

function DocumentFragment() {}

;
DocumentFragment.prototype.nodeName = "#document-fragment";
DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;

_extends(DocumentFragment, Node);

function ProcessingInstruction() {}

ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;

_extends(ProcessingInstruction, Node);

function XMLSerializer() {}

XMLSerializer.prototype.serializeToString = function (node, isHtml, nodeFilter) {
  return nodeSerializeToString.call(node, isHtml, nodeFilter);
};

Node.prototype.toString = nodeSerializeToString;

function nodeSerializeToString(isHtml, nodeFilter) {
  var buf = [];
  var refNode = this.nodeType == 9 && this.documentElement || this;
  var prefix = refNode.prefix;
  var uri = refNode.namespaceURI;

  if (uri && prefix == null) {
    var prefix = refNode.lookupPrefix(uri);

    if (prefix == null) {
      var visibleNamespaces = [{
        namespace: uri,
        prefix: null
      }];
    }
  }

  serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
  return buf.join('');
}

function needNamespaceDefine(node, isHTML, visibleNamespaces) {
  var prefix = node.prefix || '';
  var uri = node.namespaceURI;

  if (!prefix && !uri) {
    return false;
  }

  if (prefix === "xml" && uri === "http://www.w3.org/XML/1998/namespace" || uri == 'http://www.w3.org/2000/xmlns/') {
    return false;
  }

  var i = visibleNamespaces.length;

  while (i--) {
    var ns = visibleNamespaces[i];

    if (ns.prefix == prefix) {
      return ns.namespace != uri;
    }
  }

  return true;
}

function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
  if (nodeFilter) {
    node = nodeFilter(node);

    if (node) {
      if (typeof node == 'string') {
        buf.push(node);
        return;
      }
    } else {
      return;
    }
  }

  switch (node.nodeType) {
    case ELEMENT_NODE:
      if (!visibleNamespaces) visibleNamespaces = [];
      var startVisibleNamespaces = visibleNamespaces.length;
      var attrs = node.attributes;
      var len = attrs.length;
      var child = node.firstChild;
      var nodeName = node.tagName;
      isHTML = htmlns === node.namespaceURI || isHTML;
      buf.push('<', nodeName);

      for (var i = 0; i < len; i++) {
        var attr = attrs.item(i);

        if (attr.prefix == 'xmlns') {
          visibleNamespaces.push({
            prefix: attr.localName,
            namespace: attr.value
          });
        } else if (attr.nodeName == 'xmlns') {
          visibleNamespaces.push({
            prefix: '',
            namespace: attr.value
          });
        }
      }

      for (var i = 0; i < len; i++) {
        var attr = attrs.item(i);

        if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
          var prefix = attr.prefix || '';
          var uri = attr.namespaceURI;
          var ns = prefix ? ' xmlns:' + prefix : " xmlns";
          buf.push(ns, '="', uri, '"');
          visibleNamespaces.push({
            prefix: prefix,
            namespace: uri
          });
        }

        serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
      }

      if (needNamespaceDefine(node, isHTML, visibleNamespaces)) {
        var prefix = node.prefix || '';
        var uri = node.namespaceURI;
        var ns = prefix ? ' xmlns:' + prefix : " xmlns";
        buf.push(ns, '="', uri, '"');
        visibleNamespaces.push({
          prefix: prefix,
          namespace: uri
        });
      }

      if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
        buf.push('>');

        if (isHTML && /^script$/i.test(nodeName)) {
          while (child) {
            if (child.data) {
              buf.push(child.data);
            } else {
              serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
            }

            child = child.nextSibling;
          }
        } else {
          while (child) {
            serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
            child = child.nextSibling;
          }
        }

        buf.push('</', nodeName, '>');
      } else {
        buf.push('/>');
      }

      return;

    case DOCUMENT_NODE:
    case DOCUMENT_FRAGMENT_NODE:
      var child = node.firstChild;

      while (child) {
        serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces);
        child = child.nextSibling;
      }

      return;

    case ATTRIBUTE_NODE:
      return buf.push(' ', node.name, '="', node.value.replace(/[<&"]/g, _xmlEncoder), '"');

    case TEXT_NODE:
      return buf.push(node.data.replace(/[<&]/g, _xmlEncoder));

    case CDATA_SECTION_NODE:
      return buf.push('<![CDATA[', node.data, ']]>');

    case COMMENT_NODE:
      return buf.push("<!--", node.data, "-->");

    case DOCUMENT_TYPE_NODE:
      var pubid = node.publicId;
      var sysid = node.systemId;
      buf.push('<!DOCTYPE ', node.name);

      if (pubid) {
        buf.push(' PUBLIC "', pubid);

        if (sysid && sysid != '.') {
          buf.push('" "', sysid);
        }

        buf.push('">');
      } else if (sysid && sysid != '.') {
        buf.push(' SYSTEM "', sysid, '">');
      } else {
        var sub = node.internalSubset;

        if (sub) {
          buf.push(" [", sub, "]");
        }

        buf.push(">");
      }

      return;

    case PROCESSING_INSTRUCTION_NODE:
      return buf.push("<?", node.target, " ", node.data, "?>");

    case ENTITY_REFERENCE_NODE:
      return buf.push('&', node.nodeName, ';');

    default:
      buf.push('??', node.nodeName);
  }
}

function _importNode(doc, node, deep) {
  var node2;

  switch (node.nodeType) {
    case ELEMENT_NODE:
      node2 = node.cloneNode(false);
      node2.ownerDocument = doc;

    case DOCUMENT_FRAGMENT_NODE:
      break;

    case ATTRIBUTE_NODE:
      deep = true;
      break;
  }

  if (!node2) {
    node2 = node.cloneNode(false);
  }

  node2.ownerDocument = doc;
  node2.parentNode = null;

  if (deep) {
    var child = node.firstChild;

    while (child) {
      node2.appendChild(_importNode(doc, child, deep));
      child = child.nextSibling;
    }
  }

  return node2;
}

function _cloneNode(doc, node, deep) {
  var node2 = new node.constructor();

  for (var n in node) {
    var v = node[n];

    if (_typeof(v) != 'object') {
      if (v != node2[n]) {
        node2[n] = v;
      }
    }
  }

  if (node.childNodes) {
    node2.childNodes = new NodeList();
  }

  node2.ownerDocument = doc;

  switch (node2.nodeType) {
    case ELEMENT_NODE:
      var attrs = node.attributes;
      var attrs2 = node2.attributes = new NamedNodeMap();
      var len = attrs.length;
      attrs2._ownerElement = node2;

      for (var i = 0; i < len; i++) {
        node2.setAttributeNode(_cloneNode(doc, attrs.item(i), true));
      }

      break;
      ;

    case ATTRIBUTE_NODE:
      deep = true;
  }

  if (deep) {
    var child = node.firstChild;

    while (child) {
      node2.appendChild(_cloneNode(doc, child, deep));
      child = child.nextSibling;
    }
  }

  return node2;
}

function __set__(object, key, value) {
  object[key] = value;
}

try {
  if (Object.defineProperty) {
    var getTextContent = function getTextContent(node) {
      switch (node.nodeType) {
        case ELEMENT_NODE:
        case DOCUMENT_FRAGMENT_NODE:
          var buf = [];
          node = node.firstChild;

          while (node) {
            if (node.nodeType !== 7 && node.nodeType !== 8) {
              buf.push(getTextContent(node));
            }

            node = node.nextSibling;
          }

          return buf.join('');

        default:
          return node.nodeValue;
      }
    };

    Object.defineProperty(LiveNodeList.prototype, 'length', {
      get: function get() {
        _updateLiveList(this);

        return this.$$length;
      }
    });
    Object.defineProperty(Node.prototype, 'textContent', {
      get: function get() {
        return getTextContent(this);
      },
      set: function set(data) {
        switch (this.nodeType) {
          case ELEMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE:
            while (this.firstChild) {
              this.removeChild(this.firstChild);
            }

            if (data || String(data)) {
              this.appendChild(this.ownerDocument.createTextNode(data));
            }

            break;

          default:
            this.data = data;
            this.value = data;
            this.nodeValue = data;
        }
      }
    });

    __set__ = function __set__(object, key, value) {
      object['$$' + key] = value;
    };
  }
} catch (e) {}

exports.DOMImplementation = DOMImplementation;
exports.XMLSerializer = XMLSerializer;

},{}],58:[function(require,module,exports){
"use strict";

exports.entityMap = {
  lt: '<',
  gt: '>',
  amp: '&',
  quot: '"',
  apos: "'",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  nbsp: " ",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  times: "×",
  divide: "÷",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  'int': "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  fnof: "ƒ",
  circ: "ˆ",
  tilde: "˜",
  ensp: " ",
  emsp: " ",
  thinsp: " ",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  bull: "•",
  hellip: "…",
  permil: "‰",
  prime: "′",
  Prime: "″",
  lsaquo: "‹",
  rsaquo: "›",
  oline: "‾",
  euro: "€",
  trade: "™",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦"
};

},{}],59:[function(require,module,exports){
"use strict";

var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
var tagNamePattern = new RegExp('^' + nameStartChar.source + nameChar.source + '*(?:\:' + nameStartChar.source + nameChar.source + '*)?$');
var S_TAG = 0;
var S_ATTR = 1;
var S_ATTR_SPACE = 2;
var S_EQ = 3;
var S_ATTR_NOQUOT_VALUE = 4;
var S_ATTR_END = 5;
var S_TAG_SPACE = 6;
var S_TAG_CLOSE = 7;

function XMLReader() {}

XMLReader.prototype = {
  parse: function parse(source, defaultNSMap, entityMap) {
    var domBuilder = this.domBuilder;
    domBuilder.startDocument();

    _copy(defaultNSMap, defaultNSMap = {});

    _parse(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);

    domBuilder.endDocument();
  }
};

function _parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
  function fixedFromCharCode(code) {
    if (code > 0xffff) {
      code -= 0x10000;
      var surrogate1 = 0xd800 + (code >> 10),
          surrogate2 = 0xdc00 + (code & 0x3ff);
      return String.fromCharCode(surrogate1, surrogate2);
    } else {
      return String.fromCharCode(code);
    }
  }

  function entityReplacer(a) {
    var k = a.slice(1, -1);

    if (k in entityMap) {
      return entityMap[k];
    } else if (k.charAt(0) === '#') {
      return fixedFromCharCode(parseInt(k.substr(1).replace('x', '0x')));
    } else {
      errorHandler.error('entity not found:' + a);
      return a;
    }
  }

  function appendText(end) {
    if (end > start) {
      var xt = source.substring(start, end).replace(/&#?\w+;/g, entityReplacer);
      locator && position(start);
      domBuilder.characters(xt, 0, end - start);
      start = end;
    }
  }

  function position(p, m) {
    while (p >= lineEnd && (m = linePattern.exec(source))) {
      lineStart = m.index;
      lineEnd = lineStart + m[0].length;
      locator.lineNumber++;
    }

    locator.columnNumber = p - lineStart + 1;
  }

  var lineStart = 0;
  var lineEnd = 0;
  var linePattern = /.*(?:\r\n?|\n)|.*$/g;
  var locator = domBuilder.locator;
  var parseStack = [{
    currentNSMap: defaultNSMapCopy
  }];
  var closeMap = {};
  var start = 0;

  while (true) {
    try {
      var tagStart = source.indexOf('<', start);

      if (tagStart < 0) {
        if (!source.substr(start).match(/^\s*$/)) {
          var doc = domBuilder.doc;
          var text = doc.createTextNode(source.substr(start));
          doc.appendChild(text);
          domBuilder.currentElement = text;
        }

        return;
      }

      if (tagStart > start) {
        appendText(tagStart);
      }

      switch (source.charAt(tagStart + 1)) {
        case '/':
          var end = source.indexOf('>', tagStart + 3);
          var tagName = source.substring(tagStart + 2, end);
          var config = parseStack.pop();

          if (end < 0) {
            tagName = source.substring(tagStart + 2).replace(/[\s<].*/, '');
            errorHandler.error("end tag name: " + tagName + ' is not complete:' + config.tagName);
            end = tagStart + 1 + tagName.length;
          } else if (tagName.match(/\s</)) {
            tagName = tagName.replace(/[\s<].*/, '');
            errorHandler.error("end tag name: " + tagName + ' maybe not complete');
            end = tagStart + 1 + tagName.length;
          }

          var localNSMap = config.localNSMap;
          var endMatch = config.tagName == tagName;
          var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();

          if (endIgnoreCaseMach) {
            domBuilder.endElement(config.uri, config.localName, tagName);

            if (localNSMap) {
              for (var prefix in localNSMap) {
                domBuilder.endPrefixMapping(prefix);
              }
            }

            if (!endMatch) {
              errorHandler.fatalError("end tag name: " + tagName + ' is not match the current start tagName:' + config.tagName);
            }
          } else {
            parseStack.push(config);
          }

          end++;
          break;

        case '?':
          locator && position(tagStart);
          end = parseInstruction(source, tagStart, domBuilder);
          break;

        case '!':
          locator && position(tagStart);
          end = parseDCC(source, tagStart, domBuilder, errorHandler);
          break;

        default:
          locator && position(tagStart);
          var el = new ElementAttributes();
          var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
          var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
          var len = el.length;

          if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
            el.closed = true;

            if (!entityMap.nbsp) {
              errorHandler.warning('unclosed xml attribute');
            }
          }

          if (locator && len) {
            var locator2 = copyLocator(locator, {});

            for (var i = 0; i < len; i++) {
              var a = el[i];
              position(a.offset);
              a.locator = copyLocator(locator, {});
            }

            domBuilder.locator = locator2;

            if (appendElement(el, domBuilder, currentNSMap)) {
              parseStack.push(el);
            }

            domBuilder.locator = locator;
          } else {
            if (appendElement(el, domBuilder, currentNSMap)) {
              parseStack.push(el);
            }
          }

          if (el.uri === 'http://www.w3.org/1999/xhtml' && !el.closed) {
            end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
          } else {
            end++;
          }

      }
    } catch (e) {
      errorHandler.error('element parse error: ' + e);
      end = -1;
    }

    if (end > start) {
      start = end;
    } else {
      appendText(Math.max(tagStart, start) + 1);
    }
  }
}

function copyLocator(f, t) {
  t.lineNumber = f.lineNumber;
  t.columnNumber = f.columnNumber;
  return t;
}

function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
  var attrName;
  var value;
  var p = ++start;
  var s = S_TAG;

  while (true) {
    var c = source.charAt(p);

    switch (c) {
      case '=':
        if (s === S_ATTR) {
          attrName = source.slice(start, p);
          s = S_EQ;
        } else if (s === S_ATTR_SPACE) {
          s = S_EQ;
        } else {
          throw new Error('attribute equal must after attrName');
        }

        break;

      case '\'':
      case '"':
        if (s === S_EQ || s === S_ATTR) {
            if (s === S_ATTR) {
              errorHandler.warning('attribute value must after "="');
              attrName = source.slice(start, p);
            }

            start = p + 1;
            p = source.indexOf(c, start);

            if (p > 0) {
              value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
              el.add(attrName, value, start - 1);
              s = S_ATTR_END;
            } else {
              throw new Error('attribute value no end \'' + c + '\' match');
            }
          } else if (s == S_ATTR_NOQUOT_VALUE) {
          value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
          el.add(attrName, value, start);
          errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ')!!');
          start = p + 1;
          s = S_ATTR_END;
        } else {
          throw new Error('attribute value must after "="');
        }

        break;

      case '/':
        switch (s) {
          case S_TAG:
            el.setTagName(source.slice(start, p));

          case S_ATTR_END:
          case S_TAG_SPACE:
          case S_TAG_CLOSE:
            s = S_TAG_CLOSE;
            el.closed = true;

          case S_ATTR_NOQUOT_VALUE:
          case S_ATTR:
          case S_ATTR_SPACE:
            break;

          default:
            throw new Error("attribute invalid close char('/')");
        }

        break;

      case '':
        errorHandler.error('unexpected end of input');

        if (s == S_TAG) {
          el.setTagName(source.slice(start, p));
        }

        return p;

      case '>':
        switch (s) {
          case S_TAG:
            el.setTagName(source.slice(start, p));

          case S_ATTR_END:
          case S_TAG_SPACE:
          case S_TAG_CLOSE:
            break;

          case S_ATTR_NOQUOT_VALUE:
          case S_ATTR:
            value = source.slice(start, p);

            if (value.slice(-1) === '/') {
              el.closed = true;
              value = value.slice(0, -1);
            }

          case S_ATTR_SPACE:
            if (s === S_ATTR_SPACE) {
              value = attrName;
            }

            if (s == S_ATTR_NOQUOT_VALUE) {
              errorHandler.warning('attribute "' + value + '" missed quot(")!!');
              el.add(attrName, value.replace(/&#?\w+;/g, entityReplacer), start);
            } else {
              if (currentNSMap[''] !== 'http://www.w3.org/1999/xhtml' || !value.match(/^(?:disabled|checked|selected)$/i)) {
                errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
              }

              el.add(value, value, start);
            }

            break;

          case S_EQ:
            throw new Error('attribute value missed!!');
        }

        return p;

      case "\x80":
        c = ' ';

      default:
        if (c <= ' ') {
          switch (s) {
            case S_TAG:
              el.setTagName(source.slice(start, p));
              s = S_TAG_SPACE;
              break;

            case S_ATTR:
              attrName = source.slice(start, p);
              s = S_ATTR_SPACE;
              break;

            case S_ATTR_NOQUOT_VALUE:
              var value = source.slice(start, p).replace(/&#?\w+;/g, entityReplacer);
              errorHandler.warning('attribute "' + value + '" missed quot(")!!');
              el.add(attrName, value, start);

            case S_ATTR_END:
              s = S_TAG_SPACE;
              break;
          }
        } else {
          switch (s) {
            case S_ATTR_SPACE:
              var tagName = el.tagName;

              if (currentNSMap[''] !== 'http://www.w3.org/1999/xhtml' || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
              }

              el.add(attrName, attrName, start);
              start = p;
              s = S_ATTR;
              break;

            case S_ATTR_END:
              errorHandler.warning('attribute space is required"' + attrName + '"!!');

            case S_TAG_SPACE:
              s = S_ATTR;
              start = p;
              break;

            case S_EQ:
              s = S_ATTR_NOQUOT_VALUE;
              start = p;
              break;

            case S_TAG_CLOSE:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
        }

    }

    p++;
  }
}

function appendElement(el, domBuilder, currentNSMap) {
  var tagName = el.tagName;
  var localNSMap = null;
  var i = el.length;

  while (i--) {
    var a = el[i];
    var qName = a.qName;
    var value = a.value;
    var nsp = qName.indexOf(':');

    if (nsp > 0) {
      var prefix = a.prefix = qName.slice(0, nsp);
      var localName = qName.slice(nsp + 1);
      var nsPrefix = prefix === 'xmlns' && localName;
    } else {
      localName = qName;
      prefix = null;
      nsPrefix = qName === 'xmlns' && '';
    }

    a.localName = localName;

    if (nsPrefix !== false) {
      if (localNSMap == null) {
        localNSMap = {};

        _copy(currentNSMap, currentNSMap = {});
      }

      currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
      a.uri = 'http://www.w3.org/2000/xmlns/';
      domBuilder.startPrefixMapping(nsPrefix, value);
    }
  }

  var i = el.length;

  while (i--) {
    a = el[i];
    var prefix = a.prefix;

    if (prefix) {
      if (prefix === 'xml') {
        a.uri = 'http://www.w3.org/XML/1998/namespace';
      }

      if (prefix !== 'xmlns') {
        a.uri = currentNSMap[prefix || ''];
      }
    }
  }

  var nsp = tagName.indexOf(':');

  if (nsp > 0) {
    prefix = el.prefix = tagName.slice(0, nsp);
    localName = el.localName = tagName.slice(nsp + 1);
  } else {
    prefix = null;
    localName = el.localName = tagName;
  }

  var ns = el.uri = currentNSMap[prefix || ''];
  domBuilder.startElement(ns, localName, tagName, el);

  if (el.closed) {
    domBuilder.endElement(ns, localName, tagName);

    if (localNSMap) {
      for (prefix in localNSMap) {
        domBuilder.endPrefixMapping(prefix);
      }
    }
  } else {
    el.currentNSMap = currentNSMap;
    el.localNSMap = localNSMap;
    return true;
  }
}

function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
  if (/^(?:script|textarea)$/i.test(tagName)) {
    var elEndStart = source.indexOf('</' + tagName + '>', elStartEnd);
    var text = source.substring(elStartEnd + 1, elEndStart);

    if (/[&<]/.test(text)) {
      if (/^script$/i.test(tagName)) {
        domBuilder.characters(text, 0, text.length);
        return elEndStart;
      }

      text = text.replace(/&#?\w+;/g, entityReplacer);
      domBuilder.characters(text, 0, text.length);
      return elEndStart;
    }
  }

  return elStartEnd + 1;
}

function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
  var pos = closeMap[tagName];

  if (pos == null) {
    pos = source.lastIndexOf('</' + tagName + '>');

    if (pos < elStartEnd) {
      pos = source.lastIndexOf('</' + tagName);
    }

    closeMap[tagName] = pos;
  }

  return pos < elStartEnd;
}

function _copy(source, target) {
  for (var n in source) {
    target[n] = source[n];
  }
}

function parseDCC(source, start, domBuilder, errorHandler) {
  var next = source.charAt(start + 2);

  switch (next) {
    case '-':
      if (source.charAt(start + 3) === '-') {
        var end = source.indexOf('-->', start + 4);

        if (end > start) {
          domBuilder.comment(source, start + 4, end - start - 4);
          return end + 3;
        } else {
          errorHandler.error("Unclosed comment");
          return -1;
        }
      } else {
        return -1;
      }

    default:
      if (source.substr(start + 3, 6) == 'CDATA[') {
        var end = source.indexOf(']]>', start + 9);
        domBuilder.startCDATA();
        domBuilder.characters(source, start + 9, end - start - 9);
        domBuilder.endCDATA();
        return end + 3;
      }

      var matchs = split(source, start);
      var len = matchs.length;

      if (len > 1 && /!doctype/i.test(matchs[0][0])) {
        var name = matchs[1][0];
        var pubid = len > 3 && /^public$/i.test(matchs[2][0]) && matchs[3][0];
        var sysid = len > 4 && matchs[4][0];
        var lastMatch = matchs[len - 1];
        domBuilder.startDTD(name, pubid && pubid.replace(/^(['"])(.*?)\1$/, '$2'), sysid && sysid.replace(/^(['"])(.*?)\1$/, '$2'));
        domBuilder.endDTD();
        return lastMatch.index + lastMatch[0].length;
      }

  }

  return -1;
}

function parseInstruction(source, start, domBuilder) {
  var end = source.indexOf('?>', start);

  if (end) {
    var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);

    if (match) {
      var len = match[0].length;
      domBuilder.processingInstruction(match[1], match[2]);
      return end + 2;
    } else {
      return -1;
    }
  }

  return -1;
}

function ElementAttributes(source) {}

ElementAttributes.prototype = {
  setTagName: function setTagName(tagName) {
    if (!tagNamePattern.test(tagName)) {
      throw new Error('invalid tagName:' + tagName);
    }

    this.tagName = tagName;
  },
  add: function add(qName, value, offset) {
    if (!tagNamePattern.test(qName)) {
      throw new Error('invalid attribute:' + qName);
    }

    this[this.length++] = {
      qName: qName,
      value: value,
      offset: offset
    };
  },
  length: 0,
  getLocalName: function getLocalName(i) {
    return this[i].localName;
  },
  getLocator: function getLocator(i) {
    return this[i].locator;
  },
  getQName: function getQName(i) {
    return this[i].qName;
  },
  getURI: function getURI(i) {
    return this[i].uri;
  },
  getValue: function getValue(i) {
    return this[i].value;
  }
};

function split(source, start) {
  var match;
  var buf = [];
  var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  reg.lastIndex = start;
  reg.exec(source);

  while (match = reg.exec(source)) {
    buf.push(match);
    if (match[1]) return buf;
  }
}

exports.XMLReader = XMLReader;

},{}]},{},[55]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ3ZWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuIWZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZShlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gZTtcbiAgfVxuXG4gIHZhciB0ID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZXhwb3J0cyA/IGV4cG9ydHMgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6ICQuZ2xvYmFsLFxuICAgICAgciA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtcbiAgZS5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKSwgZS5wcm90b3R5cGUubmFtZSA9IFwiSW52YWxpZENoYXJhY3RlckVycm9yXCIsIHQuYnRvYSB8fCAodC5idG9hID0gZnVuY3Rpb24gKHQpIHtcbiAgICBmb3IgKHZhciBvLCBuLCBhID0gU3RyaW5nKHQpLCBpID0gMCwgZiA9IHIsIGMgPSBcIlwiOyBhLmNoYXJBdCgwIHwgaSkgfHwgKGYgPSBcIj1cIiwgaSAlIDEpOyBjICs9IGYuY2hhckF0KDYzICYgbyA+PiA4IC0gaSAlIDEgKiA4KSkge1xuICAgICAgaWYgKG4gPSBhLmNoYXJDb2RlQXQoaSArPSAuNzUpLCBuID4gMjU1KSB0aHJvdyBuZXcgZShcIididG9hJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZW5jb2RlZCBjb250YWlucyBjaGFyYWN0ZXJzIG91dHNpZGUgb2YgdGhlIExhdGluMSByYW5nZS5cIik7XG4gICAgICBvID0gbyA8PCA4IHwgbjtcbiAgICB9XG5cbiAgICByZXR1cm4gYztcbiAgfSksIHQuYXRvYiB8fCAodC5hdG9iID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgbyA9IFN0cmluZyh0KS5yZXBsYWNlKC9bPV0rJC8sIFwiXCIpO1xuICAgIGlmIChvLmxlbmd0aCAlIDQgPT0gMSkgdGhyb3cgbmV3IGUoXCInYXRvYicgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLlwiKTtcblxuICAgIGZvciAodmFyIG4sIGEsIGkgPSAwLCBmID0gMCwgYyA9IFwiXCI7IGEgPSBvLmNoYXJBdChmKyspOyB+YSAmJiAobiA9IGkgJSA0ID8gNjQgKiBuICsgYSA6IGEsIGkrKyAlIDQpID8gYyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSAmIG4gPj4gKC0yICogaSAmIDYpKSA6IDApIHtcbiAgICAgIGEgPSByLmluZGV4T2YoYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGM7XG4gIH0pO1xufSgpO1xuXG59LHt9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbiFmdW5jdGlvbiAobikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBmdW5jdGlvbiB0KG4sIHQpIHtcbiAgICB2YXIgciA9ICg2NTUzNSAmIG4pICsgKDY1NTM1ICYgdCk7XG4gICAgcmV0dXJuIChuID4+IDE2KSArICh0ID4+IDE2KSArIChyID4+IDE2KSA8PCAxNiB8IDY1NTM1ICYgcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHIobiwgdCkge1xuICAgIHJldHVybiBuIDw8IHQgfCBuID4+PiAzMiAtIHQ7XG4gIH1cblxuICBmdW5jdGlvbiBlKG4sIGUsIG8sIHUsIGMsIGYpIHtcbiAgICByZXR1cm4gdChyKHQodChlLCBuKSwgdCh1LCBmKSksIGMpLCBvKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG8obiwgdCwgciwgbywgdSwgYywgZikge1xuICAgIHJldHVybiBlKHQgJiByIHwgfnQgJiBvLCBuLCB0LCB1LCBjLCBmKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHUobiwgdCwgciwgbywgdSwgYywgZikge1xuICAgIHJldHVybiBlKHQgJiBvIHwgciAmIH5vLCBuLCB0LCB1LCBjLCBmKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGMobiwgdCwgciwgbywgdSwgYywgZikge1xuICAgIHJldHVybiBlKHQgXiByIF4gbywgbiwgdCwgdSwgYywgZik7XG4gIH1cblxuICBmdW5jdGlvbiBmKG4sIHQsIHIsIG8sIHUsIGMsIGYpIHtcbiAgICByZXR1cm4gZShyIF4gKHQgfCB+byksIG4sIHQsIHUsIGMsIGYpO1xuICB9XG5cbiAgZnVuY3Rpb24gaShuLCByKSB7XG4gICAgbltyID4+IDVdIHw9IDEyOCA8PCByICUgMzIsIG5bMTQgKyAociArIDY0ID4+PiA5IDw8IDQpXSA9IHI7XG4gICAgdmFyIGUsXG4gICAgICAgIGksXG4gICAgICAgIGEsXG4gICAgICAgIGQsXG4gICAgICAgIGgsXG4gICAgICAgIGwgPSAxNzMyNTg0MTkzLFxuICAgICAgICBnID0gLTI3MTczMzg3OSxcbiAgICAgICAgdiA9IC0xNzMyNTg0MTk0LFxuICAgICAgICBtID0gMjcxNzMzODc4O1xuXG4gICAgZm9yIChlID0gMDsgZSA8IG4ubGVuZ3RoOyBlICs9IDE2KSB7XG4gICAgICBpID0gbCwgYSA9IGcsIGQgPSB2LCBoID0gbSwgZyA9IGYoZyA9IGYoZyA9IGYoZyA9IGYoZyA9IGMoZyA9IGMoZyA9IGMoZyA9IGMoZyA9IHUoZyA9IHUoZyA9IHUoZyA9IHUoZyA9IG8oZyA9IG8oZyA9IG8oZyA9IG8oZywgdiA9IG8odiwgbSA9IG8obSwgbCA9IG8obCwgZywgdiwgbSwgbltlXSwgNywgLTY4MDg3NjkzNiksIGcsIHYsIG5bZSArIDFdLCAxMiwgLTM4OTU2NDU4NiksIGwsIGcsIG5bZSArIDJdLCAxNywgNjA2MTA1ODE5KSwgbSwgbCwgbltlICsgM10sIDIyLCAtMTA0NDUyNTMzMCksIHYgPSBvKHYsIG0gPSBvKG0sIGwgPSBvKGwsIGcsIHYsIG0sIG5bZSArIDRdLCA3LCAtMTc2NDE4ODk3KSwgZywgdiwgbltlICsgNV0sIDEyLCAxMjAwMDgwNDI2KSwgbCwgZywgbltlICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSksIG0sIGwsIG5bZSArIDddLCAyMiwgLTQ1NzA1OTgzKSwgdiA9IG8odiwgbSA9IG8obSwgbCA9IG8obCwgZywgdiwgbSwgbltlICsgOF0sIDcsIDE3NzAwMzU0MTYpLCBnLCB2LCBuW2UgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KSwgbCwgZywgbltlICsgMTBdLCAxNywgLTQyMDYzKSwgbSwgbCwgbltlICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpLCB2ID0gbyh2LCBtID0gbyhtLCBsID0gbyhsLCBnLCB2LCBtLCBuW2UgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpLCBnLCB2LCBuW2UgKyAxM10sIDEyLCAtNDAzNDExMDEpLCBsLCBnLCBuW2UgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCksIG0sIGwsIG5bZSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpLCB2ID0gdSh2LCBtID0gdShtLCBsID0gdShsLCBnLCB2LCBtLCBuW2UgKyAxXSwgNSwgLTE2NTc5NjUxMCksIGcsIHYsIG5bZSArIDZdLCA5LCAtMTA2OTUwMTYzMiksIGwsIGcsIG5bZSArIDExXSwgMTQsIDY0MzcxNzcxMyksIG0sIGwsIG5bZV0sIDIwLCAtMzczODk3MzAyKSwgdiA9IHUodiwgbSA9IHUobSwgbCA9IHUobCwgZywgdiwgbSwgbltlICsgNV0sIDUsIC03MDE1NTg2OTEpLCBnLCB2LCBuW2UgKyAxMF0sIDksIDM4MDE2MDgzKSwgbCwgZywgbltlICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSksIG0sIGwsIG5bZSArIDRdLCAyMCwgLTQwNTUzNzg0OCksIHYgPSB1KHYsIG0gPSB1KG0sIGwgPSB1KGwsIGcsIHYsIG0sIG5bZSArIDldLCA1LCA1Njg0NDY0MzgpLCBnLCB2LCBuW2UgKyAxNF0sIDksIC0xMDE5ODAzNjkwKSwgbCwgZywgbltlICsgM10sIDE0LCAtMTg3MzYzOTYxKSwgbSwgbCwgbltlICsgOF0sIDIwLCAxMTYzNTMxNTAxKSwgdiA9IHUodiwgbSA9IHUobSwgbCA9IHUobCwgZywgdiwgbSwgbltlICsgMTNdLCA1LCAtMTQ0NDY4MTQ2NyksIGcsIHYsIG5bZSArIDJdLCA5LCAtNTE0MDM3ODQpLCBsLCBnLCBuW2UgKyA3XSwgMTQsIDE3MzUzMjg0NzMpLCBtLCBsLCBuW2UgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCksIHYgPSBjKHYsIG0gPSBjKG0sIGwgPSBjKGwsIGcsIHYsIG0sIG5bZSArIDVdLCA0LCAtMzc4NTU4KSwgZywgdiwgbltlICsgOF0sIDExLCAtMjAyMjU3NDQ2MyksIGwsIGcsIG5bZSArIDExXSwgMTYsIDE4MzkwMzA1NjIpLCBtLCBsLCBuW2UgKyAxNF0sIDIzLCAtMzUzMDk1NTYpLCB2ID0gYyh2LCBtID0gYyhtLCBsID0gYyhsLCBnLCB2LCBtLCBuW2UgKyAxXSwgNCwgLTE1MzA5OTIwNjApLCBnLCB2LCBuW2UgKyA0XSwgMTEsIDEyNzI4OTMzNTMpLCBsLCBnLCBuW2UgKyA3XSwgMTYsIC0xNTU0OTc2MzIpLCBtLCBsLCBuW2UgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCksIHYgPSBjKHYsIG0gPSBjKG0sIGwgPSBjKGwsIGcsIHYsIG0sIG5bZSArIDEzXSwgNCwgNjgxMjc5MTc0KSwgZywgdiwgbltlXSwgMTEsIC0zNTg1MzcyMjIpLCBsLCBnLCBuW2UgKyAzXSwgMTYsIC03MjI1MjE5NzkpLCBtLCBsLCBuW2UgKyA2XSwgMjMsIDc2MDI5MTg5KSwgdiA9IGModiwgbSA9IGMobSwgbCA9IGMobCwgZywgdiwgbSwgbltlICsgOV0sIDQsIC02NDAzNjQ0ODcpLCBnLCB2LCBuW2UgKyAxMl0sIDExLCAtNDIxODE1ODM1KSwgbCwgZywgbltlICsgMTVdLCAxNiwgNTMwNzQyNTIwKSwgbSwgbCwgbltlICsgMl0sIDIzLCAtOTk1MzM4NjUxKSwgdiA9IGYodiwgbSA9IGYobSwgbCA9IGYobCwgZywgdiwgbSwgbltlXSwgNiwgLTE5ODYzMDg0NCksIGcsIHYsIG5bZSArIDddLCAxMCwgMTEyNjg5MTQxNSksIGwsIGcsIG5bZSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KSwgbSwgbCwgbltlICsgNV0sIDIxLCAtNTc0MzQwNTUpLCB2ID0gZih2LCBtID0gZihtLCBsID0gZihsLCBnLCB2LCBtLCBuW2UgKyAxMl0sIDYsIDE3MDA0ODU1NzEpLCBnLCB2LCBuW2UgKyAzXSwgMTAsIC0xODk0OTg2NjA2KSwgbCwgZywgbltlICsgMTBdLCAxNSwgLTEwNTE1MjMpLCBtLCBsLCBuW2UgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KSwgdiA9IGYodiwgbSA9IGYobSwgbCA9IGYobCwgZywgdiwgbSwgbltlICsgOF0sIDYsIDE4NzMzMTMzNTkpLCBnLCB2LCBuW2UgKyAxNV0sIDEwLCAtMzA2MTE3NDQpLCBsLCBnLCBuW2UgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKSwgbSwgbCwgbltlICsgMTNdLCAyMSwgMTMwOTE1MTY0OSksIHYgPSBmKHYsIG0gPSBmKG0sIGwgPSBmKGwsIGcsIHYsIG0sIG5bZSArIDRdLCA2LCAtMTQ1NTIzMDcwKSwgZywgdiwgbltlICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpLCBsLCBnLCBuW2UgKyAyXSwgMTUsIDcxODc4NzI1OSksIG0sIGwsIG5bZSArIDldLCAyMSwgLTM0MzQ4NTU1MSksIGwgPSB0KGwsIGkpLCBnID0gdChnLCBhKSwgdiA9IHQodiwgZCksIG0gPSB0KG0sIGgpO1xuICAgIH1cblxuICAgIHJldHVybiBbbCwgZywgdiwgbV07XG4gIH1cblxuICBmdW5jdGlvbiBhKG4pIHtcbiAgICB2YXIgdCxcbiAgICAgICAgciA9IFwiXCIsXG4gICAgICAgIGUgPSAzMiAqIG4ubGVuZ3RoO1xuXG4gICAgZm9yICh0ID0gMDsgdCA8IGU7IHQgKz0gOCkge1xuICAgICAgciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKG5bdCA+PiA1XSA+Pj4gdCAlIDMyICYgMjU1KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGQobikge1xuICAgIHZhciB0LFxuICAgICAgICByID0gW107XG5cbiAgICBmb3IgKHJbKG4ubGVuZ3RoID4+IDIpIC0gMV0gPSB2b2lkIDAsIHQgPSAwOyB0IDwgci5sZW5ndGg7IHQgKz0gMSkge1xuICAgICAgclt0XSA9IDA7XG4gICAgfVxuXG4gICAgdmFyIGUgPSA4ICogbi5sZW5ndGg7XG5cbiAgICBmb3IgKHQgPSAwOyB0IDwgZTsgdCArPSA4KSB7XG4gICAgICByW3QgPj4gNV0gfD0gKDI1NSAmIG4uY2hhckNvZGVBdCh0IC8gOCkpIDw8IHQgJSAzMjtcbiAgICB9XG5cbiAgICByZXR1cm4gcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGgobikge1xuICAgIHJldHVybiBhKGkoZChuKSwgOCAqIG4ubGVuZ3RoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBsKG4sIHQpIHtcbiAgICB2YXIgcixcbiAgICAgICAgZSxcbiAgICAgICAgbyA9IGQobiksXG4gICAgICAgIHUgPSBbXSxcbiAgICAgICAgYyA9IFtdO1xuXG4gICAgZm9yICh1WzE1XSA9IGNbMTVdID0gdm9pZCAwLCBvLmxlbmd0aCA+IDE2ICYmIChvID0gaShvLCA4ICogbi5sZW5ndGgpKSwgciA9IDA7IHIgPCAxNjsgciArPSAxKSB7XG4gICAgICB1W3JdID0gOTA5NTIyNDg2IF4gb1tyXSwgY1tyXSA9IDE1NDk1NTY4MjggXiBvW3JdO1xuICAgIH1cblxuICAgIHJldHVybiBlID0gaSh1LmNvbmNhdChkKHQpKSwgNTEyICsgOCAqIHQubGVuZ3RoKSwgYShpKGMuY29uY2F0KGUpLCA2NDApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGcobikge1xuICAgIHZhciB0LFxuICAgICAgICByLFxuICAgICAgICBlID0gXCJcIjtcblxuICAgIGZvciAociA9IDA7IHIgPCBuLmxlbmd0aDsgciArPSAxKSB7XG4gICAgICB0ID0gbi5jaGFyQ29kZUF0KHIpLCBlICs9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiLmNoYXJBdCh0ID4+PiA0ICYgMTUpICsgXCIwMTIzNDU2Nzg5YWJjZGVmXCIuY2hhckF0KDE1ICYgdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGU7XG4gIH1cblxuICBmdW5jdGlvbiB2KG4pIHtcbiAgICByZXR1cm4gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KG4pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG0obikge1xuICAgIHJldHVybiBoKHYobikpO1xuICB9XG5cbiAgZnVuY3Rpb24gcChuKSB7XG4gICAgcmV0dXJuIGcobShuKSk7XG4gIH1cblxuICBmdW5jdGlvbiBzKG4sIHQpIHtcbiAgICByZXR1cm4gbCh2KG4pLCB2KHQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEMobiwgdCkge1xuICAgIHJldHVybiBnKHMobiwgdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gQShuLCB0LCByKSB7XG4gICAgcmV0dXJuIHQgPyByID8gcyh0LCBuKSA6IEModCwgbikgOiByID8gbShuKSA6IHAobik7XG4gIH1cblxuICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gQTtcbiAgfSkgOiBcIm9iamVjdFwiID09ICh0eXBlb2YgbW9kdWxlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YobW9kdWxlKSkgJiYgbW9kdWxlLmV4cG9ydHMgPyBtb2R1bGUuZXhwb3J0cyA9IEEgOiBuLm1kNSA9IEE7XG59KHZvaWQgMCk7XG5cbn0se31dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX0hUTUxBdWRpb0VsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MQXVkaW9FbGVtZW50XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgQXVkaW8gPSBmdW5jdGlvbiAoX0hUTUxBdWRpb0VsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEF1ZGlvLCBfSFRNTEF1ZGlvRWxlbWVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBdWRpbyk7XG5cbiAgZnVuY3Rpb24gQXVkaW8odXJsKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1ZGlvKTtcblxuICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCB1cmwpO1xuICB9XG5cbiAgcmV0dXJuIEF1ZGlvO1xufShfSFRNTEF1ZGlvRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBdWRpbztcblxufSx7XCIuL0hUTUxBdWRpb0VsZW1lbnRcIjoxNX1dLDQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuKGZ1bmN0aW9uIChnbG9iYWwpeyhmdW5jdGlvbiAoKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbihmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIChmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgZGVmaW5lKFtcImV4cG9ydHNcIl0sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBleHBvcnRzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoZXhwb3J0cykpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBleHBvcnRzLm5vZGVOYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICBmYWN0b3J5KGV4cG9ydHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmYWN0b3J5KGdsb2JhbCk7XG4gICAgfVxuICB9KShmdW5jdGlvbiAoZXhwb3J0cykge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgZXhwb3J0cy5VUkwgPSBnbG9iYWwuVVJMIHx8IGdsb2JhbC53ZWJraXRVUkw7XG5cbiAgICBpZiAoZ2xvYmFsLkJsb2IgJiYgZ2xvYmFsLlVSTCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICB2YXIgQmxvYkJ1aWxkZXIgPSBnbG9iYWwuQmxvYkJ1aWxkZXIgfHwgZ2xvYmFsLldlYktpdEJsb2JCdWlsZGVyIHx8IGdsb2JhbC5Nb3pCbG9iQnVpbGRlciB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZ2V0X2NsYXNzID0gZnVuY3Rpb24gZ2V0X2NsYXNzKG9iamVjdCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkubWF0Y2goL15cXFtvYmplY3RcXHMoLiopXFxdJC8pWzFdO1xuICAgICAgfSxcbiAgICAgICAgICBGYWtlQmxvYkJ1aWxkZXIgPSBmdW5jdGlvbiBCbG9iQnVpbGRlcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICB9LFxuICAgICAgICAgIEZha2VCbG9iID0gZnVuY3Rpb24gQmxvYihkYXRhLCB0eXBlLCBlbmNvZGluZykge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnNpemUgPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5lbmNvZGluZyA9IGVuY29kaW5nO1xuICAgICAgfSxcbiAgICAgICAgICBGQkJfcHJvdG8gPSBGYWtlQmxvYkJ1aWxkZXIucHJvdG90eXBlLFxuICAgICAgICAgIEZCX3Byb3RvID0gRmFrZUJsb2IucHJvdG90eXBlLFxuICAgICAgICAgIEZpbGVSZWFkZXJTeW5jID0gZ2xvYmFsLkZpbGVSZWFkZXJTeW5jLFxuICAgICAgICAgIEZpbGVFeGNlcHRpb24gPSBmdW5jdGlvbiBGaWxlRXhjZXB0aW9uKHR5cGUpIHtcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpc1t0aGlzLm5hbWUgPSB0eXBlXTtcbiAgICAgIH0sXG4gICAgICAgICAgZmlsZV9leF9jb2RlcyA9IChcIk5PVF9GT1VORF9FUlIgU0VDVVJJVFlfRVJSIEFCT1JUX0VSUiBOT1RfUkVBREFCTEVfRVJSIEVOQ09ESU5HX0VSUiBcIiArIFwiTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSIElOVkFMSURfU1RBVEVfRVJSIFNZTlRBWF9FUlJcIikuc3BsaXQoXCIgXCIpLFxuICAgICAgICAgIGZpbGVfZXhfY29kZSA9IGZpbGVfZXhfY29kZXMubGVuZ3RoLFxuICAgICAgICAgIHJlYWxfVVJMID0gZ2xvYmFsLlVSTCB8fCBnbG9iYWwud2Via2l0VVJMIHx8IGV4cG9ydHMsXG4gICAgICAgICAgcmVhbF9jcmVhdGVfb2JqZWN0X1VSTCA9IHJlYWxfVVJMLmNyZWF0ZU9iamVjdFVSTCxcbiAgICAgICAgICByZWFsX3Jldm9rZV9vYmplY3RfVVJMID0gcmVhbF9VUkwucmV2b2tlT2JqZWN0VVJMLFxuICAgICAgICAgIFVSTCA9IHJlYWxfVVJMLFxuICAgICAgICAgIGJ0b2EgPSBnbG9iYWwuYnRvYSxcbiAgICAgICAgICBhdG9iID0gZ2xvYmFsLmF0b2IsXG4gICAgICAgICAgQXJyYXlCdWZmZXIgPSBnbG9iYWwuQXJyYXlCdWZmZXIsXG4gICAgICAgICAgVWludDhBcnJheSA9IGdsb2JhbC5VaW50OEFycmF5LFxuICAgICAgICAgIG9yaWdpbiA9IC9eW1xcdy1dKzpcXC8qXFxbP1tcXHdcXC46LV0rXFxdPyg/OjpbMC05XSspPy87XG5cbiAgICAgIEZha2VCbG9iLmZha2UgPSBGQl9wcm90by5mYWtlID0gdHJ1ZTtcblxuICAgICAgd2hpbGUgKGZpbGVfZXhfY29kZS0tKSB7XG4gICAgICAgIEZpbGVFeGNlcHRpb24ucHJvdG90eXBlW2ZpbGVfZXhfY29kZXNbZmlsZV9leF9jb2RlXV0gPSBmaWxlX2V4X2NvZGUgKyAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJlYWxfVVJMLmNyZWF0ZU9iamVjdFVSTCkge1xuICAgICAgICBVUkwgPSBleHBvcnRzLlVSTCA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICAgICAgICB2YXIgdXJpX2luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsIFwiYVwiKSxcbiAgICAgICAgICAgICAgdXJpX29yaWdpbjtcbiAgICAgICAgICB1cmlfaW5mby5ocmVmID0gdXJpO1xuXG4gICAgICAgICAgaWYgKCEoXCJvcmlnaW5cIiBpbiB1cmlfaW5mbykpIHtcbiAgICAgICAgICAgIGlmICh1cmlfaW5mby5wcm90b2NvbC50b0xvd2VyQ2FzZSgpID09PSBcImRhdGE6XCIpIHtcbiAgICAgICAgICAgICAgdXJpX2luZm8ub3JpZ2luID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHVyaV9vcmlnaW4gPSB1cmkubWF0Y2gob3JpZ2luKTtcbiAgICAgICAgICAgICAgdXJpX2luZm8ub3JpZ2luID0gdXJpX29yaWdpbiAmJiB1cmlfb3JpZ2luWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB1cmlfaW5mbztcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgVVJMLmNyZWF0ZU9iamVjdFVSTCA9IGZ1bmN0aW9uIChibG9iKSB7XG4gICAgICAgIHZhciB0eXBlID0gYmxvYi50eXBlLFxuICAgICAgICAgICAgZGF0YV9VUklfaGVhZGVyO1xuXG4gICAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgICAgdHlwZSA9IFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmxvYiBpbnN0YW5jZW9mIEZha2VCbG9iKSB7XG4gICAgICAgICAgZGF0YV9VUklfaGVhZGVyID0gXCJkYXRhOlwiICsgdHlwZTtcblxuICAgICAgICAgIGlmIChibG9iLmVuY29kaW5nID09PSBcImJhc2U2NFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YV9VUklfaGVhZGVyICsgXCI7YmFzZTY0LFwiICsgYmxvYi5kYXRhO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYmxvYi5lbmNvZGluZyA9PT0gXCJVUklcIikge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFfVVJJX2hlYWRlciArIFwiLFwiICsgZGVjb2RlVVJJQ29tcG9uZW50KGJsb2IuZGF0YSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGJ0b2EpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhX1VSSV9oZWFkZXIgKyBcIjtiYXNlNjQsXCIgKyBidG9hKGJsb2IuZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhX1VSSV9oZWFkZXIgKyBcIixcIiArIGVuY29kZVVSSUNvbXBvbmVudChibG9iLmRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZWFsX2NyZWF0ZV9vYmplY3RfVVJMKSB7XG4gICAgICAgICAgcmV0dXJuIHJlYWxfY3JlYXRlX29iamVjdF9VUkwuY2FsbChyZWFsX1VSTCwgYmxvYik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwgPSBmdW5jdGlvbiAob2JqZWN0X1VSTCkge1xuICAgICAgICBpZiAob2JqZWN0X1VSTC5zdWJzdHJpbmcoMCwgNSkgIT09IFwiZGF0YTpcIiAmJiByZWFsX3Jldm9rZV9vYmplY3RfVVJMKSB7XG4gICAgICAgICAgcmVhbF9yZXZva2Vfb2JqZWN0X1VSTC5jYWxsKHJlYWxfVVJMLCBvYmplY3RfVVJMKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgRkJCX3Byb3RvLmFwcGVuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBiYiA9IHRoaXMuZGF0YTtcblxuICAgICAgICBpZiAoVWludDhBcnJheSAmJiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5KSkge1xuICAgICAgICAgIHZhciBzdHIgPSBcIlwiLFxuICAgICAgICAgICAgICBidWYgPSBuZXcgVWludDhBcnJheShkYXRhKSxcbiAgICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICAgIGJ1Zl9sZW4gPSBidWYubGVuZ3RoO1xuXG4gICAgICAgICAgZm9yICg7IGkgPCBidWZfbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYmIucHVzaChzdHIpO1xuICAgICAgICB9IGVsc2UgaWYgKGdldF9jbGFzcyhkYXRhKSA9PT0gXCJCbG9iXCIgfHwgZ2V0X2NsYXNzKGRhdGEpID09PSBcIkZpbGVcIikge1xuICAgICAgICAgIGlmIChGaWxlUmVhZGVyU3luYykge1xuICAgICAgICAgICAgdmFyIGZyID0gbmV3IEZpbGVSZWFkZXJTeW5jKCk7XG4gICAgICAgICAgICBiYi5wdXNoKGZyLnJlYWRBc0JpbmFyeVN0cmluZyhkYXRhKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBGaWxlRXhjZXB0aW9uKFwiTk9UX1JFQURBQkxFX0VSUlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIEZha2VCbG9iKSB7XG4gICAgICAgICAgaWYgKGRhdGEuZW5jb2RpbmcgPT09IFwiYmFzZTY0XCIgJiYgYXRvYikge1xuICAgICAgICAgICAgYmIucHVzaChhdG9iKGRhdGEuZGF0YSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5lbmNvZGluZyA9PT0gXCJVUklcIikge1xuICAgICAgICAgICAgYmIucHVzaChkZWNvZGVVUklDb21wb25lbnQoZGF0YS5kYXRhKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLmVuY29kaW5nID09PSBcInJhd1wiKSB7XG4gICAgICAgICAgICBiYi5wdXNoKGRhdGEuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZGF0YSArPSBcIlwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJiLnB1c2godW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIEZCQl9wcm90by5nZXRCbG9iID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgdHlwZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IEZha2VCbG9iKHRoaXMuZGF0YS5qb2luKFwiXCIpLCB0eXBlLCBcInJhd1wiKTtcbiAgICAgIH07XG5cbiAgICAgIEZCQl9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiW29iamVjdCBCbG9iQnVpbGRlcl1cIjtcbiAgICAgIH07XG5cbiAgICAgIEZCX3Byb3RvLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQsIHR5cGUpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChhcmdzIDwgMykge1xuICAgICAgICAgIHR5cGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBGYWtlQmxvYih0aGlzLmRhdGEuc2xpY2Uoc3RhcnQsIGFyZ3MgPiAxID8gZW5kIDogdGhpcy5kYXRhLmxlbmd0aCksIHR5cGUsIHRoaXMuZW5jb2RpbmcpO1xuICAgICAgfTtcblxuICAgICAgRkJfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBcIltvYmplY3QgQmxvYl1cIjtcbiAgICAgIH07XG5cbiAgICAgIEZCX3Byb3RvLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICBkZWxldGUgdGhpcy5kYXRhO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIEZha2VCbG9iQnVpbGRlcjtcbiAgICB9KCk7XG5cbiAgICBleHBvcnRzLkJsb2IgPSBmdW5jdGlvbiAoYmxvYlBhcnRzLCBvcHRpb25zKSB7XG4gICAgICB2YXIgdHlwZSA9IG9wdGlvbnMgPyBvcHRpb25zLnR5cGUgfHwgXCJcIiA6IFwiXCI7XG4gICAgICB2YXIgYnVpbGRlciA9IG5ldyBCbG9iQnVpbGRlcigpO1xuXG4gICAgICBpZiAoYmxvYlBhcnRzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBibG9iUGFydHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBpZiAoVWludDhBcnJheSAmJiBibG9iUGFydHNbaV0gaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBidWlsZGVyLmFwcGVuZChibG9iUGFydHNbaV0uYnVmZmVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVpbGRlci5hcHBlbmQoYmxvYlBhcnRzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGJsb2IgPSBidWlsZGVyLmdldEJsb2IodHlwZSk7XG5cbiAgICAgIGlmICghYmxvYi5zbGljZSAmJiBibG9iLndlYmtpdFNsaWNlKSB7XG4gICAgICAgIGJsb2Iuc2xpY2UgPSBibG9iLndlYmtpdFNsaWNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYmxvYjtcbiAgICB9O1xuXG4gICAgdmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIHJldHVybiBvYmplY3QuX19wcm90b19fO1xuICAgIH07XG5cbiAgICBleHBvcnRzLkJsb2IucHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YobmV3IGV4cG9ydHMuQmxvYigpKTtcbiAgfSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmIHx8IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93IHx8IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsIHx8ICh2b2lkIDApLmNvbnRlbnQgfHwgdm9pZCAwKTtcblxufSkuY2FsbCh0aGlzKX0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxufSx7fV0sNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIERPTVJlY3QgPSBmdW5jdGlvbiBET01SZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERPTVJlY3QpO1xuXG4gIHRoaXMueCA9IHggPyB4IDogMDtcbiAgdGhpcy55ID0geSA/IHkgOiAwO1xuICB0aGlzLndpZHRoID0gd2lkdGggPyB3aWR0aCA6IDA7XG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0ID8gaGVpZ2h0IDogMDtcbiAgdGhpcy5sZWZ0ID0gdGhpcy54O1xuICB0aGlzLnRvcCA9IHRoaXMueTtcbiAgdGhpcy5yaWdodCA9IHRoaXMueCArIHRoaXMud2lkdGg7XG4gIHRoaXMuYm90dG9tID0gdGhpcy55ICsgdGhpcy5oZWlnaHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERPTVJlY3Q7XG5cbn0se31dLDY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG52YXIgRE9NVG9rZW5MaXN0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBET01Ub2tlbkxpc3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERPTVRva2VuTGlzdCk7XG5cbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRE9NVG9rZW5MaXN0LCBbe1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IGFkZCBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbnRhaW5zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnRhaW5zKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IGNvbnRhaW5zIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZW50cmllc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbnRyaWVzKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IGVudHJpZXMgaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JFYWNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvckVhY2goKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3QgZm9yRWFjaCBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIml0ZW1cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXRlbSgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCBpdGVtIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwia2V5c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBrZXlzKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IGtleXMgaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRE9NVG9rZW5MaXN0IHJlbW92ZSBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlcGxhY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbGFjZSgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCByZXBsYWNlIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3VwcG9ydHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3VwcG9ydHMoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3Qgc3VwcG9ydHMgaXNuJ3QgaW1wbGVtZW50ZWQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0b2dnbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlKCkge31cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkRPTVRva2VuTGlzdCB2YWx1ZSBpc24ndCBpbXBsZW1lbnRlZCFcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJET01Ub2tlbkxpc3QgdmFsdWVzIGlzbid0IGltcGxlbWVudGVkIVwiKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRE9NVG9rZW5MaXN0O1xufSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IERPTVRva2VuTGlzdDtcblxufSx7fV0sNzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgRGV2aWNlTW90aW9uRXZlbnQgPSBmdW5jdGlvbiAoX0V2ZW50KSB7XG4gIF9pbmhlcml0cyhEZXZpY2VNb3Rpb25FdmVudCwgX0V2ZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERldmljZU1vdGlvbkV2ZW50KTtcblxuICBmdW5jdGlvbiBEZXZpY2VNb3Rpb25FdmVudChpbml0QXJncykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZXZpY2VNb3Rpb25FdmVudCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsICdkZXZpY2Vtb3Rpb24nKTtcblxuICAgIGlmIChpbml0QXJncykge1xuICAgICAgX3RoaXMuX2FjY2VsZXJhdGlvbiA9IGluaXRBcmdzLmFjY2VsZXJhdGlvbiA/IGluaXRBcmdzLmFjY2VsZXJhdGlvbiA6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMFxuICAgICAgfTtcbiAgICAgIF90aGlzLl9hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5ID0gaW5pdEFyZ3MuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eSA/IGluaXRBcmdzLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkgOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHo6IDBcbiAgICAgIH07XG4gICAgICBfdGhpcy5fcm90YXRpb25SYXRlID0gaW5pdEFyZ3Mucm90YXRpb25SYXRlID8gaW5pdEFyZ3Mucm90YXRpb25SYXRlIDoge1xuICAgICAgICBhbHBoYTogMCxcbiAgICAgICAgYmV0YTogMCxcbiAgICAgICAgZ2FtbWE6IDBcbiAgICAgIH07XG4gICAgICBfdGhpcy5faW50ZXJ2YWwgPSBpbml0QXJncy5pbnRlcnZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMuX2FjY2VsZXJhdGlvbiA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgejogMFxuICAgICAgfTtcbiAgICAgIF90aGlzLl9hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5ID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB6OiAwXG4gICAgICB9O1xuICAgICAgX3RoaXMuX3JvdGF0aW9uUmF0ZSA9IHtcbiAgICAgICAgYWxwaGE6IDAsXG4gICAgICAgIGJldGE6IDAsXG4gICAgICAgIGdhbW1hOiAwXG4gICAgICB9O1xuICAgICAgX3RoaXMuX2ludGVydmFsID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGV2aWNlTW90aW9uRXZlbnQsIFt7XG4gICAga2V5OiBcImFjY2VsZXJhdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FjY2VsZXJhdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJvdGF0aW9uUmF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0aW9uUmF0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW50ZXJ2YWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGV2aWNlTW90aW9uRXZlbnQ7XG59KF9FdmVudDJbXCJkZWZhdWx0XCJdKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEZXZpY2VNb3Rpb25FdmVudDtcblxufSx7XCIuL0V2ZW50XCI6MTB9XSw4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9BdWRpbyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9cIikpO1xuXG52YXIgX0ZvbnRGYWNlU2V0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb250RmFjZVNldFwiKSk7XG5cbnZhciBfTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05vZGVcIikpO1xuXG52YXIgX05vZGVMaXN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ob2RlTGlzdFwiKSk7XG5cbnZhciBfSFRNTEFuY2hvckVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxBbmNob3JFbGVtZW50XCIpKTtcblxudmFyIF9IVE1MRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnRcIikpO1xuXG52YXIgX0hUTUxIdG1sRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEh0bWxFbGVtZW50XCIpKTtcblxudmFyIF9IVE1MQm9keUVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxCb2R5RWxlbWVudFwiKSk7XG5cbnZhciBfSFRNTEhlYWRFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MSGVhZEVsZW1lbnRcIikpO1xuXG52YXIgX0hUTUxDYW52YXNFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MQ2FudmFzRWxlbWVudFwiKSk7XG5cbnZhciBfSFRNTFZpZGVvRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTFZpZGVvRWxlbWVudFwiKSk7XG5cbnZhciBfSFRNTFNjcmlwdEVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxTY3JpcHRFbGVtZW50XCIpKTtcblxudmFyIF9IVE1MU3R5bGVFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MU3R5bGVFbGVtZW50XCIpKTtcblxudmFyIF9IVE1MSW5wdXRFbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MSW5wdXRFbGVtZW50XCIpKTtcblxudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL1dlYWtNYXBcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHsgX2dldCA9IFJlZmxlY3QuZ2V0OyB9IGVsc2UgeyBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikgeyB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpOyBpZiAoIWJhc2UpIHJldHVybjsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTsgaWYgKGRlc2MuZ2V0KSB7IHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzYy52YWx1ZTsgfTsgfSByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpOyB9XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHsgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHsgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrOyB9IHJldHVybiBvYmplY3Q7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIF9odG1sID0gbmV3IF9IVE1MSHRtbEVsZW1lbnRbXCJkZWZhdWx0XCJdKCk7XG5cbnZhciBEb2N1bWVudCA9IGZ1bmN0aW9uIChfTm9kZSkge1xuICBfaW5oZXJpdHMoRG9jdW1lbnQsIF9Ob2RlKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERvY3VtZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoRG9jdW1lbnQsIFt7XG4gICAga2V5OiBcImNoYXJhY3RlclNldFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFwiVVRGLThcIjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2NyaXB0c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc2NyaXB0cy5zbGljZSgwKTtcbiAgICB9XG4gIH1dKTtcblxuICBmdW5jdGlvbiBEb2N1bWVudCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRG9jdW1lbnQpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJoZWFkXCIsIG5ldyBfSFRNTEhlYWRFbGVtZW50W1wiZGVmYXVsdFwiXShfaHRtbCkpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImJvZHlcIiwgbmV3IF9IVE1MQm9keUVsZW1lbnRbXCJkZWZhdWx0XCJdKF9odG1sKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZm9udHNcIiwgbmV3IF9Gb250RmFjZVNldFtcImRlZmF1bHRcIl0oKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY29va2llXCIsIFwiXCIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImRvY3VtZW50RWxlbWVudFwiLCBfaHRtbCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVhZHlTdGF0ZVwiLCBcImNvbXBsZXRlXCIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInZpc2liaWxpdHlTdGF0ZVwiLCBcInZpc2libGVcIik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaGlkZGVuXCIsIGZhbHNlKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdHlsZVwiLCB7fSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibG9jYXRpb25cIiwgd2luZG93LmxvY2F0aW9uKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvbnRvdWNoc3RhcnRcIiwgbnVsbCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib250b3VjaG1vdmVcIiwgbnVsbCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib250b3VjaGVuZFwiLCBudWxsKTtcblxuICAgIF9odG1sLmFwcGVuZENoaWxkKF90aGlzLmhlYWQpO1xuXG4gICAgX2h0bWwuYXBwZW5kQ2hpbGQoX3RoaXMuYm9keSk7XG5cbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5zY3JpcHRzID0gW107XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERvY3VtZW50LCBbe1xuICAgIGtleTogXCJjcmVhdGVFbGVtZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0YWdOYW1lICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB0YWdOYW1lID0gdGFnTmFtZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBpZiAodGFnTmFtZSA9PT0gJ0NBTlZBUycpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfSFRNTENhbnZhc0VsZW1lbnRbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09ICdJTUcnKSB7XG4gICAgICAgIHJldHVybiBuZXcgSW1hZ2UoKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gJ1ZJREVPJykge1xuICAgICAgICByZXR1cm4gbmV3IF9IVE1MVmlkZW9FbGVtZW50W1wiZGVmYXVsdFwiXSgpO1xuICAgICAgfSBlbHNlIGlmICh0YWdOYW1lID09PSAnU0NSSVBUJykge1xuICAgICAgICByZXR1cm4gbmV3IF9IVE1MU2NyaXB0RWxlbWVudFtcImRlZmF1bHRcIl0oKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJJTlBVVFwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0hUTUxJbnB1dEVsZW1lbnRbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwiQVVESU9cIikge1xuICAgICAgICByZXR1cm4gbmV3IF9BdWRpb1tcImRlZmF1bHRcIl0oKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnTmFtZSA9PT0gXCJTVFlMRVwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0hUTUxTdHlsZUVsZW1lbnRbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB9IGVsc2UgaWYgKHRhZ05hbWUgPT09IFwiQVwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgX0hUTUxBbmNob3JFbGVtZW50W1wiZGVmYXVsdFwiXSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IF9IVE1MRWxlbWVudFtcImRlZmF1bHRcIl0odGFnTmFtZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUVsZW1lbnROU1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVFbGVtZW50KHF1YWxpZmllZE5hbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVFdmVudCh0eXBlKSB7XG4gICAgICBpZiAod2luZG93W3R5cGVdKSB7XG4gICAgICAgIHJldHVybiBuZXcgd2luZG93W3R5cGVdKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVUZXh0Tm9kZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVUZXh0Tm9kZSgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcImRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCkgaXMgbm90IHN1cHBvcnQhXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkaXNwYXRjaEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoKSB7XG4gICAgICBpZiAoX2h0bWwuZGlzcGF0Y2hFdmVudC5hcHBseShfaHRtbCwgYXJndW1lbnRzKSkge1xuICAgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoRG9jdW1lbnQucHJvdG90eXBlKSwgXCJkaXNwYXRjaEV2ZW50XCIsIHRoaXMpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kQ2hpbGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kQ2hpbGQobm9kZSkge1xuICAgICAgdmFyIG5vZGVOYW1lID0gbm9kZS5ub2RlTmFtZTtcblxuICAgICAgaWYgKG5vZGVOYW1lID09PSBcIlNDUklQVFwiKSB7XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc2NyaXB0cy5wdXNoKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoRG9jdW1lbnQucHJvdG90eXBlKSwgXCJhcHBlbmRDaGlsZFwiLCB0aGlzKS5jYWxsKHRoaXMsIG5vZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVDaGlsZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVDaGlsZChub2RlKSB7XG4gICAgICB2YXIgbm9kZU5hbWUgPSBub2RlLm5vZGVOYW1lO1xuXG4gICAgICBpZiAobm9kZU5hbWUgPT09IFwiU0NSSVBUXCIpIHtcbiAgICAgICAgdmFyIHNjcmlwdHMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLnNjcmlwdHM7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW5ndGggPSBzY3JpcHRzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgICBpZiAobm9kZSA9PT0gc2NyaXB0c1tpbmRleF0pIHtcbiAgICAgICAgICAgIHNjcmlwdHMuc2xpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihEb2N1bWVudC5wcm90b3R5cGUpLCBcInJlbW92ZUNoaWxkXCIsIHRoaXMpLmNhbGwodGhpcywgbm9kZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEVsZW1lbnRCeUlkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEVsZW1lbnRCeUlkKGlkKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgXCJVbmNhdWdodCBUeXBlRXJyb3I6IEZhaWxlZCB0byBleGVjdXRlICdnZXRFbGVtZW50QnlJZCcgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgcm9vdEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50RWxlbWVudDtcbiAgICAgIHZhciBlbGVtZW50QXJyID0gW10uY29uY2F0KHJvb3RFbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgdmFyIGVsZW1lbnQ7XG5cbiAgICAgIGlmIChpZCA9PT0gXCJjYW52YXNcIiB8fCBpZCA9PT0gXCJnbGNhbnZhc1wiKSB7XG4gICAgICAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudEFyci5wb3AoKSkge1xuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09PSBcImNhbnZhc1wiIHx8IGVsZW1lbnQuaWQgPT09IFwiZ2xjYW52YXNcIikge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWxlbWVudEFyciA9IGVsZW1lbnRBcnIuY29uY2F0KGVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudEFyci5wb3AoKSkge1xuICAgICAgICAgIGlmIChlbGVtZW50LmlkID09PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWxlbWVudEFyciA9IGVsZW1lbnRBcnIuY29uY2F0KGVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEVsZW1lbnRzQnlDbGFzc05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lcykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudHNCeUNsYXNzTmFtZScgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG5hbWVzICE9PSBcInN0cmluZ1wiICYmIG5hbWVzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgX05vZGVMaXN0W1wiZGVmYXVsdFwiXSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5kb2N1bWVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEVsZW1lbnRzQnlUYWdOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBcIlVuY2F1Z2h0IFR5cGVFcnJvcjogRmFpbGVkIHRvIGV4ZWN1dGUgJ2dldEVsZW1lbnRzQnlUYWdOYW1lJyBvbiAnRG9jdW1lbnQnOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCI7XG4gICAgICB9XG5cbiAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICB2YXIgcm9vdEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50RWxlbWVudDtcbiAgICAgIHZhciByZXN1bHQgPSBuZXcgX05vZGVMaXN0W1wiZGVmYXVsdFwiXSgpO1xuXG4gICAgICBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICAgICAgY2FzZSBcIkhFQURcIjpcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChkb2N1bWVudC5oZWFkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIFwiQk9EWVwiOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChyb290RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRFbGVtZW50c0J5TmFtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRFbGVtZW50c0J5TmFtZShuYW1lKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgXCJVbmNhdWdodCBUeXBlRXJyb3I6IEZhaWxlZCB0byBleGVjdXRlICdnZXRFbGVtZW50c0J5TmFtZScgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudEFyciA9IFtdLmNvbmNhdCh0aGlzLmNoaWxkTm9kZXMpO1xuICAgICAgdmFyIHJlc3VsdCA9IG5ldyBfTm9kZUxpc3RbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB2YXIgZWxlbWVudDtcblxuICAgICAgd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50QXJyLnBvcCgpKSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnRBcnIgPSBlbGVtZW50QXJyLmNvbmNhdChlbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJxdWVyeVNlbGVjdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgXCJVbmNhdWdodCBUeXBlRXJyb3I6IEZhaWxlZCB0byBleGVjdXRlICdxdWVyeVNlbGVjdG9yQWxsJyBvbiAnRG9jdW1lbnQnOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBub2RlTGlzdCA9IG5ldyBfTm9kZUxpc3RbXCJkZWZhdWx0XCJdKCk7XG5cbiAgICAgIHN3aXRjaCAoc2VsZWN0b3JzKSB7XG4gICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIGNhc2UgTmFOOlxuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvcnMgIT09IFwic3RyaW5nXCIgJiYgc2VsZWN0b3JzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgRE9NRXhjZXB0aW9uOiBGYWlsZWQgdG8gZXhlY3V0ZSAncXVlcnlTZWxlY3RvckFsbCcgb24gJ0RvY3VtZW50JzogJ1wiICsgc2VsZWN0b3JzICsgXCInIGlzIG5vdCBhIHZhbGlkIHNlbGVjdG9yLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVnID0gL15bQS1aYS16XSskLztcbiAgICAgIHZhciByZXN1bHQgPSBzZWxlY3RvcnMubWF0Y2gocmVnKTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWxlY3RvcnMpO1xuICAgICAgfVxuXG4gICAgICByZWcgPSAvXlxcLltBLVphLXokX11bQS1aYS16JF8wLTlcXC0gXSokLztcbiAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHZhciBzZWxlY3RvckFyciA9IHNlbGVjdG9ycy5zcGxpdChcIiBcIik7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yQXJyLnNoaWZ0KCk7XG4gICAgICAgIG5vZGVMaXN0ID0gdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yLnN1YnN0cigxKSk7XG4gICAgICAgIHZhciBsZW5ndGggPSBzZWxlY3RvckFyci5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGxlbmd0aCkge1xuICAgICAgICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9yQXJyLmpvaW4oXCIgXCIpO1xuICAgICAgICAgIGxlbmd0aCA9IG5vZGVMaXN0Lmxlbmd0aDtcblxuICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBzdWJOb2RlTGlzdCA9IG5vZGVMaXN0W2luZGV4XS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycyk7XG5cbiAgICAgICAgICAgIGlmIChzdWJOb2RlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN1Yk5vZGVMaXN0WzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlTGlzdFswXTtcbiAgICAgIH1cblxuICAgICAgcmVnID0gL14jW0EtWmEteiRfXVtBLVphLXokXzAtOVxcLV0qJC87XG4gICAgICByZXN1bHQgPSBzZWxlY3RvcnMubWF0Y2gocmVnKTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLnN1YnN0cigxKSk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBub2RlTGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RvcnMgPT09IFwiKlwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbGVjdG9ycyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlTGlzdFswXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicXVlcnlTZWxlY3RvckFsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBxdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAncXVlcnlTZWxlY3RvckFsbCcgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgbm9kZUxpc3QgPSBuZXcgX05vZGVMaXN0W1wiZGVmYXVsdFwiXSgpO1xuXG4gICAgICBzd2l0Y2ggKHNlbGVjdG9ycykge1xuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICBjYXNlIE5hTjpcbiAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICBjYXNlIFwiXCI6XG4gICAgICAgICAgcmV0dXJuIG5vZGVMaXN0O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9ycyAhPT0gXCJzdHJpbmdcIiAmJiBzZWxlY3RvcnMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgdGhyb3cgXCJVbmNhdWdodCBET01FeGNlcHRpb246IEZhaWxlZCB0byBleGVjdXRlICdxdWVyeVNlbGVjdG9yQWxsJyBvbiAnRG9jdW1lbnQnOiAnXCIgKyBzZWxlY3RvcnMgKyBcIicgaXMgbm90IGEgdmFsaWQgc2VsZWN0b3IuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWcgPSAvXltBLVphLXpdKyQvO1xuICAgICAgdmFyIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbGVjdG9ycyk7XG4gICAgICB9XG5cbiAgICAgIHJlZyA9IC9eXFwuW0EtWmEteiRfXVtBLVphLXokXzAtOVxcLV0qJC87XG4gICAgICByZXN1bHQgPSBzZWxlY3RvcnMubWF0Y2gocmVnKTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9ycy5zdWJzdHIoMSkpO1xuICAgICAgfVxuXG4gICAgICByZWcgPSAvXiNbQS1aYS16JF9dW0EtWmEteiRfMC05XFwtXSokLztcbiAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50QnlJZChzZWxlY3RvcnMuc3Vic3RyKDEpKTtcblxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIG5vZGVMaXN0LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdG9ycyA9PT0gXCIqXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3JzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGVMaXN0O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEb2N1bWVudDtcbn0oX05vZGUyW1wiZGVmYXVsdFwiXSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRG9jdW1lbnQ7XG5cbn0se1wiLi9BdWRpb1wiOjMsXCIuL0ZvbnRGYWNlU2V0XCI6MTMsXCIuL0hUTUxBbmNob3JFbGVtZW50XCI6MTQsXCIuL0hUTUxCb2R5RWxlbWVudFwiOjE2LFwiLi9IVE1MQ2FudmFzRWxlbWVudFwiOjE3LFwiLi9IVE1MRWxlbWVudFwiOjE4LFwiLi9IVE1MSGVhZEVsZW1lbnRcIjoxOSxcIi4vSFRNTEh0bWxFbGVtZW50XCI6MjAsXCIuL0hUTUxJbnB1dEVsZW1lbnRcIjoyMixcIi4vSFRNTFNjcmlwdEVsZW1lbnRcIjoyNCxcIi4vSFRNTFN0eWxlRWxlbWVudFwiOjI1LFwiLi9IVE1MVmlkZW9FbGVtZW50XCI6MjYsXCIuL05vZGVcIjozMSxcIi4vTm9kZUxpc3RcIjozMixcIi4vdXRpbC9XZWFrTWFwXCI6NTR9XSw5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTm9kZVwiKSk7XG5cbnZhciBfTm9kZUxpc3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05vZGVMaXN0XCIpKTtcblxudmFyIF9ET01Ub2tlbkxpc3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RPTVRva2VuXFx1MjAwQkxpc3RcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIEVsZW1lbnQgPSBmdW5jdGlvbiAoX05vZGUpIHtcbiAgX2luaGVyaXRzKEVsZW1lbnQsIF9Ob2RlKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEVsZW1lbnQpO1xuXG4gIGZ1bmN0aW9uIEVsZW1lbnQodGFnTmFtZSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbGVtZW50KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdGFnTmFtZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2xhc3NOYW1lXCIsICcnKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjaGlsZHJlblwiLCBbXSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2xhc3NMaXN0XCIsIG5ldyBfRE9NVG9rZW5MaXN0W1wiZGVmYXVsdFwiXSgpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ2YWx1ZVwiLCAxKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjb250ZW50XCIsIFwiXCIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNjcm9sbExlZnRcIiwgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2Nyb2xsVG9wXCIsIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNsaWVudExlZnRcIiwgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2xpZW50VG9wXCIsIDApO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEVsZW1lbnQsIFt7XG4gICAga2V5OiBcImdldEJvdW5kaW5nQ2xpZW50UmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICB3aWR0aDoganNiLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGpzYi5oZWlnaHQsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiBqc2IuaGVpZ2h0LFxuICAgICAgICByaWdodDoganNiLndpZHRoXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRFbGVtZW50c0J5VGFnTmFtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSB7XG4gICAgICB0YWdOYW1lID0gdGFnTmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgdmFyIHJlc3VsdCA9IG5ldyBfTm9kZUxpc3RbXCJkZWZhdWx0XCJdKCk7XG4gICAgICB2YXIgY2hpbGROb2RlcyA9IHRoaXMuY2hpbGROb2RlcztcbiAgICAgIHZhciBsZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGNoaWxkTm9kZXNbaW5kZXhdO1xuXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09IHRhZ05hbWUgfHwgdGFnTmFtZSA9PT0gXCIqXCIpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoZWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEVsZW1lbnRzQnlDbGFzc05hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lcykge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IFwiVW5jYXVnaHQgVHlwZUVycm9yOiBGYWlsZWQgdG8gZXhlY3V0ZSAnZ2V0RWxlbWVudHNCeUNsYXNzTmFtZScgb24gJ0RvY3VtZW50JzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcblxuICAgICAgaWYgKHR5cGVvZiBuYW1lcyAhPT0gXCJzdHJpbmdcIiAmJiBuYW1lcyBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudEFyciA9IFtdLmNvbmNhdCh0aGlzLmNoaWxkTm9kZXMpO1xuICAgICAgdmFyIGVsZW1lbnQ7XG5cbiAgICAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudEFyci5wb3AoKSkge1xuICAgICAgICB2YXIgY2xhc3NTdHIgPSBlbGVtZW50W1wiY2xhc3NcIl07XG5cbiAgICAgICAgaWYgKGNsYXNzU3RyKSB7XG4gICAgICAgICAgdmFyIGNsYXNzQXJyID0gY2xhc3NTdHIuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgIHZhciBsZW5ndGggPSBjbGFzc0Fyci5sZW5ndGg7XG5cbiAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NBcnJbaW5kZXhdID09PSBuYW1lcykge1xuICAgICAgICAgICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudEFyciA9IGVsZW1lbnRBcnIuY29uY2F0KGVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInF1ZXJ5U2VsZWN0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcXVlcnlTZWxlY3RvcihzZWxlY3RvcnMpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBcIlVuY2F1Z2h0IFR5cGVFcnJvcjogRmFpbGVkIHRvIGV4ZWN1dGUgJ3F1ZXJ5U2VsZWN0b3JBbGwnIG9uICdEb2N1bWVudCc6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5vZGVMaXN0ID0gbmV3IF9Ob2RlTGlzdFtcImRlZmF1bHRcIl0oKTtcblxuICAgICAgc3dpdGNoIChzZWxlY3RvcnMpIHtcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgY2FzZSBOYU46XG4gICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgY2FzZSBcIlwiOlxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9ycyAhPT0gXCJzdHJpbmdcIiAmJiBzZWxlY3RvcnMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgdGhyb3cgXCJVbmNhdWdodCBET01FeGNlcHRpb246IEZhaWxlZCB0byBleGVjdXRlICdxdWVyeVNlbGVjdG9yQWxsJyBvbiAnRG9jdW1lbnQnOiAnXCIgKyBzZWxlY3RvcnMgKyBcIicgaXMgbm90IGEgdmFsaWQgc2VsZWN0b3IuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWcgPSAvXltBLVphLXpdKyQvO1xuICAgICAgdmFyIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbGVjdG9ycyk7XG4gICAgICB9XG5cbiAgICAgIHJlZyA9IC9eLltBLVphLXokX11bQS1aYS16JF8wLTlcXC0gXSokLztcbiAgICAgIHJlc3VsdCA9IHNlbGVjdG9ycy5tYXRjaChyZWcpO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHZhciBzZWxlY3RvckFyciA9IHNlbGVjdG9ycy5zcGxpdChcIiBcIik7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yQXJyLnNoaWZ0KCk7XG4gICAgICAgIG5vZGVMaXN0ID0gdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yLnN1YnN0cigxKSk7XG4gICAgICAgIHZhciBsZW5ndGggPSBzZWxlY3RvckFyci5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGxlbmd0aCkge1xuICAgICAgICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9yQXJyLmpvaW4oXCIgXCIpO1xuICAgICAgICAgIGxlbmd0aCA9IG5vZGVMaXN0Lmxlbmd0aDtcblxuICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBzdWJOb2RlTGlzdCA9IG5vZGVMaXN0W2luZGV4XS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycyk7XG5cbiAgICAgICAgICAgIGlmIChzdWJOb2RlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN1Yk5vZGVMaXN0WzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlTGlzdFswXTtcbiAgICAgIH1cblxuICAgICAgcmVnID0gL14jW0EtWmEteiRfXVtBLVphLXokXzAtOVxcLV0qJC87XG4gICAgICByZXN1bHQgPSBzZWxlY3RvcnMubWF0Y2gocmVnKTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JzLnN1YnN0cigxKSk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICBub2RlTGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RvcnMgPT09IFwiKlwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbGVjdG9ycyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlTGlzdFswXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVxdWVzdEZ1bGxzY3JlZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdEZ1bGxzY3JlZW4oKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUF0dHJpYnV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpIHtcbiAgICAgIGlmIChhdHRyTmFtZSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiB0aGlzW1wic3R5bGVcIl0pIHtcbiAgICAgICAgICB0aGlzW1wic3R5bGVcIl1bc3R5bGVOYW1lXSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXNbYXR0ck5hbWVdID0gXCJcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0QXR0cmlidXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgICAgaWYgKG5hbWUgPT09IFwic3R5bGVcIikge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09IFwidW5kZWZpbmVkXCIgfHwgdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIHRoaXNbXCJzdHlsZVwiXSkge1xuICAgICAgICAgICAgdGhpc1tcInN0eWxlXCJdW3N0eWxlTmFtZV0gPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xccyovZywgXCJcIik7XG4gICAgICAgICAgdmFyIHZhbHVlQXJyYXkgPSB2YWx1ZS5zcGxpdChcIjtcIik7XG5cbiAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiB2YWx1ZUFycmF5KSB7XG4gICAgICAgICAgICBpZiAodmFsdWVBcnJheVtpbmRleF0gIT0gXCJcIikge1xuICAgICAgICAgICAgICB2YXIgdmFsdWVUZW1wID0gdmFsdWVBcnJheVtpbmRleF0uc3BsaXQoXCI6XCIpO1xuICAgICAgICAgICAgICB0aGlzW1wic3R5bGVcIl1bdmFsdWVUZW1wWzBdXSA9IHZhbHVlVGVtcFsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QXR0cmlidXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gICAgICB2YXIgYXR0cmlidXRlVmFsdWUgPSBudWxsO1xuXG4gICAgICBpZiAobmFtZSA9PSBcInN0eWxlXCIpIHtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzW1wic3R5bGVcIl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzW25hbWVdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEF0dHJpYnV0ZU5TXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZU5TKG5zLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmx1clwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJsYXN0Q2hpbGRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBsYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgcmV0dXJuIGxhc3RDaGlsZCA/IGxhc3RDaGlsZCA6IHRoaXMuaW5uZXJIVE1MID8gbmV3IEhUTUxFbGVtZW50KCkgOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZpcnN0Q2hpbGRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgIHJldHVybiBjaGlsZCA/IGNoaWxkIDogdGhpcy5pbm5lckhUTUwgPyBuZXcgSFRNTEVsZW1lbnQoKSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmlyc3RFbGVtZW50Q2hpbGRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgIHJldHVybiBjaGlsZCA/IGNoaWxkIDogdGhpcy5pbm5lckhUTUwgPyBuZXcgSFRNTEVsZW1lbnQoKSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xpZW50SGVpZ2h0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgc3R5bGUgPSB0aGlzLnN0eWxlIHx8IHt9O1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHN0eWxlLmZvbnRTaXplIHx8IFwiMFwiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidGFnTmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubm9kZU5hbWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEVsZW1lbnQ7XG59KF9Ob2RlMltcImRlZmF1bHRcIl0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEVsZW1lbnQ7XG5cbn0se1wiLi9ET01Ub2tlbuKAi0xpc3RcIjo2LFwiLi9Ob2RlXCI6MzEsXCIuL05vZGVMaXN0XCI6MzJ9XSwxMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXZlbnQodHlwZSwgZXZlbnRJbml0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50KTtcblxuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgIHRoaXMuX3RhcmdldCA9IG51bGw7XG4gICAgdGhpcy5fZXZlbnRQaGFzZSA9IDI7XG4gICAgdGhpcy5fY3VycmVudFRhcmdldCA9IG51bGw7XG4gICAgdGhpcy5fY2FuY2VsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9zdG9wcGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcGFzc2l2ZUxpc3RlbmVyID0gbnVsbDtcbiAgICB0aGlzLl90aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEV2ZW50LCBbe1xuICAgIGtleTogXCJjb21wb3NlZFBhdGhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9zZWRQYXRoKCkge1xuICAgICAgdmFyIGN1cnJlbnRUYXJnZXQgPSB0aGlzLl9jdXJyZW50VGFyZ2V0O1xuXG4gICAgICBpZiAoY3VycmVudFRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbY3VycmVudFRhcmdldF07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BQcm9wYWdhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSB7XG4gICAgICB0aGlzLl9zdG9wcGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHJldmVudERlZmF1bHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgICBpZiAodGhpcy5fcGFzc2l2ZUxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkV2ZW50I3ByZXZlbnREZWZhdWx0KCkgd2FzIGNhbGxlZCBmcm9tIGEgcGFzc2l2ZSBsaXN0ZW5lcjpcIiwgdGhpcy5fcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuY2FuY2VsYWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NhbmNlbGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRhcmdldFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3VycmVudFRhcmdldFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRUYXJnZXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVHJ1c3RlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lU3RhbXBcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90aW1lU3RhbXA7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMudHlwZS5pbmRleE9mKFwidG91Y2hcIikpIHtcbiAgICAgICAgdGhpcy5fdGltZVN0YW1wID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV2ZW50UGhhc2VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ldmVudFBoYXNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJidWJibGVzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNhbmNlbGFibGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0UHJldmVudGVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FuY2VsZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvc2VkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEV2ZW50O1xufSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV2ZW50O1xuRXZlbnQuTk9ORSA9IDA7XG5FdmVudC5DQVBUVVJJTkdfUEhBU0UgPSAxO1xuRXZlbnQuQVRfVEFSR0VUID0gMjtcbkV2ZW50LkJVQkJMSU5HX1BIQVNFID0gMztcblxufSx7fV0sMTE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9Ub3VjaEV2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ub3VjaEV2ZW50XCIpKTtcblxudmFyIF9XZWFrTWFwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlsL1dlYWtNYXBcIikpO1xuXG52YXIgX0RldmljZU1vdGlvbkV2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9EZXZpY2VNb3Rpb25FdmVudFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBfbGlzdGVuZXJTdGF0ID0ge307XG5cbnZhciBfb25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gX29uVG91Y2hTdGFydChlKSB7XG4gIHZhciBldmVudCA9IG5ldyBfVG91Y2hFdmVudFtcImRlZmF1bHRcIl0oXCJ0b3VjaHN0YXJ0XCIpO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG59O1xuXG52YXIgX29uVG91Y2hNb3ZlID0gZnVuY3Rpb24gX29uVG91Y2hNb3ZlKGUpIHtcbiAgdmFyIGV2ZW50ID0gbmV3IF9Ub3VjaEV2ZW50W1wiZGVmYXVsdFwiXShcInRvdWNobW92ZVwiKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xufTtcblxudmFyIF9vblRvdWNoQ2FuY2VsID0gZnVuY3Rpb24gX29uVG91Y2hDYW5jZWwoZSkge1xuICB2YXIgZXZlbnQgPSBuZXcgX1RvdWNoRXZlbnRbXCJkZWZhdWx0XCJdKFwidG91Y2hjYW5jZWxcIik7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbn07XG5cbnZhciBfb25Ub3VjaEVuZCA9IGZ1bmN0aW9uIF9vblRvdWNoRW5kKGUpIHtcbiAgdmFyIGV2ZW50ID0gbmV3IF9Ub3VjaEV2ZW50W1wiZGVmYXVsdFwiXShcInRvdWNoZW5kXCIpO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG59O1xuXG52YXIgX29uQWNjZWxlcm9tZXRlckNoYW5nZSA9IGZ1bmN0aW9uIF9vbkFjY2VsZXJvbWV0ZXJDaGFuZ2UoZSkge1xuICB2YXIgZXZlbnQgPSBuZXcgX0RldmljZU1vdGlvbkV2ZW50W1wiZGVmYXVsdFwiXShlKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcblxudmFyIEV2ZW50VGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFdmVudFRhcmdldCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRUYXJnZXQpO1xuXG4gICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLnNldCh0aGlzLCB7fSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRXZlbnRUYXJnZXQsIFt7XG4gICAga2V5OiBcImFkZEV2ZW50TGlzdGVuZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpO1xuXG4gICAgICBpZiAoIXByaXZhdGVUaGlzKSB7XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5zZXQodGhpcywgcHJpdmF0ZVRoaXMgPSB7fSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBldmVudHMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHByaXZhdGVUaGlzKTtcblxuICAgICAgaWYgKCFldmVudHMpIHtcbiAgICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLnNldChwcml2YXRlVGhpcywgZXZlbnRzID0ge30pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWV2ZW50c1t0eXBlXSkge1xuICAgICAgICBldmVudHNbdHlwZV0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxpc3RlbmVyQXJyYXkgPSBldmVudHNbdHlwZV07XG4gICAgICB2YXIgbGVuZ3RoID0gbGlzdGVuZXJBcnJheS5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgICAgaWYgKGxpc3RlbmVyQXJyYXlbaW5kZXhdID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lckFycmF5LnB1c2gobGlzdGVuZXIpO1xuXG4gICAgICBpZiAoX2xpc3RlbmVyU3RhdFt0eXBlXSkge1xuICAgICAgICArK19saXN0ZW5lclN0YXRbdHlwZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfbGlzdGVuZXJTdGF0W3R5cGVdID0gMTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwidG91Y2hzdGFydFwiOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBqc2Iub25Ub3VjaFN0YXJ0KF9vblRvdWNoU3RhcnQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgXCJ0b3VjaG1vdmVcIjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAganNiLm9uVG91Y2hNb3ZlKF9vblRvdWNoTW92ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBcInRvdWNoY2FuY2VsXCI6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGpzYi5vblRvdWNoQ2FuY2VsKF9vblRvdWNoQ2FuY2VsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIFwidG91Y2hlbmRcIjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAganNiLm9uVG91Y2hFbmQoX29uVG91Y2hFbmQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgXCJkZXZpY2Vtb3Rpb25cIjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAganNiLm9uQWNjZWxlcm9tZXRlckNoYW5nZShfb25BY2NlbGVyb21ldGVyQ2hhbmdlKTtcbiAgICAgICAgICAgICAganNiLmRldmljZS5zZXRNb3Rpb25FbmFibGVkKHRydWUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5jYXB0dXJlKSB7fVxuXG4gICAgICBpZiAob3B0aW9ucy5vbmNlKSB7fVxuXG4gICAgICBpZiAob3B0aW9ucy5wYXNzaXZlKSB7fVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVFdmVudExpc3RlbmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcyk7XG5cbiAgICAgIHZhciBldmVudHM7XG5cbiAgICAgIGlmIChwcml2YXRlVGhpcykge1xuICAgICAgICBldmVudHMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHByaXZhdGVUaGlzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50cykge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gbGlzdGVuZXJzLmxlbmd0aDsgaS0tOyBpID4gMCkge1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyc1tpXSA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcblxuICAgICAgICAgICAgICBpZiAoLS1fbGlzdGVuZXJTdGF0W3R5cGVdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwidG91Y2hzdGFydFwiOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAganNiLm9mZlRvdWNoU3RhcnQoX29uVG91Y2hTdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgY2FzZSBcInRvdWNobW92ZVwiOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAganNiLm9mZlRvdWNoTW92ZShfb25Ub3VjaE1vdmUpO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3VjaGNhbmNlbFwiOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAganNiLm9mZlRvdWNoQ2FuY2VsKF9vblRvdWNoQ2FuY2VsKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwidG91Y2hlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGpzYi5vZmZUb3VjaEVuZChfb25Ub3VjaEVuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgY2FzZSBcImRldmljZW1vdGlvblwiOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAganNiLm9mZkFjY2VsZXJvbWV0ZXJDaGFuZ2UoX29uQWNjZWxlcm9tZXRlckNoYW5nZSk7XG4gICAgICAgICAgICAgICAgICAgICAganNiLmRldmljZS5zZXRNb3Rpb25FbmFibGVkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkaXNwYXRjaEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoKSB7XG4gICAgICB2YXIgZXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgZXZlbnQuX3RhcmdldCA9IGV2ZW50Ll9jdXJyZW50VGFyZ2V0ID0gdGhpcztcblxuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgX1RvdWNoRXZlbnRbXCJkZWZhdWx0XCJdKSB7XG4gICAgICAgIHZhciB0b3VjaGVBcnJheSA9IGV2ZW50LnRvdWNoZXM7XG4gICAgICAgIHZhciBsZW5ndGggPSB0b3VjaGVBcnJheS5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICAgIHRvdWNoZUFycmF5W2luZGV4XS50YXJnZXQgPSB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgdG91Y2hlQXJyYXkgPSBldmVudC5jaGFuZ2VkVG91Y2hlcztcbiAgICAgICAgbGVuZ3RoID0gdG91Y2hlQXJyYXkubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIF9pbmRleCA9IDA7IF9pbmRleCA8IGxlbmd0aDsgKytfaW5kZXgpIHtcbiAgICAgICAgICB0b3VjaGVBcnJheVtfaW5kZXhdLnRhcmdldCA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGNhbGxiYWNrID0gdGhpc1tcIm9uXCIgKyBldmVudC50eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJpdmF0ZVRoaXMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpO1xuXG4gICAgICB2YXIgZXZlbnRzO1xuXG4gICAgICBpZiAocHJpdmF0ZVRoaXMpIHtcbiAgICAgICAgZXZlbnRzID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChwcml2YXRlVGhpcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudHMpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IGV2ZW50c1tldmVudC50eXBlXTtcblxuICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc1tpXS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZXZlbnQuX3RhcmdldCA9IGV2ZW50Ll9jdXJyZW50VGFyZ2V0ID0gbnVsbDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFdmVudFRhcmdldDtcbn0oKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBFdmVudFRhcmdldDtcblxufSx7XCIuL0RldmljZU1vdGlvbkV2ZW50XCI6NyxcIi4vVG91Y2hFdmVudFwiOjM0LFwiLi91dGlsL1dlYWtNYXBcIjo1NH1dLDEyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvV2Vha01hcFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBGb250RmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRm9udEZhY2UoZmFtaWx5LCBzb3VyY2UsIGRlc2NyaXB0b3JzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvbnRGYWNlKTtcblxuICAgIHRoaXMuZmFtaWx5ID0gZmFtaWx5O1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgIHRoaXMuZGVzY3JpcHRvcnMgPSBkZXNjcmlwdG9ycztcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIF9zZWxmUHJpdmF0ZSA9IHtcbiAgICAgIHN0YXR1czogXCJ1bmxvYWRlZFwiLFxuICAgICAgX3N0YXR1czogXCJ1bmxvYWRlZFwiLFxuICAgICAgbG9hZDogZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBcImxvYWRpbmdcIjtcbiAgICAgICAgdmFyIHNvdXJjZTtcblxuICAgICAgICBpZiAoc2VsZi5zb3VyY2UubWF0Y2goL3VybFxcKFxccyonXFxzKiguKj8pXFxzKidcXHMqXFwpLykpIHtcbiAgICAgICAgICBzb3VyY2UgPSBzZWxmLnNvdXJjZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3VyY2UgPSBcInVybCgnXCIgKyBzZWxmLnNvdXJjZSArIFwiJylcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmYW1pbHkgPSBqc2IubG9hZEZvbnQoc2VsZi5mYW1pbHksIHNvdXJjZSk7XG5cbiAgICAgICAgaWYgKGZhbWlseSkge1xuICAgICAgICAgIHRoaXMuX3N0YXR1cyA9IFwibG9hZGVkXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc3RhdHVzID0gXCJlcnJvclwiO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHN0YXR1cyA9IF9zZWxmUHJpdmF0ZS5zdGF0dXMgPSBfc2VsZlByaXZhdGUuX3N0YXR1cztcblxuICAgICAgICAgIGlmIChzdGF0dXMgPT09IFwibG9hZGVkXCIpIHtcbiAgICAgICAgICAgIF9zZWxmUHJpdmF0ZS5sb2FkUmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfc2VsZlByaXZhdGUubG9hZFJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5zZXQodGhpcywgX3NlbGZQcml2YXRlKTtcblxuICAgIF9zZWxmUHJpdmF0ZS5sb2FkZWQgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBfc2VsZlByaXZhdGUubG9hZFJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgX3NlbGZQcml2YXRlLmxvYWRSZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRm9udEZhY2UsIFt7XG4gICAga2V5OiBcImxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykubG9hZCgpO1xuXG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5sb2FkZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXR1c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc3RhdHVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmxvYWRlZDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRm9udEZhY2U7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gRm9udEZhY2U7XG5cbn0se1wiLi91dGlsL1dlYWtNYXBcIjo1NH1dLDEzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9FdmVudFRhcmdldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50VGFyZ2V0XCIpKTtcblxudmFyIF9FdmVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRcIikpO1xuXG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvV2Vha01hcFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgRm9udEZhY2VTZXQgPSBmdW5jdGlvbiAoX0V2ZW50VGFyZ2V0KSB7XG4gIF9pbmhlcml0cyhGb250RmFjZVNldCwgX0V2ZW50VGFyZ2V0KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEZvbnRGYWNlU2V0KTtcblxuICBmdW5jdGlvbiBGb250RmFjZVNldCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9udEZhY2VTZXQpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcblxuICAgIHZhciBzZWxmID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyk7XG5cbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5zdGF0dXMgPSBcImxvYWRlZFwiO1xuICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLnJlYWR5ID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5yZWFkeVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5yZWFkeVJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5mb250RmFjZVNldCA9IFtdO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGb250RmFjZVNldCwgW3tcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChmb250RmFjZSkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5mb250RmFjZVNldC5wdXNoKGZvbnRGYWNlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2hlY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJGb250RmFjZVNldC5jaGVjaygpIG5vdCBpbXBsZW1lbnRzXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkZvbnRGYWNlU2V0LmNsZWFyKCkgbm90IGltcGxlbWVudHNcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlbGV0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVsZXRlKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiRm9udEZhY2VTZXQuZGVsZXRlKCkgbm90IGltcGxlbWVudHNcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuc3RhdHVzID0gXCJsb2FkaW5nXCI7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oJ2xvYWRpbmcnKSk7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgZm9udEZhY2VTZXQgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLmZvbnRGYWNlU2V0O1xuXG4gICAgICAgIGlmIChmb250RmFjZVNldCkge1xuICAgICAgICAgIGZvciAodmFyIGluZGV4IGluIGZvbnRGYWNlU2V0KSB7XG4gICAgICAgICAgICB2YXIgZm9udEZhY2UgPSBmb250RmFjZVNldFtpbmRleF07XG5cbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KGZvbnRGYWNlKS5zdGF0dXM7XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IFwidW5sb2FkZWRcIiB8fCBzdGF0dXMgPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgICBmb250RmFjZS5sb2FkKCk7XG5cbiAgICAgICAgICAgICAgaWYgKF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoZm9udEZhY2UpLl9zdGF0dXMgIT09IFwibG9hZGVkXCIpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoc2VsZikuc3RhdHVzID0gXCJsb2FkZWRcIjtcblxuICAgICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoc2VsZikucmVhZHlSZXNvbHZlKFtdLmNvbmNhdChfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLmZvbnRGYWNlU2V0KSk7XG5cbiAgICAgICAgICByZXNvbHZlKFtdLmNvbmNhdChfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLmZvbnRGYWNlU2V0KSk7XG4gICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKCdsb2FkaW5nZG9uZScpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLnN0YXR1cyA9IFwibG9hZGVkXCI7XG5cbiAgICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldChzZWxmKS5yZWFkeVJlamVjdCgpO1xuXG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oJ2xvYWRpbmdlcnJvcicpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0dXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLnN0YXR1cztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVhZHlcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLnJlYWR5O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBGb250RmFjZVNldDtcbn0oX0V2ZW50VGFyZ2V0MltcImRlZmF1bHRcIl0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZvbnRGYWNlU2V0O1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vRXZlbnRUYXJnZXRcIjoxMSxcIi4vdXRpbC9XZWFrTWFwXCI6NTR9XSwxNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFwiKSk7XG5cbnZhciBfV2Vha01hcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9XZWFrTWFwXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbnZhciBIVE1MQW5jaG9yRWxlbWVudCA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxBbmNob3JFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSFRNTEFuY2hvckVsZW1lbnQpO1xuXG4gIGZ1bmN0aW9uIEhUTUxBbmNob3JFbGVtZW50KCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MQW5jaG9yRWxlbWVudCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFwiQVwiKTtcbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKS5wcm90b2NvbCA9IFwiOlwiO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIVE1MQW5jaG9yRWxlbWVudCwgW3tcbiAgICBrZXk6IFwicHJvdG9jb2xcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLnByb3RvY29sO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIVE1MQW5jaG9yRWxlbWVudDtcbn0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEhUTUxBbmNob3JFbGVtZW50O1xuXG59LHtcIi4vSFRNTEVsZW1lbnRcIjoxOCxcIi4vdXRpbC9XZWFrTWFwXCI6NTR9XSwxNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfSFRNTE1lZGlhRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxNZWRpYUVsZW1lbnRcIikpO1xuXG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG5cbnZhciBfV2Vha01hcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9XZWFrTWFwXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikgeyBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5zZXQpIHsgc2V0ID0gUmVmbGVjdC5zZXQ7IH0gZWxzZSB7IHNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHsgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTsgdmFyIGRlc2M7IGlmIChiYXNlKSB7IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTsgaWYgKGRlc2Muc2V0KSB7IGRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTsgcmV0dXJuIHRydWU7IH0gZWxzZSBpZiAoIWRlc2Mud3JpdGFibGUpIHsgcmV0dXJuIGZhbHNlOyB9IH0gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocmVjZWl2ZXIsIHByb3BlcnR5KTsgaWYgKGRlc2MpIHsgaWYgKCFkZXNjLndyaXRhYmxlKSB7IHJldHVybiBmYWxzZTsgfSBkZXNjLnZhbHVlID0gdmFsdWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIGRlc2MpOyB9IGVsc2UgeyBfZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIsIHByb3BlcnR5LCB2YWx1ZSk7IH0gcmV0dXJuIHRydWU7IH07IH0gcmV0dXJuIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpOyB9XG5cbmZ1bmN0aW9uIF9zZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyLCBpc1N0cmljdCkgeyB2YXIgcyA9IHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTsgaWYgKCFzICYmIGlzU3RyaWN0KSB7IHRocm93IG5ldyBFcnJvcignZmFpbGVkIHRvIHNldCBwcm9wZXJ0eScpOyB9IHJldHVybiB2YWx1ZTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkgeyBfZ2V0ID0gUmVmbGVjdC5nZXQ7IH0gZWxzZSB7IF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7IHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7IGlmICghYmFzZSkgcmV0dXJuOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpOyBpZiAoZGVzYy5nZXQpIHsgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpOyB9IHJldHVybiBkZXNjLnZhbHVlOyB9OyB9IHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7IH1cblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkgeyB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkgeyBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7IH0gcmV0dXJuIG9iamVjdDsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxudmFyIF9FUlJPUiA9IC0xO1xuXG52YXIgX0lOSVRJQUxJWklORyA9IDA7XG52YXIgX1BMQVlJTkcgPSAxO1xudmFyIF9QQVVTRSA9IDI7XG5cbnZhciBfYXVkaW9fdmFsaWRfaWQgPSBmdW5jdGlvbiBfYXVkaW9fdmFsaWRfaWQoYXVkaW9JRCkge1xuICByZXR1cm4gdHlwZW9mIGF1ZGlvSUQgPT09IFwibnVtYmVyXCI7XG59O1xuXG52YXIgX2F1ZGlvX3ZhbGlkX3NyYyA9IGZ1bmN0aW9uIF9hdWRpb192YWxpZF9zcmMoc3JjKSB7XG4gIHJldHVybiB0eXBlb2Ygc3JjID09PSBcInN0cmluZ1wiICYmIHNyYyAhPT0gXCJcIjtcbn07XG5cbnZhciBIVE1MQXVkaW9FbGVtZW50ID0gZnVuY3Rpb24gKF9IVE1MTWVkaWFFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MQXVkaW9FbGVtZW50LCBfSFRNTE1lZGlhRWxlbWVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIVE1MQXVkaW9FbGVtZW50KTtcblxuICBmdW5jdGlvbiBIVE1MQXVkaW9FbGVtZW50KHVybCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MQXVkaW9FbGVtZW50KTtcblxuICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCB1cmwsICdBVURJTycpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEhUTUxBdWRpb0VsZW1lbnQsIFt7XG4gICAga2V5OiBcImNhblBsYXlUeXBlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblBsYXlUeXBlKCkge1xuICAgICAgdmFyIG1lZGlhVHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG5cbiAgICAgIGlmICh0eXBlb2YgbWVkaWFUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVR5cGUuaW5kZXhPZignYXVkaW8vbXBlZycpID4gLTEgfHwgbWVkaWFUeXBlLmluZGV4T2YoJ2F1ZGlvL21wNCcpKSB7XG4gICAgICAgIHJldHVybiAncHJvYmFibHknO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgIHZhciBwcml2YXRlVGhpcyA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcyk7XG5cbiAgICAgIHZhciBhdWRpb0lEID0gcHJpdmF0ZVRoaXMuYXVkaW9JRDtcblxuICAgICAgaWYgKF9hdWRpb192YWxpZF9pZChhdWRpb0lEKSkge1xuICAgICAgICBqc2IuQXVkaW9FbmdpbmUuc3RvcChhdWRpb0lEKTtcbiAgICAgICAgcHJpdmF0ZVRoaXMuYXVkaW9JRCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBzcmMgPSB0aGlzLnNyYztcblxuICAgICAgaWYgKF9hdWRpb192YWxpZF9zcmMoc3JjKSkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHR5cGU6IFwibG9hZHN0YXJ0XCJcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAganNiLkF1ZGlvRW5naW5lLnByZWxvYWQodGhpcy5zcmMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLnNyYyA9PT0gc3JjKSB7XG4gICAgICAgICAgICAgIGlmIChzZWxmLmF1dG9wbGF5KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wbGF5KCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkZWRtZXRhZGF0YVwiKSk7XG4gICAgICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRlZGRhdGFcIikpO1xuICAgICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJjYW5wbGF5XCIpKTtcbiAgICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwiY2FucGxheXRocm91Z2hcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzcmMgIT09IFwiXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiaW52YWxpZCBzcmM6IFwiLCBzcmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwiZXJyb3JcIikpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwYXVzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIHZhciBhdWRpb0lEID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5hdWRpb0lEO1xuXG4gICAgICBpZiAoX2F1ZGlvX3ZhbGlkX2lkKGF1ZGlvSUQpKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGpzYi5BdWRpb0VuZ2luZS5nZXRTdGF0ZShhdWRpb0lEKTtcblxuICAgICAgICBpZiAoc3RhdGUgPT09IF9JTklUSUFMSVpJTkcgfHwgc3RhdGUgPT09IF9QTEFZSU5HKSB7XG4gICAgICAgICAganNiLkF1ZGlvRW5naW5lLnBhdXNlKGF1ZGlvSUQpO1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInBhdXNlXCIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwbGF5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICBpZiAoIV9hdWRpb192YWxpZF9zcmModGhpcy5zcmMpKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgdHlwZTogXCJlbXB0aWVkXCJcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBdWRpbyBwbGF5OiBwbGVhc2UgZGVmaW5lIHNyYyBiZWZvcmUgcGxheVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXVkaW9JRCA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXVkaW9JRDtcblxuICAgICAgaWYgKF9hdWRpb192YWxpZF9pZChhdWRpb0lEKSkge1xuICAgICAgICB2YXIgc3RhdGUgPSBqc2IuQXVkaW9FbmdpbmUuZ2V0U3RhdGUoYXVkaW9JRCk7XG5cbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgIGNhc2UgX1BBVVNFOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBqc2IuQXVkaW9FbmdpbmUucmVzdW1lKGF1ZGlvSUQpO1xuICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJwbGF5XCIpKTtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwicGxheWluZ1wiKSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgX1BMQVlJTkc6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIF9JTklUSUFMSVpJTkc6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgX0VSUk9SOlxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIGF1ZGlvSUQgPSBqc2IuQXVkaW9FbmdpbmUucGxheSh0aGlzLnNyYywgdGhpcy5sb29wLCB0aGlzLnZvbHVtZSk7XG5cbiAgICAgIGlmIChhdWRpb0lEID09PSAtMSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJlcnJvclwiKSk7XG4gICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwiZW5kZWRcIikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXG4gICAgICBpZiAodHlwZW9mIGN1cnJlbnRUaW1lID09PSBcIm51bWJlclwiICYmIGN1cnJlbnRUaW1lID4gMCkge1xuICAgICAgICBqc2IuQXVkaW9FbmdpbmUuc2V0Q3VycmVudFRpbWUoYXVkaW9JRCwgY3VycmVudFRpbWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJwbGF5XCIpKTtcbiAgICAgIGpzYi5BdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhhdWRpb0lELCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQoc2VsZikuYXVkaW9JRCA9IG51bGw7XG4gICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImVuZGVkXCIpKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIGpzYi5BdWRpb0VuZ2luZS5zZXRFcnJvckNhbGxiYWNrICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGpzYi5BdWRpb0VuZ2luZS5zZXRFcnJvckNhbGxiYWNrKGF1ZGlvSUQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHNlbGYpLmF1ZGlvSUQgPSBudWxsO1xuICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImVycm9yXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YganNiLkF1ZGlvRW5naW5lLnNldFdhaXRpbmdDYWxsYmFjayAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBqc2IuQXVkaW9FbmdpbmUuc2V0V2FpdGluZ0NhbGxiYWNrKGF1ZGlvSUQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJ3YWl0aW5nXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YganNiLkF1ZGlvRW5naW5lLnNldENhblBsYXlDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGpzYi5BdWRpb0VuZ2luZS5zZXRDYW5QbGF5Q2FsbGJhY2soYXVkaW9JRCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImNhbnBsYXlcIikpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5hdWRpb0lEID0gYXVkaW9JRDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3VycmVudFRpbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBhdWRpb0lEID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5hdWRpb0lEO1xuXG4gICAgICBpZiAoX2F1ZGlvX3ZhbGlkX2lkKGF1ZGlvSUQpKSB7XG4gICAgICAgIHJldHVybiBqc2IuQXVkaW9FbmdpbmUuZ2V0Q3VycmVudFRpbWUoYXVkaW9JRCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoSFRNTEF1ZGlvRWxlbWVudC5wcm90b3R5cGUpLCBcImN1cnJlbnRUaW1lXCIsIHRoaXMpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhciBhdWRpb0lEID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5hdWRpb0lEO1xuXG4gICAgICBpZiAoX2F1ZGlvX3ZhbGlkX2lkKGF1ZGlvSUQpKSB7XG4gICAgICAgIGpzYi5BdWRpb0VuZ2luZS5zZXRDdXJyZW50VGltZShhdWRpb0lELCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKEhUTUxBdWRpb0VsZW1lbnQucHJvdG90eXBlKSwgXCJjdXJyZW50VGltZVwiLCB2YWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImR1cmF0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgYXVkaW9JRCA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXVkaW9JRDtcblxuICAgICAgaWYgKF9hdWRpb192YWxpZF9pZChhdWRpb0lEKSkge1xuICAgICAgICByZXR1cm4ganNiLkF1ZGlvRW5naW5lLmdldER1cmF0aW9uKGF1ZGlvSUQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKEhUTUxBdWRpb0VsZW1lbnQucHJvdG90eXBlKSwgXCJkdXJhdGlvblwiLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9vcFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGF1ZGlvSUQgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmF1ZGlvSUQ7XG5cbiAgICAgIGlmIChfYXVkaW9fdmFsaWRfaWQoYXVkaW9JRCkpIHtcbiAgICAgICAgcmV0dXJuIGpzYi5BdWRpb0VuZ2luZS5pc0xvb3AoYXVkaW9JRCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoSFRNTEF1ZGlvRWxlbWVudC5wcm90b3R5cGUpLCBcImxvb3BcIiwgdGhpcyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFyIGF1ZGlvSUQgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmF1ZGlvSUQ7XG5cbiAgICAgIGlmIChfYXVkaW9fdmFsaWRfaWQoYXVkaW9JRCkpIHtcbiAgICAgICAganNiLkF1ZGlvRW5naW5lLnNldExvb3AoYXVkaW9JRCwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihIVE1MQXVkaW9FbGVtZW50LnByb3RvdHlwZSksIFwibG9vcFwiLCB2YWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZvbHVtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGF1ZGlvSUQgPSBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmF1ZGlvSUQ7XG5cbiAgICAgIGlmIChfYXVkaW9fdmFsaWRfaWQoYXVkaW9JRCkpIHtcbiAgICAgICAgcmV0dXJuIGpzYi5BdWRpb0VuZ2luZS5nZXRWb2x1bWUoYXVkaW9JRCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoSFRNTEF1ZGlvRWxlbWVudC5wcm90b3R5cGUpLCBcInZvbHVtZVwiLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB2YXIgYXVkaW9JRCA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXVkaW9JRDtcblxuICAgICAgaWYgKF9hdWRpb192YWxpZF9pZChhdWRpb0lEKSkge1xuICAgICAgICBqc2IuQXVkaW9FbmdpbmUuc2V0Vm9sdW1lKGF1ZGlvSUQsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoSFRNTEF1ZGlvRWxlbWVudC5wcm90b3R5cGUpLCBcInZvbHVtZVwiLCB2YWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNyY1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKEhUTUxBdWRpb0VsZW1lbnQucHJvdG90eXBlKSwgXCJzcmNcIiwgdGhpcyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFyIHByaXZhdGVUaGlzID0gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKTtcblxuICAgICAgdmFyIGF1ZGlvSUQgPSBwcml2YXRlVGhpcy5hdWRpb0lEO1xuXG4gICAgICBpZiAoX2F1ZGlvX3ZhbGlkX2lkKGF1ZGlvSUQpKSB7XG4gICAgICAgIGpzYi5BdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSUQpO1xuICAgICAgICBwcml2YXRlVGhpcy5hdWRpb0lEID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoSFRNTEF1ZGlvRWxlbWVudC5wcm90b3R5cGUpLCBcInNyY1wiLCB2YWx1ZSwgdGhpcywgdHJ1ZSk7XG5cbiAgICAgIGlmIChfYXVkaW9fdmFsaWRfc3JjKHZhbHVlKSkge1xuICAgICAgICBpZiAodGhpcy5hdXRvcGxheSB8fCB0aGlzLnByZWxvYWQgPT09IFwiYXV0b1wiKSB7XG4gICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJpbnZhbGlkIHNyYzogXCIsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImVycm9yXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSFRNTEF1ZGlvRWxlbWVudDtcbn0oX0hUTUxNZWRpYUVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSFRNTEF1ZGlvRWxlbWVudDtcblxufSx7XCIuL0V2ZW50XCI6MTAsXCIuL0hUTUxNZWRpYUVsZW1lbnRcIjoyMyxcIi4vdXRpbC9XZWFrTWFwXCI6NTR9XSwxNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudC5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIEhUTUxCb2R5RWxlbWVudCA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxCb2R5RWxlbWVudCwgX0hUTUxFbGVtZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxCb2R5RWxlbWVudCk7XG5cbiAgZnVuY3Rpb24gSFRNTEJvZHlFbGVtZW50KHBhcmVudE5vZGUpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTEJvZHlFbGVtZW50KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgXCJCT0RZXCIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInBhcmVudE5vZGVcIiwgbnVsbCk7XG5cbiAgICBfdGhpcy5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICByZXR1cm4gSFRNTEJvZHlFbGVtZW50O1xufShfSFRNTEVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSFRNTEJvZHlFbGVtZW50O1xuXG59LHtcIi4vSFRNTEVsZW1lbnQuanNcIjoxOH1dLDE3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9IVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50LmpzXCIpKTtcblxudmFyIF9ET01SZWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ET01SZWN0LmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbnZhciBDQU5WQVNfREVGQVVMVF9XSURUSCA9IDMwMDtcbnZhciBDQU5WQVNfREVGQVVMVF9IRUlHSFQgPSAxNTA7XG53aW5kb3cuanNiID0gd2luZG93LmpzYiB8fCB7fTtcbnZhciBfY3JlYXRlQ2FudmFzID0ganNiLmNyZWF0ZUNhbnZhcztcblxudmFyIEhUTUxDYW52YXNFbGVtZW50ID0gZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTENhbnZhc0VsZW1lbnQsIF9IVE1MRWxlbWVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIVE1MQ2FudmFzRWxlbWVudCk7XG5cbiAgZnVuY3Rpb24gSFRNTENhbnZhc0VsZW1lbnQod2lkdGgsIGhlaWdodCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MQ2FudmFzRWxlbWVudCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsICdDQU5WQVMnKTtcbiAgICBfdGhpcy5pZCA9ICdnbGNhbnZhcyc7XG4gICAgX3RoaXMudHlwZSA9ICdjYW52YXMnO1xuICAgIF90aGlzLnRvcCA9IDA7XG4gICAgX3RoaXMubGVmdCA9IDA7XG5cbiAgICBpZiAoX2NyZWF0ZUNhbnZhcykge1xuICAgICAgdmFyIGNhbnZhcyA9IF9jcmVhdGVDYW52YXMoKTtcblxuICAgICAgY2FudmFzLl9fcHJvdG9fXy5fX3Byb3RvX18gPSBIVE1MQ2FudmFzRWxlbWVudC5wcm90b3R5cGU7XG4gICAgICBPYmplY3Qua2V5cyhfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGNhbnZhc1trZXldID0gdGhpc1trZXldO1xuICAgICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgICBjYW52YXMud2lkdGggPSB3aWR0aCA+PSAwID8gTWF0aC5jZWlsKHdpZHRoKSA6IENBTlZBU19ERUZBVUxUX1dJRFRIO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodCA+PSAwID8gTWF0aC5jZWlsKGhlaWdodCkgOiBDQU5WQVNfREVGQVVMVF9IRUlHSFQ7XG4gICAgICBjYW52YXMuX3RhcmdldElEID0gX3RoaXMuX3RhcmdldElEO1xuICAgICAgY2FudmFzLl9saXN0ZW5lckNvdW50ID0gX3RoaXMuX2xpc3RlbmVyQ291bnQ7XG4gICAgICBjYW52YXMuX2xpc3RlbmVycyA9IF90aGlzLl9saXN0ZW5lcnM7XG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIGNhbnZhcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF90aGlzLl93aWR0aCA9IHdpZHRoID8gTWF0aC5jZWlsKHdpZHRoKSA6IENBTlZBU19ERUZBVUxUX1dJRFRIO1xuICAgICAgX3RoaXMuX2hlaWdodCA9IGhlaWdodCA/IE1hdGguY2VpbChoZWlnaHQpIDogQ0FOVkFTX0RFRkFVTFRfSEVJR0hUO1xuICAgICAgX3RoaXMuX2NvbnRleHQyRCA9IG51bGw7XG4gICAgICBfdGhpcy5fZGF0YUlubmVyID0gbnVsbDtcbiAgICAgIF90aGlzLl9hbGlnbm1lbnQgPSBfdGhpcy5fd2lkdGggJSAyID09PSAwID8gOCA6IDQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEhUTUxDYW52YXNFbGVtZW50LCBbe1xuICAgIGtleTogXCJnZXRDb250ZXh0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnRleHQobmFtZSwgb3B0cykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBpZiAobmFtZSA9PT0gJ3dlYmdsJyB8fCBuYW1lID09PSAnZXhwZXJpbWVudGFsLXdlYmdsJykge1xuICAgICAgICBpZiAodGhpcyA9PT0gd2luZG93Ll9fY2FudmFzKSByZXR1cm4gd2luZG93Ll9fZ2w7ZWxzZSByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJzJkJykge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbnRleHQyRCkge1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQyRCA9IG5ldyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQyRC5faW5uZXJDYW52YXMgPSB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQyRDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9kYXRhXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5fY29udGV4dDJEID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2RhdGFJbm5lcikge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2NvbnRleHQyRC5fZ2V0RGF0YSgpO1xuXG4gICAgICAgIHRoaXMuX2RhdGFJbm5lciA9IG5ldyBJbWFnZURhdGEoZGF0YSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fZGF0YUlubmVyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGllbnRXaWR0aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsaWVudEhlaWdodFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3aWR0aFwiLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHdpZHRoKSB7XG4gICAgICB3aWR0aCA9IHBhcnNlSW50KHdpZHRoKTtcblxuICAgICAgaWYgKGlzTmFOKHdpZHRoKSkge1xuICAgICAgICB3aWR0aCA9IENBTlZBU19ERUZBVUxUX1dJRFRIO1xuICAgICAgfSBlbHNlIGlmICh3aWR0aCA8IDApIHtcbiAgICAgICAgd2lkdGggPSBDQU5WQVNfREVGQVVMVF9XSURUSDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuX2FsaWdubWVudCA9IHRoaXMuX3dpZHRoICUgMiA9PT0gMCA/IDggOiA0O1xuXG4gICAgICBpZiAodGhpcy5fY29udGV4dDJEKSB7XG4gICAgICAgIHRoaXMuX2NvbnRleHQyRC5fd2lkdGggPSB3aWR0aDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZGF0YUlubmVyID0gbnVsbDtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoZWlnaHRcIixcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChoZWlnaHQpIHtcbiAgICAgIGhlaWdodCA9IHBhcnNlSW50KGhlaWdodCk7XG5cbiAgICAgIGlmIChpc05hTihoZWlnaHQpKSB7XG4gICAgICAgIGhlaWdodCA9IENBTlZBU19ERUZBVUxUX0hFSUdIVDtcbiAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0IDwgMCkge1xuICAgICAgICBoZWlnaHQgPSBDQU5WQVNfREVGQVVMVF9IRUlHSFQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcblxuICAgICAgaWYgKHRoaXMuX2NvbnRleHQyRCkge1xuICAgICAgICB0aGlzLl9jb250ZXh0MkQuX2hlaWdodCA9IGhlaWdodDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZGF0YUlubmVyID0gbnVsbDtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSFRNTENhbnZhc0VsZW1lbnQ7XG59KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBIVE1MQ2FudmFzRWxlbWVudDtcblxufSx7XCIuL0RPTVJlY3QuanNcIjo1LFwiLi9IVE1MRWxlbWVudC5qc1wiOjE4fV0sMTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX0VsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FbGVtZW50XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBIVE1MRWxlbWVudCA9IGZ1bmN0aW9uIChfRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTEVsZW1lbnQsIF9FbGVtZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxFbGVtZW50KTtcblxuICBmdW5jdGlvbiBIVE1MRWxlbWVudCh0YWdOYW1lKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxFbGVtZW50KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdGFnTmFtZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2xhc3NOYW1lXCIsICcnKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjaGlsZGVyblwiLCBbXSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3R5bGVcIiwge1xuICAgICAgd2lkdGg6IFwiXCIuY29uY2F0KGpzYi53aWR0aCwgXCJweFwiKSxcbiAgICAgIGhlaWdodDogXCJcIi5jb25jYXQoanNiLmhlaWdodCwgXCJweFwiKVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImluc2VydEJlZm9yZVwiLCBmdW5jdGlvbiAoKSB7fSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5uZXJIVE1MXCIsICcnKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIVE1MRWxlbWVudCwgW3tcbiAgICBrZXk6IFwic2V0QXR0cmlidXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRBdHRyaWJ1dGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzW25hbWVdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGllbnRXaWR0aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHJldCA9IHBhcnNlSW50KHRoaXMuc3R5bGUuZm9udFNpemUsIDEwKSAqIHRoaXMuaW5uZXJIVE1MLmxlbmd0aDtcbiAgICAgIHJldHVybiBOdW1iZXIuaXNOYU4ocmV0KSA/IDAgOiByZXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsaWVudEhlaWdodFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHJldCA9IHBhcnNlSW50KHRoaXMuc3R5bGUuZm9udFNpemUsIDEwKTtcbiAgICAgIHJldHVybiBOdW1iZXIuaXNOYU4ocmV0KSA/IDAgOiByZXQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhUTUxFbGVtZW50O1xufShfRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBIVE1MRWxlbWVudDtcblxufSx7XCIuL0VsZW1lbnRcIjo5fV0sMTk6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX0hUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnQuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBIVE1MSGVhZEVsZW1lbnQgPSBmdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MSGVhZEVsZW1lbnQsIF9IVE1MRWxlbWVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIVE1MSGVhZEVsZW1lbnQpO1xuXG4gIGZ1bmN0aW9uIEhUTUxIZWFkRWxlbWVudChwYXJlbnROb2RlKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxIZWFkRWxlbWVudCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFwiSEVBRFwiKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJwYXJlbnROb2RlXCIsIG51bGwpO1xuXG4gICAgX3RoaXMucGFyZW50Tm9kZSA9IHBhcmVudE5vZGU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmV0dXJuIEhUTUxIZWFkRWxlbWVudDtcbn0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEhUTUxIZWFkRWxlbWVudDtcblxufSx7XCIuL0hUTUxFbGVtZW50LmpzXCI6MTh9XSwyMDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgSFRNTEh0bWxFbGVtZW50ID0gZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTEh0bWxFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSFRNTEh0bWxFbGVtZW50KTtcblxuICBmdW5jdGlvbiBIVE1MSHRtbEVsZW1lbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxIdG1sRWxlbWVudCk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgXCJIVE1MXCIpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEhUTUxIdG1sRWxlbWVudCwgW3tcbiAgICBrZXk6IFwidmVyc2lvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhUTUxIdG1sRWxlbWVudDtcbn0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEhUTUxIdG1sRWxlbWVudDtcblxufSx7XCIuL0hUTUxFbGVtZW50XCI6MTh9XSwyMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFwiKSk7XG5cbnZhciBfRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbndpbmRvdy5qc2IgPSB3aW5kb3cuanNiIHx8IHt9O1xudmFyIF9jcmV0ZUltYWdlID0ganNiLmNyZWF0ZUltYWdlO1xuXG52YXIgX2ltYWdlO1xuXG52YXIgX3NldHRlcjtcblxudmFyIF9nZXR0ZXI7XG5cbmlmIChfY3JldGVJbWFnZSkge1xuICBfaW1hZ2UgPSBfY3JldGVJbWFnZSgpO1xuXG4gIHZhciBfZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2ltYWdlLl9fcHJvdG9fXywgXCJzcmNcIik7XG5cbiAgX3NldHRlciA9IF9kZXNjcmlwdG9yLnNldDtcbiAgX2dldHRlciA9IF9kZXNjcmlwdG9yLmdldDtcbn1cblxudmFyIEhUTUxJbWFnZUVsZW1lbnQgPSBmdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MSW1hZ2VFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSFRNTEltYWdlRWxlbWVudCk7XG5cbiAgZnVuY3Rpb24gSFRNTEltYWdlRWxlbWVudCh3aWR0aCwgaGVpZ2h0LCBpc0NhbGxlZEZyb21JbWFnZSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MSW1hZ2VFbGVtZW50KTtcblxuICAgIGlmICghaXNDYWxsZWRGcm9tSW1hZ2UpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGNvbnN0cnVjdG9yLCB1c2UgJ25ldyBJbWFnZSh3LCBoKTsgaW5zdGVhZCEnXCIpO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgJ0lNRycpO1xuICAgIF90aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgX3RoaXMuY3Jvc3NPcmlnaW4gPSBudWxsO1xuICAgIF90aGlzLm5hdHVyYWxXaWR0aCA9IDA7XG4gICAgX3RoaXMubmF0dXJhbEhlaWdodCA9IDA7XG4gICAgX3RoaXMud2lkdGggPSB3aWR0aCB8fCAwO1xuICAgIF90aGlzLmhlaWdodCA9IGhlaWdodCB8fCAwO1xuXG4gICAgaWYgKF9jcmV0ZUltYWdlKSB7XG4gICAgICB2YXIgaW1hZ2UgPSBfY3JldGVJbWFnZSgpO1xuXG4gICAgICBPYmplY3Qua2V5cyhfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGltYWdlW2tleV0gPSB0aGlzW2tleV07XG4gICAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcblxuICAgICAgaW1hZ2UuX29ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubmF0dXJhbFdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy5uYXR1cmFsSGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRcIikpO1xuICAgICAgfS5iaW5kKGltYWdlKTtcblxuICAgICAgaW1hZ2UuX29uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImVycm9yXCIpKTtcbiAgICAgIH0uYmluZChpbWFnZSk7XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbWFnZSwgXCJzcmNcIiwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBfZ2V0dGVyLmNhbGwodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBfc2V0dGVyLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgaW1hZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIVE1MSW1hZ2VFbGVtZW50LCBbe1xuICAgIGtleTogXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkge1xuICAgICAgcmV0dXJuIG5ldyBET01SZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3JjXCIsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3JjKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5fc3JjID0gc3JjO1xuXG4gICAgICBpZiAoc3JjID09PSBcIlwiKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBudWxsO1xuICAgICAgICB0aGlzLl9pbWFnZU1ldGEgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZ2xGb3JtYXQgPSB0aGlzLl9nbEludGVybmFsRm9ybWF0ID0gMHgxOTA4O1xuICAgICAgICB0aGlzLmNyb3NzT3JpZ2luID0gbnVsbDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBqc2IubG9hZEltYWdlRGF0YShzcmMsIGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgIGlmICghaW5mbykge1xuICAgICAgICAgIHZhciBfZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXSgnZXJyb3InKTtcblxuICAgICAgICAgIF90aGlzMi5kaXNwYXRjaEV2ZW50KF9ldmVudCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczIuX2ltYWdlTWV0YSA9IGluZm87XG4gICAgICAgIF90aGlzMi53aWR0aCA9IF90aGlzMi5uYXR1cmFsV2lkdGggPSBpbmZvLndpZHRoO1xuICAgICAgICBfdGhpczIuaGVpZ2h0ID0gX3RoaXMyLm5hdHVyYWxIZWlnaHQgPSBpbmZvLmhlaWdodDtcbiAgICAgICAgX3RoaXMyLl9kYXRhID0gaW5mby5kYXRhO1xuICAgICAgICBfdGhpczIuX2dsRm9ybWF0ID0gaW5mby5nbEZvcm1hdDtcbiAgICAgICAgX3RoaXMyLl9nbEludGVybmFsRm9ybWF0ID0gaW5mby5nbEludGVybmFsRm9ybWF0O1xuICAgICAgICBfdGhpczIuX2dsVHlwZSA9IGluZm8uZ2xUeXBlO1xuICAgICAgICBfdGhpczIuX251bWJlck9mTWlwbWFwcyA9IGluZm8ubnVtYmVyT2ZNaXBtYXBzO1xuICAgICAgICBfdGhpczIuX2NvbXByZXNzZWQgPSBpbmZvLmNvbXByZXNzZWQ7XG4gICAgICAgIF90aGlzMi5fYnBwID0gaW5mby5icHA7XG4gICAgICAgIF90aGlzMi5fcHJlbXVsdGlwbHlBbHBoYSA9IGluZm8ucHJlbXVsdGlwbHlBbHBoYTtcbiAgICAgICAgX3RoaXMyLl9hbGlnbm1lbnQgPSAxO1xuXG4gICAgICAgIGlmICgoX3RoaXMyLl9udW1iZXJPZk1pcG1hcHMgPT0gMCB8fCBfdGhpczIuX251bWJlck9mTWlwbWFwcyA9PSAxKSAmJiAhX3RoaXMyLl9jb21wcmVzc2VkKSB7XG4gICAgICAgICAgdmFyIGJ5dGVzUGVyUm93ID0gX3RoaXMyLndpZHRoICogX3RoaXMyLl9icHAgLyA4O1xuICAgICAgICAgIGlmIChieXRlc1BlclJvdyAlIDggPT0gMCkgX3RoaXMyLl9hbGlnbm1lbnQgPSA4O2Vsc2UgaWYgKGJ5dGVzUGVyUm93ICUgNCA9PSAwKSBfdGhpczIuX2FsaWdubWVudCA9IDQ7ZWxzZSBpZiAoYnl0ZXNQZXJSb3cgJSAyID09IDApIF90aGlzMi5fYWxpZ25tZW50ID0gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzMi5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKCdsb2FkJyk7XG5cbiAgICAgICAgX3RoaXMyLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zcmM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsaWVudFdpZHRoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xpZW50SGVpZ2h0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEhUTUxJbWFnZUVsZW1lbnQ7XG59KF9IVE1MRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBIVE1MSW1hZ2VFbGVtZW50O1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vSFRNTEVsZW1lbnRcIjoxOH1dLDIyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9IVE1MRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHsgX2dldCA9IFJlZmxlY3QuZ2V0OyB9IGVsc2UgeyBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikgeyB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpOyBpZiAoIWJhc2UpIHJldHVybjsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTsgaWYgKGRlc2MuZ2V0KSB7IHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzYy52YWx1ZTsgfTsgfSByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpOyB9XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHsgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHsgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrOyB9IHJldHVybiBvYmplY3Q7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbndpbmRvdy5qc2IgPSB3aW5kb3cuanNiIHx8IHt9O1xuXG52YXIgSFRNTElucHV0RWxlbWVudCA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxJbnB1dEVsZW1lbnQsIF9IVE1MRWxlbWVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIVE1MSW5wdXRFbGVtZW50KTtcblxuICBmdW5jdGlvbiBIVE1MSW5wdXRFbGVtZW50KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MSW5wdXRFbGVtZW50KTtcblxuICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBcIklOUFVUXCIpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEhUTUxJbnB1dEVsZW1lbnQsIFt7XG4gICAga2V5OiBcImZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUpLCBcImZvY3VzXCIsIHRoaXMpLmNhbGwodGhpcyk7XG5cbiAgICAgIGlmICghdGhpcy50YXJnZXQuZWRpdGFibGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgIHZhciBvbktleWJvYXJkSW5wdXQgPSBmdW5jdGlvbiBvbktleWJvYXJkSW5wdXQocmVzKSB7XG4gICAgICAgIHZhciBzdHIgPSByZXMgPyByZXMudmFsdWUgOiBcIlwiO1xuICAgICAgICB0aGF0LmlucHV0VGFyZ2V0LnRleHQgPSBzdHI7XG4gICAgICAgIHRoYXQudGFyZ2V0LmV2ZW50KFwiaW5wdXRcIik7XG4gICAgICB9O1xuXG4gICAgICB2YXIgb25LZXlib2FyZENvbmZpcm0gPSBmdW5jdGlvbiBvbktleWJvYXJkQ29uZmlybShyZXMpIHtcbiAgICAgICAgdmFyIHN0ciA9IHJlcyA/IHJlcy52YWx1ZSA6IFwiXCI7XG4gICAgICAgIHRoYXQudGFyZ2V0LnRleHQgPSBzdHI7XG4gICAgICAgIHRoYXQudGFyZ2V0LmV2ZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoYXQudGFyZ2V0LmZvY3VzID0gZmFsc2U7XG4gICAgICAgIGpzYi5vZmZLZXlib2FyZENvbmZpcm0ob25LZXlib2FyZENvbmZpcm0pO1xuICAgICAgICBqc2Iub2ZmS2V5Ym9hcmRJbnB1dChvbktleWJvYXJkSW5wdXQpO1xuICAgICAgICBqc2IuaGlkZUtleWJvYXJkKHt9KTtcbiAgICAgIH07XG5cbiAgICAgIGpzYi5vZmZLZXlib2FyZElucHV0KG9uS2V5Ym9hcmRJbnB1dCk7XG4gICAgICBqc2Iub2ZmS2V5Ym9hcmRDb25maXJtKG9uS2V5Ym9hcmRDb25maXJtKTtcbiAgICAgIGpzYi5zaG93S2V5Ym9hcmQoe1xuICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIG1heExlbmd0aDogdGhpcy5tYXhMZW5ndGgsXG4gICAgICAgIG11bHRpcGxlOiB0aGlzLnRhcmdldC5tdWx0aWxpbmUsXG4gICAgICAgIGNvbmZpcm1Ib2xkOiBmYWxzZSxcbiAgICAgICAgaW5wdXRUeXBlOiB0aGlzLnRhcmdldC50eXBlLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge30sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwocmVzKSB7fVxuICAgICAgfSk7XG4gICAgICBqc2Iub25LZXlib2FyZElucHV0KG9uS2V5Ym9hcmRJbnB1dCk7XG4gICAgICBqc2Iub25LZXlib2FyZENvbmZpcm0ob25LZXlib2FyZENvbmZpcm0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJibHVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSksIFwiYmx1clwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuXG4gICAgICBqc2IuaGlkZUtleWJvYXJkKHt9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSFRNTElucHV0RWxlbWVudDtcbn0oX0hUTUxFbGVtZW50MltcImRlZmF1bHRcIl0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbn0se1wiLi9IVE1MRWxlbWVudFwiOjE4fV0sMjM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX0hUTUxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEVsZW1lbnRcIikpO1xuXG52YXIgX01lZGlhRXJyb3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01lZGlhRXJyb3JcIikpO1xuXG52YXIgX1dlYWtNYXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvV2Vha01hcFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgSFRNTE1lZGlhRWxlbWVudCA9IGZ1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxNZWRpYUVsZW1lbnQsIF9IVE1MRWxlbWVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihIVE1MTWVkaWFFbGVtZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoSFRNTE1lZGlhRWxlbWVudCwgbnVsbCwgW3tcbiAgICBrZXk6IFwiTkVUV09SS19FTVBUWVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIk5FVFdPUktfSURMRVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIk5FVFdPUktfTE9BRElOR1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIk5FVFdPUktfTk9fU09VUkNFXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gMztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiSEFWRV9OT1RISU5HXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiSEFWRV9NRVRBREFUQVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkhBVkVfQ1VSUkVOVF9EQVRBXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiSEFWRV9GVVRVUkVfREFUQVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIDM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIkhBVkVfRU5PVUdIX0RBVEFcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiA0O1xuICAgIH1cbiAgfV0pO1xuXG4gIGZ1bmN0aW9uIEhUTUxNZWRpYUVsZW1lbnQodXJsLCB0eXBlKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxNZWRpYUVsZW1lbnQpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB0eXBlKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJhdWRpb1RyYWNrc1wiLCB1bmRlZmluZWQpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImF1dG9wbGF5XCIsIGZhbHNlKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjb250cm9sbGVyXCIsIG51bGwpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNvbnRyb2xzXCIsIGZhbHNlKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjcm9zc09yaWdpblwiLCBudWxsKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJkZWZhdWx0TXV0ZWRcIiwgZmFsc2UpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImRlZmF1bHRQbGF5YmFja1JhdGVcIiwgMS4wKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJtZWRpYUdyb3VwXCIsIHVuZGVmaW5lZCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibWVkaWFLZXlzXCIsIG51bGwpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm1vekF1ZGlvQ2hhbm5lbFR5cGVcIiwgdW5kZWZpbmVkKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJtdXRlZFwiLCBmYWxzZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwibmV0d29ya1N0YXRlXCIsIEhUTUxNZWRpYUVsZW1lbnQuTkVUV09SS19FTVBUWSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicGxheWJhY2tSYXRlXCIsIDEpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInByZWxvYWRcIiwgXCJhdXRvXCIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImxvb3BcIiwgZmFsc2UpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwge1xuICAgICAgYnVmZmVyZWQ6IHVuZGVmaW5lZCxcbiAgICAgIGN1cnJlbnRTcmM6IHVybCB8fCBcIlwiLFxuICAgICAgZHVyYXRpb246IDAsXG4gICAgICBlbmRlZDogZmFsc2UsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIGluaXRpYWxUaW1lOiAwLFxuICAgICAgcGF1c2VkOiB0cnVlLFxuICAgICAgcmVhZHlTdGF0ZTogSFRNTE1lZGlhRWxlbWVudC5IQVZFX05PVEhJTkcsXG4gICAgICB2YWx1ZTogMS4wLFxuICAgICAgY3VycmVudFRpbWU6IDBcbiAgICB9KTtcblxuICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmVuZGVkID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJwbGF5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZW5kZWQgPSBmYWxzZTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZXJyb3IgPSBudWxsO1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5wYXVzZWQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmVycm9yID0gdHJ1ZTtcbiAgICAgIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZW5kZWQgPSB0cnVlO1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5wYXVzZWQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhIVE1MTWVkaWFFbGVtZW50LCBbe1xuICAgIGtleTogXCJjYW5QbGF5VHlwZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5QbGF5VHlwZShtZWRpYVR5cGUpIHtcbiAgICAgIHJldHVybiAnbWF5YmUnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjYXB0dXJlU3RyZWFtXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhcHR1cmVTdHJlYW0oKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImZhc3RTZWVrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZhc3RTZWVrKCkge31cbiAgfSwge1xuICAgIGtleTogXCJsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInBhdXNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge31cbiAgfSwge1xuICAgIGtleTogXCJwbGF5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImN1cnJlbnRUaW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5jdXJyZW50VGltZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmN1cnJlbnRUaW1lID0gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNyY1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuY3VycmVudFNyYztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmN1cnJlbnRTcmMgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYnVmZmVyZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmJ1ZmZlcmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjdXJyZW50U3JjXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5jdXJyZW50U3JjO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkdXJhdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuZHVyYXRpb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVuZGVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5lbmRlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXJyb3JcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmVycm9yO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbml0aWFsVGltZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuaW5pdGlhbFRpbWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInBhdXNlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykucGF1c2VkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2b2x1bWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLnZvbHVtZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLnZvbHVtZSA9IHZhbHVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIVE1MTWVkaWFFbGVtZW50O1xufShfSFRNTEVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSFRNTE1lZGlhRWxlbWVudDtcblxufSx7XCIuL0hUTUxFbGVtZW50XCI6MTgsXCIuL01lZGlhRXJyb3JcIjoyOSxcIi4vdXRpbC9XZWFrTWFwXCI6NTR9XSwyNDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFwiKSk7XG5cbnZhciBfRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcblxudmFyIF9GaWxlQ2FjaGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvRmlsZUNhY2hlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgX0JBU0U2NF9OQU1FID0gXCJkYXRhOmFwcGxpY2F0aW9uL2phdmFzY3JpcHQ7YmFzZTY0LFwiO1xudmFyIF9VUklfTkFNRSA9IFwiZGF0YTphcHBsaWNhdGlvbi9qYXZhc2NyaXB0LFwiO1xuXG52YXIgX2dldFBhdGhGcm9tQmFzZTY0U3RyaW5nID0gZnVuY3Rpb24gX2dldFBhdGhGcm9tQmFzZTY0U3RyaW5nKHNyYykge1xuICBpZiAoc3JjID09PSBudWxsIHx8IHNyYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHNyYztcbiAgfVxuXG4gIGlmIChzcmMuc3RhcnRzV2l0aChfQkFTRTY0X05BTUUpKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBzcmMuc3Vic3RyaW5nKF9CQVNFNjRfTkFNRS5sZW5ndGgpO1xuICAgIHZhciBzb3VyY2UgPSB3aW5kb3cuYXRvYihjb250ZW50KTtcbiAgICB2YXIgbGVuID0gc291cmNlLmxlbmd0aDtcblxuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICByZXR1cm4gX2dldERpc2tQYXRoRnJvbUFycmF5QnVmZmVyKHNvdXJjZSwgbGVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNyYztcbiAgICB9XG4gIH0gZWxzZSBpZiAoc3JjLnN0YXJ0c1dpdGgoX1VSSV9OQU1FKSkge1xuICAgIHZhciBfY29udGVudCA9IHNyYy5zdWJzdHJpbmcoX1VSSV9OQU1FLmxlbmd0aCk7XG5cbiAgICB2YXIgX3NvdXJjZSA9IGRlY29kZVVSSUNvbXBvbmVudChfY29udGVudCk7XG5cbiAgICB2YXIgX2xlbiA9IF9zb3VyY2UubGVuZ3RoO1xuXG4gICAgaWYgKF9sZW4gPiAwKSB7XG4gICAgICByZXR1cm4gX2dldERpc2tQYXRoRnJvbUFycmF5QnVmZmVyKF9zb3VyY2UsIF9sZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3JjO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3JjO1xuICB9XG59O1xuXG5mdW5jdGlvbiBfZ2V0RGlza1BhdGhGcm9tQXJyYXlCdWZmZXIoc291cmNlLCBsZW4pIHtcbiAgdmFyIGFycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGxlbik7XG4gIHZhciB1aW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB1aW50OEFycmF5W2ldID0gc291cmNlLmNoYXJDb2RlQXQoaSk7XG4gIH1cblxuICByZXR1cm4gX0ZpbGVDYWNoZVtcImRlZmF1bHRcIl0uZ2V0Q2FjaGUoYXJyYXlCdWZmZXIpO1xufVxuXG52YXIgSFRNTFNjcmlwdEVsZW1lbnQgPSBmdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MU2NyaXB0RWxlbWVudCwgX0hUTUxFbGVtZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxTY3JpcHRFbGVtZW50KTtcblxuICBmdW5jdGlvbiBIVE1MU2NyaXB0RWxlbWVudCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTFNjcmlwdEVsZW1lbnQpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCAnU0NSSVBUJyk7XG5cbiAgICB2YXIgc2VsZiA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuXG4gICAgdmFyIG9uQXBwZW5kID0gZnVuY3Rpb24gb25BcHBlbmQoKSB7XG4gICAgICBzZWxmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhcHBlbmRcIiwgb25BcHBlbmQpO1xuXG4gICAgICB2YXIgc3JjID0gX2dldFBhdGhGcm9tQmFzZTY0U3RyaW5nKHNlbGYuc3JjKTtcblxuICAgICAgcmVxdWlyZShzcmMpO1xuXG4gICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oJ2xvYWQnKSk7XG4gICAgfTtcblxuICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJhcHBlbmRcIiwgb25BcHBlbmQpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmV0dXJuIEhUTUxTY3JpcHRFbGVtZW50O1xufShfSFRNTEVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSFRNTFNjcmlwdEVsZW1lbnQ7XG5cbn0se1wiLi9FdmVudFwiOjEwLFwiLi9IVE1MRWxlbWVudFwiOjE4LFwiLi91dGlsL0ZpbGVDYWNoZVwiOjUzfV0sMjU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX0ZvbnRGYWNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb250RmFjZVwiKSk7XG5cbnZhciBfSFRNTEVsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxudmFyIEhUTUxTdHlsZUVsZW1lbnQgPSBmdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MU3R5bGVFbGVtZW50LCBfSFRNTEVsZW1lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSFRNTFN0eWxlRWxlbWVudCk7XG5cbiAgZnVuY3Rpb24gSFRNTFN0eWxlRWxlbWVudCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTFN0eWxlRWxlbWVudCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFwiU1RZTEVcIik7XG5cbiAgICB2YXIgc2VsZiA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuXG4gICAgdmFyIG9uQXBwZW5kID0gZnVuY3Rpb24gb25BcHBlbmQoKSB7XG4gICAgICBzZWxmLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhcHBlbmRcIiwgb25BcHBlbmQpO1xuICAgICAgdmFyIHRleHRDb250ZW50ID0gc2VsZi50ZXh0Q29udGVudCB8fCBzZWxmLmlubmVySFRNTCB8fCBcIlwiO1xuICAgICAgdmFyIGZvbnRGYWNlU3RyID0gXCJcIjtcbiAgICAgIHZhciBzdGFydCA9IDA7XG4gICAgICB2YXIgbGVuZ3RoID0gdGV4dENvbnRlbnQubGVuZ3RoO1xuICAgICAgdmFyIGZsYWcgPSAwO1xuXG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICAgIGlmIChzdGFydCA+IDApIHtcbiAgICAgICAgICBpZiAodGV4dENvbnRlbnRbaW5kZXhdID09PSBcIntcIikge1xuICAgICAgICAgICAgZmxhZysrO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGV4dENvbnRlbnRbaW5kZXhdID09PSBcIn1cIikge1xuICAgICAgICAgICAgZmxhZy0tO1xuXG4gICAgICAgICAgICBpZiAoZmxhZyA9PT0gMCkge1xuICAgICAgICAgICAgICBmb250RmFjZVN0ciA9IHRleHRDb250ZW50LnN1YnN0cmluZyhzdGFydCwgaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZsYWcgPCAwKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGV4dENvbnRlbnRbaW5kZXhdID09PSBcIkBcIiAmJiB0ZXh0Q29udGVudC5zdWJzdHIoaW5kZXgsIFwiQGZvbnQtZmFjZVwiLmxlbmd0aCkgPT09IFwiQGZvbnQtZmFjZVwiKSB7XG4gICAgICAgICAgICBpbmRleCArPSA5O1xuICAgICAgICAgICAgc3RhcnQgPSBpbmRleCArIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmb250RmFjZVN0cikge1xuICAgICAgICB2YXIgZm9udEZhbWlseTtcbiAgICAgICAgdmFyIF9sZW5ndGggPSBmb250RmFjZVN0ci5sZW5ndGg7XG5cbiAgICAgICAgdmFyIF9zdGFydCA9IGZvbnRGYWNlU3RyLmluZGV4T2YoXCJmb250LWZhbWlseVwiKTtcblxuICAgICAgICBpZiAoX3N0YXJ0ID09PSAtMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF9zdGFydCArPSBcImZvbnQtZmFtaWx5XCIubGVuZ3RoICsgMTtcbiAgICAgICAgdmFyIGVuZCA9IF9zdGFydDtcblxuICAgICAgICBmb3IgKDsgZW5kIDwgX2xlbmd0aDsgKytlbmQpIHtcbiAgICAgICAgICBpZiAoZm9udEZhY2VTdHJbZW5kXSA9PT0gXCI7XCIpIHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHkgPSBmb250RmFjZVN0ci5zdWJzdHJpbmcoX3N0YXJ0LCBlbmQpLnRyaW0oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZm9udEZhY2VTdHJbZW5kXSA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIF9zdGFydCA9IGVuZCArIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmb250RmFtaWx5KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZW5kID0gZm9udEZhY2VTdHIuaW5kZXhPZihcInVybChcIik7XG4gICAgICAgIF9zdGFydCA9IDA7XG4gICAgICAgIHZhciBzb3VyY2U7XG5cbiAgICAgICAgZm9yICg7IGVuZCA8IF9sZW5ndGg7ICsrZW5kKSB7XG4gICAgICAgICAgaWYgKGZvbnRGYWNlU3RyW2VuZF0gPT09IFwiJ1wiIHx8IGZvbnRGYWNlU3RyW2VuZF0gPT09ICdcIicpIHtcbiAgICAgICAgICAgIGlmIChfc3RhcnQgPiAwKSB7XG4gICAgICAgICAgICAgIHNvdXJjZSA9IGZvbnRGYWNlU3RyLnN1YnN0cmluZyhfc3RhcnQsIGVuZCkudHJpbSgpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3N0YXJ0ID0gZW5kICsgMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgdmFyIGZvbnRGYWNlID0gbmV3IF9Gb250RmFjZVtcImRlZmF1bHRcIl0oZm9udEZhbWlseSwgc291cmNlKTtcbiAgICAgICAgICBmb250RmFjZS5sb2FkKCk7XG4gICAgICAgICAgZG9jdW1lbnQuZm9udHMuYWRkKGZvbnRGYWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiYXBwZW5kXCIsIG9uQXBwZW5kKTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHJldHVybiBIVE1MU3R5bGVFbGVtZW50O1xufShfSFRNTEVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSFRNTFN0eWxlRWxlbWVudDtcblxufSx7XCIuL0ZvbnRGYWNlXCI6MTIsXCIuL0hUTUxFbGVtZW50XCI6MTh9XSwyNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfSFRNTE1lZGlhRWxlbWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxNZWRpYUVsZW1lbnRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxudmFyIEhUTUxWaWRlb0VsZW1lbnQgPSBmdW5jdGlvbiAoX0hUTUxNZWRpYUVsZW1lbnQpIHtcbiAgX2luaGVyaXRzKEhUTUxWaWRlb0VsZW1lbnQsIF9IVE1MTWVkaWFFbGVtZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxWaWRlb0VsZW1lbnQpO1xuXG4gIGZ1bmN0aW9uIEhUTUxWaWRlb0VsZW1lbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxWaWRlb0VsZW1lbnQpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsICdWSURFTycpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEhUTUxWaWRlb0VsZW1lbnQsIFt7XG4gICAga2V5OiBcImNhblBsYXlUeXBlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhblBsYXlUeXBlKHR5cGUpIHtcbiAgICAgIHJldHVybiB0eXBlID09PSAndmlkZW8vbXA0JztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSFRNTFZpZGVvRWxlbWVudDtcbn0oX0hUTUxNZWRpYUVsZW1lbnQyW1wiZGVmYXVsdFwiXSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSFRNTFZpZGVvRWxlbWVudDtcblxufSx7XCIuL0hUTUxNZWRpYUVsZW1lbnRcIjoyM31dLDI3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9IVE1MSW1hZ2VFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTEltYWdlRWxlbWVudFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxudmFyIF9JbWFnZSA9IHdpbmRvdy5JbWFnZTtcblxudmFyIEltYWdlID0gZnVuY3Rpb24gKF9IVE1MSW1hZ2VFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhJbWFnZSwgX0hUTUxJbWFnZUVsZW1lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSW1hZ2UpO1xuXG4gIGZ1bmN0aW9uIEltYWdlKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW1hZ2UpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHdpZHRoLCBoZWlnaHQsIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIEltYWdlO1xufShfSFRNTEltYWdlRWxlbWVudDJbXCJkZWZhdWx0XCJdKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBJbWFnZTtcbnZhciBfY3JldGVJbWFnZSA9IGpzYi5jcmVhdGVJbWFnZTtcblxuaWYgKF9jcmV0ZUltYWdlKSB7XG4gIF9JbWFnZS5wcm90b3R5cGUuX19wcm90b19fID0gSW1hZ2UucHJvdG90eXBlO1xufVxuXG59LHtcIi4vSFRNTEltYWdlRWxlbWVudFwiOjIxfV0sMjg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgTG9jYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExvY2F0aW9uKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhdGlvbik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhbmNlc3Rvck9yaWdpbnNcIiwgXCJcIik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoYXNoXCIsIFwiXCIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaG9zdFwiLCBcIlwiKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImhvc3RuYW1lXCIsIFwiXCIpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaHJlZlwiLCBcImdhbWUuanNcIik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvcmlnaW5cIiwgXCJcIik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwYXNzd29yZFwiLCBcIlwiKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBhdGhuYW1lXCIsIFwiZ2FtZS5qc1wiKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBvcnRcIiwgXCJcIik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwcm90b2NvbFwiLCBcIlwiKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInNlYXJjaFwiLCBcIlwiKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInVzZXJuYW1lXCIsIFwiXCIpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExvY2F0aW9uLCBbe1xuICAgIGtleTogXCJhc3NpZ25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXNzaWduKCkge31cbiAgfSwge1xuICAgIGtleTogXCJyZWxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVsb2FkKCkge31cbiAgfSwge1xuICAgIGtleTogXCJyZXBsYWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGxhY2UoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExvY2F0aW9uO1xufSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IExvY2F0aW9uO1xuXG59LHt9XSwyOTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBNRURJQV9FUlJfQUJPUlRFRCA9IDE7XG52YXIgTUVESUFfRVJSX05FVFdPUksgPSAyO1xudmFyIE1FRElBX0VSUl9ERUNPREUgPSAzO1xudmFyIE1FRElBX0VSUl9TUkNfTk9UX1NVUFBPUlRFRCA9IDQ7XG5cbnZhciBNZWRpYUVycm9yID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNZWRpYUVycm9yKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZWRpYUVycm9yKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNZWRpYUVycm9yLCBbe1xuICAgIGtleTogXCJjb2RlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gTUVESUFfRVJSX0FCT1JURUQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1lc3NhZ2VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNZWRpYUVycm9yO1xufSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IE1lZGlhRXJyb3I7XG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhRXJyb3I7XG5cbn0se31dLDMwOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBOYXZpZ2F0b3IgPSBmdW5jdGlvbiBOYXZpZ2F0b3IocGxhdGZvcm0sIGxhbmd1YWdlKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOYXZpZ2F0b3IpO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBsYXRmb3JtXCIsIFwiXCIpO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImxhbmd1YWdlXCIsIFwiXCIpO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFwcFZlcnNpb25cIiwgJzUuMCAoaVBob25lOyBDUFUgaVBob25lIE9TIDlfMSBsaWtlIE1hYyBPUyBYKSBBcHBsZVdlYktpdC82MDEuMS40NiAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vOS4wIE1vYmlsZS8xM0IxNDMgU2FmYXJpLzYwMS4xJyk7XG5cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidXNlckFnZW50XCIsICdNb3ppbGxhLzUuMCAoaVBob25lOyBDUFUgaVBob25lIE9TIDEwXzNfMSBsaWtlIE1hYyBPUyBYKSBBcHBsZVdlYktpdC82MDMuMS4zMCAoS0hUTUwsIGxpa2UgR2Vja28pIE1vYmlsZS8xNEU4MzAxIE5ldFR5cGUvV0lGSSBMYW5ndWFnZS96aF9DTicpO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9uTGluZVwiLCB0cnVlKTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtYXhUb3VjaFBvaW50c1wiLCAxMCk7XG5cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2VvbG9jYXRpb25cIiwge1xuICAgIGdldEN1cnJlbnRQb3NpdGlvbjogZnVuY3Rpb24gZ2V0Q3VycmVudFBvc2l0aW9uKCkge30sXG4gICAgd2F0Y2hQb3NpdGlvbjogZnVuY3Rpb24gd2F0Y2hQb3NpdGlvbigpIHt9LFxuICAgIGNsZWFyV2F0Y2g6IGZ1bmN0aW9uIGNsZWFyV2F0Y2goKSB7fVxuICB9KTtcblxuICB0aGlzLnBsYXRmb3JtID0gcGxhdGZvcm07XG4gIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTmF2aWdhdG9yO1xuXG59LHt9XSwzMTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfRXZlbnRUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFRhcmdldFwiKSk7XG5cbnZhciBfRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHsgX2dldCA9IFJlZmxlY3QuZ2V0OyB9IGVsc2UgeyBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikgeyB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpOyBpZiAoIWJhc2UpIHJldHVybjsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTsgaWYgKGRlc2MuZ2V0KSB7IHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTsgfSByZXR1cm4gZGVzYy52YWx1ZTsgfTsgfSByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpOyB9XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHsgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHsgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrOyB9IHJldHVybiBvYmplY3Q7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBOb2RlID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICBfaW5oZXJpdHMoTm9kZSwgX0V2ZW50VGFyZ2V0KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE5vZGUpO1xuXG4gIGZ1bmN0aW9uIE5vZGUobm9kZU5hbWUpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9kZSk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImNoaWxkTm9kZXNcIiwgW10pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInBhcmVudE5vZGVcIiwgbnVsbCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX25vZGVOYW1lXCIsIFwiXCIpO1xuXG4gICAgX3RoaXMuX25vZGVOYW1lID0gbm9kZU5hbWU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE5vZGUsIFt7XG4gICAga2V5OiBcImFwcGVuZENoaWxkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZENoaWxkKG5vZGUpIHtcbiAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgbm9kZS5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgIHZhciBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWU7XG5cbiAgICAgIGlmIChub2RlTmFtZSA9PT0gXCJTQ1JJUFRcIiB8fCBub2RlTmFtZSA9PT0gXCJTVFlMRVwiKSB7XG4gICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImFwcGVuZFwiKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbG9uZU5vZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvbmVOb2RlKCkge1xuICAgICAgdmFyIGNvcHlOb2RlID0gT2JqZWN0LmNyZWF0ZSh0aGlzKTtcbiAgICAgIE9iamVjdC5hc3NpZ24oY29weU5vZGUsIHRoaXMpO1xuICAgICAgY29weU5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICByZXR1cm4gY29weU5vZGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUNoaWxkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUNoaWxkKG5vZGUpIHtcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5maW5kSW5kZXgoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiBjaGlsZCA9PT0gbm9kZTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB2YXIgX25vZGUgPSB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKVswXTtcbiAgICAgICAgX25vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIHJldHVybiBfbm9kZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbnRhaW5zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnRhaW5zKG5vZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihub2RlKSA+IC0xO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkaXNwYXRjaEV2ZW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpbmRleCA9IGxlbmd0aCAtIDE7IHJlc3VsdCAmJiBpbmRleCA+PSAwOyAtLWluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpcyRjaGlsZE5vZGVzJGluZGU7XG5cbiAgICAgICAgcmVzdWx0ID0gKF90aGlzJGNoaWxkTm9kZXMkaW5kZSA9IHRoaXMuY2hpbGROb2Rlc1tpbmRleF0pLmRpc3BhdGNoRXZlbnQuYXBwbHkoX3RoaXMkY2hpbGROb2RlcyRpbmRlLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihOb2RlLnByb3RvdHlwZSksIFwiZGlzcGF0Y2hFdmVudFwiLCB0aGlzKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm5vZGVOYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbm9kZU5hbWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vZGU7XG59KF9FdmVudFRhcmdldDJbXCJkZWZhdWx0XCJdKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBOb2RlO1xuXG59LHtcIi4vRXZlbnRcIjoxMCxcIi4vRXZlbnRUYXJnZXRcIjoxMX1dLDMyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfV2Vha01hcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbC9XZWFrTWFwXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG52YXIgTm9kZUxpc3QgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vZGVMaXN0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOb2RlTGlzdCk7XG5cbiAgICBfV2Vha01hcFtcImRlZmF1bHRcIl0uc2V0KHRoaXMsIHtcbiAgICAgIGFycmF5OiBbXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBQcm94eSh0aGlzLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIGtleSkge1xuICAgICAgICBpZiAoX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoL15bMC05XSokLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0YXJnZXQpLmFycmF5W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0W2tleV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5iaW5kKHRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE5vZGVMaXN0LCBbe1xuICAgIGtleTogXCJwdXNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2goZWxlbWVudCkge1xuICAgICAgX1dlYWtNYXBbXCJkZWZhdWx0XCJdLmdldCh0aGlzKS5hcnJheS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpdGVtXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGl0ZW0oaW5kZXgpIHtcbiAgICAgIHJldHVybiBfV2Vha01hcFtcImRlZmF1bHRcIl0uZ2V0KHRoaXMpLmFycmF5W2luZGV4XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29uY2F0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgICAgIHZhciBhcnJheSA9IF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXJyYXk7XG5cbiAgICAgIHJldHVybiBhcnJheS5jb25jYXQuYXBwbHkoYXJyYXksIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxlbmd0aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9XZWFrTWFwW1wiZGVmYXVsdFwiXS5nZXQodGhpcykuYXJyYXkubGVuZ3RoO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb2RlTGlzdDtcbn0oKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBOb2RlTGlzdDtcblxufSx7XCIuL3V0aWwvV2Vha01hcFwiOjU0fV0sMzM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG53aW5kb3cuanNiID0gd2luZG93LmpzYiB8fCB7fTtcblxudmFyIFNjcmVlbiA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2NyZWVuKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTY3JlZW4pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXZhaWxUb3BcIiwgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhdmFpbExlZnRcIiwgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhdmFpbEhlaWdodFwiLCBqc2IuaGVpZ2h0KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImF2YWlsV2lkdGhcIiwganNiLndpZHRoKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvbG9yRGVwdGhcIiwgOCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwaXhlbERlcHRoXCIsIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibGVmdFwiLCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvcFwiLCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIndpZHRoXCIsIGpzYi53aWR0aCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoZWlnaHRcIiwganNiLmhlaWdodCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvcmllbnRhdGlvblwiLCB7XG4gICAgICB0eXBlOiAncG9ydHJhaXQtcHJpbWFyeSdcbiAgICB9KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTY3JlZW4sIFt7XG4gICAga2V5OiBcIm9ub3JpZW50YXRpb25jaGFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25vcmllbnRhdGlvbmNoYW5nZSgpIHt9XG4gIH1dKTtcblxuICByZXR1cm4gU2NyZWVuO1xufSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFNjcmVlbjtcblxufSx7fV0sMzQ6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX0V2ZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXZlbnRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbnZhciBUb3VjaEV2ZW50ID0gZnVuY3Rpb24gKF9FdmVudCkge1xuICBfaW5oZXJpdHMoVG91Y2hFdmVudCwgX0V2ZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFRvdWNoRXZlbnQpO1xuXG4gIGZ1bmN0aW9uIFRvdWNoRXZlbnQodHlwZSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUb3VjaEV2ZW50KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHlwZSk7XG4gICAgX3RoaXMudG91Y2hlcyA9IFtdO1xuICAgIF90aGlzLnRhcmdldFRvdWNoZXMgPSBbXTtcbiAgICBfdGhpcy5jaGFuZ2VkVG91Y2hlcyA9IFtdO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHJldHVybiBUb3VjaEV2ZW50O1xufShfRXZlbnQyW1wiZGVmYXVsdFwiXSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVG91Y2hFdmVudDtcblxufSx7XCIuL0V2ZW50XCI6MTB9XSwzNTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcblxudmFyIF9GaWxlQ2FjaGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvRmlsZUNhY2hlXCIpKTtcblxudmFyIF9YTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9YTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBmc20gPSBqc2IuZ2V0RmlsZVN5c3RlbU1hbmFnZXIoKTtcbnZhciBfWE1MSHR0cFJlcXVlc3QgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3Q7XG53aW5kb3cuanNiID0gd2luZG93LmpzYiB8fCB7fTtcblxudmFyIFhNTEh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gKF9YTUxIdHRwUmVxdWVzdEV2ZW50VCkge1xuICBfaW5oZXJpdHMoWE1MSHR0cFJlcXVlc3QsIF9YTUxIdHRwUmVxdWVzdEV2ZW50VCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihYTUxIdHRwUmVxdWVzdCk7XG5cbiAgZnVuY3Rpb24gWE1MSHR0cFJlcXVlc3QoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFhNTEh0dHBSZXF1ZXN0KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbmV3IF9YTUxIdHRwUmVxdWVzdCgpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfaXNMb2NhbFwiLCBmYWxzZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3JlYWR5U3RhdGVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfcmVzcG9uc2VcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfcmVzcG9uc2VUZXh0XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3Jlc3BvbnNlVVJMXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3Jlc3BvbnNlWE1MXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3N0YXR1c1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIl9zdGF0dXNUZXh0XCIsIHZvaWQgMCk7XG5cbiAgICB2YXIgeGhyID0gX3RoaXMuX3hocjtcblxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJyZWFkeXN0YXRlY2hhbmdlXCIpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFhNTEh0dHBSZXF1ZXN0LCBbe1xuICAgIGtleTogXCJhYm9ydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICAgIHRoaXMuX3hoci5hYm9ydCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRBbGxSZXNwb25zZUhlYWRlcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UmVzcG9uc2VIZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVzcG9uc2VIZWFkZXIobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3hoci5nZXRSZXNwb25zZUhlYWRlcihuYW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib3BlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKG1ldGhvZCwgdXJsLCBhc3luYywgdXNlciwgcGFzc3dvcmQpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHZhciBfdXJsID0gdXJsLnRvTG9jYWxlU3RyaW5nKCk7XG5cbiAgICAgICAgaWYgKF91cmwuc3RhcnRzV2l0aChcImh0dHA6Ly9cIikgfHwgX3VybC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9cIikpIHtcbiAgICAgICAgICB2YXIgX3RoaXMkX3hocjtcblxuICAgICAgICAgIHRoaXMuX2lzTG9jYWwgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gKF90aGlzJF94aHIgPSB0aGlzLl94aHIpLm9wZW4uYXBwbHkoX3RoaXMkX3hociwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pc0xvY2FsID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib3ZlcnJpZGVNaW1lVHlwZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvdmVycmlkZU1pbWVUeXBlKCkge1xuICAgICAgdmFyIF90aGlzJF94aHIyO1xuXG4gICAgICByZXR1cm4gKF90aGlzJF94aHIyID0gdGhpcy5feGhyKS5vdmVycmlkZU1pbWVUeXBlLmFwcGx5KF90aGlzJF94aHIyLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmQoKSB7XG4gICAgICBpZiAodGhpcy5faXNMb2NhbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBpc0JpbmFyeSA9IHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPT09IFwiYXJyYXlidWZmZXJcIjtcbiAgICAgICAgZnNtLnJlYWRGaWxlKHtcbiAgICAgICAgICBmaWxlUGF0aDogdGhpcy5fdXJsLFxuICAgICAgICAgIGVuY29kaW5nOiBpc0JpbmFyeSA/IFwiYmluYXJ5XCIgOiBcInV0ZjhcIixcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgc2VsZi5fc3RhdHVzID0gMjAwO1xuICAgICAgICAgICAgc2VsZi5fcmVhZHlTdGF0ZSA9IDQ7XG4gICAgICAgICAgICBzZWxmLl9yZXNwb25zZSA9IHNlbGYuX3Jlc3BvbnNlVGV4dCA9IHJlcy5kYXRhO1xuXG4gICAgICAgICAgICBpZiAoaXNCaW5hcnkpIHtcbiAgICAgICAgICAgICAgX0ZpbGVDYWNoZVtcImRlZmF1bHRcIl0uc2V0Q2FjaGUoc2VsZi5fdXJsLCByZXMuZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBldmVudFByb2dyZXNzU3RhcnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInByb2dyZXNzXCIpO1xuICAgICAgICAgICAgZXZlbnRQcm9ncmVzc1N0YXJ0LmxvYWRlZCA9IDA7XG4gICAgICAgICAgICBldmVudFByb2dyZXNzU3RhcnQudG90YWwgPSBpc0JpbmFyeSA/IHJlcy5kYXRhLmJ5dGVMZW5ndGggOiByZXMuZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgZXZlbnRQcm9ncmVzc0VuZCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwicHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICBldmVudFByb2dyZXNzRW5kLmxvYWRlZCA9IGV2ZW50UHJvZ3Jlc3NTdGFydC50b3RhbDtcbiAgICAgICAgICAgIGV2ZW50UHJvZ3Jlc3NFbmQudG90YWwgPSBldmVudFByb2dyZXNzU3RhcnQudG90YWw7XG4gICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2Fkc3RhcnRcIikpO1xuICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50UHJvZ3Jlc3NTdGFydCk7XG4gICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnRQcm9ncmVzc0VuZCk7XG4gICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkXCIpKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMuZXJyQ29kZSA9PT0gMSkge1xuICAgICAgICAgICAgICBzZWxmLl9zdGF0dXMgPSA0MDQ7XG4gICAgICAgICAgICAgIHNlbGYuX3JlYWR5U3RhdGUgPSA0O1xuICAgICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2Fkc3RhcnRcIikpO1xuICAgICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkXCIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImVycm9yXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LmJpbmQodGhpcyksXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRlbmRcIikpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfdGhpcyRfeGhyMztcblxuICAgICAgICAoX3RoaXMkX3hocjMgPSB0aGlzLl94aHIpLnNlbmQuYXBwbHkoX3RoaXMkX3hocjMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFJlcXVlc3RIZWFkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRfeGhyNDtcblxuICAgICAgKF90aGlzJF94aHI0ID0gdGhpcy5feGhyKS5zZXRSZXF1ZXN0SGVhZGVyLmFwcGx5KF90aGlzJF94aHI0LCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWFkeVN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5faXNMb2NhbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZHlTdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94aHIucmVhZHlTdGF0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzcG9uc2VcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0xvY2FsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94aHIucmVzcG9uc2U7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc3BvbnNlVGV4dFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuX2lzTG9jYWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94aHIucmVzcG9uc2VUZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNwb25zZVR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl94aHIucmVzcG9uc2VUeXBlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuX3hoci5yZXNwb25zZVR5cGUgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzcG9uc2VVUkxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0xvY2FsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVVSTDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl94aHIucmVzcG9uc2VVUkw7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc3BvbnNlWE1MXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5faXNMb2NhbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VYTUw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnJlc3BvbnNlWE1MO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0dXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLl9pc0xvY2FsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnN0YXR1cztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdHVzVGV4dFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMuX2lzTG9jYWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXR1c1RleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5feGhyLnN0YXR1c1RleHQ7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRpbWVvdXRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl94aHIudGltZW91dDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLl94aHIudGltZW91dCA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1cGxvYWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl94aHIudXBsb2FkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3aXRoQ3JlZGVudGlhbHNcIixcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5feGhyLndpdGhDcmVkZW50aWFscyA9IHZhbHVlO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5feGhyLndpdGhDcmVkZW50aWFscztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gWE1MSHR0cFJlcXVlc3Q7XG59KF9YTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0W1wiZGVmYXVsdFwiXSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gWE1MSHR0cFJlcXVlc3Q7XG5cbn0se1wiLi9FdmVudFwiOjEwLFwiLi9YTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0XCI6MzYsXCIuL3V0aWwvRmlsZUNhY2hlXCI6NTN9XSwzNjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfRXZlbnRUYXJnZXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFRhcmdldFwiKSk7XG5cbnZhciBfRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0V2ZW50XCIpKTtcblxudmFyIF9GaWxlQ2FjaGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWwvRmlsZUNhY2hlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCA9IGZ1bmN0aW9uIChfRXZlbnRUYXJnZXQpIHtcbiAgX2luaGVyaXRzKFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQsIF9FdmVudFRhcmdldCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0KTtcblxuICBmdW5jdGlvbiBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0KHhocikge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiX3hoclwiLCB2b2lkIDApO1xuXG4gICAgX3RoaXMuX3hociA9IHhocjtcblxuICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwiYWJvcnRcIik7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG5cbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImVycm9yXCIpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAodGhpcy5yZXNwb25zZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICAgIF9GaWxlQ2FjaGVbXCJkZWZhdWx0XCJdLnNldEl0ZW0odGhpcy5yZXNwb25zZSwgdGhpcy5fdXJsKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGV2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJsb2FkXCIpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuXG4gICAgeGhyLm9ubG9hZHN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBldmVudCA9IG5ldyBfRXZlbnRbXCJkZWZhdWx0XCJdKFwibG9hZHN0YXJ0XCIpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuXG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJwcm9ncmVzc1wiKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKGV2ZW50LCBlKSk7XG4gICAgfS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcblxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IF9FdmVudFtcImRlZmF1bHRcIl0oXCJ0aW1lb3V0XCIpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24oZXZlbnQsIGUpKTtcbiAgICB9LmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuXG4gICAgeGhyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcImxvYWRlbmRcIik7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihldmVudCwgZSkpO1xuICAgIH0uYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICByZXR1cm4gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldDtcbn0oX0V2ZW50VGFyZ2V0MltcImRlZmF1bHRcIl0pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQ7XG5cbn0se1wiLi9FdmVudFwiOjEwLFwiLi9FdmVudFRhcmdldFwiOjExLFwiLi91dGlsL0ZpbGVDYWNoZVwiOjUzfV0sMzc6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX0F1ZGlvTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvTm9kZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgQW5hbHlzZXJOb2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgX2luaGVyaXRzKEFuYWx5c2VyTm9kZSwgX0F1ZGlvTm9kZSk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBbmFseXNlck5vZGUpO1xuXG4gIGZ1bmN0aW9uIEFuYWx5c2VyTm9kZShjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFuYWx5c2VyTm9kZSk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICAgIF90aGlzLl9mZnRTaXplO1xuICAgIF90aGlzLmZyZXF1ZW5jeUJpbkNvdW50O1xuICAgIF90aGlzLm1pbkRlY2liZWxzO1xuICAgIF90aGlzLm1heERlY2liZWxzO1xuICAgIF90aGlzLnNtb290aGluZ1RpbWVDb25zdGFudDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQW5hbHlzZXJOb2RlLCBbe1xuICAgIGtleTogXCJnZXRGbG9hdEZyZXF1ZW5jeURhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RmxvYXRGcmVxdWVuY3lEYXRhKGFycmF5KSB7fVxuICB9LCB7XG4gICAga2V5OiBcImdldEJ5dGVGcmVxdWVuY3lEYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJ5dGVGcmVxdWVuY3lEYXRhKGRhdGFBcnJheSkge1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGFBcnJheS5sZW5ndGgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRGbG9hdFRpbWVEb21haW5EYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZsb2F0VGltZURvbWFpbkRhdGEoZGF0YUFycmF5KSB7fVxuICB9LCB7XG4gICAga2V5OiBcImdldEJ5dGVUaW1lRG9tYWluRGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeXRlVGltZURvbWFpbkRhdGEoZGF0YUFycmF5KSB7fVxuICB9LCB7XG4gICAga2V5OiBcImZmdFNpemVcIixcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5fZmZ0U2l6ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5mcmVxdWVuY3lCaW5Db3VudCA9IHZhbHVlIC8gMjtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZmdFNpemU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFuYWx5c2VyTm9kZTtcbn0oX0F1ZGlvTm9kZTJbXCJkZWZhdWx0XCJdKTtcblxudmFyIF9kZWZhdWx0ID0gQW5hbHlzZXJOb2RlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7XCIuL0F1ZGlvTm9kZVwiOjQzfV0sMzg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9GaWxlQ2FjaGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlsL0ZpbGVDYWNoZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBhZSA9IGpzYi5BdWRpb0VuZ2luZTtcblxudmFyIEF1ZGlvQnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBdWRpb0J1ZmZlcihjb250ZXh0LCBidWZmZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9CdWZmZXIpO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnVybCA9IFwiXCI7XG4gICAgdGhpcy5fc2FtcGxlUmF0ZSA9IDQ4MDAwO1xuICAgIHRoaXMuX2xlbmd0aCA9IDM4NjY4MTtcbiAgICB0aGlzLl9kdXJhdGlvbiA9IDA7XG4gICAgdGhpcy5fbnVtYmVyT2ZDaGFubmVscyA9IDQ4MDAwO1xuXG4gICAgX0ZpbGVDYWNoZVtcImRlZmF1bHRcIl0uZ2V0UGF0aChidWZmZXIsIGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICBhZS5wcmVsb2FkKHVybCwgZnVuY3Rpb24gKGlzU3VjY2VlZCwgZHVyYXRpb24pIHtcbiAgICAgICAgaWYgKGlzU3VjY2VlZCkge1xuICAgICAgICAgIHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBdWRpb0J1ZmZlciwgW3tcbiAgICBrZXk6IFwic2FtcGxlUmF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NhbXBsZVJhdGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxlbmd0aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZHVyYXRpb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kdXJhdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyT2ZDaGFubmVsc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX251bWJlck9mQ2hhbm5lbHM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEF1ZGlvQnVmZmVyO1xufSgpO1xuXG52YXIgX2RlZmF1bHQgPSBBdWRpb0J1ZmZlcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se1wiLi4vdXRpbC9GaWxlQ2FjaGVcIjo1M31dLDM5OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xuXG52YXIgX0F1ZGlvUGFyYW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvUGFyYW1cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxudmFyIEF1ZGlvQnVmZmVyU291cmNlTm9kZSA9IGZ1bmN0aW9uIChfQXVkaW9Ob2RlKSB7XG4gIF9pbmhlcml0cyhBdWRpb0J1ZmZlclNvdXJjZU5vZGUsIF9BdWRpb05vZGUpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQXVkaW9CdWZmZXJTb3VyY2VOb2RlKTtcblxuICBmdW5jdGlvbiBBdWRpb0J1ZmZlclNvdXJjZU5vZGUoY29udGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdWRpb0J1ZmZlclNvdXJjZU5vZGUpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBjb250ZXh0KTtcbiAgICBfdGhpcy5idWZmZXIgPSBudWxsO1xuICAgIF90aGlzLmRldHVuZSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5fbG9vcCA9IGZhbHNlO1xuICAgIF90aGlzLmxvb3BTdGFydCA9IDA7XG4gICAgX3RoaXMubG9vcEVuZCA9IDA7XG4gICAgX3RoaXMuX3BsYXliYWNrUmF0ZSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDEuMFxuICAgIH0pO1xuICAgIF90aGlzLmF1ZGlvRW5naW5lID0ganNiLkF1ZGlvRW5naW5lO1xuICAgIF90aGlzLmF1ZGlvSUQgPSAtMTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXVkaW9CdWZmZXJTb3VyY2VOb2RlLCBbe1xuICAgIGtleTogXCJzdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCh3aGVuLCBvZmZzZXQsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoIXRoaXMuYnVmZmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGF1ZGlvRW5naW5lID0gdGhpcy5hdWRpb0VuZ2luZTtcblxuICAgICAgaWYgKHRoaXMuYXVkaW9JRCAhPT0gLTEpIHtcbiAgICAgICAgYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmF1ZGlvSUQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXVkaW9JRCA9IHRoaXMuYXVkaW9JRCA9IGF1ZGlvRW5naW5lLnBsYXkodGhpcy5idWZmZXIudXJsLCB0aGlzLmxvb3AsIDEpO1xuICAgICAgYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JRCwgdGhpcy5vbmVuZGVkKTtcbiAgICAgIGF1ZGlvRW5naW5lLnNldEN1cnJlbnRUaW1lKGF1ZGlvSUQsIHRoaXMubG9vcFN0YXJ0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKHdoZW4pIHtcbiAgICAgIHZhciBhdWRpb0VuZ2luZSA9IHRoaXMuYXVkaW9FbmdpbmU7XG5cbiAgICAgIGlmICh0aGlzLmF1ZGlvSUQgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmF1ZGlvSUQpO1xuICAgICAgdGhpcy5hdWRpb0lEID0gLTE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uZW5kZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25lbmRlZCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicGxheWJhY2tSYXRlXCIsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIGNvbnNvbGUud2FybihcInBsYXliYWNrUmF0ZSBub25zdXBwb3J0XCIpO1xuICAgICAgdGhpcy5fcGxheWJhY2tSYXRlID0gdmFsdWU7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wbGF5YmFja1JhdGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvb3BcIixcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFyIGF1ZGlvRW5naW5lID0gdGhpcy5hdWRpb0VuZ2luZTtcbiAgICAgIHZhciBhdWRpb0lEID0gdGhpcy5hdWRpb0lEO1xuICAgICAgdmFyIGxvb3AgPSAhIXZhbHVlO1xuXG4gICAgICBpZiAoYXVkaW9JRCAhPT0gLTEgJiYgYXVkaW9FbmdpbmUpIHtcbiAgICAgICAgYXVkaW9FbmdpbmUuc2V0TG9vcChhdWRpb0lELCBsb29wKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbG9vcCA9IGxvb3A7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sb29wO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBdWRpb0J1ZmZlclNvdXJjZU5vZGU7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG5cbnZhciBfZGVmYXVsdCA9IEF1ZGlvQnVmZmVyU291cmNlTm9kZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se1wiLi9BdWRpb05vZGVcIjo0MyxcIi4vQXVkaW9QYXJhbVwiOjQ0fV0sNDA6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX0Jhc2VBdWRpb0NvbnRleHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9CYXNlQXVkaW9Db250ZXh0XCIpKTtcblxudmFyIF9NZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgQXVkaW9Db250ZXh0ID0gZnVuY3Rpb24gKF9CYXNlQXVkaW9Db250ZXh0KSB7XG4gIF9pbmhlcml0cyhBdWRpb0NvbnRleHQsIF9CYXNlQXVkaW9Db250ZXh0KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEF1ZGlvQ29udGV4dCk7XG5cbiAgZnVuY3Rpb24gQXVkaW9Db250ZXh0KG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9Db250ZXh0KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgX3RoaXMuYmFzZUxhdGVuY3k7XG4gICAgX3RoaXMub3V0cHV0TGF0ZW5jeTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXVkaW9Db250ZXh0LCBbe1xuICAgIGtleTogXCJjbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQXVkaW9Db250ZXh0IGNsb3NlXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKG15TWVkaWFFbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IF9NZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGVbXCJkZWZhdWx0XCJdKHRoaXMsIHtcbiAgICAgICAgbWVkaWFFbGVtZW50OiBteU1lZGlhRWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVNZWRpYVN0cmVhbURlc3RpbmF0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU1lZGlhU3RyZWFtRGVzdGluYXRpb24oKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZU1lZGlhU3RyZWFtVHJhY2tTb3VyY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTWVkaWFTdHJlYW1UcmFja1NvdXJjZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0T3V0cHV0VGltZXN0YW1wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE91dHB1dFRpbWVzdGFtcCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzdW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3VtZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic3VzcGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdXNwZW5kKCkge31cbiAgfV0pO1xuXG4gIHJldHVybiBBdWRpb0NvbnRleHQ7XG59KF9CYXNlQXVkaW9Db250ZXh0MltcImRlZmF1bHRcIl0pO1xuXG52YXIgX2RlZmF1bHQgPSBBdWRpb0NvbnRleHQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHtcIi4vQmFzZUF1ZGlvQ29udGV4dFwiOjQ2LFwiLi9NZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGVcIjo0OX1dLDQxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbnZhciBBdWRpb0Rlc3RpbmF0aW9uTm9kZSA9IGZ1bmN0aW9uIChfQXVkaW9Ob2RlKSB7XG4gIF9pbmhlcml0cyhBdWRpb0Rlc3RpbmF0aW9uTm9kZSwgX0F1ZGlvTm9kZSk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBdWRpb0Rlc3RpbmF0aW9uTm9kZSk7XG5cbiAgZnVuY3Rpb24gQXVkaW9EZXN0aW5hdGlvbk5vZGUoY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdWRpb0Rlc3RpbmF0aW9uTm9kZSk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICAgIF90aGlzLm1heENoYW5uZWxDb3VudCA9IDI7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmV0dXJuIEF1ZGlvRGVzdGluYXRpb25Ob2RlO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xuXG52YXIgX2RlZmF1bHQgPSBBdWRpb0Rlc3RpbmF0aW9uTm9kZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se1wiLi9BdWRpb05vZGVcIjo0M31dLDQyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xuXG52YXIgX0F1ZGlvUGFyYW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvUGFyYW1cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxudmFyIEF1ZGlvTGlzdGVuZXIgPSBmdW5jdGlvbiAoX0F1ZGlvTm9kZSkge1xuICBfaW5oZXJpdHMoQXVkaW9MaXN0ZW5lciwgX0F1ZGlvTm9kZSk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBdWRpb0xpc3RlbmVyKTtcblxuICBmdW5jdGlvbiBBdWRpb0xpc3RlbmVyKGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXVkaW9MaXN0ZW5lcik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICAgIF90aGlzLnBvc2l0aW9uWCA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5wb3NpdGlvblkgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMucG9zaXRpb25aID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLmZvcndhcmRYID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLmZvcndhcmRZID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLmZvcndhcmRaID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogLTFcbiAgICB9KTtcbiAgICBfdGhpcy51cFggPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMudXBZID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMVxuICAgIH0pO1xuICAgIF90aGlzLnVwWiA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXVkaW9MaXN0ZW5lciwgW3tcbiAgICBrZXk6IFwic2V0T3JpZW50YXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3JpZW50YXRpb24oeCwgeSwgeikge31cbiAgfSwge1xuICAgIGtleTogXCJzZXRQb3NpdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQb3NpdGlvbih4LCB5LCB6KSB7XG4gICAgICB4ID0geCB8fCAwO1xuICAgICAgeSA9IHkgfHwgMDtcbiAgICAgIHogPSB6IHx8IDA7XG4gICAgICB0aGlzLnBvc2l0aW9uWC52YWx1ZSA9IHg7XG4gICAgICB0aGlzLnBvc2l0aW9uWS52YWx1ZSA9IHk7XG4gICAgICB0aGlzLnBvc2l0aW9uWi52YWx1ZSA9IHo7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEF1ZGlvTGlzdGVuZXI7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG5cbnZhciBfZGVmYXVsdCA9IEF1ZGlvTGlzdGVuZXI7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHtcIi4vQXVkaW9Ob2RlXCI6NDMsXCIuL0F1ZGlvUGFyYW1cIjo0NH1dLDQzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9FdmVudFRhcmdldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9FdmVudFRhcmdldFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgQXVkaW9Ob2RlID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICBfaW5oZXJpdHMoQXVkaW9Ob2RlLCBfRXZlbnRUYXJnZXQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQXVkaW9Ob2RlKTtcblxuICBmdW5jdGlvbiBBdWRpb05vZGUoY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdWRpb05vZGUpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XG4gICAgX3RoaXMubnVtYmVyT2ZJbnB1dHMgPSAxO1xuICAgIF90aGlzLm51bWJlck9mT3V0cHV0cyA9IDE7XG4gICAgX3RoaXMuY2hhbm5lbENvdW50ID0gMjtcbiAgICBfdGhpcy5jaGFubmVsQ291bnRNb2RlID0gXCJleHBsaWNpdFwiO1xuICAgIF90aGlzLmNoYW5uZWxJbnRlcnByZXRhdGlvbiA9IFwic3BlYWtlcnNcIjtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXVkaW9Ob2RlLCBbe1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoZGVzdGluYXRpb24sIG91dHB1dEluZGV4LCBpbnB1dEluZGV4KSB7fVxuICB9LCB7XG4gICAga2V5OiBcImRpc2Nvbm5lY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNOdW1iZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNOdW1iZXIob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ251bWJlcicgfHwgb2JqIGluc3RhbmNlb2YgTnVtYmVyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb250ZXh0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXVkaW9Ob2RlO1xufShfRXZlbnRUYXJnZXQyW1wiZGVmYXVsdFwiXSk7XG5cbnZhciBfZGVmYXVsdCA9IEF1ZGlvTm9kZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se1wiLi4vRXZlbnRUYXJnZXRcIjoxMX1dLDQ0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIEF1ZGlvUGFyYW0gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEF1ZGlvUGFyYW0oKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1ZGlvUGFyYW0pO1xuXG4gICAgdGhpcy5hdXRvbWF0aW9uUmF0ZSA9IG9wdGlvbnMuYXV0b21hdGlvblJhdGUgfHwgXCJhLXJhdGVcIjtcbiAgICB0aGlzLl9kZWZhdWx0VmFsdWUgPSBvcHRpb25zLmRlZmF1bHRWYWx1ZSB8fCAxO1xuICAgIHRoaXMuX21heFZhbHVlID0gb3B0aW9ucy5tYXhWYWx1ZSB8fCBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgIHRoaXMuX21pblZhbHVlID0gb3B0aW9ucy5taW5WYWx1ZSB8fCAtTnVtYmVyLk1BWF9WQUxVRTtcbiAgICB0aGlzLnZhbHVlID0gb3B0aW9ucy52YWx1ZSB8fCAxO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEF1ZGlvUGFyYW0sIFt7XG4gICAga2V5OiBcInNldFZhbHVlQXRUaW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlQXRUaW1lKHZhbHVlLCBzdGFydFRpbWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibGluZWFyUmFtcFRvVmFsdWVBdFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGluZWFyUmFtcFRvVmFsdWVBdFRpbWUodmFsdWUsIGVuZFRpbWUpIHtcbiAgICAgIGlmIChlbmRUaW1lIDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBrID0gdmFsdWUgLyBlbmRUaW1lO1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB2YXIgZnVuYyA9IGZ1bmN0aW9uIGZ1bmMoZHQpIHtcbiAgICAgICAgZHQgPSBkdCAvIDEwMDA7XG5cbiAgICAgICAgaWYgKGR0ID4gZW5kVGltZSkge1xuICAgICAgICAgIGR0ID0gZW5kVGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkdCA8IDApIHtcbiAgICAgICAgICBkdCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBlbmRUaW1lIC09IGR0O1xuICAgICAgICBzZWxmLnZhbHVlICs9IGR0ICogaztcblxuICAgICAgICBpZiAoZW5kVGltZSA+IDApIHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuYyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKCkge31cbiAgfSwge1xuICAgIGtleTogXCJzZXRUYXJnZXRBdFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VGFyZ2V0QXRUaW1lKHRhcmdldCwgc3RhcnRUaW1lLCB0aW1lQ29uc3RhbnQpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0YXJnZXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFZhbHVlQ3VydmVBdFRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWVDdXJ2ZUF0VGltZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuY2VsU2NoZWR1bGVkVmFsdWVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbmNlbFNjaGVkdWxlZFZhbHVlcygpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FuY2VsQW5kSG9sZEF0VGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYW5jZWxBbmRIb2xkQXRUaW1lKCkge31cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0VmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1heFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWF4VmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1pblZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWluVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gTWF0aC5taW4odGhpcy5fbWF4VmFsdWUsIHZhbHVlKTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gTWF0aC5tYXgodGhpcy5fbWluVmFsdWUsIHZhbHVlKTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBdWRpb1BhcmFtO1xufSgpO1xuXG52YXIgX2RlZmF1bHQgPSBBdWRpb1BhcmFtO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7fV0sNDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX0F1ZGlvTm9kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvTm9kZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgX2luaGVyaXRzKEF1ZGlvU2NoZWR1bGVkU291cmNlTm9kZSwgX0F1ZGlvTm9kZSk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGUpO1xuXG4gIGZ1bmN0aW9uIEF1ZGlvU2NoZWR1bGVkU291cmNlTm9kZShjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1ZGlvU2NoZWR1bGVkU291cmNlTm9kZSk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlLCBbe1xuICAgIGtleTogXCJvbmVuZGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uZW5kZWQoZXZlbnQpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQod2hlbiwgb2Zmc2V0LCBkdXJhdGlvbikge31cbiAgfSwge1xuICAgIGtleTogXCJzdG9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3Aod2hlbikge31cbiAgfV0pO1xuXG4gIHJldHVybiBBdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGU7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG5cbnZhciBfZGVmYXVsdCA9IEF1ZGlvU2NoZWR1bGVkU291cmNlTm9kZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se1wiLi9BdWRpb05vZGVcIjo0M31dLDQ2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9FdmVudFRhcmdldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9FdmVudFRhcmdldFwiKSk7XG5cbnZhciBfQXVkaW9MaXN0ZW5lciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9MaXN0ZW5lclwiKSk7XG5cbnZhciBfUGVyaW9kaWNXYXZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9QZXJpb2RpY1dhdmVcIikpO1xuXG52YXIgX0F1ZGlvQnVmZmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb0J1ZmZlclwiKSk7XG5cbnZhciBfRHluYW1pY3NDb21wcmVzc29yTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRHluYW1pY3NDb21wcmVzc29yTm9kZVwiKSk7XG5cbnZhciBfQXVkaW9CdWZmZXJTb3VyY2VOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb0J1ZmZlclNvdXJjZU5vZGVcIikpO1xuXG52YXIgX0F1ZGlvRGVzdGluYXRpb25Ob2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb0Rlc3RpbmF0aW9uTm9kZVwiKSk7XG5cbnZhciBfT3NjaWxsYXRvck5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL09zY2lsbGF0b3JOb2RlXCIpKTtcblxudmFyIF9BbmFseXNlck5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0FuYWx5c2VyTm9kZVwiKSk7XG5cbnZhciBfUGFubmVyTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUGFubmVyTm9kZVwiKSk7XG5cbnZhciBfR2Fpbk5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0dhaW5Ob2RlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbnZhciBCYXNlQXVkaW9Db250ZXh0ID0gZnVuY3Rpb24gKF9FdmVudFRhcmdldCkge1xuICBfaW5oZXJpdHMoQmFzZUF1ZGlvQ29udGV4dCwgX0V2ZW50VGFyZ2V0KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEJhc2VBdWRpb0NvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIEJhc2VBdWRpb0NvbnRleHQoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJhc2VBdWRpb0NvbnRleHQpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBfdGhpcy5hdWRpb1dvcmtsZXQ7XG4gICAgX3RoaXMuY3VycmVudFRpbWUgPSAwO1xuICAgIF90aGlzLmRlc3RpbmF0aW9uID0gbmV3IF9BdWRpb0Rlc3RpbmF0aW9uTm9kZVtcImRlZmF1bHRcIl0oX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmxpc3RlbmVyID0gbmV3IF9BdWRpb0xpc3RlbmVyW1wiZGVmYXVsdFwiXShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuc2FtcGxlUmF0ZTtcbiAgICBfdGhpcy5zdGF0ZSA9IFwicnVubmluZ1wiO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCYXNlQXVkaW9Db250ZXh0LCBbe1xuICAgIGtleTogXCJjcmVhdGVBbmFseXNlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVBbmFseXNlcigpIHtcbiAgICAgIHJldHVybiBuZXcgX0FuYWx5c2VyTm9kZVtcImRlZmF1bHRcIl0odGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUJpcXVhZEZpbHRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCaXF1YWRGaWx0ZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUJ1ZmZlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCdWZmZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUJ1ZmZlclNvdXJjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVCdWZmZXJTb3VyY2UoKSB7XG4gICAgICByZXR1cm4gbmV3IF9BdWRpb0J1ZmZlclNvdXJjZU5vZGVbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVDb25zdGFudFNvdXJjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDb25zdGFudFNvdXJjZSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlQ2hhbm5lbE1lcmdlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVDaGFubmVsTWVyZ2VyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVDaGFubmVsU3BsaXR0ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbFNwbGl0dGVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVDb252b2x2ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQ29udm9sdmVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVEZWxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVEZWxheSgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlRHluYW1pY3NDb21wcmVzc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUR5bmFtaWNzQ29tcHJlc3NvcigpIHtcbiAgICAgIHJldHVybiBuZXcgX0R5bmFtaWNzQ29tcHJlc3Nvck5vZGVbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVHYWluXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUdhaW4oKSB7XG4gICAgICByZXR1cm4gbmV3IF9HYWluTm9kZVtcImRlZmF1bHRcIl0odGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZUlJUkZpbHRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVJSVJGaWx0ZXIoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImNyZWF0ZU9zY2lsbGF0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlT3NjaWxsYXRvcigpIHtcbiAgICAgIHJldHVybiBuZXcgX09zY2lsbGF0b3JOb2RlW1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlUGFubmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVBhbm5lcigpIHtcbiAgICAgIHJldHVybiBuZXcgX1Bhbm5lck5vZGVbXCJkZWZhdWx0XCJdKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVQZXJpb2RpY1dhdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlUGVyaW9kaWNXYXZlKCkge1xuICAgICAgcmV0dXJuIG5ldyBfUGVyaW9kaWNXYXZlW1wiZGVmYXVsdFwiXSh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlU2NyaXB0UHJvY2Vzc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVNjcmlwdFByb2Nlc3NvcigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlU3RlcmVvUGFubmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVN0ZXJlb1Bhbm5lcigpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlV2F2ZVNoYXBlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVXYXZlU2hhcGVyKCkge31cbiAgfSwge1xuICAgIGtleTogXCJkZWNvZGVBdWRpb0RhdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVjb2RlQXVkaW9EYXRhKGF1ZGlvRGF0YSwgY2FsbEZ1bmMpIHtcbiAgICAgIGNhbGxGdW5jKG5ldyBfQXVkaW9CdWZmZXJbXCJkZWZhdWx0XCJdKHRoaXMsIGF1ZGlvRGF0YSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvbnN0YXRlY2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uc3RhdGVjaGFuZ2UoKSB7fVxuICB9XSk7XG5cbiAgcmV0dXJuIEJhc2VBdWRpb0NvbnRleHQ7XG59KF9FdmVudFRhcmdldDJbXCJkZWZhdWx0XCJdKTtcblxudmFyIF9kZWZhdWx0ID0gQmFzZUF1ZGlvQ29udGV4dDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG5cbn0se1wiLi4vRXZlbnRUYXJnZXRcIjoxMSxcIi4vQW5hbHlzZXJOb2RlXCI6MzcsXCIuL0F1ZGlvQnVmZmVyXCI6MzgsXCIuL0F1ZGlvQnVmZmVyU291cmNlTm9kZVwiOjM5LFwiLi9BdWRpb0Rlc3RpbmF0aW9uTm9kZVwiOjQxLFwiLi9BdWRpb0xpc3RlbmVyXCI6NDIsXCIuL0R5bmFtaWNzQ29tcHJlc3Nvck5vZGVcIjo0NyxcIi4vR2Fpbk5vZGVcIjo0OCxcIi4vT3NjaWxsYXRvck5vZGVcIjo1MCxcIi4vUGFubmVyTm9kZVwiOjUxLFwiLi9QZXJpb2RpY1dhdmVcIjo1Mn1dLDQ3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xuXG52YXIgX0F1ZGlvUGFyYW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvUGFyYW1cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxudmFyIER5bmFtaWNzQ29tcHJlc3Nvck5vZGUgPSBmdW5jdGlvbiAoX0F1ZGlvTm9kZSkge1xuICBfaW5oZXJpdHMoRHluYW1pY3NDb21wcmVzc29yTm9kZSwgX0F1ZGlvTm9kZSk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihEeW5hbWljc0NvbXByZXNzb3JOb2RlKTtcblxuICBmdW5jdGlvbiBEeW5hbWljc0NvbXByZXNzb3JOb2RlKGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHluYW1pY3NDb21wcmVzc29yTm9kZSk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICAgIF90aGlzLl90aHJlc2hvbGQgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAtMjQsXG4gICAgICBkZWZhdWx0VmFsdWU6IC0yNCxcbiAgICAgIG1heFZhbHVlOiAwLFxuICAgICAgbWluVmFsdWU6IC0xMDBcbiAgICB9KTtcbiAgICBfdGhpcy5fa25lZSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDMwLFxuICAgICAgZGVmYXVsdFZhbHVlOiAzMCxcbiAgICAgIG1heFZhbHVlOiA0MCxcbiAgICAgIG1pblZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMuX3JhdGlvID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMTIsXG4gICAgICBkZWZhdWx0VmFsdWU6IDEyLFxuICAgICAgbWF4VmFsdWU6IDIwLFxuICAgICAgbWluVmFsdWU6IDFcbiAgICB9KTtcbiAgICBfdGhpcy5fcmVkdWN0aW9uID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMCxcbiAgICAgIGRlZmF1bHRWYWx1ZTogMCxcbiAgICAgIG1heFZhbHVlOiAwLFxuICAgICAgbWluVmFsdWU6IC0yMFxuICAgIH0pO1xuICAgIF90aGlzLl9hdHRhY2sgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwLjAwMyxcbiAgICAgIGRlZmF1bHRWYWx1ZTogMC4wMDMsXG4gICAgICBtYXhWYWx1ZTogMSxcbiAgICAgIG1pblZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMuX3JlbGVhc2UgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwLjI1LFxuICAgICAgZGVmYXVsdFZhbHVlOiAwLjI1LFxuICAgICAgbWF4VmFsdWU6IDEsXG4gICAgICBtaW5WYWx1ZTogMFxuICAgIH0pO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEeW5hbWljc0NvbXByZXNzb3JOb2RlLCBbe1xuICAgIGtleTogXCJ0aHJlc2hvbGRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90aHJlc2hvbGQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImtlZW5cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9rZWVuO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyYXRpb1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JhdGlvO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWR1Y3Rpb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWR1Y3Rpb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImF0dGFja1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2F0dGFjaztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVsZWFzZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbGVhc2U7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIER5bmFtaWNzQ29tcHJlc3Nvck5vZGU7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG5cbnZhciBfZGVmYXVsdCA9IER5bmFtaWNzQ29tcHJlc3Nvck5vZGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHtcIi4vQXVkaW9Ob2RlXCI6NDMsXCIuL0F1ZGlvUGFyYW1cIjo0NH1dLDQ4OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xuXG52YXIgX0F1ZGlvUGFyYW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvUGFyYW1cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxudmFyIEdhaW5Ob2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgX2luaGVyaXRzKEdhaW5Ob2RlLCBfQXVkaW9Ob2RlKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEdhaW5Ob2RlKTtcblxuICBmdW5jdGlvbiBHYWluTm9kZShjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdhaW5Ob2RlKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgY29udGV4dCk7XG4gICAgX3RoaXMuX2dhaW4gPSBvcHRpb25zICYmIG9wdGlvbnMuZ2FpbiB8fCBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdhaW5Ob2RlLCBbe1xuICAgIGtleTogXCJnYWluXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZ2FpbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2Fpbk5vZGU7XG59KF9BdWRpb05vZGUyW1wiZGVmYXVsdFwiXSk7XG5cbnZhciBfZGVmYXVsdCA9IEdhaW5Ob2RlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7XCIuL0F1ZGlvTm9kZVwiOjQzLFwiLi9BdWRpb1BhcmFtXCI6NDR9XSw0OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfQXVkaW9Ob2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9Ob2RlXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG52YXIgTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlID0gZnVuY3Rpb24gKF9BdWRpb05vZGUpIHtcbiAgX2luaGVyaXRzKE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZSwgX0F1ZGlvTm9kZSk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGUpO1xuXG4gIGZ1bmN0aW9uIE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZShjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZSk7XG5cbiAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xuXG52YXIgX2RlZmF1bHQgPSBNZWRpYUVsZW1lbnRBdWRpb1NvdXJjZU5vZGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHtcIi4vQXVkaW9Ob2RlXCI6NDN9XSw1MDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfQXVkaW9TY2hlZHVsZWRTb3VyY2VOb2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGVcIikpO1xuXG52YXIgX0F1ZGlvUGFyYW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvUGFyYW1cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxudmFyIHR5cGVzID0ge1xuICBcInNpbmVcIjogMCxcbiAgXCJzcXVhcmVcIjogMCxcbiAgXCJzYXd0b290aFwiOiAwLFxuICBcInRyaWFuZ2xlXCI6IDAsXG4gIFwiY3VzdG9tXCI6IDBcbn07XG5cbnZhciBPc2NpbGxhdG9yTm9kZSA9IGZ1bmN0aW9uIChfQXVkaW9TY2hlZHVsZWRTb3VyY2UpIHtcbiAgX2luaGVyaXRzKE9zY2lsbGF0b3JOb2RlLCBfQXVkaW9TY2hlZHVsZWRTb3VyY2UpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoT3NjaWxsYXRvck5vZGUpO1xuXG4gIGZ1bmN0aW9uIE9zY2lsbGF0b3JOb2RlKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT3NjaWxsYXRvck5vZGUpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBfdGhpcy5mcmVxdWVuY3kgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiBfdGhpcy5pc051bWJlcihvcHRpb25zLmZyZXF1ZW5jeSkgPyBvcHRpb25zLmZyZXF1ZW5jeSA6IDQ0MFxuICAgIH0pO1xuICAgIF90aGlzLmRldHVuZSA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IF90aGlzLmlzTnVtYmVyKG9wdGlvbnMuZGV0dW5lKSA/IG9wdGlvbnMuZGV0dW5lIDogMFxuICAgIH0pO1xuICAgIF90aGlzLnR5cGUgPSBvcHRpb25zLnR5cGUgaW4gdHlwZXMgPyBvcHRpb25zLnR5cGUgOiBcInNpbmVcIjtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoT3NjaWxsYXRvck5vZGUsIFt7XG4gICAga2V5OiBcInNldFBlcmlvZGljV2F2ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQZXJpb2RpY1dhdmUod2F2ZSkge31cbiAgfSwge1xuICAgIGtleTogXCJzdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCh3aGVuKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInN0b3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCh3ZW4pIHt9XG4gIH1dKTtcblxuICByZXR1cm4gT3NjaWxsYXRvck5vZGU7XG59KF9BdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGVbXCJkZWZhdWx0XCJdKTtcblxudmFyIF9kZWZhdWx0ID0gT3NjaWxsYXRvck5vZGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHtcIi4vQXVkaW9QYXJhbVwiOjQ0LFwiLi9BdWRpb1NjaGVkdWxlZFNvdXJjZU5vZGVcIjo0NX1dLDUxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9BdWRpb05vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BdWRpb05vZGVcIikpO1xuXG52YXIgX0F1ZGlvUGFyYW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0F1ZGlvUGFyYW1cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxudmFyIFBhbm5lck5vZGUgPSBmdW5jdGlvbiAoX0F1ZGlvTm9kZSkge1xuICBfaW5oZXJpdHMoUGFubmVyTm9kZSwgX0F1ZGlvTm9kZSk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQYW5uZXJOb2RlKTtcblxuICBmdW5jdGlvbiBQYW5uZXJOb2RlKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFubmVyTm9kZSk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICAgIF90aGlzLmNvbmVJbm5lckFuZ2xlID0gMzYwO1xuICAgIF90aGlzLmNvbmVPdXRlckFuZ2xlID0gMzYwO1xuICAgIF90aGlzLmNvbmVPdXRlckdhaW4gPSAwO1xuICAgIF90aGlzLmRpc3RhbmNlTW9kZWwgPSBcImludmVyc2VcIjtcbiAgICBfdGhpcy5tYXhEaXN0YW5jZSA9IDEwMDAwO1xuICAgIF90aGlzLm9yaWVudGF0aW9uWCA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDFcbiAgICB9KTtcbiAgICBfdGhpcy5vcmllbnRhdGlvblkgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMub3JpZW50YXRpb25aID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLnBhbm5pbmdNb2RlbCA9IFwiZXF1YWxwb3dlclwiO1xuICAgIF90aGlzLnBvc2l0aW9uWCA9IG5ldyBfQXVkaW9QYXJhbVtcImRlZmF1bHRcIl0oe1xuICAgICAgdmFsdWU6IDBcbiAgICB9KTtcbiAgICBfdGhpcy5wb3NpdGlvblkgPSBuZXcgX0F1ZGlvUGFyYW1bXCJkZWZhdWx0XCJdKHtcbiAgICAgIHZhbHVlOiAwXG4gICAgfSk7XG4gICAgX3RoaXMucG9zaXRpb25aID0gbmV3IF9BdWRpb1BhcmFtW1wiZGVmYXVsdFwiXSh7XG4gICAgICB2YWx1ZTogMFxuICAgIH0pO1xuICAgIF90aGlzLnJlZkRpc3RhbmNlID0gMTtcbiAgICBfdGhpcy5yb2xsb2ZmRmFjdG9yID0gMTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGFubmVyTm9kZSwgW3tcbiAgICBrZXk6IFwic2V0UG9zaXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UG9zaXRpb24oeCwgeSwgeikge1xuICAgICAgdGhpcy5wb3NpdGlvblggPSB4O1xuICAgICAgdGhpcy5wb3NpdGlvblkgPSB5O1xuICAgICAgdGhpcy5wb3NpdGlvblogPSB6O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRPcmllbnRhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcmllbnRhdGlvbih4LCB5LCB6KSB7XG4gICAgICB0aGlzLm9yaWVudGF0aW9uWCA9IHg7XG4gICAgICB0aGlzLm9yaWVudGF0aW9uWSA9IHk7XG4gICAgICB0aGlzLm9yaWVudGF0aW9uWiA9IHo7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFZlbG9jaXR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZlbG9jaXR5KCkge31cbiAgfV0pO1xuXG4gIHJldHVybiBQYW5uZXJOb2RlO1xufShfQXVkaW9Ob2RlMltcImRlZmF1bHRcIl0pO1xuXG52YXIgX2RlZmF1bHQgPSBQYW5uZXJOb2RlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7XCIuL0F1ZGlvTm9kZVwiOjQzLFwiLi9BdWRpb1BhcmFtXCI6NDR9XSw1MjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUGVyaW9kaWNXYXZlID0gZnVuY3Rpb24gUGVyaW9kaWNXYXZlKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBlcmlvZGljV2F2ZSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBQZXJpb2RpY1dhdmU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHt9XSw1MzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBtZDUgPSByZXF1aXJlKFwiLi4vLi4vbGliL21kNS5taW5cIik7XG5cbnZhciBmaWxlTWdyID0ganNiLmdldEZpbGVTeXN0ZW1NYW5hZ2VyKCk7XG52YXIgY2FjaGVEaXIgPSBqc2IuZW52LlVTRVJfREFUQV9QQVRIICsgXCIvZmlsZUNhY2hlL1wiO1xuXG52YXIgRmlsZUNhY2hlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGaWxlQ2FjaGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpbGVDYWNoZSk7XG5cbiAgICB0aGlzLl9jYWNoZXMgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGaWxlQ2FjaGUsIFt7XG4gICAga2V5OiBcImdldENhY2hlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENhY2hlKGRhdGEpIHtcbiAgICAgIHZhciBrZXkgPSBGaWxlQ2FjaGUuX2dlbkRhdGFLZXkoZGF0YSk7XG5cbiAgICAgIGlmIChrZXkgaW4gdGhpcy5fY2FjaGVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZXNba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRDYWNoZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDYWNoZShwYXRoLCBkYXRhKSB7XG4gICAgICB2YXIga2V5ID0gRmlsZUNhY2hlLl9nZW5EYXRhS2V5KGRhdGEpO1xuXG4gICAgICB0aGlzLl9jYWNoZXNba2V5XSA9IHBhdGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEl0ZW1cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SXRlbShkYXRhLCBwYXRoLCBrZXksIGNhbGxCYWNrKSB7XG4gICAgICBrZXkgPSBrZXkgfHwgRmlsZUNhY2hlLl9nZW5EYXRhS2V5KGRhdGEpO1xuICAgICAgdmFyIGNhY2hlcyA9IHRoaXMuX2NhY2hlcztcblxuICAgICAgaWYgKGtleSBpbiBjYWNoZXMpIHtcbiAgICAgICAgY2FsbEJhY2sgJiYgY2FsbEJhY2soY2FjaGVzW2tleV0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghcGF0aCkge1xuICAgICAgICBwYXRoID0gY2FjaGVEaXIgKyBrZXk7XG4gICAgICAgIGZpbGVNZ3Iud3JpdGVGaWxlKHtcbiAgICAgICAgICBmaWxlUGF0aDogcGF0aCxcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIGVuY29kaW5nOiBcImJpbmFyeVwiLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICBjYWNoZXNba2V5XSA9IHBhdGg7XG4gICAgICAgICAgICBjYWxsQmFjayAmJiBjYWxsQmFjayhwYXRoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoKSB7XG4gICAgICAgICAgICBjYWxsQmFjayAmJiBjYWxsQmFjaygpO1xuICAgICAgICAgICAgdGhyb3cgcGF0aCArIFwid3JpdGVGaWxlIGZhaWwhXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UGF0aFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQYXRoKGRhdGEsIGNhbGxCYWNrKSB7XG4gICAgICB2YXIga2V5ID0gRmlsZUNhY2hlLl9nZW5EYXRhS2V5KGRhdGEpO1xuXG4gICAgICB2YXIgY2FjaGVzID0gdGhpcy5fY2FjaGVzO1xuXG4gICAgICBpZiAoa2V5IGluIGNhY2hlcykge1xuICAgICAgICBjYWxsQmFjayhjYWNoZXNba2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEl0ZW0oZGF0YSwgdW5kZWZpbmVkLCBrZXksIGNhbGxCYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJfZ2VuRGF0YUtleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2VuRGF0YUtleShkYXRhKSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhkYXRhKTtcbiAgICAgIHZhciBsZW5ndGggPSB2aWV3LmJ5dGVMZW5ndGggLyA0O1xuICAgICAgdmFyIGNvdW50ID0gMTA7XG4gICAgICB2YXIgc3BhY2UgPSBsZW5ndGggLyBjb3VudDtcbiAgICAgIHZhciBrZXkgPSBcImxlbmd0aDpcIiArIGxlbmd0aDtcbiAgICAgIGtleSArPSBcImZpcnN0OlwiICsgdmlldy5nZXRJbnQzMigwKTtcbiAgICAgIGtleSArPSBcImxhc3Q6XCIgKyB2aWV3LmdldEludDMyKGxlbmd0aCAtIDEpO1xuXG4gICAgICB3aGlsZSAoY291bnQtLSkge1xuICAgICAgICBrZXkgKz0gY291bnQgKyBcIjpcIiArIHZpZXcuZ2V0SW50MzIoTWF0aC5mbG9vcihzcGFjZSAqIGNvdW50KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZDUoa2V5KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRmlsZUNhY2hlO1xufSgpO1xuXG50cnkge1xuICBmaWxlTWdyLmFjY2Vzc1N5bmMoY2FjaGVEaXIpO1xuICBmaWxlTWdyLnJtZGlyU3luYyhjYWNoZURpciwgdHJ1ZSk7XG59IGNhdGNoIChlKSB7fVxuXG5maWxlTWdyLm1rZGlyU3luYyhjYWNoZURpciwgdHJ1ZSk7XG5cbnZhciBfZGVmYXVsdCA9IG5ldyBGaWxlQ2FjaGUoKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7XCIuLi8uLi9saWIvbWQ1Lm1pblwiOjJ9XSw1NDpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2RlZmF1bHQgPSBuZXcgV2Vha01hcCgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHt9XSw1NTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9BdWRpbyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQXVkaW9cIikpO1xuXG52YXIgX0F1ZGlvQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYXVkaW9Db250ZXh0L0F1ZGlvQ29udGV4dFwiKSk7XG5cbnZhciBfRGV2aWNlTW90aW9uRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RldmljZU1vdGlvbkV2ZW50XCIpKTtcblxudmFyIF9Eb2N1bWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRG9jdW1lbnRcIikpO1xuXG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFwiKSk7XG5cbnZhciBfRm9udEZhY2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ZvbnRGYWNlXCIpKTtcblxudmFyIF9Gb250RmFjZVNldCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9udEZhY2VTZXRcIikpO1xuXG52YXIgX0V2ZW50VGFyZ2V0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9FdmVudFRhcmdldFwiKSk7XG5cbnZhciBfSFRNTEVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxFbGVtZW50XCIpKTtcblxudmFyIF9IVE1MQXVkaW9FbGVtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MQXVkaW9FbGVtZW50XCIpKTtcblxudmFyIF9IVE1MQ2FudmFzRWxlbWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSFRNTENhbnZhc0VsZW1lbnRcIikpO1xuXG52YXIgX0hUTUxJbWFnZUVsZW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0hUTUxJbWFnZUVsZW1lbnRcIikpO1xuXG52YXIgX0ltYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9JbWFnZVwiKSk7XG5cbnZhciBfTG9jYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0xvY2F0aW9uXCIpKTtcblxudmFyIF9OYXZpZ2F0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05hdmlnYXRvclwiKSk7XG5cbnZhciBfU2NyZWVuID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9TY3JlZW5cIikpO1xuXG52YXIgX1RvdWNoRXZlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RvdWNoRXZlbnRcIikpO1xuXG52YXIgX1hNTEh0dHBSZXF1ZXN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9YTUxIdHRwUmVxdWVzdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG53aW5kb3cuanNiID0gd2luZG93LmpzYiB8fCB7fTtcbndpbmRvdy5jbGllbnRUb3AgPSAwO1xud2luZG93LmNsaWVudExlZnQgPSAwO1xud2luZG93LmRldmljZVBpeGVsUmF0aW8gPSBqc2IucGl4ZWxSYXRpbztcbndpbmRvdy5kb2N1bWVudCA9IG5ldyBfRG9jdW1lbnRbXCJkZWZhdWx0XCJdKCk7XG53aW5kb3cuZnJhbWVFbGVtZW50ID0gbnVsbDtcbndpbmRvdy5mdWxsU2NyZWVuID0gdHJ1ZTtcbndpbmRvdy5pbm5lckhlaWdodCA9IGpzYi5oZWlnaHQ7XG53aW5kb3cuaW5uZXJXaWR0aCA9IGpzYi53aWR0aDtcbndpbmRvdy5sZW5ndGggPSAwO1xud2luZG93LmxvY2F0aW9uID0gbmV3IF9Mb2NhdGlvbltcImRlZmF1bHRcIl0oKTtcbndpbmRvdy5uYW1lID0gXCJydW50aW1lXCI7XG53aW5kb3cubmF2aWdhdG9yID0gbmV3IF9OYXZpZ2F0b3JbXCJkZWZhdWx0XCJdKGpzYi5wbGF0Zm9ybSwganNiLmxhbmd1YWdlKTtcbndpbmRvdy5vdXRlckhlaWdodCA9IGpzYi5oZWlnaHQ7XG53aW5kb3cub3V0ZXJXaWR0aCA9IGpzYi53aWR0aDtcbndpbmRvdy5wYWdlWE9mZnNldCA9IDA7XG53aW5kb3cucGFnZVlPZmZzZXQgPSAwO1xud2luZG93LnBhcmVudCA9IHdpbmRvdztcbndpbmRvdy5zY3JlZW4gPSBuZXcgX1NjcmVlbltcImRlZmF1bHRcIl0oKTtcbndpbmRvdy5zY3JlZW5MZWZ0ID0gMDtcbndpbmRvdy5zY3JlZW5Ub3AgPSAwO1xud2luZG93LnNjcmVlblggPSAwO1xud2luZG93LnNjcmVlblkgPSAwO1xud2luZG93LnNjcm9sbFggPSAwO1xud2luZG93LnNjcm9sbFkgPSAwO1xud2luZG93LnNlbGYgPSB3aW5kb3c7XG53aW5kb3cudG9wID0gd2luZG93O1xud2luZG93LndpbmRvdyA9IHdpbmRvdztcbndpbmRvdy5hbGVydCA9IHdpbmRvdy5jb25zb2xlLmVycm9yO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuLi9saWIvYmFzZTY0Lm1pbi5qcycpLFxuICAgIGJ0b2EgPSBfcmVxdWlyZS5idG9hLFxuICAgIGF0b2IgPSBfcmVxdWlyZS5hdG9iO1xuXG53aW5kb3cuYXRvYiA9IGF0b2I7XG53aW5kb3cuYnRvYSA9IGJ0b2E7XG5cbndpbmRvdy5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS53YXJuKFwid2luZG93LmNsb3NlKCkgaXMgZGVwcmVjYXRlZCFcIik7XG59O1xuXG53aW5kb3cucHJpbnQgPSB3aW5kb3cuY29uc29sZS5sb2c7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciA9IF9FdmVudFRhcmdldFtcImRlZmF1bHRcIl0ucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG53aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IF9FdmVudFRhcmdldFtcImRlZmF1bHRcIl0ucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG52YXIgX2Rpc3BhdGNoRXZlbnQgPSBfRXZlbnRUYXJnZXRbXCJkZWZhdWx0XCJdLnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50O1xuXG53aW5kb3cuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAod2luZG93LmRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpKSB7XG4gICAgcmV0dXJuIF9kaXNwYXRjaEV2ZW50LmFwcGx5KHRoaXMgfHwgd2luZG93LCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxud2luZG93LmdldENvbXB1dGVkU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogJzBweCcsXG4gICAgdG9wOiAnMHB4JyxcbiAgICBoZWlnaHQ6ICcwcHgnLFxuICAgIHBhZGRpbmdMZWZ0OiAwXG4gIH07XG59O1xuXG5qc2Iub25XaW5kb3dSZXNpemUoZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgd2luZG93LmlubmVyV2lkdGggPSB3aWR0aDtcbiAgd2luZG93LmlubmVySGVpZ2h0ID0gaGVpZ2h0O1xuICB3aW5kb3cub3V0ZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB3aW5kb3cub3V0ZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHdpbmRvdy5zY3JlZW4uYXZhaWxXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB3aW5kb3cuc2NyZWVuLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHdpbmRvdy5zY3JlZW4uaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB2YXIgZXZlbnQgPSBuZXcgX0V2ZW50W1wiZGVmYXVsdFwiXShcInJlc2l6ZVwiKTtcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufSk7XG5cbndpbmRvdy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLndhcm4oXCJ3aW5kb3cuc3RvcCgpIG5vdCBpbXBsZW1lbnRlZFwiKTtcbn07XG5cbndpbmRvdy5BdWRpbyA9IF9BdWRpb1tcImRlZmF1bHRcIl07XG53aW5kb3cuQXVkaW9Db250ZXh0ID0gX0F1ZGlvQ29udGV4dFtcImRlZmF1bHRcIl07XG53aW5kb3cuRGV2aWNlTW90aW9uRXZlbnQgPSBfRGV2aWNlTW90aW9uRXZlbnRbXCJkZWZhdWx0XCJdO1xud2luZG93LkV2ZW50ID0gX0V2ZW50W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5Gb250RmFjZSA9IF9Gb250RmFjZVtcImRlZmF1bHRcIl07XG53aW5kb3cuRm9udEZhY2VTZXQgPSBfRm9udEZhY2VTZXRbXCJkZWZhdWx0XCJdO1xud2luZG93LkhUTUxFbGVtZW50ID0gX0hUTUxFbGVtZW50W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5IVE1MQXVkaW9FbGVtZW50ID0gX0hUTUxBdWRpb0VsZW1lbnRbXCJkZWZhdWx0XCJdO1xud2luZG93LkhUTUxDYW52YXNFbGVtZW50ID0gX0hUTUxDYW52YXNFbGVtZW50W1wiZGVmYXVsdFwiXTtcbndpbmRvdy5IVE1MSW1hZ2VFbGVtZW50ID0gX0hUTUxJbWFnZUVsZW1lbnRbXCJkZWZhdWx0XCJdO1xud2luZG93LkltYWdlID0gX0ltYWdlW1wiZGVmYXVsdFwiXTtcbndpbmRvdy5Ub3VjaEV2ZW50ID0gX1RvdWNoRXZlbnRbXCJkZWZhdWx0XCJdO1xud2luZG93LlhNTEh0dHBSZXF1ZXN0ID0gX1hNTEh0dHBSZXF1ZXN0W1wiZGVmYXVsdFwiXTtcblxuaWYgKCF3aW5kb3cuQmxvYiB8fCAhd2luZG93LlVSTCkge1xuICB2YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgnLi9CbG9iLmpzJyksXG4gICAgICBCbG9iID0gX3JlcXVpcmUyLkJsb2IsXG4gICAgICBVUkwgPSBfcmVxdWlyZTIuVVJMO1xuXG4gIHdpbmRvdy5CbG9iID0gQmxvYjtcbiAgd2luZG93LlVSTCA9IFVSTDtcbn1cblxuaWYgKCF3aW5kb3cuRE9NUGFyc2VyKSB7XG4gIHdpbmRvdy5ET01QYXJzZXIgPSByZXF1aXJlKCcuL3htbGRvbS9kb20tcGFyc2VyLmpzJykuRE9NUGFyc2VyO1xufVxuXG59LHtcIi4uL2xpYi9iYXNlNjQubWluLmpzXCI6MSxcIi4vQXVkaW9cIjozLFwiLi9CbG9iLmpzXCI6NCxcIi4vRGV2aWNlTW90aW9uRXZlbnRcIjo3LFwiLi9Eb2N1bWVudFwiOjgsXCIuL0V2ZW50XCI6MTAsXCIuL0V2ZW50VGFyZ2V0XCI6MTEsXCIuL0ZvbnRGYWNlXCI6MTIsXCIuL0ZvbnRGYWNlU2V0XCI6MTMsXCIuL0hUTUxBdWRpb0VsZW1lbnRcIjoxNSxcIi4vSFRNTENhbnZhc0VsZW1lbnRcIjoxNyxcIi4vSFRNTEVsZW1lbnRcIjoxOCxcIi4vSFRNTEltYWdlRWxlbWVudFwiOjIxLFwiLi9JbWFnZVwiOjI3LFwiLi9Mb2NhdGlvblwiOjI4LFwiLi9OYXZpZ2F0b3JcIjozMCxcIi4vU2NyZWVuXCI6MzMsXCIuL1RvdWNoRXZlbnRcIjozNCxcIi4vWE1MSHR0cFJlcXVlc3RcIjozNSxcIi4vYXVkaW9Db250ZXh0L0F1ZGlvQ29udGV4dFwiOjQwLFwiLi94bWxkb20vZG9tLXBhcnNlci5qc1wiOjU2fV0sNTY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIERPTVBhcnNlcihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge1xuICAgIGxvY2F0b3I6IHt9XG4gIH07XG59XG5cbkRPTVBhcnNlci5wcm90b3R5cGUucGFyc2VGcm9tU3RyaW5nID0gZnVuY3Rpb24gKHNvdXJjZSwgbWltZVR5cGUpIHtcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gIHZhciBzYXggPSBuZXcgWE1MUmVhZGVyKCk7XG4gIHZhciBkb21CdWlsZGVyID0gb3B0aW9ucy5kb21CdWlsZGVyIHx8IG5ldyBET01IYW5kbGVyKCk7XG4gIHZhciBlcnJvckhhbmRsZXIgPSBvcHRpb25zLmVycm9ySGFuZGxlcjtcbiAgdmFyIGxvY2F0b3IgPSBvcHRpb25zLmxvY2F0b3I7XG4gIHZhciBkZWZhdWx0TlNNYXAgPSBvcHRpb25zLnhtbG5zIHx8IHt9O1xuICB2YXIgaXNIVE1MID0gL1xcL3g/aHRtbD8kLy50ZXN0KG1pbWVUeXBlKTtcbiAgdmFyIGVudGl0eU1hcCA9IGlzSFRNTCA/IGh0bWxFbnRpdHkuZW50aXR5TWFwIDoge1xuICAgICdsdCc6ICc8JyxcbiAgICAnZ3QnOiAnPicsXG4gICAgJ2FtcCc6ICcmJyxcbiAgICAncXVvdCc6ICdcIicsXG4gICAgJ2Fwb3MnOiBcIidcIlxuICB9O1xuXG4gIGlmIChsb2NhdG9yKSB7XG4gICAgZG9tQnVpbGRlci5zZXREb2N1bWVudExvY2F0b3IobG9jYXRvcik7XG4gIH1cblxuICBzYXguZXJyb3JIYW5kbGVyID0gYnVpbGRFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyLCBkb21CdWlsZGVyLCBsb2NhdG9yKTtcbiAgc2F4LmRvbUJ1aWxkZXIgPSBvcHRpb25zLmRvbUJ1aWxkZXIgfHwgZG9tQnVpbGRlcjtcblxuICBpZiAoaXNIVE1MKSB7XG4gICAgZGVmYXVsdE5TTWFwWycnXSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbiAgfVxuXG4gIGRlZmF1bHROU01hcC54bWwgPSBkZWZhdWx0TlNNYXAueG1sIHx8ICdodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2UnO1xuXG4gIGlmIChzb3VyY2UpIHtcbiAgICBzYXgucGFyc2Uoc291cmNlLCBkZWZhdWx0TlNNYXAsIGVudGl0eU1hcCk7XG4gIH0gZWxzZSB7XG4gICAgc2F4LmVycm9ySGFuZGxlci5lcnJvcihcImludmFsaWQgZG9jIHNvdXJjZVwiKTtcbiAgfVxuXG4gIHJldHVybiBkb21CdWlsZGVyLmRvYztcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkRXJyb3JIYW5kbGVyKGVycm9ySW1wbCwgZG9tQnVpbGRlciwgbG9jYXRvcikge1xuICBpZiAoIWVycm9ySW1wbCkge1xuICAgIGlmIChkb21CdWlsZGVyIGluc3RhbmNlb2YgRE9NSGFuZGxlcikge1xuICAgICAgcmV0dXJuIGRvbUJ1aWxkZXI7XG4gICAgfVxuXG4gICAgZXJyb3JJbXBsID0gZG9tQnVpbGRlcjtcbiAgfVxuXG4gIHZhciBlcnJvckhhbmRsZXIgPSB7fTtcbiAgdmFyIGlzQ2FsbGJhY2sgPSBlcnJvckltcGwgaW5zdGFuY2VvZiBGdW5jdGlvbjtcbiAgbG9jYXRvciA9IGxvY2F0b3IgfHwge307XG5cbiAgZnVuY3Rpb24gYnVpbGQoa2V5KSB7XG4gICAgdmFyIGZuID0gZXJyb3JJbXBsW2tleV07XG5cbiAgICBpZiAoIWZuICYmIGlzQ2FsbGJhY2spIHtcbiAgICAgIGZuID0gZXJyb3JJbXBsLmxlbmd0aCA9PSAyID8gZnVuY3Rpb24gKG1zZykge1xuICAgICAgICBlcnJvckltcGwoa2V5LCBtc2cpO1xuICAgICAgfSA6IGVycm9ySW1wbDtcbiAgICB9XG5cbiAgICBlcnJvckhhbmRsZXJba2V5XSA9IGZuICYmIGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgIGZuKCdbeG1sZG9tICcgKyBrZXkgKyAnXVxcdCcgKyBtc2cgKyBfbG9jYXRvcihsb2NhdG9yKSk7XG4gICAgfSB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgfVxuXG4gIGJ1aWxkKCd3YXJuaW5nJyk7XG4gIGJ1aWxkKCdlcnJvcicpO1xuICBidWlsZCgnZmF0YWxFcnJvcicpO1xuICByZXR1cm4gZXJyb3JIYW5kbGVyO1xufVxuXG5mdW5jdGlvbiBET01IYW5kbGVyKCkge1xuICB0aGlzLmNkYXRhID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uKGxvY2F0b3IsIG5vZGUpIHtcbiAgbm9kZS5saW5lTnVtYmVyID0gbG9jYXRvci5saW5lTnVtYmVyO1xuICBub2RlLmNvbHVtbk51bWJlciA9IGxvY2F0b3IuY29sdW1uTnVtYmVyO1xufVxuXG5ET01IYW5kbGVyLnByb3RvdHlwZSA9IHtcbiAgc3RhcnREb2N1bWVudDogZnVuY3Rpb24gc3RhcnREb2N1bWVudCgpIHtcbiAgICB0aGlzLmRvYyA9IG5ldyBET01JbXBsZW1lbnRhdGlvbigpLmNyZWF0ZURvY3VtZW50KG51bGwsIG51bGwsIG51bGwpO1xuXG4gICAgaWYgKHRoaXMubG9jYXRvcikge1xuICAgICAgdGhpcy5kb2MuZG9jdW1lbnRVUkkgPSB0aGlzLmxvY2F0b3Iuc3lzdGVtSWQ7XG4gICAgfVxuICB9LFxuICBzdGFydEVsZW1lbnQ6IGZ1bmN0aW9uIHN0YXJ0RWxlbWVudChuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSwgcU5hbWUsIGF0dHJzKSB7XG4gICAgdmFyIGRvYyA9IHRoaXMuZG9jO1xuICAgIHZhciBlbCA9IGRvYy5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxTmFtZSB8fCBsb2NhbE5hbWUpO1xuICAgIHZhciBsZW4gPSBhdHRycy5sZW5ndGg7XG4gICAgYXBwZW5kRWxlbWVudCh0aGlzLCBlbCk7XG4gICAgdGhpcy5jdXJyZW50RWxlbWVudCA9IGVsO1xuICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsIGVsKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBuYW1lc3BhY2VVUkkgPSBhdHRycy5nZXRVUkkoaSk7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRycy5nZXRWYWx1ZShpKTtcbiAgICAgIHZhciBxTmFtZSA9IGF0dHJzLmdldFFOYW1lKGkpO1xuICAgICAgdmFyIGF0dHIgPSBkb2MuY3JlYXRlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxTmFtZSk7XG4gICAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24oYXR0cnMuZ2V0TG9jYXRvcihpKSwgYXR0cik7XG4gICAgICBhdHRyLnZhbHVlID0gYXR0ci5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZU5vZGUoYXR0cik7XG4gICAgfVxuICB9LFxuICBlbmRFbGVtZW50OiBmdW5jdGlvbiBlbmRFbGVtZW50KG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lLCBxTmFtZSkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50RWxlbWVudDtcbiAgICB2YXIgdGFnTmFtZSA9IGN1cnJlbnQudGFnTmFtZTtcbiAgICB0aGlzLmN1cnJlbnRFbGVtZW50ID0gY3VycmVudC5wYXJlbnROb2RlO1xuICB9LFxuICBzdGFydFByZWZpeE1hcHBpbmc6IGZ1bmN0aW9uIHN0YXJ0UHJlZml4TWFwcGluZyhwcmVmaXgsIHVyaSkge30sXG4gIGVuZFByZWZpeE1hcHBpbmc6IGZ1bmN0aW9uIGVuZFByZWZpeE1hcHBpbmcocHJlZml4KSB7fSxcbiAgcHJvY2Vzc2luZ0luc3RydWN0aW9uOiBmdW5jdGlvbiBwcm9jZXNzaW5nSW5zdHJ1Y3Rpb24odGFyZ2V0LCBkYXRhKSB7XG4gICAgdmFyIGlucyA9IHRoaXMuZG9jLmNyZWF0ZVByb2Nlc3NpbmdJbnN0cnVjdGlvbih0YXJnZXQsIGRhdGEpO1xuICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsIGlucyk7XG4gICAgYXBwZW5kRWxlbWVudCh0aGlzLCBpbnMpO1xuICB9LFxuICBpZ25vcmFibGVXaGl0ZXNwYWNlOiBmdW5jdGlvbiBpZ25vcmFibGVXaGl0ZXNwYWNlKGNoLCBzdGFydCwgbGVuZ3RoKSB7fSxcbiAgY2hhcmFjdGVyczogZnVuY3Rpb24gY2hhcmFjdGVycyhjaGFycywgc3RhcnQsIGxlbmd0aCkge1xuICAgIGNoYXJzID0gX3RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoY2hhcnMpIHtcbiAgICAgIGlmICh0aGlzLmNkYXRhKSB7XG4gICAgICAgIHZhciBjaGFyTm9kZSA9IHRoaXMuZG9jLmNyZWF0ZUNEQVRBU2VjdGlvbihjaGFycyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2hhck5vZGUgPSB0aGlzLmRvYy5jcmVhdGVUZXh0Tm9kZShjaGFycyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY3VycmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hhck5vZGUpO1xuICAgICAgfSBlbHNlIGlmICgvXlxccyokLy50ZXN0KGNoYXJzKSkge1xuICAgICAgICB0aGlzLmRvYy5hcHBlbmRDaGlsZChjaGFyTm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubG9jYXRvciAmJiBwb3NpdGlvbih0aGlzLmxvY2F0b3IsIGNoYXJOb2RlKTtcbiAgICB9XG4gIH0sXG4gIHNraXBwZWRFbnRpdHk6IGZ1bmN0aW9uIHNraXBwZWRFbnRpdHkobmFtZSkge30sXG4gIGVuZERvY3VtZW50OiBmdW5jdGlvbiBlbmREb2N1bWVudCgpIHtcbiAgICB0aGlzLmRvYy5ub3JtYWxpemUoKTtcbiAgfSxcbiAgc2V0RG9jdW1lbnRMb2NhdG9yOiBmdW5jdGlvbiBzZXREb2N1bWVudExvY2F0b3IobG9jYXRvcikge1xuICAgIGlmICh0aGlzLmxvY2F0b3IgPSBsb2NhdG9yKSB7XG4gICAgICBsb2NhdG9yLmxpbmVOdW1iZXIgPSAwO1xuICAgIH1cbiAgfSxcbiAgY29tbWVudDogZnVuY3Rpb24gY29tbWVudChjaGFycywgc3RhcnQsIGxlbmd0aCkge1xuICAgIGNoYXJzID0gX3RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdmFyIGNvbW0gPSB0aGlzLmRvYy5jcmVhdGVDb21tZW50KGNoYXJzKTtcbiAgICB0aGlzLmxvY2F0b3IgJiYgcG9zaXRpb24odGhpcy5sb2NhdG9yLCBjb21tKTtcbiAgICBhcHBlbmRFbGVtZW50KHRoaXMsIGNvbW0pO1xuICB9LFxuICBzdGFydENEQVRBOiBmdW5jdGlvbiBzdGFydENEQVRBKCkge1xuICAgIHRoaXMuY2RhdGEgPSB0cnVlO1xuICB9LFxuICBlbmRDREFUQTogZnVuY3Rpb24gZW5kQ0RBVEEoKSB7XG4gICAgdGhpcy5jZGF0YSA9IGZhbHNlO1xuICB9LFxuICBzdGFydERURDogZnVuY3Rpb24gc3RhcnREVEQobmFtZSwgcHVibGljSWQsIHN5c3RlbUlkKSB7XG4gICAgdmFyIGltcGwgPSB0aGlzLmRvYy5pbXBsZW1lbnRhdGlvbjtcblxuICAgIGlmIChpbXBsICYmIGltcGwuY3JlYXRlRG9jdW1lbnRUeXBlKSB7XG4gICAgICB2YXIgZHQgPSBpbXBsLmNyZWF0ZURvY3VtZW50VHlwZShuYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpO1xuICAgICAgdGhpcy5sb2NhdG9yICYmIHBvc2l0aW9uKHRoaXMubG9jYXRvciwgZHQpO1xuICAgICAgYXBwZW5kRWxlbWVudCh0aGlzLCBkdCk7XG4gICAgfVxuICB9LFxuICB3YXJuaW5nOiBmdW5jdGlvbiB3YXJuaW5nKGVycm9yKSB7XG4gICAgY29uc29sZS53YXJuKCdbeG1sZG9tIHdhcm5pbmddXFx0JyArIGVycm9yLCBfbG9jYXRvcih0aGlzLmxvY2F0b3IpKTtcbiAgfSxcbiAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKF9lcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1t4bWxkb20gZXJyb3JdXFx0JyArIF9lcnJvciwgX2xvY2F0b3IodGhpcy5sb2NhdG9yKSk7XG4gIH0sXG4gIGZhdGFsRXJyb3I6IGZ1bmN0aW9uIGZhdGFsRXJyb3IoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbeG1sZG9tIGZhdGFsRXJyb3JdXFx0JyArIGVycm9yLCBfbG9jYXRvcih0aGlzLmxvY2F0b3IpKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZnVuY3Rpb24gX2xvY2F0b3IobCkge1xuICBpZiAobCkge1xuICAgIHJldHVybiAnXFxuQCcgKyAobC5zeXN0ZW1JZCB8fCAnJykgKyAnI1tsaW5lOicgKyBsLmxpbmVOdW1iZXIgKyAnLGNvbDonICsgbC5jb2x1bW5OdW1iZXIgKyAnXSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3RvU3RyaW5nKGNoYXJzLCBzdGFydCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgY2hhcnMgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gY2hhcnMuc3Vic3RyKHN0YXJ0LCBsZW5ndGgpO1xuICB9IGVsc2Uge1xuICAgIGlmIChjaGFycy5sZW5ndGggPj0gc3RhcnQgKyBsZW5ndGggfHwgc3RhcnQpIHtcbiAgICAgIHJldHVybiBuZXcgamF2YS5sYW5nLlN0cmluZyhjaGFycywgc3RhcnQsIGxlbmd0aCkgKyAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gY2hhcnM7XG4gIH1cbn1cblxuXCJlbmREVEQsc3RhcnRFbnRpdHksZW5kRW50aXR5LGF0dHJpYnV0ZURlY2wsZWxlbWVudERlY2wsZXh0ZXJuYWxFbnRpdHlEZWNsLGludGVybmFsRW50aXR5RGVjbCxyZXNvbHZlRW50aXR5LGdldEV4dGVybmFsU3Vic2V0LG5vdGF0aW9uRGVjbCx1bnBhcnNlZEVudGl0eURlY2xcIi5yZXBsYWNlKC9cXHcrL2csIGZ1bmN0aW9uIChrZXkpIHtcbiAgRE9NSGFuZGxlci5wcm90b3R5cGVba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn0pO1xuXG5mdW5jdGlvbiBhcHBlbmRFbGVtZW50KGhhbmRlciwgbm9kZSkge1xuICBpZiAoIWhhbmRlci5jdXJyZW50RWxlbWVudCkge1xuICAgIGhhbmRlci5kb2MuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgaGFuZGVyLmN1cnJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICB9XG59XG5cbnZhciBodG1sRW50aXR5ID0gcmVxdWlyZSgnLi9lbnRpdGllcycpO1xuXG52YXIgWE1MUmVhZGVyID0gcmVxdWlyZSgnLi9zYXgnKS5YTUxSZWFkZXI7XG5cbnZhciBET01JbXBsZW1lbnRhdGlvbiA9IGV4cG9ydHMuRE9NSW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2RvbScpLkRPTUltcGxlbWVudGF0aW9uO1xuXG5leHBvcnRzLlhNTFNlcmlhbGl6ZXIgPSByZXF1aXJlKCcuL2RvbScpLlhNTFNlcmlhbGl6ZXI7XG5leHBvcnRzLkRPTVBhcnNlciA9IERPTVBhcnNlcjtcblxufSx7XCIuL2RvbVwiOjU3LFwiLi9lbnRpdGllc1wiOjU4LFwiLi9zYXhcIjo1OX1dLDU3OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIGNvcHkoc3JjLCBkZXN0KSB7XG4gIGZvciAodmFyIHAgaW4gc3JjKSB7XG4gICAgZGVzdFtwXSA9IHNyY1twXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcyhDbGFzcywgU3VwZXIpIHtcbiAgdmFyIHB0ID0gQ2xhc3MucHJvdG90eXBlO1xuXG4gIGlmICghKHB0IGluc3RhbmNlb2YgU3VwZXIpKSB7XG4gICAgdmFyIHQgPSBmdW5jdGlvbiB0KCkge307XG5cbiAgICA7XG4gICAgdC5wcm90b3R5cGUgPSBTdXBlci5wcm90b3R5cGU7XG4gICAgdCA9IG5ldyB0KCk7XG4gICAgY29weShwdCwgdCk7XG4gICAgQ2xhc3MucHJvdG90eXBlID0gcHQgPSB0O1xuICB9XG5cbiAgaWYgKHB0LmNvbnN0cnVjdG9yICE9IENsYXNzKSB7XG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwidW5rbm93IENsYXNzOlwiICsgQ2xhc3MpO1xuICAgIH1cblxuICAgIHB0LmNvbnN0cnVjdG9yID0gQ2xhc3M7XG4gIH1cbn1cblxudmFyIGh0bWxucyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbnZhciBOb2RlVHlwZSA9IHt9O1xudmFyIEVMRU1FTlRfTk9ERSA9IE5vZGVUeXBlLkVMRU1FTlRfTk9ERSA9IDE7XG52YXIgQVRUUklCVVRFX05PREUgPSBOb2RlVHlwZS5BVFRSSUJVVEVfTk9ERSA9IDI7XG52YXIgVEVYVF9OT0RFID0gTm9kZVR5cGUuVEVYVF9OT0RFID0gMztcbnZhciBDREFUQV9TRUNUSU9OX05PREUgPSBOb2RlVHlwZS5DREFUQV9TRUNUSU9OX05PREUgPSA0O1xudmFyIEVOVElUWV9SRUZFUkVOQ0VfTk9ERSA9IE5vZGVUeXBlLkVOVElUWV9SRUZFUkVOQ0VfTk9ERSA9IDU7XG52YXIgRU5USVRZX05PREUgPSBOb2RlVHlwZS5FTlRJVFlfTk9ERSA9IDY7XG52YXIgUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFID0gTm9kZVR5cGUuUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFID0gNztcbnZhciBDT01NRU5UX05PREUgPSBOb2RlVHlwZS5DT01NRU5UX05PREUgPSA4O1xudmFyIERPQ1VNRU5UX05PREUgPSBOb2RlVHlwZS5ET0NVTUVOVF9OT0RFID0gOTtcbnZhciBET0NVTUVOVF9UWVBFX05PREUgPSBOb2RlVHlwZS5ET0NVTUVOVF9UWVBFX05PREUgPSAxMDtcbnZhciBET0NVTUVOVF9GUkFHTUVOVF9OT0RFID0gTm9kZVR5cGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSA9IDExO1xudmFyIE5PVEFUSU9OX05PREUgPSBOb2RlVHlwZS5OT1RBVElPTl9OT0RFID0gMTI7XG52YXIgRXhjZXB0aW9uQ29kZSA9IHt9O1xudmFyIEV4Y2VwdGlvbk1lc3NhZ2UgPSB7fTtcbnZhciBJTkRFWF9TSVpFX0VSUiA9IEV4Y2VwdGlvbkNvZGUuSU5ERVhfU0laRV9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxXSA9IFwiSW5kZXggc2l6ZSBlcnJvclwiLCAxKTtcbnZhciBET01TVFJJTkdfU0laRV9FUlIgPSBFeGNlcHRpb25Db2RlLkRPTVNUUklOR19TSVpFX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzJdID0gXCJET01TdHJpbmcgc2l6ZSBlcnJvclwiLCAyKTtcbnZhciBISUVSQVJDSFlfUkVRVUVTVF9FUlIgPSBFeGNlcHRpb25Db2RlLkhJRVJBUkNIWV9SRVFVRVNUX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzNdID0gXCJIaWVyYXJjaHkgcmVxdWVzdCBlcnJvclwiLCAzKTtcbnZhciBXUk9OR19ET0NVTUVOVF9FUlIgPSBFeGNlcHRpb25Db2RlLldST05HX0RPQ1VNRU5UX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzRdID0gXCJXcm9uZyBkb2N1bWVudFwiLCA0KTtcbnZhciBJTlZBTElEX0NIQVJBQ1RFUl9FUlIgPSBFeGNlcHRpb25Db2RlLklOVkFMSURfQ0hBUkFDVEVSX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzVdID0gXCJJbnZhbGlkIGNoYXJhY3RlclwiLCA1KTtcbnZhciBOT19EQVRBX0FMTE9XRURfRVJSID0gRXhjZXB0aW9uQ29kZS5OT19EQVRBX0FMTE9XRURfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbNl0gPSBcIk5vIGRhdGEgYWxsb3dlZFwiLCA2KTtcbnZhciBOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlIgPSBFeGNlcHRpb25Db2RlLk5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUiA9IChFeGNlcHRpb25NZXNzYWdlWzddID0gXCJObyBtb2RpZmljYXRpb24gYWxsb3dlZFwiLCA3KTtcbnZhciBOT1RfRk9VTkRfRVJSID0gRXhjZXB0aW9uQ29kZS5OT1RfRk9VTkRfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbOF0gPSBcIk5vdCBmb3VuZFwiLCA4KTtcbnZhciBOT1RfU1VQUE9SVEVEX0VSUiA9IEV4Y2VwdGlvbkNvZGUuTk9UX1NVUFBPUlRFRF9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVs5XSA9IFwiTm90IHN1cHBvcnRlZFwiLCA5KTtcbnZhciBJTlVTRV9BVFRSSUJVVEVfRVJSID0gRXhjZXB0aW9uQ29kZS5JTlVTRV9BVFRSSUJVVEVfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbMTBdID0gXCJBdHRyaWJ1dGUgaW4gdXNlXCIsIDEwKTtcbnZhciBJTlZBTElEX1NUQVRFX0VSUiA9IEV4Y2VwdGlvbkNvZGUuSU5WQUxJRF9TVEFURV9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxMV0gPSBcIkludmFsaWQgc3RhdGVcIiwgMTEpO1xudmFyIFNZTlRBWF9FUlIgPSBFeGNlcHRpb25Db2RlLlNZTlRBWF9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxMl0gPSBcIlN5bnRheCBlcnJvclwiLCAxMik7XG52YXIgSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSID0gRXhjZXB0aW9uQ29kZS5JTlZBTElEX01PRElGSUNBVElPTl9FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxM10gPSBcIkludmFsaWQgbW9kaWZpY2F0aW9uXCIsIDEzKTtcbnZhciBOQU1FU1BBQ0VfRVJSID0gRXhjZXB0aW9uQ29kZS5OQU1FU1BBQ0VfRVJSID0gKEV4Y2VwdGlvbk1lc3NhZ2VbMTRdID0gXCJJbnZhbGlkIG5hbWVzcGFjZVwiLCAxNCk7XG52YXIgSU5WQUxJRF9BQ0NFU1NfRVJSID0gRXhjZXB0aW9uQ29kZS5JTlZBTElEX0FDQ0VTU19FUlIgPSAoRXhjZXB0aW9uTWVzc2FnZVsxNV0gPSBcIkludmFsaWQgYWNjZXNzXCIsIDE1KTtcblxuZnVuY3Rpb24gRE9NRXhjZXB0aW9uKGNvZGUsIG1lc3NhZ2UpIHtcbiAgaWYgKG1lc3NhZ2UgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIHZhciBlcnJvciA9IG1lc3NhZ2U7XG4gIH0gZWxzZSB7XG4gICAgZXJyb3IgPSB0aGlzO1xuICAgIEVycm9yLmNhbGwodGhpcywgRXhjZXB0aW9uTWVzc2FnZVtjb2RlXSk7XG4gICAgdGhpcy5tZXNzYWdlID0gRXhjZXB0aW9uTWVzc2FnZVtjb2RlXTtcbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIERPTUV4Y2VwdGlvbik7XG4gIH1cblxuICBlcnJvci5jb2RlID0gY29kZTtcbiAgaWYgKG1lc3NhZ2UpIHRoaXMubWVzc2FnZSA9IHRoaXMubWVzc2FnZSArIFwiOiBcIiArIG1lc3NhZ2U7XG4gIHJldHVybiBlcnJvcjtcbn1cblxuO1xuRE9NRXhjZXB0aW9uLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcbmNvcHkoRXhjZXB0aW9uQ29kZSwgRE9NRXhjZXB0aW9uKTtcblxuZnVuY3Rpb24gTm9kZUxpc3QoKSB7fVxuXG47XG5Ob2RlTGlzdC5wcm90b3R5cGUgPSB7XG4gIGxlbmd0aDogMCxcbiAgaXRlbTogZnVuY3Rpb24gaXRlbShpbmRleCkge1xuICAgIHJldHVybiB0aGlzW2luZGV4XSB8fCBudWxsO1xuICB9LFxuICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoaXNIVE1MLCBub2RlRmlsdGVyKSB7XG4gICAgZm9yICh2YXIgYnVmID0gW10sIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgc2VyaWFsaXplVG9TdHJpbmcodGhpc1tpXSwgYnVmLCBpc0hUTUwsIG5vZGVGaWx0ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBidWYuam9pbignJyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIExpdmVOb2RlTGlzdChub2RlLCByZWZyZXNoKSB7XG4gIHRoaXMuX25vZGUgPSBub2RlO1xuICB0aGlzLl9yZWZyZXNoID0gcmVmcmVzaDtcblxuICBfdXBkYXRlTGl2ZUxpc3QodGhpcyk7XG59XG5cbmZ1bmN0aW9uIF91cGRhdGVMaXZlTGlzdChsaXN0KSB7XG4gIHZhciBpbmMgPSBsaXN0Ll9ub2RlLl9pbmMgfHwgbGlzdC5fbm9kZS5vd25lckRvY3VtZW50Ll9pbmM7XG5cbiAgaWYgKGxpc3QuX2luYyAhPSBpbmMpIHtcbiAgICB2YXIgbHMgPSBsaXN0Ll9yZWZyZXNoKGxpc3QuX25vZGUpO1xuXG4gICAgX19zZXRfXyhsaXN0LCAnbGVuZ3RoJywgbHMubGVuZ3RoKTtcblxuICAgIGNvcHkobHMsIGxpc3QpO1xuICAgIGxpc3QuX2luYyA9IGluYztcbiAgfVxufVxuXG5MaXZlTm9kZUxpc3QucHJvdG90eXBlLml0ZW0gPSBmdW5jdGlvbiAoaSkge1xuICBfdXBkYXRlTGl2ZUxpc3QodGhpcyk7XG5cbiAgcmV0dXJuIHRoaXNbaV07XG59O1xuXG5fZXh0ZW5kcyhMaXZlTm9kZUxpc3QsIE5vZGVMaXN0KTtcblxuZnVuY3Rpb24gTmFtZWROb2RlTWFwKCkge31cblxuO1xuXG5mdW5jdGlvbiBfZmluZE5vZGVJbmRleChsaXN0LCBub2RlKSB7XG4gIHZhciBpID0gbGlzdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGlmIChsaXN0W2ldID09PSBub2RlKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FkZE5hbWVkTm9kZShlbCwgbGlzdCwgbmV3QXR0ciwgb2xkQXR0cikge1xuICBpZiAob2xkQXR0cikge1xuICAgIGxpc3RbX2ZpbmROb2RlSW5kZXgobGlzdCwgb2xkQXR0cildID0gbmV3QXR0cjtcbiAgfSBlbHNlIHtcbiAgICBsaXN0W2xpc3QubGVuZ3RoKytdID0gbmV3QXR0cjtcbiAgfVxuXG4gIGlmIChlbCkge1xuICAgIG5ld0F0dHIub3duZXJFbGVtZW50ID0gZWw7XG4gICAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG5cbiAgICBpZiAoZG9jKSB7XG4gICAgICBvbGRBdHRyICYmIF9vblJlbW92ZUF0dHJpYnV0ZShkb2MsIGVsLCBvbGRBdHRyKTtcblxuICAgICAgX29uQWRkQXR0cmlidXRlKGRvYywgZWwsIG5ld0F0dHIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfcmVtb3ZlTmFtZWROb2RlKGVsLCBsaXN0LCBhdHRyKSB7XG4gIHZhciBpID0gX2ZpbmROb2RlSW5kZXgobGlzdCwgYXR0cik7XG5cbiAgaWYgKGkgPj0gMCkge1xuICAgIHZhciBsYXN0SW5kZXggPSBsaXN0Lmxlbmd0aCAtIDE7XG5cbiAgICB3aGlsZSAoaSA8IGxhc3RJbmRleCkge1xuICAgICAgbGlzdFtpXSA9IGxpc3RbKytpXTtcbiAgICB9XG5cbiAgICBsaXN0Lmxlbmd0aCA9IGxhc3RJbmRleDtcblxuICAgIGlmIChlbCkge1xuICAgICAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG5cbiAgICAgIGlmIChkb2MpIHtcbiAgICAgICAgX29uUmVtb3ZlQXR0cmlidXRlKGRvYywgZWwsIGF0dHIpO1xuXG4gICAgICAgIGF0dHIub3duZXJFbGVtZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRE9NRXhjZXB0aW9uKE5PVF9GT1VORF9FUlIsIG5ldyBFcnJvcihlbC50YWdOYW1lICsgJ0AnICsgYXR0cikpO1xuICB9XG59XG5cbk5hbWVkTm9kZU1hcC5wcm90b3R5cGUgPSB7XG4gIGxlbmd0aDogMCxcbiAgaXRlbTogTm9kZUxpc3QucHJvdG90eXBlLml0ZW0sXG4gIGdldE5hbWVkSXRlbTogZnVuY3Rpb24gZ2V0TmFtZWRJdGVtKGtleSkge1xuICAgIHZhciBpID0gdGhpcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgYXR0ciA9IHRoaXNbaV07XG5cbiAgICAgIGlmIChhdHRyLm5vZGVOYW1lID09IGtleSkge1xuICAgICAgICByZXR1cm4gYXR0cjtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNldE5hbWVkSXRlbTogZnVuY3Rpb24gc2V0TmFtZWRJdGVtKGF0dHIpIHtcbiAgICB2YXIgZWwgPSBhdHRyLm93bmVyRWxlbWVudDtcblxuICAgIGlmIChlbCAmJiBlbCAhPSB0aGlzLl9vd25lckVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oSU5VU0VfQVRUUklCVVRFX0VSUik7XG4gICAgfVxuXG4gICAgdmFyIG9sZEF0dHIgPSB0aGlzLmdldE5hbWVkSXRlbShhdHRyLm5vZGVOYW1lKTtcblxuICAgIF9hZGROYW1lZE5vZGUodGhpcy5fb3duZXJFbGVtZW50LCB0aGlzLCBhdHRyLCBvbGRBdHRyKTtcblxuICAgIHJldHVybiBvbGRBdHRyO1xuICB9LFxuICBzZXROYW1lZEl0ZW1OUzogZnVuY3Rpb24gc2V0TmFtZWRJdGVtTlMoYXR0cikge1xuICAgIHZhciBlbCA9IGF0dHIub3duZXJFbGVtZW50LFxuICAgICAgICBvbGRBdHRyO1xuXG4gICAgaWYgKGVsICYmIGVsICE9IHRoaXMuX293bmVyRWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihJTlVTRV9BVFRSSUJVVEVfRVJSKTtcbiAgICB9XG5cbiAgICBvbGRBdHRyID0gdGhpcy5nZXROYW1lZEl0ZW1OUyhhdHRyLm5hbWVzcGFjZVVSSSwgYXR0ci5sb2NhbE5hbWUpO1xuXG4gICAgX2FkZE5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsIHRoaXMsIGF0dHIsIG9sZEF0dHIpO1xuXG4gICAgcmV0dXJuIG9sZEF0dHI7XG4gIH0sXG4gIHJlbW92ZU5hbWVkSXRlbTogZnVuY3Rpb24gcmVtb3ZlTmFtZWRJdGVtKGtleSkge1xuICAgIHZhciBhdHRyID0gdGhpcy5nZXROYW1lZEl0ZW0oa2V5KTtcblxuICAgIF9yZW1vdmVOYW1lZE5vZGUodGhpcy5fb3duZXJFbGVtZW50LCB0aGlzLCBhdHRyKTtcblxuICAgIHJldHVybiBhdHRyO1xuICB9LFxuICByZW1vdmVOYW1lZEl0ZW1OUzogZnVuY3Rpb24gcmVtb3ZlTmFtZWRJdGVtTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcbiAgICB2YXIgYXR0ciA9IHRoaXMuZ2V0TmFtZWRJdGVtTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpO1xuXG4gICAgX3JlbW92ZU5hbWVkTm9kZSh0aGlzLl9vd25lckVsZW1lbnQsIHRoaXMsIGF0dHIpO1xuXG4gICAgcmV0dXJuIGF0dHI7XG4gIH0sXG4gIGdldE5hbWVkSXRlbU5TOiBmdW5jdGlvbiBnZXROYW1lZEl0ZW1OUyhuYW1lc3BhY2VVUkksIGxvY2FsTmFtZSkge1xuICAgIHZhciBpID0gdGhpcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgbm9kZSA9IHRoaXNbaV07XG5cbiAgICAgIGlmIChub2RlLmxvY2FsTmFtZSA9PSBsb2NhbE5hbWUgJiYgbm9kZS5uYW1lc3BhY2VVUkkgPT0gbmFtZXNwYWNlVVJJKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5mdW5jdGlvbiBET01JbXBsZW1lbnRhdGlvbihmZWF0dXJlcykge1xuICB0aGlzLl9mZWF0dXJlcyA9IHt9O1xuXG4gIGlmIChmZWF0dXJlcykge1xuICAgIGZvciAodmFyIGZlYXR1cmUgaW4gZmVhdHVyZXMpIHtcbiAgICAgIHRoaXMuX2ZlYXR1cmVzID0gZmVhdHVyZXNbZmVhdHVyZV07XG4gICAgfVxuICB9XG59XG5cbjtcbkRPTUltcGxlbWVudGF0aW9uLnByb3RvdHlwZSA9IHtcbiAgaGFzRmVhdHVyZTogZnVuY3Rpb24gaGFzRmVhdHVyZShmZWF0dXJlLCB2ZXJzaW9uKSB7XG4gICAgdmFyIHZlcnNpb25zID0gdGhpcy5fZmVhdHVyZXNbZmVhdHVyZS50b0xvd2VyQ2FzZSgpXTtcblxuICAgIGlmICh2ZXJzaW9ucyAmJiAoIXZlcnNpb24gfHwgdmVyc2lvbiBpbiB2ZXJzaW9ucykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LFxuICBjcmVhdGVEb2N1bWVudDogZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnQobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCBkb2N0eXBlKSB7XG4gICAgdmFyIGRvYyA9IG5ldyBEb2N1bWVudCgpO1xuICAgIGRvYy5pbXBsZW1lbnRhdGlvbiA9IHRoaXM7XG4gICAgZG9jLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcbiAgICBkb2MuZG9jdHlwZSA9IGRvY3R5cGU7XG5cbiAgICBpZiAoZG9jdHlwZSkge1xuICAgICAgZG9jLmFwcGVuZENoaWxkKGRvY3R5cGUpO1xuICAgIH1cblxuICAgIGlmIChxdWFsaWZpZWROYW1lKSB7XG4gICAgICB2YXIgcm9vdCA9IGRvYy5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lKTtcbiAgICAgIGRvYy5hcHBlbmRDaGlsZChyb290KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZG9jO1xuICB9LFxuICBjcmVhdGVEb2N1bWVudFR5cGU6IGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50VHlwZShxdWFsaWZpZWROYW1lLCBwdWJsaWNJZCwgc3lzdGVtSWQpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBEb2N1bWVudFR5cGUoKTtcbiAgICBub2RlLm5hbWUgPSBxdWFsaWZpZWROYW1lO1xuICAgIG5vZGUubm9kZU5hbWUgPSBxdWFsaWZpZWROYW1lO1xuICAgIG5vZGUucHVibGljSWQgPSBwdWJsaWNJZDtcbiAgICBub2RlLnN5c3RlbUlkID0gc3lzdGVtSWQ7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIE5vZGUoKSB7fVxuXG47XG5Ob2RlLnByb3RvdHlwZSA9IHtcbiAgZmlyc3RDaGlsZDogbnVsbCxcbiAgbGFzdENoaWxkOiBudWxsLFxuICBwcmV2aW91c1NpYmxpbmc6IG51bGwsXG4gIG5leHRTaWJsaW5nOiBudWxsLFxuICBhdHRyaWJ1dGVzOiBudWxsLFxuICBwYXJlbnROb2RlOiBudWxsLFxuICBjaGlsZE5vZGVzOiBudWxsLFxuICBvd25lckRvY3VtZW50OiBudWxsLFxuICBub2RlVmFsdWU6IG51bGwsXG4gIG5hbWVzcGFjZVVSSTogbnVsbCxcbiAgcHJlZml4OiBudWxsLFxuICBsb2NhbE5hbWU6IG51bGwsXG4gIGluc2VydEJlZm9yZTogZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCByZWZDaGlsZCkge1xuICAgIHJldHVybiBfaW5zZXJ0QmVmb3JlKHRoaXMsIG5ld0NoaWxkLCByZWZDaGlsZCk7XG4gIH0sXG4gIHJlcGxhY2VDaGlsZDogZnVuY3Rpb24gcmVwbGFjZUNoaWxkKG5ld0NoaWxkLCBvbGRDaGlsZCkge1xuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCBvbGRDaGlsZCk7XG5cbiAgICBpZiAob2xkQ2hpbGQpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2hpbGQob2xkQ2hpbGQpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlQ2hpbGQ6IGZ1bmN0aW9uIHJlbW92ZUNoaWxkKG9sZENoaWxkKSB7XG4gICAgcmV0dXJuIF9yZW1vdmVDaGlsZCh0aGlzLCBvbGRDaGlsZCk7XG4gIH0sXG4gIGFwcGVuZENoaWxkOiBmdW5jdGlvbiBhcHBlbmRDaGlsZChuZXdDaGlsZCkge1xuICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShuZXdDaGlsZCwgbnVsbCk7XG4gIH0sXG4gIGhhc0NoaWxkTm9kZXM6IGZ1bmN0aW9uIGhhc0NoaWxkTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RDaGlsZCAhPSBudWxsO1xuICB9LFxuICBjbG9uZU5vZGU6IGZ1bmN0aW9uIGNsb25lTm9kZShkZWVwKSB7XG4gICAgcmV0dXJuIF9jbG9uZU5vZGUodGhpcy5vd25lckRvY3VtZW50IHx8IHRoaXMsIHRoaXMsIGRlZXApO1xuICB9LFxuICBub3JtYWxpemU6IGZ1bmN0aW9uIG5vcm1hbGl6ZSgpIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzLmZpcnN0Q2hpbGQ7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgIGlmIChuZXh0ICYmIG5leHQubm9kZVR5cGUgPT0gVEVYVF9OT0RFICYmIGNoaWxkLm5vZGVUeXBlID09IFRFWFRfTk9ERSkge1xuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKG5leHQpO1xuICAgICAgICBjaGlsZC5hcHBlbmREYXRhKG5leHQuZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC5ub3JtYWxpemUoKTtcbiAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgaXNTdXBwb3J0ZWQ6IGZ1bmN0aW9uIGlzU3VwcG9ydGVkKGZlYXR1cmUsIHZlcnNpb24pIHtcbiAgICByZXR1cm4gdGhpcy5vd25lckRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoZmVhdHVyZSwgdmVyc2lvbik7XG4gIH0sXG4gIGhhc0F0dHJpYnV0ZXM6IGZ1bmN0aW9uIGhhc0F0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlcy5sZW5ndGggPiAwO1xuICB9LFxuICBsb29rdXBQcmVmaXg6IGZ1bmN0aW9uIGxvb2t1cFByZWZpeChuYW1lc3BhY2VVUkkpIHtcbiAgICB2YXIgZWwgPSB0aGlzO1xuXG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICB2YXIgbWFwID0gZWwuX25zTWFwO1xuXG4gICAgICBpZiAobWFwKSB7XG4gICAgICAgIGZvciAodmFyIG4gaW4gbWFwKSB7XG4gICAgICAgICAgaWYgKG1hcFtuXSA9PSBuYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlbCA9IGVsLm5vZGVUeXBlID09IEFUVFJJQlVURV9OT0RFID8gZWwub3duZXJEb2N1bWVudCA6IGVsLnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIGxvb2t1cE5hbWVzcGFjZVVSSTogZnVuY3Rpb24gbG9va3VwTmFtZXNwYWNlVVJJKHByZWZpeCkge1xuICAgIHZhciBlbCA9IHRoaXM7XG5cbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgIHZhciBtYXAgPSBlbC5fbnNNYXA7XG5cbiAgICAgIGlmIChtYXApIHtcbiAgICAgICAgaWYgKHByZWZpeCBpbiBtYXApIHtcbiAgICAgICAgICByZXR1cm4gbWFwW3ByZWZpeF07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWwgPSBlbC5ub2RlVHlwZSA9PSBBVFRSSUJVVEVfTk9ERSA/IGVsLm93bmVyRG9jdW1lbnQgOiBlbC5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBpc0RlZmF1bHROYW1lc3BhY2U6IGZ1bmN0aW9uIGlzRGVmYXVsdE5hbWVzcGFjZShuYW1lc3BhY2VVUkkpIHtcbiAgICB2YXIgcHJlZml4ID0gdGhpcy5sb29rdXBQcmVmaXgobmFtZXNwYWNlVVJJKTtcbiAgICByZXR1cm4gcHJlZml4ID09IG51bGw7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIF94bWxFbmNvZGVyKGMpIHtcbiAgcmV0dXJuIGMgPT0gJzwnICYmICcmbHQ7JyB8fCBjID09ICc+JyAmJiAnJmd0OycgfHwgYyA9PSAnJicgJiYgJyZhbXA7JyB8fCBjID09ICdcIicgJiYgJyZxdW90OycgfHwgJyYjJyArIGMuY2hhckNvZGVBdCgpICsgJzsnO1xufVxuXG5jb3B5KE5vZGVUeXBlLCBOb2RlKTtcbmNvcHkoTm9kZVR5cGUsIE5vZGUucHJvdG90eXBlKTtcblxuZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sobm9kZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChub2RlID0gbm9kZS5maXJzdENoaWxkKSB7XG4gICAgZG8ge1xuICAgICAgaWYgKF92aXNpdE5vZGUobm9kZSwgY2FsbGJhY2spKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gd2hpbGUgKG5vZGUgPSBub2RlLm5leHRTaWJsaW5nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBEb2N1bWVudCgpIHt9XG5cbmZ1bmN0aW9uIF9vbkFkZEF0dHJpYnV0ZShkb2MsIGVsLCBuZXdBdHRyKSB7XG4gIGRvYyAmJiBkb2MuX2luYysrO1xuICB2YXIgbnMgPSBuZXdBdHRyLm5hbWVzcGFjZVVSSTtcblxuICBpZiAobnMgPT0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJykge1xuICAgIGVsLl9uc01hcFtuZXdBdHRyLnByZWZpeCA/IG5ld0F0dHIubG9jYWxOYW1lIDogJyddID0gbmV3QXR0ci52YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25SZW1vdmVBdHRyaWJ1dGUoZG9jLCBlbCwgbmV3QXR0ciwgcmVtb3ZlKSB7XG4gIGRvYyAmJiBkb2MuX2luYysrO1xuICB2YXIgbnMgPSBuZXdBdHRyLm5hbWVzcGFjZVVSSTtcblxuICBpZiAobnMgPT0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJykge1xuICAgIGRlbGV0ZSBlbC5fbnNNYXBbbmV3QXR0ci5wcmVmaXggPyBuZXdBdHRyLmxvY2FsTmFtZSA6ICcnXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25VcGRhdGVDaGlsZChkb2MsIGVsLCBuZXdDaGlsZCkge1xuICBpZiAoZG9jICYmIGRvYy5faW5jKSB7XG4gICAgZG9jLl9pbmMrKztcbiAgICB2YXIgY3MgPSBlbC5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKG5ld0NoaWxkKSB7XG4gICAgICBjc1tjcy5sZW5ndGgrK10gPSBuZXdDaGlsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNoaWxkID0gZWwuZmlyc3RDaGlsZDtcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIGNzW2krK10gPSBjaGlsZDtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cblxuICAgICAgY3MubGVuZ3RoID0gaTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX3JlbW92ZUNoaWxkKHBhcmVudE5vZGUsIGNoaWxkKSB7XG4gIHZhciBwcmV2aW91cyA9IGNoaWxkLnByZXZpb3VzU2libGluZztcbiAgdmFyIG5leHQgPSBjaGlsZC5uZXh0U2libGluZztcblxuICBpZiAocHJldmlvdXMpIHtcbiAgICBwcmV2aW91cy5uZXh0U2libGluZyA9IG5leHQ7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50Tm9kZS5maXJzdENoaWxkID0gbmV4dDtcbiAgfVxuXG4gIGlmIChuZXh0KSB7XG4gICAgbmV4dC5wcmV2aW91c1NpYmxpbmcgPSBwcmV2aW91cztcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnROb2RlLmxhc3RDaGlsZCA9IHByZXZpb3VzO1xuICB9XG5cbiAgX29uVXBkYXRlQ2hpbGQocGFyZW50Tm9kZS5vd25lckRvY3VtZW50LCBwYXJlbnROb2RlKTtcblxuICByZXR1cm4gY2hpbGQ7XG59XG5cbmZ1bmN0aW9uIF9pbnNlcnRCZWZvcmUocGFyZW50Tm9kZSwgbmV3Q2hpbGQsIG5leHRDaGlsZCkge1xuICB2YXIgY3AgPSBuZXdDaGlsZC5wYXJlbnROb2RlO1xuXG4gIGlmIChjcCkge1xuICAgIGNwLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgfVxuXG4gIGlmIChuZXdDaGlsZC5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgIHZhciBuZXdGaXJzdCA9IG5ld0NoaWxkLmZpcnN0Q2hpbGQ7XG5cbiAgICBpZiAobmV3Rmlyc3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0ID0gbmV3Q2hpbGQubGFzdENoaWxkO1xuICB9IGVsc2Uge1xuICAgIG5ld0ZpcnN0ID0gbmV3TGFzdCA9IG5ld0NoaWxkO1xuICB9XG5cbiAgdmFyIHByZSA9IG5leHRDaGlsZCA/IG5leHRDaGlsZC5wcmV2aW91c1NpYmxpbmcgOiBwYXJlbnROb2RlLmxhc3RDaGlsZDtcbiAgbmV3Rmlyc3QucHJldmlvdXNTaWJsaW5nID0gcHJlO1xuICBuZXdMYXN0Lm5leHRTaWJsaW5nID0gbmV4dENoaWxkO1xuXG4gIGlmIChwcmUpIHtcbiAgICBwcmUubmV4dFNpYmxpbmcgPSBuZXdGaXJzdDtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnROb2RlLmZpcnN0Q2hpbGQgPSBuZXdGaXJzdDtcbiAgfVxuXG4gIGlmIChuZXh0Q2hpbGQgPT0gbnVsbCkge1xuICAgIHBhcmVudE5vZGUubGFzdENoaWxkID0gbmV3TGFzdDtcbiAgfSBlbHNlIHtcbiAgICBuZXh0Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gbmV3TGFzdDtcbiAgfVxuXG4gIGRvIHtcbiAgICBuZXdGaXJzdC5wYXJlbnROb2RlID0gcGFyZW50Tm9kZTtcbiAgfSB3aGlsZSAobmV3Rmlyc3QgIT09IG5ld0xhc3QgJiYgKG5ld0ZpcnN0ID0gbmV3Rmlyc3QubmV4dFNpYmxpbmcpKTtcblxuICBfb25VcGRhdGVDaGlsZChwYXJlbnROb2RlLm93bmVyRG9jdW1lbnQgfHwgcGFyZW50Tm9kZSwgcGFyZW50Tm9kZSk7XG5cbiAgaWYgKG5ld0NoaWxkLm5vZGVUeXBlID09IERPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICBuZXdDaGlsZC5maXJzdENoaWxkID0gbmV3Q2hpbGQubGFzdENoaWxkID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBuZXdDaGlsZDtcbn1cblxuZnVuY3Rpb24gX2FwcGVuZFNpbmdsZUNoaWxkKHBhcmVudE5vZGUsIG5ld0NoaWxkKSB7XG4gIHZhciBjcCA9IG5ld0NoaWxkLnBhcmVudE5vZGU7XG5cbiAgaWYgKGNwKSB7XG4gICAgdmFyIHByZSA9IHBhcmVudE5vZGUubGFzdENoaWxkO1xuICAgIGNwLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICB2YXIgcHJlID0gcGFyZW50Tm9kZS5sYXN0Q2hpbGQ7XG4gIH1cblxuICB2YXIgcHJlID0gcGFyZW50Tm9kZS5sYXN0Q2hpbGQ7XG4gIG5ld0NoaWxkLnBhcmVudE5vZGUgPSBwYXJlbnROb2RlO1xuICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBwcmU7XG4gIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gbnVsbDtcblxuICBpZiAocHJlKSB7XG4gICAgcHJlLm5leHRTaWJsaW5nID0gbmV3Q2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50Tm9kZS5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG4gIH1cblxuICBwYXJlbnROb2RlLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xuXG4gIF9vblVwZGF0ZUNoaWxkKHBhcmVudE5vZGUub3duZXJEb2N1bWVudCwgcGFyZW50Tm9kZSwgbmV3Q2hpbGQpO1xuXG4gIHJldHVybiBuZXdDaGlsZDtcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlID0ge1xuICBub2RlTmFtZTogJyNkb2N1bWVudCcsXG4gIG5vZGVUeXBlOiBET0NVTUVOVF9OT0RFLFxuICBkb2N0eXBlOiBudWxsLFxuICBkb2N1bWVudEVsZW1lbnQ6IG51bGwsXG4gIF9pbmM6IDEsXG4gIGluc2VydEJlZm9yZTogZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCByZWZDaGlsZCkge1xuICAgIGlmIChuZXdDaGlsZC5ub2RlVHlwZSA9PSBET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICB2YXIgY2hpbGQgPSBuZXdDaGlsZC5maXJzdENoaWxkO1xuXG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgdmFyIG5leHQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgdGhpcy5pbnNlcnRCZWZvcmUoY2hpbGQsIHJlZkNoaWxkKTtcbiAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZG9jdW1lbnRFbGVtZW50ID09IG51bGwgJiYgbmV3Q2hpbGQubm9kZVR5cGUgPT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICB0aGlzLmRvY3VtZW50RWxlbWVudCA9IG5ld0NoaWxkO1xuICAgIH1cblxuICAgIHJldHVybiBfaW5zZXJ0QmVmb3JlKHRoaXMsIG5ld0NoaWxkLCByZWZDaGlsZCksIG5ld0NoaWxkLm93bmVyRG9jdW1lbnQgPSB0aGlzLCBuZXdDaGlsZDtcbiAgfSxcbiAgcmVtb3ZlQ2hpbGQ6IGZ1bmN0aW9uIHJlbW92ZUNoaWxkKG9sZENoaWxkKSB7XG4gICAgaWYgKHRoaXMuZG9jdW1lbnRFbGVtZW50ID09IG9sZENoaWxkKSB7XG4gICAgICB0aGlzLmRvY3VtZW50RWxlbWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZW1vdmVDaGlsZCh0aGlzLCBvbGRDaGlsZCk7XG4gIH0sXG4gIGltcG9ydE5vZGU6IGZ1bmN0aW9uIGltcG9ydE5vZGUoaW1wb3J0ZWROb2RlLCBkZWVwKSB7XG4gICAgcmV0dXJuIF9pbXBvcnROb2RlKHRoaXMsIGltcG9ydGVkTm9kZSwgZGVlcCk7XG4gIH0sXG4gIGdldEVsZW1lbnRCeUlkOiBmdW5jdGlvbiBnZXRFbGVtZW50QnlJZChpZCkge1xuICAgIHZhciBydHYgPSBudWxsO1xuXG4gICAgX3Zpc2l0Tm9kZSh0aGlzLmRvY3VtZW50RWxlbWVudCwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykgPT0gaWQpIHtcbiAgICAgICAgICBydHYgPSBub2RlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcnR2O1xuICB9LFxuICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWUpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBFbGVtZW50KCk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLm5vZGVOYW1lID0gdGFnTmFtZTtcbiAgICBub2RlLnRhZ05hbWUgPSB0YWdOYW1lO1xuICAgIG5vZGUuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuICAgIHZhciBhdHRycyA9IG5vZGUuYXR0cmlidXRlcyA9IG5ldyBOYW1lZE5vZGVNYXAoKTtcbiAgICBhdHRycy5fb3duZXJFbGVtZW50ID0gbm9kZTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlRG9jdW1lbnRGcmFnbWVudDogZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlVGV4dE5vZGU6IGZ1bmN0aW9uIGNyZWF0ZVRleHROb2RlKGRhdGEpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBUZXh0KCk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLmFwcGVuZERhdGEoZGF0YSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIGNyZWF0ZUNvbW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQoZGF0YSkge1xuICAgIHZhciBub2RlID0gbmV3IENvbW1lbnQoKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUuYXBwZW5kRGF0YShkYXRhKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlQ0RBVEFTZWN0aW9uOiBmdW5jdGlvbiBjcmVhdGVDREFUQVNlY3Rpb24oZGF0YSkge1xuICAgIHZhciBub2RlID0gbmV3IENEQVRBU2VjdGlvbigpO1xuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG4gICAgbm9kZS5hcHBlbmREYXRhKGRhdGEpO1xuICAgIHJldHVybiBub2RlO1xuICB9LFxuICBjcmVhdGVQcm9jZXNzaW5nSW5zdHJ1Y3Rpb246IGZ1bmN0aW9uIGNyZWF0ZVByb2Nlc3NpbmdJbnN0cnVjdGlvbih0YXJnZXQsIGRhdGEpIHtcbiAgICB2YXIgbm9kZSA9IG5ldyBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUudGFnTmFtZSA9IG5vZGUudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIG5vZGUubm9kZVZhbHVlID0gbm9kZS5kYXRhID0gZGF0YTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlQXR0cmlidXRlOiBmdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGUobmFtZSkge1xuICAgIHZhciBub2RlID0gbmV3IEF0dHIoKTtcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSB0aGlzO1xuICAgIG5vZGUubmFtZSA9IG5hbWU7XG4gICAgbm9kZS5ub2RlTmFtZSA9IG5hbWU7XG4gICAgbm9kZS5sb2NhbE5hbWUgPSBuYW1lO1xuICAgIG5vZGUuc3BlY2lmaWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlRW50aXR5UmVmZXJlbmNlOiBmdW5jdGlvbiBjcmVhdGVFbnRpdHlSZWZlcmVuY2UobmFtZSkge1xuICAgIHZhciBub2RlID0gbmV3IEVudGl0eVJlZmVyZW5jZSgpO1xuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG4gICAgbm9kZS5ub2RlTmFtZSA9IG5hbWU7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH0sXG4gIGNyZWF0ZUVsZW1lbnROUzogZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSkge1xuICAgIHZhciBub2RlID0gbmV3IEVsZW1lbnQoKTtcbiAgICB2YXIgcGwgPSBxdWFsaWZpZWROYW1lLnNwbGl0KCc6Jyk7XG4gICAgdmFyIGF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzID0gbmV3IE5hbWVkTm9kZU1hcCgpO1xuICAgIG5vZGUuY2hpbGROb2RlcyA9IG5ldyBOb2RlTGlzdCgpO1xuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHRoaXM7XG4gICAgbm9kZS5ub2RlTmFtZSA9IHF1YWxpZmllZE5hbWU7XG4gICAgbm9kZS50YWdOYW1lID0gcXVhbGlmaWVkTmFtZTtcbiAgICBub2RlLm5hbWVzcGFjZVVSSSA9IG5hbWVzcGFjZVVSSTtcblxuICAgIGlmIChwbC5sZW5ndGggPT0gMikge1xuICAgICAgbm9kZS5wcmVmaXggPSBwbFswXTtcbiAgICAgIG5vZGUubG9jYWxOYW1lID0gcGxbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUubG9jYWxOYW1lID0gcXVhbGlmaWVkTmFtZTtcbiAgICB9XG5cbiAgICBhdHRycy5fb3duZXJFbGVtZW50ID0gbm9kZTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcbiAgY3JlYXRlQXR0cmlidXRlTlM6IGZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSkge1xuICAgIHZhciBub2RlID0gbmV3IEF0dHIoKTtcbiAgICB2YXIgcGwgPSBxdWFsaWZpZWROYW1lLnNwbGl0KCc6Jyk7XG4gICAgbm9kZS5vd25lckRvY3VtZW50ID0gdGhpcztcbiAgICBub2RlLm5vZGVOYW1lID0gcXVhbGlmaWVkTmFtZTtcbiAgICBub2RlLm5hbWUgPSBxdWFsaWZpZWROYW1lO1xuICAgIG5vZGUubmFtZXNwYWNlVVJJID0gbmFtZXNwYWNlVVJJO1xuICAgIG5vZGUuc3BlY2lmaWVkID0gdHJ1ZTtcblxuICAgIGlmIChwbC5sZW5ndGggPT0gMikge1xuICAgICAgbm9kZS5wcmVmaXggPSBwbFswXTtcbiAgICAgIG5vZGUubG9jYWxOYW1lID0gcGxbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUubG9jYWxOYW1lID0gcXVhbGlmaWVkTmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufTtcblxuX2V4dGVuZHMoRG9jdW1lbnQsIE5vZGUpO1xuXG5mdW5jdGlvbiBFbGVtZW50KCkge1xuICB0aGlzLl9uc01hcCA9IHt9O1xufVxuXG47XG5FbGVtZW50LnByb3RvdHlwZSA9IHtcbiAgbm9kZVR5cGU6IEVMRU1FTlRfTk9ERSxcbiAgaGFzQXR0cmlidXRlOiBmdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZU5vZGUobmFtZSkgIT0gbnVsbDtcbiAgfSxcbiAgZ2V0QXR0cmlidXRlOiBmdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICAgIHZhciBhdHRyID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpO1xuICAgIHJldHVybiBhdHRyICYmIGF0dHIudmFsdWUgfHwgJyc7XG4gIH0sXG4gIGdldEF0dHJpYnV0ZU5vZGU6IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZU5vZGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKG5hbWUpO1xuICB9LFxuICBzZXRBdHRyaWJ1dGU6IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBhdHRyID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICBhdHRyLnZhbHVlID0gYXR0ci5ub2RlVmFsdWUgPSBcIlwiICsgdmFsdWU7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGVOb2RlKGF0dHIpO1xuICB9LFxuICByZW1vdmVBdHRyaWJ1dGU6IGZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7XG4gICAgdmFyIGF0dHIgPSB0aGlzLmdldEF0dHJpYnV0ZU5vZGUobmFtZSk7XG4gICAgYXR0ciAmJiB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5vZGUoYXR0cik7XG4gIH0sXG4gIGFwcGVuZENoaWxkOiBmdW5jdGlvbiBhcHBlbmRDaGlsZChuZXdDaGlsZCkge1xuICAgIGlmIChuZXdDaGlsZC5ub2RlVHlwZSA9PT0gRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCBudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF9hcHBlbmRTaW5nbGVDaGlsZCh0aGlzLCBuZXdDaGlsZCk7XG4gICAgfVxuICB9LFxuICBzZXRBdHRyaWJ1dGVOb2RlOiBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVOb2RlKG5ld0F0dHIpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnNldE5hbWVkSXRlbShuZXdBdHRyKTtcbiAgfSxcbiAgc2V0QXR0cmlidXRlTm9kZU5TOiBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVOb2RlTlMobmV3QXR0cikge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuc2V0TmFtZWRJdGVtTlMobmV3QXR0cik7XG4gIH0sXG4gIHJlbW92ZUF0dHJpYnV0ZU5vZGU6IGZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZU5vZGUob2xkQXR0cikge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKG9sZEF0dHIubm9kZU5hbWUpO1xuICB9LFxuICByZW1vdmVBdHRyaWJ1dGVOUzogZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcbiAgICB2YXIgb2xkID0gdGhpcy5nZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpO1xuICAgIG9sZCAmJiB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5vZGUob2xkKTtcbiAgfSxcbiAgaGFzQXR0cmlidXRlTlM6IGZ1bmN0aW9uIGhhc0F0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSAhPSBudWxsO1xuICB9LFxuICBnZXRBdHRyaWJ1dGVOUzogZnVuY3Rpb24gZ2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcbiAgICB2YXIgYXR0ciA9IHRoaXMuZ2V0QXR0cmlidXRlTm9kZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKTtcbiAgICByZXR1cm4gYXR0ciAmJiBhdHRyLnZhbHVlIHx8ICcnO1xuICB9LFxuICBzZXRBdHRyaWJ1dGVOUzogZnVuY3Rpb24gc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlVVJJLCBxdWFsaWZpZWROYW1lLCB2YWx1ZSkge1xuICAgIHZhciBhdHRyID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgcXVhbGlmaWVkTmFtZSk7XG4gICAgYXR0ci52YWx1ZSA9IGF0dHIubm9kZVZhbHVlID0gXCJcIiArIHZhbHVlO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlTm9kZShhdHRyKTtcbiAgfSxcbiAgZ2V0QXR0cmlidXRlTm9kZU5TOiBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVOb2RlTlMobmFtZXNwYWNlVVJJLCBsb2NhbE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKTtcbiAgfSxcbiAgZ2V0RWxlbWVudHNCeVRhZ05hbWU6IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpIHtcbiAgICByZXR1cm4gbmV3IExpdmVOb2RlTGlzdCh0aGlzLCBmdW5jdGlvbiAoYmFzZSkge1xuICAgICAgdmFyIGxzID0gW107XG5cbiAgICAgIF92aXNpdE5vZGUoYmFzZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgIT09IGJhc2UgJiYgbm9kZS5ub2RlVHlwZSA9PSBFTEVNRU5UX05PREUgJiYgKHRhZ05hbWUgPT09ICcqJyB8fCBub2RlLnRhZ05hbWUgPT0gdGFnTmFtZSkpIHtcbiAgICAgICAgICBscy5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxzO1xuICAgIH0pO1xuICB9LFxuICBnZXRFbGVtZW50c0J5VGFnTmFtZU5TOiBmdW5jdGlvbiBnZXRFbGVtZW50c0J5VGFnTmFtZU5TKG5hbWVzcGFjZVVSSSwgbG9jYWxOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBMaXZlTm9kZUxpc3QodGhpcywgZnVuY3Rpb24gKGJhc2UpIHtcbiAgICAgIHZhciBscyA9IFtdO1xuXG4gICAgICBfdmlzaXROb2RlKGJhc2UsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlICE9PSBiYXNlICYmIG5vZGUubm9kZVR5cGUgPT09IEVMRU1FTlRfTk9ERSAmJiAobmFtZXNwYWNlVVJJID09PSAnKicgfHwgbm9kZS5uYW1lc3BhY2VVUkkgPT09IG5hbWVzcGFjZVVSSSkgJiYgKGxvY2FsTmFtZSA9PT0gJyonIHx8IG5vZGUubG9jYWxOYW1lID09IGxvY2FsTmFtZSkpIHtcbiAgICAgICAgICBscy5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxzO1xuICAgIH0pO1xuICB9XG59O1xuRG9jdW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRzQnlUYWdOYW1lID0gRWxlbWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWU7XG5Eb2N1bWVudC5wcm90b3R5cGUuZ2V0RWxlbWVudHNCeVRhZ05hbWVOUyA9IEVsZW1lbnQucHJvdG90eXBlLmdldEVsZW1lbnRzQnlUYWdOYW1lTlM7XG5cbl9leHRlbmRzKEVsZW1lbnQsIE5vZGUpO1xuXG5mdW5jdGlvbiBBdHRyKCkge31cblxuO1xuQXR0ci5wcm90b3R5cGUubm9kZVR5cGUgPSBBVFRSSUJVVEVfTk9ERTtcblxuX2V4dGVuZHMoQXR0ciwgTm9kZSk7XG5cbmZ1bmN0aW9uIENoYXJhY3RlckRhdGEoKSB7fVxuXG47XG5DaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSA9IHtcbiAgZGF0YTogJycsXG4gIHN1YnN0cmluZ0RhdGE6IGZ1bmN0aW9uIHN1YnN0cmluZ0RhdGEob2Zmc2V0LCBjb3VudCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc3Vic3RyaW5nKG9mZnNldCwgb2Zmc2V0ICsgY291bnQpO1xuICB9LFxuICBhcHBlbmREYXRhOiBmdW5jdGlvbiBhcHBlbmREYXRhKHRleHQpIHtcbiAgICB0ZXh0ID0gdGhpcy5kYXRhICsgdGV4dDtcbiAgICB0aGlzLm5vZGVWYWx1ZSA9IHRoaXMuZGF0YSA9IHRleHQ7XG4gICAgdGhpcy5sZW5ndGggPSB0ZXh0Lmxlbmd0aDtcbiAgfSxcbiAgaW5zZXJ0RGF0YTogZnVuY3Rpb24gaW5zZXJ0RGF0YShvZmZzZXQsIHRleHQpIHtcbiAgICB0aGlzLnJlcGxhY2VEYXRhKG9mZnNldCwgMCwgdGV4dCk7XG4gIH0sXG4gIGFwcGVuZENoaWxkOiBmdW5jdGlvbiBhcHBlbmRDaGlsZChuZXdDaGlsZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihFeGNlcHRpb25NZXNzYWdlW0hJRVJBUkNIWV9SRVFVRVNUX0VSUl0pO1xuICB9LFxuICBkZWxldGVEYXRhOiBmdW5jdGlvbiBkZWxldGVEYXRhKG9mZnNldCwgY291bnQpIHtcbiAgICB0aGlzLnJlcGxhY2VEYXRhKG9mZnNldCwgY291bnQsIFwiXCIpO1xuICB9LFxuICByZXBsYWNlRGF0YTogZnVuY3Rpb24gcmVwbGFjZURhdGEob2Zmc2V0LCBjb3VudCwgdGV4dCkge1xuICAgIHZhciBzdGFydCA9IHRoaXMuZGF0YS5zdWJzdHJpbmcoMCwgb2Zmc2V0KTtcbiAgICB2YXIgZW5kID0gdGhpcy5kYXRhLnN1YnN0cmluZyhvZmZzZXQgKyBjb3VudCk7XG4gICAgdGV4dCA9IHN0YXJ0ICsgdGV4dCArIGVuZDtcbiAgICB0aGlzLm5vZGVWYWx1ZSA9IHRoaXMuZGF0YSA9IHRleHQ7XG4gICAgdGhpcy5sZW5ndGggPSB0ZXh0Lmxlbmd0aDtcbiAgfVxufTtcblxuX2V4dGVuZHMoQ2hhcmFjdGVyRGF0YSwgTm9kZSk7XG5cbmZ1bmN0aW9uIFRleHQoKSB7fVxuXG47XG5UZXh0LnByb3RvdHlwZSA9IHtcbiAgbm9kZU5hbWU6IFwiI3RleHRcIixcbiAgbm9kZVR5cGU6IFRFWFRfTk9ERSxcbiAgc3BsaXRUZXh0OiBmdW5jdGlvbiBzcGxpdFRleHQob2Zmc2V0KSB7XG4gICAgdmFyIHRleHQgPSB0aGlzLmRhdGE7XG4gICAgdmFyIG5ld1RleHQgPSB0ZXh0LnN1YnN0cmluZyhvZmZzZXQpO1xuICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygwLCBvZmZzZXQpO1xuICAgIHRoaXMuZGF0YSA9IHRoaXMubm9kZVZhbHVlID0gdGV4dDtcbiAgICB0aGlzLmxlbmd0aCA9IHRleHQubGVuZ3RoO1xuICAgIHZhciBuZXdOb2RlID0gdGhpcy5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ld1RleHQpO1xuXG4gICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCB0aGlzLm5leHRTaWJsaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfVxufTtcblxuX2V4dGVuZHMoVGV4dCwgQ2hhcmFjdGVyRGF0YSk7XG5cbmZ1bmN0aW9uIENvbW1lbnQoKSB7fVxuXG47XG5Db21tZW50LnByb3RvdHlwZSA9IHtcbiAgbm9kZU5hbWU6IFwiI2NvbW1lbnRcIixcbiAgbm9kZVR5cGU6IENPTU1FTlRfTk9ERVxufTtcblxuX2V4dGVuZHMoQ29tbWVudCwgQ2hhcmFjdGVyRGF0YSk7XG5cbmZ1bmN0aW9uIENEQVRBU2VjdGlvbigpIHt9XG5cbjtcbkNEQVRBU2VjdGlvbi5wcm90b3R5cGUgPSB7XG4gIG5vZGVOYW1lOiBcIiNjZGF0YS1zZWN0aW9uXCIsXG4gIG5vZGVUeXBlOiBDREFUQV9TRUNUSU9OX05PREVcbn07XG5cbl9leHRlbmRzKENEQVRBU2VjdGlvbiwgQ2hhcmFjdGVyRGF0YSk7XG5cbmZ1bmN0aW9uIERvY3VtZW50VHlwZSgpIHt9XG5cbjtcbkRvY3VtZW50VHlwZS5wcm90b3R5cGUubm9kZVR5cGUgPSBET0NVTUVOVF9UWVBFX05PREU7XG5cbl9leHRlbmRzKERvY3VtZW50VHlwZSwgTm9kZSk7XG5cbmZ1bmN0aW9uIE5vdGF0aW9uKCkge31cblxuO1xuTm90YXRpb24ucHJvdG90eXBlLm5vZGVUeXBlID0gTk9UQVRJT05fTk9ERTtcblxuX2V4dGVuZHMoTm90YXRpb24sIE5vZGUpO1xuXG5mdW5jdGlvbiBFbnRpdHkoKSB7fVxuXG47XG5FbnRpdHkucHJvdG90eXBlLm5vZGVUeXBlID0gRU5USVRZX05PREU7XG5cbl9leHRlbmRzKEVudGl0eSwgTm9kZSk7XG5cbmZ1bmN0aW9uIEVudGl0eVJlZmVyZW5jZSgpIHt9XG5cbjtcbkVudGl0eVJlZmVyZW5jZS5wcm90b3R5cGUubm9kZVR5cGUgPSBFTlRJVFlfUkVGRVJFTkNFX05PREU7XG5cbl9leHRlbmRzKEVudGl0eVJlZmVyZW5jZSwgTm9kZSk7XG5cbmZ1bmN0aW9uIERvY3VtZW50RnJhZ21lbnQoKSB7fVxuXG47XG5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5ub2RlTmFtZSA9IFwiI2RvY3VtZW50LWZyYWdtZW50XCI7XG5Eb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZS5ub2RlVHlwZSA9IERPQ1VNRU5UX0ZSQUdNRU5UX05PREU7XG5cbl9leHRlbmRzKERvY3VtZW50RnJhZ21lbnQsIE5vZGUpO1xuXG5mdW5jdGlvbiBQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oKSB7fVxuXG5Qcm9jZXNzaW5nSW5zdHJ1Y3Rpb24ucHJvdG90eXBlLm5vZGVUeXBlID0gUFJPQ0VTU0lOR19JTlNUUlVDVElPTl9OT0RFO1xuXG5fZXh0ZW5kcyhQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24sIE5vZGUpO1xuXG5mdW5jdGlvbiBYTUxTZXJpYWxpemVyKCkge31cblxuWE1MU2VyaWFsaXplci5wcm90b3R5cGUuc2VyaWFsaXplVG9TdHJpbmcgPSBmdW5jdGlvbiAobm9kZSwgaXNIdG1sLCBub2RlRmlsdGVyKSB7XG4gIHJldHVybiBub2RlU2VyaWFsaXplVG9TdHJpbmcuY2FsbChub2RlLCBpc0h0bWwsIG5vZGVGaWx0ZXIpO1xufTtcblxuTm9kZS5wcm90b3R5cGUudG9TdHJpbmcgPSBub2RlU2VyaWFsaXplVG9TdHJpbmc7XG5cbmZ1bmN0aW9uIG5vZGVTZXJpYWxpemVUb1N0cmluZyhpc0h0bWwsIG5vZGVGaWx0ZXIpIHtcbiAgdmFyIGJ1ZiA9IFtdO1xuICB2YXIgcmVmTm9kZSA9IHRoaXMubm9kZVR5cGUgPT0gOSAmJiB0aGlzLmRvY3VtZW50RWxlbWVudCB8fCB0aGlzO1xuICB2YXIgcHJlZml4ID0gcmVmTm9kZS5wcmVmaXg7XG4gIHZhciB1cmkgPSByZWZOb2RlLm5hbWVzcGFjZVVSSTtcblxuICBpZiAodXJpICYmIHByZWZpeCA9PSBudWxsKSB7XG4gICAgdmFyIHByZWZpeCA9IHJlZk5vZGUubG9va3VwUHJlZml4KHVyaSk7XG5cbiAgICBpZiAocHJlZml4ID09IG51bGwpIHtcbiAgICAgIHZhciB2aXNpYmxlTmFtZXNwYWNlcyA9IFt7XG4gICAgICAgIG5hbWVzcGFjZTogdXJpLFxuICAgICAgICBwcmVmaXg6IG51bGxcbiAgICAgIH1dO1xuICAgIH1cbiAgfVxuXG4gIHNlcmlhbGl6ZVRvU3RyaW5nKHRoaXMsIGJ1ZiwgaXNIdG1sLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcyk7XG4gIHJldHVybiBidWYuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIG5lZWROYW1lc3BhY2VEZWZpbmUobm9kZSwgaXNIVE1MLCB2aXNpYmxlTmFtZXNwYWNlcykge1xuICB2YXIgcHJlZml4ID0gbm9kZS5wcmVmaXggfHwgJyc7XG4gIHZhciB1cmkgPSBub2RlLm5hbWVzcGFjZVVSSTtcblxuICBpZiAoIXByZWZpeCAmJiAhdXJpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHByZWZpeCA9PT0gXCJ4bWxcIiAmJiB1cmkgPT09IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIgfHwgdXJpID09ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgaSA9IHZpc2libGVOYW1lc3BhY2VzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIG5zID0gdmlzaWJsZU5hbWVzcGFjZXNbaV07XG5cbiAgICBpZiAobnMucHJlZml4ID09IHByZWZpeCkge1xuICAgICAgcmV0dXJuIG5zLm5hbWVzcGFjZSAhPSB1cmk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZVRvU3RyaW5nKG5vZGUsIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcykge1xuICBpZiAobm9kZUZpbHRlcikge1xuICAgIG5vZGUgPSBub2RlRmlsdGVyKG5vZGUpO1xuXG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PSAnc3RyaW5nJykge1xuICAgICAgICBidWYucHVzaChub2RlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoIChub2RlLm5vZGVUeXBlKSB7XG4gICAgY2FzZSBFTEVNRU5UX05PREU6XG4gICAgICBpZiAoIXZpc2libGVOYW1lc3BhY2VzKSB2aXNpYmxlTmFtZXNwYWNlcyA9IFtdO1xuICAgICAgdmFyIHN0YXJ0VmlzaWJsZU5hbWVzcGFjZXMgPSB2aXNpYmxlTmFtZXNwYWNlcy5sZW5ndGg7XG4gICAgICB2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXM7XG4gICAgICB2YXIgbGVuID0gYXR0cnMubGVuZ3RoO1xuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgdmFyIG5vZGVOYW1lID0gbm9kZS50YWdOYW1lO1xuICAgICAgaXNIVE1MID0gaHRtbG5zID09PSBub2RlLm5hbWVzcGFjZVVSSSB8fCBpc0hUTUw7XG4gICAgICBidWYucHVzaCgnPCcsIG5vZGVOYW1lKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgYXR0ciA9IGF0dHJzLml0ZW0oaSk7XG5cbiAgICAgICAgaWYgKGF0dHIucHJlZml4ID09ICd4bWxucycpIHtcbiAgICAgICAgICB2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHtcbiAgICAgICAgICAgIHByZWZpeDogYXR0ci5sb2NhbE5hbWUsXG4gICAgICAgICAgICBuYW1lc3BhY2U6IGF0dHIudmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChhdHRyLm5vZGVOYW1lID09ICd4bWxucycpIHtcbiAgICAgICAgICB2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHtcbiAgICAgICAgICAgIHByZWZpeDogJycsXG4gICAgICAgICAgICBuYW1lc3BhY2U6IGF0dHIudmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBhdHRyID0gYXR0cnMuaXRlbShpKTtcblxuICAgICAgICBpZiAobmVlZE5hbWVzcGFjZURlZmluZShhdHRyLCBpc0hUTUwsIHZpc2libGVOYW1lc3BhY2VzKSkge1xuICAgICAgICAgIHZhciBwcmVmaXggPSBhdHRyLnByZWZpeCB8fCAnJztcbiAgICAgICAgICB2YXIgdXJpID0gYXR0ci5uYW1lc3BhY2VVUkk7XG4gICAgICAgICAgdmFyIG5zID0gcHJlZml4ID8gJyB4bWxuczonICsgcHJlZml4IDogXCIgeG1sbnNcIjtcbiAgICAgICAgICBidWYucHVzaChucywgJz1cIicsIHVyaSwgJ1wiJyk7XG4gICAgICAgICAgdmlzaWJsZU5hbWVzcGFjZXMucHVzaCh7XG4gICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgIG5hbWVzcGFjZTogdXJpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXJpYWxpemVUb1N0cmluZyhhdHRyLCBidWYsIGlzSFRNTCwgbm9kZUZpbHRlciwgdmlzaWJsZU5hbWVzcGFjZXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZE5hbWVzcGFjZURlZmluZShub2RlLCBpc0hUTUwsIHZpc2libGVOYW1lc3BhY2VzKSkge1xuICAgICAgICB2YXIgcHJlZml4ID0gbm9kZS5wcmVmaXggfHwgJyc7XG4gICAgICAgIHZhciB1cmkgPSBub2RlLm5hbWVzcGFjZVVSSTtcbiAgICAgICAgdmFyIG5zID0gcHJlZml4ID8gJyB4bWxuczonICsgcHJlZml4IDogXCIgeG1sbnNcIjtcbiAgICAgICAgYnVmLnB1c2gobnMsICc9XCInLCB1cmksICdcIicpO1xuICAgICAgICB2aXNpYmxlTmFtZXNwYWNlcy5wdXNoKHtcbiAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICBuYW1lc3BhY2U6IHVyaVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkIHx8IGlzSFRNTCAmJiAhL14oPzptZXRhfGxpbmt8aW1nfGJyfGhyfGlucHV0KSQvaS50ZXN0KG5vZGVOYW1lKSkge1xuICAgICAgICBidWYucHVzaCgnPicpO1xuXG4gICAgICAgIGlmIChpc0hUTUwgJiYgL15zY3JpcHQkL2kudGVzdChub2RlTmFtZSkpIHtcbiAgICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5kYXRhKSB7XG4gICAgICAgICAgICAgIGJ1Zi5wdXNoKGNoaWxkLmRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VyaWFsaXplVG9TdHJpbmcoY2hpbGQsIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgICAgc2VyaWFsaXplVG9TdHJpbmcoY2hpbGQsIGJ1ZiwgaXNIVE1MLCBub2RlRmlsdGVyLCB2aXNpYmxlTmFtZXNwYWNlcyk7XG4gICAgICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJ1Zi5wdXNoKCc8LycsIG5vZGVOYW1lLCAnPicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnVmLnB1c2goJy8+Jyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcblxuICAgIGNhc2UgRE9DVU1FTlRfTk9ERTpcbiAgICBjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG4gICAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cbiAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBzZXJpYWxpemVUb1N0cmluZyhjaGlsZCwgYnVmLCBpc0hUTUwsIG5vZGVGaWx0ZXIsIHZpc2libGVOYW1lc3BhY2VzKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuXG4gICAgY2FzZSBBVFRSSUJVVEVfTk9ERTpcbiAgICAgIHJldHVybiBidWYucHVzaCgnICcsIG5vZGUubmFtZSwgJz1cIicsIG5vZGUudmFsdWUucmVwbGFjZSgvWzwmXCJdL2csIF94bWxFbmNvZGVyKSwgJ1wiJyk7XG5cbiAgICBjYXNlIFRFWFRfTk9ERTpcbiAgICAgIHJldHVybiBidWYucHVzaChub2RlLmRhdGEucmVwbGFjZSgvWzwmXS9nLCBfeG1sRW5jb2RlcikpO1xuXG4gICAgY2FzZSBDREFUQV9TRUNUSU9OX05PREU6XG4gICAgICByZXR1cm4gYnVmLnB1c2goJzwhW0NEQVRBWycsIG5vZGUuZGF0YSwgJ11dPicpO1xuXG4gICAgY2FzZSBDT01NRU5UX05PREU6XG4gICAgICByZXR1cm4gYnVmLnB1c2goXCI8IS0tXCIsIG5vZGUuZGF0YSwgXCItLT5cIik7XG5cbiAgICBjYXNlIERPQ1VNRU5UX1RZUEVfTk9ERTpcbiAgICAgIHZhciBwdWJpZCA9IG5vZGUucHVibGljSWQ7XG4gICAgICB2YXIgc3lzaWQgPSBub2RlLnN5c3RlbUlkO1xuICAgICAgYnVmLnB1c2goJzwhRE9DVFlQRSAnLCBub2RlLm5hbWUpO1xuXG4gICAgICBpZiAocHViaWQpIHtcbiAgICAgICAgYnVmLnB1c2goJyBQVUJMSUMgXCInLCBwdWJpZCk7XG5cbiAgICAgICAgaWYgKHN5c2lkICYmIHN5c2lkICE9ICcuJykge1xuICAgICAgICAgIGJ1Zi5wdXNoKCdcIiBcIicsIHN5c2lkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1Zi5wdXNoKCdcIj4nKTtcbiAgICAgIH0gZWxzZSBpZiAoc3lzaWQgJiYgc3lzaWQgIT0gJy4nKSB7XG4gICAgICAgIGJ1Zi5wdXNoKCcgU1lTVEVNIFwiJywgc3lzaWQsICdcIj4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzdWIgPSBub2RlLmludGVybmFsU3Vic2V0O1xuXG4gICAgICAgIGlmIChzdWIpIHtcbiAgICAgICAgICBidWYucHVzaChcIiBbXCIsIHN1YiwgXCJdXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnVmLnB1c2goXCI+XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG5cbiAgICBjYXNlIFBST0NFU1NJTkdfSU5TVFJVQ1RJT05fTk9ERTpcbiAgICAgIHJldHVybiBidWYucHVzaChcIjw/XCIsIG5vZGUudGFyZ2V0LCBcIiBcIiwgbm9kZS5kYXRhLCBcIj8+XCIpO1xuXG4gICAgY2FzZSBFTlRJVFlfUkVGRVJFTkNFX05PREU6XG4gICAgICByZXR1cm4gYnVmLnB1c2goJyYnLCBub2RlLm5vZGVOYW1lLCAnOycpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJ1Zi5wdXNoKCc/PycsIG5vZGUubm9kZU5hbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9pbXBvcnROb2RlKGRvYywgbm9kZSwgZGVlcCkge1xuICB2YXIgbm9kZTI7XG5cbiAgc3dpdGNoIChub2RlLm5vZGVUeXBlKSB7XG4gICAgY2FzZSBFTEVNRU5UX05PREU6XG4gICAgICBub2RlMiA9IG5vZGUuY2xvbmVOb2RlKGZhbHNlKTtcbiAgICAgIG5vZGUyLm93bmVyRG9jdW1lbnQgPSBkb2M7XG5cbiAgICBjYXNlIERPQ1VNRU5UX0ZSQUdNRU5UX05PREU6XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgQVRUUklCVVRFX05PREU6XG4gICAgICBkZWVwID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaWYgKCFub2RlMikge1xuICAgIG5vZGUyID0gbm9kZS5jbG9uZU5vZGUoZmFsc2UpO1xuICB9XG5cbiAgbm9kZTIub3duZXJEb2N1bWVudCA9IGRvYztcbiAgbm9kZTIucGFyZW50Tm9kZSA9IG51bGw7XG5cbiAgaWYgKGRlZXApIHtcbiAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIG5vZGUyLmFwcGVuZENoaWxkKF9pbXBvcnROb2RlKGRvYywgY2hpbGQsIGRlZXApKTtcbiAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGUyO1xufVxuXG5mdW5jdGlvbiBfY2xvbmVOb2RlKGRvYywgbm9kZSwgZGVlcCkge1xuICB2YXIgbm9kZTIgPSBuZXcgbm9kZS5jb25zdHJ1Y3RvcigpO1xuXG4gIGZvciAodmFyIG4gaW4gbm9kZSkge1xuICAgIHZhciB2ID0gbm9kZVtuXTtcblxuICAgIGlmIChfdHlwZW9mKHYpICE9ICdvYmplY3QnKSB7XG4gICAgICBpZiAodiAhPSBub2RlMltuXSkge1xuICAgICAgICBub2RlMltuXSA9IHY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKG5vZGUuY2hpbGROb2Rlcykge1xuICAgIG5vZGUyLmNoaWxkTm9kZXMgPSBuZXcgTm9kZUxpc3QoKTtcbiAgfVxuXG4gIG5vZGUyLm93bmVyRG9jdW1lbnQgPSBkb2M7XG5cbiAgc3dpdGNoIChub2RlMi5ub2RlVHlwZSkge1xuICAgIGNhc2UgRUxFTUVOVF9OT0RFOlxuICAgICAgdmFyIGF0dHJzID0gbm9kZS5hdHRyaWJ1dGVzO1xuICAgICAgdmFyIGF0dHJzMiA9IG5vZGUyLmF0dHJpYnV0ZXMgPSBuZXcgTmFtZWROb2RlTWFwKCk7XG4gICAgICB2YXIgbGVuID0gYXR0cnMubGVuZ3RoO1xuICAgICAgYXR0cnMyLl9vd25lckVsZW1lbnQgPSBub2RlMjtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBub2RlMi5zZXRBdHRyaWJ1dGVOb2RlKF9jbG9uZU5vZGUoZG9jLCBhdHRycy5pdGVtKGkpLCB0cnVlKSk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgICAgO1xuXG4gICAgY2FzZSBBVFRSSUJVVEVfTk9ERTpcbiAgICAgIGRlZXAgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGRlZXApIHtcbiAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIG5vZGUyLmFwcGVuZENoaWxkKF9jbG9uZU5vZGUoZG9jLCBjaGlsZCwgZGVlcCkpO1xuICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZTI7XG59XG5cbmZ1bmN0aW9uIF9fc2V0X18ob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG59XG5cbnRyeSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgICB2YXIgZ2V0VGV4dENvbnRlbnQgPSBmdW5jdGlvbiBnZXRUZXh0Q29udGVudChub2RlKSB7XG4gICAgICBzd2l0Y2ggKG5vZGUubm9kZVR5cGUpIHtcbiAgICAgICAgY2FzZSBFTEVNRU5UX05PREU6XG4gICAgICAgIGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcbiAgICAgICAgICB2YXIgYnVmID0gW107XG4gICAgICAgICAgbm9kZSA9IG5vZGUuZmlyc3RDaGlsZDtcblxuICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gNyAmJiBub2RlLm5vZGVUeXBlICE9PSA4KSB7XG4gICAgICAgICAgICAgIGJ1Zi5wdXNoKGdldFRleHRDb250ZW50KG5vZGUpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGJ1Zi5qb2luKCcnKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBub2RlLm5vZGVWYWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExpdmVOb2RlTGlzdC5wcm90b3R5cGUsICdsZW5ndGgnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgX3VwZGF0ZUxpdmVMaXN0KHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiQkbGVuZ3RoO1xuICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb2RlLnByb3RvdHlwZSwgJ3RleHRDb250ZW50Jywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBnZXRUZXh0Q29udGVudCh0aGlzKTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldChkYXRhKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5ub2RlVHlwZSkge1xuICAgICAgICAgIGNhc2UgRUxFTUVOVF9OT0RFOlxuICAgICAgICAgIGNhc2UgRE9DVU1FTlRfRlJBR01FTlRfTk9ERTpcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YSB8fCBTdHJpbmcoZGF0YSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9fc2V0X18gPSBmdW5jdGlvbiBfX3NldF9fKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICAgICAgb2JqZWN0WyckJCcgKyBrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxufSBjYXRjaCAoZSkge31cblxuZXhwb3J0cy5ET01JbXBsZW1lbnRhdGlvbiA9IERPTUltcGxlbWVudGF0aW9uO1xuZXhwb3J0cy5YTUxTZXJpYWxpemVyID0gWE1MU2VyaWFsaXplcjtcblxufSx7fV0sNTg6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuZW50aXR5TWFwID0ge1xuICBsdDogJzwnLFxuICBndDogJz4nLFxuICBhbXA6ICcmJyxcbiAgcXVvdDogJ1wiJyxcbiAgYXBvczogXCInXCIsXG4gIEFncmF2ZTogXCLDgFwiLFxuICBBYWN1dGU6IFwiw4FcIixcbiAgQWNpcmM6IFwiw4JcIixcbiAgQXRpbGRlOiBcIsODXCIsXG4gIEF1bWw6IFwiw4RcIixcbiAgQXJpbmc6IFwiw4VcIixcbiAgQUVsaWc6IFwiw4ZcIixcbiAgQ2NlZGlsOiBcIsOHXCIsXG4gIEVncmF2ZTogXCLDiFwiLFxuICBFYWN1dGU6IFwiw4lcIixcbiAgRWNpcmM6IFwiw4pcIixcbiAgRXVtbDogXCLDi1wiLFxuICBJZ3JhdmU6IFwiw4xcIixcbiAgSWFjdXRlOiBcIsONXCIsXG4gIEljaXJjOiBcIsOOXCIsXG4gIEl1bWw6IFwiw49cIixcbiAgRVRIOiBcIsOQXCIsXG4gIE50aWxkZTogXCLDkVwiLFxuICBPZ3JhdmU6IFwiw5JcIixcbiAgT2FjdXRlOiBcIsOTXCIsXG4gIE9jaXJjOiBcIsOUXCIsXG4gIE90aWxkZTogXCLDlVwiLFxuICBPdW1sOiBcIsOWXCIsXG4gIE9zbGFzaDogXCLDmFwiLFxuICBVZ3JhdmU6IFwiw5lcIixcbiAgVWFjdXRlOiBcIsOaXCIsXG4gIFVjaXJjOiBcIsObXCIsXG4gIFV1bWw6IFwiw5xcIixcbiAgWWFjdXRlOiBcIsOdXCIsXG4gIFRIT1JOOiBcIsOeXCIsXG4gIHN6bGlnOiBcIsOfXCIsXG4gIGFncmF2ZTogXCLDoFwiLFxuICBhYWN1dGU6IFwiw6FcIixcbiAgYWNpcmM6IFwiw6JcIixcbiAgYXRpbGRlOiBcIsOjXCIsXG4gIGF1bWw6IFwiw6RcIixcbiAgYXJpbmc6IFwiw6VcIixcbiAgYWVsaWc6IFwiw6ZcIixcbiAgY2NlZGlsOiBcIsOnXCIsXG4gIGVncmF2ZTogXCLDqFwiLFxuICBlYWN1dGU6IFwiw6lcIixcbiAgZWNpcmM6IFwiw6pcIixcbiAgZXVtbDogXCLDq1wiLFxuICBpZ3JhdmU6IFwiw6xcIixcbiAgaWFjdXRlOiBcIsOtXCIsXG4gIGljaXJjOiBcIsOuXCIsXG4gIGl1bWw6IFwiw69cIixcbiAgZXRoOiBcIsOwXCIsXG4gIG50aWxkZTogXCLDsVwiLFxuICBvZ3JhdmU6IFwiw7JcIixcbiAgb2FjdXRlOiBcIsOzXCIsXG4gIG9jaXJjOiBcIsO0XCIsXG4gIG90aWxkZTogXCLDtVwiLFxuICBvdW1sOiBcIsO2XCIsXG4gIG9zbGFzaDogXCLDuFwiLFxuICB1Z3JhdmU6IFwiw7lcIixcbiAgdWFjdXRlOiBcIsO6XCIsXG4gIHVjaXJjOiBcIsO7XCIsXG4gIHV1bWw6IFwiw7xcIixcbiAgeWFjdXRlOiBcIsO9XCIsXG4gIHRob3JuOiBcIsO+XCIsXG4gIHl1bWw6IFwiw79cIixcbiAgbmJzcDogXCIgXCIsXG4gIGlleGNsOiBcIsKhXCIsXG4gIGNlbnQ6IFwiwqJcIixcbiAgcG91bmQ6IFwiwqNcIixcbiAgY3VycmVuOiBcIsKkXCIsXG4gIHllbjogXCLCpVwiLFxuICBicnZiYXI6IFwiwqZcIixcbiAgc2VjdDogXCLCp1wiLFxuICB1bWw6IFwiwqhcIixcbiAgY29weTogXCLCqVwiLFxuICBvcmRmOiBcIsKqXCIsXG4gIGxhcXVvOiBcIsKrXCIsXG4gIG5vdDogXCLCrFwiLFxuICBzaHk6IFwiwq3CrVwiLFxuICByZWc6IFwiwq5cIixcbiAgbWFjcjogXCLCr1wiLFxuICBkZWc6IFwiwrBcIixcbiAgcGx1c21uOiBcIsKxXCIsXG4gIHN1cDI6IFwiwrJcIixcbiAgc3VwMzogXCLCs1wiLFxuICBhY3V0ZTogXCLCtFwiLFxuICBtaWNybzogXCLCtVwiLFxuICBwYXJhOiBcIsK2XCIsXG4gIG1pZGRvdDogXCLCt1wiLFxuICBjZWRpbDogXCLCuFwiLFxuICBzdXAxOiBcIsK5XCIsXG4gIG9yZG06IFwiwrpcIixcbiAgcmFxdW86IFwiwrtcIixcbiAgZnJhYzE0OiBcIsK8XCIsXG4gIGZyYWMxMjogXCLCvVwiLFxuICBmcmFjMzQ6IFwiwr5cIixcbiAgaXF1ZXN0OiBcIsK/XCIsXG4gIHRpbWVzOiBcIsOXXCIsXG4gIGRpdmlkZTogXCLDt1wiLFxuICBmb3JhbGw6IFwi4oiAXCIsXG4gIHBhcnQ6IFwi4oiCXCIsXG4gIGV4aXN0OiBcIuKIg1wiLFxuICBlbXB0eTogXCLiiIVcIixcbiAgbmFibGE6IFwi4oiHXCIsXG4gIGlzaW46IFwi4oiIXCIsXG4gIG5vdGluOiBcIuKIiVwiLFxuICBuaTogXCLiiItcIixcbiAgcHJvZDogXCLiiI9cIixcbiAgc3VtOiBcIuKIkVwiLFxuICBtaW51czogXCLiiJJcIixcbiAgbG93YXN0OiBcIuKIl1wiLFxuICByYWRpYzogXCLiiJpcIixcbiAgcHJvcDogXCLiiJ1cIixcbiAgaW5maW46IFwi4oieXCIsXG4gIGFuZzogXCLiiKBcIixcbiAgYW5kOiBcIuKIp1wiLFxuICBvcjogXCLiiKhcIixcbiAgY2FwOiBcIuKIqVwiLFxuICBjdXA6IFwi4oiqXCIsXG4gICdpbnQnOiBcIuKIq1wiLFxuICB0aGVyZTQ6IFwi4oi0XCIsXG4gIHNpbTogXCLiiLxcIixcbiAgY29uZzogXCLiiYVcIixcbiAgYXN5bXA6IFwi4omIXCIsXG4gIG5lOiBcIuKJoFwiLFxuICBlcXVpdjogXCLiiaFcIixcbiAgbGU6IFwi4omkXCIsXG4gIGdlOiBcIuKJpVwiLFxuICBzdWI6IFwi4oqCXCIsXG4gIHN1cDogXCLiioNcIixcbiAgbnN1YjogXCLiioRcIixcbiAgc3ViZTogXCLiioZcIixcbiAgc3VwZTogXCLiiodcIixcbiAgb3BsdXM6IFwi4oqVXCIsXG4gIG90aW1lczogXCLiipdcIixcbiAgcGVycDogXCLiiqVcIixcbiAgc2RvdDogXCLii4VcIixcbiAgQWxwaGE6IFwizpFcIixcbiAgQmV0YTogXCLOklwiLFxuICBHYW1tYTogXCLOk1wiLFxuICBEZWx0YTogXCLOlFwiLFxuICBFcHNpbG9uOiBcIs6VXCIsXG4gIFpldGE6IFwizpZcIixcbiAgRXRhOiBcIs6XXCIsXG4gIFRoZXRhOiBcIs6YXCIsXG4gIElvdGE6IFwizplcIixcbiAgS2FwcGE6IFwizppcIixcbiAgTGFtYmRhOiBcIs6bXCIsXG4gIE11OiBcIs6cXCIsXG4gIE51OiBcIs6dXCIsXG4gIFhpOiBcIs6eXCIsXG4gIE9taWNyb246IFwizp9cIixcbiAgUGk6IFwizqBcIixcbiAgUmhvOiBcIs6hXCIsXG4gIFNpZ21hOiBcIs6jXCIsXG4gIFRhdTogXCLOpFwiLFxuICBVcHNpbG9uOiBcIs6lXCIsXG4gIFBoaTogXCLOplwiLFxuICBDaGk6IFwizqdcIixcbiAgUHNpOiBcIs6oXCIsXG4gIE9tZWdhOiBcIs6pXCIsXG4gIGFscGhhOiBcIs6xXCIsXG4gIGJldGE6IFwizrJcIixcbiAgZ2FtbWE6IFwizrNcIixcbiAgZGVsdGE6IFwizrRcIixcbiAgZXBzaWxvbjogXCLOtVwiLFxuICB6ZXRhOiBcIs62XCIsXG4gIGV0YTogXCLOt1wiLFxuICB0aGV0YTogXCLOuFwiLFxuICBpb3RhOiBcIs65XCIsXG4gIGthcHBhOiBcIs66XCIsXG4gIGxhbWJkYTogXCLOu1wiLFxuICBtdTogXCLOvFwiLFxuICBudTogXCLOvVwiLFxuICB4aTogXCLOvlwiLFxuICBvbWljcm9uOiBcIs6/XCIsXG4gIHBpOiBcIs+AXCIsXG4gIHJobzogXCLPgVwiLFxuICBzaWdtYWY6IFwiz4JcIixcbiAgc2lnbWE6IFwiz4NcIixcbiAgdGF1OiBcIs+EXCIsXG4gIHVwc2lsb246IFwiz4VcIixcbiAgcGhpOiBcIs+GXCIsXG4gIGNoaTogXCLPh1wiLFxuICBwc2k6IFwiz4hcIixcbiAgb21lZ2E6IFwiz4lcIixcbiAgdGhldGFzeW06IFwiz5FcIixcbiAgdXBzaWg6IFwiz5JcIixcbiAgcGl2OiBcIs+WXCIsXG4gIE9FbGlnOiBcIsWSXCIsXG4gIG9lbGlnOiBcIsWTXCIsXG4gIFNjYXJvbjogXCLFoFwiLFxuICBzY2Fyb246IFwixaFcIixcbiAgWXVtbDogXCLFuFwiLFxuICBmbm9mOiBcIsaSXCIsXG4gIGNpcmM6IFwiy4ZcIixcbiAgdGlsZGU6IFwiy5xcIixcbiAgZW5zcDogXCLigIJcIixcbiAgZW1zcDogXCLigINcIixcbiAgdGhpbnNwOiBcIuKAiVwiLFxuICB6d25qOiBcIuKAjFwiLFxuICB6d2o6IFwi4oCNXCIsXG4gIGxybTogXCLigI5cIixcbiAgcmxtOiBcIuKAj1wiLFxuICBuZGFzaDogXCLigJNcIixcbiAgbWRhc2g6IFwi4oCUXCIsXG4gIGxzcXVvOiBcIuKAmFwiLFxuICByc3F1bzogXCLigJlcIixcbiAgc2JxdW86IFwi4oCaXCIsXG4gIGxkcXVvOiBcIuKAnFwiLFxuICByZHF1bzogXCLigJ1cIixcbiAgYmRxdW86IFwi4oCeXCIsXG4gIGRhZ2dlcjogXCLigKBcIixcbiAgRGFnZ2VyOiBcIuKAoVwiLFxuICBidWxsOiBcIuKAolwiLFxuICBoZWxsaXA6IFwi4oCmXCIsXG4gIHBlcm1pbDogXCLigLBcIixcbiAgcHJpbWU6IFwi4oCyXCIsXG4gIFByaW1lOiBcIuKAs1wiLFxuICBsc2FxdW86IFwi4oC5XCIsXG4gIHJzYXF1bzogXCLigLpcIixcbiAgb2xpbmU6IFwi4oC+XCIsXG4gIGV1cm86IFwi4oKsXCIsXG4gIHRyYWRlOiBcIuKEolwiLFxuICBsYXJyOiBcIuKGkFwiLFxuICB1YXJyOiBcIuKGkVwiLFxuICByYXJyOiBcIuKGklwiLFxuICBkYXJyOiBcIuKGk1wiLFxuICBoYXJyOiBcIuKGlFwiLFxuICBjcmFycjogXCLihrVcIixcbiAgbGNlaWw6IFwi4oyIXCIsXG4gIHJjZWlsOiBcIuKMiVwiLFxuICBsZmxvb3I6IFwi4oyKXCIsXG4gIHJmbG9vcjogXCLijItcIixcbiAgbG96OiBcIuKXilwiLFxuICBzcGFkZXM6IFwi4pmgXCIsXG4gIGNsdWJzOiBcIuKZo1wiLFxuICBoZWFydHM6IFwi4pmlXCIsXG4gIGRpYW1zOiBcIuKZplwiXG59O1xuXG59LHt9XSw1OTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG5hbWVTdGFydENoYXIgPSAvW0EtWl9hLXpcXHhDMC1cXHhENlxceEQ4LVxceEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXS87XG52YXIgbmFtZUNoYXIgPSBuZXcgUmVnRXhwKFwiW1xcXFwtXFxcXC4wLTlcIiArIG5hbWVTdGFydENoYXIuc291cmNlLnNsaWNlKDEsIC0xKSArIFwiXFxcXHUwMEI3XFxcXHUwMzAwLVxcXFx1MDM2RlxcXFx1MjAzRi1cXFxcdTIwNDBdXCIpO1xudmFyIHRhZ05hbWVQYXR0ZXJuID0gbmV3IFJlZ0V4cCgnXicgKyBuYW1lU3RhcnRDaGFyLnNvdXJjZSArIG5hbWVDaGFyLnNvdXJjZSArICcqKD86XFw6JyArIG5hbWVTdGFydENoYXIuc291cmNlICsgbmFtZUNoYXIuc291cmNlICsgJyopPyQnKTtcbnZhciBTX1RBRyA9IDA7XG52YXIgU19BVFRSID0gMTtcbnZhciBTX0FUVFJfU1BBQ0UgPSAyO1xudmFyIFNfRVEgPSAzO1xudmFyIFNfQVRUUl9OT1FVT1RfVkFMVUUgPSA0O1xudmFyIFNfQVRUUl9FTkQgPSA1O1xudmFyIFNfVEFHX1NQQUNFID0gNjtcbnZhciBTX1RBR19DTE9TRSA9IDc7XG5cbmZ1bmN0aW9uIFhNTFJlYWRlcigpIHt9XG5cblhNTFJlYWRlci5wcm90b3R5cGUgPSB7XG4gIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShzb3VyY2UsIGRlZmF1bHROU01hcCwgZW50aXR5TWFwKSB7XG4gICAgdmFyIGRvbUJ1aWxkZXIgPSB0aGlzLmRvbUJ1aWxkZXI7XG4gICAgZG9tQnVpbGRlci5zdGFydERvY3VtZW50KCk7XG5cbiAgICBfY29weShkZWZhdWx0TlNNYXAsIGRlZmF1bHROU01hcCA9IHt9KTtcblxuICAgIF9wYXJzZShzb3VyY2UsIGRlZmF1bHROU01hcCwgZW50aXR5TWFwLCBkb21CdWlsZGVyLCB0aGlzLmVycm9ySGFuZGxlcik7XG5cbiAgICBkb21CdWlsZGVyLmVuZERvY3VtZW50KCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9wYXJzZShzb3VyY2UsIGRlZmF1bHROU01hcENvcHksIGVudGl0eU1hcCwgZG9tQnVpbGRlciwgZXJyb3JIYW5kbGVyKSB7XG4gIGZ1bmN0aW9uIGZpeGVkRnJvbUNoYXJDb2RlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA+IDB4ZmZmZikge1xuICAgICAgY29kZSAtPSAweDEwMDAwO1xuICAgICAgdmFyIHN1cnJvZ2F0ZTEgPSAweGQ4MDAgKyAoY29kZSA+PiAxMCksXG4gICAgICAgICAgc3Vycm9nYXRlMiA9IDB4ZGMwMCArIChjb2RlICYgMHgzZmYpO1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoc3Vycm9nYXRlMSwgc3Vycm9nYXRlMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVudGl0eVJlcGxhY2VyKGEpIHtcbiAgICB2YXIgayA9IGEuc2xpY2UoMSwgLTEpO1xuXG4gICAgaWYgKGsgaW4gZW50aXR5TWFwKSB7XG4gICAgICByZXR1cm4gZW50aXR5TWFwW2tdO1xuICAgIH0gZWxzZSBpZiAoay5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgICAgcmV0dXJuIGZpeGVkRnJvbUNoYXJDb2RlKHBhcnNlSW50KGsuc3Vic3RyKDEpLnJlcGxhY2UoJ3gnLCAnMHgnKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvckhhbmRsZXIuZXJyb3IoJ2VudGl0eSBub3QgZm91bmQ6JyArIGEpO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYXBwZW5kVGV4dChlbmQpIHtcbiAgICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICAgIHZhciB4dCA9IHNvdXJjZS5zdWJzdHJpbmcoc3RhcnQsIGVuZCkucmVwbGFjZSgvJiM/XFx3KzsvZywgZW50aXR5UmVwbGFjZXIpO1xuICAgICAgbG9jYXRvciAmJiBwb3NpdGlvbihzdGFydCk7XG4gICAgICBkb21CdWlsZGVyLmNoYXJhY3RlcnMoeHQsIDAsIGVuZCAtIHN0YXJ0KTtcbiAgICAgIHN0YXJ0ID0gZW5kO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBvc2l0aW9uKHAsIG0pIHtcbiAgICB3aGlsZSAocCA+PSBsaW5lRW5kICYmIChtID0gbGluZVBhdHRlcm4uZXhlYyhzb3VyY2UpKSkge1xuICAgICAgbGluZVN0YXJ0ID0gbS5pbmRleDtcbiAgICAgIGxpbmVFbmQgPSBsaW5lU3RhcnQgKyBtWzBdLmxlbmd0aDtcbiAgICAgIGxvY2F0b3IubGluZU51bWJlcisrO1xuICAgIH1cblxuICAgIGxvY2F0b3IuY29sdW1uTnVtYmVyID0gcCAtIGxpbmVTdGFydCArIDE7XG4gIH1cblxuICB2YXIgbGluZVN0YXJ0ID0gMDtcbiAgdmFyIGxpbmVFbmQgPSAwO1xuICB2YXIgbGluZVBhdHRlcm4gPSAvLiooPzpcXHJcXG4/fFxcbil8LiokL2c7XG4gIHZhciBsb2NhdG9yID0gZG9tQnVpbGRlci5sb2NhdG9yO1xuICB2YXIgcGFyc2VTdGFjayA9IFt7XG4gICAgY3VycmVudE5TTWFwOiBkZWZhdWx0TlNNYXBDb3B5XG4gIH1dO1xuICB2YXIgY2xvc2VNYXAgPSB7fTtcbiAgdmFyIHN0YXJ0ID0gMDtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgdGFnU3RhcnQgPSBzb3VyY2UuaW5kZXhPZignPCcsIHN0YXJ0KTtcblxuICAgICAgaWYgKHRhZ1N0YXJ0IDwgMCkge1xuICAgICAgICBpZiAoIXNvdXJjZS5zdWJzdHIoc3RhcnQpLm1hdGNoKC9eXFxzKiQvKSkge1xuICAgICAgICAgIHZhciBkb2MgPSBkb21CdWlsZGVyLmRvYztcbiAgICAgICAgICB2YXIgdGV4dCA9IGRvYy5jcmVhdGVUZXh0Tm9kZShzb3VyY2Uuc3Vic3RyKHN0YXJ0KSk7XG4gICAgICAgICAgZG9jLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgIGRvbUJ1aWxkZXIuY3VycmVudEVsZW1lbnQgPSB0ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFnU3RhcnQgPiBzdGFydCkge1xuICAgICAgICBhcHBlbmRUZXh0KHRhZ1N0YXJ0KTtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChzb3VyY2UuY2hhckF0KHRhZ1N0YXJ0ICsgMSkpIHtcbiAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgdmFyIGVuZCA9IHNvdXJjZS5pbmRleE9mKCc+JywgdGFnU3RhcnQgKyAzKTtcbiAgICAgICAgICB2YXIgdGFnTmFtZSA9IHNvdXJjZS5zdWJzdHJpbmcodGFnU3RhcnQgKyAyLCBlbmQpO1xuICAgICAgICAgIHZhciBjb25maWcgPSBwYXJzZVN0YWNrLnBvcCgpO1xuXG4gICAgICAgICAgaWYgKGVuZCA8IDApIHtcbiAgICAgICAgICAgIHRhZ05hbWUgPSBzb3VyY2Uuc3Vic3RyaW5nKHRhZ1N0YXJ0ICsgMikucmVwbGFjZSgvW1xcczxdLiovLCAnJyk7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIuZXJyb3IoXCJlbmQgdGFnIG5hbWU6IFwiICsgdGFnTmFtZSArICcgaXMgbm90IGNvbXBsZXRlOicgKyBjb25maWcudGFnTmFtZSk7XG4gICAgICAgICAgICBlbmQgPSB0YWdTdGFydCArIDEgKyB0YWdOYW1lLmxlbmd0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhZ05hbWUubWF0Y2goL1xcczwvKSkge1xuICAgICAgICAgICAgdGFnTmFtZSA9IHRhZ05hbWUucmVwbGFjZSgvW1xcczxdLiovLCAnJyk7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIuZXJyb3IoXCJlbmQgdGFnIG5hbWU6IFwiICsgdGFnTmFtZSArICcgbWF5YmUgbm90IGNvbXBsZXRlJyk7XG4gICAgICAgICAgICBlbmQgPSB0YWdTdGFydCArIDEgKyB0YWdOYW1lLmxlbmd0aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbG9jYWxOU01hcCA9IGNvbmZpZy5sb2NhbE5TTWFwO1xuICAgICAgICAgIHZhciBlbmRNYXRjaCA9IGNvbmZpZy50YWdOYW1lID09IHRhZ05hbWU7XG4gICAgICAgICAgdmFyIGVuZElnbm9yZUNhc2VNYWNoID0gZW5kTWF0Y2ggfHwgY29uZmlnLnRhZ05hbWUgJiYgY29uZmlnLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSB0YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoZW5kSWdub3JlQ2FzZU1hY2gpIHtcbiAgICAgICAgICAgIGRvbUJ1aWxkZXIuZW5kRWxlbWVudChjb25maWcudXJpLCBjb25maWcubG9jYWxOYW1lLCB0YWdOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGxvY2FsTlNNYXApIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgcHJlZml4IGluIGxvY2FsTlNNYXApIHtcbiAgICAgICAgICAgICAgICBkb21CdWlsZGVyLmVuZFByZWZpeE1hcHBpbmcocHJlZml4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWVuZE1hdGNoKSB7XG4gICAgICAgICAgICAgIGVycm9ySGFuZGxlci5mYXRhbEVycm9yKFwiZW5kIHRhZyBuYW1lOiBcIiArIHRhZ05hbWUgKyAnIGlzIG5vdCBtYXRjaCB0aGUgY3VycmVudCBzdGFydCB0YWdOYW1lOicgKyBjb25maWcudGFnTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlU3RhY2sucHVzaChjb25maWcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVuZCsrO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJz8nOlxuICAgICAgICAgIGxvY2F0b3IgJiYgcG9zaXRpb24odGFnU3RhcnQpO1xuICAgICAgICAgIGVuZCA9IHBhcnNlSW5zdHJ1Y3Rpb24oc291cmNlLCB0YWdTdGFydCwgZG9tQnVpbGRlcik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnISc6XG4gICAgICAgICAgbG9jYXRvciAmJiBwb3NpdGlvbih0YWdTdGFydCk7XG4gICAgICAgICAgZW5kID0gcGFyc2VEQ0Moc291cmNlLCB0YWdTdGFydCwgZG9tQnVpbGRlciwgZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGxvY2F0b3IgJiYgcG9zaXRpb24odGFnU3RhcnQpO1xuICAgICAgICAgIHZhciBlbCA9IG5ldyBFbGVtZW50QXR0cmlidXRlcygpO1xuICAgICAgICAgIHZhciBjdXJyZW50TlNNYXAgPSBwYXJzZVN0YWNrW3BhcnNlU3RhY2subGVuZ3RoIC0gMV0uY3VycmVudE5TTWFwO1xuICAgICAgICAgIHZhciBlbmQgPSBwYXJzZUVsZW1lbnRTdGFydFBhcnQoc291cmNlLCB0YWdTdGFydCwgZWwsIGN1cnJlbnROU01hcCwgZW50aXR5UmVwbGFjZXIsIGVycm9ySGFuZGxlcik7XG4gICAgICAgICAgdmFyIGxlbiA9IGVsLmxlbmd0aDtcblxuICAgICAgICAgIGlmICghZWwuY2xvc2VkICYmIGZpeFNlbGZDbG9zZWQoc291cmNlLCBlbmQsIGVsLnRhZ05hbWUsIGNsb3NlTWFwKSkge1xuICAgICAgICAgICAgZWwuY2xvc2VkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKCFlbnRpdHlNYXAubmJzcCkge1xuICAgICAgICAgICAgICBlcnJvckhhbmRsZXIud2FybmluZygndW5jbG9zZWQgeG1sIGF0dHJpYnV0ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChsb2NhdG9yICYmIGxlbikge1xuICAgICAgICAgICAgdmFyIGxvY2F0b3IyID0gY29weUxvY2F0b3IobG9jYXRvciwge30pO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhciBhID0gZWxbaV07XG4gICAgICAgICAgICAgIHBvc2l0aW9uKGEub2Zmc2V0KTtcbiAgICAgICAgICAgICAgYS5sb2NhdG9yID0gY29weUxvY2F0b3IobG9jYXRvciwge30pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb21CdWlsZGVyLmxvY2F0b3IgPSBsb2NhdG9yMjtcblxuICAgICAgICAgICAgaWYgKGFwcGVuZEVsZW1lbnQoZWwsIGRvbUJ1aWxkZXIsIGN1cnJlbnROU01hcCkpIHtcbiAgICAgICAgICAgICAgcGFyc2VTdGFjay5wdXNoKGVsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9tQnVpbGRlci5sb2NhdG9yID0gbG9jYXRvcjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFwcGVuZEVsZW1lbnQoZWwsIGRvbUJ1aWxkZXIsIGN1cnJlbnROU01hcCkpIHtcbiAgICAgICAgICAgICAgcGFyc2VTdGFjay5wdXNoKGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZWwudXJpID09PSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcgJiYgIWVsLmNsb3NlZCkge1xuICAgICAgICAgICAgZW5kID0gcGFyc2VIdG1sU3BlY2lhbENvbnRlbnQoc291cmNlLCBlbmQsIGVsLnRhZ05hbWUsIGVudGl0eVJlcGxhY2VyLCBkb21CdWlsZGVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW5kKys7XG4gICAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3JIYW5kbGVyLmVycm9yKCdlbGVtZW50IHBhcnNlIGVycm9yOiAnICsgZSk7XG4gICAgICBlbmQgPSAtMTtcbiAgICB9XG5cbiAgICBpZiAoZW5kID4gc3RhcnQpIHtcbiAgICAgIHN0YXJ0ID0gZW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcHBlbmRUZXh0KE1hdGgubWF4KHRhZ1N0YXJ0LCBzdGFydCkgKyAxKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29weUxvY2F0b3IoZiwgdCkge1xuICB0LmxpbmVOdW1iZXIgPSBmLmxpbmVOdW1iZXI7XG4gIHQuY29sdW1uTnVtYmVyID0gZi5jb2x1bW5OdW1iZXI7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBwYXJzZUVsZW1lbnRTdGFydFBhcnQoc291cmNlLCBzdGFydCwgZWwsIGN1cnJlbnROU01hcCwgZW50aXR5UmVwbGFjZXIsIGVycm9ySGFuZGxlcikge1xuICB2YXIgYXR0ck5hbWU7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIHAgPSArK3N0YXJ0O1xuICB2YXIgcyA9IFNfVEFHO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdmFyIGMgPSBzb3VyY2UuY2hhckF0KHApO1xuXG4gICAgc3dpdGNoIChjKSB7XG4gICAgICBjYXNlICc9JzpcbiAgICAgICAgaWYgKHMgPT09IFNfQVRUUikge1xuICAgICAgICAgIGF0dHJOYW1lID0gc291cmNlLnNsaWNlKHN0YXJ0LCBwKTtcbiAgICAgICAgICBzID0gU19FUTtcbiAgICAgICAgfSBlbHNlIGlmIChzID09PSBTX0FUVFJfU1BBQ0UpIHtcbiAgICAgICAgICBzID0gU19FUTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSBlcXVhbCBtdXN0IGFmdGVyIGF0dHJOYW1lJyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnXFwnJzpcbiAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgaWYgKHMgPT09IFNfRVEgfHwgcyA9PT0gU19BVFRSKSB7XG4gICAgICAgICAgICBpZiAocyA9PT0gU19BVFRSKSB7XG4gICAgICAgICAgICAgIGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgdmFsdWUgbXVzdCBhZnRlciBcIj1cIicpO1xuICAgICAgICAgICAgICBhdHRyTmFtZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXJ0ID0gcCArIDE7XG4gICAgICAgICAgICBwID0gc291cmNlLmluZGV4T2YoYywgc3RhcnQpO1xuXG4gICAgICAgICAgICBpZiAocCA+IDApIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApLnJlcGxhY2UoLyYjP1xcdys7L2csIGVudGl0eVJlcGxhY2VyKTtcbiAgICAgICAgICAgICAgZWwuYWRkKGF0dHJOYW1lLCB2YWx1ZSwgc3RhcnQgLSAxKTtcbiAgICAgICAgICAgICAgcyA9IFNfQVRUUl9FTkQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2F0dHJpYnV0ZSB2YWx1ZSBubyBlbmQgXFwnJyArIGMgKyAnXFwnIG1hdGNoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChzID09IFNfQVRUUl9OT1FVT1RfVkFMVUUpIHtcbiAgICAgICAgICB2YWx1ZSA9IHNvdXJjZS5zbGljZShzdGFydCwgcCkucmVwbGFjZSgvJiM/XFx3KzsvZywgZW50aXR5UmVwbGFjZXIpO1xuICAgICAgICAgIGVsLmFkZChhdHRyTmFtZSwgdmFsdWUsIHN0YXJ0KTtcbiAgICAgICAgICBlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJyArIGF0dHJOYW1lICsgJ1wiIG1pc3NlZCBzdGFydCBxdW90KCcgKyBjICsgJykhIScpO1xuICAgICAgICAgIHN0YXJ0ID0gcCArIDE7XG4gICAgICAgICAgcyA9IFNfQVRUUl9FTkQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhdHRyaWJ1dGUgdmFsdWUgbXVzdCBhZnRlciBcIj1cIicpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJy8nOlxuICAgICAgICBzd2l0Y2ggKHMpIHtcbiAgICAgICAgICBjYXNlIFNfVEFHOlxuICAgICAgICAgICAgZWwuc2V0VGFnTmFtZShzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApKTtcblxuICAgICAgICAgIGNhc2UgU19BVFRSX0VORDpcbiAgICAgICAgICBjYXNlIFNfVEFHX1NQQUNFOlxuICAgICAgICAgIGNhc2UgU19UQUdfQ0xPU0U6XG4gICAgICAgICAgICBzID0gU19UQUdfQ0xPU0U7XG4gICAgICAgICAgICBlbC5jbG9zZWQgPSB0cnVlO1xuXG4gICAgICAgICAgY2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOlxuICAgICAgICAgIGNhc2UgU19BVFRSOlxuICAgICAgICAgIGNhc2UgU19BVFRSX1NQQUNFOlxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXR0cmlidXRlIGludmFsaWQgY2xvc2UgY2hhcignLycpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJyc6XG4gICAgICAgIGVycm9ySGFuZGxlci5lcnJvcigndW5leHBlY3RlZCBlbmQgb2YgaW5wdXQnKTtcblxuICAgICAgICBpZiAocyA9PSBTX1RBRykge1xuICAgICAgICAgIGVsLnNldFRhZ05hbWUoc291cmNlLnNsaWNlKHN0YXJ0LCBwKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcDtcblxuICAgICAgY2FzZSAnPic6XG4gICAgICAgIHN3aXRjaCAocykge1xuICAgICAgICAgIGNhc2UgU19UQUc6XG4gICAgICAgICAgICBlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCwgcCkpO1xuXG4gICAgICAgICAgY2FzZSBTX0FUVFJfRU5EOlxuICAgICAgICAgIGNhc2UgU19UQUdfU1BBQ0U6XG4gICAgICAgICAgY2FzZSBTX1RBR19DTE9TRTpcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOlxuICAgICAgICAgIGNhc2UgU19BVFRSOlxuICAgICAgICAgICAgdmFsdWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUuc2xpY2UoLTEpID09PSAnLycpIHtcbiAgICAgICAgICAgICAgZWwuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIFNfQVRUUl9TUEFDRTpcbiAgICAgICAgICAgIGlmIChzID09PSBTX0FUVFJfU1BBQ0UpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBhdHRyTmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHMgPT0gU19BVFRSX05PUVVPVF9WQUxVRSkge1xuICAgICAgICAgICAgICBlcnJvckhhbmRsZXIud2FybmluZygnYXR0cmlidXRlIFwiJyArIHZhbHVlICsgJ1wiIG1pc3NlZCBxdW90KFwiKSEhJyk7XG4gICAgICAgICAgICAgIGVsLmFkZChhdHRyTmFtZSwgdmFsdWUucmVwbGFjZSgvJiM/XFx3KzsvZywgZW50aXR5UmVwbGFjZXIpLCBzdGFydCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoY3VycmVudE5TTWFwWycnXSAhPT0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnIHx8ICF2YWx1ZS5tYXRjaCgvXig/OmRpc2FibGVkfGNoZWNrZWR8c2VsZWN0ZWQpJC9pKSkge1xuICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlci53YXJuaW5nKCdhdHRyaWJ1dGUgXCInICsgdmFsdWUgKyAnXCIgbWlzc2VkIHZhbHVlISEgXCInICsgdmFsdWUgKyAnXCIgaW5zdGVhZCEhJyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBlbC5hZGQodmFsdWUsIHZhbHVlLCBzdGFydCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBTX0VROlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhdHRyaWJ1dGUgdmFsdWUgbWlzc2VkISEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwO1xuXG4gICAgICBjYXNlIFwiXFx4ODBcIjpcbiAgICAgICAgYyA9ICcgJztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGMgPD0gJyAnKSB7XG4gICAgICAgICAgc3dpdGNoIChzKSB7XG4gICAgICAgICAgICBjYXNlIFNfVEFHOlxuICAgICAgICAgICAgICBlbC5zZXRUYWdOYW1lKHNvdXJjZS5zbGljZShzdGFydCwgcCkpO1xuICAgICAgICAgICAgICBzID0gU19UQUdfU1BBQ0U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFNfQVRUUjpcbiAgICAgICAgICAgICAgYXR0ck5hbWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApO1xuICAgICAgICAgICAgICBzID0gU19BVFRSX1NQQUNFO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTX0FUVFJfTk9RVU9UX1ZBTFVFOlxuICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Uuc2xpY2Uoc3RhcnQsIHApLnJlcGxhY2UoLyYjP1xcdys7L2csIGVudGl0eVJlcGxhY2VyKTtcbiAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicgKyB2YWx1ZSArICdcIiBtaXNzZWQgcXVvdChcIikhIScpO1xuICAgICAgICAgICAgICBlbC5hZGQoYXR0ck5hbWUsIHZhbHVlLCBzdGFydCk7XG5cbiAgICAgICAgICAgIGNhc2UgU19BVFRSX0VORDpcbiAgICAgICAgICAgICAgcyA9IFNfVEFHX1NQQUNFO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3dpdGNoIChzKSB7XG4gICAgICAgICAgICBjYXNlIFNfQVRUUl9TUEFDRTpcbiAgICAgICAgICAgICAgdmFyIHRhZ05hbWUgPSBlbC50YWdOYW1lO1xuXG4gICAgICAgICAgICAgIGlmIChjdXJyZW50TlNNYXBbJyddICE9PSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcgfHwgIWF0dHJOYW1lLm1hdGNoKC9eKD86ZGlzYWJsZWR8Y2hlY2tlZHxzZWxlY3RlZCkkL2kpKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBcIicgKyBhdHRyTmFtZSArICdcIiBtaXNzZWQgdmFsdWUhISBcIicgKyBhdHRyTmFtZSArICdcIiBpbnN0ZWFkMiEhJyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBlbC5hZGQoYXR0ck5hbWUsIGF0dHJOYW1lLCBzdGFydCk7XG4gICAgICAgICAgICAgIHN0YXJ0ID0gcDtcbiAgICAgICAgICAgICAgcyA9IFNfQVRUUjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgU19BVFRSX0VORDpcbiAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyLndhcm5pbmcoJ2F0dHJpYnV0ZSBzcGFjZSBpcyByZXF1aXJlZFwiJyArIGF0dHJOYW1lICsgJ1wiISEnKTtcblxuICAgICAgICAgICAgY2FzZSBTX1RBR19TUEFDRTpcbiAgICAgICAgICAgICAgcyA9IFNfQVRUUjtcbiAgICAgICAgICAgICAgc3RhcnQgPSBwO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTX0VROlxuICAgICAgICAgICAgICBzID0gU19BVFRSX05PUVVPVF9WQUxVRTtcbiAgICAgICAgICAgICAgc3RhcnQgPSBwO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBTX1RBR19DTE9TRTpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZWxlbWVudHMgY2xvc2VkIGNoYXJhY3RlciAnLycgYW5kICc+JyBtdXN0IGJlIGNvbm5lY3RlZCB0b1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHArKztcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBlbmRFbGVtZW50KGVsLCBkb21CdWlsZGVyLCBjdXJyZW50TlNNYXApIHtcbiAgdmFyIHRhZ05hbWUgPSBlbC50YWdOYW1lO1xuICB2YXIgbG9jYWxOU01hcCA9IG51bGw7XG4gIHZhciBpID0gZWwubGVuZ3RoO1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgYSA9IGVsW2ldO1xuICAgIHZhciBxTmFtZSA9IGEucU5hbWU7XG4gICAgdmFyIHZhbHVlID0gYS52YWx1ZTtcbiAgICB2YXIgbnNwID0gcU5hbWUuaW5kZXhPZignOicpO1xuXG4gICAgaWYgKG5zcCA+IDApIHtcbiAgICAgIHZhciBwcmVmaXggPSBhLnByZWZpeCA9IHFOYW1lLnNsaWNlKDAsIG5zcCk7XG4gICAgICB2YXIgbG9jYWxOYW1lID0gcU5hbWUuc2xpY2UobnNwICsgMSk7XG4gICAgICB2YXIgbnNQcmVmaXggPSBwcmVmaXggPT09ICd4bWxucycgJiYgbG9jYWxOYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbE5hbWUgPSBxTmFtZTtcbiAgICAgIHByZWZpeCA9IG51bGw7XG4gICAgICBuc1ByZWZpeCA9IHFOYW1lID09PSAneG1sbnMnICYmICcnO1xuICAgIH1cblxuICAgIGEubG9jYWxOYW1lID0gbG9jYWxOYW1lO1xuXG4gICAgaWYgKG5zUHJlZml4ICE9PSBmYWxzZSkge1xuICAgICAgaWYgKGxvY2FsTlNNYXAgPT0gbnVsbCkge1xuICAgICAgICBsb2NhbE5TTWFwID0ge307XG5cbiAgICAgICAgX2NvcHkoY3VycmVudE5TTWFwLCBjdXJyZW50TlNNYXAgPSB7fSk7XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnROU01hcFtuc1ByZWZpeF0gPSBsb2NhbE5TTWFwW25zUHJlZml4XSA9IHZhbHVlO1xuICAgICAgYS51cmkgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nO1xuICAgICAgZG9tQnVpbGRlci5zdGFydFByZWZpeE1hcHBpbmcobnNQcmVmaXgsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaSA9IGVsLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgYSA9IGVsW2ldO1xuICAgIHZhciBwcmVmaXggPSBhLnByZWZpeDtcblxuICAgIGlmIChwcmVmaXgpIHtcbiAgICAgIGlmIChwcmVmaXggPT09ICd4bWwnKSB7XG4gICAgICAgIGEudXJpID0gJ2h0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmVmaXggIT09ICd4bWxucycpIHtcbiAgICAgICAgYS51cmkgPSBjdXJyZW50TlNNYXBbcHJlZml4IHx8ICcnXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgbnNwID0gdGFnTmFtZS5pbmRleE9mKCc6Jyk7XG5cbiAgaWYgKG5zcCA+IDApIHtcbiAgICBwcmVmaXggPSBlbC5wcmVmaXggPSB0YWdOYW1lLnNsaWNlKDAsIG5zcCk7XG4gICAgbG9jYWxOYW1lID0gZWwubG9jYWxOYW1lID0gdGFnTmFtZS5zbGljZShuc3AgKyAxKTtcbiAgfSBlbHNlIHtcbiAgICBwcmVmaXggPSBudWxsO1xuICAgIGxvY2FsTmFtZSA9IGVsLmxvY2FsTmFtZSA9IHRhZ05hbWU7XG4gIH1cblxuICB2YXIgbnMgPSBlbC51cmkgPSBjdXJyZW50TlNNYXBbcHJlZml4IHx8ICcnXTtcbiAgZG9tQnVpbGRlci5zdGFydEVsZW1lbnQobnMsIGxvY2FsTmFtZSwgdGFnTmFtZSwgZWwpO1xuXG4gIGlmIChlbC5jbG9zZWQpIHtcbiAgICBkb21CdWlsZGVyLmVuZEVsZW1lbnQobnMsIGxvY2FsTmFtZSwgdGFnTmFtZSk7XG5cbiAgICBpZiAobG9jYWxOU01hcCkge1xuICAgICAgZm9yIChwcmVmaXggaW4gbG9jYWxOU01hcCkge1xuICAgICAgICBkb21CdWlsZGVyLmVuZFByZWZpeE1hcHBpbmcocHJlZml4KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWwuY3VycmVudE5TTWFwID0gY3VycmVudE5TTWFwO1xuICAgIGVsLmxvY2FsTlNNYXAgPSBsb2NhbE5TTWFwO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlSHRtbFNwZWNpYWxDb250ZW50KHNvdXJjZSwgZWxTdGFydEVuZCwgdGFnTmFtZSwgZW50aXR5UmVwbGFjZXIsIGRvbUJ1aWxkZXIpIHtcbiAgaWYgKC9eKD86c2NyaXB0fHRleHRhcmVhKSQvaS50ZXN0KHRhZ05hbWUpKSB7XG4gICAgdmFyIGVsRW5kU3RhcnQgPSBzb3VyY2UuaW5kZXhPZignPC8nICsgdGFnTmFtZSArICc+JywgZWxTdGFydEVuZCk7XG4gICAgdmFyIHRleHQgPSBzb3VyY2Uuc3Vic3RyaW5nKGVsU3RhcnRFbmQgKyAxLCBlbEVuZFN0YXJ0KTtcblxuICAgIGlmICgvWyY8XS8udGVzdCh0ZXh0KSkge1xuICAgICAgaWYgKC9ec2NyaXB0JC9pLnRlc3QodGFnTmFtZSkpIHtcbiAgICAgICAgZG9tQnVpbGRlci5jaGFyYWN0ZXJzKHRleHQsIDAsIHRleHQubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGVsRW5kU3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoLyYjP1xcdys7L2csIGVudGl0eVJlcGxhY2VyKTtcbiAgICAgIGRvbUJ1aWxkZXIuY2hhcmFjdGVycyh0ZXh0LCAwLCB0ZXh0Lmxlbmd0aCk7XG4gICAgICByZXR1cm4gZWxFbmRTdGFydDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxTdGFydEVuZCArIDE7XG59XG5cbmZ1bmN0aW9uIGZpeFNlbGZDbG9zZWQoc291cmNlLCBlbFN0YXJ0RW5kLCB0YWdOYW1lLCBjbG9zZU1hcCkge1xuICB2YXIgcG9zID0gY2xvc2VNYXBbdGFnTmFtZV07XG5cbiAgaWYgKHBvcyA9PSBudWxsKSB7XG4gICAgcG9zID0gc291cmNlLmxhc3RJbmRleE9mKCc8LycgKyB0YWdOYW1lICsgJz4nKTtcblxuICAgIGlmIChwb3MgPCBlbFN0YXJ0RW5kKSB7XG4gICAgICBwb3MgPSBzb3VyY2UubGFzdEluZGV4T2YoJzwvJyArIHRhZ05hbWUpO1xuICAgIH1cblxuICAgIGNsb3NlTWFwW3RhZ05hbWVdID0gcG9zO1xuICB9XG5cbiAgcmV0dXJuIHBvcyA8IGVsU3RhcnRFbmQ7XG59XG5cbmZ1bmN0aW9uIF9jb3B5KHNvdXJjZSwgdGFyZ2V0KSB7XG4gIGZvciAodmFyIG4gaW4gc291cmNlKSB7XG4gICAgdGFyZ2V0W25dID0gc291cmNlW25dO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRENDKHNvdXJjZSwgc3RhcnQsIGRvbUJ1aWxkZXIsIGVycm9ySGFuZGxlcikge1xuICB2YXIgbmV4dCA9IHNvdXJjZS5jaGFyQXQoc3RhcnQgKyAyKTtcblxuICBzd2l0Y2ggKG5leHQpIHtcbiAgICBjYXNlICctJzpcbiAgICAgIGlmIChzb3VyY2UuY2hhckF0KHN0YXJ0ICsgMykgPT09ICctJykge1xuICAgICAgICB2YXIgZW5kID0gc291cmNlLmluZGV4T2YoJy0tPicsIHN0YXJ0ICsgNCk7XG5cbiAgICAgICAgaWYgKGVuZCA+IHN0YXJ0KSB7XG4gICAgICAgICAgZG9tQnVpbGRlci5jb21tZW50KHNvdXJjZSwgc3RhcnQgKyA0LCBlbmQgLSBzdGFydCAtIDQpO1xuICAgICAgICAgIHJldHVybiBlbmQgKyAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVycm9ySGFuZGxlci5lcnJvcihcIlVuY2xvc2VkIGNvbW1lbnRcIik7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHNvdXJjZS5zdWJzdHIoc3RhcnQgKyAzLCA2KSA9PSAnQ0RBVEFbJykge1xuICAgICAgICB2YXIgZW5kID0gc291cmNlLmluZGV4T2YoJ11dPicsIHN0YXJ0ICsgOSk7XG4gICAgICAgIGRvbUJ1aWxkZXIuc3RhcnRDREFUQSgpO1xuICAgICAgICBkb21CdWlsZGVyLmNoYXJhY3RlcnMoc291cmNlLCBzdGFydCArIDksIGVuZCAtIHN0YXJ0IC0gOSk7XG4gICAgICAgIGRvbUJ1aWxkZXIuZW5kQ0RBVEEoKTtcbiAgICAgICAgcmV0dXJuIGVuZCArIDM7XG4gICAgICB9XG5cbiAgICAgIHZhciBtYXRjaHMgPSBzcGxpdChzb3VyY2UsIHN0YXJ0KTtcbiAgICAgIHZhciBsZW4gPSBtYXRjaHMubGVuZ3RoO1xuXG4gICAgICBpZiAobGVuID4gMSAmJiAvIWRvY3R5cGUvaS50ZXN0KG1hdGNoc1swXVswXSkpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBtYXRjaHNbMV1bMF07XG4gICAgICAgIHZhciBwdWJpZCA9IGxlbiA+IDMgJiYgL15wdWJsaWMkL2kudGVzdChtYXRjaHNbMl1bMF0pICYmIG1hdGNoc1szXVswXTtcbiAgICAgICAgdmFyIHN5c2lkID0gbGVuID4gNCAmJiBtYXRjaHNbNF1bMF07XG4gICAgICAgIHZhciBsYXN0TWF0Y2ggPSBtYXRjaHNbbGVuIC0gMV07XG4gICAgICAgIGRvbUJ1aWxkZXIuc3RhcnREVEQobmFtZSwgcHViaWQgJiYgcHViaWQucmVwbGFjZSgvXihbJ1wiXSkoLio/KVxcMSQvLCAnJDInKSwgc3lzaWQgJiYgc3lzaWQucmVwbGFjZSgvXihbJ1wiXSkoLio/KVxcMSQvLCAnJDInKSk7XG4gICAgICAgIGRvbUJ1aWxkZXIuZW5kRFREKCk7XG4gICAgICAgIHJldHVybiBsYXN0TWF0Y2guaW5kZXggKyBsYXN0TWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgfVxuXG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW5zdHJ1Y3Rpb24oc291cmNlLCBzdGFydCwgZG9tQnVpbGRlcikge1xuICB2YXIgZW5kID0gc291cmNlLmluZGV4T2YoJz8+Jywgc3RhcnQpO1xuXG4gIGlmIChlbmQpIHtcbiAgICB2YXIgbWF0Y2ggPSBzb3VyY2Uuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpLm1hdGNoKC9ePFxcPyhcXFMqKVxccyooW1xcc1xcU10qPylcXHMqJC8pO1xuXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICB2YXIgbGVuID0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgZG9tQnVpbGRlci5wcm9jZXNzaW5nSW5zdHJ1Y3Rpb24obWF0Y2hbMV0sIG1hdGNoWzJdKTtcbiAgICAgIHJldHVybiBlbmQgKyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBFbGVtZW50QXR0cmlidXRlcyhzb3VyY2UpIHt9XG5cbkVsZW1lbnRBdHRyaWJ1dGVzLnByb3RvdHlwZSA9IHtcbiAgc2V0VGFnTmFtZTogZnVuY3Rpb24gc2V0VGFnTmFtZSh0YWdOYW1lKSB7XG4gICAgaWYgKCF0YWdOYW1lUGF0dGVybi50ZXN0KHRhZ05hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgdGFnTmFtZTonICsgdGFnTmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy50YWdOYW1lID0gdGFnTmFtZTtcbiAgfSxcbiAgYWRkOiBmdW5jdGlvbiBhZGQocU5hbWUsIHZhbHVlLCBvZmZzZXQpIHtcbiAgICBpZiAoIXRhZ05hbWVQYXR0ZXJuLnRlc3QocU5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgYXR0cmlidXRlOicgKyBxTmFtZSk7XG4gICAgfVxuXG4gICAgdGhpc1t0aGlzLmxlbmd0aCsrXSA9IHtcbiAgICAgIHFOYW1lOiBxTmFtZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIG9mZnNldDogb2Zmc2V0XG4gICAgfTtcbiAgfSxcbiAgbGVuZ3RoOiAwLFxuICBnZXRMb2NhbE5hbWU6IGZ1bmN0aW9uIGdldExvY2FsTmFtZShpKSB7XG4gICAgcmV0dXJuIHRoaXNbaV0ubG9jYWxOYW1lO1xuICB9LFxuICBnZXRMb2NhdG9yOiBmdW5jdGlvbiBnZXRMb2NhdG9yKGkpIHtcbiAgICByZXR1cm4gdGhpc1tpXS5sb2NhdG9yO1xuICB9LFxuICBnZXRRTmFtZTogZnVuY3Rpb24gZ2V0UU5hbWUoaSkge1xuICAgIHJldHVybiB0aGlzW2ldLnFOYW1lO1xuICB9LFxuICBnZXRVUkk6IGZ1bmN0aW9uIGdldFVSSShpKSB7XG4gICAgcmV0dXJuIHRoaXNbaV0udXJpO1xuICB9LFxuICBnZXRWYWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoaSkge1xuICAgIHJldHVybiB0aGlzW2ldLnZhbHVlO1xuICB9XG59O1xuXG5mdW5jdGlvbiBzcGxpdChzb3VyY2UsIHN0YXJ0KSB7XG4gIHZhciBtYXRjaDtcbiAgdmFyIGJ1ZiA9IFtdO1xuICB2YXIgcmVnID0gLydbXiddKyd8XCJbXlwiXStcInxbXlxcczw+XFwvPV0rPT98KFxcLz9cXHMqPnw8KS9nO1xuICByZWcubGFzdEluZGV4ID0gc3RhcnQ7XG4gIHJlZy5leGVjKHNvdXJjZSk7XG5cbiAgd2hpbGUgKG1hdGNoID0gcmVnLmV4ZWMoc291cmNlKSkge1xuICAgIGJ1Zi5wdXNoKG1hdGNoKTtcbiAgICBpZiAobWF0Y2hbMV0pIHJldHVybiBidWY7XG4gIH1cbn1cblxuZXhwb3J0cy5YTUxSZWFkZXIgPSBYTUxSZWFkZXI7XG5cbn0se31dfSx7fSxbNTVdKTtcbiJdLCJmaWxlIjoid2ViLmpzIn0=
