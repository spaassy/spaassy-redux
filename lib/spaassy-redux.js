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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/arrayWithoutHoles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/assertThisInitialized.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/assertThisInitialized.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/classCallCheck.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/classCallCheck.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/createClass.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/createClass.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/getPrototypeOf.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/getPrototypeOf.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/inherits.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/inherits.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireWildcard.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/iterableToArray.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/iterableToArray.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/nonIterableRest.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/nonIterableRest.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/nonIterableSpread.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/nonIterableSpread.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/possibleConstructorReturn.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/setPrototypeOf.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/setPrototypeOf.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/slicedToArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/slicedToArray.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/toConsumableArray.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/toConsumableArray.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/typeof.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/typeof.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/_process@0.11.10@process/browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/_process@0.11.10@process/browser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/_redux@4.0.4@redux/es/redux.js":
/*!*****************************************************!*\
  !*** ./node_modules/_redux@4.0.4@redux/es/redux.js ***!
  \*****************************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/_symbol-observable@1.2.0@symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/_symbol-observable@1.2.0@symbol-observable/es/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_symbol-observable@1.2.0@symbol-observable/es/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/_symbol-observable@1.2.0@symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../_webpack@4.39.3@webpack/buildin/global.js */ "./node_modules/_webpack@4.39.3@webpack/buildin/global.js"), __webpack_require__(/*! ./../../_webpack@4.39.3@webpack/buildin/harmony-module.js */ "./node_modules/_webpack@4.39.3@webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/_symbol-observable@1.2.0@symbol-observable/es/ponyfill.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_symbol-observable@1.2.0@symbol-observable/es/ponyfill.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/_webpack@4.39.3@webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/_webpack@4.39.3@webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/asyncComponent/index.jsx":
/*!**************************************!*\
  !*** ./src/asyncComponent/index.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! react */ "react")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _react) {
  "use strict";

  var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireWildcard.js");

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _react = _interopRequireWildcard(_react);

  var AsyncComponent = function AsyncComponent(namespace) {
    return function (importComponent) {
      return (
        /*#__PURE__*/
        function (_Component) {
          (0, _inherits2["default"])(_class, _Component);

          function _class() {
            var _this;

            (0, _classCallCheck2["default"])(this, _class);
            _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(_class).call(this));
            _this.state = {
              component: null
            };
            return _this;
          }

          (0, _createClass2["default"])(_class, [{
            key: "componentDidMount",
            value: function componentDidMount() {
              var _this2 = this;

              importComponent().then(function (cmp) {
                _this2.setState({
                  component: cmp["default"]
                });
              });
            }
          }, {
            key: "render",
            value: function render() {
              var C = this.state.component;
              return _react["default"].createElement("div", {
                className: namespace ? "".concat(namespace, "_class") : null
              }, C ? _react["default"].createElement(C, this.props) : null);
            }
          }]);
          return _class;
        }(_react.Component)
      );
    };
  };

  var _default = AsyncComponent;
  _exports["default"] = _default;
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/createReducer/index.js":
/*!************************************!*\
  !*** ./src/createReducer/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  var createReducer = function createReducer(initialparams, reducerMap) {
    return function () {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialparams;
      var action = arguments.length > 1 ? arguments[1] : undefined;
      var reducer = reducerMap[action.type];

      if (!action.error && action.payload && action.payload.code && action.payload.code != '0') {
        if (params.get('loading')) {
          return params.set('loading', false);
        } else {
          return params;
        }
      }

      return reducer ? reducer(params, action.payload ? action.payload : {}, action.params) : params;
    };
  };

  var _default = createReducer;
  _exports["default"] = _default;
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./reduxUtils/bindActionCreators */ "./src/reduxUtils/bindActionCreators.js"), __webpack_require__(/*! ./reduxUtils/combineReducers */ "./src/reduxUtils/combineReducers.js"), __webpack_require__(/*! ./createReducer */ "./src/createReducer/index.js"), __webpack_require__(/*! ./reduxPromiseMiddleware */ "./src/reduxPromiseMiddleware/index.js"), __webpack_require__(/*! ./asyncComponent */ "./src/asyncComponent/index.jsx"), __webpack_require__(/*! ./spaassyProvider */ "./src/spaassyProvider/index.jsx"), __webpack_require__(/*! ./spaassyConnect */ "./src/spaassyConnect/index.js"), __webpack_require__(/*! ./spaassyRegister */ "./src/spaassyRegister/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_bindActionCreators, _combineReducers, _createReducer, _reduxPromiseMiddleware, _asyncComponent, _spaassyProvider, _spaassyConnect, _spaassyRegister) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js");

  _bindActionCreators = _interopRequireDefault(_bindActionCreators);
  _combineReducers = _interopRequireDefault(_combineReducers);
  _createReducer = _interopRequireDefault(_createReducer);
  _reduxPromiseMiddleware = _interopRequireDefault(_reduxPromiseMiddleware);
  _asyncComponent = _interopRequireDefault(_asyncComponent);
  _spaassyProvider = _interopRequireDefault(_spaassyProvider);
  _spaassyConnect = _interopRequireDefault(_spaassyConnect);
  _spaassyRegister = _interopRequireDefault(_spaassyRegister);
  module.exports = {
    bindActionCreators: _bindActionCreators["default"],
    combineReducers: _combineReducers["default"],
    createReducer: _createReducer["default"],
    promiseMiddleware: _reduxPromiseMiddleware["default"],
    AsyncComponent: _asyncComponent["default"],
    SpaAssyProvider: _spaassyProvider["default"],
    SpaAssyConnect: _spaassyConnect["default"],
    SpaAssyRegister: _spaassyRegister["default"]
  };
});

