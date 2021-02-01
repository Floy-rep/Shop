(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin"],{

/***/ "./assets/admin.js":
/*!*************************!*\
  !*** ./assets/admin.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

var Routing = __webpack_require__(/*! ../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js-routes.json */ "./assets/js-routes.json");

Routing.setRoutingData(Routes);
var goods = document.getElementById('goodDelete');
document.addEventListener('DOMContentLoaded', function (event) {
  fetch(Routing.generate('getGoods'), {
    method: 'POST',
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    }
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    for (var i = 0; i < result.length; i++) {
      Insert(result[i]);
    }
  });
});
document.addEventListener('click', function (event) {
  var target = event.target;

  if (target.type === "button" && target.className === "submitButton") {
    // get DATA
    var name = document.getElementById('good_name').value;
    var price = document.getElementById('good_price').value;
    var color = document.getElementById('good_color').value;
    var description = document.getElementById('good_description').value;
    var count = document.getElementById('good_count').value;
    var category = document.getElementById('good_category');
    var category_option = category[category.selectedIndex].id;
    new Promise(function (resolve, reject) {
      var url = Routing.generate('addGood');
      var formData = new FormData();
      category = category.length === 0 ? "null" : category;
      var data = {
        'name': name,
        'price': price,
        'color': color,
        'description': description,
        'count': count,
        'category': category_option
      };
      formData.append('data', JSON.stringify(data));
      xhrReq(resolve, reject, url, "POST", formData);
    }).then(function (response) {
      target.value = 'Submitted';
      setTimeout(function () {
        target.value = "Submit";
      }, 3000);
    });
  }

  if (target.type === "button" && target.className === "deleteButton" && isNaN(parseInt(target.id)) === false) {
    new Promise(function (resolve, reject) {
      var formData = new FormData();
      formData.append('id', target.id);
      xhrReq(resolve, reject, Routing.generate('removeUser', {
        id: target.id
      }), "POST", formData);
    }).then(function (response) {
      var user = document.getElementById('user_' + target.id);
      user.parentNode.removeChild(user);
    });
  }

  if (target.type === "button" && target.className === "promtButton" && isNaN(parseInt(target.id)) === false) {
    new Promise(function (resolve, reject) {
      var formData = new FormData();
      formData.append('id', target.id);
      xhrReq(resolve, reject, Routing.generate('promtUser', {
        id: target.id
      }), "POST", formData);
    }).then(function (response) {
      var user = document.getElementById('email_' + target.id);
      user.style.color = "green";
      setTimeout(function () {
        user.style.color = "black";
      }, 3000);
    });
  }

  if (target.type === "button" && isNaN(parseInt(Number(target.id))) === false) {
    var formData = new FormData();
    formData.append('id', target.id);
    fetch(Routing.generate('removeGood', {
      id: target.id
    }), {
      method: "POST",
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      body: formData
    }).then(function (response) {
      return response.json();
    }).then(function (result) {
      var good = document.getElementById('good_' + target.id);
      good.parentNode.removeChild(good);
    });
  }
});

