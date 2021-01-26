(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin"],{

/***/ "./assets/admin.js":
/*!*************************!*\
  !*** ./assets/admin.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

var Routing = __webpack_require__(/*! ../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");

var Routes = __webpack_require__(/*! ./js-routes.json */ "./assets/js-routes.json");

Routing.setRoutingData(Routes);
document.addEventListener('click', function (event) {
  var target = event.target;

  if (target.type === "button" && target.className === "submitButton") {
    // get DATA
    var name = document.getElementById('good_name').value;
    var price = document.getElementById('good_price').value;
    var color = document.getElementById('good_color').value;
    var description = document.getElementById('good_description').value;
    var count = document.getElementById('good_count').value;
    var category = document.getElementById('good_category').value;
    new Promise(function (resolve, reject) {
      var url = Routing.generate('addGood');
      var formData = new FormData();
      category = category.length === 0 ? "null" : category;
      formData.append('data', [name, price, color, description, count, category]);
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

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},[["./assets/admin.js","runtime","vendors~admin~cart~main","admin~cart~main"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sIm5hbWVzIjpbIlJvdXRpbmciLCJyZXF1aXJlIiwiUm91dGVzIiwic2V0Um91dGluZ0RhdGEiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInR5cGUiLCJjbGFzc05hbWUiLCJuYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInByaWNlIiwiY29sb3IiLCJkZXNjcmlwdGlvbiIsImNvdW50IiwiY2F0ZWdvcnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybCIsImdlbmVyYXRlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImxlbmd0aCIsImFwcGVuZCIsInhoclJlcSIsInRoZW4iLCJyZXNwb25zZSIsInNldFRpbWVvdXQiLCJpc05hTiIsInBhcnNlSW50IiwiaWQiLCJ1c2VyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwic3R5bGUiLCJtZXRob2QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyx3SkFBRCxDQUFyQjs7QUFDQSxJQUFJQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsaURBQUQsQ0FBcEI7O0FBQ0FELE9BQU8sQ0FBQ0csY0FBUixDQUF1QkQsTUFBdkI7QUFFQUUsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFVQyxLQUFWLEVBQWdCO0FBQy9DLE1BQUlDLE1BQU0sR0FBR0QsS0FBSyxDQUFDQyxNQUFuQjs7QUFDQSxN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QUFpQjtBQUMxQyxRQUFJLEtBQUtxQyxVQUFMLEtBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCLFVBQUksS0FBS0MsTUFBTCxLQUFnQixHQUFoQixJQUF1QixLQUFLQyxVQUFMLEtBQW9CLElBQS9DLEVBQ0kxQixPQUFPLENBQUMyQixJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLQyxZQUFoQixDQUFELENBQVAsQ0FESixLQUdJNUIsTUFBTSxDQUFDLE9BQUQsQ0FBTjtBQUNQO0FBQ0osR0FQRDtBQVFBbUIsS0FBRyxDQUFDVSxJQUFKLENBQVMxQixRQUFUO0FBQ0gsQzs7Ozs7Ozs7Ozs7QUNuRUQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLGdCQUFnQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFeEQ7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcseUNBQXlDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUm91dGluZyA9IHJlcXVpcmUoXCIuLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xubGV0IFJvdXRlcyA9IHJlcXVpcmUoJy4vanMtcm91dGVzLmpzb24nKTtcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJzdWJtaXRCdXR0b25cIilcbiAgICB7XG4gICAgICAgIC8vIGdldCBEQVRBXG4gICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfbmFtZScpLnZhbHVlXG4gICAgICAgIGxldCBwcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kX3ByaWNlJykudmFsdWVcbiAgICAgICAgbGV0IGNvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfY29sb3InKS52YWx1ZVxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZF9kZXNjcmlwdGlvbicpLnZhbHVlXG4gICAgICAgIGxldCBjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kX2NvdW50JykudmFsdWVcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfY2F0ZWdvcnknKS52YWx1ZVxuXG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCB1cmwgPSBSb3V0aW5nLmdlbmVyYXRlKCdhZGRHb29kJyk7XG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gY2F0ZWdvcnkubGVuZ3RoID09PSAwID8gXCJudWxsXCIgOiBjYXRlZ29yeVxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkYXRhJywgIFtuYW1lLCBwcmljZSwgY29sb3IsIGRlc2NyaXB0aW9uLCBjb3VudCwgY2F0ZWdvcnldKVxuICAgICAgICAgICAgeGhyUmVxKHJlc29sdmUscmVqZWN0LHVybCxcIlBPU1RcIixmb3JtRGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRhcmdldC52YWx1ZSA9ICdTdWJtaXR0ZWQnO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3RhcmdldC52YWx1ZSA9IFwiU3VibWl0XCJ9LCAzMDAwKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIGlmKHRhcmdldC50eXBlID09PSBcImJ1dHRvblwiICYmIHRhcmdldC5jbGFzc05hbWUgPT09IFwiZGVsZXRlQnV0dG9uXCIgJiYgaXNOYU4ocGFyc2VJbnQodGFyZ2V0LmlkKSkgPT09IGZhbHNlKXtcbiAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2lkJywgdGFyZ2V0LmlkKVxuICAgICAgICAgICAgeGhyUmVxKHJlc29sdmUscmVqZWN0LFJvdXRpbmcuZ2VuZXJhdGUoJ3JlbW92ZVVzZXInLHtpZDogdGFyZ2V0LmlkfSksXCJQT1NUXCIsZm9ybURhdGEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyXycrdGFyZ2V0LmlkKVxuICAgICAgICAgICAgICAgIHVzZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh1c2VyKVxuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgaWYodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJwcm9tdEJ1dHRvblwiICYmIGlzTmFOKHBhcnNlSW50KHRhcmdldC5pZCkpID09PSBmYWxzZSl7XG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIHRhcmdldC5pZClcbiAgICAgICAgICAgIHhoclJlcShyZXNvbHZlLHJlamVjdCxSb3V0aW5nLmdlbmVyYXRlKCdwcm9tdFVzZXInLHtpZDogdGFyZ2V0LmlkfSksXCJQT1NUXCIsIGZvcm1EYXRhKVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWxfJyt0YXJnZXQuaWQpXG4gICAgICAgICAgICAgICAgdXNlci5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHt1c2VyLnN0eWxlLmNvbG9yID0gXCJibGFja1wifSwgMzAwMCk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgfVxufSlcblxuZnVuY3Rpb24geGhyUmVxKHJlc29sdmUsIHJlamVjdCwgdXJsLCBtZXRob2QsIGZvcm1EYXRhKXtcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiWC1SZXF1ZXN0ZWQtV2l0aFwiLCBcIlhNTEh0dHBSZXF1ZXN0XCIpO1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwICYmIHRoaXMuc3RhdHVzVGV4dCA9PT0gXCJPS1wiKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJlamVjdChcIkVSUk9SXCIpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG59IiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=