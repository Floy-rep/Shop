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
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_6__);








var Routing = __webpack_require__(/*! ../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js-routes.json */ "./assets/js-routes.json");

Routing.setRoutingData(Routes);
document.addEventListener('DOMContentLoaded', function (event) {
  new Promise(function (resolve, reject) {
    var url = Routing.generate('getGoods');
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
    console.log(response);

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
      var url = Routing.generate('addToCard', {
        id: target.id
      });
      var xhr = new XMLHttpRequest();
      var count = document.getElementById('goodNum_' + target.id);
      var formData = new FormData();
      formData.append('id', target.id);
      formData.append('taken', count.value);
      xhr.open("POST", url);
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.addEventListener('load', function (event) {
        if (this.readyState === 4) {
          if (this.status === 200 && this.statusText === "OK") {
            console.log(JSON.parse(this.responseText)["id"]);

            if (typeof JSON.parse(this.responseText)["id"] != "undefined") {
              target.disabled = true;
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

/***/ })

},[["./assets/main.js","runtime","vendors~cart~main","cart~main"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvbWFpbi5qcyJdLCJuYW1lcyI6WyJSb3V0aW5nIiwicmVxdWlyZSIsIlJvdXRlcyIsInNldFJvdXRpbmdEYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybCIsImdlbmVyYXRlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuZ3RoIiwiSW5zZXJ0IiwiZXJyb3IiLCJ0YXJnZXQiLCJ0eXBlIiwiY2xhc3NOYW1lIiwiaXNOYU4iLCJwYXJzZUludCIsImlkIiwiY291bnQiLCJnZXRFbGVtZW50QnlJZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ2YWx1ZSIsImRpc2FibGVkIiwiZGF0YSIsImdvb2QiLCJuYW1lIiwiaW5uZXJUZXh0Iiwic3R1ZmYiLCJjb2xvciIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFJQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsd0pBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLGlEQUFELENBQXBCOztBQUNBRCxPQUFPLENBQUNHLGNBQVIsQ0FBdUJELE1BQXZCO0FBRUFFLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQVVDLEtBQVYsRUFBZ0I7QUFDMUQsTUFBSUMsT0FB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LENBQUNPLFdBQUwsQ0FBaUJ2QixNQUFqQixLQUE0QixDQUFoQyxFQUNJdUIsV0FBVyxDQUFDSixTQUFaLEdBQXdCLGlDQUF4QixDQURKLEtBR0lJLFdBQVcsQ0FBQ0osU0FBWixHQUF3QixtQkFBbUJILElBQUksQ0FBQ08sV0FBaEQ7QUFFSixNQUFJQyxNQUFNLEdBQUdoRCxRQUFRLENBQUNpRCxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQUQsUUFBTSxDQUFDRSxZQUFQLENBQW9CLE1BQXBCLEVBQTRCLFFBQTVCO0FBQ0FGLFFBQU0sQ0FBQ0UsWUFBUCxDQUFvQixPQUFwQixFQUE2QixLQUE3QjtBQUNBRixRQUFNLENBQUNFLFlBQVAsQ0FBb0IsSUFBcEIsRUFBMEJWLElBQUksQ0FBQ1IsRUFBL0I7QUFDQWdCLFFBQU0sQ0FBQ0UsWUFBUCxDQUFvQixPQUFwQixFQUE2QixXQUE3QjtBQUNBLE1BQUlWLElBQUksQ0FBQ1AsS0FBTCxLQUFlLENBQW5CLEVBQ0llLE1BQU0sQ0FBQ1QsUUFBUCxHQUFrQixJQUFsQjtBQUNKRSxNQUFJLENBQUNVLFdBQUwsQ0FBaUJILE1BQWpCO0FBQ0FQLE1BQUksQ0FBQ1UsV0FBTCxDQUFpQm5ELFFBQVEsQ0FBQ2lELGFBQVQsQ0FBdUIsSUFBdkIsQ0FBakI7QUFFQVIsTUFBSSxDQUFDVyxLQUFMLENBQVdDLE9BQVgsR0FBcUIsU0FBckI7QUFFSCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5sZXQgUm91dGluZyA9IHJlcXVpcmUoXCIuLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xubGV0IFJvdXRlcyA9IHJlcXVpcmUoJy4vanMtcm91dGVzLmpzb24nKTtcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIChldmVudCl7XG4gICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAgIGxldCB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdnZXRHb29kcycpO1xuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xuICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChldmVudCl7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDAgJiYgdGhpcy5zdGF0dXNUZXh0ID09PSBcIk9LXCIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiRVJST1JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzcG9uc2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIEluc2VydChyZXNwb25zZVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidXR0b25BZGRcIiAmJiBpc05hTihwYXJzZUludCh0YXJnZXQuaWQpKSA9PT0gZmFsc2UpXG4gICAge1xuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnYWRkVG9DYXJkJywge2lkOiB0YXJnZXQuaWR9KTtcbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICAgICAgbGV0IGNvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2ROdW1fJyt0YXJnZXQuaWQpXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIHRhcmdldC5pZClcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndGFrZW4nLCBjb3VudC52YWx1ZSlcblxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCk7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcbiAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCAmJiB0aGlzLnN0YXR1c1RleHQgPT09IFwiT0tcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dClbXCJpZFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpW1wiaWRcIl0gIT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiRVJST1JcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG4gICAgICAgIH0pXG4gICAgfVxufSlcblxuZnVuY3Rpb24gSW5zZXJ0KGRhdGEpe1xuICAgIGxldCBnb29kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfJytkYXRhLmlkKVxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2ROYW1lXycrZGF0YS5pZCk7XG4gICAgbmFtZS5pbm5lclRleHQgPSBkYXRhLm5hbWU7XG4gICAgbGV0IHN0dWZmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RTdHVmZl8nK2RhdGEuaWQpO1xuICAgIHN0dWZmLmlubmVyVGV4dCA9ICdDb2xvciAtICcrIGRhdGEuY29sb3IgKyAnLCBQcmljZSAtICcgKyBkYXRhLnByaWNlICsgXCIkXCIgKyBcIiwgQ291bnQgLSBcIiArIGRhdGEuY291bnQ7XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZERlc2NyaXB0aW9uXycrZGF0YS5pZCk7XG4gICAgaWYgKGRhdGEuZGVzY3JpcHRpb24ubGVuZ3RoID09PSAwKVxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnVGhpcyBnb29kIGRvbnQgaGF2ZSBkZXNjcmlwdGlvbic7XG4gICAgZWxzZVxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnRGVzY3JpcHRpb24gLSAnICsgZGF0YS5kZXNjcmlwdGlvbjtcblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FkZCcpXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBkYXRhLmlkKVxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J1dHRvbkFkZCcpXG4gICAgaWYgKGRhdGEuY291bnQgPT09IDApXG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgZ29vZC5hcHBlbmRDaGlsZChidXR0b24pXG4gICAgZ29vZC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpKTtcblxuICAgIGdvb2Quc3R5bGUuZGlzcGxheSA9ICdpbmhlcml0J1xuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9