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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Routing = __webpack_require__(/*! ../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js-routes.json */ "./assets/js-routes.json");

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

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
var category_field_add = document.getElementById('category_add_field');
category_field_add.addEventListener('click', function (event) {
  axios.post(Routing.generate('addCategoryField'), {
    'id': document.getElementById('properties').childElementCount + 1
  }).then(function (response) {
    var child = document.createElement('div');
    child.innerHTML = JSON.parse(response.data)[0];
    document.getElementById('properties').appendChild(child);
  });
});
var category_button_select = document.getElementById('good_category');
category_button_select.addEventListener('change', function (event) {
  axios.post(Routing.generate('getCategoryField', {
    'id': event.target[event.target.selectedIndex].id
  }), {
    'id': event.target[event.target.selectedIndex].id
  }).then(function (response) {
    console.log(response.data);
  });
});
var category_button_save = document.getElementById('category_save');
category_button_save.addEventListener('click', function (event) {
  var data = {
    'fields': {},
    'name': document.getElementById('category_name').value
  };
  var iterator = 1;

  var _iterator = _createForOfIteratorHelper(document.getElementById('properties').children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var field = 'field_' + iterator;
      data["fields"][field] = {
        "name": item.children.item(1).value,
        "type": item.children.item(3).selectedIndex
      };
      iterator++;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  axios.post(Routing.generate('addCategory'), {
    data: data
  }).then(function (response) {
    console.log(response.data);
  });
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

/***/ })

},[["./assets/admin.js","runtime","vendors~admin~cart~main","vendors~admin","admin~cart~main"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4uanMiXSwibmFtZXMiOlsiUm91dGluZyIsInJlcXVpcmUiLCJSb3V0ZXMiLCJheGlvcyIsInNldFJvdXRpbmdEYXRhIiwiZ29vZHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZmV0Y2giLCJnZW5lcmF0ZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsIkluc2VydCIsInRhcmdldCIsInR5cGUiLCJjbGFzc05hbWUiLCJuYW1lIiwidmFsdWUiLCJwcmljZSIsImNvbG9yIiwiZGVzY3JpcHRpb24iLCJjb3VudCIsImNhdGVnb3J5IiwiY2F0ZWdvcnlfb3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsImlkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cmwiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ4aHJSZXEiLCJzZXRUaW1lb3V0IiwiaXNOYU4iLCJwYXJzZUludCIsInVzZXIiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJzdHlsZSIsIk51bWJlciIsImJvZHkiLCJnb29kIiwiY2F0ZWdvcnlfZmllbGRfYWRkIiwicG9zdCIsImNoaWxkRWxlbWVudENvdW50IiwiY2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwicGFyc2UiLCJhcHBlbmRDaGlsZCIsImNhdGVnb3J5X2J1dHRvbl9zZWxlY3QiLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcnlfYnV0dG9uX3NhdmUiLCJpdGVyYXRvciIsImNoaWxkcmVuIiwiaXRlbSIsImZpZWxkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsImZvcm0iLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVUZXh0Tm9kZSIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHdKQUFELENBQXJCOztBQUNBLElBQUlDLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyxpREFBRCxDQUFwQjs7QUFDQSxJQUFNRSxLQUFLLEdBQUdGLG1CQUFPLENBQUMsNENBQUQsQ0FBckI7O0FBQ0FELE9BQU8sQ0FBQ0ksY0FBUixDQUF1QkYsTUFBdkI7QUFDQSxJQUFJRyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFaO0FBRUFELFFBQVEsQ0FBQ0UsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQVVDLEtBQVYsRUFBaUI7QUFDM0RDLE9BQUssQ0FBQ1YsT0FBTyxDQUFDVyxRQUFSLENBQWlCLFVBQWpCLENBQUQsRUFBK0I7QUFDaENDLFVBQU0sRUFBRSxNQUR3QjtBQUVoQ0MsV0FBTyxFQUFFO0FBQUMsMEJBQW9CO0FBQXJCO0FBRnVCLEdBQS9CLENBQUwsQ0FJS0MsSUFKTCxDQUlVLFVBQUFDLFFBQVE7QUFBQSxXQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtBQUFBLEdBSmxCLEVBS0tGLElBTEwsQ0FLVSxVQUFBRyxNQUFNLEVBQUk7QUFDWixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELE1BQU0sQ0FBQ0UsTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBd0M7QUFDcENFLFlBQU0sQ0FBQ0gsTUFBTSxDQUFDQyxDQUFELENBQVAsQ0FBTjtBQUNIO0FBQ0osR0FUTDtBQVVILENBWEQ7QUFhQVosUUFBUSxDQUFDRSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ2hELE1BQUlZLE1BQU0sR0FBR1osS0FBSyxDQUFDWSxNQUFuQjs7QUFDQSxNQUFJQSxNQUFN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TixDQUFrQmtCLElBQWxCO0FBQ0gsQyIsImZpbGUiOiJhZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBSb3V0aW5nID0gcmVxdWlyZShcIi4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XG5sZXQgUm91dGVzID0gcmVxdWlyZSgnLi9qcy1yb3V0ZXMuanNvbicpO1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xubGV0IGdvb2RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2REZWxldGUnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGZldGNoKFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwifVxuICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgSW5zZXJ0KHJlc3VsdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC50eXBlID09PSBcImJ1dHRvblwiICYmIHRhcmdldC5jbGFzc05hbWUgPT09IFwic3VibWl0QnV0dG9uXCIpIHtcbiAgICAgICAgLy8gZ2V0IERBVEFcbiAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZF9uYW1lJykudmFsdWVcbiAgICAgICAgbGV0IHByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfcHJpY2UnKS52YWx1ZVxuICAgICAgICBsZXQgY29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZF9jb2xvcicpLnZhbHVlXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kX2Rlc2NyaXB0aW9uJykudmFsdWVcbiAgICAgICAgbGV0IGNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfY291bnQnKS52YWx1ZVxuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZF9jYXRlZ29yeScpXG4gICAgICAgIGxldCBjYXRlZ29yeV9vcHRpb24gPSBjYXRlZ29yeVtjYXRlZ29yeS5zZWxlY3RlZEluZGV4XS5pZFxuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnYWRkR29vZCcpO1xuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IGNhdGVnb3J5Lmxlbmd0aCA9PT0gMCA/IFwibnVsbFwiIDogY2F0ZWdvcnlcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICduYW1lJzogbmFtZSxcbiAgICAgICAgICAgICAgICAncHJpY2UnOiBwcmljZSxcbiAgICAgICAgICAgICAgICAnY29sb3InOiBjb2xvcixcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAnY291bnQnOiBjb3VudCxcbiAgICAgICAgICAgICAgICAnY2F0ZWdvcnknOiBjYXRlZ29yeV9vcHRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgICAgICAgeGhyUmVxKHJlc29sdmUsIHJlamVjdCwgdXJsLCBcIlBPU1RcIiwgZm9ybURhdGEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQudmFsdWUgPSAnU3VibWl0dGVkJztcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnZhbHVlID0gXCJTdWJtaXRcIlxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHRhcmdldC50eXBlID09PSBcImJ1dHRvblwiICYmIHRhcmdldC5jbGFzc05hbWUgPT09IFwiZGVsZXRlQnV0dG9uXCIgJiYgaXNOYU4ocGFyc2VJbnQodGFyZ2V0LmlkKSkgPT09IGZhbHNlKSB7XG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIHRhcmdldC5pZClcbiAgICAgICAgICAgIHhoclJlcShyZXNvbHZlLCByZWplY3QsIFJvdXRpbmcuZ2VuZXJhdGUoJ3JlbW92ZVVzZXInLCB7aWQ6IHRhcmdldC5pZH0pLCBcIlBPU1RcIiwgZm9ybURhdGEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyXycgKyB0YXJnZXQuaWQpXG4gICAgICAgICAgICAgICAgdXNlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHVzZXIpXG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICBpZiAodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJwcm9tdEJ1dHRvblwiICYmIGlzTmFOKHBhcnNlSW50KHRhcmdldC5pZCkpID09PSBmYWxzZSkge1xuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWQnLCB0YXJnZXQuaWQpXG4gICAgICAgICAgICB4aHJSZXEocmVzb2x2ZSwgcmVqZWN0LCBSb3V0aW5nLmdlbmVyYXRlKCdwcm9tdFVzZXInLCB7aWQ6IHRhcmdldC5pZH0pLCBcIlBPU1RcIiwgZm9ybURhdGEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbF8nICsgdGFyZ2V0LmlkKVxuICAgICAgICAgICAgICAgIHVzZXIuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXIuc3R5bGUuY29sb3IgPSBcImJsYWNrXCJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcblxuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHRhcmdldC50eXBlID09PSBcImJ1dHRvblwiICYmIGlzTmFOKHBhcnNlSW50KE51bWJlcih0YXJnZXQuaWQpKSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkJywgdGFyZ2V0LmlkKVxuICAgICAgICBmZXRjaChSb3V0aW5nLmdlbmVyYXRlKCdyZW1vdmVHb29kJywge2lkOiB0YXJnZXQuaWR9KSwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwifSxcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBnb29kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfJyArIHRhcmdldC5pZClcbiAgICAgICAgICAgICAgICBnb29kLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZClcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSlcblxubGV0IGNhdGVnb3J5X2ZpZWxkX2FkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeV9hZGRfZmllbGQnKTtcbmNhdGVnb3J5X2ZpZWxkX2FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnYWRkQ2F0ZWdvcnlGaWVsZCcpLCB7XG4gICAgICAgICdpZCc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9wZXJ0aWVzJykuY2hpbGRFbGVtZW50Q291bnQgKyAxXG4gICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgY2hpbGQuaW5uZXJIVE1MID0gSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhKVswXVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb3BlcnRpZXMnKS5hcHBlbmRDaGlsZChjaGlsZClcbiAgICAgICAgfSlcbn0pXG5cbmxldCBjYXRlZ29yeV9idXR0b25fc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfY2F0ZWdvcnknKTtcbmNhdGVnb3J5X2J1dHRvbl9zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdnZXRDYXRlZ29yeUZpZWxkJywgeydpZCc6ICBldmVudC50YXJnZXRbZXZlbnQudGFyZ2V0LnNlbGVjdGVkSW5kZXhdLmlkfSksIHtcbiAgICAgICAgJ2lkJzogZXZlbnQudGFyZ2V0W2V2ZW50LnRhcmdldC5zZWxlY3RlZEluZGV4XS5pZFxuICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbn0pXG5cbmxldCBjYXRlZ29yeV9idXR0b25fc2F2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeV9zYXZlJyk7XG5jYXRlZ29yeV9idXR0b25fc2F2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGxldCBkYXRhID0geydmaWVsZHMnOiB7fSwgJ25hbWUnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnlfbmFtZScpLnZhbHVlfTtcbiAgICBsZXQgaXRlcmF0b3IgPSAxXG4gICAgZm9yIChsZXQgaXRlbSBvZiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvcGVydGllcycpLmNoaWxkcmVuKSB7XG4gICAgICAgIGxldCBmaWVsZCA9ICdmaWVsZF8nICsgaXRlcmF0b3JcbiAgICAgICAgZGF0YVtcImZpZWxkc1wiXVtmaWVsZF0gPSB7XG4gICAgICAgICAgICBcIm5hbWVcIjogaXRlbS5jaGlsZHJlbi5pdGVtKDEpLnZhbHVlLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IGl0ZW0uY2hpbGRyZW4uaXRlbSgzKS5zZWxlY3RlZEluZGV4XG4gICAgICAgIH1cbiAgICAgICAgaXRlcmF0b3IrK1xuICAgIH1cbiAgICBheGlvcy5wb3N0KFJvdXRpbmcuZ2VuZXJhdGUoJ2FkZENhdGVnb3J5Jykse1xuICAgICAgICBkYXRhXG4gICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxufSlcblxuZnVuY3Rpb24geGhyUmVxKHJlc29sdmUsIHJlamVjdCwgdXJsLCBtZXRob2QsIGZvcm1EYXRhKSB7XG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCAmJiB0aGlzLnN0YXR1c1RleHQgPT09IFwiT0tcIilcbiAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZWplY3QoXCJFUlJPUlwiKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgeGhyLnNlbmQoZm9ybURhdGEpO1xufVxuXG5mdW5jdGlvbiBJbnNlcnQoZGF0YSkge1xuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5tZXRob2QgPSBcIlBPU1RcIjtcbiAgICBmb3JtLmlkID0gXCJnb29kX1wiICsgZGF0YS5pZDtcblxuICAgIGxldCBnb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBnb29kLnNldEF0dHJpYnV0ZSgnaWQnLCBcImdvb2ROYW1lX1wiICsgZGF0YS5pZClcbiAgICBnb29kLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEubmFtZSArIFwiIChcIiArIGRhdGEuaWQgKyBcIilcIikpO1xuXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGRhdGEuaWQpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBcIkRlbGV0ZVwiKVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChnb29kKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgIGdvb2RzLmFwcGVuZENoaWxkKGZvcm0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==