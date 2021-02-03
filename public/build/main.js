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
  }

  if (target.id === 'changePage') {
    page = target.dataset.page;
    axios.post(Routing.generate('getGoods'), {
      filters: filters,
      sorts: sorts,
      page: page
    }).then(function (response) {
      Insert(response.data);
      target.style.color = '#5eb5e0';
      setTimeout(function () {
        target.style.color = 'black';
        buttonFilter.value = "Filter";
      }, 2000);
    });
  }
}); // footer TODO refactor

var nextPage = document.getElementById('nextPage');
nextPage.addEventListener('click', function () {
  page += 1;
  axios.post(Routing.generate('getGoods'), {
    filters: filters,
    sorts: sorts,
    page: page
  }).then(function (response) {
    Insert(response.data);
    nextPage.style.color = '#5eb5e0';
    setTimeout(function () {
      nextPage.style.color = 'black';
      buttonFilter.value = "Filter";
    }, 2000);
  });
});
var prevPage = document.getElementById('prevPage');
prevPage.addEventListener('click', function () {
  page > 1 ? page -= 1 : page = 1;
  axios.post(Routing.generate('getGoods'), {
    filters: filters,
    sorts: sorts,
    page: page
  }).then(function (response) {
    Insert(response.data);
    prevPage.style.color = '#5eb5e0';
    setTimeout(function () {
      prevPage.style.color = 'black';
      buttonFilter.value = "Filter";
    }, 2000);
  });
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
}); // ########### BUTTONS ########### //
// ----------- GET DATA FILTER ----------- //

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyJSb3V0aW5nIiwicmVxdWlyZSIsIlJvdXRlcyIsImdvb2RzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImF4aW9zIiwic2V0Um91dGluZ0RhdGEiLCJmaWx0ZXJzIiwic29ydHMiLCJwYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicG9zdCIsImdlbmVyYXRlIiwidGhlbiIsInJlc3BvbnNlIiwiSW5zZXJ0IiwiZGF0YSIsInRhcmdldCIsInR5cGUiLCJjbGFzc05hbWUiLCJpc05hTiIsInBhcnNlSW50IiwiaWQiLCJjb3VudCIsInZhbHVlIiwiYmxvY2siLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInNldFRpbWVvdXQiLCJlcnJvciIsImRpc3BsYXkiLCJkYXRhc2V0IiwiY29sb3IiLCJidXR0b25GaWx0ZXIiLCJuZXh0UGFnZSIsInByZXZQYWdlIiwiYnV0dG9uRmlsdGVyQ2xlYXIiLCJtaW5QcmljZSIsIm1heFByaWNlIiwiY2F0ZWdvcnkiLCJzZWxlY3RlZEluZGV4IiwiYnV0dG9uUHJpY2VTb3J0Iiwic29ydCIsImJ1dHRvbkNvdW50U29ydCIsImJ1dHRvbkNsZWFyU29ydCIsInByaWNlIiwibWF4IiwibWluIiwibGFzdEVsZW1lbnRDaGlsZCIsInJlbW92ZUNoaWxkIiwiaSIsImxlbmd0aCIsImZvcm0iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1M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Ozs7Ozs7O0FDL0JELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRXhEO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHlDQUF5QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbmNvbnN0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcbmxldCBSb3V0ZXMgPSByZXF1aXJlKCcuL2pzLXJvdXRlcy5qc29uJyk7XG5sZXQgZ29vZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZHMnKTtcbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcblxubGV0IGZpbHRlcnMgPSB7fTtcbmxldCBzb3J0cyA9IHt9O1xubGV0IHBhZ2UgPSAxO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdnZXRHb29kcycpLCB7XG4gICAgICAgIHBhZ2VcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIEluc2VydChyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQudHlwZSA9PT0gXCJidXR0b25cIiAmJiB0YXJnZXQuY2xhc3NOYW1lID09PSBcImJ1dHRvbkFkZFwiICYmIGlzTmFOKHBhcnNlSW50KHRhcmdldC5pZCkpID09PSBmYWxzZSkge1xuICAgICAgICBsZXQgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZEFtb3VudF8nICsgdGFyZ2V0LmlkKVxuICAgICAgICBpZiAoY291bnQudmFsdWUgPiAwKSB7XG4gICAgICAgICAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2FkZFRvQ2FyZCcsIHtpZDogdGFyZ2V0LmlkfSksIHtcbiAgICAgICAgICAgICAgICAnaWQnOiB0YXJnZXQuaWQsXG4gICAgICAgICAgICAgICAgJ2Ftb3VudCc6IGNvdW50LnZhbHVlLFxuICAgICAgICAgICAgICAgIHBhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBibG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kXycrdGFyZ2V0LmlkKVxuICAgICAgICAgICAgICAgICAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2MyZmY4OCc7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9ICdBZGRlZCc7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnZhbHVlID0gXCJBZGRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JfJyArIHRhcmdldC5pZClcbiAgICAgICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnaW5oZXJpdCdcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0YXJnZXQuaWQgPT09ICdjaGFuZ2VQYWdlJyl7XG4gICAgICAgIHBhZ2UgPSB0YXJnZXQuZGF0YXNldC5wYWdlO1xuICAgICAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksIHtcbiAgICAgICAgICAgIGZpbHRlcnMsIHNvcnRzLCBwYWdlXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBJbnNlcnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmNvbG9yID0gJyM1ZWI1ZTAnO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgICAgICAgICBidXR0b25GaWx0ZXIudmFsdWUgPSBcIkZpbHRlclwiXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICB9KVxuICAgIH1cbn0pXG5cbi8vIGZvb3RlciBUT0RPIHJlZmFjdG9yXG5sZXQgbmV4dFBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dFBhZ2UnKVxubmV4dFBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcGFnZSArPSAxXG4gICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdnZXRHb29kcycpLCB7XG4gICAgICAgIGZpbHRlcnMsIHNvcnRzLCBwYWdlXG4gICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBJbnNlcnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICBuZXh0UGFnZS5zdHlsZS5jb2xvciA9ICcjNWViNWUwJztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5leHRQYWdlLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgICAgICBidXR0b25GaWx0ZXIudmFsdWUgPSBcIkZpbHRlclwiXG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSlcbn0pXG5cbmxldCBwcmV2UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2UGFnZScpXG5wcmV2UGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwYWdlID4gMSA/IHBhZ2UgLT0gMSA6IHBhZ2UgPSAxXG4gICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdnZXRHb29kcycpLCB7XG4gICAgICAgIGZpbHRlcnMsIHNvcnRzLCBwYWdlXG4gICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBJbnNlcnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICBwcmV2UGFnZS5zdHlsZS5jb2xvciA9ICcjNWViNWUwJztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByZXZQYWdlLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgICAgICBidXR0b25GaWx0ZXIudmFsdWUgPSBcIkZpbHRlclwiXG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSlcbn0pXG5cbi8vIC0tLS0tLS0tLS0tIEJVVFRPTlMgLS0tLS0tLS0tLS0gLy9cblxubGV0IGJ1dHRvbkZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25GaWx0ZXInKTtcbmJ1dHRvbkZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksIHtcbiAgICAgICAgZmlsdGVycywgc29ydHMsIHBhZ2U6IDFcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJ1dHRvbkZpbHRlci52YWx1ZSA9ICdGaWx0ZXJlZCc7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b25GaWx0ZXIudmFsdWUgPSBcIkZpbHRlclwiXG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIEluc2VydChyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxufSlcblxubGV0IGJ1dHRvbkZpbHRlckNsZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyRmlsdGVyJyk7XG5idXR0b25GaWx0ZXJDbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmaWx0ZXJzID0ge307XG4gICAgbWluUHJpY2UudmFsdWUgPSAwXG4gICAgbWF4UHJpY2UudmFsdWUgPSAwXG4gICAgY291bnQudmFsdWUgPSAxXG4gICAgY2F0ZWdvcnkuc2VsZWN0ZWRJbmRleCA9IDBcbiAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksIHtcbiAgICAgICAgZmlsdGVycywgc29ydHMsIHBhZ2U6IDFcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJ1dHRvbkZpbHRlckNsZWFyLnZhbHVlID0gJ1N1Y2Nlc3MnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uRmlsdGVyQ2xlYXIudmFsdWUgPSBcIkNsZWFyXCJcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgSW5zZXJ0KHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG59KVxuXG5sZXQgYnV0dG9uUHJpY2VTb3J0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaWNlU29ydCcpO1xuYnV0dG9uUHJpY2VTb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNvcnRzID0geyd0eXBlJzogJ3ByaWNlJywgJ29yZGVyJzogYnV0dG9uUHJpY2VTb3J0LmRhdGFzZXQuc29ydH1cbiAgICBidXR0b25QcmljZVNvcnQuZGF0YXNldC5zb3J0ID09PSBcIkFTQ1wiID8gYnV0dG9uUHJpY2VTb3J0LmRhdGFzZXQuc29ydCA9IFwiREVTQ1wiIDogYnV0dG9uUHJpY2VTb3J0LmRhdGFzZXQuc29ydCA9IFwiQVNDXCJcbiAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksIHtcbiAgICAgICAgZmlsdGVycywgc29ydHMsIHBhZ2U6IDFcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJ1dHRvblByaWNlU29ydC52YWx1ZSA9ICdTb3J0ZWQnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uUHJpY2VTb3J0LnZhbHVlID0gXCJTb3J0IGJ5IHByaWNlXCJcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgSW5zZXJ0KHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG59KVxuXG5cbmxldCBidXR0b25Db3VudFNvcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRTb3J0Jyk7XG5idXR0b25Db3VudFNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc29ydHMgPSB7J3R5cGUnOiAnY291bnQnLCAnb3JkZXInOiBidXR0b25Db3VudFNvcnQuZGF0YXNldC5zb3J0fVxuICAgIGJ1dHRvbkNvdW50U29ydC5kYXRhc2V0LnNvcnQgPT09IFwiQVNDXCIgPyBidXR0b25Db3VudFNvcnQuZGF0YXNldC5zb3J0ID0gXCJERVNDXCIgOiBidXR0b25Db3VudFNvcnQuZGF0YXNldC5zb3J0ID0gXCJBU0NcIlxuICAgIGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnZ2V0R29vZHMnKSwge1xuICAgICAgICBmaWx0ZXJzLCBzb3J0cywgcGFnZTogMVxuICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgYnV0dG9uQ291bnRTb3J0LnZhbHVlID0gJ1NvcnRlZCc7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b25Db3VudFNvcnQudmFsdWUgPSBcIlNvcnQgYnkgY291bnRcIlxuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICBJbnNlcnQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbn0pXG5cblxubGV0IGJ1dHRvbkNsZWFyU29ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhclNvcnQnKTtcbmJ1dHRvbkNsZWFyU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzb3J0cyA9IHt9O1xuICAgIGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnZ2V0R29vZHMnKSwge1xuICAgICAgICBmaWx0ZXJzLCBzb3J0cywgcGFnZTogMVxuICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgYnV0dG9uQ2xlYXJTb3J0LnZhbHVlID0gJ1N1Y2Nlc3MnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uQ2xlYXJTb3J0LnZhbHVlID0gXCJDbGVhclwiXG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgIEluc2VydChyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxufSlcblxuLy8gIyMjIyMjIyMjIyMgQlVUVE9OUyAjIyMjIyMjIyMjIyAvL1xuXG5cbi8vIC0tLS0tLS0tLS0tIEdFVCBEQVRBIEZJTFRFUiAtLS0tLS0tLS0tLSAvL1xuXG5sZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKVxuY2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZmlsdGVyc1tcImNhdGVnb3J5XCJdID0gY2F0ZWdvcnlbY2F0ZWdvcnkuc2VsZWN0ZWRJbmRleF0uaWRcbn0pXG5cbmxldCBtaW5QcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW5OdW0nKVxubWluUHJpY2UuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbGV0IHByaWNlID0gZmlsdGVycy5wcmljZSA/IGZpbHRlcnMucHJpY2UubWF4IDogbWF4UHJpY2UudmFsdWVcbiAgICBmaWx0ZXJzW1wicHJpY2VcIl0gPSB7XG4gICAgICAgICdtaW4nOiBtaW5QcmljZS52YWx1ZSxcbiAgICAgICAgJ21heCc6IHByaWNlXG4gICAgfVxufSlcblxubGV0IG1heFByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heE51bScpXG5tYXhQcmljZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBsZXQgcHJpY2UgPSBmaWx0ZXJzLnByaWNlID8gZmlsdGVycy5wcmljZS5taW4gOiBtaW5QcmljZS52YWx1ZVxuICAgIGZpbHRlcnNbXCJwcmljZVwiXSA9IHtcbiAgICAgICAgJ21pbic6IHByaWNlLFxuICAgICAgICAnbWF4JzogbWF4UHJpY2UudmFsdWVcbiAgICB9XG59KVxuXG5sZXQgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluQ291bnQnKVxuY291bnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGZpbHRlcnNbXCJtaW5Db3VudFwiXSA9IGNvdW50LnZhbHVlXG59KVxuXG4vLyAjIyMjIyMjIyMjIyBHRVQgREFUQSBGSUxURVIgIyMjIyMjIyMjIyMgLy9cblxuXG5mdW5jdGlvbiBJbnNlcnQoZGF0YSkge1xuICAgIHdoaWxlIChnb29kcy5sYXN0RWxlbWVudENoaWxkKVxuICAgICAgICBnb29kcy5yZW1vdmVDaGlsZChnb29kcy5sYXN0RWxlbWVudENoaWxkKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgZm9ybS5pbm5lckhUTUwgPSBkYXRhW2ldXG4gICAgICAgIGdvb2RzLmFwcGVuZENoaWxkKGZvcm0pXG4gICAgfVxufVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCduYXZpZ2F0b3InLCAndXNlckFnZW50JykgfHwgJyc7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciB0ZXN0ID0gW107XG52YXIgbmF0aXZlU29ydCA9IHRlc3Quc29ydDtcblxuLy8gSUU4LVxudmFyIEZBSUxTX09OX1VOREVGSU5FRCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdGVzdC5zb3J0KHVuZGVmaW5lZCk7XG59KTtcbi8vIFY4IGJ1Z1xudmFyIEZBSUxTX09OX05VTEwgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHRlc3Quc29ydChudWxsKTtcbn0pO1xuLy8gT2xkIFdlYktpdFxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdzb3J0Jyk7XG5cbnZhciBGT1JDRUQgPSBGQUlMU19PTl9VTkRFRklORUQgfHwgIUZBSUxTX09OX05VTEwgfHwgIVNUUklDVF9NRVRIT0Q7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuc29ydGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb3J0XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmVmbikge1xuICAgIHJldHVybiBjb21wYXJlZm4gPT09IHVuZGVmaW5lZFxuICAgICAgPyBuYXRpdmVTb3J0LmNhbGwodG9PYmplY3QodGhpcykpXG4gICAgICA6IG5hdGl2ZVNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSwgYUZ1bmN0aW9uKGNvbXBhcmVmbikpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICAodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJyA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9