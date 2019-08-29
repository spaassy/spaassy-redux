(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spaassy-redux"] = factory();
	else
		root["spaassy-redux"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/arrayWithHoles.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/arrayWithHoles.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js?");

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/nonIterableRest.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/nonIterableRest.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/slicedToArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/slicedToArray.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/typeof.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/typeof.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/_process@0.11.10@process/browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/_process@0.11.10@process/browser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_process@0.11.10@process/browser.js?");

/***/ }),

/***/ "./src/createReducer/index.js":
/*!************************************!*\
  !*** ./src/createReducer/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar createReducer = function createReducer(initialparams, reducerMap) {\n  return function () {\n    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialparams;\n    var action = arguments.length > 1 ? arguments[1] : undefined;\n    var reducer = reducerMap[action.type];\n\n    if (!action.error && action.payload && action.payload.code && action.payload.code != '0') {\n      if (params.get('loading')) {\n        return params.set('loading', false);\n      } else {\n        return params;\n      }\n    }\n\n    return reducer ? reducer(params, action.payload ? action.payload : {}, action.params) : params;\n  };\n};\n\nvar _default = createReducer;\nexports[\"default\"] = _default;\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://spaassy-redux/./src/createReducer/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _bindActionCreators = _interopRequireDefault(__webpack_require__(/*! ./reduxUtils/bindActionCreators */ \"./src/reduxUtils/bindActionCreators.js\"));\n\nvar _combineReducers = _interopRequireDefault(__webpack_require__(/*! ./reduxUtils/combineReducers */ \"./src/reduxUtils/combineReducers.js\"));\n\nvar _createReducer = _interopRequireDefault(__webpack_require__(/*! ./createReducer */ \"./src/createReducer/index.js\"));\n\nvar _reduxPromiseMiddleware = _interopRequireDefault(__webpack_require__(/*! ./reduxPromiseMiddleware */ \"./src/reduxPromiseMiddleware/index.js\"));\n\nmodule.exports = {\n  bindActionCreators: _bindActionCreators[\"default\"],\n  combineReducers: _combineReducers[\"default\"],\n  createReducer: _createReducer[\"default\"],\n  promiseMiddleware: _reduxPromiseMiddleware[\"default\"]\n};\n\n//# sourceURL=webpack://spaassy-redux/./src/index.js?");

/***/ }),

