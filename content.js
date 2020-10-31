/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./content/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/index.js!../node_modules/stylus-loader/index.js!./stylus/content.styl":
/*!**************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/stylus-loader!./stylus/content.styl ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-color-0 #content #author-name {\n  color: #536dfe !important;\n}\n.chat-color-1 #content #author-name {\n  color: #2196f3 !important;\n}\n.chat-color-2 #content #author-name {\n  color: #03a9f4 !important;\n}\n.chat-color-3 #content #author-name {\n  color: #00bcd4 !important;\n}\n.chat-color-4 #content #author-name {\n  color: #009688 !important;\n}\n.chat-color-5 #content #author-name {\n  color: #4caf50 !important;\n}\n.chat-color-6 #content #author-name {\n  color: #8bc34a !important;\n}\n.chat-color-7 #content #author-name {\n  color: #cddc39 !important;\n}\n.chat-color-8 #content #author-name {\n  color: #ffeb3b !important;\n}\n.chat-color-9 #content #author-name {\n  color: #ffc107 !important;\n}\n.chat-color-A #content #author-name {\n  color: #f44336 !important;\n}\n.chat-color-B #content #author-name {\n  color: #e91e63 !important;\n}\n.chat-color-C #content #author-name {\n  color: #9c27b0 !important;\n}\n.chat-color-D #content #author-name {\n  color: #673ab7 !important;\n}\n.chat-color-E #content #author-name {\n  color: #536dfe !important;\n}\n.chat-color-F #content #author-name {\n  color: #2196f3 !important;\n}\n.chat-color-G #content #author-name {\n  color: #03a9f4 !important;\n}\n.chat-color-H #content #author-name {\n  color: #00bcd4 !important;\n}\n.chat-color-I #content #author-name {\n  color: #009688 !important;\n}\n.chat-color-J #content #author-name {\n  color: #4caf50 !important;\n}\n.chat-color-K #content #author-name {\n  color: #8bc34a !important;\n}\n.chat-color-L #content #author-name {\n  color: #cddc39 !important;\n}\n.chat-color-M #content #author-name {\n  color: #ffeb3b !important;\n}\n.chat-color-N #content #author-name {\n  color: #ffc107 !important;\n}\n.chat-color-O #content #author-name {\n  color: #ff9800 !important;\n}\n.chat-color-P #content #author-name {\n  color: #ff5722 !important;\n}\n.chat-color-Q #content #author-name {\n  color: #f44336 !important;\n}\n.chat-color-R #content #author-name {\n  color: #e91e63 !important;\n}\n.chat-color-S #content #author-name {\n  color: #9c27b0 !important;\n}\n.chat-color-T #content #author-name {\n  color: #673ab7 !important;\n}\n.chat-color-U #content #author-name {\n  color: #536dfe !important;\n}\n.chat-color-V #content #author-name {\n  color: #2196f3 !important;\n}\n.chat-color-W #content #author-name {\n  color: #03a9f4 !important;\n}\n.chat-color-X #content #author-name {\n  color: #00bcd4 !important;\n}\n.chat-color-Y #content #author-name {\n  color: #009688 !important;\n}\n.chat-color-Z #content #author-name {\n  color: #4caf50 !important;\n}\n.chat-color-a #content #author-name {\n  color: #8bc34a !important;\n}\n.chat-color-b #content #author-name {\n  color: #cddc39 !important;\n}\n.chat-color-c #content #author-name {\n  color: #ffeb3b !important;\n}\n.chat-color-d #content #author-name {\n  color: #ffc107 !important;\n}\n.chat-color-e #content #author-name {\n  color: #ff9800 !important;\n}\n.chat-color-f #content #author-name {\n  color: #ff5722 !important;\n}\n.chat-color-g #content #author-name {\n  color: #f44336 !important;\n}\n.chat-color-h #content #author-name {\n  color: #e91e63 !important;\n}\n.chat-color-i #content #author-name {\n  color: #9c27b0 !important;\n}\n.chat-color-j #content #author-name {\n  color: #673ab7 !important;\n}\n.chat-color-k #content #author-name {\n  color: #536dfe !important;\n}\n.chat-color-l #content #author-name {\n  color: #2196f3 !important;\n}\n.chat-color-m #content #author-name {\n  color: #03a9f4 !important;\n}\n.chat-color-n #content #author-name {\n  color: #00bcd4 !important;\n}\n.chat-color-o #content #author-name {\n  color: #009688 !important;\n}\n.chat-color-p #content #author-name {\n  color: #4caf50 !important;\n}\n.chat-color-q #content #author-name {\n  color: #8bc34a !important;\n}\n.chat-color-r #content #author-name {\n  color: #cddc39 !important;\n}\n.chat-color-s #content #author-name {\n  color: #ffeb3b !important;\n}\n.chat-color-t #content #author-name {\n  color: #ffc107 !important;\n}\n.chat-color-u #content #author-name {\n  color: #ff9800 !important;\n}\n.chat-color-v #content #author-name {\n  color: #ff5722 !important;\n}\n.chat-color-w #content #author-name {\n  color: #f44336 !important;\n}\n.chat-color-x #content #author-name {\n  color: #e91e63 !important;\n}\n.chat-color-y #content #author-name {\n  color: #9c27b0 !important;\n}\n.chat-color-z #content #author-name {\n  color: #673ab7 !important;\n}\n.chat-color-- #content #author-name {\n  color: #ff9800 !important;\n}\n.chat-color-_ #content #author-name {\n  color: #ff5722 !important;\n}\n.AuthorFix #author-photo.yt-live-chat-text-message-renderer img.yt-img-shadow {\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 50%;\n  height: 1.5em;\n  width: 1.5em;\n  vertical-align: sub;\n}\n.AuthorFix #content {\n  display: inline-block;\n  vertical-align: middle;\n}\n.AuthorFix #timestamp.yt-live-chat-text-message-renderer {\n  font-size: 1em;\n  display: inline-block;\n  vertical-align: middle;\n}\n.showTimeStamp #timestamp.yt-live-chat-text-message-renderer {\n  display: inline-block;\n}\n.Emote img {\n  height: 1.75em;\n  align-self: center;\n  vertical-align: sub;\n  display: inline-block;\n  vertical-align: middle;\n}\n.Emote img:hover {\n  background-size: 100% 100%;\n  background-color: rgba(255,255,255,0.6);\n}\n.hideElement {\n  display: none !important;\n}\n.set-background-color-one {\n  background-color: #303030 !important;\n}\n.set-background-color-two {\n  background-color: transparent !important;\n}\n.setTwitchColors {\n  text-shadow: 0 0 1px #000, 0 0 2px #000 !important;\n  background: #18181b !important;\n  font-family: 'Roboto' !important;\n  font-size: 1.3rem !important;\n  line-height: 1.5em !important;\n  color: #fafafa !important;\n}\n.setTwitchColors #timestamp.yt-live-chat-text-message-renderer {\n  display: none;\n}\n.setTwitchColors yt-live-chat-author-chip[is-highlighted] #author-name.owner.yt-live-chat-author-chip,\n.setTwitchColors #author-name.owner.yt-live-chat-author-chip {\n  background-color: transparent;\n  color: #008000;\n}\n.setTwitchColors yt-live-chat-author-chip[is-highlighted] #author-name.yt-live-chat-author-chip {\n  background-color: transparent;\n}\n.emoteDivider {\n  width: 60vw;\n  border: 2px solid #d3d3d3;\n  border-radius: 5px;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.emotePopUpText {\n  margin-bottom: 2%;\n}\n.popup {\n  background-color: #202020;\n  position: absolute;\n  top: 15%;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  height: 70%;\n  width: 75%;\n  z-index: 999;\n  text-align: center;\n  border-radius: 5px;\n  border: #303030 1px solid;\n  font-size: 1em;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding: 1%;\n  padding-top: 2%;\n}\n.emoteButton {\n  background-color: rgba(255,255,255,0.1);\n  background-image: url(\"https://cdn.frankerfacez.com/emoticon/447885/4\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 80% 80%;\n  width: var(--yt-live-chat-32px-icon-button_-_width);\n  height: var(--yt-live-chat-32px-icon-button_-_height);\n  padding: var(--yt-live-chat-32px-icon-button_-_padding);\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n}\n.emoteButton:hover {\n  background-color: rgba(255,255,255,0.8);\n}\n.emoteButton:focus {\n  outline: 0;\n}\n.bodyFix {\n  height: 100%;\n  margin: 0;\n  overflow: hidden;\n}\n.theater_wrapper_fix {\n  height: 100vh;\n  width: 100vw;\n}\n.movie_player_fix {\n  max-height: none;\n}\n.movie_player_fix video {\n  width: calc(100vw - 25vw) !important;\n  height: 100vh !important;\n}\n.movie_player_fix .ytp-title {\n  color: rgba(255,255,255,0.8) !important;\n}\n.movie_player_fix .ytp-gradient-top {\n  max-width: calc(100vw - 25vw);\n}\n.movie_player_fix .ytp-chrome-bottom {\n  width: calc(100vw - 25vw) !important;\n  left: 0 !important;\n}\n.movie_player_fix .html5-endscreen {\n  width: calc(100vw - 25vw) !important;\n}\n.movie_player_fix .ytp-chapter-hover-container {\n  width: calc(100vw - 25vw) !important;\n}\n.chat_frame_fix {\n  height: 100vh;\n  width: calc(100vw - 75vw);\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/lib/css-base.js":
/*!**************************************************!*\
  !*** ../node_modules/css-loader/lib/css-base.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../node_modules/events/events.js":
/*!****************************************!*\
  !*** ../node_modules/events/events.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./content/ChatScroller.js":
/*!*********************************!*\
  !*** ./content/ChatScroller.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
* MIT License
*
* Copyright (c) 2020 wompmacho
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/


class ChatScroller {
  constructor() {
    this.scroll = this.scroll.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this); 
    
    this.scroller = null;
    this.interval = null;
  }

  init() {
    this.getScroller()
      .then(() => {
        this.scroller.addEventListener('mouseleave', this.start);
        this.scroller.addEventListener('mouseenter', this.stop);
        this.start();
      });
  }

  start() {
    this.interval = setInterval(
      this.scroll,
      250
    );
  }

  stop() {
    clearInterval(this.interval);
  }
  
  scroll() {
    this.scroller.scrollTop = 9999;
  }

  getScroller() {
    const checkForScroller = (res, rej) => {
      this.scroller = document.getElementById('item-scroller');
      if(this.scroller !== null) {
        res();
      } else {
        setTimeout(checkForScroller.bind(this, res, rej), 250);
      }
    };
    return new Promise(checkForScroller);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ChatScroller);

/***/ }),

/***/ "./content/ChatWatcher.js":
/*!********************************!*\
  !*** ./content/ChatWatcher.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emotes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emotes */ "./content/Emotes/index.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message */ "./content/Message.js");
/* harmony import */ var src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/helpers/PersistentSyncStorage */ "./helpers/PersistentSyncStorage.js");
/**
* MIT License
*
* Copyright (c) 2020 wompmacho
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/








class ChatWatcher {

  

  constructor() {
    this.watchChat = this.watchChat.bind(this);
    this._chatContainer = null;
    this._observer = null;
    this.messages = new Map();
  }

  init() {

    return new Promise((res, rej) => {
      this.getChatContainer().then(_Emotes__WEBPACK_IMPORTED_MODULE_0__["default"].init).then(() => {
        this.addEmotePopup();
        this.watchChat();
        this.parsePreloadedMessages();
      });
    });
  }

  
  getChatContainer() {
    // Parent of actual chat (children are messages)
    const checkForContainer = (res, rej) => {
      this._chatContainer = document.querySelector('#items.style-scope.yt-live-chat-item-list-renderer');
      if(this._chatContainer !== null) {
        res();
      } else {
        setTimeout(checkForContainer.bind(this, res, rej), 250);
      }
    };
    return new Promise(checkForContainer);
  }

  parsePreloadedMessages() {
    const messages = this._chatContainer.children;

    for(let i = messages.length-1; i >= 0; i--) {
      const node = messages[i];
      if(this.isMessageNode(node)) {
        const message = new _Message__WEBPACK_IMPORTED_MODULE_1__["default"](node);
      }
    }
  }

  watchChat() {
    console.log('Chat observer started');
    this._observer = new MutationObserver(mutations => {

      mutations.forEach(mutation => {

        

        const { addedNodes, removedNodes } = mutation;
        
        // Added nodes
        if(typeof addedNodes !== 'undefined' && addedNodes.length > 0) {
          for(let i = 0, length = addedNodes.length-1; i <= length; i++) {
            const node = addedNodes[i];
            if(this.isMessageNode(node)) {
              this.onNewMessage(node);
            }
          }
        }

        // Removed nodes
        if(typeof removedNodes !== 'undefined' && removedNodes.length > 0) {
          for(let i = 0, length = removedNodes.length-1; i <= length; i++) {
            const node = removedNodes[i];
            if(this.isMessageNode(node) && this.isObservedMessage(node)) {
              this.onObservedMessageRemoved(node);
            }
          }
        }
      });
    });

    this._observer.observe(this._chatContainer, {
      childList: true,
      attributes: false,
      characterData: false,
      subtree: false
    });
  }
  
  onNewMessage(node) {
    const message = new _Message__WEBPACK_IMPORTED_MODULE_1__["default"](node);

    // Don't store message if has 0 emotes
    if(message.hasEmotes) {
      this.messages.set(message.id, message);
    }
  }

  onObservedMessageRemoved(node) {
    const messageId = node.getAttribute('message-id');
    const message = this.messages.get(messageId);
    if(message != undefined){
      message.destroy();
    }

    this.messages.delete(messageId);
  }

  isMessageNode(node) {
    return node.tagName === 'YT-LIVE-CHAT-TEXT-MESSAGE-RENDERER';
  }

  isObservedMessage(node) {
    return node.getAttribute('message-id') !== null;
  }


  ///////////////////////////////////////////////////////////////////

  addEmotePopup(){

    //  create emote button
    const emoteButton = document.createElement('button');
    emoteButton.classList.add('emoteButton');
    emoteButton.textContent = '';

    //  append button to action-buttons list
    const chatButtonSelectionList = document.getElementById('action-buttons');
    chatButtonSelectionList.parentNode.insertBefore(emoteButton, chatButtonSelectionList);

    // create popupDiv
    const popUpDiv = document.createElement('div');
    popUpDiv.classList.add('popup');
    popUpDiv.classList.add('hideElement');



    //  creates array of keys from emote dictionary and adds to div
    // let keysITer = Array.from(Emotes.dictionary.keys());
    // for (let index = 0; index < keysITer.length; index++) {
    //   const element = keysITer[index];
    //   var emote_div = document.createElement('emote_div'); 
    //   emote_div.innerHTML = (Emotes.get(element).html);
    //   popUpDiv.appendChild(emote_div);
    // }

    



    function emoteAppend(keysITer){

      //  create divider
      var hr = document.createElement('hr');
      hr.classList.add('emoteDivider');
      
      for (let index = 0; index < keysITer.length; index++) {
        const element = keysITer[index];
        var emote_div = document.createElement('emote_div'); 
        emote_div.innerHTML = (_Emotes__WEBPACK_IMPORTED_MODULE_0__["default"].get(element).html);
        popUpDiv.appendChild(emote_div);
      }
      popUpDiv.appendChild(hr);
    }

    //  create text
    var bttv_text = document.createElement('h2');
    bttv_text.textContent = "BTTV";
    bttv_text.classList.add('emotePopUpText');
    var franker_text = document.createElement('h2');
    franker_text.textContent = "FrankerFacez";
    franker_text.classList.add('emotePopUpText');
    var twitch_text = document.createElement('h2');
    twitch_text.textContent = "Twitch";
    twitch_text.classList.add('emotePopUpText');
    
    

    //  need ittr to search each dict and append to dom
    let keysITer = null;

    keysITer = Array.from(_Emotes__WEBPACK_IMPORTED_MODULE_0__["default"].specialEmotesDictionary.keys());
    emoteAppend(keysITer);

    if(src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_2__["default"].data.options.enableBTTVEmotes){
      popUpDiv.appendChild(bttv_text);
      keysITer = Array.from(_Emotes__WEBPACK_IMPORTED_MODULE_0__["default"].bttv_Dictionary.keys());
      emoteAppend(keysITer);
    }

    if(src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_2__["default"].data.options.enableFrankerEmotes){
      popUpDiv.appendChild(franker_text);
      keysITer = Array.from(_Emotes__WEBPACK_IMPORTED_MODULE_0__["default"].franker_Dictionary.keys());
      emoteAppend(keysITer);
    }

    if(src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_2__["default"].data.options.enableTwitchEmotes){
      popUpDiv.appendChild(twitch_text);
      keysITer = Array.from(_Emotes__WEBPACK_IMPORTED_MODULE_0__["default"].twitch_Dictionary.keys());
      emoteAppend(keysITer);
    }

 

    //  add div to doc
    chatButtonSelectionList.appendChild(popUpDiv);

    // listen for popup button
    emoteButton.addEventListener('click', function(){
      popUpDiv.classList.toggle('hideElement');
      console.log('emote popup button clicked');
    });

    //  get input area
    var inputArea = document.querySelector('#input.yt-live-chat-text-input-field-renderer');
    var inputAreaLabel = document.querySelector('#label.yt-live-chat-text-input-field-renderer');

    //  add alt tag to chat
    function emoteToTextArea(){
      inputArea.textContent += this.alt + " ";
      inputArea.focus();
      inputAreaLabel.textContent = "";
      popUpDiv.classList.toggle('hideElement');
      console.log(this.alt + " emote button selected");
    }

    //  listener button for emotes
    var EMOTICONS = document.getElementsByTagName('img');
    for (let index = 0; index < EMOTICONS.length; index++) {
      const element = EMOTICONS[index];
      element.addEventListener('click', emoteToTextArea, false); 
    }

    console.log((keysITer.length+1) + " Emotes Added");
  }// end addEmotePopup

  ///////////////////////////////////////////////////////////////////

}// end chat watcher

/* harmony default export */ __webpack_exports__["default"] = (ChatWatcher);


