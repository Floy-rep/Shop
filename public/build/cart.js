(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart"],{

/***/ "./assets/cart.js":
/*!************************!*\
  !*** ./assets/cart.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

var Routing = __webpack_require__(/*! ../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js-routes.json */ "./assets/js-routes.json");

var axipos = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'aixos'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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

/***/ })

},[["./assets/cart.js","runtime","vendors~admin~cart~main","vendors~admin~cart","admin~cart~main"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY2FydC5qcyJdLCJuYW1lcyI6WyJSb3V0aW5nIiwicmVxdWlyZSIsIlJvdXRlcyIsImF4aXBvcyIsInNldFJvdXRpbmdEYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybCIsImdlbmVyYXRlIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsInRoZW4iLCJyZXNwb25zZSIsImkiLCJsZW5ndGgiLCJJbnNlcnQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ0eXBlIiwiY2xhc3NOYW1lIiwiaXNOYU4iLCJwYXJzZUludCIsImlkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIml0ZW1fdG9fcmVtb3ZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJkYXRhIiwiaXRlbSIsIm5hbWUiLCJpbm5lclRleHQiLCJzdHVmZiIsImNvbG9yIiwicHJpY2UiLCJ0YWtlbiIsImFtb3VudCIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJjYXRlZ29yeU5hbWUiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyx3SkFBRCxDQUFyQjs7QUFDQSxJQUFJQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsaURBQUQsQ0FBcEI7O0FBQ0EsSUFBT0UsTUFBTSxHQUFHRixtQkFBTyxDQUFDLCtIQUFELENBQXZCOztBQUNBRCxPQUFPLENBQUNJLGNBQVIsQ0FBdUJGLE1BQXZCO0FBRUFHLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQVVDLEtBQVYsRUFBZ0I7QUFDMUQsTUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTBCO0FBQ2xDLFFBQUlDLEdBQUcsR0FBR1gsT0FBTyxDQUFDWSxRQUFSLENBQWlCLFNBQWpCLENBQVY7QUFDQSxRQUFJQyxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFWO0FBQ0FELE9BQUcsQ0FBQ0UsSUFBSixDQUFTLEtBQVQsRUFBZ0JKLEdBQWhCO0FBQ0FFLE9BQUcsQ0FBQ0csZ0JBQUosQ0FBcUIsa0JBQXJCLEVBQXlDLGdCQUF6QztBQUNBSCxPQUFHLENBQUNQLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLFVBQVVDLEtBQVYsRUFBZ0I7QUFFekMsVUFBSSxLQUFLVSxVQUFMLEtBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCLFlBQUksS0FBS0MsTUFBTCxLQUFnQixHQUFoQixJQUF1QixLQUFLQyxVQUFMLEtBQW9CLElBQS9DLEVBQ0E7QUFDSVYsaUJBQU8sQ0FBQ1csSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS0MsWUFBaEIsQ0FBRCxDQUFQO0FBQ0gsU0FIRCxNQUlJO0FBQ0FaLGdCQUFNLENBQUMsT0FBRCxDQUFOO0FBQ0g7QUFDSjtBQUNKLEtBWEQ7QUFZQUcsT0FBRyxDQUFDVSxJQUFKO0FBQ0gsR0FsQkQsRUFtQktDLElBbkJMLENBbUJVLFVBQUNDLFFBQUQsRUFBYztBQUNoQixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFFBQVEsQ0FBQ0UsTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBeUM7QUFDckNFLFlBQU0sQ0FBQ0gsUUFBUSxDQUFDQyxDQUFELENBQVQsQ0FBTjtBQUNIO0FBQ0osR0F2QkwsV0F3QlcsVUFBQ0csS0FBRCxFQUFXO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0gsR0ExQkw7QUEyQkgsQ0E1QkQ7QUE4QkF4QixRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQVVDLEtBQVYsRUFBZ0I7QUFDL0MsTUFBSXlCLE1BQU0sR0FBR3pCLEtBQUssQ0FBQ3lCLE1BQW5COztBQUNBLE1BQUdBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQixRQUFoQixJQUE0QkQsTUFBTSxDQUFDRSxTQUFQLEtBQXFCLGNBQWpELElBQW1FQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0osTUFBTSxDQUFDSyxFQUFSLENBQVQsQ0FBTCxLQUErQixLQUFyRyxFQUNBO0FBQ0ksUUFBSTdCLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUNuQyxVQUFJQyxHQUFHLEdBQUdYLE9BQU8sQ0FBQ1ksUUFBUixDQUFpQixnQkFBakIsRUFBbUM7QUFBQ3lCLFVBQUUsRUFBRUwsTUFBTSxDQUFDSztBQUFaLE9BQW5DLENBQVY7QUFDQSxVQUFJeEIsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBVjtBQUVBLFVBQUl3QixRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFmO0FBQ0FELGNBQVEsQ0FBQ0UsTUFBVCxDQUFnQixJQUFoQixFQUFzQlIsTUFBTSxDQUFDSyxFQUE3QjtBQUVBeEIsU0FBRyxDQUFDRSxJQUFKLENBQVMsTUFBVCxFQUFpQkosR0FBakI7QUFDQUUsU0FBRyxDQUFDRyxnQkFBSixDQUFxQixrQkFBckIsRUFBeUMsZ0JBQXpDO0FBQ0FILFNBQUcsQ0FBQ1AsZ0JBQUosQ0FBcUIsTUFBckIsRUFBNkIsVUFBVUMsS0FBVixFQUFpQjtBQUMxQyxZQUFJLEtBQUtVLFVBQUwsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkIsY0FBSSxLQUFLQyxNQUFMLEtBQWdCLEdBQWhCLElBQXVCLEtBQUtDLFVBQUwsS0FBb0IsSUFBL0MsRUFBcUQ7QUFDakQ7QUFDSSxrQkFBSXNCLGNBQWMsR0FBR3BDLFFBQVEsQ0FBQ3FDLGNBQVQsQ0FBd0IsVUFBUVYsTUFBTSxDQUFDSyxFQUF2QyxDQUFyQjtBQUNBSSw0QkFBYyxDQUFDRSxVQUFmLENBQTBCQyxXQUExQixDQUFzQ0gsY0FBdEM7QUFDQWhDLHFCQUFPLENBQUNXLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtDLFlBQWhCLENBQUQsQ0FBUDtBQUNIO0FBQ0osV0FORCxNQU1PO0FBQ0haLGtCQUFNLENBQUMsT0FBRCxDQUFOO0FBQ0g7QUFDSjtBQUNKLE9BWkQ7QUFhQUcsU0FBRyxDQUFDVSxJQUFKLENBQVNlLFFBQVQ7QUFDSCxLQXZCRDtBQXdCSDtBQUNKLENBN0JEOztBQStCQSxTQUFTVixNQUFULENBQWdCaUIsSUFBaEIsRUFBcUI7QUFDakIsTUFBSUMsSUFBSSxHQUFHekMsUUFBUSxDQUFDcUMsY0FBVCxDQUF3QixVQUFRRyxJQUFJLENBQUNSLEVBQXJDLENBQVg7QUFDQSxNQUFJVSxJQUFJLEdBQUcxQyxRQUFRLENBQUNxQyxjQUFULENBQXdCLGNBQVlHLElBQUksQ0FBQ1IsRUFBekMsQ0FBWDtBQUNBVSxNQUFJLENBQUNDLFNBQUwsR0FBaUJILElBQUksQ0FBQ0UsSUFBdEI7QUFFQSxNQUFJRSxLQUFLLEdBQUc1QyxRQUFRLENBQUNxQyxjQUFULENBQXdCLGVBQWFHLElBQUksQ0FBQ1IsRUFBMUMsQ0FBWjtBQUNBWSxPQUFLLENBQUNELFNBQU4sR0FBa0IsYUFBWUgsSUFBSSxDQUFDSyxLQUFqQixHQUF5QixZQUF6QixHQUF3Q0wsSUFBSSxDQUFDTSxLQUE3QyxHQUFxRCxHQUF2RTtBQUVBLE1BQUlDLEtBQUssR0FBRy9DLFFBQVEsQ0FBQ3FDLGNBQVQsQ0FBd0IsZUFBYUcsSUFBSSxDQUFDUixFQUExQyxDQUFaO0FBQ0FlLE9BQUssQ0FBQ0osU0FBTixHQUFrQixnQkFBZ0JILElBQUksQ0FBQ1EsTUFBckIsR0FBOEIsUUFBaEQ7QUFFQSxNQUFJQyxXQUFXLEdBQUdqRCxRQUFRLENBQUNxQyxjQUFULENBQXdCLHFCQUFtQkcsSUFBSSxDQUFDUixFQUFoRCxDQUFsQjtBQUNBLE1BQUlRLElBQUksQ0FBQ1MsV0FBTCxDQUFpQjNCLE1BQWpCLEtBQTRCLENBQWhDLEVBQ0kyQixXQUFXLENBQUNOLFNBQVosR0FBd0IsaUNBQXhCLENBREosS0FHSU0sV0FBVyxDQUFDTixTQUFaLEdBQXdCLG1CQUFtQkgsSUFBSSxDQUFDUyxXQUFoRDtBQUNKLE1BQUlDLFFBQVEsR0FBR2xELFFBQVEsQ0FBQ3FDLGNBQVQsQ0FBd0Isa0JBQWdCRyxJQUFJLENBQUNSLEVBQTdDLENBQWY7QUFDQSxNQUFJUSxJQUFJLENBQUNVLFFBQUwsS0FBa0IsSUFBdEIsRUFDSUEsUUFBUSxDQUFDUCxTQUFULEdBQXFCLGdCQUFnQkgsSUFBSSxDQUFDVSxRQUFMLENBQWNDLFlBQW5ELENBREosS0FHSUQsUUFBUSxDQUFDUCxTQUFULEdBQXFCLHlCQUFyQjtBQUVKRixNQUFJLENBQUNXLFdBQUwsQ0FBaUJwRCxRQUFRLENBQUNxRCxhQUFULENBQXVCLElBQXZCLENBQWpCO0FBQ0FaLE1BQUksQ0FBQ2EsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLFNBQXJCO0FBRUgsQyIsImZpbGUiOiJjYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFJvdXRpbmcgPSByZXF1aXJlKFwiLi4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlclwiKTtcbmxldCBSb3V0ZXMgPSByZXF1aXJlKCcuL2pzLXJvdXRlcy5qc29uJyk7XG5jb25zdCAgYXhpcG9zID0gcmVxdWlyZSgnYWl4b3MnKVxuUm91dGluZy5zZXRSb3V0aW5nRGF0YShSb3V0ZXMpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgbGV0IHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2dldENhcnQnKTtcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZXZlbnQpe1xuXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDAgJiYgdGhpcy5zdGF0dXNUZXh0ID09PSBcIk9LXCIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiRVJST1JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgSW5zZXJ0KHJlc3BvbnNlW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pXG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCl7XG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZih0YXJnZXQudHlwZSA9PT0gXCJidXR0b25cIiAmJiB0YXJnZXQuY2xhc3NOYW1lID09PSBcImJ1dHRvblJlbW92ZVwiICYmIGlzTmFOKHBhcnNlSW50KHRhcmdldC5pZCkpID09PSBmYWxzZSlcbiAgICB7XG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdyZW1vdmVGcm9tQ2FydCcsIHtpZDogdGFyZ2V0LmlkfSk7XG4gICAgICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkJywgdGFyZ2V0LmlkKVxuXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsKTtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xuICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwICYmIHRoaXMuc3RhdHVzVGV4dCA9PT0gXCJPS1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1fdG9fcmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1fJyt0YXJnZXQuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbV90b19yZW1vdmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtX3RvX3JlbW92ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChcIkVSUk9SXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcbiAgICAgICAgfSlcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBJbnNlcnQoZGF0YSl7XG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbV8nK2RhdGEuaWQpO1xuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1OYW1lXycrZGF0YS5pZCk7XG4gICAgbmFtZS5pbm5lclRleHQgPSBkYXRhLm5hbWU7XG5cbiAgICBsZXQgc3R1ZmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbVN0dWZmXycrZGF0YS5pZCk7XG4gICAgc3R1ZmYuaW5uZXJUZXh0ID0gJ0NvbG9yIC0gJysgZGF0YS5jb2xvciArICcsIFByaWNlIC0gJyArIGRhdGEucHJpY2UgKyBcIiRcIjtcblxuICAgIGxldCB0YWtlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtVGFrZW5fJytkYXRhLmlkKTtcbiAgICB0YWtlbi5pbm5lclRleHQgPSBcIllvdSB0YWtlIC0gXCIgKyBkYXRhLmFtb3VudCArIFwiIGdvb2RzXCJcblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtRGVzY3JpcHRpb25fJytkYXRhLmlkKTtcbiAgICBpZiAoZGF0YS5kZXNjcmlwdGlvbi5sZW5ndGggPT09IDApXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICdUaGlzIGdvb2QgZG9udCBoYXZlIGRlc2NyaXB0aW9uJztcbiAgICBlbHNlXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbiAtICcgKyBkYXRhLmRlc2NyaXB0aW9uO1xuICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtQ2F0ZWdvcnlfJytkYXRhLmlkKVxuICAgIGlmIChkYXRhLmNhdGVnb3J5ICE9PSBudWxsKVxuICAgICAgICBjYXRlZ29yeS5pbm5lclRleHQgPSBcIkNhdGVnb3J5IC0gXCIgKyBkYXRhLmNhdGVnb3J5LmNhdGVnb3J5TmFtZTtcbiAgICBlbHNlXG4gICAgICAgIGNhdGVnb3J5LmlubmVyVGV4dCA9IFwiQ2F0ZWdvcnkgaXMgdW5kZWZpbmRlZCBcIjtcblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XG4gICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2luaGVyaXQnXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=