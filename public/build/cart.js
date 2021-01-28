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
            {
              var item_to_remove = document.getElementById('item_' + target.id);
              item_to_remove.parentNode.removeChild(item_to_remove);
              resolve(JSON.parse(this.responseText));
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
  var item = document.getElementById('item_' + data.id);
  var name = document.getElementById('itemName_' + data.id);
  name.innerText = data.name;
  var stuff = document.getElementById('itemStuff_' + data.id);
  stuff.innerText = 'Color - ' + data.color + ', Price - ' + data.price + "$";
  var taken = document.getElementById('itemTaken_' + data.id);
  taken.innerText = "You take - " + data.amount + " goods";
  var description = document.getElementById('itemDescription_' + data.id);
  if (data.description.length === 0) description.innerText = 'This good dont have description';else description.innerText = 'Description - ' + data.description;
  var category = document.getElementById('itemCategory_' + data.id);
  if (data.category !== null) category.innerText = "Category - " + data.category.categoryName;else category.innerText = "Category is undefinded ";
  item.appendChild(document.createElement('hr'));
  item.style.display = 'inherit';
}

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/cart.js","runtime","vendors~admin~cart~main","admin~cart~main"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwibmFtZXMiOlsiUm91dGluZyIsInJlcXVpcmUiLCJSb3V0ZXMiLCJzZXRSb3V0aW5nRGF0YSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1cmwiLCJnZW5lcmF0ZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJpIiwibGVuZ3RoIiwiSW5zZXJ0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidHlwZSIsImNsYXNzTmFtZSIsImlzTmFOIiwicGFyc2VJbnQiLCJpZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJpdGVtX3RvX3JlbW92ZSIsImdldEVsZW1lbnRCeUlkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZGF0YSIsIml0ZW0iLCJuYW1lIiwiaW5uZXJUZXh0Iiwic3R1ZmYiLCJjb2xvciIsInByaWNlIiwidGFrZW4iLCJhbW91bnQiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiY2F0ZWdvcnlOYW1lIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBSUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHdKQUFELENBQXJCOztBQUNBLElBQUlDLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyxpREFBRCxDQUFwQjs7QUFDQUQsT0FBTyxDQUFDRyxjQUFSLENBQXVCRCxNQUF2QjtB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QUFaLEdBQXdCLGlDQUF4QixDQURKLEtBR0lNLFdBQVcsQ0FBQ04sU0FBWixHQUF3QixtQkFBbUJILElBQUksQ0FBQ1MsV0FBaEQ7QUFDSixNQUFJQyxRQUFRLEdBQUdsRCxRQUFRLENBQUNxQyxjQUFULENBQXdCLGtCQUFnQkcsSUFBSSxDQUFDUixFQUE3QyxDQUFmO0FBQ0EsTUFBSVEsSUFBSSxDQUFDVSxRQUFMLEtBQWtCLElBQXRCLEVBQ0lBLFFBQVEsQ0FBQ1AsU0FBVCxHQUFxQixnQkFBZ0JILElBQUksQ0FBQ1UsUUFBTCxDQUFjQyxZQUFuRCxDQURKLEtBR0lELFFBQVEsQ0FBQ1AsU0FBVCxHQUFxQix5QkFBckI7QUFFSkYsTUFBSSxDQUFDVyxXQUFMLENBQWlCcEQsUUFBUSxDQUFDcUQsYUFBVCxDQUF1QixJQUF2QixDQUFqQjtBQUNBWixNQUFJLENBQUNhLEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixTQUFyQjtBQUVILEM7Ozs7Ozs7Ozs7O0FDNUZELHVDIiwiZmlsZSI6ImNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5sZXQgUm91dGluZyA9IHJlcXVpcmUoXCIuLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xubGV0IFJvdXRlcyA9IHJlcXVpcmUoJy4vanMtcm91dGVzLmpzb24nKTtcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIChldmVudCl7XG4gICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAgIGxldCB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdnZXRDYXJ0Jyk7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJYLVJlcXVlc3RlZC1XaXRoXCIsIFwiWE1MSHR0cFJlcXVlc3RcIik7XG4gICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KXtcblxuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwICYmIHRoaXMuc3RhdHVzVGV4dCA9PT0gXCJPS1wiKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkVSUk9SXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIEluc2VydChyZXNwb25zZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidXR0b25SZW1vdmVcIiAmJiBpc05hTihwYXJzZUludCh0YXJnZXQuaWQpKSA9PT0gZmFsc2UpXG4gICAge1xuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgncmVtb3ZlRnJvbUNhcnQnLCB7aWQ6IHRhcmdldC5pZH0pO1xuICAgICAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIHRhcmdldC5pZClcblxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCk7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcbiAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCAmJiB0aGlzLnN0YXR1c1RleHQgPT09IFwiT0tcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtX3RvX3JlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtXycrdGFyZ2V0LmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1fdG9fcmVtb3ZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaXRlbV90b19yZW1vdmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJFUlJPUlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG4gICAgICAgIH0pXG4gICAgfVxufSlcblxuZnVuY3Rpb24gSW5zZXJ0KGRhdGEpe1xuICAgIGxldCBpdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1fJytkYXRhLmlkKTtcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtTmFtZV8nK2RhdGEuaWQpO1xuICAgIG5hbWUuaW5uZXJUZXh0ID0gZGF0YS5uYW1lO1xuXG4gICAgbGV0IHN0dWZmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1TdHVmZl8nK2RhdGEuaWQpO1xuICAgIHN0dWZmLmlubmVyVGV4dCA9ICdDb2xvciAtICcrIGRhdGEuY29sb3IgKyAnLCBQcmljZSAtICcgKyBkYXRhLnByaWNlICsgXCIkXCI7XG5cbiAgICBsZXQgdGFrZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbVRha2VuXycrZGF0YS5pZCk7XG4gICAgdGFrZW4uaW5uZXJUZXh0ID0gXCJZb3UgdGFrZSAtIFwiICsgZGF0YS5hbW91bnQgKyBcIiBnb29kc1wiXG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbURlc2NyaXB0aW9uXycrZGF0YS5pZCk7XG4gICAgaWYgKGRhdGEuZGVzY3JpcHRpb24ubGVuZ3RoID09PSAwKVxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnVGhpcyBnb29kIGRvbnQgaGF2ZSBkZXNjcmlwdGlvbic7XG4gICAgZWxzZVxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnRGVzY3JpcHRpb24gLSAnICsgZGF0YS5kZXNjcmlwdGlvbjtcbiAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbUNhdGVnb3J5XycrZGF0YS5pZClcbiAgICBpZiAoZGF0YS5jYXRlZ29yeSAhPT0gbnVsbClcbiAgICAgICAgY2F0ZWdvcnkuaW5uZXJUZXh0ID0gXCJDYXRlZ29yeSAtIFwiICsgZGF0YS5jYXRlZ29yeS5jYXRlZ29yeU5hbWU7XG4gICAgZWxzZVxuICAgICAgICBjYXRlZ29yeS5pbm5lclRleHQgPSBcIkNhdGVnb3J5IGlzIHVuZGVmaW5kZWQgXCI7XG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJykpO1xuICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdpbmhlcml0J1xuXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9