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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar blocksData = [\n    {\n        id: 1,\n        imageUrl: \"https://via.placeholder.com/300\",\n        text: \"Stack of technologies: React, JS, HTML, CSS\",\n        link: \"https://amplify.com/\"\n    },\n    {\n        id: 2,\n        imageUrl: \"https://via.placeholder.com/300\",\n        text: \"Text 2\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 3,\n        imageUrl: \"https://via.placeholder.com/300\",\n        text: \"Text 3\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 4,\n        imageUrl: \"https://via.placeholder.com/300\",\n        text: \"Text 4\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 5,\n        imageUrl: \"https://via.placeholder.com/300\",\n        text: \"Text 5\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 6,\n        imageUrl: \"https://via.placeholder.com/300\",\n        text: \"Text 6\",\n        link: \"https://example.com\"\n    }, \n];\nvar Block = function(param) {\n    var id = param.id, imageUrl = param.imageUrl, text = param.text, link = param.link;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isHovered = ref[0], setIsHovered = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n            lineNumber: 55,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"relative\",\n                onMouseEnter: function() {\n                    return setIsHovered(true);\n                },\n                onMouseLeave: function() {\n                    return setIsHovered(false);\n                },\n                __source: {\n                    fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: imageUrl,\n                        alt: \"block\",\n                        className: \"w-full h-auto\",\n                        __source: {\n                            fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    isHovered && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50\",\n                        __source: {\n                            fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: \"text-white\",\n                            __source: {\n                                fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: text\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                href: link,\n                target: \"_blank\",\n                rel: \"noopener noreferrer\",\n                __source: {\n                    fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(Block, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Block;\nvar MainBlock = function() {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"grid grid-cols-3 gap-4\",\n        __source: {\n            fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n            lineNumber: 75,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: blocksData.map(function(block) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block, {\n                id: block.id,\n                imageUrl: block.imageUrl,\n                text: block.text,\n                link: block.link,\n                __source: {\n                    fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                },\n                __self: _this1\n            }, block.id);\n        })\n    }));\n};\n_c1 = MainBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainBlock);\nvar _c, _c1;\n$RefreshReg$(_c, \"Block\");\n$RefreshReg$(_c1, \"MainBlock\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVrQixLQUFLLENBQUNsQixJQUFJOzs7Ozs7O2VBSlhrQixLQUFLLENBQUNyQixFQUFFOzs7QUFTdkIsQ0FBQztNQWRLbUIsU0FBUztBQWdCZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFpbkJsb2NrLnRzeD9lMzA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuXG5pbnRlcmZhY2UgQmxvY2sge1xuICBpZDogbnVtYmVyO1xuICBpbWFnZVVybDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbn1cblxuY29uc3QgYmxvY2tzRGF0YTogQmxvY2tbXSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDBcIixcbiAgICB0ZXh0OiBcIlN0YWNrIG9mIHRlY2hub2xvZ2llczogUmVhY3QsIEpTLCBIVE1MLCBDU1NcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vYW1wbGlmeS5jb20vXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBpbWFnZVVybDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAwXCIsXG4gICAgdGV4dDogXCJUZXh0IDJcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDBcIixcbiAgICB0ZXh0OiBcIlRleHQgM1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMFwiLFxuICAgIHRleHQ6IFwiVGV4dCA0XCIsXG4gICAgbGluazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICBpbWFnZVVybDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAwXCIsXG4gICAgdGV4dDogXCJUZXh0IDVcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgfSxcbiAge1xuICAgIGlkOiA2LFxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDBcIixcbiAgICB0ZXh0OiBcIlRleHQgNlwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICB9LFxuXTtcblxuY29uc3QgQmxvY2s6IFJlYWN0LkZDPEJsb2NrPiA9ICh7IGlkLCBpbWFnZVVybCwgdGV4dCwgbGluayB9KSA9PiB7XG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiXG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpfVxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9XG4gICAgICA+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PVwiYmxvY2tcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvXCIgLz5cbiAgICAgICAge2lzSG92ZXJlZCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNTBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57dGV4dH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj48L2E+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBNYWluQmxvY2s6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAge2Jsb2Nrc0RhdGEubWFwKChibG9jaykgPT4gKFxuICAgICAgICA8QmxvY2tcbiAgICAgICAgICBrZXk9e2Jsb2NrLmlkfVxuICAgICAgICAgIGlkPXtibG9jay5pZH1cbiAgICAgICAgICBpbWFnZVVybD17YmxvY2suaW1hZ2VVcmx9XG4gICAgICAgICAgdGV4dD17YmxvY2sudGV4dH1cbiAgICAgICAgICBsaW5rPXtibG9jay5saW5rfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluQmxvY2s7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImJsb2Nrc0RhdGEiLCJpZCIsImltYWdlVXJsIiwidGV4dCIsImxpbmsiLCJCbG9jayIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImRpdiIsImNsYXNzTmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImltZyIsInNyYyIsImFsdCIsInAiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsIk1haW5CbG9jayIsIm1hcCIsImJsb2NrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MainBlock.tsx\n");

/***/ })

});