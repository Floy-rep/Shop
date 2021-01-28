(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./assets/main.js":
/*!************************!*\
  !*** ./assets/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_7__);









var Routing = __webpack_require__(/*! ../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js-routes.json */ "./assets/js-routes.json");

var goods = document.getElementById('goods');
Routing.setRoutingData(Routes);
document.addEventListener('DOMContentLoaded', function (event) {
  new Promise(function (resolve, reject) {
    xhr(resolve, reject, Routing.generate('getGoods'), 'POST', '');
  }).then(function (response) {
    while (goods.lastElementChild) {
      goods.removeChild(goods.lastElementChild);
    }

    for (var i = 0; i < response.length; i++) {
      Insert(response[i]);
    }
  })["catch"](function (error) {
    console.log(error);
  });
});
document.addEventListener('click', function (event) {
  var target = event.target;

  if (target.type === "button" && target.className === "buttonAdd" && isNaN(parseInt(target.id)) === false) {
    new Promise(function (resolve, reject) {
      var formData = new FormData();
      var count = document.getElementById('goodNum_' + target.id);
      formData.append('id', target.id);
      formData.append('amount', count.value);
      xhr(resolve, reject, Routing.generate('addToCard', {
        id: target.id
      }), 'POST', formData);
    }).then(function (response) {
      target.value = 'Added';
      setTimeout(function () {
        target.value = "Add";
      }, 2000);
    });
  }

  if (target.type === "button" && target.id === "buttonSort") {
    new Promise(function (resolve, reject) {
      var formData = new FormData();
      var category = document.getElementById('category');
      var data = {
        "sort_by_price": {
          "min": document.getElementById('minNum').value,
          "max": document.getElementById('maxNum').value
        },
        "sort_by_category": {
          "name": category[category.selectedIndex].value
        }
      };
      formData.append('data', JSON.stringify(data));
      xhr(resolve, reject, Routing.generate('getGoods'), 'POST', formData);
    }).then(function (response) {
      target.value = 'Sorted';
      setTimeout(function () {
        target.value = "Sort";
      }, 2000);

      while (goods.lastElementChild) {
        goods.removeChild(goods.lastElementChild);
      }

      for (var i = 0; i < response.length; i++) {
        Insert(response[i]);
      }
    });
  }
});

function Insert(data) {
  var form = document.createElement('form');
  form.method = "POST";
  form.id = "good_" + data.id;
  var good = document.createElement('h4');
  good.setAttribute('id', "goodName_" + data.id);
  good.appendChild(document.createTextNode(data.name + " (" + data.id + ")"));
  var stuff = document.createElement('p');
  stuff.setAttribute('id', "goodStuff_" + data.id);
  stuff.appendChild(document.createTextNode('Color - ' + data.color + ', Price - ' + data.price + "$" + ", Count - " + data.count));
  var description = document.createElement('p');
  description.setAttribute('id', "goodDescription_" + data.id);
  if (data.description.length === 0) description.appendChild(document.createTextNode("This good dont have description"));else description.appendChild(document.createTextNode('Description - ' + data.description));
  var num = document.createElement('input');
  num.type = 'number';
  num.setAttribute('id', "goodNum_" + data.id);
  num.setAttribute('class', 'width: 70px');
  num.setAttribute('value', 0);
  num.setAttribute('min', 1);
  num.setAttribute('max', data.count);
  var category = document.createElement('p');
  category.setAttribute('id', "goodCategory_" + data.id);
  if (data.category != null) category.appendChild(document.createTextNode("Category - " + data.category.categoryName));else category.appendChild(document.createTextNode('Category is undefinded'));
  var button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.setAttribute('value', 'Add');
  button.setAttribute('id', data.id);
  button.setAttribute('class', 'buttonAdd');
  if (data.count === 0) button.disabled = true;
  form.appendChild(good);
  form.appendChild(stuff);
  form.appendChild(description);
  form.appendChild(num);
  form.appendChild(category);
  form.appendChild(button);
  form.appendChild(document.createElement('hr'));
  goods.appendChild(form);
}