/***/ }),

/***/ "./src/reduxPromiseMiddleware/index.js":
/*!*********************************************!*\
  !*** ./src/reduxPromiseMiddleware/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/slicedToArray.js"), __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js"), __webpack_require__(/*! ./isPromise.js */ "./src/reduxPromiseMiddleware/isPromise.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _slicedToArray2, _defineProperty2, _isPromise) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.createPromise = createPromise;
  _exports["default"] = middleware;
  _exports.ActionType = void 0;
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _isPromise = _interopRequireDefault(_isPromise);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  /**
   * For TypeScript support: Remember to check and make sure
   * that `index.d.ts` is also up to date with the implementation.
   */
  var ActionType = {
    Pending: 'PENDING',
    Fulfilled: 'FULFILLED',
    Rejected: 'REJECTED'
  };
  /**
   * Function: createPromise
   * Description: The main createPromise accepts a configuration
   * object and returns the middleware.
   */

  _exports.ActionType = ActionType;

  function createPromise() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var defaultTypes = [ActionType.Pending, ActionType.Fulfilled, ActionType.Rejected];
    var PROMISE_TYPE_SUFFIXES = config.promiseTypeSuffixes || defaultTypes;
    var PROMISE_TYPE_DELIMITER = config.promiseTypeDelimiter || '_';
    return function (ref) {
      var dispatch = ref.dispatch;
      return function (next) {
        return function (action) {
          /**
           * Instantiate variables to hold:
           * (1) the promise
           * (2) the data for optimistic updates
           */
          var promise;
          var data;
          /**
           * There are multiple ways to dispatch a promise. The first step is to
           * determine if the promise is defined:
           * (a) explicitly (action.payload.promise is the promise)
           * (b) implicitly (action.payload is the promise)
           * (c) as an async function (returns a promise when called)
           *
           * If the promise is not defined in one of these three ways, we don't do
           * anything and move on to the next middleware in the middleware chain.
           */
          // Step 1a: Is there a payload?

          if (action.payload) {
            var PAYLOAD = action.payload; // Step 1.1: Is the promise implicitly defined?

            if ((0, _isPromise["default"])(PAYLOAD)) {
              promise = PAYLOAD;
            } // Step 1.2: Is the promise explicitly defined?
            else if ((0, _isPromise["default"])(PAYLOAD.promise)) {
                promise = PAYLOAD.promise;
                data = PAYLOAD.data;
              } // Step 1.3: Is the promise returned by an async function?
              else if (typeof PAYLOAD === 'function' || typeof PAYLOAD.promise === 'function') {
                  promise = PAYLOAD.promise ? PAYLOAD.promise() : PAYLOAD();
                  data = PAYLOAD.promise ? PAYLOAD.data : undefined; // Step 1.3.1: Is the return of action.payload a promise?

                  if (!(0, _isPromise["default"])(promise)) {
                    // If not, move on to the next middleware.
                    return next(_objectSpread({}, action, {
                      payload: promise
                    }));
                  }
                } // Step 1.4: If there's no promise, move on to the next middleware.
                else {
                    return next(action);
                  } // Step 1b: If there's no payload, move on to the next middleware.

          } else {
            return next(action);
          }
          /**
           * Instantiate and define constants for:
           * (1) the action type
           * (2) the action meta
           */


          var TYPE = action.type;
          var META = action.meta;
          /**
           * Instantiate and define constants for the action type suffixes.
           * These are appended to the end of the action type.
           */

          var _PROMISE_TYPE_SUFFIXE = (0, _slicedToArray2["default"])(PROMISE_TYPE_SUFFIXES, 3),
              PENDING = _PROMISE_TYPE_SUFFIXE[0],
              FULFILLED = _PROMISE_TYPE_SUFFIXE[1],
              REJECTED = _PROMISE_TYPE_SUFFIXE[2];
          /**
           * Function: getAction
           * Description: This function constructs and returns a rejected
           * or fulfilled action object. The action object is based off the Flux
           * Standard Action (FSA).
           *
           * Given an original action with the type FOO:
           *
           * The rejected object model will be:
           * {
           *   error: true,
           *   type: 'FOO_REJECTED',
           *   payload: ...,
           *   meta: ... (optional)
           * }
           *
           * The fulfilled object model will be:
           * {
           *   type: 'FOO_FULFILLED',
           *   payload: ...,
           *   meta: ... (optional)
           * }
           */


          var getAction = function getAction(newPayload, isRejected) {
            return _objectSpread({
              namespace: action.namespace,
              // Concatenate the type string property.
              type: [TYPE, isRejected ? REJECTED : FULFILLED].join(PROMISE_TYPE_DELIMITER)
            }, newPayload === null || typeof newPayload === 'undefined' ? {} : {
              payload: newPayload
            }, {}, META !== undefined ? {
              meta: META
            } : {}, {}, isRejected ? {
              error: true
            } : {});
          };
          /**
           * Function: handleReject
           * Calls: getAction to construct the rejected action
           * Description: This function dispatches the rejected action and returns
           * the original Error object. Please note the developer is responsible
           * for constructing and throwing an Error object. The middleware does not
           * construct any Errors.
           */


          var handleReject = function handleReject(reason) {
            var rejectedAction = getAction(reason, true);
            dispatch(rejectedAction);
            throw reason;
          };
          /**
           * Function: handleFulfill
           * Calls: getAction to construct the fullfilled action
           * Description: This function dispatches the fulfilled action and
           * returns the success object. The success object should
           * contain the value and the dispatched action.
           */


          var handleFulfill = function handleFulfill() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var resolvedAction = getAction(value, false);
            dispatch(resolvedAction);
            return {
              value: value,
              action: resolvedAction
            };
          };
          /**
           * First, dispatch the pending action:
           * This object describes the pending state of a promise and will include
           * any data (for optimistic updates) and/or meta from the original action.
           */


          next(_objectSpread({
            namespace: action.namespace,
            // Concatenate the type string.
            type: [TYPE, PENDING].join(PROMISE_TYPE_DELIMITER)
          }, data !== undefined ? {
            payload: data
          } : {}, {}, META !== undefined ? {
            meta: META
          } : {}));
          /**
           * Second, dispatch a rejected or fulfilled action and move on to the
           * next middleware.
           */

          return promise.then(handleFulfill, handleReject);
        };
      };
    };
  }

  function middleware() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        dispatch = _ref.dispatch;

    if (typeof dispatch === 'function') {
      return createPromise()({
        dispatch: dispatch
      });
    }

    if (process && process.env && ( true || false)) {
      // eslint-disable-next-line no-console
      console.warn("Redux Promise Middleware: As of version 6.0.0, the \t\t\tmiddleware library supports both preconfigured and custom configured \t\t\tmiddleware. To use a custom configuration, use the \"createPromise\" export \t\t\tand call this function with your configuration property. To use a \t\t\tpreconfiguration, use the default export. For more help, check the upgrading \t\t\tguide: https://docs.psb.design/redux-promise-middleware/upgrade-guides/v6\n\n\t\t\tFor custom configuration:\n\t\t\timport { createPromise } from 'redux-promise-middleware';\n\t\t\tconst promise = createPromise({ types: { fulfilled: 'success' } });\n\t\t\tapplyMiddleware(promise);\n\n\t\t\tFor preconfiguration:\n\t\t\timport promise from 'redux-promise-middleware';\n\t\t\tapplyMiddleware(promise);");
    }

    return null;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/_process@0.11.10@process/browser.js */ "./node_modules/_process@0.11.10@process/browser.js")))

