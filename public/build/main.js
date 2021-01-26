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
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_7__);









var Routing = __webpack_require__(/*! ../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js-routes.json */ "./assets/js-routes.json");

Routing.setRoutingData(Routes);
document.addEventListener('DOMContentLoaded', function (event) {
  new Promise(function (resolve, reject) {
    xhr(resolve, reject, Routing.generate('getGoods'), 'GET', '');
  }).then(function (response) {
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
    }).then(function (resolve) {
      target.disabled = true;
    });
  }

  if (target.type === "button" && target.id === "buttonRemove" && isNaN(parseInt(Number(target.dataset.id))) === false) {
    new Promise(function (resolve, reject) {
      var formData = new FormData();
      formData.append('id', Number(target.dataset.id));
      xhr(resolve, reject, Routing.generate('removeGood', {
        id: target.dataset.id
      }), 'POST', formData);
    }).then(function (resolve) {
      var good = document.getElementById('good_' + Number(target.dataset.id));
      good.parentNode.removeChild(good);
    });
  }

  if (target.type === "button" && target.id === "buttonSort") {
    new Promise(function (resolve, reject) {
      var formData = new FormData();
      formData.append('id', Number(target.dataset.id));
      xhr(resolve, reject, Routing.generate('removeGood', {
        id: target.dataset.id
      }), 'GET', formData);
    }).then(function (resolve) {
      var good = document.getElementById('good_' + Number(target.dataset.id));
      good.parentNode.removeChild(good);
    });
  }
});

