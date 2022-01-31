/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../dist/assets/search.svg */ "./dist/assets/search.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../dist/assets/sortArrows.svg */ "./dist/assets/sortArrows.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../dist/assets/addTask.svg */ "./dist/assets/addTask.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../dist/assets/glass.png */ "./dist/assets/glass.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  margin: 0%;\n  width: 100%;\n  height: 100%;\n  padding: 0em;\n  overflow-y: hidden;\n  background-color: wheat;\n  display: grid;\n  grid-template-columns: none;\n  grid-template-rows: 1em 1fr;\n}\n\n#navbar {\n  position: fixed;\n  top: 0px;\n  color: white;\n  background-color: rgb(68, 39, 75);\n  border-radius: 0% 0% 10% 10%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 1em;\n  justify-content: space-around;\n  width: 100%;\n  height: 0.02em;\n  transition: 0.25s;\n  opacity: 1;\n  box-shadow: rgba(0, 0, 0, 0.699) 1px 1px 5px;\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\n#navbar:hover{\n  height: 1em;\n  opacity: 1;\n}\n\n.icobar{\n  column-gap: 1em;\n  justify-content: center;\n}\n\n.search{\n  width: 2em;\n  height: 2em;\n  background-size: 60%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-color: white;\n  border-radius: 100vh;\n  border: none;\n  cursor: pointer;\n  transition: 0.2s;\n  align-self: center;\n}\n\n.searchBar{\n  width: 0em;\n  visibility: hidden;\n  animation: ease-in-out;\n  transition: 0.3s;\n  position: absolute;\n  left: 21em;\n  font-family: inherit;\n}\n\n.searchBar.active{\n  width: 12em;\n  visibility: visible;\n}\n\n.search:hover{\n  scale: 115%;\n  transition: 0.2s;\n}\n\n.sort{\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 9.5em;\n  margin: 0;\n}\n\n.sortText{\n  width: 2em;\n  height: 1em;\n  display: flex;\n  justify-content: center;\n}\n\n#sortBy{\n  width: 6.5em;\n  background-color: whitesmoke;\n  border: solid 1px grey;\n  border-radius: 8%;\n  display: grid;\n  font-family: inherit;\n  color: rgba(0, 0, 0, 0.473);\n}\n\n#sortingCheckbox{\n  appearance: none;\n  width: 1.4em;\n  height: 1.4em;\n  background-color: white;\n  border-radius: 30%;\n  border: solid black 1px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 80%;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  transition: 0.1s;\n}\n\n#sortingCheckbox:checked{\n  background-color: #ff4b9f;\n}\n\n#newTaskBtn{\n  width: 2em;\n  height: 2.15em;\n  border: none;\n  border-radius: 3vh;\n  background-color: rgb(118, 180, 118);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  transition: 0.1s;\n}\n\n#newTaskBtn:hover {\n  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;\n  transform: translateY(-2px);\n  box-shadow: #ffffff 1px 1px 5px -1px,\n  #ffffff -1px -1px 5px -1px;\n}\n\nbutton {\n  color: inherit;\n}\n\n#content {\n  margin-top: 0.5em;\n  grid-row: 2;\n  padding: 1em;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 15em;\n  grid-template-rows: repeat(4, 23.5%);\n  grid-gap: 0.5em;\n  background-color: rgb(209, 201, 203);\n  justify-content: center;\n  align-content: center;\n}\n\n.taskItem {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 2em repeat(3, 1fr);\n  grid-row-gap: 0.1em;\n  text-justify: distribute;\n  background-color: whitesmoke;\n  border-radius: 3%;\n  box-shadow: rgba(0, 0, 0, 0.603) 1px 1px 3px;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n.tButtons {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  background-color: blueviolet;\n  padding: 0em 1em 0em 1em;\n  align-content: center;\n  box-shadow: inset 0px 10px 10px rgba(55, 18, 90, 0.507),\n    inset 0px -5px 10px rgba(255, 255, 255, 0.1);\n}\n\n#amplifyBtn {\n  width: 1.8em;\n  height: 1.8em;\n  border-radius: 100vh;\n  border: none;\n  justify-self: left;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 70%;\n  transition: 0.1s;\n}\n\n#deleteBtn {\n  background-color: red;\n  width: 1.8em;\n  height: 1.8em;\n  justify-self: right;\n  font-family: inherit;\n  font-weight: bold;\n  border: none;\n  border-radius: 100vh;\n  color: white;\n  transition: 0.1s;\n}\n\n.tDate, .tDue, .tName, .tDesc {\n  margin: 0.2em;\n}\n\n.popupBg {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.363);\n  justify-content: center;\n  align-items: center;\n}\n\n.popup {\n  display: grid;\n  background-color: whitesmoke;\n  height: 30em;\n  width: 30em;\n  justify-content: stretch;\n  justify-items: center;\n  align-items: center;\n  border: solid purple 1em;\n  border-radius: 5%;\n  padding: 1em;\n  grid-template-columns: 1fr;\n  grid-template-rows: 2em 1fr;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;;\n}\n\n#displayDate{\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n.taskPopup {\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(4, 5em) 5em;\n  height: 25em;\n  width: 100%;\n  box-shadow: none;\n  font-family: inherit;\n}\n\n#closePopupBtn {\n  display: grid;\n  justify-self: right;\n  background-color: red;\n  align-self: center;\n  align-content: center;\n  justify-content: center;\n  height: 1.5em;\n  width: 1.5em;\n  font-family: inherit;\n  font-weight: bold;\n  font-size: 1.2em;\n  color: white;\n  border: solid  rgb(165, 0, 0) 1px;\n  border-radius: 100vh;\n  box-shadow: inset black -5px -5px 20px -18px,\n  inset white 0px 5px 15px -10px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n#closePopupBtn:hover, #deleteBtn:hover, #amplifyBtn:hover, #deleteBtnPopup:hover, #editBtn:hover{\n  scale: 110%;\n}\n\n.tButtonsPopup {\n  background-color: whitesmoke;\n  column-gap: 1em;\n  box-shadow: none;\n}\n\n#deleteBtnPopup {\n  display: grid;\n  font-family: inherit;\n  background-color: red;\n  border: solid grey 1px;\n  border-radius: 20vh;\n  justify-content: center;\n  align-content: center;\n  transition: 0.2s;\n}\n\n.search{\n  display: flex;\n  flex-direction: row;\n}\n\n#editBtn{\n  display: grid;\n  font-family: inherit;\n  background-color: whitesmoke;\n  border: solid grey 1px;\n  border-radius: 20vh;\n  justify-content: center;\n  align-content: center;\n  transition: 0.2s;\n}\n\n.taskEdit{\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: repeat(5, 4em);\n  row-gap: 1em;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\ninput{\n  font-family: inherit;\n}\n\n#submitBtn{\n  justify-self: center;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  font-family: inherit;\n  background-color: whitesmoke;\n  border: solid 3px #1ECD97;\n  text-align: center;\n  border-radius: 40%;\n  width: 8em;\n  height: 4em;\n  font-weight: bold;\n  transition: 0.2s;\n}\n\n#submitBtn:hover{\n  background-color: #1ECD97;\n  color: white;\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  margin: 0%;\n  width: 100%;\n  height: 100%;\n  padding: 0em;\n  overflow-y: hidden;\n  background-color: wheat;\n  display: grid;\n  grid-template-columns: none;\n  grid-template-rows: 1em 1fr;\n}\n\n#navbar {\n  position: fixed;\n  top: 0px;\n  color: white;\n  background-color: rgb(68, 39, 75);\n  border-radius: 0% 0% 10% 10%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 1em;\n  justify-content: space-around;\n  width: 100%;\n  height: 0.02em;\n  transition: 0.25s;\n  opacity: 1;\n  box-shadow: rgba(0, 0, 0, 0.699) 1px 1px 5px;\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\n#navbar:hover{\n  height: 1em;\n  opacity: 1;\n}\n\n.icobar{\n  column-gap: 1em;\n  justify-content: center;\n}\n\n.search{\n  width: 2em;\n  height: 2em;\n  background-size: 60%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url('/dist/assets/search.svg');\n  background-color: white;\n  border-radius: 100vh;\n  border: none;\n  cursor: pointer;\n  transition: 0.2s;\n  align-self: center;\n}\n\n.searchBar{\n  width: 0em;\n  visibility: hidden;\n  animation: ease-in-out;\n  transition: 0.3s;\n  position: absolute;\n  left: 21em;\n  font-family: inherit;\n}\n\n.searchBar.active{\n  width: 12em;\n  visibility: visible;\n}\n\n.search:hover{\n  scale: 115%;\n  transition: 0.2s;\n}\n\n.sort{\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 9.5em;\n  margin: 0;\n}\n\n.sortText{\n  width: 2em;\n  height: 1em;\n  display: flex;\n  justify-content: center;\n}\n\n#sortBy{\n  width: 6.5em;\n  background-color: whitesmoke;\n  border: solid 1px grey;\n  border-radius: 8%;\n  display: grid;\n  font-family: inherit;\n  color: rgba(0, 0, 0, 0.473);\n}\n\n#sortingCheckbox{\n  appearance: none;\n  width: 1.4em;\n  height: 1.4em;\n  background-color: white;\n  border-radius: 30%;\n  border: solid black 1px;\n  background-image: url(/dist/assets/sortArrows.svg);\n  background-size: 80%;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  transition: 0.1s;\n}\n\n#sortingCheckbox:checked{\n  background-color: #ff4b9f;\n}\n\n#newTaskBtn{\n  width: 2em;\n  height: 2.15em;\n  border: none;\n  border-radius: 3vh;\n  background-color: rgb(118, 180, 118);\n  background-image: url(/dist/assets/addTask.svg);\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  transition: 0.1s;\n}\n\n#newTaskBtn:hover {\n  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;\n  transform: translateY(-2px);\n  box-shadow: #ffffff 1px 1px 5px -1px,\n  #ffffff -1px -1px 5px -1px;\n}\n\nbutton {\n  color: inherit;\n}\n\n#content {\n  margin-top: 0.5em;\n  grid-row: 2;\n  padding: 1em;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 15em;\n  grid-template-rows: repeat(4, 23.5%);\n  grid-gap: 0.5em;\n  background-color: rgb(209, 201, 203);\n  justify-content: center;\n  align-content: center;\n}\n\n.taskItem {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 2em repeat(3, 1fr);\n  grid-row-gap: 0.1em;\n  text-justify: distribute;\n  background-color: whitesmoke;\n  border-radius: 3%;\n  box-shadow: rgba(0, 0, 0, 0.603) 1px 1px 3px;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n.tButtons {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  background-color: blueviolet;\n  padding: 0em 1em 0em 1em;\n  align-content: center;\n  box-shadow: inset 0px 10px 10px rgba(55, 18, 90, 0.507),\n    inset 0px -5px 10px rgba(255, 255, 255, 0.1);\n}\n\n#amplifyBtn {\n  width: 1.8em;\n  height: 1.8em;\n  border-radius: 100vh;\n  border: none;\n  justify-self: left;\n  background-image: url(/dist/assets/glass.png);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 70%;\n  transition: 0.1s;\n}\n\n#deleteBtn {\n  background-color: red;\n  width: 1.8em;\n  height: 1.8em;\n  justify-self: right;\n  font-family: inherit;\n  font-weight: bold;\n  border: none;\n  border-radius: 100vh;\n  color: white;\n  transition: 0.1s;\n}\n\n.tDate, .tDue, .tName, .tDesc {\n  margin: 0.2em;\n}\n\n.popupBg {\n  display: flex;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.363);\n  justify-content: center;\n  align-items: center;\n}\n\n.popup {\n  display: grid;\n  background-color: whitesmoke;\n  height: 30em;\n  width: 30em;\n  justify-content: stretch;\n  justify-items: center;\n  align-items: center;\n  border: solid purple 1em;\n  border-radius: 5%;\n  padding: 1em;\n  grid-template-columns: 1fr;\n  grid-template-rows: 2em 1fr;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;;\n}\n\n#displayDate{\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n.taskPopup {\n  padding: 1em;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(4, 5em) 5em;\n  height: 25em;\n  width: 100%;\n  box-shadow: none;\n  font-family: inherit;\n}\n\n#closePopupBtn {\n  display: grid;\n  justify-self: right;\n  background-color: red;\n  align-self: center;\n  align-content: center;\n  justify-content: center;\n  height: 1.5em;\n  width: 1.5em;\n  font-family: inherit;\n  font-weight: bold;\n  font-size: 1.2em;\n  color: white;\n  border: solid  rgb(165, 0, 0) 1px;\n  border-radius: 100vh;\n  box-shadow: inset black -5px -5px 20px -18px,\n  inset white 0px 5px 15px -10px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n#closePopupBtn:hover, #deleteBtn:hover, #amplifyBtn:hover, #deleteBtnPopup:hover, #editBtn:hover{\n  scale: 110%;\n}\n\n.tButtonsPopup {\n  background-color: whitesmoke;\n  column-gap: 1em;\n  box-shadow: none;\n}\n\n#deleteBtnPopup {\n  display: grid;\n  font-family: inherit;\n  background-color: red;\n  border: solid grey 1px;\n  border-radius: 20vh;\n  justify-content: center;\n  align-content: center;\n  transition: 0.2s;\n}\n\n.search{\n  display: flex;\n  flex-direction: row;\n}\n\n#editBtn{\n  display: grid;\n  font-family: inherit;\n  background-color: whitesmoke;\n  border: solid grey 1px;\n  border-radius: 20vh;\n  justify-content: center;\n  align-content: center;\n  transition: 0.2s;\n}\n\n.taskEdit{\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: repeat(5, 4em);\n  row-gap: 1em;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\ninput{\n  font-family: inherit;\n}\n\n#submitBtn{\n  justify-self: center;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  font-family: inherit;\n  background-color: whitesmoke;\n  border: solid 3px #1ECD97;\n  text-align: center;\n  border-radius: 40%;\n  width: 8em;\n  height: 4em;\n  font-weight: bold;\n  transition: 0.2s;\n}\n\n#submitBtn:hover{\n  background-color: #1ECD97;\n  color: white;\n  cursor: pointer;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/components/applyTaskMethods.js":
/*!********************************************!*\
  !*** ./src/components/applyTaskMethods.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyTaskmethods": () => (/* binding */ applyTaskmethods)
