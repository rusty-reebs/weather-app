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

let refinedAppData = {}; //? can name below function this object and then use this.currentTime etc?

const refineDataObject = () => {
  const rawCurrentTime = weatherData.current.dt * 1000;
  const timeZoneOffset = weatherData.timezone_offset * 1000;
  const currentTime = new Date(weatherData.current.dt * 1000);
  const localTime = new Date();
  const localOffset = localTime.getTimezoneOffset();
  const localOffsetMilliseconds = localOffset * 60000;
  const adjustedSeconds = rawCurrentTime + timeZoneOffset;
  const adjustedTime = new Date();
  adjustedTime.setTime(adjustedSeconds + localOffsetMilliseconds);
  let adjustedDay = adjustedTime.getDay();
  let adjustedDayOfWeek = getDayofWeek(adjustedDay);
  let adjustedMonth = adjustedTime.getMonth();
  let adjustedMonthName = getMonthName(adjustedMonth);
  const adjustedDate = adjustedTime.getDate();
  const adjustedHours = adjustedTime.getHours();
  const adjusted12Hour = toTwelveHourClock(adjustedHours);
  const adjustedMinutes = adjustedTime.getMinutes();
  const paddedAdjustedMinutes = padAdjustedMinutes(adjustedMinutes);
  let ampm;
  adjustedHours >= 12 ? (ampm = "pm") : (ampm = "am");

  // console.log(
  //   adjustedDay,
  //   adjustedMonth,
  //   adjustedDate,
  //   adjustedHours,
  //   adjustedMinutes
  // );

  // console.log(
  //   adjustedDayOfWeek,
  //   adjustedMonthName,
  //   adjustedDate,
  //   adjusted12Hour,
  //   paddedAdjustedMinutes
  // );
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
  console.log(adjustedTimeString);
  const currentTemp = makeRoundNumber(weatherData.current.temp);
  const feelsLike = makeRoundNumber(weatherData.current.feels_like);
  const currentDescripCaps = capitalizeString(
    weatherData.current.weather[0].description
  );
  const windSpeed = makeRoundNumber(weatherData.current.wind_speed);
  const tomorrowDate = new Date(weatherData.daily[1].dt);
  const tomorrowTemp = makeRoundNumber(weatherData.daily[1].temp.day);
  const tomorrowDescripCaps = capitalizeString(
    weatherData.daily[1].weather[0].description
  );
  const nextDayDate = new Date(weatherData.daily[2].dt * 1000);
  let nextDayNumber = nextDayDate.getDay();
  let nextDayDayofWeek = getDayofWeek(nextDayNumber);

  const nextDayTemp = makeRoundNumber(weatherData.daily[2].temp.day);
  const nextDayDescripCaps = capitalizeString(
    weatherData.daily[2].weather[0].description
  );

  refinedAppData.rawCurrentTime = rawCurrentTime;
  refinedAppData.rawSunsetTime = weatherData.current.sunset * 1000;
  refinedAppData.rawSunriseTime = weatherData.current.sunrise * 1000;
  refinedAppData.currentTime = currentTime;
  refinedAppData.adjustedTime = adjustedTimeString;
  refinedAppData.currentTemp = currentTemp;
  refinedAppData.feelsLike = feelsLike;
  refinedAppData.currentDescrip = currentDescripCaps;
  refinedAppData.windSpeed = windSpeed;
  refinedAppData.currentId = weatherData.current.weather[0].id;
  refinedAppData.tomorrowDate = tomorrowDate;
  refinedAppData.tomorrowTemp = tomorrowTemp;
  refinedAppData.tomorrowDescrip = tomorrowDescripCaps;
  refinedAppData.tomorrowId = weatherData.daily[1].weather[0].id;
  refinedAppData.nextDayDate = nextDayDayofWeek;
  refinedAppData.nextDayTemp = nextDayTemp;
  refinedAppData.nextDayDescrip = nextDayDescripCaps;
  refinedAppData.nextDayId = weatherData.daily[2].weather[0].id;

  console.log(refinedAppData);
};

