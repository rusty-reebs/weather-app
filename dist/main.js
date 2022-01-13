/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/searchicon.png */ "./src/img/searchicon.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Design for mobile-first */\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  height: 100%;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  min-height: 100%;\n  max-height: 100%;\n  overflow: auto;\n  background: #56ccf2; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to left,\n    #2f80ed,\n    #56ccf2\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to left,\n    #2f80ed,\n    #56ccf2\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  font-family: \"Open Sans\", sans-serif;\n  color: white;\n  text-shadow: 1px 1px 2px #000000;\n}\n\n.content {\n  height: 100vh;\n  min-height: 100%;\n  max-height: 100%;\n}\n\n.container {\n  display: grid;\n  grid-template-rows: auto auto auto;\n}\n.upper {\n  grid-row: 1;\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n  align-items: center;\n}\n\nform {\n  grid-row: 1;\n  width: 90%;\n  justify-self: center;\n  margin-top: 10px;\n}\n\n.searchbar {\n  font-size: 20px;\n  grid-row: 1;\n  height: 30px;\n  width: 100%;\n  background: white url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 20px;\n  background-position: 10px 6px;\n  background-repeat: no-repeat;\n  padding-left: 35px;\n  border-radius: 10px;\n  border: none;\n}\n\n.searchbar:focus {\n  outline: none;\n}\n\n.datediv {\n  color: white;\n  font-size: 18px;\n  grid-row: 2;\n  justify-self: center;\n}\n\n.citydiv {\n  color: white;\n  font-size: 28px;\n  grid-row: 3;\n  justify-self: center;\n}\n\n.lower {\n  grid-row: 2;\n  display: grid;\n  grid-template-rows: 2fr 60px 2fr;\n  grid-template-columns: 1fr 1fr;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.temp {\n  grid-row: 1;\n  grid-column: 1;\n  font-size: 36px;\n  display: grid;\n  grid-template-rows: 3fr 1fr 1fr;\n  text-align: center;\n}\n\n.temp p {\n  font-size: 16px;\n}\n\n.windspeed {\n  margin-left: 20px;\n  align-self: end;\n}\n.feelslike {\n  margin-left: 20px;\n}\n\n.descrip {\n  grid-row: 1;\n  grid-column: 2;\n  display: grid;\n  grid-template-rows: 2fr 1fr;\n  text-align: center;\n}\n\n.descrip img {\n  grid-row: 1;\n  justify-self: center;\n  align-self: start;\n}\n\n.descrip h4 {\n  font-size: 18px;\n}\n\n.tomorrow {\n  grid-row: 3;\n  grid-column: 1;\n  display: grid;\n  grid-template-rows: auto auto auto;\n  text-align: center;\n  font-size: 22px;\n}\n\n.tomorrow img {\n  grid-row: 2;\n  justify-self: center;\n  align-self: center;\n}\n\n.nextday {\n  grid-row: 3;\n  grid-column: 2;\n  display: grid;\n  grid-template-rows: auto auto auto;\n  text-align: center;\n  font-size: 22px;\n}\n\n.nextday img {\n  grid-row: 2;\n  justify-self: center;\n  align-self: center;\n}\n\n.unitsdiv {\n  grid-row: 3;\n  text-align: center;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n.unitsdiv a {\n  grid-row: 2;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n@media only screen and (min-width: 600px) {\n  form {\n    display: flex;\n    justify-content: center;\n  }\n  .searchbar {\n    width: 60%;\n  }\n}\n@media only screen and (min-width: 1025px) {\n  .content {\n    margin-left: 150px;\n    margin-right: 150px;\n  }\n  form {\n    display: flex;\n    justify-content: center;\n  }\n  .searchbar {\n    width: 40%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA,4BAA4B;;AAE5B;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;AACA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,mBAAmB,EAAE,8BAA8B;EACnD;;;;GAIC,EAAE,+BAA+B;EAClC;;;;GAIC,EAAE,qEAAqE;EACxE,oCAAoC;EACpC,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kCAAkC;AACpC;AACA;EACE,WAAW;EACX,aAAa;EACb,+BAA+B;EAC/B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,WAAW;EACX,yDAA4C;EAC5C,qBAAqB;EACrB,6BAA6B;EAC7B,4BAA4B;EAC5B,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,gCAAgC;EAChC,8BAA8B;EAC9B,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,eAAe;EACf,aAAa;EACb,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,kCAAkC;EAClC,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,kCAAkC;EAClC,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE;IACE,aAAa;IACb,uBAAuB;EACzB;EACA;IACE,UAAU;EACZ;AACF;AACA;EACE;IACE,kBAAkB;IAClB,mBAAmB;EACrB;EACA;IACE,aAAa;IACb,uBAAuB;EACzB;EACA;IACE,UAAU;EACZ;AACF","sourcesContent":["/* Design for mobile-first */\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  height: 100%;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  min-height: 100%;\n  max-height: 100%;\n  overflow: auto;\n  background: #56ccf2; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to left,\n    #2f80ed,\n    #56ccf2\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to left,\n    #2f80ed,\n    #56ccf2\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  font-family: \"Open Sans\", sans-serif;\n  color: white;\n  text-shadow: 1px 1px 2px #000000;\n}\n\n.content {\n  height: 100vh;\n  min-height: 100%;\n  max-height: 100%;\n}\n\n.container {\n  display: grid;\n  grid-template-rows: auto auto auto;\n}\n.upper {\n  grid-row: 1;\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n  align-items: center;\n}\n\nform {\n  grid-row: 1;\n  width: 90%;\n  justify-self: center;\n  margin-top: 10px;\n}\n\n.searchbar {\n  font-size: 20px;\n  grid-row: 1;\n  height: 30px;\n  width: 100%;\n  background: white url(../img/searchicon.png);\n  background-size: 20px;\n  background-position: 10px 6px;\n  background-repeat: no-repeat;\n  padding-left: 35px;\n  border-radius: 10px;\n  border: none;\n}\n\n.searchbar:focus {\n  outline: none;\n}\n\n.datediv {\n  color: white;\n  font-size: 18px;\n  grid-row: 2;\n  justify-self: center;\n}\n\n.citydiv {\n  color: white;\n  font-size: 28px;\n  grid-row: 3;\n  justify-self: center;\n}\n\n.lower {\n  grid-row: 2;\n  display: grid;\n  grid-template-rows: 2fr 60px 2fr;\n  grid-template-columns: 1fr 1fr;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.temp {\n  grid-row: 1;\n  grid-column: 1;\n  font-size: 36px;\n  display: grid;\n  grid-template-rows: 3fr 1fr 1fr;\n  text-align: center;\n}\n\n.temp p {\n  font-size: 16px;\n}\n\n.windspeed {\n  margin-left: 20px;\n  align-self: end;\n}\n.feelslike {\n  margin-left: 20px;\n}\n\n.descrip {\n  grid-row: 1;\n  grid-column: 2;\n  display: grid;\n  grid-template-rows: 2fr 1fr;\n  text-align: center;\n}\n\n.descrip img {\n  grid-row: 1;\n  justify-self: center;\n  align-self: start;\n}\n\n.descrip h4 {\n  font-size: 18px;\n}\n\n.tomorrow {\n  grid-row: 3;\n  grid-column: 1;\n  display: grid;\n  grid-template-rows: auto auto auto;\n  text-align: center;\n  font-size: 22px;\n}\n\n.tomorrow img {\n  grid-row: 2;\n  justify-self: center;\n  align-self: center;\n}\n\n.nextday {\n  grid-row: 3;\n  grid-column: 2;\n  display: grid;\n  grid-template-rows: auto auto auto;\n  text-align: center;\n  font-size: 22px;\n}\n\n.nextday img {\n  grid-row: 2;\n  justify-self: center;\n  align-self: center;\n}\n\n.unitsdiv {\n  grid-row: 3;\n  text-align: center;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n.unitsdiv a {\n  grid-row: 2;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n@media only screen and (min-width: 600px) {\n  form {\n    display: flex;\n    justify-content: center;\n  }\n  .searchbar {\n    width: 60%;\n  }\n}\n@media only screen and (min-width: 1025px) {\n  .content {\n    margin-left: 150px;\n    margin-right: 150px;\n  }\n  form {\n    display: flex;\n    justify-content: center;\n  }\n  .searchbar {\n    width: 40%;\n  }\n}\n"],"sourceRoot":""}]);
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
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHome": () => (/* binding */ renderHome),
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "input": () => (/* binding */ input),
/* harmony export */   "date": () => (/* binding */ date),
/* harmony export */   "city": () => (/* binding */ city),
/* harmony export */   "currentTemp": () => (/* binding */ currentTemp),
/* harmony export */   "feelsLike": () => (/* binding */ feelsLike),
/* harmony export */   "currentDescrip": () => (/* binding */ currentDescrip),
/* harmony export */   "windSpeed": () => (/* binding */ windSpeed),
/* harmony export */   "currentDescripPic": () => (/* binding */ currentDescripPic),
/* harmony export */   "tomorrowTemp": () => (/* binding */ tomorrowTemp),
/* harmony export */   "tomorrowDate": () => (/* binding */ tomorrowDate),
/* harmony export */   "tomorrowPic": () => (/* binding */ tomorrowPic),
/* harmony export */   "nextDayTemp": () => (/* binding */ nextDayTemp),
/* harmony export */   "nextDayDate": () => (/* binding */ nextDayDate),
/* harmony export */   "nextDayPic": () => (/* binding */ nextDayPic),
/* harmony export */   "changeUnits": () => (/* binding */ changeUnits)
/* harmony export */ });
// home.js

