(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-redux"], factory);
	else if(typeof exports === 'object')
		exports["spaassy-redux"] = factory(require("react"), require("react-redux"));
	else
		root["spaassy-redux"] = factory(root["react"], root["react-redux"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_redux__) {
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

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/assertThisInitialized.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/assertThisInitialized.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/classCallCheck.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/classCallCheck.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/createClass.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/createClass.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/getPrototypeOf.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/getPrototypeOf.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/inherits.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/inherits.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js?");

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireWildcard.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireWildcard(obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};\n\n    if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) {\n          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};\n\n          if (desc.get || desc.set) {\n            Object.defineProperty(newObj, key, desc);\n          } else {\n            newObj[key] = obj[key];\n          }\n        }\n      }\n    }\n\n    newObj[\"default\"] = obj;\n    return newObj;\n  }\n}\n\nmodule.exports = _interopRequireWildcard;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireWildcard.js?");

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

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/possibleConstructorReturn.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/setPrototypeOf.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/setPrototypeOf.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/setPrototypeOf.js?");

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

/***/ "./node_modules/_redux@4.0.4@redux/es/redux.js":
/*!*****************************************************!*\
  !*** ./node_modules/_redux@4.0.4@redux/es/redux.js ***!
  \*****************************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__DO_NOT_USE__ActionTypes\", function() { return ActionTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyMiddleware\", function() { return applyMiddleware; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindActionCreators\", function() { return bindActionCreators; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"combineReducers\", function() { return combineReducers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return compose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStore\", function() { return createStore; });\n/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ \"./node_modules/_symbol-observable@1.2.0@symbol-observable/es/index.js\");\n\n\n/**\n * These are private action types reserved by Redux.\n * For any unknown actions, you must return the current state.\n * If the current state is undefined, you must return the initial state.\n * Do not reference these action types directly in your code.\n */\nvar randomString = function randomString() {\n  return Math.random().toString(36).substring(7).split('').join('.');\n};\n\nvar ActionTypes = {\n  INIT: \"@@redux/INIT\" + randomString(),\n  REPLACE: \"@@redux/REPLACE\" + randomString(),\n  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {\n    return \"@@redux/PROBE_UNKNOWN_ACTION\" + randomString();\n  }\n};\n\n/**\n * @param {any} obj The object to inspect.\n * @returns {boolean} True if the argument appears to be a plain object.\n */\nfunction isPlainObject(obj) {\n  if (typeof obj !== 'object' || obj === null) return false;\n  var proto = obj;\n\n  while (Object.getPrototypeOf(proto) !== null) {\n    proto = Object.getPrototypeOf(proto);\n  }\n\n  return Object.getPrototypeOf(obj) === proto;\n}\n\n/**\n * Creates a Redux store that holds the state tree.\n * The only way to change the data in the store is to call `dispatch()` on it.\n *\n * There should only be a single store in your app. To specify how different\n * parts of the state tree respond to actions, you may combine several reducers\n * into a single reducer function by using `combineReducers`.\n *\n * @param {Function} reducer A function that returns the next state tree, given\n * the current state tree and the action to handle.\n *\n * @param {any} [preloadedState] The initial state. You may optionally specify it\n * to hydrate the state from the server in universal apps, or to restore a\n * previously serialized user session.\n * If you use `combineReducers` to produce the root reducer function, this must be\n * an object with the same shape as `combineReducers` keys.\n *\n * @param {Function} [enhancer] The store enhancer. You may optionally specify it\n * to enhance the store with third-party capabilities such as middleware,\n * time travel, persistence, etc. The only store enhancer that ships with Redux\n * is `applyMiddleware()`.\n *\n * @returns {Store} A Redux store that lets you read the state, dispatch actions\n * and subscribe to changes.\n */\n\nfunction createStore(reducer, preloadedState, enhancer) {\n  var _ref2;\n\n  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {\n    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');\n  }\n\n  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {\n    enhancer = preloadedState;\n    preloadedState = undefined;\n  }\n\n  if (typeof enhancer !== 'undefined') {\n    if (typeof enhancer !== 'function') {\n      throw new Error('Expected the enhancer to be a function.');\n    }\n\n    return enhancer(createStore)(reducer, preloadedState);\n  }\n\n  if (typeof reducer !== 'function') {\n    throw new Error('Expected the reducer to be a function.');\n  }\n\n  var currentReducer = reducer;\n  var currentState = preloadedState;\n  var currentListeners = [];\n  var nextListeners = currentListeners;\n  var isDispatching = false;\n  /**\n   * This makes a shallow copy of currentListeners so we can use\n   * nextListeners as a temporary list while dispatching.\n   *\n   * This prevents any bugs around consumers calling\n   * subscribe/unsubscribe in the middle of a dispatch.\n   */\n\n  function ensureCanMutateNextListeners() {\n    if (nextListeners === currentListeners) {\n      nextListeners = currentListeners.slice();\n    }\n  }\n  /**\n   * Reads the state tree managed by the store.\n   *\n   * @returns {any} The current state tree of your application.\n   */\n\n\n  function getState() {\n    if (isDispatching) {\n      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');\n    }\n\n    return currentState;\n  }\n  /**\n   * Adds a change listener. It will be called any time an action is dispatched,\n   * and some part of the state tree may potentially have changed. You may then\n   * call `getState()` to read the current state tree inside the callback.\n   *\n   * You may call `dispatch()` from a change listener, with the following\n   * caveats:\n   *\n   * 1. The subscriptions are snapshotted just before every `dispatch()` call.\n   * If you subscribe or unsubscribe while the listeners are being invoked, this\n   * will not have any effect on the `dispatch()` that is currently in progress.\n   * However, the next `dispatch()` call, whether nested or not, will use a more\n   * recent snapshot of the subscription list.\n   *\n   * 2. The listener should not expect to see all state changes, as the state\n   * might have been updated multiple times during a nested `dispatch()` before\n   * the listener is called. It is, however, guaranteed that all subscribers\n   * registered before the `dispatch()` started will be called with the latest\n   * state by the time it exits.\n   *\n   * @param {Function} listener A callback to be invoked on every dispatch.\n   * @returns {Function} A function to remove this change listener.\n   */\n\n\n  function subscribe(listener) {\n    if (typeof listener !== 'function') {\n      throw new Error('Expected the listener to be a function.');\n    }\n\n    if (isDispatching) {\n      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');\n    }\n\n    var isSubscribed = true;\n    ensureCanMutateNextListeners();\n    nextListeners.push(listener);\n    return function unsubscribe() {\n      if (!isSubscribed) {\n        return;\n      }\n\n      if (isDispatching) {\n        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');\n      }\n\n      isSubscribed = false;\n      ensureCanMutateNextListeners();\n      var index = nextListeners.indexOf(listener);\n      nextListeners.splice(index, 1);\n    };\n  }\n  /**\n   * Dispatches an action. It is the only way to trigger a state change.\n   *\n   * The `reducer` function, used to create the store, will be called with the\n   * current state tree and the given `action`. Its return value will\n   * be considered the **next** state of the tree, and the change listeners\n   * will be notified.\n   *\n   * The base implementation only supports plain object actions. If you want to\n   * dispatch a Promise, an Observable, a thunk, or something else, you need to\n   * wrap your store creating function into the corresponding middleware. For\n   * example, see the documentation for the `redux-thunk` package. Even the\n   * middleware will eventually dispatch plain object actions using this method.\n   *\n   * @param {Object} action A plain object representing “what changed”. It is\n   * a good idea to keep actions serializable so you can record and replay user\n   * sessions, or use the time travelling `redux-devtools`. An action must have\n   * a `type` property which may not be `undefined`. It is a good idea to use\n   * string constants for action types.\n   *\n   * @returns {Object} For convenience, the same action object you dispatched.\n   *\n   * Note that, if you use a custom middleware, it may wrap `dispatch()` to\n   * return something else (for example, a Promise you can await).\n   */\n\n\n  function dispatch(action) {\n    if (!isPlainObject(action)) {\n      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');\n    }\n\n    if (typeof action.type === 'undefined') {\n      throw new Error('Actions may not have an undefined \"type\" property. ' + 'Have you misspelled a constant?');\n    }\n\n    if (isDispatching) {\n      throw new Error('Reducers may not dispatch actions.');\n    }\n\n    try {\n      isDispatching = true;\n      currentState = currentReducer(currentState, action);\n    } finally {\n      isDispatching = false;\n    }\n\n    var listeners = currentListeners = nextListeners;\n\n    for (var i = 0; i < listeners.length; i++) {\n      var listener = listeners[i];\n      listener();\n    }\n\n    return action;\n  }\n  /**\n   * Replaces the reducer currently used by the store to calculate the state.\n   *\n   * You might need this if your app implements code splitting and you want to\n   * load some of the reducers dynamically. You might also need this if you\n   * implement a hot reloading mechanism for Redux.\n   *\n   * @param {Function} nextReducer The reducer for the store to use instead.\n   * @returns {void}\n   */\n\n\n  function replaceReducer(nextReducer) {\n    if (typeof nextReducer !== 'function') {\n      throw new Error('Expected the nextReducer to be a function.');\n    }\n\n    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.\n    // Any reducers that existed in both the new and old rootReducer\n    // will receive the previous state. This effectively populates\n    // the new state tree with any relevant data from the old one.\n\n    dispatch({\n      type: ActionTypes.REPLACE\n    });\n  }\n  /**\n   * Interoperability point for observable/reactive libraries.\n   * @returns {observable} A minimal observable of state changes.\n   * For more information, see the observable proposal:\n   * https://github.com/tc39/proposal-observable\n   */\n\n\n  function observable() {\n    var _ref;\n\n    var outerSubscribe = subscribe;\n    return _ref = {\n      /**\n       * The minimal observable subscription method.\n       * @param {Object} observer Any object that can be used as an observer.\n       * The observer object should have a `next` method.\n       * @returns {subscription} An object with an `unsubscribe` method that can\n       * be used to unsubscribe the observable from the store, and prevent further\n       * emission of values from the observable.\n       */\n      subscribe: function subscribe(observer) {\n        if (typeof observer !== 'object' || observer === null) {\n          throw new TypeError('Expected the observer to be an object.');\n        }\n\n        function observeState() {\n          if (observer.next) {\n            observer.next(getState());\n          }\n        }\n\n        observeState();\n        var unsubscribe = outerSubscribe(observeState);\n        return {\n          unsubscribe: unsubscribe\n        };\n      }\n    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]] = function () {\n      return this;\n    }, _ref;\n  } // When a store is created, an \"INIT\" action is dispatched so that every\n  // reducer returns their initial state. This effectively populates\n  // the initial state tree.\n\n\n  dispatch({\n    type: ActionTypes.INIT\n  });\n  return _ref2 = {\n    dispatch: dispatch,\n    subscribe: subscribe,\n    getState: getState,\n    replaceReducer: replaceReducer\n  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]] = observable, _ref2;\n}\n\n/**\n * Prints a warning in the console if it exists.\n *\n * @param {String} message The warning message.\n * @returns {void}\n */\nfunction warning(message) {\n  /* eslint-disable no-console */\n  if (typeof console !== 'undefined' && typeof console.error === 'function') {\n    console.error(message);\n  }\n  /* eslint-enable no-console */\n\n\n  try {\n    // This error was thrown as a convenience so that if you enable\n    // \"break on all exceptions\" in your console,\n    // it would pause the execution at this line.\n    throw new Error(message);\n  } catch (e) {} // eslint-disable-line no-empty\n\n}\n\nfunction getUndefinedStateErrorMessage(key, action) {\n  var actionType = action && action.type;\n  var actionDescription = actionType && \"action \\\"\" + String(actionType) + \"\\\"\" || 'an action';\n  return \"Given \" + actionDescription + \", reducer \\\"\" + key + \"\\\" returned undefined. \" + \"To ignore an action, you must explicitly return the previous state. \" + \"If you want this reducer to hold no value, you can return null instead of undefined.\";\n}\n\nfunction getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {\n  var reducerKeys = Object.keys(reducers);\n  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';\n\n  if (reducerKeys.length === 0) {\n    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';\n  }\n\n  if (!isPlainObject(inputState)) {\n    return \"The \" + argumentName + \" has unexpected type of \\\"\" + {}.toString.call(inputState).match(/\\s([a-z|A-Z]+)/)[1] + \"\\\". Expected argument to be an object with the following \" + (\"keys: \\\"\" + reducerKeys.join('\", \"') + \"\\\"\");\n  }\n\n  var unexpectedKeys = Object.keys(inputState).filter(function (key) {\n    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];\n  });\n  unexpectedKeys.forEach(function (key) {\n    unexpectedKeyCache[key] = true;\n  });\n  if (action && action.type === ActionTypes.REPLACE) return;\n\n  if (unexpectedKeys.length > 0) {\n    return \"Unexpected \" + (unexpectedKeys.length > 1 ? 'keys' : 'key') + \" \" + (\"\\\"\" + unexpectedKeys.join('\", \"') + \"\\\" found in \" + argumentName + \". \") + \"Expected to find one of the known reducer keys instead: \" + (\"\\\"\" + reducerKeys.join('\", \"') + \"\\\". Unexpected keys will be ignored.\");\n  }\n}\n\nfunction assertReducerShape(reducers) {\n  Object.keys(reducers).forEach(function (key) {\n    var reducer = reducers[key];\n    var initialState = reducer(undefined, {\n      type: ActionTypes.INIT\n    });\n\n    if (typeof initialState === 'undefined') {\n      throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined during initialization. \" + \"If the state passed to the reducer is undefined, you must \" + \"explicitly return the initial state. The initial state may \" + \"not be undefined. If you don't want to set a value for this reducer, \" + \"you can use null instead of undefined.\");\n    }\n\n    if (typeof reducer(undefined, {\n      type: ActionTypes.PROBE_UNKNOWN_ACTION()\n    }) === 'undefined') {\n      throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined when probed with a random type. \" + (\"Don't try to handle \" + ActionTypes.INIT + \" or other actions in \\\"redux/*\\\" \") + \"namespace. They are considered private. Instead, you must return the \" + \"current state for any unknown actions, unless it is undefined, \" + \"in which case you must return the initial state, regardless of the \" + \"action type. The initial state may not be undefined, but can be null.\");\n    }\n  });\n}\n/**\n * Turns an object whose values are different reducer functions, into a single\n * reducer function. It will call every child reducer, and gather their results\n * into a single state object, whose keys correspond to the keys of the passed\n * reducer functions.\n *\n * @param {Object} reducers An object whose values correspond to different\n * reducer functions that need to be combined into one. One handy way to obtain\n * it is to use ES6 `import * as reducers` syntax. The reducers may never return\n * undefined for any action. Instead, they should return their initial state\n * if the state passed to them was undefined, and the current state for any\n * unrecognized action.\n *\n * @returns {Function} A reducer function that invokes every reducer inside the\n * passed object, and builds a state object with the same shape.\n */\n\n\nfunction combineReducers(reducers) {\n  var reducerKeys = Object.keys(reducers);\n  var finalReducers = {};\n\n  for (var i = 0; i < reducerKeys.length; i++) {\n    var key = reducerKeys[i];\n\n    if (true) {\n      if (typeof reducers[key] === 'undefined') {\n        warning(\"No reducer provided for key \\\"\" + key + \"\\\"\");\n      }\n    }\n\n    if (typeof reducers[key] === 'function') {\n      finalReducers[key] = reducers[key];\n    }\n  }\n\n  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same\n  // keys multiple times.\n\n  var unexpectedKeyCache;\n\n  if (true) {\n    unexpectedKeyCache = {};\n  }\n\n  var shapeAssertionError;\n\n  try {\n    assertReducerShape(finalReducers);\n  } catch (e) {\n    shapeAssertionError = e;\n  }\n\n  return function combination(state, action) {\n    if (state === void 0) {\n      state = {};\n    }\n\n    if (shapeAssertionError) {\n      throw shapeAssertionError;\n    }\n\n    if (true) {\n      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);\n\n      if (warningMessage) {\n        warning(warningMessage);\n      }\n    }\n\n    var hasChanged = false;\n    var nextState = {};\n\n    for (var _i = 0; _i < finalReducerKeys.length; _i++) {\n      var _key = finalReducerKeys[_i];\n      var reducer = finalReducers[_key];\n      var previousStateForKey = state[_key];\n      var nextStateForKey = reducer(previousStateForKey, action);\n\n      if (typeof nextStateForKey === 'undefined') {\n        var errorMessage = getUndefinedStateErrorMessage(_key, action);\n        throw new Error(errorMessage);\n      }\n\n      nextState[_key] = nextStateForKey;\n      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;\n    }\n\n    return hasChanged ? nextState : state;\n  };\n}\n\nfunction bindActionCreator(actionCreator, dispatch) {\n  return function () {\n    return dispatch(actionCreator.apply(this, arguments));\n  };\n}\n/**\n * Turns an object whose values are action creators, into an object with the\n * same keys, but with every function wrapped into a `dispatch` call so they\n * may be invoked directly. This is just a convenience method, as you can call\n * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.\n *\n * For convenience, you can also pass an action creator as the first argument,\n * and get a dispatch wrapped function in return.\n *\n * @param {Function|Object} actionCreators An object whose values are action\n * creator functions. One handy way to obtain it is to use ES6 `import * as`\n * syntax. You may also pass a single function.\n *\n * @param {Function} dispatch The `dispatch` function available on your Redux\n * store.\n *\n * @returns {Function|Object} The object mimicking the original object, but with\n * every action creator wrapped into the `dispatch` call. If you passed a\n * function as `actionCreators`, the return value will also be a single\n * function.\n */\n\n\nfunction bindActionCreators(actionCreators, dispatch) {\n  if (typeof actionCreators === 'function') {\n    return bindActionCreator(actionCreators, dispatch);\n  }\n\n  if (typeof actionCreators !== 'object' || actionCreators === null) {\n    throw new Error(\"bindActionCreators expected an object or a function, instead received \" + (actionCreators === null ? 'null' : typeof actionCreators) + \". \" + \"Did you write \\\"import ActionCreators from\\\" instead of \\\"import * as ActionCreators from\\\"?\");\n  }\n\n  var boundActionCreators = {};\n\n  for (var key in actionCreators) {\n    var actionCreator = actionCreators[key];\n\n    if (typeof actionCreator === 'function') {\n      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);\n    }\n  }\n\n  return boundActionCreators;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    keys.push.apply(keys, Object.getOwnPropertySymbols(object));\n  }\n\n  if (enumerableOnly) keys = keys.filter(function (sym) {\n    return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n  });\n  return keys;\n}\n\nfunction _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    if (i % 2) {\n      ownKeys(source, true).forEach(function (key) {\n        _defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(source).forEach(function (key) {\n        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n      });\n    }\n  }\n\n  return target;\n}\n\n/**\n * Composes single-argument functions from right to left. The rightmost\n * function can take multiple arguments as it provides the signature for\n * the resulting composite function.\n *\n * @param {...Function} funcs The functions to compose.\n * @returns {Function} A function obtained by composing the argument functions\n * from right to left. For example, compose(f, g, h) is identical to doing\n * (...args) => f(g(h(...args))).\n */\nfunction compose() {\n  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {\n    funcs[_key] = arguments[_key];\n  }\n\n  if (funcs.length === 0) {\n    return function (arg) {\n      return arg;\n    };\n  }\n\n  if (funcs.length === 1) {\n    return funcs[0];\n  }\n\n  return funcs.reduce(function (a, b) {\n    return function () {\n      return a(b.apply(void 0, arguments));\n    };\n  });\n}\n\n/**\n * Creates a store enhancer that applies middleware to the dispatch method\n * of the Redux store. This is handy for a variety of tasks, such as expressing\n * asynchronous actions in a concise manner, or logging every action payload.\n *\n * See `redux-thunk` package as an example of the Redux middleware.\n *\n * Because middleware is potentially asynchronous, this should be the first\n * store enhancer in the composition chain.\n *\n * Note that each middleware will be given the `dispatch` and `getState` functions\n * as named arguments.\n *\n * @param {...Function} middlewares The middleware chain to be applied.\n * @returns {Function} A store enhancer applying the middleware.\n */\n\nfunction applyMiddleware() {\n  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {\n    middlewares[_key] = arguments[_key];\n  }\n\n  return function (createStore) {\n    return function () {\n      var store = createStore.apply(void 0, arguments);\n\n      var _dispatch = function dispatch() {\n        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');\n      };\n\n      var middlewareAPI = {\n        getState: store.getState,\n        dispatch: function dispatch() {\n          return _dispatch.apply(void 0, arguments);\n        }\n      };\n      var chain = middlewares.map(function (middleware) {\n        return middleware(middlewareAPI);\n      });\n      _dispatch = compose.apply(void 0, chain)(store.dispatch);\n      return _objectSpread2({}, store, {\n        dispatch: _dispatch\n      });\n    };\n  };\n}\n\n/*\n * This is a dummy function to check if the function name has been altered by minification.\n * If the function has been minified and NODE_ENV !== 'production', warn the user.\n */\n\nfunction isCrushed() {}\n\nif ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {\n  warning('You are currently using minified code outside of NODE_ENV === \"production\". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');\n}\n\n\n\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_redux@4.0.4@redux/es/redux.js?");