// functions to refine data

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFZRTtBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pHRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpREFBVTs7QUFFViIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvc2VhcmNoaWNvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBEZXNpZ24gZm9yIG1vYmlsZS1maXJzdCAqL1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZDogIzU2Y2NmMjsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIGxlZnQsXFxuICAgICMyZjgwZWQsXFxuICAgICM1NmNjZjJcXG4gICk7IC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIGxlZnQsXFxuICAgICMyZjgwZWQsXFxuICAgICM1NmNjZjJcXG4gICk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjMDAwMDAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XFxufVxcbi51cHBlciB7XFxuICBncmlkLXJvdzogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9ybSB7XFxuICBncmlkLXJvdzogMTtcXG4gIHdpZHRoOiA5MCU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5zZWFyY2hiYXIge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMHB4IDZweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoYmFyOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5kYXRlZGl2IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGdyaWQtcm93OiAyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jaXR5ZGl2IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGdyaWQtcm93OiAzO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5sb3dlciB7XFxuICBncmlkLXJvdzogMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA2MHB4IDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4udGVtcCB7XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmciAxZnI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50ZW1wIHAge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ud2luZHNwZWVkIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG4uZmVlbHNsaWtlIHtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uZGVzY3JpcCB7XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRlc2NyaXAgaW1nIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLmRlc2NyaXAgaDQge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4udG9tb3Jyb3cge1xcbiAgZ3JpZC1yb3c6IDM7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4udG9tb3Jyb3cgaW1nIHtcXG4gIGdyaWQtcm93OiAyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5uZXh0ZGF5IHtcXG4gIGdyaWQtcm93OiAzO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLm5leHRkYXkgaW1nIHtcXG4gIGdyaWQtcm93OiAyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi51bml0c2RpdiB7XFxuICBncmlkLXJvdzogMztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi51bml0c2RpdiBhIHtcXG4gIGdyaWQtcm93OiAyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC5zZWFyY2hiYXIge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xcbiAgLmNvbnRlbnQge1xcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTUwcHg7XFxuICB9XFxuICBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICAuc2VhcmNoYmFyIHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNEJBQTRCOztBQUU1QjtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQixFQUFFLDhCQUE4QjtFQUNuRDs7OztHQUlDLEVBQUUsK0JBQStCO0VBQ2xDOzs7O0dBSUMsRUFBRSxxRUFBcUU7RUFDeEUsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx5REFBNEM7RUFDNUMscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRGVzaWduIGZvciBtb2JpbGUtZmlyc3QgKi9cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQ6ICM1NmNjZjI7IC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byBsZWZ0LFxcbiAgICAjMmY4MGVkLFxcbiAgICAjNTZjY2YyXFxuICApOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byBsZWZ0LFxcbiAgICAjMmY4MGVkLFxcbiAgICAjNTZjY2YyXFxuICApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggIzAwMDAwMDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbn1cXG4udXBwZXIge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm0ge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uc2VhcmNoYmFyIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGdyaWQtcm93OiAxO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZSB1cmwoLi4vaW1nL3NlYXJjaGljb24ucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjBweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDEwcHggNnB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBhZGRpbmctbGVmdDogMzVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zZWFyY2hiYXI6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmRhdGVkaXYge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNpdHlkaXYge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZ3JpZC1yb3c6IDM7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmxvd2VyIHtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDYwcHggMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcblxcbi50ZW1wIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyIDFmcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRlbXAgcCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi53aW5kc3BlZWQge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcbi5mZWVsc2xpa2Uge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5kZXNjcmlwIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZGVzY3JpcCBpbWcge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4uZGVzY3JpcCBoNCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi50b21vcnJvdyB7XFxuICBncmlkLXJvdzogMztcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi50b21vcnJvdyBpbWcge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm5leHRkYXkge1xcbiAgZ3JpZC1yb3c6IDM7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4ubmV4dGRheSBpbWcge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnVuaXRzZGl2IHtcXG4gIGdyaWQtcm93OiAzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLnVuaXRzZGl2IGEge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgLnNlYXJjaGJhciB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XFxuICAuY29udGVudCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcXG4gIH1cXG4gIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG4gIC5zZWFyY2hiYXIge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBob21lLmpzXG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5jb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgY3VycmVudERlc2NyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG5jb25zdCBjdXJyZW50RGVzY3JpcFBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5jb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IHRvbW9ycm93RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbmNvbnN0IHRvbW9ycm93VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbmNvbnN0IHRvbW9ycm93UGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmNvbnN0IG5leHREYXlEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuY29uc3QgbmV4dERheVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG5jb25zdCBuZXh0RGF5UGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbmNvbnN0IGNoYW5nZVVuaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbmNvbnN0IHJlbmRlckhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHVwcGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdXBwZXJEaXYuY2xhc3NMaXN0LmFkZChcInVwcGVyXCIpO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoYmFyXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZGF0ZWRpdlwiKTtcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlKTtcblxuICBjb25zdCBjaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2l0eURpdi5jbGFzc0xpc3QuYWRkKFwiY2l0eWRpdlwiKTtcbiAgY2l0eURpdi5hcHBlbmRDaGlsZChjaXR5KTtcblxuICBjb25zdCBsb3dlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvd2VyRGl2LmNsYXNzTGlzdC5hZGQoXCJsb3dlclwiKTtcbiAgY29uc3QgY3VycmVudFRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjdXJyZW50VGVtcERpdi5jbGFzc0xpc3QuYWRkKFwidGVtcFwiKTtcbiAgZmVlbHNMaWtlLmNsYXNzTGlzdC5hZGQoXCJmZWVsc2xpa2VcIik7XG4gIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKFwid2luZHNwZWVkXCIpO1xuICBjdXJyZW50VGVtcERpdi5hcHBlbmRDaGlsZChjdXJyZW50VGVtcCk7XG4gIGN1cnJlbnRUZW1wRGl2LmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XG4gIGN1cnJlbnRUZW1wRGl2LmFwcGVuZENoaWxkKGZlZWxzTGlrZSk7XG5cbiAgY29uc3QgY3VycmVudERlc2NyaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjdXJyZW50RGVzY3JpcERpdi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcFwiKTtcbiAgY3VycmVudERlc2NyaXBQaWMuaGVpZ2h0ID0gXCIxMDBcIjtcbiAgY3VycmVudERlc2NyaXBEaXYuYXBwZW5kQ2hpbGQoY3VycmVudERlc2NyaXBQaWMpO1xuICBjdXJyZW50RGVzY3JpcERpdi5hcHBlbmRDaGlsZChjdXJyZW50RGVzY3JpcCk7XG5cbiAgY29uc3QgdG9tb3Jyb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b21vcnJvd0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9tb3Jyb3dcIik7XG4gIHRvbW9ycm93UGljLmhlaWdodCA9IFwiODBcIjtcbiAgdG9tb3Jyb3dEaXYuYXBwZW5kQ2hpbGQodG9tb3Jyb3dEYXRlKTtcbiAgdG9tb3Jyb3dEaXYuYXBwZW5kQ2hpbGQodG9tb3Jyb3dQaWMpO1xuICB0b21vcnJvd0Rpdi5hcHBlbmRDaGlsZCh0b21vcnJvd1RlbXApO1xuXG4gIGNvbnN0IG5leHREYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXh0RGF5RGl2LmNsYXNzTGlzdC5hZGQoXCJuZXh0ZGF5XCIpO1xuICBuZXh0RGF5UGljLmhlaWdodCA9IFwiODBcIjtcbiAgbmV4dERheURpdi5hcHBlbmRDaGlsZChuZXh0RGF5RGF0ZSk7XG4gIG5leHREYXlEaXYuYXBwZW5kQ2hpbGQobmV4dERheVBpYyk7XG4gIG5leHREYXlEaXYuYXBwZW5kQ2hpbGQobmV4dERheVRlbXApO1xuXG4gIGNvbnN0IHVuaXRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdW5pdHNEaXYuY2xhc3NMaXN0LmFkZChcInVuaXRzZGl2XCIpO1xuICB1bml0c0Rpdi5hcHBlbmRDaGlsZChjaGFuZ2VVbml0cyk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVwcGVyRGl2KTtcbiAgdXBwZXJEaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIHVwcGVyRGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuICB1cHBlckRpdi5hcHBlbmRDaGlsZChjaXR5RGl2KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxvd2VyRGl2KTtcbiAgbG93ZXJEaXYuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBEaXYpO1xuICBsb3dlckRpdi5hcHBlbmRDaGlsZChjdXJyZW50RGVzY3JpcERpdik7XG4gIGxvd2VyRGl2LmFwcGVuZENoaWxkKHRvbW9ycm93RGl2KTtcbiAgbG93ZXJEaXYuYXBwZW5kQ2hpbGQobmV4dERheURpdik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh1bml0c0Rpdik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufTtcblxuZXhwb3J0IHtcbiAgcmVuZGVySG9tZSxcbiAgZm9ybSxcbiAgaW5wdXQsXG4gIGRhdGUsXG4gIGNpdHksXG4gIGN1cnJlbnRUZW1wLFxuICBmZWVsc0xpa2UsXG4gIGN1cnJlbnREZXNjcmlwLFxuICB3aW5kU3BlZWQsXG59O1xuZXhwb3J0IHtcbiAgY3VycmVudERlc2NyaXBQaWMsXG4gIHRvbW9ycm93VGVtcCxcbiAgdG9tb3Jyb3dEYXRlLFxuICB0b21vcnJvd1BpYyxcbiAgbmV4dERheVRlbXAsXG4gIG5leHREYXlEYXRlLFxuICBuZXh0RGF5UGljLFxuICBjaGFuZ2VVbml0cyxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgeyByZW5kZXJIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xuXG5pbXBvcnQge1xuICBmb3JtLFxuICBpbnB1dCxcbiAgZGF0ZSxcbiAgY2l0eSxcbiAgY3VycmVudFRlbXAsXG4gIGZlZWxzTGlrZSxcbiAgY3VycmVudERlc2NyaXAsXG4gIHdpbmRTcGVlZCxcbiAgY3VycmVudERlc2NyaXBQaWMsXG59IGZyb20gXCIuL2hvbWVcIjtcblxuaW1wb3J0IHtcbiAgdG9tb3Jyb3dUZW1wLFxuICB0b21vcnJvd0RhdGUsXG4gIHRvbW9ycm93UGljLFxuICBuZXh0RGF5VGVtcCxcbiAgbmV4dERheURhdGUsXG4gIG5leHREYXlQaWMsXG4gIGNoYW5nZVVuaXRzLFxufSBmcm9tIFwiLi9ob21lXCI7XG5cbmxldCBhcGlFcnJvciA9IGZhbHNlO1xubGV0IGNpdHlEYXRhTmFtZTtcbmxldCBjaXR5TmFtZSA9IFwiVGJpbGlzaVwiO1xubGV0IGNpdHlMYXQ7XG5sZXQgY2l0eUxvbjtcbmxldCBpc01ldHJpYyA9IHRydWU7XG5sZXQgdW5pdE5hbWUgPSBcIm1ldHJpY1wiO1xubGV0IHVuaXRTeW1ib2wgPSBcIkNcIjtcbmxldCB3aW5kU3ltYm9sID0gXCIga20vaHJcIjtcbmxldCByZXZlcnNlVW5pdCA9IFwiaW1wZXJpYWxcIjtcblxuY29uc3QgZ2V0Q2l0eUxhdExvbiA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1cIiArXG4gICAgICAgIGNpdHkgK1xuICAgICAgICBcIiZhcHBpZD02YjRjMGM4ZjQ0Yzc4YjEyMWNlNDMxYTE2MGQyYWU4OFwiLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCBjaXR5RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjaXR5RGF0YU5hbWUgPSBjaXR5RGF0YS5uYW1lO1xuICAgIGNpdHlMYXQgPSBjaXR5RGF0YS5jb29yZC5sYXQ7XG4gICAgY2l0eUxvbiA9IGNpdHlEYXRhLmNvb3JkLmxvbjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhcGlFcnJvciA9IHRydWU7XG4gICAgc2hvd0Vycm9yTWVzc2FnZShcIkNpdHkgbm90IGZvdW5kLCB0cnkgYWdhaW4uXCIpO1xuICB9XG59O1xuXG5jb25zdCBzaG93RXJyb3JNZXNzYWdlID0gKHNwZWNpZnkpID0+IHtcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSBzcGVjaWZ5O1xufTtcblxubGV0IHdlYXRoZXJEYXRhO1xuY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChsYXQsIGxvbiwgdW5pdE5hbWUpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9XCIgK1xuICAgICAgICBsYXQgK1xuICAgICAgICBcIiZsb249XCIgK1xuICAgICAgICBsb24gK1xuICAgICAgICBcIiZleGNsdWRlPW1pbnV0ZWx5LGhvdXJseSxhbGVydHMmYXBwaWQ9NmI0YzBjOGY0NGM3OGIxMjFjZTQzMWExNjBkMmFlODgmdW5pdHM9XCIgK1xuICAgICAgICB1bml0TmFtZSxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYXBpRXJyb3IgPSB0cnVlO1xuICAgIHNob3dFcnJvck1lc3NhZ2UoXCJTb3JyeSwgdHJ5IGFnYWluLlwiKTtcbiAgfVxufTtcblxuY29uc3QgbWFzdGVyRnVuYyA9IGFzeW5jIChjaXR5bmFtZSkgPT4ge1xuICBhd2FpdCBnZXRDaXR5TGF0TG9uKGNpdHluYW1lKTtcbiAgYXdhaXQgZ2V0V2VhdGhlcihjaXR5TGF0LCBjaXR5TG9uLCB1bml0TmFtZSk7XG4gIGlmIChhcGlFcnJvcikge1xuICAgIGFwaUVycm9yID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHJlZmluZURhdGFPYmplY3QoKTtcbiAgICBwb3B1bGF0ZUVsZW1lbnRzKGNpdHluYW1lKTtcbiAgfVxufTtcblxuY29uc3QgcG9wdWxhdGVFbGVtZW50cyA9IChjaXR5bmFtZSkgPT4ge1xuICBkYXRlLmlubmVySFRNTCA9IHJlZmluZWRBcHBEYXRhLmFkanVzdGVkVGltZTtcbiAgY2l0eW5hbWUgPSBjYXBpdGFsaXplU3RyaW5nKGNpdHluYW1lKTtcbiAgY2l0eS5pbm5lckhUTUwgPSBjaXR5bmFtZTtcbiAgY3VycmVudFRlbXAuaW5uZXJIVE1MID0gcmVmaW5lZEFwcERhdGEuY3VycmVudFRlbXAgKyBcIiZkZWc7XCIgKyB1bml0U3ltYm9sO1xuICBmZWVsc0xpa2UuaW5uZXJIVE1MID1cbiAgICBcIkZlZWxzIGxpa2UgXCIgKyByZWZpbmVkQXBwRGF0YS5mZWVsc0xpa2UgKyBcIiZkZWc7XCIgKyB1bml0U3ltYm9sO1xuICBjdXJyZW50RGVzY3JpcC5pbm5lckhUTUwgPSByZWZpbmVkQXBwRGF0YS5jdXJyZW50RGVzY3JpcDtcbiAgd2luZFNwZWVkLmlubmVySFRNTCA9IFwiV2luZCBcIiArIHJlZmluZWRBcHBEYXRhLndpbmRTcGVlZCArIHdpbmRTeW1ib2w7XG4gIGN1cnJlbnREZXNjcmlwUGljLnNyYyA9IGdldEltYWdlRnJvbUlkKHJlZmluZWRBcHBEYXRhLmN1cnJlbnRJZCwgdHJ1ZSk7XG4gIHRvbW9ycm93VGVtcC5pbm5lckhUTUwgPSByZWZpbmVkQXBwRGF0YS50b21vcnJvd1RlbXAgKyBcIiZkZWc7XCIgKyB1bml0U3ltYm9sO1xuICB0b21vcnJvd0RhdGUuaW5uZXJIVE1MID0gXCJUb21vcnJvd1wiO1xuICB0b21vcnJvd1BpYy5zcmMgPSBnZXRJbWFnZUZyb21JZChyZWZpbmVkQXBwRGF0YS50b21vcnJvd0lkKTtcbiAgbmV4dERheVRlbXAuaW5uZXJIVE1MID0gcmVmaW5lZEFwcERhdGEubmV4dERheVRlbXAgKyBcIiZkZWc7XCIgKyB1bml0U3ltYm9sO1xuICBuZXh0RGF5RGF0ZS5pbm5lckhUTUwgPSByZWZpbmVkQXBwRGF0YS5uZXh0RGF5RGF0ZTtcbiAgbmV4dERheVBpYy5zcmMgPSBnZXRJbWFnZUZyb21JZChyZWZpbmVkQXBwRGF0YS5uZXh0RGF5SWQpO1xuICBjaGFuZ2VVbml0cy5pbm5lckhUTUwgPSBcIkNsaWNrIHRvIGNoYW5nZSB1bml0cyB0byBcIiArIHJldmVyc2VVbml0ICsgXCIuXCI7XG59O1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBtYXN0ZXJGdW5jKGlucHV0LnZhbHVlKTtcbiAgY2l0eU5hbWUgPSBpbnB1dC52YWx1ZTtcbiAgZm9ybS5yZXNldCgpO1xuICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiXCI7XG59KTtcblxuY2hhbmdlVW5pdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaXNNZXRyaWMgPSBpc01ldHJpYyA/IGZhbHNlIDogdHJ1ZTtcbiAgdW5pdE5hbWUgPSBpc01ldHJpYyA/IFwibWV0cmljXCIgOiBcImltcGVyaWFsXCI7XG4gIHVuaXRTeW1ib2wgPSBpc01ldHJpYyA/IFwiQ1wiIDogXCJGXCI7XG4gIHdpbmRTeW1ib2wgPSBpc01ldHJpYyA/IFwiIGttL2hcIiA6IFwiIG1waFwiO1xuICByZXZlcnNlVW5pdCA9IGlzTWV0cmljID8gXCJpbXBlcmlhbFwiIDogXCJtZXRyaWNcIjtcbiAgbWFzdGVyRnVuYyhjaXR5TmFtZSk7XG59KTtcblxubGV0IHJlZmluZWRBcHBEYXRhID0ge307IC8vPyBjYW4gbmFtZSBiZWxvdyBmdW5jdGlvbiB0aGlzIG9iamVjdCBhbmQgdGhlbiB1c2UgdGhpcy5jdXJyZW50VGltZSBldGM/XG5cbmNvbnN0IHJlZmluZURhdGFPYmplY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHJhd0N1cnJlbnRUaW1lID0gd2VhdGhlckRhdGEuY3VycmVudC5kdCAqIDEwMDA7XG4gIGNvbnN0IHRpbWVab25lT2Zmc2V0ID0gd2VhdGhlckRhdGEudGltZXpvbmVfb2Zmc2V0ICogMTAwMDtcbiAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5jdXJyZW50LmR0ICogMTAwMCk7XG4gIGNvbnN0IGxvY2FsVGltZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGxvY2FsT2Zmc2V0ID0gbG9jYWxUaW1lLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gIGNvbnN0IGxvY2FsT2Zmc2V0TWlsbGlzZWNvbmRzID0gbG9jYWxPZmZzZXQgKiA2MDAwMDtcbiAgY29uc3QgYWRqdXN0ZWRTZWNvbmRzID0gcmF3Q3VycmVudFRpbWUgKyB0aW1lWm9uZU9mZnNldDtcbiAgY29uc3QgYWRqdXN0ZWRUaW1lID0gbmV3IERhdGUoKTtcbiAgYWRqdXN0ZWRUaW1lLnNldFRpbWUoYWRqdXN0ZWRTZWNvbmRzICsgbG9jYWxPZmZzZXRNaWxsaXNlY29uZHMpO1xuICBsZXQgYWRqdXN0ZWREYXkgPSBhZGp1c3RlZFRpbWUuZ2V0RGF5KCk7XG4gIGxldCBhZGp1c3RlZERheU9mV2VlayA9IGdldERheW9mV2VlayhhZGp1c3RlZERheSk7XG4gIGxldCBhZGp1c3RlZE1vbnRoID0gYWRqdXN0ZWRUaW1lLmdldE1vbnRoKCk7XG4gIGxldCBhZGp1c3RlZE1vbnRoTmFtZSA9IGdldE1vbnRoTmFtZShhZGp1c3RlZE1vbnRoKTtcbiAgY29uc3QgYWRqdXN0ZWREYXRlID0gYWRqdXN0ZWRUaW1lLmdldERhdGUoKTtcbiAgY29uc3QgYWRqdXN0ZWRIb3VycyA9IGFkanVzdGVkVGltZS5nZXRIb3VycygpO1xuICBjb25zdCBhZGp1c3RlZDEySG91ciA9IHRvVHdlbHZlSG91ckNsb2NrKGFkanVzdGVkSG91cnMpO1xuICBjb25zdCBhZGp1c3RlZE1pbnV0ZXMgPSBhZGp1c3RlZFRpbWUuZ2V0TWludXRlcygpO1xuICBjb25zdCBwYWRkZWRBZGp1c3RlZE1pbnV0ZXMgPSBwYWRBZGp1c3RlZE1pbnV0ZXMoYWRqdXN0ZWRNaW51dGVzKTtcbiAgbGV0IGFtcG07XG4gIGFkanVzdGVkSG91cnMgPj0gMTIgPyAoYW1wbSA9IFwicG1cIikgOiAoYW1wbSA9IFwiYW1cIik7XG5cbiAgLy8gY29uc29sZS5sb2coXG4gIC8vICAgYWRqdXN0ZWREYXksXG4gIC8vICAgYWRqdXN0ZWRNb250aCxcbiAgLy8gICBhZGp1c3RlZERhdGUsXG4gIC8vICAgYWRqdXN0ZWRIb3VycyxcbiAgLy8gICBhZGp1c3RlZE1pbnV0ZXNcbiAgLy8gKTtcblxuICAvLyBjb25zb2xlLmxvZyhcbiAgLy8gICBhZGp1c3RlZERheU9mV2VlayxcbiAgLy8gICBhZGp1c3RlZE1vbnRoTmFtZSxcbiAgLy8gICBhZGp1c3RlZERhdGUsXG4gIC8vICAgYWRqdXN0ZWQxMkhvdXIsXG4gIC8vICAgcGFkZGVkQWRqdXN0ZWRNaW51dGVzXG4gIC8vICk7XG4gIGxldCBhZGp1c3RlZFRpbWVTdHJpbmcgPVxuICAgIGFkanVzdGVkRGF5T2ZXZWVrICtcbiAgICBcIiwgXCIgK1xuICAgIGFkanVzdGVkTW9udGhOYW1lICtcbiAgICBcIiBcIiArXG4gICAgYWRqdXN0ZWREYXRlICtcbiAgICBcIiwgXCIgK1xuICAgIGFkanVzdGVkMTJIb3VyICtcbiAgICBcIjpcIiArXG4gICAgcGFkZGVkQWRqdXN0ZWRNaW51dGVzICtcbiAgICBcIiBcIiArXG4gICAgYW1wbTtcbiAgY29uc29sZS5sb2coYWRqdXN0ZWRUaW1lU3RyaW5nKTtcbiAgY29uc3QgY3VycmVudFRlbXAgPSBtYWtlUm91bmROdW1iZXIod2VhdGhlckRhdGEuY3VycmVudC50ZW1wKTtcbiAgY29uc3QgZmVlbHNMaWtlID0gbWFrZVJvdW5kTnVtYmVyKHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNfbGlrZSk7XG4gIGNvbnN0IGN1cnJlbnREZXNjcmlwQ2FwcyA9IGNhcGl0YWxpemVTdHJpbmcoXG4gICAgd2VhdGhlckRhdGEuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICk7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IG1ha2VSb3VuZE51bWJlcih3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfc3BlZWQpO1xuICBjb25zdCB0b21vcnJvd0RhdGUgPSBuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5kYWlseVsxXS5kdCk7XG4gIGNvbnN0IHRvbW9ycm93VGVtcCA9IG1ha2VSb3VuZE51bWJlcih3ZWF0aGVyRGF0YS5kYWlseVsxXS50ZW1wLmRheSk7XG4gIGNvbnN0IHRvbW9ycm93RGVzY3JpcENhcHMgPSBjYXBpdGFsaXplU3RyaW5nKFxuICAgIHdlYXRoZXJEYXRhLmRhaWx5WzFdLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgKTtcbiAgY29uc3QgbmV4dERheURhdGUgPSBuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5kYWlseVsyXS5kdCAqIDEwMDApO1xuICBsZXQgbmV4dERheU51bWJlciA9IG5leHREYXlEYXRlLmdldERheSgpO1xuICBsZXQgbmV4dERheURheW9mV2VlayA9IGdldERheW9mV2VlayhuZXh0RGF5TnVtYmVyKTtcblxuICBjb25zdCBuZXh0RGF5VGVtcCA9IG1ha2VSb3VuZE51bWJlcih3ZWF0aGVyRGF0YS5kYWlseVsyXS50ZW1wLmRheSk7XG4gIGNvbnN0IG5leHREYXlEZXNjcmlwQ2FwcyA9IGNhcGl0YWxpemVTdHJpbmcoXG4gICAgd2VhdGhlckRhdGEuZGFpbHlbMl0ud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICApO1xuXG4gIHJlZmluZWRBcHBEYXRhLnJhd0N1cnJlbnRUaW1lID0gcmF3Q3VycmVudFRpbWU7XG4gIHJlZmluZWRBcHBEYXRhLnJhd1N1bnNldFRpbWUgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnN1bnNldCAqIDEwMDA7XG4gIHJlZmluZWRBcHBEYXRhLnJhd1N1bnJpc2VUaW1lID0gd2VhdGhlckRhdGEuY3VycmVudC5zdW5yaXNlICogMTAwMDtcbiAgcmVmaW5lZEFwcERhdGEuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcbiAgcmVmaW5lZEFwcERhdGEuYWRqdXN0ZWRUaW1lID0gYWRqdXN0ZWRUaW1lU3RyaW5nO1xuICByZWZpbmVkQXBwRGF0YS5jdXJyZW50VGVtcCA9IGN1cnJlbnRUZW1wO1xuICByZWZpbmVkQXBwRGF0YS5mZWVsc0xpa2UgPSBmZWVsc0xpa2U7XG4gIHJlZmluZWRBcHBEYXRhLmN1cnJlbnREZXNjcmlwID0gY3VycmVudERlc2NyaXBDYXBzO1xuICByZWZpbmVkQXBwRGF0YS53aW5kU3BlZWQgPSB3aW5kU3BlZWQ7XG4gIHJlZmluZWRBcHBEYXRhLmN1cnJlbnRJZCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQud2VhdGhlclswXS5pZDtcbiAgcmVmaW5lZEFwcERhdGEudG9tb3Jyb3dEYXRlID0gdG9tb3Jyb3dEYXRlO1xuICByZWZpbmVkQXBwRGF0YS50b21vcnJvd1RlbXAgPSB0b21vcnJvd1RlbXA7XG4gIHJlZmluZWRBcHBEYXRhLnRvbW9ycm93RGVzY3JpcCA9IHRvbW9ycm93RGVzY3JpcENhcHM7XG4gIHJlZmluZWRBcHBEYXRhLnRvbW9ycm93SWQgPSB3ZWF0aGVyRGF0YS5kYWlseVsxXS53ZWF0aGVyWzBdLmlkO1xuICByZWZpbmVkQXBwRGF0YS5uZXh0RGF5RGF0ZSA9IG5leHREYXlEYXlvZldlZWs7XG4gIHJlZmluZWRBcHBEYXRhLm5leHREYXlUZW1wID0gbmV4dERheVRlbXA7XG4gIHJlZmluZWRBcHBEYXRhLm5leHREYXlEZXNjcmlwID0gbmV4dERheURlc2NyaXBDYXBzO1xuICByZWZpbmVkQXBwRGF0YS5uZXh0RGF5SWQgPSB3ZWF0aGVyRGF0YS5kYWlseVsyXS53ZWF0aGVyWzBdLmlkO1xuXG4gIGNvbnNvbGUubG9nKHJlZmluZWRBcHBEYXRhKTtcbn07XG5cbi8vIGZ1bmN0aW9ucyB0byByZWZpbmUgZGF0YVxuXG5jb25zdCB0b1R3ZWx2ZUhvdXJDbG9jayA9IChudW1iZXIpID0+IHtcbiAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgIG51bWJlciA9IDEyO1xuICB9IGVsc2UgaWYgKG51bWJlciA+IDEyKSB7XG4gICAgbnVtYmVyID0gbnVtYmVyIC0gMTI7XG4gIH1cbiAgcmV0dXJuIG51bWJlcjtcbn07XG5cbmNvbnN0IHBhZEFkanVzdGVkTWludXRlcyA9IChudW1iZXIpID0+IHtcbiAgcmV0dXJuIG51bWJlciA8IDEwID8gXCIwXCIgKyBudW1iZXIgOiBudW1iZXI7XG59O1xuXG5jb25zdCBtYWtlUm91bmROdW1iZXIgPSAoZGF0YSkgPT4ge1xuICByZXR1cm4gTWF0aC5yb3VuZChkYXRhKTtcbn07XG5cbmNvbnN0IGNhcGl0YWxpemVTdHJpbmcgPSAoZGF0YSkgPT4ge1xuICBjb25zdCB3b3JkQXJyYXkgPSBkYXRhLnNwbGl0KFwiIFwiKTtcbiAgY29uc3Qgd29yZFN0cmluZ0NhcHMgPSB3b3JkQXJyYXlcbiAgICAubWFwKCh3b3JkKSA9PiB7XG4gICAgICByZXR1cm4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHJpbmcoMSk7XG4gICAgfSlcbiAgICAuam9pbihcIiBcIik7XG4gIHJldHVybiB3b3JkU3RyaW5nQ2Fwcztcbn07XG5cbmNvbnN0IGdldE1vbnRoTmFtZSA9IChudW1iZXIpID0+IHtcbiAgbGV0IG1vbnRoTmFtZTtcbiAgc3dpdGNoIChudW1iZXIpIHtcbiAgICBjYXNlIDA6XG4gICAgICBtb250aE5hbWUgPSBcIkphbnVhcnlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIG1vbnRoTmFtZSA9IFwiRmVicnVhcnlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIG1vbnRoTmFtZSA9IFwiTWFyY2hcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIG1vbnRoTmFtZSA9IFwiQXByaWxcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIG1vbnRoTmFtZSA9IFwiTWF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBtb250aE5hbWUgPSBcIkp1bmVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjpcbiAgICAgIG1vbnRoTmFtZSA9IFwiSnVseVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3OlxuICAgICAgbW9udGhOYW1lID0gXCJBdWd1c3RcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgODpcbiAgICAgIG1vbnRoTmFtZSA9IFwiU2VwdGVtYmVyXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDk6XG4gICAgICBtb250aE5hbWUgPSBcIk9jdG9iZXJcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTA6XG4gICAgICBtb250aE5hbWUgPSBcIk5vdmVtYmVyXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDExOlxuICAgICAgbW9udGhOYW1lID0gXCJEZWNlbWJlclwiO1xuICB9XG4gIHJldHVybiBtb250aE5hbWU7XG59O1xuXG5jb25zdCBnZXREYXlvZldlZWsgPSAobnVtYmVyKSA9PiB7XG4gIGxldCBkYXlOYW1lO1xuICBzd2l0Y2ggKG51bWJlcikge1xuICAgIGNhc2UgMDpcbiAgICAgIGRheU5hbWUgPSBcIlN1bmRheVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgZGF5TmFtZSA9IFwiTW9uZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBkYXlOYW1lID0gXCJUdWVzZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBkYXlOYW1lID0gXCJXZWRuZXNkYXlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIGRheU5hbWUgPSBcIlRodXJzZGF5XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBkYXlOYW1lID0gXCJGcmlkYXlcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjpcbiAgICAgIGRheU5hbWUgPSBcIlNhdHVyZGF5XCI7XG4gIH1cbiAgcmV0dXJuIGRheU5hbWU7XG59O1xuXG5jb25zdCBnZXRJbWFnZUZyb21JZCA9IChpZCwgdG9kYXkpID0+IHtcbiAgLy8gaWYgdG9kYXkgaXMgZmFsc2UgdGhlbiByZW5kZXIgZGF5IHdlYXRoZXIgaWNvbnNcbiAgY29uc3QgaWRTdHJpbmcgPSBpZC50b1N0cmluZygpO1xuICBpZiAoaWRTdHJpbmdbMF0gPT0gXCIyXCIpIHtcbiAgICByZXR1cm4gXCIuL2ltZy9uZXcxMWQucG5nXCI7XG4gIH1cbiAgaWYgKFxuICAgIChpZFN0cmluZ1swXSA9PSBcIjNcIiAmJlxuICAgICAgcmVmaW5lZEFwcERhdGEucmF3Q3VycmVudFRpbWUgPiByZWZpbmVkQXBwRGF0YS5yYXdTdW5zZXRUaW1lICYmXG4gICAgICB0b2RheSkgfHxcbiAgICAoaWRTdHJpbmdbMF0gPT0gXCIzXCIgJiZcbiAgICAgIHJlZmluZWRBcHBEYXRhLnJhd0N1cnJlbnRUaW1lIDwgcmVmaW5lZEFwcERhdGEucmF3U3VucmlzZVRpbWUgJiZcbiAgICAgIHRvZGF5KVxuICApIHtcbiAgICByZXR1cm4gXCIuL2ltZy9uZXcwOW4ucG5nXCI7XG4gIH0gZWxzZSBpZiAoaWRTdHJpbmdbMF0gPT0gXCIzXCIpIHtcbiAgICByZXR1cm4gXCIuL2ltZy9uZXcwOWQucG5nXCI7XG4gIH1cbiAgaWYgKGlkU3RyaW5nWzBdID09IFwiNVwiICYmIGlkU3RyaW5nWzFdID09IFwiMFwiKSB7XG4gICAgcmV0dXJuIFwiLi9pbWcvbmV3MTBkLnBuZ1wiO1xuICB9XG4gIGlmIChpZFN0cmluZ1swXSA9PSBcIjVcIiAmJiBpZFN0cmluZ1sxXSA9PSBcIjFcIikge1xuICAgIHJldHVybiBcIi4vaW1nL25ldzEzZC5wbmdcIjtcbiAgfVxuICBpZiAoXG4gICAgKGlkU3RyaW5nWzBdID09IFwiNVwiICYmXG4gICAgICBpZFN0cmluZ1sxXSA9PSBcIjJcIiAmJlxuICAgICAgcmVmaW5lZEFwcERhdGEucmF3Q3VycmVudFRpbWUgPiByZWZpbmVkQXBwRGF0YS5yYXdTdW5zZXRUaW1lICYmXG4gICAgICB0b2RheSkgfHxcbiAgICAoaWRTdHJpbmdbMF0gPT0gXCI1XCIgJiZcbiAgICAgIGlkU3RyaW5nWzFdID09IFwiMlwiICYmXG4gICAgICByZWZpbmVkQXBwRGF0YS5yYXdDdXJyZW50VGltZSA8IHJlZmluZWRBcHBEYXRhLnJhd1N1bnJpc2VUaW1lICYmXG4gICAgICB0b2RheSkgfHxcbiAgICAoaWRTdHJpbmdbMF0gPT0gXCI1XCIgJiZcbiAgICAgIGlkU3RyaW5nWzFdID09IFwiM1wiICYmXG4gICAgICByZWZpbmVkQXBwRGF0YS5yYXdDdXJyZW50VGltZSA+IHJlZmluZWRBcHBEYXRhLnJhd1N1bnNldFRpbWUgJiZcbiAgICAgIHRvZGF5KSB8fFxuICAgIChpZFN0cmluZ1swXSA9PSBcIjVcIiAmJlxuICAgICAgaWRTdHJpbmdbMV0gPT0gXCIzXCIgJiZcbiAgICAgIHJlZmluZWRBcHBEYXRhLnJhd0N1cnJlbnRUaW1lIDwgcmVmaW5lZEFwcERhdGEucmF3U3VucmlzZVRpbWUgJiZcbiAgICAgIHRvZGF5KVxuICApIHtcbiAgICByZXR1cm4gXCIuL2ltZy9uZXcwOW4ucG5nXCI7XG4gIH0gZWxzZSBpZiAoXG4gICAgKGlkU3RyaW5nWzBdID09IFwiNVwiICYmIGlkU3RyaW5nWzFdID09IFwiMlwiKSB8fFxuICAgIChpZFN0cmluZ1swXSA9PSBcIjVcIiAmJiBpZFN0cmluZ1sxXSA9PSBcIjNcIilcbiAgKSB7XG4gICAgcmV0dXJuIFwiLi9pbWcvbmV3MDlkLnBuZ1wiO1xuICB9XG4gIGlmIChpZFN0cmluZ1swXSA9PSBcIjZcIikge1xuICAgIHJldHVybiBcIi4vaW1nL25ldzEzZC5wbmdcIjtcbiAgfVxuICBpZiAoaWRTdHJpbmdbMF0gPT0gXCI3XCIpIHtcbiAgICByZXR1cm4gXCIuL2ltZy9uZXc1MGQucG5nXCI7XG4gIH1cbiAgaWYgKFxuICAgIChpZFN0cmluZyA9PSBcIjgwMFwiICYmXG4gICAgICByZWZpbmVkQXBwRGF0YS5yYXdDdXJyZW50VGltZSA+IHJlZmluZWRBcHBEYXRhLnJhd1N1bnNldFRpbWUgJiZcbiAgICAgIHRvZGF5KSB8fFxuICAgIChpZFN0cmluZyA9PSBcIjgwMFwiICYmXG4gICAgICByZWZpbmVkQXBwRGF0YS5yYXdDdXJyZW50VGltZSA8IHJlZmluZWRBcHBEYXRhLnJhd1N1bnJpc2VUaW1lICYmXG4gICAgICB0b2RheSlcbiAgKSB7XG4gICAgcmV0dXJuIFwiLi9pbWcvbmV3MDFuLnBuZ1wiO1xuICB9IGVsc2UgaWYgKGlkU3RyaW5nID09IFwiODAwXCIpIHtcbiAgICByZXR1cm4gXCIuL2ltZy9uZXcwMWQucG5nXCI7XG4gIH1cbiAgaWYgKFxuICAgIChpZFN0cmluZyA9PSBcIjgwMVwiICYmXG4gICAgICByZWZpbmVkQXBwRGF0YS5yYXdDdXJyZW50VGltZSA+IHJlZmluZWRBcHBEYXRhLnJhd1N1bnNldFRpbWUgJiZcbiAgICAgIHRvZGF5KSB8fFxuICAgIChpZFN0cmluZyA9PSBcIjgwMVwiICYmXG4gICAgICByZWZpbmVkQXBwRGF0YS5yYXdDdXJyZW50VGltZSA8IHJlZmluZWRBcHBEYXRhLnJhd1N1bnJpc2VUaW1lICYmXG4gICAgICB0b2RheSlcbiAgKSB7XG4gICAgcmV0dXJuIFwiLi9pbWcvbmV3MDJuLnBuZ1wiO1xuICB9IGVsc2UgaWYgKGlkU3RyaW5nID09IFwiODAxXCIpIHtcbiAgICByZXR1cm4gXCIuL2ltZy9uZXcwMmQucG5nXCI7XG4gIH1cbiAgaWYgKGlkU3RyaW5nID09IFwiODAyXCIpIHtcbiAgICByZXR1cm4gXCIuL2ltZy9uZXcwM2QucG5nXCI7XG4gIH1cbiAgaWYgKGlkU3RyaW5nID09IFwiODAzXCIgfHwgaWRTdHJpbmcgPT0gXCI4MDRcIikge1xuICAgIHJldHVybiBcIi4vaW1nL25ldzAzZC5wbmdcIjtcbiAgfVxufTtcblxucmVuZGVySG9tZSgpO1xuXG5tYXN0ZXJGdW5jKGNpdHlOYW1lKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==