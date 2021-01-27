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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sIm5hbWVzIjpbIlJvdXRpbmciLCJyZXF1aXJlIiwiUm91dGVzIiwic2V0Um91dGluZ0RhdGEiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInRhcmdldCIsInR5cGUiLCJjbGFzc05hbWUiLCJuYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInByaWNlIiwiY29sb3IiLCJkZXNjcmlwdGlvbiIsImNvdW50IiwiY2F0ZWdvcnkiLCJjYXRlZ29yeV9vcHRpb24iLCJzZWxlY3RlZEluZGV4IiwiaWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybCIsImdlbmVyYXRlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImxlbmd0aCIsImRhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwieGhyUmVxIiwidGhlbiIsInJlc3BvbnNlIiwic2V0VGltZW91dCIsImlzTmFOIiwicGFyc2VJbnQiLCJ1c2VyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwic3R5bGUiLCJtZXRob2QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLHdKQUFELENBQXJCOztBQUNBLElBQUlDLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyxpREFBRCxDQUFwQjs7QUFDQUQsT0FBTyxDQUFDRyxjQUFSLENBQXVCRCxNQUF2QjtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQVVDLEtBQVYs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RDtBQUNuRCxNQUFJa0IsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBVjtBQUNBRCxLQUFHLENBQUNFLElBQUosQ0FBU0gsTUFBVCxFQUFpQm5CLEdBQWpCO0FBQ0FvQixLQUFHLENBQUNHLGdCQUFKLENBQXFCLGtCQUFyQixFQUF5QyxnQkFBekM7QUFDQUgsS0FBRyxDQUFDdkMsZ0JBQUosQ0FBcUIsTUFBckIsRUFBNkIsVUFBVUMsS0FBVixFQUFpQjtBQUMxQyxRQUFJLEtBQUswQyxVQUFMLEtBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCLFVBQUksS0FBS0MsTUFBTCxLQUFnQixHQUFoQixJQUF1QixLQUFLQyxVQUFMLEtBQW9CLElBQS9DLEVBQ0k1QixPQUFPLENBQUNTLElBQUksQ0FBQ29CLEtBQUwsQ0FBVyxLQUFLQyxZQUFoQixDQUFELENBQVAsQ0FESixLQUdJN0IsTUFBTSxDQUFDLE9BQUQsQ0FBTjtBQUNQO0FBQ0osR0FQRDtBQVFBcUIsS0FBRyxDQUFDUyxJQUFKLENBQVMzQixRQUFUO0FBQ0gsQzs7Ozs7Ozs7Ozs7QUMzRUQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLGdCQUFnQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFeEQ7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcseUNBQXlDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUm91dGluZyA9IHJlcXVpcmUoXCIuLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyXCIpO1xubGV0IFJvdXRlcyA9IHJlcXVpcmUoJy4vanMtcm91dGVzLmpzb24nKTtcblJvdXRpbmcuc2V0Um91dGluZ0RhdGEoUm91dGVzKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYodGFyZ2V0LnR5cGUgPT09IFwiYnV0dG9uXCIgJiYgdGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJzdWJtaXRCdXR0b25cIilcbiAgICB7XG4gICAgICAgIC8vIGdldCBEQVRBXG4gICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfbmFtZScpLnZhbHVlXG4gICAgICAgIGxldCBwcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kX3ByaWNlJykudmFsdWVcbiAgICAgICAgbGV0IGNvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfY29sb3InKS52YWx1ZVxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29vZF9kZXNjcmlwdGlvbicpLnZhbHVlXG4gICAgICAgIGxldCBjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnb29kX2NvdW50JykudmFsdWVcbiAgICAgICAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvb2RfY2F0ZWdvcnknKVxuICAgICAgICBsZXQgY2F0ZWdvcnlfb3B0aW9uID0gY2F0ZWdvcnlbY2F0ZWdvcnkuc2VsZWN0ZWRJbmRleF0uaWRcbiAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2FkZEdvb2QnKTtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSBjYXRlZ29yeS5sZW5ndGggPT09IDAgPyBcIm51bGxcIiA6IGNhdGVnb3J5XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnbmFtZSc6IG5hbWUsXG4gICAgICAgICAgICAgICAgJ3ByaWNlJzogcHJpY2UsXG4gICAgICAgICAgICAgICAgJ2NvbG9yJzogY29sb3IsXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgJ2NvdW50JzogY291bnQsXG4gICAgICAgICAgICAgICAgJ2NhdGVnb3J5JzogY2F0ZWdvcnlfb3B0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgICAgICAgIHhoclJlcShyZXNvbHZlLHJlamVjdCx1cmwsXCJQT1NUXCIsZm9ybURhdGEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQudmFsdWUgPSAnU3VibWl0dGVkJztcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHt0YXJnZXQudmFsdWUgPSBcIlN1Ym1pdFwifSwgMzAwMCk7XG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICBpZih0YXJnZXQudHlwZSA9PT0gXCJidXR0b25cIiAmJiB0YXJnZXQuY2xhc3NOYW1lID09PSBcImRlbGV0ZUJ1dHRvblwiICYmIGlzTmFOKHBhcnNlSW50KHRhcmdldC5pZCkpID09PSBmYWxzZSl7XG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIHRhcmdldC5pZClcbiAgICAgICAgICAgIHhoclJlcShyZXNvbHZlLHJlamVjdCxSb3V0aW5nLmdlbmVyYXRlKCdyZW1vdmVVc2VyJyx7aWQ6IHRhcmdldC5pZH0pLFwiUE9TVFwiLGZvcm1EYXRhKVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcl8nK3RhcmdldC5pZClcbiAgICAgICAgICAgICAgICB1c2VyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodXNlcilcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIGlmKHRhcmdldC50eXBlID09PSBcImJ1dHRvblwiICYmIHRhcmdldC5jbGFzc05hbWUgPT09IFwicHJvbXRCdXR0b25cIiAmJiBpc05hTihwYXJzZUludCh0YXJnZXQuaWQpKSA9PT0gZmFsc2Upe1xuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWQnLCB0YXJnZXQuaWQpXG4gICAgICAgICAgICB4aHJSZXEocmVzb2x2ZSxyZWplY3QsUm91dGluZy5nZW5lcmF0ZSgncHJvbXRVc2VyJyx7aWQ6IHRhcmdldC5pZH0pLFwiUE9TVFwiLCBmb3JtRGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsXycrdGFyZ2V0LmlkKVxuICAgICAgICAgICAgICAgIHVzZXIuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7dXNlci5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIn0sIDMwMDApO1xuXG4gICAgICAgICAgICB9KVxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIHhoclJlcShyZXNvbHZlLCByZWplY3QsIHVybCwgbWV0aG9kLCBmb3JtRGF0YSl7XG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIlgtUmVxdWVzdGVkLVdpdGhcIiwgXCJYTUxIdHRwUmVxdWVzdFwiKTtcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCAmJiB0aGlzLnN0YXR1c1RleHQgPT09IFwiT0tcIilcbiAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZWplY3QoXCJFUlJPUlwiKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgeGhyLnNlbmQoZm9ybURhdGEpO1xufSIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICAodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJyA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9