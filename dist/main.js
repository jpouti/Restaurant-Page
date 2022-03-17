/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burger.jpg */ "./src/img/burger.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/menu.jpg */ "./src/img/menu.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/contacts.jpg */ "./src/img/contacts.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/map-marker.png */ "./src/img/map-marker.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/phone-in-talk.png */ "./src/img/phone-in-talk.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/email.png */ "./src/img/email.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nbody {\n    color: whitesmoke;\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n/* --- MAIN PAGE --- */\n/* background for home page */\n\n#content.home {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); \n    width: 100vw;\n    height: 100vh;\n    background-position: center;\n    background-size: 100% 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n/* header */\n\n#headerContainer {\n    height: 15vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.buttonsContainer {\n    display: flex;\n    gap: 2.5vw;\n}\n\n.buttonsContainer > button {\n    font-size: 1.5rem;\n}\n\n/* headline */\n\n#headlineContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 25vh;\n}\n\n#headlineContainer h3{\n    text-align: center;\n}\n\n#headlineContainer p{\n    font-size: 1rem;\n}\n\n/* footer */\n\n#footerContainer {\n    max-height: 5vh;\n    font-size: 0.75rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1vh;\n    gap: 0.5vw;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n#footerContainer a{\n    text-decoration: underline;\n    color: whitesmoke;\n}\n\n/* --- MENU --- */\n/* background for menu page */\n\n#content.menu {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); \n    width: 100vw;\n    height: 100vh;\n    background-size: 100%;\n    background-position: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#itemContainer {\n    font-size: 2.5rem;\n    display: grid;\n    grid-template-columns: 33vw 35vw 27vw;\n    grid-template-rows: 15vh auto;\n    text-align: center;\n    padding: 1vh 2.5vw;\n}\n\n#itemContainer h2 {\n    grid-column-start: 2;\n}\n\n#itemContainer #burgersContainer {\n    grid-row-start: 2;\n    grid-column-start: 1;\n}\n\n#itemContainer #beveragesContainer {\n    grid-row-start: 2;\n    grid-column-start: 3;\n}\n\n#itemContainer #appetizersContainer {\n    margin-top: 10vh;\n    grid-row-start: 3;\n    grid-column-start: 1;\n}\n\n#itemContainer > div {\n    font-size: 0.85rem;\n    padding: 1vh 1vw;\n    border: solid 1px grey;\n    border-radius: 6px;\n}\n\n#itemContainer h3{\n    margin-top: 2.5vh;\n}\n\n/* --- CONTACTS ---*/\n#content.contacts {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    width: 100vw;\n    height: 100vh; \n    background-size: 100% 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.infoContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    color: black;\n    font-size: 1rem;\n    margin: 5vh 2.5vw;\n    gap: 5vh;\n    width: 30vw;\n}\n\n.infoGrid {\n    display: grid;\n    grid-template-columns: 5vw auto;\n    grid-template-rows: 5vh 5vh 5vh;\n    text-align: left;\n    font-size: 1rem;\n}\n\n.infoGrid p{\n    margin-top: 1vh;\n    margin-left: 1vw;\n}\n\n#locationSymbol {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n}\n\n#phoneSymbol {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-repeat: no-repeat;\n}\n\n#emailSymbol {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n    background-repeat: no-repeat;\n}\n\n.hoursContainer {\n    border: 1px solid black;\n    border-radius: 6px;\n    padding: 1vh 1vw;\n    background-color: rgba(247, 245, 245, 0.3);\n}\n\n.hoursContainer > div {\n    display: flex;\n    justify-content: space-between;\n    font-size: 1.25rem;\n    gap: 2vh;\n    margin-top: 1vh;\n}\n\n.someContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: black;\n    font-size: 1.35rem;\n    gap: 2.5vh;\n}\n\n.someContainer p{\n    background-color: rgba(247, 245, 245, 0.3);\n}\n\n.linkContainer {\n    display: flex;\n    gap: 5vw;\n}\n\n.linkContainer > button {\n    font-size: 1.25rem;\n    font-weight: bold;\n    padding: 2.5vh 1vw;\n    background-color: rgba(247, 245, 245, 0.3);\n    border: solid 2px black;\n    border-radius: 6px;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,iBAAiB;AACrB;;AAEA,sBAAsB;AACtB,6BAA6B;;AAE7B;IACI,yDAAyC;IACzC,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,0BAA0B;IAC1B,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA,WAAW;;AAEX;IACI,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,iBAAiB;AACrB;;AAEA,aAAa;;AAEb;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA,WAAW;;AAEX;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,UAAU;IACV,oCAAoC;AACxC;;AAEA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA,iBAAiB;AACjB,6BAA6B;;AAE7B;IACI,yDAAuC;IACvC,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,qCAAqC;IACrC,6BAA6B;IAC7B,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,oBAAoB;AACpB;IACI,yDAA2C;IAC3C,YAAY;IACZ,aAAa;IACb,0BAA0B;IAC1B,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,+BAA+B;IAC/B,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,yDAA6C;IAC7C,4BAA4B;AAChC;;AAEA;IACI,yDAAgD;IAChD,4BAA4B;AAChC;;AAEA;IACI,yDAAwC;IACxC,4BAA4B;AAChC;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,0CAA0C;IAC1C,uBAAuB;IACvB,kBAAkB;AACtB","sourcesContent":["html {\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nbody {\n    color: whitesmoke;\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n/* --- MAIN PAGE --- */\n/* background for home page */\n\n#content.home {\n    background-image: url('./img/burger.jpg'); \n    width: 100vw;\n    height: 100vh;\n    background-position: center;\n    background-size: 100% 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n/* header */\n\n#headerContainer {\n    height: 15vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.buttonsContainer {\n    display: flex;\n    gap: 2.5vw;\n}\n\n.buttonsContainer > button {\n    font-size: 1.5rem;\n}\n\n/* headline */\n\n#headlineContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 25vh;\n}\n\n#headlineContainer h3{\n    text-align: center;\n}\n\n#headlineContainer p{\n    font-size: 1rem;\n}\n\n/* footer */\n\n#footerContainer {\n    max-height: 5vh;\n    font-size: 0.75rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1vh;\n    gap: 0.5vw;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n#footerContainer a{\n    text-decoration: underline;\n    color: whitesmoke;\n}\n\n/* --- MENU --- */\n/* background for menu page */\n\n#content.menu {\n    background-image: url('./img/menu.jpg'); \n    width: 100vw;\n    height: 100vh;\n    background-size: 100%;\n    background-position: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#itemContainer {\n    font-size: 2.5rem;\n    display: grid;\n    grid-template-columns: 33vw 35vw 27vw;\n    grid-template-rows: 15vh auto;\n    text-align: center;\n    padding: 1vh 2.5vw;\n}\n\n#itemContainer h2 {\n    grid-column-start: 2;\n}\n\n#itemContainer #burgersContainer {\n    grid-row-start: 2;\n    grid-column-start: 1;\n}\n\n#itemContainer #beveragesContainer {\n    grid-row-start: 2;\n    grid-column-start: 3;\n}\n\n#itemContainer #appetizersContainer {\n    margin-top: 10vh;\n    grid-row-start: 3;\n    grid-column-start: 1;\n}\n\n#itemContainer > div {\n    font-size: 0.85rem;\n    padding: 1vh 1vw;\n    border: solid 1px grey;\n    border-radius: 6px;\n}\n\n#itemContainer h3{\n    margin-top: 2.5vh;\n}\n\n/* --- CONTACTS ---*/\n#content.contacts {\n    background-image: url('./img/contacts.jpg');\n    width: 100vw;\n    height: 100vh; \n    background-size: 100% 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.infoContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    color: black;\n    font-size: 1rem;\n    margin: 5vh 2.5vw;\n    gap: 5vh;\n    width: 30vw;\n}\n\n.infoGrid {\n    display: grid;\n    grid-template-columns: 5vw auto;\n    grid-template-rows: 5vh 5vh 5vh;\n    text-align: left;\n    font-size: 1rem;\n}\n\n.infoGrid p{\n    margin-top: 1vh;\n    margin-left: 1vw;\n}\n\n#locationSymbol {\n    background-image: url('./img/map-marker.png');\n    background-repeat: no-repeat;\n}\n\n#phoneSymbol {\n    background-image: url('./img/phone-in-talk.png');\n    background-repeat: no-repeat;\n}\n\n#emailSymbol {\n    background-image: url('./img/email.png');\n    background-repeat: no-repeat;\n}\n\n.hoursContainer {\n    border: 1px solid black;\n    border-radius: 6px;\n    padding: 1vh 1vw;\n    background-color: rgba(247, 245, 245, 0.3);\n}\n\n.hoursContainer > div {\n    display: flex;\n    justify-content: space-between;\n    font-size: 1.25rem;\n    gap: 2vh;\n    margin-top: 1vh;\n}\n\n.someContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: black;\n    font-size: 1.35rem;\n    gap: 2.5vh;\n}\n\n.someContainer p{\n    background-color: rgba(247, 245, 245, 0.3);\n}\n\n.linkContainer {\n    display: flex;\n    gap: 5vw;\n}\n\n.linkContainer > button {\n    font-size: 1.25rem;\n    font-weight: bold;\n    padding: 2.5vh 1vw;\n    background-color: rgba(247, 245, 245, 0.3);\n    border: solid 2px black;\n    border-radius: 6px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contacts": () => (/* binding */ contacts)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


const contacts = (() => {
    const info = () => {
        const elementContainer = document.createElement('div');
        elementContainer.className = "infoContainer";

        const elementGrid = document.createElement('div');
        elementGrid.className = 'infoGrid';
        const locationSymbol = document.createElement('src');
        locationSymbol.id = 'locationSymbol';
        const location = document.createElement('p');
        location.textContent = "Burger Road 1, Burgertown";
        const phoneSymbol = document.createElement('src');
        phoneSymbol.id = 'phoneSymbol';
        const phone = document.createElement('p');
        phone.textContent = '1-222-333-4545';
        const emailSymbol = document.createElement('src');
        emailSymbol.id = "emailSymbol";
        const email = document.createElement('p');
        email.textContent = "info@email.com";

        elementGrid.appendChild(locationSymbol);
        elementGrid.appendChild(location);
        elementGrid.appendChild(phoneSymbol);
        elementGrid.appendChild(phone);
        elementGrid.appendChild(emailSymbol);
        elementGrid.appendChild(email);
        elementContainer.appendChild(elementGrid);
        return elementContainer;
    }
    // create opening hours to the page
    const hours = () => {
        const elementContainer = contacts.info();
        const hoursContainer = document.createElement('div');
        hoursContainer.className = 'hoursContainer';
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        days.forEach(day => {
            let dayCard = document.createElement('div');
            dayCard.id = day.toLowerCase();
            let name = document.createElement('p');
            name.textContent = day;
            let openingHours = document.createElement('P');
            openingHours.id = day.toLowerCase() + 'time';
            openingHours.textContent = '9am to 9pm';
            dayCard.appendChild(name);
            dayCard.appendChild(openingHours);
            hoursContainer.appendChild(dayCard);
        });
        elementContainer.appendChild(hoursContainer);
        return elementContainer;
    }
    // change opening hours by chosen date and new time
    const changeHours = (day, time) => {
        const open = document.getElementById(day.toLowerCase()+'time');
        console.log(open);
        open.textContent = time;
        return open;
    }
    //creates 3 social media mentions to the page by default (links not defined)
    const some = () => {
        const someContainer = document.createElement('div');
        someContainer.className = 'someContainer';

        const textElement = document.createElement('p');
        textElement.id = 'someText';
        textElement.textContent = 'Our Social Medias:';
        someContainer.appendChild(textElement);

        const linkContainer = document.createElement('div');
        linkContainer.className = 'linkContainer';

        const some1 = document.createElement('button');
        some1.id = 'socialMedia1';
        some1.textContent = 'Social Media 1';

        const some2 = document.createElement('button');
        some2.id = 'socialMedia2';
        some2.textContent = 'Social Media 2';

        const some3 = document.createElement('button');
        some3.id = 'socialMedia3';
        some3.textContent = 'Social Media 3';

        linkContainer.appendChild(some1);
        linkContainer.appendChild(some2);
        linkContainer.appendChild(some3);
        someContainer.appendChild(linkContainer)
        return someContainer;
    }
    //Add new social media to the page
    const addSome = (name) => {
        const elementContainer = document.querySelector('.linkContainer');
        const some = document.createElement('button');
        some.id = name;
        some.textContent = name;
        elementContainer.appendChild(some);
        return elementContainer;
    }

    return {info, hours, changeHours, some, addSome};
})();



/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMain": () => (/* binding */ createMain)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


const createMain = (() => {
    
    // create elements for header
    const headerElements = () => {
        const headerContainer = document.createElement('div');
        headerContainer.setAttribute('id', 'headerContainer');

        const headerName = document.createElement('h2');
        headerName.textContent = "Burger Bar";
        
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttonsContainer';

        const homeButton = document.createElement('button');
        homeButton.setAttribute('id', 'homeButton');
        homeButton.textContent = "Home";

        const menuButton = document.createElement('button');
        menuButton.setAttribute('id', 'menuButton');
        menuButton.textContent = "Menu";

        const contactButton = document.createElement('button');
        contactButton.setAttribute('id', 'contactButton');
        contactButton.textContent = "Contacts";

        const divContent = document.querySelector('#content');
        divContent.appendChild(headerContainer);

        const container = document.getElementById('headerContainer');
        container.appendChild(headerName);
        container.appendChild(buttonsContainer);
        buttonsContainer.appendChild(homeButton);
        buttonsContainer.appendChild(menuButton);
        buttonsContainer.appendChild(contactButton);

        return container;
    }

    const headlineElement = () => {
        const headlineContainer = document.createElement('div');
        headlineContainer.id = 'headlineContainer';

        const divContent = document.querySelector('#content');
        divContent.appendChild(headlineContainer);


        const headline1 = document.createElement('h3');
        headline1.textContent = "HAVE YOU FOUND THE BEST BURGERS IN TOWN?";
        const headline2 = document.createElement('p');
        headline2.textContent = "Join us for your next meal to find it out"

        headlineContainer.appendChild(headline1);
        headlineContainer.appendChild(headline2);
    }

    const pageFooter = (link1, text1, link2, text2) => {
        const footerContainer = document.createElement('div');
        footerContainer.id = "footerContainer";

        const divContent = document.querySelector('#content');
        divContent.appendChild(footerContainer);

        const elementText = document.createElement('p');
        elementText.id = 'imageCredit';
        elementText.textContent = 'Background photo by: '
        footerContainer.appendChild(elementText);

        const imageCredit1 = document.createElement('a');
        imageCredit1.id = "imageCredit";
        imageCredit1.href = link1;
        imageCredit1.textContent = text1;
        footerContainer.appendChild(imageCredit1);

        const elementText2 = document.createElement('p');
        elementText2.id = 'imageCredit';
        elementText2.textContent = ' on ';
        footerContainer.appendChild(elementText2);

        const imageCredit2 = document.createElement('a');
        imageCredit2.id = "imageCredit";
        imageCredit2.href = link2;
        imageCredit2.textContent = text2;
        footerContainer.appendChild(imageCredit2);
        return footerContainer;
    }

return {headerElements, headlineElement, pageFooter};

})();





/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


const createMenu = (() => {
    const menuItem = () => {
        const menuContainer = document.createElement('div');
        menuContainer.id = 'itemContainer';
        const menuHeader = document.createElement('h3');
        menuHeader.textContent = "MENU";
        menuContainer.appendChild(menuHeader);

        return menuContainer;
    }
    const foodMenu = (numbers, content) => {
        const menuContainer = document.getElementById('itemContainer');
        const foodContainer = document.createElement('div');
        const foodHeader = document.createElement('h1');
        foodHeader.textContent = content.toUpperCase();
        foodContainer.id = content + 'Container';
        foodContainer.appendChild(foodHeader);
        for (let index = 0; index < numbers; index++) {
            let foodElement = document.createElement('h3');
            foodElement.id = content + "Element" + index;
            let foodText = document.createElement('p');
            foodText.id = content + "Text" + index;
            foodContainer.appendChild(foodElement);
            foodContainer.appendChild(foodText);
        }
        menuContainer.appendChild(foodContainer);
        return menuContainer;
    }
    const addFoods = (index, name, text, price) => {
        const foodName = document.getElementById('burgersElement'+index);
        foodName.textContent = name + " " + price + " $";
        const foodText = document.getElementById('burgersText'+index);
        foodText.textContent = text;
    }
    const addDrinks = (index, name, price) => {
        const drinkName = document.getElementById('beveragesElement'+index);
        drinkName.textContent = name + " " + price + " $";
    }
    const addAppetizers = (index, name, price) => {
        const appetizerName = document.getElementById('appetizersElement'+index);
        appetizerName.textContent = name + " " + price + " $";
    }
    return {menuItem, foodMenu, addFoods, addDrinks, addAppetizers};

})();





/***/ }),

