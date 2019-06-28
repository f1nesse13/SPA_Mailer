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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Inbox.js":
/*!**********************!*\
  !*** ./src/Inbox.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MessageStore = __webpack_require__(/*! ./message_store.js */ \"./src/message_store.js\");\n\nconst Inbox = {\n  render() {\n    const newUl = document.createElement('ul');\n    newUl.className = 'messages';\n    const messages = MessageStore.getInboxMessages();\n    messages.forEach(message => {\n      const newMessage = this.renderMessage(message);\n      newUl.appendChild(newMessage);\n    });\n    return newUl;\n  },\n\n  renderMessage(message) {\n    const messageItem = document.createElement('li');\n    messageItem.addClass = 'message';\n    messageItem.innerHTML = `<span class='from'>From: ${message.from}</span> <span class='subject'>Subject: ${message.subject}</span> <span class='body'>${message.body}</span>`;\n    return messageItem;\n  }\n};\n\nmodule.exports = Inbox;\n\n\n//# sourceURL=webpack:///./src/Inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Router = __webpack_require__(/*! ./router.js */ \"./src/router.js\");\nconst Inbox = __webpack_require__(/*! ./Inbox.js */ \"./src/Inbox.js\");\nconst Sent = __webpack_require__(/*! ./sent.js */ \"./src/sent.js\");\n\nconst routes = {\n  inbox: Inbox,\n  sent: Sent\n};\nwindow.addEventListener('DOMContentLoaded', () => {\n  const content = document.querySelector('.content');\n  const router = new Router(content, routes);\n  router.start();\n  window.location.hash = '#inbox';\n  const sideBarItems = Array.from(document.querySelectorAll('.sidebar-nav li'));\n  sideBarItems.forEach(li => {\n    li.addEventListener('click', () => {\n      window.location.hash = li.innerText.toLowerCase();\n    });\n  });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/message_store.js":
/*!******************************!*\
  !*** ./src/message_store.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Message {\n  constructor(from = '', to = '', subject = '', body = '') {\n    this.from = from;\n    this.to = to;\n    this.subject = subject;\n    this.body = body;\n  }\n}\n\nconst MessageStore = {\n  getInboxMessages() {\n    return messages.inbox;\n  },\n  getSentMessages() {\n    return messages.sent;\n  },\n  updateDraftField(field, val) {\n    messages[field] = val;\n  },\n  sendDraft() {\n    messages.sent.push(messageDraft);\n    messageDraft = new Message();\n  }\n};\n\nlet messageDraft = new Message();\n\nlet messages = {\n  sent: [\n    {\n      to: 'Joe@gmail.com',\n      from: 'Layla@gmail.com',\n      subject: 'I love you',\n      body: 'I love you so much!'\n    },\n    {\n      to: 'phi@gmail.com',\n      from: 'lihan@gmail.com',\n      subject: 'Important Stuff',\n      body: 'This is important - imagine its important please!'\n    }\n  ],\n  inbox: [\n    { from: 'Layla@gmail.com', subject: 'I love you too!', body: 'I love you so much!' },\n    { from: 'death007@gmail', subject: '0wn3d k1D', body: 'jooR goT own3d kiiiiiiiiDD' }\n  ]\n};\n\nmodule.exports = MessageStore;\n\n\n//# sourceURL=webpack:///./src/message_store.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Inbox = __webpack_require__(/*! ./Inbox.js */ \"./src/Inbox.js\");\n\nclass Router {\n  constructor(node, routes) {\n    this.node = node;\n    this.routes = routes;\n  }\n\n  start() {\n    window.addEventListener('hashchange', () => {\n      this.render();\n    });\n  }\n\n  activeRoute() {\n    let route = window.location.hash.substr(1, window.location.hash.length - 1);\n    return this.routes[route];\n  }\n\n  render() {\n    let component = this.activeRoute();\n    if (component === undefined) {\n      this.node.innerHTML = '';\n    } else {\n      this.node.innerHTML = '';\n      const componentNode = component.render();\n      this.node.appendChild(componentNode);\n    }\n  }\n}\n\nmodule.exports = Router;\n\n\n//# sourceURL=webpack:///./src/router.js?");

/***/ }),

/***/ "./src/sent.js":
/*!*********************!*\
  !*** ./src/sent.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MessageStore = __webpack_require__(/*! ./message_store.js */ \"./src/message_store.js\");\n\nconst Sent = {\n  render() {\n    const newUl = document.createElement('ul');\n    newUl.className = 'messages';\n    const messages = MessageStore.getSentMessages();\n    messages.forEach(message => {\n      const newMessage = this.renderMessage(message);\n      newUl.appendChild(newMessage);\n    });\n    return newUl;\n  },\n\n  renderMessage(message) {\n    const messageItem = document.createElement('li');\n    messageItem.addClass = 'message';\n    messageItem.innerHTML = `<span class='to'>To: ${message.to}</span> <span class='subject'>Subject: ${message.subject}</span> <span class='body'>${message.body}</span>`;\n    return messageItem;\n  }\n};\n\nmodule.exports = Sent;\n\n\n//# sourceURL=webpack:///./src/sent.js?");

/***/ })

/******/ });