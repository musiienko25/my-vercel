"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MainBlock.tsx":
/*!**********************************!*\
  !*** ./components/MainBlock.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar blocksData = [\n    {\n        id: 1,\n        imageUrl: \"https://ej2uh7skei8.exactdn.com/wp-content/uploads/2022/02/kids-learning.png?strip=all&lossy=1&quality=92&webp=90&sharp=1&ssl=1\",\n        text: \"Stack of technologies: React, JS, HTML, CSS\",\n        link: \"https://amplify.com/\"\n    },\n    {\n        id: 2,\n        imageUrl: \"https://images-eu.nivea.com/-/media/nivea/local/ua/luminous/new/luminous630_banner_3600x1400.jpg?rx=7&ry=0&rw=3584&rh=1400&mw=3080&hash=762AF7F011976EB45686E19A321B48B6\",\n        text: \"Text 2\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 3,\n        imageUrl: \"https://via.placeholder.com/800\",\n        text: \"Text 3\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 4,\n        imageUrl: \"https://via.placeholder.com/800\",\n        text: \"Text 4\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 5,\n        imageUrl: \"https://via.placeholder.com/800\",\n        text: \"Text 5\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 6,\n        imageUrl: \"https://via.placeholder.com/800\",\n        text: \"Text 6\",\n        link: \"https://example.com\"\n    }, \n];\nvar Block = function(param) {\n    var id = param.id, imageUrl = param.imageUrl, text = param.text, link = param.link;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isHovered = ref[0], setIsHovered = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"relative overflow-hidden rounded-lg\",\n        onMouseEnter: function() {\n            return setIsHovered(true);\n        },\n        onMouseLeave: function() {\n            return setIsHovered(false);\n        },\n        style: {\n            backgroundImage: \"url(\".concat(imageUrl, \")\"),\n            backgroundSize: \"cover\"\n        },\n        __source: {\n            fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n            lineNumber: 57,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: isHovered && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50\",\n            __source: {\n                fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-white text-center mb-2\",\n                    __source: {\n                        fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: text\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    href: link,\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    className: \"text-white underline inline-block py-2 px-4 bg-transparent rounded transition-colors duration-300 hover:bg-purple-500 hover:text-white\",\n                    __source: {\n                        fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: \"Visit website\"\n                })\n            ]\n        })\n    }));\n};\n_s(Block, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Block;\nvar MainBlock = function() {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"grid grid-cols-3 gap-4\",\n        __source: {\n            fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n            lineNumber: 82,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: blocksData.map(function(block) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block, {\n                id: block.id,\n                imageUrl: block.imageUrl,\n                text: block.text,\n                link: block.link,\n                __source: {\n                    fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                },\n                __self: _this1\n            }, block.id);\n        })\n    }));\n};\n_c1 = MainBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainBlock);\nvar _c, _c1;\n$RefreshReg$(_c, \"Block\");\n$RefreshReg$(_c1, \"MainBlock\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNuQixJQUFJO2dCQUNoQkMsSUFBSSxFQUFFa0IsS0FBSyxDQUFDbEIsSUFBSTs7Ozs7OztlQUpYa0IsS0FBSyxDQUFDckIsRUFBRTs7O0FBU3ZCLENBQUM7TUFkS21CLFNBQVM7QUFnQmYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW5CbG9jay50c3g/ZTMwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcblxuaW50ZXJmYWNlIEJsb2NrIHtcbiAgaWQ6IG51bWJlcjtcbiAgaW1hZ2VVcmw6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBsaW5rOiBzdHJpbmc7XG59XG5cbmNvbnN0IGJsb2Nrc0RhdGE6IEJsb2NrW10gPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBpbWFnZVVybDpcbiAgICAgIFwiaHR0cHM6Ly9lajJ1aDdza2VpOC5leGFjdGRuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8wMi9raWRzLWxlYXJuaW5nLnBuZz9zdHJpcD1hbGwmbG9zc3k9MSZxdWFsaXR5PTkyJndlYnA9OTAmc2hhcnA9MSZzc2w9MVwiLFxuICAgIHRleHQ6IFwiU3RhY2sgb2YgdGVjaG5vbG9naWVzOiBSZWFjdCwgSlMsIEhUTUwsIENTU1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9hbXBsaWZ5LmNvbS9cIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGltYWdlVXJsOlxuICAgICAgXCJodHRwczovL2ltYWdlcy1ldS5uaXZlYS5jb20vLS9tZWRpYS9uaXZlYS9sb2NhbC91YS9sdW1pbm91cy9uZXcvbHVtaW5vdXM2MzBfYmFubmVyXzM2MDB4MTQwMC5qcGc/cng9NyZyeT0wJnJ3PTM1ODQmcmg9MTQwMCZtdz0zMDgwJmhhc2g9NzYyQUY3RjAxMTk3NkVCNDU2ODZFMTlBMzIxQjQ4QjZcIixcbiAgICB0ZXh0OiBcIlRleHQgMlwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzgwMFwiLFxuICAgIHRleHQ6IFwiVGV4dCAzXCIsXG4gICAgbGluazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBpbWFnZVVybDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODAwXCIsXG4gICAgdGV4dDogXCJUZXh0IDRcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS84MDBcIixcbiAgICB0ZXh0OiBcIlRleHQgNVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzgwMFwiLFxuICAgIHRleHQ6IFwiVGV4dCA2XCIsXG4gICAgbGluazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBCbG9jazogUmVhY3QuRkM8QmxvY2s+ID0gKHsgaWQsIGltYWdlVXJsLCB0ZXh0LCBsaW5rIH0pID0+IHtcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnXCJcbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpfVxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2VVcmx9KWAsIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIgfX0gLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INGE0L7QvdC+0LLQtSDQt9C+0LHRgNCw0LbQtdC90L3RjyDRgtCwINC50L7Qs9C+INC30LDQv9C+0LLQvdC10L3QvdGPXG4gICAgPlxuICAgICAge2lzSG92ZXJlZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTUwXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBtYi0yXCI+e3RleHR9PC9wPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtsaW5rfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB1bmRlcmxpbmUgaW5saW5lLWJsb2NrIHB5LTIgcHgtNCBiZy10cmFuc3BhcmVudCByb3VuZGVkIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3ZlcjpiZy1wdXJwbGUtNTAwIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpc2l0IHdlYnNpdGVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE1haW5CbG9jazogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICB7YmxvY2tzRGF0YS5tYXAoKGJsb2NrKSA9PiAoXG4gICAgICAgIDxCbG9ja1xuICAgICAgICAgIGtleT17YmxvY2suaWR9XG4gICAgICAgICAgaWQ9e2Jsb2NrLmlkfVxuICAgICAgICAgIGltYWdlVXJsPXtibG9jay5pbWFnZVVybH1cbiAgICAgICAgICB0ZXh0PXtibG9jay50ZXh0fVxuICAgICAgICAgIGxpbms9e2Jsb2NrLmxpbmt9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5CbG9jaztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYmxvY2tzRGF0YSIsImlkIiwiaW1hZ2VVcmwiLCJ0ZXh0IiwibGluayIsIkJsb2NrIiwiaXNIb3ZlcmVkIiwic2V0SXNIb3ZlcmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsInAiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsIk1haW5CbG9jayIsIm1hcCIsImJsb2NrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MainBlock.tsx\n");

/***/ })

});