/***/ }),

/***/ "./content/Emotes/Emote.js":
/*!*********************************!*\
  !*** ./content/Emotes/Emote.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
* MIT License
*
* Copyright (c) 2020 wompmacho
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/


class Emote {
  constructor({ code, url }) {
    this.code = code;
    this.url = url;
  }

  get html() {
    return (`
      <span class="Emote">
        <img src="${this.url}" alt="${this.code}">
      </span>
    `).trim();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Emote);

/***/ }),

/***/ "./content/Emotes/index.js":
/*!*********************************!*\
  !*** ./content/Emotes/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/helpers/PersistentSyncStorage */ "./helpers/PersistentSyncStorage.js");
/* harmony import */ var _Emote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emote */ "./content/Emotes/Emote.js");
/**
* MIT License
*
* Copyright (c) 2020 wompmacho
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/





class Emotes {
  constructor() {
    this.dictionary = new Map();

    //  identification for popup
    this.twitch_Dictionary = new Map();
    this.bttv_Dictionary = new Map();
    this.franker_Dictionary = new Map();
    this.specialEmotesDictionary = new Map();


    this.init = this.init.bind(this);
  }

  init() {
    return Promise.all([
      (src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_0__["default"].data.options.enableBTTVEmotes && this.loadBTTVEmote()),
      (src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_0__["default"].data.options.enableFrankerEmotes && this.loadFrankerEmotes()),
      (src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_0__["default"].data.options.enableTwitchEmotes && this.loadTwitchEmotes()),
      (this.specialEmotes())
    ]);
  }
  
  /////////////////////////////////////////////////////////////////////////////////

  get(key) {
    return this.dictionary.get(key);
  }

  set(key, value) {
    return this.dictionary.set(key, new _Emote__WEBPACK_IMPORTED_MODULE_1__["default"](value));
  }

  has(key) {
    return this.dictionary.has(key);
  }


  //////////////////////////////////////////////////////////////////

  bbtv_ToDict(json){
    for (let index = 0; index < json.length; index++) {
      
      const { emote, total } = json[index];

      const url = `https://cdn.betterttv.net/emote/${emote.id}/3x`;

      this.dictionary.set(emote.code, new _Emote__WEBPACK_IMPORTED_MODULE_1__["default"]({ code: emote.code, url }));
      this.bttv_Dictionary.set(emote.code, new _Emote__WEBPACK_IMPORTED_MODULE_1__["default"]({ code: emote.code, url }));
    }
  }

  bbtv_cached_ToDict(json){
    for (let index = 0; index < json.length; index++) {
      
      const { id, code } = json[index];

      const url = `https://cdn.betterttv.net/emote/${id}/3x`;

      this.dictionary.set(code, new _Emote__WEBPACK_IMPORTED_MODULE_1__["default"]({ code: code, url }));
      this.bttv_Dictionary.set(code, new _Emote__WEBPACK_IMPORTED_MODULE_1__["default"]({ code: code, url }));
    } 
  }

  // loadEmote is where we collect an object array of emotes from bttv api
  async loadBTTVEmote(){

    // top 100 emotes query = ?limit=100&offset=100
    const bttv_top_api_url = "https://api.betterttv.net/3/emotes/shared/top?limit=100";
    const bttv_top_api_response = await fetch(bttv_top_api_url);
    var top_Json = await bttv_top_api_response.json();

    // tredning emotes
    const bttv_trending_api_url = "https://api.betterttv.net/3/emotes/shared/trending?limit=100";
    const bttv_trending_api_response = await fetch(bttv_trending_api_url);
    var trending_Json = await bttv_trending_api_response.json();

    // global emotes are weird, stored in seperate cache and do not give all the normal attributes
    const bttv_global_api_url = "https://api.betterttv.net/3/cached/emotes/global";
    const bttv_global_api_response = await fetch(bttv_global_api_url);
    var global_Json = await bttv_global_api_response.json();

    this.bbtv_ToDict(top_Json);
    this.bbtv_ToDict(trending_Json);
    this.bbtv_cached_ToDict(global_Json);
  }

  ////////////////////////////////////////////////////////////////

  frankerToDict(json){
    for (let index = 0; index < json.emoticons.length; index++) {
      
      const { name, urls } = json.emoticons[index];

      var url = "";
      if(urls[4] != undefined){
        url = urls[4];
      }else if(urls[2] != undefined){
        url = urls[2];
      }else{
        url = urls[1];
      }

      this.dictionary.set(name, new _Emote__WEBPACK_IMPORTED_MODULE_1__["default"]({ code: name, url }));
      this.franker_Dictionary.set(name, new _Emote__WEBPACK_IMPORTED_MODULE_1__["default"]({ code: name, url }));
    }
  }

  // loadFrankerEmotes is where we collect an object array of emotes from franker api
  async loadFrankerEmotes(){

    const franker_top_api_url = "https://api.frankerfacez.com/v1/emoticons?sort=count-desc";
    
    const first50Response = await fetch(franker_top_api_url);
    var first50json = await first50Response.json();
    var next50Link = first50json._links.next;
    const second50Response = await fetch(next50Link);
    var second50json = await second50Response.json();

    // Top 100
    this.frankerToDict(first50json);
    this.frankerToDict(second50json);
  }
  
  ////////////////////////////////////////////////////////////////

  twitchToDict(json){
    for (let index = 0; index < json.emotes.length; index++) {
      
      const { code, id } = json.emotes[index];

      const url = `https://static-cdn.jtvnw.net/emoticons/v1/${id}/3.0`;

      this.dictionary.set(code, new _Emote__WEBPACK_IMPORTED_MODULE_1__["default"]({ code: code, url }));
      this.twitch_Dictionary.set(code, new _Emote__WEBPACK_IMPORTED_MODULE_1__["default"]({ code: code, url }));
    }
  }

  // loadTwitchEmotes is where we collect an object array of emotes from twitch api
  async loadTwitchEmotes(){

    //  https://api.twitchemotes.com/api/v4/channels/0 - twitch globals - 232 items
    //  https://static-cdn.jtvnw.net/emoticons/v1/25/1.0 - cdn

    // Global
    const twitch_global_api_url = "https://api.twitchemotes.com/api/v4/channels/0";
    const twitch_global_api_response = await fetch(twitch_global_api_url);
    var twitch_global_Json = await twitch_global_api_response.json();

    this.twitchToDict(twitch_global_Json);
  }

  // ♥
  specialEmotes(){

    var emoteObj = {
      "emotes": [
        {
          "code": "wompWTF", 
          "url": "https://static-cdn.jtvnw.net/emoticons/v1/301653066/3.0"
        },
        {
          "code": "wompISeeYou", 
          "url": "https://static-cdn.jtvnw.net/emoticons/v1/301506153/3.0"
        },
        {
          "code": "wompCry", 
          "url": "https://static-cdn.jtvnw.net/emoticons/v1/301506193/3.0"
        },
        {
          "code": "BabyCorona", 
          "url": "https://static-cdn.jtvnw.net/emoticons/v1/301629296/3.0"
        },
        {
          "code": "LEL", 
          "url": "https://static-cdn.jtvnw.net/emoticons/v1/431249/3.0"
        }
      ]
    };

    for (let index = 0; index < emoteObj.emotes.length; index++) {
      const element = emoteObj[index];
      const { code, url } = emoteObj.emotes[index];
      this.dictionary.set(code, new _Emote__WEBPACK_IMPORTED_MODULE_1__["default"]({ code: code, url}));
      this.specialEmotesDictionary.set(code, new _Emote__WEBPACK_IMPORTED_MODULE_1__["default"]({ code: code, url}));
    }    
  }
}// End Emotes

/* harmony default export */ __webpack_exports__["default"] = (new Emotes);

/***/ }),

/***/ "./content/Message.js":
/*!****************************!*\
  !*** ./content/Message.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emotes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emotes */ "./content/Emotes/index.js");
/* harmony import */ var src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/helpers/PersistentSyncStorage */ "./helpers/PersistentSyncStorage.js");
/**
* MIT License
*
* Copyright (c) 2020 wompmacho
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/





const idRegexp = /\/-([A-Za-z-_\d])/;
var colorNumberIndex = 0;

class Message {
  constructor(messageNode) {
    this.node = messageNode;
    this.id = this.node.id; // this.id should not be used to reference the node, dom id changes due to optimisitc updates
    this.hasEmotes = null;
    this.observer = null;
    this.parsedText = ''; // This should be fine since you can't edit/change messages
    
    this.parseText();

    

    //  Set Defaults
    this.setDefaultSelections();
    

    if(this.hasEmotes) {
      this.node.setAttribute('message-id', this.id);
      this.setHtml();
      this.watch();
    }
  }

  get textNode() {
    const node = this.node.querySelector('#message');
    return {
      node,
      text: node.innerText
    };
  }

  parseText() {
    const rawWords = this.textNode.text.split(' ');

    for(let i = 0, length = rawWords.length; i < length; i++) {
      const word = this.parseIllegalCharcters(rawWords[i]);
      const emote = _Emotes__WEBPACK_IMPORTED_MODULE_0__["default"].get(word);

      //console.log(Emotes.get(word));

      
      if(typeof emote === 'undefined') {
        this.parsedText += word + ' ';
      } else {
        this.hasEmotes = true;
        this.parsedText += emote.html + ' ';
      }
    }
  }

  watch() {
    this.observer = new MutationObserver(mutations => {
      let emoteRemoved = false;

      mutations.forEach(mutation => {
        if(typeof mutation.removedNodes === 'undefined') return;
        if(mutation.removedNodes.length <= 0) return; // This must be after undefined check

        for(let i = 0, length = mutation.removedNodes.length; i < length; i++) {
          const removedNode = mutation.removedNodes[i];
          if(typeof removedNode.className === 'string' && // check if className exists, is 'SVGAnimatedString' when window resized and removed 
              ~removedNode.className.indexOf('Emote') !== 0) {
            emoteRemoved = true;
          }
        }

      });

      if(emoteRemoved && document.body.contains(this.node)) {
        this.setHtml();
      }
    });

    this.observer.observe(this.node, {
      childList: true,
      attributes: false,
      characterData: false,
      subtree: true
    });
  }

  setHtml() {
    this.textNode.node.innerHTML = this.parsedText;
  }

  parseIllegalCharcters(word) {
    // ﻿ === 'ZERO WIDTH NO-BREAK SPACE'
    return word.replace('﻿', '').trim();
  }
  
  destroy() {
    if(this.observer !== null) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  ///////////////////////////////////////////////////////////////////

  // Setting Options for Each Message
  setDefaultSelections(){

    ///////////////////////////////////////////////////////////////////

    //  Checks for kappa and replaces emoji element with kappa
    if(src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_1__["default"].data.options.kappaFix) {

      var stupidKappa = document.querySelectorAll('#message.yt-live-chat-text-message-renderer .emoji.yt-live-chat-text-message-renderer');
      
      for (let index = 0; index < stupidKappa.length; index++) {
        const stupidElement = stupidKappa[index];
        var stupidToolTip = stupidElement.getAttribute('shared-tooltip-text');

        if(stupidToolTip == ':full_moon_face:'){

          const newSpan = document.createElement('span');
          newSpan.classList.add('Emote');
          newSpan.innerHTML = '<img src="https://static-cdn.jtvnw.net/emoticons/v1/25/3.0" alt="kappa">';

          stupidElement.parentNode.replaceChild(newSpan, stupidElement);
        }
      }   
    }
    ///////////////////////////////////////////////////////////////////

    //Set Author Colors
    if(src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_1__["default"].data.options.setAuthorColor && this.node.getAttribute('author-type') !== 'owner') {
      this.setAuthorColor();
    }

    ///////////////////////////////////////////////////////////////////

    // Author Icons
    var author_photo = this.node.querySelector('#author-photo');

    // Set Hide Author Icons
    if (src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_1__["default"].data.options.hideAuthorIcons) {
      author_photo.classList.add("hideElement");
    }

    // TimeStamp
    var timestamp = this.node.querySelector('#timestamp');

    // Set Show TimeStamp
    if (src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_1__["default"].data.options.showTimeStamp) {
      this.node.classList.add("showTimeStamp");
    }

    
    ///////////////////////////////////////////////////////////////////
    
    // Author Name @ auto paste in text area
    this.node.querySelector('#author-name').addEventListener("click", function(){
      var inputArea = document.querySelector('#input.yt-live-chat-text-input-field-renderer');
      var inputAreaLabel = document.querySelector('#label.yt-live-chat-text-input-field-renderer');
      inputArea.innerText = "@" + this.innerText;
      const textLength = inputArea.innerText.length;
      inputArea.focus();
      inputAreaLabel.innerText = "";
    });
  
  
    ///////////////////////////////////////////////////////////////////
  
    // Set Font Size
    var textSizeSlider = src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_1__["default"].data.options.textSizeSlider;  

    if (src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_1__["default"].data.options.allowTextSlider) {
      this.node.setAttribute('style', 'font-size:' + textSizeSlider + 'px' + '!important');
      this.node.classList.add("AuthorFix");
    }
  
    ///////////////////////////////////////////////////////////////////
  
    //  Set Twitch Styling
    if (src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_1__["default"].data.options.setTwitchColors) {
      this.node.classList.add("setTwitchColors");
      author_photo.classList.add("hideElement");
    }
      
    ///////////////////////////////////////////////////////////////////
  
    //  Set Alternate message Colors
    if (src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_1__["default"].data.options.alternateLineColor) {
      this.alternateLineColor();
    }   

  }// end setDefaultSelections

  setAuthorColor() {
    
    let imageSrc = this.node.querySelector('#img').src;

    // src for client user input is data instead of http/s
    if(imageSrc[0] !== 'h') { 
      imageSrc = document.querySelector('yt-live-chat-message-input-renderer #avatar #img').src;
    }
    
    const regexParse = idRegexp.exec(imageSrc);
    const colorId = regexParse.length > 1 ? regexParse[1] : null;
    
    if(colorId !== null) {
      this.node.classList.add(`chat-color-${colorId}`);
    } else {
      // log error, couldn't get colorID from `x` url
    }

  }

  ///////////////////////////////////////////////////////////////////
  
  //  changes color every line
  alternateLineColor(){

      if(colorNumberIndex % 2 == 0){
        this.node.classList.add("set-background-color-one");
      }else{
        this.node.classList.add("set-background-color-two");
      }
      colorNumberIndex++;
  }
  
  ///////////////////////////////////////////////////////////////////

  //  removes color attr
  removelternateLineColor(){
    this.node.classList.remove("set-background-color-one");
    this.node.classList.remove("set-background-color-two");
  }

}// end Message



/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./content/RouteWatcher.js":
/*!*********************************!*\
  !*** ./content/RouteWatcher.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "../node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/**
* MIT License
*
* Copyright (c) 2020 wompmacho
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/




class RouteWatcher extends events__WEBPACK_IMPORTED_MODULE_0___default.a {
  constructor() {
    super();

    this.target = document.querySelector('head > title');
    this.observer = null;

    this.init();
  }

  init() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach((m) => {
        /**
         * Title is set to 'YouTube Gaming' on main routes
         * and between routes.
         */
        if(m.target.innerText === 'YouTube Gaming') {
          this.emit('main');
        } else {
          this.emit('change');
        }
      });
    });

    if(this.target !== null) { // Popout chat does not have title tag
      this.observer.observe(this.target, {
        childList: true,
        attributes: false,
        characterData: true,
        subtree: true
      });
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (RouteWatcher);


/***/ }),

/***/ "./content/index.js":
/*!**************************!*\
  !*** ./content/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_stylus_content_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/stylus/content.styl */ "./stylus/content.styl");