/* harmony export */ });
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager */ "./src/components/taskManager.js");


const taskMethods = {
  get open() {
    _taskManager__WEBPACK_IMPORTED_MODULE_0__.taskManager.openTask(this);
  },
  get delete() {
    _taskManager__WEBPACK_IMPORTED_MODULE_0__.taskManager.deleteTask(this);
  },
  get edit() {
    _taskManager__WEBPACK_IMPORTED_MODULE_0__.taskManager.editTask(this);
  }
}

function applyTaskmethods(task){
  Object.setPrototypeOf(task, taskMethods);
  return;
}

/***/ }),

/***/ "./src/components/clearTaskDisplay.js":
/*!********************************************!*\
  !*** ./src/components/clearTaskDisplay.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearTaskDisplay": () => (/* binding */ clearTaskDisplay)
/* harmony export */ });
function clearTaskDisplay(){
  const content = document.getElementById('content');
  const tasks = document.getElementsByClassName('taskItem');
  for (let i = tasks.length - 1; i != -1; i--){
    content.removeChild(tasks[i]);
  }
}

/***/ }),

/***/ "./src/components/closePopup.js":
/*!**************************************!*\
  !*** ./src/components/closePopup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closePopup": () => (/* binding */ closePopup)
/* harmony export */ });
function closePopup(){
  const domBody = document.getElementById('body');
  const popup = document.getElementsByClassName('popupBg')[0];
  domBody.removeChild(popup);
  return;
}

/***/ }),

/***/ "./src/components/createButton.js":
/*!****************************************!*\
  !*** ./src/components/createButton.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButton": () => (/* binding */ createButton)
/* harmony export */ });
function createButton (text, id, action){
  let button = document.createElement('button');
  button.textContent = text;
  button.setAttribute('id', id);
  button.addEventListener('click', action);
  return button;
};

/***/ }),

/***/ "./src/components/createTask.js":
/*!**************************************!*\
  !*** ./src/components/createTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _formatCurrentDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatCurrentDate */ "./src/components/formatCurrentDate.js");


function createTask(name, description, due) {
  return {
    name: name,
    description: description,
    date: (0,_formatCurrentDate__WEBPACK_IMPORTED_MODULE_0__.formatCurrentDate)(),
    due: due,
  }
}

/***/ }),

/***/ "./src/components/deleteTask.js":
/*!**************************************!*\
  !*** ./src/components/deleteTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask)
/* harmony export */ });
/* harmony import */ var _closePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closePopup */ "./src/components/closePopup.js");


function deleteTask(task, taskManager, edit) {
  const toBeDeleted = taskManager.taskArray.indexOf(task, 0);
  const domElem = document.getElementById(task.name);
  const answer = (() => {
    if (!edit) {
      return confirm(`Are you sure you want to delete ${task.name}?`)
    } else {
      return true;
    }
  })();
  if (toBeDeleted != -1 && answer) {
    taskManager.taskArray.splice(toBeDeleted, 1);
    domElem.parentNode.removeChild(domElem);
  } else {
  }
}

/***/ }),

/***/ "./src/components/editTask.js":
/*!************************************!*\
  !*** ./src/components/editTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editTask": () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _closePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closePopup */ "./src/components/closePopup.js");
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager */ "./src/components/taskManager.js");



function editTask(task, inputFields){
  const editedTask = task;
  _taskManager__WEBPACK_IMPORTED_MODULE_1__.taskManager.deleteTask(task, true);
  editedTask.name = inputFields.editName.value;
  editedTask.description = inputFields.editDesc.value;
  editedTask.due = inputFields.editDue.value;
  _taskManager__WEBPACK_IMPORTED_MODULE_1__.taskManager.storeTask(editedTask);
  (0,_closePopup__WEBPACK_IMPORTED_MODULE_0__.closePopup)(); 
}

/***/ }),

/***/ "./src/components/formatCurrentDate.js":
/*!*********************************************!*\
  !*** ./src/components/formatCurrentDate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatCurrentDate": () => (/* binding */ formatCurrentDate)
/* harmony export */ });
function formatCurrentDate() {
  let currentDate = new Date();
  let dd = (currentDate.getDate()).toString();
  let mm = (currentDate.getMonth() + 1).toString();
  let yyyy = (currentDate.getFullYear()).toString();
  (dd.length === 1) ? dd = '0' + dd : () => { };
  (mm.length === 1) ? mm = '0' + mm : () => { };
  let formatedDate = yyyy + '-' + mm + '-' + dd;
  return formatedDate;
}

/***/ }),

/***/ "./src/components/handleEventListeners.js":
/*!************************************************!*\
  !*** ./src/components/handleEventListeners.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleEventListeners": () => (/* binding */ handleEventListeners)
/* harmony export */ });
/* harmony import */ var _searchTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchTasks */ "./src/components/searchTasks.js");
/* harmony import */ var _sortTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortTasks */ "./src/components/sortTasks.js");
/* harmony import */ var _renderPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderPopup */ "./src/components/renderPopup.js");
/* harmony import */ var _handleHover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleHover */ "./src/components/handleHover.js");
/* harmony import */ var _toggleSearchbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toggleSearchbar */ "./src/components/toggleSearchbar.js");






