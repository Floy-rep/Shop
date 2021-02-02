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
/* harmony import */ var _styles_test_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/test.scss */ "./assets/styles/test.scss");
/* harmony import */ var _styles_test_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_test_scss__WEBPACK_IMPORTED_MODULE_3__);





var Routing = __webpack_require__(/*! ../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js-routes.json */ "./assets/js-routes.json");

var goods = document.getElementById('goods');

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

Routing.setRoutingData(Routes);
var filters = {};
var sorts = {};
document.addEventListener('DOMContentLoaded', function (event) {
  axios.post(Routing.generate('getGoods'), {}).then(function (response) {
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
        'amount': _count.value
      }).then(function (response) {
        target.value = 'Added';
        setTimeout(function () {
          target.value = "Add";
        }, 2000);
      });
    } else {
      var error = document.getElementById('error_' + target.id);
      error.style.display = 'inherit';
      setTimeout(function () {
        error.style.display = 'none';
      }, 2000);
    }
  }
}); // ----------- BUTTONS ----------- //

var buttonFilter = document.getElementById('buttonFilter');
buttonFilter.addEventListener('click', function () {
  axios.post(Routing.generate('getGoods'), {
    filters: filters,
    sorts: sorts
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
    sorts: sorts
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
    sorts: sorts
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
    sorts: sorts
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
    sorts: sorts
  }).then(function (response) {
    buttonClearSort.value = 'Success';
    setTimeout(function () {
      buttonClearSort.value = "Clear";
    }, 2000);
    Insert(response.data);
  });
}); // ########### BUTTONS ########### //
// ----------- GET DATA FILTER ----------- //

var category = document.getElementById('category');
category.addEventListener('change', function (event) {
  filters["category"] = category[category.selectedIndex].value;
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
}); // ########### GET DATA FILTER ########### //

function Insert(data) {
  while (goods.lastElementChild) {
    goods.removeChild(goods.lastElementChild);
  }

  for (var i = 0; i < data.length; i++) {
    var form = document.createElement('form');
    form.innerHTML = data[i];
    goods.appendChild(form);
  }
}

/***/ }),