function Insert(data) {
  var good = document.getElementById('good_' + data.id);
  var name = document.getElementById('goodName_' + data.id);
  name.innerText = data.name;
  var stuff = document.getElementById('goodStuff_' + data.id);
  stuff.innerText = 'Color - ' + data.color + ', Price - ' + data.price + "$" + ", Count - " + data.count;
  var description = document.getElementById('goodDescription_' + data.id);
  if (data.description.length === 0) description.innerText = 'This good dont have description';else description.innerText = 'Description - ' + data.description;
  var button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.setAttribute('value', 'Add');
  button.setAttribute('id', data.id);
  button.setAttribute('class', 'buttonAdd');
  if (data.count === 0) button.disabled = true;
  good.appendChild(button);
  good.appendChild(document.createElement('hr'));
  good.style.display = 'inherit';
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

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ })

},[["./assets/main.js","runtime","vendors~admin~cart~main","admin~cart~main"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubnVtYmVyLmNvbnN0cnVjdG9yLmpzIl0sIm5hbWVzIjpbIlJvdXRpbmciLCJyZXF1aXJlIiwiUm91dGVzIiwic2V0Um91dGluZ0RhdGEiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwieGhyIiwiZ2VuZXJhdGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJpIiwibGVuZ3RoIiwiSW5zZXJ0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidHlwZSIsImNsYXNzTmFtZSIsImlzTmFOIiwicGFyc2VJbnQiLCJpZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJjb3VudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kIiwidmFsdWUiLCJkaXNhYmxlZCIsIk51bWJlciIsImRhdGFzZXQiLCJnb29kIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZGF0YSIsIm5hbWUiLCJpbm5lclRleHQiLCJzdHVmZiIsImNvbG9yIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInN0eWxlIiwiZGlzcGxheSIsInVybCIsIm1ldGhvZCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5sZXQgUm91dGluZyA9IHJlcXVpcmUoXCIuLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xubGV0IFJvdXRlcyA9IHJlcXVpcmUoJy4vanMtcm91dGVzLmpzb24nKTtcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIChldmVudCl7XG4gICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAgIHhocihyZXNvbHZlLCByZWplY3QgLCBSb3V0aW5nLmdlbmVyYXRlKCdnZXRHb29kcycpLCAnR0VUJywgJycpO1xuICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgSW5zZXJ0KHJlc3BvbnNlW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pXG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZih0YXJnZXQudHlwZSA9PT0gXCJidXR0b25cIiAmJiB0YXJnZXQuY2xhc3NOYW1lID09PSBcImJ1dHRvbkFkZFwiICYmIGlzTmFOKHBhcnNlSW50KHRhcmdldC5pZCkpID09PSBmYWxzZSlcbiAgICB7XG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgICAgICBsZXQgY291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZE51bV8nK3RhcmdldC5pZClcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWQnLCB0YXJnZXQuaWQpXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2Ftb3VudCcsIGNvdW50LnZhbHVlKVxuICAgICAgICAgICAgeGhyKHJlc29sdmUsIHJlamVjdCwgUm91dGluZy5nZW5lcmF0ZSgnYWRkVG9DYXJkJywge2lkOiB0YXJnZXQuaWR9KSwgJ1BPU1QnLCBmb3JtRGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRhcmdldC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICBpZih0YXJnZXQudHlwZSA9PT0gXCJidXR0b25cIiAmJiB0YXJnZXQuaWQgPT09IFwiYnV0dG9uUmVtb3ZlXCIgJiYgaXNOYU4ocGFyc2VJbnQoTnVtYmVyKHRhcmdldC5kYXRhc2V0LmlkKSkpID09PSBmYWxzZSlcbiAgICB7XG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkJywgTnVtYmVyKHRhcmdldC5kYXRhc2V0LmlkKSlcbiAgICAgICAgICAgIHhocihyZXNvbHZlLCByZWplY3QsIFJvdXRpbmcuZ2VuZXJhdGUoJ3JlbW92ZUdvb2QnLCB7aWQ6IHRhcmdldC5kYXRhc2V0LmlkfSksICdQT1NUJywgZm9ybURhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZ29vZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kXycrTnVtYmVyKHRhcmdldC5kYXRhc2V0LmlkKSlcbiAgICAgICAgICAgICAgICBnb29kLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZClcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmlkID09PSBcImJ1dHRvblNvcnRcIilcbiAgICB7XG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkJywgTnVtYmVyKHRhcmdldC5kYXRhc2V0LmlkKSlcbiAgICAgICAgICAgIHhocihyZXNvbHZlLCByZWplY3QsIFJvdXRpbmcuZ2VuZXJhdGUoJ3JlbW92ZUdvb2QnLCB7aWQ6IHRhcmdldC5kYXRhc2V0LmlkfSksICdHRVQnLCBmb3JtRGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBnb29kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfJytOdW1iZXIodGFyZ2V0LmRhdGFzZXQuaWQpKVxuICAgICAgICAgICAgICAgIGdvb2QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb29kKVxuICAgICAgICAgICAgfSlcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBJbnNlcnQoZGF0YSl7XG4gICAgbGV0IGdvb2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZF8nK2RhdGEuaWQpXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZE5hbWVfJytkYXRhLmlkKTtcbiAgICBuYW1lLmlubmVyVGV4dCA9IGRhdGEubmFtZTtcbiAgICBsZXQgc3R1ZmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZFN0dWZmXycrZGF0YS5pZCk7XG4gICAgc3R1ZmYuaW5uZXJUZXh0ID0gJ0NvbG9yIC0gJysgZGF0YS5jb2xvciArICcsIFByaWNlIC0gJyArIGRhdGEucHJpY2UgKyBcIiRcIiArIFwiLCBDb3VudCAtIFwiICsgZGF0YS5jb3VudDtcblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kRGVzY3JpcHRpb25fJytkYXRhLmlkKTtcbiAgICBpZiAoZGF0YS5kZXNjcmlwdGlvbi5sZW5ndGggPT09IDApXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICdUaGlzIGdvb2QgZG9udCBoYXZlIGRlc2NyaXB0aW9uJztcbiAgICBlbHNlXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbiAtICcgKyBkYXRhLmRlc2NyaXB0aW9uO1xuXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWRkJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGRhdGEuaWQpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uQWRkJylcbiAgICBpZiAoZGF0YS5jb3VudCA9PT0gMClcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBnb29kLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICBnb29kLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuXG4gICAgZ29vZC5zdHlsZS5kaXNwbGF5ID0gJ2luaGVyaXQnXG59XG5cbmZ1bmN0aW9uIHhocihyZXNvbHZlLCByZWplY3QsIHVybCwgbWV0aG9kLCBmb3JtRGF0YSl7XG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCAmJiB0aGlzLnN0YXR1c1RleHQgPT09IFwiT0tcIilcbiAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZWplY3QoXCJFUlJPUlwiKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgeGhyLnNlbmQoZm9ybURhdGEpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nID0gRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKS5mO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcblxudmFyIE5VTUJFUiA9ICdOdW1iZXInO1xudmFyIE5hdGl2ZU51bWJlciA9IGdsb2JhbFtOVU1CRVJdO1xudmFyIE51bWJlclByb3RvdHlwZSA9IE5hdGl2ZU51bWJlci5wcm90b3R5cGU7XG5cbi8vIE9wZXJhIH4xMiBoYXMgYnJva2VuIE9iamVjdCN0b1N0cmluZ1xudmFyIEJST0tFTl9DTEFTU09GID0gY2xhc3NvZihjcmVhdGUoTnVtYmVyUHJvdG90eXBlKSkgPT0gTlVNQkVSO1xuXG4vLyBgVG9OdW1iZXJgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b251bWJlclxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIHZhciBmaXJzdCwgdGhpcmQsIHJhZGl4LCBtYXhDb2RlLCBkaWdpdHMsIGxlbmd0aCwgaW5kZXgsIGNvZGU7XG4gIGlmICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMikge1xuICAgIGl0ID0gdHJpbShpdCk7XG4gICAgZmlyc3QgPSBpdC5jaGFyQ29kZUF0KDApO1xuICAgIGlmIChmaXJzdCA9PT0gNDMgfHwgZmlyc3QgPT09IDQ1KSB7XG4gICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG4gICAgICBpZiAodGhpcmQgPT09IDg4IHx8IHRoaXJkID09PSAxMjApIHJldHVybiBOYU47IC8vIE51bWJlcignKzB4MScpIHNob3VsZCBiZSBOYU4sIG9sZCBWOCBmaXhcbiAgICB9IGVsc2UgaWYgKGZpcnN0ID09PSA0OCkge1xuICAgICAgc3dpdGNoIChpdC5jaGFyQ29kZUF0KDEpKSB7XG4gICAgICAgIGNhc2UgNjY6IGNhc2UgOTg6IHJhZGl4ID0gMjsgbWF4Q29kZSA9IDQ5OyBicmVhazsgLy8gZmFzdCBlcXVhbCBvZiAvXjBiWzAxXSskL2lcbiAgICAgICAgY2FzZSA3OTogY2FzZSAxMTE6IHJhZGl4ID0gODsgbWF4Q29kZSA9IDU1OyBicmVhazsgLy8gZmFzdCBlcXVhbCBvZiAvXjBvWzAtN10rJC9pXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAraXQ7XG4gICAgICB9XG4gICAgICBkaWdpdHMgPSBpdC5zbGljZSgyKTtcbiAgICAgIGxlbmd0aCA9IGRpZ2l0cy5sZW5ndGg7XG4gICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29kZSA9IGRpZ2l0cy5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgICAgLy8gcGFyc2VJbnQgcGFyc2VzIGEgc3RyaW5nIHRvIGEgZmlyc3QgdW5hdmFpbGFibGUgc3ltYm9sXG4gICAgICAgIC8vIGJ1dCBUb051bWJlciBzaG91bGQgcmV0dXJuIE5hTiBpZiBhIHN0cmluZyBjb250YWlucyB1bmF2YWlsYWJsZSBzeW1ib2xzXG4gICAgICAgIGlmIChjb2RlIDwgNDggfHwgY29kZSA+IG1heENvZGUpIHJldHVybiBOYU47XG4gICAgICB9IHJldHVybiBwYXJzZUludChkaWdpdHMsIHJhZGl4KTtcbiAgICB9XG4gIH0gcmV0dXJuICtpdDtcbn07XG5cbi8vIGBOdW1iZXJgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW51bWJlci1jb25zdHJ1Y3RvclxuaWYgKGlzRm9yY2VkKE5VTUJFUiwgIU5hdGl2ZU51bWJlcignIDBvMScpIHx8ICFOYXRpdmVOdW1iZXIoJzBiMScpIHx8IE5hdGl2ZU51bWJlcignKzB4MScpKSkge1xuICB2YXIgTnVtYmVyV3JhcHBlciA9IGZ1bmN0aW9uIE51bWJlcih2YWx1ZSkge1xuICAgIHZhciBpdCA9IGFyZ3VtZW50cy5sZW5ndGggPCAxID8gMCA6IHZhbHVlO1xuICAgIHZhciBkdW1teSA9IHRoaXM7XG4gICAgcmV0dXJuIGR1bW15IGluc3RhbmNlb2YgTnVtYmVyV3JhcHBlclxuICAgICAgLy8gY2hlY2sgb24gMS4uY29uc3RydWN0b3IoZm9vKSBjYXNlXG4gICAgICAmJiAoQlJPS0VOX0NMQVNTT0YgPyBmYWlscyhmdW5jdGlvbiAoKSB7IE51bWJlclByb3RvdHlwZS52YWx1ZU9mLmNhbGwoZHVtbXkpOyB9KSA6IGNsYXNzb2YoZHVtbXkpICE9IE5VTUJFUilcbiAgICAgICAgPyBpbmhlcml0SWZSZXF1aXJlZChuZXcgTmF0aXZlTnVtYmVyKHRvTnVtYmVyKGl0KSksIGR1bW15LCBOdW1iZXJXcmFwcGVyKSA6IHRvTnVtYmVyKGl0KTtcbiAgfTtcbiAgZm9yICh2YXIga2V5cyA9IERFU0NSSVBUT1JTID8gZ2V0T3duUHJvcGVydHlOYW1lcyhOYXRpdmVOdW1iZXIpIDogKFxuICAgIC8vIEVTMzpcbiAgICAnTUFYX1ZBTFVFLE1JTl9WQUxVRSxOYU4sTkVHQVRJVkVfSU5GSU5JVFksUE9TSVRJVkVfSU5GSU5JVFksJyArXG4gICAgLy8gRVMyMDE1IChpbiBjYXNlLCBpZiBtb2R1bGVzIHdpdGggRVMyMDE1IE51bWJlciBzdGF0aWNzIHJlcXVpcmVkIGJlZm9yZSk6XG4gICAgJ0VQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUiwnICtcbiAgICAnTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlciwnICtcbiAgICAvLyBFU05leHRcbiAgICAnZnJvbVN0cmluZyxyYW5nZSdcbiAgKS5zcGxpdCgnLCcpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7IGorKykge1xuICAgIGlmIChoYXMoTmF0aXZlTnVtYmVyLCBrZXkgPSBrZXlzW2pdKSAmJiAhaGFzKE51bWJlcldyYXBwZXIsIGtleSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KE51bWJlcldyYXBwZXIsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5hdGl2ZU51bWJlciwga2V5KSk7XG4gICAgfVxuICB9XG4gIE51bWJlcldyYXBwZXIucHJvdG90eXBlID0gTnVtYmVyUHJvdG90eXBlO1xuICBOdW1iZXJQcm90b3R5cGUuY29uc3RydWN0b3IgPSBOdW1iZXJXcmFwcGVyO1xuICByZWRlZmluZShnbG9iYWwsIE5VTUJFUiwgTnVtYmVyV3JhcHBlcik7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9