function xhr(resolve, reject, url, method, formData) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.addEventListener('load', function (event) {
    if (this.readyState === 4) {
      if (this.status === 200 && this.statusText === "OK") resolve(JSON.parse(this.responseText));else reject("ERROR");
    }
  });
  xhr.send(formData);
}

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

},[["./assets/main.js","runtime","vendors~admin~cart~main","admin~cart~main"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sIm5hbWVzIjpbIlJvdXRpbmciLCJyZXF1aXJlIiwiUm91dGVzIiwiZ29vZHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0Um91dGluZ0RhdGEiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsImdlbmVyYXRlIiwidGhlbiIsInJlc3BvbnNlIiwibGFzdEVsZW1lbnRDaGlsZCIsInJlbW92ZUNoaWxkIiwiaSIsImxlbmd0aCIsIkluc2VydCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInR5cGUiLCJjbGFzc05hbWUiLCJpc05hTiIsInBhcnNlSW50IiwiaWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiY291bnQiLCJhcHBlbmQiLCJ2YWx1ZSIsInNldFRpbWVvdXQiLCJjYXRlZ29yeSIsImRhdGEiLCJzZWxlY3RlZEluZGV4IiwiSlNPTiIsInN0cmluZ2lmeSIsImZvcm0iLCJjcmVhdGVFbGVtZW50IiwibWV0aG9kIiwiZ29vZCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJuYW1lIiwic3R1ZmYiLCJjb2xvciIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJudW0iLCJjYXRlZ29yeU5hbWUiLCJidXR0b24iLCJkaXNhYmxlZCIsInVybCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUF1QixLQUFLQyxVQUFMLEtBQW9CLElBQS9DLEVBQ0lyRCxPQUFPLENBQUM2QixJQUFJLENBQUN5QixLQUFMLENBQVcsS0FBS0MsWUFBaEIsQ0FBRCxDQUFQLENBREosS0FHSXRELE1BQU0sQ0FBQyxPQUFELENBQU47QUFDUDtBQUNKLEdBUEQ7QUFRQUMsS0FBRyxDQUFDc0QsSUFBSixDQUFTcEMsUUFBVDtBQUNILEM7Ozs7Ozs7Ozs7O0FDMUlELHVDOzs7Ozs7Ozs7OztBQ0FBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRXhEO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHlDQUF5QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xubGV0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcbmxldCBSb3V0ZXMgPSByZXF1aXJlKCcuL2pzLXJvdXRlcy5qc29uJyk7XG5sZXQgZ29vZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZHMnKTtcblxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgeGhyKHJlc29sdmUsIHJlamVjdCAsIFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksICdQT1NUJywnJyk7XG4gICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB3aGlsZSAoZ29vZHMubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgICAgIGdvb2RzLnJlbW92ZUNoaWxkKGdvb2RzLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgSW5zZXJ0KHJlc3BvbnNlW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pXG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZih0YXJnZXQudHlwZSA9PT0gXCJidXR0b25cIiAmJiB0YXJnZXQuY2xhc3NOYW1lID09PSBcImJ1dHRvbkFkZFwiICYmIGlzTmFOKHBhcnNlSW50KHRhcmdldC5pZCkpID09PSBmYWxzZSlcbiAgICB7XG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgICAgICBsZXQgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZE51bV8nK3RhcmdldC5pZClcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWQnLCB0YXJnZXQuaWQpXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2Ftb3VudCcsIGNvdW50LnZhbHVlKVxuICAgICAgICAgICAgeGhyKHJlc29sdmUsIHJlamVjdCwgUm91dGluZy5nZW5lcmF0ZSgnYWRkVG9DYXJkJywge2lkOiB0YXJnZXQuaWR9KSwgJ1BPU1QnLCBmb3JtRGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQudmFsdWUgPSAnQWRkZWQnO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3RhcmdldC52YWx1ZSA9IFwiQWRkXCJ9LCAyMDAwKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBpZih0YXJnZXQudHlwZSA9PT0gXCJidXR0b25cIiAmJiB0YXJnZXQuaWQgPT09IFwiYnV0dG9uU29ydFwiKVxuICAgIHtcbiAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeScpXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzb3J0X2J5X3ByaWNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWluXCI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW5OdW0nKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4XCI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXhOdW0nKS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInNvcnRfYnlfY2F0ZWdvcnlcIjp7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogY2F0ZWdvcnlbY2F0ZWdvcnkuc2VsZWN0ZWRJbmRleF0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIHhocihyZXNvbHZlLCByZWplY3QsIFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksICdQT1NUJywgZm9ybURhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnZhbHVlID0gJ1NvcnRlZCc7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7dGFyZ2V0LnZhbHVlID0gXCJTb3J0XCJ9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoZ29vZHMubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBnb29kcy5yZW1vdmVDaGlsZChnb29kcy5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIEluc2VydChyZXNwb25zZVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBJbnNlcnQoZGF0YSkge1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5tZXRob2QgPSBcIlBPU1RcIjtcbiAgICBmb3JtLmlkID0gXCJnb29kX1wiICsgZGF0YS5pZDtcblxuICAgIGxldCBnb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBnb29kLnNldEF0dHJpYnV0ZSgnaWQnLCBcImdvb2ROYW1lX1wiICsgZGF0YS5pZClcbiAgICBnb29kLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEubmFtZSArIFwiIChcIiArIGRhdGEuaWQgKyBcIilcIikpO1xuXG4gICAgbGV0IHN0dWZmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHN0dWZmLnNldEF0dHJpYnV0ZSgnaWQnLCBcImdvb2RTdHVmZl9cIiArIGRhdGEuaWQpXG4gICAgc3R1ZmYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0NvbG9yIC0gJyArIGRhdGEuY29sb3IgKyAnLCBQcmljZSAtICcgKyBkYXRhLnByaWNlICsgXCIkXCIgKyBcIiwgQ291bnQgLSBcIiArIGRhdGEuY291bnQpKVxuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBcImdvb2REZXNjcmlwdGlvbl9cIiArIGRhdGEuaWQpXG4gICAgaWYgKGRhdGEuZGVzY3JpcHRpb24ubGVuZ3RoID09PSAwKVxuICAgICAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlRoaXMgZ29vZCBkb250IGhhdmUgZGVzY3JpcHRpb25cIikpXG4gICAgZWxzZVxuICAgICAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRGVzY3JpcHRpb24gLSAnICsgZGF0YS5kZXNjcmlwdGlvbikpXG5cbiAgICBsZXQgbnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBudW0udHlwZSA9ICdudW1iZXInO1xuICAgIG51bS5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJnb29kTnVtX1wiICsgZGF0YS5pZClcbiAgICBudW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd3aWR0aDogNzBweCcpXG4gICAgbnVtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAwKVxuICAgIG51bS5zZXRBdHRyaWJ1dGUoJ21pbicsIDEpXG4gICAgbnVtLnNldEF0dHJpYnV0ZSgnbWF4JywgZGF0YS5jb3VudClcblxuICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjYXRlZ29yeS5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJnb29kQ2F0ZWdvcnlfXCIgKyBkYXRhLmlkKVxuICAgIGlmIChkYXRhLmNhdGVnb3J5ICE9IG51bGwpXG4gICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ2F0ZWdvcnkgLSBcIiArIGRhdGEuY2F0ZWdvcnkuY2F0ZWdvcnlOYW1lKSk7XG4gICAgZWxzZVxuICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ2F0ZWdvcnkgaXMgdW5kZWZpbmRlZCcpKTtcblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FkZCcpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkYXRhLmlkKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbkFkZCcpXG4gICAgaWYgKGRhdGEuY291bnQgPT09IDApXG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGdvb2QpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3R1ZmYpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICBmb3JtLmFwcGVuZENoaWxkKG51bSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhdGVnb3J5KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSlcbiAgICBnb29kcy5hcHBlbmRDaGlsZChmb3JtKTtcbn1cblxuZnVuY3Rpb24geGhyKHJlc29sdmUsIHJlamVjdCwgdXJsLCBtZXRob2QsIGZvcm1EYXRhKXtcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwICYmIHRoaXMuc3RhdHVzVGV4dCA9PT0gXCJPS1wiKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJlamVjdChcIkVSUk9SXCIpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcikpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==