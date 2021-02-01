(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./assets/main.js":
/*!************************!*\
  !*** ./assets/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_test_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/test.scss */ "./assets/styles/test.scss");
/* harmony import */ var _styles_test_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_test_scss__WEBPACK_IMPORTED_MODULE_2__);




var Routing = __webpack_require__(/*! ../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js-routes.json */ "./assets/js-routes.json");

var goods = document.getElementById('goods');

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

Routing.setRoutingData(Routes);
var filters = {};
document.addEventListener('DOMContentLoaded', function (event) {
  axios.post(Routing.generate('getGoods'), {
    filters: filters
  }).then(function (response) {
    Insert(response.data);
  });
});
document.addEventListener('click', function (event) {
  var target = event.target;

  if (target.type === "button" && target.className === "buttonAdd" && isNaN(parseInt(target.id)) === false) {
    var count = document.getElementById('goodAmount_' + target.id);

    if (count.value > 0) {
      axios.post(Routing.generate('addToCard', {
        id: target.id
      }), {
        'id': target.id,
        'amount': count.value
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

  if (target.type === "button" && target.id === "buttonSort") {
    var _category = document.getElementById('category');

    axios.post(Routing.generate('getGoods'), {
      filters: filters
    }).then(function (response) {
      target.value = 'Sorted';
      setTimeout(function () {
        target.value = "Sort";
      }, 2000);
      Insert(response.data);
    });
  }
});
var category = document.getElementById('category');
category.addEventListener('change', function (event) {
  filters["category"] = category[category.selectedIndex].value;
});
var minPrice = document.getElementById('minNum');
minPrice.addEventListener('change', function (event) {
  filters['price'] = {
    'min': minPrice.value,
    'max': filters.price.max
  };
});
var maxPrice = document.getElementById('maxNum');
maxPrice.addEventListener('change', function (event) {
  filters['price'] = {
    'min': filters.price.min,
    'max': maxPrice.value
  };
});

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

/***/ })

},[["./assets/main.js","runtime","vendors~admin~cart~main","vendors~main","admin~cart~main"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3Rlc3Quc2NzcyJdLCJuYW1lcyI6WyJSb3V0aW5nIiwicmVxdWlyZSIsIlJvdXRlcyIsImdvb2RzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImF4aW9zIiwic2V0Um91dGluZ0RhdGEiLCJmaWx0ZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicG9zdCIsImdlbmVyYXRlIiwidGhlbiIsInJlc3BvbnNlIiwiSW5zZXJ0IiwiZGF0YSIsInRhcmdldCIsInR5cGUiLCJjbGFzc05hbWUiLCJpc05hTiIsInBhcnNlSW50IiwiaWQiLCJjb3VudCIsInZhbHVlIiwic2V0VGltZW91dCIsImVycm9yIiwic3R5bGUiLCJkaXNwbGF5IiwiY2F0ZWdvcnkiLCJzZWxlY3RlZEluZGV4IiwibWluUHJpY2UiLCJwcmljZSIsIm1heCIsIm1heFByaWNlIiwibWluIiwibGFzdEVsZW1lbnRDaGlsZCIsInJlbW92ZUNoaWxkIiwiaSIsImxlbmd0aCIsImZvcm0iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsd0pBQUQsQ0FBdkI7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLGlEQUFELENBQXBCOztBQUNBLElBQUlFLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQVo7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHTCxtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQUNBRCxPQUFPLENBQUNPLGNBQVIsQ0FBdUJMLE1BQXZCO0FBRUEsSUFBSU0sT0FBTyxHQUFHLEVBQWQ7QUFFQUosUUFBUSxDQUFDSyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBVUMsS0FBVixF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c2Nzcyc7XG5cblxuY29uc3QgUm91dGluZyA9IHJlcXVpcmUoXCIuLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xubGV0IFJvdXRlcyA9IHJlcXVpcmUoJy4vanMtcm91dGVzLmpzb24nKTtcbmxldCBnb29kcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kcycpO1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xuXG5sZXQgZmlsdGVycyA9IHt9O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdnZXRHb29kcycpLCB7XG4gICAgICAgIGZpbHRlcnNcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBJbnNlcnQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidXR0b25BZGRcIiAmJiBpc05hTihwYXJzZUludCh0YXJnZXQuaWQpKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RBbW91bnRfJyArIHRhcmdldC5pZClcbiAgICAgICAgaWYgKGNvdW50LnZhbHVlID4gMCkge1xuICAgICAgICAgICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdhZGRUb0NhcmQnLCB7aWQ6IHRhcmdldC5pZH0pLCB7XG4gICAgICAgICAgICAgICAgJ2lkJzogdGFyZ2V0LmlkLFxuICAgICAgICAgICAgICAgICdhbW91bnQnOiBjb3VudC52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnZhbHVlID0gJ0FkZGVkJztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQudmFsdWUgPSBcIkFkZFwiXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JfJyArIHRhcmdldC5pZClcbiAgICAgICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnaW5oZXJpdCdcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBpZiAodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmlkID09PSBcImJ1dHRvblNvcnRcIikge1xuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKVxuICAgICAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksIHtcbiAgICAgICAgICAgIGZpbHRlcnNcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9ICdTb3J0ZWQnO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQudmFsdWUgPSBcIlNvcnRcIlxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgIEluc2VydChyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgfSlcbiAgICB9XG59KVxuXG5sZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKVxuY2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICBmaWx0ZXJzW1wiY2F0ZWdvcnlcIl0gPSBjYXRlZ29yeVtjYXRlZ29yeS5zZWxlY3RlZEluZGV4XS52YWx1ZVxufSlcblxubGV0IG1pblByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbk51bScpXG5taW5QcmljZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIGZpbHRlcnNbJ3ByaWNlJ10gPSB7XG4gICAgICAgICdtaW4nOiBtaW5QcmljZS52YWx1ZSxcbiAgICAgICAgJ21heCcgOiBmaWx0ZXJzLnByaWNlLm1heFxuICAgIH1cbn0pXG5cbmxldCBtYXhQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXhOdW0nKVxubWF4UHJpY2UuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICBmaWx0ZXJzWydwcmljZSddID0ge1xuICAgICAgICAnbWluJzogZmlsdGVycy5wcmljZS5taW4sXG4gICAgICAgICdtYXgnIDogbWF4UHJpY2UudmFsdWVcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBJbnNlcnQoZGF0YSl7XG4gICAgd2hpbGUgKGdvb2RzLmxhc3RFbGVtZW50Q2hpbGQpXG4gICAgICAgIGdvb2RzLnJlbW92ZUNoaWxkKGdvb2RzLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICBmb3JtLmlubmVySFRNTCA9IGRhdGFbaV1cbiAgICAgICAgZ29vZHMuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICB9XG59XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=