/***/ }),

/***/ "./node_modules/_symbol-observable@1.2.0@symbol-observable/es/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_symbol-observable@1.2.0@symbol-observable/es/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ \"./node_modules/_symbol-observable@1.2.0@symbol-observable/es/ponyfill.js\");\n/* global window */\n\n\nvar root;\n\nif (typeof self !== 'undefined') {\n  root = self;\n} else if (typeof window !== 'undefined') {\n  root = window;\n} else if (typeof global !== 'undefined') {\n  root = global;\n} else if (true) {\n  root = module;\n} else {}\n\nvar result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(root);\n/* harmony default export */ __webpack_exports__[\"default\"] = (result);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../_webpack@4.39.3@webpack/buildin/global.js */ \"./node_modules/_webpack@4.39.3@webpack/buildin/global.js\"), __webpack_require__(/*! ./../../_webpack@4.39.3@webpack/buildin/harmony-module.js */ \"./node_modules/_webpack@4.39.3@webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_symbol-observable@1.2.0@symbol-observable/es/index.js?");

/***/ }),

/***/ "./node_modules/_symbol-observable@1.2.0@symbol-observable/es/ponyfill.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_symbol-observable@1.2.0@symbol-observable/es/ponyfill.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return symbolObservablePonyfill; });\nfunction symbolObservablePonyfill(root) {\n\tvar result;\n\tvar Symbol = root.Symbol;\n\n\tif (typeof Symbol === 'function') {\n\t\tif (Symbol.observable) {\n\t\t\tresult = Symbol.observable;\n\t\t} else {\n\t\t\tresult = Symbol('observable');\n\t\t\tSymbol.observable = result;\n\t\t}\n\t} else {\n\t\tresult = '@@observable';\n\t}\n\n\treturn result;\n};\n\n\n//# sourceURL=webpack://spaassy-redux/./node_modules/_symbol-observable@1.2.0@symbol-observable/es/ponyfill.js?");

