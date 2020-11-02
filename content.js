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
exports.push([module.i, ".chat-color-0 #content #author-name {\n  color: #536dfe !important;\n}\n.chat-color-1 #content #author-name {\n  color: #2196f3 !important;\n}\n.chat-color-2 #content #author-name {\n  color: #03a9f4 !important;\n}\n.chat-color-3 #content #author-name {\n  color: #00bcd4 !important;\n}\n.chat-color-4 #content #author-name {\n  color: #009688 !important;\n}\n.chat-color-5 #content #author-name {\n  color: #4caf50 !important;\n}\n.chat-color-6 #content #author-name {\n  color: #8bc34a !important;\n}\n.chat-color-7 #content #author-name {\n  color: #cddc39 !important;\n}\n.chat-color-8 #content #author-name {\n  color: #ffeb3b !important;\n}\n.chat-color-9 #content #author-name {\n  color: #ffc107 !important;\n}\n.chat-color-A #content #author-name {\n  color: #f44336 !important;\n}\n.chat-color-B #content #author-name {\n  color: #e91e63 !important;\n}\n.chat-color-C #content #author-name {\n  color: #9c27b0 !important;\n}\n.chat-color-D #content #author-name {\n  color: #673ab7 !important;\n}\n.chat-color-E #content #author-name {\n  color: #536dfe !important;\n}\n.chat-color-F #content #author-name {\n  color: #2196f3 !important;\n}\n.chat-color-G #content #author-name {\n  color: #03a9f4 !important;\n}\n.chat-color-H #content #author-name {\n  color: #00bcd4 !important;\n}\n.chat-color-I #content #author-name {\n  color: #009688 !important;\n}\n.chat-color-J #content #author-name {\n  color: #4caf50 !important;\n}\n.chat-color-K #content #author-name {\n  color: #8bc34a !important;\n}\n.chat-color-L #content #author-name {\n  color: #cddc39 !important;\n}\n.chat-color-M #content #author-name {\n  color: #ffeb3b !important;\n}\n.chat-color-N #content #author-name {\n  color: #ffc107 !important;\n}\n.chat-color-O #content #author-name {\n  color: #ff9800 !important;\n}\n.chat-color-P #content #author-name {\n  color: #ff5722 !important;\n}\n.chat-color-Q #content #author-name {\n  color: #f44336 !important;\n}\n.chat-color-R #content #author-name {\n  color: #e91e63 !important;\n}\n.chat-color-S #content #author-name {\n  color: #9c27b0 !important;\n}\n.chat-color-T #content #author-name {\n  color: #673ab7 !important;\n}\n.chat-color-U #content #author-name {\n  color: #536dfe !important;\n}\n.chat-color-V #content #author-name {\n  color: #2196f3 !important;\n}\n.chat-color-W #content #author-name {\n  color: #03a9f4 !important;\n}\n.chat-color-X #content #author-name {\n  color: #00bcd4 !important;\n}\n.chat-color-Y #content #author-name {\n  color: #009688 !important;\n}\n.chat-color-Z #content #author-name {\n  color: #4caf50 !important;\n}\n.chat-color-a #content #author-name {\n  color: #8bc34a !important;\n}\n.chat-color-b #content #author-name {\n  color: #cddc39 !important;\n}\n.chat-color-c #content #author-name {\n  color: #ffeb3b !important;\n}\n.chat-color-d #content #author-name {\n  color: #ffc107 !important;\n}\n.chat-color-e #content #author-name {\n  color: #ff9800 !important;\n}\n.chat-color-f #content #author-name {\n  color: #ff5722 !important;\n}\n.chat-color-g #content #author-name {\n  color: #f44336 !important;\n}\n.chat-color-h #content #author-name {\n  color: #e91e63 !important;\n}\n.chat-color-i #content #author-name {\n  color: #9c27b0 !important;\n}\n.chat-color-j #content #author-name {\n  color: #673ab7 !important;\n}\n.chat-color-k #content #author-name {\n  color: #536dfe !important;\n}\n.chat-color-l #content #author-name {\n  color: #2196f3 !important;\n}\n.chat-color-m #content #author-name {\n  color: #03a9f4 !important;\n}\n.chat-color-n #content #author-name {\n  color: #00bcd4 !important;\n}\n.chat-color-o #content #author-name {\n  color: #009688 !important;\n}\n.chat-color-p #content #author-name {\n  color: #4caf50 !important;\n}\n.chat-color-q #content #author-name {\n  color: #8bc34a !important;\n}\n.chat-color-r #content #author-name {\n  color: #cddc39 !important;\n}\n.chat-color-s #content #author-name {\n  color: #ffeb3b !important;\n}\n.chat-color-t #content #author-name {\n  color: #ffc107 !important;\n}\n.chat-color-u #content #author-name {\n  color: #ff9800 !important;\n}\n.chat-color-v #content #author-name {\n  color: #ff5722 !important;\n}\n.chat-color-w #content #author-name {\n  color: #f44336 !important;\n}\n.chat-color-x #content #author-name {\n  color: #e91e63 !important;\n}\n.chat-color-y #content #author-name {\n  color: #9c27b0 !important;\n}\n.chat-color-z #content #author-name {\n  color: #673ab7 !important;\n}\n.chat-color-- #content #author-name {\n  color: #ff9800 !important;\n}\n.chat-color-_ #content #author-name {\n  color: #ff5722 !important;\n}\n.AuthorFix #author-photo.yt-live-chat-text-message-renderer img.yt-img-shadow {\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 50%;\n  height: 1.5em;\n  width: 1.5em;\n  vertical-align: sub;\n}\n.AuthorFix #content {\n  display: inline-block;\n  vertical-align: middle;\n}\n.AuthorFix #timestamp.yt-live-chat-text-message-renderer {\n  font-size: 1em;\n  display: inline-block;\n  vertical-align: middle;\n}\n.showTimeStamp #timestamp.yt-live-chat-text-message-renderer {\n  display: inline-block;\n}\n.Emote img {\n  height: 1.75em;\n  align-self: center;\n  vertical-align: sub;\n  display: inline-block;\n  vertical-align: middle;\n}\nemote_div:hover {\n  background-size: 100%;\n  background-color: rgba(255,255,255,0.6);\n}\n.hideElement {\n  display: none !important;\n}\n.set-background-color-one {\n  background-color: #303030 !important;\n}\n.set-background-color-two {\n  background-color: transparent !important;\n}\n.setTwitchColors {\n  text-shadow: 0 0 1px #000, 0 0 2px #000 !important;\n  background: #18181b !important;\n  font-family: 'Roboto' !important;\n  font-size: 1.3rem !important;\n  line-height: 1.5em !important;\n  color: #fafafa !important;\n}\n.setTwitchColors #timestamp.yt-live-chat-text-message-renderer {\n  display: none;\n}\n.setTwitchColors yt-live-chat-author-chip[is-highlighted] #author-name.owner.yt-live-chat-author-chip,\n.setTwitchColors #author-name.owner.yt-live-chat-author-chip {\n  background-color: transparent;\n  color: #008000;\n}\n.setTwitchColors yt-live-chat-author-chip[is-highlighted] #author-name.yt-live-chat-author-chip {\n  background-color: transparent;\n}\n.emoteDivider {\n  width: 60vw;\n  border: 2px solid #d3d3d3;\n  border-radius: 5px;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.emotePopUpText {\n  margin-bottom: 2%;\n}\n.popup {\n  background-color: #202020;\n  position: absolute;\n  top: 15%;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  height: 70%;\n  width: 75%;\n  z-index: 999;\n  text-align: center;\n  border-radius: 5px;\n  border: #303030 1px solid;\n  font-size: 1em;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding: 1%;\n  padding-top: 2%;\n}\n.emoteButton {\n  background-color: rgba(255,255,255,0.1);\n  background-image: url(\"https://cdn.frankerfacez.com/emoticon/447885/4\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 80% 80%;\n  width: var(--yt-live-chat-32px-icon-button_-_width);\n  height: var(--yt-live-chat-32px-icon-button_-_height);\n  padding: var(--yt-live-chat-32px-icon-button_-_padding);\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n}\n.emoteButton:hover {\n  background-color: rgba(255,255,255,0.8);\n}\n.emoteButton:focus {\n  outline: 0;\n}\n.body_Fix {\n  height: 100% !important;\n  margin: 0 !important;\n  overflow: hidden !important;\n}\n.theater_wrapper_fix {\n  padding: 2px;\n  background-color: #1e1e1e;\n  position: fixed;\n  z-index: 900 !important;\n  height: 100vh !important;\n  width: 100vw !important;\n}\n.movie_player_fix {\n  height: calc(100vh - 12px);\n  top: 12px;\n  position: absolute;\n  width: calc(100vw - 25vw);\n}\n.movie_player_fix video {\n  left: 0 !important;\n  top: 0 !important;\n  height: 100vh !important;\n  width: calc(100vw - 25vw) !important;\n}\n.movie_player_fix .html5-video-player {\n  top: 0 !important;\n  width: calc(100vw - 25vw) !important;\n}\n.movie_player_fix .ytp-title {\n  color: rgba(255,255,255,0.8) !important;\n}\n.movie_player_fix .ytp-title-channel {\n  all: unset;\n}\n.movie_player_fix .ytp-gradient-top {\n  max-width: calc(100vw - 25vw) !important;\n}\n.movie_player_fix .ytp-chrome-bottom {\n  width: calc(100vw - 25vw) !important;\n  left: 0 !important;\n}\n.movie_player_fix .html5-endscreen {\n  width: calc(100vw - 25vw) !important;\n}\n.movie_player_fix .ytp-chapter-hover-container {\n  width: calc(100vw - 25vw) !important;\n}\n.movie_player_fix .ytp-gradient-bottom {\n  width: calc(100vw - 25vw) !important;\n}\n.movie_player_fix .ytp-iv-video-content {\n  width: calc(100vw - 25vw) !important;\n  left: 0 !important;\n}\n.movie_player_fix .ytp-player-content.ytp-iv-player-content {\n  width: calc(100vw - 25vw) !important;\n  left: -12px !important;\n  bottom: 10vh !important;\n}\n.movie_player_fix .ytp-upnext.ytp-player-content.ytp-upnext-autoplay-paused.ytp-suggestion-set {\n  width: calc(100vw - 25vw) !important;\n  left: 0 !important;\n}\n.movie_player_fix .ytp-bezel-text-hide {\n  width: calc(100vw - 25vw) !important;\n  left: 0 !important;\n}\n.movie_player_fix .ytp-spinner {\n  left: 40% !important;\n}\n.movie_player_fix .ytp-cued-thumbnail-overlay {\n  width: calc(100vw - 25vw) !important;\n}\n.info_contents_fix {\n  z-index: 901 !important;\n  height: 80px;\n  top: 0;\n  position: absolute !important;\n  width: calc(100vw - 25vw) !important;\n}\n.info_contents_fix ytd-video-primary-info-renderer {\n  padding: 1rem;\n  border-bottom: none;\n}\n.chat_frame_fix {\n  height: 100vh !important;\n  width: calc(calc(100vw - 75vw) - 1px) !important;\n  position: absolute !important;\n  right: 0px !important;\n  top: 0px !important;\n  border: 1px solid #4e4e4e;\n}\n", ""]);

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
        //this.scroller.addEventListener('mouseleave', this.start);
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
class Emote {
  constructor({ code, url }) {
    this.code = code;
    this.url = url;
  }