/* harmony import */ var src_stylus_content_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_stylus_content_styl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChatScroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatScroller */ "./content/ChatScroller.js");
/* harmony import */ var _ChatWatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatWatcher */ "./content/ChatWatcher.js");
/* harmony import */ var _RouteWatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RouteWatcher */ "./content/RouteWatcher.js");
/* harmony import */ var src_helpers_Identification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/helpers/Identification */ "./helpers/Identification.js");
/* harmony import */ var src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/helpers/PersistentSyncStorage */ "./helpers/PersistentSyncStorage.js");
/**
* MIT License
*
* Copyright (c) 2020 wompmacho
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/











let MAIN = null;
var inTheaterMode = false;
var bodyBeforeChanges = null;

// ---

class Main {
  constructor() {
    this.chatWatcher = null;
    this.chatScroller = null;
    this.routeWatcher = null;
    this.onRouteChange = this.onRouteChange.bind(this);
    this.load();

    
      //  button class - ytp-size-button ytp-button
      //  right player controls - ytp-right-controls
      //  player div id - ytd-player
      //  chatframe id - chatframe
      //  movieframe id - movie_player_fix
      //  dono ticker id - ticker

      //  player-theater-container
  }

  load() {
    this.routeWatcher = new _RouteWatcher__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.routeWatcher.on("change", this.onRouteChange);
    this.onRouteChange();
  }

  onRouteChange() {
    if(Object(src_helpers_Identification__WEBPACK_IMPORTED_MODULE_4__["isLivestream"])() && ((Object(src_helpers_Identification__WEBPACK_IMPORTED_MODULE_4__["isYoutubeGaming"])()) || (Object(src_helpers_Identification__WEBPACK_IMPORTED_MODULE_4__["isYoutubeVanilla"])()) || (Object(src_helpers_Identification__WEBPACK_IMPORTED_MODULE_4__["isYoutubeEmbed"])()) || Object(src_helpers_Identification__WEBPACK_IMPORTED_MODULE_4__["isPopOut"])())) {
      this.init();
    }

    if(Object(src_helpers_Identification__WEBPACK_IMPORTED_MODULE_4__["isLivestream"])()) {
      if (src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_5__["default"].data.options.theaterModeFix) {
        if(document.getElementById('movie_player') != null){

          var theaterButton = document.getElementsByClassName('ytp-size-button')[0];

          var handler = function(event) {
            removeEventListener('click', handler, false);
            theaterMode();
          };

          theaterButton.addEventListener('click', handler);
        }
      }
    }
  }//  end onRouteChange

  init() {

    this.chatWatcher = new _ChatWatcher__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.chatWatcher.init();
    this.chatScroller = new _ChatScroller__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.chatScroller.init();

    setDefaults();
    console.log("INIT");

  }// end init


}// end main

  function setDefaults() {

    ///////////////////////////////////////////////////////////////////

    //Live Chat Default Option
    if (src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_5__["default"].data.options.setLiveChat) {
      document.getElementsByClassName("yt-simple-endpoint style-scope yt-dropdown-menu").item(1).click();
    } else {
      // do nothing, let user pick option if not set as default in options menu
    }

    ///////////////////////////////////////////////////////////////////

    // Welcome Banner
    var welcomBanner = document.querySelector("yt-live-chat-viewer-engagement-message-renderer");
  
    // Set Hide Welcome Banner
    if (src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_5__["default"].data.options.hideWelcomBanner) {
      welcomBanner.classList.add("hideElement");
    } else {
      welcomBanner.classList.remove("hideElement");
    }

    ///////////////////////////////////////////////////////////////////

  }

// --- Every Frame Loaded
src_helpers_PersistentSyncStorage__WEBPACK_IMPORTED_MODULE_5__["default"].on("ready", () => {
  MAIN = new Main();
});



function theaterMode() {

  console.log('theaterButton clicked');
  inTheaterMode = !inTheaterMode;

  const movie_player = document.getElementById('movie_player');
  const chat_frame = document.getElementById('chatframe');
  var theater_wrapper = document.createElement('div');
  

  if(inTheaterMode){
    
    theater_wrapper.classList = ('theater_wrapper_fix');
    movie_player.classList = ('movie_player_fix');
    chat_frame.classList = ('chat_frame_fix');
  
    for (let index = 0; index < document.body.childNodes.length; index++) {
      document.body.childNodes[index].remove();
    }

    document.removeChild(movie_player);
    document.removeChild(chat_frame);
  
    document.body.classList.add('bodyFix');
  
    theater_wrapper.appendChild(movie_player);
    theater_wrapper.appendChild(chat_frame);
    document.body.appendChild(theater_wrapper);
  }

  if(!inTheaterMode){

    // for (let index = 0; index < document.body.childNodes.length; index++) {
    //   document.body.childNodes[index].classList.remove('hidden');
    // }

    theater_wrapper.classList.remove('theater_wrapper_fix');
    movie_player.classList.remove('movie_player_fix');
    chat_frame.classList.remove('chat_frame_fix');
  }


}// end enterTheaterMode




/***/ }),

/***/ "./helpers/Identification.js":
/*!***********************************!*\
  !*** ./helpers/Identification.js ***!
  \***********************************/
/*! exports provided: isLivestream, isYoutubeGaming, isYoutubeVanilla, isYoutubeEmbed, isPopOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLivestream", function() { return isLivestream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isYoutubeGaming", function() { return isYoutubeGaming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isYoutubeVanilla", function() { return isYoutubeVanilla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isYoutubeEmbed", function() { return isYoutubeEmbed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPopOut", function() { return isPopOut; });
/**
* MIT License
*
* Copyright (c) 2020 wompmacho
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/


const isLivestream = () => {
    const timeDisplay = document.querySelector('.ytp-time-display');
    const chatApp = document.querySelector('yt-live-chat-app');
    const chatHeader = document.querySelector('.yt-live-chat-renderer-0');
    const timeDisplayCheck = timeDisplay && timeDisplay.classList.contains('ytp-live');
    const chatCheck = (document.body.contains(chatApp) || document.body.contains(chatHeader));

    return (timeDisplayCheck || chatCheck);
};

// isYoutubeGaming checks for the presence of ytg-app, the top level element for YT Gaming
const isYoutubeGaming = () => {
    return !!document.querySelector('ytg-app');
};

// isYoutubeEmbed checks that this is an iframe, and it is being used on youtube.com
const isYoutubeVanilla = () => {
    // window.frameElement is only available from youtube.com sites from within iframe per CORS
    return !!window.frameElement;
};

// isYoutubeEmbed checks that this is an iframe, and it is **not** loaded from youtube.com (main site uses embed too)
const isYoutubeEmbed = () => {

    // If the frameElement is available, then CORS means that we must be on youtube.com.
    if (window.frameElement) {
        return false;
    }

    // If the window location isn't the parent location, then we are in an iframe.
    return (window.location != window.parent.location);
};

// isPopOut fix for popout page
const isPopOut = () => {
    
    // If the frameElement is available, then CORS means that we must be on youtube.com.
    if (window.frameElement) {
        return false;
    }

    // Checks href for page 
    if(window.location.href.includes('is_popout=1')){
        return !!window.location.href.includes('popout=1');
    }

    return false;
};

/***/ }),

/***/ "./helpers/PersistentSyncStorage.js":
/*!******************************************!*\
  !*** ./helpers/PersistentSyncStorage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_chrome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/chrome */ "./utils/chrome/index.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "../node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
/**
* MIT License
*
* Copyright (c) 2020 wompmacho
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/





class PersistentSyncStorage extends events__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"] {
  constructor() {
    super();

    this._data = null;
    this.state = 'initiating';

    this._init();
  }

  async _init() {
    const fetchedData = await _utils_chrome__WEBPACK_IMPORTED_MODULE_0__["SyncStorage"].get();
    this._initListener();
    this._data = fetchedData;
    this.state = 'ready';
    this.emit(this.state);
  }

  _initListener() {
    _utils_chrome__WEBPACK_IMPORTED_MODULE_0__["SyncStorage"].listen((changes) => {

      Object.keys(changes).forEach((changeKey) => {
        if(changes[changeKey].hasOwnProperty('newValue')) {
          this._data[changeKey] = changes[changeKey].newValue;
        } else {
          console.error('No newValue in sync storge change');
        }
      });
      
      this.emit('change', this.data, changes);
    });
  }

  set(items) {
    return _utils_chrome__WEBPACK_IMPORTED_MODULE_0__["SyncStorage"].set(items);
  }
  
  get data() {
    return this._data;
  }


  has(item) {
    return this.data.hasOwnProperty(item);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (new PersistentSyncStorage());

/***/ }),

/***/ "./stylus/content.styl":
/*!*****************************!*\
  !*** ./stylus/content.styl ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/stylus-loader!./content.styl */ "../node_modules/css-loader/index.js!../node_modules/stylus-loader/index.js!./stylus/content.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./utils/chrome/LocalStorage.js":
/*!**************************************!*\
  !*** ./utils/chrome/LocalStorage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./utils/chrome/Storage.js");
/**
* MIT License
*
* Copyright (c) 2020 wompmacho
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/




class LocalStorage extends _Storage__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this.store = 'local';
  }
}

/* harmony default export */ __webpack_exports__["default"] = (LocalStorage);


/***/ }),

/***/ "./utils/chrome/Notifications.js":
/*!***************************************!*\
  !*** ./utils/chrome/Notifications.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
* MIT License
*
* Copyright (c) 2020 wompmacho
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/


class Notifications {

  create(notificationId = null, options) {
    // notificationId is optional
    if(typeof notificationId === 'object') {
      options = notificationId;
      notificationId = null;
    }

    return new Promise((res, rej) => {
      // resolve args = notificationId:string 
      chrome.notifications.create(notificationId, options, res);
    });
  }

  update(notificationId, options) {
    return new Promise((res, rej) => {
      // resolve args = wasUpdated:boolean
      chrome.notifications.update(notificationId, options, res);
    });
  }

  clear(notificationId) {
    return new Promise((res, rej) => {
      // resolve args = wasCleared:boolean
      chrome.notifications.clear(notificationId, res);
    });
  }

  getAll() {
    return new Promise((res, rej) => {
      // resolve args = notifications:object
      chrome.notifications.getAll(res);
    });
  }

  getPermissionLevel() {
    return new Promise((res, rej) => {
      // resolve args = level:PermissionLevel (https://developer.chrome.com/apps/notifications#type-PermissionLevel)
      chrome.notifications.getPermissionLevel(res);
    });
  }

  listen(event, notificationId = null, callback) {
    // event = 'onClosed' | 'onClicked' | 'onButtonClicked' | 'onPermissionLevelChanged' | 'onShowSettings'
    // notificationId is optional
    if(typeof notificationId === 'function') {
      callback = notificationId;
      notificationId = null;
    }

    if(event === 'onPermissionLevelChanged' || event === 'onShowSettings') {
      return this._nonNotificationIdListen(event, callback);
    }

    /**
     * https://developer.chrome.com/apps/notifications#events
     * 
     * Resolve args (by event):
     * onClosed = notificationId:string, byUser:boolean
     * onClicked = notificationId:string
     * onButtonClicked = notificationId:string, buttonIndex:integer
     * 
     * onPermissionLevelChanged = level:PermissionLevel (https://developer.chrome.com/apps/notifications#type-PermissionLevel)
     * onShowSettings = (none)
     */

    // This callback relates only to those events that have notificationId arg
    const ListenerCallback = (() => {
      if(notificationId !== null) {
        return (passedNotificationId, ...args) => {
          if(notificationId === passedNotificationId) {
            callback(passedNotificationId, ...args);
          }
        };
      } else {
        return callback;
      }
    })();


    chrome.notifications[event].addListener(ListenerCallback);
  }

  _nonNotificationIdListen(event, callback) {
    chrome.notifications[event].addListener(callback);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Notifications);


/***/ }),

/***/ "./utils/chrome/Storage.js":
/*!*********************************!*\
  !*** ./utils/chrome/Storage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
* MIT License
*
* Copyright (c) 2020 wompmacho
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/


class Storage {

  get(keys = null) {
    return new Promise((res, rej) => {
      const returnSingle = typeof keys === 'string' || typeof keys === 'number';
      // resolve args = items:object
      chrome.storage[this.store].get(keys, (items) => {
        if(returnSingle) {
          res(items[keys]);
        } else {
          res(items);
        }
      });
    });
  }

  getBytesInUse(keys = null) {
    return new Promise((res, rej) => {
      // resolve args = bytesInUse:integer
      chrome.storage[this.store].getBytesInUse(keys, res);
    });
  }

  set(items) {
    return new Promise((res, rej) => {
      // resolve args = (none)
      chrome.storage[this.store].set(items, res);
    });
  }

  remove(keys) {
    // resolve args = (none)
    return new Promise((res, rej) => {
      chrome.storage[this.store].remove(keys, res);
    });
  }

  clear() {
    // resolve args = (none)
    return new Promise((res, rej) => {
      chrome.storage[this.store].clear(res);
    });
  }

  listen(item, onChange) {
    if(typeof item === 'function') {
      onChange = item;
      item = null;
    }

    chrome.storage.onChanged.addListener((changes, areaName) => {
      if(areaName === this.store) {
        if(item !== null) {
          if(changes.hasOwnProperty(item)) {
            const oldValue = changes[item].oldValue || null;
            const newValue = changes[item].newValue || null;
            onChange(oldValue, newValue);
          }
        } else {
          onChange(changes);
        }
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Storage);


/***/ }),

/***/ "./utils/chrome/SyncStorage.js":
/*!*************************************!*\
  !*** ./utils/chrome/SyncStorage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./utils/chrome/Storage.js");
/**
* MIT License
*
* Copyright (c) 2020 wompmacho
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/




class SyncStorage extends _Storage__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this.store = 'sync';
  }
}

/* harmony default export */ __webpack_exports__["default"] = (SyncStorage);


/***/ }),

/***/ "./utils/chrome/index.js":
/*!*******************************!*\
  !*** ./utils/chrome/index.js ***!
  \*******************************/