/***/ }),

/***/ "./node_modules/_webpack@4.39.3@webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://spaassy-redux/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/_webpack@4.39.3@webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://spaassy-redux/(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/asyncComponent/index.jsx":
/*!**************************************!*\
  !*** ./src/asyncComponent/index.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/getPrototypeOf.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/inherits.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar AsyncComponent = function AsyncComponent(namespace) {\n  return function (importComponent) {\n    return (\n      /*#__PURE__*/\n      function (_Component) {\n        (0, _inherits2[\"default\"])(_class, _Component);\n\n        function _class() {\n          var _this;\n\n          (0, _classCallCheck2[\"default\"])(this, _class);\n          _this = (0, _possibleConstructorReturn2[\"default\"])(this, (0, _getPrototypeOf2[\"default\"])(_class).call(this));\n          _this.state = {\n            component: null\n          };\n          return _this;\n        }\n\n        (0, _createClass2[\"default\"])(_class, [{\n          key: \"componentDidMount\",\n          value: function componentDidMount() {\n            var _this2 = this;\n\n            importComponent().then(function (cmp) {\n              _this2.setState({\n                component: cmp[\"default\"]\n              });\n            });\n          }\n        }, {\n          key: \"render\",\n          value: function render() {\n            var C = this.state.component;\n            return _react[\"default\"].createElement(\"div\", {\n              className: \"\".concat(namespace, \"_class\")\n            }, C ? _react[\"default\"].createElement(C, this.props) : null);\n          }\n        }]);\n        return _class;\n      }(_react.Component)\n    );\n  };\n};\n\nvar _default = AsyncComponent;\nexports[\"default\"] = _default;\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://spaassy-redux/./src/asyncComponent/index.jsx?");

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
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _bindActionCreators = _interopRequireDefault(__webpack_require__(/*! ./reduxUtils/bindActionCreators */ \"./src/reduxUtils/bindActionCreators.js\"));\n\nvar _combineReducers = _interopRequireDefault(__webpack_require__(/*! ./reduxUtils/combineReducers */ \"./src/reduxUtils/combineReducers.js\"));\n\nvar _createReducer = _interopRequireDefault(__webpack_require__(/*! ./createReducer */ \"./src/createReducer/index.js\"));\n\nvar _reduxPromiseMiddleware = _interopRequireDefault(__webpack_require__(/*! ./reduxPromiseMiddleware */ \"./src/reduxPromiseMiddleware/index.js\"));\n\nvar _asyncComponent = _interopRequireDefault(__webpack_require__(/*! ./asyncComponent */ \"./src/asyncComponent/index.jsx\"));\n\nvar _spaassyProvider = _interopRequireDefault(__webpack_require__(/*! ./spaassyProvider */ \"./src/spaassyProvider/index.jsx\"));\n\nvar _spaassyConnect = _interopRequireDefault(__webpack_require__(/*! ./spaassyConnect */ \"./src/spaassyConnect/index.js\"));\n\nvar _spaassyRegister = _interopRequireDefault(__webpack_require__(/*! ./spaassyRegister */ \"./src/spaassyRegister/index.js\"));\n\nmodule.exports = {\n  bindActionCreators: _bindActionCreators[\"default\"],\n  combineReducers: _combineReducers[\"default\"],\n  createReducer: _createReducer[\"default\"],\n  promiseMiddleware: _reduxPromiseMiddleware[\"default\"],\n  AsyncComponent: _asyncComponent[\"default\"],\n  SpaAssyProvider: _spaassyProvider[\"default\"],\n  SpaAssyConnect: _spaassyConnect[\"default\"],\n  SpaAssyRegister: _spaassyRegister[\"default\"]\n};\n\n//# sourceURL=webpack://spaassy-redux/./src/index.js?");

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
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = combineReducers;\n\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js\"));\n\nvar _actionTypes = _interopRequireDefault(__webpack_require__(/*! ./utils/actionTypes */ \"./src/reduxUtils/utils/actionTypes.js\"));\n\nvar _warning = _interopRequireDefault(__webpack_require__(/*! ./utils/warning */ \"./src/reduxUtils/utils/warning.js\"));\n\nvar _isPlainObject = _interopRequireDefault(__webpack_require__(/*! ./utils/isPlainObject */ \"./src/reduxUtils/utils/isPlainObject.js\"));\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction getUndefinedStateErrorMessage(key, action) {\n  var actionType = action && action.type;\n  var actionDescription = actionType && \"action \\\"\".concat(String(actionType), \"\\\"\") || 'an action';\n  return \"Given \".concat(actionDescription, \", reducer \\\"\").concat(key, \"\\\" returned undefined. \") + \"To ignore an action, you must explicitly return the previous state. \" + \"If you want this reducer to hold no value, you can return null instead of undefined.\";\n}\n\nfunction getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {\n  var reducerKeys = Object.keys(reducers);\n  var argumentName = action && action.type === _actionTypes[\"default\"].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';\n\n  if (reducerKeys.length === 0) {\n    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';\n  }\n\n  if (!(0, _isPlainObject[\"default\"])(inputState)) {\n    return \"The \".concat(argumentName, \" has unexpected type of \\\"\") + {}.toString.call(inputState).match(/\\s([a-z|A-Z]+)/)[1] + \"\\\". Expected argument to be an object with the following \" + \"keys: \\\"\".concat(reducerKeys.join('\", \"'), \"\\\"\");\n  }\n\n  var unexpectedKeys = Object.keys(inputState).filter(function (key) {\n    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];\n  });\n  unexpectedKeys.forEach(function (key) {\n    unexpectedKeyCache[key] = true;\n  });\n  if (action && action.type === _actionTypes[\"default\"].REPLACE) return;\n\n  if (unexpectedKeys.length > 0) {\n    return \"Unexpected \".concat(unexpectedKeys.length > 1 ? 'keys' : 'key', \" \") + \"\\\"\".concat(unexpectedKeys.join('\", \"'), \"\\\" found in \").concat(argumentName, \". \") + \"Expected to find one of the known reducer keys instead: \" + \"\\\"\".concat(reducerKeys.join('\", \"'), \"\\\". Unexpected keys will be ignored.\");\n  }\n}\n\nfunction assertReducerShape(reducers) {\n  Object.keys(reducers).forEach(function (key) {\n    var reducer = reducers[key];\n    var initialState = reducer(undefined, {\n      type: _actionTypes[\"default\"].INIT\n    });\n\n    if (typeof initialState === 'undefined') {\n      throw new Error(\"Reducer \\\"\".concat(key, \"\\\" returned undefined during initialization. \") + \"If the state passed to the reducer is undefined, you must \" + \"explicitly return the initial state. The initial state may \" + \"not be undefined. If you don't want to set a value for this reducer, \" + \"you can use null instead of undefined.\");\n    }\n\n    if (typeof reducer(undefined, {\n      type: _actionTypes[\"default\"].PROBE_UNKNOWN_ACTION()\n    }) === 'undefined') {\n      throw new Error(\"Reducer \\\"\".concat(key, \"\\\" returned undefined when probed with a random type. \") + \"Don't try to handle \".concat(_actionTypes[\"default\"].INIT, \" or other actions in \\\"redux/*\\\" \") + \"namespace. They are considered private. Instead, you must return the \" + \"current state for any unknown actions, unless it is undefined, \" + \"in which case you must return the initial state, regardless of the \" + \"action type. The initial state may not be undefined, but can be null.\");\n    }\n  });\n}\n/**\n * Turns an object whose values are different reducer functions, into a single\n * reducer function. It will call every child reducer, and gather their results\n * into a single state object, whose keys correspond to the keys of the passed\n * reducer functions.\n *\n * @param {Object} reducers An object whose values correspond to different\n * reducer functions that need to be combined into one. One handy way to obtain\n * it is to use ES6 `import * as reducers` syntax. The reducers may never return\n * undefined for any action. Instead, they should return their initial state\n * if the state passed to them was undefined, and the current state for any\n * unrecognized action.\n *\n * @returns {Function} A reducer function that invokes every reducer inside the\n * passed object, and builds a state object with the same shape.\n */\n\n\nvar nextState = {};\nvar finalReducers = {};\nvar unexpectedKeyCache;\nvar shapeAssertionError;\n\nfunction combineReducers(reducersMap) {\n  Object.keys(reducersMap).map(function (o) {\n    var reducers = reducersMap[o];\n    var namespace = o;\n    var reducerKeys = Object.keys(reducers);\n    finalReducers[namespace] = {};\n\n    for (var i = 0; i < reducerKeys.length; i++) {\n      var key = reducerKeys[i];\n\n      if (true) {\n        if (typeof reducers[key] === 'undefined') {\n          (0, _warning[\"default\"])(\"No reducer provided for key \\\"\".concat(key, \"\\\"\"));\n        }\n      }\n\n      if (typeof reducers[key] === 'function') {\n        finalReducers[namespace][key] = reducers[key];\n      }\n    }\n\n    if (true) {\n      unexpectedKeyCache = {};\n    }\n\n    try {\n      assertReducerShape(finalReducers[namespace]);\n    } catch (e) {\n      shapeAssertionError = e;\n    }\n  });\n  return function combination() {\n    var ostate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var action = arguments.length > 1 ? arguments[1] : undefined;\n    var namespace = action.namespace || null;\n    var state = {};\n    var hasChanged = false;\n\n    if (namespace) {\n      loop(namespace);\n    } else {\n      Object.keys(finalReducers).map(function (o) {\n        loop(o);\n      });\n    }\n\n    function loop(namespace) {\n      var finalReducerKeys = Object.keys(finalReducers[namespace]);\n\n      if (ostate && ostate[namespace]) {\n        state = ostate;\n      } else {\n        state[namespace] = ostate;\n      }\n\n      if (shapeAssertionError) {\n        throw shapeAssertionError;\n      }\n\n      if (true) {\n        var warningMessage = getUnexpectedStateShapeWarningMessage(state[namespace], finalReducers[namespace], action, unexpectedKeyCache);\n\n        if (warningMessage) {\n          (0, _warning[\"default\"])(warningMessage);\n        }\n      }\n\n      if (!nextState[namespace]) {\n        nextState[namespace] = {};\n      }\n\n      for (var i = 0; i < finalReducerKeys.length; i++) {\n        var key = finalReducerKeys[i];\n        var reducer = finalReducers[namespace][key];\n        var previousStateForKey = state[namespace][key];\n        var nextStateForKey = reducer(previousStateForKey, action);\n\n        if (typeof nextStateForKey === 'undefined') {\n          var errorMessage = getUndefinedStateErrorMessage(key, action);\n          throw new Error(errorMessage);\n        }\n\n        nextState[namespace][key] = nextStateForKey;\n        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;\n      }\n    }\n\n    return hasChanged ? _objectSpread({}, nextState) : state;\n  };\n}\n\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://spaassy-redux/./src/reduxUtils/combineReducers.js?");

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

/***/ "./src/spaassyConnect/hocConnect.jsx":
/*!*******************************************!*\
  !*** ./src/spaassyConnect/hocConnect.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _bindActionCreators = _interopRequireDefault(__webpack_require__(/*! ../reduxUtils/bindActionCreators */ \"./src/reduxUtils/bindActionCreators.js\"));\n\nvar _default = function _default(namespace) {\n  return function (stateKey, action) {\n    return (0, _reactRedux.connect)(function (ostate) {\n      var state = Object.assign({}, ostate[namespace]);\n\n      if (typeof stateKey == 'function') {\n        return stateKey(state);\n      }\n\n      var s = {};\n\n      if (stateKey instanceof Array) {\n        stateKey.forEach(function (k) {\n          return s[k] = state[k];\n        });\n      } else {\n        s = state[stateKey];\n      }\n\n      return s;\n    }, function (dispatch) {\n      var a = {};\n\n      if (!action) {\n        return a;\n      }\n\n      if (action instanceof Array && action.length === 0) {\n        return a;\n      }\n\n      if (typeof action == 'function') {\n        a = (0, _bindActionCreators[\"default\"])(action, dispatch, namespace);\n      } else if (action instanceof Array) {\n        console.log('The action arguments pass error, Don\\t use array, please use object, eg. {addTab: function(){},removeTab:function(){}}');\n      } else {\n        Object.keys(action).map(function (key) {\n          a[key] = (0, _bindActionCreators[\"default\"])(action[key], dispatch, namespace);\n        });\n      }\n\n      return a;\n    });\n  };\n};\n\nexports[\"default\"] = _default;\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://spaassy-redux/./src/spaassyConnect/hocConnect.jsx?");

/***/ }),