const form = document.createElement("form");
const input = document.createElement("input");
const city = document.createElement("h2");
const date = document.createElement("h3");
const currentTemp = document.createElement("h1");
const feelsLike = document.createElement("p");
const currentDescrip = document.createElement("h4");
const currentDescripPic = document.createElement("img");
const windSpeed = document.createElement("p");
const tomorrowDate = document.createElement("h4");
const tomorrowTemp = document.createElement("h4");
const tomorrowPic = document.createElement("img");
const nextDayDate = document.createElement("h4");
const nextDayTemp = document.createElement("h4");
const nextDayPic = document.createElement("img");
const changeUnits = document.createElement("a");

const renderHome = () => {
  const content = document.getElementById("content");
  const container = document.createElement("div");
  container.classList.add("container");

  const upperDiv = document.createElement("div");
  upperDiv.classList.add("upper");
  input.classList.add("searchbar");
  form.appendChild(input);

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("datediv");
  dateDiv.appendChild(date);

  const cityDiv = document.createElement("div");
  cityDiv.classList.add("citydiv");
  cityDiv.appendChild(city);

  const lowerDiv = document.createElement("div");
  lowerDiv.classList.add("lower");
  const currentTempDiv = document.createElement("div");
  currentTempDiv.classList.add("temp");
  feelsLike.classList.add("feelslike");
  windSpeed.classList.add("windspeed");
  currentTempDiv.appendChild(currentTemp);
  currentTempDiv.appendChild(windSpeed);
  currentTempDiv.appendChild(feelsLike);

  const currentDescripDiv = document.createElement("div");
  currentDescripDiv.classList.add("descrip");
  currentDescripPic.height = "100";
  currentDescripDiv.appendChild(currentDescripPic);
  currentDescripDiv.appendChild(currentDescrip);

  const tomorrowDiv = document.createElement("div");
  tomorrowDiv.classList.add("tomorrow");
  tomorrowPic.height = "80";
  tomorrowDiv.appendChild(tomorrowDate);
  tomorrowDiv.appendChild(tomorrowPic);
  tomorrowDiv.appendChild(tomorrowTemp);

  const nextDayDiv = document.createElement("div");
  nextDayDiv.classList.add("nextday");
  nextDayPic.height = "80";
  nextDayDiv.appendChild(nextDayDate);
  nextDayDiv.appendChild(nextDayPic);
  nextDayDiv.appendChild(nextDayTemp);

  const unitsDiv = document.createElement("div");
  unitsDiv.classList.add("unitsdiv");
  unitsDiv.appendChild(changeUnits);

  container.appendChild(upperDiv);
  upperDiv.appendChild(form);
  upperDiv.appendChild(dateDiv);
  upperDiv.appendChild(cityDiv);
  container.appendChild(lowerDiv);
  lowerDiv.appendChild(currentTempDiv);
  lowerDiv.appendChild(currentDescripDiv);
  lowerDiv.appendChild(tomorrowDiv);
  lowerDiv.appendChild(nextDayDiv);
  container.appendChild(unitsDiv);

  content.appendChild(container);
};





/***/ }),

