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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar blocksData = [\n    {\n        id: 1,\n        imageUrl: \"https://ej2uh7skei8.exactdn.com/wp-content/uploads/2022/02/kids-learning.png?strip=all&lossy=1&quality=92&webp=90&sharp=1&ssl=1\",\n        text: \"Stack of technologies: React, JS, HTML, CSS\",\n        link: \"https://amplify.com/\"\n    },\n    {\n        id: 2,\n        imageUrl: \"https://via.placeholder.com/800\",\n        text: \"Text 2\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 3,\n        imageUrl: \"https://via.placeholder.com/800\",\n        text: \"Text 3\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 4,\n        imageUrl: \"https://via.placeholder.com/800\",\n        text: \"Text 4\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 5,\n        imageUrl: \"https://via.placeholder.com/800\",\n        text: \"Text 5\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 6,\n        imageUrl: \"https://via.placeholder.com/800\",\n        text: \"Text 6\",\n        link: \"https://example.com\"\n    }, \n];\nvar Block = function(param) {\n    var id = param.id, imageUrl = param.imageUrl, text = param.text, link = param.link;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isHovered = ref[0], setIsHovered = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n            lineNumber: 56,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"relative overflow-hidden rounded-lg\",\n            onMouseEnter: function() {\n                return setIsHovered(true);\n            },\n            onMouseLeave: function() {\n                return setIsHovered(false);\n            },\n            __source: {\n                fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                    src: imageUrl,\n                    alt: \"block\",\n                    className: \"w-full h-auto\" // Задали розмір для зображення\n                    ,\n                    style: {\n                        maxWidth: \"100%\",\n                        height: \"auto\"\n                    },\n                    __source: {\n                        fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                }),\n                isHovered && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50\",\n                    __source: {\n                        fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: \"text-white text-center mb-2\",\n                            __source: {\n                                fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: text\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            href: link,\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            className: \"text-white underline\",\n                            __source: {\n                                fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: \"Click\"\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(Block, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Block;\nvar MainBlock = function() {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"grid grid-cols-3 gap-4\",\n        __source: {\n            fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n            lineNumber: 88,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: blocksData.map(function(block) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block, {\n                id: block.id,\n                imageUrl: block.imageUrl,\n                text: block.text,\n                link: block.link,\n                __source: {\n                    fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                },\n                __self: _this1\n            }, block.id);\n        })\n    }));\n};\n_c1 = MainBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainBlock);\nvar _c, _c1;\n$RefreshReg$(_c, \"Block\");\n$RefreshReg$(_c1, \"MainBlock\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFMcEIsS0FBSztnQkFFSkosRUFBRSxFQUFFd0IsS0FBSyxDQUFDeEIsRUFBRTtnQkFDWkMsUUFBUSxFQUFFdUIsS0FBSyxDQUFDdkIsUUFBUTtnQkFDeEJDLElBQUksRUFBRXNCLEtBQUssQ0FBQ3RCLElBQUk7Z0JBQ2hCQyxJQUFJLEVBQUVxQixLQUFLLENBQUNyQixJQUFJOzs7Ozs7O2VBSlhxQixLQUFLLENBQUN4QixFQUFFOzs7QUFTdkIsQ0FBQztNQWRLc0IsU0FBUztBQWdCZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFpbkJsb2NrLnRzeD9lMzA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuXG5pbnRlcmZhY2UgQmxvY2sge1xuICBpZDogbnVtYmVyO1xuICBpbWFnZVVybDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbn1cblxuY29uc3QgYmxvY2tzRGF0YTogQmxvY2tbXSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGltYWdlVXJsOlxuICAgICAgXCJodHRwczovL2VqMnVoN3NrZWk4LmV4YWN0ZG4uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzAyL2tpZHMtbGVhcm5pbmcucG5nP3N0cmlwPWFsbCZsb3NzeT0xJnF1YWxpdHk9OTImd2VicD05MCZzaGFycD0xJnNzbD0xXCIsXG4gICAgdGV4dDogXCJTdGFjayBvZiB0ZWNobm9sb2dpZXM6IFJlYWN0LCBKUywgSFRNTCwgQ1NTXCIsXG4gICAgbGluazogXCJodHRwczovL2FtcGxpZnkuY29tL1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzgwMFwiLFxuICAgIHRleHQ6IFwiVGV4dCAyXCIsXG4gICAgbGluazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBpbWFnZVVybDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODAwXCIsXG4gICAgdGV4dDogXCJUZXh0IDNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS84MDBcIixcbiAgICB0ZXh0OiBcIlRleHQgNFwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzgwMFwiLFxuICAgIHRleHQ6IFwiVGV4dCA1XCIsXG4gICAgbGluazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNixcbiAgICBpbWFnZVVybDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODAwXCIsXG4gICAgdGV4dDogXCJUZXh0IDZcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgfSxcbl07XG5cbmNvbnN0IEJsb2NrOiBSZWFjdC5GQzxCbG9jaz4gPSAoeyBpZCwgaW1hZ2VVcmwsIHRleHQsIGxpbmsgfSkgPT4ge1xuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGdcIlxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpfVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtpbWFnZVVybH1cbiAgICAgICAgICBhbHQ9XCJibG9ja1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0b1wiIC8vINCX0LDQtNCw0LvQuCDRgNC+0LfQvNGW0YAg0LTQu9GPINC30L7QsdGA0LDQttC10L3QvdGPXG4gICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiYXV0b1wiIH19IC8vINCU0L7QtNCw0LvQuCDRgdGC0LjQu9GWINC00LvRjyDQt9Cx0LXRgNC10LbQtdC90L3RjyDQv9GA0L7Qv9C+0YDRhtGW0LlcbiAgICAgICAgLz5cbiAgICAgICAge2lzSG92ZXJlZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNTBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1jZW50ZXIgbWItMlwiPnt0ZXh0fTwvcD5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9e2xpbmt9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHVuZGVybGluZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENsaWNrXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE1haW5CbG9jazogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICB7YmxvY2tzRGF0YS5tYXAoKGJsb2NrKSA9PiAoXG4gICAgICAgIDxCbG9ja1xuICAgICAgICAgIGtleT17YmxvY2suaWR9XG4gICAgICAgICAgaWQ9e2Jsb2NrLmlkfVxuICAgICAgICAgIGltYWdlVXJsPXtibG9jay5pbWFnZVVybH1cbiAgICAgICAgICB0ZXh0PXtibG9jay50ZXh0fVxuICAgICAgICAgIGxpbms9e2Jsb2NrLmxpbmt9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5CbG9jaztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYmxvY2tzRGF0YSIsImlkIiwiaW1hZ2VVcmwiLCJ0ZXh0IiwibGluayIsIkJsb2NrIiwiaXNIb3ZlcmVkIiwic2V0SXNIb3ZlcmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaW1nIiwic3JjIiwiYWx0Iiwic3R5bGUiLCJtYXhXaWR0aCIsImhlaWdodCIsInAiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsIk1haW5CbG9jayIsIm1hcCIsImJsb2NrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MainBlock.tsx\n");

/***/ })

});