function handleEventListeners() {
  const navbar = document.getElementById('navbar');
  navbar.addEventListener('mouseleave', () => { (0,_toggleSearchbar__WEBPACK_IMPORTED_MODULE_4__.toggleSearchBar)(true) });

  const searchIco = document.getElementsByClassName('search')[0];
  searchIco.addEventListener('click', () => { (0,_toggleSearchbar__WEBPACK_IMPORTED_MODULE_4__.toggleSearchBar)() });

  const searchBar = document.getElementById('searchBar');
  searchBar.addEventListener('input', _searchTasks__WEBPACK_IMPORTED_MODULE_0__.searchTasks);
  searchBar.addEventListener('mouseleave', _toggleSearchbar__WEBPACK_IMPORTED_MODULE_4__.toggleSearchBar);

  const sortBy = document.getElementById('sortBy');
  sortBy.addEventListener('change', () => { (0,_sortTasks__WEBPACK_IMPORTED_MODULE_1__.sortTasks)(sortBy) });

  const sortingCheckbox = document.getElementById('sortingCheckbox');
  sortingCheckbox.addEventListener('change', () => { (0,_sortTasks__WEBPACK_IMPORTED_MODULE_1__.sortTasks)(sortBy) });

  const addNewTaskBtn = document.getElementById('newTaskBtn');
  addNewTaskBtn.addEventListener('click', () => { (0,_renderPopup__WEBPACK_IMPORTED_MODULE_2__.renderPopup)({}, false) });

  (0,_handleHover__WEBPACK_IMPORTED_MODULE_3__.handleHover)();
}

/***/ }),

/***/ "./src/components/handleHover.js":
/*!***************************************!*\
  !*** ./src/components/handleHover.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleHover": () => (/* binding */ handleHover)
/* harmony export */ });
function handleHover() {
  const navbar = document.getElementById('navbar');
  const searchTxt = document.getElementsByClassName('search')[0];
  const searchBar = document.getElementById('searchBar');

  searchTxt.addEventListener('mouseenter', () => { searchBar.classList.add('hover') })
  searchBar.addEventListener('mouseenter', () => { searchBar.classList.add('hover') })
  searchBar.addEventListener('mouseleave', () => { searchBar.classList.remove('hover') })
  searchTxt.addEventListener('mouseleave', () => { searchBar.classList.remove('hover') })
}

/***/ }),

/***/ "./src/components/hideOverflow.js":
/*!****************************************!*\
  !*** ./src/components/hideOverflow.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideOverflow": () => (/* binding */ hideOverflow)
/* harmony export */ });
function hideOverflow (string, maxLenght) {
  if (string.length > maxLenght) {
    return string.slice(0, maxLenght) + ' (...)';
  } else {
    return string;
  }
}

/***/ }),

/***/ "./src/components/isDueGreaterThanDate.js":
/*!************************************************!*\
  !*** ./src/components/isDueGreaterThanDate.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDueGreaterThanDate": () => (/* binding */ isDueGreaterThanDate)
/* harmony export */ });
/* harmony import */ var _formatCurrentDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatCurrentDate */ "./src/components/formatCurrentDate.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ "./src/components/createTask.js");
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskManager */ "./src/components/taskManager.js");
/* harmony import */ var _closePopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./closePopup */ "./src/components/closePopup.js");
/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editTask */ "./src/components/editTask.js");






function isDueGreaterThanDate(editionFields, isNewTask, task) {
  if (isNewTask === true && editionFields.editDue.value > (0,_formatCurrentDate__WEBPACK_IMPORTED_MODULE_0__.formatCurrentDate)()) {
    _taskManager__WEBPACK_IMPORTED_MODULE_2__.taskManager.storeTask((0,_createTask__WEBPACK_IMPORTED_MODULE_1__.createTask)(editionFields.editName.value,
      editionFields.editDesc.value, editionFields.editDue.value));
    (0,_closePopup__WEBPACK_IMPORTED_MODULE_3__.closePopup)();
  } else if (isNewTask === false && editionFields.editDue.value > task.date) {
    (0,_editTask__WEBPACK_IMPORTED_MODULE_4__.editTask)(task, editionFields);
  } else {
    alert(`The due date must be greater than the task's date or the current date.`)
  }
}

/***/ }),

/***/ "./src/components/renderEditionFields.js":
/*!***********************************************!*\
  !*** ./src/components/renderEditionFields.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderEditionFields": () => (/* binding */ renderEditionFields)
/* harmony export */ });
/* harmony import */ var _createButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createButton */ "./src/components/createButton.js");
/* harmony import */ var _formatCurrentDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatCurrentDate */ "./src/components/formatCurrentDate.js");
/* harmony import */ var _isDueGreaterThanDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isDueGreaterThanDate */ "./src/components/isDueGreaterThanDate.js");




function renderEditionFields(task, newTask = false) {
  const taskEdit = document.createElement('div');
  const name = document.createElement('p');
  const editName = document.createElement('input');
  const desc = document.createElement('p');
  const editDesc = document.createElement('input');
  const date = document.createElement('p');
  const displayDate = document.createElement('input');
  const due = document.createElement('p');
  const editDue = document.createElement('input');
  const submitBtn = (() => {
    if (!newTask) {
      return (0,_createButton__WEBPACK_IMPORTED_MODULE_0__.createButton)('Submit', 'submitBtn',
        () => { (0,_isDueGreaterThanDate__WEBPACK_IMPORTED_MODULE_2__.isDueGreaterThanDate)({ editName, editDesc, editDue }, false, task) });
    } else {
      return (0,_createButton__WEBPACK_IMPORTED_MODULE_0__.createButton)('Submit', 'submitBtn',
        () => { (0,_isDueGreaterThanDate__WEBPACK_IMPORTED_MODULE_2__.isDueGreaterThanDate)({ editName, editDesc, editDue }, true); });
    }
  })();
  const parentElem = document.getElementsByClassName('popup')[0];
  const childElem = document.getElementsByClassName('taskPopup')[0]

  editName.type = 'text';
  editDesc.type = 'text';
  editDue.type = 'date';
  displayDate.type = 'date';

  editName.id = 'editName';
  editDesc.id = 'editDesc';
  displayDate.id = 'displayDate';
  editDue.id = 'editDue';

  name.textContent = 'Name:'
  desc.textContent = 'Description:'
  date.textContent = 'Date:'
  due.textContent = 'Due:'

  if (!newTask) {
    editName.value = task.name;
    editDesc.value = task.description;
    displayDate.value = task.date
    editDue.value = task.due;
  } else {
    editName.value = '';
    editDesc.value = '';
    displayDate.value = (0,_formatCurrentDate__WEBPACK_IMPORTED_MODULE_1__.formatCurrentDate)();
    editDue.value = '';
  }

  taskEdit.classList.add('taskEdit');

  taskEdit.appendChild(name);
  taskEdit.appendChild(editName);
  taskEdit.appendChild(desc);
  taskEdit.appendChild(editDesc);
  taskEdit.appendChild(date);
  taskEdit.appendChild(displayDate);
  taskEdit.appendChild(due);
  taskEdit.appendChild(editDue);
  taskEdit.appendChild(submitBtn);

  if (!newTask) {
    (childElem != '') ? parentElem.removeChild(childElem) : () => { };
  }

  parentElem.appendChild(taskEdit);
}

/***/ }),

/***/ "./src/components/renderPopup.js":
/*!***************************************!*\
  !*** ./src/components/renderPopup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPopup": () => (/* binding */ renderPopup)
/* harmony export */ });
/* harmony import */ var _renderTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTask */ "./src/components/renderTask.js");
/* harmony import */ var _createButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createButton */ "./src/components/createButton.js");
/* harmony import */ var _closePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./closePopup */ "./src/components/closePopup.js");
/* harmony import */ var _renderEditionFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderEditionFields */ "./src/components/renderEditionFields.js");





function renderPopup(task, existingTask = true) {
  const popup = document.createElement('div');
  const popupBg = document.createElement('div');
  const domBody = document.getElementById('body');
  const closePopupBtn = (0,_createButton__WEBPACK_IMPORTED_MODULE_1__.createButton)('X', 'closePopupBtn', () => { (0,_closePopup__WEBPACK_IMPORTED_MODULE_2__.closePopup)() });

  popup.classList.add('popup');
  popupBg.classList.add('popupBg');
  popup.appendChild(closePopupBtn)
  popupBg.appendChild(popup);
  domBody.appendChild(popupBg);

  if (existingTask) {
    (0,_renderTask__WEBPACK_IMPORTED_MODULE_0__.renderTask)(task, popup, true);
  } else {
    (0,_renderEditionFields__WEBPACK_IMPORTED_MODULE_3__.renderEditionFields)({}, true);
  }

}

/***/ }),

/***/ "./src/components/renderTask.js":
/*!**************************************!*\
  !*** ./src/components/renderTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTask": () => (/* binding */ renderTask)
/* harmony export */ });
/* harmony import */ var _createButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createButton */ "./src/components/createButton.js");
/* harmony import */ var _closePopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closePopup */ "./src/components/closePopup.js");
/* harmony import */ var _hideOverflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hideOverflow */ "./src/components/hideOverflow.js");



const content = document.getElementById('content');