/***/ }),

/***/ "./src/reduxPromiseMiddleware/isPromise.js":
/*!*************************************************!*\
  !*** ./src/reduxPromiseMiddleware/isPromise.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/typeof.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _typeof2) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = isPromise;
  _typeof2 = _interopRequireDefault(_typeof2);

  function isPromise(value) {
    if (value !== null && (0, _typeof2["default"])(value) === 'object') {
      return value && typeof value.then === 'function';
    }

    return false;
  }

  module.exports = exports.default;
});

/***/ }),

/***/ "./src/reduxUtils/bindActionCreators.js":
/*!**********************************************!*\
  !*** ./src/reduxUtils/bindActionCreators.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/typeof.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _typeof2) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = bindActionCreators;
  _typeof2 = _interopRequireDefault(_typeof2);

  function bindActionCreator(actionCreator, dispatch, namespace) {
    return function () {
      var actionObj = actionCreator.apply(this, arguments);
      actionObj.namespace = namespace;
      return dispatch(actionObj);
    };
  }
  /**
   * Turns an object whose values are action creators, into an object with the
   * same keys, but with every function wrapped into a `dispatch` call so they
   * may be invoked directly. This is just a convenience method, as you can call
   * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
   *
   * For convenience, you can also pass an action creator as the first argument,
   * and get a dispatch wrapped function in return.
   *
   * @param {Function|Object} actionCreators An object whose values are action
   * creator functions. One handy way to obtain it is to use ES6 `import * as`
   * syntax. You may also pass a single function.
   *
   * @param {Function} dispatch The `dispatch` function available on your Redux
   * store.
   *
   * @returns {Function|Object} The object mimicking the original object, but with
   * every action creator wrapped into the `dispatch` call. If you passed a
   * function as `actionCreators`, the return value will also be a single
   * function.
   */


  function bindActionCreators(actionCreators, dispatch, namespace) {
    if (typeof actionCreators === 'function') {
      return bindActionCreator(actionCreators, dispatch, namespace);
    }

    if ((0, _typeof2["default"])(actionCreators) !== 'object' || actionCreators === null) {
      throw new Error("bindActionCreators expected an object or a function, instead received ".concat(actionCreators === null ? 'null' : (0, _typeof2["default"])(actionCreators), ". ") + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
    }

    var boundActionCreators = {};

    for (var key in actionCreators) {
      var actionCreator = actionCreators[key];

      if (typeof actionCreator === 'function') {
        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch, namespace);
      }
    }

    return boundActionCreators;
  }

  module.exports = exports.default;
});

