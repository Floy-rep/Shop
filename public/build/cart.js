(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart"],{

/***/ "./assets/cart.js":
/*!************************!*\
  !*** ./assets/cart.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

var Routing = __webpack_require__(/*! ../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js-routes.json */ "./assets/js-routes.json");

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var goods = document.getElementById('goods');
Routing.setRoutingData(Routes);
document.addEventListener('DOMContentLoaded', function () {
  axios.get(Routing.generate('getCart')).then(function (response) {
    console.log(response.data);
    Insert(response.data);
  });
});
document.addEventListener('click', function (event) {
  var target = event.target;

  if (target.type === "button" && target.className === "buttonRemove" && isNaN(parseInt(target.id)) === false) {
    axios.post(Routing.generate('removeFromCart', {
      id: target.id
    }), {
      'id': target.id
    }).then(function (response) {
      var item_to_remove = document.getElementById('good_' + response.data);
      item_to_remove.parentNode.removeChild(item_to_remove);
    });
  }
});

function Insert(data) {
  for (var i = 0; i < data.length; i++) {
    var form = document.createElement('form');
    form.innerHTML = data[i];
    goods.appendChild(form);
  }
}

/***/ })

},[["./assets/cart.js","runtime","vendors~admin~cart~main","vendors~cart~main","admin~cart~main"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY2FydC5qcyJdLCJuYW1lcyI6WyJSb3V0aW5nIiwicmVxdWlyZSIsIlJvdXRlcyIsImF4aW9zIiwiZ29vZHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0Um91dGluZ0RhdGEiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0IiwiZ2VuZXJhdGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIkluc2VydCIsImV2ZW50IiwidGFyZ2V0IiwidHlwZSIsImNsYXNzTmFtZSIsImlzTmFOIiwicGFyc2VJbnQiLCJpZCIsInBvc3QiLCJpdGVtX3RvX3JlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImkiLCJsZW5ndGgiLCJmb3JtIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyx3SkFBRCxDQUFyQjs7QUFDQSxJQUFJQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsaURBQUQsQ0FBcEI7O0FBQ0EsSUFBT0UsS0FBSyxHQUFHRixtQkFBTyxDQUFDLDRDQUFELENBQXRCOztBQUNBLElBQUlHLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQU4sT0FBTyxDQUFDTyxjQUFSLENBQXVCTCxNQUF2QjtBQUVBRyxRQUFRLENBQUNHLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hETCxPQUFLLENBQUNNLEdBQU4sQ0FBVVQsT0FBTyxDQUFDVSxRQUFSLENBQWlCLFNBQWpCLENBQVYsRUFDS0MsSUFETCxDQUNVLFVBQVVDLFFBQVYsRUFBb0I7QUFDdEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQXJCO0FBQ0FDLFVBQU0sQ0FBQ0osUUFBUSxDQUFDRyxJQUFWLENBQU47QUFDSCxHQUpMO0FBS0MsQ0FOTDtBQVFBVixRQUFRLENBQUNHLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQVVTLEtBQVYsRUFBZ0I7QUFDL0MsTUFBSUMsTUFBTSxHQUFHRCxLQUFLLENBQUNDLE1BQW5COztBQUNBLE1BQUdBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQixRQUFoQixJQUE0QkQsTUFBTSxDQUFDRSxTQUFQLEtBQXFCLGNBQWpELElBQW1FQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0osTUFBTSxDQUFDSyxFQUFSLENBQVQsQ0FBTCxLQUErQixLQUFyRyxFQUE0RztBQUN4R3BCLFNBQUssQ0FBQ3FCLElBQU4sQ0FBV3hCLE9BQU8sQ0FBQ1UsUUFBUixDQUFpQixnQkFBakIsRUFBbUM7QUFBQ2EsUUFBRSxFQUFFTCxNQUFNLENBQUNLO0FBQVosS0FBbkMsQ0FBWCxFQUFnRTtBQUM1RCxZQUFNTCxNQUFNLENBQUNLO0FBRCtDLEtBQWhFLEVBR0taLElBSEwsQ0FHVSxVQUFDQyxRQUFELEVBQWM7QUFDaEIsVUFBSWEsY0FBYyxHQUFHcEIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQVVNLFFBQVEsQ0FBQ0csSUFBM0MsQ0FBckI7QUFDQVUsb0JBQWMsQ0FBQ0MsVUFBZixDQUEwQkMsV0FBMUIsQ0FBc0NGLGNBQXRDO0FBQ0gsS0FOTDtBQU9IO0FBQ0osQ0FYRDs7QUFhQSxTQUFTVCxNQUFULENBQWdCRCxJQUFoQixFQUFxQjtBQUNqQixPQUFLLElBQUlhLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdiLElBQUksQ0FBQ2MsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsUUFBSUUsSUFBSSxHQUFHekIsUUFBUSxDQUFDMEIsYUFBVCxDQUF1QixNQUF2QixDQUFYO0FBQ0FELFFBQUksQ0FBQ0UsU0FBTCxHQUFpQmpCLElBQUksQ0FBQ2EsQ0FBRCxDQUFyQjtBQUNBeEIsU0FBSyxDQUFDNkIsV0FBTixDQUFrQkgsSUFBbEI7QUFDSDtBQUNKLEMiLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBSb3V0aW5nID0gcmVxdWlyZShcIi4uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXJcIik7XG5sZXQgUm91dGVzID0gcmVxdWlyZSgnLi9qcy1yb3V0ZXMuanNvbicpO1xuY29uc3QgIGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbmxldCBnb29kcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kcycpO1xuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGF4aW9zLmdldChSb3V0aW5nLmdlbmVyYXRlKCdnZXRDYXJ0JykpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICBJbnNlcnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJidXR0b25SZW1vdmVcIiAmJiBpc05hTihwYXJzZUludCh0YXJnZXQuaWQpKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYXhpb3MucG9zdChSb3V0aW5nLmdlbmVyYXRlKCdyZW1vdmVGcm9tQ2FydCcsIHtpZDogdGFyZ2V0LmlkfSksIHtcbiAgICAgICAgICAgICdpZCc6IHRhcmdldC5pZFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1fdG9fcmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfJyArIHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgaXRlbV90b19yZW1vdmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtX3RvX3JlbW92ZSlcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSlcblxuZnVuY3Rpb24gSW5zZXJ0KGRhdGEpe1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICBmb3JtLmlubmVySFRNTCA9IGRhdGFbaV1cbiAgICAgICAgZ29vZHMuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9