/***/ "./src/spaassyConnect/index.js":
/*!*************************************!*\
  !*** ./src/spaassyConnect/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _hocConnect = _interopRequireDefault(__webpack_require__(/*! ./hocConnect */ \"./src/spaassyConnect/hocConnect.jsx\"));\n\nvar projectType = process.env.PROJECTTYPE;\nvar newConnect = _hocConnect[\"default\"];\n\nif (projectType == 'SPAASSY' && window.subProject) {\n  newConnect = window.subProject.SpaAssyConnect;\n}\n\nvar _default = newConnect;\nexports[\"default\"] = _default;\nmodule.exports = exports.default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/_process@0.11.10@process/browser.js */ \"./node_modules/_process@0.11.10@process/browser.js\")))\n\n//# sourceURL=webpack://spaassy-redux/./src/spaassyConnect/index.js?");

/***/ }),

/***/ "./src/spaassyProvider/combinReducers.js":
/*!***********************************************!*\
  !*** ./src/spaassyProvider/combinReducers.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js\"));\n\nvar _combineReducers2 = _interopRequireDefault(__webpack_require__(/*! ../reduxUtils/combineReducers */ \"./src/reduxUtils/combineReducers.js\"));\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar _default = function _default(namespace, rootReducers) {\n  return (0, _combineReducers2[\"default\"])((0, _defineProperty2[\"default\"])({}, namespace, _objectSpread({}, rootReducers)));\n};\n\nexports[\"default\"] = _default;\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://spaassy-redux/./src/spaassyProvider/combinReducers.js?");