/***/ }),

/***/ "./src/reduxUtils/combineReducers.js":
/*!*******************************************!*\
  !*** ./src/reduxUtils/combineReducers.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js"), __webpack_require__(/*! ./utils/actionTypes */ "./src/reduxUtils/utils/actionTypes.js"), __webpack_require__(/*! ./utils/warning */ "./src/reduxUtils/utils/warning.js"), __webpack_require__(/*! ./utils/isPlainObject */ "./src/reduxUtils/utils/isPlainObject.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _defineProperty2, _actionTypes, _warning, _isPlainObject) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = combineReducers;
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _actionTypes = _interopRequireDefault(_actionTypes);
  _warning = _interopRequireDefault(_warning);
  _isPlainObject = _interopRequireDefault(_isPlainObject);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function getUndefinedStateErrorMessage(key, action) {
    var actionType = action && action.type;
    var actionDescription = actionType && "action \"".concat(String(actionType), "\"") || 'an action';
    return "Given ".concat(actionDescription, ", reducer \"").concat(key, "\" returned undefined. ") + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
  }

  function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    var reducerKeys = Object.keys(reducers);
    var argumentName = action && action.type === _actionTypes["default"].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

    if (reducerKeys.length === 0) {
      return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
    }

    if (!(0, _isPlainObject["default"])(inputState)) {
      return "The ".concat(argumentName, " has unexpected type of \"") + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + "keys: \"".concat(reducerKeys.join('", "'), "\"");
    }

    var unexpectedKeys = Object.keys(inputState).filter(function (key) {
      return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
    });
    unexpectedKeys.forEach(function (key) {
      unexpectedKeyCache[key] = true;
    });
    if (action && action.type === _actionTypes["default"].REPLACE) return;

    if (unexpectedKeys.length > 0) {
      return "Unexpected ".concat(unexpectedKeys.length > 1 ? 'keys' : 'key', " ") + "\"".concat(unexpectedKeys.join('", "'), "\" found in ").concat(argumentName, ". ") + "Expected to find one of the known reducer keys instead: " + "\"".concat(reducerKeys.join('", "'), "\". Unexpected keys will be ignored.");
    }
  }

  function assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function (key) {
      var reducer = reducers[key];
      var initialState = reducer(undefined, {
        type: _actionTypes["default"].INIT
      });

      if (typeof initialState === 'undefined') {
        throw new Error("Reducer \"".concat(key, "\" returned undefined during initialization. ") + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
      }

      if (typeof reducer(undefined, {
        type: _actionTypes["default"].PROBE_UNKNOWN_ACTION()
      }) === 'undefined') {
        throw new Error("Reducer \"".concat(key, "\" returned undefined when probed with a random type. ") + "Don't try to handle ".concat(_actionTypes["default"].INIT, " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
      }
    });
  }
  /**
   * Turns an object whose values are different reducer functions, into a single
   * reducer function. It will call every child reducer, and gather their results
   * into a single state object, whose keys correspond to the keys of the passed
   * reducer functions.
   *
   * @param {Object} reducers An object whose values correspond to different
   * reducer functions that need to be combined into one. One handy way to obtain
   * it is to use ES6 `import * as reducers` syntax. The reducers may never return
   * undefined for any action. Instead, they should return their initial state
   * if the state passed to them was undefined, and the current state for any
   * unrecognized action.
   *
   * @returns {Function} A reducer function that invokes every reducer inside the
   * passed object, and builds a state object with the same shape.
   */


  var nextState = {};
  var finalReducers = {};
  var unexpectedKeyCache;
  var shapeAssertionError;

  function combineReducers(reducersMap) {
    console.log(reducersMap);
    Object.keys(reducersMap).map(function (o) {
      var reducers = reducersMap[o];
      var namespace = o;
      var reducerKeys = Object.keys(reducers);
      finalReducers[namespace] = {};

      for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];

        if (true) {
          if (typeof reducers[key] === 'undefined') {
            (0, _warning["default"])("No reducer provided for key \"".concat(key, "\""));
          }
        }

        if (typeof reducers[key] === 'function') {
          finalReducers[namespace][key] = reducers[key];
        }
      }

      if (true) {
        unexpectedKeyCache = {};
      }

      try {
        assertReducerShape(finalReducers[namespace]);
      } catch (e) {
        shapeAssertionError = e;
      }
    });
    return function combination() {
      var ostate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : undefined;
      console.log(ostate, action);
      var namespace = action.namespace || null;
      var state = {};
      var hasChanged = false;

      if (namespace) {
        loop(namespace);
      } else {
        Object.keys(finalReducers).map(function (o) {
          loop(o);
        });
      }

      function loop(namespace) {
        var finalReducerKeys = Object.keys(finalReducers[namespace]);

        if (ostate && ostate[namespace]) {
          state = ostate;
        } else {
          state[namespace] = {};
        }

        if (shapeAssertionError) {
          throw shapeAssertionError;
        }

        if (true) {
          var warningMessage = getUnexpectedStateShapeWarningMessage(state[namespace], finalReducers[namespace], action, unexpectedKeyCache);

          if (warningMessage) {
            (0, _warning["default"])(warningMessage);
          }
        }

        if (!nextState[namespace]) {
          nextState[namespace] = {};
        }

        for (var i = 0; i < finalReducerKeys.length; i++) {
          var key = finalReducerKeys[i];
          var reducer = finalReducers[namespace][key];
          var previousStateForKey = state[namespace][key];
          var nextStateForKey = reducer(previousStateForKey, action);

          if (typeof nextStateForKey === 'undefined') {
            var errorMessage = getUndefinedStateErrorMessage(key, action);
            throw new Error(errorMessage);
          }

          nextState[namespace][key] = nextStateForKey;
          hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
      }

      return hasChanged ? _objectSpread({}, nextState) : state;
    };
  }

  module.exports = exports.default;
});

