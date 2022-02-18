// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"draw.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var style = "/*\n** \u4F60\u597D\uFF0C\u73B0\u5728\u6211\u8981\u52A8\u6001\u7684\u753B\u4E00\u4E2A\n** \u53EF\u7231\u7684\u5C0F\u9EC4\u4EBA\uFF0C\u628A\u4ED6\u9001\u7ED9\u4F60\n*/\n.container {\n  position: relative;\n  top: 0;\n  left: 0;\n  /* background-color: #1f1f1f; */\n  min-width: 100vh;\n  min-height: 100vh;\n}\n/*\n** \u9996\u5148\uFF0C\u662F\u5C0F\u9EC4\u4EBA\u7684\u8EAB\u4F53\n*/\n.body {\n  background: #fce840;\n  position: absolute;\n  top: 50px;\n  left: 50%;\n  margin-left: -125px;\n  height: 400px;\n  width: 250px;\n  border-top-right-radius: 130px;\n  border-top-left-radius: 130px;\n}\n/*\n** \u73B0\u5728\u662F\u4ED6\u7684\u773C\u775B\n*/\n.eye1,\n.eye2 {\n  position: absolute;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  background: white;\n  z-index: 2;\n  /* animation: move .5s linear infinite; */\n}\n.eye1 {\n  top: 152px;\n  left: 50%;\n  margin-left: -69px;\n}\n\n.eye2 {\n  top: 152px;\n  left: 50%;\n  margin-left: 9px;\n}\n\n.eye1::after,\n.eye2::after {\n  position: absolute;\n  content: '';\n  display: block;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background: black;\n  z-index: 3;\n}\n\n.eye1::after {\n  top: 15px;\n  left: 15px;\n}\n\n.eye2::after {\n  top: 15px;\n  left: 15px;\n}\n\n.glass1,\n.glass2 {\n  position: absolute;\n  top: 144px;\n  left: 50%;\n  width: 78px;\n  height: 78px;\n  background: #d2d1d2;\n  border-radius: 50%;\n  z-index: 1;\n}\n\n.glass1 {\n  margin-left: -77px;\n}\n\n.glass3,\n.glass4 {\n  position: absolute;\n  width: 52px;\n  height: 26px;\n  background: #000000;\n  z-index: 0;\n}\n\n.glass3 {\n  top: 170px;\n  left: 50%;\n  margin-left: -124px;\n}\n\n.glass4 {\n  top: 170px;\n  left: 50%;\n  margin-left: 73px;\n}\n/*\n** \u7259\u9F7F\n*/\n.mouth1,\n.mouth2 {\n  background: black;\n  border-radius: 50%;\n  position: absolute;\n}\n\n.mouth1 {\n  height: 75px;\n  width: 110px;\n  top: 228px;\n  left: 50%;\n  margin-left: -55px;\n}\n\n.mouth2 {\n  border-radius: 31%;\n  height: 51px;\n  width: 120px;\n  background: #fce840;\n  top: 227px;\n  left: 50%;\n  margin-left: -60px;\n  z-index: 5;\n}\n\n.teeth1,\n.teeth2,\n.teeth3,\n.teeth4,\n.teeth5,\n.teeth6 {\n  position: absolute;\n  height: 15px;\n  width: 20px;\n  border-radius: 50%;\n  background: white;\n  z-index: 4;\n}\n\n.teeth1 {\n  top: 264px;\n  left: 50%;\n  margin-left: -50px;\n}\n\n.teeth2 {\n  top: 268px;\n  left: 50%;\n  margin-left: -35px;\n}\n\n.teeth3 {\n  top: 268px;\n  left: 50%;\n  margin-left: -17px;\n}\n\n.teeth4 {\n  top: 269px;\n  left: 50%;\n}\n\n.teeth5 {\n  top: 268px;\n  left: 50%;\n  margin-left: 16px;\n}\n\n.teeth6 {\n  top: 265px;\n  left: 50%;\n  margin-left: 32px;\n}\n/*\n** \u8FD8\u6709\u4ED6\u7684\u624B\u81C2\n*/\n.hand1,\n.hand2 {\n  position: absolute;\n  border: 23px solid;\n  width: 146px;\n  height: 146px;\n  border-radius: 45px;\n  border-color: #fce840 transparent transparent transparent;\n}\n\n.hand1 {\n  transform: rotate(90deg);\n  top: 311px;\n  left: 50%;\n  margin-left: 6px;\n}\n\n.hand2 {\n  transform: rotate(-90deg);\n  top: 311px;\n  left: 50%;\n  margin-left: -153px;\n}\n/*\n** \u73B0\u5728\u7ED9\u4ED6\u7A7F\u4E0A\u8863\u670D\n*/\n.jeans1 {\n  height: 100px;\n  width: 248px;\n  background: #496c8a;\n  border-bottom-left-radius: 100px;\n  border-bottom-right-radius: 100px;\n  position: absolute;\n  top: 450px;\n  left: 50%;\n  margin-left: -124px;\n}\n\n.jeans2 {\n  height: 90px;\n  width: 170px;\n  background: #496c8a;\n  position: absolute;\n  top: 369px;\n  left: 50%;\n  margin-left: -85px;\n}\n\n.jeans3,\n.jeans4 {\n  position: absolute;\n  height: 99px;\n  width: 20px;\n  background: #496c8a;\n}\n\n.jeans3 {\n  top: 301px;\n  left: 50%;\n  margin-left: 88px;\n  transform: rotate(46deg);\n}\n\n.jeans4 {\n  top: 301px;\n  left: 50%;\n  margin-left: -107px;\n  transform: rotate(-46deg);\n}\n\n.button1,\n.button2 {\n  position: absolute;\n  height: 20px;\n  width: 20px;\n  background: black;\n  border-radius: 50%;\n}\n\n.button1 {\n  top: 362px;\n  left: 50%;\n  margin-left: -85px;\n}\n\n.button2 {\n  top: 362px;\n  left: 50%;\n  margin-left: 65px;\n}\n\n.leg1,\n.leg2 {\n  position: absolute;\n  height: 40px;\n  width: 25px;\n  background: #496c8a;\n}\n/*\n** \u628A\u817F\u753B\u4E0A\n*/\n.leg1 {\n  top: 545px;\n  left: 50%;\n  margin-left: -50px;\n}\n\n.leg2 {\n  top: 545px;\n  left: 50%;\n  margin-left: 25px;\n}\n\n.leg3,\n.leg4 {\n  position: absolute;\n  height: 16px;\n  width: 37px;\n  background: #000000;\n}\n\n.leg3 {\n  left: 50%;\n  top: 580px;\n  margin-left: 25px;\n  border-top-right-radius: 50%;\n}\n\n.leg4 {\n  left: 50%;\n  top: 580px;\n  margin-left: -62px;\n  border-top-left-radius: 50%;\n}\n\n.glove1,\n.glove2 {\n  position: absolute;\n  height: 44px;\n  width: 22px;\n  background: black;\n  z-index: 5;\n}\n\n.glove1 {\n  left: 50%;\n  top: 424px;\n  margin-left: 110px;\n  transform: rotate(48deg);\n}\n\n.glove2 {\n  left: 50%;\n  top: 422px;\n  margin-left: -136px;\n  transform: rotate(-42deg);\n}\n\n.pocket1,\n.pocket2 {\n  height: 0;\n  width: 0;\n  border: 14px solid #607D8B;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-bottom-right-radius: 30px;\n  background: #607D8B;\n  position: absolute;\n  z-index: 4;\n}\n\n.pocket1 {\n  top: 450px;\n  left: 50%;\n  margin-left: 91px;\n  transform: rotate(93deg);\n}\n\n.pocket2 {\n  top: 450px;\n  left: 50%;\n  margin-left: -121px;\n  transform: rotate(-3deg);\n}\n\n\n/*\n** \u8FD9\u6837\u5C31\u753B\u5B8C\u5566\uFF0C\u4E00\u4E2A\u53EF\u7231\u7684\u5C0F\u9EC4\u4EBA\u9001\u7ED9\u4F60\n*/";
var _default = style;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _draw = _interopRequireDefault(require("./draw.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = document.querySelector('#style');
var text = document.querySelector('#text');
var textContainer = document.querySelector('#text-container');
var btnPlayPause = document.querySelector('#btnPlayPause');
var btnSlow = document.querySelector('#btnSlow');
var btnNormal = document.querySelector('#btnNormal');
var btnFast = document.querySelector('#btnFast');
var player = {
  n: 0,
  styleText: '',
  timerId: undefined,
  intervalTime: 100,
  playState: 0,
  init: function init() {
    player.play();
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    btnPlayPause.onclick = function () {
      if (player.playState === 1) {
        player.pause();
      } else {
        player.play();
      }
    };

    btnSlow.onclick = function () {
      player.btnDeactivate();
      btnSlow.classList.add('activated');
      player.slow();
    };

    btnNormal.onclick = function () {
      player.btnDeactivate();
      btnNormal.classList.add('activated');
      player.normal();
    };

    btnFast.onclick = function () {
      player.btnDeactivate();
      btnFast.classList.add('activated');
      player.fast();
    };
  },
  btnDeactivate: function btnDeactivate() {
    btnSlow.classList.remove('activated');
    btnNormal.classList.remove('activated');
    btnFast.classList.remove('activated');
  },
  run: function run() {
    if (_draw.default[player.n] === '\n') {
      player.styleText += '<br>';
    } else if (_draw.default[player.n] === ' ') {
      player.styleText += '&nbsp';
    } else {
      player.styleText += _draw.default[player.n];
    }

    style.innerHTML = _draw.default.substring(0, player.n + 1);
    text.innerHTML = player.styleText;
    textContainer.scrollTop = textContainer.scrollHeight;
    player.n++;

    if (player.n >= _draw.default.length) {
      clearInterval(player.timerId);
    }
  },
  play: function play() {
    if (player.n < _draw.default.length) {
      player.timerId = setInterval(player.run, player.intervalTime);
      player.playState = 1;
      btnPlayPause.innerHTML = btnPlayPause.innerHTML.replace('play', 'pause');
    }
  },
  pause: function pause() {
    player.playState = 0;
    btnPlayPause.innerHTML = btnPlayPause.innerHTML.replace('pause', 'play');
    clearInterval(player.timerId);
  },
  slow: function slow() {
    player.pause();
    player.intervalTime = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.intervalTime = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.intervalTime = 0;
    player.play();
  }
};
player.init();
},{"./draw.js":"draw.js"}],"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51978" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map