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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nbody {\n    color: whitesmoke;\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n/* --- MAIN PAGE --- */\n/* background for home page */\n\n#content.home {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); \n    width: 100vw;\n    height: 100vh; \n    background-position: center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n/* header */\n\n#headerContainer {\n    height: 15vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.buttonsContainer {\n    display: flex;\n    gap: 2.5vw;\n}\n\n.buttonsContainer > button {\n    font-size: 1.5rem;\n}\n\n/* headline */\n\n#headlineContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 25vh;\n}\n\n#headlineContainer h3{\n    text-align: center;\n}\n\n#headlineContainer p{\n    font-size: 1rem;\n}\n\n\n/* footer */\n\n#footerContainer {\n    max-height: 5vh;\n    font-size: 0.75rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1vh;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n/* --- MENU --- */\n/* background for menu page */\n\n#content.menu {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); \n    width: 100vw;\n    height: 100vh; \n    background-position: center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#itemContainer {\n    font-size: 2.5rem;\n    display: grid;\n    grid-template-columns: 33vw 35vw 27vw;\n    grid-template-rows: 15vh auto;\n    text-align: center;\n    padding: 1vh 2.5vw;\n}\n\n#itemContainer h2 {\n    grid-column-start: 2;\n}\n\n#itemContainer #burgersContainer {\n    grid-row-start: 2;\n    grid-column-start: 1;\n}\n\n#itemContainer #beveragesContainer {\n    grid-row-start: 2;\n    grid-column-start: 3;\n}\n\n#itemContainer #appetizersContainer {\n    margin-top: 10vh;\n    grid-row-start: 3;\n    grid-column-start: 1;\n}\n\n#itemContainer > div {\n    font-size: 0.85rem;\n    padding: 1vh 1vw;\n    border: solid 1px grey;\n    border-radius: 6px;\n}\n\n#itemContainer h3{\n    margin-top: 2.5vh;\n}\n\n/* --- CONTACTS ---*/\n#content.contacts {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    width: 100vw;\n    height: 100vh; \n    background-position: center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.infoContainer {\n    display: flex;\n    justify-content: space-between;\n    color: black;\n    font-size: 1rem;\n    margin: 5vh 2.5vw;\n}\n\n.infoGrid {\n    display: grid;\n    grid-template-columns: 5vw auto;\n    grid-template-rows: 5vh 5vh 5vh;\n    text-align: left;\n    font-size: 1rem;\n}\n\n.infoGrid p{\n    margin-top: 1vh;\n    margin-left: 1vw;\n}\n\n#locationSymbol {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n}\n\n#phoneSymbol {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-repeat: no-repeat;\n}\n\n#emailSymbol {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n    background-repeat: no-repeat;\n}\n\n.hoursContainer {\n    border: 1px solid black;\n    border-radius: 6px;\n    padding: 1vh 1vw;\n    background-color: rgba(247, 245, 245, 0.3);\n}\n\n.hoursContainer > div {\n    display: flex;\n    justify-content: space-between;\n    font-size: 1.25rem;\n    gap: 2vh;\n    margin-top: 1vh;\n}\n\n.someContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 25vh;\n    color: black;\n    font-size: 1.35rem;\n    gap: 2.5vh;\n}\n\n.someContainer p{\n    background-color: rgba(247, 245, 245, 0.3);\n}\n\n.linkContainer {\n    display: flex;\n    gap: 5vw;\n}\n\n.linkContainer > button {\n    font-size: 1.25rem;\n    font-weight: bold;\n    padding: 2.5vh 1vw;\n    background-color: rgba(247, 245, 245, 0.3);\n    border: solid 2px black;\n    border-radius: 6px;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,iBAAiB;AACrB;;AAEA,sBAAsB;AACtB,6BAA6B;;AAE7B;IACI,yDAAyC;IACzC,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA,WAAW;;AAEX;IACI,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,iBAAiB;AACrB;;AAEA,aAAa;;AAEb;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;;AAGA,WAAW;;AAEX;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,oCAAoC;AACxC;;AAEA,iBAAiB;AACjB,6BAA6B;;AAE7B;IACI,yDAAuC;IACvC,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,qCAAqC;IACrC,6BAA6B;IAC7B,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,oBAAoB;AACpB;IACI,yDAA2C;IAC3C,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,+BAA+B;IAC/B,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,yDAA6C;IAC7C,4BAA4B;AAChC;;AAEA;IACI,yDAAgD;IAChD,4BAA4B;AAChC;;AAEA;IACI,yDAAwC;IACxC,4BAA4B;AAChC;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,0CAA0C;IAC1C,uBAAuB;IACvB,kBAAkB;AACtB","sourcesContent":["html {\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nbody {\n    color: whitesmoke;\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n/* --- MAIN PAGE --- */\n/* background for home page */\n\n#content.home {\n    background-image: url('./img/burger.jpg'); \n    width: 100vw;\n    height: 100vh; \n    background-position: center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n/* header */\n\n#headerContainer {\n    height: 15vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.buttonsContainer {\n    display: flex;\n    gap: 2.5vw;\n}\n\n.buttonsContainer > button {\n    font-size: 1.5rem;\n}\n\n/* headline */\n\n#headlineContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 25vh;\n}\n\n#headlineContainer h3{\n    text-align: center;\n}\n\n#headlineContainer p{\n    font-size: 1rem;\n}\n\n\n/* footer */\n\n#footerContainer {\n    max-height: 5vh;\n    font-size: 0.75rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1vh;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n/* --- MENU --- */\n/* background for menu page */\n\n#content.menu {\n    background-image: url('./img/menu.jpg'); \n    width: 100vw;\n    height: 100vh; \n    background-position: center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#itemContainer {\n    font-size: 2.5rem;\n    display: grid;\n    grid-template-columns: 33vw 35vw 27vw;\n    grid-template-rows: 15vh auto;\n    text-align: center;\n    padding: 1vh 2.5vw;\n}\n\n#itemContainer h2 {\n    grid-column-start: 2;\n}\n\n#itemContainer #burgersContainer {\n    grid-row-start: 2;\n    grid-column-start: 1;\n}\n\n#itemContainer #beveragesContainer {\n    grid-row-start: 2;\n    grid-column-start: 3;\n}\n\n#itemContainer #appetizersContainer {\n    margin-top: 10vh;\n    grid-row-start: 3;\n    grid-column-start: 1;\n}\n\n#itemContainer > div {\n    font-size: 0.85rem;\n    padding: 1vh 1vw;\n    border: solid 1px grey;\n    border-radius: 6px;\n}\n\n#itemContainer h3{\n    margin-top: 2.5vh;\n}\n\n/* --- CONTACTS ---*/\n#content.contacts {\n    background-image: url('./img/contacts.jpg');\n    width: 100vw;\n    height: 100vh; \n    background-position: center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.infoContainer {\n    display: flex;\n    justify-content: space-between;\n    color: black;\n    font-size: 1rem;\n    margin: 5vh 2.5vw;\n}\n\n.infoGrid {\n    display: grid;\n    grid-template-columns: 5vw auto;\n    grid-template-rows: 5vh 5vh 5vh;\n    text-align: left;\n    font-size: 1rem;\n}\n\n.infoGrid p{\n    margin-top: 1vh;\n    margin-left: 1vw;\n}\n\n#locationSymbol {\n    background-image: url('./img/map-marker.png');\n    background-repeat: no-repeat;\n}\n\n#phoneSymbol {\n    background-image: url('./img/phone-in-talk.png');\n    background-repeat: no-repeat;\n}\n\n#emailSymbol {\n    background-image: url('./img/email.png');\n    background-repeat: no-repeat;\n}\n\n.hoursContainer {\n    border: 1px solid black;\n    border-radius: 6px;\n    padding: 1vh 1vw;\n    background-color: rgba(247, 245, 245, 0.3);\n}\n\n.hoursContainer > div {\n    display: flex;\n    justify-content: space-between;\n    font-size: 1.25rem;\n    gap: 2vh;\n    margin-top: 1vh;\n}\n\n.someContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 25vh;\n    color: black;\n    font-size: 1.35rem;\n    gap: 2.5vh;\n}\n\n.someContainer p{\n    background-color: rgba(247, 245, 245, 0.3);\n}\n\n.linkContainer {\n    display: flex;\n    gap: 5vw;\n}\n\n.linkContainer > button {\n    font-size: 1.25rem;\n    font-weight: bold;\n    padding: 2.5vh 1vw;\n    background-color: rgba(247, 245, 245, 0.3);\n    border: solid 2px black;\n    border-radius: 6px;\n}"],"sourceRoot":""}]);
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
// Photo by <a href="https://unsplash.com/@joshduke10?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Josh Duke</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>



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
/* harmony import */ var _img_burger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/burger.jpg */ "./src/img/burger.jpg");



