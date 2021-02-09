(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./assets/main.js":
/*!************************!*\
  !*** ./assets/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.scss */ "./assets/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3__);





var Routing = __webpack_require__(/*! ../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js-routes.json */ "./assets/js-routes.json");

var goods = document.getElementById('goods');

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

Routing.setRoutingData(Routes);
var filters = {};
var sorts = {};
var page = 1;
document.addEventListener('DOMContentLoaded', function (event) {
  axios.post(Routing.generate('getGoods'), {
    page: page
  }).then(function (response) {
    Insert(response.data);
  });
});
document.addEventListener('click', function (event) {
  var target = event.target;

  if (target.type === "button" && target.className === "buttonAdd" && isNaN(parseInt(target.id)) === false) {
    var _count = document.getElementById('goodAmount_' + target.id);

    if (_count.value > 0) {
      axios.post(Routing.generate('addToCard', {
        id: target.id
      }), {
        'id': target.id,
        'amount': _count.value,
        page: page
      }).then(function (response) {
        var block = document.getElementById('good_' + target.id);
        block.style.backgroundColor = '#c2ff88';
        target.value = 'Added';
        setTimeout(function () {
          target.value = "Add";
          block.style.backgroundColor = 'white';
        }, 2000);
      });
    } else {
      var error = document.getElementById('error_' + target.id);
      error.style.display = 'inherit';
      setTimeout(function () {
        error.style.display = 'none';
      }, 2000);
    }
  } // ----------- PAGINATOR ----------- //


  if (target.id === 'selectPage') Paginate(target, parseInt(target.dataset.page));
}); // ----------- BUTTONS ----------- //

var buttonFilter = document.getElementById('buttonFilter');
buttonFilter.addEventListener('click', function () {
  axios.post(Routing.generate('getGoods'), {
    filters: filters,
    sorts: sorts,
    page: 1
  }).then(function (response) {
    buttonFilter.value = 'Filtered';
    setTimeout(function () {
      buttonFilter.value = "Filter";
    }, 2000);
    Insert(response.data);
  });
});
var buttonFilterClear = document.getElementById('clearFilter');
buttonFilterClear.addEventListener('click', function () {
  filters = {};
  minPrice.value = 0;
  maxPrice.value = 0;
  count.value = 1;
  category.selectedIndex = 0;
  axios.post(Routing.generate('getGoods'), {
    filters: filters,
    sorts: sorts,
    page: 1
  }).then(function (response) {
    buttonFilterClear.value = 'Success';
    setTimeout(function () {
      buttonFilterClear.value = "Clear";
    }, 2000);
    Insert(response.data);
  });
});
var buttonPriceSort = document.getElementById('priceSort');
buttonPriceSort.addEventListener('click', function () {
  sorts = {
    'type': 'price',
    'order': buttonPriceSort.dataset.sort
  };
  buttonPriceSort.dataset.sort === "ASC" ? buttonPriceSort.dataset.sort = "DESC" : buttonPriceSort.dataset.sort = "ASC";
  axios.post(Routing.generate('getGoods'), {
    filters: filters,
    sorts: sorts,
    page: 1
  }).then(function (response) {
    buttonPriceSort.value = 'Sorted';
    setTimeout(function () {
      buttonPriceSort.value = "Sort by price";
    }, 2000);
    Insert(response.data);
  });
});
var buttonCountSort = document.getElementById('countSort');
buttonCountSort.addEventListener('click', function () {
  sorts = {
    'type': 'count',
    'order': buttonCountSort.dataset.sort
  };
  buttonCountSort.dataset.sort === "ASC" ? buttonCountSort.dataset.sort = "DESC" : buttonCountSort.dataset.sort = "ASC";
  axios.post(Routing.generate('getGoods'), {
    filters: filters,
    sorts: sorts,
    page: 1
  }).then(function (response) {
    buttonCountSort.value = 'Sorted';
    setTimeout(function () {
      buttonCountSort.value = "Sort by count";
    }, 2000);
    Insert(response.data);
  });
});
var buttonClearSort = document.getElementById('clearSort');
buttonClearSort.addEventListener('click', function () {
  sorts = {};
  axios.post(Routing.generate('getGoods'), {
    filters: filters,
    sorts: sorts,
    page: 1
  }).then(function (response) {
    buttonClearSort.value = 'Success';
    setTimeout(function () {
      buttonClearSort.value = "Clear";
    }, 2000);
    Insert(response.data);
  });
}); // ----------- GET DATA FILTER ----------- //

var category = document.getElementById('category');
category.addEventListener('change', function (event) {
  filters["category"] = category[category.selectedIndex].id;
});
var minPrice = document.getElementById('minNum');
minPrice.addEventListener('change', function (event) {
  var price = filters.price ? filters.price.max : maxPrice.value;
  filters["price"] = {
    'min': minPrice.value,
    'max': price
  };
});
var maxPrice = document.getElementById('maxNum');
maxPrice.addEventListener('change', function (event) {
  var price = filters.price ? filters.price.min : minPrice.value;
  filters["price"] = {
    'min': price,
    'max': maxPrice.value
  };
});
var count = document.getElementById('minCount');
count.addEventListener('change', function () {
  filters["minCount"] = count.value;
});

function Insert(data) {
  while (goods.lastElementChild) {
    goods.removeChild(goods.lastElementChild);
  }

  for (var i = 0; i < data.length - 1; i++) {
    var form = document.createElement('form');
    form.innerHTML = data[i];
    goods.appendChild(form);
  }

  var paginator = document.getElementById('paginator');
  paginator.innerHTML = data[data.length - 1];
}

function Paginate(target, page) {
  target.style.color = 'dodgerblue';
  target.style.textDecoration = 'underline';
  axios.post(Routing.generate('getGoods'), {
    filters: filters,
    sorts: sorts,
    page: page
  }).then(function (response) {
    Insert(response.data);
    target.style.color = '#5eb5e0';
    target.style.textDecoration = 'none';
  });
}

/***/ }),