/***/ }),

/***/ "./src/reduxUtils/utils/actionTypes.js":
/*!*********************************************!*\
  !*** ./src/reduxUtils/utils/actionTypes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  /**
   * These are private action types reserved by Redux.
   * For any unknown actions, you must return the current state.
   * If the current state is undefined, you must return the initial state.
   * Do not reference these action types directly in your code.
   */
  var randomString = function randomString() {
    return Math.random().toString(36).substring(7).split('').join('.');
  };

  var ActionTypes = {
    INIT: "@@redux/INIT".concat(randomString()),
    REPLACE: "@@redux/REPLACE".concat(randomString()),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
      return "@@redux/PROBE_UNKNOWN_ACTION".concat(randomString());
    }
  };
  var _default = ActionTypes;
  _exports["default"] = _default;
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/reduxUtils/utils/isPlainObject.js":
/*!***********************************************!*\
  !*** ./src/reduxUtils/utils/isPlainObject.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/typeof.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _typeof2) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = isPlainObject;
  _typeof2 = _interopRequireDefault(_typeof2);

  /**
   * @param {any} obj The object to inspect.
   * @returns {boolean} True if the argument appears to be a plain object.
   */
  function isPlainObject(obj) {
    if ((0, _typeof2["default"])(obj) !== 'object' || obj === null) return false;
    var proto = obj;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(obj) === proto;
  }

  module.exports = exports.default;
});

