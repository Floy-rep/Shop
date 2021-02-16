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
  axios.post(Routing.generate('getCategoryFields', {
    'id': event.target[event.target.selectedIndex].id
  }), {
    'id': event.target[event.target.selectedIndex].id
  }).then(function (response) {
    var fields = document.getElementById('fields');

    while (fields.lastElementChild) {
      fields.removeChild(fields.lastElementChild);
    }

    for (var i = 0; i < response.data.length; i++) {
      fields.innerHTML += response.data[i];
    }
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
        "type": item.children.item(3).value
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4uanMiXSwibmFtZXMiOlsiUm91dGluZyIsInJlcXVpcmUiLCJSb3V0ZXMiLCJheGlvcyIsInNldFJvdXRpbmdEYXRhIiwiZ29vZHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZmV0Y2giLCJnZW5lcmF0ZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsIkluc2VydCIsInRhcmdldCIsInR5cGUiLCJjbGFzc05hbWUiLCJuYW1lIiwidmFsdWUiLCJwcmljZSIsImNvbG9yIiwiZGVzY3JpcHRpb24iLCJjb3VudCIsImNhdGVnb3J5IiwiY2F0ZWdvcnlfb3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsImlkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cmwiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ4aHJSZXEiLCJzZXRUaW1lb3V0IiwiaXNOYU4iLCJwYXJzZUludCIsInVzZXIiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJzdHlsZSIsIk51bWJlciIsImJvZHkiLCJnb29kIiwiY2F0ZWdvcnlfZmllbGRfYWRkIiwicG9zdCIsImNoaWxkRWxlbWVudENvdW50IiwiY2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwicGFyc2UiLCJhcHBlbmRDaGlsZCIsImNhdGVnb3J5X2J1dHRvbl9zZWxlY3QiLCJmaWVsZHMiLCJsYXN0RWxlbWVudENoaWxkIiwiY2F0ZWdvcnlfYnV0dG9uX3NhdmUiLCJpdGVyYXRvciIsImNoaWxkcmVuIiwiaXRlbSIsImZpZWxkIiwiY29uc29sZSIsImxvZyIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJmb3JtIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlVGV4dE5vZGUiLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyx3SkFBRCxDQUFyQjs7QUFDQSxJQUFJQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsaURBQUQsQ0FBcEI7O0FBQ0EsSUFBTUUsS0FBSyxHQUFHRixtQkFBTyxDQUFDLDRDQUFELENBQXJCOztBQUNBRCxPQUFPLENBQUNJLGNBQVIsQ0FBdUJGLE1BQXZCO0FBQ0EsSUFBSUcsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBWjtBQUVBRCxRQUFRLENBQUNFLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxVQUFVQyxLQUFWLEVBQWlCO0FBQzNEQyxPQUFLLENBQUNWLE9BQU8sQ0FBQ1csUUFBUixDQUFpQixVQUFqQixDQUFELEVBQStCO0FBQ2hDQyxVQUFNLEVBQUUsTUFEd0I7QUFFaENDLFdBQU8sRUFBRTtBQUFDLDBCQUFvQjtBQUFyQjtBQUZ1QixHQUEvQixDQUFMLENBSUtDLElBSkwsQ0FJVSxVQUFBQyxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxHQUpsQixFQUtLRixJQUxMLENBS1UsVUFBQUcsTUFBTSxFQUFJO0FBQ1osU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxNQUFNLENBQUNFLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDRSxZQUFNLENBQUNILE1BQU0sQ0FBQ0MsQ0FBRCxDQUFQLENBQU47QUFDSDtBQUNKLEdBVEw7QUFVSCxDQVhEO0FBYUFaLFFBQVEsQ0FBQ0UsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBVUMsS0FBVixFQUFpQjtBQUNoRCxNQUFJWSxNQUFNLEdBQUdaLEtBQUss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QUlvRCxNQUFNLEdBQUcvRSxRQUFRLENBQUNxRCxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQTBCLFFBQU0sQ0FBQy9ELElBQVAsR0FBYyxRQUFkO0FBQ0ErRCxRQUFNLENBQUNGLFlBQVAsQ0FBb0IsSUFBcEIsRUFBMEIzQyxJQUFJLENBQUNQLEVBQS9CO0FBQ0FvRCxRQUFNLENBQUNGLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkIsUUFBN0I7QUFFQUQsTUFBSSxDQUFDcEIsV0FBTCxDQUFpQlIsSUFBakI7QUFDQTRCLE1BQUksQ0FBQ3BCLFdBQUwsQ0FBaUJ1QixNQUFqQjtBQUNBaEYsT0FBSyxDQUFDeUQsV0FBTixDQUFrQm9CLElBQWxCO0FBQ0gsQyIsImZpbGUiOiJhZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBSb3V0aW5nID0gcmVxdWlyZShcIi4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XG5sZXQgUm91dGVzID0gcmVxdWlyZSgnLi9qcy1yb3V0ZXMuanNvbicpO1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xubGV0IGdvb2RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2REZWxldGUnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGZldGNoKFJvdXRpbmcuZ2VuZXJhdGUoJ2dldEdvb2RzJyksIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwifVxuICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgSW5zZXJ0KHJlc3VsdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC50eXBlID09PSBcImJ1dHRvblwiICYmIHRhcmdldC5jbGFzc05hbWUgPT09IFwic3VibWl0QnV0dG9uXCIpIHtcbiAgICAgICAgLy8gZ2V0IERBVEFcbiAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZF9uYW1lJykudmFsdWVcbiAgICAgICAgbGV0IHByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfcHJpY2UnKS52YWx1ZVxuICAgICAgICBsZXQgY29sb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZF9jb2xvcicpLnZhbHVlXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kX2Rlc2NyaXB0aW9uJykudmFsdWVcbiAgICAgICAgbGV0IGNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfY291bnQnKS52YWx1ZVxuICAgICAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZF9jYXRlZ29yeScpXG4gICAgICAgIGxldCBjYXRlZ29yeV9vcHRpb24gPSBjYXRlZ29yeVtjYXRlZ29yeS5zZWxlY3RlZEluZGV4XS5pZFxuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnYWRkR29vZCcpO1xuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBjYXRlZ29yeSA9IGNhdGVnb3J5Lmxlbmd0aCA9PT0gMCA/IFwibnVsbFwiIDogY2F0ZWdvcnlcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICduYW1lJzogbmFtZSxcbiAgICAgICAgICAgICAgICAncHJpY2UnOiBwcmljZSxcbiAgICAgICAgICAgICAgICAnY29sb3InOiBjb2xvcixcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAnY291bnQnOiBjb3VudCxcbiAgICAgICAgICAgICAgICAnY2F0ZWdvcnknOiBjYXRlZ29yeV9vcHRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgICAgICAgeGhyUmVxKHJlc29sdmUsIHJlamVjdCwgdXJsLCBcIlBPU1RcIiwgZm9ybURhdGEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQudmFsdWUgPSAnU3VibWl0dGVkJztcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnZhbHVlID0gXCJTdWJtaXRcIlxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHRhcmdldC50eXBlID09PSBcImJ1dHRvblwiICYmIHRhcmdldC5jbGFzc05hbWUgPT09IFwiZGVsZXRlQnV0dG9uXCIgJiYgaXNOYU4ocGFyc2VJbnQodGFyZ2V0LmlkKSkgPT09IGZhbHNlKSB7XG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIHRhcmdldC5pZClcbiAgICAgICAgICAgIHhoclJlcShyZXNvbHZlLCByZWplY3QsIFJvdXRpbmcuZ2VuZXJhdGUoJ3JlbW92ZVVzZXInLCB7aWQ6IHRhcmdldC5pZH0pLCBcIlBPU1RcIiwgZm9ybURhdGEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyXycgKyB0YXJnZXQuaWQpXG4gICAgICAgICAgICAgICAgdXNlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHVzZXIpXG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICBpZiAodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJwcm9tdEJ1dHRvblwiICYmIGlzTmFOKHBhcnNlSW50KHRhcmdldC5pZCkpID09PSBmYWxzZSkge1xuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWQnLCB0YXJnZXQuaWQpXG4gICAgICAgICAgICB4aHJSZXEocmVzb2x2ZSwgcmVqZWN0LCBSb3V0aW5nLmdlbmVyYXRlKCdwcm9tdFVzZXInLCB7aWQ6IHRhcmdldC5pZH0pLCBcIlBPU1RcIiwgZm9ybURhdGEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbF8nICsgdGFyZ2V0LmlkKVxuICAgICAgICAgICAgICAgIHVzZXIuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXIuc3R5bGUuY29sb3IgPSBcImJsYWNrXCJcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcblxuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHRhcmdldC50eXBlID09PSBcImJ1dHRvblwiICYmIGlzTmFOKHBhcnNlSW50KE51bWJlcih0YXJnZXQuaWQpKSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkJywgdGFyZ2V0LmlkKVxuICAgICAgICBmZXRjaChSb3V0aW5nLmdlbmVyYXRlKCdyZW1vdmVHb29kJywge2lkOiB0YXJnZXQuaWR9KSwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcIlgtUmVxdWVzdGVkLVdpdGhcIjogXCJYTUxIdHRwUmVxdWVzdFwifSxcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBnb29kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfJyArIHRhcmdldC5pZClcbiAgICAgICAgICAgICAgICBnb29kLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ29vZClcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSlcblxubGV0IGNhdGVnb3J5X2ZpZWxkX2FkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeV9hZGRfZmllbGQnKTtcbmNhdGVnb3J5X2ZpZWxkX2FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnYWRkQ2F0ZWdvcnlGaWVsZCcpLCB7XG4gICAgICAgICdpZCc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9wZXJ0aWVzJykuY2hpbGRFbGVtZW50Q291bnQgKyAxXG4gICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgY2hpbGQuaW5uZXJIVE1MID0gSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhKVswXVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb3BlcnRpZXMnKS5hcHBlbmRDaGlsZChjaGlsZClcbiAgICAgICAgfSlcbn0pXG5cbmxldCBjYXRlZ29yeV9idXR0b25fc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfY2F0ZWdvcnknKTtcbmNhdGVnb3J5X2J1dHRvbl9zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdnZXRDYXRlZ29yeUZpZWxkcycsIHsnaWQnOiBldmVudC50YXJnZXRbZXZlbnQudGFyZ2V0LnNlbGVjdGVkSW5kZXhdLmlkfSksIHtcbiAgICAgICAgJ2lkJzogZXZlbnQudGFyZ2V0W2V2ZW50LnRhcmdldC5zZWxlY3RlZEluZGV4XS5pZFxuICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBmaWVsZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmllbGRzJyk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGZpZWxkcy5sYXN0RWxlbWVudENoaWxkKVxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMucmVtb3ZlQ2hpbGQoZmllbGRzLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UuZGF0YS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzLmlubmVySFRNTCArPSByZXNwb25zZS5kYXRhW2ldXG4gICAgICAgIH0pXG59KVxuXG5sZXQgY2F0ZWdvcnlfYnV0dG9uX3NhdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnlfc2F2ZScpO1xuY2F0ZWdvcnlfYnV0dG9uX3NhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBsZXQgZGF0YSA9IHsnZmllbGRzJzoge30sICduYW1lJzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5X25hbWUnKS52YWx1ZX07XG4gICAgbGV0IGl0ZXJhdG9yID0gMVxuICAgIGZvciAobGV0IGl0ZW0gb2YgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb3BlcnRpZXMnKS5jaGlsZHJlbikge1xuICAgICAgICBsZXQgZmllbGQgPSAnZmllbGRfJyArIGl0ZXJhdG9yXG4gICAgICAgIGRhdGFbXCJmaWVsZHNcIl1bZmllbGRdID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IGl0ZW0uY2hpbGRyZW4uaXRlbSgxKS52YWx1ZSxcbiAgICAgICAgICAgIFwidHlwZVwiOiBpdGVtLmNoaWxkcmVuLml0ZW0oMykudmFsdWVcbiAgICAgICAgfVxuICAgICAgICBpdGVyYXRvcisrXG4gICAgfVxuICAgIGF4aW9zLnBvc3QoUm91dGluZy5nZW5lcmF0ZSgnYWRkQ2F0ZWdvcnknKSx7XG4gICAgICAgIGRhdGFcbiAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG59KVxuXG5mdW5jdGlvbiB4aHJSZXEocmVzb2x2ZSwgcmVqZWN0LCB1cmwsIG1ldGhvZCwgZm9ybURhdGEpIHtcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwICYmIHRoaXMuc3RhdHVzVGV4dCA9PT0gXCJPS1wiKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJlamVjdChcIkVSUk9SXCIpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG59XG5cbmZ1bmN0aW9uIEluc2VydChkYXRhKSB7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLm1ldGhvZCA9IFwiUE9TVFwiO1xuICAgIGZvcm0uaWQgPSBcImdvb2RfXCIgKyBkYXRhLmlkO1xuXG4gICAgbGV0IGdvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGdvb2Quc2V0QXR0cmlidXRlKCdpZCcsIFwiZ29vZE5hbWVfXCIgKyBkYXRhLmlkKVxuICAgIGdvb2QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YS5uYW1lICsgXCIgKFwiICsgZGF0YS5pZCArIFwiKVwiKSk7XG5cbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgZGF0YS5pZClcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIFwiRGVsZXRlXCIpXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGdvb2QpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgZ29vZHMuYXBwZW5kQ2hpbGQoZm9ybSlcbn0iXSwic291cmNlUm9vdCI6IiJ9