  get html() {
    return (`
      <span class="Emote">
        <img title="${this.code}" src="${this.url}" alt="${this.code}">
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
    
    let imageSrc = null;
    
    if(this.node.hasChildNodes && this.node.contains(this.node.querySelector('#author-photo'))){

      if(this.node.querySelector('#author-photo').querySelector('img').src != null){
        imageSrc = this.node.querySelector('#author-photo').querySelector('img').src;     

        const idRegexp = /\/-([A-Za-z-_\d])/;

        try {
          if(idRegexp.exec(imageSrc) !== null){
            const parsedSRC = idRegexp.exec(imageSrc)[1];
            this.node.classList.add(`chat-color-${parsedSRC}`);
          }         
        } catch (error) {
          // for some reason nodes from user img.src are getting weird link on occasion
          console.log(error);
          console.log(imageSrc);
        }
      }
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










let MAIN = null;
const theater_wrapper = document.createElement('theater_wrapper');
document.body.appendChild(theater_wrapper);
var alreadyTheater = false;

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
        if(document.getElementById('player-container') != null && document.getElementById('player-theater-container') != null){
          theaterMode();
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


function checkMode(){

  if(alreadyTheater){
    console.log('enterTheater');
    alreadyTheater = false;
    enterTheaterMode();
  }else{
    //  is reverse because at the time of check dom elements havent moved yet
    if(document.getElementById('player-theater-container').contains(document.getElementById('player-container'))){
      console.log('exitTheater');
      exitTheaterMode();
    }else{ 
      console.log('enterTheater');
      enterTheaterMode();
    }
  }
}

function enterTheaterMode() {

  const movie_player = document.getElementById('movie_player');
  const chat_frame = document.getElementById('chatframe');
  const info_frame = document.getElementById('info-contents');

  const masthead_container = document.getElementById('masthead-container');
  
  
  masthead_container.hidden = true;
  
  theater_wrapper.classList.add('theater_wrapper_fix');
  movie_player.classList.add('movie_player_fix');
  chat_frame.classList.add('chat_frame_fix');
  info_frame.classList.add('info_contents_fix');


  theater_wrapper.append(info_frame);
  theater_wrapper.append(movie_player);
  theater_wrapper.append(chat_frame);

  document.body.classList.add('body_Fix');


}// end enterTheaterMode

function exitTheaterMode(){

  const movie_player = document.getElementById('movie_player');
  const chat_frame = document.getElementById('chatframe');
  const info_frame = document.getElementById('info-contents');

  const movie_player_container = document.getElementById('player-container'); 
  const player_container_parent = document.getElementById('player-container-inner');

  const chat_frame_parent = document.getElementById('chat'); 
  const info_frame_before = document.getElementById('meta');  

  const masthead_container = document.getElementById('masthead-container');


  masthead_container.hidden = false;

  theater_wrapper.classList.remove('theater_wrapper_fix');
  movie_player.classList.remove('movie_player_fix');
  chat_frame.classList.remove('chat_frame_fix');
  info_frame.classList.remove('info_contents_fix');

  movie_player_container.prepend(movie_player);
  player_container_parent.prepend(movie_player_container);
  chat_frame_parent.prepend(chat_frame);
  info_frame_before.before(info_frame);

  document.body.classList.remove('body_Fix');
}

function theaterMode(){

  var theaterButton = document.querySelector('button.ytp-size-button.ytp-button');

  if(theaterButton){

    
    if(document.getElementById('player-theater-container').contains(document.getElementById('player-container'))){

      //  for when page loads first time - check is reversed after this
      alreadyTheater = true;
      checkMode();
    }

    //  add button
    theaterButton.addEventListener('click', checkMode, false);
  }
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZW50LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3N0eWx1cy9jb250ZW50LnN0eWwiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L0NoYXRTY3JvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L0NoYXRXYXRjaGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvRW1vdGVzL0Vtb3RlLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvRW1vdGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L1JvdXRlV2F0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvSWRlbnRpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9QZXJzaXN0ZW50U3luY1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bHVzL2NvbnRlbnQuc3R5bD8zYTBjIiwid2VicGFjazovLy8uL3V0aWxzL2Nocm9tZS9Mb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY2hyb21lL05vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY2hyb21lL1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY2hyb21lL1N5bmNTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Nocm9tZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NvbnRlbnQvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jaGF0LWNvbG9yLTAgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNTM2ZGZlICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTEgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTIgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDNhOWY0ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTMgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTQgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTUgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNGNhZjUwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTYgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjOGJjMzRhICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTcgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjY2RkYzM5ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTggI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLTkgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUEgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUIgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUMgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUQgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNjczYWI3ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUUgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNTM2ZGZlICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUYgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUcgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDNhOWY0ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUggI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUkgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUogI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNGNhZjUwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUsgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjOGJjMzRhICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLUwgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjY2RkYzM5ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLU0gI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLU4gI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLU8gI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmY5ODAwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVAgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVEgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVIgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVMgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVQgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNjczYWI3ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVUgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNTM2ZGZlICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVYgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVcgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDNhOWY0ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVggI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVkgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLVogI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNGNhZjUwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWEgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjOGJjMzRhICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWIgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjY2RkYzM5ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWMgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWQgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWUgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmY5ODAwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWYgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWcgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWggI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWkgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWogI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNjczYWI3ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWsgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNTM2ZGZlICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLWwgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLW0gI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDNhOWY0ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLW4gI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDBiY2Q0ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLW8gI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjMDA5Njg4ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXAgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNGNhZjUwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXEgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjOGJjMzRhICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXIgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjY2RkYzM5ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXMgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmZlYjNiICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXQgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXUgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmY5ODAwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXYgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXcgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXggI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZTkxZTYzICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXkgI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjOWMyN2IwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLXogI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjNjczYWI3ICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLS0gI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmY5ODAwICFpbXBvcnRhbnQ7XFxufVxcbi5jaGF0LWNvbG9yLV8gI2NvbnRlbnQgI2F1dGhvci1uYW1lIHtcXG4gIGNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XFxufVxcbi5BdXRob3JGaXggI2F1dGhvci1waG90by55dC1saXZlLWNoYXQtdGV4dC1tZXNzYWdlLXJlbmRlcmVyIGltZy55dC1pbWctc2hhZG93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgd2lkdGg6IDEuNWVtO1xcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcXG59XFxuLkF1dGhvckZpeCAjY29udGVudCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uQXV0aG9yRml4ICN0aW1lc3RhbXAueXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlciB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5zaG93VGltZVN0YW1wICN0aW1lc3RhbXAueXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5FbW90ZSBpbWcge1xcbiAgaGVpZ2h0OiAxLjc1ZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuZW1vdGVfZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcXG59XFxuLmhpZGVFbGVtZW50IHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLnNldC1iYWNrZ3JvdW5kLWNvbG9yLW9uZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwICFpbXBvcnRhbnQ7XFxufVxcbi5zZXQtYmFja2dyb3VuZC1jb2xvci10d28ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG59XFxuLnNldFR3aXRjaENvbG9ycyB7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDFweCAjMDAwLCAwIDAgMnB4ICMwMDAgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6ICMxODE4MWIgIWltcG9ydGFudDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbSAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcXG59XFxuLnNldFR3aXRjaENvbG9ycyAjdGltZXN0YW1wLnl0LWxpdmUtY2hhdC10ZXh0LW1lc3NhZ2UtcmVuZGVyZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNldFR3aXRjaENvbG9ycyB5dC1saXZlLWNoYXQtYXV0aG9yLWNoaXBbaXMtaGlnaGxpZ2h0ZWRdICNhdXRob3ItbmFtZS5vd25lci55dC1saXZlLWNoYXQtYXV0aG9yLWNoaXAsXFxuLnNldFR3aXRjaENvbG9ycyAjYXV0aG9yLW5hbWUub3duZXIueXQtbGl2ZS1jaGF0LWF1dGhvci1jaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICMwMDgwMDA7XFxufVxcbi5zZXRUd2l0Y2hDb2xvcnMgeXQtbGl2ZS1jaGF0LWF1dGhvci1jaGlwW2lzLWhpZ2hsaWdodGVkXSAjYXV0aG9yLW5hbWUueXQtbGl2ZS1jaGF0LWF1dGhvci1jaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uZW1vdGVEaXZpZGVyIHtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2QzZDNkMztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi10b3A6IDIlO1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLmVtb3RlUG9wVXBUZXh0IHtcXG4gIG1hcmdpbi1ib3R0b206IDIlO1xcbn1cXG4ucG9wdXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTUlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBoZWlnaHQ6IDcwJTtcXG4gIHdpZHRoOiA3NSU7XFxuICB6LWluZGV4OiA5OTk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6ICMzMDMwMzAgMXB4IHNvbGlkO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcGFkZGluZzogMSU7XFxuICBwYWRkaW5nLXRvcDogMiU7XFxufVxcbi5lbW90ZUJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vY2RuLmZyYW5rZXJmYWNlei5jb20vZW1vdGljb24vNDQ3ODg1LzRcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDgwJSA4MCU7XFxuICB3aWR0aDogdmFyKC0teXQtbGl2ZS1jaGF0LTMycHgtaWNvbi1idXR0b25fLV93aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLXl0LWxpdmUtY2hhdC0zMnB4LWljb24tYnV0dG9uXy1faGVpZ2h0KTtcXG4gIHBhZGRpbmc6IHZhcigtLXl0LWxpdmUtY2hhdC0zMnB4LWljb24tYnV0dG9uXy1fcGFkZGluZyk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZW1vdGVCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xcbn1cXG4uZW1vdGVCdXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmJvZHlfRml4IHtcXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XFxufVxcbi50aGVhdGVyX3dyYXBwZXJfZml4IHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5MDAgIWltcG9ydGFudDtcXG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcXG4gIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xcbn1cXG4ubW92aWVfcGxheWVyX2ZpeCB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMnB4KTtcXG4gIHRvcDogMTJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjV2dyk7XFxufVxcbi5tb3ZpZV9wbGF5ZXJfZml4IHZpZGVvIHtcXG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcXG4gIHRvcDogMCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAyNXZ3KSAhaW1wb3J0YW50O1xcbn1cXG4ubW92aWVfcGxheWVyX2ZpeCAuaHRtbDUtdmlkZW8tcGxheWVyIHtcXG4gIHRvcDogMCAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAyNXZ3KSAhaW1wb3J0YW50O1xcbn1cXG4ubW92aWVfcGxheWVyX2ZpeCAueXRwLXRpdGxlIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCkgIWltcG9ydGFudDtcXG59XFxuLm1vdmllX3BsYXllcl9maXggLnl0cC10aXRsZS1jaGFubmVsIHtcXG4gIGFsbDogdW5zZXQ7XFxufVxcbi5tb3ZpZV9wbGF5ZXJfZml4IC55dHAtZ3JhZGllbnQtdG9wIHtcXG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDI1dncpICFpbXBvcnRhbnQ7XFxufVxcbi5tb3ZpZV9wbGF5ZXJfZml4IC55dHAtY2hyb21lLWJvdHRvbSB7XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDI1dncpICFpbXBvcnRhbnQ7XFxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5tb3ZpZV9wbGF5ZXJfZml4IC5odG1sNS1lbmRzY3JlZW4ge1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAyNXZ3KSAhaW1wb3J0YW50O1xcbn1cXG4ubW92aWVfcGxheWVyX2ZpeCAueXRwLWNoYXB0ZXItaG92ZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjV2dykgIWltcG9ydGFudDtcXG59XFxuLm1vdmllX3BsYXllcl9maXggLnl0cC1ncmFkaWVudC1ib3R0b20ge1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAyNXZ3KSAhaW1wb3J0YW50O1xcbn1cXG4ubW92aWVfcGxheWVyX2ZpeCAueXRwLWl2LXZpZGVvLWNvbnRlbnQge1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAyNXZ3KSAhaW1wb3J0YW50O1xcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xcbn1cXG4ubW92aWVfcGxheWVyX2ZpeCAueXRwLXBsYXllci1jb250ZW50Lnl0cC1pdi1wbGF5ZXItY29udGVudCB7XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDI1dncpICFpbXBvcnRhbnQ7XFxuICBsZWZ0OiAtMTJweCAhaW1wb3J0YW50O1xcbiAgYm90dG9tOiAxMHZoICFpbXBvcnRhbnQ7XFxufVxcbi5tb3ZpZV9wbGF5ZXJfZml4IC55dHAtdXBuZXh0Lnl0cC1wbGF5ZXItY29udGVudC55dHAtdXBuZXh0LWF1dG9wbGF5LXBhdXNlZC55dHAtc3VnZ2VzdGlvbi1zZXQge1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAyNXZ3KSAhaW1wb3J0YW50O1xcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xcbn1cXG4ubW92aWVfcGxheWVyX2ZpeCAueXRwLWJlemVsLXRleHQtaGlkZSB7XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDI1dncpICFpbXBvcnRhbnQ7XFxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5tb3ZpZV9wbGF5ZXJfZml4IC55dHAtc3Bpbm5lciB7XFxuICBsZWZ0OiA0MCUgIWltcG9ydGFudDtcXG59XFxuLm1vdmllX3BsYXllcl9maXggLnl0cC1jdWVkLXRodW1ibmFpbC1vdmVybGF5IHtcXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjV2dykgIWltcG9ydGFudDtcXG59XFxuLmluZm9fY29udGVudHNfZml4IHtcXG4gIHotaW5kZXg6IDkwMSAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgdG9wOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDI1dncpICFpbXBvcnRhbnQ7XFxufVxcbi5pbmZvX2NvbnRlbnRzX2ZpeCB5dGQtdmlkZW8tcHJpbWFyeS1pbmZvLXJlbmRlcmVyIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4uY2hhdF9mcmFtZV9maXgge1xcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IGNhbGMoY2FsYygxMDB2dyAtIDc1dncpIC0gMXB4KSAhaW1wb3J0YW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxuICByaWdodDogMHB4ICFpbXBvcnRhbnQ7XFxuICB0b3A6IDBweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzRlNGU0ZTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLm9uY2UgPSBvbmNlO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25jZShlbWl0dGVyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgIGlmIChlcnJvckxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuICAgIHZhciBlcnJvckxpc3RlbmVyO1xuXG4gICAgLy8gQWRkaW5nIGFuIGVycm9yIGxpc3RlbmVyIGlzIG5vdCBvcHRpb25hbCBiZWNhdXNlXG4gICAgLy8gaWYgYW4gZXJyb3IgaXMgdGhyb3duIG9uIGFuIGV2ZW50IGVtaXR0ZXIgd2UgY2Fubm90XG4gICAgLy8gZ3VhcmFudGVlIHRoYXQgdGhlIGFjdHVhbCBldmVudCB3ZSBhcmUgd2FpdGluZyB3aWxsXG4gICAgLy8gYmUgZmlyZWQuIFRoZSByZXN1bHQgY291bGQgYmUgYSBzaWxlbnQgd2F5IHRvIGNyZWF0ZVxuICAgIC8vIG1lbW9yeSBvciBmaWxlIGRlc2NyaXB0b3IgbGVha3MsIHdoaWNoIGlzIHNvbWV0aGluZ1xuICAgIC8vIHdlIHNob3VsZCBhdm9pZC5cbiAgICBpZiAobmFtZSAhPT0gJ2Vycm9yJykge1xuICAgICAgZXJyb3JMaXN0ZW5lciA9IGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIobmFtZSwgZXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfTtcblxuICAgICAgZW1pdHRlci5vbmNlKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIGVtaXR0ZXIub25jZShuYW1lLCBldmVudExpc3RlbmVyKTtcbiAgfSk7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiY2xhc3MgQ2hhdFNjcm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zY3JvbGwgPSB0aGlzLnNjcm9sbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdG9wID0gdGhpcy5zdG9wLmJpbmQodGhpcyk7IFxuICAgIFxuICAgIHRoaXMuc2Nyb2xsZXIgPSBudWxsO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBudWxsO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmdldFNjcm9sbGVyKClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgLy90aGlzLnNjcm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLnN0YXJ0KTtcbiAgICAgICAgdGhpcy5zY3JvbGxlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5zdG9wKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgfSk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICB0aGlzLnNjcm9sbCxcbiAgICAgIDI1MFxuICAgICk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gIH1cbiAgXG4gIHNjcm9sbCgpIHtcbiAgICB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvcCA9IDk5OTk7XG4gIH1cblxuICBnZXRTY3JvbGxlcigpIHtcbiAgICBjb25zdCBjaGVja0ZvclNjcm9sbGVyID0gKHJlcywgcmVqKSA9PiB7XG4gICAgICB0aGlzLnNjcm9sbGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW0tc2Nyb2xsZXInKTtcbiAgICAgIGlmKHRoaXMuc2Nyb2xsZXIgIT09IG51bGwpIHtcbiAgICAgICAgcmVzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KGNoZWNrRm9yU2Nyb2xsZXIuYmluZCh0aGlzLCByZXMsIHJlaiksIDI1MCk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoY2hlY2tGb3JTY3JvbGxlcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdFNjcm9sbGVyOyIsImltcG9ydCBFbW90ZXMgZnJvbSAnLi9FbW90ZXMnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9NZXNzYWdlJztcbmltcG9ydCBQZXJzaXN0ZW50U3luY1N0b3JhZ2UgZnJvbSAnc3JjL2hlbHBlcnMvUGVyc2lzdGVudFN5bmNTdG9yYWdlJztcblxuXG5cbmNsYXNzIENoYXRXYXRjaGVyIHtcblxuICBcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLndhdGNoQ2hhdCA9IHRoaXMud2F0Y2hDaGF0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fY2hhdENvbnRhaW5lciA9IG51bGw7XG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsO1xuICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBpbml0KCkge1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgdGhpcy5nZXRDaGF0Q29udGFpbmVyKCkudGhlbihFbW90ZXMuaW5pdCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkRW1vdGVQb3B1cCgpO1xuICAgICAgICB0aGlzLndhdGNoQ2hhdCgpO1xuICAgICAgICB0aGlzLnBhcnNlUHJlbG9hZGVkTWVzc2FnZXMoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgXG4gIGdldENoYXRDb250YWluZXIoKSB7XG4gICAgLy8gUGFyZW50IG9mIGFjdHVhbCBjaGF0IChjaGlsZHJlbiBhcmUgbWVzc2FnZXMpXG4gICAgY29uc3QgY2hlY2tGb3JDb250YWluZXIgPSAocmVzLCByZWopID0+IHtcbiAgICAgIHRoaXMuX2NoYXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbXMuc3R5bGUtc2NvcGUueXQtbGl2ZS1jaGF0LWl0ZW0tbGlzdC1yZW5kZXJlcicpO1xuICAgICAgaWYodGhpcy5fY2hhdENvbnRhaW5lciAhPT0gbnVsbCkge1xuICAgICAgICByZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoY2hlY2tGb3JDb250YWluZXIuYmluZCh0aGlzLCByZXMsIHJlaiksIDI1MCk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoY2hlY2tGb3JDb250YWluZXIpO1xuICB9XG5cbiAgcGFyc2VQcmVsb2FkZWRNZXNzYWdlcygpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuX2NoYXRDb250YWluZXIuY2hpbGRyZW47XG5cbiAgICBmb3IobGV0IGkgPSBtZXNzYWdlcy5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBtZXNzYWdlc1tpXTtcbiAgICAgIGlmKHRoaXMuaXNNZXNzYWdlTm9kZShub2RlKSkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IE1lc3NhZ2Uobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgd2F0Y2hDaGF0KCkge1xuICAgIGNvbnNvbGUubG9nKCdDaGF0IG9ic2VydmVyIHN0YXJ0ZWQnKTtcbiAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB7XG5cbiAgICAgIG11dGF0aW9ucy5mb3JFYWNoKG11dGF0aW9uID0+IHtcblxuICAgICAgICBcblxuICAgICAgICBjb25zdCB7IGFkZGVkTm9kZXMsIHJlbW92ZWROb2RlcyB9ID0gbXV0YXRpb247XG4gICAgICAgIFxuICAgICAgICAvLyBBZGRlZCBub2Rlc1xuICAgICAgICBpZih0eXBlb2YgYWRkZWROb2RlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgYWRkZWROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yKGxldCBpID0gMCwgbGVuZ3RoID0gYWRkZWROb2Rlcy5sZW5ndGgtMTsgaSA8PSBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGFkZGVkTm9kZXNbaV07XG4gICAgICAgICAgICBpZih0aGlzLmlzTWVzc2FnZU5vZGUobm9kZSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5vbk5ld01lc3NhZ2Uobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlZCBub2Rlc1xuICAgICAgICBpZih0eXBlb2YgcmVtb3ZlZE5vZGVzICE9PSAndW5kZWZpbmVkJyAmJiByZW1vdmVkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvcihsZXQgaSA9IDAsIGxlbmd0aCA9IHJlbW92ZWROb2Rlcy5sZW5ndGgtMTsgaSA8PSBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHJlbW92ZWROb2Rlc1tpXTtcbiAgICAgICAgICAgIGlmKHRoaXMuaXNNZXNzYWdlTm9kZShub2RlKSAmJiB0aGlzLmlzT2JzZXJ2ZWRNZXNzYWdlKG5vZGUpKSB7XG4gICAgICAgICAgICAgIHRoaXMub25PYnNlcnZlZE1lc3NhZ2VSZW1vdmVkKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2NoYXRDb250YWluZXIsIHtcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgY2hhcmFjdGVyRGF0YTogZmFsc2UsXG4gICAgICBzdWJ0cmVlOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIFxuICBvbk5ld01lc3NhZ2Uobm9kZSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShub2RlKTtcblxuICAgIC8vIERvbid0IHN0b3JlIG1lc3NhZ2UgaWYgaGFzIDAgZW1vdGVzXG4gICAgaWYobWVzc2FnZS5oYXNFbW90ZXMpIHtcbiAgICAgIHRoaXMubWVzc2FnZXMuc2V0KG1lc3NhZ2UuaWQsIG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIG9uT2JzZXJ2ZWRNZXNzYWdlUmVtb3ZlZChub2RlKSB7XG4gICAgY29uc3QgbWVzc2FnZUlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ21lc3NhZ2UtaWQnKTtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5tZXNzYWdlcy5nZXQobWVzc2FnZUlkKTtcbiAgICBpZihtZXNzYWdlICE9IHVuZGVmaW5lZCl7XG4gICAgICBtZXNzYWdlLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLm1lc3NhZ2VzLmRlbGV0ZShtZXNzYWdlSWQpO1xuICB9XG5cbiAgaXNNZXNzYWdlTm9kZShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudGFnTmFtZSA9PT0gJ1lULUxJVkUtQ0hBVC1URVhULU1FU1NBR0UtUkVOREVSRVInO1xuICB9XG5cbiAgaXNPYnNlcnZlZE1lc3NhZ2Uobm9kZSkge1xuICAgIHJldHVybiBub2RlLmdldEF0dHJpYnV0ZSgnbWVzc2FnZS1pZCcpICE9PSBudWxsO1xuICB9XG5cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgYWRkRW1vdGVQb3B1cCgpe1xuXG4gICAgLy8gIGNyZWF0ZSBlbW90ZSBidXR0b25cbiAgICBjb25zdCBlbW90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVtb3RlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Vtb3RlQnV0dG9uJyk7XG4gICAgZW1vdGVCdXR0b24udGV4dENvbnRlbnQgPSAnJztcblxuICAgIC8vICBhcHBlbmQgYnV0dG9uIHRvIGFjdGlvbi1idXR0b25zIGxpc3RcbiAgICBjb25zdCBjaGF0QnV0dG9uU2VsZWN0aW9uTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3Rpb24tYnV0dG9ucycpO1xuICAgIGNoYXRCdXR0b25TZWxlY3Rpb25MaXN0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVtb3RlQnV0dG9uLCBjaGF0QnV0dG9uU2VsZWN0aW9uTGlzdCk7XG5cbiAgICAvLyBjcmVhdGUgcG9wdXBEaXZcbiAgICBjb25zdCBwb3BVcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcFVwRGl2LmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG4gICAgcG9wVXBEaXYuY2xhc3NMaXN0LmFkZCgnaGlkZUVsZW1lbnQnKTtcblxuICAgIGZ1bmN0aW9uIGVtb3RlQXBwZW5kKGtleXNJVGVyKXtcblxuICAgICAgLy8gIGNyZWF0ZSBkaXZpZGVyXG4gICAgICB2YXIgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgICAgaHIuY2xhc3NMaXN0LmFkZCgnZW1vdGVEaXZpZGVyJyk7XG4gICAgICBcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBrZXlzSVRlci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGtleXNJVGVyW2luZGV4XTtcbiAgICAgICAgdmFyIGVtb3RlX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Vtb3RlX2RpdicpOyBcbiAgICAgICAgZW1vdGVfZGl2LmlubmVySFRNTCA9IChFbW90ZXMuZ2V0KGVsZW1lbnQpLmh0bWwpO1xuICAgICAgICBwb3BVcERpdi5hcHBlbmRDaGlsZChlbW90ZV9kaXYpO1xuICAgICAgfVxuICAgICAgcG9wVXBEaXYuYXBwZW5kQ2hpbGQoaHIpO1xuICAgIH1cblxuICAgIC8vICBjcmVhdGUgdGV4dFxuICAgIHZhciBidHR2X3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGJ0dHZfdGV4dC50ZXh0Q29udGVudCA9IFwiQlRUVlwiO1xuICAgIGJ0dHZfdGV4dC5jbGFzc0xpc3QuYWRkKCdlbW90ZVBvcFVwVGV4dCcpO1xuICAgIHZhciBmcmFua2VyX3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGZyYW5rZXJfdGV4dC50ZXh0Q29udGVudCA9IFwiRnJhbmtlckZhY2V6XCI7XG4gICAgZnJhbmtlcl90ZXh0LmNsYXNzTGlzdC5hZGQoJ2Vtb3RlUG9wVXBUZXh0Jyk7XG4gICAgdmFyIHR3aXRjaF90ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0d2l0Y2hfdGV4dC50ZXh0Q29udGVudCA9IFwiVHdpdGNoXCI7XG4gICAgdHdpdGNoX3RleHQuY2xhc3NMaXN0LmFkZCgnZW1vdGVQb3BVcFRleHQnKTtcbiAgICBcbiAgICBcblxuICAgIC8vICBuZWVkIGl0dHIgdG8gc2VhcmNoIGVhY2ggZGljdCBhbmQgYXBwZW5kIHRvIGRvbVxuICAgIGxldCBrZXlzSVRlciA9IG51bGw7XG5cbiAgICBrZXlzSVRlciA9IEFycmF5LmZyb20oRW1vdGVzLnNwZWNpYWxFbW90ZXNEaWN0aW9uYXJ5LmtleXMoKSk7XG4gICAgZW1vdGVBcHBlbmQoa2V5c0lUZXIpO1xuXG4gICAgaWYoUGVyc2lzdGVudFN5bmNTdG9yYWdlLmRhdGEub3B0aW9ucy5lbmFibGVCVFRWRW1vdGVzKXtcbiAgICAgIHBvcFVwRGl2LmFwcGVuZENoaWxkKGJ0dHZfdGV4dCk7XG4gICAgICBrZXlzSVRlciA9IEFycmF5LmZyb20oRW1vdGVzLmJ0dHZfRGljdGlvbmFyeS5rZXlzKCkpO1xuICAgICAgZW1vdGVBcHBlbmQoa2V5c0lUZXIpO1xuICAgIH1cblxuICAgIGlmKFBlcnNpc3RlbnRTeW5jU3RvcmFnZS5kYXRhLm9wdGlvbnMuZW5hYmxlRnJhbmtlckVtb3Rlcyl7XG4gICAgICBwb3BVcERpdi5hcHBlbmRDaGlsZChmcmFua2VyX3RleHQpO1xuICAgICAga2V5c0lUZXIgPSBBcnJheS5mcm9tKEVtb3Rlcy5mcmFua2VyX0RpY3Rpb25hcnkua2V5cygpKTtcbiAgICAgIGVtb3RlQXBwZW5kKGtleXNJVGVyKTtcbiAgICB9XG5cbiAgICBpZihQZXJzaXN0ZW50U3luY1N0b3JhZ2UuZGF0YS5vcHRpb25zLmVuYWJsZVR3aXRjaEVtb3Rlcyl7XG4gICAgICBwb3BVcERpdi5hcHBlbmRDaGlsZCh0d2l0Y2hfdGV4dCk7XG4gICAgICBrZXlzSVRlciA9IEFycmF5LmZyb20oRW1vdGVzLnR3aXRjaF9EaWN0aW9uYXJ5LmtleXMoKSk7XG4gICAgICBlbW90ZUFwcGVuZChrZXlzSVRlcik7XG4gICAgfVxuXG4gXG5cbiAgICAvLyAgYWRkIGRpdiB0byBkb2NcbiAgICBjaGF0QnV0dG9uU2VsZWN0aW9uTGlzdC5hcHBlbmRDaGlsZChwb3BVcERpdik7XG5cbiAgICAvLyBsaXN0ZW4gZm9yIHBvcHVwIGJ1dHRvblxuICAgIGVtb3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgIHBvcFVwRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGVFbGVtZW50Jyk7XG4gICAgICBjb25zb2xlLmxvZygnZW1vdGUgcG9wdXAgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICB9KTtcblxuICAgIC8vICBnZXQgaW5wdXQgYXJlYVxuICAgIHZhciBpbnB1dEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQueXQtbGl2ZS1jaGF0LXRleHQtaW5wdXQtZmllbGQtcmVuZGVyZXInKTtcbiAgICB2YXIgaW5wdXRBcmVhTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFiZWwueXQtbGl2ZS1jaGF0LXRleHQtaW5wdXQtZmllbGQtcmVuZGVyZXInKTtcblxuICAgIC8vICBhZGQgYWx0IHRhZyB0byBjaGF0XG4gICAgZnVuY3Rpb24gZW1vdGVUb1RleHRBcmVhKCl7XG4gICAgICBpbnB1dEFyZWEudGV4dENvbnRlbnQgKz0gdGhpcy5hbHQgKyBcIiBcIjtcbiAgICAgIGlucHV0QXJlYS5mb2N1cygpO1xuICAgICAgaW5wdXRBcmVhTGFiZWwudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgcG9wVXBEaXYuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZUVsZW1lbnQnKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWx0ICsgXCIgZW1vdGUgYnV0dG9uIHNlbGVjdGVkXCIpO1xuICAgIH1cblxuICAgIC8vICBsaXN0ZW5lciBidXR0b24gZm9yIGVtb3Rlc1xuICAgIHZhciBFTU9USUNPTlMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IEVNT1RJQ09OUy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBFTU9USUNPTlNbaW5kZXhdO1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVtb3RlVG9UZXh0QXJlYSwgZmFsc2UpOyBcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygoa2V5c0lUZXIubGVuZ3RoKzEpICsgXCIgRW1vdGVzIEFkZGVkXCIpO1xuICB9Ly8gZW5kIGFkZEVtb3RlUG9wdXBcblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbn0vLyBlbmQgY2hhdCB3YXRjaGVyXG5cbmV4cG9ydCBkZWZhdWx0IENoYXRXYXRjaGVyO1xuIiwiY2xhc3MgRW1vdGUge1xuICBjb25zdHJ1Y3Rvcih7IGNvZGUsIHVybCB9KSB7XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIGdldCBodG1sKCkge1xuICAgIHJldHVybiAoYFxuICAgICAgPHNwYW4gY2xhc3M9XCJFbW90ZVwiPlxuICAgICAgICA8aW1nIHRpdGxlPVwiJHt0aGlzLmNvZGV9XCIgc3JjPVwiJHt0aGlzLnVybH1cIiBhbHQ9XCIke3RoaXMuY29kZX1cIj5cbiAgICAgIDwvc3Bhbj5cbiAgICBgKS50cmltKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1vdGU7IiwiaW1wb3J0IFBlcnNpc3RlbnRTeW5jU3RvcmFnZSBmcm9tICdzcmMvaGVscGVycy9QZXJzaXN0ZW50U3luY1N0b3JhZ2UnO1xuaW1wb3J0IEVtb3RlIGZyb20gJy4vRW1vdGUnO1xuXG5cbmNsYXNzIEVtb3RlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGljdGlvbmFyeSA9IG5ldyBNYXAoKTtcblxuICAgIC8vICBpZGVudGlmaWNhdGlvbiBmb3IgcG9wdXBcbiAgICB0aGlzLnR3aXRjaF9EaWN0aW9uYXJ5ID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuYnR0dl9EaWN0aW9uYXJ5ID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuZnJhbmtlcl9EaWN0aW9uYXJ5ID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuc3BlY2lhbEVtb3Rlc0RpY3Rpb25hcnkgPSBuZXcgTWFwKCk7XG5cblxuICAgIHRoaXMuaW5pdCA9IHRoaXMuaW5pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgKFBlcnNpc3RlbnRTeW5jU3RvcmFnZS5kYXRhLm9wdGlvbnMuZW5hYmxlQlRUVkVtb3RlcyAmJiB0aGlzLmxvYWRCVFRWRW1vdGUoKSksXG4gICAgICAoUGVyc2lzdGVudFN5bmNTdG9yYWdlLmRhdGEub3B0aW9ucy5lbmFibGVGcmFua2VyRW1vdGVzICYmIHRoaXMubG9hZEZyYW5rZXJFbW90ZXMoKSksXG4gICAgICAoUGVyc2lzdGVudFN5bmNTdG9yYWdlLmRhdGEub3B0aW9ucy5lbmFibGVUd2l0Y2hFbW90ZXMgJiYgdGhpcy5sb2FkVHdpdGNoRW1vdGVzKCkpLFxuICAgICAgKHRoaXMuc3BlY2lhbEVtb3RlcygpKVxuICAgIF0pO1xuICB9XG4gIFxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZGljdGlvbmFyeS5nZXQoa2V5KTtcbiAgfVxuXG4gIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGljdGlvbmFyeS5zZXQoa2V5LCBuZXcgRW1vdGUodmFsdWUpKTtcbiAgfVxuXG4gIGhhcyhrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5kaWN0aW9uYXJ5LmhhcyhrZXkpO1xuICB9XG5cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBiYnR2X1RvRGljdChqc29uKXtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwganNvbi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIFxuICAgICAgY29uc3QgeyBlbW90ZSwgdG90YWwgfSA9IGpzb25baW5kZXhdO1xuXG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9jZG4uYmV0dGVydHR2Lm5ldC9lbW90ZS8ke2Vtb3RlLmlkfS8zeGA7XG5cbiAgICAgIHRoaXMuZGljdGlvbmFyeS5zZXQoZW1vdGUuY29kZSwgbmV3IEVtb3RlKHsgY29kZTogZW1vdGUuY29kZSwgdXJsIH0pKTtcbiAgICAgIHRoaXMuYnR0dl9EaWN0aW9uYXJ5LnNldChlbW90ZS5jb2RlLCBuZXcgRW1vdGUoeyBjb2RlOiBlbW90ZS5jb2RlLCB1cmwgfSkpO1xuICAgIH1cbiAgfVxuXG4gIGJidHZfY2FjaGVkX1RvRGljdChqc29uKXtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwganNvbi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIFxuICAgICAgY29uc3QgeyBpZCwgY29kZSB9ID0ganNvbltpbmRleF07XG5cbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2Nkbi5iZXR0ZXJ0dHYubmV0L2Vtb3RlLyR7aWR9LzN4YDtcblxuICAgICAgdGhpcy5kaWN0aW9uYXJ5LnNldChjb2RlLCBuZXcgRW1vdGUoeyBjb2RlOiBjb2RlLCB1cmwgfSkpO1xuICAgICAgdGhpcy5idHR2X0RpY3Rpb25hcnkuc2V0KGNvZGUsIG5ldyBFbW90ZSh7IGNvZGU6IGNvZGUsIHVybCB9KSk7XG4gICAgfSBcbiAgfVxuXG4gIC8vIGxvYWRFbW90ZSBpcyB3aGVyZSB3ZSBjb2xsZWN0IGFuIG9iamVjdCBhcnJheSBvZiBlbW90ZXMgZnJvbSBidHR2IGFwaVxuICBhc3luYyBsb2FkQlRUVkVtb3RlKCl7XG5cbiAgICAvLyB0b3AgMTAwIGVtb3RlcyBxdWVyeSA9ID9saW1pdD0xMDAmb2Zmc2V0PTEwMFxuICAgIGNvbnN0IGJ0dHZfdG9wX2FwaV91cmwgPSBcImh0dHBzOi8vYXBpLmJldHRlcnR0di5uZXQvMy9lbW90ZXMvc2hhcmVkL3RvcD9saW1pdD0xMDBcIjtcbiAgICBjb25zdCBidHR2X3RvcF9hcGlfcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChidHR2X3RvcF9hcGlfdXJsKTtcbiAgICB2YXIgdG9wX0pzb24gPSBhd2FpdCBidHR2X3RvcF9hcGlfcmVzcG9uc2UuanNvbigpO1xuXG4gICAgLy8gdHJlZG5pbmcgZW1vdGVzXG4gICAgY29uc3QgYnR0dl90cmVuZGluZ19hcGlfdXJsID0gXCJodHRwczovL2FwaS5iZXR0ZXJ0dHYubmV0LzMvZW1vdGVzL3NoYXJlZC90cmVuZGluZz9saW1pdD0xMDBcIjtcbiAgICBjb25zdCBidHR2X3RyZW5kaW5nX2FwaV9yZXNwb25zZSA9IGF3YWl0IGZldGNoKGJ0dHZfdHJlbmRpbmdfYXBpX3VybCk7XG4gICAgdmFyIHRyZW5kaW5nX0pzb24gPSBhd2FpdCBidHR2X3RyZW5kaW5nX2FwaV9yZXNwb25zZS5qc29uKCk7XG5cbiAgICAvLyBnbG9iYWwgZW1vdGVzIGFyZSB3ZWlyZCwgc3RvcmVkIGluIHNlcGVyYXRlIGNhY2hlIGFuZCBkbyBub3QgZ2l2ZSBhbGwgdGhlIG5vcm1hbCBhdHRyaWJ1dGVzXG4gICAgY29uc3QgYnR0dl9nbG9iYWxfYXBpX3VybCA9IFwiaHR0cHM6Ly9hcGkuYmV0dGVydHR2Lm5ldC8zL2NhY2hlZC9lbW90ZXMvZ2xvYmFsXCI7XG4gICAgY29uc3QgYnR0dl9nbG9iYWxfYXBpX3Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYnR0dl9nbG9iYWxfYXBpX3VybCk7XG4gICAgdmFyIGdsb2JhbF9Kc29uID0gYXdhaXQgYnR0dl9nbG9iYWxfYXBpX3Jlc3BvbnNlLmpzb24oKTtcblxuICAgIHRoaXMuYmJ0dl9Ub0RpY3QodG9wX0pzb24pO1xuICAgIHRoaXMuYmJ0dl9Ub0RpY3QodHJlbmRpbmdfSnNvbik7XG4gICAgdGhpcy5iYnR2X2NhY2hlZF9Ub0RpY3QoZ2xvYmFsX0pzb24pO1xuICB9XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIGZyYW5rZXJUb0RpY3QoanNvbil7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGpzb24uZW1vdGljb25zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgXG4gICAgICBjb25zdCB7IG5hbWUsIHVybHMgfSA9IGpzb24uZW1vdGljb25zW2luZGV4XTtcblxuICAgICAgdmFyIHVybCA9IFwiXCI7XG4gICAgICBpZih1cmxzWzRdICE9IHVuZGVmaW5lZCl7XG4gICAgICAgIHVybCA9IHVybHNbNF07XG4gICAgICB9ZWxzZSBpZih1cmxzWzJdICE9IHVuZGVmaW5lZCl7XG4gICAgICAgIHVybCA9IHVybHNbMl07XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdXJsID0gdXJsc1sxXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kaWN0aW9uYXJ5LnNldChuYW1lLCBuZXcgRW1vdGUoeyBjb2RlOiBuYW1lLCB1cmwgfSkpO1xuICAgICAgdGhpcy5mcmFua2VyX0RpY3Rpb25hcnkuc2V0KG5hbWUsIG5ldyBFbW90ZSh7IGNvZGU6IG5hbWUsIHVybCB9KSk7XG4gICAgfVxuICB9XG5cbiAgLy8gbG9hZEZyYW5rZXJFbW90ZXMgaXMgd2hlcmUgd2UgY29sbGVjdCBhbiBvYmplY3QgYXJyYXkgb2YgZW1vdGVzIGZyb20gZnJhbmtlciBhcGlcbiAgYXN5bmMgbG9hZEZyYW5rZXJFbW90ZXMoKXtcblxuICAgIGNvbnN0IGZyYW5rZXJfdG9wX2FwaV91cmwgPSBcImh0dHBzOi8vYXBpLmZyYW5rZXJmYWNlei5jb20vdjEvZW1vdGljb25zP3NvcnQ9Y291bnQtZGVzY1wiO1xuICAgIFxuICAgIGNvbnN0IGZpcnN0NTBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGZyYW5rZXJfdG9wX2FwaV91cmwpO1xuICAgIHZhciBmaXJzdDUwanNvbiA9IGF3YWl0IGZpcnN0NTBSZXNwb25zZS5qc29uKCk7XG4gICAgdmFyIG5leHQ1MExpbmsgPSBmaXJzdDUwanNvbi5fbGlua3MubmV4dDtcbiAgICBjb25zdCBzZWNvbmQ1MFJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobmV4dDUwTGluayk7XG4gICAgdmFyIHNlY29uZDUwanNvbiA9IGF3YWl0IHNlY29uZDUwUmVzcG9uc2UuanNvbigpO1xuXG4gICAgLy8gVG9wIDEwMFxuICAgIHRoaXMuZnJhbmtlclRvRGljdChmaXJzdDUwanNvbik7XG4gICAgdGhpcy5mcmFua2VyVG9EaWN0KHNlY29uZDUwanNvbik7XG4gIH1cbiAgXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICB0d2l0Y2hUb0RpY3QoanNvbil7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGpzb24uZW1vdGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgXG4gICAgICBjb25zdCB7IGNvZGUsIGlkIH0gPSBqc29uLmVtb3Rlc1tpbmRleF07XG5cbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL3N0YXRpYy1jZG4uanR2bncubmV0L2Vtb3RpY29ucy92MS8ke2lkfS8zLjBgO1xuXG4gICAgICB0aGlzLmRpY3Rpb25hcnkuc2V0KGNvZGUsIG5ldyBFbW90ZSh7IGNvZGU6IGNvZGUsIHVybCB9KSk7XG4gICAgICB0aGlzLnR3aXRjaF9EaWN0aW9uYXJ5LnNldChjb2RlLCBuZXcgRW1vdGUoeyBjb2RlOiBjb2RlLCB1cmwgfSkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGxvYWRUd2l0Y2hFbW90ZXMgaXMgd2hlcmUgd2UgY29sbGVjdCBhbiBvYmplY3QgYXJyYXkgb2YgZW1vdGVzIGZyb20gdHdpdGNoIGFwaVxuICBhc3luYyBsb2FkVHdpdGNoRW1vdGVzKCl7XG5cbiAgICAvLyAgaHR0cHM6Ly9hcGkudHdpdGNoZW1vdGVzLmNvbS9hcGkvdjQvY2hhbm5lbHMvMCAtIHR3aXRjaCBnbG9iYWxzIC0gMjMyIGl0ZW1zXG4gICAgLy8gIGh0dHBzOi8vc3RhdGljLWNkbi5qdHZudy5uZXQvZW1vdGljb25zL3YxLzI1LzEuMCAtIGNkblxuXG4gICAgLy8gR2xvYmFsXG4gICAgY29uc3QgdHdpdGNoX2dsb2JhbF9hcGlfdXJsID0gXCJodHRwczovL2FwaS50d2l0Y2hlbW90ZXMuY29tL2FwaS92NC9jaGFubmVscy8wXCI7XG4gICAgY29uc3QgdHdpdGNoX2dsb2JhbF9hcGlfcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0d2l0Y2hfZ2xvYmFsX2FwaV91cmwpO1xuICAgIHZhciB0d2l0Y2hfZ2xvYmFsX0pzb24gPSBhd2FpdCB0d2l0Y2hfZ2xvYmFsX2FwaV9yZXNwb25zZS5qc29uKCk7XG5cbiAgICB0aGlzLnR3aXRjaFRvRGljdCh0d2l0Y2hfZ2xvYmFsX0pzb24pO1xuICB9XG5cbiAgLy8g4pmlXG4gIHNwZWNpYWxFbW90ZXMoKXtcblxuICAgIHZhciBlbW90ZU9iaiA9IHtcbiAgICAgIFwiZW1vdGVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiY29kZVwiOiBcIndvbXBXVEZcIiwgXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3N0YXRpYy1jZG4uanR2bncubmV0L2Vtb3RpY29ucy92MS8zMDE2NTMwNjYvMy4wXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiY29kZVwiOiBcIndvbXBJU2VlWW91XCIsIFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zdGF0aWMtY2RuLmp0dm53Lm5ldC9lbW90aWNvbnMvdjEvMzAxNTA2MTUzLzMuMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvZGVcIjogXCJ3b21wQ3J5XCIsIFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zdGF0aWMtY2RuLmp0dm53Lm5ldC9lbW90aWNvbnMvdjEvMzAxNTA2MTkzLzMuMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvZGVcIjogXCJCYWJ5Q29yb25hXCIsIFxuICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zdGF0aWMtY2RuLmp0dm53Lm5ldC9lbW90aWNvbnMvdjEvMzAxNjI5Mjk2LzMuMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvZGVcIjogXCJMRUxcIiwgXG4gICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3N0YXRpYy1jZG4uanR2bncubmV0L2Vtb3RpY29ucy92MS80MzEyNDkvMy4wXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZW1vdGVPYmouZW1vdGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVtb3RlT2JqW2luZGV4XTtcbiAgICAgIGNvbnN0IHsgY29kZSwgdXJsIH0gPSBlbW90ZU9iai5lbW90ZXNbaW5kZXhdO1xuICAgICAgdGhpcy5kaWN0aW9uYXJ5LnNldChjb2RlLCBuZXcgRW1vdGUoeyBjb2RlOiBjb2RlLCB1cmx9KSk7XG4gICAgICB0aGlzLnNwZWNpYWxFbW90ZXNEaWN0aW9uYXJ5LnNldChjb2RlLCBuZXcgRW1vdGUoeyBjb2RlOiBjb2RlLCB1cmx9KSk7XG4gICAgfSAgICBcbiAgfVxufS8vIEVuZCBFbW90ZXNcblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVtb3RlczsiLCJpbXBvcnQgRW1vdGVzIGZyb20gJy4vRW1vdGVzJztcbmltcG9ydCBQZXJzaXN0ZW50U3luY1N0b3JhZ2UgZnJvbSAnc3JjL2hlbHBlcnMvUGVyc2lzdGVudFN5bmNTdG9yYWdlJztcblxudmFyIGNvbG9yTnVtYmVySW5kZXggPSAwO1xuXG5jbGFzcyBNZXNzYWdlIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZU5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBtZXNzYWdlTm9kZTtcbiAgICB0aGlzLmlkID0gdGhpcy5ub2RlLmlkOyAvLyB0aGlzLmlkIHNob3VsZCBub3QgYmUgdXNlZCB0byByZWZlcmVuY2UgdGhlIG5vZGUsIGRvbSBpZCBjaGFuZ2VzIGR1ZSB0byBvcHRpbWlzaXRjIHVwZGF0ZXNcbiAgICB0aGlzLmhhc0Vtb3RlcyA9IG51bGw7XG4gICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgdGhpcy5wYXJzZWRUZXh0ID0gJyc7IC8vIFRoaXMgc2hvdWxkIGJlIGZpbmUgc2luY2UgeW91IGNhbid0IGVkaXQvY2hhbmdlIG1lc3NhZ2VzXG4gICAgXG4gICAgdGhpcy5wYXJzZVRleHQoKTtcblxuICAgIFxuXG4gICAgLy8gIFNldCBEZWZhdWx0c1xuICAgIHRoaXMuc2V0RGVmYXVsdFNlbGVjdGlvbnMoKTtcbiAgICBcblxuICAgIGlmKHRoaXMuaGFzRW1vdGVzKSB7XG4gICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdtZXNzYWdlLWlkJywgdGhpcy5pZCk7XG4gICAgICB0aGlzLnNldEh0bWwoKTtcbiAgICAgIHRoaXMud2F0Y2goKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdGV4dE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZScpO1xuICAgIHJldHVybiB7XG4gICAgICBub2RlLFxuICAgICAgdGV4dDogbm9kZS5pbm5lclRleHRcbiAgICB9O1xuICB9XG5cbiAgcGFyc2VUZXh0KCkge1xuICAgIGNvbnN0IHJhd1dvcmRzID0gdGhpcy50ZXh0Tm9kZS50ZXh0LnNwbGl0KCcgJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsZW5ndGggPSByYXdXb3Jkcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgd29yZCA9IHRoaXMucGFyc2VJbGxlZ2FsQ2hhcmN0ZXJzKHJhd1dvcmRzW2ldKTtcbiAgICAgIGNvbnN0IGVtb3RlID0gRW1vdGVzLmdldCh3b3JkKTtcblxuICAgICAgLy9jb25zb2xlLmxvZyhFbW90ZXMuZ2V0KHdvcmQpKTtcblxuICAgICAgXG4gICAgICBpZih0eXBlb2YgZW1vdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucGFyc2VkVGV4dCArPSB3b3JkICsgJyAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYXNFbW90ZXMgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhcnNlZFRleHQgKz0gZW1vdGUuaHRtbCArICcgJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3YXRjaCgpIHtcbiAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcbiAgICAgIGxldCBlbW90ZVJlbW92ZWQgPSBmYWxzZTtcblxuICAgICAgbXV0YXRpb25zLmZvckVhY2gobXV0YXRpb24gPT4ge1xuICAgICAgICBpZih0eXBlb2YgbXV0YXRpb24ucmVtb3ZlZE5vZGVzID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgICAgICBpZihtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoIDw9IDApIHJldHVybjsgLy8gVGhpcyBtdXN0IGJlIGFmdGVyIHVuZGVmaW5lZCBjaGVja1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDAsIGxlbmd0aCA9IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHJlbW92ZWROb2RlID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzW2ldO1xuICAgICAgICAgIGlmKHR5cGVvZiByZW1vdmVkTm9kZS5jbGFzc05hbWUgPT09ICdzdHJpbmcnICYmIC8vIGNoZWNrIGlmIGNsYXNzTmFtZSBleGlzdHMsIGlzICdTVkdBbmltYXRlZFN0cmluZycgd2hlbiB3aW5kb3cgcmVzaXplZCBhbmQgcmVtb3ZlZCBcbiAgICAgICAgICAgICAgfnJlbW92ZWROb2RlLmNsYXNzTmFtZS5pbmRleE9mKCdFbW90ZScpICE9PSAwKSB7XG4gICAgICAgICAgICBlbW90ZVJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuICAgICAgaWYoZW1vdGVSZW1vdmVkICYmIGRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5ub2RlKSkge1xuICAgICAgICB0aGlzLnNldEh0bWwoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLm5vZGUsIHtcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgY2hhcmFjdGVyRGF0YTogZmFsc2UsXG4gICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBzZXRIdG1sKCkge1xuICAgIHRoaXMudGV4dE5vZGUubm9kZS5pbm5lckhUTUwgPSB0aGlzLnBhcnNlZFRleHQ7XG4gIH1cblxuICBwYXJzZUlsbGVnYWxDaGFyY3RlcnMod29yZCkge1xuICAgIC8vIO+7vyA9PT0gJ1pFUk8gV0lEVEggTk8tQlJFQUsgU1BBQ0UnXG4gICAgcmV0dXJuIHdvcmQucmVwbGFjZSgn77u/JywgJycpLnRyaW0oKTtcbiAgfVxuICBcbiAgZGVzdHJveSgpIHtcbiAgICBpZih0aGlzLm9ic2VydmVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAvLyBTZXR0aW5nIE9wdGlvbnMgZm9yIEVhY2ggTWVzc2FnZVxuICBzZXREZWZhdWx0U2VsZWN0aW9ucygpe1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgLy8gIENoZWNrcyBmb3Iga2FwcGEgYW5kIHJlcGxhY2VzIGVtb2ppIGVsZW1lbnQgd2l0aCBrYXBwYVxuICAgIGlmKFBlcnNpc3RlbnRTeW5jU3RvcmFnZS5kYXRhLm9wdGlvbnMua2FwcGFGaXgpIHtcblxuICAgICAgdmFyIHN0dXBpZEthcHBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21lc3NhZ2UueXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlciAuZW1vamkueXQtbGl2ZS1jaGF0LXRleHQtbWVzc2FnZS1yZW5kZXJlcicpO1xuICAgICAgXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3R1cGlkS2FwcGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHN0dXBpZEVsZW1lbnQgPSBzdHVwaWRLYXBwYVtpbmRleF07XG4gICAgICAgIHZhciBzdHVwaWRUb29sVGlwID0gc3R1cGlkRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3NoYXJlZC10b29sdGlwLXRleHQnKTtcblxuICAgICAgICBpZihzdHVwaWRUb29sVGlwID09ICc6ZnVsbF9tb29uX2ZhY2U6Jyl7XG5cbiAgICAgICAgICBjb25zdCBuZXdTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgIG5ld1NwYW4uY2xhc3NMaXN0LmFkZCgnRW1vdGUnKTtcbiAgICAgICAgICBuZXdTcGFuLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cImh0dHBzOi8vc3RhdGljLWNkbi5qdHZudy5uZXQvZW1vdGljb25zL3YxLzI1LzMuMFwiIGFsdD1cImthcHBhXCI+JztcblxuICAgICAgICAgIHN0dXBpZEVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3U3Bhbiwgc3R1cGlkRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gICBcbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgLy9TZXQgQXV0aG9yIENvbG9yc1xuICAgIGlmKFBlcnNpc3RlbnRTeW5jU3RvcmFnZS5kYXRhLm9wdGlvbnMuc2V0QXV0aG9yQ29sb3IgJiYgdGhpcy5ub2RlLmdldEF0dHJpYnV0ZSgnYXV0aG9yLXR5cGUnKSAhPT0gJ293bmVyJykge1xuICAgICAgdGhpcy5zZXRBdXRob3JDb2xvcigpO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8vIEF1dGhvciBJY29uc1xuICAgIHZhciBhdXRob3JfcGhvdG8gPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcignI2F1dGhvci1waG90bycpO1xuXG4gICAgLy8gU2V0IEhpZGUgQXV0aG9yIEljb25zXG4gICAgaWYgKFBlcnNpc3RlbnRTeW5jU3RvcmFnZS5kYXRhLm9wdGlvbnMuaGlkZUF1dGhvckljb25zKSB7XG4gICAgICBhdXRob3JfcGhvdG8uY2xhc3NMaXN0LmFkZChcImhpZGVFbGVtZW50XCIpO1xuICAgIH1cblxuICAgIC8vIFRpbWVTdGFtcFxuICAgIHZhciB0aW1lc3RhbXAgPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcignI3RpbWVzdGFtcCcpO1xuXG4gICAgLy8gU2V0IFNob3cgVGltZVN0YW1wXG4gICAgaWYgKFBlcnNpc3RlbnRTeW5jU3RvcmFnZS5kYXRhLm9wdGlvbnMuc2hvd1RpbWVTdGFtcCkge1xuICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJzaG93VGltZVN0YW1wXCIpO1xuICAgIH1cblxuICAgIFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBcbiAgICAvLyBBdXRob3IgTmFtZSBAIGF1dG8gcGFzdGUgaW4gdGV4dCBhcmVhXG4gICAgdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJyNhdXRob3ItbmFtZScpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgdmFyIGlucHV0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC55dC1saXZlLWNoYXQtdGV4dC1pbnB1dC1maWVsZC1yZW5kZXJlcicpO1xuICAgICAgdmFyIGlucHV0QXJlYUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsLnl0LWxpdmUtY2hhdC10ZXh0LWlucHV0LWZpZWxkLXJlbmRlcmVyJyk7XG4gICAgICBpbnB1dEFyZWEuaW5uZXJUZXh0ID0gXCJAXCIgKyB0aGlzLmlubmVyVGV4dDtcbiAgICAgIGNvbnN0IHRleHRMZW5ndGggPSBpbnB1dEFyZWEuaW5uZXJUZXh0Lmxlbmd0aDtcbiAgICAgIGlucHV0QXJlYS5mb2N1cygpO1xuICAgICAgaW5wdXRBcmVhTGFiZWwuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICB9KTtcbiAgXG4gIFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgXG4gICAgLy8gU2V0IEZvbnQgU2l6ZVxuICAgIHZhciB0ZXh0U2l6ZVNsaWRlciA9IFBlcnNpc3RlbnRTeW5jU3RvcmFnZS5kYXRhLm9wdGlvbnMudGV4dFNpemVTbGlkZXI7ICBcblxuICAgIGlmIChQZXJzaXN0ZW50U3luY1N0b3JhZ2UuZGF0YS5vcHRpb25zLmFsbG93VGV4dFNsaWRlcikge1xuICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZm9udC1zaXplOicgKyB0ZXh0U2l6ZVNsaWRlciArICdweCcgKyAnIWltcG9ydGFudCcpO1xuICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJBdXRob3JGaXhcIik7XG4gICAgfVxuICBcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIFxuICAgIC8vICBTZXQgVHdpdGNoIFN0eWxpbmdcbiAgICBpZiAoUGVyc2lzdGVudFN5bmNTdG9yYWdlLmRhdGEub3B0aW9ucy5zZXRUd2l0Y2hDb2xvcnMpIHtcbiAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKFwic2V0VHdpdGNoQ29sb3JzXCIpO1xuICAgICAgYXV0aG9yX3Bob3RvLmNsYXNzTGlzdC5hZGQoXCJoaWRlRWxlbWVudFwiKTtcbiAgICB9XG4gICAgICBcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIFxuICAgIC8vICBTZXQgQWx0ZXJuYXRlIG1lc3NhZ2UgQ29sb3JzXG4gICAgaWYgKFBlcnNpc3RlbnRTeW5jU3RvcmFnZS5kYXRhLm9wdGlvbnMuYWx0ZXJuYXRlTGluZUNvbG9yKSB7XG4gICAgICB0aGlzLmFsdGVybmF0ZUxpbmVDb2xvcigpO1xuICAgIH0gICBcblxuICB9Ly8gZW5kIHNldERlZmF1bHRTZWxlY3Rpb25zXG5cbiAgc2V0QXV0aG9yQ29sb3IoKSB7XG4gICAgXG4gICAgbGV0IGltYWdlU3JjID0gbnVsbDtcbiAgICBcbiAgICBpZih0aGlzLm5vZGUuaGFzQ2hpbGROb2RlcyAmJiB0aGlzLm5vZGUuY29udGFpbnModGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJyNhdXRob3ItcGhvdG8nKSkpe1xuXG4gICAgICBpZih0aGlzLm5vZGUucXVlcnlTZWxlY3RvcignI2F1dGhvci1waG90bycpLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyAhPSBudWxsKXtcbiAgICAgICAgaW1hZ2VTcmMgPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcignI2F1dGhvci1waG90bycpLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYzsgICAgIFxuXG4gICAgICAgIGNvbnN0IGlkUmVnZXhwID0gL1xcLy0oW0EtWmEtei1fXFxkXSkvO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYoaWRSZWdleHAuZXhlYyhpbWFnZVNyYykgIT09IG51bGwpe1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkU1JDID0gaWRSZWdleHAuZXhlYyhpbWFnZVNyYylbMV07XG4gICAgICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChgY2hhdC1jb2xvci0ke3BhcnNlZFNSQ31gKTtcbiAgICAgICAgICB9ICAgICAgICAgXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIG5vZGVzIGZyb20gdXNlciBpbWcuc3JjIGFyZSBnZXR0aW5nIHdlaXJkIGxpbmsgb24gb2NjYXNpb25cbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgY29uc29sZS5sb2coaW1hZ2VTcmMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAgICBcbiAgfVxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgXG4gIC8vICBjaGFuZ2VzIGNvbG9yIGV2ZXJ5IGxpbmVcbiAgYWx0ZXJuYXRlTGluZUNvbG9yKCl7XG5cbiAgICAgIGlmKGNvbG9yTnVtYmVySW5kZXggJSAyID09IDApe1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcInNldC1iYWNrZ3JvdW5kLWNvbG9yLW9uZVwiKTtcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcInNldC1iYWNrZ3JvdW5kLWNvbG9yLXR3b1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbG9yTnVtYmVySW5kZXgrKztcbiAgfVxuICBcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIC8vICByZW1vdmVzIGNvbG9yIGF0dHJcbiAgcmVtb3ZlbHRlcm5hdGVMaW5lQ29sb3IoKXtcbiAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNldC1iYWNrZ3JvdW5kLWNvbG9yLW9uZVwiKTtcbiAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LnJlbW92ZShcInNldC1iYWNrZ3JvdW5kLWNvbG9yLXR3b1wiKTtcbiAgfVxuXG59Ly8gZW5kIE1lc3NhZ2VcblxuXG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7IiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudHMnO1xuXG5jbGFzcyBSb3V0ZVdhdGNoZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkID4gdGl0bGUnKTtcbiAgICB0aGlzLm9ic2VydmVyID0gbnVsbDtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcbiAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtKSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaXRsZSBpcyBzZXQgdG8gJ1lvdVR1YmUgR2FtaW5nJyBvbiBtYWluIHJvdXRlc1xuICAgICAgICAgKiBhbmQgYmV0d2VlbiByb3V0ZXMuXG4gICAgICAgICAqL1xuICAgICAgICBpZihtLnRhcmdldC5pbm5lclRleHQgPT09ICdZb3VUdWJlIEdhbWluZycpIHtcbiAgICAgICAgICB0aGlzLmVtaXQoJ21haW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVtaXQoJ2NoYW5nZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmKHRoaXMudGFyZ2V0ICE9PSBudWxsKSB7IC8vIFBvcG91dCBjaGF0IGRvZXMgbm90IGhhdmUgdGl0bGUgdGFnXG4gICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy50YXJnZXQsIHtcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBhdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlV2F0Y2hlcjtcbiIsImltcG9ydCBcInNyYy9zdHlsdXMvY29udGVudC5zdHlsXCI7XG5pbXBvcnQgQ2hhdFNjcm9sbGVyIGZyb20gXCIuL0NoYXRTY3JvbGxlclwiO1xuaW1wb3J0IENoYXRXYXRjaGVyIGZyb20gXCIuL0NoYXRXYXRjaGVyXCI7XG5pbXBvcnQgUm91dGVXYXRjaGVyIGZyb20gXCIuL1JvdXRlV2F0Y2hlclwiO1xuXG5cbmltcG9ydCB7XG4gIGlzTGl2ZXN0cmVhbSwgaXNZb3V0dWJlR2FtaW5nLFxuICBpc1lvdXR1YmVFbWJlZCwgaXNZb3V0dWJlVmFuaWxsYSxcbiAgaXNQb3BPdXRcbn0gZnJvbSBcInNyYy9oZWxwZXJzL0lkZW50aWZpY2F0aW9uXCI7XG5cbmltcG9ydCBQZXJzaXN0ZW50U3luY1N0b3JhZ2UgZnJvbSBcInNyYy9oZWxwZXJzL1BlcnNpc3RlbnRTeW5jU3RvcmFnZVwiO1xuXG5sZXQgTUFJTiA9IG51bGw7XG5jb25zdCB0aGVhdGVyX3dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhdGVyX3dyYXBwZXInKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhlYXRlcl93cmFwcGVyKTtcbnZhciBhbHJlYWR5VGhlYXRlciA9IGZhbHNlO1xuXG4vLyAtLS1cblxuY2xhc3MgTWFpbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2hhdFdhdGNoZXIgPSBudWxsO1xuICAgIHRoaXMuY2hhdFNjcm9sbGVyID0gbnVsbDtcbiAgICB0aGlzLnJvdXRlV2F0Y2hlciA9IG51bGw7XG4gICAgdGhpcy5vblJvdXRlQ2hhbmdlID0gdGhpcy5vblJvdXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2FkKCk7XG5cbiAgICBcbiAgICAgIC8vICBidXR0b24gY2xhc3MgLSB5dHAtc2l6ZS1idXR0b24geXRwLWJ1dHRvblxuICAgICAgLy8gIHJpZ2h0IHBsYXllciBjb250cm9scyAtIHl0cC1yaWdodC1jb250cm9sc1xuICAgICAgLy8gIHBsYXllciBkaXYgaWQgLSB5dGQtcGxheWVyXG4gICAgICAvLyAgY2hhdGZyYW1lIGlkIC0gY2hhdGZyYW1lXG4gICAgICAvLyAgbW92aWVmcmFtZSBpZCAtIG1vdmllX3BsYXllcl9maXhcbiAgICAgIC8vICBkb25vIHRpY2tlciBpZCAtIHRpY2tlclxuXG4gICAgICAvLyAgcGxheWVyLXRoZWF0ZXItY29udGFpbmVyXG4gIH1cblxuICBsb2FkKCkge1xuICAgIHRoaXMucm91dGVXYXRjaGVyID0gbmV3IFJvdXRlV2F0Y2hlcigpO1xuICAgIHRoaXMucm91dGVXYXRjaGVyLm9uKFwiY2hhbmdlXCIsIHRoaXMub25Sb3V0ZUNoYW5nZSk7XG4gICAgdGhpcy5vblJvdXRlQ2hhbmdlKCk7XG4gIH1cblxuICBvblJvdXRlQ2hhbmdlKCkge1xuICAgIGlmKGlzTGl2ZXN0cmVhbSgpICYmICgoaXNZb3V0dWJlR2FtaW5nKCkpIHx8IChpc1lvdXR1YmVWYW5pbGxhKCkpIHx8IChpc1lvdXR1YmVFbWJlZCgpKSB8fCBpc1BvcE91dCgpKSkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaWYoaXNMaXZlc3RyZWFtKCkpIHtcbiAgICAgIGlmIChQZXJzaXN0ZW50U3luY1N0b3JhZ2UuZGF0YS5vcHRpb25zLnRoZWF0ZXJNb2RlRml4KSB7XG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItY29udGFpbmVyJykgIT0gbnVsbCAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXRoZWF0ZXItY29udGFpbmVyJykgIT0gbnVsbCl7XG4gICAgICAgICAgdGhlYXRlck1vZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfS8vICBlbmQgb25Sb3V0ZUNoYW5nZVxuXG4gIGluaXQoKSB7XG5cbiAgICB0aGlzLmNoYXRXYXRjaGVyID0gbmV3IENoYXRXYXRjaGVyKCk7XG4gICAgdGhpcy5jaGF0V2F0Y2hlci5pbml0KCk7XG4gICAgdGhpcy5jaGF0U2Nyb2xsZXIgPSBuZXcgQ2hhdFNjcm9sbGVyKCk7XG4gICAgdGhpcy5jaGF0U2Nyb2xsZXIuaW5pdCgpO1xuXG4gICAgc2V0RGVmYXVsdHMoKTtcbiAgICBjb25zb2xlLmxvZyhcIklOSVRcIik7XG5cbiAgfS8vIGVuZCBpbml0XG5cbn0vLyBlbmQgbWFpblxuXG5cbiAgZnVuY3Rpb24gc2V0RGVmYXVsdHMoKSB7XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAvL0xpdmUgQ2hhdCBEZWZhdWx0IE9wdGlvblxuICAgIGlmIChQZXJzaXN0ZW50U3luY1N0b3JhZ2UuZGF0YS5vcHRpb25zLnNldExpdmVDaGF0KSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwieXQtc2ltcGxlLWVuZHBvaW50IHN0eWxlLXNjb3BlIHl0LWRyb3Bkb3duLW1lbnVcIikuaXRlbSgxKS5jbGljaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkbyBub3RoaW5nLCBsZXQgdXNlciBwaWNrIG9wdGlvbiBpZiBub3Qgc2V0IGFzIGRlZmF1bHQgaW4gb3B0aW9ucyBtZW51XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgLy8gV2VsY29tZSBCYW5uZXJcbiAgICB2YXIgd2VsY29tQmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInl0LWxpdmUtY2hhdC12aWV3ZXItZW5nYWdlbWVudC1tZXNzYWdlLXJlbmRlcmVyXCIpO1xuICBcbiAgICAvLyBTZXQgSGlkZSBXZWxjb21lIEJhbm5lclxuICAgIGlmIChQZXJzaXN0ZW50U3luY1N0b3JhZ2UuZGF0YS5vcHRpb25zLmhpZGVXZWxjb21CYW5uZXIpIHtcbiAgICAgIHdlbGNvbUJhbm5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZUVsZW1lbnRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdlbGNvbUJhbm5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZUVsZW1lbnRcIik7XG4gICAgfVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIH1cblxuLy8gLS0tIEV2ZXJ5IEZyYW1lIExvYWRlZFxuUGVyc2lzdGVudFN5bmNTdG9yYWdlLm9uKFwicmVhZHlcIiwgKCkgPT4ge1xuICBNQUlOID0gbmV3IE1haW4oKTtcbn0pO1xuXG5cbmZ1bmN0aW9uIGNoZWNrTW9kZSgpe1xuXG4gIGlmKGFscmVhZHlUaGVhdGVyKXtcbiAgICBjb25zb2xlLmxvZygnZW50ZXJUaGVhdGVyJyk7XG4gICAgYWxyZWFkeVRoZWF0ZXIgPSBmYWxzZTtcbiAgICBlbnRlclRoZWF0ZXJNb2RlKCk7XG4gIH1lbHNle1xuICAgIC8vICBpcyByZXZlcnNlIGJlY2F1c2UgYXQgdGhlIHRpbWUgb2YgY2hlY2sgZG9tIGVsZW1lbnRzIGhhdmVudCBtb3ZlZCB5ZXRcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXRoZWF0ZXItY29udGFpbmVyJykuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1jb250YWluZXInKSkpe1xuICAgICAgY29uc29sZS5sb2coJ2V4aXRUaGVhdGVyJyk7XG4gICAgICBleGl0VGhlYXRlck1vZGUoKTtcbiAgICB9ZWxzZXsgXG4gICAgICBjb25zb2xlLmxvZygnZW50ZXJUaGVhdGVyJyk7XG4gICAgICBlbnRlclRoZWF0ZXJNb2RlKCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGVudGVyVGhlYXRlck1vZGUoKSB7XG5cbiAgY29uc3QgbW92aWVfcGxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmllX3BsYXllcicpO1xuICBjb25zdCBjaGF0X2ZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXRmcmFtZScpO1xuICBjb25zdCBpbmZvX2ZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tY29udGVudHMnKTtcblxuICBjb25zdCBtYXN0aGVhZF9jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzdGhlYWQtY29udGFpbmVyJyk7XG4gIFxuICBcbiAgbWFzdGhlYWRfY29udGFpbmVyLmhpZGRlbiA9IHRydWU7XG4gIFxuICB0aGVhdGVyX3dyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGhlYXRlcl93cmFwcGVyX2ZpeCcpO1xuICBtb3ZpZV9wbGF5ZXIuY2xhc3NMaXN0LmFkZCgnbW92aWVfcGxheWVyX2ZpeCcpO1xuICBjaGF0X2ZyYW1lLmNsYXNzTGlzdC5hZGQoJ2NoYXRfZnJhbWVfZml4Jyk7XG4gIGluZm9fZnJhbWUuY2xhc3NMaXN0LmFkZCgnaW5mb19jb250ZW50c19maXgnKTtcblxuXG4gIHRoZWF0ZXJfd3JhcHBlci5hcHBlbmQoaW5mb19mcmFtZSk7XG4gIHRoZWF0ZXJfd3JhcHBlci5hcHBlbmQobW92aWVfcGxheWVyKTtcbiAgdGhlYXRlcl93cmFwcGVyLmFwcGVuZChjaGF0X2ZyYW1lKTtcblxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHlfRml4Jyk7XG5cblxufS8vIGVuZCBlbnRlclRoZWF0ZXJNb2RlXG5cbmZ1bmN0aW9uIGV4aXRUaGVhdGVyTW9kZSgpe1xuXG4gIGNvbnN0IG1vdmllX3BsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZpZV9wbGF5ZXInKTtcbiAgY29uc3QgY2hhdF9mcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0ZnJhbWUnKTtcbiAgY29uc3QgaW5mb19mcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLWNvbnRlbnRzJyk7XG5cbiAgY29uc3QgbW92aWVfcGxheWVyX2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItY29udGFpbmVyJyk7IFxuICBjb25zdCBwbGF5ZXJfY29udGFpbmVyX3BhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItY29udGFpbmVyLWlubmVyJyk7XG5cbiAgY29uc3QgY2hhdF9mcmFtZV9wYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdCcpOyBcbiAgY29uc3QgaW5mb19mcmFtZV9iZWZvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWV0YScpOyAgXG5cbiAgY29uc3QgbWFzdGhlYWRfY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc3RoZWFkLWNvbnRhaW5lcicpO1xuXG5cbiAgbWFzdGhlYWRfY29udGFpbmVyLmhpZGRlbiA9IGZhbHNlO1xuXG4gIHRoZWF0ZXJfd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCd0aGVhdGVyX3dyYXBwZXJfZml4Jyk7XG4gIG1vdmllX3BsYXllci5jbGFzc0xpc3QucmVtb3ZlKCdtb3ZpZV9wbGF5ZXJfZml4Jyk7XG4gIGNoYXRfZnJhbWUuY2xhc3NMaXN0LnJlbW92ZSgnY2hhdF9mcmFtZV9maXgnKTtcbiAgaW5mb19mcmFtZS5jbGFzc0xpc3QucmVtb3ZlKCdpbmZvX2NvbnRlbnRzX2ZpeCcpO1xuXG4gIG1vdmllX3BsYXllcl9jb250YWluZXIucHJlcGVuZChtb3ZpZV9wbGF5ZXIpO1xuICBwbGF5ZXJfY29udGFpbmVyX3BhcmVudC5wcmVwZW5kKG1vdmllX3BsYXllcl9jb250YWluZXIpO1xuICBjaGF0X2ZyYW1lX3BhcmVudC5wcmVwZW5kKGNoYXRfZnJhbWUpO1xuICBpbmZvX2ZyYW1lX2JlZm9yZS5iZWZvcmUoaW5mb19mcmFtZSk7XG5cbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdib2R5X0ZpeCcpO1xufVxuXG5mdW5jdGlvbiB0aGVhdGVyTW9kZSgpe1xuXG4gIHZhciB0aGVhdGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLnl0cC1zaXplLWJ1dHRvbi55dHAtYnV0dG9uJyk7XG5cbiAgaWYodGhlYXRlckJ1dHRvbil7XG5cbiAgICBcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLXRoZWF0ZXItY29udGFpbmVyJykuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1jb250YWluZXInKSkpe1xuXG4gICAgICAvLyAgZm9yIHdoZW4gcGFnZSBsb2FkcyBmaXJzdCB0aW1lIC0gY2hlY2sgaXMgcmV2ZXJzZWQgYWZ0ZXIgdGhpc1xuICAgICAgYWxyZWFkeVRoZWF0ZXIgPSB0cnVlO1xuICAgICAgY2hlY2tNb2RlKCk7XG4gICAgfVxuXG4gICAgLy8gIGFkZCBidXR0b25cbiAgICB0aGVhdGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tNb2RlLCBmYWxzZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBpc0xpdmVzdHJlYW0gPSAoKSA9PiB7XG4gICAgY29uc3QgdGltZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueXRwLXRpbWUtZGlzcGxheScpO1xuICAgIGNvbnN0IGNoYXRBcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd5dC1saXZlLWNoYXQtYXBwJyk7XG4gICAgY29uc3QgY2hhdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55dC1saXZlLWNoYXQtcmVuZGVyZXItMCcpO1xuICAgIGNvbnN0IHRpbWVEaXNwbGF5Q2hlY2sgPSB0aW1lRGlzcGxheSAmJiB0aW1lRGlzcGxheS5jbGFzc0xpc3QuY29udGFpbnMoJ3l0cC1saXZlJyk7XG4gICAgY29uc3QgY2hhdENoZWNrID0gKGRvY3VtZW50LmJvZHkuY29udGFpbnMoY2hhdEFwcCkgfHwgZG9jdW1lbnQuYm9keS5jb250YWlucyhjaGF0SGVhZGVyKSk7XG5cbiAgICByZXR1cm4gKHRpbWVEaXNwbGF5Q2hlY2sgfHwgY2hhdENoZWNrKTtcbn07XG5cbi8vIGlzWW91dHViZUdhbWluZyBjaGVja3MgZm9yIHRoZSBwcmVzZW5jZSBvZiB5dGctYXBwLCB0aGUgdG9wIGxldmVsIGVsZW1lbnQgZm9yIFlUIEdhbWluZ1xuZXhwb3J0IGNvbnN0IGlzWW91dHViZUdhbWluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd5dGctYXBwJyk7XG59O1xuXG4vLyBpc1lvdXR1YmVFbWJlZCBjaGVja3MgdGhhdCB0aGlzIGlzIGFuIGlmcmFtZSwgYW5kIGl0IGlzIGJlaW5nIHVzZWQgb24geW91dHViZS5jb21cbmV4cG9ydCBjb25zdCBpc1lvdXR1YmVWYW5pbGxhID0gKCkgPT4ge1xuICAgIC8vIHdpbmRvdy5mcmFtZUVsZW1lbnQgaXMgb25seSBhdmFpbGFibGUgZnJvbSB5b3V0dWJlLmNvbSBzaXRlcyBmcm9tIHdpdGhpbiBpZnJhbWUgcGVyIENPUlNcbiAgICByZXR1cm4gISF3aW5kb3cuZnJhbWVFbGVtZW50O1xufTtcblxuLy8gaXNZb3V0dWJlRW1iZWQgY2hlY2tzIHRoYXQgdGhpcyBpcyBhbiBpZnJhbWUsIGFuZCBpdCBpcyAqKm5vdCoqIGxvYWRlZCBmcm9tIHlvdXR1YmUuY29tIChtYWluIHNpdGUgdXNlcyBlbWJlZCB0b28pXG5leHBvcnQgY29uc3QgaXNZb3V0dWJlRW1iZWQgPSAoKSA9PiB7XG5cbiAgICAvLyBJZiB0aGUgZnJhbWVFbGVtZW50IGlzIGF2YWlsYWJsZSwgdGhlbiBDT1JTIG1lYW5zIHRoYXQgd2UgbXVzdCBiZSBvbiB5b3V0dWJlLmNvbS5cbiAgICBpZiAod2luZG93LmZyYW1lRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHdpbmRvdyBsb2NhdGlvbiBpc24ndCB0aGUgcGFyZW50IGxvY2F0aW9uLCB0aGVuIHdlIGFyZSBpbiBhbiBpZnJhbWUuXG4gICAgcmV0dXJuICh3aW5kb3cubG9jYXRpb24gIT0gd2luZG93LnBhcmVudC5sb2NhdGlvbik7XG59O1xuXG4vLyBpc1BvcE91dCBmaXggZm9yIHBvcG91dCBwYWdlXG5leHBvcnQgY29uc3QgaXNQb3BPdXQgPSAoKSA9PiB7XG4gICAgXG4gICAgLy8gSWYgdGhlIGZyYW1lRWxlbWVudCBpcyBhdmFpbGFibGUsIHRoZW4gQ09SUyBtZWFucyB0aGF0IHdlIG11c3QgYmUgb24geW91dHViZS5jb20uXG4gICAgaWYgKHdpbmRvdy5mcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENoZWNrcyBocmVmIGZvciBwYWdlIFxuICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCdpc19wb3BvdXQ9MScpKXtcbiAgICAgICAgcmV0dXJuICEhd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoJ3BvcG91dD0xJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTsiLCJpbXBvcnQgeyBTeW5jU3RvcmFnZSB9IGZyb20gJy4uL3V0aWxzL2Nocm9tZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xuXG5jbGFzcyBQZXJzaXN0ZW50U3luY1N0b3JhZ2UgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fZGF0YSA9IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9ICdpbml0aWF0aW5nJztcblxuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIGFzeW5jIF9pbml0KCkge1xuICAgIGNvbnN0IGZldGNoZWREYXRhID0gYXdhaXQgU3luY1N0b3JhZ2UuZ2V0KCk7XG4gICAgdGhpcy5faW5pdExpc3RlbmVyKCk7XG4gICAgdGhpcy5fZGF0YSA9IGZldGNoZWREYXRhO1xuICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICAgIHRoaXMuZW1pdCh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIF9pbml0TGlzdGVuZXIoKSB7XG4gICAgU3luY1N0b3JhZ2UubGlzdGVuKChjaGFuZ2VzKSA9PiB7XG5cbiAgICAgIE9iamVjdC5rZXlzKGNoYW5nZXMpLmZvckVhY2goKGNoYW5nZUtleSkgPT4ge1xuICAgICAgICBpZihjaGFuZ2VzW2NoYW5nZUtleV0uaGFzT3duUHJvcGVydHkoJ25ld1ZhbHVlJykpIHtcbiAgICAgICAgICB0aGlzLl9kYXRhW2NoYW5nZUtleV0gPSBjaGFuZ2VzW2NoYW5nZUtleV0ubmV3VmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignTm8gbmV3VmFsdWUgaW4gc3luYyBzdG9yZ2UgY2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgXG4gICAgICB0aGlzLmVtaXQoJ2NoYW5nZScsIHRoaXMuZGF0YSwgY2hhbmdlcyk7XG4gICAgfSk7XG4gIH1cblxuICBzZXQoaXRlbXMpIHtcbiAgICByZXR1cm4gU3luY1N0b3JhZ2Uuc2V0KGl0ZW1zKTtcbiAgfVxuICBcbiAgZ2V0IGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuXG4gIGhhcyhpdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5oYXNPd25Qcm9wZXJ0eShpdGVtKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUGVyc2lzdGVudFN5bmNTdG9yYWdlKCk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzIS4vY29udGVudC5zdHlsXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bHVzLWxvYWRlci9pbmRleC5qcyEuL2NvbnRlbnQuc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzIS4vY29udGVudC5zdHlsXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLyoqXG4qIE1JVCBMaWNlbnNlXG4qXG4qIENvcHlyaWdodCAoYykgMjAyMCB3b21wbWFjaG9cbiogXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4qIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4qIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4qIFxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiogXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4qIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4qIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4qIFNPRlRXQVJFLlxuKi9cblxuXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UnO1xuXG5jbGFzcyBMb2NhbFN0b3JhZ2UgZXh0ZW5kcyBTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0b3JlID0gJ2xvY2FsJztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhbFN0b3JhZ2U7XG4iLCIvKipcbiogTUlUIExpY2Vuc2VcbipcbiogQ29weXJpZ2h0IChjKSAyMDIwIHdvbXBtYWNob1xuKiBcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4qIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiogXG4qIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuKiBcbiogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4qIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiogU09GVFdBUkUuXG4qL1xuXG5cbmNsYXNzIE5vdGlmaWNhdGlvbnMge1xuXG4gIGNyZWF0ZShub3RpZmljYXRpb25JZCA9IG51bGwsIG9wdGlvbnMpIHtcbiAgICAvLyBub3RpZmljYXRpb25JZCBpcyBvcHRpb25hbFxuICAgIGlmKHR5cGVvZiBub3RpZmljYXRpb25JZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdGlvbnMgPSBub3RpZmljYXRpb25JZDtcbiAgICAgIG5vdGlmaWNhdGlvbklkID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAvLyByZXNvbHZlIGFyZ3MgPSBub3RpZmljYXRpb25JZDpzdHJpbmcgXG4gICAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jcmVhdGUobm90aWZpY2F0aW9uSWQsIG9wdGlvbnMsIHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUobm90aWZpY2F0aW9uSWQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAvLyByZXNvbHZlIGFyZ3MgPSB3YXNVcGRhdGVkOmJvb2xlYW5cbiAgICAgIGNocm9tZS5ub3RpZmljYXRpb25zLnVwZGF0ZShub3RpZmljYXRpb25JZCwgb3B0aW9ucywgcmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyKG5vdGlmaWNhdGlvbklkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgLy8gcmVzb2x2ZSBhcmdzID0gd2FzQ2xlYXJlZDpib29sZWFuXG4gICAgICBjaHJvbWUubm90aWZpY2F0aW9ucy5jbGVhcihub3RpZmljYXRpb25JZCwgcmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEFsbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAvLyByZXNvbHZlIGFyZ3MgPSBub3RpZmljYXRpb25zOm9iamVjdFxuICAgICAgY2hyb21lLm5vdGlmaWNhdGlvbnMuZ2V0QWxsKHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRQZXJtaXNzaW9uTGV2ZWwoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgLy8gcmVzb2x2ZSBhcmdzID0gbGV2ZWw6UGVybWlzc2lvbkxldmVsIChodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2FwcHMvbm90aWZpY2F0aW9ucyN0eXBlLVBlcm1pc3Npb25MZXZlbClcbiAgICAgIGNocm9tZS5ub3RpZmljYXRpb25zLmdldFBlcm1pc3Npb25MZXZlbChyZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgbGlzdGVuKGV2ZW50LCBub3RpZmljYXRpb25JZCA9IG51bGwsIGNhbGxiYWNrKSB7XG4gICAgLy8gZXZlbnQgPSAnb25DbG9zZWQnIHwgJ29uQ2xpY2tlZCcgfCAnb25CdXR0b25DbGlja2VkJyB8ICdvblBlcm1pc3Npb25MZXZlbENoYW5nZWQnIHwgJ29uU2hvd1NldHRpbmdzJ1xuICAgIC8vIG5vdGlmaWNhdGlvbklkIGlzIG9wdGlvbmFsXG4gICAgaWYodHlwZW9mIG5vdGlmaWNhdGlvbklkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IG5vdGlmaWNhdGlvbklkO1xuICAgICAgbm90aWZpY2F0aW9uSWQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmKGV2ZW50ID09PSAnb25QZXJtaXNzaW9uTGV2ZWxDaGFuZ2VkJyB8fCBldmVudCA9PT0gJ29uU2hvd1NldHRpbmdzJykge1xuICAgICAgcmV0dXJuIHRoaXMuX25vbk5vdGlmaWNhdGlvbklkTGlzdGVuKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9hcHBzL25vdGlmaWNhdGlvbnMjZXZlbnRzXG4gICAgICogXG4gICAgICogUmVzb2x2ZSBhcmdzIChieSBldmVudCk6XG4gICAgICogb25DbG9zZWQgPSBub3RpZmljYXRpb25JZDpzdHJpbmcsIGJ5VXNlcjpib29sZWFuXG4gICAgICogb25DbGlja2VkID0gbm90aWZpY2F0aW9uSWQ6c3RyaW5nXG4gICAgICogb25CdXR0b25DbGlja2VkID0gbm90aWZpY2F0aW9uSWQ6c3RyaW5nLCBidXR0b25JbmRleDppbnRlZ2VyXG4gICAgICogXG4gICAgICogb25QZXJtaXNzaW9uTGV2ZWxDaGFuZ2VkID0gbGV2ZWw6UGVybWlzc2lvbkxldmVsIChodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2FwcHMvbm90aWZpY2F0aW9ucyN0eXBlLVBlcm1pc3Npb25MZXZlbClcbiAgICAgKiBvblNob3dTZXR0aW5ncyA9IChub25lKVxuICAgICAqL1xuXG4gICAgLy8gVGhpcyBjYWxsYmFjayByZWxhdGVzIG9ubHkgdG8gdGhvc2UgZXZlbnRzIHRoYXQgaGF2ZSBub3RpZmljYXRpb25JZCBhcmdcbiAgICBjb25zdCBMaXN0ZW5lckNhbGxiYWNrID0gKCgpID0+IHtcbiAgICAgIGlmKG5vdGlmaWNhdGlvbklkICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAocGFzc2VkTm90aWZpY2F0aW9uSWQsIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICBpZihub3RpZmljYXRpb25JZCA9PT0gcGFzc2VkTm90aWZpY2F0aW9uSWQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHBhc3NlZE5vdGlmaWNhdGlvbklkLCAuLi5hcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2s7XG4gICAgICB9XG4gICAgfSkoKTtcblxuXG4gICAgY2hyb21lLm5vdGlmaWNhdGlvbnNbZXZlbnRdLmFkZExpc3RlbmVyKExpc3RlbmVyQ2FsbGJhY2spO1xuICB9XG5cbiAgX25vbk5vdGlmaWNhdGlvbklkTGlzdGVuKGV2ZW50LCBjYWxsYmFjaykge1xuICAgIGNocm9tZS5ub3RpZmljYXRpb25zW2V2ZW50XS5hZGRMaXN0ZW5lcihjYWxsYmFjayk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9ucztcbiIsIi8qKlxuKiBNSVQgTGljZW5zZVxuKlxuKiBDb3B5cmlnaHQgKGMpIDIwMjAgd29tcG1hY2hvXG4qIFxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4qIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4qIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuKiBcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4qIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4qIFxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuKiBTT0ZUV0FSRS5cbiovXG5cblxuY2xhc3MgU3RvcmFnZSB7XG5cbiAgZ2V0KGtleXMgPSBudWxsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgY29uc3QgcmV0dXJuU2luZ2xlID0gdHlwZW9mIGtleXMgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBrZXlzID09PSAnbnVtYmVyJztcbiAgICAgIC8vIHJlc29sdmUgYXJncyA9IGl0ZW1zOm9iamVjdFxuICAgICAgY2hyb21lLnN0b3JhZ2VbdGhpcy5zdG9yZV0uZ2V0KGtleXMsIChpdGVtcykgPT4ge1xuICAgICAgICBpZihyZXR1cm5TaW5nbGUpIHtcbiAgICAgICAgICByZXMoaXRlbXNba2V5c10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcyhpdGVtcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Qnl0ZXNJblVzZShrZXlzID0gbnVsbCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIC8vIHJlc29sdmUgYXJncyA9IGJ5dGVzSW5Vc2U6aW50ZWdlclxuICAgICAgY2hyb21lLnN0b3JhZ2VbdGhpcy5zdG9yZV0uZ2V0Qnl0ZXNJblVzZShrZXlzLCByZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0KGl0ZW1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgLy8gcmVzb2x2ZSBhcmdzID0gKG5vbmUpXG4gICAgICBjaHJvbWUuc3RvcmFnZVt0aGlzLnN0b3JlXS5zZXQoaXRlbXMsIHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmUoa2V5cykge1xuICAgIC8vIHJlc29sdmUgYXJncyA9IChub25lKVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlW3RoaXMuc3RvcmVdLnJlbW92ZShrZXlzLCByZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgLy8gcmVzb2x2ZSBhcmdzID0gKG5vbmUpXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgY2hyb21lLnN0b3JhZ2VbdGhpcy5zdG9yZV0uY2xlYXIocmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxpc3RlbihpdGVtLCBvbkNoYW5nZSkge1xuICAgIGlmKHR5cGVvZiBpdGVtID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbkNoYW5nZSA9IGl0ZW07XG4gICAgICBpdGVtID0gbnVsbDtcbiAgICB9XG5cbiAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoKGNoYW5nZXMsIGFyZWFOYW1lKSA9PiB7XG4gICAgICBpZihhcmVhTmFtZSA9PT0gdGhpcy5zdG9yZSkge1xuICAgICAgICBpZihpdGVtICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShpdGVtKSkge1xuICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBjaGFuZ2VzW2l0ZW1dLm9sZFZhbHVlIHx8IG51bGw7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGNoYW5nZXNbaXRlbV0ubmV3VmFsdWUgfHwgbnVsbDtcbiAgICAgICAgICAgIG9uQ2hhbmdlKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uQ2hhbmdlKGNoYW5nZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTtcbiIsIi8qKlxuKiBNSVQgTGljZW5zZVxuKlxuKiBDb3B5cmlnaHQgKGMpIDIwMjAgd29tcG1hY2hvXG4qIFxuKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4qIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4qIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuKiBcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4qIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4qIFxuKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4qIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuKiBTT0ZUV0FSRS5cbiovXG5cblxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9TdG9yYWdlJztcblxuY2xhc3MgU3luY1N0b3JhZ2UgZXh0ZW5kcyBTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0b3JlID0gJ3N5bmMnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN5bmNTdG9yYWdlO1xuIiwiLyoqXG4qIE1JVCBMaWNlbnNlXG4qXG4qIENvcHlyaWdodCAoYykgMjAyMCB3b21wbWFjaG9cbiogXG4qIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4qIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4qIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4qIFxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiogXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4qIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4qIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4qIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4qIFNPRlRXQVJFLlxuKi9cblxuaW1wb3J0IF9Mb2NhbFN0b3JhZ2UgZnJvbSAnLi9Mb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IF9TeW5jU3RvcmFnZSBmcm9tICcuL1N5bmNTdG9yYWdlJztcbmltcG9ydCBfTm90aWZpY2F0aW9ucyBmcm9tICcuL05vdGlmaWNhdGlvbnMnO1xuXG4vLyBleHBvcnQgZGVmYXVsdCB7XG4vLyAgIExvY2FsU3RvcmFnZTogbmV3IF9Mb2NhbFN0b3JhZ2UsXG4vLyAgIFN5bmNTdG9yYWdlOiBuZXcgX1N5bmNTdG9yYWdlLFxuLy8gICBOb3RpZmljYXRpb25zOiBuZXcgX05vdGlmaWNhdGlvbnNcbi8vIH1cblxuZXhwb3J0IGNvbnN0IExvY2FsU3RvcmFnZSA9IG5ldyBfTG9jYWxTdG9yYWdlO1xuZXhwb3J0IGNvbnN0IFN5bmNTdG9yYWdlID0gbmV3IF9TeW5jU3RvcmFnZTtcbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25zID0gbmV3IF9Ob3RpZmljYXRpb25zOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDck9BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==