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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar blocksData = [\n    {\n        id: 1,\n        imageUrl: \"https://ej2uh7skei8.exactdn.com/wp-content/uploads/2022/02/kids-learning.png?strip=all&lossy=1&quality=92&webp=90&sharp=1&ssl=1\",\n        text: \"Stack of technologies: React, JS, HTML, CSS\",\n        description: \"Stack of technologies: React, JS, HTML, CSS\",\n        link: \"https://amplify.com/\"\n    },\n    {\n        id: 2,\n        imageUrl: \"https://images-eu.nivea.com/-/media/nivea/local/ua/luminous/new/luminous630_banner_3600x1400.jpg?rx=7&ry=0&rw=3584&rh=1400&mw=3080&hash=762AF7F011976EB45686E19A321B48B6\",\n        text: \"Text 2\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 3,\n        imageUrl: \"https://via.placeholder.com/800\",\n        text: \"Text 3\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 4,\n        imageUrl: \"https://via.placeholder.com/800\",\n        text: \"Text 4\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 5,\n        imageUrl: \"https://via.placeholder.com/800\",\n        text: \"Text 5\",\n        link: \"https://example.com\"\n    },\n    {\n        id: 6,\n        imageUrl: \"https://via.placeholder.com/800\",\n        text: \"Text 6\",\n        link: \"https://example.com\"\n    }, \n];\nvar Block = function(param) {\n    var id = param.id, imageUrl = param.imageUrl, text = param.text, link = param.link;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isHovered = ref[0], setIsHovered = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"relative overflow-hidden rounded-lg\",\n        onMouseEnter: function() {\n            return setIsHovered(true);\n        },\n        onMouseLeave: function() {\n            return setIsHovered(false);\n        },\n        style: {\n            backgroundImage: \"url(\".concat(imageUrl, \")\"),\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            height: \"220px\"\n        },\n        __source: {\n            fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n            lineNumber: 58,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: isHovered && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50\",\n            __source: {\n                fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-white text-center mb-2\",\n                    __source: {\n                        fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: text\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                    href: link,\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    className: \"text-white underline inline-block py-2 px-4 bg-transparent rounded transition-colors duration-300 hover:bg-purple-500 hover:text-white\",\n                    __source: {\n                        fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: \"Visit website\"\n                })\n            ]\n        })\n    }));\n};\n_s(Block, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Block;\nvar MainBlock = function() {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"grid grid-cols-3 gap-4\",\n        __source: {\n            fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n            lineNumber: 88,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: blocksData.map(function(block) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block, {\n                id: block.id,\n                imageUrl: block.imageUrl,\n                text: block.text,\n                link: block.link,\n                __source: {\n                    fileName: \"/Users/musiienko/Projects/cv 2/components/MainBlock.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                },\n                __self: _this1\n            }, block.id);\n        })\n    }));\n};\n_c1 = MainBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainBlock);\nvar _c, _c1;\n$RefreshReg$(_c, \"Block\");\n$RefreshReg$(_c1, \"MainBlock\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUN4QixFQUFFO2dCQUNaQyxRQUFRLEVBQUV1QixLQUFLLENBQUN2QixRQUFRO2dCQUN4QkMsSUFBSSxFQUFFc0IsS0FBSyxDQUFDdEIsSUFBSTtnQkFDaEJFLElBQUksRUFBRW9CLEtBQUssQ0FBQ3BCLElBQUk7Ozs7Ozs7ZUFKWG9CLEtBQUssQ0FBQ3hCLEVBQUU7OztBQVN2QixDQUFDO01BZEtzQixTQUFTO0FBZ0JmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluQmxvY2sudHN4P2UzMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5cbmludGVyZmFjZSBCbG9jayB7XG4gIGlkOiBudW1iZXI7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xufVxuXG5jb25zdCBibG9ja3NEYXRhOiBCbG9ja1tdID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgaW1hZ2VVcmw6XG4gICAgICBcImh0dHBzOi8vZWoydWg3c2tlaTguZXhhY3Rkbi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDIva2lkcy1sZWFybmluZy5wbmc/c3RyaXA9YWxsJmxvc3N5PTEmcXVhbGl0eT05MiZ3ZWJwPTkwJnNoYXJwPTEmc3NsPTFcIixcbiAgICB0ZXh0OiBcIlN0YWNrIG9mIHRlY2hub2xvZ2llczogUmVhY3QsIEpTLCBIVE1MLCBDU1NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGFjayBvZiB0ZWNobm9sb2dpZXM6IFJlYWN0LCBKUywgSFRNTCwgQ1NTXCIsXG4gICAgbGluazogXCJodHRwczovL2FtcGxpZnkuY29tL1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaW1hZ2VVcmw6XG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLWV1Lm5pdmVhLmNvbS8tL21lZGlhL25pdmVhL2xvY2FsL3VhL2x1bWlub3VzL25ldy9sdW1pbm91czYzMF9iYW5uZXJfMzYwMHgxNDAwLmpwZz9yeD03JnJ5PTAmcnc9MzU4NCZyaD0xNDAwJm13PTMwODAmaGFzaD03NjJBRjdGMDExOTc2RUI0NTY4NkUxOUEzMjFCNDhCNlwiLFxuICAgIHRleHQ6IFwiVGV4dCAyXCIsXG4gICAgbGluazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBpbWFnZVVybDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODAwXCIsXG4gICAgdGV4dDogXCJUZXh0IDNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS84MDBcIixcbiAgICB0ZXh0OiBcIlRleHQgNFwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzgwMFwiLFxuICAgIHRleHQ6IFwiVGV4dCA1XCIsXG4gICAgbGluazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNixcbiAgICBpbWFnZVVybDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vODAwXCIsXG4gICAgdGV4dDogXCJUZXh0IDZcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgfSxcbl07XG5cbmNvbnN0IEJsb2NrOiBSZWFjdC5GQzxCbG9jaz4gPSAoeyBpZCwgaW1hZ2VVcmwsIHRleHQsIGxpbmsgfSkgPT4ge1xuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGdcIlxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc0hvdmVyZWQodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZVVybH0pYCxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxuICAgICAgICBoZWlnaHQ6IFwiMjIwcHhcIiwgLy8g0JfRgNC+0LHQuNGC0Lgg0LLQuNGB0L7RgtGDINCx0LvQvtC60YMgMTAwJSDQstGW0LQg0LHQsNGC0YzQutGW0LLRgdGM0LrQvtCz0L4g0LrQvtC90YLQtdC50L3QtdGA0LBcbiAgICAgIH19XG4gICAgPlxuICAgICAge2lzSG92ZXJlZCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTUwXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBtYi0yXCI+e3RleHR9PC9wPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtsaW5rfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB1bmRlcmxpbmUgaW5saW5lLWJsb2NrIHB5LTIgcHgtNCBiZy10cmFuc3BhcmVudCByb3VuZGVkIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3ZlcjpiZy1wdXJwbGUtNTAwIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpc2l0IHdlYnNpdGVcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE1haW5CbG9jazogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICB7YmxvY2tzRGF0YS5tYXAoKGJsb2NrKSA9PiAoXG4gICAgICAgIDxCbG9ja1xuICAgICAgICAgIGtleT17YmxvY2suaWR9XG4gICAgICAgICAgaWQ9e2Jsb2NrLmlkfVxuICAgICAgICAgIGltYWdlVXJsPXtibG9jay5pbWFnZVVybH1cbiAgICAgICAgICB0ZXh0PXtibG9jay50ZXh0fVxuICAgICAgICAgIGxpbms9e2Jsb2NrLmxpbmt9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5CbG9jaztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYmxvY2tzRGF0YSIsImlkIiwiaW1hZ2VVcmwiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJsaW5rIiwiQmxvY2siLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiaGVpZ2h0IiwicCIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiTWFpbkJsb2NrIiwibWFwIiwiYmxvY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MainBlock.tsx\n");

/***/ })

});