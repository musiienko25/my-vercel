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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar blocksData = [\n    {\n        id: 1,\n        imageUrl: \"https://via.placeholder.com/300\",\n        text: \"Text 1\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 2,\n        imageUrl: \"https://via.placeholder.com/300\",\n        text: \"Text 2\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 3,\n        imageUrl: \"https://via.placeholder.com/300\",\n        text: \"Text 3\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 4,\n        imageUrl: \"https://via.placeholder.com/300\",\n        text: \"Text 4\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 5,\n        imageUrl: \"https://via.placeholder.com/300\",\n        text: \"Text 5\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 6,\n        imageUrl: \"https://via.placeholder.com/300\",\n        text: \"Text 6\",\n        link: \"https://example.com\"\n    }, \n];\nvar Block = function(param) {\n    var id = param.id, imageUrl = param.imageUrl, text = param.text, link = param.link;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isHovered = ref[0], setIsHovered = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n        href: link,\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        __source: {\n            fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n            lineNumber: 54,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"relative\",\n            onMouseEnter: function() {\n                return setIsHovered(true);\n            },\n            onMouseLeave: function() {\n                return setIsHovered(false);\n            },\n            __source: {\n                fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                    src: imageUrl,\n                    alt: \"block\",\n                    className: \"w-full h-auto\",\n                    __source: {\n                        fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                }),\n                isHovered && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50\",\n                    __source: {\n                        fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: \"text-white\",\n                        __source: {\n                            fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: text\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s(Block, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Block;\nvar MainBlock = function() {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"grid grid-cols-3 gap-4\",\n        __source: {\n            fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n            lineNumber: 73,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: blocksData.map(function(block) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block, {\n                id: block.id,\n                imageUrl: block.imageUrl,\n                text: block.text,\n                link: block.link,\n                __source: {\n                    fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                },\n                __self: _this1\n            }, block.id);\n        })\n    }));\n};\n_c1 = MainBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainBlock);\nvar _c, _c1;\n$RefreshReg$(_c, \"Block\");\n$RefreshReg$(_c1, \"MainBlock\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFKWGtCLEtBQUssQ0FBQ3JCLEVBQUU7OztBQVN2QixDQUFDO01BZEttQixTQUFTO0FBZ0JmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluQmxvY2sudHN4P2UzMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEJsb2NrIHtcbiAgaWQ6IG51bWJlcjtcbiAgaW1hZ2VVcmw6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBsaW5rOiBzdHJpbmc7XG59XG5cbmNvbnN0IGJsb2Nrc0RhdGE6IEJsb2NrW10gPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBpbWFnZVVybDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAwXCIsXG4gICAgdGV4dDogXCJUZXh0IDFcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDBcIixcbiAgICB0ZXh0OiBcIlRleHQgMlwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMFwiLFxuICAgIHRleHQ6IFwiVGV4dCAzXCIsXG4gICAgbGluazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBpbWFnZVVybDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAwXCIsXG4gICAgdGV4dDogXCJUZXh0IDRcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDBcIixcbiAgICB0ZXh0OiBcIlRleHQgNVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMFwiLFxuICAgIHRleHQ6IFwiVGV4dCA2XCIsXG4gICAgbGluazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBCbG9jazogUmVhY3QuRkM8QmxvY2s+ID0gKHsgaWQsIGltYWdlVXJsLCB0ZXh0LCBsaW5rIH0pID0+IHtcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmVcIlxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpfVxuICAgICAgPlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGFsdD1cImJsb2NrXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0b1wiIC8+XG4gICAgICAgIHtpc0hvdmVyZWQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTUwXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3RleHR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9hPlxuICApO1xufTtcblxuY29uc3QgTWFpbkJsb2NrOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgIHtibG9ja3NEYXRhLm1hcCgoYmxvY2spID0+IChcbiAgICAgICAgPEJsb2NrXG4gICAgICAgICAga2V5PXtibG9jay5pZH1cbiAgICAgICAgICBpZD17YmxvY2suaWR9XG4gICAgICAgICAgaW1hZ2VVcmw9e2Jsb2NrLmltYWdlVXJsfVxuICAgICAgICAgIHRleHQ9e2Jsb2NrLnRleHR9XG4gICAgICAgICAgbGluaz17YmxvY2subGlua31cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbkJsb2NrO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJibG9ja3NEYXRhIiwiaWQiLCJpbWFnZVVybCIsInRleHQiLCJsaW5rIiwiQmxvY2siLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImRpdiIsImNsYXNzTmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImltZyIsInNyYyIsImFsdCIsInAiLCJNYWluQmxvY2siLCJtYXAiLCJibG9jayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MainBlock.tsx\n");

/***/ })

});