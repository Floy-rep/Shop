(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin~cart"],{

/***/ "./assets/js-routes.json":
/*!*******************************!*\
  !*** ./assets/js-routes.json ***!
  \*******************************/
/*! exports provided: base_url, routes, prefix, host, port, scheme, locale, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"base_url\":\"\",\"routes\":{\"addGood\":{\"tokens\":[[\"text\",\"/admin/addgood\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]},\"removeGood\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/admin/removegood\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]},\"removeUser\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/admin/removeuser\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]},\"promtUser\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/admin/promtuser\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]},\"getCart\":{\"tokens\":[[\"text\",\"/getcart\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"GET\"],\"schemes\":[]},\"addToCard\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/addtocart\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]},\"removeFromCart\":{\"tokens\":[[\"variable\",\"/\",\"[^/]++\",\"id\",true],[\"text\",\"/removefromcart\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"POST\"],\"schemes\":[]},\"getGoods\":{\"tokens\":[[\"text\",\"/getgoods\"]],\"defaults\":[],\"requirements\":[],\"hosttokens\":[],\"methods\":[\"GET\"],\"schemes\":[]}},\"prefix\":\"\",\"host\":\"localhost\",\"port\":\"\",\"scheme\":\"http\",\"locale\":[]}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLmpzIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5Iiwicm91dGluZyIsImRlZmluZSIsIlJvdXRpbmciLCJfZXh0ZW5kcyIsIk9iamVjdCIsImFzc2lnbiIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJjb25zdHJ1Y3RvciIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJUeXBlRXJyb3IiLCJSb3V0ZXIiLCJjb250ZXh0Iiwicm91dGVzIiwiY29udGV4dF8iLCJiYXNlX3VybCIsInByZWZpeCIsImhvc3QiLCJwb3J0Iiwic2NoZW1lIiwibG9jYWxlIiwic2V0Um91dGVzIiwidmFsdWUiLCJzZXRSb3V0aW5nRGF0YSIsImRhdGEiLCJzZXRCYXNlVXJsIiwic2V0UHJlZml4Iiwic2V0UG9ydCIsInNldExvY2FsZSIsInNldEhvc3QiLCJzZXRTY2hlbWUiLCJyb3V0ZXNfIiwiZnJlZXplIiwiZ2V0Um91dGVzIiwiYmFzZVVybCIsImdldEJhc2VVcmwiLCJnZXRTY2hlbWUiLCJnZXRIb3N0IiwiZ2V0UG9ydCIsImdldExvY2FsZSIsImJ1aWxkUXVlcnlQYXJhbXMiLCJwYXJhbXMiLCJhZGQiLCJfdGhpcyIsIm5hbWUiLCJyYnJhY2tldCIsIlJlZ0V4cCIsIkFycmF5IiwiZm9yRWFjaCIsInZhbCIsInRlc3QiLCJnZXRSb3V0ZSIsInByZWZpeGVkTmFtZSIsInNmNDFpMThuTmFtZSIsInByZWZpeGVkU2Y0MWkxOG5OYW1lIiwidmFyaWFudHMiLCJFcnJvciIsImdlbmVyYXRlIiwib3B0X3BhcmFtcyIsImFic29sdXRlIiwidW5kZWZpbmVkIiwicm91dGUiLCJ1bnVzZWRQYXJhbXMiLCJ1cmwiLCJvcHRpb25hbCIsInRva2VucyIsInRva2VuIiwiZW5jb2RlUGF0aENvbXBvbmVudCIsImhhc0RlZmF1bHQiLCJkZWZhdWx0cyIsImVtcHR5IiwiZW5jb2RlZFZhbHVlIiwiaG9zdHRva2VucyIsInJlcXVpcmVtZW50cyIsImN1cnJlbnRIb3N0IiwiaW5kZXhPZiIsInNjaGVtZXMiLCJfY3VycmVudEhvc3QiLCJrZXlzIiwicXVlcnlQYXJhbXMiLCJwdXNoIiwiZW5jb2RlUXVlcnlDb21wb25lbnQiLCJqb2luIiwiZ2V0SW5zdGFuY2UiLCJzZXREYXRhIiwicm91dGVyIiwiY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsIlJvdXRlIiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUMsV0FBVUEsSUFBVixFQUFnQkMsT0FBaEIsRUFBeUI7QUFDdEIsTUFBSUMsT0FBTyxHQUFHRCxPQUFPLEVBQXJCOztBQUNBLE1BQUksSUFBSixFQUFnRDtBQUM1QztBQUNBRSxxQ0FBTyxFQUFELG9DQUFLRCxPQUFPLENBQUNFLE9BQWI7QUFBQTtBQUFBO0FBQUEsb0dBQU47QUFDSCxHQUhELE1BR08sRUFXTjtBQUNKLENBakJBLEVBaUJDLElBakJELEVBaUJPLFlBQVk7QUFDaEI7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSUMsUUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsSUFBaUIsVUFBVUMsTUFBVixFQUFrQjtBQUFFLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUE5QixFQUFzQ0YsQ0FBQyxFQUF2QyxFQUEyQztBQUFFLFVBQUlHLE1BQU0sR0FBR0YsU0FBUyxDQUFDRCxDQUFELENBQXRCOztBQUEyQixXQUFLLElBQUlJLEdBQVQsSUFBZ0JELE1BQWhCLEVBQXdCO0FBQUUsWUFBSU4sTUFBTSxDQUFDUSxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNKLE1BQXJDLEVBQTZDQyxHQUE3QyxDQUFKLEVBQXVEO0FBQUVMLGdCQUFNLENBQUNLLEdBQUQsQ0FBTixHQUFjRCxNQUFNLENBQUNDLEdBQUQsQ0FBcEI7QUFBNEI7QUFBRTtBQUFFOztBQUFDLFdBQU9MLE1BQVA7QUFBZ0IsR0FBaFE7O0FBRUEsTUFBSVMsT0FBTyxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsU0FBT0EsTUFBTSxDQUFDQyxRQUFkLE1BQTJCLFFBQTNELEdBQXNFLFVBQVVDLEdBQVYsRUFBZTtBQUFFLG9CQUFjQSxHQUFkO0FBQW9CLEdBQTNHLEdBQThHLFVBQVVBLEdBQVYsRUFBZTtBQUFFLFdBQU9BLEdBQUcsSUFBSSxPQUFPRixNQUFQLEtBQWtCLFVBQXpCLElBQXVDRSxHQUFHLENBQUNDLFdBQUosS0FBb0JILE1BQTNELElBQXFFRSxHQUFHLEtBQUtGLE1BQU0sQ0FBQ0osU0FBcEYsR0FBZ0csUUFBaEcsWUFBa0hNLEdBQWxILENBQVA7QUFBK0gsR0FBNVE7O0FBRUEsTUFBSUUsWUFBWSxHQUFHLFlBQVk7QUFBRSxhQUFTQyxnQkFBVCxDQUEwQmYsTUFBMUIsRUFBa0NnQixLQUFsQyxFQUF5QztBQUFFLFdBQUssSUFBSWYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2UsS0FBSyxDQUFDYixNQUExQixFQUFrQ0YsQ0FBQyxFQUFuQyxFQUF1QztBQUFFLFlBQUlnQixVQUFVLEdBQUdELEtBQUssQ0FBQ2YsQ0FBRCxDQUF0QjtBQUEyQmdCLGtCQUFVLENBQUNDLFVBQVgsR0FBd0JELFVBQVUsQ0FBQ0MsVUFBWCxJQUF5QixLQUFqRDtBQUF3REQsa0JBQVUsQ0FBQ0UsWUFBWCxHQUEwQixJQUExQjtBQUFnQyxZQUFJLFdBQVdGLFVBQWYsRUFBMkJBLFVBQVUsQ0FBQ0csUUFBWCxHQUFzQixJQUF0QjtBQUE0QnRCLGNBQU0sQ0FBQ3VCLGNBQVAsQ0FBc0JyQixNQUF0QixFQUE4QmlCLFVBQVUsQ0FBQ1osR0FBekMsRUFBOENZLFVBQTlDO0FBQTREO0FBQUU7O0FBQUMsV0FBTyxVQUFVSyxXQUFWLEVBQXVCQyxVQUF2QixFQUFtQ0MsV0FBbkMsRUFBZ0Q7QUFBRSxVQUFJRCxVQUFKLEVBQWdCUixnQkFBZ0IsQ0FBQ08sV0FBVyxDQUFDaEIsU0FBYixFQUF3QmlCLFVBQXhCLENBQWhCO0FBQXFELFVBQUlDLFdBQUosRUFBaUJULGdCQUFnQixDQUFDTyxXQUFELEVBQWNFLFdBQWQsQ0FBaEI7QUFBNEMsYUFBT0YsV0FBUDtBQUFxQixLQUFoTjtBQUFtTixHQUE5aEIsRUFBbkI7O0FBRUEsV0FBU0csZUFBVCxDQUF5QkMsUUFBekIsRUFBbUNKLFdBQW5DLEVBQWdEO0FBQUUsUUFBSSxFQUFFSSxRQUFRLFlBQVlKLFdBQXRCLENBQUosRUFBd0M7QUFBRSxZQUFNLElBQUlLLFNBQUosQ0FBYyxtQ0FBZCxDQUFOO0FBQTJEO0FBQUU7O0FBRXpKLE1BQUlDLE1BQU0sR0FBRyxZQUFZO0FBRXJCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSSxhQUFTQSxNQUFULENBQWdCQyxPQUFoQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDN0JMLHFCQUFlLENBQUMsSUFBRCxFQUFPRyxNQUFQLENBQWY7O0FBRUEsV0FBS0csUUFBTCxHQUFnQkYsT0FBTyxJQUFJO0FBQUVHLGdCQUFRLEVBQUUsRUFBWjtBQUFnQkMsY0FBTSxFQUFFLEVBQXhCO0FBQTRCQyxZQUFJLEVBQUUsRUFBbEM7QUFBc0NDLFlBQUksRUFBRSxFQUE1QztBQUFnREMsY0FBTSxFQUFFLEVBQXhEO0FBQTREQyxjQUFNLEVBQUU7QUFBcEUsT0FBM0I7QUFDQSxXQUFLQyxTQUFMLENBQWVSLE1BQU0sSUFBSSxFQUF6QjtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7OztBQUdJaEIsZ0JBQVksQ0FBQ2MsTUFBRCxFQUFTLENBQUM7QUFDbEJ2QixTQUFHLEVBQUUsZ0JBRGE7O0FBSWxCO0FBQ1I7QUFDQTtBQUNBO0FBQ1FrQyxXQUFLLEVBQUUsU0FBU0MsY0FBVCxDQUF3QkMsSUFBeEIsRUFBOEI7QUFDakMsYUFBS0MsVUFBTCxDQUFnQkQsSUFBSSxDQUFDLFVBQUQsQ0FBcEI7QUFDQSxhQUFLSCxTQUFMLENBQWVHLElBQUksQ0FBQyxRQUFELENBQW5COztBQUVBLFlBQUksWUFBWUEsSUFBaEIsRUFBc0I7QUFDbEIsZUFBS0UsU0FBTCxDQUFlRixJQUFJLENBQUMsUUFBRCxDQUFuQjtBQUNIOztBQUNELFlBQUksVUFBVUEsSUFBZCxFQUFvQjtBQUNoQixlQUFLRyxPQUFMLENBQWFILElBQUksQ0FBQyxNQUFELENBQWpCO0FBQ0g7O0FBQ0QsWUFBSSxZQUFZQSxJQUFoQixFQUFzQjtBQUNsQixlQUFLSSxTQUFMLENBQWVKLElBQUksQ0FBQyxRQUFELENBQW5CO0FBQ0g7O0FBRUQsYUFBS0ssT0FBTCxDQUFhTCxJQUFJLENBQUMsTUFBRCxDQUFqQjtBQUNBLGFBQUtNLFNBQUwsQ0FBZU4sSUFBSSxDQUFDLFFBQUQsQ0FBbkI7QUFDSDtBQUVEO0FBQ1I7QUFDQTs7QUE1QjBCLEtBQUQsRUE4QmxCO0FBQ0NwQyxTQUFHLEVBQUUsV0FETjtBQUVDa0MsV0FBSyxFQUFFLFNBQVNELFNBQVQsQ0FBbUJSLE1BQW5CLEVBQTJCO0FBQzlCLGFBQUtrQixPQUFMLEdBQWVsRCxNQUFNLENBQUNtRCxNQUFQLENBQWNuQixNQUFkLENBQWY7QUFDSDtBQUVEO0FBQ1I7QUFDQTs7QUFSTyxLQTlCa0IsRUF3Q2xCO0FBQ0N6QixTQUFHLEVBQUUsV0FETjtBQUVDa0MsV0FBSyxFQUFFLFNBQVNXLFNBQVQsR0FBcUI7QUFDeEIsZUFBTyxLQUFLRixPQUFaO0FBQ0g7QUFFRDtBQUNSO0FBQ0E7O0FBUk8sS0F4Q2tCLEVBa0RsQjtBQUNDM0MsU0FBRyxFQUFFLFlBRE47QUFFQ2tDLFdBQUssRUFBRSxTQUFTRyxVQUFULENBQW9CUyxPQUFwQixFQUE2QjtBQUNoQyxhQUFLcEIsUUFBTCxDQUFjQyxRQUFkLEdBQXlCbUIsT0FBekI7QUFDSDtBQUVEO0FBQ1I7QUFDQTs7QUFSTyxLQWxEa0IsRUE0RGxCO0FBQ0M5QyxTQUFHLEVBQUUsWUFETjtBQUVDa0MsV0FBSyxFQUFFLFNBQVNhLFVBQVQsR0FBc0I7QUFDekIsZUFBTyxLQUFLckIsUUFBTCxDQUFjQyxRQUFyQjtBQUNIO0FBRUQ7QUFDUjtBQUNBOztBQVJPLEtBNURrQixFQXNFbEI7QUFDQzNCLFNBQUcsRUFBRSxXQUROO0FBRUNrQyxXQUFLLEVBQUUsU0FBU0ksU0FBVCxDQUFtQlYsTUFBbkIsRUFBMkI7QUFDOUIsYUFBS0YsUUFBTCxDQUFjRSxNQUFkLEdBQXVCQSxNQUF2QjtBQUNIO0FBRUQ7QUFDUjtBQUNBOztBQVJPLEtBdEVrQixFQWdGbEI7QUFDQzVCLFNBQUcsRUFBRSxXQUROO0FBRUNrQyxXQUFLLEVBQUUsU0FBU1EsU0FBVCxDQUFtQlgsTUFBbkIsRUFBMkI7QUFDOUIsYUFBS0wsUUFBTCxDQUFjSyxNQUFkLEdBQXVCQSxNQUF2QjtBQUNIO0FBRUQ7QUFDUjtBQUNBOztBQVJPLEtBaEZrQixFQTBGbEI7QUFDQy9CLFNBQUcsRUFBRSxXQUROO0FBRUNrQyxXQUFLLEVBQUUsU0FBU2MsU0FBVCxHQUFxQjtBQUN4QixlQUFPLEtBQUt0QixRQUFMLENBQWNLLE1BQXJCO0FBQ0g7QUFFRDtBQUNSO0FBQ0E7O0FBUk8sS0ExRmtCLEVBb0dsQjtBQUNDL0IsU0FBRyxFQUFFLFNBRE47QUFFQ2tDLFdBQUssRUFBRSxTQUFTTyxPQUFULENBQWlCWixJQUFqQixFQUF1QjtBQUMxQixhQUFLSCxRQUFMLENBQWNHLElBQWQsR0FBcUJBLElBQXJCO0FBQ0g7QUFFRDtBQUNSO0FBQ0E7O0FBUk8sS0FwR2tCLEVBOEdsQjtBQUNDN0IsU0FBRyxFQUFFLFNBRE47QUFFQ2tDLFdBQUssRUFBRSxTQUFTZSxPQUFULEdBQW1CO0FBQ3RCLGVBQU8sS0FBS3ZCLFFBQUwsQ0FBY0csSUFBckI7QUFDSDtBQUVEO0FBQ1I7QUFDQTs7QUFSTyxLQTlHa0IsRUF3SGxCO0FBQ0M3QixTQUFHLEVBQUUsU0FETjtBQUVDa0MsV0FBSyxFQUFFLFNBQVNLLE9BQVQsQ0FBaUJULElBQWpCLEVBQXVCO0FBQzFCLGFBQUtKLFFBQUwsQ0FBY0ksSUFBZCxHQUFxQkEsSUFBckI7QUFDSDtBQUVEO0FBQ1I7QUFDQTs7QUFSTyxLQXhIa0IsRUFrSWxCO0FBQ0M5QixTQUFHLEVBQUUsU0FETjtBQUVDa0MsV0FBSyxFQUFFLFNBQVNnQixPQUFULEdBQW1CO0FBQ3RCLGVBQU8sS0FBS3hCLFFBQUwsQ0FBY0ksSUFBckI7QUFDSDtBQUpGLEtBbElrQixFQXVJbEI7QUFDQzlCLFNBQUcsRUFBRSxXQUROOztBQUlDO0FBQ1I7QUFDQTtBQUNRa0MsV0FBSyxFQUFFLFNBQVNNLFNBQVQsQ0FBbUJSLE1BQW5CLEVBQTJCO0FBQzlCLGFBQUtOLFFBQUwsQ0FBY00sTUFBZCxHQUF1QkEsTUFBdkI7QUFDSDtBQUVEO0FBQ1I7QUFDQTs7QUFiTyxLQXZJa0IsRUFzSmxCO0FBQ0NoQyxTQUFHLEVBQUUsV0FETjtBQUVDa0MsV0FBSyxFQUFFLFNBQVNpQixTQUFULEdBQXFCO0FBQ3hCLGVBQU8sS0FBS3pCLFFBQUwsQ0FBY00sTUFBckI7QUFDSDtBQUpGLEtBdEprQixFQTJKbEI7QUFDQ2hDLFNBQUcsRUFBRSxrQkFETjs7QUFJQztBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1FrQyxXQUFLLEVBQUUsU0FBU2tCLGdCQUFULENBQTBCeEIsTUFBMUIsRUFBa0N5QixNQUFsQyxFQUEwQ0MsR0FBMUMsRUFBK0M7QUFDbEQsWUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBRUEsWUFBSUMsSUFBSSxHQUFHLEtBQUssQ0FBaEI7QUFDQSxZQUFJQyxRQUFRLEdBQUcsSUFBSUMsTUFBSixDQUFXLE9BQVgsQ0FBZjs7QUFFQSxZQUFJTCxNQUFNLFlBQVlNLEtBQXRCLEVBQTZCO0FBQ3pCTixnQkFBTSxDQUFDTyxPQUFQLENBQWUsVUFBVUMsR0FBVixFQUFlakUsQ0FBZixFQUFrQjtBQUM3QixnQkFBSTZELFFBQVEsQ0FBQ0ssSUFBVCxDQUFjbEMsTUFBZCxDQUFKLEVBQTJCO0FBQ3ZCMEIsaUJBQUcsQ0FBQzFCLE1BQUQsRUFBU2lDLEdBQVQsQ0FBSDtBQUNILGFBRkQsTUFFTztBQUNITixtQkFBSyxDQUFDSCxnQkFBTixDQUF1QnhCLE1BQU0sR0FBRyxHQUFULElBQWdCLENBQUMsT0FBT2lDLEdBQVAsS0FBZSxXQUFmLEdBQTZCLFdBQTdCLEdBQTJDekQsT0FBTyxDQUFDeUQsR0FBRCxDQUFuRCxNQUE4RCxRQUE5RCxHQUF5RWpFLENBQXpFLEdBQTZFLEVBQTdGLElBQW1HLEdBQTFILEVBQStIaUUsR0FBL0gsRUFBb0lQLEdBQXBJO0FBQ0g7QUFDSixXQU5EO0FBT0gsU0FSRCxNQVFPLElBQUksQ0FBQyxPQUFPRCxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDLFdBQWhDLEdBQThDakQsT0FBTyxDQUFDaUQsTUFBRCxDQUF0RCxNQUFvRSxRQUF4RSxFQUFrRjtBQUNyRixlQUFLRyxJQUFMLElBQWFILE1BQWIsRUFBcUI7QUFDakIsaUJBQUtELGdCQUFMLENBQXNCeEIsTUFBTSxHQUFHLEdBQVQsR0FBZTRCLElBQWYsR0FBc0IsR0FBNUMsRUFBaURILE1BQU0sQ0FBQ0csSUFBRCxDQUF2RCxFQUErREYsR0FBL0Q7QUFDSDtBQUNKLFNBSk0sTUFJQTtBQUNIQSxhQUFHLENBQUMxQixNQUFELEVBQVN5QixNQUFULENBQUg7QUFDSDtBQUNKO0FBRUQ7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXhDTyxLQTNKa0IsRUFxTWxCO0FBQ0NyRCxTQUFHLEVBQUUsVUFETjtBQUVDa0MsV0FBSyxFQUFFLFNBQVM2QixRQUFULENBQWtCUCxJQUFsQixFQUF3QjtBQUMzQixZQUFJUSxZQUFZLEdBQUcsS0FBS3RDLFFBQUwsQ0FBY0UsTUFBZCxHQUF1QjRCLElBQTFDO0FBQ0EsWUFBSVMsWUFBWSxHQUFHVCxJQUFJLEdBQUcsR0FBUCxHQUFhLEtBQUs5QixRQUFMLENBQWNNLE1BQTlDO0FBQ0EsWUFBSWtDLG9CQUFvQixHQUFHLEtBQUt4QyxRQUFMLENBQWNFLE1BQWQsR0FBdUI0QixJQUF2QixHQUE4QixHQUE5QixHQUFvQyxLQUFLOUIsUUFBTCxDQUFjTSxNQUE3RTtBQUNBLFlBQUltQyxRQUFRLEdBQUcsQ0FBQ0gsWUFBRCxFQUFlQyxZQUFmLEVBQTZCQyxvQkFBN0IsRUFBbURWLElBQW5ELENBQWY7O0FBRUEsYUFBSyxJQUFJNUQsQ0FBVCxJQUFjdUUsUUFBZCxFQUF3QjtBQUNwQixjQUFJQSxRQUFRLENBQUN2RSxDQUFELENBQVIsSUFBZSxLQUFLK0MsT0FBeEIsRUFBaUM7QUFDN0IsbUJBQU8sS0FBS0EsT0FBTCxDQUFhd0IsUUFBUSxDQUFDdkUsQ0FBRCxDQUFyQixDQUFQO0FBQ0g7QUFDSjs7QUFFRCxjQUFNLElBQUl3RSxLQUFKLENBQVUsZ0JBQWdCWixJQUFoQixHQUF1QixtQkFBakMsQ0FBTjtBQUNIO0FBRUQ7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF4Qk8sS0FyTWtCLEVBK05sQjtBQUNDeEQsU0FBRyxFQUFFLFVBRE47QUFFQ2tDLFdBQUssRUFBRSxTQUFTbUMsUUFBVCxDQUFrQmIsSUFBbEIsRUFBd0JjLFVBQXhCLEVBQW9DO0FBQ3ZDLFlBQUlDLFFBQVEsR0FBRzFFLFNBQVMsQ0FBQ0MsTUFBVixHQUFtQixDQUFuQixJQUF3QkQsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQjJFLFNBQXpDLEdBQXFEM0UsU0FBUyxDQUFDLENBQUQsQ0FBOUQsR0FBb0UsS0FBbkY7O0FBRUEsWUFBSTRFLEtBQUssR0FBRyxLQUFLVixRQUFMLENBQWNQLElBQWQsQ0FBWjtBQUFBLFlBQ0lILE1BQU0sR0FBR2lCLFVBQVUsSUFBSSxFQUQzQjtBQUFBLFlBRUlJLFlBQVksR0FBR2xGLFFBQVEsQ0FBQyxFQUFELEVBQUs2RCxNQUFMLENBRjNCO0FBQUEsWUFHSXNCLEdBQUcsR0FBRyxFQUhWO0FBQUEsWUFJSUMsUUFBUSxHQUFHLElBSmY7QUFBQSxZQUtJL0MsSUFBSSxHQUFHLEVBTFg7QUFBQSxZQU1JQyxJQUFJLEdBQUcsT0FBTyxLQUFLb0IsT0FBTCxFQUFQLElBQXlCLFdBQXpCLElBQXdDLEtBQUtBLE9BQUwsT0FBbUIsSUFBM0QsR0FBa0UsRUFBbEUsR0FBdUUsS0FBS0EsT0FBTCxFQU5sRjs7QUFRQXVCLGFBQUssQ0FBQ0ksTUFBTixDQUFhakIsT0FBYixDQUFxQixVQUFVa0IsS0FBVixFQUFpQjtBQUNsQyxjQUFJLFdBQVdBLEtBQUssQ0FBQyxDQUFELENBQXBCLEVBQXlCO0FBQ3JCSCxlQUFHLEdBQUdwRCxNQUFNLENBQUN3RCxtQkFBUCxDQUEyQkQsS0FBSyxDQUFDLENBQUQsQ0FBaEMsSUFBdUNILEdBQTdDO0FBQ0FDLG9CQUFRLEdBQUcsS0FBWDtBQUVBO0FBQ0g7O0FBRUQsY0FBSSxlQUFlRSxLQUFLLENBQUMsQ0FBRCxDQUF4QixFQUE2QjtBQUN6QixnQkFBSUUsVUFBVSxHQUFHUCxLQUFLLENBQUNRLFFBQU4sSUFBa0JILEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWUwsS0FBSyxDQUFDUSxRQUFyRDs7QUFDQSxnQkFBSSxVQUFVTCxRQUFWLElBQXNCLENBQUNJLFVBQXZCLElBQXFDRixLQUFLLENBQUMsQ0FBRCxDQUFMLElBQVl6QixNQUFaLElBQXNCQSxNQUFNLENBQUN5QixLQUFLLENBQUMsQ0FBRCxDQUFOLENBQU4sSUFBb0JMLEtBQUssQ0FBQ1EsUUFBTixDQUFlSCxLQUFLLENBQUMsQ0FBRCxDQUFwQixDQUFuRixFQUE2RztBQUN6RyxrQkFBSTVDLEtBQUssR0FBRyxLQUFLLENBQWpCOztBQUVBLGtCQUFJNEMsS0FBSyxDQUFDLENBQUQsQ0FBTCxJQUFZekIsTUFBaEIsRUFBd0I7QUFDcEJuQixxQkFBSyxHQUFHbUIsTUFBTSxDQUFDeUIsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFkO0FBQ0EsdUJBQU9KLFlBQVksQ0FBQ0ksS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFuQjtBQUNILGVBSEQsTUFHTyxJQUFJRSxVQUFKLEVBQWdCO0FBQ25COUMscUJBQUssR0FBR3VDLEtBQUssQ0FBQ1EsUUFBTixDQUFlSCxLQUFLLENBQUMsQ0FBRCxDQUFwQixDQUFSO0FBQ0gsZUFGTSxNQUVBLElBQUlGLFFBQUosRUFBYztBQUNqQjtBQUNILGVBRk0sTUFFQTtBQUNILHNCQUFNLElBQUlSLEtBQUosQ0FBVSxnQkFBZ0JaLElBQWhCLEdBQXVCLDRCQUF2QixHQUFzRHNCLEtBQUssQ0FBQyxDQUFELENBQTNELEdBQWlFLElBQTNFLENBQU47QUFDSDs7QUFFRCxrQkFBSUksS0FBSyxHQUFHLFNBQVNoRCxLQUFULElBQWtCLFVBQVVBLEtBQTVCLElBQXFDLE9BQU9BLEtBQXhEOztBQUVBLGtCQUFJLENBQUNnRCxLQUFELElBQVUsQ0FBQ04sUUFBZixFQUF5QjtBQUNyQixvQkFBSU8sWUFBWSxHQUFHNUQsTUFBTSxDQUFDd0QsbUJBQVAsQ0FBMkI3QyxLQUEzQixDQUFuQjs7QUFFQSxvQkFBSSxXQUFXaUQsWUFBWCxJQUEyQixTQUFTakQsS0FBeEMsRUFBK0M7QUFDM0NpRCw4QkFBWSxHQUFHLEVBQWY7QUFDSDs7QUFFRFIsbUJBQUcsR0FBR0csS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXSyxZQUFYLEdBQTBCUixHQUFoQztBQUNIOztBQUVEQyxzQkFBUSxHQUFHLEtBQVg7QUFDSCxhQTNCRCxNQTJCTyxJQUFJSSxVQUFVLElBQUlGLEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWUosWUFBOUIsRUFBNEM7QUFDL0MscUJBQU9BLFlBQVksQ0FBQ0ksS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFuQjtBQUNIOztBQUVEO0FBQ0g7O0FBRUQsZ0JBQU0sSUFBSVYsS0FBSixDQUFVLHFCQUFxQlUsS0FBSyxDQUFDLENBQUQsQ0FBMUIsR0FBZ0MscUJBQTFDLENBQU47QUFDSCxTQTdDRDs7QUErQ0EsWUFBSUgsR0FBRyxLQUFLLEVBQVosRUFBZ0I7QUFDWkEsYUFBRyxHQUFHLEdBQU47QUFDSDs7QUFFREYsYUFBSyxDQUFDVyxVQUFOLENBQWlCeEIsT0FBakIsQ0FBeUIsVUFBVWtCLEtBQVYsRUFBaUI7QUFDdEMsY0FBSTVDLEtBQUssR0FBRyxLQUFLLENBQWpCOztBQUVBLGNBQUksV0FBVzRDLEtBQUssQ0FBQyxDQUFELENBQXBCLEVBQXlCO0FBQ3JCakQsZ0JBQUksR0FBR2lELEtBQUssQ0FBQyxDQUFELENBQUwsR0FBV2pELElBQWxCO0FBRUE7QUFDSDs7QUFFRCxjQUFJLGVBQWVpRCxLQUFLLENBQUMsQ0FBRCxDQUF4QixFQUE2QjtBQUN6QixnQkFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxJQUFZekIsTUFBaEIsRUFBd0I7QUFDcEJuQixtQkFBSyxHQUFHbUIsTUFBTSxDQUFDeUIsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFkO0FBQ0EscUJBQU9KLFlBQVksQ0FBQ0ksS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFuQjtBQUNILGFBSEQsTUFHTyxJQUFJTCxLQUFLLENBQUNRLFFBQU4sSUFBa0JILEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWUwsS0FBSyxDQUFDUSxRQUF4QyxFQUFrRDtBQUNyRC9DLG1CQUFLLEdBQUd1QyxLQUFLLENBQUNRLFFBQU4sQ0FBZUgsS0FBSyxDQUFDLENBQUQsQ0FBcEIsQ0FBUjtBQUNIOztBQUVEakQsZ0JBQUksR0FBR2lELEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVzVDLEtBQVgsR0FBbUJMLElBQTFCO0FBQ0g7QUFDSixTQW5CRCxFQTlEdUMsQ0FrRnZDOztBQUNBOEMsV0FBRyxHQUFHLEtBQUtqRCxRQUFMLENBQWNDLFFBQWQsR0FBeUJnRCxHQUEvQjs7QUFFQSxZQUFJRixLQUFLLENBQUNZLFlBQU4sSUFBc0IsYUFBYVosS0FBSyxDQUFDWSxZQUF6QyxJQUF5RCxLQUFLckMsU0FBTCxNQUFvQnlCLEtBQUssQ0FBQ1ksWUFBTixDQUFtQixTQUFuQixDQUFqRixFQUFnSDtBQUM1RyxjQUFJQyxXQUFXLEdBQUd6RCxJQUFJLElBQUksS0FBS29CLE9BQUwsRUFBMUI7QUFFQTBCLGFBQUcsR0FBR0YsS0FBSyxDQUFDWSxZQUFOLENBQW1CLFNBQW5CLElBQWdDLEtBQWhDLEdBQXdDQyxXQUF4QyxJQUF1REEsV0FBVyxDQUFDQyxPQUFaLENBQW9CLE1BQU16RCxJQUExQixJQUFrQyxDQUFDLENBQW5DLElBQXdDLE9BQU9BLElBQS9DLEdBQXNELEVBQXRELEdBQTJELE1BQU1BLElBQXhILElBQWdJNkMsR0FBdEk7QUFDSCxTQUpELE1BSU8sSUFBSSxnQkFBZ0IsT0FBT0YsS0FBSyxDQUFDZSxPQUE3QixJQUF3QyxnQkFBZ0IsT0FBT2YsS0FBSyxDQUFDZSxPQUFOLENBQWMsQ0FBZCxDQUEvRCxJQUFtRixLQUFLeEMsU0FBTCxPQUFxQnlCLEtBQUssQ0FBQ2UsT0FBTixDQUFjLENBQWQsQ0FBNUcsRUFBOEg7QUFDakksY0FBSUMsWUFBWSxHQUFHNUQsSUFBSSxJQUFJLEtBQUtvQixPQUFMLEVBQTNCOztBQUVBMEIsYUFBRyxHQUFHRixLQUFLLENBQUNlLE9BQU4sQ0FBYyxDQUFkLElBQW1CLEtBQW5CLEdBQTJCQyxZQUEzQixJQUEyQ0EsWUFBWSxDQUFDRixPQUFiLENBQXFCLE1BQU16RCxJQUEzQixJQUFtQyxDQUFDLENBQXBDLElBQXlDLE9BQU9BLElBQWhELEdBQXVELEVBQXZELEdBQTRELE1BQU1BLElBQTdHLElBQXFINkMsR0FBM0g7QUFDSCxTQUpNLE1BSUEsSUFBSTlDLElBQUksSUFBSSxLQUFLb0IsT0FBTCxPQUFtQnBCLElBQUksSUFBSUEsSUFBSSxDQUFDMEQsT0FBTCxDQUFhLE1BQU16RCxJQUFuQixJQUEyQixDQUFDLENBQTVCLElBQWlDLE9BQU9BLElBQXhDLEdBQStDLEVBQS9DLEdBQW9ELE1BQU1BLElBQTlELENBQW5DLEVBQXdHO0FBQzNHNkMsYUFBRyxHQUFHLEtBQUszQixTQUFMLEtBQW1CLEtBQW5CLEdBQTJCbkIsSUFBM0IsSUFBbUNBLElBQUksQ0FBQzBELE9BQUwsQ0FBYSxNQUFNekQsSUFBbkIsSUFBMkIsQ0FBQyxDQUE1QixJQUFpQyxPQUFPQSxJQUF4QyxHQUErQyxFQUEvQyxHQUFvRCxNQUFNQSxJQUE3RixJQUFxRzZDLEdBQTNHO0FBQ0gsU0FGTSxNQUVBLElBQUlKLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUMxQkksYUFBRyxHQUFHLEtBQUszQixTQUFMLEtBQW1CLEtBQW5CLEdBQTJCLEtBQUtDLE9BQUwsRUFBM0IsSUFBNkMsS0FBS0EsT0FBTCxHQUFlc0MsT0FBZixDQUF1QixNQUFNekQsSUFBN0IsSUFBcUMsQ0FBQyxDQUF0QyxJQUEyQyxPQUFPQSxJQUFsRCxHQUF5RCxFQUF6RCxHQUE4RCxNQUFNQSxJQUFqSCxJQUF5SDZDLEdBQS9IO0FBQ0g7O0FBRUQsWUFBSWxGLE1BQU0sQ0FBQ2lHLElBQVAsQ0FBWWhCLFlBQVosRUFBMEI1RSxNQUExQixHQUFtQyxDQUF2QyxFQUEwQztBQUN0QyxjQUFJOEIsTUFBTSxHQUFHLEtBQUssQ0FBbEI7QUFDQSxjQUFJK0QsV0FBVyxHQUFHLEVBQWxCOztBQUNBLGNBQUlyQyxHQUFHLEdBQUcsU0FBU0EsR0FBVCxDQUFhdEQsR0FBYixFQUFrQmtDLEtBQWxCLEVBQXlCO0FBQy9CO0FBQ0FBLGlCQUFLLEdBQUcsT0FBT0EsS0FBUCxLQUFpQixVQUFqQixHQUE4QkEsS0FBSyxFQUFuQyxHQUF3Q0EsS0FBaEQsQ0FGK0IsQ0FJL0I7O0FBQ0FBLGlCQUFLLEdBQUdBLEtBQUssS0FBSyxJQUFWLEdBQWlCLEVBQWpCLEdBQXNCQSxLQUE5QjtBQUVBeUQsdUJBQVcsQ0FBQ0MsSUFBWixDQUFpQnJFLE1BQU0sQ0FBQ3NFLG9CQUFQLENBQTRCN0YsR0FBNUIsSUFBbUMsR0FBbkMsR0FBeUN1QixNQUFNLENBQUNzRSxvQkFBUCxDQUE0QjNELEtBQTVCLENBQTFEO0FBQ0gsV0FSRDs7QUFVQSxlQUFLTixNQUFMLElBQWU4QyxZQUFmLEVBQTZCO0FBQ3pCLGlCQUFLdEIsZ0JBQUwsQ0FBc0J4QixNQUF0QixFQUE4QjhDLFlBQVksQ0FBQzlDLE1BQUQsQ0FBMUMsRUFBb0QwQixHQUFwRDtBQUNIOztBQUVEcUIsYUFBRyxHQUFHQSxHQUFHLEdBQUcsR0FBTixHQUFZZ0IsV0FBVyxDQUFDRyxJQUFaLENBQWlCLEdBQWpCLENBQWxCO0FBQ0g7O0FBRUQsZUFBT25CLEdBQVA7QUFDSDtBQUVEO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFqSU8sS0EvTmtCLENBQVQsRUFrV1IsQ0FBQztBQUNEM0UsU0FBRyxFQUFFLGFBREo7QUFFRGtDLFdBQUssRUFBRSxTQUFTNkQsV0FBVCxHQUF1QjtBQUMxQixlQUFPeEcsT0FBUDtBQUNIO0FBRUQ7QUFDUjtBQUNBO0FBQ0E7O0FBVFMsS0FBRCxFQVdEO0FBQ0NTLFNBQUcsRUFBRSxTQUROO0FBRUNrQyxXQUFLLEVBQUUsU0FBUzhELE9BQVQsQ0FBaUI1RCxJQUFqQixFQUF1QjtBQUMxQixZQUFJNkQsTUFBTSxHQUFHMUUsTUFBTSxDQUFDd0UsV0FBUCxFQUFiO0FBRUFFLGNBQU0sQ0FBQzlELGNBQVAsQ0FBc0JDLElBQXRCO0FBQ0g7QUFORixLQVhDLEVBa0JEO0FBQ0NwQyxTQUFHLEVBQUUsMEJBRE47QUFFQ2tDLFdBQUssRUFBRSxTQUFTZ0Usd0JBQVQsQ0FBa0NoRSxLQUFsQyxFQUF5QztBQUM1QyxlQUFPaUUsa0JBQWtCLENBQUNqRSxLQUFELENBQWxCLENBQTBCa0UsT0FBMUIsQ0FBa0MsTUFBbEMsRUFBMEMsR0FBMUMsRUFBK0NBLE9BQS9DLENBQXVELE1BQXZELEVBQStELEdBQS9ELEVBQW9FQSxPQUFwRSxDQUE0RSxNQUE1RSxFQUFvRixHQUFwRixFQUF5RkEsT0FBekYsQ0FBaUcsTUFBakcsRUFBeUcsR0FBekcsRUFBOEdBLE9BQTlHLENBQXNILE1BQXRILEVBQThILEdBQTlILEVBQW1JQSxPQUFuSSxDQUEySSxNQUEzSSxFQUFtSixHQUFuSixFQUF3SkEsT0FBeEosQ0FBZ0ssTUFBaEssRUFBd0ssR0FBeEssRUFBNktBLE9BQTdLLENBQXFMLEtBQXJMLEVBQTRMLEtBQTVMLEVBQW1NQSxPQUFuTSxDQUEyTSxLQUEzTSxFQUFrTixLQUFsTixFQUF5TkEsT0FBek4sQ0FBaU8sSUFBak8sRUFBdU8sS0FBdk8sQ0FBUDtBQUNIO0FBRUQ7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVhPLEtBbEJDLEVBK0JEO0FBQ0NwRyxTQUFHLEVBQUUscUJBRE47QUFFQ2tDLFdBQUssRUFBRSxTQUFTNkMsbUJBQVQsQ0FBNkI3QyxLQUE3QixFQUFvQztBQUN2QyxlQUFPWCxNQUFNLENBQUMyRSx3QkFBUCxDQUFnQ2hFLEtBQWhDLEVBQXVDa0UsT0FBdkMsQ0FBK0MsTUFBL0MsRUFBdUQsR0FBdkQsRUFBNERBLE9BQTVELENBQW9FLE1BQXBFLEVBQTRFLEdBQTVFLEVBQWlGQSxPQUFqRixDQUF5RixNQUF6RixFQUFpRyxHQUFqRyxFQUFzR0EsT0FBdEcsQ0FBOEcsTUFBOUcsRUFBc0gsR0FBdEgsQ0FBUDtBQUNIO0FBRUQ7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVhPLEtBL0JDLEVBNENEO0FBQ0NwRyxTQUFHLEVBQUUsc0JBRE47QUFFQ2tDLFdBQUssRUFBRSxTQUFTMkQsb0JBQVQsQ0FBOEIzRCxLQUE5QixFQUFxQztBQUN4QyxlQUFPWCxNQUFNLENBQUMyRSx3QkFBUCxDQUFnQ2hFLEtBQWhDLEVBQXVDa0UsT0FBdkMsQ0FBK0MsTUFBL0MsRUFBdUQsR0FBdkQsQ0FBUDtBQUNIO0FBSkYsS0E1Q0MsQ0FsV1EsQ0FBWjs7QUFxWkEsV0FBTzdFLE1BQVA7QUFDSCxHQTFhWSxFQUFiO0FBNGFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBQSxRQUFNLENBQUM4RSxLQUFQO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTlFLFFBQU0sQ0FBQytFLE9BQVA7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQUkvRyxPQUFPLEdBQUcsSUFBSWdDLE1BQUosRUFBZDtBQUVJLFNBQU87QUFBRUEsVUFBTSxFQUFFQSxNQUFWO0FBQWtCaEMsV0FBTyxFQUFFQTtBQUEzQixHQUFQO0FBQ0gsQ0EvZUEsQ0FBRCxDIiwiZmlsZSI6ImFkbWlufmNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgICB2YXIgcm91dGluZyA9IGZhY3RvcnkoKTtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFtdLCByb3V0aW5nLlJvdXRpbmcpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgICAgICAvLyBsaWtlIE5vZGUuXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gcm91dGluZy5Sb3V0aW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgICAgIHJvb3QuUm91dGluZyA9IHJvdXRpbmcuUm91dGluZztcbiAgICAgICAgcm9vdC5mb3MgPSB7XG4gICAgICAgICAgICBSb3V0ZXI6IHJvdXRpbmcuUm91dGVyXG4gICAgICAgIH07XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhpcyBmaWxlIGRlZmluZXMgdGhlIFJvdXRlciBjbGFzcy5cbiAqXG4gKiBZb3UgY2FuIGNvbXBpbGUgdGhpcyBmaWxlIGJ5IHJ1bm5pbmcgdGhlIGZvbGxvd2luZyBjb21tYW5kIGZyb20gdGhlIFJlc291cmNlcyBmb2xkZXI6XG4gKlxuICogICAgbnBtIGluc3RhbGwgJiYgbnBtIHJ1biBidWlsZFxuICovXG5cbi8qKlxuICogQ2xhc3MgUm91dGVyXG4gKi9cblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUm91dGVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtSb3V0ZXIuQ29udGV4dD19IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBSb3V0ZXIuUm91dGU+PX0gcm91dGVzXG4gICAgICovXG4gICAgZnVuY3Rpb24gUm91dGVyKGNvbnRleHQsIHJvdXRlcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGVyKTtcblxuICAgICAgICB0aGlzLmNvbnRleHRfID0gY29udGV4dCB8fCB7IGJhc2VfdXJsOiAnJywgcHJlZml4OiAnJywgaG9zdDogJycsIHBvcnQ6ICcnLCBzY2hlbWU6ICcnLCBsb2NhbGU6ICcnIH07XG4gICAgICAgIHRoaXMuc2V0Um91dGVzKHJvdXRlcyB8fCB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBpbnN0YW5jZS5cbiAgICAgKiBAcmV0dXJucyB7Um91dGVyfVxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoUm91dGVyLCBbe1xuICAgICAgICBrZXk6ICdzZXRSb3V0aW5nRGF0YScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBkYXRhIGZvciB0aGUgY3VycmVudCBpbnN0YW5jZVxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFJvdXRpbmdEYXRhKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QmFzZVVybChkYXRhWydiYXNlX3VybCddKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Um91dGVzKGRhdGFbJ3JvdXRlcyddKTtcblxuICAgICAgICAgICAgaWYgKCdwcmVmaXgnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByZWZpeChkYXRhWydwcmVmaXgnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ3BvcnQnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvcnQoZGF0YVsncG9ydCddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnbG9jYWxlJyBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMb2NhbGUoZGF0YVsnbG9jYWxlJ10pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldEhvc3QoZGF0YVsnaG9zdCddKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NoZW1lKGRhdGFbJ3NjaGVtZSddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBSb3V0ZXIuUm91dGU+fSByb3V0ZXNcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFJvdXRlcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSb3V0ZXMocm91dGVzKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlc18gPSBPYmplY3QuZnJlZXplKHJvdXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFJvdXRlci5Sb3V0ZT59IHJvdXRlc1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Um91dGVzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvdXRlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRlc187XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVcmxcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldEJhc2VVcmwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0QmFzZVVybChiYXNlVXJsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLmJhc2VfdXJsID0gYmFzZVVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRCYXNlVXJsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJhc2VVcmwoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5iYXNlX3VybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRQcmVmaXgnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UHJlZml4KHByZWZpeCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5wcmVmaXggPSBwcmVmaXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHNjaGVtZVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0U2NoZW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNjaGVtZShzY2hlbWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8uc2NoZW1lID0gc2NoZW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFNjaGVtZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTY2hlbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5zY2hlbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGhvc3RcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldEhvc3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SG9zdChob3N0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLmhvc3QgPSBob3N0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEhvc3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SG9zdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmhvc3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnRcbiAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0UG9ydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQb3J0KHBvcnQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8ucG9ydCA9IHBvcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0UG9ydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3J0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8ucG9ydDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0TG9jYWxlJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxlXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TG9jYWxlKGxvY2FsZSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0TG9jYWxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvY2FsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmxvY2FsZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYnVpbGRRdWVyeVBhcmFtcycsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQnVpbGRzIHF1ZXJ5IHN0cmluZyBwYXJhbXMgYWRkZWQgdG8gYSBVUkwuXG4gICAgICAgICAqIFBvcnQgb2YgalF1ZXJ5J3MgJC5wYXJhbSgpIGZ1bmN0aW9uLCBzbyBjcmVkaXQgaXMgZHVlIHRoZXJlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gcGFyYW1zXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGFkZFxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJ1aWxkUXVlcnlQYXJhbXMocHJlZml4LCBwYXJhbXMsIGFkZCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIG5hbWUgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgcmJyYWNrZXQgPSBuZXcgUmVnRXhwKC9cXFtcXF0kLyk7XG5cbiAgICAgICAgICAgIGlmIChwYXJhbXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJicmFja2V0LnRlc3QocHJlZml4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkKHByZWZpeCwgdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmJ1aWxkUXVlcnlQYXJhbXMocHJlZml4ICsgJ1snICsgKCh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWwpKSA9PT0gJ29iamVjdCcgPyBpIDogJycpICsgJ10nLCB2YWwsIGFkZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBwYXJhbXMgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhcmFtcykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGZvciAobmFtZSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKHByZWZpeCArICdbJyArIG5hbWUgKyAnXScsIHBhcmFtc1tuYW1lXSwgYWRkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFkZChwcmVmaXgsIHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIHJhdyByb3V0ZSBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICAgICAqIEByZXR1cm4ge1JvdXRlci5Sb3V0ZX1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFJvdXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvdXRlKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXhlZE5hbWUgPSB0aGlzLmNvbnRleHRfLnByZWZpeCArIG5hbWU7XG4gICAgICAgICAgICB2YXIgc2Y0MWkxOG5OYW1lID0gbmFtZSArICcuJyArIHRoaXMuY29udGV4dF8ubG9jYWxlO1xuICAgICAgICAgICAgdmFyIHByZWZpeGVkU2Y0MWkxOG5OYW1lID0gdGhpcy5jb250ZXh0Xy5wcmVmaXggKyBuYW1lICsgJy4nICsgdGhpcy5jb250ZXh0Xy5sb2NhbGU7XG4gICAgICAgICAgICB2YXIgdmFyaWFudHMgPSBbcHJlZml4ZWROYW1lLCBzZjQxaTE4bk5hbWUsIHByZWZpeGVkU2Y0MWkxOG5OYW1lLCBuYW1lXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB2YXJpYW50cykge1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYW50c1tpXSBpbiB0aGlzLnJvdXRlc18pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVzX1t2YXJpYW50c1tpXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicgKyBuYW1lICsgJ1wiIGRvZXMgbm90IGV4aXN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyYXRlcyB0aGUgVVJMIGZvciBhIHJvdXRlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBvcHRfcGFyYW1zXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYWJzb2x1dGVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2VuZXJhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2VuZXJhdGUobmFtZSwgb3B0X3BhcmFtcykge1xuICAgICAgICAgICAgdmFyIGFic29sdXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAgICAgICAgICAgdmFyIHJvdXRlID0gdGhpcy5nZXRSb3V0ZShuYW1lKSxcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSBvcHRfcGFyYW1zIHx8IHt9LFxuICAgICAgICAgICAgICAgIHVudXNlZFBhcmFtcyA9IF9leHRlbmRzKHt9LCBwYXJhbXMpLFxuICAgICAgICAgICAgICAgIHVybCA9ICcnLFxuICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBob3N0ID0gJycsXG4gICAgICAgICAgICAgICAgcG9ydCA9IHR5cGVvZiB0aGlzLmdldFBvcnQoKSA9PSBcInVuZGVmaW5lZFwiIHx8IHRoaXMuZ2V0UG9ydCgpID09PSBudWxsID8gJycgOiB0aGlzLmdldFBvcnQoKTtcblxuICAgICAgICAgICAgcm91dGUudG9rZW5zLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCd0ZXh0JyA9PT0gdG9rZW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gUm91dGVyLmVuY29kZVBhdGhDb21wb25lbnQodG9rZW5bMV0pICsgdXJsO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJ3ZhcmlhYmxlJyA9PT0gdG9rZW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhc0RlZmF1bHQgPSByb3V0ZS5kZWZhdWx0cyAmJiB0b2tlblszXSBpbiByb3V0ZS5kZWZhdWx0cztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhbHNlID09PSBvcHRpb25hbCB8fCAhaGFzRGVmYXVsdCB8fCB0b2tlblszXSBpbiBwYXJhbXMgJiYgcGFyYW1zW3Rva2VuWzNdXSAhPSByb3V0ZS5kZWZhdWx0c1t0b2tlblszXV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuWzNdIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdW51c2VkUGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcm91dGUuZGVmYXVsdHNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInICsgbmFtZSArICdcIiByZXF1aXJlcyB0aGUgcGFyYW1ldGVyIFwiJyArIHRva2VuWzNdICsgJ1wiLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW1wdHkgPSB0cnVlID09PSB2YWx1ZSB8fCBmYWxzZSA9PT0gdmFsdWUgfHwgJycgPT09IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVtcHR5IHx8ICFvcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmNvZGVkVmFsdWUgPSBSb3V0ZXIuZW5jb2RlUGF0aENvbXBvbmVudCh2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ251bGwnID09PSBlbmNvZGVkVmFsdWUgJiYgbnVsbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdG9rZW5bMV0gKyBlbmNvZGVkVmFsdWUgKyB1cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRGVmYXVsdCAmJiB0b2tlblszXSBpbiB1bnVzZWRQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1bnVzZWRQYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHRva2VuIHR5cGUgXCInICsgdG9rZW5bMF0gKyAnXCIgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodXJsID09PSAnJykge1xuICAgICAgICAgICAgICAgIHVybCA9ICcvJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm91dGUuaG9zdHRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICAgIGlmICgndGV4dCcgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3QgPSB0b2tlblsxXSArIGhvc3Q7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW5bM10gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmFtc1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdW51c2VkUGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyb3V0ZS5kZWZhdWx0cyAmJiB0b2tlblszXSBpbiByb3V0ZS5kZWZhdWx0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByb3V0ZS5kZWZhdWx0c1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBob3N0ID0gdG9rZW5bMV0gKyB2YWx1ZSArIGhvc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBGb28tYmFyIVxuICAgICAgICAgICAgdXJsID0gdGhpcy5jb250ZXh0Xy5iYXNlX3VybCArIHVybDtcblxuICAgICAgICAgICAgaWYgKHJvdXRlLnJlcXVpcmVtZW50cyAmJiBcIl9zY2hlbWVcIiBpbiByb3V0ZS5yZXF1aXJlbWVudHMgJiYgdGhpcy5nZXRTY2hlbWUoKSAhPSByb3V0ZS5yZXF1aXJlbWVudHNbXCJfc2NoZW1lXCJdKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRIb3N0ID0gaG9zdCB8fCB0aGlzLmdldEhvc3QoKTtcblxuICAgICAgICAgICAgICAgIHVybCA9IHJvdXRlLnJlcXVpcmVtZW50c1tcIl9zY2hlbWVcIl0gKyBcIjovL1wiICsgY3VycmVudEhvc3QgKyAoY3VycmVudEhvc3QuaW5kZXhPZignOicgKyBwb3J0KSA+IC0xIHx8ICcnID09PSBwb3J0ID8gJycgOiAnOicgKyBwb3J0KSArIHVybDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHJvdXRlLnNjaGVtZXMgJiYgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHJvdXRlLnNjaGVtZXNbMF0gJiYgdGhpcy5nZXRTY2hlbWUoKSAhPT0gcm91dGUuc2NoZW1lc1swXSkge1xuICAgICAgICAgICAgICAgIHZhciBfY3VycmVudEhvc3QgPSBob3N0IHx8IHRoaXMuZ2V0SG9zdCgpO1xuXG4gICAgICAgICAgICAgICAgdXJsID0gcm91dGUuc2NoZW1lc1swXSArIFwiOi8vXCIgKyBfY3VycmVudEhvc3QgKyAoX2N1cnJlbnRIb3N0LmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkgKyB1cmw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvc3QgJiYgdGhpcy5nZXRIb3N0KCkgIT09IGhvc3QgKyAoaG9zdC5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdGhpcy5nZXRTY2hlbWUoKSArIFwiOi8vXCIgKyBob3N0ICsgKGhvc3QuaW5kZXhPZignOicgKyBwb3J0KSA+IC0xIHx8ICcnID09PSBwb3J0ID8gJycgOiAnOicgKyBwb3J0KSArIHVybDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWJzb2x1dGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB0aGlzLmdldFNjaGVtZSgpICsgXCI6Ly9cIiArIHRoaXMuZ2V0SG9zdCgpICsgKHRoaXMuZ2V0SG9zdCgpLmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkgKyB1cmw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh1bnVzZWRQYXJhbXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJlZml4ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBxdWVyeVBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgICAgIHZhciBhZGQgPSBmdW5jdGlvbiBhZGQoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uIHRoZW4gY2FsbCBpdCBhbmQgYXNzaWduIGl0J3MgcmV0dXJuIHZhbHVlIGFzIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUoKSA6IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBudWxsIHRvIGVtcHR5IHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID09PSBudWxsID8gJycgOiB2YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5wdXNoKFJvdXRlci5lbmNvZGVRdWVyeUNvbXBvbmVudChrZXkpICsgJz0nICsgUm91dGVyLmVuY29kZVF1ZXJ5Q29tcG9uZW50KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGZvciAocHJlZml4IGluIHVudXNlZFBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUXVlcnlQYXJhbXMocHJlZml4LCB1bnVzZWRQYXJhbXNbcHJlZml4XSwgYWRkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwgKyAnPycgKyBxdWVyeVBhcmFtcy5qb2luKCcmJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZ2l2ZW4gc3RyaW5nIGVuY29kZWQgdG8gbWltaWMgU3ltZm9ueSBVUkwgZ2VuZXJhdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH1dLCBbe1xuICAgICAgICBrZXk6ICdnZXRJbnN0YW5jZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBSb3V0aW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbmZpZ3VyZXMgdGhlIGN1cnJlbnQgUm91dGVyIGluc3RhbmNlIHdpdGggdGhlIHByb3ZpZGVkIGRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXREYXRhJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldERhdGEoZGF0YSkge1xuICAgICAgICAgICAgdmFyIHJvdXRlciA9IFJvdXRlci5nZXRJbnN0YW5jZSgpO1xuXG4gICAgICAgICAgICByb3V0ZXIuc2V0Um91dGluZ0RhdGEoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2N1c3RvbUVuY29kZVVSSUNvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjdXN0b21FbmNvZGVVUklDb21wb25lbnQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoLyUyRi9nLCAnLycpLnJlcGxhY2UoLyU0MC9nLCAnQCcpLnJlcGxhY2UoLyUzQS9nLCAnOicpLnJlcGxhY2UoLyUyMS9nLCAnIScpLnJlcGxhY2UoLyUzQi9nLCAnOycpLnJlcGxhY2UoLyUyQy9nLCAnLCcpLnJlcGxhY2UoLyUyQS9nLCAnKicpLnJlcGxhY2UoL1xcKC9nLCAnJTI4JykucmVwbGFjZSgvXFwpL2csICclMjknKS5yZXBsYWNlKC8nL2csICclMjcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBnaXZlbiBwYXRoIHByb3Blcmx5IGVuY29kZWQgdG8gbWltaWMgU3ltZm9ueSBVUkwgZ2VuZXJhdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5jb2RlUGF0aENvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbmNvZGVQYXRoQ29tcG9uZW50KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUm91dGVyLmN1c3RvbUVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkucmVwbGFjZSgvJTNEL2csICc9JykucmVwbGFjZSgvJTJCL2csICcrJykucmVwbGFjZSgvJTIxL2csICchJykucmVwbGFjZSgvJTdDL2csICd8Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZ2l2ZW4gcXVlcnkgcGFyYW1ldGVyIG9yIHZhbHVlIHByb3Blcmx5IGVuY29kZWQgdG8gbWltaWMgU3ltZm9ueSBVUkwgZ2VuZXJhdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5jb2RlUXVlcnlDb21wb25lbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5jb2RlUXVlcnlDb21wb25lbnQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSb3V0ZXIuY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC8lM0YvZywgJz8nKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSb3V0ZXI7XG59KCk7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgICB0b2tlbnM6IChBcnJheS48QXJyYXkuPHN0cmluZz4+KSxcbiAqICAgICBkZWZhdWx0czogKE9iamVjdC48c3RyaW5nLCBzdHJpbmc+KSxcbiAqICAgICByZXF1aXJlbWVudHM6IE9iamVjdCxcbiAqICAgICBob3N0dG9rZW5zOiAoQXJyYXkuPHN0cmluZz4pXG4gKiB9fVxuICovXG5cblxuUm91dGVyLlJvdXRlO1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgICAgYmFzZV91cmw6IChzdHJpbmcpXG4gKiB9fVxuICovXG5Sb3V0ZXIuQ29udGV4dDtcblxuLyoqXG4gKiBSb3V0ZXIgc2luZ2xldG9uLlxuICogQGNvbnN0XG4gKiBAdHlwZSB7Um91dGVyfVxuICovXG52YXIgUm91dGluZyA9IG5ldyBSb3V0ZXIoKTtcblxuICAgIHJldHVybiB7IFJvdXRlcjogUm91dGVyLCBSb3V0aW5nOiBSb3V0aW5nIH07XG59KSk7Il0sInNvdXJjZVJvb3QiOiIifQ==