/***/ "./src/img/burger.jpg":
/*!****************************!*\
  !*** ./src/img/burger.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b18fee65b0dcc0232fdf.jpg";

/***/ }),

/***/ "./src/img/contacts.jpg":
/*!******************************!*\
  !*** ./src/img/contacts.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4cbca57c527cb59af54.jpg";

/***/ }),

/***/ "./src/img/email.png":
/*!***************************!*\
  !*** ./src/img/email.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35309a68fbbae8a4de15.png";

/***/ }),

/***/ "./src/img/map-marker.png":
/*!********************************!*\
  !*** ./src/img/map-marker.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33bcf7f84ecbb03cb74e.png";

/***/ }),

/***/ "./src/img/menu.jpg":
/*!**************************!*\
  !*** ./src/img/menu.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ddd781bb013c7a5925f.jpg";

/***/ }),

/***/ "./src/img/phone-in-talk.png":
/*!***********************************!*\
  !*** ./src/img/phone-in-talk.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6536462b1d89f1701f42.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage */ "./src/mainPage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts */ "./src/contacts.js");




console.log('load header');

const divContent = document.querySelector('#content');

const header = _mainPage__WEBPACK_IMPORTED_MODULE_0__.createMain.headerElements();
//Create main page as default
divContent.className = "home";
createMainPage();

