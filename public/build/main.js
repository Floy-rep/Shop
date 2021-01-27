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
    var formData = new FormData();
    formData.append('data', JSON.stringify(data));
    xhr(resolve, reject, Routing.generate('getGoods'), 'POST', formData);
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
  } // if(target.type === "button" && target.id === "buttonRemove" && isNaN(parseInt(Number(target.dataset.id))) === false)
  // {
  //     new Promise(function (resolve, reject) {
  //         let formData = new FormData()
  //         formData.append('id', Number(target.dataset.id))
  //         xhr(resolve, reject, Routing.generate('removeGood', {id: target.dataset.id}), 'POST', formData);
  //     })
  //         .then((response) => {
  //             let good = document.getElementById('good_'+Number(target.dataset.id))
  //             good.parentNode.removeChild(good)
  //         })
  // }


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
  goods.appendChild(form); // let good = document.getElementById('good_'+data.id)
  // let name = document.getElementById('goodName_'+data.id);
  // name.innerText = data.name;
  // let stuff = document.getElementById('goodStuff_'+data.id);
  // stuff.innerText = 'Color - '+ data.color + ', Price - ' + data.price + "$" + ", Count - " + data.count;
  //
  // let description = document.getElementById('goodDescription_'+data.id);
  // if (data.description.length === 0)
  //     description.innerText = 'This good dont have description';
  // else
  //     description.innerText = 'Description - ' + data.description;
  //
  // let button = document.createElement('input')
  // button.setAttribute('type', 'button')
  // button.setAttribute('value', 'Add')
  // button.setAttribute('id', data.id)
  // button.setAttribute('class', 'buttonAdd')
  // if (data.count === 0)
  //     button.disabled = true;
  // good.appendChild(button)
  // good.appendChild(document.createElement('hr'));
  //
  // good.style.display = 'inherit'
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

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyJSb3V0aW5nIiwicmVxdWlyZSIsIlJvdXRlcyIsImdvb2RzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldFJvdXRpbmdEYXRhIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjYXRlZ29yeSIsImRhdGEiLCJ2YWx1ZSIsInNlbGVjdGVkSW5kZXgiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInhociIsImdlbmVyYXRlIiwidGhlbiIsInJlc3BvbnNlIiwibGFzdEVsZW1lbnRDaGlsZCIsInJlbW92ZUNoaWxkIiwiaSIsImxlbmd0aCIsIkluc2VydCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInR5cGUiLCJjbGFzc05hbWUiLCJpc05hTiIsInBhcnNlSW50IiwiaWQiLCJjb3VudCIsInNldFRpbWVvdXQiLCJmb3JtIiwiY3JlYXRlRWxlbWVudCIsIm1ldGhvZCIsImdvb2QiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwibmFtZSIsInN0dWZmIiwiY29sb3IiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwibnVtIiwiY2F0ZWdvcnlOYW1lIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJ1cmwiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJwYXJz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Ozs7Ozs7OztBQ0FBLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxxQkFBcUIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNyQkEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLGdCQUFnQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFeEQ7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcseUNBQXlDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5sZXQgUm91dGluZyA9IHJlcXVpcmUoXCIuLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xubGV0IFJvdXRlcyA9IHJlcXVpcmUoJy4vanMtcm91dGVzLmpzb24nKTtcbmxldCBnb29kcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kcycpO1xuXG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwic29ydF9ieV9wcmljZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5cIjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbk51bScpLnZhbHVlLFxuICAgICAgICAgICAgICAgIFwibWF4XCI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXhOdW0nKS52YWx1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic29ydF9ieV9jYXRlZ29yeVwiOntcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogY2F0ZWdvcnlbY2F0ZWdvcnkuc2VsZWN0ZWRJbmRleF0udmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIHhocihyZXNvbHZlLCByZWplY3QgLCBSb3V0aW5nLmdlbmVyYXRlKCdnZXRHb29kcycpLCAnUE9TVCcsIGZvcm1EYXRhKTtcbiAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHdoaWxlIChnb29kcy5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICAgICAgICAgZ29vZHMucmVtb3ZlQ2hpbGQoZ29vZHMubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBJbnNlcnQocmVzcG9uc2VbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfSlcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmKHRhcmdldC50eXBlID09PSBcImJ1dHRvblwiICYmIHRhcmdldC5jbGFzc05hbWUgPT09IFwiYnV0dG9uQWRkXCIgJiYgaXNOYU4ocGFyc2VJbnQodGFyZ2V0LmlkKSkgPT09IGZhbHNlKVxuICAgIHtcbiAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgICAgIGxldCBjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kTnVtXycrdGFyZ2V0LmlkKVxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIHRhcmdldC5pZClcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYW1vdW50JywgY291bnQudmFsdWUpXG4gICAgICAgICAgICB4aHIocmVzb2x2ZSwgcmVqZWN0LCBSb3V0aW5nLmdlbmVyYXRlKCdhZGRUb0NhcmQnLCB7aWQ6IHRhcmdldC5pZH0pLCAnUE9TVCcsIGZvcm1EYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9ICdBZGRlZCc7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7dGFyZ2V0LnZhbHVlID0gXCJBZGRcIn0sIDIwMDApO1xuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgLy8gaWYodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmlkID09PSBcImJ1dHRvblJlbW92ZVwiICYmIGlzTmFOKHBhcnNlSW50KE51bWJlcih0YXJnZXQuZGF0YXNldC5pZCkpKSA9PT0gZmFsc2UpXG4gICAgLy8ge1xuICAgIC8vICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgIC8vICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIE51bWJlcih0YXJnZXQuZGF0YXNldC5pZCkpXG4gICAgLy8gICAgICAgICB4aHIocmVzb2x2ZSwgcmVqZWN0LCBSb3V0aW5nLmdlbmVyYXRlKCdyZW1vdmVHb29kJywge2lkOiB0YXJnZXQuZGF0YXNldC5pZH0pLCAnUE9TVCcsIGZvcm1EYXRhKTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGxldCBnb29kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfJytOdW1iZXIodGFyZ2V0LmRhdGFzZXQuaWQpKVxuICAgIC8vICAgICAgICAgICAgIGdvb2QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb29kKVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyB9XG5cbiAgICBpZih0YXJnZXQudHlwZSA9PT0gXCJidXR0b25cIiAmJiB0YXJnZXQuaWQgPT09IFwiYnV0dG9uU29ydFwiKVxuICAgIHtcbiAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeScpXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzb3J0X2J5X3ByaWNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWluXCI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW5OdW0nKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4XCI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXhOdW0nKS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInNvcnRfYnlfY2F0ZWdvcnlcIjp7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogY2F0ZWdvcnlbY2F0ZWdvcnkuc2VsZWN0ZWRJbmRleF0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgIHhocihyZXNvbHZlLCByZWplY3QsIFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksICdQT1NUJywgZm9ybURhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnZhbHVlID0gJ1NvcnRlZCc7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7dGFyZ2V0LnZhbHVlID0gXCJTb3J0XCJ9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoZ29vZHMubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBnb29kcy5yZW1vdmVDaGlsZChnb29kcy5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIEluc2VydChyZXNwb25zZVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBJbnNlcnQoZGF0YSl7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLm1ldGhvZCA9IFwiUE9TVFwiO1xuICAgIGZvcm0uaWQgPSBcImdvb2RfXCIrZGF0YS5pZDtcblxuICAgIGxldCBnb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBnb29kLnNldEF0dHJpYnV0ZSgnaWQnLCBcImdvb2ROYW1lX1wiK2RhdGEuaWQpXG4gICAgZ29vZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhLm5hbWUgKyBcIiAoXCIgKyBkYXRhLmlkICsgXCIpXCIpKTtcblxuICAgIGxldCBzdHVmZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdHVmZi5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJnb29kU3R1ZmZfXCIrZGF0YS5pZClcbiAgICBzdHVmZi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ29sb3IgLSAnKyBkYXRhLmNvbG9yICsgJywgUHJpY2UgLSAnICsgZGF0YS5wcmljZSArIFwiJFwiICsgXCIsIENvdW50IC0gXCIgKyBkYXRhLmNvdW50KSlcblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJnb29kRGVzY3JpcHRpb25fXCIrZGF0YS5pZClcbiAgICBpZiAoZGF0YS5kZXNjcmlwdGlvbi5sZW5ndGggPT09IDApXG4gICAgICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVGhpcyBnb29kIGRvbnQgaGF2ZSBkZXNjcmlwdGlvblwiKSlcbiAgICBlbHNlXG4gICAgICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdEZXNjcmlwdGlvbiAtICcgKyBkYXRhLmRlc2NyaXB0aW9uKSlcblxuICAgIGxldCBudW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG51bS50eXBlID0gJ251bWJlcic7XG4gICAgbnVtLnNldEF0dHJpYnV0ZSgnaWQnLCBcImdvb2ROdW1fXCIrZGF0YS5pZClcbiAgICBudW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICd3aWR0aDogNzBweCcpXG4gICAgbnVtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAwKVxuICAgIG51bS5zZXRBdHRyaWJ1dGUoJ21pbicsIDEpXG4gICAgbnVtLnNldEF0dHJpYnV0ZSgnbWF4JywgZGF0YS5jb3VudClcblxuICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjYXRlZ29yeS5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJnb29kQ2F0ZWdvcnlfXCIrZGF0YS5pZClcbiAgICBpZiAoZGF0YS5jYXRlZ29yeSAhPSBudWxsKVxuICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNhdGVnb3J5IC0gXCIgKyBkYXRhLmNhdGVnb3J5LmNhdGVnb3J5TmFtZSkpO1xuICAgIGVsc2VcbiAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0NhdGVnb3J5IGlzIHVuZGVmaW5kZWQnKSk7XG5cbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBZGQnKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGF0YS5pZClcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b25BZGQnKVxuICAgIGlmIChkYXRhLmNvdW50ID09PSAwKVxuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChnb29kKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN0dWZmKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgZm9ybS5hcHBlbmRDaGlsZChudW0pXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYXRlZ29yeSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpXG4gICAgZ29vZHMuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAvLyBsZXQgZ29vZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kXycrZGF0YS5pZClcbiAgICAvLyBsZXQgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kTmFtZV8nK2RhdGEuaWQpO1xuICAgIC8vIG5hbWUuaW5uZXJUZXh0ID0gZGF0YS5uYW1lO1xuICAgIC8vIGxldCBzdHVmZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kU3R1ZmZfJytkYXRhLmlkKTtcbiAgICAvLyBzdHVmZi5pbm5lclRleHQgPSAnQ29sb3IgLSAnKyBkYXRhLmNvbG9yICsgJywgUHJpY2UgLSAnICsgZGF0YS5wcmljZSArIFwiJFwiICsgXCIsIENvdW50IC0gXCIgKyBkYXRhLmNvdW50O1xuICAgIC8vXG4gICAgLy8gbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2REZXNjcmlwdGlvbl8nK2RhdGEuaWQpO1xuICAgIC8vIGlmIChkYXRhLmRlc2NyaXB0aW9uLmxlbmd0aCA9PT0gMClcbiAgICAvLyAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJ1RoaXMgZ29vZCBkb250IGhhdmUgZGVzY3JpcHRpb24nO1xuICAgIC8vIGVsc2VcbiAgICAvLyAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uIC0gJyArIGRhdGEuZGVzY3JpcHRpb247XG4gICAgLy9cbiAgICAvLyBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIC8vIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICAvLyBidXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBZGQnKVxuICAgIC8vIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGF0YS5pZClcbiAgICAvLyBidXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdidXR0b25BZGQnKVxuICAgIC8vIGlmIChkYXRhLmNvdW50ID09PSAwKVxuICAgIC8vICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIC8vIGdvb2QuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgIC8vIGdvb2QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG4gICAgLy9cbiAgICAvLyBnb29kLnN0eWxlLmRpc3BsYXkgPSAnaW5oZXJpdCdcbn1cblxuZnVuY3Rpb24geGhyKHJlc29sdmUsIHJlamVjdCwgdXJsLCBtZXRob2QsIGZvcm1EYXRhKXtcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwICYmIHRoaXMuc3RhdHVzVGV4dCA9PT0gXCJPS1wiKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJlamVjdChcIkVSUk9SXCIpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcgPSBGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZztcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcikpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==