function xhrReq(resolve, reject, url, method, formData) {
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

function Insert(data) {
  var form = document.createElement('form');
  form.method = "POST";
  form.id = "good_" + data.id;
  var good = document.createElement('h4');
  good.setAttribute('id', "goodName_" + data.id);
  good.appendChild(document.createTextNode(data.name + " (" + data.id + ")"));
  var button = document.createElement('input');
  button.type = 'button';
  button.setAttribute('id', data.id);
  button.setAttribute('value', "Delete");
  form.appendChild(good);
  form.appendChild(button);
  goods.appendChild(form);
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

},[["./assets/admin.js","runtime","vendors~admin~cart~main","vendors~admin~cart","admin~cart~main"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sIm5hbWVzIjpbIlJvdXRpbmciLCJyZXF1aXJlIiwiUm91dGVzIiwic2V0Um91dGluZ0RhdGEiLCJnb29kcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJmZXRjaCIsImdlbmVyYXRlIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiSW5zZXJ0IiwidGFyZ2V0IiwidHlwZSIsImNsYXNzTmFtZSIsIm5hbWUiLCJ2YWx1ZSIsInByaWNlIiwiY29sb3IiLCJkZXNjcmlwdGlvbiIsImNvdW50IiwiY2F0ZWdvcnkiLCJjYXRlZ29yeV9vcHRpb24iLCJzZWxlY3RlZEluZGV4IiwiaWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJkYXRhIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInhoclJlcSIsInNldFRpbWVvdXQiLCJpc05hTiIsInBhcnNlSW50IiwidXNlciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInN0eWxlIiwiTnVtYmVyIiwiYm9keSIsImdvb2QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJmb3JtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyx5Q0FBeUM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJhZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBSb3V0aW5nID0gcmVxdWlyZShcIi4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XG5sZXQgUm91dGVzID0gcmVxdWlyZSgnLi9qcy1yb3V0ZXMuanNvbicpO1xuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xubGV0IGdvb2RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2REZWxldGUnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGZldGNoKFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwifVxuICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgSW5zZXJ0KHJlc3VsdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC50eXBlID09PSBcImJ1dHRvblwiICYmIHRhcmdldC5jbGFzc05hbWUgPT09IFwic3VibWl0QnV0dG9uXCIpIHtcbiAgICAgICAgLy8gZ2V0IERBVEFcbiAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZF9uYW1lJykudmFsdWVcbiAgICAgICAgbGV0IHByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfcHJpY2UnKS52YWx1ZVxuICAgICAgICBsZXQgY29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZF9jb2xvcicpLnZhbHVlXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kX2Rlc2NyaXB0aW9uJykudmFsdWVcbiAgICAgICAgbGV0IGNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfY291bnQnKS52YWx1ZVxuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZF9jYXRlZ29yeScpXG4gICAgICAgIGxldCBjYXRlZ29yeV9vcHRpb24gPSBjYXRlZ29yeVtjYXRlZ29yeS5zZWxlY3RlZEluZGV4XS5pZFxuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnYWRkR29vZCcpO1xuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IGNhdGVnb3J5Lmxlbmd0aCA9PT0gMCA/IFwibnVsbFwiIDogY2F0ZWdvcnlcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICduYW1lJzogbmFtZSxcbiAgICAgICAgICAgICAgICAncHJpY2UnOiBwcmljZSxcbiAgICAgICAgICAgICAgICAnY29sb3InOiBjb2xvcixcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAnY291bnQnOiBjb3VudCxcbiAgICAgICAgICAgICAgICAnY2F0ZWdvcnknOiBjYXRlZ29yeV9vcHRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgICAgICAgeGhyUmVxKHJlc29sdmUsIHJlamVjdCwgdXJsLCBcIlBPU1RcIiwgZm9ybURhdGEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQudmFsdWUgPSAnU3VibWl0dGVkJztcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnZhbHVlID0gXCJTdWJtaXRcIlxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHRhcmdldC50eXBlID09PSBcImJ1dHRvblwiICYmIHRhcmdldC5jbGFzc05hbWUgPT09IFwiZGVsZXRlQnV0dG9uXCIgJiYgaXNOYU4ocGFyc2VJbnQodGFyZ2V0LmlkKSkgPT09IGZhbHNlKSB7XG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIHRhcmdldC5pZClcbiAgICAgICAgICAgIHhoclJlcShyZXNvbHZlLCByZWplY3QsIFJvdXRpbmcuZ2VuZXJhdGUoJ3JlbW92ZVVzZXInLCB7aWQ6IHRhcmdldC5pZH0pLCBcIlBPU1RcIiwgZm9ybURhdGEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyXycgKyB0YXJnZXQuaWQpXG4gICAgICAgICAgICAgICAgdXNlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHVzZXIpXG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICBpZiAodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJwcm9tdEJ1dHRvblwiICYmIGlzTmFOKHBhcnNlSW50KHRhcmdldC5pZCkpID09PSBmYWxzZSkge1xuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWQnLCB0YXJnZXQuaWQpXG4gICAgICAgICAgICB4aHJSZXEocmVzb2x2ZSwgcmVqZWN0LCBSb3V0aW5nLmdlbmVyYXRlKCdwcm9tdFVzZXInLCB7aWQ6IHRhcmdldC5pZH0pLCBcIlBPU1RcIiwgZm9ybURhdGEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbF8nICsgdGFyZ2V0LmlkKVxuICAgICAgICAgICAgICAgIHVzZXIuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXIuc3R5bGUuY29sb3IgPSBcImJsYWNrXCJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcblxuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHRhcmdldC50eXBlID09PSBcImJ1dHRvblwiICYmIGlzTmFOKHBhcnNlSW50KE51bWJlcih0YXJnZXQuaWQpKSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkJywgdGFyZ2V0LmlkKVxuICAgICAgICBmZXRjaChSb3V0aW5nLmdlbmVyYXRlKCdyZW1vdmVHb29kJywge2lkOiB0YXJnZXQuaWR9KSwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwifSxcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBnb29kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfJyArIHRhcmdldC5pZClcbiAgICAgICAgICAgICAgICBnb29kLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZClcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSlcblxuZnVuY3Rpb24geGhyUmVxKHJlc29sdmUsIHJlamVjdCwgdXJsLCBtZXRob2QsIGZvcm1EYXRhKSB7XG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCAmJiB0aGlzLnN0YXR1c1RleHQgPT09IFwiT0tcIilcbiAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZWplY3QoXCJFUlJPUlwiKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgeGhyLnNlbmQoZm9ybURhdGEpO1xufVxuXG5mdW5jdGlvbiBJbnNlcnQoZGF0YSkge1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5tZXRob2QgPSBcIlBPU1RcIjtcbiAgICBmb3JtLmlkID0gXCJnb29kX1wiICsgZGF0YS5pZDtcblxuICAgIGxldCBnb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBnb29kLnNldEF0dHJpYnV0ZSgnaWQnLCBcImdvb2ROYW1lX1wiK2RhdGEuaWQpXG4gICAgZ29vZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhLm5hbWUgKyBcIiAoXCIgKyBkYXRhLmlkICsgXCIpXCIpKTtcblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkYXRhLmlkKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgXCJEZWxldGVcIilcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZ29vZClcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgICBnb29kcy5hcHBlbmRDaGlsZChmb3JtKVxufSIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJykuZjtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG5cbnZhciBOVU1CRVIgPSAnTnVtYmVyJztcbnZhciBOYXRpdmVOdW1iZXIgPSBnbG9iYWxbTlVNQkVSXTtcbnZhciBOdW1iZXJQcm90b3R5cGUgPSBOYXRpdmVOdW1iZXIucHJvdG90eXBlO1xuXG4vLyBPcGVyYSB+MTIgaGFzIGJyb2tlbiBPYmplY3QjdG9TdHJpbmdcbnZhciBCUk9LRU5fQ0xBU1NPRiA9IGNsYXNzb2YoY3JlYXRlKE51bWJlclByb3RvdHlwZSkpID09IE5VTUJFUjtcblxuLy8gYFRvTnVtYmVyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9udW1iZXJcbnZhciB0b051bWJlciA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgaXQgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgZmFsc2UpO1xuICB2YXIgZmlyc3QsIHRoaXJkLCByYWRpeCwgbWF4Q29kZSwgZGlnaXRzLCBsZW5ndGgsIGluZGV4LCBjb2RlO1xuICBpZiAodHlwZW9mIGl0ID09ICdzdHJpbmcnICYmIGl0Lmxlbmd0aCA+IDIpIHtcbiAgICBpdCA9IHRyaW0oaXQpO1xuICAgIGZpcnN0ID0gaXQuY2hhckNvZGVBdCgwKTtcbiAgICBpZiAoZmlyc3QgPT09IDQzIHx8IGZpcnN0ID09PSA0NSkge1xuICAgICAgdGhpcmQgPSBpdC5jaGFyQ29kZUF0KDIpO1xuICAgICAgaWYgKHRoaXJkID09PSA4OCB8fCB0aGlyZCA9PT0gMTIwKSByZXR1cm4gTmFOOyAvLyBOdW1iZXIoJysweDEnKSBzaG91bGQgYmUgTmFOLCBvbGQgVjggZml4XG4gICAgfSBlbHNlIGlmIChmaXJzdCA9PT0gNDgpIHtcbiAgICAgIHN3aXRjaCAoaXQuY2hhckNvZGVBdCgxKSkge1xuICAgICAgICBjYXNlIDY2OiBjYXNlIDk4OiByYWRpeCA9IDI7IG1heENvZGUgPSA0OTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgb2YgL14wYlswMV0rJC9pXG4gICAgICAgIGNhc2UgNzk6IGNhc2UgMTExOiByYWRpeCA9IDg7IG1heENvZGUgPSA1NTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgb2YgL14wb1swLTddKyQvaVxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gK2l0O1xuICAgICAgfVxuICAgICAgZGlnaXRzID0gaXQuc2xpY2UoMik7XG4gICAgICBsZW5ndGggPSBkaWdpdHMubGVuZ3RoO1xuICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvZGUgPSBkaWdpdHMuY2hhckNvZGVBdChpbmRleCk7XG4gICAgICAgIC8vIHBhcnNlSW50IHBhcnNlcyBhIHN0cmluZyB0byBhIGZpcnN0IHVuYXZhaWxhYmxlIHN5bWJvbFxuICAgICAgICAvLyBidXQgVG9OdW1iZXIgc2hvdWxkIHJldHVybiBOYU4gaWYgYSBzdHJpbmcgY29udGFpbnMgdW5hdmFpbGFibGUgc3ltYm9sc1xuICAgICAgICBpZiAoY29kZSA8IDQ4IHx8IGNvZGUgPiBtYXhDb2RlKSByZXR1cm4gTmFOO1xuICAgICAgfSByZXR1cm4gcGFyc2VJbnQoZGlnaXRzLCByYWRpeCk7XG4gICAgfVxuICB9IHJldHVybiAraXQ7XG59O1xuXG4vLyBgTnVtYmVyYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1udW1iZXItY29uc3RydWN0b3JcbmlmIChpc0ZvcmNlZChOVU1CRVIsICFOYXRpdmVOdW1iZXIoJyAwbzEnKSB8fCAhTmF0aXZlTnVtYmVyKCcwYjEnKSB8fCBOYXRpdmVOdW1iZXIoJysweDEnKSkpIHtcbiAgdmFyIE51bWJlcldyYXBwZXIgPSBmdW5jdGlvbiBOdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgaXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMSA/IDAgOiB2YWx1ZTtcbiAgICB2YXIgZHVtbXkgPSB0aGlzO1xuICAgIHJldHVybiBkdW1teSBpbnN0YW5jZW9mIE51bWJlcldyYXBwZXJcbiAgICAgIC8vIGNoZWNrIG9uIDEuLmNvbnN0cnVjdG9yKGZvbykgY2FzZVxuICAgICAgJiYgKEJST0tFTl9DTEFTU09GID8gZmFpbHMoZnVuY3Rpb24gKCkgeyBOdW1iZXJQcm90b3R5cGUudmFsdWVPZi5jYWxsKGR1bW15KTsgfSkgOiBjbGFzc29mKGR1bW15KSAhPSBOVU1CRVIpXG4gICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IE5hdGl2ZU51bWJlcih0b051bWJlcihpdCkpLCBkdW1teSwgTnVtYmVyV3JhcHBlcikgOiB0b051bWJlcihpdCk7XG4gIH07XG4gIGZvciAodmFyIGtleXMgPSBERVNDUklQVE9SUyA/IGdldE93blByb3BlcnR5TmFtZXMoTmF0aXZlTnVtYmVyKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTMjAxNSAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTMjAxNSBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG4gICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXIsJyArXG4gICAgLy8gRVNOZXh0XG4gICAgJ2Zyb21TdHJpbmcscmFuZ2UnXG4gICkuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspIHtcbiAgICBpZiAoaGFzKE5hdGl2ZU51bWJlciwga2V5ID0ga2V5c1tqXSkgJiYgIWhhcyhOdW1iZXJXcmFwcGVyLCBrZXkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShOdW1iZXJXcmFwcGVyLCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihOYXRpdmVOdW1iZXIsIGtleSkpO1xuICAgIH1cbiAgfVxuICBOdW1iZXJXcmFwcGVyLnByb3RvdHlwZSA9IE51bWJlclByb3RvdHlwZTtcbiAgTnVtYmVyUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyV3JhcHBlcjtcbiAgcmVkZWZpbmUoZ2xvYmFsLCBOVU1CRVIsIE51bWJlcldyYXBwZXIpO1xufVxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=