/***/ "./assets/styles/main.scss":
/*!*********************************!*\
  !*** ./assets/styles/main.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},[["./assets/main.js","runtime","vendors~admin~cart~main","vendors~cart~main","admin~cart~main"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyJSb3V0aW5nIiwicmVxdWlyZSIsIlJvdXRlcyIsImdvb2RzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImF4aW9zIiwic2V0Um91dGluZ0RhdGEiLCJmaWx0ZXJzIiwic29ydHMiLCJwYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicG9zdCIsImdlbmVyYXRlIiwidGhlbiIsInJlc3BvbnNlIiwiSW5zZXJ0IiwiZGF0YSIsInRhcmdldCIsInR5cGUiLCJjbGFzc05hbWUiLCJpc05hTiIsInBhcnNlSW50IiwiaWQiLCJjb3VudCIsInZhbHVlIiwiYmxvY2siLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInNldFRpbWVvdXQiLCJlcnJvciIsImRpc3BsYXkiLCJQYWdpbmF0ZSIsImRhdGFzZXQiLCJidXR0b25GaWx0ZXIiLCJidXR0b25GaWx0ZXJDbGVhciIsIm1pblByaWNlIiwibWF4UHJpY2UiLCJjYXRlZ29yeSIsInNlbGVjdGVkSW5kZXgiLCJidXR0b25QcmljZVNvcnQiLCJzb3J0IiwiYnV0dG9uQ291bnRTb3J0IiwiYnV0dG9uQ2xlYXJTb3J0IiwicHJpY2UiLCJtYXgiLCJtaW4iLCJsYXN0RWxlbWVudENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJpIiwibGVuZ3RoIiwiZm9ybSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsInBh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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL0JELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRXhEO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHlDQUF5QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbmNvbnN0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcbmxldCBSb3V0ZXMgPSByZXF1aXJlKCcuL2pzLXJvdXRlcy5qc29uJyk7XG5sZXQgZ29vZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZHMnKTtcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcblxubGV0IGZpbHRlcnMgPSB7fTtcbmxldCBzb3J0cyA9IHt9O1xubGV0IHBhZ2UgPSAxO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdnZXRHb29kcycpLCB7XG4gICAgICAgIHBhZ2VcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIEluc2VydChyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQudHlwZSA9PT0gXCJidXR0b25cIiAmJiB0YXJnZXQuY2xhc3NOYW1lID09PSBcImJ1dHRvbkFkZFwiICYmIGlzTmFOKHBhcnNlSW50KHRhcmdldC5pZCkpID09PSBmYWxzZSkge1xuICAgICAgICBsZXQgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZEFtb3VudF8nICsgdGFyZ2V0LmlkKVxuICAgICAgICBpZiAoY291bnQudmFsdWUgPiAwKSB7XG4gICAgICAgICAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2FkZFRvQ2FyZCcsIHtpZDogdGFyZ2V0LmlkfSksIHtcbiAgICAgICAgICAgICAgICAnaWQnOiB0YXJnZXQuaWQsXG4gICAgICAgICAgICAgICAgJ2Ftb3VudCc6IGNvdW50LnZhbHVlLFxuICAgICAgICAgICAgICAgIHBhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBibG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kXycrdGFyZ2V0LmlkKVxuICAgICAgICAgICAgICAgICAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2MyZmY4OCc7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9ICdBZGRlZCc7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnZhbHVlID0gXCJBZGRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JfJyArIHRhcmdldC5pZClcbiAgICAgICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnaW5oZXJpdCdcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0gUEFHSU5BVE9SIC0tLS0tLS0tLS0tIC8vXG4gICAgaWYgKHRhcmdldC5pZCA9PT0gJ3NlbGVjdFBhZ2UnKVxuICAgICAgICBQYWdpbmF0ZSh0YXJnZXQsIHBhcnNlSW50KHRhcmdldC5kYXRhc2V0LnBhZ2UpKVxufSlcblxuLy8gLS0tLS0tLS0tLS0gQlVUVE9OUyAtLS0tLS0tLS0tLSAvL1xubGV0IGJ1dHRvbkZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25GaWx0ZXInKTtcbmJ1dHRvbkZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksIHtcbiAgICAgICAgZmlsdGVycywgc29ydHMsIHBhZ2U6IDFcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJ1dHRvbkZpbHRlci52YWx1ZSA9ICdGaWx0ZXJlZCc7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b25GaWx0ZXIudmFsdWUgPSBcIkZpbHRlclwiXG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIEluc2VydChyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxufSlcblxubGV0IGJ1dHRvbkZpbHRlckNsZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyRmlsdGVyJyk7XG5idXR0b25GaWx0ZXJDbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmaWx0ZXJzID0ge307XG4gICAgbWluUHJpY2UudmFsdWUgPSAwXG4gICAgbWF4UHJpY2UudmFsdWUgPSAwXG4gICAgY291bnQudmFsdWUgPSAxXG4gICAgY2F0ZWdvcnkuc2VsZWN0ZWRJbmRleCA9IDBcbiAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksIHtcbiAgICAgICAgZmlsdGVycywgc29ydHMsIHBhZ2U6IDFcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJ1dHRvbkZpbHRlckNsZWFyLnZhbHVlID0gJ1N1Y2Nlc3MnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uRmlsdGVyQ2xlYXIudmFsdWUgPSBcIkNsZWFyXCJcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgSW5zZXJ0KHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG59KVxuXG5sZXQgYnV0dG9uUHJpY2VTb3J0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaWNlU29ydCcpO1xuYnV0dG9uUHJpY2VTb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNvcnRzID0geyd0eXBlJzogJ3ByaWNlJywgJ29yZGVyJzogYnV0dG9uUHJpY2VTb3J0LmRhdGFzZXQuc29ydH1cbiAgICBidXR0b25QcmljZVNvcnQuZGF0YXNldC5zb3J0ID09PSBcIkFTQ1wiID8gYnV0dG9uUHJpY2VTb3J0LmRhdGFzZXQuc29ydCA9IFwiREVTQ1wiIDogYnV0dG9uUHJpY2VTb3J0LmRhdGFzZXQuc29ydCA9IFwiQVNDXCJcbiAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksIHtcbiAgICAgICAgZmlsdGVycywgc29ydHMsIHBhZ2U6IDFcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJ1dHRvblByaWNlU29ydC52YWx1ZSA9ICdTb3J0ZWQnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uUHJpY2VTb3J0LnZhbHVlID0gXCJTb3J0IGJ5IHByaWNlXCJcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgSW5zZXJ0KHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG59KVxuXG5cbmxldCBidXR0b25Db3VudFNvcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRTb3J0Jyk7XG5idXR0b25Db3VudFNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc29ydHMgPSB7J3R5cGUnOiAnY291bnQnLCAnb3JkZXInOiBidXR0b25Db3VudFNvcnQuZGF0YXNldC5zb3J0fVxuICAgIGJ1dHRvbkNvdW50U29ydC5kYXRhc2V0LnNvcnQgPT09IFwiQVNDXCIgPyBidXR0b25Db3VudFNvcnQuZGF0YXNldC5zb3J0ID0gXCJERVNDXCIgOiBidXR0b25Db3VudFNvcnQuZGF0YXNldC5zb3J0ID0gXCJBU0NcIlxuICAgIGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnZ2V0R29vZHMnKSwge1xuICAgICAgICBmaWx0ZXJzLCBzb3J0cywgcGFnZTogMVxuICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgYnV0dG9uQ291bnRTb3J0LnZhbHVlID0gJ1NvcnRlZCc7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b25Db3VudFNvcnQudmFsdWUgPSBcIlNvcnQgYnkgY291bnRcIlxuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICBJbnNlcnQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbn0pXG5cblxubGV0IGJ1dHRvbkNsZWFyU29ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhclNvcnQnKTtcbmJ1dHRvbkNsZWFyU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzb3J0cyA9IHt9O1xuICAgIGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnZ2V0R29vZHMnKSwge1xuICAgICAgICBmaWx0ZXJzLCBzb3J0cywgcGFnZTogMVxuICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgYnV0dG9uQ2xlYXJTb3J0LnZhbHVlID0gJ1N1Y2Nlc3MnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uQ2xlYXJTb3J0LnZhbHVlID0gXCJDbGVhclwiXG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIEluc2VydChyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxufSlcblxuXG4vLyAtLS0tLS0tLS0tLSBHRVQgREFUQSBGSUxURVIgLS0tLS0tLS0tLS0gLy9cbmxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeScpXG5jYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBmaWx0ZXJzW1wiY2F0ZWdvcnlcIl0gPSBjYXRlZ29yeVtjYXRlZ29yeS5zZWxlY3RlZEluZGV4XS5pZFxufSlcblxubGV0IG1pblByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbk51bScpXG5taW5QcmljZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBsZXQgcHJpY2UgPSBmaWx0ZXJzLnByaWNlID8gZmlsdGVycy5wcmljZS5tYXggOiBtYXhQcmljZS52YWx1ZVxuICAgIGZpbHRlcnNbXCJwcmljZVwiXSA9IHtcbiAgICAgICAgJ21pbic6IG1pblByaWNlLnZhbHVlLFxuICAgICAgICAnbWF4JzogcHJpY2VcbiAgICB9XG59KVxuXG5sZXQgbWF4UHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4TnVtJylcbm1heFByaWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGxldCBwcmljZSA9IGZpbHRlcnMucHJpY2UgPyBmaWx0ZXJzLnByaWNlLm1pbiA6IG1pblByaWNlLnZhbHVlXG4gICAgZmlsdGVyc1tcInByaWNlXCJdID0ge1xuICAgICAgICAnbWluJzogcHJpY2UsXG4gICAgICAgICdtYXgnOiBtYXhQcmljZS52YWx1ZVxuICAgIH1cbn0pXG5cbmxldCBjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW5Db3VudCcpXG5jb3VudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgZmlsdGVyc1tcIm1pbkNvdW50XCJdID0gY291bnQudmFsdWVcbn0pXG5cblxuZnVuY3Rpb24gSW5zZXJ0KGRhdGEpIHtcbiAgICB3aGlsZSAoZ29vZHMubGFzdEVsZW1lbnRDaGlsZClcbiAgICAgICAgZ29vZHMucmVtb3ZlQ2hpbGQoZ29vZHMubGFzdEVsZW1lbnRDaGlsZCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgIGZvcm0uaW5uZXJIVE1MID0gZGF0YVtpXVxuICAgICAgICBnb29kcy5hcHBlbmRDaGlsZChmb3JtKVxuICAgIH1cblxuICAgIGxldCBwYWdpbmF0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnaW5hdG9yJyk7XG4gICAgcGFnaW5hdG9yLmlubmVySFRNTCA9IGRhdGFbZGF0YS5sZW5ndGgtMV07XG59XG5cbmZ1bmN0aW9uIFBhZ2luYXRlKHRhcmdldCwgcGFnZSl7XG4gICAgdGFyZ2V0LnN0eWxlLmNvbG9yID0gJ2RvZGdlcmJsdWUnO1xuICAgIHRhcmdldC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICd1bmRlcmxpbmUnXG4gICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdnZXRHb29kcycpLCB7XG4gICAgICAgIGZpbHRlcnMsIHNvcnRzLCBwYWdlXG4gICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBJbnNlcnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUuY29sb3IgPSAnIzVlYjVlMCc7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSdcbiAgICAgICAgfSlcbn1cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignbmF2aWdhdG9yJywgJ3VzZXJBZ2VudCcpIHx8ICcnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgdGVzdCA9IFtdO1xudmFyIG5hdGl2ZVNvcnQgPSB0ZXN0LnNvcnQ7XG5cbi8vIElFOC1cbnZhciBGQUlMU19PTl9VTkRFRklORUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSk7XG4vLyBWOCBidWdcbnZhciBGQUlMU19PTl9OVUxMID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQobnVsbCk7XG59KTtcbi8vIE9sZCBXZWJLaXRcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnc29ydCcpO1xuXG52YXIgRk9SQ0VEID0gRkFJTFNfT05fVU5ERUZJTkVEIHx8ICFGQUlMU19PTl9OVUxMIHx8ICFTVFJJQ1RfTUVUSE9EO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNvcnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29ydFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pIHtcbiAgICByZXR1cm4gY29tcGFyZWZuID09PSB1bmRlZmluZWRcbiAgICAgID8gbmF0aXZlU29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpKVxuICAgICAgOiBuYXRpdmVTb3J0LmNhbGwodG9PYmplY3QodGhpcyksIGFGdW5jdGlvbihjb21wYXJlZm4pKTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcikpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==