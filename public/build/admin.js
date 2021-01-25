(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin"],{

/***/ "./assets/admin.js":
/*!*************************!*\
  !*** ./assets/admin.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

var Routing = __webpack_require__(/*! ../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js-routes.json */ "./assets/js-routes.json");

Routing.setRoutingData(Routes);
var button = document.getElementById('good_submit');
console.log(button);
button.addEventListener('click', function (event) {
  if (button.type === "button" && button.className === "submitButton") {
    new Promise(function (resolve, reject) {
      var url = Routing.generate('addGood');
      var xhr = new XMLHttpRequest();
      var formData = new FormData();
      formData.append('data', [button.id]);
      console.log(formData);
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

/***/ })

},[["./assets/admin.js","runtime","vendors~admin~cart~main","admin~cart~main"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4uanMiXSwibmFtZXMiOlsiUm91dGluZyIsInJlcXVpcmUiLCJSb3V0ZXMiLCJzZXRSb3V0aW5nRGF0YSIsImJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidHlwZSIsImNsYXNzTmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXJsIiwiZ2VuZXJhdGUiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJpZCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJpdGVtX3RvX3JlbW92ZSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsd0pBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLGlEQUFELENBQXBCOztBQUNBRCxPQUFPLENBQUNHLGNBQVIsQ0FBdUJELE1BQXZCO0FBQ0EsSUFBSUUsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBYjtBQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWjtBQUNBQSxNQUFNLENBQUNLLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQVVDLEtBQVYsRUFBZ0I7QUFDN0MsTUFBR04sTUFBTSxDQUFDTyxJQUFQLEtBQWdCLFFBQWhCLElBQTRCUCxNQUFNLENBQUNRLFNBQVAsS0FBcUIsY0FBcEQsRUFDQTtBQUNJLFFBQUlDLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUNuQyxVQUFJQyxHQUFHLEdBQUdoQixPQUFPLENBQUNpQixRQUFSLENBQWlCLFNBQWpCLENBQVY7QUFDQSxVQUFJQyxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFWO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBZjtBQUNBRCxjQUFRLENBQUNFLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBeUIsQ0FBQ2xCLE1BQU0sQ0FBQ21CLEVBQVIsQ0FBekI7QUFDQWhCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZWSxRQUFaO0FBRUFGLFNBQUcsQ0FBQ00sSUFBSixDQUFTLE1BQVQsRUFBaUJSLEdBQWpCO0FBQ0FFLFNBQUcsQ0FBQ08sZ0JBQUosQ0FBcUIsa0JBQXJCLEVBQXlDLGdCQUF6QztBQUNBUCxTQUFHLENBQUNULGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLFVBQVVDLEtBQVYsRUFBaUI7QUFDMUMsWUFBSSxLQUFLZ0IsVUFBTCxLQUFvQixDQUF4QixFQUEyQjtBQUN2QixjQUFJLEtBQUtDLE1BQUwsS0FBZ0IsR0FBaEIsSUFBdUIsS0FBS0MsVUFBTCxLQUFvQixJQUEvQyxFQUFxRDtBQUNqRCxnQkFBSSxPQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLQyxZQUFoQixFQUE4QixJQUE5QixDQUFQLElBQThDLFdBQWxELEVBQ0E7QUFDSSxrQkFBSUMsY0FBYyxHQUFHM0IsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQVEyQixNQUFNLENBQUNWLEVBQXZDLENBQXJCO0FBQ0FULHFCQUFPLENBQUNlLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtDLFlBQWhCLENBQUQsQ0FBUDtBQUNBQyw0QkFBYyxDQUFDRSxVQUFmLENBQTBCQyxXQUExQixDQUFzQ0gsY0FBdEM7QUFDSDtBQUNKLFdBUEQsTUFPTztBQUNIakIsa0JBQU0sQ0FBQyxPQUFELENBQU47QUFDSDtBQUNKO0FBQ0osT0FiRDtBQWNBRyxTQUFHLENBQUNrQixJQUFKLENBQVNoQixRQUFUO0FBQ0gsS0F4QkQ7QUF5Qkg7QUFDSixDQTdCRCxFIiwiZmlsZSI6ImFkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcbmxldCBSb3V0ZXMgPSByZXF1aXJlKCcuL2pzLXJvdXRlcy5qc29uJyk7XG5Sb3V0aW5nLnNldFJvdXRpbmdEYXRhKFJvdXRlcyk7XG5sZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2Rfc3VibWl0Jyk7XG5jb25zb2xlLmxvZyhidXR0b24pXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIGlmKGJ1dHRvbi50eXBlID09PSBcImJ1dHRvblwiICYmIGJ1dHRvbi5jbGFzc05hbWUgPT09IFwic3VibWl0QnV0dG9uXCIpXG4gICAge1xuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gUm91dGluZy5nZW5lcmF0ZSgnYWRkR29vZCcpO1xuICAgICAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGF0YScsICBbYnV0dG9uLmlkXSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcblxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCk7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcbiAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCAmJiB0aGlzLnN0YXR1c1RleHQgPT09IFwiT0tcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KVtcImlkXCJdICE9IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1fdG9fcmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1fJyt0YXJnZXQuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV90b19yZW1vdmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtX3RvX3JlbW92ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkVSUk9SXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcbiAgICAgICAgfSlcbiAgICB9XG59KSJdLCJzb3VyY2VSb290IjoiIn0=