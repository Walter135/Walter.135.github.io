webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Master__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Master */ "./components/Master.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Precio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Precio */ "./components/Precio.js");
/* harmony import */ var _components_Noticias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Noticias */ "./components/Noticias.js");
/* harmony import */ var _components_Eventos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Eventos */ "./components/Eventos.js");
var _jsxFileName = "C:\\Users\\Usuario\\Documents\\React\\14. BitcoinApp\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Index = function Index(props) {
  return __jsx(_components_Master__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Precio del Bitcoin"), __jsx(_components_Precio__WEBPACK_IMPORTED_MODULE_3__["default"], {
    precio: props.precioBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h2", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Noticias sobre el Bitcoin"), __jsx(_components_Noticias__WEBPACK_IMPORTED_MODULE_4__["default"], {
    noticias: props.noticiasBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h2", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Pr\xF3ximos Eventos Bitcoin"), __jsx(_components_Eventos__WEBPACK_IMPORTED_MODULE_5__["default"], {
    eventos: props.eventosBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))));
};

Index.getInitialProps = function () {
  var precio = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('https://api.coinmarketcap.com/v2/ticker/1', {
    mode: 'no-cors'
  });
  var noticias = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=6e54ab2f704c4e3ca56dc29114143465&language=es');
  var eventos = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&sort_by=date&location.address=Mexico&token=4ZJH4VUQEYMW4RSISIA3');
  var resPrecio = precio.json();
  var resNoticias = noticias.json();
  var resEventos = eventos.json();
  return {
    precioBitcoin: resPrecio.data.quotes.USD,
    noticiasBitcoin: resNoticias.articles,
    eventosBitcoin: resEventos.events
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.49289d09815963825744.hot-update.js.map