/***/ }),

/***/ "./src/reduxUtils/utils/warning.js":
/*!*****************************************!*\
  !*** ./src/reduxUtils/utils/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = warning;

  /**
   * Prints a warning in the console if it exists.
   *
   * @param {String} message The warning message.
   * @returns {void}
   */
  function warning(message) {
    /* eslint-disable no-console */
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(message);
    }
    /* eslint-enable no-console */


    try {
      // This error was thrown as a convenience so that if you enable
      // "break on all exceptions" in your console,
      // it would pause the execution at this line.
      throw new Error(message);
    } catch (e) {} // eslint-disable-line no-empty

  }

  module.exports = exports.default;
});

/***/ }),

/***/ "./src/spaassyConnect/hocConnect.jsx":
/*!*******************************************!*\
  !*** ./src/spaassyConnect/hocConnect.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react-redux */ "react-redux"), __webpack_require__(/*! ../reduxUtils/bindActionCreators */ "./src/reduxUtils/bindActionCreators.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _reactRedux, _bindActionCreators) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _bindActionCreators = _interopRequireDefault(_bindActionCreators);

  var _default = function _default(namespace) {
    return function (stateKey, action) {
      return (0, _reactRedux.connect)(function (ostate) {
        var state = Object.assign({}, ostate[namespace]);

        if (typeof stateKey == 'function') {
          return stateKey(state);
        }

        var s = {};

        if (stateKey instanceof Array) {
          stateKey.forEach(function (k) {
            return s[k] = state[k];
          });
        } else {
          s = state[stateKey];
        }

        return s;
      }, function (dispatch) {
        var a = {};

        if (!action) {
          return a;
        }

        if (action instanceof Array && action.length === 0) {
          return a;
        }

        if (typeof action == 'function') {
          a = (0, _bindActionCreators["default"])(action, dispatch, namespace);
        } else if (action instanceof Array) {
          console.log('The action arguments pass error, Don\t use array, please use object, eg. {addTab: function(){},removeTab:function(){}}');
        } else {
          Object.keys(action).map(function (key) {
            a[key] = (0, _bindActionCreators["default"])(action[key], dispatch, namespace);
          });
        }

        return a;
      });
    };
  };

  _exports["default"] = _default;
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/spaassyConnect/index.js":
/*!*************************************!*\
  !*** ./src/spaassyConnect/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./hocConnect */ "./src/spaassyConnect/hocConnect.jsx")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _hocConnect) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _hocConnect = _interopRequireDefault(_hocConnect);
  var newConnect = _hocConnect["default"];

  if (window.subProject) {
    newConnect = window.subProject.SpaAssyConnect;
  }

  var _default = newConnect;
  _exports["default"] = _default;
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/spaassyProvider/combineReducers.js":
/*!************************************************!*\
  !*** ./src/spaassyProvider/combineReducers.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js"), __webpack_require__(/*! ../reduxUtils/combineReducers */ "./src/reduxUtils/combineReducers.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _defineProperty2, _combineReducers2) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _combineReducers2 = _interopRequireDefault(_combineReducers2);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var _default = function _default(namespace, rootReducers) {
    return (0, _combineReducers2["default"])((0, _defineProperty2["default"])({}, namespace, _objectSpread({}, rootReducers)));
  };

  _exports["default"] = _default;
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/spaassyProvider/configureStore.js":
/*!***********************************************!*\
  !*** ./src/spaassyProvider/configureStore.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! redux */ "./node_modules/_redux@4.0.4@redux/es/redux.js"), __webpack_require__(/*! ../reduxPromiseMiddleware */ "./src/reduxPromiseMiddleware/index.js"), __webpack_require__(/*! ./combineReducers */ "./src/spaassyProvider/combineReducers.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _redux, _reduxPromiseMiddleware, _combineReducers) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = configureStore;
  _reduxPromiseMiddleware = _interopRequireDefault(_reduxPromiseMiddleware);
  _combineReducers = _interopRequireDefault(_combineReducers);

  function configureStore(name, reducers, initialState) {
    var store = (0, _redux.createStore)((0, _combineReducers["default"])(name, reducers), initialState, (0, _redux.applyMiddleware)(_reduxPromiseMiddleware["default"]));
    return store;
  }

  module.exports = exports.default;
});

