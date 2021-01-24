(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart~main"],{

/***/ "./assets/js-routes.json":
/*!*******************************!*\
  !*** ./assets/js-routes.json ***!
  \*******************************/
/*! exports provided: base_url, routes, prefix, host, port, scheme, locale, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"base_url\":\"\",\"routes\":{\"addToCard\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/addtocart\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]},\"getCart\":{\"tokens\":[[\"text\",\"/getcart\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"GET\"],\"schemes\":[]},\"getGoods\":{\"tokens\":[[\"text\",\"/getgoods\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"GET\"],\"schemes\":[]},\"removeFromCart\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/removefromcart\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]}},\"prefix\":\"\",\"host\":\"localhost\",\"port\":\"\",\"scheme\":\"http\",\"locale\":[]}");

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js":
/*!********************************************************************************!*\
  !*** ./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function (root, factory) {
  var routing = factory();

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (routing.Routing),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  'use strict';
  /**
   * @fileoverview This file defines the Router class.
   *
   * You can compile this file by running the following command from the Resources folder:
   *
   *    npm install && npm run build
   */

  /**
   * Class Router
   */

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Router = function () {
    /**
     * @constructor
     * @param {Router.Context=} context
     * @param {Object.<string, Router.Route>=} routes
     */
    function Router(context, routes) {
      _classCallCheck(this, Router);

      this.context_ = context || {
        base_url: '',
        prefix: '',
        host: '',
        port: '',
        scheme: '',
        locale: ''
      };
      this.setRoutes(routes || {});
    }
    /**
     * Returns the current instance.
     * @returns {Router}
     */


    _createClass(Router, [{
      key: 'setRoutingData',

      /**
       * Sets data for the current instance
       * @param {Object} data
       */
      value: function setRoutingData(data) {
        this.setBaseUrl(data['base_url']);
        this.setRoutes(data['routes']);

        if ('prefix' in data) {
          this.setPrefix(data['prefix']);
        }

        if ('port' in data) {
          this.setPort(data['port']);
        }

        if ('locale' in data) {
          this.setLocale(data['locale']);
        }

        this.setHost(data['host']);
        this.setScheme(data['scheme']);
      }
      /**
       * @param {Object.<string, Router.Route>} routes
       */

    }, {
      key: 'setRoutes',
      value: function setRoutes(routes) {
        this.routes_ = Object.freeze(routes);
      }
      /**
       * @return {Object.<string, Router.Route>} routes
       */

    }, {
      key: 'getRoutes',
      value: function getRoutes() {
        return this.routes_;
      }
      /**
       * @param {string} baseUrl
       */

    }, {
      key: 'setBaseUrl',
      value: function setBaseUrl(baseUrl) {
        this.context_.base_url = baseUrl;
      }
      /**
       * @return {string}
       */

    }, {
      key: 'getBaseUrl',
      value: function getBaseUrl() {
        return this.context_.base_url;
      }
      /**
       * @param {string} prefix
       */

    }, {
      key: 'setPrefix',
      value: function setPrefix(prefix) {
        this.context_.prefix = prefix;
      }
      /**
       * @param {string} scheme
       */

    }, {
      key: 'setScheme',
      value: function setScheme(scheme) {
        this.context_.scheme = scheme;
      }
      /**
       * @return {string}
       */

    }, {
      key: 'getScheme',
      value: function getScheme() {
        return this.context_.scheme;
      }
      /**
       * @param {string} host
       */

    }, {
      key: 'setHost',
      value: function setHost(host) {
        this.context_.host = host;
      }
      /**
       * @return {string}
       */

    }, {
      key: 'getHost',
      value: function getHost() {
        return this.context_.host;
      }
      /**
       * @param {string} port
      */

    }, {
      key: 'setPort',
      value: function setPort(port) {
        this.context_.port = port;
      }
      /**
       * @return {string}
       */

    }, {
      key: 'getPort',
      value: function getPort() {
        return this.context_.port;
      }
    }, {
      key: 'setLocale',

      /**
       * @param {string} locale
       */
      value: function setLocale(locale) {
        this.context_.locale = locale;
      }
      /**
       * @return {string}
       */

    }, {
      key: 'getLocale',
      value: function getLocale() {
        return this.context_.locale;
      }
    }, {
      key: 'buildQueryParams',

      /**
       * Builds query string params added to a URL.
       * Port of jQuery's $.param() function, so credit is due there.
       *
       * @param {string} prefix
       * @param {Array|Object|string} params
       * @param {Function} add
       */
      value: function buildQueryParams(prefix, params, add) {
        var _this = this;

        var name = void 0;
        var rbracket = new RegExp(/\[\]$/);

        if (params instanceof Array) {
          params.forEach(function (val, i) {
            if (rbracket.test(prefix)) {
              add(prefix, val);
            } else {
              _this.buildQueryParams(prefix + '[' + ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? i : '') + ']', val, add);
            }
          });
        } else if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
          for (name in params) {
            this.buildQueryParams(prefix + '[' + name + ']', params[name], add);
          }
        } else {
          add(prefix, params);
        }
      }
      /**
       * Returns a raw route object.
       *
       * @param {string} name
       * @return {Router.Route}
       */

    }, {
      key: 'getRoute',
      value: function getRoute(name) {
        var prefixedName = this.context_.prefix + name;
        var sf41i18nName = name + '.' + this.context_.locale;
        var prefixedSf41i18nName = this.context_.prefix + name + '.' + this.context_.locale;
        var variants = [prefixedName, sf41i18nName, prefixedSf41i18nName, name];

        for (var i in variants) {
          if (variants[i] in this.routes_) {
            return this.routes_[variants[i]];
          }
        }

        throw new Error('The route "' + name + '" does not exist.');
      }
      /**
       * Generates the URL for a route.
       *
       * @param {string} name
       * @param {Object.<string, string>} opt_params
       * @param {boolean} absolute
       * @return {string}
       */

    }, {
      key: 'generate',
      value: function generate(name, opt_params) {
        var absolute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var route = this.getRoute(name),
            params = opt_params || {},
            unusedParams = _extends({}, params),
            url = '',
            optional = true,
            host = '',
            port = typeof this.getPort() == "undefined" || this.getPort() === null ? '' : this.getPort();

        route.tokens.forEach(function (token) {
          if ('text' === token[0]) {
            url = Router.encodePathComponent(token[1]) + url;
            optional = false;
            return;
          }

          if ('variable' === token[0]) {
            var hasDefault = route.defaults && token[3] in route.defaults;

            if (false === optional || !hasDefault || token[3] in params && params[token[3]] != route.defaults[token[3]]) {
              var value = void 0;

              if (token[3] in params) {
                value = params[token[3]];
                delete unusedParams[token[3]];
              } else if (hasDefault) {
                value = route.defaults[token[3]];
              } else if (optional) {
                return;
              } else {
                throw new Error('The route "' + name + '" requires the parameter "' + token[3] + '".');
              }

              var empty = true === value || false === value || '' === value;

              if (!empty || !optional) {
                var encodedValue = Router.encodePathComponent(value);

                if ('null' === encodedValue && null === value) {
                  encodedValue = '';
                }

                url = token[1] + encodedValue + url;
              }

              optional = false;
            } else if (hasDefault && token[3] in unusedParams) {
              delete unusedParams[token[3]];
            }

            return;
          }

          throw new Error('The token type "' + token[0] + '" is not supported.');
        });

        if (url === '') {
          url = '/';
        }

        route.hosttokens.forEach(function (token) {
          var value = void 0;

          if ('text' === token[0]) {
            host = token[1] + host;
            return;
          }

          if ('variable' === token[0]) {
            if (token[3] in params) {
              value = params[token[3]];
              delete unusedParams[token[3]];
            } else if (route.defaults && token[3] in route.defaults) {
              value = route.defaults[token[3]];
            }

            host = token[1] + value + host;
          }
        }); // Foo-bar!

        url = this.context_.base_url + url;

        if (route.requirements && "_scheme" in route.requirements && this.getScheme() != route.requirements["_scheme"]) {
          var currentHost = host || this.getHost();
          url = route.requirements["_scheme"] + "://" + currentHost + (currentHost.indexOf(':' + port) > -1 || '' === port ? '' : ':' + port) + url;
        } else if ("undefined" !== typeof route.schemes && "undefined" !== typeof route.schemes[0] && this.getScheme() !== route.schemes[0]) {
          var _currentHost = host || this.getHost();

          url = route.schemes[0] + "://" + _currentHost + (_currentHost.indexOf(':' + port) > -1 || '' === port ? '' : ':' + port) + url;
        } else if (host && this.getHost() !== host + (host.indexOf(':' + port) > -1 || '' === port ? '' : ':' + port)) {
          url = this.getScheme() + "://" + host + (host.indexOf(':' + port) > -1 || '' === port ? '' : ':' + port) + url;
        } else if (absolute === true) {
          url = this.getScheme() + "://" + this.getHost() + (this.getHost().indexOf(':' + port) > -1 || '' === port ? '' : ':' + port) + url;
        }

        if (Object.keys(unusedParams).length > 0) {
          var prefix = void 0;
          var queryParams = [];

          var add = function add(key, value) {
            // if value is a function then call it and assign it's return value as value
            value = typeof value === 'function' ? value() : value; // change null to empty string

            value = value === null ? '' : value;
            queryParams.push(Router.encodeQueryComponent(key) + '=' + Router.encodeQueryComponent(value));
          };

          for (prefix in unusedParams) {
            this.buildQueryParams(prefix, unusedParams[prefix], add);
          }

          url = url + '?' + queryParams.join('&');
        }

        return url;
      }
      /**
       * Returns the given string encoded to mimic Symfony URL generator.
       *
       * @param {string} value
       * @return {string}
       */

    }], [{
      key: 'getInstance',
      value: function getInstance() {
        return Routing;
      }
      /**
       * Configures the current Router instance with the provided data.
       * @param {Object} data
       */

    }, {
      key: 'setData',
      value: function setData(data) {
        var router = Router.getInstance();
        router.setRoutingData(data);
      }
    }, {
      key: 'customEncodeURIComponent',
      value: function customEncodeURIComponent(value) {
        return encodeURIComponent(value).replace(/%2F/g, '/').replace(/%40/g, '@').replace(/%3A/g, ':').replace(/%21/g, '!').replace(/%3B/g, ';').replace(/%2C/g, ',').replace(/%2A/g, '*').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/'/g, '%27');
      }
      /**
       * Returns the given path properly encoded to mimic Symfony URL generator.
       *
       * @param {string} value
       * @return {string}
       */

    }, {
      key: 'encodePathComponent',
      value: function encodePathComponent(value) {
        return Router.customEncodeURIComponent(value).replace(/%3D/g, '=').replace(/%2B/g, '+').replace(/%21/g, '!').replace(/%7C/g, '|');
      }
      /**
       * Returns the given query parameter or value properly encoded to mimic Symfony URL generator.
       *
       * @param {string} value
       * @return {string}
       */

    }, {
      key: 'encodeQueryComponent',
      value: function encodeQueryComponent(value) {
        return Router.customEncodeURIComponent(value).replace(/%3F/g, '?');
      }
    }]);

    return Router;
  }();
  /**
   * @typedef {{
   *     tokens: (Array.<Array.<string>>),
   *     defaults: (Object.<string, string>),
   *     requirements: Object,
   *     hosttokens: (Array.<string>)
   * }}
   */


  Router.Route;
  /**
   * @typedef {{
   *     base_url: (string)
   * }}
   */

  Router.Context;
  /**
   * Router singleton.
   * @const
   * @type {Router}
   */

  var Routing = new Router();
  return {
    Router: Router,
    Routing: Routing
  };
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2ZyaWVuZHNvZnN5bWZvbnkvanNyb3V0aW5nLWJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRlci5qcyJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsInJvdXRpbmciLCJkZWZpbmUiLCJSb3V0aW5nIiwiX2V4dGVuZHMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiVHlwZUVycm9yIiwiUm91dGVyIiwiY29udGV4dCIsInJvdXRlcyIsImNvbnRleHRfIiwiYmFzZV91cmwiLCJwcmVmaXgiLCJob3N0IiwicG9ydCIsInNjaGVtZSIsImxvY2FsZSIsInNldFJvdXRlcyIsInZhbHVlIiwic2V0Um91dGluZ0RhdGEiLCJkYXRhIiwic2V0QmFzZVVybCIsInNldFByZWZpeCIsInNldFBvcnQiLCJzZXRMb2NhbGUiLCJzZXRIb3N0Iiwic2V0U2NoZW1lIiwicm91dGVzXyIsImZyZWV6ZSIsImdldFJvdXRlcyIsImJhc2VVcmwiLCJnZXRCYXNlVXJsIiwiZ2V0U2NoZW1lIiwiZ2V0SG9zdCIsImdldFBvcnQiLCJnZXRMb2NhbGUiLCJidWlsZFF1ZXJ5UGFyYW1zIiwicGFyYW1zIiwiYWRkIiwiX3RoaXMiLCJuYW1lIiwicmJyYWNrZXQiLCJSZWdFeHAiLCJBcnJheSIsImZvckVhY2giLCJ2YWwiLCJ0ZXN0IiwiZ2V0Um91dGUiLCJwcmVmaXhlZE5hbWUiLCJzZjQxaTE4bk5hbWUiLCJwcmVmaXhlZFNmNDFpMThuTmFtZSIsInZhcmlhbnRzIiwiRXJyb3IiLCJnZW5lcmF0ZSIsIm9wdF9wYXJhbXMiLCJhYnNvbHV0ZSIsInVuZGVmaW5lZCIsInJvdXRlIiwidW51c2VkUGFyYW1zIiwidXJsIiwib3B0aW9uYWwiLCJ0b2tlbnMiLCJ0b2tlbiIsImVuY29kZVBhdGhDb21wb25lbnQiLCJoYXNEZWZhdWx0IiwiZGVmYXVsdHMiLCJlbXB0eSIsImVuY29kZWRWYWx1ZSIsImhvc3R0b2tlbnMiLCJyZXF1aXJlbWVudHMiLCJjdXJyZW50SG9zdCIsImluZGV4T2YiLCJzY2hlbWVzIiwiX2N1cnJlbnRIb3N0Iiwia2V5cyIsInF1ZXJ5UGFyYW1zIiwicHVzaCIsImVuY29kZVF1ZXJ5Q29tcG9uZW50Iiwiam9pbiIsImdldEluc3RhbmNlIiwic2V0RGF0YSIsInJvdXRlciIsImN1c3RvbUVuY29kZVVSSUNvbXBvbmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJSb3V0ZSIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FDLFdBQVVBLElBQVYsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQ3RCLE1BQUlDLE9BQU8sR0FBR0QsT0FBTyxFQUFyQjs7QUFDQSxNQUFJLElBQUosRUFBZ0Q7QUFDNUM7QUFDQUUscUNBQU8sRUFBRCxvQ0FBS0QsT0FBTyxDQUFDRSxPQUFiO0FBQUE7QUFBQTtBQUFBLG9HQUFOO0FBQ0gsR0FIRCxNQUdPLEVBV047QUFDSixDQWpCQSxFQWlCQyxJQWpCRCxFQWlCTyxZQUFZO0FBQ2hCO0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFNLENBQUMrRSxPQUFQO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFJL0csT0FBTyxHQUFHLElBQUlnQyxNQUFKLEVBQWQ7QUFFSSxTQUFPO0FBQUVBLFVBQU0sRUFBRUEsTUFBVjtBQUFrQmhDLFdBQU8sRUFBRUE7QUFBM0IsR0FBUDtBQUNILENBL2VBLENBQUQsQyIsImZpbGUiOiJjYXJ0fm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICB2YXIgcm91dGluZyA9IGZhY3RvcnkoKTtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFtdLCByb3V0aW5nLlJvdXRpbmcpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgICAgICAvLyBsaWtlIE5vZGUuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gcm91dGluZy5Sb3V0aW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICAgIHJvb3QuUm91dGluZyA9IHJvdXRpbmcuUm91dGluZztcbiAgICAgICAgcm9vdC5mb3MgPSB7XG4gICAgICAgICAgICBSb3V0ZXI6IHJvdXRpbmcuUm91dGVyXG4gICAgICAgIH07XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGRlZmluZXMgdGhlIFJvdXRlciBjbGFzcy5cbiAqXG4gKiBZb3UgY2FuIGNvbXBpbGUgdGhpcyBmaWxlIGJ5IHJ1bm5pbmcgdGhlIGZvbGxvd2luZyBjb21tYW5kIGZyb20gdGhlIFJlc291cmNlcyBmb2xkZXI6XG4gKlxuICogICAgbnBtIGluc3RhbGwgJiYgbnBtIHJ1biBidWlsZFxuICovXG5cbi8qKlxuICogQ2xhc3MgUm91dGVyXG4gKi9cblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUm91dGVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtSb3V0ZXIuQ29udGV4dD19IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBSb3V0ZXIuUm91dGU+PX0gcm91dGVzXG4gICAgICovXG4gICAgZnVuY3Rpb24gUm91dGVyKGNvbnRleHQsIHJvdXRlcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGVyKTtcblxuICAgICAgICB0aGlzLmNvbnRleHRfID0gY29udGV4dCB8fCB7IGJhc2VfdXJsOiAnJywgcHJlZml4OiAnJywgaG9zdDogJycsIHBvcnQ6ICcnLCBzY2hlbWU6ICcnLCBsb2NhbGU6ICcnIH07XG4gICAgICAgIHRoaXMuc2V0Um91dGVzKHJvdXRlcyB8fCB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJucyB7Um91dGVyfVxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoUm91dGVyLCBbe1xuICAgICAgICBrZXk6ICdzZXRSb3V0aW5nRGF0YScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBkYXRhIGZvciB0aGUgY3VycmVudCBpbnN0YW5jZVxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFJvdXRpbmdEYXRhKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QmFzZVVybChkYXRhWydiYXNlX3VybCddKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Um91dGVzKGRhdGFbJ3JvdXRlcyddKTtcblxuICAgICAgICAgICAgaWYgKCdwcmVmaXgnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByZWZpeChkYXRhWydwcmVmaXgnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ3BvcnQnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvcnQoZGF0YVsncG9ydCddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnbG9jYWxlJyBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMb2NhbGUoZGF0YVsnbG9jYWxlJ10pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldEhvc3QoZGF0YVsnaG9zdCddKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NoZW1lKGRhdGFbJ3NjaGVtZSddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBSb3V0ZXIuUm91dGU+fSByb3V0ZXNcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFJvdXRlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSb3V0ZXMocm91dGVzKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlc18gPSBPYmplY3QuZnJlZXplKHJvdXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFJvdXRlci5Sb3V0ZT59IHJvdXRlc1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Um91dGVzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvdXRlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRlc187XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVcmxcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldEJhc2VVcmwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0QmFzZVVybChiYXNlVXJsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLmJhc2VfdXJsID0gYmFzZVVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRCYXNlVXJsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJhc2VVcmwoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5iYXNlX3VybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRQcmVmaXgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UHJlZml4KHByZWZpeCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5wcmVmaXggPSBwcmVmaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNjaGVtZVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0U2NoZW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNjaGVtZShzY2hlbWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8uc2NoZW1lID0gc2NoZW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFNjaGVtZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTY2hlbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5zY2hlbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGhvc3RcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldEhvc3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SG9zdChob3N0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLmhvc3QgPSBob3N0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEhvc3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SG9zdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmhvc3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnRcbiAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0UG9ydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQb3J0KHBvcnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8ucG9ydCA9IHBvcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0UG9ydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3J0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8ucG9ydDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0TG9jYWxlJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TG9jYWxlKGxvY2FsZSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0TG9jYWxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvY2FsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmxvY2FsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYnVpbGRRdWVyeVBhcmFtcycsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQnVpbGRzIHF1ZXJ5IHN0cmluZyBwYXJhbXMgYWRkZWQgdG8gYSBVUkwuXG4gICAgICAgICAqIFBvcnQgb2YgalF1ZXJ5J3MgJC5wYXJhbSgpIGZ1bmN0aW9uLCBzbyBjcmVkaXQgaXMgZHVlIHRoZXJlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gcGFyYW1zXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGFkZFxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkUXVlcnlQYXJhbXMocHJlZml4LCBwYXJhbXMsIGFkZCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIG5hbWUgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgcmJyYWNrZXQgPSBuZXcgUmVnRXhwKC9cXFtcXF0kLyk7XG5cbiAgICAgICAgICAgIGlmIChwYXJhbXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJicmFja2V0LnRlc3QocHJlZml4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkKHByZWZpeCwgdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmJ1aWxkUXVlcnlQYXJhbXMocHJlZml4ICsgJ1snICsgKCh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWwpKSA9PT0gJ29iamVjdCcgPyBpIDogJycpICsgJ10nLCB2YWwsIGFkZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBwYXJhbXMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhcmFtcykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGZvciAobmFtZSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKHByZWZpeCArICdbJyArIG5hbWUgKyAnXScsIHBhcmFtc1tuYW1lXSwgYWRkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZChwcmVmaXgsIHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHJhdyByb3V0ZSBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICAgICAqIEByZXR1cm4ge1JvdXRlci5Sb3V0ZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFJvdXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvdXRlKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXhlZE5hbWUgPSB0aGlzLmNvbnRleHRfLnByZWZpeCArIG5hbWU7XG4gICAgICAgICAgICB2YXIgc2Y0MWkxOG5OYW1lID0gbmFtZSArICcuJyArIHRoaXMuY29udGV4dF8ubG9jYWxlO1xuICAgICAgICAgICAgdmFyIHByZWZpeGVkU2Y0MWkxOG5OYW1lID0gdGhpcy5jb250ZXh0Xy5wcmVmaXggKyBuYW1lICsgJy4nICsgdGhpcy5jb250ZXh0Xy5sb2NhbGU7XG4gICAgICAgICAgICB2YXIgdmFyaWFudHMgPSBbcHJlZml4ZWROYW1lLCBzZjQxaTE4bk5hbWUsIHByZWZpeGVkU2Y0MWkxOG5OYW1lLCBuYW1lXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB2YXJpYW50cykge1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYW50c1tpXSBpbiB0aGlzLnJvdXRlc18pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVzX1t2YXJpYW50c1tpXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicgKyBuYW1lICsgJ1wiIGRvZXMgbm90IGV4aXN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyYXRlcyB0aGUgVVJMIGZvciBhIHJvdXRlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBvcHRfcGFyYW1zXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWJzb2x1dGVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2VuZXJhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGUobmFtZSwgb3B0X3BhcmFtcykge1xuICAgICAgICAgICAgdmFyIGFic29sdXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAgICAgICAgICAgdmFyIHJvdXRlID0gdGhpcy5nZXRSb3V0ZShuYW1lKSxcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSBvcHRfcGFyYW1zIHx8IHt9LFxuICAgICAgICAgICAgICAgIHVudXNlZFBhcmFtcyA9IF9leHRlbmRzKHt9LCBwYXJhbXMpLFxuICAgICAgICAgICAgICAgIHVybCA9ICcnLFxuICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBob3N0ID0gJycsXG4gICAgICAgICAgICAgICAgcG9ydCA9IHR5cGVvZiB0aGlzLmdldFBvcnQoKSA9PSBcInVuZGVmaW5lZFwiIHx8IHRoaXMuZ2V0UG9ydCgpID09PSBudWxsID8gJycgOiB0aGlzLmdldFBvcnQoKTtcblxuICAgICAgICAgICAgcm91dGUudG9rZW5zLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCd0ZXh0JyA9PT0gdG9rZW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gUm91dGVyLmVuY29kZVBhdGhDb21wb25lbnQodG9rZW5bMV0pICsgdXJsO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJ3ZhcmlhYmxlJyA9PT0gdG9rZW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhc0RlZmF1bHQgPSByb3V0ZS5kZWZhdWx0cyAmJiB0b2tlblszXSBpbiByb3V0ZS5kZWZhdWx0cztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhbHNlID09PSBvcHRpb25hbCB8fCAhaGFzRGVmYXVsdCB8fCB0b2tlblszXSBpbiBwYXJhbXMgJiYgcGFyYW1zW3Rva2VuWzNdXSAhPSByb3V0ZS5kZWZhdWx0c1t0b2tlblszXV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuWzNdIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdW51c2VkUGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcm91dGUuZGVmYXVsdHNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInICsgbmFtZSArICdcIiByZXF1aXJlcyB0aGUgcGFyYW1ldGVyIFwiJyArIHRva2VuWzNdICsgJ1wiLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1wdHkgPSB0cnVlID09PSB2YWx1ZSB8fCBmYWxzZSA9PT0gdmFsdWUgfHwgJycgPT09IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVtcHR5IHx8ICFvcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmNvZGVkVmFsdWUgPSBSb3V0ZXIuZW5jb2RlUGF0aENvbXBvbmVudCh2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ251bGwnID09PSBlbmNvZGVkVmFsdWUgJiYgbnVsbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdG9rZW5bMV0gKyBlbmNvZGVkVmFsdWUgKyB1cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRGVmYXVsdCAmJiB0b2tlblszXSBpbiB1bnVzZWRQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1bnVzZWRQYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHRva2VuIHR5cGUgXCInICsgdG9rZW5bMF0gKyAnXCIgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodXJsID09PSAnJykge1xuICAgICAgICAgICAgICAgIHVybCA9ICcvJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm91dGUuaG9zdHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICAgIGlmICgndGV4dCcgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3QgPSB0b2tlblsxXSArIGhvc3Q7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW5bM10gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmFtc1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdW51c2VkUGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3V0ZS5kZWZhdWx0cyAmJiB0b2tlblszXSBpbiByb3V0ZS5kZWZhdWx0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByb3V0ZS5kZWZhdWx0c1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBob3N0ID0gdG9rZW5bMV0gKyB2YWx1ZSArIGhvc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBGb28tYmFyIVxuICAgICAgICAgICAgdXJsID0gdGhpcy5jb250ZXh0Xy5iYXNlX3VybCArIHVybDtcblxuICAgICAgICAgICAgaWYgKHJvdXRlLnJlcXVpcmVtZW50cyAmJiBcIl9zY2hlbWVcIiBpbiByb3V0ZS5yZXF1aXJlbWVudHMgJiYgdGhpcy5nZXRTY2hlbWUoKSAhPSByb3V0ZS5yZXF1aXJlbWVudHNbXCJfc2NoZW1lXCJdKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRIb3N0ID0gaG9zdCB8fCB0aGlzLmdldEhvc3QoKTtcblxuICAgICAgICAgICAgICAgIHVybCA9IHJvdXRlLnJlcXVpcmVtZW50c1tcIl9zY2hlbWVcIl0gKyBcIjovL1wiICsgY3VycmVudEhvc3QgKyAoY3VycmVudEhvc3QuaW5kZXhPZignOicgKyBwb3J0KSA+IC0xIHx8ICcnID09PSBwb3J0ID8gJycgOiAnOicgKyBwb3J0KSArIHVybDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHJvdXRlLnNjaGVtZXMgJiYgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHJvdXRlLnNjaGVtZXNbMF0gJiYgdGhpcy5nZXRTY2hlbWUoKSAhPT0gcm91dGUuc2NoZW1lc1swXSkge1xuICAgICAgICAgICAgICAgIHZhciBfY3VycmVudEhvc3QgPSBob3N0IHx8IHRoaXMuZ2V0SG9zdCgpO1xuXG4gICAgICAgICAgICAgICAgdXJsID0gcm91dGUuc2NoZW1lc1swXSArIFwiOi8vXCIgKyBfY3VycmVudEhvc3QgKyAoX2N1cnJlbnRIb3N0LmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkgKyB1cmw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvc3QgJiYgdGhpcy5nZXRIb3N0KCkgIT09IGhvc3QgKyAoaG9zdC5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdGhpcy5nZXRTY2hlbWUoKSArIFwiOi8vXCIgKyBob3N0ICsgKGhvc3QuaW5kZXhPZignOicgKyBwb3J0KSA+IC0xIHx8ICcnID09PSBwb3J0ID8gJycgOiAnOicgKyBwb3J0KSArIHVybDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWJzb2x1dGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB0aGlzLmdldFNjaGVtZSgpICsgXCI6Ly9cIiArIHRoaXMuZ2V0SG9zdCgpICsgKHRoaXMuZ2V0SG9zdCgpLmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkgKyB1cmw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh1bnVzZWRQYXJhbXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJlZml4ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBxdWVyeVBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBhZGQgPSBmdW5jdGlvbiBhZGQoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uIHRoZW4gY2FsbCBpdCBhbmQgYXNzaWduIGl0J3MgcmV0dXJuIHZhbHVlIGFzIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUoKSA6IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBudWxsIHRvIGVtcHR5IHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID09PSBudWxsID8gJycgOiB2YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5wdXNoKFJvdXRlci5lbmNvZGVRdWVyeUNvbXBvbmVudChrZXkpICsgJz0nICsgUm91dGVyLmVuY29kZVF1ZXJ5Q29tcG9uZW50KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGZvciAocHJlZml4IGluIHVudXNlZFBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUXVlcnlQYXJhbXMocHJlZml4LCB1bnVzZWRQYXJhbXNbcHJlZml4XSwgYWRkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwgKyAnPycgKyBxdWVyeVBhcmFtcy5qb2luKCcmJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZ2l2ZW4gc3RyaW5nIGVuY29kZWQgdG8gbWltaWMgU3ltZm9ueSBVUkwgZ2VuZXJhdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH1dLCBbe1xuICAgICAgICBrZXk6ICdnZXRJbnN0YW5jZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBSb3V0aW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbmZpZ3VyZXMgdGhlIGN1cnJlbnQgUm91dGVyIGluc3RhbmNlIHdpdGggdGhlIHByb3ZpZGVkIGRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXREYXRhJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldERhdGEoZGF0YSkge1xuICAgICAgICAgICAgdmFyIHJvdXRlciA9IFJvdXRlci5nZXRJbnN0YW5jZSgpO1xuXG4gICAgICAgICAgICByb3V0ZXIuc2V0Um91dGluZ0RhdGEoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2N1c3RvbUVuY29kZVVSSUNvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjdXN0b21FbmNvZGVVUklDb21wb25lbnQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoLyUyRi9nLCAnLycpLnJlcGxhY2UoLyU0MC9nLCAnQCcpLnJlcGxhY2UoLyUzQS9nLCAnOicpLnJlcGxhY2UoLyUyMS9nLCAnIScpLnJlcGxhY2UoLyUzQi9nLCAnOycpLnJlcGxhY2UoLyUyQy9nLCAnLCcpLnJlcGxhY2UoLyUyQS9nLCAnKicpLnJlcGxhY2UoL1xcKC9nLCAnJTI4JykucmVwbGFjZSgvXFwpL2csICclMjknKS5yZXBsYWNlKC8nL2csICclMjcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBnaXZlbiBwYXRoIHByb3Blcmx5IGVuY29kZWQgdG8gbWltaWMgU3ltZm9ueSBVUkwgZ2VuZXJhdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5jb2RlUGF0aENvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbmNvZGVQYXRoQ29tcG9uZW50KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUm91dGVyLmN1c3RvbUVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkucmVwbGFjZSgvJTNEL2csICc9JykucmVwbGFjZSgvJTJCL2csICcrJykucmVwbGFjZSgvJTIxL2csICchJykucmVwbGFjZSgvJTdDL2csICd8Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZ2l2ZW4gcXVlcnkgcGFyYW1ldGVyIG9yIHZhbHVlIHByb3Blcmx5IGVuY29kZWQgdG8gbWltaWMgU3ltZm9ueSBVUkwgZ2VuZXJhdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5jb2RlUXVlcnlDb21wb25lbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5jb2RlUXVlcnlDb21wb25lbnQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSb3V0ZXIuY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC8lM0YvZywgJz8nKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSb3V0ZXI7XG59KCk7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgICB0b2tlbnM6IChBcnJheS48QXJyYXkuPHN0cmluZz4+KSxcbiAqICAgICBkZWZhdWx0czogKE9iamVjdC48c3RyaW5nLCBzdHJpbmc+KSxcbiAqICAgICByZXF1aXJlbWVudHM6IE9iamVjdCxcbiAqICAgICBob3N0dG9rZW5zOiAoQXJyYXkuPHN0cmluZz4pXG4gKiB9fVxuICovXG5cblxuUm91dGVyLlJvdXRlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgICAgYmFzZV91cmw6IChzdHJpbmcpXG4gKiB9fVxuICovXG5Sb3V0ZXIuQ29udGV4dDtcblxuLyoqXG4gKiBSb3V0ZXIgc2luZ2xldG9uLlxuICogQGNvbnN0XG4gKiBAdHlwZSB7Um91dGVyfVxuICovXG52YXIgUm91dGluZyA9IG5ldyBSb3V0ZXIoKTtcblxuICAgIHJldHVybiB7IFJvdXRlcjogUm91dGVyLCBSb3V0aW5nOiBSb3V0aW5nIH07XG59KSk7Il0sInNvdXJjZVJvb3QiOiIifQ==