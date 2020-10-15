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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/index */ \"./src/modules/index.js\");\n\n\nconst INDEX = 'app.record.index.show'; // 一覧ページ表示の際\nconst DETAIL = 'app.record.detail.show'; // レコード表示の際\nconst CREATE = 'app.record.create.show'; // 追加ページ表示の際\nconst EDIT = 'app.record.edit.show'; // レコード編集ページの際\nconst REPORT = 'app.report.show'; // グラフ表示\n\n(() => {\n  \"use strict\";\n\n  // 一覧ページ\n\n  kintone.events.on(INDEX, (event) => {\n    // 全てのレコード取得\n    let all_records = new _modules_index__WEBPACK_IMPORTED_MODULE_0__[\"KintoneRecordManager\"];\n    all_records.getProcessingRecords()\n    .then(response => {\n      // レコード取得後の処理\n      console.log(response.records);\n    });\n  });\n})();\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! exports provided: KintoneRecordManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KintoneRecordManager\", function() { return KintoneRecordManager; });\nclass KintoneRecordManager {\n  constructor() {\n    this.records = [];\n    this.appId = null;\n    this.query = '';\n    this.limit = 100;\n    this.offset = 0;\n  }\n  // 全てのレコードを取得\n  getProcessingRecords() {\n    return new Promise(resolve => {\n      this.appId = kintone.app.getId();\n      this.records = [];\n      this.getRecords()\n      .then(() => {\n        resolve(this);\n      });\n    });\n  }\n  // レコード取得\n  getRecords() {\n    return kintone.api('/k/v1/records', 'GET', {\n      app: this.appId,\n      query: this.query + (' limit ' + this.limit + ' offset ' + this.offset)\n    }).then(response => {\n      let len;\n      Array.prototype.push.apply(this.records, response.records);\n      len = response.records.length;\n      this.offset += len;\n      if (len < this.limit) {\n        this.ready = true;\n      } else {\n        return this.getRecords();\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ })

/******/ });