/***/ "./src/img/searchicon.png":
/*!********************************!*\
  !*** ./src/img/searchicon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "498a808b30cb38313d13.png";

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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");








let apiError = false;
let cityDataName;
let cityName = "Tbilisi";
let cityLat;
let cityLon;
let isMetric = true;
let unitName = "metric";
let unitSymbol = "C";
let windSymbol = " km/hr";
let reverseUnit = "imperial";
let refinedAppData = {};

const getCityLatLon = async (city) => {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=6b4c0c8f44c78b121ce431a160d2ae88",
      { mode: "cors" }
    );
    const cityData = await response.json();
    cityDataName = cityData.name;
    cityLat = cityData.coord.lat;
    cityLon = cityData.coord.lon;
  } catch (error) {
    apiError = true;
    showErrorMessage("City not found, try again.");
  }
};

const showErrorMessage = (specify) => {
  _home__WEBPACK_IMPORTED_MODULE_1__.input.placeholder = specify;
};

let weatherData;
const getWeather = async (lat, lon, unitName) => {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&exclude=minutely,hourly,alerts&appid=6b4c0c8f44c78b121ce431a160d2ae88&units=" +
        unitName,
      { mode: "cors" }
    );
    weatherData = await response.json();
  } catch (error) {
    apiError = true;
    showErrorMessage("Sorry, try again.");
  }
};

const masterFunc = async (cityname) => {
  await getCityLatLon(cityname);
  await getWeather(cityLat, cityLon, unitName);
  if (apiError) {
    apiError = false;
    return;
  } else {
    refineDataObject();
    populateElements(cityname);
  }
};

const populateElements = (cityname) => {
  _home__WEBPACK_IMPORTED_MODULE_1__.date.innerHTML = refinedAppData.adjustedTime;
  cityname = capitalizeString(cityname);
  _home__WEBPACK_IMPORTED_MODULE_1__.city.innerHTML = cityname;
  _home__WEBPACK_IMPORTED_MODULE_1__.currentTemp.innerHTML = refinedAppData.currentTemp + "&deg;" + unitSymbol;
  _home__WEBPACK_IMPORTED_MODULE_1__.feelsLike.innerHTML =
    "Feels like " + refinedAppData.feelsLike + "&deg;" + unitSymbol;
  _home__WEBPACK_IMPORTED_MODULE_1__.currentDescrip.innerHTML = refinedAppData.currentDescrip;
  _home__WEBPACK_IMPORTED_MODULE_1__.windSpeed.innerHTML = "Wind " + refinedAppData.windSpeed + windSymbol;
  _home__WEBPACK_IMPORTED_MODULE_1__.currentDescripPic.src = getImageFromId(refinedAppData.currentId, true);
  _home__WEBPACK_IMPORTED_MODULE_1__.tomorrowTemp.innerHTML = refinedAppData.tomorrowTemp + "&deg;" + unitSymbol;
  _home__WEBPACK_IMPORTED_MODULE_1__.tomorrowDate.innerHTML = "Tomorrow";
  _home__WEBPACK_IMPORTED_MODULE_1__.tomorrowPic.src = getImageFromId(refinedAppData.tomorrowId);
  _home__WEBPACK_IMPORTED_MODULE_1__.nextDayTemp.innerHTML = refinedAppData.nextDayTemp + "&deg;" + unitSymbol;
  _home__WEBPACK_IMPORTED_MODULE_1__.nextDayDate.innerHTML = refinedAppData.nextDayDate;
  _home__WEBPACK_IMPORTED_MODULE_1__.nextDayPic.src = getImageFromId(refinedAppData.nextDayId);
  _home__WEBPACK_IMPORTED_MODULE_1__.changeUnits.innerHTML = "Click to change units to " + reverseUnit + ".";
};

_home__WEBPACK_IMPORTED_MODULE_1__.form.addEventListener("submit", (e) => {
  e.preventDefault();
  masterFunc(_home__WEBPACK_IMPORTED_MODULE_1__.input.value);
  cityName = _home__WEBPACK_IMPORTED_MODULE_1__.input.value;
  _home__WEBPACK_IMPORTED_MODULE_1__.form.reset();
  _home__WEBPACK_IMPORTED_MODULE_1__.input.placeholder = "";
});

_home__WEBPACK_IMPORTED_MODULE_1__.changeUnits.addEventListener("click", () => {
  isMetric = isMetric ? false : true;
  unitName = isMetric ? "metric" : "imperial";
  unitSymbol = isMetric ? "C" : "F";
  windSymbol = isMetric ? " km/h" : " mph";
  reverseUnit = isMetric ? "imperial" : "metric";
  masterFunc(cityName);
});

// functions to refine data

const refineDataObject = () => {
  const now = refineCurrentWeatherConditions();
  const tomorrow = refineTomorrowWeatherConditions();
  const next = refineNextDayWeatherConditions();

  refinedAppData = {
    rawCurrentTime: weatherData.current.dt * 1000,
    rawSunsetTime: weatherData.current.sunset * 1000,
    rawSunriseTime: weatherData.current.sunrise * 1000,
    adjustedTime: getTimeString(),
    currentTemp: now.currentTemp,
    feelsLike: now.feelsLike,
    currentDescrip: now.currentDescripCaps,
    windSpeed: now.windSpeed,
    currentId: weatherData.current.weather[0].id,
    tomorrowDate: tomorrow.tomorrowDate,
    tomorrowTemp: tomorrow.tomorrowTemp,
    tomorrowDescrip: tomorrow.tomorrowDescripCaps,
    tomorrowId: weatherData.daily[1].weather[0].id,
    nextDayDate: next.nextDayDayofWeek,
    nextDayTemp: next.nextDayTemp,
    nextDayDescrip: next.nextDayDescripCaps,
    nextDayId: weatherData.daily[2].weather[0].id,
  };
};

const refineCurrentWeatherConditions = () => {
  const currentTemp = makeRoundNumber(weatherData.current.temp);
  const feelsLike = makeRoundNumber(weatherData.current.feels_like);
  const currentDescripCaps = capitalizeString(
    weatherData.current.weather[0].description
  );
  const windSpeed = makeRoundNumber(weatherData.current.wind_speed);
  return { currentTemp, feelsLike, currentDescripCaps, windSpeed };
};

const refineTomorrowWeatherConditions = () => {
  const tomorrowDate = new Date(weatherData.daily[1].dt);
  const tomorrowTemp = makeRoundNumber(weatherData.daily[1].temp.day);
  const tomorrowDescripCaps = capitalizeString(
    weatherData.daily[1].weather[0].description
  );
  return { tomorrowDate, tomorrowTemp, tomorrowDescripCaps };
};

const refineNextDayWeatherConditions = () => {
  const nextDayDate = new Date(weatherData.daily[2].dt * 1000);
  let nextDayNumber = nextDayDate.getDay();
  let nextDayDayofWeek = getDayofWeek(nextDayNumber);
  const nextDayTemp = makeRoundNumber(weatherData.daily[2].temp.day);
  const nextDayDescripCaps = capitalizeString(
    weatherData.daily[2].weather[0].description
  );
  return { nextDayDayofWeek, nextDayTemp, nextDayDescripCaps };
};

const getTimeString = () => {
  const rawCurrentTime = weatherData.current.dt * 1000;
  const timeZoneOffset = weatherData.timezone_offset * 1000;
  const localTime = new Date();
  const localOffset = localTime.getTimezoneOffset();
  const localOffsetMilliseconds = localOffset * 60000;
  const adjustedSeconds = rawCurrentTime + timeZoneOffset;
  const adjustedTime = new Date();
  adjustedTime.setTime(adjustedSeconds + localOffsetMilliseconds);
  const adjustedDay = adjustedTime.getDay();
  const adjustedDayOfWeek = getDayofWeek(adjustedDay);
  const adjustedMonth = adjustedTime.getMonth();
  const adjustedMonthName = getMonthName(adjustedMonth);
  const adjustedDate = adjustedTime.getDate();
  const adjustedHours = adjustedTime.getHours();
  const adjusted12Hour = toTwelveHourClock(adjustedHours);
  const adjustedMinutes = adjustedTime.getMinutes();
  const paddedAdjustedMinutes = padAdjustedMinutes(adjustedMinutes);

  let ampm;
  adjustedHours >= 12 ? (ampm = "pm") : (ampm = "am");

  let adjustedTimeString =
    adjustedDayOfWeek +
    ", " +
    adjustedMonthName +
    " " +
    adjustedDate +
    ", " +
    adjusted12Hour +
    ":" +
    paddedAdjustedMinutes +
    " " +
    ampm;

  return adjustedTimeString;
};

const toTwelveHourClock = (number) => {
  if (number === 0) {
    number = 12;
  } else if (number > 12) {
    number = number - 12;
  }
  return number;
};

const padAdjustedMinutes = (number) => {
  return number < 10 ? "0" + number : number;
};

const makeRoundNumber = (data) => {
  return Math.round(data);
};

const capitalizeString = (data) => {
  const wordArray = data.split(" ");
  const wordStringCaps = wordArray
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  return wordStringCaps;
};

const getMonthName = (number) => {
  let monthName;
  switch (number) {
    case 0:
      monthName = "January";
      break;
    case 1:
      monthName = "February";
      break;
    case 2:
      monthName = "March";
      break;
    case 3:
      monthName = "April";
      break;
    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "June";
      break;
    case 6:
      monthName = "July";
      break;
    case 7:
      monthName = "August";
      break;
    case 8:
      monthName = "September";
      break;
    case 9:
      monthName = "October";
      break;
    case 10:
      monthName = "November";
      break;
    case 11:
      monthName = "December";
  }
  return monthName;
};

const getDayofWeek = (number) => {
  let dayName;
  switch (number) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
  }
  return dayName;
};

const getImageFromId = (id, today) => {
  // if today is false then render day weather icons
  const idString = id.toString();
  if (idString[0] == "2") {
    return "./img/new11d.png";
  }
  if (
    (idString[0] == "3" &&
      refinedAppData.rawCurrentTime > refinedAppData.rawSunsetTime &&
      today) ||
    (idString[0] == "3" &&
      refinedAppData.rawCurrentTime < refinedAppData.rawSunriseTime &&
      today)
  ) {
    return "./img/new09n.png";
  } else if (idString[0] == "3") {
    return "./img/new09d.png";
  }
  if (idString[0] == "5" && idString[1] == "0") {
    return "./img/new10d.png";
  }
  if (idString[0] == "5" && idString[1] == "1") {
    return "./img/new13d.png";
  }
  if (
    (idString[0] == "5" &&
      idString[1] == "2" &&
      refinedAppData.rawCurrentTime > refinedAppData.rawSunsetTime &&
      today) ||
    (idString[0] == "5" &&
      idString[1] == "2" &&
      refinedAppData.rawCurrentTime < refinedAppData.rawSunriseTime &&
      today) ||
    (idString[0] == "5" &&
      idString[1] == "3" &&
      refinedAppData.rawCurrentTime > refinedAppData.rawSunsetTime &&
      today) ||
    (idString[0] == "5" &&
      idString[1] == "3" &&
      refinedAppData.rawCurrentTime < refinedAppData.rawSunriseTime &&
      today)
  ) {
    return "./img/new09n.png";
  } else if (
    (idString[0] == "5" && idString[1] == "2") ||
    (idString[0] == "5" && idString[1] == "3")
  ) {
    return "./img/new09d.png";
  }
  if (idString[0] == "6") {
    return "./img/new13d.png";
  }
  if (idString[0] == "7") {
    return "./img/new50d.png";
  }
  if (
    (idString == "800" &&
      refinedAppData.rawCurrentTime > refinedAppData.rawSunsetTime &&
      today) ||
    (idString == "800" &&
      refinedAppData.rawCurrentTime < refinedAppData.rawSunriseTime &&
      today)
  ) {
    return "./img/new01n.png";
  } else if (idString == "800") {
    return "./img/new01d.png";
  }
  if (
    (idString == "801" &&
      refinedAppData.rawCurrentTime > refinedAppData.rawSunsetTime &&
      today) ||
    (idString == "801" &&
      refinedAppData.rawCurrentTime < refinedAppData.rawSunriseTime &&
      today)
  ) {
    return "./img/new02n.png";
  } else if (idString == "801") {
    return "./img/new02d.png";
  }
  if (idString == "802") {
    return "./img/new03d.png";
  }
  if (idString == "803" || idString == "804") {
    return "./img/new03d.png";
  }
};

(0,_home__WEBPACK_IMPORTED_MODULE_1__.renderHome)();

masterFunc(cityName);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFZRTtBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pHRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQVU7O0FBRVYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL3NlYXJjaGljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogRGVzaWduIGZvciBtb2JpbGUtZmlyc3QgKi9cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQ6ICM1NmNjZjI7IC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byBsZWZ0LFxcbiAgICAjMmY4MGVkLFxcbiAgICAjNTZjY2YyXFxuICApOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byBsZWZ0LFxcbiAgICAjMmY4MGVkLFxcbiAgICAjNTZjY2YyXFxuICApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzAwMDAwMDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbn1cXG4udXBwZXIge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0ge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoYmFyIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGdyaWQtcm93OiAxO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZSB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCA2cHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNlYXJjaGJhcjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZGF0ZWRpdiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBncmlkLXJvdzogMjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY2l0eWRpdiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBncmlkLXJvdzogMztcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubG93ZXIge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgNjBweCAyZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLnRlbXAge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnIgMWZyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGVtcCBwIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLndpbmRzcGVlZCB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuLmZlZWxzbGlrZSB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLmRlc2NyaXAge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kZXNjcmlwIGltZyB7XFxuICBncmlkLXJvdzogMTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi5kZXNjcmlwIGg0IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnRvbW9ycm93IHtcXG4gIGdyaWQtcm93OiAzO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLnRvbW9ycm93IGltZyB7XFxuICBncmlkLXJvdzogMjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubmV4dGRheSB7XFxuICBncmlkLXJvdzogMztcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5uZXh0ZGF5IGltZyB7XFxuICBncmlkLXJvdzogMjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udW5pdHNkaXYge1xcbiAgZ3JpZC1yb3c6IDM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4udW5pdHNkaXYgYSB7XFxuICBncmlkLXJvdzogMjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAuc2VhcmNoYmFyIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcXG4gIC5jb250ZW50IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xcbiAgfVxcbiAgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgLnNlYXJjaGJhciB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDRCQUE0Qjs7QUFFNUI7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUIsRUFBRSw4QkFBOEI7RUFDbkQ7Ozs7R0FJQyxFQUFFLCtCQUErQjtFQUNsQzs7OztHQUlDLEVBQUUscUVBQXFFO0VBQ3hFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gseURBQTRDO0VBQzVDLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIERlc2lnbiBmb3IgbW9iaWxlLWZpcnN0ICovXFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiAjNTZjY2YyOyAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gbGVmdCxcXG4gICAgIzJmODBlZCxcXG4gICAgIzU2Y2NmMlxcbiAgKTsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gbGVmdCxcXG4gICAgIzJmODBlZCxcXG4gICAgIzU2Y2NmMlxcbiAgKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICMwMDAwMDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcXG59XFxuLnVwcGVyIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnNlYXJjaGJhciB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBncmlkLXJvdzogMTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogd2hpdGUgdXJsKC4uL2ltZy9zZWFyY2hpY29uLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4IDZweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoYmFyOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5kYXRlZGl2IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGdyaWQtcm93OiAyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jaXR5ZGl2IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGdyaWQtcm93OiAzO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5sb3dlciB7XFxuICBncmlkLXJvdzogMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA2MHB4IDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4udGVtcCB7XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmciAxZnI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50ZW1wIHAge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ud2luZHNwZWVkIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG4uZmVlbHNsaWtlIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uZGVzY3JpcCB7XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRlc2NyaXAgaW1nIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLmRlc2NyaXAgaDQge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4udG9tb3Jyb3cge1xcbiAgZ3JpZC1yb3c6IDM7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4udG9tb3Jyb3cgaW1nIHtcXG4gIGdyaWQtcm93OiAyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5uZXh0ZGF5IHtcXG4gIGdyaWQtcm93OiAzO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLm5leHRkYXkgaW1nIHtcXG4gIGdyaWQtcm93OiAyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi51bml0c2RpdiB7XFxuICBncmlkLXJvdzogMztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi51bml0c2RpdiBhIHtcXG4gIGdyaWQtcm93OiAyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC5zZWFyY2hiYXIge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xcbiAgLmNvbnRlbnQge1xcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTUwcHg7XFxuICB9XFxuICBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAuc2VhcmNoYmFyIHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaG9tZS5qc1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IGN1cnJlbnREZXNjcmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuY29uc3QgY3VycmVudERlc2NyaXBQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jb25zdCB0b21vcnJvd0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG5jb25zdCB0b21vcnJvd1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG5jb25zdCB0b21vcnJvd1BpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5jb25zdCBuZXh0RGF5RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbmNvbnN0IG5leHREYXlUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuY29uc3QgbmV4dERheVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5jb25zdCBjaGFuZ2VVbml0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG5jb25zdCByZW5kZXJIb21lID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICBjb25zdCB1cHBlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVwcGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJ1cHBlclwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInNlYXJjaGJhclwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhdGVEaXYuY2xhc3NMaXN0LmFkZChcImRhdGVkaXZcIik7XG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgY29uc3QgY2l0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNpdHlEaXYuY2xhc3NMaXN0LmFkZChcImNpdHlkaXZcIik7XG4gIGNpdHlEaXYuYXBwZW5kQ2hpbGQoY2l0eSk7XG5cbiAgY29uc3QgbG93ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb3dlckRpdi5jbGFzc0xpc3QuYWRkKFwibG93ZXJcIik7XG4gIGNvbnN0IGN1cnJlbnRUZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VycmVudFRlbXBEaXYuY2xhc3NMaXN0LmFkZChcInRlbXBcIik7XG4gIGZlZWxzTGlrZS5jbGFzc0xpc3QuYWRkKFwiZmVlbHNsaWtlXCIpO1xuICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZChcIndpbmRzcGVlZFwiKTtcbiAgY3VycmVudFRlbXBEaXYuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXApO1xuICBjdXJyZW50VGVtcERpdi5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuICBjdXJyZW50VGVtcERpdi5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuXG4gIGNvbnN0IGN1cnJlbnREZXNjcmlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VycmVudERlc2NyaXBEaXYuY2xhc3NMaXN0LmFkZChcImRlc2NyaXBcIik7XG4gIGN1cnJlbnREZXNjcmlwUGljLmhlaWdodCA9IFwiMTAwXCI7XG4gIGN1cnJlbnREZXNjcmlwRGl2LmFwcGVuZENoaWxkKGN1cnJlbnREZXNjcmlwUGljKTtcbiAgY3VycmVudERlc2NyaXBEaXYuYXBwZW5kQ2hpbGQoY3VycmVudERlc2NyaXApO1xuXG4gIGNvbnN0IHRvbW9ycm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9tb3Jyb3dEaXYuY2xhc3NMaXN0LmFkZChcInRvbW9ycm93XCIpO1xuICB0b21vcnJvd1BpYy5oZWlnaHQgPSBcIjgwXCI7XG4gIHRvbW9ycm93RGl2LmFwcGVuZENoaWxkKHRvbW9ycm93RGF0ZSk7XG4gIHRvbW9ycm93RGl2LmFwcGVuZENoaWxkKHRvbW9ycm93UGljKTtcbiAgdG9tb3Jyb3dEaXYuYXBwZW5kQ2hpbGQodG9tb3Jyb3dUZW1wKTtcblxuICBjb25zdCBuZXh0RGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV4dERheURpdi5jbGFzc0xpc3QuYWRkKFwibmV4dGRheVwiKTtcbiAgbmV4dERheVBpYy5oZWlnaHQgPSBcIjgwXCI7XG4gIG5leHREYXlEaXYuYXBwZW5kQ2hpbGQobmV4dERheURhdGUpO1xuICBuZXh0RGF5RGl2LmFwcGVuZENoaWxkKG5leHREYXlQaWMpO1xuICBuZXh0RGF5RGl2LmFwcGVuZENoaWxkKG5leHREYXlUZW1wKTtcblxuICBjb25zdCB1bml0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVuaXRzRGl2LmNsYXNzTGlzdC5hZGQoXCJ1bml0c2RpdlwiKTtcbiAgdW5pdHNEaXYuYXBwZW5kQ2hpbGQoY2hhbmdlVW5pdHMpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh1cHBlckRpdik7XG4gIHVwcGVyRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICB1cHBlckRpdi5hcHBlbmRDaGlsZChkYXRlRGl2KTtcbiAgdXBwZXJEaXYuYXBwZW5kQ2hpbGQoY2l0eURpdik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb3dlckRpdik7XG4gIGxvd2VyRGl2LmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wRGl2KTtcbiAgbG93ZXJEaXYuYXBwZW5kQ2hpbGQoY3VycmVudERlc2NyaXBEaXYpO1xuICBsb3dlckRpdi5hcHBlbmRDaGlsZCh0b21vcnJvd0Rpdik7XG4gIGxvd2VyRGl2LmFwcGVuZENoaWxkKG5leHREYXlEaXYpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodW5pdHNEaXYpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCB7XG4gIHJlbmRlckhvbWUsXG4gIGZvcm0sXG4gIGlucHV0LFxuICBkYXRlLFxuICBjaXR5LFxuICBjdXJyZW50VGVtcCxcbiAgZmVlbHNMaWtlLFxuICBjdXJyZW50RGVzY3JpcCxcbiAgd2luZFNwZWVkLFxufTtcbmV4cG9ydCB7XG4gIGN1cnJlbnREZXNjcmlwUGljLFxuICB0b21vcnJvd1RlbXAsXG4gIHRvbW9ycm93RGF0ZSxcbiAgdG9tb3Jyb3dQaWMsXG4gIG5leHREYXlUZW1wLFxuICBuZXh0RGF5RGF0ZSxcbiAgbmV4dERheVBpYyxcbiAgY2hhbmdlVW5pdHMsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHsgcmVuZGVySG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcblxuaW1wb3J0IHtcbiAgZm9ybSxcbiAgaW5wdXQsXG4gIGRhdGUsXG4gIGNpdHksXG4gIGN1cnJlbnRUZW1wLFxuICBmZWVsc0xpa2UsXG4gIGN1cnJlbnREZXNjcmlwLFxuICB3aW5kU3BlZWQsXG4gIGN1cnJlbnREZXNjcmlwUGljLFxufSBmcm9tIFwiLi9ob21lXCI7XG5cbmltcG9ydCB7XG4gIHRvbW9ycm93VGVtcCxcbiAgdG9tb3Jyb3dEYXRlLFxuICB0b21vcnJvd1BpYyxcbiAgbmV4dERheVRlbXAsXG4gIG5leHREYXlEYXRlLFxuICBuZXh0RGF5UGljLFxuICBjaGFuZ2VVbml0cyxcbn0gZnJvbSBcIi4vaG9tZVwiO1xuXG5sZXQgYXBpRXJyb3IgPSBmYWxzZTtcbmxldCBjaXR5RGF0YU5hbWU7XG5sZXQgY2l0eU5hbWUgPSBcIlRiaWxpc2lcIjtcbmxldCBjaXR5TGF0O1xubGV0IGNpdHlMb247XG5sZXQgaXNNZXRyaWMgPSB0cnVlO1xubGV0IHVuaXROYW1lID0gXCJtZXRyaWNcIjtcbmxldCB1bml0U3ltYm9sID0gXCJDXCI7XG5sZXQgd2luZFN5bWJvbCA9IFwiIGttL2hyXCI7XG5sZXQgcmV2ZXJzZVVuaXQgPSBcImltcGVyaWFsXCI7XG5sZXQgcmVmaW5lZEFwcERhdGEgPSB7fTtcblxuY29uc3QgZ2V0Q2l0eUxhdExvbiA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1cIiArXG4gICAgICAgIGNpdHkgK1xuICAgICAgICBcIiZhcHBpZD02YjRjMGM4ZjQ0Yzc4YjEyMWNlNDMxYTE2MGQyYWU4OFwiLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjaXR5RGF0YU5hbWUgPSBjaXR5RGF0YS5uYW1lO1xuICAgIGNpdHlMYXQgPSBjaXR5RGF0YS5jb29yZC5sYXQ7XG4gICAgY2l0eUxvbiA9IGNpdHlEYXRhLmNvb3JkLmxvbjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhcGlFcnJvciA9IHRydWU7XG4gICAgc2hvd0Vycm9yTWVzc2FnZShcIkNpdHkgbm90IGZvdW5kLCB0cnkgYWdhaW4uXCIpO1xuICB9XG59O1xuXG5jb25zdCBzaG93RXJyb3JNZXNzYWdlID0gKHNwZWNpZnkpID0+IHtcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSBzcGVjaWZ5O1xufTtcblxubGV0IHdlYXRoZXJEYXRhO1xuY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChsYXQsIGxvbiwgdW5pdE5hbWUpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9XCIgK1xuICAgICAgICBsYXQgK1xuICAgICAgICBcIiZsb249XCIgK1xuICAgICAgICBsb24gK1xuICAgICAgICBcIiZleGNsdWRlPW1pbnV0ZWx5LGhvdXJseSxhbGVydHMmYXBwaWQ9NmI0YzBjOGY0NGM3OGIxMjFjZTQzMWExNjBkMmFlODgmdW5pdHM9XCIgK1xuICAgICAgICB1bml0TmFtZSxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYXBpRXJyb3IgPSB0cnVlO1xuICAgIHNob3dFcnJvck1lc3NhZ2UoXCJTb3JyeSwgdHJ5IGFnYWluLlwiKTtcbiAgfVxufTtcblxuY29uc3QgbWFzdGVyRnVuYyA9IGFzeW5jIChjaXR5bmFtZSkgPT4ge1xuICBhd2FpdCBnZXRDaXR5TGF0TG9uKGNpdHluYW1lKTtcbiAgYXdhaXQgZ2V0V2VhdGhlcihjaXR5TGF0LCBjaXR5TG9uLCB1bml0TmFtZSk7XG4gIGlmIChhcGlFcnJvcikge1xuICAgIGFwaUVycm9yID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHJlZmluZURhdGFPYmplY3QoKTtcbiAgICBwb3B1bGF0ZUVsZW1lbnRzKGNpdHluYW1lKTtcbiAgfVxufTtcblxuY29uc3QgcG9wdWxhdGVFbGVtZW50cyA9IChjaXR5bmFtZSkgPT4ge1xuICBkYXRlLmlubmVySFRNTCA9IHJlZmluZWRBcHBEYXRhLmFkanVzdGVkVGltZTtcbiAgY2l0eW5hbWUgPSBjYXBpdGFsaXplU3RyaW5nKGNpdHluYW1lKTtcbiAgY2l0eS5pbm5lckhUTUwgPSBjaXR5bmFtZTtcbiAgY3VycmVudFRlbXAuaW5uZXJIVE1MID0gcmVmaW5lZEFwcERhdGEuY3VycmVudFRlbXAgKyBcIiZkZWc7XCIgKyB1bml0U3ltYm9sO1xuICBmZWVsc0xpa2UuaW5uZXJIVE1MID1cbiAgICBcIkZlZWxzIGxpa2UgXCIgKyByZWZpbmVkQXBwRGF0YS5mZWVsc0xpa2UgKyBcIiZkZWc7XCIgKyB1bml0U3ltYm9sO1xuICBjdXJyZW50RGVzY3JpcC5pbm5lckhUTUwgPSByZWZpbmVkQXBwRGF0YS5jdXJyZW50RGVzY3JpcDtcbiAgd2luZFNwZWVkLmlubmVySFRNTCA9IFwiV2luZCBcIiArIHJlZmluZWRBcHBEYXRhLndpbmRTcGVlZCArIHdpbmRTeW1ib2w7XG4gIGN1cnJlbnREZXNjcmlwUGljLnNyYyA9IGdldEltYWdlRnJvbUlkKHJlZmluZWRBcHBEYXRhLmN1cnJlbnRJZCwgdHJ1ZSk7XG4gIHRvbW9ycm93VGVtcC5pbm5lckhUTUwgPSByZWZpbmVkQXBwRGF0YS50b21vcnJvd1RlbXAgKyBcIiZkZWc7XCIgKyB1bml0U3ltYm9sO1xuICB0b21vcnJvd0RhdGUuaW5uZXJIVE1MID0gXCJUb21vcnJvd1wiO1xuICB0b21vcnJvd1BpYy5zcmMgPSBnZXRJbWFnZUZyb21JZChyZWZpbmVkQXBwRGF0YS50b21vcnJvd0lkKTtcbiAgbmV4dERheVRlbXAuaW5uZXJIVE1MID0gcmVmaW5lZEFwcERhdGEubmV4dERheVRlbXAgKyBcIiZkZWc7XCIgKyB1bml0U3ltYm9sO1xuICBuZXh0RGF5RGF0ZS5pbm5lckhUTUwgPSByZWZpbmVkQXBwRGF0YS5uZXh0RGF5RGF0ZTtcbiAgbmV4dERheVBpYy5zcmMgPSBnZXRJbWFnZUZyb21JZChyZWZpbmVkQXBwRGF0YS5uZXh0RGF5SWQpO1xuICBjaGFuZ2VVbml0cy5pbm5lckhUTUwgPSBcIkNsaWNrIHRvIGNoYW5nZSB1bml0cyB0byBcIiArIHJldmVyc2VVbml0ICsgXCIuXCI7XG59O1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBtYXN0ZXJGdW5jKGlucHV0LnZhbHVlKTtcbiAgY2l0eU5hbWUgPSBpbnB1dC52YWx1ZTtcbiAgZm9ybS5yZXNldCgpO1xuICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiXCI7XG59KTtcblxuY2hhbmdlVW5pdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaXNNZXRyaWMgPSBpc01ldHJpYyA/IGZhbHNlIDogdHJ1ZTtcbiAgdW5pdE5hbWUgPSBpc01ldHJpYyA/IFwibWV0cmljXCIgOiBcImltcGVyaWFsXCI7XG4gIHVuaXRTeW1ib2wgPSBpc01ldHJpYyA/IFwiQ1wiIDogXCJGXCI7XG4gIHdpbmRTeW1ib2wgPSBpc01ldHJpYyA/IFwiIGttL2hcIiA6IFwiIG1waFwiO1xuICByZXZlcnNlVW5pdCA9IGlzTWV0cmljID8gXCJpbXBlcmlhbFwiIDogXCJtZXRyaWNcIjtcbiAgbWFzdGVyRnVuYyhjaXR5TmFtZSk7XG59KTtcblxuLy8gZnVuY3Rpb25zIHRvIHJlZmluZSBkYXRhXG5cbmNvbnN0IHJlZmluZURhdGFPYmplY3QgPSAoKSA9PiB7XG4gIGNvbnN0IG5vdyA9IHJlZmluZUN1cnJlbnRXZWF0aGVyQ29uZGl0aW9ucygpO1xuICBjb25zdCB0b21vcnJvdyA9IHJlZmluZVRvbW9ycm93V2VhdGhlckNvbmRpdGlvbnMoKTtcbiAgY29uc3QgbmV4dCA9IHJlZmluZU5leHREYXlXZWF0aGVyQ29uZGl0aW9ucygpO1xuXG4gIHJlZmluZWRBcHBEYXRhID0ge1xuICAgIHJhd0N1cnJlbnRUaW1lOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmR0ICogMTAwMCxcbiAgICByYXdTdW5zZXRUaW1lOiB3ZWF0aGVyRGF0YS5jdXJyZW50LnN1bnNldCAqIDEwMDAsXG4gICAgcmF3U3VucmlzZVRpbWU6IHdlYXRoZXJEYXRhLmN1cnJlbnQuc3VucmlzZSAqIDEwMDAsXG4gICAgYWRqdXN0ZWRUaW1lOiBnZXRUaW1lU3RyaW5nKCksXG4gICAgY3VycmVudFRlbXA6IG5vdy5jdXJyZW50VGVtcCxcbiAgICBmZWVsc0xpa2U6IG5vdy5mZWVsc0xpa2UsXG4gICAgY3VycmVudERlc2NyaXA6IG5vdy5jdXJyZW50RGVzY3JpcENhcHMsXG4gICAgd2luZFNwZWVkOiBub3cud2luZFNwZWVkLFxuICAgIGN1cnJlbnRJZDogd2VhdGhlckRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmlkLFxuICAgIHRvbW9ycm93RGF0ZTogdG9tb3Jyb3cudG9tb3Jyb3dEYXRlLFxuICAgIHRvbW9ycm93VGVtcDogdG9tb3Jyb3cudG9tb3Jyb3dUZW1wLFxuICAgIHRvbW9ycm93RGVzY3JpcDogdG9tb3Jyb3cudG9tb3Jyb3dEZXNjcmlwQ2FwcyxcbiAgICB0b21vcnJvd0lkOiB3ZWF0aGVyRGF0YS5kYWlseVsxXS53ZWF0aGVyWzBdLmlkLFxuICAgIG5leHREYXlEYXRlOiBuZXh0Lm5leHREYXlEYXlvZldlZWssXG4gICAgbmV4dERheVRlbXA6IG5leHQubmV4dERheVRlbXAsXG4gICAgbmV4dERheURlc2NyaXA6IG5leHQubmV4dERheURlc2NyaXBDYXBzLFxuICAgIG5leHREYXlJZDogd2VhdGhlckRhdGEuZGFpbHlbMl0ud2VhdGhlclswXS5pZCxcbiAgfTtcbn07XG5cbmNvbnN0IHJlZmluZUN1cnJlbnRXZWF0aGVyQ29uZGl0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudFRlbXAgPSBtYWtlUm91bmROdW1iZXIod2VhdGhlckRhdGEuY3VycmVudC50ZW1wKTtcbiAgY29uc3QgZmVlbHNMaWtlID0gbWFrZVJvdW5kTnVtYmVyKHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNfbGlrZSk7XG4gIGNvbnN0IGN1cnJlbnREZXNjcmlwQ2FwcyA9IGNhcGl0YWxpemVTdHJpbmcoXG4gICAgd2VhdGhlckRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICk7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IG1ha2VSb3VuZE51bWJlcih3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfc3BlZWQpO1xuICByZXR1cm4geyBjdXJyZW50VGVtcCwgZmVlbHNMaWtlLCBjdXJyZW50RGVzY3JpcENhcHMsIHdpbmRTcGVlZCB9O1xufTtcblxuY29uc3QgcmVmaW5lVG9tb3Jyb3dXZWF0aGVyQ29uZGl0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgdG9tb3Jyb3dEYXRlID0gbmV3IERhdGUod2VhdGhlckRhdGEuZGFpbHlbMV0uZHQpO1xuICBjb25zdCB0b21vcnJvd1RlbXAgPSBtYWtlUm91bmROdW1iZXIod2VhdGhlckRhdGEuZGFpbHlbMV0udGVtcC5kYXkpO1xuICBjb25zdCB0b21vcnJvd0Rlc2NyaXBDYXBzID0gY2FwaXRhbGl6ZVN0cmluZyhcbiAgICB3ZWF0aGVyRGF0YS5kYWlseVsxXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICk7XG4gIHJldHVybiB7IHRvbW9ycm93RGF0ZSwgdG9tb3Jyb3dUZW1wLCB0b21vcnJvd0Rlc2NyaXBDYXBzIH07XG59O1xuXG5jb25zdCByZWZpbmVOZXh0RGF5V2VhdGhlckNvbmRpdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IG5leHREYXlEYXRlID0gbmV3IERhdGUod2VhdGhlckRhdGEuZGFpbHlbMl0uZHQgKiAxMDAwKTtcbiAgbGV0IG5leHREYXlOdW1iZXIgPSBuZXh0RGF5RGF0ZS5nZXREYXkoKTtcbiAgbGV0IG5leHREYXlEYXlvZldlZWsgPSBnZXREYXlvZldlZWsobmV4dERheU51bWJlcik7XG4gIGNvbnN0IG5leHREYXlUZW1wID0gbWFrZVJvdW5kTnVtYmVyKHdlYXRoZXJEYXRhLmRhaWx5WzJdLnRlbXAuZGF5KTtcbiAgY29uc3QgbmV4dERheURlc2NyaXBDYXBzID0gY2FwaXRhbGl6ZVN0cmluZyhcbiAgICB3ZWF0aGVyRGF0YS5kYWlseVsyXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICk7XG4gIHJldHVybiB7IG5leHREYXlEYXlvZldlZWssIG5leHREYXlUZW1wLCBuZXh0RGF5RGVzY3JpcENhcHMgfTtcbn07XG5cbmNvbnN0IGdldFRpbWVTdHJpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IHJhd0N1cnJlbnRUaW1lID0gd2VhdGhlckRhdGEuY3VycmVudC5kdCAqIDEwMDA7XG4gIGNvbnN0IHRpbWVab25lT2Zmc2V0ID0gd2VhdGhlckRhdGEudGltZXpvbmVfb2Zmc2V0ICogMTAwMDtcbiAgY29uc3QgbG9jYWxUaW1lID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbG9jYWxPZmZzZXQgPSBsb2NhbFRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgY29uc3QgbG9jYWxPZmZzZXRNaWxsaXNlY29uZHMgPSBsb2NhbE9mZnNldCAqIDYwMDAwO1xuICBjb25zdCBhZGp1c3RlZFNlY29uZHMgPSByYXdDdXJyZW50VGltZSArIHRpbWVab25lT2Zmc2V0O1xuICBjb25zdCBhZGp1c3RlZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICBhZGp1c3RlZFRpbWUuc2V0VGltZShhZGp1c3RlZFNlY29uZHMgKyBsb2NhbE9mZnNldE1pbGxpc2Vjb25kcyk7XG4gIGNvbnN0IGFkanVzdGVkRGF5ID0gYWRqdXN0ZWRUaW1lLmdldERheSgpO1xuICBjb25zdCBhZGp1c3RlZERheU9mV2VlayA9IGdldERheW9mV2VlayhhZGp1c3RlZERheSk7XG4gIGNvbnN0IGFkanVzdGVkTW9udGggPSBhZGp1c3RlZFRpbWUuZ2V0TW9udGgoKTtcbiAgY29uc3QgYWRqdXN0ZWRNb250aE5hbWUgPSBnZXRNb250aE5hbWUoYWRqdXN0ZWRNb250aCk7XG4gIGNvbnN0IGFkanVzdGVkRGF0ZSA9IGFkanVzdGVkVGltZS5nZXREYXRlKCk7XG4gIGNvbnN0IGFkanVzdGVkSG91cnMgPSBhZGp1c3RlZFRpbWUuZ2V0SG91cnMoKTtcbiAgY29uc3QgYWRqdXN0ZWQxMkhvdXIgPSB0b1R3ZWx2ZUhvdXJDbG9jayhhZGp1c3RlZEhvdXJzKTtcbiAgY29uc3QgYWRqdXN0ZWRNaW51dGVzID0gYWRqdXN0ZWRUaW1lLmdldE1pbnV0ZXMoKTtcbiAgY29uc3QgcGFkZGVkQWRqdXN0ZWRNaW51dGVzID0gcGFkQWRqdXN0ZWRNaW51dGVzKGFkanVzdGVkTWludXRlcyk7XG5cbiAgbGV0IGFtcG07XG4gIGFkanVzdGVkSG91cnMgPj0gMTIgPyAoYW1wbSA9IFwicG1cIikgOiAoYW1wbSA9IFwiYW1cIik7XG5cbiAgbGV0IGFkanVzdGVkVGltZVN0cmluZyA9XG4gICAgYWRqdXN0ZWREYXlPZldlZWsgK1xuICAgIFwiLCBcIiArXG4gICAgYWRqdXN0ZWRNb250aE5hbWUgK1xuICAgIFwiIFwiICtcbiAgICBhZGp1c3RlZERhdGUgK1xuICAgIFwiLCBcIiArXG4gICAgYWRqdXN0ZWQxMkhvdXIgK1xuICAgIFwiOlwiICtcbiAgICBwYWRkZWRBZGp1c3RlZE1pbnV0ZXMgK1xuICAgIFwiIFwiICtcbiAgICBhbXBtO1xuXG4gIHJldHVybiBhZGp1c3RlZFRpbWVTdHJpbmc7XG59O1xuXG5jb25zdCB0b1R3ZWx2ZUhvdXJDbG9jayA9IChudW1iZXIpID0+IHtcbiAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgIG51bWJlciA9IDEyO1xuICB9IGVsc2UgaWYgKG51bWJlciA+IDEyKSB7XG4gICAgbnVtYmVyID0gbnVtYmVyIC0gMTI7XG4gIH1cbiAgcmV0dXJuIG51bWJlcjtcbn07XG5cbmNvbnN0IHBhZEFkanVzdGVkTWludXRlcyA9IChudW1iZXIpID0+IHtcbiAgcmV0dXJuIG51bWJlciA8IDEwID8gXCIwXCIgKyBudW1iZXIgOiBudW1iZXI7XG59O1xuXG5jb25zdCBtYWtlUm91bmROdW1iZXIgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gTWF0aC5yb3VuZChkYXRhKTtcbn07XG5cbmNvbnN0IGNhcGl0YWxpemVTdHJpbmcgPSAoZGF0YSkgPT4ge1xuICBjb25zdCB3b3JkQXJyYXkgPSBkYXRhLnNwbGl0KFwiIFwiKTtcbiAgY29uc3Qgd29yZFN0cmluZ0NhcHMgPSB3b3JkQXJyYXlcbiAgICAubWFwKCh3b3JkKSA9PiB7XG4gICAgICByZXR1cm4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHJpbmcoMSk7XG4gICAgfSlcbiAgICAuam9pbihcIiBcIik7XG4gIHJldHVybiB3b3JkU3RyaW5nQ2Fwcztcbn07XG5cbmNvbnN0IGdldE1vbnRoTmFtZSA9IChudW1iZXIpID0+IHtcbiAgbGV0IG1vbnRoTmFtZTtcbiAgc3dpdGNoIChudW1iZXIpIHtcbiAgICBjYXNlIDA6XG4gICAgICBtb250aE5hbWUgPSBcIkphbnVhcnlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIG1vbnRoTmFtZSA9IFwiRmVicnVhcnlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIG1vbnRoTmFtZSA9IFwiTWFyY2hcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIG1vbnRoTmFtZSA9IFwiQXByaWxcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIG1vbnRoTmFtZSA9IFwiTWF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBtb250aE5hbWUgPSBcIkp1bmVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjpcbiAgICAgIG1vbnRoTmFtZSA9IFwiSnVseVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3OlxuICAgICAgbW9udGhOYW1lID0gXCJBdWd1c3RcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgODpcbiAgICAgIG1vbnRoTmFtZSA9IFwiU2VwdGVtYmVyXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDk6XG4gICAgICBtb250aE5hbWUgPSBcIk9jdG9iZXJcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTA6XG4gICAgICBtb250aE5hbWUgPSBcIk5vdmVtYmVyXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDExOlxuICAgICAgbW9udGhOYW1lID0gXCJEZWNlbWJlclwiO1xuICB9XG4gIHJldHVybiBtb250aE5hbWU7XG59O1xuXG5jb25zdCBnZXREYXlvZldlZWsgPSAobnVtYmVyKSA9PiB7XG4gIGxldCBkYXlOYW1lO1xuICBzd2l0Y2ggKG51bWJlcikge1xuICAgIGNhc2UgMDpcbiAgICAgIGRheU5hbWUgPSBcIlN1bmRheVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgZGF5TmFtZSA9IFwiTW9uZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBkYXlOYW1lID0gXCJUdWVzZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBkYXlOYW1lID0gXCJXZWRuZXNkYXlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIGRheU5hbWUgPSBcIlRodXJzZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBkYXlOYW1lID0gXCJGcmlkYXlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjpcbiAgICAgIGRheU5hbWUgPSBcIlNhdHVyZGF5XCI7XG4gIH1cbiAgcmV0dXJuIGRheU5hbWU7XG59O1xuXG5jb25zdCBnZXRJbWFnZUZyb21JZCA9IChpZCwgdG9kYXkpID0+IHtcbiAgLy8gaWYgdG9kYXkgaXMgZmFsc2UgdGhlbiByZW5kZXIgZGF5IHdlYXRoZXIgaWNvbnNcbiAgY29uc3QgaWRTdHJpbmcgPSBpZC50b1N0cmluZygpO1xuICBpZiAoaWRTdHJpbmdbMF0gPT0gXCIyXCIpIHtcbiAgICByZXR1cm4gXCIuL2ltZy9uZXcxMWQucG5nXCI7XG4gIH1cbiAgaWYgKFxuICAgIChpZFN0cmluZ1swXSA9PSBcIjNcIiAmJlxuICAgICAgcmVmaW5lZEFwcERhdGEucmF3Q3VycmVudFRpbWUgPiByZWZpbmVkQXBwRGF0YS5yYXdTdW5zZXRUaW1lICYmXG4gICAgICB0b2RheSkgfHxcbiAgICAoaWRTdHJpbmdbMF0gPT0gXCIzXCIgJiZcbiAgICAgIHJlZmluZWRBcHBEYXRhLnJhd0N1cnJlbnRUaW1lIDwgcmVmaW5lZEFwcERhdGEucmF3U3VucmlzZVRpbWUgJiZcbiAgICAgIHRvZGF5KVxuICApIHtcbiAgICByZXR1cm4gXCIuL2ltZy9uZXcwOW4ucG5nXCI7XG4gIH0gZWxzZSBpZiAoaWRTdHJpbmdbMF0gPT0gXCIzXCIpIHtcbiAgICByZXR1cm4gXCIuL2ltZy9uZXcwOWQucG5nXCI7XG4gIH1cbiAgaWYgKGlkU3RyaW5nWzBdID09IFwiNVwiICYmIGlkU3RyaW5nWzFdID09IFwiMFwiKSB7XG4gICAgcmV0dXJuIFwiLi9pbWcvbmV3MTBkLnBuZ1wiO1xuICB9XG4gIGlmIChpZFN0cmluZ1swXSA9PSBcIjVcIiAmJiBpZFN0cmluZ1sxXSA9PSBcIjFcIikge1xuICAgIHJldHVybiBcIi4vaW1nL25ldzEzZC5wbmdcIjtcbiAgfVxuICBpZiAoXG4gICAgKGlkU3RyaW5nWzBdID09IFwiNVwiICYmXG4gICAgICBpZFN0cmluZ1sxXSA9PSBcIjJcIiAmJlxuICAgICAgcmVmaW5lZEFwcERhdGEucmF3Q3VycmVudFRpbWUgPiByZWZpbmVkQXBwRGF0YS5yYXdTdW5zZXRUaW1lICYmXG4gICAgICB0b2RheSkgfHxcbiAgICAoaWRTdHJpbmdbMF0gPT0gXCI1XCIgJiZcbiAgICAgIGlkU3RyaW5nWzFdID09IFwiMlwiICYmXG4gICAgICByZWZpbmVkQXBwRGF0YS5yYXdDdXJyZW50VGltZSA8IHJlZmluZWRBcHBEYXRhLnJhd1N1bnJpc2VUaW1lICYmXG4gICAgICB0b2RheSkgfHxcbiAgICAoaWRTdHJpbmdbMF0gPT0gXCI1XCIgJiZcbiAgICAgIGlkU3RyaW5nWzFdID09IFwiM1wiICYmXG4gICAgICByZWZpbmVkQXBwRGF0YS5yYXdDdXJyZW50VGltZSA+IHJlZmluZWRBcHBEYXRhLnJhd1N1bnNldFRpbWUgJiZcbiAgICAgIHRvZGF5KSB8fFxuICAgIChpZFN0cmluZ1swXSA9PSBcIjVcIiAmJlxuICAgICAgaWRTdHJpbmdbMV0gPT0gXCIzXCIgJiZcbiAgICAgIHJlZmluZWRBcHBEYXRhLnJhd0N1cnJlbnRUaW1lIDwgcmVmaW5lZEFwcERhdGEucmF3U3VucmlzZVRpbWUgJiZcbiAgICAgIHRvZGF5KVxuICApIHtcbiAgICByZXR1cm4gXCIuL2ltZy9uZXcwOW4ucG5nXCI7XG4gIH0gZWxzZSBpZiAoXG4gICAgKGlkU3RyaW5nWzBdID09IFwiNVwiICYmIGlkU3RyaW5nWzFdID09IFwiMlwiKSB8fFxuICAgIChpZFN0cmluZ1swXSA9PSBcIjVcIiAmJiBpZFN0cmluZ1sxXSA9PSBcIjNcIilcbiAgKSB7XG4gICAgcmV0dXJuIFwiLi9pbWcvbmV3MDlkLnBuZ1wiO1xuICB9XG4gIGlmIChpZFN0cmluZ1swXSA9PSBcIjZcIikge1xuICAgIHJldHVybiBcIi4vaW1nL25ldzEzZC5wbmdcIjtcbiAgfVxuICBpZiAoaWRTdHJpbmdbMF0gPT0gXCI3XCIpIHtcbiAgICByZXR1cm4gXCIuL2ltZy9uZXc1MGQucG5nXCI7XG4gIH1cbiAgaWYgKFxuICAgIChpZFN0cmluZyA9PSBcIjgwMFwiICYmXG4gICAgICByZWZpbmVkQXBwRGF0YS5yYXdDdXJyZW50VGltZSA+IHJlZmluZWRBcHBEYXRhLnJhd1N1bnNldFRpbWUgJiZcbiAgICAgIHRvZGF5KSB8fFxuICAgIChpZFN0cmluZyA9PSBcIjgwMFwiICYmXG4gICAgICByZWZpbmVkQXBwRGF0YS5yYXdDdXJyZW50VGltZSA8IHJlZmluZWRBcHBEYXRhLnJhd1N1bnJpc2VUaW1lICYmXG4gICAgICB0b2RheSlcbiAgKSB7XG4gICAgcmV0dXJuIFwiLi9pbWcvbmV3MDFuLnBuZ1wiO1xuICB9IGVsc2UgaWYgKGlkU3RyaW5nID09IFwiODAwXCIpIHtcbiAgICByZXR1cm4gXCIuL2ltZy9uZXcwMWQucG5nXCI7XG4gIH1cbiAgaWYgKFxuICAgIChpZFN0cmluZyA9PSBcIjgwMVwiICYmXG4gICAgICByZWZpbmVkQXBwRGF0YS5yYXdDdXJyZW50VGltZSA+IHJlZmluZWRBcHBEYXRhLnJhd1N1bnNldFRpbWUgJiZcbiAgICAgIHRvZGF5KSB8fFxuICAgIChpZFN0cmluZyA9PSBcIjgwMVwiICYmXG4gICAgICByZWZpbmVkQXBwRGF0YS5yYXdDdXJyZW50VGltZSA8IHJlZmluZWRBcHBEYXRhLnJhd1N1bnJpc2VUaW1lICYmXG4gICAgICB0b2RheSlcbiAgKSB7XG4gICAgcmV0dXJuIFwiLi9pbWcvbmV3MDJuLnBuZ1wiO1xuICB9IGVsc2UgaWYgKGlkU3RyaW5nID09IFwiODAxXCIpIHtcbiAgICByZXR1cm4gXCIuL2ltZy9uZXcwMmQucG5nXCI7XG4gIH1cbiAgaWYgKGlkU3RyaW5nID09IFwiODAyXCIpIHtcbiAgICByZXR1cm4gXCIuL2ltZy9uZXcwM2QucG5nXCI7XG4gIH1cbiAgaWYgKGlkU3RyaW5nID09IFwiODAzXCIgfHwgaWRTdHJpbmcgPT0gXCI4MDRcIikge1xuICAgIHJldHVybiBcIi4vaW1nL25ldzAzZC5wbmdcIjtcbiAgfVxufTtcblxucmVuZGVySG9tZSgpO1xuXG5tYXN0ZXJGdW5jKGNpdHlOYW1lKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==