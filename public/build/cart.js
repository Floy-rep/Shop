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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIl0sIm5hbWVzIjpbIlJvdXRpbmciLCJyZXF1aXJlIiwiUm91dGVzIiwic2V0Um91dGluZ0RhdGEiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXJsIiwiZ2VuZXJhdGUiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJzZW5kIiwidGhlbiIsInJlc3BvbnNlIiwiaSIsImxlbmd0aCIsIkluc2VydCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInR5cGUiLCJjbGFzc05hbWUiLCJpc05hTiIsInBhcnNlSW50IiwiaWQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaXRlbV90b19yZW1vdmUiLCJnZXRFbGVtZW50QnlJZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImRhdGEiLCJpdGVtIiwibmFtZSIsImlubmVyVGV4dCIsInN0dWZmIiwiY29sb3IiLCJwcmljZSIsInRha2VuIiwiYW1vdW50IiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImNhdGVnb3J5TmFtZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQUlBLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyx3SkFBRCxDQUFyQjs7QUFDQSxJQUFJQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsaURBQUQsQ0FBcEI7O0FBQ0FELE9BQU8sQ0FBQ0csY0FBUixDQUF1QkQsTUFBdkI7QUFFQUUsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBVUMsS0FBVixFQUFnQjtBQUMxRCxNQUFJQyxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMEI7QUFDbEMsUUFBSUMsR0FBRyxHQUFHVixPQUFPLENBQUNXLFFBQVIsQ0FBaUIsU0FBakIsQ0FBVjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsT0FBRyxDQUFDRSxJQUFKLENBQVMsS0FBVCxFQUFnQkosR0FBaEI7QUFDQUUsT0FBRyxDQUFDRyxnQkFBSixDQUFxQixrQkFBckIsRUFBeUMsZ0JBQXpDO0FBQ0FILE9BQUcsQ0FBQ1AsZ0JBQUosQ0FBcUIsTUFBckIsRUFBNkIsVUFBVUMsS0FBVixFQUFnQjtBQUV6QyxVQUFJLEtBQUtVLFVBQUwsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkIsWUFBSSxLQUFLQyxNQUFMLEtBQWdCLEdBQWhCLElBQXVCLEtBQUtDLFVBQUwsS0FBb0IsSUFBL0MsRUFDQTtBQUNJVixpQkFBTyxDQUFDVyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLQyxZQUFoQixDQUFELENBQVA7QUFDSCxTQUhELE1BSUk7QUFDQVosZ0JBQU0sQ0FBQyxPQUFELENBQU47QUFDSDtBQUNKO0FBQ0osS0FYRDtBQVlBRyxPQUFHLENBQUNVLElBQUo7QUFDSCxHQWxCRCxFQW1CS0MsSUFuQkwsQ0FtQlUsVUFBQ0MsUUFBRCxFQUFjO0FBQ2hCLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsUUFBUSxDQUFDRSxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUF5QztBQUNyQ0UsWUFBTSxDQUFDSCxRQUFRLENBQUNDLENBQUQsQ0FBVCxDQUFOO0FBQ0g7QUFDSixHQXZCTCxXQXdCVyxVQUFDRyxLQUFELEVBQVc7QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxHQTFCTDtBQTJCSCxDQTVCRDtBQThCQXhCLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBVUMsS0FBVixFQUFnQjtBQUMvQyxNQUFJeUIsTUFBTSxHQUFHekIsS0FBSyxDQUFDeUIsTUFBbkI7O0FBQ0EsTUFBR0EsTUFBTSxDQUFDQyxJQUFQLEtBQWdCLFFBQWhCLElBQTRCRCxNQUFNLENBQUNFLFNBQVAsS0FBcUIsY0FBakQsSUFBbUVDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDSixNQUFNLENBQUNLLEVBQVIsQ0FBVCxDQUFMLEtBQStCLEtBQXJHLEVBQ0E7QUFDSSxRQUFJN0IsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQ25DLFVBQUlDLEdBQUcsR0FBR1YsT0FBTyxDQUFDVyxRQUFSLENBQWlCLGdCQUFqQixFQUFtQztBQUFDeUIsVUFBRSxFQUFFTCxNQUFNLENBQUNLO0FBQVosT0FBbkMsQ0FBVjtBQUNBLFVBQUl4QixHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFWO0FBRUEsVUFBSXdCLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWY7QUFDQUQsY0FBUSxDQUFDRSxNQUFULENBQWdCLElBQWhCLEVBQXNCUixNQUFNLENBQUNLLEVBQTdCO0FBRUF4QixTQUFHLENBQUNFLElBQUosQ0FBUyxNQUFULEVBQWlCSixHQUFqQjtBQUNBRSxTQUFHLENBQUNHLGdCQUFKLENBQXFCLGtCQUFyQixFQUF5QyxnQkFBekM7QUFDQUgsU0FBRyxDQUFDUCxnQkFBSixDQUFxQixNQUFyQixFQUE2QixVQUFVQyxLQUFWLEVBQWlCO0FBQzFDLFlBQUksS0FBS1UsVUFBTCxLQUFvQixDQUF4QixFQUEyQjtBQUN2QixjQUFJLEtBQUtDLE1BQUwsS0FBZ0IsR0FBaEIsSUFBdUIsS0FBS0MsVUFBTCxLQUFvQixJQUEvQyxFQUFxRDtBQUNqRDtBQUNJLGtCQUFJc0IsY0FBYyxHQUFHcEMsUUFBUSxDQUFDcUMsY0FBVCxDQUF3QixVQUFRVixNQUFNLENBQUNLLEVBQXZDLENBQXJCO0FBQ0FJLDRCQUFjLENBQUNFLFVBQWYsQ0FBMEJDLFdBQTFCLENBQXNDSCxjQUF0QztBQUNBaEMscUJBQU8sQ0FBQ1csSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS0MsWUFBaEIsQ0FBRCxDQUFQO0FBQ0g7QUFDSixXQU5ELE1BTU87QUFDSFosa0JBQU0sQ0FBQyxPQUFELENBQU47QUFDSDtBQUNKO0FBQ0osT0FaRDtBQWFBRyxTQUFHLENBQUNVLElBQUosQ0FBU2UsUUFBVDtBQUNILEtBdkJEO0FBd0JIO0FBQ0osQ0E3QkQ7O0FBK0JBLFNBQVNWLE1BQVQsQ0FBZ0JpQixJQUFoQixFQUFxQjtBQUNqQixNQUFJQyxJQUFJLEdBQUd6QyxRQUFRLENBQUNxQyxjQUFULENBQXdCLFVBQVFHLElBQUksQ0FBQ1IsRUFBckMsQ0FBWDtBQUNBLE1BQUlVLElBQUksR0FBRzFDLFFBQVEsQ0FBQ3FDLGNBQVQsQ0FBd0IsY0FBWUcsSUFBSSxDQUFDUixFQUF6QyxDQUFYO0FBQ0FVLE1BQUksQ0FBQ0MsU0FBTCxHQUFpQkgsSUFBSSxDQUFDRSxJQUF0QjtBQUVBLE1BQUlFLEtBQUssR0FBRzVDLFFBQVEsQ0FBQ3FDLGNBQVQsQ0FBd0IsZUFBYUcsSUFBSSxDQUFDUixFQUExQyxDQUFaO0FBQ0FZLE9BQUssQ0FBQ0QsU0FBTixHQUFrQixhQUFZSCxJQUFJLENBQUNLLEtBQWpCLEdBQXlCLFlBQXpCLEdBQXdDTCxJQUFJLENBQUNNLEtBQTdDLEdBQXFELEdBQXZFO0FBRUEsTUFBSUMsS0FBSyxHQUFHL0MsUUFBUSxDQUFDcUMsY0FBVCxDQUF3QixlQUFhRyxJQUFJLENBQUNSLEVBQTFDLENBQVo7QUFDQWUsT0FBSyxDQUFDSixTQUFOLEdBQWtCLGdCQUFnQkgsSUFBSSxDQUFDUSxNQUFyQixHQUE4QixRQUFoRDtBQUVBLE1BQUlDLFdBQVcsR0FBR2pELFFBQVEsQ0FBQ3FDLGNBQVQsQ0FBd0IscUJBQW1CRyxJQUFJLENBQUNSLEVBQWhELENBQWxCO0FBQ0EsTUFBSVEsSUFBSSxDQUFDUyxXQUFMLENBQWlCM0IsTUFBakIsS0FBNEIsQ0FBaEMsRUFDSTJCLFdBQVcsQ0FBQ04sU0FBWixHQUF3QixpQ0FBeEIsQ0FESixLQUdJTSxXQUFXLENBQUNOLFNBQVosR0FBd0IsbUJBQW1CSCxJQUFJLENBQUNTLFdBQWhEO0FBQ0osTUFBSUMsUUFBUSxHQUFHbEQsUUFBUSxDQUFDcUMsY0FBVCxDQUF3QixrQkFBZ0JHLElBQUksQ0FBQ1IsRUFBN0MsQ0FBZjtBQUNBLE1BQUlRLElBQUksQ0FBQ1UsUUFBTCxLQUFrQixJQUF0QixFQUNJQSxRQUFRLENBQUNQLFNBQVQsR0FBcUIsZ0JBQWdCSCxJQUFJLENBQUNVLFFBQUwsQ0FBY0MsWUFBbkQsQ0FESixLQUdJRCxRQUFRLENBQUNQLFNBQVQsR0FBcUIseUJBQXJCO0FBRUpGLE1BQUksQ0FBQ1csV0FBTCxDQUFpQnBELFFBQVEsQ0FBQ3FELGFBQVQsQ0FBdUIsSUFBdkIsQ0FBakI7QUFDQVosTUFBSSxDQUFDYSxLQUFMLENBQVdDLE9BQVgsR0FBcUIsU0FBckI7QUFFSCxDOzs7Ozs7Ozs7OztBQzVGRCx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQscUJBQXFCLG1CQUFPLENBQUMsdUdBQXFDOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJjYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxubGV0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcbmxldCBSb3V0ZXMgPSByZXF1aXJlKCcuL2pzLXJvdXRlcy5qc29uJyk7XG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICBsZXQgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnZ2V0Q2FydCcpO1xuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xuICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChldmVudCl7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCAmJiB0aGlzLnN0YXR1c1RleHQgPT09IFwiT0tcIilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJFUlJPUlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3BvbnNlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBJbnNlcnQocmVzcG9uc2VbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfSlcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmKHRhcmdldC50eXBlID09PSBcImJ1dHRvblwiICYmIHRhcmdldC5jbGFzc05hbWUgPT09IFwiYnV0dG9uUmVtb3ZlXCIgJiYgaXNOYU4ocGFyc2VJbnQodGFyZ2V0LmlkKSkgPT09IGZhbHNlKVxuICAgIHtcbiAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3JlbW92ZUZyb21DYXJ0Jywge2lkOiB0YXJnZXQuaWR9KTtcbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWQnLCB0YXJnZXQuaWQpXG5cbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwpO1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJYLVJlcXVlc3RlZC1XaXRoXCIsIFwiWE1MSHR0cFJlcXVlc3RcIik7XG4gICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDAgJiYgdGhpcy5zdGF0dXNUZXh0ID09PSBcIk9LXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbV90b19yZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbV8nK3RhcmdldC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtX3RvX3JlbW92ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW1fdG9fcmVtb3ZlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiRVJST1JcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgICAgICB9KVxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIEluc2VydChkYXRhKXtcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtXycrZGF0YS5pZCk7XG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbU5hbWVfJytkYXRhLmlkKTtcbiAgICBuYW1lLmlubmVyVGV4dCA9IGRhdGEubmFtZTtcblxuICAgIGxldCBzdHVmZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtU3R1ZmZfJytkYXRhLmlkKTtcbiAgICBzdHVmZi5pbm5lclRleHQgPSAnQ29sb3IgLSAnKyBkYXRhLmNvbG9yICsgJywgUHJpY2UgLSAnICsgZGF0YS5wcmljZSArIFwiJFwiO1xuXG4gICAgbGV0IHRha2VuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1UYWtlbl8nK2RhdGEuaWQpO1xuICAgIHRha2VuLmlubmVyVGV4dCA9IFwiWW91IHRha2UgLSBcIiArIGRhdGEuYW1vdW50ICsgXCIgZ29vZHNcIlxuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1EZXNjcmlwdGlvbl8nK2RhdGEuaWQpO1xuICAgIGlmIChkYXRhLmRlc2NyaXB0aW9uLmxlbmd0aCA9PT0gMClcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJ1RoaXMgZ29vZCBkb250IGhhdmUgZGVzY3JpcHRpb24nO1xuICAgIGVsc2VcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uIC0gJyArIGRhdGEuZGVzY3JpcHRpb247XG4gICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1DYXRlZ29yeV8nK2RhdGEuaWQpXG4gICAgaWYgKGRhdGEuY2F0ZWdvcnkgIT09IG51bGwpXG4gICAgICAgIGNhdGVnb3J5LmlubmVyVGV4dCA9IFwiQ2F0ZWdvcnkgLSBcIiArIGRhdGEuY2F0ZWdvcnkuY2F0ZWdvcnlOYW1lO1xuICAgIGVsc2VcbiAgICAgICAgY2F0ZWdvcnkuaW5uZXJUZXh0ID0gXCJDYXRlZ29yeSBpcyB1bmRlZmluZGVkIFwiO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcbiAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnaW5oZXJpdCdcblxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nID0gRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==