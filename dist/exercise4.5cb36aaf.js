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
})({"exercise4.ts":[function(require,module,exports) {
// Um desenvolvedor tentou criar um projeto que consome a base de dados de filme do TMDB para criar um organizador de filmes, mas desistiu 
// pois considerou o seu código inviável. Você consegue usar typescript para organizar esse código e a partir daí aprimorar o que foi feito?
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var apiKey = "e0098cb71e067bf0d8aa141dca112910";
var requestToken;
var username;
var password;
var sessionId;
var listId = '7101979';
var loginButton = document.getElementById('login-button');
var searchButton = document.getElementById('search-button');
var searchContainer = document.getElementById('search-container');
var usernameInput = document.getElementById('login');
var passwordInput = document.getElementById('senha');
var apiInput = document.getElementById('api-key');
usernameInput.addEventListener('change', function () {
  preencherLogin();
});
passwordInput.addEventListener('change', function () {
  preencherSenha();
});
apiInput.addEventListener('change', function () {
  preencherApi();
});
loginButton.addEventListener('click', function () {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , criarRequestToken()];

        case 1:
          _a.sent();

          console.log(requestToken);
          return [4
          /*yield*/
          , logar()];

        case 2:
          _a.sent();

          return [4
          /*yield*/
          , criarSessao()];

        case 3:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
});
searchButton.addEventListener('click', function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var lista, queryInput, query, listaDeFilmes, ul, _i, _a, item, li;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          lista = document.getElementById("lista");

          if (lista) {
            lista.outerHTML = "";
          }

          queryInput = document.getElementById('search');
          query = queryInput.value;
          return [4
          /*yield*/
          , procurarFilme(query)];

        case 1:
          listaDeFilmes = _b.sent();
          ul = document.createElement('ul');
          ul.id = "lista";

          if (listaDeFilmes) {
            for (_i = 0, _a = listaDeFilmes.results; _i < _a.length; _i++) {
              item = _a[_i];
              li = document.createElement('li');
              li.appendChild(document.createTextNode(item.original_title));
              ul.appendChild(li);
            }
          }

          console.log(listaDeFilmes);
          searchContainer.appendChild(ul);
          return [2
          /*return*/
          ];
      }
    });
  });
});

function preencherSenha() {
  password = passwordInput.value;
  console.log(password);
  validateLoginButton();
}

function preencherLogin() {
  username = usernameInput.value;
  console.log(username);
  validateLoginButton();
}

function preencherApi() {
  apiKey = apiInput.value;
  console.log(apiKey);
  validateLoginButton();
}

function validateLoginButton() {
  if (password && username && apiKey) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

var HttpClient =
/** @class */
function () {
  function HttpClient() {}

  HttpClient.get = function (_a) {
    var url = _a.url,
        method = _a.method,
        body = _a.body;
    return __awaiter(this, void 0, Promise, function () {
      return __generator(this, function (_b) {
        return [2
        /*return*/
        , new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open(method, url, true);

          request.onload = function () {
            if (request.status >= 200 && request.status < 300) {
              resolve(JSON.parse(request.responseText));
            } else {
              reject({
                status: request.status,
                statusText: request.statusText
              });
            }
          };

          request.onerror = function () {
            reject({
              status: request.status,
              statusText: request.statusText
            });
          };

          if (body) {
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            body = JSON.stringify(body);
          }

          request.send(body);
        })];
      });
    });
  };

  return HttpClient;
}();

function procurarFilme(query) {
  return __awaiter(this, void 0, Promise, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          query = encodeURI(query);
          console.log(query);
          return [4
          /*yield*/
          , HttpClient.get({
            url: "https://api.themoviedb.org/3/search/movie?api_key=".concat(apiKey, "&query=").concat(query),
            method: "GET"
          })];

        case 1:
          result = _a.sent();
          return [2
          /*return*/
          , result];
      }
    });
  });
}

function adicionarFilme(filmeId) {
  return __awaiter(this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , HttpClient.get({
            url: "https://api.themoviedb.org/3/movie/".concat(filmeId, "?api_key=").concat(apiKey, "&language=en-US"),
            method: "GET"
          })];

        case 1:
          result = _a.sent();
          console.log(result);
          return [2
          /*return*/
          ];
      }
    });
  });
}

function criarRequestToken() {
  return __awaiter(this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , HttpClient.get({
            url: "https://api.themoviedb.org/3/authentication/token/new?api_key=".concat(apiKey),
            method: "GET"
          })];

        case 1:
          result = _a.sent();
          requestToken = result.request_token;
          return [2
          /*return*/
          ];
      }
    });
  });
}

function logar() {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , HttpClient.get({
            url: "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=".concat(apiKey),
            method: "POST",
            body: {
              username: "".concat(username),
              password: "".concat(password),
              request_token: "".concat(requestToken)
            }
          })];

        case 1:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
}

function criarSessao() {
  return __awaiter(this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , HttpClient.get({
            url: "https://api.themoviedb.org/3/authentication/session/new?api_key=".concat(apiKey, "&request_token=").concat(requestToken),
            method: "GET"
          })];

        case 1:
          result = _a.sent();
          sessionId = result.session_id;
          return [2
          /*return*/
          ];
      }
    });
  });
}

function criarLista(nomeDaLista, descricao) {
  return __awaiter(this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , HttpClient.get({
            url: "https://api.themoviedb.org/3/list?api_key=".concat(apiKey, "&session_id=").concat(sessionId),
            method: "POST",
            body: {
              name: nomeDaLista,
              description: descricao,
              language: "pt-br"
            }
          })];

        case 1:
          result = _a.sent();
          console.log(result);
          return [2
          /*return*/
          ];
      }
    });
  });
}

function adicionarFilmeNaLista(filmeId, listaId) {
  return __awaiter(this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , HttpClient.get({
            url: "https://api.themoviedb.org/3/list/".concat(listaId, "/add_item?api_key=").concat(apiKey, "&session_id=").concat(sessionId),
            method: "POST",
            body: {
              media_id: filmeId
            }
          })];

        case 1:
          result = _a.sent();
          console.log(result);
          return [2
          /*return*/
          ];
      }
    });
  });
}

function pegarLista() {
  return __awaiter(this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , HttpClient.get({
            url: "https://api.themoviedb.org/3/list/".concat(listId, "?api_key=").concat(apiKey),
            method: "GET"
          })];

        case 1:
          result = _a.sent();
          console.log(result);
          return [2
          /*return*/
          ];
      }
    });
  });
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49471" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","exercise4.ts"], null)
//# sourceMappingURL=/exercise4.5cb36aaf.js.map