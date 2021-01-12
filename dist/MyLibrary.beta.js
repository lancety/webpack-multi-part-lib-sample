/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["test"] = factory();
	else
		root["test"] = root["test"] || {}, root["test"]["beta"] = factory();
})(self, function() {
return (self["webpackChunktest_name_"] = self["webpackChunktest_name_"] || []).push([["beta"],{

/***/ "./beta.jsx":
/*!******************!*\
  !*** ./beta.jsx ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"betaA\": () => /* binding */ betaA,\n/* harmony export */   \"alpha\": () => /* binding */ alpha\n/* harmony export */ });\n/* harmony import */ var _alpha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alpha */ \"./alpha.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n // todo this caused build fail\n\nconst betaA = () => \"beta\";\nconst alpha = _alpha__WEBPACK_IMPORTED_MODULE_0__.appd; // class Something extends React.Component {\n//\n// \trender() {\n// \t\treturn <div>\n// \t\t\t{this._fn()}\n// \t\t</div>\n// \t}\n//\n// \t_fn = async() => {\n// \t\tconsole.log(\"lalala\")\n// \t}\n// }\n//\n//\n// export const something = new Something({});\n\n//# sourceURL=source/./beta.jsx");

/***/ })

},
0,[["./beta.jsx","Vendor","alpha"]]]);
});