/*! exports provided: LocalStorage, SyncStorage, Notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncStorage", function() { return SyncStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notifications", function() { return Notifications; });
/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalStorage */ "./utils/chrome/LocalStorage.js");
/* harmony import */ var _SyncStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SyncStorage */ "./utils/chrome/SyncStorage.js");
/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notifications */ "./utils/chrome/Notifications.js");
/**
* MIT License
*
* Copyright (c) 2020 wompmacho
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/





// export default {
//   LocalStorage: new _LocalStorage,
//   SyncStorage: new _SyncStorage,
//   Notifications: new _Notifications
// }

const LocalStorage = new _LocalStorage__WEBPACK_IMPORTED_MODULE_0__["default"];
const SyncStorage = new _SyncStorage__WEBPACK_IMPORTED_MODULE_1__["default"];
const Notifications = new _Notifications__WEBPACK_IMPORTED_MODULE_2__["default"];

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZW50LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3N0eWx1cy9jb250ZW50LnN0eWwiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L0NoYXRTY3JvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L0NoYXRXYXRjaGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvRW1vdGVzL0Vtb3RlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvRW1vdGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L1JvdXRlV2F0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvSWRlbnRpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9QZXJzaXN0ZW50U3luY1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bHVzL2NvbnRlbnQuc3R5bD8zYTBjIiwid2VicGFjazovLy8uL3V0aWxzL2Nocm9tZS9Mb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY2hyb21lL05vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY2hyb21lL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY2hyb21lL1N5bmNTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Nocm9tZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jaGF0LWNvbG9yLTAgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNTM2ZGZlICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTEgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTIgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDNhOWY0ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTMgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTQgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTUgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNGNhZjUwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTYgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjOGJjMzRhICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTcgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjY2RkYzM5ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTggI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTkgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUEgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUIgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUMgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUQgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNjczYWI3ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUUgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNTM2ZGZlICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUYgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUcgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDNhOWY0ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUggI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUkgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUogI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNGNhZjUwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUsgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjOGJjMzRhICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUwgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjY2RkYzM5ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLU0gI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLU4gI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLU8gI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmY5ODAwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVAgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVEgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVIgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVMgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVQgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNjczYWI3ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVUgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNTM2ZGZlICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVYgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVcgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDNhOWY0ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVggI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVkgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVogI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNGNhZjUwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWEgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjOGJjMzRhICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWIgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjY2RkYzM5ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWMgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWQgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWUgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmY5ODAwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWYgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWcgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWggI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWkgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWogI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNjczYWI3ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWsgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNTM2ZGZlICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWwgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLW0gI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDNhOWY0ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLW4gI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLW8gI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXAgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNGNhZjUwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXEgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjOGJjMzRhICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXIgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjY2RkYzM5ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXMgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXQgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXUgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmY5ODAwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXYgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXcgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXggI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXkgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXogI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNjczYWI3ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLS0gI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmY5ODAwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLV8gI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XFxufVxcbi5BdXRob3JGaXggI2F1dGhvci1waG90by55dC1saXZlLWNoYXQtdGV4dC1tZXNzYWdlLXJlbmRlcmVyIGltZy55dC1pbWctc2hhZG93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgd2lkdGg6IDEuNWVtO1xcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcXG59XFxuLkF1dGhvckZpeCAjY29udGVudCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uQXV0aG9yRml4ICN0aW1lc3RhbXAueXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlciB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5zaG93VGltZVN0YW1wICN0aW1lc3RhbXAueXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5FbW90ZSBpbWcge1xcbiAgaGVpZ2h0OiAxLjc1ZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLkVtb3RlIGltZzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcXG59XFxuLmhpZGVFbGVtZW50IHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLnNldC1iYWNrZ3JvdW5kLWNvbG9yLW9uZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwICFpbXBvcnRhbnQ7XFxufVxcbi5zZXQtYmFja2dyb3VuZC1jb2xvci10d28ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG59XFxuLnNldFR3aXRjaENvbG9ycyB7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDFweCAjMDAwLCAwIDAgMnB4ICMwMDAgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6ICMxODE4MWIgIWltcG9ydGFudDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbSAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcXG59XFxuLnNldFR3aXRjaENvbG9ycyAjdGltZXN0YW1wLnl0LWxpdmUtY2hhdC10ZXh0LW1lc3NhZ2UtcmVuZGVyZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNldFR3aXRjaENvbG9ycyB5dC1saXZlLWNoYXQtYXV0aG9yLWNoaXBbaXMtaGlnaGxpZ2h0ZWRdICNhdXRob3ItbmFtZS5vd25lci55dC1saXZlLWNoYXQtYXV0aG9yLWNoaXAsXFxuLnNldFR3aXRjaENvbG9ycyAjYXV0aG9yLW5hbWUub3duZXIueXQtbGl2ZS1jaGF0LWF1dGhvci1jaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICMwMDgwMDA7XFxufVxcbi5zZXRUd2l0Y2hDb2xvcnMgeXQtbGl2ZS1jaGF0LWF1dGhvci1jaGlwW2lzLWhpZ2hsaWdodGVkXSAjYXV0aG9yLW5hbWUueXQtbGl2ZS1jaGF0LWF1dGhvci1jaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uZW1vdGVEaXZpZGVyIHtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2QzZDNkMztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi10b3A6IDIlO1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLmVtb3RlUG9wVXBUZXh0IHtcXG4gIG1hcmdpbi1ib3R0b206IDIlO1xcbn1cXG4ucG9wdXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTUlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiA3NSU7XFxuICB6LWluZGV4OiA5OTk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6ICMzMDMwMzAgMXB4IHNvbGlkO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcGFkZGluZzogMSU7XFxuICBwYWRkaW5nLXRvcDogMiU7XFxufVxcbi5lbW90ZUJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vY2RuLmZyYW5rZXJmYWNlei5jb20vZW1vdGljb24vNDQ3ODg1LzRcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDgwJSA4MCU7XFxuICB3aWR0aDogdmFyKC0teXQtbGl2ZS1jaGF0LTMycHgtaWNvbi1idXR0b25fLV93aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLXl0LWxpdmUtY2hhdC0zMnB4LWljb24tYnV0dG9uXy1faGVpZ2h0KTtcXG4gIHBhZGRpbmc6IHZhcigtLXl0LWxpdmUtY2hhdC0zMnB4LWljb24tYnV0dG9uXy1fcGFkZGluZyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZW1vdGVCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xcbn1cXG4uZW1vdGVCdXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmJvZHlGaXgge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnRoZWF0ZXJfd3JhcHBlcl9maXgge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuLm1vdmllX3BsYXllcl9maXgge1xcbiAgbWF4LWhlaWdodDogbm9uZTtcXG59XFxuLm1vdmllX3BsYXllcl9maXggdmlkZW8ge1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAyNXZ3KSAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xcbn1cXG4ubW92aWVfcGxheWVyX2ZpeCAueXRwLXRpdGxlIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCkgIWltcG9ydGFudDtcXG59XFxuLm1vdmllX3BsYXllcl9maXggLnl0cC1ncmFkaWVudC10b3Age1xcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMjV2dyk7XFxufVxcbi5tb3ZpZV9wbGF5ZXJfZml4IC55dHAtY2hyb21lLWJvdHRvbSB7XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDI1dncpICFpbXBvcnRhbnQ7XFxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5tb3ZpZV9wbGF5ZXJfZml4IC5odG1sNS1lbmRzY3JlZW4ge1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAyNXZ3KSAhaW1wb3J0YW50O1xcbn1cXG4ubW92aWVfcGxheWVyX2ZpeCAueXRwLWNoYXB0ZXItaG92ZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjV2dykgIWltcG9ydGFudDtcXG59XFxuLmNoYXRfZnJhbWVfZml4IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDc1dncpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDBweDtcXG4gIHRvcDogMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMub25jZSA9IG9uY2U7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBvbmNlKGVtaXR0ZXIsIG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmdW5jdGlvbiBldmVudExpc3RlbmVyKCkge1xuICAgICAgaWYgKGVycm9yTGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG4gICAgdmFyIGVycm9yTGlzdGVuZXI7XG5cbiAgICAvLyBBZGRpbmcgYW4gZXJyb3IgbGlzdGVuZXIgaXMgbm90IG9wdGlvbmFsIGJlY2F1c2VcbiAgICAvLyBpZiBhbiBlcnJvciBpcyB0aHJvd24gb24gYW4gZXZlbnQgZW1pdHRlciB3ZSBjYW5ub3RcbiAgICAvLyBndWFyYW50ZWUgdGhhdCB0aGUgYWN0dWFsIGV2ZW50IHdlIGFyZSB3YWl0aW5nIHdpbGxcbiAgICAvLyBiZSBmaXJlZC4gVGhlIHJlc3VsdCBjb3VsZCBiZSBhIHNpbGVudCB3YXkgdG8gY3JlYXRlXG4gICAgLy8gbWVtb3J5IG9yIGZpbGUgZGVzY3JpcHRvciBsZWFrcywgd2hpY2ggaXMgc29tZXRoaW5nXG4gICAgLy8gd2Ugc2hvdWxkIGF2b2lkLlxuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBlcnJvckxpc3RlbmVyID0gZnVuY3Rpb24gZXJyb3JMaXN0ZW5lcihlcnIpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihuYW1lLCBldmVudExpc3RlbmVyKTtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9O1xuXG4gICAgICBlbWl0dGVyLm9uY2UoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgZW1pdHRlci5vbmNlKG5hbWUsIGV2ZW50TGlzdGVuZXIpO1xuICB9KTtcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIvKipcbiogTUlUIExpY2Vuc2VcbipcbiogQ29weXJpZ2h0IChjKSAyMDIwIHdvbXBtYWNob1xuKiBcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4qIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiogXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuKiBcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4qIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiogU09GVFdBUkUuXG4qL1xuXG5cbmNsYXNzIENoYXRTY3JvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2Nyb2xsID0gdGhpcy5zY3JvbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RvcCA9IHRoaXMuc3RvcC5iaW5kKHRoaXMpOyBcbiAgICBcbiAgICB0aGlzLnNjcm9sbGVyID0gbnVsbDtcbiAgICB0aGlzLmludGVydmFsID0gbnVsbDtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5nZXRTY3JvbGxlcigpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2Nyb2xsZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuc3RhcnQpO1xuICAgICAgICB0aGlzLnNjcm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLnN0b3ApO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgIHRoaXMuc2Nyb2xsLFxuICAgICAgMjUwXG4gICAgKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgfVxuICBcbiAgc2Nyb2xsKCkge1xuICAgIHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG9wID0gOTk5OTtcbiAgfVxuXG4gIGdldFNjcm9sbGVyKCkge1xuICAgIGNvbnN0IGNoZWNrRm9yU2Nyb2xsZXIgPSAocmVzLCByZWopID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbS1zY3JvbGxlcicpO1xuICAgICAgaWYodGhpcy5zY3JvbGxlciAhPT0gbnVsbCkge1xuICAgICAgICByZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoY2hlY2tGb3JTY3JvbGxlci5iaW5kKHRoaXMsIHJlcywgcmVqKSwgMjUwKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShjaGVja0ZvclNjcm9sbGVyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0U2Nyb2xsZXI7IiwiLyoqXG4qIE1JVCBMaWNlbnNlXG4qXG4qIENvcHlyaWdodCAoYykgMjAyMCB3b21wbWFjaG9cbiogXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4qIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4qIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4qIFxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiogXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4qIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4qIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4qIFNPRlRXQVJFLlxuKi9cblxuXG5pbXBvcnQgRW1vdGVzIGZyb20gJy4vRW1vdGVzJztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vTWVzc2FnZSc7XG5pbXBvcnQgUGVyc2lzdGVudFN5bmNTdG9yYWdlIGZyb20gJ3NyYy9oZWxwZXJzL1BlcnNpc3RlbnRTeW5jU3RvcmFnZSc7XG5cblxuXG5jbGFzcyBDaGF0V2F0Y2hlciB7XG5cbiAgXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy53YXRjaENoYXQgPSB0aGlzLndhdGNoQ2hhdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2NoYXRDb250YWluZXIgPSBudWxsO1xuICAgIHRoaXMuX29ic2VydmVyID0gbnVsbDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIHRoaXMuZ2V0Q2hhdENvbnRhaW5lcigpLnRoZW4oRW1vdGVzLmluaXQpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmFkZEVtb3RlUG9wdXAoKTtcbiAgICAgICAgdGhpcy53YXRjaENoYXQoKTtcbiAgICAgICAgdGhpcy5wYXJzZVByZWxvYWRlZE1lc3NhZ2VzKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIFxuICBnZXRDaGF0Q29udGFpbmVyKCkge1xuICAgIC8vIFBhcmVudCBvZiBhY3R1YWwgY2hhdCAoY2hpbGRyZW4gYXJlIG1lc3NhZ2VzKVxuICAgIGNvbnN0IGNoZWNrRm9yQ29udGFpbmVyID0gKHJlcywgcmVqKSA9PiB7XG4gICAgICB0aGlzLl9jaGF0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW1zLnN0eWxlLXNjb3BlLnl0LWxpdmUtY2hhdC1pdGVtLWxpc3QtcmVuZGVyZXInKTtcbiAgICAgIGlmKHRoaXMuX2NoYXRDb250YWluZXIgIT09IG51bGwpIHtcbiAgICAgICAgcmVzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KGNoZWNrRm9yQ29udGFpbmVyLmJpbmQodGhpcywgcmVzLCByZWopLCAyNTApO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGNoZWNrRm9yQ29udGFpbmVyKTtcbiAgfVxuXG4gIHBhcnNlUHJlbG9hZGVkTWVzc2FnZXMoKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLl9jaGF0Q29udGFpbmVyLmNoaWxkcmVuO1xuXG4gICAgZm9yKGxldCBpID0gbWVzc2FnZXMubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBub2RlID0gbWVzc2FnZXNbaV07XG4gICAgICBpZih0aGlzLmlzTWVzc2FnZU5vZGUobm9kZSkpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdhdGNoQ2hhdCgpIHtcbiAgICBjb25zb2xlLmxvZygnQ2hhdCBvYnNlcnZlciBzdGFydGVkJyk7XG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuXG4gICAgICBtdXRhdGlvbnMuZm9yRWFjaChtdXRhdGlvbiA9PiB7XG5cbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgeyBhZGRlZE5vZGVzLCByZW1vdmVkTm9kZXMgfSA9IG11dGF0aW9uO1xuICAgICAgICBcbiAgICAgICAgLy8gQWRkZWQgbm9kZXNcbiAgICAgICAgaWYodHlwZW9mIGFkZGVkTm9kZXMgIT09ICd1bmRlZmluZWQnICYmIGFkZGVkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvcihsZXQgaSA9IDAsIGxlbmd0aCA9IGFkZGVkTm9kZXMubGVuZ3RoLTE7IGkgPD0gbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBhZGRlZE5vZGVzW2ldO1xuICAgICAgICAgICAgaWYodGhpcy5pc01lc3NhZ2VOb2RlKG5vZGUpKSB7XG4gICAgICAgICAgICAgIHRoaXMub25OZXdNZXNzYWdlKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZWQgbm9kZXNcbiAgICAgICAgaWYodHlwZW9mIHJlbW92ZWROb2RlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IobGV0IGkgPSAwLCBsZW5ndGggPSByZW1vdmVkTm9kZXMubGVuZ3RoLTE7IGkgPD0gbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSByZW1vdmVkTm9kZXNbaV07XG4gICAgICAgICAgICBpZih0aGlzLmlzTWVzc2FnZU5vZGUobm9kZSkgJiYgdGhpcy5pc09ic2VydmVkTWVzc2FnZShub2RlKSkge1xuICAgICAgICAgICAgICB0aGlzLm9uT2JzZXJ2ZWRNZXNzYWdlUmVtb3ZlZChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9jaGF0Q29udGFpbmVyLCB7XG4gICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICBhdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgIGNoYXJhY3RlckRhdGE6IGZhbHNlLFxuICAgICAgc3VidHJlZTogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBcbiAgb25OZXdNZXNzYWdlKG5vZGUpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gbmV3IE1lc3NhZ2Uobm9kZSk7XG5cbiAgICAvLyBEb24ndCBzdG9yZSBtZXNzYWdlIGlmIGhhcyAwIGVtb3Rlc1xuICAgIGlmKG1lc3NhZ2UuaGFzRW1vdGVzKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VzLnNldChtZXNzYWdlLmlkLCBtZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBvbk9ic2VydmVkTWVzc2FnZVJlbW92ZWQobm9kZSkge1xuICAgIGNvbnN0IG1lc3NhZ2VJZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdtZXNzYWdlLWlkJyk7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMubWVzc2FnZXMuZ2V0KG1lc3NhZ2VJZCk7XG4gICAgaWYobWVzc2FnZSAhPSB1bmRlZmluZWQpe1xuICAgICAgbWVzc2FnZS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5tZXNzYWdlcy5kZWxldGUobWVzc2FnZUlkKTtcbiAgfVxuXG4gIGlzTWVzc2FnZU5vZGUobm9kZSkge1xuICAgIHJldHVybiBub2RlLnRhZ05hbWUgPT09ICdZVC1MSVZFLUNIQVQtVEVYVC1NRVNTQUdFLVJFTkRFUkVSJztcbiAgfVxuXG4gIGlzT2JzZXJ2ZWRNZXNzYWdlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5nZXRBdHRyaWJ1dGUoJ21lc3NhZ2UtaWQnKSAhPT0gbnVsbDtcbiAgfVxuXG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIGFkZEVtb3RlUG9wdXAoKXtcblxuICAgIC8vICBjcmVhdGUgZW1vdGUgYnV0dG9uXG4gICAgY29uc3QgZW1vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlbW90ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlbW90ZUJ1dHRvbicpO1xuICAgIGVtb3RlQnV0dG9uLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAvLyAgYXBwZW5kIGJ1dHRvbiB0byBhY3Rpb24tYnV0dG9ucyBsaXN0XG4gICAgY29uc3QgY2hhdEJ1dHRvblNlbGVjdGlvbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aW9uLWJ1dHRvbnMnKTtcbiAgICBjaGF0QnV0dG9uU2VsZWN0aW9uTGlzdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbW90ZUJ1dHRvbiwgY2hhdEJ1dHRvblNlbGVjdGlvbkxpc3QpO1xuXG4gICAgLy8gY3JlYXRlIHBvcHVwRGl2XG4gICAgY29uc3QgcG9wVXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3BVcERpdi5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xuICAgIHBvcFVwRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGVFbGVtZW50Jyk7XG5cblxuXG4gICAgLy8gIGNyZWF0ZXMgYXJyYXkgb2Yga2V5cyBmcm9tIGVtb3RlIGRpY3Rpb25hcnkgYW5kIGFkZHMgdG8gZGl2XG4gICAgLy8gbGV0IGtleXNJVGVyID0gQXJyYXkuZnJvbShFbW90ZXMuZGljdGlvbmFyeS5rZXlzKCkpO1xuICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBrZXlzSVRlci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAvLyAgIGNvbnN0IGVsZW1lbnQgPSBrZXlzSVRlcltpbmRleF07XG4gICAgLy8gICB2YXIgZW1vdGVfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZW1vdGVfZGl2Jyk7IFxuICAgIC8vICAgZW1vdGVfZGl2LmlubmVySFRNTCA9IChFbW90ZXMuZ2V0KGVsZW1lbnQpLmh0bWwpO1xuICAgIC8vICAgcG9wVXBEaXYuYXBwZW5kQ2hpbGQoZW1vdGVfZGl2KTtcbiAgICAvLyB9XG5cbiAgICBcblxuXG5cbiAgICBmdW5jdGlvbiBlbW90ZUFwcGVuZChrZXlzSVRlcil7XG5cbiAgICAgIC8vICBjcmVhdGUgZGl2aWRlclxuICAgICAgdmFyIGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICAgIGhyLmNsYXNzTGlzdC5hZGQoJ2Vtb3RlRGl2aWRlcicpO1xuICAgICAgXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwga2V5c0lUZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBrZXlzSVRlcltpbmRleF07XG4gICAgICAgIHZhciBlbW90ZV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdlbW90ZV9kaXYnKTsgXG4gICAgICAgIGVtb3RlX2Rpdi5pbm5lckhUTUwgPSAoRW1vdGVzLmdldChlbGVtZW50KS5odG1sKTtcbiAgICAgICAgcG9wVXBEaXYuYXBwZW5kQ2hpbGQoZW1vdGVfZGl2KTtcbiAgICAgIH1cbiAgICAgIHBvcFVwRGl2LmFwcGVuZENoaWxkKGhyKTtcbiAgICB9XG5cbiAgICAvLyAgY3JlYXRlIHRleHRcbiAgICB2YXIgYnR0dl90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBidHR2X3RleHQudGV4dENvbnRlbnQgPSBcIkJUVFZcIjtcbiAgICBidHR2X3RleHQuY2xhc3NMaXN0LmFkZCgnZW1vdGVQb3BVcFRleHQnKTtcbiAgICB2YXIgZnJhbmtlcl90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBmcmFua2VyX3RleHQudGV4dENvbnRlbnQgPSBcIkZyYW5rZXJGYWNlelwiO1xuICAgIGZyYW5rZXJfdGV4dC5jbGFzc0xpc3QuYWRkKCdlbW90ZVBvcFVwVGV4dCcpO1xuICAgIHZhciB0d2l0Y2hfdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdHdpdGNoX3RleHQudGV4dENvbnRlbnQgPSBcIlR3aXRjaFwiO1xuICAgIHR3aXRjaF90ZXh0LmNsYXNzTGlzdC5hZGQoJ2Vtb3RlUG9wVXBUZXh0Jyk7XG4gICAgXG4gICAgXG5cbiAgICAvLyAgbmVlZCBpdHRyIHRvIHNlYXJjaCBlYWNoIGRpY3QgYW5kIGFwcGVuZCB0byBkb21cbiAgICBsZXQga2V5c0lUZXIgPSBudWxsO1xuXG4gICAga2V5c0lUZXIgPSBBcnJheS5mcm9tKEVtb3Rlcy5zcGVjaWFsRW1vdGVzRGljdGlvbmFyeS5rZXlzKCkpO1xuICAgIGVtb3RlQXBwZW5kKGtleXNJVGVyKTtcblxuICAgIGlmKFBlcnNpc3RlbnRTeW5jU3RvcmFnZS5kYXRhLm9wdGlvbnMuZW5hYmxlQlRUVkVtb3Rlcyl7XG4gICAgICBwb3BVcERpdi5hcHBlbmRDaGlsZChidHR2X3RleHQpO1xuICAgICAga2V5c0lUZXIgPSBBcnJheS5mcm9tKEVtb3Rlcy5idHR2X0RpY3Rpb25hcnkua2V5cygpKTtcbiAgICAgIGVtb3RlQXBwZW5kKGtleXNJVGVyKTtcbiAgICB9XG5cbiAgICBpZihQZXJzaXN0ZW50U3luY1N0b3JhZ2UuZGF0YS5vcHRpb25zLmVuYWJsZUZyYW5rZXJFbW90ZXMpe1xuICAgICAgcG9wVXBEaXYuYXBwZW5kQ2hpbGQoZnJhbmtlcl90ZXh0KTtcbiAgICAgIGtleXNJVGVyID0gQXJyYXkuZnJvbShFbW90ZXMuZnJhbmtlcl9EaWN0aW9uYXJ5LmtleXMoKSk7XG4gICAgICBlbW90ZUFwcGVuZChrZXlzSVRlcik7XG4gICAgfVxuXG4gICAgaWYoUGVyc2lzdGVudFN5bmNTdG9yYWdlLmRhdGEub3B0aW9ucy5lbmFibGVUd2l0Y2hFbW90ZXMpe1xuICAgICAgcG9wVXBEaXYuYXBwZW5kQ2hpbGQodHdpdGNoX3RleHQpO1xuICAgICAga2V5c0lUZXIgPSBBcnJheS5mcm9tKEVtb3Rlcy50d2l0Y2hfRGljdGlvbmFyeS5rZXlzKCkpO1xuICAgICAgZW1vdGVBcHBlbmQoa2V5c0lUZXIpO1xuICAgIH1cblxuIFxuXG4gICAgLy8gIGFkZCBkaXYgdG8gZG9jXG4gICAgY2hhdEJ1dHRvblNlbGVjdGlvbkxpc3QuYXBwZW5kQ2hpbGQocG9wVXBEaXYpO1xuXG4gICAgLy8gbGlzdGVuIGZvciBwb3B1cCBidXR0b25cbiAgICBlbW90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICBwb3BVcERpdi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlRWxlbWVudCcpO1xuICAgICAgY29uc29sZS5sb2coJ2Vtb3RlIHBvcHVwIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgfSk7XG5cbiAgICAvLyAgZ2V0IGlucHV0IGFyZWFcbiAgICB2YXIgaW5wdXRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0Lnl0LWxpdmUtY2hhdC10ZXh0LWlucHV0LWZpZWxkLXJlbmRlcmVyJyk7XG4gICAgdmFyIGlucHV0QXJlYUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsLnl0LWxpdmUtY2hhdC10ZXh0LWlucHV0LWZpZWxkLXJlbmRlcmVyJyk7XG5cbiAgICAvLyAgYWRkIGFsdCB0YWcgdG8gY2hhdFxuICAgIGZ1bmN0aW9uIGVtb3RlVG9UZXh0QXJlYSgpe1xuICAgICAgaW5wdXRBcmVhLnRleHRDb250ZW50ICs9IHRoaXMuYWx0ICsgXCIgXCI7XG4gICAgICBpbnB1dEFyZWEuZm9jdXMoKTtcbiAgICAgIGlucHV0QXJlYUxhYmVsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIHBvcFVwRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGVFbGVtZW50Jyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmFsdCArIFwiIGVtb3RlIGJ1dHRvbiBzZWxlY3RlZFwiKTtcbiAgICB9XG5cbiAgICAvLyAgbGlzdGVuZXIgYnV0dG9uIGZvciBlbW90ZXNcbiAgICB2YXIgRU1PVElDT05TID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBFTU9USUNPTlMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gRU1PVElDT05TW2luZGV4XTtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlbW90ZVRvVGV4dEFyZWEsIGZhbHNlKTsgXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coKGtleXNJVGVyLmxlbmd0aCsxKSArIFwiIEVtb3RlcyBBZGRlZFwiKTtcbiAgfS8vIGVuZCBhZGRFbW90ZVBvcHVwXG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG59Ly8gZW5kIGNoYXQgd2F0Y2hlclxuXG5leHBvcnQgZGVmYXVsdCBDaGF0V2F0Y2hlcjtcbiIsIi8qKlxuKiBNSVQgTGljZW5zZVxuKlxuKiBDb3B5cmlnaHQgKGMpIDIwMjAgd29tcG1hY2hvXG4qIFxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4qIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4qIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuKiBcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4qIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4qIFxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuKiBTT0ZUV0FSRS5cbiovXG5cblxuY2xhc3MgRW1vdGUge1xuICBjb25zdHJ1Y3Rvcih7IGNvZGUsIHVybCB9KSB7XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIGdldCBodG1sKCkge1xuICAgIHJldHVybiAoYFxuICAgICAgPHNwYW4gY2xhc3M9XCJFbW90ZVwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7dGhpcy51cmx9XCIgYWx0PVwiJHt0aGlzLmNvZGV9XCI+XG4gICAgICA8L3NwYW4+XG4gICAgYCkudHJpbSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtb3RlOyIsIi8qKlxuKiBNSVQgTGljZW5zZVxuKlxuKiBDb3B5cmlnaHQgKGMpIDIwMjAgd29tcG1hY2hvXG4qIFxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4qIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4qIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuKiBcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4qIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4qIFxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuKiBTT0ZUV0FSRS5cbiovXG5cbmltcG9ydCBQZXJzaXN0ZW50U3luY1N0b3JhZ2UgZnJvbSAnc3JjL2hlbHBlcnMvUGVyc2lzdGVudFN5bmNTdG9yYWdlJztcbmltcG9ydCBFbW90ZSBmcm9tICcuL0Vtb3RlJztcblxuXG5jbGFzcyBFbW90ZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRpY3Rpb25hcnkgPSBuZXcgTWFwKCk7XG5cbiAgICAvLyAgaWRlbnRpZmljYXRpb24gZm9yIHBvcHVwXG4gICAgdGhpcy50d2l0Y2hfRGljdGlvbmFyeSA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmJ0dHZfRGljdGlvbmFyeSA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmZyYW5rZXJfRGljdGlvbmFyeSA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnNwZWNpYWxFbW90ZXNEaWN0aW9uYXJ5ID0gbmV3IE1hcCgpO1xuXG5cbiAgICB0aGlzLmluaXQgPSB0aGlzLmluaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgIChQZXJzaXN0ZW50U3luY1N0b3JhZ2UuZGF0YS5vcHRpb25zLmVuYWJsZUJUVFZFbW90ZXMgJiYgdGhpcy5sb2FkQlRUVkVtb3RlKCkpLFxuICAgICAgKFBlcnNpc3RlbnRTeW5jU3RvcmFnZS5kYXRhLm9wdGlvbnMuZW5hYmxlRnJhbmtlckVtb3RlcyAmJiB0aGlzLmxvYWRGcmFua2VyRW1vdGVzKCkpLFxuICAgICAgKFBlcnNpc3RlbnRTeW5jU3RvcmFnZS5kYXRhLm9wdGlvbnMuZW5hYmxlVHdpdGNoRW1vdGVzICYmIHRoaXMubG9hZFR3aXRjaEVtb3RlcygpKSxcbiAgICAgICh0aGlzLnNwZWNpYWxFbW90ZXMoKSlcbiAgICBdKTtcbiAgfVxuICBcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgZ2V0KGtleSkge1xuICAgIHJldHVybiB0aGlzLmRpY3Rpb25hcnkuZ2V0KGtleSk7XG4gIH1cblxuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmRpY3Rpb25hcnkuc2V0KGtleSwgbmV3IEVtb3RlKHZhbHVlKSk7XG4gIH1cblxuICBoYXMoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZGljdGlvbmFyeS5oYXMoa2V5KTtcbiAgfVxuXG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgYmJ0dl9Ub0RpY3QoanNvbil7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGpzb24ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBcbiAgICAgIGNvbnN0IHsgZW1vdGUsIHRvdGFsIH0gPSBqc29uW2luZGV4XTtcblxuICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vY2RuLmJldHRlcnR0di5uZXQvZW1vdGUvJHtlbW90ZS5pZH0vM3hgO1xuXG4gICAgICB0aGlzLmRpY3Rpb25hcnkuc2V0KGVtb3RlLmNvZGUsIG5ldyBFbW90ZSh7IGNvZGU6IGVtb3RlLmNvZGUsIHVybCB9KSk7XG4gICAgICB0aGlzLmJ0dHZfRGljdGlvbmFyeS5zZXQoZW1vdGUuY29kZSwgbmV3IEVtb3RlKHsgY29kZTogZW1vdGUuY29kZSwgdXJsIH0pKTtcbiAgICB9XG4gIH1cblxuICBiYnR2X2NhY2hlZF9Ub0RpY3QoanNvbil7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGpzb24ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBcbiAgICAgIGNvbnN0IHsgaWQsIGNvZGUgfSA9IGpzb25baW5kZXhdO1xuXG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9jZG4uYmV0dGVydHR2Lm5ldC9lbW90ZS8ke2lkfS8zeGA7XG5cbiAgICAgIHRoaXMuZGljdGlvbmFyeS5zZXQoY29kZSwgbmV3IEVtb3RlKHsgY29kZTogY29kZSwgdXJsIH0pKTtcbiAgICAgIHRoaXMuYnR0dl9EaWN0aW9uYXJ5LnNldChjb2RlLCBuZXcgRW1vdGUoeyBjb2RlOiBjb2RlLCB1cmwgfSkpO1xuICAgIH0gXG4gIH1cblxuICAvLyBsb2FkRW1vdGUgaXMgd2hlcmUgd2UgY29sbGVjdCBhbiBvYmplY3QgYXJyYXkgb2YgZW1vdGVzIGZyb20gYnR0diBhcGlcbiAgYXN5bmMgbG9hZEJUVFZFbW90ZSgpe1xuXG4gICAgLy8gdG9wIDEwMCBlbW90ZXMgcXVlcnkgPSA/bGltaXQ9MTAwJm9mZnNldD0xMDBcbiAgICBjb25zdCBidHR2X3RvcF9hcGlfdXJsID0gXCJodHRwczovL2FwaS5iZXR0ZXJ0dHYubmV0LzMvZW1vdGVzL3NoYXJlZC90b3A/bGltaXQ9MTAwXCI7XG4gICAgY29uc3QgYnR0dl90b3BfYXBpX3Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYnR0dl90b3BfYXBpX3VybCk7XG4gICAgdmFyIHRvcF9Kc29uID0gYXdhaXQgYnR0dl90b3BfYXBpX3Jlc3BvbnNlLmpzb24oKTtcblxuICAgIC8vIHRyZWRuaW5nIGVtb3Rlc1xuICAgIGNvbnN0IGJ0dHZfdHJlbmRpbmdfYXBpX3VybCA9IFwiaHR0cHM6Ly9hcGkuYmV0dGVydHR2Lm5ldC8zL2Vtb3Rlcy9zaGFyZWQvdHJlbmRpbmc/bGltaXQ9MTAwXCI7XG4gICAgY29uc3QgYnR0dl90cmVuZGluZ19hcGlfcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChidHR2X3RyZW5kaW5nX2FwaV91cmwpO1xuICAgIHZhciB0cmVuZGluZ19Kc29uID0gYXdhaXQgYnR0dl90cmVuZGluZ19hcGlfcmVzcG9uc2UuanNvbigpO1xuXG4gICAgLy8gZ2xvYmFsIGVtb3RlcyBhcmUgd2VpcmQsIHN0b3JlZCBpbiBzZXBlcmF0ZSBjYWNoZSBhbmQgZG8gbm90IGdpdmUgYWxsIHRoZSBub3JtYWwgYXR0cmlidXRlc1xuICAgIGNvbnN0IGJ0dHZfZ2xvYmFsX2FwaV91cmwgPSBcImh0dHBzOi8vYXBpLmJldHRlcnR0di5uZXQvMy9jYWNoZWQvZW1vdGVzL2dsb2JhbFwiO1xuICAgIGNvbnN0IGJ0dHZfZ2xvYmFsX2FwaV9yZXNwb25zZSA9IGF3YWl0IGZldGNoKGJ0dHZfZ2xvYmFsX2FwaV91cmwpO1xuICAgIHZhciBnbG9iYWxfSnNvbiA9IGF3YWl0IGJ0dHZfZ2xvYmFsX2FwaV9yZXNwb25zZS5qc29uKCk7XG5cbiAgICB0aGlzLmJidHZfVG9EaWN0KHRvcF9Kc29uKTtcbiAgICB0aGlzLmJidHZfVG9EaWN0KHRyZW5kaW5nX0pzb24pO1xuICAgIHRoaXMuYmJ0dl9jYWNoZWRfVG9EaWN0KGdsb2JhbF9Kc29uKTtcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBmcmFua2VyVG9EaWN0KGpzb24pe1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBqc29uLmVtb3RpY29ucy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIFxuICAgICAgY29uc3QgeyBuYW1lLCB1cmxzIH0gPSBqc29uLmVtb3RpY29uc1tpbmRleF07XG5cbiAgICAgIHZhciB1cmwgPSBcIlwiO1xuICAgICAgaWYodXJsc1s0XSAhPSB1bmRlZmluZWQpe1xuICAgICAgICB1cmwgPSB1cmxzWzRdO1xuICAgICAgfWVsc2UgaWYodXJsc1syXSAhPSB1bmRlZmluZWQpe1xuICAgICAgICB1cmwgPSB1cmxzWzJdO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHVybCA9IHVybHNbMV07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGljdGlvbmFyeS5zZXQobmFtZSwgbmV3IEVtb3RlKHsgY29kZTogbmFtZSwgdXJsIH0pKTtcbiAgICAgIHRoaXMuZnJhbmtlcl9EaWN0aW9uYXJ5LnNldChuYW1lLCBuZXcgRW1vdGUoeyBjb2RlOiBuYW1lLCB1cmwgfSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxvYWRGcmFua2VyRW1vdGVzIGlzIHdoZXJlIHdlIGNvbGxlY3QgYW4gb2JqZWN0IGFycmF5IG9mIGVtb3RlcyBmcm9tIGZyYW5rZXIgYXBpXG4gIGFzeW5jIGxvYWRGcmFua2VyRW1vdGVzKCl7XG5cbiAgICBjb25zdCBmcmFua2VyX3RvcF9hcGlfdXJsID0gXCJodHRwczovL2FwaS5mcmFua2VyZmFjZXouY29tL3YxL2Vtb3RpY29ucz9zb3J0PWNvdW50LWRlc2NcIjtcbiAgICBcbiAgICBjb25zdCBmaXJzdDUwUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmcmFua2VyX3RvcF9hcGlfdXJsKTtcbiAgICB2YXIgZmlyc3Q1MGpzb24gPSBhd2FpdCBmaXJzdDUwUmVzcG9uc2UuanNvbigpO1xuICAgIHZhciBuZXh0NTBMaW5rID0gZmlyc3Q1MGpzb24uX2xpbmtzLm5leHQ7XG4gICAgY29uc3Qgc2Vjb25kNTBSZXNwb25zZSA9IGF3YWl0IGZldGNoKG5leHQ1MExpbmspO1xuICAgIHZhciBzZWNvbmQ1MGpzb24gPSBhd2FpdCBzZWNvbmQ1MFJlc3BvbnNlLmpzb24oKTtcblxuICAgIC8vIFRvcCAxMDBcbiAgICB0aGlzLmZyYW5rZXJUb0RpY3QoZmlyc3Q1MGpzb24pO1xuICAgIHRoaXMuZnJhbmtlclRvRGljdChzZWNvbmQ1MGpzb24pO1xuICB9XG4gIFxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgdHdpdGNoVG9EaWN0KGpzb24pe1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBqc29uLmVtb3Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIFxuICAgICAgY29uc3QgeyBjb2RlLCBpZCB9ID0ganNvbi5lbW90ZXNbaW5kZXhdO1xuXG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9zdGF0aWMtY2RuLmp0dm53Lm5ldC9lbW90aWNvbnMvdjEvJHtpZH0vMy4wYDtcblxuICAgICAgdGhpcy5kaWN0aW9uYXJ5LnNldChjb2RlLCBuZXcgRW1vdGUoeyBjb2RlOiBjb2RlLCB1cmwgfSkpO1xuICAgICAgdGhpcy50d2l0Y2hfRGljdGlvbmFyeS5zZXQoY29kZSwgbmV3IEVtb3RlKHsgY29kZTogY29kZSwgdXJsIH0pKTtcbiAgICB9XG4gIH1cblxuICAvLyBsb2FkVHdpdGNoRW1vdGVzIGlzIHdoZXJlIHdlIGNvbGxlY3QgYW4gb2JqZWN0IGFycmF5IG9mIGVtb3RlcyBmcm9tIHR3aXRjaCBhcGlcbiAgYXN5bmMgbG9hZFR3aXRjaEVtb3Rlcygpe1xuXG4gICAgLy8gIGh0dHBzOi8vYXBpLnR3aXRjaGVtb3Rlcy5jb20vYXBpL3Y0L2NoYW5uZWxzLzAgLSB0d2l0Y2ggZ2xvYmFscyAtIDIzMiBpdGVtc1xuICAgIC8vICBodHRwczovL3N0YXRpYy1jZG4uanR2bncubmV0L2Vtb3RpY29ucy92MS8yNS8xLjAgLSBjZG5cblxuICAgIC8vIEdsb2JhbFxuICAgIGNvbnN0IHR3aXRjaF9nbG9iYWxfYXBpX3VybCA9IFwiaHR0cHM6Ly9hcGkudHdpdGNoZW1vdGVzLmNvbS9hcGkvdjQvY2hhbm5lbHMvMFwiO1xuICAgIGNvbnN0IHR3aXRjaF9nbG9iYWxfYXBpX3Jlc3BvbnNlID0gYXdhaXQgZmV0Y2godHdpdGNoX2dsb2JhbF9hcGlfdXJsKTtcbiAgICB2YXIgdHdpdGNoX2dsb2JhbF9Kc29uID0gYXdhaXQgdHdpdGNoX2dsb2JhbF9hcGlfcmVzcG9uc2UuanNvbigpO1xuXG4gICAgdGhpcy50d2l0Y2hUb0RpY3QodHdpdGNoX2dsb2JhbF9Kc29uKTtcbiAgfVxuXG4gIC8vIOKZpVxuICBzcGVjaWFsRW1vdGVzKCl7XG5cbiAgICB2YXIgZW1vdGVPYmogPSB7XG4gICAgICBcImVtb3Rlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvZGVcIjogXCJ3b21wV1RGXCIsIFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zdGF0aWMtY2RuLmp0dm53Lm5ldC9lbW90aWNvbnMvdjEvMzAxNjUzMDY2LzMuMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvZGVcIjogXCJ3b21wSVNlZVlvdVwiLCBcbiAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vc3RhdGljLWNkbi5qdHZudy5uZXQvZW1vdGljb25zL3YxLzMwMTUwNjE1My8zLjBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJjb2RlXCI6IFwid29tcENyeVwiLCBcbiAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vc3RhdGljLWNkbi5qdHZudy5uZXQvZW1vdGljb25zL3YxLzMwMTUwNjE5My8zLjBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJjb2RlXCI6IFwiQmFieUNvcm9uYVwiLCBcbiAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vc3RhdGljLWNkbi5qdHZudy5uZXQvZW1vdGljb25zL3YxLzMwMTYyOTI5Ni8zLjBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJjb2RlXCI6IFwiTEVMXCIsIFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zdGF0aWMtY2RuLmp0dm53Lm5ldC9lbW90aWNvbnMvdjEvNDMxMjQ5LzMuMFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVtb3RlT2JqLmVtb3Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbW90ZU9ialtpbmRleF07XG4gICAgICBjb25zdCB7IGNvZGUsIHVybCB9ID0gZW1vdGVPYmouZW1vdGVzW2luZGV4XTtcbiAgICAgIHRoaXMuZGljdGlvbmFyeS5zZXQoY29kZSwgbmV3IEVtb3RlKHsgY29kZTogY29kZSwgdXJsfSkpO1xuICAgICAgdGhpcy5zcGVjaWFsRW1vdGVzRGljdGlvbmFyeS5zZXQoY29kZSwgbmV3IEVtb3RlKHsgY29kZTogY29kZSwgdXJsfSkpO1xuICAgIH0gICAgXG4gIH1cbn0vLyBFbmQgRW1vdGVzXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBFbW90ZXM7IiwiLyoqXG4qIE1JVCBMaWNlbnNlXG4qXG4qIENvcHlyaWdodCAoYykgMjAyMCB3b21wbWFjaG9cbiogXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4qIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4qIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4qIFxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiogXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4qIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4qIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4qIFNPRlRXQVJFLlxuKi9cblxuXG5pbXBvcnQgRW1vdGVzIGZyb20gJy4vRW1vdGVzJztcbmltcG9ydCBQZXJzaXN0ZW50U3luY1N0b3JhZ2UgZnJvbSAnc3JjL2hlbHBlcnMvUGVyc2lzdGVudFN5bmNTdG9yYWdlJztcblxuY29uc3QgaWRSZWdleHAgPSAvXFwvLShbQS1aYS16LV9cXGRdKS87XG52YXIgY29sb3JOdW1iZXJJbmRleCA9IDA7XG5cbmNsYXNzIE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlTm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG1lc3NhZ2VOb2RlO1xuICAgIHRoaXMuaWQgPSB0aGlzLm5vZGUuaWQ7IC8vIHRoaXMuaWQgc2hvdWxkIG5vdCBiZSB1c2VkIHRvIHJlZmVyZW5jZSB0aGUgbm9kZSwgZG9tIGlkIGNoYW5nZXMgZHVlIHRvIG9wdGltaXNpdGMgdXBkYXRlc1xuICAgIHRoaXMuaGFzRW1vdGVzID0gbnVsbDtcbiAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcbiAgICB0aGlzLnBhcnNlZFRleHQgPSAnJzsgLy8gVGhpcyBzaG91bGQgYmUgZmluZSBzaW5jZSB5b3UgY2FuJ3QgZWRpdC9jaGFuZ2UgbWVzc2FnZXNcbiAgICBcbiAgICB0aGlzLnBhcnNlVGV4dCgpO1xuXG4gICAgXG5cbiAgICAvLyAgU2V0IERlZmF1bHRzXG4gICAgdGhpcy5zZXREZWZhdWx0U2VsZWN0aW9ucygpO1xuICAgIFxuXG4gICAgaWYodGhpcy5oYXNFbW90ZXMpIHtcbiAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ21lc3NhZ2UtaWQnLCB0aGlzLmlkKTtcbiAgICAgIHRoaXMuc2V0SHRtbCgpO1xuICAgICAgdGhpcy53YXRjaCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0ZXh0Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGUsXG4gICAgICB0ZXh0OiBub2RlLmlubmVyVGV4dFxuICAgIH07XG4gIH1cblxuICBwYXJzZVRleHQoKSB7XG4gICAgY29uc3QgcmF3V29yZHMgPSB0aGlzLnRleHROb2RlLnRleHQuc3BsaXQoJyAnKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGxlbmd0aCA9IHJhd1dvcmRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB3b3JkID0gdGhpcy5wYXJzZUlsbGVnYWxDaGFyY3RlcnMocmF3V29yZHNbaV0pO1xuICAgICAgY29uc3QgZW1vdGUgPSBFbW90ZXMuZ2V0KHdvcmQpO1xuXG4gICAgICAvL2NvbnNvbGUubG9nKEVtb3Rlcy5nZXQod29yZCkpO1xuXG4gICAgICBcbiAgICAgIGlmKHR5cGVvZiBlbW90ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5wYXJzZWRUZXh0ICs9IHdvcmQgKyAnICc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhc0Vtb3RlcyA9IHRydWU7XG4gICAgICAgIHRoaXMucGFyc2VkVGV4dCArPSBlbW90ZS5odG1sICsgJyAnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdhdGNoKCkge1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuICAgICAgbGV0IGVtb3RlUmVtb3ZlZCA9IGZhbHNlO1xuXG4gICAgICBtdXRhdGlvbnMuZm9yRWFjaChtdXRhdGlvbiA9PiB7XG4gICAgICAgIGlmKHR5cGVvZiBtdXRhdGlvbi5yZW1vdmVkTm9kZXMgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgICAgIGlmKG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGggPD0gMCkgcmV0dXJuOyAvLyBUaGlzIG11c3QgYmUgYWZ0ZXIgdW5kZWZpbmVkIGNoZWNrXG5cbiAgICAgICAgZm9yKGxldCBpID0gMCwgbGVuZ3RoID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgcmVtb3ZlZE5vZGUgPSBtdXRhdGlvbi5yZW1vdmVkTm9kZXNbaV07XG4gICAgICAgICAgaWYodHlwZW9mIHJlbW92ZWROb2RlLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycgJiYgLy8gY2hlY2sgaWYgY2xhc3NOYW1lIGV4aXN0cywgaXMgJ1NWR0FuaW1hdGVkU3RyaW5nJyB3aGVuIHdpbmRvdyByZXNpemVkIGFuZCByZW1vdmVkIFxuICAgICAgICAgICAgICB+cmVtb3ZlZE5vZGUuY2xhc3NOYW1lLmluZGV4T2YoJ0Vtb3RlJykgIT09IDApIHtcbiAgICAgICAgICAgIGVtb3RlUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICBpZihlbW90ZVJlbW92ZWQgJiYgZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLm5vZGUpKSB7XG4gICAgICAgIHRoaXMuc2V0SHRtbCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMubm9kZSwge1xuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgYXR0cmlidXRlczogZmFsc2UsXG4gICAgICBjaGFyYWN0ZXJEYXRhOiBmYWxzZSxcbiAgICAgIHN1YnRyZWU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHNldEh0bWwoKSB7XG4gICAgdGhpcy50ZXh0Tm9kZS5ub2RlLmlubmVySFRNTCA9IHRoaXMucGFyc2VkVGV4dDtcbiAgfVxuXG4gIHBhcnNlSWxsZWdhbENoYXJjdGVycyh3b3JkKSB7XG4gICAgLy8g77u/ID09PSAnWkVSTyBXSURUSCBOTy1CUkVBSyBTUEFDRSdcbiAgICByZXR1cm4gd29yZC5yZXBsYWNlKCfvu78nLCAnJykudHJpbSgpO1xuICB9XG4gIFxuICBkZXN0cm95KCkge1xuICAgIGlmKHRoaXMub2JzZXJ2ZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIC8vIFNldHRpbmcgT3B0aW9ucyBmb3IgRWFjaCBNZXNzYWdlXG4gIHNldERlZmF1bHRTZWxlY3Rpb25zKCl7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvLyAgQ2hlY2tzIGZvciBrYXBwYSBhbmQgcmVwbGFjZXMgZW1vamkgZWxlbWVudCB3aXRoIGthcHBhXG4gICAgaWYoUGVyc2lzdGVudFN5bmNTdG9yYWdlLmRhdGEub3B0aW9ucy5rYXBwYUZpeCkge1xuXG4gICAgICB2YXIgc3R1cGlkS2FwcGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbWVzc2FnZS55dC1saXZlLWNoYXQtdGV4dC1tZXNzYWdlLXJlbmRlcmVyIC5lbW9qaS55dC1saXZlLWNoYXQtdGV4dC1tZXNzYWdlLXJlbmRlcmVyJyk7XG4gICAgICBcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdHVwaWRLYXBwYS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3Qgc3R1cGlkRWxlbWVudCA9IHN0dXBpZEthcHBhW2luZGV4XTtcbiAgICAgICAgdmFyIHN0dXBpZFRvb2xUaXAgPSBzdHVwaWRFbGVtZW50LmdldEF0dHJpYnV0ZSgnc2hhcmVkLXRvb2x0aXAtdGV4dCcpO1xuXG4gICAgICAgIGlmKHN0dXBpZFRvb2xUaXAgPT0gJzpmdWxsX21vb25fZmFjZTonKXtcblxuICAgICAgICAgIGNvbnN0IG5ld1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgbmV3U3Bhbi5jbGFzc0xpc3QuYWRkKCdFbW90ZScpO1xuICAgICAgICAgIG5ld1NwYW4uaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiaHR0cHM6Ly9zdGF0aWMtY2RuLmp0dm53Lm5ldC9lbW90aWNvbnMvdjEvMjUvMy4wXCIgYWx0PVwia2FwcGFcIj4nO1xuXG4gICAgICAgICAgc3R1cGlkRWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdTcGFuLCBzdHVwaWRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSAgIFxuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvL1NldCBBdXRob3IgQ29sb3JzXG4gICAgaWYoUGVyc2lzdGVudFN5bmNTdG9yYWdlLmRhdGEub3B0aW9ucy5zZXRBdXRob3JDb2xvciAmJiB0aGlzLm5vZGUuZ2V0QXR0cmlidXRlKCdhdXRob3ItdHlwZScpICE9PSAnb3duZXInKSB7XG4gICAgICB0aGlzLnNldEF1dGhvckNvbG9yKCk7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgLy8gQXV0aG9yIEljb25zXG4gICAgdmFyIGF1dGhvcl9waG90byA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKCcjYXV0aG9yLXBob3RvJyk7XG5cbiAgICAvLyBTZXQgSGlkZSBBdXRob3IgSWNvbnNcbiAgICBpZiAoUGVyc2lzdGVudFN5bmNTdG9yYWdlLmRhdGEub3B0aW9ucy5oaWRlQXV0aG9ySWNvbnMpIHtcbiAgICAgIGF1dGhvcl9waG90by5jbGFzc0xpc3QuYWRkKFwiaGlkZUVsZW1lbnRcIik7XG4gICAgfVxuXG4gICAgLy8gVGltZVN0YW1wXG4gICAgdmFyIHRpbWVzdGFtcCA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKCcjdGltZXN0YW1wJyk7XG5cbiAgICAvLyBTZXQgU2hvdyBUaW1lU3RhbXBcbiAgICBpZiAoUGVyc2lzdGVudFN5bmNTdG9yYWdlLmRhdGEub3B0aW9ucy5zaG93VGltZVN0YW1wKSB7XG4gICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcInNob3dUaW1lU3RhbXBcIik7XG4gICAgfVxuXG4gICAgXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIFxuICAgIC8vIEF1dGhvciBOYW1lIEAgYXV0byBwYXN0ZSBpbiB0ZXh0IGFyZWFcbiAgICB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcignI2F1dGhvci1uYW1lJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgaW5wdXRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0Lnl0LWxpdmUtY2hhdC10ZXh0LWlucHV0LWZpZWxkLXJlbmRlcmVyJyk7XG4gICAgICB2YXIgaW5wdXRBcmVhTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWwueXQtbGl2ZS1jaGF0LXRleHQtaW5wdXQtZmllbGQtcmVuZGVyZXInKTtcbiAgICAgIGlucHV0QXJlYS5pbm5lclRleHQgPSBcIkBcIiArIHRoaXMuaW5uZXJUZXh0O1xuICAgICAgY29uc3QgdGV4dExlbmd0aCA9IGlucHV0QXJlYS5pbm5lclRleHQubGVuZ3RoO1xuICAgICAgaW5wdXRBcmVhLmZvY3VzKCk7XG4gICAgICBpbnB1dEFyZWFMYWJlbC5pbm5lclRleHQgPSBcIlwiO1xuICAgIH0pO1xuICBcbiAgXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBcbiAgICAvLyBTZXQgRm9udCBTaXplXG4gICAgdmFyIHRleHRTaXplU2xpZGVyID0gUGVyc2lzdGVudFN5bmNTdG9yYWdlLmRhdGEub3B0aW9ucy50ZXh0U2l6ZVNsaWRlcjsgIFxuXG4gICAgaWYgKFBlcnNpc3RlbnRTeW5jU3RvcmFnZS5kYXRhLm9wdGlvbnMuYWxsb3dUZXh0U2xpZGVyKSB7XG4gICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdmb250LXNpemU6JyArIHRleHRTaXplU2xpZGVyICsgJ3B4JyArICchaW1wb3J0YW50Jyk7XG4gICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcIkF1dGhvckZpeFwiKTtcbiAgICB9XG4gIFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgXG4gICAgLy8gIFNldCBUd2l0Y2ggU3R5bGluZ1xuICAgIGlmIChQZXJzaXN0ZW50U3luY1N0b3JhZ2UuZGF0YS5vcHRpb25zLnNldFR3aXRjaENvbG9ycykge1xuICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJzZXRUd2l0Y2hDb2xvcnNcIik7XG4gICAgICBhdXRob3JfcGhvdG8uY2xhc3NMaXN0LmFkZChcImhpZGVFbGVtZW50XCIpO1xuICAgIH1cbiAgICAgIFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgXG4gICAgLy8gIFNldCBBbHRlcm5hdGUgbWVzc2FnZSBDb2xvcnNcbiAgICBpZiAoUGVyc2lzdGVudFN5bmNTdG9yYWdlLmRhdGEub3B0aW9ucy5hbHRlcm5hdGVMaW5lQ29sb3IpIHtcbiAgICAgIHRoaXMuYWx0ZXJuYXRlTGluZUNvbG9yKCk7XG4gICAgfSAgIFxuXG4gIH0vLyBlbmQgc2V0RGVmYXVsdFNlbGVjdGlvbnNcblxuICBzZXRBdXRob3JDb2xvcigpIHtcbiAgICBcbiAgICBsZXQgaW1hZ2VTcmMgPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcignI2ltZycpLnNyYztcblxuICAgIC8vIHNyYyBmb3IgY2xpZW50IHVzZXIgaW5wdXQgaXMgZGF0YSBpbnN0ZWFkIG9mIGh0dHAvc1xuICAgIGlmKGltYWdlU3JjWzBdICE9PSAnaCcpIHsgXG4gICAgICBpbWFnZVNyYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3l0LWxpdmUtY2hhdC1tZXNzYWdlLWlucHV0LXJlbmRlcmVyICNhdmF0YXIgI2ltZycpLnNyYztcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVnZXhQYXJzZSA9IGlkUmVnZXhwLmV4ZWMoaW1hZ2VTcmMpO1xuICAgIGNvbnN0IGNvbG9ySWQgPSByZWdleFBhcnNlLmxlbmd0aCA+IDEgPyByZWdleFBhcnNlWzFdIDogbnVsbDtcbiAgICBcbiAgICBpZihjb2xvcklkICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChgY2hhdC1jb2xvci0ke2NvbG9ySWR9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGxvZyBlcnJvciwgY291bGRuJ3QgZ2V0IGNvbG9ySUQgZnJvbSBgeGAgdXJsXG4gICAgfVxuXG4gIH1cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIFxuICAvLyAgY2hhbmdlcyBjb2xvciBldmVyeSBsaW5lXG4gIGFsdGVybmF0ZUxpbmVDb2xvcigpe1xuXG4gICAgICBpZihjb2xvck51bWJlckluZGV4ICUgMiA9PSAwKXtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJzZXQtYmFja2dyb3VuZC1jb2xvci1vbmVcIik7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJzZXQtYmFja2dyb3VuZC1jb2xvci10d29cIik7XG4gICAgICB9XG4gICAgICBjb2xvck51bWJlckluZGV4Kys7XG4gIH1cbiAgXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAvLyAgcmVtb3ZlcyBjb2xvciBhdHRyXG4gIHJlbW92ZWx0ZXJuYXRlTGluZUNvbG9yKCl7XG4gICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZXQtYmFja2dyb3VuZC1jb2xvci1vbmVcIik7XG4gICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZXQtYmFja2dyb3VuZC1jb2xvci10d29cIik7XG4gIH1cblxufS8vIGVuZCBNZXNzYWdlXG5cblxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlOyIsIi8qKlxuKiBNSVQgTGljZW5zZVxuKlxuKiBDb3B5cmlnaHQgKGMpIDIwMjAgd29tcG1hY2hvXG4qIFxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4qIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4qIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuKiBcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4qIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4qIFxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuKiBTT0ZUV0FSRS5cbiovXG5cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudHMnO1xuXG5jbGFzcyBSb3V0ZVdhdGNoZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkID4gdGl0bGUnKTtcbiAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcbiAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaXRsZSBpcyBzZXQgdG8gJ1lvdVR1YmUgR2FtaW5nJyBvbiBtYWluIHJvdXRlc1xuICAgICAgICAgKiBhbmQgYmV0d2VlbiByb3V0ZXMuXG4gICAgICAgICAqL1xuICAgICAgICBpZihtLnRhcmdldC5pbm5lclRleHQgPT09ICdZb3VUdWJlIEdhbWluZycpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoJ21haW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmKHRoaXMudGFyZ2V0ICE9PSBudWxsKSB7IC8vIFBvcG91dCBjaGF0IGRvZXMgbm90IGhhdmUgdGl0bGUgdGFnXG4gICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy50YXJnZXQsIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlV2F0Y2hlcjtcbiIsIi8qKlxuKiBNSVQgTGljZW5zZVxuKlxuKiBDb3B5cmlnaHQgKGMpIDIwMjAgd29tcG1hY2hvXG4qIFxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4qIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4qIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuKiBcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4qIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4qIFxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuKiBTT0ZUV0FSRS5cbiovXG5cbmltcG9ydCBcInNyYy9zdHlsdXMvY29udGVudC5zdHlsXCI7XG5pbXBvcnQgQ2hhdFNjcm9sbGVyIGZyb20gXCIuL0NoYXRTY3JvbGxlclwiO1xuaW1wb3J0IENoYXRXYXRjaGVyIGZyb20gXCIuL0NoYXRXYXRjaGVyXCI7XG5pbXBvcnQgUm91dGVXYXRjaGVyIGZyb20gXCIuL1JvdXRlV2F0Y2hlclwiO1xuXG5cbmltcG9ydCB7XG4gIGlzTGl2ZXN0cmVhbSwgaXNZb3V0dWJlR2FtaW5nLFxuICBpc1lvdXR1YmVFbWJlZCwgaXNZb3V0dWJlVmFuaWxsYSxcbiAgaXNQb3BPdXRcbn0gZnJvbSBcInNyYy9oZWxwZXJzL0lkZW50aWZpY2F0aW9uXCI7XG5cbmltcG9ydCBQZXJzaXN0ZW50U3luY1N0b3JhZ2UgZnJvbSBcInNyYy9oZWxwZXJzL1BlcnNpc3RlbnRTeW5jU3RvcmFnZVwiO1xuXG5sZXQgTUFJTiA9IG51bGw7XG52YXIgaW5UaGVhdGVyTW9kZSA9IGZhbHNlO1xudmFyIGJvZHlCZWZvcmVDaGFuZ2VzID0gbnVsbDtcblxuLy8gLS0tXG5cbmNsYXNzIE1haW4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNoYXRXYXRjaGVyID0gbnVsbDtcbiAgICB0aGlzLmNoYXRTY3JvbGxlciA9IG51bGw7XG4gICAgdGhpcy5yb3V0ZVdhdGNoZXIgPSBudWxsO1xuICAgIHRoaXMub25Sb3V0ZUNoYW5nZSA9IHRoaXMub25Sb3V0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9hZCgpO1xuXG4gICAgXG4gICAgICAvLyAgYnV0dG9uIGNsYXNzIC0geXRwLXNpemUtYnV0dG9uIHl0cC1idXR0b25cbiAgICAgIC8vICByaWdodCBwbGF5ZXIgY29udHJvbHMgLSB5dHAtcmlnaHQtY29udHJvbHNcbiAgICAgIC8vICBwbGF5ZXIgZGl2IGlkIC0geXRkLXBsYXllclxuICAgICAgLy8gIGNoYXRmcmFtZSBpZCAtIGNoYXRmcmFtZVxuICAgICAgLy8gIG1vdmllZnJhbWUgaWQgLSBtb3ZpZV9wbGF5ZXJfZml4XG4gICAgICAvLyAgZG9ubyB0aWNrZXIgaWQgLSB0aWNrZXJcblxuICAgICAgLy8gIHBsYXllci10aGVhdGVyLWNvbnRhaW5lclxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLnJvdXRlV2F0Y2hlciA9IG5ldyBSb3V0ZVdhdGNoZXIoKTtcbiAgICB0aGlzLnJvdXRlV2F0Y2hlci5vbihcImNoYW5nZVwiLCB0aGlzLm9uUm91dGVDaGFuZ2UpO1xuICAgIHRoaXMub25Sb3V0ZUNoYW5nZSgpO1xuICB9XG5cbiAgb25Sb3V0ZUNoYW5nZSgpIHtcbiAgICBpZihpc0xpdmVzdHJlYW0oKSAmJiAoKGlzWW91dHViZUdhbWluZygpKSB8fCAoaXNZb3V0dWJlVmFuaWxsYSgpKSB8fCAoaXNZb3V0dWJlRW1iZWQoKSkgfHwgaXNQb3BPdXQoKSkpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGlmKGlzTGl2ZXN0cmVhbSgpKSB7XG4gICAgICBpZiAoUGVyc2lzdGVudFN5bmNTdG9yYWdlLmRhdGEub3B0aW9ucy50aGVhdGVyTW9kZUZpeCkge1xuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92aWVfcGxheWVyJykgIT0gbnVsbCl7XG5cbiAgICAgICAgICB2YXIgdGhlYXRlckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3l0cC1zaXplLWJ1dHRvbicpWzBdO1xuXG4gICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGVhdGVyTW9kZSgpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGVhdGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0vLyAgZW5kIG9uUm91dGVDaGFuZ2VcblxuICBpbml0KCkge1xuXG4gICAgdGhpcy5jaGF0V2F0Y2hlciA9IG5ldyBDaGF0V2F0Y2hlcigpO1xuICAgIHRoaXMuY2hhdFdhdGNoZXIuaW5pdCgpO1xuICAgIHRoaXMuY2hhdFNjcm9sbGVyID0gbmV3IENoYXRTY3JvbGxlcigpO1xuICAgIHRoaXMuY2hhdFNjcm9sbGVyLmluaXQoKTtcblxuICAgIHNldERlZmF1bHRzKCk7XG4gICAgY29uc29sZS5sb2coXCJJTklUXCIpO1xuXG4gIH0vLyBlbmQgaW5pdFxuXG5cbn0vLyBlbmQgbWFpblxuXG4gIGZ1bmN0aW9uIHNldERlZmF1bHRzKCkge1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgLy9MaXZlIENoYXQgRGVmYXVsdCBPcHRpb25cbiAgICBpZiAoUGVyc2lzdGVudFN5bmNTdG9yYWdlLmRhdGEub3B0aW9ucy5zZXRMaXZlQ2hhdCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInl0LXNpbXBsZS1lbmRwb2ludCBzdHlsZS1zY29wZSB5dC1kcm9wZG93bi1tZW51XCIpLml0ZW0oMSkuY2xpY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZG8gbm90aGluZywgbGV0IHVzZXIgcGljayBvcHRpb24gaWYgbm90IHNldCBhcyBkZWZhdWx0IGluIG9wdGlvbnMgbWVudVxuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIFdlbGNvbWUgQmFubmVyXG4gICAgdmFyIHdlbGNvbUJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ5dC1saXZlLWNoYXQtdmlld2VyLWVuZ2FnZW1lbnQtbWVzc2FnZS1yZW5kZXJlclwiKTtcbiAgXG4gICAgLy8gU2V0IEhpZGUgV2VsY29tZSBCYW5uZXJcbiAgICBpZiAoUGVyc2lzdGVudFN5bmNTdG9yYWdlLmRhdGEub3B0aW9ucy5oaWRlV2VsY29tQmFubmVyKSB7XG4gICAgICB3ZWxjb21CYW5uZXIuY2xhc3NMaXN0LmFkZChcImhpZGVFbGVtZW50XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3ZWxjb21CYW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVFbGVtZW50XCIpO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICB9XG5cbi8vIC0tLSBFdmVyeSBGcmFtZSBMb2FkZWRcblBlcnNpc3RlbnRTeW5jU3RvcmFnZS5vbihcInJlYWR5XCIsICgpID0+IHtcbiAgTUFJTiA9IG5ldyBNYWluKCk7XG59KTtcblxuXG5cbmZ1bmN0aW9uIHRoZWF0ZXJNb2RlKCkge1xuXG4gIGNvbnNvbGUubG9nKCd0aGVhdGVyQnV0dG9uIGNsaWNrZWQnKTtcbiAgaW5UaGVhdGVyTW9kZSA9ICFpblRoZWF0ZXJNb2RlO1xuXG4gIGNvbnN0IG1vdmllX3BsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZpZV9wbGF5ZXInKTtcbiAgY29uc3QgY2hhdF9mcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0ZnJhbWUnKTtcbiAgdmFyIHRoZWF0ZXJfd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBcblxuICBpZihpblRoZWF0ZXJNb2RlKXtcbiAgICBcbiAgICB0aGVhdGVyX3dyYXBwZXIuY2xhc3NMaXN0ID0gKCd0aGVhdGVyX3dyYXBwZXJfZml4Jyk7XG4gICAgbW92aWVfcGxheWVyLmNsYXNzTGlzdCA9ICgnbW92aWVfcGxheWVyX2ZpeCcpO1xuICAgIGNoYXRfZnJhbWUuY2xhc3NMaXN0ID0gKCdjaGF0X2ZyYW1lX2ZpeCcpO1xuICBcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgZG9jdW1lbnQuYm9keS5jaGlsZE5vZGVzW2luZGV4XS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5yZW1vdmVDaGlsZChtb3ZpZV9wbGF5ZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUNoaWxkKGNoYXRfZnJhbWUpO1xuICBcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHlGaXgnKTtcbiAgXG4gICAgdGhlYXRlcl93cmFwcGVyLmFwcGVuZENoaWxkKG1vdmllX3BsYXllcik7XG4gICAgdGhlYXRlcl93cmFwcGVyLmFwcGVuZENoaWxkKGNoYXRfZnJhbWUpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhlYXRlcl93cmFwcGVyKTtcbiAgfVxuXG4gIGlmKCFpblRoZWF0ZXJNb2RlKXtcblxuICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgLy8gICBkb2N1bWVudC5ib2R5LmNoaWxkTm9kZXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIC8vIH1cblxuICAgIHRoZWF0ZXJfd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCd0aGVhdGVyX3dyYXBwZXJfZml4Jyk7XG4gICAgbW92aWVfcGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoJ21vdmllX3BsYXllcl9maXgnKTtcbiAgICBjaGF0X2ZyYW1lLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYXRfZnJhbWVfZml4Jyk7XG4gIH1cblxuXG59Ly8gZW5kIGVudGVyVGhlYXRlck1vZGVcblxuXG4iLCIvKipcbiogTUlUIExpY2Vuc2VcbipcbiogQ29weXJpZ2h0IChjKSAyMDIwIHdvbXBtYWNob1xuKiBcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4qIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiogXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuKiBcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4qIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiogU09GVFdBUkUuXG4qL1xuXG5cbmV4cG9ydCBjb25zdCBpc0xpdmVzdHJlYW0gPSAoKSA9PiB7XG4gICAgY29uc3QgdGltZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueXRwLXRpbWUtZGlzcGxheScpO1xuICAgIGNvbnN0IGNoYXRBcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd5dC1saXZlLWNoYXQtYXBwJyk7XG4gICAgY29uc3QgY2hhdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55dC1saXZlLWNoYXQtcmVuZGVyZXItMCcpO1xuICAgIGNvbnN0IHRpbWVEaXNwbGF5Q2hlY2sgPSB0aW1lRGlzcGxheSAmJiB0aW1lRGlzcGxheS5jbGFzc0xpc3QuY29udGFpbnMoJ3l0cC1saXZlJyk7XG4gICAgY29uc3QgY2hhdENoZWNrID0gKGRvY3VtZW50LmJvZHkuY29udGFpbnMoY2hhdEFwcCkgfHwgZG9jdW1lbnQuYm9keS5jb250YWlucyhjaGF0SGVhZGVyKSk7XG5cbiAgICByZXR1cm4gKHRpbWVEaXNwbGF5Q2hlY2sgfHwgY2hhdENoZWNrKTtcbn07XG5cbi8vIGlzWW91dHViZUdhbWluZyBjaGVja3MgZm9yIHRoZSBwcmVzZW5jZSBvZiB5dGctYXBwLCB0aGUgdG9wIGxldmVsIGVsZW1lbnQgZm9yIFlUIEdhbWluZ1xuZXhwb3J0IGNvbnN0IGlzWW91dHViZUdhbWluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd5dGctYXBwJyk7XG59O1xuXG4vLyBpc1lvdXR1YmVFbWJlZCBjaGVja3MgdGhhdCB0aGlzIGlzIGFuIGlmcmFtZSwgYW5kIGl0IGlzIGJlaW5nIHVzZWQgb24geW91dHViZS5jb21cbmV4cG9ydCBjb25zdCBpc1lvdXR1YmVWYW5pbGxhID0gKCkgPT4ge1xuICAgIC8vIHdpbmRvdy5mcmFtZUVsZW1lbnQgaXMgb25seSBhdmFpbGFibGUgZnJvbSB5b3V0dWJlLmNvbSBzaXRlcyBmcm9tIHdpdGhpbiBpZnJhbWUgcGVyIENPUlNcbiAgICByZXR1cm4gISF3aW5kb3cuZnJhbWVFbGVtZW50O1xufTtcblxuLy8gaXNZb3V0dWJlRW1iZWQgY2hlY2tzIHRoYXQgdGhpcyBpcyBhbiBpZnJhbWUsIGFuZCBpdCBpcyAqKm5vdCoqIGxvYWRlZCBmcm9tIHlvdXR1YmUuY29tIChtYWluIHNpdGUgdXNlcyBlbWJlZCB0b28pXG5leHBvcnQgY29uc3QgaXNZb3V0dWJlRW1iZWQgPSAoKSA9PiB7XG5cbiAgICAvLyBJZiB0aGUgZnJhbWVFbGVtZW50IGlzIGF2YWlsYWJsZSwgdGhlbiBDT1JTIG1lYW5zIHRoYXQgd2UgbXVzdCBiZSBvbiB5b3V0dWJlLmNvbS5cbiAgICBpZiAod2luZG93LmZyYW1lRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHdpbmRvdyBsb2NhdGlvbiBpc24ndCB0aGUgcGFyZW50IGxvY2F0aW9uLCB0aGVuIHdlIGFyZSBpbiBhbiBpZnJhbWUuXG4gICAgcmV0dXJuICh3aW5kb3cubG9jYXRpb24gIT0gd2luZG93LnBhcmVudC5sb2NhdGlvbik7XG59O1xuXG4vLyBpc1BvcE91dCBmaXggZm9yIHBvcG91dCBwYWdlXG5leHBvcnQgY29uc3QgaXNQb3BPdXQgPSAoKSA9PiB7XG4gICAgXG4gICAgLy8gSWYgdGhlIGZyYW1lRWxlbWVudCBpcyBhdmFpbGFibGUsIHRoZW4gQ09SUyBtZWFucyB0aGF0IHdlIG11c3QgYmUgb24geW91dHViZS5jb20uXG4gICAgaWYgKHdpbmRvdy5mcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENoZWNrcyBocmVmIGZvciBwYWdlIFxuICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdpc19wb3BvdXQ9MScpKXtcbiAgICAgICAgcmV0dXJuICEhd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ3BvcG91dD0xJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTsiLCIvKipcbiogTUlUIExpY2Vuc2VcbipcbiogQ29weXJpZ2h0IChjKSAyMDIwIHdvbXBtYWNob1xuKiBcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4qIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiogXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuKiBcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4qIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiogU09GVFdBUkUuXG4qL1xuXG5cbmltcG9ydCB7IFN5bmNTdG9yYWdlIH0gZnJvbSAnLi4vdXRpbHMvY2hyb21lJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5cbmNsYXNzIFBlcnNpc3RlbnRTeW5jU3RvcmFnZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9kYXRhID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0gJ2luaXRpYXRpbmcnO1xuXG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG5cbiAgYXN5bmMgX2luaXQoKSB7XG4gICAgY29uc3QgZmV0Y2hlZERhdGEgPSBhd2FpdCBTeW5jU3RvcmFnZS5nZXQoKTtcbiAgICB0aGlzLl9pbml0TGlzdGVuZXIoKTtcbiAgICB0aGlzLl9kYXRhID0gZmV0Y2hlZERhdGE7XG4gICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gICAgdGhpcy5lbWl0KHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgX2luaXRMaXN0ZW5lcigpIHtcbiAgICBTeW5jU3RvcmFnZS5saXN0ZW4oKGNoYW5nZXMpID0+IHtcblxuICAgICAgT2JqZWN0LmtleXMoY2hhbmdlcykuZm9yRWFjaCgoY2hhbmdlS2V5KSA9PiB7XG4gICAgICAgIGlmKGNoYW5nZXNbY2hhbmdlS2V5XS5oYXNPd25Qcm9wZXJ0eSgnbmV3VmFsdWUnKSkge1xuICAgICAgICAgIHRoaXMuX2RhdGFbY2hhbmdlS2V5XSA9IGNoYW5nZXNbY2hhbmdlS2V5XS5uZXdWYWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBuZXdWYWx1ZSBpbiBzeW5jIHN0b3JnZSBjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJywgdGhpcy5kYXRhLCBjaGFuZ2VzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldChpdGVtcykge1xuICAgIHJldHVybiBTeW5jU3RvcmFnZS5zZXQoaXRlbXMpO1xuICB9XG4gIFxuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG5cbiAgaGFzKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmhhc093blByb3BlcnR5KGl0ZW0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQZXJzaXN0ZW50U3luY1N0b3JhZ2UoKTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9jb250ZW50LnN0eWxcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzIS4vY29udGVudC5zdHlsXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9jb250ZW50LnN0eWxcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKipcbiogTUlUIExpY2Vuc2VcbipcbiogQ29weXJpZ2h0IChjKSAyMDIwIHdvbXBtYWNob1xuKiBcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4qIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiogXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuKiBcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4qIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiogU09GVFdBUkUuXG4qL1xuXG5cbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vU3RvcmFnZSc7XG5cbmNsYXNzIExvY2FsU3RvcmFnZSBleHRlbmRzIFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RvcmUgPSAnbG9jYWwnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsU3RvcmFnZTtcbiIsIi8qKlxuKiBNSVQgTGljZW5zZVxuKlxuKiBDb3B5cmlnaHQgKGMpIDIwMjAgd29tcG1hY2hvXG4qIFxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4qIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4qIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuKiBcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4qIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4qIFxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuKiBTT0ZUV0FSRS5cbiovXG5cblxuY2xhc3MgTm90aWZpY2F0aW9ucyB7XG5cbiAgY3JlYXRlKG5vdGlmaWNhdGlvbklkID0gbnVsbCwgb3B0aW9ucykge1xuICAgIC8vIG5vdGlmaWNhdGlvbklkIGlzIG9wdGlvbmFsXG4gICAgaWYodHlwZW9mIG5vdGlmaWNhdGlvbklkID09PSAnb2JqZWN0Jykge1xuICAgICAgb3B0aW9ucyA9IG5vdGlmaWNhdGlvbklkO1xuICAgICAgbm90aWZpY2F0aW9uSWQgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIC8vIHJlc29sdmUgYXJncyA9IG5vdGlmaWNhdGlvbklkOnN0cmluZyBcbiAgICAgIGNocm9tZS5ub3RpZmljYXRpb25zLmNyZWF0ZShub3RpZmljYXRpb25JZCwgb3B0aW9ucywgcmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZShub3RpZmljYXRpb25JZCwgb3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIC8vIHJlc29sdmUgYXJncyA9IHdhc1VwZGF0ZWQ6Ym9vbGVhblxuICAgICAgY2hyb21lLm5vdGlmaWNhdGlvbnMudXBkYXRlKG5vdGlmaWNhdGlvbklkLCBvcHRpb25zLCByZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYXIobm90aWZpY2F0aW9uSWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAvLyByZXNvbHZlIGFyZ3MgPSB3YXNDbGVhcmVkOmJvb2xlYW5cbiAgICAgIGNocm9tZS5ub3RpZmljYXRpb25zLmNsZWFyKG5vdGlmaWNhdGlvbklkLCByZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWxsKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIC8vIHJlc29sdmUgYXJncyA9IG5vdGlmaWNhdGlvbnM6b2JqZWN0XG4gICAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5nZXRBbGwocmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFBlcm1pc3Npb25MZXZlbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAvLyByZXNvbHZlIGFyZ3MgPSBsZXZlbDpQZXJtaXNzaW9uTGV2ZWwgKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vYXBwcy9ub3RpZmljYXRpb25zI3R5cGUtUGVybWlzc2lvbkxldmVsKVxuICAgICAgY2hyb21lLm5vdGlmaWNhdGlvbnMuZ2V0UGVybWlzc2lvbkxldmVsKHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICBsaXN0ZW4oZXZlbnQsIG5vdGlmaWNhdGlvbklkID0gbnVsbCwgY2FsbGJhY2spIHtcbiAgICAvLyBldmVudCA9ICdvbkNsb3NlZCcgfCAnb25DbGlja2VkJyB8ICdvbkJ1dHRvbkNsaWNrZWQnIHwgJ29uUGVybWlzc2lvbkxldmVsQ2hhbmdlZCcgfCAnb25TaG93U2V0dGluZ3MnXG4gICAgLy8gbm90aWZpY2F0aW9uSWQgaXMgb3B0aW9uYWxcbiAgICBpZih0eXBlb2Ygbm90aWZpY2F0aW9uSWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gbm90aWZpY2F0aW9uSWQ7XG4gICAgICBub3RpZmljYXRpb25JZCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYoZXZlbnQgPT09ICdvblBlcm1pc3Npb25MZXZlbENoYW5nZWQnIHx8IGV2ZW50ID09PSAnb25TaG93U2V0dGluZ3MnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbm9uTm90aWZpY2F0aW9uSWRMaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2FwcHMvbm90aWZpY2F0aW9ucyNldmVudHNcbiAgICAgKiBcbiAgICAgKiBSZXNvbHZlIGFyZ3MgKGJ5IGV2ZW50KTpcbiAgICAgKiBvbkNsb3NlZCA9IG5vdGlmaWNhdGlvbklkOnN0cmluZywgYnlVc2VyOmJvb2xlYW5cbiAgICAgKiBvbkNsaWNrZWQgPSBub3RpZmljYXRpb25JZDpzdHJpbmdcbiAgICAgKiBvbkJ1dHRvbkNsaWNrZWQgPSBub3RpZmljYXRpb25JZDpzdHJpbmcsIGJ1dHRvbkluZGV4OmludGVnZXJcbiAgICAgKiBcbiAgICAgKiBvblBlcm1pc3Npb25MZXZlbENoYW5nZWQgPSBsZXZlbDpQZXJtaXNzaW9uTGV2ZWwgKGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vYXBwcy9ub3RpZmljYXRpb25zI3R5cGUtUGVybWlzc2lvbkxldmVsKVxuICAgICAqIG9uU2hvd1NldHRpbmdzID0gKG5vbmUpXG4gICAgICovXG5cbiAgICAvLyBUaGlzIGNhbGxiYWNrIHJlbGF0ZXMgb25seSB0byB0aG9zZSBldmVudHMgdGhhdCBoYXZlIG5vdGlmaWNhdGlvbklkIGFyZ1xuICAgIGNvbnN0IExpc3RlbmVyQ2FsbGJhY2sgPSAoKCkgPT4ge1xuICAgICAgaWYobm90aWZpY2F0aW9uSWQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIChwYXNzZWROb3RpZmljYXRpb25JZCwgLi4uYXJncykgPT4ge1xuICAgICAgICAgIGlmKG5vdGlmaWNhdGlvbklkID09PSBwYXNzZWROb3RpZmljYXRpb25JZCkge1xuICAgICAgICAgICAgY2FsbGJhY2socGFzc2VkTm90aWZpY2F0aW9uSWQsIC4uLmFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcbiAgICAgIH1cbiAgICB9KSgpO1xuXG5cbiAgICBjaHJvbWUubm90aWZpY2F0aW9uc1tldmVudF0uYWRkTGlzdGVuZXIoTGlzdGVuZXJDYWxsYmFjayk7XG4gIH1cblxuICBfbm9uTm90aWZpY2F0aW9uSWRMaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgY2hyb21lLm5vdGlmaWNhdGlvbnNbZXZlbnRdLmFkZExpc3RlbmVyKGNhbGxiYWNrKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25zO1xuIiwiLyoqXG4qIE1JVCBMaWNlbnNlXG4qXG4qIENvcHlyaWdodCAoYykgMjAyMCB3b21wbWFjaG9cbiogXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4qIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4qIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4qIFxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiogXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4qIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4qIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4qIFNPRlRXQVJFLlxuKi9cblxuXG5jbGFzcyBTdG9yYWdlIHtcblxuICBnZXQoa2V5cyA9IG51bGwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICBjb25zdCByZXR1cm5TaW5nbGUgPSB0eXBlb2Yga2V5cyA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGtleXMgPT09ICdudW1iZXInO1xuICAgICAgLy8gcmVzb2x2ZSBhcmdzID0gaXRlbXM6b2JqZWN0XG4gICAgICBjaHJvbWUuc3RvcmFnZVt0aGlzLnN0b3JlXS5nZXQoa2V5cywgKGl0ZW1zKSA9PiB7XG4gICAgICAgIGlmKHJldHVyblNpbmdsZSkge1xuICAgICAgICAgIHJlcyhpdGVtc1trZXlzXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzKGl0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRCeXRlc0luVXNlKGtleXMgPSBudWxsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgLy8gcmVzb2x2ZSBhcmdzID0gYnl0ZXNJblVzZTppbnRlZ2VyXG4gICAgICBjaHJvbWUuc3RvcmFnZVt0aGlzLnN0b3JlXS5nZXRCeXRlc0luVXNlKGtleXMsIHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICBzZXQoaXRlbXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAvLyByZXNvbHZlIGFyZ3MgPSAobm9uZSlcbiAgICAgIGNocm9tZS5zdG9yYWdlW3RoaXMuc3RvcmVdLnNldChpdGVtcywgcmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZShrZXlzKSB7XG4gICAgLy8gcmVzb2x2ZSBhcmdzID0gKG5vbmUpXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2VbdGhpcy5zdG9yZV0ucmVtb3ZlKGtleXMsIHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICAvLyByZXNvbHZlIGFyZ3MgPSAobm9uZSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZVt0aGlzLnN0b3JlXS5jbGVhcihyZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgbGlzdGVuKGl0ZW0sIG9uQ2hhbmdlKSB7XG4gICAgaWYodHlwZW9mIGl0ZW0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uQ2hhbmdlID0gaXRlbTtcbiAgICAgIGl0ZW0gPSBudWxsO1xuICAgIH1cblxuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcigoY2hhbmdlcywgYXJlYU5hbWUpID0+IHtcbiAgICAgIGlmKGFyZWFOYW1lID09PSB0aGlzLnN0b3JlKSB7XG4gICAgICAgIGlmKGl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgICBpZihjaGFuZ2VzLmhhc093blByb3BlcnR5KGl0ZW0pKSB7XG4gICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGNoYW5nZXNbaXRlbV0ub2xkVmFsdWUgfHwgbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY2hhbmdlc1tpdGVtXS5uZXdWYWx1ZSB8fCBudWxsO1xuICAgICAgICAgICAgb25DaGFuZ2Uob2xkVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb25DaGFuZ2UoY2hhbmdlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlO1xuIiwiLyoqXG4qIE1JVCBMaWNlbnNlXG4qXG4qIENvcHlyaWdodCAoYykgMjAyMCB3b21wbWFjaG9cbiogXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4qIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4qIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4qIFxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiogXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4qIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4qIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4qIFNPRlRXQVJFLlxuKi9cblxuXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UnO1xuXG5jbGFzcyBTeW5jU3RvcmFnZSBleHRlbmRzIFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RvcmUgPSAnc3luYyc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3luY1N0b3JhZ2U7XG4iLCIvKipcbiogTUlUIExpY2Vuc2VcbipcbiogQ29weXJpZ2h0IChjKSAyMDIwIHdvbXBtYWNob1xuKiBcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4qIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiogXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuKiBcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4qIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiogU09GVFdBUkUuXG4qL1xuXG5pbXBvcnQgX0xvY2FsU3RvcmFnZSBmcm9tICcuL0xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgX1N5bmNTdG9yYWdlIGZyb20gJy4vU3luY1N0b3JhZ2UnO1xuaW1wb3J0IF9Ob3RpZmljYXRpb25zIGZyb20gJy4vTm90aWZpY2F0aW9ucyc7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IHtcbi8vICAgTG9jYWxTdG9yYWdlOiBuZXcgX0xvY2FsU3RvcmFnZSxcbi8vICAgU3luY1N0b3JhZ2U6IG5ldyBfU3luY1N0b3JhZ2UsXG4vLyAgIE5vdGlmaWNhdGlvbnM6IG5ldyBfTm90aWZpY2F0aW9uc1xuLy8gfVxuXG5leHBvcnQgY29uc3QgTG9jYWxTdG9yYWdlID0gbmV3IF9Mb2NhbFN0b3JhZ2U7XG5leHBvcnQgY29uc3QgU3luY1N0b3JhZ2UgPSBuZXcgX1N5bmNTdG9yYWdlO1xuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbnMgPSBuZXcgX05vdGlmaWNhdGlvbnM7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN1lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN1FBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pOQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6UUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeExBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==