// Choosing which page to display
document.querySelectorAll('button').forEach(tabs => {
    tabs.addEventListener('click', event => {
        console.log(event.target.id);
        if (event.target.id === "homeButton") {
            divContent.className = "home";
            console.log("Change to home");
            clearContent();
            createMainPage();
        } else if (event.target.id === "menuButton") {
            divContent.className = "menu";
            console.log("Change to menu");
            clearContent();
            createMenuPage();
        } else {
            divContent.className = "contacts";
            console.log("Change to contacts");
            clearContent();
            createContacts();
        }
    });
});

// displaying the main page
function createMainPage() {
    divContent.appendChild(header);
    _mainPage__WEBPACK_IMPORTED_MODULE_0__.createMain.headlineElement();
    _mainPage__WEBPACK_IMPORTED_MODULE_0__.createMain.pageFooter("https://unsplash.com/@jonathanborba?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        "Jonathan Borba", "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash");
}

//displaying the menu
function createMenuPage() {
    divContent.appendChild(header);
    const menu = _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu.menuItem();
    divContent.appendChild(menu);
    addMenuContent(4, 3, 3);
    _mainPage__WEBPACK_IMPORTED_MODULE_0__.createMain.pageFooter("https://unsplash.com/@slashiophotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", 
        "Slashio Photography", "https://unsplash.com/@slashiophotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash");
}

// clearing all of the elements
function clearContent() {
    while (divContent.firstChild) {
        divContent.firstChild.remove();
    }
}

//display the contacts page
function createContacts() {
    divContent.appendChild(header);
    divContent.appendChild(_contacts__WEBPACK_IMPORTED_MODULE_2__.contacts.hours());
    divContent.appendChild(_contacts__WEBPACK_IMPORTED_MODULE_2__.contacts.some());
    _contacts__WEBPACK_IMPORTED_MODULE_2__.contacts.changeHours("saturday", "10am to 11pm"); 
    _contacts__WEBPACK_IMPORTED_MODULE_2__.contacts.changeHours("sunday", "11am to 8pm");
    _mainPage__WEBPACK_IMPORTED_MODULE_0__.createMain.pageFooter("https://unsplash.com/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        "Louis Hansel", "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash");
}

// Input the content for restaurant menu
// Add number of foods & drinks & appetizers wanted as parameter
function addMenuContent(burgers, beverages, appetizers) {
    const menuBurgers = _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu.foodMenu(burgers, 'burgers');
    divContent.appendChild(menuBurgers);
    const menuDrinks = _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu.foodMenu(beverages, 'beverages');
    divContent.appendChild(menuDrinks);
    const menuAppetizers = _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu.foodMenu(appetizers, 'appetizers');
    divContent.appendChild(menuAppetizers);
    _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu.addFoods(0, "CHEESEBURGER", "beef, onion, lettuce, cheese", 10);
    _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu.addFoods(1, "BEEF BURGER", "Basic Burger", 10);
    _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu.addFoods(2, "CHICKEN BURGER", "Basic Burger", 10);
    _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu.addFoods(3, "HALLOUMI BURGER", "Basic Burger", 15);
    _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu.addDrinks(0, "BEER", 7);
    _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu.addDrinks(1, "SOFT DRINKS", 7);
    _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu.addDrinks(2, "MILKSHAKE", 7);
    _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu.addAppetizers(0, "FRENCH FRIES", 5);
    _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu.addAppetizers(1, "CHICKEN WINGS", 7);
    _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu.addAppetizers(2, "ONION RINGS", 5);
} 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR3FCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFROztBQUVSLENBQUM7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQzVGRTs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlCQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaLENBQUM7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hEcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJzQztBQUNKO0FBQ0U7O0FBRXBDOztBQUVBOztBQUVBLGVBQWUsZ0VBQXlCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQTBCO0FBQzlCLElBQUksNERBQXFCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNEQUFtQjtBQUNwQztBQUNBO0FBQ0EsSUFBSSw0REFBcUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFEQUFjO0FBQ3pDLDJCQUEyQixvREFBYTtBQUN4QyxJQUFJLDJEQUFvQjtBQUN4QixJQUFJLDJEQUFvQjtBQUN4QixJQUFJLDREQUFxQjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzREFBbUI7QUFDM0M7QUFDQSx1QkFBdUIsc0RBQW1CO0FBQzFDO0FBQ0EsMkJBQTJCLHNEQUFtQjtBQUM5QztBQUNBLElBQUksc0RBQW1CO0FBQ3ZCLElBQUksc0RBQW1CO0FBQ3ZCLElBQUksc0RBQW1CO0FBQ3ZCLElBQUksc0RBQW1CO0FBQ3ZCLElBQUksdURBQW9CO0FBQ3hCLElBQUksdURBQW9CO0FBQ3hCLElBQUksdURBQW9CO0FBQ3hCLElBQUksMkRBQXdCO0FBQzVCLElBQUksMkRBQXdCO0FBQzVCLElBQUksMkRBQXdCO0FBQzVCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9idXJnZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvbWVudS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9jb250YWN0cy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZy9tYXAtbWFya2VyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1nL3Bob25lLWluLXRhbGsucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9pbWcvZW1haWwucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiAtLS0gTUFJTiBQQUdFIC0tLSAqL1xcbi8qIGJhY2tncm91bmQgZm9yIGhvbWUgcGFnZSAqL1xcblxcbiNjb250ZW50LmhvbWUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyBcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIGhlYWRlciAqL1xcblxcbiNoZWFkZXJDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5idXR0b25zQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyLjV2dztcXG59XFxuXFxuLmJ1dHRvbnNDb250YWluZXIgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogaGVhZGxpbmUgKi9cXG5cXG4jaGVhZGxpbmVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjV2aDtcXG59XFxuXFxuI2hlYWRsaW5lQ29udGFpbmVyIGgze1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkbGluZUNvbnRhaW5lciBwe1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi8qIGZvb3RlciAqL1xcblxcbiNmb290ZXJDb250YWluZXIge1xcbiAgICBtYXgtaGVpZ2h0OiA1dmg7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgZ2FwOiAwLjV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4jZm9vdGVyQ29udGFpbmVyIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLyogLS0tIE1FTlUgLS0tICovXFxuLyogYmFja2dyb3VuZCBmb3IgbWVudSBwYWdlICovXFxuXFxuI2NvbnRlbnQubWVudSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7IFxcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNpdGVtQ29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzN2dyAzNXZ3IDI3dnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTV2aCBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDF2aCAyLjV2dztcXG59XFxuXFxuI2l0ZW1Db250YWluZXIgaDIge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG59XFxuXFxuI2l0ZW1Db250YWluZXIgI2J1cmdlcnNDb250YWluZXIge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxufVxcblxcbiNpdGVtQ29udGFpbmVyICNiZXZlcmFnZXNDb250YWluZXIge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxufVxcblxcbiNpdGVtQ29udGFpbmVyICNhcHBldGl6ZXJzQ29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTB2aDtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbn1cXG5cXG4jaXRlbUNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgcGFkZGluZzogMXZoIDF2dztcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4jaXRlbUNvbnRhaW5lciBoM3tcXG4gICAgbWFyZ2luLXRvcDogMi41dmg7XFxufVxcblxcbi8qIC0tLSBDT05UQUNUUyAtLS0qL1xcbiNjb250ZW50LmNvbnRhY3RzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoOyBcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmluZm9Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luOiA1dmggMi41dnc7XFxuICAgIGdhcDogNXZoO1xcbiAgICB3aWR0aDogMzB2dztcXG59XFxuXFxuLmluZm9HcmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1dncgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1dmggNXZoIDV2aDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uaW5mb0dyaWQgcHtcXG4gICAgbWFyZ2luLXRvcDogMXZoO1xcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4jbG9jYXRpb25TeW1ib2wge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4jcGhvbmVTeW1ib2wge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4jZW1haWxTeW1ib2wge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uaG91cnNDb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiAxdmggMXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQ1LCAyNDUsIDAuMyk7XFxufVxcblxcbi5ob3Vyc0NvbnRhaW5lciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBnYXA6IDJ2aDtcXG4gICAgbWFyZ2luLXRvcDogMXZoO1xcbn1cXG5cXG4uc29tZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gICAgZ2FwOiAyLjV2aDtcXG59XFxuXFxuLnNvbWVDb250YWluZXIgcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0NSwgMjQ1LCAwLjMpO1xcbn1cXG5cXG4ubGlua0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXZ3O1xcbn1cXG5cXG4ubGlua0NvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDIuNXZoIDF2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0NSwgMjQ1LCAwLjMpO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUEsc0JBQXNCO0FBQ3RCLDZCQUE2Qjs7QUFFN0I7SUFDSSx5REFBeUM7SUFDekMsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQSxhQUFhOztBQUViO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDVixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVBLGlCQUFpQjtBQUNqQiw2QkFBNkI7O0FBRTdCO0lBQ0kseURBQXVDO0lBQ3ZDLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSx5REFBMkM7SUFDM0MsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseURBQTZDO0lBQzdDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHlEQUFnRDtJQUNoRCw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx5REFBd0M7SUFDeEMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMENBQTBDO0lBQzFDLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogLS0tIE1BSU4gUEFHRSAtLS0gKi9cXG4vKiBiYWNrZ3JvdW5kIGZvciBob21lIHBhZ2UgKi9cXG5cXG4jY29udGVudC5ob21lIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9idXJnZXIuanBnJyk7IFxcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuXFxuI2hlYWRlckNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmJ1dHRvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIuNXZ3O1xcbn1cXG5cXG4uYnV0dG9uc0NvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKiBoZWFkbGluZSAqL1xcblxcbiNoZWFkbGluZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXZoO1xcbn1cXG5cXG4jaGVhZGxpbmVDb250YWluZXIgaDN7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRsaW5lQ29udGFpbmVyIHB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuXFxuI2Zvb3RlckNvbnRhaW5lciB7XFxuICAgIG1heC1oZWlnaHQ6IDV2aDtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICBnYXA6IDAuNXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbiNmb290ZXJDb250YWluZXIgYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4vKiAtLS0gTUVOVSAtLS0gKi9cXG4vKiBiYWNrZ3JvdW5kIGZvciBtZW51IHBhZ2UgKi9cXG5cXG4jY29udGVudC5tZW51IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9tZW51LmpwZycpOyBcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jaXRlbUNvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzdncgMzV2dyAyN3Z3O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1dmggYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxdmggMi41dnc7XFxufVxcblxcbiNpdGVtQ29udGFpbmVyIGgyIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxufVxcblxcbiNpdGVtQ29udGFpbmVyICNidXJnZXJzQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbn1cXG5cXG4jaXRlbUNvbnRhaW5lciAjYmV2ZXJhZ2VzQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbn1cXG5cXG4jaXRlbUNvbnRhaW5lciAjYXBwZXRpemVyc0NvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDEwdmg7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG59XFxuXFxuI2l0ZW1Db250YWluZXIgPiBkaXYge1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICAgIHBhZGRpbmc6IDF2aCAxdnc7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuI2l0ZW1Db250YWluZXIgaDN7XFxuICAgIG1hcmdpbi10b3A6IDIuNXZoO1xcbn1cXG5cXG4vKiAtLS0gQ09OVEFDVFMgLS0tKi9cXG4jY29udGVudC5jb250YWN0cyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvY29udGFjdHMuanBnJyk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDsgXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5pbmZvQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbjogNXZoIDIuNXZ3O1xcbiAgICBnYXA6IDV2aDtcXG4gICAgd2lkdGg6IDMwdnc7XFxufVxcblxcbi5pbmZvR3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNXZ3IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNXZoIDV2aCA1dmg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmluZm9HcmlkIHB7XFxuICAgIG1hcmdpbi10b3A6IDF2aDtcXG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuI2xvY2F0aW9uU3ltYm9sIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9tYXAtbWFya2VyLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4jcGhvbmVTeW1ib2wge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL3Bob25lLWluLXRhbGsucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbiNlbWFpbFN5bWJvbCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvZW1haWwucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5ob3Vyc0NvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDF2aCAxdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDUsIDI0NSwgMC4zKTtcXG59XFxuXFxuLmhvdXJzQ29udGFpbmVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGdhcDogMnZoO1xcbiAgICBtYXJnaW4tdG9wOiAxdmg7XFxufVxcblxcbi5zb21lQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjM1cmVtO1xcbiAgICBnYXA6IDIuNXZoO1xcbn1cXG5cXG4uc29tZUNvbnRhaW5lciBwe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQ1LCAyNDUsIDAuMyk7XFxufVxcblxcbi5saW5rQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1dnc7XFxufVxcblxcbi5saW5rQ29udGFpbmVyID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMi41dmggMXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQ1LCAyNDUsIDAuMyk7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuY29uc3QgY29udGFjdHMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGluZm8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudENvbnRhaW5lci5jbGFzc05hbWUgPSBcImluZm9Db250YWluZXJcIjtcblxuICAgICAgICBjb25zdCBlbGVtZW50R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50R3JpZC5jbGFzc05hbWUgPSAnaW5mb0dyaWQnO1xuICAgICAgICBjb25zdCBsb2NhdGlvblN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NyYycpO1xuICAgICAgICBsb2NhdGlvblN5bWJvbC5pZCA9ICdsb2NhdGlvblN5bWJvbCc7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IFwiQnVyZ2VyIFJvYWQgMSwgQnVyZ2VydG93blwiO1xuICAgICAgICBjb25zdCBwaG9uZVN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NyYycpO1xuICAgICAgICBwaG9uZVN5bWJvbC5pZCA9ICdwaG9uZVN5bWJvbCc7XG4gICAgICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwaG9uZS50ZXh0Q29udGVudCA9ICcxLTIyMi0zMzMtNDU0NSc7XG4gICAgICAgIGNvbnN0IGVtYWlsU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3JjJyk7XG4gICAgICAgIGVtYWlsU3ltYm9sLmlkID0gXCJlbWFpbFN5bWJvbFwiO1xuICAgICAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZW1haWwudGV4dENvbnRlbnQgPSBcImluZm9AZW1haWwuY29tXCI7XG5cbiAgICAgICAgZWxlbWVudEdyaWQuYXBwZW5kQ2hpbGQobG9jYXRpb25TeW1ib2wpO1xuICAgICAgICBlbGVtZW50R3JpZC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gICAgICAgIGVsZW1lbnRHcmlkLmFwcGVuZENoaWxkKHBob25lU3ltYm9sKTtcbiAgICAgICAgZWxlbWVudEdyaWQuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgICAgICBlbGVtZW50R3JpZC5hcHBlbmRDaGlsZChlbWFpbFN5bWJvbCk7XG4gICAgICAgIGVsZW1lbnRHcmlkLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgICAgICAgZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50R3JpZCk7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q29udGFpbmVyO1xuICAgIH1cbiAgICAvLyBjcmVhdGUgb3BlbmluZyBob3VycyB0byB0aGUgcGFnZVxuICAgIGNvbnN0IGhvdXJzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50Q29udGFpbmVyID0gY29udGFjdHMuaW5mbygpO1xuICAgICAgICBjb25zdCBob3Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob3Vyc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnaG91cnNDb250YWluZXInO1xuICAgICAgICBjb25zdCBkYXlzID0gWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5JywgJ1N1bmRheSddO1xuICAgICAgICBkYXlzLmZvckVhY2goZGF5ID0+IHtcbiAgICAgICAgICAgIGxldCBkYXlDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkYXlDYXJkLmlkID0gZGF5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBkYXk7XG4gICAgICAgICAgICBsZXQgb3BlbmluZ0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnUCcpO1xuICAgICAgICAgICAgb3BlbmluZ0hvdXJzLmlkID0gZGF5LnRvTG93ZXJDYXNlKCkgKyAndGltZSc7XG4gICAgICAgICAgICBvcGVuaW5nSG91cnMudGV4dENvbnRlbnQgPSAnOWFtIHRvIDlwbSc7XG4gICAgICAgICAgICBkYXlDYXJkLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICAgICAgZGF5Q2FyZC5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnMpO1xuICAgICAgICAgICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5Q2FyZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzQ29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDb250YWluZXI7XG4gICAgfVxuICAgIC8vIGNoYW5nZSBvcGVuaW5nIGhvdXJzIGJ5IGNob3NlbiBkYXRlIGFuZCBuZXcgdGltZVxuICAgIGNvbnN0IGNoYW5nZUhvdXJzID0gKGRheSwgdGltZSkgPT4ge1xuICAgICAgICBjb25zdCBvcGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF5LnRvTG93ZXJDYXNlKCkrJ3RpbWUnKTtcbiAgICAgICAgY29uc29sZS5sb2cob3Blbik7XG4gICAgICAgIG9wZW4udGV4dENvbnRlbnQgPSB0aW1lO1xuICAgICAgICByZXR1cm4gb3BlbjtcbiAgICB9XG4gICAgLy9jcmVhdGVzIDMgc29jaWFsIG1lZGlhIG1lbnRpb25zIHRvIHRoZSBwYWdlIGJ5IGRlZmF1bHQgKGxpbmtzIG5vdCBkZWZpbmVkKVxuICAgIGNvbnN0IHNvbWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc29tZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnc29tZUNvbnRhaW5lcic7XG5cbiAgICAgICAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRleHRFbGVtZW50LmlkID0gJ3NvbWVUZXh0JztcbiAgICAgICAgdGV4dEVsZW1lbnQudGV4dENvbnRlbnQgPSAnT3VyIFNvY2lhbCBNZWRpYXM6JztcbiAgICAgICAgc29tZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaW5rQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdsaW5rQ29udGFpbmVyJztcblxuICAgICAgICBjb25zdCBzb21lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzb21lMS5pZCA9ICdzb2NpYWxNZWRpYTEnO1xuICAgICAgICBzb21lMS50ZXh0Q29udGVudCA9ICdTb2NpYWwgTWVkaWEgMSc7XG5cbiAgICAgICAgY29uc3Qgc29tZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc29tZTIuaWQgPSAnc29jaWFsTWVkaWEyJztcbiAgICAgICAgc29tZTIudGV4dENvbnRlbnQgPSAnU29jaWFsIE1lZGlhIDInO1xuXG4gICAgICAgIGNvbnN0IHNvbWUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNvbWUzLmlkID0gJ3NvY2lhbE1lZGlhMyc7XG4gICAgICAgIHNvbWUzLnRleHRDb250ZW50ID0gJ1NvY2lhbCBNZWRpYSAzJztcblxuICAgICAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvbWUxKTtcbiAgICAgICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChzb21lMik7XG4gICAgICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoc29tZTMpO1xuICAgICAgICBzb21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpXG4gICAgICAgIHJldHVybiBzb21lQ29udGFpbmVyO1xuICAgIH1cbiAgICAvL0FkZCBuZXcgc29jaWFsIG1lZGlhIHRvIHRoZSBwYWdlXG4gICAgY29uc3QgYWRkU29tZSA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua0NvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBzb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNvbWUuaWQgPSBuYW1lO1xuICAgICAgICBzb21lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChzb21lKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDb250YWluZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtpbmZvLCBob3VycywgY2hhbmdlSG91cnMsIHNvbWUsIGFkZFNvbWV9O1xufSkoKTtcblxuZXhwb3J0IHtjb250YWN0c307IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBjcmVhdGVNYWluID0gKCgpID0+IHtcbiAgICBcbiAgICAvLyBjcmVhdGUgZWxlbWVudHMgZm9yIGhlYWRlclxuICAgIGNvbnN0IGhlYWRlckVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyQ29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGhlYWRlck5hbWUudGV4dENvbnRlbnQgPSBcIkJ1cmdlciBCYXJcIjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc05hbWUgPSAnYnV0dG9uc0NvbnRhaW5lcic7XG5cbiAgICAgICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBob21lQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZUJ1dHRvbicpO1xuICAgICAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbiAgICAgICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudUJ1dHRvbicpO1xuICAgICAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgICAgICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb250YWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdEJ1dHRvbicpO1xuICAgICAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0c1wiO1xuXG4gICAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlckNvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTmFtZSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRsaW5lRWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGxpbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGxpbmVDb250YWluZXIuaWQgPSAnaGVhZGxpbmVDb250YWluZXInO1xuXG4gICAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGhlYWRsaW5lQ29udGFpbmVyKTtcblxuXG4gICAgICAgIGNvbnN0IGhlYWRsaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGhlYWRsaW5lMS50ZXh0Q29udGVudCA9IFwiSEFWRSBZT1UgRk9VTkQgVEhFIEJFU1QgQlVSR0VSUyBJTiBUT1dOP1wiO1xuICAgICAgICBjb25zdCBoZWFkbGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGhlYWRsaW5lMi50ZXh0Q29udGVudCA9IFwiSm9pbiB1cyBmb3IgeW91ciBuZXh0IG1lYWwgdG8gZmluZCBpdCBvdXRcIlxuXG4gICAgICAgIGhlYWRsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lMSk7XG4gICAgICAgIGhlYWRsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRsaW5lMik7XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZUZvb3RlciA9IChsaW5rMSwgdGV4dDEsIGxpbmsyLCB0ZXh0MikgPT4ge1xuICAgICAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9vdGVyQ29udGFpbmVyLmlkID0gXCJmb290ZXJDb250YWluZXJcIjtcblxuICAgICAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlbGVtZW50VGV4dC5pZCA9ICdpbWFnZUNyZWRpdCc7XG4gICAgICAgIGVsZW1lbnRUZXh0LnRleHRDb250ZW50ID0gJ0JhY2tncm91bmQgcGhvdG8gYnk6ICdcbiAgICAgICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRUZXh0KTtcblxuICAgICAgICBjb25zdCBpbWFnZUNyZWRpdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGltYWdlQ3JlZGl0MS5pZCA9IFwiaW1hZ2VDcmVkaXRcIjtcbiAgICAgICAgaW1hZ2VDcmVkaXQxLmhyZWYgPSBsaW5rMTtcbiAgICAgICAgaW1hZ2VDcmVkaXQxLnRleHRDb250ZW50ID0gdGV4dDE7XG4gICAgICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZUNyZWRpdDEpO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZWxlbWVudFRleHQyLmlkID0gJ2ltYWdlQ3JlZGl0JztcbiAgICAgICAgZWxlbWVudFRleHQyLnRleHRDb250ZW50ID0gJyBvbiAnO1xuICAgICAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudFRleHQyKTtcblxuICAgICAgICBjb25zdCBpbWFnZUNyZWRpdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGltYWdlQ3JlZGl0Mi5pZCA9IFwiaW1hZ2VDcmVkaXRcIjtcbiAgICAgICAgaW1hZ2VDcmVkaXQyLmhyZWYgPSBsaW5rMjtcbiAgICAgICAgaW1hZ2VDcmVkaXQyLnRleHRDb250ZW50ID0gdGV4dDI7XG4gICAgICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZUNyZWRpdDIpO1xuICAgICAgICByZXR1cm4gZm9vdGVyQ29udGFpbmVyO1xuICAgIH1cblxucmV0dXJuIHtoZWFkZXJFbGVtZW50cywgaGVhZGxpbmVFbGVtZW50LCBwYWdlRm9vdGVyfTtcblxufSkoKTtcblxuZXhwb3J0IHtjcmVhdGVNYWlufTtcblxuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBjcmVhdGVNZW51ID0gKCgpID0+IHtcbiAgICBjb25zdCBtZW51SXRlbSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51Q29udGFpbmVyLmlkID0gJ2l0ZW1Db250YWluZXInO1xuICAgICAgICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xuXG4gICAgICAgIHJldHVybiBtZW51Q29udGFpbmVyO1xuICAgIH1cbiAgICBjb25zdCBmb29kTWVudSA9IChudW1iZXJzLCBjb250ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbUNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBmb29kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGZvb2RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBmb29kSGVhZGVyLnRleHRDb250ZW50ID0gY29udGVudC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBmb29kQ29udGFpbmVyLmlkID0gY29udGVudCArICdDb250YWluZXInO1xuICAgICAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2RIZWFkZXIpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbnVtYmVyczsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGZvb2RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGZvb2RFbGVtZW50LmlkID0gY29udGVudCArIFwiRWxlbWVudFwiICsgaW5kZXg7XG4gICAgICAgICAgICBsZXQgZm9vZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBmb29kVGV4dC5pZCA9IGNvbnRlbnQgKyBcIlRleHRcIiArIGluZGV4O1xuICAgICAgICAgICAgZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kRWxlbWVudCk7XG4gICAgICAgICAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2RUZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2RDb250YWluZXIpO1xuICAgICAgICByZXR1cm4gbWVudUNvbnRhaW5lcjtcbiAgICB9XG4gICAgY29uc3QgYWRkRm9vZHMgPSAoaW5kZXgsIG5hbWUsIHRleHQsIHByaWNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvb2ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlcnNFbGVtZW50JytpbmRleCk7XG4gICAgICAgIGZvb2ROYW1lLnRleHRDb250ZW50ID0gbmFtZSArIFwiIFwiICsgcHJpY2UgKyBcIiAkXCI7XG4gICAgICAgIGNvbnN0IGZvb2RUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1cmdlcnNUZXh0JytpbmRleCk7XG4gICAgICAgIGZvb2RUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG4gICAgY29uc3QgYWRkRHJpbmtzID0gKGluZGV4LCBuYW1lLCBwcmljZSkgPT4ge1xuICAgICAgICBjb25zdCBkcmlua05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmV2ZXJhZ2VzRWxlbWVudCcraW5kZXgpO1xuICAgICAgICBkcmlua05hbWUudGV4dENvbnRlbnQgPSBuYW1lICsgXCIgXCIgKyBwcmljZSArIFwiICRcIjtcbiAgICB9XG4gICAgY29uc3QgYWRkQXBwZXRpemVycyA9IChpbmRleCwgbmFtZSwgcHJpY2UpID0+IHtcbiAgICAgICAgY29uc3QgYXBwZXRpemVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBldGl6ZXJzRWxlbWVudCcraW5kZXgpO1xuICAgICAgICBhcHBldGl6ZXJOYW1lLnRleHRDb250ZW50ID0gbmFtZSArIFwiIFwiICsgcHJpY2UgKyBcIiAkXCI7XG4gICAgfVxuICAgIHJldHVybiB7bWVudUl0ZW0sIGZvb2RNZW51LCBhZGRGb29kcywgYWRkRHJpbmtzLCBhZGRBcHBldGl6ZXJzfTtcblxufSkoKTtcblxuZXhwb3J0IHtjcmVhdGVNZW51fTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQge2NyZWF0ZU1haW59IGZyb20gJy4vbWFpblBhZ2UnO1xuaW1wb3J0IHtjcmVhdGVNZW51fSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHtjb250YWN0c30gZnJvbSAnLi9jb250YWN0cyc7XG5cbmNvbnNvbGUubG9nKCdsb2FkIGhlYWRlcicpO1xuXG5jb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuY29uc3QgaGVhZGVyID0gY3JlYXRlTWFpbi5oZWFkZXJFbGVtZW50cygpO1xuLy9DcmVhdGUgbWFpbiBwYWdlIGFzIGRlZmF1bHRcbmRpdkNvbnRlbnQuY2xhc3NOYW1lID0gXCJob21lXCI7XG5jcmVhdGVNYWluUGFnZSgpO1xuXG4vLyBDaG9vc2luZyB3aGljaCBwYWdlIHRvIGRpc3BsYXlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpLmZvckVhY2godGFicyA9PiB7XG4gICAgdGFicy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlkKTtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJob21lQnV0dG9uXCIpIHtcbiAgICAgICAgICAgIGRpdkNvbnRlbnQuY2xhc3NOYW1lID0gXCJob21lXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZSB0byBob21lXCIpO1xuICAgICAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgICAgICBjcmVhdGVNYWluUGFnZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJtZW51QnV0dG9uXCIpIHtcbiAgICAgICAgICAgIGRpdkNvbnRlbnQuY2xhc3NOYW1lID0gXCJtZW51XCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZSB0byBtZW51XCIpO1xuICAgICAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgICAgICBjcmVhdGVNZW51UGFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGl2Q29udGVudC5jbGFzc05hbWUgPSBcImNvbnRhY3RzXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZSB0byBjb250YWN0c1wiKTtcbiAgICAgICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICAgICAgY3JlYXRlQ29udGFjdHMoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbi8vIGRpc3BsYXlpbmcgdGhlIG1haW4gcGFnZVxuZnVuY3Rpb24gY3JlYXRlTWFpblBhZ2UoKSB7XG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNyZWF0ZU1haW4uaGVhZGxpbmVFbGVtZW50KCk7XG4gICAgY3JlYXRlTWFpbi5wYWdlRm9vdGVyKFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGpvbmF0aGFuYm9yYmE/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIsXG4gICAgICAgIFwiSm9uYXRoYW4gQm9yYmFcIiwgXCJodHRwczovL3Vuc3BsYXNoLmNvbS8/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIsIFwiVW5zcGxhc2hcIik7XG59XG5cbi8vZGlzcGxheWluZyB0aGUgbWVudVxuZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnN0IG1lbnUgPSBjcmVhdGVNZW51Lm1lbnVJdGVtKCk7XG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBhZGRNZW51Q29udGVudCg0LCAzLCAzKTtcbiAgICBjcmVhdGVNYWluLnBhZ2VGb290ZXIoXCJodHRwczovL3Vuc3BsYXNoLmNvbS9Ac2xhc2hpb3Bob3RvZ3JhcGh5P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLCBcbiAgICAgICAgXCJTbGFzaGlvIFBob3RvZ3JhcGh5XCIsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHNsYXNoaW9waG90b2dyYXBoeT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIiwgXCJVbnNwbGFzaFwiKTtcbn1cblxuLy8gY2xlYXJpbmcgYWxsIG9mIHRoZSBlbGVtZW50c1xuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIHdoaWxlIChkaXZDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZGl2Q29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuLy9kaXNwbGF5IHRoZSBjb250YWN0cyBwYWdlXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0cygpIHtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0cy5ob3VycygpKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RzLnNvbWUoKSk7XG4gICAgY29udGFjdHMuY2hhbmdlSG91cnMoXCJzYXR1cmRheVwiLCBcIjEwYW0gdG8gMTFwbVwiKTsgXG4gICAgY29udGFjdHMuY2hhbmdlSG91cnMoXCJzdW5kYXlcIiwgXCIxMWFtIHRvIDhwbVwiKTtcbiAgICBjcmVhdGVNYWluLnBhZ2VGb290ZXIoXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AbG91aXNoYW5zZWw/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIsXG4gICAgICAgIFwiTG91aXMgSGFuc2VsXCIsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLCBcIlVuc3BsYXNoXCIpO1xufVxuXG4vLyBJbnB1dCB0aGUgY29udGVudCBmb3IgcmVzdGF1cmFudCBtZW51XG4vLyBBZGQgbnVtYmVyIG9mIGZvb2RzICYgZHJpbmtzICYgYXBwZXRpemVycyB3YW50ZWQgYXMgcGFyYW1ldGVyXG5mdW5jdGlvbiBhZGRNZW51Q29udGVudChidXJnZXJzLCBiZXZlcmFnZXMsIGFwcGV0aXplcnMpIHtcbiAgICBjb25zdCBtZW51QnVyZ2VycyA9IGNyZWF0ZU1lbnUuZm9vZE1lbnUoYnVyZ2VycywgJ2J1cmdlcnMnKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKG1lbnVCdXJnZXJzKTtcbiAgICBjb25zdCBtZW51RHJpbmtzID0gY3JlYXRlTWVudS5mb29kTWVudShiZXZlcmFnZXMsICdiZXZlcmFnZXMnKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKG1lbnVEcmlua3MpO1xuICAgIGNvbnN0IG1lbnVBcHBldGl6ZXJzID0gY3JlYXRlTWVudS5mb29kTWVudShhcHBldGl6ZXJzLCAnYXBwZXRpemVycycpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUFwcGV0aXplcnMpO1xuICAgIGNyZWF0ZU1lbnUuYWRkRm9vZHMoMCwgXCJDSEVFU0VCVVJHRVJcIiwgXCJiZWVmLCBvbmlvbiwgbGV0dHVjZSwgY2hlZXNlXCIsIDEwKTtcbiAgICBjcmVhdGVNZW51LmFkZEZvb2RzKDEsIFwiQkVFRiBCVVJHRVJcIiwgXCJCYXNpYyBCdXJnZXJcIiwgMTApO1xuICAgIGNyZWF0ZU1lbnUuYWRkRm9vZHMoMiwgXCJDSElDS0VOIEJVUkdFUlwiLCBcIkJhc2ljIEJ1cmdlclwiLCAxMCk7XG4gICAgY3JlYXRlTWVudS5hZGRGb29kcygzLCBcIkhBTExPVU1JIEJVUkdFUlwiLCBcIkJhc2ljIEJ1cmdlclwiLCAxNSk7XG4gICAgY3JlYXRlTWVudS5hZGREcmlua3MoMCwgXCJCRUVSXCIsIDcpO1xuICAgIGNyZWF0ZU1lbnUuYWRkRHJpbmtzKDEsIFwiU09GVCBEUklOS1NcIiwgNyk7XG4gICAgY3JlYXRlTWVudS5hZGREcmlua3MoMiwgXCJNSUxLU0hBS0VcIiwgNyk7XG4gICAgY3JlYXRlTWVudS5hZGRBcHBldGl6ZXJzKDAsIFwiRlJFTkNIIEZSSUVTXCIsIDUpO1xuICAgIGNyZWF0ZU1lbnUuYWRkQXBwZXRpemVycygxLCBcIkNISUNLRU4gV0lOR1NcIiwgNyk7XG4gICAgY3JlYXRlTWVudS5hZGRBcHBldGl6ZXJzKDIsIFwiT05JT04gUklOR1NcIiwgNSk7XG59ICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==