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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nbody {\n    color: whitesmoke;\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n/* --- MAIN PAGE --- */\n/* background for home page */\n\n#content.home {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); \n    width: 100vw;\n    height: 100vh; \n    background-position: center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n/* header */\n\n#headerContainer {\n    height: 15vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.buttonsContainer {\n    display: flex;\n    gap: 2.5vw;\n}\n\n.buttonsContainer > button {\n    font-size: 1.5rem;\n}\n\n/* headline */\n\n#headlineContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 25vh;\n}\n\n#headlineContainer h3{\n    text-align: center;\n}\n\n#headlineContainer p{\n    font-size: 1rem;\n}\n\n/* footer */\n\n#footerContainer {\n    max-height: 5vh;\n    font-size: 0.75rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1vh;\n    gap: 0.5vw;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n#footerContainer a{\n    text-decoration: underline;\n    color: whitesmoke;\n}\n\n/* --- MENU --- */\n/* background for menu page */\n\n#content.menu {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); \n    width: 100vw;\n    height: 100vh; \n    background-position: center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#itemContainer {\n    font-size: 2.5rem;\n    display: grid;\n    grid-template-columns: 33vw 35vw 27vw;\n    grid-template-rows: 15vh auto;\n    text-align: center;\n    padding: 1vh 2.5vw;\n}\n\n#itemContainer h2 {\n    grid-column-start: 2;\n}\n\n#itemContainer #burgersContainer {\n    grid-row-start: 2;\n    grid-column-start: 1;\n}\n\n#itemContainer #beveragesContainer {\n    grid-row-start: 2;\n    grid-column-start: 3;\n}\n\n#itemContainer #appetizersContainer {\n    margin-top: 10vh;\n    grid-row-start: 3;\n    grid-column-start: 1;\n}\n\n#itemContainer > div {\n    font-size: 0.85rem;\n    padding: 1vh 1vw;\n    border: solid 1px grey;\n    border-radius: 6px;\n}\n\n#itemContainer h3{\n    margin-top: 2.5vh;\n}\n\n/* --- CONTACTS ---*/\n#content.contacts {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    width: 100vw;\n    height: 100vh; \n    background-position: center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.infoContainer {\n    display: flex;\n    justify-content: space-between;\n    color: black;\n    font-size: 1rem;\n    margin: 5vh 2.5vw;\n}\n\n.infoGrid {\n    display: grid;\n    grid-template-columns: 5vw auto;\n    grid-template-rows: 5vh 5vh 5vh;\n    text-align: left;\n    font-size: 1rem;\n}\n\n.infoGrid p{\n    margin-top: 1vh;\n    margin-left: 1vw;\n}\n\n#locationSymbol {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n}\n\n#phoneSymbol {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-repeat: no-repeat;\n}\n\n#emailSymbol {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n    background-repeat: no-repeat;\n}\n\n.hoursContainer {\n    border: 1px solid black;\n    border-radius: 6px;\n    padding: 1vh 1vw;\n    background-color: rgba(247, 245, 245, 0.3);\n}\n\n.hoursContainer > div {\n    display: flex;\n    justify-content: space-between;\n    font-size: 1.25rem;\n    gap: 2vh;\n    margin-top: 1vh;\n}\n\n.someContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 25vh;\n    color: black;\n    font-size: 1.35rem;\n    gap: 2.5vh;\n}\n\n.someContainer p{\n    background-color: rgba(247, 245, 245, 0.3);\n}\n\n.linkContainer {\n    display: flex;\n    gap: 5vw;\n}\n\n.linkContainer > button {\n    font-size: 1.25rem;\n    font-weight: bold;\n    padding: 2.5vh 1vw;\n    background-color: rgba(247, 245, 245, 0.3);\n    border: solid 2px black;\n    border-radius: 6px;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,iBAAiB;AACrB;;AAEA,sBAAsB;AACtB,6BAA6B;;AAE7B;IACI,yDAAyC;IACzC,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA,WAAW;;AAEX;IACI,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,iBAAiB;AACrB;;AAEA,aAAa;;AAEb;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA,WAAW;;AAEX;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,UAAU;IACV,oCAAoC;AACxC;;AAEA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA,iBAAiB;AACjB,6BAA6B;;AAE7B;IACI,yDAAuC;IACvC,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,qCAAqC;IACrC,6BAA6B;IAC7B,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,oBAAoB;AACpB;IACI,yDAA2C;IAC3C,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,+BAA+B;IAC/B,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,yDAA6C;IAC7C,4BAA4B;AAChC;;AAEA;IACI,yDAAgD;IAChD,4BAA4B;AAChC;;AAEA;IACI,yDAAwC;IACxC,4BAA4B;AAChC;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,0CAA0C;IAC1C,uBAAuB;IACvB,kBAAkB;AACtB","sourcesContent":["html {\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nbody {\n    color: whitesmoke;\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n/* --- MAIN PAGE --- */\n/* background for home page */\n\n#content.home {\n    background-image: url('./img/burger.jpg'); \n    width: 100vw;\n    height: 100vh; \n    background-position: center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n/* header */\n\n#headerContainer {\n    height: 15vh;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n.buttonsContainer {\n    display: flex;\n    gap: 2.5vw;\n}\n\n.buttonsContainer > button {\n    font-size: 1.5rem;\n}\n\n/* headline */\n\n#headlineContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 25vh;\n}\n\n#headlineContainer h3{\n    text-align: center;\n}\n\n#headlineContainer p{\n    font-size: 1rem;\n}\n\n/* footer */\n\n#footerContainer {\n    max-height: 5vh;\n    font-size: 0.75rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1vh;\n    gap: 0.5vw;\n    background-color: rgba(0, 0, 0, 0.3);\n}\n\n#footerContainer a{\n    text-decoration: underline;\n    color: whitesmoke;\n}\n\n/* --- MENU --- */\n/* background for menu page */\n\n#content.menu {\n    background-image: url('./img/menu.jpg'); \n    width: 100vw;\n    height: 100vh; \n    background-position: center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#itemContainer {\n    font-size: 2.5rem;\n    display: grid;\n    grid-template-columns: 33vw 35vw 27vw;\n    grid-template-rows: 15vh auto;\n    text-align: center;\n    padding: 1vh 2.5vw;\n}\n\n#itemContainer h2 {\n    grid-column-start: 2;\n}\n\n#itemContainer #burgersContainer {\n    grid-row-start: 2;\n    grid-column-start: 1;\n}\n\n#itemContainer #beveragesContainer {\n    grid-row-start: 2;\n    grid-column-start: 3;\n}\n\n#itemContainer #appetizersContainer {\n    margin-top: 10vh;\n    grid-row-start: 3;\n    grid-column-start: 1;\n}\n\n#itemContainer > div {\n    font-size: 0.85rem;\n    padding: 1vh 1vw;\n    border: solid 1px grey;\n    border-radius: 6px;\n}\n\n#itemContainer h3{\n    margin-top: 2.5vh;\n}\n\n/* --- CONTACTS ---*/\n#content.contacts {\n    background-image: url('./img/contacts.jpg');\n    width: 100vw;\n    height: 100vh; \n    background-position: center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.infoContainer {\n    display: flex;\n    justify-content: space-between;\n    color: black;\n    font-size: 1rem;\n    margin: 5vh 2.5vw;\n}\n\n.infoGrid {\n    display: grid;\n    grid-template-columns: 5vw auto;\n    grid-template-rows: 5vh 5vh 5vh;\n    text-align: left;\n    font-size: 1rem;\n}\n\n.infoGrid p{\n    margin-top: 1vh;\n    margin-left: 1vw;\n}\n\n#locationSymbol {\n    background-image: url('./img/map-marker.png');\n    background-repeat: no-repeat;\n}\n\n#phoneSymbol {\n    background-image: url('./img/phone-in-talk.png');\n    background-repeat: no-repeat;\n}\n\n#emailSymbol {\n    background-image: url('./img/email.png');\n    background-repeat: no-repeat;\n}\n\n.hoursContainer {\n    border: 1px solid black;\n    border-radius: 6px;\n    padding: 1vh 1vw;\n    background-color: rgba(247, 245, 245, 0.3);\n}\n\n.hoursContainer > div {\n    display: flex;\n    justify-content: space-between;\n    font-size: 1.25rem;\n    gap: 2vh;\n    margin-top: 1vh;\n}\n\n.someContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 25vh;\n    color: black;\n    font-size: 1.35rem;\n    gap: 2.5vh;\n}\n\n.someContainer p{\n    background-color: rgba(247, 245, 245, 0.3);\n}\n\n.linkContainer {\n    display: flex;\n    gap: 5vw;\n}\n\n.linkContainer > button {\n    font-size: 1.25rem;\n    font-weight: bold;\n    padding: 2.5vh 1vw;\n    background-color: rgba(247, 245, 245, 0.3);\n    border: solid 2px black;\n    border-radius: 6px;\n}"],"sourceRoot":""}]);
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
    _mainPage__WEBPACK_IMPORTED_MODULE_0__.createMain.pageFooter("https://unsplash.com/@joshduke10?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    "Josh Duke", "https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", "Unsplash");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR3FCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFROztBQUVSLENBQUM7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQzVGRTs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlCQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaLENBQUM7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hEcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJzQztBQUNKO0FBQ0U7O0FBRXBDOztBQUVBOztBQUVBLGVBQWUsZ0VBQXlCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQTBCO0FBQzlCLElBQUksNERBQXFCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNEQUFtQjtBQUNwQztBQUNBO0FBQ0EsSUFBSSw0REFBcUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFEQUFjO0FBQ3pDLDJCQUEyQixvREFBYTtBQUN4QyxJQUFJLDJEQUFvQjtBQUN4QixJQUFJLDJEQUFvQjtBQUN4QixJQUFJLDREQUFxQjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzREFBbUI7QUFDM0M7QUFDQSx1QkFBdUIsc0RBQW1CO0FBQzFDO0FBQ0EsMkJBQTJCLHNEQUFtQjtBQUM5QztBQUNBLElBQUksc0RBQW1CO0FBQ3ZCLElBQUksc0RBQW1CO0FBQ3ZCLElBQUksc0RBQW1CO0FBQ3ZCLElBQUksc0RBQW1CO0FBQ3ZCLElBQUksdURBQW9CO0FBQ3hCLElBQUksdURBQW9CO0FBQ3hCLElBQUksdURBQW9CO0FBQ3hCLElBQUksMkRBQXdCO0FBQzVCLElBQUksMkRBQXdCO0FBQzVCLElBQUksMkRBQXdCO0FBQzVCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9idXJnZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvbWVudS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9jb250YWN0cy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZy9tYXAtbWFya2VyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1nL3Bob25lLWluLXRhbGsucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9pbWcvZW1haWwucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiAtLS0gTUFJTiBQQUdFIC0tLSAqL1xcbi8qIGJhY2tncm91bmQgZm9yIGhvbWUgcGFnZSAqL1xcblxcbiNjb250ZW50LmhvbWUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpOyBcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoOyBcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi8qIGhlYWRlciAqL1xcblxcbiNoZWFkZXJDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbi5idXR0b25zQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyLjV2dztcXG59XFxuXFxuLmJ1dHRvbnNDb250YWluZXIgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogaGVhZGxpbmUgKi9cXG5cXG4jaGVhZGxpbmVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjV2aDtcXG59XFxuXFxuI2hlYWRsaW5lQ29udGFpbmVyIGgze1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkbGluZUNvbnRhaW5lciBwe1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi8qIGZvb3RlciAqL1xcblxcbiNmb290ZXJDb250YWluZXIge1xcbiAgICBtYXgtaGVpZ2h0OiA1dmg7XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgZ2FwOiAwLjV2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4jZm9vdGVyQ29udGFpbmVyIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLyogLS0tIE1FTlUgLS0tICovXFxuLyogYmFja2dyb3VuZCBmb3IgbWVudSBwYWdlICovXFxuXFxuI2NvbnRlbnQubWVudSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7IFxcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7IFxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2l0ZW1Db250YWluZXIge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzM3Z3IDM1dncgMjd2dztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXZoIGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXZoIDIuNXZ3O1xcbn1cXG5cXG4jaXRlbUNvbnRhaW5lciBoMiB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbn1cXG5cXG4jaXRlbUNvbnRhaW5lciAjYnVyZ2Vyc0NvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG59XFxuXFxuI2l0ZW1Db250YWluZXIgI2JldmVyYWdlc0NvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXG59XFxuXFxuI2l0ZW1Db250YWluZXIgI2FwcGV0aXplcnNDb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xcbiAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxufVxcblxcbiNpdGVtQ29udGFpbmVyID4gZGl2IHtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgICBwYWRkaW5nOiAxdmggMXZ3O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbiNpdGVtQ29udGFpbmVyIGgze1xcbiAgICBtYXJnaW4tdG9wOiAyLjV2aDtcXG59XFxuXFxuLyogLS0tIENPTlRBQ1RTIC0tLSovXFxuI2NvbnRlbnQuY29udGFjdHMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7IFxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmluZm9Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW46IDV2aCAyLjV2dztcXG59XFxuXFxuLmluZm9HcmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1dncgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1dmggNXZoIDV2aDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uaW5mb0dyaWQgcHtcXG4gICAgbWFyZ2luLXRvcDogMXZoO1xcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4jbG9jYXRpb25TeW1ib2wge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4jcGhvbmVTeW1ib2wge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4jZW1haWxTeW1ib2wge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uaG91cnNDb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiAxdmggMXZ3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQ1LCAyNDUsIDAuMyk7XFxufVxcblxcbi5ob3Vyc0NvbnRhaW5lciA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBnYXA6IDJ2aDtcXG4gICAgbWFyZ2luLXRvcDogMXZoO1xcbn1cXG5cXG4uc29tZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyNXZoO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcXG4gICAgZ2FwOiAyLjV2aDtcXG59XFxuXFxuLnNvbWVDb250YWluZXIgcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0NSwgMjQ1LCAwLjMpO1xcbn1cXG5cXG4ubGlua0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXZ3O1xcbn1cXG5cXG4ubGlua0NvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDIuNXZoIDF2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0NSwgMjQ1LCAwLjMpO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUEsc0JBQXNCO0FBQ3RCLDZCQUE2Qjs7QUFFN0I7SUFDSSx5REFBeUM7SUFDekMsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQSxhQUFhOztBQUViO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDVixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVBLGlCQUFpQjtBQUNqQiw2QkFBNkI7O0FBRTdCO0lBQ0kseURBQXVDO0lBQ3ZDLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSx5REFBMkM7SUFDM0MsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlEQUE2QztJQUM3Qyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx5REFBZ0Q7SUFDaEQsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0kseURBQXdDO0lBQ3hDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiAtLS0gTUFJTiBQQUdFIC0tLSAqL1xcbi8qIGJhY2tncm91bmQgZm9yIGhvbWUgcGFnZSAqL1xcblxcbiNjb250ZW50LmhvbWUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2J1cmdlci5qcGcnKTsgXFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDsgXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5cXG4jaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uYnV0dG9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMi41dnc7XFxufVxcblxcbi5idXR0b25zQ29udGFpbmVyID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIGhlYWRsaW5lICovXFxuXFxuI2hlYWRsaW5lQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1dmg7XFxufVxcblxcbiNoZWFkbGluZUNvbnRhaW5lciBoM3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGxpbmVDb250YWluZXIgcHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5cXG4jZm9vdGVyQ29udGFpbmVyIHtcXG4gICAgbWF4LWhlaWdodDogNXZoO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICAgIGdhcDogMC41dnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuI2Zvb3RlckNvbnRhaW5lciBhe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi8qIC0tLSBNRU5VIC0tLSAqL1xcbi8qIGJhY2tncm91bmQgZm9yIG1lbnUgcGFnZSAqL1xcblxcbiNjb250ZW50Lm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL21lbnUuanBnJyk7IFxcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7IFxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2l0ZW1Db250YWluZXIge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzM3Z3IDM1dncgMjd2dztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNXZoIGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXZoIDIuNXZ3O1xcbn1cXG5cXG4jaXRlbUNvbnRhaW5lciBoMiB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbn1cXG5cXG4jaXRlbUNvbnRhaW5lciAjYnVyZ2Vyc0NvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG59XFxuXFxuI2l0ZW1Db250YWluZXIgI2JldmVyYWdlc0NvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXG59XFxuXFxuI2l0ZW1Db250YWluZXIgI2FwcGV0aXplcnNDb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xcbiAgICBncmlkLXJvdy1zdGFydDogMztcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxufVxcblxcbiNpdGVtQ29udGFpbmVyID4gZGl2IHtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgICBwYWRkaW5nOiAxdmggMXZ3O1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbiNpdGVtQ29udGFpbmVyIGgze1xcbiAgICBtYXJnaW4tdG9wOiAyLjV2aDtcXG59XFxuXFxuLyogLS0tIENPTlRBQ1RTIC0tLSovXFxuI2NvbnRlbnQuY29udGFjdHMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2NvbnRhY3RzLmpwZycpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7IFxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmluZm9Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW46IDV2aCAyLjV2dztcXG59XFxuXFxuLmluZm9HcmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1dncgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1dmggNXZoIDV2aDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uaW5mb0dyaWQgcHtcXG4gICAgbWFyZ2luLXRvcDogMXZoO1xcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4jbG9jYXRpb25TeW1ib2wge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL21hcC1tYXJrZXIucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbiNwaG9uZVN5bWJvbCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvcGhvbmUtaW4tdGFsay5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuI2VtYWlsU3ltYm9sIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9lbWFpbC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmhvdXJzQ29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzogMXZoIDF2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDI0NSwgMjQ1LCAwLjMpO1xcbn1cXG5cXG4uaG91cnNDb250YWluZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZ2FwOiAydmg7XFxuICAgIG1hcmdpbi10b3A6IDF2aDtcXG59XFxuXFxuLnNvbWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjV2aDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEuMzVyZW07XFxuICAgIGdhcDogMi41dmg7XFxufVxcblxcbi5zb21lQ29udGFpbmVyIHB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDUsIDI0NSwgMC4zKTtcXG59XFxuXFxuLmxpbmtDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDV2dztcXG59XFxuXFxuLmxpbmtDb250YWluZXIgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAyLjV2aCAxdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDUsIDI0NSwgMC4zKTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBjb250YWN0cyA9ICgoKSA9PiB7XG4gICAgY29uc3QgaW5mbyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaW5mb0NvbnRhaW5lclwiO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnRHcmlkLmNsYXNzTmFtZSA9ICdpbmZvR3JpZCc7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3JjJyk7XG4gICAgICAgIGxvY2F0aW9uU3ltYm9sLmlkID0gJ2xvY2F0aW9uU3ltYm9sJztcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gXCJCdXJnZXIgUm9hZCAxLCBCdXJnZXJ0b3duXCI7XG4gICAgICAgIGNvbnN0IHBob25lU3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3JjJyk7XG4gICAgICAgIHBob25lU3ltYm9sLmlkID0gJ3Bob25lU3ltYm9sJztcbiAgICAgICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBob25lLnRleHRDb250ZW50ID0gJzEtMjIyLTMzMy00NTQ1JztcbiAgICAgICAgY29uc3QgZW1haWxTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcmMnKTtcbiAgICAgICAgZW1haWxTeW1ib2wuaWQgPSBcImVtYWlsU3ltYm9sXCI7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlbWFpbC50ZXh0Q29udGVudCA9IFwiaW5mb0BlbWFpbC5jb21cIjtcblxuICAgICAgICBlbGVtZW50R3JpZC5hcHBlbmRDaGlsZChsb2NhdGlvblN5bWJvbCk7XG4gICAgICAgIGVsZW1lbnRHcmlkLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgICAgICAgZWxlbWVudEdyaWQuYXBwZW5kQ2hpbGQocGhvbmVTeW1ib2wpO1xuICAgICAgICBlbGVtZW50R3JpZC5hcHBlbmRDaGlsZChwaG9uZSk7XG4gICAgICAgIGVsZW1lbnRHcmlkLmFwcGVuZENoaWxkKGVtYWlsU3ltYm9sKTtcbiAgICAgICAgZWxlbWVudEdyaWQuYXBwZW5kQ2hpbGQoZW1haWwpO1xuICAgICAgICBlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRHcmlkKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRDb250YWluZXI7XG4gICAgfVxuICAgIC8vIGNyZWF0ZSBvcGVuaW5nIGhvdXJzIHRvIHRoZSBwYWdlXG4gICAgY29uc3QgaG91cnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRDb250YWluZXIgPSBjb250YWN0cy5pbmZvKCk7XG4gICAgICAgIGNvbnN0IGhvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvdXJzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdob3Vyc0NvbnRhaW5lcic7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknLCAnU3VuZGF5J107XG4gICAgICAgIGRheXMuZm9yRWFjaChkYXkgPT4ge1xuICAgICAgICAgICAgbGV0IGRheUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRheUNhcmQuaWQgPSBkYXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGRheTtcbiAgICAgICAgICAgIGxldCBvcGVuaW5nSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gICAgICAgICAgICBvcGVuaW5nSG91cnMuaWQgPSBkYXkudG9Mb3dlckNhc2UoKSArICd0aW1lJztcbiAgICAgICAgICAgIG9wZW5pbmdIb3Vycy50ZXh0Q29udGVudCA9ICc5YW0gdG8gOXBtJztcbiAgICAgICAgICAgIGRheUNhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgICAgICBkYXlDYXJkLmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vycyk7XG4gICAgICAgICAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlDYXJkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNDb250YWluZXIpO1xuICAgICAgICByZXR1cm4gZWxlbWVudENvbnRhaW5lcjtcbiAgICB9XG4gICAgLy8gY2hhbmdlIG9wZW5pbmcgaG91cnMgYnkgY2hvc2VuIGRhdGUgYW5kIG5ldyB0aW1lXG4gICAgY29uc3QgY2hhbmdlSG91cnMgPSAoZGF5LCB0aW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXkudG9Mb3dlckNhc2UoKSsndGltZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhvcGVuKTtcbiAgICAgICAgb3Blbi50ZXh0Q29udGVudCA9IHRpbWU7XG4gICAgICAgIHJldHVybiBvcGVuO1xuICAgIH1cbiAgICAvL2NyZWF0ZXMgMyBzb2NpYWwgbWVkaWEgbWVudGlvbnMgdG8gdGhlIHBhZ2UgYnkgZGVmYXVsdCAobGlua3Mgbm90IGRlZmluZWQpXG4gICAgY29uc3Qgc29tZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc29tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzb21lQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzb21lQ29udGFpbmVyJztcblxuICAgICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGV4dEVsZW1lbnQuaWQgPSAnc29tZVRleHQnO1xuICAgICAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9ICdPdXIgU29jaWFsIE1lZGlhczonO1xuICAgICAgICBzb21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRFbGVtZW50KTtcblxuICAgICAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpbmtDb250YWluZXIuY2xhc3NOYW1lID0gJ2xpbmtDb250YWluZXInO1xuXG4gICAgICAgIGNvbnN0IHNvbWUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNvbWUxLmlkID0gJ3NvY2lhbE1lZGlhMSc7XG4gICAgICAgIHNvbWUxLnRleHRDb250ZW50ID0gJ1NvY2lhbCBNZWRpYSAxJztcblxuICAgICAgICBjb25zdCBzb21lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzb21lMi5pZCA9ICdzb2NpYWxNZWRpYTInO1xuICAgICAgICBzb21lMi50ZXh0Q29udGVudCA9ICdTb2NpYWwgTWVkaWEgMic7XG5cbiAgICAgICAgY29uc3Qgc29tZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc29tZTMuaWQgPSAnc29jaWFsTWVkaWEzJztcbiAgICAgICAgc29tZTMudGV4dENvbnRlbnQgPSAnU29jaWFsIE1lZGlhIDMnO1xuXG4gICAgICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoc29tZTEpO1xuICAgICAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKHNvbWUyKTtcbiAgICAgICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChzb21lMyk7XG4gICAgICAgIHNvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobGlua0NvbnRhaW5lcilcbiAgICAgICAgcmV0dXJuIHNvbWVDb250YWluZXI7XG4gICAgfVxuICAgIC8vQWRkIG5ldyBzb2NpYWwgbWVkaWEgdG8gdGhlIHBhZ2VcbiAgICBjb25zdCBhZGRTb21lID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc29tZS5pZCA9IG5hbWU7XG4gICAgICAgIHNvbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICBlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHNvbWUpO1xuICAgICAgICByZXR1cm4gZWxlbWVudENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge2luZm8sIGhvdXJzLCBjaGFuZ2VIb3Vycywgc29tZSwgYWRkU29tZX07XG59KSgpO1xuXG5leHBvcnQge2NvbnRhY3RzfTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKCkgPT4ge1xuICAgIFxuICAgIC8vIGNyZWF0ZSBlbGVtZW50cyBmb3IgaGVhZGVyXG4gICAgY29uc3QgaGVhZGVyRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXJDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXJDb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBoZWFkZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaGVhZGVyTmFtZS50ZXh0Q29udGVudCA9IFwiQnVyZ2VyIEJhclwiO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25zQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdidXR0b25zQ29udGFpbmVyJztcblxuICAgICAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGhvbWVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdob21lQnV0dG9uJyk7XG4gICAgICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblxuICAgICAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51QnV0dG9uJyk7XG4gICAgICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICAgICAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnRhY3RCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0QnV0dG9uJyk7XG4gICAgICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RzXCI7XG5cbiAgICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJOYW1lKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbnNDb250YWluZXIpO1xuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGxpbmVFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkbGluZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkbGluZUNvbnRhaW5lci5pZCA9ICdoZWFkbGluZUNvbnRhaW5lcic7XG5cbiAgICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGxpbmVDb250YWluZXIpO1xuXG5cbiAgICAgICAgY29uc3QgaGVhZGxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgaGVhZGxpbmUxLnRleHRDb250ZW50ID0gXCJIQVZFIFlPVSBGT1VORCBUSEUgQkVTVCBCVVJHRVJTIElOIFRPV04/XCI7XG4gICAgICAgIGNvbnN0IGhlYWRsaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaGVhZGxpbmUyLnRleHRDb250ZW50ID0gXCJKb2luIHVzIGZvciB5b3VyIG5leHQgbWVhbCB0byBmaW5kIGl0IG91dFwiXG5cbiAgICAgICAgaGVhZGxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmUxKTtcbiAgICAgICAgaGVhZGxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmUyKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYWdlRm9vdGVyID0gKGxpbmsxLCB0ZXh0MSwgbGluazIsIHRleHQyKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb290ZXJDb250YWluZXIuaWQgPSBcImZvb3RlckNvbnRhaW5lclwiO1xuXG4gICAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVsZW1lbnRUZXh0LmlkID0gJ2ltYWdlQ3JlZGl0JztcbiAgICAgICAgZWxlbWVudFRleHQudGV4dENvbnRlbnQgPSAnQmFja2dyb3VuZCBwaG90byBieTogJ1xuICAgICAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudFRleHQpO1xuXG4gICAgICAgIGNvbnN0IGltYWdlQ3JlZGl0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgaW1hZ2VDcmVkaXQxLmlkID0gXCJpbWFnZUNyZWRpdFwiO1xuICAgICAgICBpbWFnZUNyZWRpdDEuaHJlZiA9IGxpbmsxO1xuICAgICAgICBpbWFnZUNyZWRpdDEudGV4dENvbnRlbnQgPSB0ZXh0MTtcbiAgICAgICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlQ3JlZGl0MSk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudFRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlbGVtZW50VGV4dDIuaWQgPSAnaW1hZ2VDcmVkaXQnO1xuICAgICAgICBlbGVtZW50VGV4dDIudGV4dENvbnRlbnQgPSAnIG9uICc7XG4gICAgICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50VGV4dDIpO1xuXG4gICAgICAgIGNvbnN0IGltYWdlQ3JlZGl0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgaW1hZ2VDcmVkaXQyLmlkID0gXCJpbWFnZUNyZWRpdFwiO1xuICAgICAgICBpbWFnZUNyZWRpdDIuaHJlZiA9IGxpbmsyO1xuICAgICAgICBpbWFnZUNyZWRpdDIudGV4dENvbnRlbnQgPSB0ZXh0MjtcbiAgICAgICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlQ3JlZGl0Mik7XG4gICAgICAgIHJldHVybiBmb290ZXJDb250YWluZXI7XG4gICAgfVxuXG5yZXR1cm4ge2hlYWRlckVsZW1lbnRzLCBoZWFkbGluZUVsZW1lbnQsIHBhZ2VGb290ZXJ9O1xuXG59KSgpO1xuXG5leHBvcnQge2NyZWF0ZU1haW59O1xuXG4iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVDb250YWluZXIuaWQgPSAnaXRlbUNvbnRhaW5lcic7XG4gICAgICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gXCJNRU5VXCI7XG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XG5cbiAgICAgICAgcmV0dXJuIG1lbnVDb250YWluZXI7XG4gICAgfVxuICAgIGNvbnN0IGZvb2RNZW51ID0gKG51bWJlcnMsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGZvb2RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZm9vZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGZvb2RIZWFkZXIudGV4dENvbnRlbnQgPSBjb250ZW50LnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGZvb2RDb250YWluZXIuaWQgPSBjb250ZW50ICsgJ0NvbnRhaW5lcic7XG4gICAgICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZEhlYWRlcik7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBudW1iZXJzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgZm9vZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgZm9vZEVsZW1lbnQuaWQgPSBjb250ZW50ICsgXCJFbGVtZW50XCIgKyBpbmRleDtcbiAgICAgICAgICAgIGxldCBmb29kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGZvb2RUZXh0LmlkID0gY29udGVudCArIFwiVGV4dFwiICsgaW5kZXg7XG4gICAgICAgICAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2RFbGVtZW50KTtcbiAgICAgICAgICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZFRleHQpO1xuICAgICAgICB9XG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZENvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiBtZW51Q29udGFpbmVyO1xuICAgIH1cbiAgICBjb25zdCBhZGRGb29kcyA9IChpbmRleCwgbmFtZSwgdGV4dCwgcHJpY2UpID0+IHtcbiAgICAgICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2Vyc0VsZW1lbnQnK2luZGV4KTtcbiAgICAgICAgZm9vZE5hbWUudGV4dENvbnRlbnQgPSBuYW1lICsgXCIgXCIgKyBwcmljZSArIFwiICRcIjtcbiAgICAgICAgY29uc3QgZm9vZFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnVyZ2Vyc1RleHQnK2luZGV4KTtcbiAgICAgICAgZm9vZFRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICBjb25zdCBhZGREcmlua3MgPSAoaW5kZXgsIG5hbWUsIHByaWNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRyaW5rTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZXZlcmFnZXNFbGVtZW50JytpbmRleCk7XG4gICAgICAgIGRyaW5rTmFtZS50ZXh0Q29udGVudCA9IG5hbWUgKyBcIiBcIiArIHByaWNlICsgXCIgJFwiO1xuICAgIH1cbiAgICBjb25zdCBhZGRBcHBldGl6ZXJzID0gKGluZGV4LCBuYW1lLCBwcmljZSkgPT4ge1xuICAgICAgICBjb25zdCBhcHBldGl6ZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGV0aXplcnNFbGVtZW50JytpbmRleCk7XG4gICAgICAgIGFwcGV0aXplck5hbWUudGV4dENvbnRlbnQgPSBuYW1lICsgXCIgXCIgKyBwcmljZSArIFwiICRcIjtcbiAgICB9XG4gICAgcmV0dXJuIHttZW51SXRlbSwgZm9vZE1lbnUsIGFkZEZvb2RzLCBhZGREcmlua3MsIGFkZEFwcGV0aXplcnN9O1xuXG59KSgpO1xuXG5leHBvcnQge2NyZWF0ZU1lbnV9O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7Y3JlYXRlTWFpbn0gZnJvbSAnLi9tYWluUGFnZSc7XG5pbXBvcnQge2NyZWF0ZU1lbnV9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQge2NvbnRhY3RzfSBmcm9tICcuL2NvbnRhY3RzJztcblxuY29uc29sZS5sb2coJ2xvYWQgaGVhZGVyJyk7XG5cbmNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5jb25zdCBoZWFkZXIgPSBjcmVhdGVNYWluLmhlYWRlckVsZW1lbnRzKCk7XG4vL0NyZWF0ZSBtYWluIHBhZ2UgYXMgZGVmYXVsdFxuZGl2Q29udGVudC5jbGFzc05hbWUgPSBcImhvbWVcIjtcbmNyZWF0ZU1haW5QYWdlKCk7XG5cbi8vIENob29zaW5nIHdoaWNoIHBhZ2UgdG8gZGlzcGxheVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykuZm9yRWFjaCh0YWJzID0+IHtcbiAgICB0YWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuaWQpO1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcImhvbWVCdXR0b25cIikge1xuICAgICAgICAgICAgZGl2Q29udGVudC5jbGFzc05hbWUgPSBcImhvbWVcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlIHRvIGhvbWVcIik7XG4gICAgICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgICAgIGNyZWF0ZU1haW5QYWdlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSBcIm1lbnVCdXR0b25cIikge1xuICAgICAgICAgICAgZGl2Q29udGVudC5jbGFzc05hbWUgPSBcIm1lbnVcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlIHRvIG1lbnVcIik7XG4gICAgICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgICAgIGNyZWF0ZU1lbnVQYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXZDb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGFjdHNcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlIHRvIGNvbnRhY3RzXCIpO1xuICAgICAgICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICAgICAgICBjcmVhdGVDb250YWN0cygpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuLy8gZGlzcGxheWluZyB0aGUgbWFpbiBwYWdlXG5mdW5jdGlvbiBjcmVhdGVNYWluUGFnZSgpIHtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY3JlYXRlTWFpbi5oZWFkbGluZUVsZW1lbnQoKTtcbiAgICBjcmVhdGVNYWluLnBhZ2VGb290ZXIoXCJodHRwczovL3Vuc3BsYXNoLmNvbS9Aam9uYXRoYW5ib3JiYT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIixcbiAgICAgICAgXCJKb25hdGhhbiBCb3JiYVwiLCBcImh0dHBzOi8vdW5zcGxhc2guY29tLz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIiwgXCJVbnNwbGFzaFwiKTtcbn1cblxuLy9kaXNwbGF5aW5nIHRoZSBtZW51XG5mdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29uc3QgbWVudSA9IGNyZWF0ZU1lbnUubWVudUl0ZW0oKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIGFkZE1lbnVDb250ZW50KDQsIDMsIDMpO1xuICAgIGNyZWF0ZU1haW4ucGFnZUZvb3RlcihcImh0dHBzOi8vdW5zcGxhc2guY29tL0BzbGFzaGlvcGhvdG9ncmFwaHk/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIsIFxuICAgICAgICBcIlNsYXNoaW8gUGhvdG9ncmFwaHlcIiwgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9Ac2xhc2hpb3Bob3RvZ3JhcGh5P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLCBcIlVuc3BsYXNoXCIpO1xufVxuXG4vLyBjbGVhcmluZyBhbGwgb2YgdGhlIGVsZW1lbnRzXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgd2hpbGUgKGRpdkNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBkaXZDb250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxufVxuXG4vL2Rpc3BsYXkgdGhlIGNvbnRhY3RzIHBhZ2VcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RzKCkge1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RzLmhvdXJzKCkpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdHMuc29tZSgpKTtcbiAgICBjb250YWN0cy5jaGFuZ2VIb3VycyhcInNhdHVyZGF5XCIsIFwiMTBhbSB0byAxMXBtXCIpOyBcbiAgICBjb250YWN0cy5jaGFuZ2VIb3VycyhcInN1bmRheVwiLCBcIjExYW0gdG8gOHBtXCIpO1xuICAgIGNyZWF0ZU1haW4ucGFnZUZvb3RlcihcImh0dHBzOi8vdW5zcGxhc2guY29tL0Bqb3NoZHVrZTEwP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLFxuICAgIFwiSm9zaCBEdWtlXCIsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiLCBcIlVuc3BsYXNoXCIpO1xufVxuXG4vLyBJbnB1dCB0aGUgY29udGVudCBmb3IgcmVzdGF1cmFudCBtZW51XG4vLyBBZGQgbnVtYmVyIG9mIGZvb2RzICYgZHJpbmtzICYgYXBwZXRpemVycyB3YW50ZWQgYXMgcGFyYW1ldGVyXG5mdW5jdGlvbiBhZGRNZW51Q29udGVudChidXJnZXJzLCBiZXZlcmFnZXMsIGFwcGV0aXplcnMpIHtcbiAgICBjb25zdCBtZW51QnVyZ2VycyA9IGNyZWF0ZU1lbnUuZm9vZE1lbnUoYnVyZ2VycywgJ2J1cmdlcnMnKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKG1lbnVCdXJnZXJzKTtcbiAgICBjb25zdCBtZW51RHJpbmtzID0gY3JlYXRlTWVudS5mb29kTWVudShiZXZlcmFnZXMsICdiZXZlcmFnZXMnKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKG1lbnVEcmlua3MpO1xuICAgIGNvbnN0IG1lbnVBcHBldGl6ZXJzID0gY3JlYXRlTWVudS5mb29kTWVudShhcHBldGl6ZXJzLCAnYXBwZXRpemVycycpO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUFwcGV0aXplcnMpO1xuICAgIGNyZWF0ZU1lbnUuYWRkRm9vZHMoMCwgXCJDSEVFU0VCVVJHRVJcIiwgXCJiZWVmLCBvbmlvbiwgbGV0dHVjZSwgY2hlZXNlXCIsIDEwKTtcbiAgICBjcmVhdGVNZW51LmFkZEZvb2RzKDEsIFwiQkVFRiBCVVJHRVJcIiwgXCJCYXNpYyBCdXJnZXJcIiwgMTApO1xuICAgIGNyZWF0ZU1lbnUuYWRkRm9vZHMoMiwgXCJDSElDS0VOIEJVUkdFUlwiLCBcIkJhc2ljIEJ1cmdlclwiLCAxMCk7XG4gICAgY3JlYXRlTWVudS5hZGRGb29kcygzLCBcIkhBTExPVU1JIEJVUkdFUlwiLCBcIkJhc2ljIEJ1cmdlclwiLCAxNSk7XG4gICAgY3JlYXRlTWVudS5hZGREcmlua3MoMCwgXCJCRUVSXCIsIDcpO1xuICAgIGNyZWF0ZU1lbnUuYWRkRHJpbmtzKDEsIFwiU09GVCBEUklOS1NcIiwgNyk7XG4gICAgY3JlYXRlTWVudS5hZGREcmlua3MoMiwgXCJNSUxLU0hBS0VcIiwgNyk7XG4gICAgY3JlYXRlTWVudS5hZGRBcHBldGl6ZXJzKDAsIFwiRlJFTkNIIEZSSUVTXCIsIDUpO1xuICAgIGNyZWF0ZU1lbnUuYWRkQXBwZXRpemVycygxLCBcIkNISUNLRU4gV0lOR1NcIiwgNyk7XG4gICAgY3JlYXRlTWVudS5hZGRBcHBldGl6ZXJzKDIsIFwiT05JT04gUklOR1NcIiwgNSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9