/***/ "./src/reduxPromiseMiddleware/index.js":
/*!*********************************************!*\
  !*** ./src/reduxPromiseMiddleware/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createPromise = createPromise;\nexports[\"default\"] = middleware;\nexports.ActionType = void 0;\n\nvar _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/slicedToArray.js\"));\n\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js\"));\n\nvar _isPromise = _interopRequireDefault(__webpack_require__(/*! ./isPromise.js */ \"./src/reduxPromiseMiddleware/isPromise.js\"));\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/**\n * For TypeScript support: Remember to check and make sure\n * that `index.d.ts` is also up to date with the implementation.\n */\nvar ActionType = {\n  Pending: 'PENDING',\n  Fulfilled: 'FULFILLED',\n  Rejected: 'REJECTED'\n};\n/**\n * Function: createPromise\n * Description: The main createPromise accepts a configuration\n * object and returns the middleware.\n */\n\nexports.ActionType = ActionType;\n\nfunction createPromise() {\n  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var defaultTypes = [ActionType.Pending, ActionType.Fulfilled, ActionType.Rejected];\n  var PROMISE_TYPE_SUFFIXES = config.promiseTypeSuffixes || defaultTypes;\n  var PROMISE_TYPE_DELIMITER = config.promiseTypeDelimiter || '_';\n  return function (ref) {\n    var dispatch = ref.dispatch;\n    return function (next) {\n      return function (action) {\n        /**\n         * Instantiate variables to hold:\n         * (1) the promise\n         * (2) the data for optimistic updates\n         */\n        var promise;\n        var data;\n        /**\n         * There are multiple ways to dispatch a promise. The first step is to\n         * determine if the promise is defined:\n         * (a) explicitly (action.payload.promise is the promise)\n         * (b) implicitly (action.payload is the promise)\n         * (c) as an async function (returns a promise when called)\n         *\n         * If the promise is not defined in one of these three ways, we don't do\n         * anything and move on to the next middleware in the middleware chain.\n         */\n        // Step 1a: Is there a payload?\n\n        if (action.payload) {\n          var PAYLOAD = action.payload; // Step 1.1: Is the promise implicitly defined?\n\n          if ((0, _isPromise[\"default\"])(PAYLOAD)) {\n            promise = PAYLOAD;\n          } // Step 1.2: Is the promise explicitly defined?\n          else if ((0, _isPromise[\"default\"])(PAYLOAD.promise)) {\n              promise = PAYLOAD.promise;\n              data = PAYLOAD.data;\n            } // Step 1.3: Is the promise returned by an async function?\n            else if (typeof PAYLOAD === 'function' || typeof PAYLOAD.promise === 'function') {\n                promise = PAYLOAD.promise ? PAYLOAD.promise() : PAYLOAD();\n                data = PAYLOAD.promise ? PAYLOAD.data : undefined; // Step 1.3.1: Is the return of action.payload a promise?\n\n                if (!(0, _isPromise[\"default\"])(promise)) {\n                  // If not, move on to the next middleware.\n                  return next(_objectSpread({}, action, {\n                    payload: promise\n                  }));\n                }\n              } // Step 1.4: If there's no promise, move on to the next middleware.\n              else {\n                  return next(action);\n                } // Step 1b: If there's no payload, move on to the next middleware.\n\n        } else {\n          return next(action);\n        }\n        /**\n         * Instantiate and define constants for:\n         * (1) the action type\n         * (2) the action meta\n         */\n\n\n        var TYPE = action.type;\n        var META = action.meta;\n        /**\n         * Instantiate and define constants for the action type suffixes.\n         * These are appended to the end of the action type.\n         */\n\n        var _PROMISE_TYPE_SUFFIXE = (0, _slicedToArray2[\"default\"])(PROMISE_TYPE_SUFFIXES, 3),\n            PENDING = _PROMISE_TYPE_SUFFIXE[0],\n            FULFILLED = _PROMISE_TYPE_SUFFIXE[1],\n            REJECTED = _PROMISE_TYPE_SUFFIXE[2];\n        /**\n         * Function: getAction\n         * Description: This function constructs and returns a rejected\n         * or fulfilled action object. The action object is based off the Flux\n         * Standard Action (FSA).\n         *\n         * Given an original action with the type FOO:\n         *\n         * The rejected object model will be:\n         * {\n         *   error: true,\n         *   type: 'FOO_REJECTED',\n         *   payload: ...,\n         *   meta: ... (optional)\n         * }\n         *\n         * The fulfilled object model will be:\n         * {\n         *   type: 'FOO_FULFILLED',\n         *   payload: ...,\n         *   meta: ... (optional)\n         * }\n         */\n\n\n        var getAction = function getAction(newPayload, isRejected) {\n          return _objectSpread({\n            namespace: action.namespace,\n            // Concatenate the type string property.\n            type: [TYPE, isRejected ? REJECTED : FULFILLED].join(PROMISE_TYPE_DELIMITER)\n          }, newPayload === null || typeof newPayload === 'undefined' ? {} : {\n            payload: newPayload\n          }, {}, META !== undefined ? {\n            meta: META\n          } : {}, {}, isRejected ? {\n            error: true\n          } : {});\n        };\n        /**\n         * Function: handleReject\n         * Calls: getAction to construct the rejected action\n         * Description: This function dispatches the rejected action and returns\n         * the original Error object. Please note the developer is responsible\n         * for constructing and throwing an Error object. The middleware does not\n         * construct any Errors.\n         */\n\n\n        var handleReject = function handleReject(reason) {\n          var rejectedAction = getAction(reason, true);\n          dispatch(rejectedAction);\n          throw reason;\n        };\n        /**\n         * Function: handleFulfill\n         * Calls: getAction to construct the fullfilled action\n         * Description: This function dispatches the fulfilled action and\n         * returns the success object. The success object should\n         * contain the value and the dispatched action.\n         */\n\n\n        var handleFulfill = function handleFulfill() {\n          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n          var resolvedAction = getAction(value, false);\n          dispatch(resolvedAction);\n          return {\n            value: value,\n            action: resolvedAction\n          };\n        };\n        /**\n         * First, dispatch the pending action:\n         * This object describes the pending state of a promise and will include\n         * any data (for optimistic updates) and/or meta from the original action.\n         */\n\n\n        next(_objectSpread({\n          namespace: action.namespace,\n          // Concatenate the type string.\n          type: [TYPE, PENDING].join(PROMISE_TYPE_DELIMITER)\n        }, data !== undefined ? {\n          payload: data\n        } : {}, {}, META !== undefined ? {\n          meta: META\n        } : {}));\n        /**\n         * Second, dispatch a rejected or fulfilled action and move on to the\n         * next middleware.\n         */\n\n        return promise.then(handleFulfill, handleReject);\n      };\n    };\n  };\n}\n\nfunction middleware() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      dispatch = _ref.dispatch;\n\n  if (typeof dispatch === 'function') {\n    return createPromise()({\n      dispatch: dispatch\n    });\n  }\n\n  if (process && process.env && ( true || false)) {\n    // eslint-disable-next-line no-console\n    console.warn(\"Redux Promise Middleware: As of version 6.0.0, the \\t\\t\\tmiddleware library supports both preconfigured and custom configured \\t\\t\\tmiddleware. To use a custom configuration, use the \\\"createPromise\\\" export \\t\\t\\tand call this function with your configuration property. To use a \\t\\t\\tpreconfiguration, use the default export. For more help, check the upgrading \\t\\t\\tguide: https://docs.psb.design/redux-promise-middleware/upgrade-guides/v6\\n\\n\\t\\t\\tFor custom configuration:\\n\\t\\t\\timport { createPromise } from 'redux-promise-middleware';\\n\\t\\t\\tconst promise = createPromise({ types: { fulfilled: 'success' } });\\n\\t\\t\\tapplyMiddleware(promise);\\n\\n\\t\\t\\tFor preconfiguration:\\n\\t\\t\\timport promise from 'redux-promise-middleware';\\n\\t\\t\\tapplyMiddleware(promise);\");\n  }\n\n  return null;\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/_process@0.11.10@process/browser.js */ \"./node_modules/_process@0.11.10@process/browser.js\")))\n\n//# sourceURL=webpack://spaassy-redux/./src/reduxPromiseMiddleware/index.js?");

