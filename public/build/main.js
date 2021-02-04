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


  if (target.id === 'changePage') {
    page = target.dataset.page;
    Paginate(target, page);
  }

  if (target.id === 'nextPage') {
    var maxPages = document.getElementById('pages').childElementCount - 2;
    page < maxPages ? page += 1 : page = maxPages;
    Paginate(target, page);
  }

  if (target.id === 'prevPage') {
    page > 1 ? page -= 1 : page = 1;
    Paginate(target, page);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyJSb3V0aW5nIiwicmVxdWlyZSIsIlJvdXRlcyIsImdvb2RzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImF4aW9zIiwic2V0Um91dGluZ0RhdGEiLCJmaWx0ZXJzIiwic29ydHMiLCJwYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicG9zdCIsImdlbmVyYXRlIiwidGhlbiIsInJlc3BvbnNlIiwiSW5zZXJ0IiwiZGF0YSIsInRhcmdldCIsInR5cGUiLCJjbGFzc05hbWUiLCJpc05hTiIsInBhcnNlSW50IiwiaWQiLCJjb3VudCIsInZhbHVlIiwiYmxvY2siLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInNldFRpbWVvdXQiLCJlcnJvciIsImRpc3BsYXkiLCJkYXRhc2V0IiwiUGFnaW5hdGUiLCJtYXhQYWdlcyIsImNoaWxkRWxlbWVudENvdW50IiwiYnV0dG9uRmlsdGVyIiwiYnV0dG9uRmlsdGVyQ2xlYXIiLCJtaW5QcmljZSIsIm1heFByaWNlIiwiY2F0ZWdvcnkiLCJzZWxlY3RlZEluZGV4IiwiYnV0dG9uUHJpY2VTb3J0Iiwic29ydCIsImJ1dHRvbkNvdW50U29ydCIsImJ1dHRvbkNsZWFyU29ydCIsInByaWNlIiwibWF4IiwibWluIiwibGFzdEVsZW1lbnRDaGlsZCIsInJlbW92ZUNoaWxkIiwiaSIsImxlbmd0aCIsImZvcm0iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJwYWdpbmF0b3IiLCJjb2xvciIsInRleHREZWNvcmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHdKQUFELENBQXZCOztBQUNBLElBQUlDLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyxpREFBRCxDQUFwQjs7QUFDQSxJQUFJRSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFaOztBQUNBLElBQU1DLEtBQUssR0FBR0wsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFyQjs7QUFDQUQsT0FBTyxDQUFDTyxjQUFSLENBQXVCTCxNQUF2QjtBQUVBLElBQUlNLE9BQU8sR0FBRyxFQUFkO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxJQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUVBTixRQUFRLENBQUNPLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxVQUFVQyxLQUFWLEVBQWlCO0FBQzNETixPQUFLLENBQUNPLElBQU4sQ0FBV2IsT0FBTyxDQUFDYyxRQUFSLENBQWlCLFVBQWpCLENBQVgsRUFBeUM7QUFDckNKLFFBQUksRUFBSkE7QUFEcUMsR0FBekMsRUFHS0ssSUFITCxDQUdVLFVBQVVDLFFBQVYsRUFBb0I7QUFDdEJDLFVBQU0sQ0FBQ0QsUUFBUSxDQUFDRSxJQUFWLENBQU47QUFDSCxHQUxMO0FBTUgsQ0FQRDtBQVNBZCxRQUFRLENBQUNPLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQVVDLEtBQVYsRUFBaUI7QUFDaEQsTUFBSU8sTUFBTSxHQUFHUCxLQUFLLENBQUNPLE1BQW5COztBQUNBLE1BQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQixRQUFoQixJQUE0QkQsTUFBTSxDQUFDRSxTQUFQLEtBQXFCLFdBQWpELElBQWdFQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0osTUFBTSxDQUFDSyxFQUFSLENBQVQsQ0FBTCxLQUErQixLQUFu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QUFNLENBQUNTLEtBQVAsQ0FBYStCLEtBQWIsR0FBcUIsU0FBckI7QUFDQXhDLFVBQU0sQ0FBQ1MsS0FBUCxDQUFhZ0MsY0FBYixHQUE4QixNQUE5QjtBQUNILEdBUEw7QUFRSCxDOzs7Ozs7Ozs7OztBQzVNRCx1Qzs7Ozs7Ozs7Ozs7QUNBQSxpQkFBaUIsbUJBQU8sQ0FBQyxtRkFBMkI7O0FBRXBEOzs7Ozs7Ozs7Ozs7O0FDRmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGdCQUFnQixtQkFBTyxDQUFDLCtFQUF5QjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRywrQ0FBK0M7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQy9CRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsZ0JBQWdCLG1CQUFPLENBQUMsNkZBQWdDOztBQUV4RDtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyx5Q0FBeUM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xuXG5jb25zdCBSb3V0aW5nID0gcmVxdWlyZShcIi4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XG5sZXQgUm91dGVzID0gcmVxdWlyZSgnLi9qcy1yb3V0ZXMuanNvbicpO1xubGV0IGdvb2RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RzJyk7XG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XG5cbmxldCBmaWx0ZXJzID0ge307XG5sZXQgc29ydHMgPSB7fTtcbmxldCBwYWdlID0gMTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnZ2V0R29vZHMnKSwge1xuICAgICAgICBwYWdlXG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBJbnNlcnQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidXR0b25BZGRcIiAmJiBpc05hTihwYXJzZUludCh0YXJnZXQuaWQpKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RBbW91bnRfJyArIHRhcmdldC5pZClcbiAgICAgICAgaWYgKGNvdW50LnZhbHVlID4gMCkge1xuICAgICAgICAgICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdhZGRUb0NhcmQnLCB7aWQ6IHRhcmdldC5pZH0pLCB7XG4gICAgICAgICAgICAgICAgJ2lkJzogdGFyZ2V0LmlkLFxuICAgICAgICAgICAgICAgICdhbW91bnQnOiBjb3VudC52YWx1ZSxcbiAgICAgICAgICAgICAgICBwYWdlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZF8nK3RhcmdldC5pZClcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjMmZmODgnO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQudmFsdWUgPSAnQWRkZWQnO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9IFwiQWRkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yXycgKyB0YXJnZXQuaWQpXG4gICAgICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2luaGVyaXQnXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tIFBBR0lOQVRPUiAtLS0tLS0tLS0tLSAvL1xuICAgIGlmICh0YXJnZXQuaWQgPT09ICdjaGFuZ2VQYWdlJyl7XG4gICAgICAgIHBhZ2UgPSB0YXJnZXQuZGF0YXNldC5wYWdlO1xuICAgICAgICBQYWdpbmF0ZSh0YXJnZXQsIHBhZ2UpXG4gICAgfVxuICAgIGlmICh0YXJnZXQuaWQgPT09ICduZXh0UGFnZScpe1xuICAgICAgICBsZXQgbWF4UGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZXMnKS5jaGlsZEVsZW1lbnRDb3VudCAtIDJcbiAgICAgICAgcGFnZSA8IG1heFBhZ2VzID8gcGFnZSArPSAxIDogcGFnZSA9IG1heFBhZ2VzXG4gICAgICAgIFBhZ2luYXRlKHRhcmdldCwgcGFnZSlcbiAgICB9XG4gICAgaWYgKHRhcmdldC5pZCA9PT0gJ3ByZXZQYWdlJyl7XG4gICAgICAgIHBhZ2UgPiAxID8gcGFnZSAtPSAxIDogcGFnZSA9IDFcbiAgICAgICAgUGFnaW5hdGUodGFyZ2V0LCBwYWdlKVxuICAgIH1cbn0pXG5cbi8vIC0tLS0tLS0tLS0tIEJVVFRPTlMgLS0tLS0tLS0tLS0gLy9cbmxldCBidXR0b25GaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uRmlsdGVyJyk7XG5idXR0b25GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdnZXRHb29kcycpLCB7XG4gICAgICAgIGZpbHRlcnMsIHNvcnRzLCBwYWdlOiAxXG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBidXR0b25GaWx0ZXIudmFsdWUgPSAnRmlsdGVyZWQnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uRmlsdGVyLnZhbHVlID0gXCJGaWx0ZXJcIlxuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICBJbnNlcnQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbn0pXG5cbmxldCBidXR0b25GaWx0ZXJDbGVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhckZpbHRlcicpO1xuYnV0dG9uRmlsdGVyQ2xlYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZmlsdGVycyA9IHt9O1xuICAgIG1pblByaWNlLnZhbHVlID0gMFxuICAgIG1heFByaWNlLnZhbHVlID0gMFxuICAgIGNvdW50LnZhbHVlID0gMVxuICAgIGNhdGVnb3J5LnNlbGVjdGVkSW5kZXggPSAwXG4gICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdnZXRHb29kcycpLCB7XG4gICAgICAgIGZpbHRlcnMsIHNvcnRzLCBwYWdlOiAxXG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBidXR0b25GaWx0ZXJDbGVhci52YWx1ZSA9ICdTdWNjZXNzJztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbkZpbHRlckNsZWFyLnZhbHVlID0gXCJDbGVhclwiXG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIEluc2VydChyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxufSlcblxubGV0IGJ1dHRvblByaWNlU29ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmljZVNvcnQnKTtcbmJ1dHRvblByaWNlU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzb3J0cyA9IHsndHlwZSc6ICdwcmljZScsICdvcmRlcic6IGJ1dHRvblByaWNlU29ydC5kYXRhc2V0LnNvcnR9XG4gICAgYnV0dG9uUHJpY2VTb3J0LmRhdGFzZXQuc29ydCA9PT0gXCJBU0NcIiA/IGJ1dHRvblByaWNlU29ydC5kYXRhc2V0LnNvcnQgPSBcIkRFU0NcIiA6IGJ1dHRvblByaWNlU29ydC5kYXRhc2V0LnNvcnQgPSBcIkFTQ1wiXG4gICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdnZXRHb29kcycpLCB7XG4gICAgICAgIGZpbHRlcnMsIHNvcnRzLCBwYWdlOiAxXG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBidXR0b25QcmljZVNvcnQudmFsdWUgPSAnU29ydGVkJztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvblByaWNlU29ydC52YWx1ZSA9IFwiU29ydCBieSBwcmljZVwiXG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIEluc2VydChyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxufSlcblxuXG5sZXQgYnV0dG9uQ291bnRTb3J0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50U29ydCcpO1xuYnV0dG9uQ291bnRTb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNvcnRzID0geyd0eXBlJzogJ2NvdW50JywgJ29yZGVyJzogYnV0dG9uQ291bnRTb3J0LmRhdGFzZXQuc29ydH1cbiAgICBidXR0b25Db3VudFNvcnQuZGF0YXNldC5zb3J0ID09PSBcIkFTQ1wiID8gYnV0dG9uQ291bnRTb3J0LmRhdGFzZXQuc29ydCA9IFwiREVTQ1wiIDogYnV0dG9uQ291bnRTb3J0LmRhdGFzZXQuc29ydCA9IFwiQVNDXCJcbiAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksIHtcbiAgICAgICAgZmlsdGVycywgc29ydHMsIHBhZ2U6IDFcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJ1dHRvbkNvdW50U29ydC52YWx1ZSA9ICdTb3J0ZWQnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uQ291bnRTb3J0LnZhbHVlID0gXCJTb3J0IGJ5IGNvdW50XCJcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgSW5zZXJ0KHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG59KVxuXG5cbmxldCBidXR0b25DbGVhclNvcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXJTb3J0Jyk7XG5idXR0b25DbGVhclNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc29ydHMgPSB7fTtcbiAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksIHtcbiAgICAgICAgZmlsdGVycywgc29ydHMsIHBhZ2U6IDFcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJ1dHRvbkNsZWFyU29ydC52YWx1ZSA9ICdTdWNjZXNzJztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbkNsZWFyU29ydC52YWx1ZSA9IFwiQ2xlYXJcIlxuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICBJbnNlcnQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbn0pXG5cblxuLy8gLS0tLS0tLS0tLS0gR0VUIERBVEEgRklMVEVSIC0tLS0tLS0tLS0tIC8vXG5sZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKVxuY2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZmlsdGVyc1tcImNhdGVnb3J5XCJdID0gY2F0ZWdvcnlbY2F0ZWdvcnkuc2VsZWN0ZWRJbmRleF0uaWRcbn0pXG5cbmxldCBtaW5QcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW5OdW0nKVxubWluUHJpY2UuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbGV0IHByaWNlID0gZmlsdGVycy5wcmljZSA/IGZpbHRlcnMucHJpY2UubWF4IDogbWF4UHJpY2UudmFsdWVcbiAgICBmaWx0ZXJzW1wicHJpY2VcIl0gPSB7XG4gICAgICAgICdtaW4nOiBtaW5QcmljZS52YWx1ZSxcbiAgICAgICAgJ21heCc6IHByaWNlXG4gICAgfVxufSlcblxubGV0IG1heFByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heE51bScpXG5tYXhQcmljZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBsZXQgcHJpY2UgPSBmaWx0ZXJzLnByaWNlID8gZmlsdGVycy5wcmljZS5taW4gOiBtaW5QcmljZS52YWx1ZVxuICAgIGZpbHRlcnNbXCJwcmljZVwiXSA9IHtcbiAgICAgICAgJ21pbic6IHByaWNlLFxuICAgICAgICAnbWF4JzogbWF4UHJpY2UudmFsdWVcbiAgICB9XG59KVxuXG5sZXQgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluQ291bnQnKVxuY291bnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGZpbHRlcnNbXCJtaW5Db3VudFwiXSA9IGNvdW50LnZhbHVlXG59KVxuXG5cbmZ1bmN0aW9uIEluc2VydChkYXRhKSB7XG4gICAgd2hpbGUgKGdvb2RzLmxhc3RFbGVtZW50Q2hpbGQpXG4gICAgICAgIGdvb2RzLnJlbW92ZUNoaWxkKGdvb2RzLmxhc3RFbGVtZW50Q2hpbGQpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICBmb3JtLmlubmVySFRNTCA9IGRhdGFbaV1cbiAgICAgICAgZ29vZHMuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICB9XG5cbiAgICBsZXQgcGFnaW5hdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2luYXRvcicpO1xuICAgIHBhZ2luYXRvci5pbm5lckhUTUwgPSBkYXRhW2RhdGEubGVuZ3RoLTFdO1xufVxuXG5mdW5jdGlvbiBQYWdpbmF0ZSh0YXJnZXQsIHBhZ2Upe1xuICAgIHRhcmdldC5zdHlsZS5jb2xvciA9ICdkb2RnZXJibHVlJztcbiAgICB0YXJnZXQuc3R5bGUudGV4dERlY29yYXRpb24gPSAndW5kZXJsaW5lJ1xuICAgIGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnZ2V0R29vZHMnKSwge1xuICAgICAgICBmaWx0ZXJzLCBzb3J0cywgcGFnZVxuICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgSW5zZXJ0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmNvbG9yID0gJyM1ZWI1ZTAnO1xuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnXG4gICAgICAgIH0pXG59XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ25hdmlnYXRvcicsICd1c2VyQWdlbnQnKSB8fCAnJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIHRlc3QgPSBbXTtcbnZhciBuYXRpdmVTb3J0ID0gdGVzdC5zb3J0O1xuXG4vLyBJRTgtXG52YXIgRkFJTFNfT05fVU5ERUZJTkVEID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQodW5kZWZpbmVkKTtcbn0pO1xuLy8gVjggYnVnXG52YXIgRkFJTFNfT05fTlVMTCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdGVzdC5zb3J0KG51bGwpO1xufSk7XG4vLyBPbGQgV2ViS2l0XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ3NvcnQnKTtcblxudmFyIEZPUkNFRCA9IEZBSUxTX09OX1VOREVGSU5FRCB8fCAhRkFJTFNfT05fTlVMTCB8fCAhU1RSSUNUX01FVEhPRDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zb3J0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvcnRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/IG5hdGl2ZVNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSlcbiAgICAgIDogbmF0aXZlU29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpLCBhRnVuY3Rpb24oY29tcGFyZWZuKSk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=