const createMain = (() => {

   /* 
    const backgroundImg = () => {
        console.log("background");
        const divContent = document.querySelector('#content');
        divContent.style.backgroundImage = "url('./img/burger.jpg')";
        console.log("set");
    } */
    
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

    const pageFooter = () => {
        const footerContainer = document.createElement('div');
        footerContainer.id = "footerContainer";

        const divContent = document.querySelector('#content');
        divContent.appendChild(footerContainer);

        const imageCredit = document.createElement('p');
        imageCredit.id = "imageCredit";
        imageCredit.textContent = "Background image https://unsplash.com/photos/8l8Yl2ruUsg";
        footerContainer.appendChild(imageCredit);
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
// background img https://unsplash.com/photos/plwBDw9x5cE by Slashio Photography



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

module.exports = __webpack_require__.p + "c0d48797a8f1609faa87.jpg";

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
    _mainPage__WEBPACK_IMPORTED_MODULE_0__.createMain.pageFooter();
}

//displaying the menu
function createMenuPage() {
    divContent.appendChild(header);
    const menu = _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu.menuItem();
    divContent.appendChild(menu);
    addMenuContent(4, 3, 3);
    _mainPage__WEBPACK_IMPORTED_MODULE_0__.createMain.pageFooter();
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
    _mainPage__WEBPACK_IMPORTED_MODULE_0__.createMain.pageFooter();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R3FCO0FBQ2E7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFROztBQUVSLENBQUM7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGcEI7O0FBRXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVosQ0FBQzs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQnNDO0FBQ0o7QUFDRTs7QUFFcEM7O0FBRUE7O0FBRUEsZUFBZSxnRUFBeUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBMEI7QUFDOUIsSUFBSSw0REFBcUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNEQUFtQjtBQUNwQztBQUNBO0FBQ0EsSUFBSSw0REFBcUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxREFBYztBQUN6QywyQkFBMkIsb0RBQWE7QUFDeEMsSUFBSSwyREFBb0I7QUFDeEIsSUFBSSwyREFBb0I7QUFDeEIsSUFBSSw0REFBcUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNEQUFtQjtBQUMzQztBQUNBLHVCQUF1QixzREFBbUI7QUFDMUM7QUFDQSwyQkFBMkIsc0RBQW1CO0FBQzlDO0FBQ0EsSUFBSSxzREFBbUI7QUFDdkIsSUFBSSxzREFBbUI7QUFDdkIsSUFBSSxzREFBbUI7QUFDdkIsSUFBSSxzREFBbUI7QUFDdkIsSUFBSSx1REFBb0I7QUFDeEIsSUFBSSx1REFBb0I7QUFDeEIsSUFBSSx1REFBb0I7QUFDeEIsSUFBSSwyREFBd0I7QUFDNUIsSUFBSSwyREFBd0I7QUFDNUIsSUFBSSwyREFBd0I7QUFDNUIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2J1cmdlci5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9tZW51LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL2NvbnRhY3RzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL21hcC1tYXJrZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWcvcGhvbmUtaW4tdGFsay5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9lbWFpbC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIC0tLSBNQUlOIFBBR0UgLS0tICovXFxuLyogYmFja2dyb3VuZCBmb3IgaG9tZSBwYWdlICovXFxuXFxuI2NvbnRlbnQuaG9tZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7IFxcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7IFxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuXFxuI2hlYWRlckNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTV2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLmJ1dHRvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIuNXZ3O1xcbn1cXG5cXG4uYnV0dG9uc0NvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4vKiBoZWFkbGluZSAqL1xcblxcbiNoZWFkbGluZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXZoO1xcbn1cXG5cXG4jaGVhZGxpbmVDb250YWluZXIgaDN7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRsaW5lQ29udGFpbmVyIHB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuXFxuLyogZm9vdGVyICovXFxuXFxuI2Zvb3RlckNvbnRhaW5lciB7XFxuICAgIG1heC1oZWlnaHQ6IDV2aDtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi8qIC0tLSBNRU5VIC0tLSAqL1xcbi8qIGJhY2tncm91bmQgZm9yIG1lbnUgcGFnZSAqL1xcblxcbiNjb250ZW50Lm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpOyBcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoOyBcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNpdGVtQ29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzN2dyAzNXZ3IDI3dnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTV2aCBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDF2aCAyLjV2dztcXG59XFxuXFxuI2l0ZW1Db250YWluZXIgaDIge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG59XFxuXFxuI2l0ZW1Db250YWluZXIgI2J1cmdlcnNDb250YWluZXIge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxufVxcblxcbiNpdGVtQ29udGFpbmVyICNiZXZlcmFnZXNDb250YWluZXIge1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxufVxcblxcbiNpdGVtQ29udGFpbmVyICNhcHBldGl6ZXJzQ29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTB2aDtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbn1cXG5cXG4jaXRlbUNvbnRhaW5lciA+IGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgcGFkZGluZzogMXZoIDF2dztcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4jaXRlbUNvbnRhaW5lciBoM3tcXG4gICAgbWFyZ2luLXRvcDogMi41dmg7XFxufVxcblxcbi8qIC0tLSBDT05UQUNUUyAtLS0qL1xcbiNjb250ZW50LmNvbnRhY3RzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoOyBcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5pbmZvQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luOiA1dmggMi41dnc7XFxufVxcblxcbi5pbmZvR3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNXZ3IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNXZoIDV2aCA1dmg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmluZm9HcmlkIHB7XFxuICAgIG1hcmdpbi10b3A6IDF2aDtcXG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuI2xvY2F0aW9uU3ltYm9sIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuI3Bob25lU3ltYm9sIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuI2VtYWlsU3ltYm9sIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmhvdXJzQ29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzogMXZoIDF2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0NSwgMjQ1LCAwLjMpO1xcbn1cXG5cXG4uaG91cnNDb250YWluZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZ2FwOiAydmg7XFxuICAgIG1hcmdpbi10b3A6IDF2aDtcXG59XFxuXFxuLnNvbWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjV2aDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEuMzVyZW07XFxuICAgIGdhcDogMi41dmg7XFxufVxcblxcbi5zb21lQ29udGFpbmVyIHB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDUsIDI0NSwgMC4zKTtcXG59XFxuXFxuLmxpbmtDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDV2dztcXG59XFxuXFxuLmxpbmtDb250YWluZXIgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAyLjV2aCAxdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDUsIDI0NSwgMC4zKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBLHNCQUFzQjtBQUN0Qiw2QkFBNkI7O0FBRTdCO0lBQ0kseURBQXlDO0lBQ3pDLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUEsYUFBYTs7QUFFYjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFHQSxXQUFXOztBQUVYO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDOztBQUVBLGlCQUFpQjtBQUNqQiw2QkFBNkI7O0FBRTdCO0lBQ0kseURBQXVDO0lBQ3ZDLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSx5REFBMkM7SUFDM0MsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlEQUE2QztJQUM3Qyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx5REFBZ0Q7SUFDaEQsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseURBQXdDO0lBQ3hDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiAtLS0gTUFJTiBQQUdFIC0tLSAqL1xcbi8qIGJhY2tncm91bmQgZm9yIGhvbWUgcGFnZSAqL1xcblxcbiNjb250ZW50LmhvbWUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2J1cmdlci5qcGcnKTsgXFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDsgXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5cXG4jaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uYnV0dG9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMi41dnc7XFxufVxcblxcbi5idXR0b25zQ29udGFpbmVyID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIGhlYWRsaW5lICovXFxuXFxuI2hlYWRsaW5lQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1dmg7XFxufVxcblxcbiNoZWFkbGluZUNvbnRhaW5lciBoM3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGxpbmVDb250YWluZXIgcHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5cXG4vKiBmb290ZXIgKi9cXG5cXG4jZm9vdGVyQ29udGFpbmVyIHtcXG4gICAgbWF4LWhlaWdodDogNXZoO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLyogLS0tIE1FTlUgLS0tICovXFxuLyogYmFja2dyb3VuZCBmb3IgbWVudSBwYWdlICovXFxuXFxuI2NvbnRlbnQubWVudSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvbWVudS5qcGcnKTsgXFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDsgXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jaXRlbUNvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzdncgMzV2dyAyN3Z3O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1dmggYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxdmggMi41dnc7XFxufVxcblxcbiNpdGVtQ29udGFpbmVyIGgyIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxufVxcblxcbiNpdGVtQ29udGFpbmVyICNidXJnZXJzQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbn1cXG5cXG4jaXRlbUNvbnRhaW5lciAjYmV2ZXJhZ2VzQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbn1cXG5cXG4jaXRlbUNvbnRhaW5lciAjYXBwZXRpemVyc0NvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDEwdmg7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG59XFxuXFxuI2l0ZW1Db250YWluZXIgPiBkaXYge1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICAgIHBhZGRpbmc6IDF2aCAxdnc7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuI2l0ZW1Db250YWluZXIgaDN7XFxuICAgIG1hcmdpbi10b3A6IDIuNXZoO1xcbn1cXG5cXG4vKiAtLS0gQ09OVEFDVFMgLS0tKi9cXG4jY29udGVudC5jb250YWN0cyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvY29udGFjdHMuanBnJyk7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDsgXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uaW5mb0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbjogNXZoIDIuNXZ3O1xcbn1cXG5cXG4uaW5mb0dyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDV2dyBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDV2aCA1dmggNXZoO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5pbmZvR3JpZCBwe1xcbiAgICBtYXJnaW4tdG9wOiAxdmg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbiNsb2NhdGlvblN5bWJvbCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvbWFwLW1hcmtlci5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuI3Bob25lU3ltYm9sIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9waG9uZS1pbi10YWxrLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4jZW1haWxTeW1ib2wge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2VtYWlsLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uaG91cnNDb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiAxdmggMXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQ1LCAyNDUsIDAuMyk7XFxufVxcblxcbi5ob3Vyc0NvbnRhaW5lciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBnYXA6IDJ2aDtcXG4gICAgbWFyZ2luLXRvcDogMXZoO1xcbn1cXG5cXG4uc29tZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyNXZoO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gICAgZ2FwOiAyLjV2aDtcXG59XFxuXFxuLnNvbWVDb250YWluZXIgcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0NSwgMjQ1LCAwLjMpO1xcbn1cXG5cXG4ubGlua0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXZ3O1xcbn1cXG5cXG4ubGlua0NvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDIuNXZoIDF2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0NSwgMjQ1LCAwLjMpO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGpvc2hkdWtlMTA/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+Sm9zaCBEdWtlPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPlxuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmNvbnN0IGNvbnRhY3RzID0gKCgpID0+IHtcbiAgICBjb25zdCBpbmZvID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnRDb250YWluZXIuY2xhc3NOYW1lID0gXCJpbmZvQ29udGFpbmVyXCI7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudEdyaWQuY2xhc3NOYW1lID0gJ2luZm9HcmlkJztcbiAgICAgICAgY29uc3QgbG9jYXRpb25TeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcmMnKTtcbiAgICAgICAgbG9jYXRpb25TeW1ib2wuaWQgPSAnbG9jYXRpb25TeW1ib2wnO1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBcIkJ1cmdlciBSb2FkIDEsIEJ1cmdlcnRvd25cIjtcbiAgICAgICAgY29uc3QgcGhvbmVTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcmMnKTtcbiAgICAgICAgcGhvbmVTeW1ib2wuaWQgPSAncGhvbmVTeW1ib2wnO1xuICAgICAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGhvbmUudGV4dENvbnRlbnQgPSAnMS0yMjItMzMzLTQ1NDUnO1xuICAgICAgICBjb25zdCBlbWFpbFN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NyYycpO1xuICAgICAgICBlbWFpbFN5bWJvbC5pZCA9IFwiZW1haWxTeW1ib2xcIjtcbiAgICAgICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVtYWlsLnRleHRDb250ZW50ID0gXCJpbmZvQGVtYWlsLmNvbVwiO1xuXG4gICAgICAgIGVsZW1lbnRHcmlkLmFwcGVuZENoaWxkKGxvY2F0aW9uU3ltYm9sKTtcbiAgICAgICAgZWxlbWVudEdyaWQuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICAgICAgICBlbGVtZW50R3JpZC5hcHBlbmRDaGlsZChwaG9uZVN5bWJvbCk7XG4gICAgICAgIGVsZW1lbnRHcmlkLmFwcGVuZENoaWxkKHBob25lKTtcbiAgICAgICAgZWxlbWVudEdyaWQuYXBwZW5kQ2hpbGQoZW1haWxTeW1ib2wpO1xuICAgICAgICBlbGVtZW50R3JpZC5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudEdyaWQpO1xuICAgICAgICByZXR1cm4gZWxlbWVudENvbnRhaW5lcjtcbiAgICB9XG4gICAgLy8gY3JlYXRlIG9wZW5pbmcgaG91cnMgdG8gdGhlIHBhZ2VcbiAgICBjb25zdCBob3VycyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudENvbnRhaW5lciA9IGNvbnRhY3RzLmluZm8oKTtcbiAgICAgICAgY29uc3QgaG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG91cnNDb250YWluZXIuY2xhc3NOYW1lID0gJ2hvdXJzQ29udGFpbmVyJztcbiAgICAgICAgY29uc3QgZGF5cyA9IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScsICdTdW5kYXknXTtcbiAgICAgICAgZGF5cy5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF5Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGF5Q2FyZC5pZCA9IGRheS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gZGF5O1xuICAgICAgICAgICAgbGV0IG9wZW5pbmdIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcbiAgICAgICAgICAgIG9wZW5pbmdIb3Vycy5pZCA9IGRheS50b0xvd2VyQ2FzZSgpICsgJ3RpbWUnO1xuICAgICAgICAgICAgb3BlbmluZ0hvdXJzLnRleHRDb250ZW50ID0gJzlhbSB0byA5cG0nO1xuICAgICAgICAgICAgZGF5Q2FyZC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgICAgIGRheUNhcmQuYXBwZW5kQ2hpbGQob3BlbmluZ0hvdXJzKTtcbiAgICAgICAgICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRheUNhcmQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0NvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q29udGFpbmVyO1xuICAgIH1cbiAgICAvLyBjaGFuZ2Ugb3BlbmluZyBob3VycyBieSBjaG9zZW4gZGF0ZSBhbmQgbmV3IHRpbWVcbiAgICBjb25zdCBjaGFuZ2VIb3VycyA9IChkYXksIHRpbWUpID0+IHtcbiAgICAgICAgY29uc3Qgb3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRheS50b0xvd2VyQ2FzZSgpKyd0aW1lJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKG9wZW4pO1xuICAgICAgICBvcGVuLnRleHRDb250ZW50ID0gdGltZTtcbiAgICAgICAgcmV0dXJuIG9wZW47XG4gICAgfVxuICAgIC8vY3JlYXRlcyAzIHNvY2lhbCBtZWRpYSBtZW50aW9ucyB0byB0aGUgcGFnZSBieSBkZWZhdWx0IChsaW5rcyBub3QgZGVmaW5lZClcbiAgICBjb25zdCBzb21lID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzb21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNvbWVDb250YWluZXIuY2xhc3NOYW1lID0gJ3NvbWVDb250YWluZXInO1xuXG4gICAgICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0ZXh0RWxlbWVudC5pZCA9ICdzb21lVGV4dCc7XG4gICAgICAgIHRleHRFbGVtZW50LnRleHRDb250ZW50ID0gJ091ciBTb2NpYWwgTWVkaWFzOic7XG4gICAgICAgIHNvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IGxpbmtDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlua0NvbnRhaW5lci5jbGFzc05hbWUgPSAnbGlua0NvbnRhaW5lcic7XG5cbiAgICAgICAgY29uc3Qgc29tZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc29tZTEuaWQgPSAnc29jaWFsTWVkaWExJztcbiAgICAgICAgc29tZTEudGV4dENvbnRlbnQgPSAnU29jaWFsIE1lZGlhIDEnO1xuXG4gICAgICAgIGNvbnN0IHNvbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNvbWUyLmlkID0gJ3NvY2lhbE1lZGlhMic7XG4gICAgICAgIHNvbWUyLnRleHRDb250ZW50ID0gJ1NvY2lhbCBNZWRpYSAyJztcblxuICAgICAgICBjb25zdCBzb21lMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzb21lMy5pZCA9ICdzb2NpYWxNZWRpYTMnO1xuICAgICAgICBzb21lMy50ZXh0Q29udGVudCA9ICdTb2NpYWwgTWVkaWEgMyc7XG5cbiAgICAgICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChzb21lMSk7XG4gICAgICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoc29tZTIpO1xuICAgICAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvbWUzKTtcbiAgICAgICAgc29tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rQ29udGFpbmVyKVxuICAgICAgICByZXR1cm4gc29tZUNvbnRhaW5lcjtcbiAgICB9XG4gICAgLy9BZGQgbmV3IHNvY2lhbCBtZWRpYSB0byB0aGUgcGFnZVxuICAgIGNvbnN0IGFkZFNvbWUgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmtDb250YWluZXInKTtcbiAgICAgICAgY29uc3Qgc29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzb21lLmlkID0gbmFtZTtcbiAgICAgICAgc29tZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc29tZSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50Q29udGFpbmVyO1xuICAgIH1cblxuICAgIHJldHVybiB7aW5mbywgaG91cnMsIGNoYW5nZUhvdXJzLCBzb21lLCBhZGRTb21lfTtcbn0pKCk7XG5cbmV4cG9ydCB7Y29udGFjdHN9OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBpbWcgZnJvbSAnLi9pbWcvYnVyZ2VyLmpwZyc7XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKCkgPT4ge1xuXG4gICAvKiBcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1nID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImJhY2tncm91bmRcIik7XG4gICAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBkaXZDb250ZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2ltZy9idXJnZXIuanBnJylcIjtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXRcIik7XG4gICAgfSAqL1xuICAgIFxuICAgIC8vIGNyZWF0ZSBlbGVtZW50cyBmb3IgaGVhZGVyXG4gICAgY29uc3QgaGVhZGVyRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXJDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXJDb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBoZWFkZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaGVhZGVyTmFtZS50ZXh0Q29udGVudCA9IFwiQnVyZ2VyIEJhclwiO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25zQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdidXR0b25zQ29udGFpbmVyJztcblxuICAgICAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGhvbWVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdob21lQnV0dG9uJyk7XG4gICAgICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblxuICAgICAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51QnV0dG9uJyk7XG4gICAgICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICAgICAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnRhY3RCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0QnV0dG9uJyk7XG4gICAgICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RzXCI7XG5cbiAgICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJOYW1lKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGxpbmVFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkbGluZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkbGluZUNvbnRhaW5lci5pZCA9ICdoZWFkbGluZUNvbnRhaW5lcic7XG5cbiAgICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmVDb250YWluZXIpO1xuXG5cbiAgICAgICAgY29uc3QgaGVhZGxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgaGVhZGxpbmUxLnRleHRDb250ZW50ID0gXCJIQVZFIFlPVSBGT1VORCBUSEUgQkVTVCBCVVJHRVJTIElOIFRPV04/XCI7XG4gICAgICAgIGNvbnN0IGhlYWRsaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaGVhZGxpbmUyLnRleHRDb250ZW50ID0gXCJKb2luIHVzIGZvciB5b3VyIG5leHQgbWVhbCB0byBmaW5kIGl0IG91dFwiXG5cbiAgICAgICAgaGVhZGxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmUxKTtcbiAgICAgICAgaGVhZGxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmUyKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYWdlRm9vdGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9vdGVyQ29udGFpbmVyLmlkID0gXCJmb290ZXJDb250YWluZXJcIjtcblxuICAgICAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAgICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGltYWdlQ3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpbWFnZUNyZWRpdC5pZCA9IFwiaW1hZ2VDcmVkaXRcIjtcbiAgICAgICAgaW1hZ2VDcmVkaXQudGV4dENvbnRlbnQgPSBcIkJhY2tncm91bmQgaW1hZ2UgaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zLzhsOFlsMnJ1VXNnXCI7XG4gICAgICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZUNyZWRpdCk7XG4gICAgICAgIHJldHVybiBmb290ZXJDb250YWluZXI7XG4gICAgfVxuXG5yZXR1cm4ge2hlYWRlckVsZW1lbnRzLCBoZWFkbGluZUVsZW1lbnQsIHBhZ2VGb290ZXJ9O1xuXG59KSgpO1xuXG5leHBvcnQge2NyZWF0ZU1haW59O1xuXG4iLCIvLyBiYWNrZ3JvdW5kIGltZyBodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvcGx3QkR3OXg1Y0UgYnkgU2xhc2hpbyBQaG90b2dyYXBoeVxuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVDb250YWluZXIuaWQgPSAnaXRlbUNvbnRhaW5lcic7XG4gICAgICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gXCJNRU5VXCI7XG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XG5cbiAgICAgICAgcmV0dXJuIG1lbnVDb250YWluZXI7XG4gICAgfVxuICAgIGNvbnN0IGZvb2RNZW51ID0gKG51bWJlcnMsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGZvb2RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZm9vZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGZvb2RIZWFkZXIudGV4dENvbnRlbnQgPSBjb250ZW50LnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGZvb2RDb250YWluZXIuaWQgPSBjb250ZW50ICsgJ0NvbnRhaW5lcic7XG4gICAgICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZEhlYWRlcik7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBudW1iZXJzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgZm9vZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgZm9vZEVsZW1lbnQuaWQgPSBjb250ZW50ICsgXCJFbGVtZW50XCIgKyBpbmRleDtcbiAgICAgICAgICAgIGxldCBmb29kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGZvb2RUZXh0LmlkID0gY29udGVudCArIFwiVGV4dFwiICsgaW5kZXg7XG4gICAgICAgICAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2RFbGVtZW50KTtcbiAgICAgICAgICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZFRleHQpO1xuICAgICAgICB9XG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBtZW51Q29udGFpbmVyO1xuICAgIH1cbiAgICBjb25zdCBhZGRGb29kcyA9IChpbmRleCwgbmFtZSwgdGV4dCwgcHJpY2UpID0+IHtcbiAgICAgICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2Vyc0VsZW1lbnQnK2luZGV4KTtcbiAgICAgICAgZm9vZE5hbWUudGV4dENvbnRlbnQgPSBuYW1lICsgXCIgXCIgKyBwcmljZSArIFwiICRcIjtcbiAgICAgICAgY29uc3QgZm9vZFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2Vyc1RleHQnK2luZGV4KTtcbiAgICAgICAgZm9vZFRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICBjb25zdCBhZGREcmlua3MgPSAoaW5kZXgsIG5hbWUsIHByaWNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRyaW5rTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZXZlcmFnZXNFbGVtZW50JytpbmRleCk7XG4gICAgICAgIGRyaW5rTmFtZS50ZXh0Q29udGVudCA9IG5hbWUgKyBcIiBcIiArIHByaWNlICsgXCIgJFwiO1xuICAgIH1cbiAgICBjb25zdCBhZGRBcHBldGl6ZXJzID0gKGluZGV4LCBuYW1lLCBwcmljZSkgPT4ge1xuICAgICAgICBjb25zdCBhcHBldGl6ZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGV0aXplcnNFbGVtZW50JytpbmRleCk7XG4gICAgICAgIGFwcGV0aXplck5hbWUudGV4dENvbnRlbnQgPSBuYW1lICsgXCIgXCIgKyBwcmljZSArIFwiICRcIjtcbiAgICB9XG4gICAgcmV0dXJuIHttZW51SXRlbSwgZm9vZE1lbnUsIGFkZEZvb2RzLCBhZGREcmlua3MsIGFkZEFwcGV0aXplcnN9O1xuXG59KSgpO1xuXG5leHBvcnQge2NyZWF0ZU1lbnV9O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7Y3JlYXRlTWFpbn0gZnJvbSAnLi9tYWluUGFnZSc7XG5pbXBvcnQge2NyZWF0ZU1lbnV9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQge2NvbnRhY3RzfSBmcm9tICcuL2NvbnRhY3RzJztcblxuY29uc29sZS5sb2coJ2xvYWQgaGVhZGVyJyk7XG5cbmNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5jb25zdCBoZWFkZXIgPSBjcmVhdGVNYWluLmhlYWRlckVsZW1lbnRzKCk7XG4vL0NyZWF0ZSBtYWluIHBhZ2UgYXMgZGVmYXVsdFxuZGl2Q29udGVudC5jbGFzc05hbWUgPSBcImhvbWVcIjtcbmNyZWF0ZU1haW5QYWdlKCk7XG5cbi8vIENob29zaW5nIHdoaWNoIHBhZ2UgdG8gZGlzcGxheVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykuZm9yRWFjaCh0YWJzID0+IHtcbiAgICB0YWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuaWQpO1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcImhvbWVCdXR0b25cIikge1xuICAgICAgICAgICAgZGl2Q29udGVudC5jbGFzc05hbWUgPSBcImhvbWVcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlIHRvIGhvbWVcIik7XG4gICAgICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgICAgIGNyZWF0ZU1haW5QYWdlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcIm1lbnVCdXR0b25cIikge1xuICAgICAgICAgICAgZGl2Q29udGVudC5jbGFzc05hbWUgPSBcIm1lbnVcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlIHRvIG1lbnVcIik7XG4gICAgICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgICAgIGNyZWF0ZU1lbnVQYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXZDb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGFjdHNcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlIHRvIGNvbnRhY3RzXCIpO1xuICAgICAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgICAgICBjcmVhdGVDb250YWN0cygpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuLy8gZGlzcGxheWluZyB0aGUgbWFpbiBwYWdlXG5mdW5jdGlvbiBjcmVhdGVNYWluUGFnZSgpIHtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY3JlYXRlTWFpbi5oZWFkbGluZUVsZW1lbnQoKTtcbiAgICBjcmVhdGVNYWluLnBhZ2VGb290ZXIoKTtcbn1cblxuLy9kaXNwbGF5aW5nIHRoZSBtZW51XG5mdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29uc3QgbWVudSA9IGNyZWF0ZU1lbnUubWVudUl0ZW0oKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIGFkZE1lbnVDb250ZW50KDQsIDMsIDMpO1xuICAgIGNyZWF0ZU1haW4ucGFnZUZvb3RlcigpO1xufVxuXG4vLyBjbGVhcmluZyBhbGwgb2YgdGhlIGVsZW1lbnRzXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgd2hpbGUgKGRpdkNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBkaXZDb250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxufVxuXG4vL2Rpc3BsYXkgdGhlIGNvbnRhY3RzIHBhZ2VcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RzKCkge1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RzLmhvdXJzKCkpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdHMuc29tZSgpKTtcbiAgICBjb250YWN0cy5jaGFuZ2VIb3VycyhcInNhdHVyZGF5XCIsIFwiMTBhbSB0byAxMXBtXCIpOyBcbiAgICBjb250YWN0cy5jaGFuZ2VIb3VycyhcInN1bmRheVwiLCBcIjExYW0gdG8gOHBtXCIpO1xuICAgIGNyZWF0ZU1haW4ucGFnZUZvb3RlcigpO1xufVxuXG4vLyBJbnB1dCB0aGUgY29udGVudCBmb3IgcmVzdGF1cmFudCBtZW51XG4vLyBBZGQgbnVtYmVyIG9mIGZvb2RzICYgZHJpbmtzICYgYXBwZXRpemVycyB3YW50ZWQgYXMgcGFyYW1ldGVyXG5mdW5jdGlvbiBhZGRNZW51Q29udGVudChidXJnZXJzLCBiZXZlcmFnZXMsIGFwcGV0aXplcnMpIHtcbiAgICBjb25zdCBtZW51QnVyZ2VycyA9IGNyZWF0ZU1lbnUuZm9vZE1lbnUoYnVyZ2VycywgJ2J1cmdlcnMnKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKG1lbnVCdXJnZXJzKTtcbiAgICBjb25zdCBtZW51RHJpbmtzID0gY3JlYXRlTWVudS5mb29kTWVudShiZXZlcmFnZXMsICdiZXZlcmFnZXMnKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKG1lbnVEcmlua3MpO1xuICAgIGNvbnN0IG1lbnVBcHBldGl6ZXJzID0gY3JlYXRlTWVudS5mb29kTWVudShhcHBldGl6ZXJzLCAnYXBwZXRpemVycycpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUFwcGV0aXplcnMpO1xuICAgIGNyZWF0ZU1lbnUuYWRkRm9vZHMoMCwgXCJDSEVFU0VCVVJHRVJcIiwgXCJiZWVmLCBvbmlvbiwgbGV0dHVjZSwgY2hlZXNlXCIsIDEwKTtcbiAgICBjcmVhdGVNZW51LmFkZEZvb2RzKDEsIFwiQkVFRiBCVVJHRVJcIiwgXCJCYXNpYyBCdXJnZXJcIiwgMTApO1xuICAgIGNyZWF0ZU1lbnUuYWRkRm9vZHMoMiwgXCJDSElDS0VOIEJVUkdFUlwiLCBcIkJhc2ljIEJ1cmdlclwiLCAxMCk7XG4gICAgY3JlYXRlTWVudS5hZGRGb29kcygzLCBcIkhBTExPVU1JIEJVUkdFUlwiLCBcIkJhc2ljIEJ1cmdlclwiLCAxNSk7XG4gICAgY3JlYXRlTWVudS5hZGREcmlua3MoMCwgXCJCRUVSXCIsIDcpO1xuICAgIGNyZWF0ZU1lbnUuYWRkRHJpbmtzKDEsIFwiU09GVCBEUklOS1NcIiwgNyk7XG4gICAgY3JlYXRlTWVudS5hZGREcmlua3MoMiwgXCJNSUxLU0hBS0VcIiwgNyk7XG4gICAgY3JlYXRlTWVudS5hZGRBcHBldGl6ZXJzKDAsIFwiRlJFTkNIIEZSSUVTXCIsIDUpO1xuICAgIGNyZWF0ZU1lbnUuYWRkQXBwZXRpemVycygxLCBcIkNISUNLRU4gV0lOR1NcIiwgNyk7XG4gICAgY3JlYXRlTWVudS5hZGRBcHBldGl6ZXJzKDIsIFwiT05JT04gUklOR1NcIiwgNSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9