/***/ }),

/***/ "./src/reduxPromiseMiddleware/isPromise.js":
/*!*************************************************!*\
  !*** ./src/reduxPromiseMiddleware/isPromise.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = isPromise;\n\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/typeof.js\"));\n\nfunction isPromise(value) {\n  if (value !== null && (0, _typeof2[\"default\"])(value) === 'object') {\n    return value && typeof value.then === 'function';\n  }\n\n  return false;\n}\n\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://spaassy-redux/./src/reduxPromiseMiddleware/isPromise.js?");

/***/ }),

/***/ "./src/reduxUtils/bindActionCreators.js":
/*!**********************************************!*\
  !*** ./src/reduxUtils/bindActionCreators.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = bindActionCreators;\n\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/typeof.js\"));\n\nfunction bindActionCreator(actionCreator, dispatch, namespace) {\n  return function () {\n    var actionObj = actionCreator.apply(this, arguments);\n    actionObj.namespace = namespace;\n    return dispatch(actionObj);\n  };\n}\n/**\n * Turns an object whose values are action creators, into an object with the\n * same keys, but with every function wrapped into a `dispatch` call so they\n * may be invoked directly. This is just a convenience method, as you can call\n * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.\n *\n * For convenience, you can also pass an action creator as the first argument,\n * and get a dispatch wrapped function in return.\n *\n * @param {Function|Object} actionCreators An object whose values are action\n * creator functions. One handy way to obtain it is to use ES6 `import * as`\n * syntax. You may also pass a single function.\n *\n * @param {Function} dispatch The `dispatch` function available on your Redux\n * store.\n *\n * @returns {Function|Object} The object mimicking the original object, but with\n * every action creator wrapped into the `dispatch` call. If you passed a\n * function as `actionCreators`, the return value will also be a single\n * function.\n */\n\n\nfunction bindActionCreators(actionCreators, dispatch, namespace) {\n  if (typeof actionCreators === 'function') {\n    return bindActionCreator(actionCreators, dispatch, namespace);\n  }\n\n  if ((0, _typeof2[\"default\"])(actionCreators) !== 'object' || actionCreators === null) {\n    throw new Error(\"bindActionCreators expected an object or a function, instead received \".concat(actionCreators === null ? 'null' : (0, _typeof2[\"default\"])(actionCreators), \". \") + \"Did you write \\\"import ActionCreators from\\\" instead of \\\"import * as ActionCreators from\\\"?\");\n  }\n\n  var boundActionCreators = {};\n\n  for (var key in actionCreators) {\n    var actionCreator = actionCreators[key];\n\n    if (typeof actionCreator === 'function') {\n      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch, namespace);\n    }\n  }\n\n  return boundActionCreators;\n}\n\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://spaassy-redux/./src/reduxUtils/bindActionCreators.js?");

/***/ }),

/***/ "./src/reduxUtils/combineReducers.js":
/*!*******************************************!*\
  !*** ./src/reduxUtils/combineReducers.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = combineReducers;\n\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js\"));\n\nvar _actionTypes = _interopRequireDefault(__webpack_require__(/*! ./utils/actionTypes */ \"./src/reduxUtils/utils/actionTypes.js\"));\n\nvar _warning = _interopRequireDefault(__webpack_require__(/*! ./utils/warning */ \"./src/reduxUtils/utils/warning.js\"));\n\nvar _isPlainObject = _interopRequireDefault(__webpack_require__(/*! ./utils/isPlainObject */ \"./src/reduxUtils/utils/isPlainObject.js\"));\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction getUndefinedStateErrorMessage(key, action) {\n  var actionType = action && action.type;\n  var actionDescription = actionType && \"action \\\"\".concat(String(actionType), \"\\\"\") || 'an action';\n  return \"Given \".concat(actionDescription, \", reducer \\\"\").concat(key, \"\\\" returned undefined. \") + \"To ignore an action, you must explicitly return the previous state. \" + \"If you want this reducer to hold no value, you can return null instead of undefined.\";\n}\n\nfunction getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {\n  var reducerKeys = Object.keys(reducers);\n  var argumentName = action && action.type === _actionTypes[\"default\"].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';\n\n  if (reducerKeys.length === 0) {\n    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';\n  }\n\n  if (!(0, _isPlainObject[\"default\"])(inputState)) {\n    return \"The \".concat(argumentName, \" has unexpected type of \\\"\") + {}.toString.call(inputState).match(/\\s([a-z|A-Z]+)/)[1] + \"\\\". Expected argument to be an object with the following \" + \"keys: \\\"\".concat(reducerKeys.join('\", \"'), \"\\\"\");\n  }\n\n  var unexpectedKeys = Object.keys(inputState).filter(function (key) {\n    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];\n  });\n  unexpectedKeys.forEach(function (key) {\n    unexpectedKeyCache[key] = true;\n  });\n  if (action && action.type === _actionTypes[\"default\"].REPLACE) return;\n\n  if (unexpectedKeys.length > 0) {\n    return \"Unexpected \".concat(unexpectedKeys.length > 1 ? 'keys' : 'key', \" \") + \"\\\"\".concat(unexpectedKeys.join('\", \"'), \"\\\" found in \").concat(argumentName, \". \") + \"Expected to find one of the known reducer keys instead: \" + \"\\\"\".concat(reducerKeys.join('\", \"'), \"\\\". Unexpected keys will be ignored.\");\n  }\n}\n\nfunction assertReducerShape(reducers) {\n  Object.keys(reducers).forEach(function (key) {\n    var reducer = reducers[key];\n    var initialState = reducer(undefined, {\n      type: _actionTypes[\"default\"].INIT\n    });\n\n    if (typeof initialState === 'undefined') {\n      throw new Error(\"Reducer \\\"\".concat(key, \"\\\" returned undefined during initialization. \") + \"If the state passed to the reducer is undefined, you must \" + \"explicitly return the initial state. The initial state may \" + \"not be undefined. If you don't want to set a value for this reducer, \" + \"you can use null instead of undefined.\");\n    }\n\n    if (typeof reducer(undefined, {\n      type: _actionTypes[\"default\"].PROBE_UNKNOWN_ACTION()\n    }) === 'undefined') {\n      throw new Error(\"Reducer \\\"\".concat(key, \"\\\" returned undefined when probed with a random type. \") + \"Don't try to handle \".concat(_actionTypes[\"default\"].INIT, \" or other actions in \\\"redux/*\\\" \") + \"namespace. They are considered private. Instead, you must return the \" + \"current state for any unknown actions, unless it is undefined, \" + \"in which case you must return the initial state, regardless of the \" + \"action type. The initial state may not be undefined, but can be null.\");\n    }\n  });\n}\n/**\n * Turns an object whose values are different reducer functions, into a single\n * reducer function. It will call every child reducer, and gather their results\n * into a single state object, whose keys correspond to the keys of the passed\n * reducer functions.\n *\n * @param {Object} reducers An object whose values correspond to different\n * reducer functions that need to be combined into one. One handy way to obtain\n * it is to use ES6 `import * as reducers` syntax. The reducers may never return\n * undefined for any action. Instead, they should return their initial state\n * if the state passed to them was undefined, and the current state for any\n * unrecognized action.\n *\n * @returns {Function} A reducer function that invokes every reducer inside the\n * passed object, and builds a state object with the same shape.\n */\n\n\nvar nextState = {};\nvar finalReducers = {};\nvar unexpectedKeyCache;\nvar shapeAssertionError;\n\nfunction combineReducers(reducersMap) {\n  Object.keys(reducersMap).map(function (o) {\n    var reducers = reducersMap[o];\n    var namespace = o;\n    var reducerKeys = Object.keys(reducers);\n    finalReducers[namespace] = {};\n\n    for (var i = 0; i < reducerKeys.length; i++) {\n      var key = reducerKeys[i];\n\n      if (true) {\n        if (typeof reducers[key] === 'undefined') {\n          (0, _warning[\"default\"])(\"No reducer provided for key \\\"\".concat(key, \"\\\"\"));\n        }\n      }\n\n      if (typeof reducers[key] === 'function') {\n        finalReducers[namespace][key] = reducers[key];\n      }\n    }\n\n    if (true) {\n      unexpectedKeyCache = {};\n    }\n\n    try {\n      assertReducerShape(finalReducers[namespace]);\n    } catch (e) {\n      shapeAssertionError = e;\n    }\n  });\n  return function combination() {\n    var ostate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var action = arguments.length > 1 ? arguments[1] : undefined;\n    var namespace = action.namespace || null;\n    var state = {};\n    var hasChanged = false;\n\n    if (namespace) {\n      loop(namespace);\n    } else {\n      Object.keys(finalReducers).map(function (o) {\n        loop(o);\n      });\n    }\n\n    function loop(namespace) {\n      var finalReducerKeys = Object.keys(finalReducers[namespace]);\n\n      if (ostate && ostate[namespace]) {\n        state = ostate;\n      } else {\n        state[namespace] = ostate;\n      }\n\n      if (shapeAssertionError) {\n        throw shapeAssertionError;\n      }\n\n      if (true) {\n        var warningMessage = getUnexpectedStateShapeWarningMessage(state[namespace], finalReducers[namespace], action, unexpectedKeyCache);\n\n        if (warningMessage) {\n          (0, _warning[\"default\"])(warningMessage);\n        }\n      }\n\n      if (!nextState[namespace]) {\n        nextState[namespace] = {};\n      }\n\n      for (var i = 0; i < finalReducerKeys.length; i++) {\n        var key = finalReducerKeys[i];\n        var reducer = finalReducers[namespace][key];\n        var previousStateForKey = state[namespace][key];\n        var nextStateForKey = reducer(previousStateForKey, action);\n\n        if (typeof nextStateForKey === 'undefined') {\n          var errorMessage = getUndefinedStateErrorMessage(key, action);\n          throw new Error(errorMessage);\n        }\n\n        nextState[namespace][key] = nextStateForKey;\n        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;\n      }\n    }\n\n    console.log(hasChanged ? _objectSpread({}, nextState) : state, hasChanged);\n    return hasChanged ? _objectSpread({}, nextState) : state;\n  };\n}\n\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://spaassy-redux/./src/reduxUtils/combineReducers.js?");

