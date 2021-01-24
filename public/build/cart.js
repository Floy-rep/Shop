(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart"],{

/***/ "./assets/cart.js":
/*!************************!*\
  !*** ./assets/cart.js ***!
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
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_6__);








var Routing = __webpack_require__(/*! ../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js-routes.json */ "./assets/js-routes.json");

Routing.setRoutingData(Routes);
document.addEventListener('DOMContentLoaded', function (event) {
  new Promise(function (resolve, reject) {
    var url = Routing.generate('getCart');
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.addEventListener('load', function (event) {
      if (this.readyState === 4) {
        if (this.status === 200 && this.statusText === "OK") {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("ERROR");
        }
      }
    });
    xhr.send();
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

  if (target.type === "button" && target.className === "buttonRemove" && isNaN(parseInt(target.id)) === false) {
    new Promise(function (resolve, reject) {
      var url = Routing.generate('removeFromCart', {
        id: target.id
      });
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      formData.append('id', target.id);
      xhr.open("POST", url);
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.addEventListener('load', function (event) {
        if (this.readyState === 4) {
          if (this.status === 200 && this.statusText === "OK") {
            if (typeof JSON.parse(this.responseText)["unicId"] != "undefined") {
              var item_to_remove = document.getElementById('item_' + target.id);
              resolve(JSON.parse(this.responseText));
              item_to_remove.parentNode.removeChild(item_to_remove);
            }
          } else {
            reject("ERROR");
          }
        }
      });
      xhr.send(formData);
    });
  }
});

function Insert(data) {
  var item = document.getElementById('item_' + data.unicId);
  var name = document.getElementById('itemName_' + data.unicId);
  name.innerText = data.name;
  var stuff = document.getElementById('itemStuff_' + data.unicId);
  stuff.innerText = 'Color - ' + data.color + ', Price - ' + data.price + "$" + ", Count - " + data.count;
  var taken = document.getElementById('itemTaken_' + data.unicId);
  taken.innerText = "You take - " + data.taken + " goods";
  var description = document.getElementById('itemDescription_' + data.unicId);
  if (data.description.length === 0) description.innerText = 'This good dont have description';else description.innerText = 'Description - ' + data.description;
  item.appendChild(document.createElement('hr'));
  item.style.display = 'inherit';
}

/***/ })

},[["./assets/cart.js","runtime","vendors~cart~main","cart~main"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY2FydC5qcyJdLCJuYW1lcyI6WyJSb3V0aW5nIiwicmVxdWlyZSIsIlJvdXRlcyIsInNldFJvdXRpbmdEYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybCIsImdlbmVyYXRlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsInRoZW4iLCJyZXNwb25zZSIsImkiLCJsZW5ndGgiLCJJbnNlcnQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ0eXBlIiwiY2xhc3NOYW1lIiwiaXNOYU4iLCJwYXJzZUludCIsImlkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIml0ZW1fdG9fcmVtb3ZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJkYXRhIiwiaXRlbSIsInVuaWNJZCIsIm5hbWUiLCJpbm5lclRleHQiLCJzdHVmZiIsImNvbG9yIiwicHJpY2UiLCJjb3VudCIsInRha2VuIiwiZGVzY3JpcHRpb24iLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFJQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsd0pBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLGlEQUFELENBQXBCOztBQUNBRCxPQUFPLENBQUNHLGNBQVIsQ0FBdUJELE1BQXZCO0FBRUFFLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQVVDLEtBQVYsRUFB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LElBQUksQ0FBQ1UsV0FBTCxDQUFpQjVCLE1BQWpCLEtBQTRCLENBQWhDLEVBQ0k0QixXQUFXLENBQUNOLFNBQVosR0FBd0IsaUNBQXhCLENBREosS0FHSU0sV0FBVyxDQUFDTixTQUFaLEdBQXdCLG1CQUFtQkosSUFBSSxDQUFDVSxXQUFoRDtBQUdKVCxNQUFJLENBQUNVLFdBQUwsQ0FBaUJuRCxRQUFRLENBQUNvRCxhQUFULENBQXVCLElBQXZCLENBQWpCO0FBQ0FYLE1BQUksQ0FBQ1ksS0FBTCxDQUFXQyxPQUFYLEdBQXFCLFNBQXJCO0FBRUgsQyIsImZpbGUiOiJjYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxubGV0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcbmxldCBSb3V0ZXMgPSByZXF1aXJlKCcuL2pzLXJvdXRlcy5qc29uJyk7XG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICBsZXQgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnZ2V0Q2FydCcpO1xuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xuICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChldmVudCl7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCAmJiB0aGlzLnN0YXR1c1RleHQgPT09IFwiT0tcIilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJFUlJPUlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIEluc2VydChyZXNwb25zZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidXR0b25SZW1vdmVcIiAmJiBpc05hTihwYXJzZUludCh0YXJnZXQuaWQpKSA9PT0gZmFsc2UpXG4gICAge1xuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgncmVtb3ZlRnJvbUNhcnQnLCB7aWQ6IHRhcmdldC5pZH0pO1xuICAgICAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIHRhcmdldC5pZClcblxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCk7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcbiAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCAmJiB0aGlzLnN0YXR1c1RleHQgPT09IFwiT0tcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KVtcInVuaWNJZFwiXSAhPSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtX3RvX3JlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtXycrdGFyZ2V0LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fdG9fcmVtb3ZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaXRlbV90b19yZW1vdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJFUlJPUlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG4gICAgICAgIH0pXG4gICAgfVxufSlcblxuZnVuY3Rpb24gSW5zZXJ0KGRhdGEpe1xuICAgIGxldCBpdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1fJytkYXRhLnVuaWNJZCk7XG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbU5hbWVfJytkYXRhLnVuaWNJZCk7XG4gICAgbmFtZS5pbm5lclRleHQgPSBkYXRhLm5hbWU7XG5cbiAgICBsZXQgc3R1ZmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbVN0dWZmXycrZGF0YS51bmljSWQpO1xuICAgIHN0dWZmLmlubmVyVGV4dCA9ICdDb2xvciAtICcrIGRhdGEuY29sb3IgKyAnLCBQcmljZSAtICcgKyBkYXRhLnByaWNlICsgXCIkXCIgKyBcIiwgQ291bnQgLSBcIiArIGRhdGEuY291bnQ7XG5cbiAgICBsZXQgdGFrZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbVRha2VuXycrZGF0YS51bmljSWQpO1xuICAgIHRha2VuLmlubmVyVGV4dCA9IFwiWW91IHRha2UgLSBcIiArIGRhdGEudGFrZW4gKyBcIiBnb29kc1wiXG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbURlc2NyaXB0aW9uXycrZGF0YS51bmljSWQpO1xuICAgIGlmIChkYXRhLmRlc2NyaXB0aW9uLmxlbmd0aCA9PT0gMClcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJ1RoaXMgZ29vZCBkb250IGhhdmUgZGVzY3JpcHRpb24nO1xuICAgIGVsc2VcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uIC0gJyArIGRhdGEuZGVzY3JpcHRpb247XG5cblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG4gICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2luaGVyaXQnXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=