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
    target.value = 'Added';
    new Promise(function (resolve, reject) {
      var formData = new FormData();
      var count = document.getElementById('goodNum_' + target.id);
      formData.append('id', target.id);
      formData.append('amount', count.value);
      xhr(resolve, reject, Routing.generate('addToCard', {
        id: target.id
      }), 'POST', formData);
    }).then(function (response) {
      setTimeout(function () {
        target.value = "Add";
      }, 3000);
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
    target.value = 'Sorted';
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
      setTimeout(function () {
        target.value = "Sort";
      }, 3000);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyJSb3V0aW5nIiwicmVxdWlyZSIsIlJvdXRlcyIsImdvb2RzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldFJvdXRpbmdEYXRhIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ4aHIiLCJnZW5lcmF0ZSIsInRoZW4iLCJyZXNwb25zZSIsImxhc3RFbGVtZW50Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImkiLCJsZW5ndGgiLCJJbnNlcnQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ0eXBlIiwiY2xhc3NOYW1lIiwiaXNOYU4iLCJwYXJzZUludCIsImlkIiwidmFsdWUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiY291bnQiLCJhcHBlbmQiLCJzZXRUaW1lb3V0IiwiY2F0ZWdvcnkiLCJkYXRhIiwic2VsZWN0ZWRJbmRleCIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3JtIiwiY3JlYXRlRWxlbWVudCIsIm1ldGhvZCIsImdvb2QiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwibmFtZSIsInN0dWZmIiwiY29sb3IiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwibnVtIiwiY2F0ZWdvcnlOYW1lIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJ1cmwiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJwYXJz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Y2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xubGV0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcbmxldCBSb3V0ZXMgPSByZXF1aXJlKCcuL2pzLXJvdXRlcy5qc29uJyk7XG5sZXQgZ29vZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZHMnKTtcblxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgeGhyKHJlc29sdmUsIHJlamVjdCAsIFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksICdQT1NUJywgJycpO1xuICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgd2hpbGUgKGdvb2RzLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBnb29kcy5yZW1vdmVDaGlsZChnb29kcy5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIEluc2VydChyZXNwb25zZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidXR0b25BZGRcIiAmJiBpc05hTihwYXJzZUludCh0YXJnZXQuaWQpKSA9PT0gZmFsc2UpXG4gICAge1xuICAgICAgICB0YXJnZXQudmFsdWUgPSAnQWRkZWQnO1xuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICAgICAgbGV0IGNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2ROdW1fJyt0YXJnZXQuaWQpXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkJywgdGFyZ2V0LmlkKVxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdhbW91bnQnLCBjb3VudC52YWx1ZSlcbiAgICAgICAgICAgIHhocihyZXNvbHZlLCByZWplY3QsIFJvdXRpbmcuZ2VuZXJhdGUoJ2FkZFRvQ2FyZCcsIHtpZDogdGFyZ2V0LmlkfSksICdQT1NUJywgZm9ybURhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7dGFyZ2V0LnZhbHVlID0gXCJBZGRcIn0sIDMwMDApO1xuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgLy8gaWYodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmlkID09PSBcImJ1dHRvblJlbW92ZVwiICYmIGlzTmFOKHBhcnNlSW50KE51bWJlcih0YXJnZXQuZGF0YXNldC5pZCkpKSA9PT0gZmFsc2UpXG4gICAgLy8ge1xuICAgIC8vICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgIC8vICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIE51bWJlcih0YXJnZXQuZGF0YXNldC5pZCkpXG4gICAgLy8gICAgICAgICB4aHIocmVzb2x2ZSwgcmVqZWN0LCBSb3V0aW5nLmdlbmVyYXRlKCdyZW1vdmVHb29kJywge2lkOiB0YXJnZXQuZGF0YXNldC5pZH0pLCAnUE9TVCcsIGZvcm1EYXRhKTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGxldCBnb29kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfJytOdW1iZXIodGFyZ2V0LmRhdGFzZXQuaWQpKVxuICAgIC8vICAgICAgICAgICAgIGdvb2QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnb29kKVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyB9XG5cbiAgICBpZih0YXJnZXQudHlwZSA9PT0gXCJidXR0b25cIiAmJiB0YXJnZXQuaWQgPT09IFwiYnV0dG9uU29ydFwiKVxuICAgIHtcbiAgICAgICAgdGFyZ2V0LnZhbHVlID0gJ1NvcnRlZCc7XG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKVxuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwic29ydF9ieV9wcmljZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1pblwiOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluTnVtJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1heFwiOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4TnVtJykudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJzb3J0X2J5X2NhdGVnb3J5XCI6e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IGNhdGVnb3J5W2NhdGVnb3J5LnNlbGVjdGVkSW5kZXhdLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICB4aHIocmVzb2x2ZSwgcmVqZWN0LCBSb3V0aW5nLmdlbmVyYXRlKCdnZXRHb29kcycpLCAnUE9TVCcsIGZvcm1EYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3RhcmdldC52YWx1ZSA9IFwiU29ydFwifSwgMzAwMCk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGdvb2RzLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZ29vZHMucmVtb3ZlQ2hpbGQoZ29vZHMubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBJbnNlcnQocmVzcG9uc2VbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfVxufSlcblxuZnVuY3Rpb24gSW5zZXJ0KGRhdGEpe1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5tZXRob2QgPSBcIlBPU1RcIjtcbiAgICBmb3JtLmlkID0gXCJnb29kX1wiK2RhdGEuaWQ7XG5cbiAgICBsZXQgZ29vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgZ29vZC5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJnb29kTmFtZV9cIitkYXRhLmlkKVxuICAgIGdvb2QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YS5uYW1lICsgXCIgKFwiICsgZGF0YS5pZCArIFwiKVwiKSk7XG5cbiAgICBsZXQgc3R1ZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3R1ZmYuc2V0QXR0cmlidXRlKCdpZCcsIFwiZ29vZFN0dWZmX1wiK2RhdGEuaWQpXG4gICAgc3R1ZmYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0NvbG9yIC0gJysgZGF0YS5jb2xvciArICcsIFByaWNlIC0gJyArIGRhdGEucHJpY2UgKyBcIiRcIiArIFwiLCBDb3VudCAtIFwiICsgZGF0YS5jb3VudCkpXG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIFwiZ29vZERlc2NyaXB0aW9uX1wiK2RhdGEuaWQpXG4gICAgaWYgKGRhdGEuZGVzY3JpcHRpb24ubGVuZ3RoID09PSAwKVxuICAgICAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlRoaXMgZ29vZCBkb250IGhhdmUgZGVzY3JpcHRpb25cIikpXG4gICAgZWxzZVxuICAgICAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRGVzY3JpcHRpb24gLSAnICsgZGF0YS5kZXNjcmlwdGlvbikpXG5cbiAgICBsZXQgbnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBudW0udHlwZSA9ICdudW1iZXInO1xuICAgIG51bS5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJnb29kTnVtX1wiK2RhdGEuaWQpXG4gICAgbnVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2lkdGg6IDcwcHgnKVxuICAgIG51bS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgMClcbiAgICBudW0uc2V0QXR0cmlidXRlKCdtaW4nLCAxKVxuICAgIG51bS5zZXRBdHRyaWJ1dGUoJ21heCcsIGRhdGEuY291bnQpXG5cbiAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2F0ZWdvcnkuc2V0QXR0cmlidXRlKCdpZCcsIFwiZ29vZENhdGVnb3J5X1wiK2RhdGEuaWQpXG4gICAgaWYgKGRhdGEuY2F0ZWdvcnkgIT0gbnVsbClcbiAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDYXRlZ29yeSAtIFwiICsgZGF0YS5jYXRlZ29yeS5jYXRlZ29yeU5hbWUpKTtcbiAgICBlbHNlXG4gICAgICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdDYXRlZ29yeSBpcyB1bmRlZmluZGVkJykpO1xuXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWRkJylcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGRhdGEuaWQpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uQWRkJylcbiAgICBpZiAoZGF0YS5jb3VudCA9PT0gMClcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZ29vZCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdHVmZilcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobnVtKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKVxuICAgIGdvb2RzLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgLy8gbGV0IGdvb2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZF8nK2RhdGEuaWQpXG4gICAgLy8gbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZE5hbWVfJytkYXRhLmlkKTtcbiAgICAvLyBuYW1lLmlubmVyVGV4dCA9IGRhdGEubmFtZTtcbiAgICAvLyBsZXQgc3R1ZmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZFN0dWZmXycrZGF0YS5pZCk7XG4gICAgLy8gc3R1ZmYuaW5uZXJUZXh0ID0gJ0NvbG9yIC0gJysgZGF0YS5jb2xvciArICcsIFByaWNlIC0gJyArIGRhdGEucHJpY2UgKyBcIiRcIiArIFwiLCBDb3VudCAtIFwiICsgZGF0YS5jb3VudDtcbiAgICAvL1xuICAgIC8vIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kRGVzY3JpcHRpb25fJytkYXRhLmlkKTtcbiAgICAvLyBpZiAoZGF0YS5kZXNjcmlwdGlvbi5sZW5ndGggPT09IDApXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICdUaGlzIGdvb2QgZG9udCBoYXZlIGRlc2NyaXB0aW9uJztcbiAgICAvLyBlbHNlXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbiAtICcgKyBkYXRhLmRlc2NyaXB0aW9uO1xuICAgIC8vXG4gICAgLy8gbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAvLyBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXG4gICAgLy8gYnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWRkJylcbiAgICAvLyBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGRhdGEuaWQpXG4gICAgLy8gYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnV0dG9uQWRkJylcbiAgICAvLyBpZiAoZGF0YS5jb3VudCA9PT0gMClcbiAgICAvLyAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAvLyBnb29kLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICAvLyBnb29kLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuICAgIC8vXG4gICAgLy8gZ29vZC5zdHlsZS5kaXNwbGF5ID0gJ2luaGVyaXQnXG59XG5cbmZ1bmN0aW9uIHhocihyZXNvbHZlLCByZWplY3QsIHVybCwgbWV0aG9kLCBmb3JtRGF0YSl7XG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCAmJiB0aGlzLnN0YXR1c1RleHQgPT09IFwiT0tcIilcbiAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZWplY3QoXCJFUlJPUlwiKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgeGhyLnNlbmQoZm9ybURhdGEpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nID0gRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=