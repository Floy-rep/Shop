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
            if (typeof JSON.parse(this.responseText)["id"] != "undefined") {
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
  var item = document.getElementById('item_' + data.id);
  var name = document.getElementById('itemName_' + data.id);
  name.innerText = data.name;
  var stuff = document.getElementById('itemStuff_' + data.id);
  stuff.innerText = 'Color - ' + data.color + ', Price - ' + data.price + "$";
  var taken = document.getElementById('itemTaken_' + data.id);
  taken.innerText = "You take - " + data.amount + " goods";
  var description = document.getElementById('itemDescription_' + data.id);
  if (data.description.length === 0) description.innerText = 'This good dont have description';else description.innerText = 'Description - ' + data.description;
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


/***/ })

},[["./assets/cart.js","runtime","vendors~admin~cart~main","admin~cart~main"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIl0sIm5hbWVzIjpbIlJvdXRpbmciLCJyZXF1aXJlIiwiUm91dGVzIiwic2V0Um91dGluZ0RhdGEiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXJsIiwiZ2VuZXJhdGUiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJzZW5kIiwidGhlbiIsInJlc3BvbnNlIiwiaSIsImxlbmd0aCIsIkluc2VydCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInR5cGUiLCJjbGFzc05hbWUiLCJpc05hTiIsInBhcnNlSW50IiwiaWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaXRlbV90b19yZW1vdmUiLCJnZXRFbGVtZW50QnlJZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImRhdGEiLCJpdGVtIiwibmFtZSIsImlubmVyVGV4dCIsInN0dWZmIiwiY29sb3IiLCJwcmljZSIsInRha2VuIiwiYW1vdW50IiwiZGVzY3JpcHRpb24iLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFJQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsd0pBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLGlEQUFELENBQXBC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QUNxQyxjQUFULENBQXdCLHFCQUFtQkcsSUFBSSxDQUFDUixFQUFoRCxDQUFsQjtBQUNBLE1BQUlRLElBQUksQ0FBQ1MsV0FBTCxDQUFpQjNCLE1BQWpCLEtBQTRCLENBQWhDLEVBQ0kyQixXQUFXLENBQUNOLFNBQVosR0FBd0IsaUNBQXhCLENBREosS0FHSU0sV0FBVyxDQUFDTixTQUFaLEdBQXdCLG1CQUFtQkgsSUFBSSxDQUFDUyxXQUFoRDtBQUdKUixNQUFJLENBQUNTLFdBQUwsQ0FBaUJsRCxRQUFRLENBQUNtRCxhQUFULENBQXVCLElBQXZCLENBQWpCO0FBQ0FWLE1BQUksQ0FBQ1csS0FBTCxDQUFXQyxPQUFYLEdBQXFCLFNBQXJCO0FBRUgsQzs7Ozs7Ozs7Ozs7QUN6RkQsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELHFCQUFxQixtQkFBTyxDQUFDLHVHQUFxQzs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbmxldCBSb3V0aW5nID0gcmVxdWlyZShcIi4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XG5sZXQgUm91dGVzID0gcmVxdWlyZSgnLi9qcy1yb3V0ZXMuanNvbicpO1xuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgbGV0IHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2dldENhcnQnKTtcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZXZlbnQpe1xuXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDAgJiYgdGhpcy5zdGF0dXNUZXh0ID09PSBcIk9LXCIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiRVJST1JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgSW5zZXJ0KHJlc3BvbnNlW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pXG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZih0YXJnZXQudHlwZSA9PT0gXCJidXR0b25cIiAmJiB0YXJnZXQuY2xhc3NOYW1lID09PSBcImJ1dHRvblJlbW92ZVwiICYmIGlzTmFOKHBhcnNlSW50KHRhcmdldC5pZCkpID09PSBmYWxzZSlcbiAgICB7XG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdyZW1vdmVGcm9tQ2FydCcsIHtpZDogdGFyZ2V0LmlkfSk7XG4gICAgICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkJywgdGFyZ2V0LmlkKVxuXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsKTtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xuICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwICYmIHRoaXMuc3RhdHVzVGV4dCA9PT0gXCJPS1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpW1wiaWRcIl0gIT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbV90b19yZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbV8nK3RhcmdldC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtX3RvX3JlbW92ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW1fdG9fcmVtb3ZlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiRVJST1JcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgICAgICB9KVxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIEluc2VydChkYXRhKXtcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtXycrZGF0YS5pZCk7XG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbU5hbWVfJytkYXRhLmlkKTtcbiAgICBuYW1lLmlubmVyVGV4dCA9IGRhdGEubmFtZTtcblxuICAgIGxldCBzdHVmZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtU3R1ZmZfJytkYXRhLmlkKTtcbiAgICBzdHVmZi5pbm5lclRleHQgPSAnQ29sb3IgLSAnKyBkYXRhLmNvbG9yICsgJywgUHJpY2UgLSAnICsgZGF0YS5wcmljZSArIFwiJFwiO1xuXG4gICAgbGV0IHRha2VuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1UYWtlbl8nK2RhdGEuaWQpO1xuICAgIHRha2VuLmlubmVyVGV4dCA9IFwiWW91IHRha2UgLSBcIiArIGRhdGEuYW1vdW50ICsgXCIgZ29vZHNcIlxuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1EZXNjcmlwdGlvbl8nK2RhdGEuaWQpO1xuICAgIGlmIChkYXRhLmRlc2NyaXB0aW9uLmxlbmd0aCA9PT0gMClcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJ1RoaXMgZ29vZCBkb250IGhhdmUgZGVzY3JpcHRpb24nO1xuICAgIGVsc2VcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uIC0gJyArIGRhdGEuZGVzY3JpcHRpb247XG5cblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG4gICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2luaGVyaXQnXG5cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxuaWYgKERFU0NSSVBUT1JTICYmICEoTkFNRSBpbiBGdW5jdGlvblByb3RvdHlwZSkpIHtcbiAgZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90b3R5cGUsIE5BTUUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZy5jYWxsKHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=