function renderTask(task, parentElem = content, popup = false) {
  const taskItem = document.createElement('div');
  const name = document.createElement('div');
  const description = document.createElement('div');
  const date = document.createElement('div');
  const due = document.createElement('div');
  const buttons = document.createElement('div');
  const deleteBtn = (() => {
    if (!popup) {
      return (0,_createButton__WEBPACK_IMPORTED_MODULE_0__.createButton)('X', 'deleteBtn', () => { task.delete });
    } else {
      return (0,_createButton__WEBPACK_IMPORTED_MODULE_0__.createButton)('Delete this task.', 'deleteBtn', () => { task.delete });
    }
  })()
  const extraBtn = (() => {
    if (!popup) {
      return (0,_createButton__WEBPACK_IMPORTED_MODULE_0__.createButton)('', 'amplifyBtn', () => { task.open });
    } else {
      return (0,_createButton__WEBPACK_IMPORTED_MODULE_0__.createButton)('Edit task', 'editBtn', () => { task.edit });
    }
  })();

  name.textContent = (0,_hideOverflow__WEBPACK_IMPORTED_MODULE_2__.hideOverflow)(`Name: ${task.name}`, 17);
  description.textContent = (0,_hideOverflow__WEBPACK_IMPORTED_MODULE_2__.hideOverflow)(`Description: ${task.description}`, 17);
  date.textContent = `Date: ${task.date}`;
  due.textContent = `Due: ${task.due}`;

  if (popup) {
    name.textContent = `Name: ${task.name}`;
    description.textContent = `Description: ${task.description}`;
    date.textContent = `Date: ${task.date}`;
    due.textContent = `Due: ${task.due}`;
    taskItem.classList.add('taskPopup');
    deleteBtn.id = 'deleteBtnPopup';
    deleteBtn.addEventListener('click', () => { (0,_closePopup__WEBPACK_IMPORTED_MODULE_1__.closePopup)() })
    buttons.classList.add('tButtonsPopup');
  }
  buttons.classList.add('tButtons');
  taskItem.classList.add('taskItem');
  taskItem.id = task.name;
  name.classList.add('tName');
  description.classList.add('tDesc');
  date.classList.add('tDate');
  due.classList.add('tDue');

  buttons.appendChild(extraBtn);
  buttons.appendChild(deleteBtn);

  if (popup) {
    taskItem.appendChild(name);
    taskItem.appendChild(description);
    taskItem.appendChild(date);
    taskItem.appendChild(due);
    taskItem.appendChild(buttons);
  } else {
    taskItem.appendChild(buttons);
    taskItem.appendChild(name);
    taskItem.appendChild(description);
    taskItem.appendChild(date);
    taskItem.appendChild(due);
  }

  parentElem.appendChild(taskItem);
}

/***/ }),

/***/ "./src/components/searchTasks.js":
/*!***************************************!*\
  !*** ./src/components/searchTasks.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchTasks": () => (/* binding */ searchTasks)
/* harmony export */ });
/* harmony import */ var _renderTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTask */ "./src/components/renderTask.js");
/* harmony import */ var _clearTaskDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearTaskDisplay */ "./src/components/clearTaskDisplay.js");
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskManager */ "./src/components/taskManager.js");




const searchBar = document.getElementById('searchBar')

function searchTasks() {
  let searchResults;
  searchResults = _taskManager__WEBPACK_IMPORTED_MODULE_2__.taskManager.taskArray.filter((e) => {
    return e.name.toLowerCase().includes(searchBar.value.toLowerCase());
  });

  (0,_clearTaskDisplay__WEBPACK_IMPORTED_MODULE_1__.clearTaskDisplay)();

  for (let i = searchResults.length - 1; i != -1; i--) {
    (0,_renderTask__WEBPACK_IMPORTED_MODULE_0__.renderTask)(searchResults[i]);
  }
}

/***/ }),

/***/ "./src/components/sortTasks.js":
/*!*************************************!*\
  !*** ./src/components/sortTasks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortTasks": () => (/* binding */ sortTasks)
/* harmony export */ });
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager */ "./src/components/taskManager.js");
/* harmony import */ var _clearTaskDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearTaskDisplay */ "./src/components/clearTaskDisplay.js");
/* harmony import */ var _renderTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTask */ "./src/components/renderTask.js");




function sortTasks(sortBy) {
  const sortParameter = sortBy.value;
  const sortingCheckbox = document.getElementById('sortingCheckbox');
  const sortingOrder = (sortingCheckbox.checked) ? [0, 1] : [1, 0];
  
  _taskManager__WEBPACK_IMPORTED_MODULE_0__.taskManager.taskArray.sort((a, b) => {
    if (a[sortParameter] < b[sortParameter]) { return sortingOrder[0]; }
    if (a[sortParameter] > b[sortParameter]) { return sortingOrder[1]; }
    return 0;
  })
  ;(0,_clearTaskDisplay__WEBPACK_IMPORTED_MODULE_1__.clearTaskDisplay)();
  for (let i = _taskManager__WEBPACK_IMPORTED_MODULE_0__.taskManager.taskArray.length - 1; i != -1; i--) {
    (0,_renderTask__WEBPACK_IMPORTED_MODULE_2__.renderTask)(_taskManager__WEBPACK_IMPORTED_MODULE_0__.taskManager.taskArray[i]);
  }
}


/***/ }),

/***/ "./src/components/storeTask.js":
/*!*************************************!*\
  !*** ./src/components/storeTask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storeTask": () => (/* binding */ storeTask)
/* harmony export */ });
/* harmony import */ var _applyTaskMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyTaskMethods */ "./src/components/applyTaskMethods.js");
/* harmony import */ var _renderTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTask */ "./src/components/renderTask.js");



function storeTask(newTask, taskManager) {
  taskManager.taskArray.push(newTask);
  (0,_applyTaskMethods__WEBPACK_IMPORTED_MODULE_0__.applyTaskmethods)(newTask);
  (0,_renderTask__WEBPACK_IMPORTED_MODULE_1__.renderTask)(newTask);
}

/***/ }),

/***/ "./src/components/taskManager.js":
/*!***************************************!*\
  !*** ./src/components/taskManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskManager": () => (/* binding */ taskManager)
/* harmony export */ });
/* harmony import */ var _renderPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPopup */ "./src/components/renderPopup.js");
/* harmony import */ var _renderEditionFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderEditionFields */ "./src/components/renderEditionFields.js");
/* harmony import */ var _storeTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storeTask */ "./src/components/storeTask.js");
/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteTask */ "./src/components/deleteTask.js");





const taskManager = {
  taskArray: [],

  saveLocalStorage: () => {
    localStorage.setItem('taskArray', JSON.stringify(taskManager.taskArray));
  },

  loadLocalStorage: () => {
    const storage = JSON.parse(localStorage.getItem('taskArray') || '[]');
    storage.forEach((e) => {
      taskManager.storeTask(e);
    })
  },

  storeTask: (newTask) => {
    (0,_storeTask__WEBPACK_IMPORTED_MODULE_2__.storeTask)(newTask, taskManager)
    taskManager.saveLocalStorage();
  },

  deleteTask: (task, edit = false) => {
    (0,_deleteTask__WEBPACK_IMPORTED_MODULE_3__.deleteTask)(task, taskManager, edit)
    taskManager.saveLocalStorage();
  },

  openTask: (task) => {
    (0,_renderPopup__WEBPACK_IMPORTED_MODULE_0__.renderPopup)(task);
  },

  editTask: (task) => {
    (0,_renderEditionFields__WEBPACK_IMPORTED_MODULE_1__.renderEditionFields)(task);
  }
};

/***/ }),

/***/ "./src/components/toggleSearchbar.js":
/*!*******************************************!*\
  !*** ./src/components/toggleSearchbar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleSearchBar": () => (/* binding */ toggleSearchBar)
/* harmony export */ });
function toggleSearchBar(isNavbar = false) {
  const searchBar = document.getElementsByClassName('searchBar')[0];
  const active = document.getElementsByClassName('active')[0];
  if (active === undefined && !isNavbar) {
    searchBar.classList.add('active');
    return;
  } else {
    searchBar.classList.remove('active');
    return;
  }
}

/***/ }),

/***/ "./dist/assets/addTask.svg":
/*!*********************************!*\
  !*** ./dist/assets/addTask.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06f80368ca731baf9068.svg";

/***/ }),

/***/ "./dist/assets/glass.png":
/*!*******************************!*\
  !*** ./dist/assets/glass.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecb83c941c150f943cc6.png";

/***/ }),

/***/ "./dist/assets/search.svg":
/*!********************************!*\
  !*** ./dist/assets/search.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68abd518881b096f33a8.svg";

/***/ }),

/***/ "./dist/assets/sortArrows.svg":
/*!************************************!*\
  !*** ./dist/assets/sortArrows.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4222d2450d7ca3f56a2e.svg";

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
/* harmony import */ var _components_createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/createTask */ "./src/components/createTask.js");
/* harmony import */ var _components_taskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/taskManager */ "./src/components/taskManager.js");
/* harmony import */ var _components_handleEventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/handleEventListeners */ "./src/components/handleEventListeners.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