/***/ }),

/***/ "./src/reduxUtils/utils/actionTypes.js":
/*!*********************************************!*\
  !*** ./src/reduxUtils/utils/actionTypes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n/**\n * These are private action types reserved by Redux.\n * For any unknown actions, you must return the current state.\n * If the current state is undefined, you must return the initial state.\n * Do not reference these action types directly in your code.\n */\nvar randomString = function randomString() {\n  return Math.random().toString(36).substring(7).split('').join('.');\n};\n\nvar ActionTypes = {\n  INIT: \"@@redux/INIT\".concat(randomString()),\n  REPLACE: \"@@redux/REPLACE\".concat(randomString()),\n  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {\n    return \"@@redux/PROBE_UNKNOWN_ACTION\".concat(randomString());\n  }\n};\nvar _default = ActionTypes;\nexports[\"default\"] = _default;\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://spaassy-redux/./src/reduxUtils/utils/actionTypes.js?");

/***/ }),

/***/ "./src/reduxUtils/utils/isPlainObject.js":
/*!***********************************************!*\
  !*** ./src/reduxUtils/utils/isPlainObject.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = isPlainObject;\n\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/typeof.js\"));\n\n/**\n * @param {any} obj The object to inspect.\n * @returns {boolean} True if the argument appears to be a plain object.\n */\nfunction isPlainObject(obj) {\n  if ((0, _typeof2[\"default\"])(obj) !== 'object' || obj === null) return false;\n  var proto = obj;\n\n  while (Object.getPrototypeOf(proto) !== null) {\n    proto = Object.getPrototypeOf(proto);\n  }\n\n  return Object.getPrototypeOf(obj) === proto;\n}\n\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://spaassy-redux/./src/reduxUtils/utils/isPlainObject.js?");

/***/ }),

/***/ "./src/reduxUtils/utils/warning.js":
/*!*****************************************!*\
  !*** ./src/reduxUtils/utils/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = warning;\n\n/**\n * Prints a warning in the console if it exists.\n *\n * @param {String} message The warning message.\n * @returns {void}\n */\nfunction warning(message) {\n  /* eslint-disable no-console */\n  if (typeof console !== 'undefined' && typeof console.error === 'function') {\n    console.error(message);\n  }\n  /* eslint-enable no-console */\n\n\n  try {\n    // This error was thrown as a convenience so that if you enable\n    // \"break on all exceptions\" in your console,\n    // it would pause the execution at this line.\n    throw new Error(message);\n  } catch (e) {} // eslint-disable-line no-empty\n\n}\n\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://spaassy-redux/./src/reduxUtils/utils/warning.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://spaassy-redux/multi_./src/index.js?");

/***/ })

/******/ });
});