/***/ }),

/***/ "./src/spaassyProvider/configureStore.js":
/*!***********************************************!*\
  !*** ./src/spaassyProvider/configureStore.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/_redux@4.0.4@redux/es/redux.js\");\n\nvar _reduxPromiseMiddleware = _interopRequireDefault(__webpack_require__(/*! ../reduxPromiseMiddleware */ \"./src/reduxPromiseMiddleware/index.js\"));\n\nvar _combinReducers = _interopRequireDefault(__webpack_require__(/*! ./combinReducers */ \"./src/spaassyProvider/combinReducers.js\"));\n\nfunction configureStore(name, reducers, initialState) {\n  var store = (0, _redux.createStore)((0, _combinReducers[\"default\"])(name, reducers), initialState, (0, _redux.applyMiddleware)(_reduxPromiseMiddleware[\"default\"]));\n  return store;\n}\n\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://spaassy-redux/./src/spaassyProvider/configureStore.js?");

/***/ }),

/***/ "./src/spaassyProvider/index.jsx":
/*!***************************************!*\
  !*** ./src/spaassyProvider/index.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _configureStore = _interopRequireDefault(__webpack_require__(/*! ./configureStore */ \"./src/spaassyProvider/configureStore.js\"));\n\nvar _combineReducers = _interopRequireDefault(__webpack_require__(/*! ../reduxUtils/combineReducers */ \"./src/reduxUtils/combineReducers.js\"));\n\nvar _spaassyRegister = _interopRequireDefault(__webpack_require__(/*! ../spaassyRegister */ \"./src/spaassyRegister/index.js\"));\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar SpaAssyProvider = function SpaAssyProvider(props) {\n  var store = (0, _configureStore[\"default\"])(props.namespace, _objectSpread({}, props.rootReducers));\n\n  if (props.mainProject) {\n    var spaassyRegister = new _spaassyRegister[\"default\"]();\n    spaassyRegister.createUpdataStore(function (namespace, reducers) {\n      store.replaceReducer(combinReducers(namespace, reducers));\n    });\n    spaassyRegister.addReducerAndNoRegister(props.namespace, _objectSpread({}, props.rootReducers));\n  }\n\n  return _react[\"default\"].createElement(_reactRedux.Provider, {\n    store: store\n  }, props.children);\n};\n\nvar _default = SpaAssyProvider;\nexports[\"default\"] = _default;\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://spaassy-redux/./src/spaassyProvider/index.jsx?");