(0,_components_handleEventListeners__WEBPACK_IMPORTED_MODULE_2__.handleEventListeners)();
_components_taskManager__WEBPACK_IMPORTED_MODULE_1__.taskManager.loadLocalStorage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0s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QUFDdkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCcUQ7QUFDRTtBQUNrQjtBQUNwRDs7QUFFckIsc0ZBQW9CO0FBQ3BCLGlGQUE0QixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYXBwbHlUYXNrTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY2xlYXJUYXNrRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY2xvc2VQb3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlQnV0dG9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9kZWxldGVUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9lZGl0VGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZm9ybWF0Q3VycmVudERhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2hhbmRsZUV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9oYW5kbGVIb3Zlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvaGlkZU92ZXJmbG93LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9pc0R1ZUdyZWF0ZXJUaGFuRGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcmVuZGVyRWRpdGlvbkZpZWxkcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcmVuZGVyUG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3JlbmRlclRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaFRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9zb3J0VGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3N0b3JlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFza01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3RvZ2dsZVNlYXJjaGJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9kaXN0L2Fzc2V0cy9zZWFyY2guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL2Rpc3QvYXNzZXRzL3NvcnRBcnJvd3Muc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL2Rpc3QvYXNzZXRzL2FkZFRhc2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiL2Rpc3QvYXNzZXRzL2dsYXNzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwZW07XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG5vbmU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFlbSAxZnI7XFxufVxcblxcbiNuYXZiYXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjgsIDM5LCA3NSk7XFxuICBib3JkZXItcmFkaXVzOiAwJSAwJSAxMCUgMTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMWVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMC4wMmVtO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjY5OSkgMXB4IDFweCA1cHg7XFxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xcbn1cXG5cXG4jbmF2YmFyOmhvdmVye1xcbiAgaGVpZ2h0OiAxZW07XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaWNvYmFye1xcbiAgY29sdW1uLWdhcDogMWVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2h7XFxuICB3aWR0aDogMmVtO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBiYWNrZ3JvdW5kLXNpemU6IDYwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMDB2aDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2hCYXJ7XFxuICB3aWR0aDogMGVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYW5pbWF0aW9uOiBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAyMWVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5zZWFyY2hCYXIuYWN0aXZle1xcbiAgd2lkdGg6IDEyZW07XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uc2VhcmNoOmhvdmVye1xcbiAgc2NhbGU6IDExNSU7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uc29ydHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogOS41ZW07XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zb3J0VGV4dHtcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3NvcnRCeXtcXG4gIHdpZHRoOiA2LjVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogOCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ3Myk7XFxufVxcblxcbiNzb3J0aW5nQ2hlY2tib3h7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDEuNGVtO1xcbiAgaGVpZ2h0OiAxLjRlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA4MCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4xcztcXG59XFxuXFxuI3NvcnRpbmdDaGVja2JveDpjaGVja2Vke1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNGI5ZjtcXG59XFxuXFxuI25ld1Rhc2tCdG57XFxuICB3aWR0aDogMmVtO1xcbiAgaGVpZ2h0OiAyLjE1ZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE4LCAxODAsIDExOCk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbiNuZXdUYXNrQnRuOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjE1KSAwIDNweCA5cHggMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG4gIGJveC1zaGFkb3c6ICNmZmZmZmYgMXB4IDFweCA1cHggLTFweCxcXG4gICNmZmZmZmYgLTFweCAtMXB4IDVweCAtMXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBwYWRkaW5nOiAxZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAxNWVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMjMuNSUpO1xcbiAgZ3JpZC1nYXA6IDAuNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjAxLCAyMDMpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrSXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJlbSByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtcm93LWdhcDogMC4xZW07XFxuICB0ZXh0LWp1c3RpZnk6IGRpc3RyaWJ1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMyU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNjAzKSAxcHggMXB4IDNweDtcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udEJ1dHRvbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxuICBwYWRkaW5nOiAwZW0gMWVtIDBlbSAxZW07XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMTBweCAxMHB4IHJnYmEoNTUsIDE4LCA5MCwgMC41MDcpLFxcbiAgICBpbnNldCAwcHggLTVweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG59XFxuXFxuI2FtcGxpZnlCdG4ge1xcbiAgd2lkdGg6IDEuOGVtO1xcbiAgaGVpZ2h0OiAxLjhlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHZoO1xcbiAgYm9yZGVyOiBub25lO1xcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDcwJTtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbiNkZWxldGVCdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgd2lkdGg6IDEuOGVtO1xcbiAgaGVpZ2h0OiAxLjhlbTtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbn1cXG5cXG4udERhdGUsIC50RHVlLCAudE5hbWUsIC50RGVzYyB7XFxuICBtYXJnaW46IDAuMmVtO1xcbn1cXG5cXG4ucG9wdXBCZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzYzKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgaGVpZ2h0OiAzMGVtO1xcbiAgd2lkdGg6IDMwZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiBzb2xpZCBwdXJwbGUgMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNSU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmVtIDFmcjtcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmOztcXG59XFxuXFxuI2Rpc3BsYXlEYXRle1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50YXNrUG9wdXAge1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgNWVtKSA1ZW07XFxuICBoZWlnaHQ6IDI1ZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuI2Nsb3NlUG9wdXBCdG4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMS41ZW07XFxuICB3aWR0aDogMS41ZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogc29saWQgIHJnYigxNjUsIDAsIDApIDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHZoO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgYmxhY2sgLTVweCAtNXB4IDIwcHggLTE4cHgsXFxuICBpbnNldCB3aGl0ZSAwcHggNXB4IDE1cHggLTEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4jY2xvc2VQb3B1cEJ0bjpob3ZlciwgI2RlbGV0ZUJ0bjpob3ZlciwgI2FtcGxpZnlCdG46aG92ZXIsICNkZWxldGVCdG5Qb3B1cDpob3ZlciwgI2VkaXRCdG46aG92ZXJ7XFxuICBzY2FsZTogMTEwJTtcXG59XFxuXFxuLnRCdXR0b25zUG9wdXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGNvbHVtbi1nYXA6IDFlbTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbiNkZWxldGVCdG5Qb3B1cCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXI6IHNvbGlkIGdyZXkgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjB2aDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLnNlYXJjaHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jZWRpdEJ0bntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXI6IHNvbGlkIGdyZXkgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjB2aDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLnRhc2tFZGl0e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDRlbSk7XFxuICByb3ctZ2FwOiAxZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaW5wdXR7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuI3N1Ym1pdEJ0bntcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXI6IHNvbGlkIDNweCAjMUVDRDk3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNDAlO1xcbiAgd2lkdGg6IDhlbTtcXG4gIGhlaWdodDogNGVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4jc3VibWl0QnRuOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFQ0Q5NztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLDRDQUE0QztFQUM1QyxzRUFBc0U7QUFDeEU7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IseURBQWdEO0VBQ2hELHVCQUF1QjtFQUN2QixvQkFBb0I7RUFD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QUNaLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDBlbTtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbm9uZTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWVtIDFmcjtcXG59XFxuXFxuI25hdmJhciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgMzksIDc1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAlIDAlIDEwJSAxMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAwLjAyZW07XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gIG9wYWNpdHk6IDE7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNjk5KSAxcHggMXB4IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxufVxcblxcbiNuYXZiYXI6aG92ZXJ7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5pY29iYXJ7XFxuICBjb2x1bW4tZ2FwOiAxZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaHtcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNjAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Rpc3QvYXNzZXRzL3NlYXJjaC5zdmcnKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdmg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoQmFye1xcbiAgd2lkdGg6IDBlbTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGFuaW1hdGlvbjogZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjFlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4uc2VhcmNoQmFyLmFjdGl2ZXtcXG4gIHdpZHRoOiAxMmVtO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnNlYXJjaDpob3ZlcntcXG4gIHNjYWxlOiAxMTUlO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLnNvcnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDkuNWVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc29ydFRleHR7XFxuICB3aWR0aDogMmVtO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzb3J0Qnl7XFxuICB3aWR0aDogNi41ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDglO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NzMpO1xcbn1cXG5cXG4jc29ydGluZ0NoZWNrYm94e1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAxLjRlbTtcXG4gIGhlaWdodDogMS40ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9kaXN0L2Fzc2V0cy9zb3J0QXJyb3dzLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjFzO1xcbn1cXG5cXG4jc29ydGluZ0NoZWNrYm94OmNoZWNrZWR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0YjlmO1xcbn1cXG5cXG4jbmV3VGFza0J0bntcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDIuMTVlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDN2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTgsIDE4MCwgMTE4KTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvZGlzdC9hc3NldHMvYWRkVGFzay5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbiNuZXdUYXNrQnRuOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjE1KSAwIDNweCA5cHggMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG4gIGJveC1zaGFkb3c6ICNmZmZmZmYgMXB4IDFweCA1cHggLTFweCxcXG4gICNmZmZmZmYgLTFweCAtMXB4IDVweCAtMXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBwYWRkaW5nOiAxZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAxNWVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMjMuNSUpO1xcbiAgZ3JpZC1nYXA6IDAuNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjAxLCAyMDMpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrSXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJlbSByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtcm93LWdhcDogMC4xZW07XFxuICB0ZXh0LWp1c3RpZnk6IGRpc3RyaWJ1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMyU7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNjAzKSAxcHggMXB4IDNweDtcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udEJ1dHRvbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxuICBwYWRkaW5nOiAwZW0gMWVtIDBlbSAxZW07XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMTBweCAxMHB4IHJnYmEoNTUsIDE4LCA5MCwgMC41MDcpLFxcbiAgICBpbnNldCAwcHggLTVweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG59XFxuXFxuI2FtcGxpZnlCdG4ge1xcbiAgd2lkdGg6IDEuOGVtO1xcbiAgaGVpZ2h0OiAxLjhlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHZoO1xcbiAgYm9yZGVyOiBub25lO1xcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9kaXN0L2Fzc2V0cy9nbGFzcy5wbmcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogNzAlO1xcbiAgdHJhbnNpdGlvbjogMC4xcztcXG59XFxuXFxuI2RlbGV0ZUJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB3aWR0aDogMS44ZW07XFxuICBoZWlnaHQ6IDEuOGVtO1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMDB2aDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuMXM7XFxufVxcblxcbi50RGF0ZSwgLnREdWUsIC50TmFtZSwgLnREZXNjIHtcXG4gIG1hcmdpbjogMC4yZW07XFxufVxcblxcbi5wb3B1cEJnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNjMpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICBoZWlnaHQ6IDMwZW07XFxuICB3aWR0aDogMzBlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IHNvbGlkIHB1cnBsZSAxZW07XFxuICBib3JkZXItcmFkaXVzOiA1JTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZW0gMWZyO1xcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7O1xcbn1cXG5cXG4jZGlzcGxheURhdGV7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRhc2tQb3B1cCB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCA1ZW0pIDVlbTtcXG4gIGhlaWdodDogMjVlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4jY2xvc2VQb3B1cEJ0biB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG4gIHdpZHRoOiAxLjVlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBzb2xpZCAgcmdiKDE2NSwgMCwgMCkgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdmg7XFxuICBib3gtc2hhZG93OiBpbnNldCBibGFjayAtNXB4IC01cHggMjBweCAtMThweCxcXG4gIGluc2V0IHdoaXRlIDBweCA1cHggMTVweCAtMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbiNjbG9zZVBvcHVwQnRuOmhvdmVyLCAjZGVsZXRlQnRuOmhvdmVyLCAjYW1wbGlmeUJ0bjpob3ZlciwgI2RlbGV0ZUJ0blBvcHVwOmhvdmVyLCAjZWRpdEJ0bjpob3ZlcntcXG4gIHNjYWxlOiAxMTAlO1xcbn1cXG5cXG4udEJ1dHRvbnNQb3B1cCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgY29sdW1uLWdhcDogMWVtO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuI2RlbGV0ZUJ0blBvcHVwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogc29saWQgZ3JleSAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHZoO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uc2VhcmNoe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbiNlZGl0QnRue1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlcjogc29saWQgZ3JleSAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHZoO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4udGFza0VkaXR7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgNGVtKTtcXG4gIHJvdy1nYXA6IDFlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5pbnB1dHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4jc3VibWl0QnRue1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogMztcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlcjogc29saWQgM3B4ICMxRUNEOTc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0MCU7XFxuICB3aWR0aDogOGVtO1xcbiAgaGVpZ2h0OiA0ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbiNzdWJtaXRCdG46aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUVDRDk3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdGFza01hbmFnZXIgfSBmcm9tICcuL3Rhc2tNYW5hZ2VyJztcblxuY29uc3QgdGFza01ldGhvZHMgPSB7XG4gIGdldCBvcGVuKCkge1xuICAgIHRhc2tNYW5hZ2VyLm9wZW5UYXNrKHRoaXMpO1xuICB9LFxuICBnZXQgZGVsZXRlKCkge1xuICAgIHRhc2tNYW5hZ2VyLmRlbGV0ZVRhc2sodGhpcyk7XG4gIH0sXG4gIGdldCBlZGl0KCkge1xuICAgIHRhc2tNYW5hZ2VyLmVkaXRUYXNrKHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVRhc2ttZXRob2RzKHRhc2spe1xuICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGFzaywgdGFza01ldGhvZHMpO1xuICByZXR1cm47XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVGFza0Rpc3BsYXkoKXtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFza0l0ZW0nKTtcbiAgZm9yIChsZXQgaSA9IHRhc2tzLmxlbmd0aCAtIDE7IGkgIT0gLTE7IGktLSl7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZCh0YXNrc1tpXSk7XG4gIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY2xvc2VQb3B1cCgpe1xuICBjb25zdCBkb21Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3B1cEJnJylbMF07XG4gIGRvbUJvZHkucmVtb3ZlQ2hpbGQocG9wdXApO1xuICByZXR1cm47XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbiAodGV4dCwgaWQsIGFjdGlvbil7XG4gIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFjdGlvbik7XG4gIHJldHVybiBidXR0b247XG59OyIsImltcG9ydCB7IGZvcm1hdEN1cnJlbnREYXRlIH0gZnJvbSAnLi9mb3JtYXRDdXJyZW50RGF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICBkYXRlOiBmb3JtYXRDdXJyZW50RGF0ZSgpLFxuICAgIGR1ZTogZHVlLFxuICB9XG59IiwiaW1wb3J0IHsgY2xvc2VQb3B1cCB9IGZyb20gJy4vY2xvc2VQb3B1cCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKHRhc2ssIHRhc2tNYW5hZ2VyLCBlZGl0KSB7XG4gIGNvbnN0IHRvQmVEZWxldGVkID0gdGFza01hbmFnZXIudGFza0FycmF5LmluZGV4T2YodGFzaywgMCk7XG4gIGNvbnN0IGRvbUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrLm5hbWUpO1xuICBjb25zdCBhbnN3ZXIgPSAoKCkgPT4ge1xuICAgIGlmICghZWRpdCkge1xuICAgICAgcmV0dXJuIGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHt0YXNrLm5hbWV9P2ApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkoKTtcbiAgaWYgKHRvQmVEZWxldGVkICE9IC0xICYmIGFuc3dlcikge1xuICAgIHRhc2tNYW5hZ2VyLnRhc2tBcnJheS5zcGxpY2UodG9CZURlbGV0ZWQsIDEpO1xuICAgIGRvbUVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb21FbGVtKTtcbiAgfSBlbHNlIHtcbiAgfVxufSIsImltcG9ydCB7IGNsb3NlUG9wdXAgfSBmcm9tICcuL2Nsb3NlUG9wdXAnO1xuaW1wb3J0IHsgdGFza01hbmFnZXIgfSBmcm9tICcuL3Rhc2tNYW5hZ2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrKHRhc2ssIGlucHV0RmllbGRzKXtcbiAgY29uc3QgZWRpdGVkVGFzayA9IHRhc2s7XG4gIHRhc2tNYW5hZ2VyLmRlbGV0ZVRhc2sodGFzaywgdHJ1ZSk7XG4gIGVkaXRlZFRhc2submFtZSA9IGlucHV0RmllbGRzLmVkaXROYW1lLnZhbHVlO1xuICBlZGl0ZWRUYXNrLmRlc2NyaXB0aW9uID0gaW5wdXRGaWVsZHMuZWRpdERlc2MudmFsdWU7XG4gIGVkaXRlZFRhc2suZHVlID0gaW5wdXRGaWVsZHMuZWRpdER1ZS52YWx1ZTtcbiAgdGFza01hbmFnZXIuc3RvcmVUYXNrKGVkaXRlZFRhc2spO1xuICBjbG9zZVBvcHVwKCk7IFxufSIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDdXJyZW50RGF0ZSgpIHtcbiAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgbGV0IGRkID0gKGN1cnJlbnREYXRlLmdldERhdGUoKSkudG9TdHJpbmcoKTtcbiAgbGV0IG1tID0gKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpO1xuICBsZXQgeXl5eSA9IChjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpKS50b1N0cmluZygpO1xuICAoZGQubGVuZ3RoID09PSAxKSA/IGRkID0gJzAnICsgZGQgOiAoKSA9PiB7IH07XG4gIChtbS5sZW5ndGggPT09IDEpID8gbW0gPSAnMCcgKyBtbSA6ICgpID0+IHsgfTtcbiAgbGV0IGZvcm1hdGVkRGF0ZSA9IHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xuICByZXR1cm4gZm9ybWF0ZWREYXRlO1xufSIsImltcG9ydCB7IHNlYXJjaFRhc2tzIH0gZnJvbSAnLi9zZWFyY2hUYXNrcyc7XG5pbXBvcnQgeyBzb3J0VGFza3MgfSBmcm9tICcuL3NvcnRUYXNrcyc7XG5pbXBvcnQgeyByZW5kZXJQb3B1cCB9IGZyb20gJy4vcmVuZGVyUG9wdXAnO1xuaW1wb3J0IHsgaGFuZGxlSG92ZXIgfSBmcm9tICcuL2hhbmRsZUhvdmVyJztcbmltcG9ydCB7IHRvZ2dsZVNlYXJjaEJhciB9IGZyb20gJy4vdG9nZ2xlU2VhcmNoYmFyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUV2ZW50TGlzdGVuZXJzKCkge1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJyk7XG4gIG5hdmJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4geyB0b2dnbGVTZWFyY2hCYXIodHJ1ZSkgfSk7XG5cbiAgY29uc3Qgc2VhcmNoSWNvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoJylbMF07XG4gIHNlYXJjaEljby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdG9nZ2xlU2VhcmNoQmFyKCkgfSk7XG5cbiAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJhcicpO1xuICBzZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzZWFyY2hUYXNrcyk7XG4gIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdG9nZ2xlU2VhcmNoQmFyKTtcblxuICBjb25zdCBzb3J0QnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydEJ5Jyk7XG4gIHNvcnRCeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7IHNvcnRUYXNrcyhzb3J0QnkpIH0pO1xuXG4gIGNvbnN0IHNvcnRpbmdDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0aW5nQ2hlY2tib3gnKTtcbiAgc29ydGluZ0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHsgc29ydFRhc2tzKHNvcnRCeSkgfSk7XG5cbiAgY29uc3QgYWRkTmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrQnRuJyk7XG4gIGFkZE5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHJlbmRlclBvcHVwKHt9LCBmYWxzZSkgfSk7XG5cbiAgaGFuZGxlSG92ZXIoKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gaGFuZGxlSG92ZXIoKSB7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKTtcbiAgY29uc3Qgc2VhcmNoVHh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VhcmNoJylbMF07XG4gIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCYXInKTtcblxuICBzZWFyY2hUeHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHsgc2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJykgfSlcbiAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7IHNlYXJjaEJhci5jbGFzc0xpc3QuYWRkKCdob3ZlcicpIH0pXG4gIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4geyBzZWFyY2hCYXIuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKSB9KVxuICBzZWFyY2hUeHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHsgc2VhcmNoQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJykgfSlcbn0iLCJleHBvcnQgZnVuY3Rpb24gaGlkZU92ZXJmbG93IChzdHJpbmcsIG1heExlbmdodCkge1xuICBpZiAoc3RyaW5nLmxlbmd0aCA+IG1heExlbmdodCkge1xuICAgIHJldHVybiBzdHJpbmcuc2xpY2UoMCwgbWF4TGVuZ2h0KSArICcgKC4uLiknO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn0iLCJpbXBvcnQgeyBmb3JtYXRDdXJyZW50RGF0ZSB9IGZyb20gJy4vZm9ybWF0Q3VycmVudERhdGUnO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4vY3JlYXRlVGFzayc7XG5pbXBvcnQgeyB0YXNrTWFuYWdlciB9IGZyb20gJy4vdGFza01hbmFnZXInO1xuaW1wb3J0IHsgY2xvc2VQb3B1cCB9IGZyb20gJy4vY2xvc2VQb3B1cCc7XG5pbXBvcnQgeyBlZGl0VGFzayB9IGZyb20gJy4vZWRpdFRhc2snO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEdWVHcmVhdGVyVGhhbkRhdGUoZWRpdGlvbkZpZWxkcywgaXNOZXdUYXNrLCB0YXNrKSB7XG4gIGlmIChpc05ld1Rhc2sgPT09IHRydWUgJiYgZWRpdGlvbkZpZWxkcy5lZGl0RHVlLnZhbHVlID4gZm9ybWF0Q3VycmVudERhdGUoKSkge1xuICAgIHRhc2tNYW5hZ2VyLnN0b3JlVGFzayhjcmVhdGVUYXNrKGVkaXRpb25GaWVsZHMuZWRpdE5hbWUudmFsdWUsXG4gICAgICBlZGl0aW9uRmllbGRzLmVkaXREZXNjLnZhbHVlLCBlZGl0aW9uRmllbGRzLmVkaXREdWUudmFsdWUpKTtcbiAgICBjbG9zZVBvcHVwKCk7XG4gIH0gZWxzZSBpZiAoaXNOZXdUYXNrID09PSBmYWxzZSAmJiBlZGl0aW9uRmllbGRzLmVkaXREdWUudmFsdWUgPiB0YXNrLmRhdGUpIHtcbiAgICBlZGl0VGFzayh0YXNrLCBlZGl0aW9uRmllbGRzKTtcbiAgfSBlbHNlIHtcbiAgICBhbGVydChgVGhlIGR1ZSBkYXRlIG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoZSB0YXNrJ3MgZGF0ZSBvciB0aGUgY3VycmVudCBkYXRlLmApXG4gIH1cbn0iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuL2NyZWF0ZUJ1dHRvbic7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW50RGF0ZSB9IGZyb20gJy4vZm9ybWF0Q3VycmVudERhdGUnO1xuaW1wb3J0IHsgaXNEdWVHcmVhdGVyVGhhbkRhdGUgfSBmcm9tICcuL2lzRHVlR3JlYXRlclRoYW5EYXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckVkaXRpb25GaWVsZHModGFzaywgbmV3VGFzayA9IGZhbHNlKSB7XG4gIGNvbnN0IHRhc2tFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGVkaXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgZWRpdERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBkaXNwbGF5RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgZWRpdER1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9ICgoKSA9PiB7XG4gICAgaWYgKCFuZXdUYXNrKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQnV0dG9uKCdTdWJtaXQnLCAnc3VibWl0QnRuJyxcbiAgICAgICAgKCkgPT4geyBpc0R1ZUdyZWF0ZXJUaGFuRGF0ZSh7IGVkaXROYW1lLCBlZGl0RGVzYywgZWRpdER1ZSB9LCBmYWxzZSwgdGFzaykgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjcmVhdGVCdXR0b24oJ1N1Ym1pdCcsICdzdWJtaXRCdG4nLFxuICAgICAgICAoKSA9PiB7IGlzRHVlR3JlYXRlclRoYW5EYXRlKHsgZWRpdE5hbWUsIGVkaXREZXNjLCBlZGl0RHVlIH0sIHRydWUpOyB9KTtcbiAgICB9XG4gIH0pKCk7XG4gIGNvbnN0IHBhcmVudEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3B1cCcpWzBdO1xuICBjb25zdCBjaGlsZEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrUG9wdXAnKVswXVxuXG4gIGVkaXROYW1lLnR5cGUgPSAndGV4dCc7XG4gIGVkaXREZXNjLnR5cGUgPSAndGV4dCc7XG4gIGVkaXREdWUudHlwZSA9ICdkYXRlJztcbiAgZGlzcGxheURhdGUudHlwZSA9ICdkYXRlJztcblxuICBlZGl0TmFtZS5pZCA9ICdlZGl0TmFtZSc7XG4gIGVkaXREZXNjLmlkID0gJ2VkaXREZXNjJztcbiAgZGlzcGxheURhdGUuaWQgPSAnZGlzcGxheURhdGUnO1xuICBlZGl0RHVlLmlkID0gJ2VkaXREdWUnO1xuXG4gIG5hbWUudGV4dENvbnRlbnQgPSAnTmFtZTonXG4gIGRlc2MudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246J1xuICBkYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6J1xuICBkdWUudGV4dENvbnRlbnQgPSAnRHVlOidcblxuICBpZiAoIW5ld1Rhc2spIHtcbiAgICBlZGl0TmFtZS52YWx1ZSA9IHRhc2submFtZTtcbiAgICBlZGl0RGVzYy52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgZGlzcGxheURhdGUudmFsdWUgPSB0YXNrLmRhdGVcbiAgICBlZGl0RHVlLnZhbHVlID0gdGFzay5kdWU7XG4gIH0gZWxzZSB7XG4gICAgZWRpdE5hbWUudmFsdWUgPSAnJztcbiAgICBlZGl0RGVzYy52YWx1ZSA9ICcnO1xuICAgIGRpc3BsYXlEYXRlLnZhbHVlID0gZm9ybWF0Q3VycmVudERhdGUoKTtcbiAgICBlZGl0RHVlLnZhbHVlID0gJyc7XG4gIH1cblxuICB0YXNrRWRpdC5jbGFzc0xpc3QuYWRkKCd0YXNrRWRpdCcpO1xuXG4gIHRhc2tFZGl0LmFwcGVuZENoaWxkKG5hbWUpO1xuICB0YXNrRWRpdC5hcHBlbmRDaGlsZChlZGl0TmFtZSk7XG4gIHRhc2tFZGl0LmFwcGVuZENoaWxkKGRlc2MpO1xuICB0YXNrRWRpdC5hcHBlbmRDaGlsZChlZGl0RGVzYyk7XG4gIHRhc2tFZGl0LmFwcGVuZENoaWxkKGRhdGUpO1xuICB0YXNrRWRpdC5hcHBlbmRDaGlsZChkaXNwbGF5RGF0ZSk7XG4gIHRhc2tFZGl0LmFwcGVuZENoaWxkKGR1ZSk7XG4gIHRhc2tFZGl0LmFwcGVuZENoaWxkKGVkaXREdWUpO1xuICB0YXNrRWRpdC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIGlmICghbmV3VGFzaykge1xuICAgIChjaGlsZEVsZW0gIT0gJycpID8gcGFyZW50RWxlbS5yZW1vdmVDaGlsZChjaGlsZEVsZW0pIDogKCkgPT4geyB9O1xuICB9XG5cbiAgcGFyZW50RWxlbS5hcHBlbmRDaGlsZCh0YXNrRWRpdCk7XG59IiwiaW1wb3J0IHsgcmVuZGVyVGFzayB9IGZyb20gJy4vcmVuZGVyVGFzayc7XG5pbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuL2NyZWF0ZUJ1dHRvbic7XG5pbXBvcnQgeyBjbG9zZVBvcHVwIH0gZnJvbSAnLi9jbG9zZVBvcHVwJztcbmltcG9ydCB7IHJlbmRlckVkaXRpb25GaWVsZHMgfSBmcm9tICcuL3JlbmRlckVkaXRpb25GaWVsZHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUG9wdXAodGFzaywgZXhpc3RpbmdUYXNrID0gdHJ1ZSkge1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwb3B1cEJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGRvbUJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xuICBjb25zdCBjbG9zZVBvcHVwQnRuID0gY3JlYXRlQnV0dG9uKCdYJywgJ2Nsb3NlUG9wdXBCdG4nLCAoKSA9PiB7IGNsb3NlUG9wdXAoKSB9KTtcblxuICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xuICBwb3B1cEJnLmNsYXNzTGlzdC5hZGQoJ3BvcHVwQmcnKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQoY2xvc2VQb3B1cEJ0bilcbiAgcG9wdXBCZy5hcHBlbmRDaGlsZChwb3B1cCk7XG4gIGRvbUJvZHkuYXBwZW5kQ2hpbGQocG9wdXBCZyk7XG5cbiAgaWYgKGV4aXN0aW5nVGFzaykge1xuICAgIHJlbmRlclRhc2sodGFzaywgcG9wdXAsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHJlbmRlckVkaXRpb25GaWVsZHMoe30sIHRydWUpO1xuICB9XG5cbn0iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuL2NyZWF0ZUJ1dHRvbic7XG5pbXBvcnQgeyBjbG9zZVBvcHVwIH0gZnJvbSAnLi9jbG9zZVBvcHVwJztcbmltcG9ydCB7IGhpZGVPdmVyZmxvdyB9IGZyb20gJy4vaGlkZU92ZXJmbG93JztcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFzayh0YXNrLCBwYXJlbnRFbGVtID0gY29udGVudCwgcG9wdXAgPSBmYWxzZSkge1xuICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZGVsZXRlQnRuID0gKCgpID0+IHtcbiAgICBpZiAoIXBvcHVwKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQnV0dG9uKCdYJywgJ2RlbGV0ZUJ0bicsICgpID0+IHsgdGFzay5kZWxldGUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjcmVhdGVCdXR0b24oJ0RlbGV0ZSB0aGlzIHRhc2suJywgJ2RlbGV0ZUJ0bicsICgpID0+IHsgdGFzay5kZWxldGUgfSk7XG4gICAgfVxuICB9KSgpXG4gIGNvbnN0IGV4dHJhQnRuID0gKCgpID0+IHtcbiAgICBpZiAoIXBvcHVwKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQnV0dG9uKCcnLCAnYW1wbGlmeUJ0bicsICgpID0+IHsgdGFzay5vcGVuIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3JlYXRlQnV0dG9uKCdFZGl0IHRhc2snLCAnZWRpdEJ0bicsICgpID0+IHsgdGFzay5lZGl0IH0pO1xuICAgIH1cbiAgfSkoKTtcblxuICBuYW1lLnRleHRDb250ZW50ID0gaGlkZU92ZXJmbG93KGBOYW1lOiAke3Rhc2submFtZX1gLCAxNyk7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaGlkZU92ZXJmbG93KGBEZXNjcmlwdGlvbjogJHt0YXNrLmRlc2NyaXB0aW9ufWAsIDE3KTtcbiAgZGF0ZS50ZXh0Q29udGVudCA9IGBEYXRlOiAke3Rhc2suZGF0ZX1gO1xuICBkdWUudGV4dENvbnRlbnQgPSBgRHVlOiAke3Rhc2suZHVlfWA7XG5cbiAgaWYgKHBvcHVwKSB7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGBOYW1lOiAke3Rhc2submFtZX1gO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYERlc2NyaXB0aW9uOiAke3Rhc2suZGVzY3JpcHRpb259YDtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gYERhdGU6ICR7dGFzay5kYXRlfWA7XG4gICAgZHVlLnRleHRDb250ZW50ID0gYER1ZTogJHt0YXNrLmR1ZX1gO1xuICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2tQb3B1cCcpO1xuICAgIGRlbGV0ZUJ0bi5pZCA9ICdkZWxldGVCdG5Qb3B1cCc7XG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBjbG9zZVBvcHVwKCkgfSlcbiAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoJ3RCdXR0b25zUG9wdXAnKTtcbiAgfVxuICBidXR0b25zLmNsYXNzTGlzdC5hZGQoJ3RCdXR0b25zJyk7XG4gIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2tJdGVtJyk7XG4gIHRhc2tJdGVtLmlkID0gdGFzay5uYW1lO1xuICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3ROYW1lJyk7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3REZXNjJyk7XG4gIGRhdGUuY2xhc3NMaXN0LmFkZCgndERhdGUnKTtcbiAgZHVlLmNsYXNzTGlzdC5hZGQoJ3REdWUnKTtcblxuICBidXR0b25zLmFwcGVuZENoaWxkKGV4dHJhQnRuKTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gIGlmIChwb3B1cCkge1xuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkdWUpO1xuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuICB9IGVsc2Uge1xuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkdWUpO1xuICB9XG5cbiAgcGFyZW50RWxlbS5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyVGFzayB9IGZyb20gJy4vcmVuZGVyVGFzayc7XG5pbXBvcnQgeyBjbGVhclRhc2tEaXNwbGF5IH0gZnJvbSAnLi9jbGVhclRhc2tEaXNwbGF5JztcbmltcG9ydCB7IHRhc2tNYW5hZ2VyIH0gZnJvbSAnLi90YXNrTWFuYWdlcic7XG5cbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCYXInKVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoVGFza3MoKSB7XG4gIGxldCBzZWFyY2hSZXN1bHRzO1xuICBzZWFyY2hSZXN1bHRzID0gdGFza01hbmFnZXIudGFza0FycmF5LmZpbHRlcigoZSkgPT4ge1xuICAgIHJldHVybiBlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hCYXIudmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gIH0pO1xuXG4gIGNsZWFyVGFza0Rpc3BsYXkoKTtcblxuICBmb3IgKGxldCBpID0gc2VhcmNoUmVzdWx0cy5sZW5ndGggLSAxOyBpICE9IC0xOyBpLS0pIHtcbiAgICByZW5kZXJUYXNrKHNlYXJjaFJlc3VsdHNbaV0pO1xuICB9XG59IiwiaW1wb3J0IHsgdGFza01hbmFnZXIgfSBmcm9tICcuL3Rhc2tNYW5hZ2VyJztcbmltcG9ydCB7IGNsZWFyVGFza0Rpc3BsYXkgfSBmcm9tICcuL2NsZWFyVGFza0Rpc3BsYXknO1xuaW1wb3J0IHsgcmVuZGVyVGFzayB9IGZyb20gJy4vcmVuZGVyVGFzayc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0VGFza3Moc29ydEJ5KSB7XG4gIGNvbnN0IHNvcnRQYXJhbWV0ZXIgPSBzb3J0QnkudmFsdWU7XG4gIGNvbnN0IHNvcnRpbmdDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0aW5nQ2hlY2tib3gnKTtcbiAgY29uc3Qgc29ydGluZ09yZGVyID0gKHNvcnRpbmdDaGVja2JveC5jaGVja2VkKSA/IFswLCAxXSA6IFsxLCAwXTtcbiAgXG4gIHRhc2tNYW5hZ2VyLnRhc2tBcnJheS5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGFbc29ydFBhcmFtZXRlcl0gPCBiW3NvcnRQYXJhbWV0ZXJdKSB7IHJldHVybiBzb3J0aW5nT3JkZXJbMF07IH1cbiAgICBpZiAoYVtzb3J0UGFyYW1ldGVyXSA+IGJbc29ydFBhcmFtZXRlcl0pIHsgcmV0dXJuIHNvcnRpbmdPcmRlclsxXTsgfVxuICAgIHJldHVybiAwO1xuICB9KVxuICBjbGVhclRhc2tEaXNwbGF5KCk7XG4gIGZvciAobGV0IGkgPSB0YXNrTWFuYWdlci50YXNrQXJyYXkubGVuZ3RoIC0gMTsgaSAhPSAtMTsgaS0tKSB7XG4gICAgcmVuZGVyVGFzayh0YXNrTWFuYWdlci50YXNrQXJyYXlbaV0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBhcHBseVRhc2ttZXRob2RzIH0gZnJvbSAnLi9hcHBseVRhc2tNZXRob2RzJztcbmltcG9ydCB7IHJlbmRlclRhc2sgfSBmcm9tICcuL3JlbmRlclRhc2snO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmVUYXNrKG5ld1Rhc2ssIHRhc2tNYW5hZ2VyKSB7XG4gIHRhc2tNYW5hZ2VyLnRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICBhcHBseVRhc2ttZXRob2RzKG5ld1Rhc2spO1xuICByZW5kZXJUYXNrKG5ld1Rhc2spO1xufSIsImltcG9ydCB7IHJlbmRlclBvcHVwIH0gZnJvbSAnLi9yZW5kZXJQb3B1cCc7XG5pbXBvcnQgeyByZW5kZXJFZGl0aW9uRmllbGRzIH0gZnJvbSAnLi9yZW5kZXJFZGl0aW9uRmllbGRzJztcbmltcG9ydCB7IHN0b3JlVGFzayB9IGZyb20gJy4vc3RvcmVUYXNrJztcbmltcG9ydCB7IGRlbGV0ZVRhc2sgfSBmcm9tICcuL2RlbGV0ZVRhc2snO1xuXG5leHBvcnQgY29uc3QgdGFza01hbmFnZXIgPSB7XG4gIHRhc2tBcnJheTogW10sXG5cbiAgc2F2ZUxvY2FsU3RvcmFnZTogKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrQXJyYXknLCBKU09OLnN0cmluZ2lmeSh0YXNrTWFuYWdlci50YXNrQXJyYXkpKTtcbiAgfSxcblxuICBsb2FkTG9jYWxTdG9yYWdlOiAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tBcnJheScpIHx8ICdbXScpO1xuICAgIHN0b3JhZ2UuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgdGFza01hbmFnZXIuc3RvcmVUYXNrKGUpO1xuICAgIH0pXG4gIH0sXG5cbiAgc3RvcmVUYXNrOiAobmV3VGFzaykgPT4ge1xuICAgIHN0b3JlVGFzayhuZXdUYXNrLCB0YXNrTWFuYWdlcilcbiAgICB0YXNrTWFuYWdlci5zYXZlTG9jYWxTdG9yYWdlKCk7XG4gIH0sXG5cbiAgZGVsZXRlVGFzazogKHRhc2ssIGVkaXQgPSBmYWxzZSkgPT4ge1xuICAgIGRlbGV0ZVRhc2sodGFzaywgdGFza01hbmFnZXIsIGVkaXQpXG4gICAgdGFza01hbmFnZXIuc2F2ZUxvY2FsU3RvcmFnZSgpO1xuICB9LFxuXG4gIG9wZW5UYXNrOiAodGFzaykgPT4ge1xuICAgIHJlbmRlclBvcHVwKHRhc2spO1xuICB9LFxuXG4gIGVkaXRUYXNrOiAodGFzaykgPT4ge1xuICAgIHJlbmRlckVkaXRpb25GaWVsZHModGFzayk7XG4gIH1cbn07IiwiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVNlYXJjaEJhcihpc05hdmJhciA9IGZhbHNlKSB7XG4gIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlYXJjaEJhcicpWzBdO1xuICBjb25zdCBhY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXTtcbiAgaWYgKGFjdGl2ZSA9PT0gdW5kZWZpbmVkICYmICFpc05hdmJhcikge1xuICAgIHNlYXJjaEJhci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgc2VhcmNoQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHJldHVybjtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4vY29tcG9uZW50cy9jcmVhdGVUYXNrJztcbmltcG9ydCB7IHRhc2tNYW5hZ2VyIH0gZnJvbSAnLi9jb21wb25lbnRzL3Rhc2tNYW5hZ2VyJztcbmltcG9ydCB7IGhhbmRsZUV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi9jb21wb25lbnRzL2hhbmRsZUV2ZW50TGlzdGVuZXJzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5oYW5kbGVFdmVudExpc3RlbmVycygpO1xudGFza01hbmFnZXIubG9hZExvY2FsU3RvcmFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==