/***/ }),

/***/ "./src/spaassyProvider/index.jsx":
/*!***************************************!*\
  !*** ./src/spaassyProvider/index.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-redux */ "react-redux"), __webpack_require__(/*! ./configureStore */ "./src/spaassyProvider/configureStore.js"), __webpack_require__(/*! ./combineReducers */ "./src/spaassyProvider/combineReducers.js"), __webpack_require__(/*! ../spaassyRegister */ "./src/spaassyRegister/index.js"), __webpack_require__(/*! ../spaassyConnect */ "./src/spaassyConnect/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _defineProperty2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _assertThisInitialized2, _inherits2, _react, _reactRedux, _configureStore, _combineReducers, _spaassyRegister, _spaassyConnect) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _react = _interopRequireDefault(_react);
  _configureStore = _interopRequireDefault(_configureStore);
  _combineReducers = _interopRequireDefault(_combineReducers);
  _spaassyRegister = _interopRequireDefault(_spaassyRegister);
  _spaassyConnect = _interopRequireDefault(_spaassyConnect);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var SpaAssyProvider =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(SpaAssyProvider, _React$Component);

    function SpaAssyProvider(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, SpaAssyProvider);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SpaAssyProvider).call(this, props));

      _this.updataRouter = function () {
        _this.setState({
          updataRouter: !_this.updataRouter
        });
      };

      _this.store = (0, _configureStore["default"])(_this.props.namespace, _objectSpread({}, _this.props.rootReducers));

      if (_this.props.mainProject) {
        var spaassyRegister = new _spaassyRegister["default"]();
        spaassyRegister.createUpdataStore(function (namespace, reducers) {
          _this.store.replaceReducer((0, _combineReducers["default"])(namespace, reducers));
        });
        spaassyRegister.addReducerAndNoRegister(_this.props.namespace, _objectSpread({}, _this.props.rootReducers));
        window.subProject.SpaAssyConnect = _spaassyConnect["default"];
        window.subProject.updataRouter = _this.updataRouter.bind((0, _assertThisInitialized2["default"])(_this));
      }

      _this.state = {
        updataRouter: false
      };
      return _this;
    }

    (0, _createClass2["default"])(SpaAssyProvider, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(_reactRedux.Provider, {
          store: this.store
        }, this.state.updataRouter ? this.props.children : _react["default"].createElement("span", null, this.props.children));
      }
    }]);
    return SpaAssyProvider;
  }(_react["default"].Component);

  var _default = SpaAssyProvider;
  _exports["default"] = _default;
  module.exports = exports.default;
});