/***/ }),

/***/ "./src/spaassyRegister/index.js":
/*!**************************************!*\
  !*** ./src/spaassyRegister/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js\"));\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/createClass.js\"));\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// let option = {\n//     namespace: '',\n//     routers: [],\n//     reducers: []\n// }\nvar SpaAssyRegister =\n/*#__PURE__*/\nfunction () {\n  function SpaAssyRegister(option) {\n    var _this = this;\n\n    (0, _classCallCheck2[\"default\"])(this, SpaAssyRegister);\n    this.namespace = null;\n    this.routers = [];\n    this.reducers = [];\n\n    this.verifyReducerError = function () {\n      if (!window.subProject || !window.subProject.updataStore) {\n        console.error(\"主程序，没有启用!请检查主程序spaassyProvider组件的mainProject属性设置！\");\n        return true;\n      }\n\n      if (!_this.reducers || _this.reducers.length == 0) {\n        console.info(\"\".concat(_this.namespace, \" \\u6CA1\\u6709reduce\\u53EF\\u6CE8\\u518C\\uFF01\"));\n        return true;\n      }\n    };\n\n    this.verifyRouterError = function () {\n      if (!_this.routers || _this.routers.length == 0) {\n        console.info(\"\".concat(_this.namespace, \" \\u6CA1\\u6709router\\u53EF\\u6CE8\\u518C\\uFF01\"));\n        return true;\n      }\n    };\n\n    this.createUpdataStore = function (func) {\n      if (window.subProject.updataStore) {\n        console.info(\"updataStore\\u5DF2\\u5B58\\u5728\\uFF01\");\n      }\n\n      window.subProject.updataStore = func;\n    };\n\n    this.addRouters = function () {\n      if (_this.verifyRouterError()) {\n        return;\n      }\n\n      window.subProject.routers[_this.namespace] = _objectSpread({}, _this.routers);\n    };\n\n    this.addReducerAndNoRegister = function (namespace, reducers) {\n      window.subProject.reducers[namespace] = _objectSpread({}, reducers);\n    };\n\n    this.registerReducerAndNoAdd = function (namespace, reducers) {\n      if (!window.subProject.updataStore) {\n        console.info(\"updataStore\\u4E0D\\u5B58\\u5728\\uFF01\");\n        return;\n      }\n\n      window.subProject.updataStore(namespace, _objectSpread({}, reducers));\n    };\n\n    this.registerReducer = function () {\n      if (_this.verifyReducerError()) {\n        return;\n      }\n\n      window.subProject.reducers[_this.namespace] = _objectSpread({}, _this.reducers);\n      window.subProject.updataStore(_this.namespace, _objectSpread({}, _this.reducers));\n    };\n\n    this.getRouters = function (arg) {\n      if (!arg) {\n        return window.subProject.routers;\n      }\n\n      if (!window.subProject.routers[arg]) {\n        console.info(\"\\u6CA1\\u6709\\u547D\\u540D\\u7A7A\\u95F4\\u4E3A\".concat(arg, \"\\u7684router\"));\n        return [];\n      }\n\n      return window.subProject.routers[arg];\n    };\n\n    this.getReducers = function (arg) {\n      if (!arg) {\n        return window.subProject.reducers;\n      }\n\n      if (!window.subProject.reducers[arg]) {\n        console.info(\"\\u6CA1\\u6709\\u547D\\u540D\\u7A7A\\u95F4\\u4E3A\".concat(arg, \"\\u7684reducer\"));\n        return [];\n      }\n\n      return window.subProject.reducers[arg];\n    };\n\n    if (option) {\n      this.namespace = option.namespace;\n      this.routers = option.routers;\n      this.reducers = option.reducers;\n    }\n\n    this.init();\n  }\n\n  (0, _createClass2[\"default\"])(SpaAssyRegister, [{\n    key: \"init\",\n    value: function init() {\n      window.subProject = window.subProject || {\n        routers: {},\n        reducers: {},\n        updataStore: null\n      };\n    }\n  }]);\n  return SpaAssyRegister;\n}();\n\nvar _default = SpaAssyRegister;\nexports[\"default\"] = _default;\nmodule.exports = exports.default;\n\n//# sourceURL=webpack://spaassy-redux/./src/spaassyRegister/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://spaassy-redux/multi_./src/index.js?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://spaassy-redux/external_%7B%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22amd%22:%22react%22,%22root%22:%22react%22%7D?");

/***/ }),

/***/ "react-redux":
/*!**************************************************************************************************************!*\
  !*** external {"commonjs":"react-redux","commonjs2":"react-redux","amd":"react-redux","root":"react-redux"} ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;\n\n//# sourceURL=webpack://spaassy-redux/external_%7B%22commonjs%22:%22react-redux%22,%22commonjs2%22:%22react-redux%22,%22amd%22:%22react-redux%22,%22root%22:%22react-redux%22%7D?");

/***/ })

/******/ });
});