/***/ "./assets/styles/test.scss":
/*!*********************************!*\
  !*** ./assets/styles/test.scss ***!
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3Rlc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyJSb3V0aW5nIiwicmVxdWlyZSIsIlJvdXRlcyIsImdvb2RzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImF4aW9zIiwic2V0Um91dGluZ0RhdGEiLCJmaWx0ZXJzIiwic29ydHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwb3N0IiwiZ2VuZXJhdGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJJbnNlcnQiLCJkYXRhIiwidGFyZ2V0IiwidHlwZSIsImNsYXNzTmFtZSIsImlzTmFOIiwicGFyc2VJbnQiLCJpZCIsImNvdW50IiwidmFsdWUiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJzdHlsZSIsImRpc3BsYXkiLCJidXR0b25GaWx0ZXIiLCJidXR0b25GaWx0ZXJDbGVhciIsIm1pblByaWNlIiwibWF4UHJpY2UiLCJjYXRlZ29yeSIsInNlbGVjdGVkSW5kZXgiLCJidXR0b25QcmljZVNvcnQiLCJkYXRhc2V0Iiwic29ydCIsImJ1dHRvbkNvdW50U29ydCIsImJ1dHRvbkNsZWFyU29ydCIsInByaWNlIiwibWF4IiwibWluIiwibGFzdEVsZW1lbnRDaGlsZCIsInJlbW92ZUNoaWxkIiwiaSIsImxlbmd0aCIsImZvcm0iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJ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QUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL3Rlc3Quc2Nzcyc7XG5cblxuY29uc3QgUm91dGluZyA9IHJlcXVpcmUoXCIuLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xubGV0IFJvdXRlcyA9IHJlcXVpcmUoJy4vanMtcm91dGVzLmpzb24nKTtcbmxldCBnb29kcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kcycpO1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xuXG5sZXQgZmlsdGVycyA9IHt9O1xubGV0IHNvcnRzID0ge307XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksIHt9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIEluc2VydChyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQudHlwZSA9PT0gXCJidXR0b25cIiAmJiB0YXJnZXQuY2xhc3NOYW1lID09PSBcImJ1dHRvbkFkZFwiICYmIGlzTmFOKHBhcnNlSW50KHRhcmdldC5pZCkpID09PSBmYWxzZSkge1xuICAgICAgICBsZXQgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZEFtb3VudF8nICsgdGFyZ2V0LmlkKVxuICAgICAgICBpZiAoY291bnQudmFsdWUgPiAwKSB7XG4gICAgICAgICAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2FkZFRvQ2FyZCcsIHtpZDogdGFyZ2V0LmlkfSksIHtcbiAgICAgICAgICAgICAgICAnaWQnOiB0YXJnZXQuaWQsXG4gICAgICAgICAgICAgICAgJ2Ftb3VudCc6IGNvdW50LnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQudmFsdWUgPSAnQWRkZWQnO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IFwiQWRkXCJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvcl8nICsgdGFyZ2V0LmlkKVxuICAgICAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdpbmhlcml0J1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG4vLyAtLS0tLS0tLS0tLSBCVVRUT05TIC0tLS0tLS0tLS0tIC8vXG5cbmxldCBidXR0b25GaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uRmlsdGVyJyk7XG5idXR0b25GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdnZXRHb29kcycpLCB7XG4gICAgICAgIGZpbHRlcnMsIHNvcnRzXG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBidXR0b25GaWx0ZXIudmFsdWUgPSAnRmlsdGVyZWQnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uRmlsdGVyLnZhbHVlID0gXCJGaWx0ZXJcIlxuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICBJbnNlcnQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbn0pXG5cbmxldCBidXR0b25GaWx0ZXJDbGVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhckZpbHRlcicpO1xuYnV0dG9uRmlsdGVyQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZmlsdGVycyA9IHt9O1xuICAgIG1pblByaWNlLnZhbHVlID0gMFxuICAgIG1heFByaWNlLnZhbHVlID0gMFxuICAgIGNvdW50LnZhbHVlID0gMVxuICAgIGNhdGVnb3J5LnNlbGVjdGVkSW5kZXggPSAwXG4gICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdnZXRHb29kcycpLCB7XG4gICAgICAgIGZpbHRlcnMsIHNvcnRzXG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBidXR0b25GaWx0ZXJDbGVhci52YWx1ZSA9ICdTdWNjZXNzJztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbkZpbHRlckNsZWFyLnZhbHVlID0gXCJDbGVhclwiXG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIEluc2VydChyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxufSlcblxubGV0IGJ1dHRvblByaWNlU29ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmljZVNvcnQnKTtcbmJ1dHRvblByaWNlU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzb3J0cyA9IHsndHlwZSc6ICdwcmljZScsICdvcmRlcic6IGJ1dHRvblByaWNlU29ydC5kYXRhc2V0LnNvcnR9XG4gICAgYnV0dG9uUHJpY2VTb3J0LmRhdGFzZXQuc29ydCA9PT0gXCJBU0NcIiA/IGJ1dHRvblByaWNlU29ydC5kYXRhc2V0LnNvcnQgPSBcIkRFU0NcIiA6IGJ1dHRvblByaWNlU29ydC5kYXRhc2V0LnNvcnQgPSBcIkFTQ1wiXG4gICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdnZXRHb29kcycpLCB7XG4gICAgICAgIGZpbHRlcnMsIHNvcnRzXG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBidXR0b25QcmljZVNvcnQudmFsdWUgPSAnU29ydGVkJztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvblByaWNlU29ydC52YWx1ZSA9IFwiU29ydCBieSBwcmljZVwiXG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIEluc2VydChyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxufSlcblxuXG5sZXQgYnV0dG9uQ291bnRTb3J0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50U29ydCcpO1xuYnV0dG9uQ291bnRTb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNvcnRzID0geyd0eXBlJzogJ2NvdW50JywgJ29yZGVyJzogYnV0dG9uQ291bnRTb3J0LmRhdGFzZXQuc29ydH1cbiAgICBidXR0b25Db3VudFNvcnQuZGF0YXNldC5zb3J0ID09PSBcIkFTQ1wiID8gYnV0dG9uQ291bnRTb3J0LmRhdGFzZXQuc29ydCA9IFwiREVTQ1wiIDogYnV0dG9uQ291bnRTb3J0LmRhdGFzZXQuc29ydCA9IFwiQVNDXCJcbiAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksIHtcbiAgICAgICAgZmlsdGVycywgc29ydHNcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJ1dHRvbkNvdW50U29ydC52YWx1ZSA9ICdTb3J0ZWQnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uQ291bnRTb3J0LnZhbHVlID0gXCJTb3J0IGJ5IGNvdW50XCJcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgSW5zZXJ0KHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG59KVxuXG5cbmxldCBidXR0b25DbGVhclNvcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXJTb3J0Jyk7XG5idXR0b25DbGVhclNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc29ydHMgPSB7fTtcbiAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksIHtcbiAgICAgICAgZmlsdGVycywgc29ydHNcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJ1dHRvbkNsZWFyU29ydC52YWx1ZSA9ICdTdWNjZXNzJztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbkNsZWFyU29ydC52YWx1ZSA9IFwiQ2xlYXJcIlxuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICBJbnNlcnQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbn0pXG5cbi8vICMjIyMjIyMjIyMjIEJVVFRPTlMgIyMjIyMjIyMjIyMgLy9cblxuXG4vLyAtLS0tLS0tLS0tLSBHRVQgREFUQSBGSUxURVIgLS0tLS0tLS0tLS0gLy9cblxubGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5JylcbmNhdGVnb3J5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGZpbHRlcnNbXCJjYXRlZ29yeVwiXSA9IGNhdGVnb3J5W2NhdGVnb3J5LnNlbGVjdGVkSW5kZXhdLnZhbHVlXG59KVxuXG5sZXQgbWluUHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluTnVtJylcbm1pblByaWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGxldCBwcmljZSA9IGZpbHRlcnMucHJpY2UgPyBmaWx0ZXJzLnByaWNlLm1heCA6IG1heFByaWNlLnZhbHVlXG4gICAgZmlsdGVyc1tcInByaWNlXCJdID0ge1xuICAgICAgICAnbWluJzogbWluUHJpY2UudmFsdWUsXG4gICAgICAgICdtYXgnOiBwcmljZVxuICAgIH1cbn0pXG5cbmxldCBtYXhQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXhOdW0nKVxubWF4UHJpY2UuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbGV0IHByaWNlID0gZmlsdGVycy5wcmljZSA/IGZpbHRlcnMucHJpY2UubWluIDogbWluUHJpY2UudmFsdWVcbiAgICBmaWx0ZXJzW1wicHJpY2VcIl0gPSB7XG4gICAgICAgICdtaW4nOiBwcmljZSxcbiAgICAgICAgJ21heCc6IG1heFByaWNlLnZhbHVlXG4gICAgfVxufSlcblxubGV0IGNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbkNvdW50JylcbmNvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBmaWx0ZXJzW1wibWluQ291bnRcIl0gPSBjb3VudC52YWx1ZVxufSlcblxuLy8gIyMjIyMjIyMjIyMgR0VUIERBVEEgRklMVEVSICMjIyMjIyMjIyMjIC8vXG5cblxuZnVuY3Rpb24gSW5zZXJ0KGRhdGEpIHtcbiAgICB3aGlsZSAoZ29vZHMubGFzdEVsZW1lbnRDaGlsZClcbiAgICAgICAgZ29vZHMucmVtb3ZlQ2hpbGQoZ29vZHMubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgIGZvcm0uaW5uZXJIVE1MID0gZGF0YVtpXVxuICAgICAgICBnb29kcy5hcHBlbmRDaGlsZChmb3JtKVxuICAgIH1cbn1cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignbmF2aWdhdG9yJywgJ3VzZXJBZ2VudCcpIHx8ICcnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgdGVzdCA9IFtdO1xudmFyIG5hdGl2ZVNvcnQgPSB0ZXN0LnNvcnQ7XG5cbi8vIElFOC1cbnZhciBGQUlMU19PTl9VTkRFRklORUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSk7XG4vLyBWOCBidWdcbnZhciBGQUlMU19PTl9OVUxMID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQobnVsbCk7XG59KTtcbi8vIE9sZCBXZWJLaXRcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnc29ydCcpO1xuXG52YXIgRk9SQ0VEID0gRkFJTFNfT05fVU5ERUZJTkVEIHx8ICFGQUlMU19PTl9OVUxMIHx8ICFTVFJJQ1RfTUVUSE9EO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNvcnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29ydFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pIHtcbiAgICByZXR1cm4gY29tcGFyZWZuID09PSB1bmRlZmluZWRcbiAgICAgID8gbmF0aXZlU29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpKVxuICAgICAgOiBuYXRpdmVTb3J0LmNhbGwodG9PYmplY3QodGhpcyksIGFGdW5jdGlvbihjb21wYXJlZm4pKTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcikpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==