/***/ }),

/***/ "./src/spaassyRegister/index.js":
/*!**************************************!*\
  !*** ./src/spaassyRegister/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/defineProperty.js"), __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/toConsumableArray.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/createClass.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _defineProperty2, _toConsumableArray2, _classCallCheck2, _createClass2) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/_@babel_runtime@7.5.5@@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _toConsumableArray2 = _interopRequireDefault(_toConsumableArray2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  // let option = {
  //     namespace: '',
  //     routers: [],
  //     reducers: []
  // }
  var SpaAssyRegister =
  /*#__PURE__*/
  function () {
    function SpaAssyRegister(option) {
      var _this = this;

      (0, _classCallCheck2["default"])(this, SpaAssyRegister);
      this.namespace = null;
      this.routers = [];
      this.reducers = {};

      this.verifyReducerError = function () {
        if (!window.subProject || !window.subProject.updataStore) {
          console.error("主程序，没有启用!请检查主程序spaassyProvider组件的mainProject属性设置！");
          return true;
        }

        if (!_this.reducers || _this.reducers.length == 0) {
          console.info("".concat(_this.namespace, " \u6CA1\u6709reduce\u53EF\u6CE8\u518C\uFF01"));
          return true;
        }
      };

      this.verifyRouterError = function () {
        if (!_this.routers || _this.routers.length == 0) {
          console.info("".concat(_this.namespace, " \u6CA1\u6709router\u53EF\u6CE8\u518C\uFF01"));
          return true;
        }
      };

      this.createUpdataStore = function (func) {
        if (window.subProject.updataStore) {
          console.info("updataStore\u5DF2\u5B58\u5728\uFF01");
        }

        window.subProject.updataStore = func;
      };

      this.addRouters = function () {
        if (_this.verifyRouterError()) {
          return;
        }

        window.subProject.routers[_this.namespace] = (0, _toConsumableArray2["default"])(_this.routers);
        window.subProject.updataRouter();
      };

      this.addReducerAndNoRegister = function (namespace, reducers) {
        window.subProject.reducers[namespace] = _objectSpread({}, reducers);
      };

      this.registerReducerAndNoAdd = function (namespace, reducers) {
        if (!window.subProject.updataStore) {
          console.info("updataStore\u4E0D\u5B58\u5728\uFF01");
          return;
        }

        window.subProject.updataStore(namespace, _objectSpread({}, reducers));
      };

      this.registerReducer = function () {
        if (_this.verifyReducerError()) {
          return;
        }

        window.subProject.reducers[_this.namespace] = _objectSpread({}, _this.reducers);
        window.subProject.updataStore(_this.namespace, _objectSpread({}, _this.reducers));
      };

      this.getRouters = function (arg) {
        if (!arg) {
          return window.subProject.routers;
        }

        if (!window.subProject.routers[arg]) {
          console.info("\u6CA1\u6709\u547D\u540D\u7A7A\u95F4\u4E3A".concat(arg, "\u7684router"));
          return [];
        }

        return window.subProject.routers[arg];
      };

      this.getReducers = function (arg) {
        if (!arg) {
          return window.subProject.reducers;
        }

        if (!window.subProject.reducers[arg]) {
          console.info("\u6CA1\u6709\u547D\u540D\u7A7A\u95F4\u4E3A".concat(arg, "\u7684reducer"));
          return [];
        }

        return window.subProject.reducers[arg];
      };

      if (option) {
        this.namespace = option.namespace;
        this.routers = option.routers;
        this.reducers = option.reducers;
      }

      this.init();
    }

    (0, _createClass2["default"])(SpaAssyRegister, [{
      key: "init",
      value: function init() {
        window.subProject = window.subProject || {
          routers: {},
          reducers: {},
          updataStore: null
        };
      }
    }]);
    return SpaAssyRegister;
  }();

  var _default = SpaAssyRegister;
  _exports["default"] = _default;
  module.exports = exports.default;
});

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-redux":
/*!**************************************************************************************************************!*\
  !*** external {"commonjs":"react-redux","commonjs2":"react-redux","amd":"react-redux","root":"react-redux"} ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;

/***/ })

/******/ });
});
//# sourceMappingURL=spaassy-redux.js.map