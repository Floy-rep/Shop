(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin~cart~main"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLmpzIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5Iiwicm91dGluZyIsImRlZmluZSIsIlJvdXRpbmciLCJfZXh0ZW5kcyIsIk9iamVjdCIsImFzc2lnbiIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJjb25zdHJ1Y3RvciIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJUeXBlRXJyb3IiLCJSb3V0ZXIiLCJjb250ZXh0Iiwicm91dGVzIiwiY29udGV4dF8iLCJiYXNlX3VybCIsInByZWZpeCIsImhvc3QiLCJwb3J0Iiwic2NoZW1lIiwibG9jYWxlIiwic2V0Um91dGVzIiwidmFsdWUiLCJzZXRSb3V0aW5nRGF0YSIsImRhdGEiLCJzZXRCYXNlVXJsIiwic2V0UHJlZml4Iiwic2V0UG9ydCIsInNldExvY2FsZSIsInNldEhvc3QiLCJzZXRTY2hlbWUiLCJyb3V0ZXNfIiwiZnJlZXplIiwiZ2V0Um91dGVzIiwiYmFzZVVybCIsImdldEJhc2VVcmwiLCJnZXRTY2hlbWUiLCJnZXRIb3N0IiwiZ2V0UG9ydCIsImdldExvY2FsZSIsImJ1aWxkUXVlcnlQYXJhbXMiLCJwYXJhbXMiLCJhZGQiLCJfdGhpcyIsIm5hbWUiLCJyYnJhY2tldCIsIlJlZ0V4cCIsIkFycmF5IiwiZm9yRWFjaCIsInZhbCIsInRlc3QiLCJnZXRSb3V0ZSIsInByZWZpeGVkTmFtZSIsInNmNDFpMThuTmFtZSIsInByZWZpeGVkU2Y0MWkxOG5OYW1lIiwidmFyaWFudHMiLCJFcnJvciIsImdlbmVyYXRlIiwib3B0X3BhcmFtcyIsImFic29sdXRlIiwidW5kZWZpbmVkIiwicm91dGUiLCJ1bnVzZWRQYXJhbXMiLCJ1cmwiLCJvcHRpb25hbCIsInRva2VucyIsInRva2VuIiwiZW5jb2RlUGF0aENvbXBvbmVudCIsImhhc0RlZmF1bHQiLCJkZWZhdWx0cyIsImVtcHR5IiwiZW5jb2RlZFZhbHVlIiwiaG9zdHRva2VucyIsInJlcXVpcmVtZW50cyIsImN1cnJlbnRIb3N0IiwiaW5kZXhPZiIsInNjaGVtZXMiLCJfY3VycmVudEhvc3QiLCJrZXlzIiwicXVlcnlQYXJhbXMiLCJwdXNoIiwiZW5jb2RlUXVlcnlDb21wb25lbnQiLCJqb2luIiwiZ2V0SW5zdGFuY2UiLCJzZXREYXRhIiwicm91dGVyIiwiY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsIlJvdXRlIiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUMsV0FBVUEsSUFBVixFQUFnQkMsT0FBaEIsRUFBeUI7QUFDdEIsTUFBSUMsT0FBTyxHQUFHRCxPQUFPLEVBQXJCOztBQUNBLE1BQUksSUFBSixFQUFnRDtBQUM1QztBQUNBRSxxQ0FBTyxFQUFELG9DQUFLRCxPQUFPLENBQUNFLE9BQWI7QUFBQTtBQUFBO0FBQUEsb0dBQU47QUFDSCxHQUhELE1BR08sRUFXTjtBQUNKLENBakJBLEVBaUJDLElBakJELEVBaUJPLFlBQVk7QUFDaEI7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSUMsUUFBUSxHQUFHQyxNQUFNLENBQUND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QUFPLEdBQUcsSUFBSWdDLE1BQUosRUFBZDtBQUVJLFNBQU87QUFBRUEsVUFBTSxFQUFFQSxNQUFWO0FBQWtCaEMsV0FBTyxFQUFFQTtBQUEzQixHQUFQO0FBQ0gsQ0EvZUEsQ0FBRCxDIiwiZmlsZSI6ImFkbWlufmNhcnR+bWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIHZhciByb3V0aW5nID0gZmFjdG9yeSgpO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoW10sIHJvdXRpbmcuUm91dGluZyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAgICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgICAgIC8vIGxpa2UgTm9kZS5cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByb3V0aW5nLlJvdXRpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICAgICAgcm9vdC5Sb3V0aW5nID0gcm91dGluZy5Sb3V0aW5nO1xuICAgICAgICByb290LmZvcyA9IHtcbiAgICAgICAgICAgIFJvdXRlcjogcm91dGluZy5Sb3V0ZXJcbiAgICAgICAgfTtcbiAgICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBUaGlzIGZpbGUgZGVmaW5lcyB0aGUgUm91dGVyIGNsYXNzLlxuICpcbiAqIFlvdSBjYW4gY29tcGlsZSB0aGlzIGZpbGUgYnkgcnVubmluZyB0aGUgZm9sbG93aW5nIGNvbW1hbmQgZnJvbSB0aGUgUmVzb3VyY2VzIGZvbGRlcjpcbiAqXG4gKiAgICBucG0gaW5zdGFsbCAmJiBucG0gcnVuIGJ1aWxkXG4gKi9cblxuLyoqXG4gKiBDbGFzcyBSb3V0ZXJcbiAqL1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSb3V0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge1JvdXRlci5Db250ZXh0PX0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIFJvdXRlci5Sb3V0ZT49fSByb3V0ZXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSb3V0ZXIoY29udGV4dCwgcm91dGVzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZXIpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dF8gPSBjb250ZXh0IHx8IHsgYmFzZV91cmw6ICcnLCBwcmVmaXg6ICcnLCBob3N0OiAnJywgcG9ydDogJycsIHNjaGVtZTogJycsIGxvY2FsZTogJycgfTtcbiAgICAgICAgdGhpcy5zZXRSb3V0ZXMocm91dGVzIHx8IHt9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGluc3RhbmNlLlxuICAgICAqIEByZXR1cm5zIHtSb3V0ZXJ9XG4gICAgICovXG5cblxuICAgIF9jcmVhdGVDbGFzcyhSb3V0ZXIsIFt7XG4gICAgICAgIGtleTogJ3NldFJvdXRpbmdEYXRhJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGRhdGEgZm9yIHRoZSBjdXJyZW50IGluc3RhbmNlXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Um91dGluZ0RhdGEoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5zZXRCYXNlVXJsKGRhdGFbJ2Jhc2VfdXJsJ10pO1xuICAgICAgICAgICAgdGhpcy5zZXRSb3V0ZXMoZGF0YVsncm91dGVzJ10pO1xuXG4gICAgICAgICAgICBpZiAoJ3ByZWZpeCcgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJlZml4KGRhdGFbJ3ByZWZpeCddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgncG9ydCcgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9ydChkYXRhWydwb3J0J10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdsb2NhbGUnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldExvY2FsZShkYXRhWydsb2NhbGUnXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0SG9zdChkYXRhWydob3N0J10pO1xuICAgICAgICAgICAgdGhpcy5zZXRTY2hlbWUoZGF0YVsnc2NoZW1lJ10pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIFJvdXRlci5Sb3V0ZT59IHJvdXRlc1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0Um91dGVzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFJvdXRlcyhyb3V0ZXMpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVzXyA9IE9iamVjdC5mcmVlemUocm91dGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgUm91dGVyLlJvdXRlPn0gcm91dGVzXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRSb3V0ZXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um91dGVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVzXztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVybFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0QmFzZVVybCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRCYXNlVXJsKGJhc2VVcmwpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8uYmFzZV91cmwgPSBiYXNlVXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEJhc2VVcmwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QmFzZVVybCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmJhc2VfdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldFByZWZpeCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQcmVmaXgocHJlZml4KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLnByZWZpeCA9IHByZWZpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2NoZW1lXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRTY2hlbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2NoZW1lKHNjaGVtZSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5zY2hlbWUgPSBzY2hlbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0U2NoZW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNjaGVtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLnNjaGVtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaG9zdFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0SG9zdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRIb3N0KGhvc3QpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dF8uaG9zdCA9IGhvc3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SG9zdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRIb3N0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8uaG9zdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydFxuICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRQb3J0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBvcnQocG9ydCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0Xy5wb3J0ID0gcG9ydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRQb3J0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvcnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5wb3J0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRMb2NhbGUnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRMb2NhbGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG9jYWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8ubG9jYWxlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdidWlsZFF1ZXJ5UGFyYW1zJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCdWlsZHMgcXVlcnkgc3RyaW5nIHBhcmFtcyBhZGRlZCB0byBhIFVSTC5cbiAgICAgICAgICogUG9ydCBvZiBqUXVlcnkncyAkLnBhcmFtKCkgZnVuY3Rpb24sIHNvIGNyZWRpdCBpcyBkdWUgdGhlcmUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAgICAgICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBwYXJhbXNcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gYWRkXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYnVpbGRRdWVyeVBhcmFtcyhwcmVmaXgsIHBhcmFtcywgYWRkKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgbmFtZSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciByYnJhY2tldCA9IG5ldyBSZWdFeHAoL1xcW1xcXSQvKTtcblxuICAgICAgICAgICAgaWYgKHBhcmFtcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmJyYWNrZXQudGVzdChwcmVmaXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGQocHJlZml4LCB2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYnVpbGRRdWVyeVBhcmFtcyhwcmVmaXggKyAnWycgKyAoKHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbCkpID09PSAnb2JqZWN0JyA/IGkgOiAnJykgKyAnXScsIHZhbCwgYWRkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgodHlwZW9mIHBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGFyYW1zKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChuYW1lIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUXVlcnlQYXJhbXMocHJlZml4ICsgJ1snICsgbmFtZSArICddJywgcGFyYW1zW25hbWVdLCBhZGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkKHByZWZpeCwgcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgcmF3IHJvdXRlIG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAgICogQHJldHVybiB7Um91dGVyLlJvdXRlfVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Um91dGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um91dGUobmFtZSkge1xuICAgICAgICAgICAgdmFyIHByZWZpeGVkTmFtZSA9IHRoaXMuY29udGV4dF8ucHJlZml4ICsgbmFtZTtcbiAgICAgICAgICAgIHZhciBzZjQxaTE4bk5hbWUgPSBuYW1lICsgJy4nICsgdGhpcy5jb250ZXh0Xy5sb2NhbGU7XG4gICAgICAgICAgICB2YXIgcHJlZml4ZWRTZjQxaTE4bk5hbWUgPSB0aGlzLmNvbnRleHRfLnByZWZpeCArIG5hbWUgKyAnLicgKyB0aGlzLmNvbnRleHRfLmxvY2FsZTtcbiAgICAgICAgICAgIHZhciB2YXJpYW50cyA9IFtwcmVmaXhlZE5hbWUsIHNmNDFpMThuTmFtZSwgcHJlZml4ZWRTZjQxaTE4bk5hbWUsIG5hbWVdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHZhcmlhbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhbnRzW2ldIGluIHRoaXMucm91dGVzXykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXNfW3ZhcmlhbnRzW2ldXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHJvdXRlIFwiJyArIG5hbWUgKyAnXCIgZG9lcyBub3QgZXhpc3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2VuZXJhdGVzIHRoZSBVUkwgZm9yIGEgcm91dGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IG9wdF9wYXJhbXNcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBhYnNvbHV0ZVxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZW5lcmF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZShuYW1lLCBvcHRfcGFyYW1zKSB7XG4gICAgICAgICAgICB2YXIgYWJzb2x1dGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gICAgICAgICAgICB2YXIgcm91dGUgPSB0aGlzLmdldFJvdXRlKG5hbWUpLFxuICAgICAgICAgICAgICAgIHBhcmFtcyA9IG9wdF9wYXJhbXMgfHwge30sXG4gICAgICAgICAgICAgICAgdW51c2VkUGFyYW1zID0gX2V4dGVuZHMoe30sIHBhcmFtcyksXG4gICAgICAgICAgICAgICAgdXJsID0gJycsXG4gICAgICAgICAgICAgICAgb3B0aW9uYWwgPSB0cnVlLFxuICAgICAgICAgICAgICAgIGhvc3QgPSAnJyxcbiAgICAgICAgICAgICAgICBwb3J0ID0gdHlwZW9mIHRoaXMuZ2V0UG9ydCgpID09IFwidW5kZWZpbmVkXCIgfHwgdGhpcy5nZXRQb3J0KCkgPT09IG51bGwgPyAnJyA6IHRoaXMuZ2V0UG9ydCgpO1xuXG4gICAgICAgICAgICByb3V0ZS50b2tlbnMuZm9yRWFjaChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoJ3RleHQnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSBSb3V0ZXIuZW5jb2RlUGF0aENvbXBvbmVudCh0b2tlblsxXSkgKyB1cmw7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFzRGVmYXVsdCA9IHJvdXRlLmRlZmF1bHRzICYmIHRva2VuWzNdIGluIHJvdXRlLmRlZmF1bHRzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmFsc2UgPT09IG9wdGlvbmFsIHx8ICFoYXNEZWZhdWx0IHx8IHRva2VuWzNdIGluIHBhcmFtcyAmJiBwYXJhbXNbdG9rZW5bM11dICE9IHJvdXRlLmRlZmF1bHRzW3Rva2VuWzNdXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW5bM10gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1bnVzZWRQYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByb3V0ZS5kZWZhdWx0c1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicgKyBuYW1lICsgJ1wiIHJlcXVpcmVzIHRoZSBwYXJhbWV0ZXIgXCInICsgdG9rZW5bM10gKyAnXCIuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbXB0eSA9IHRydWUgPT09IHZhbHVlIHx8IGZhbHNlID09PSB2YWx1ZSB8fCAnJyA9PT0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZW1wdHkgfHwgIW9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVuY29kZWRWYWx1ZSA9IFJvdXRlci5lbmNvZGVQYXRoQ29tcG9uZW50KHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgnbnVsbCcgPT09IGVuY29kZWRWYWx1ZSAmJiBudWxsID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB0b2tlblsxXSArIGVuY29kZWRWYWx1ZSArIHVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNEZWZhdWx0ICYmIHRva2VuWzNdIGluIHVudXNlZFBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVudXNlZFBhcmFtc1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdG9rZW4gdHlwZSBcIicgKyB0b2tlblswXSArICdcIiBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh1cmwgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gJy8nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3V0ZS5ob3N0dG9rZW5zLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuXG4gICAgICAgICAgICAgICAgaWYgKCd0ZXh0JyA9PT0gdG9rZW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdCA9IHRva2VuWzFdICsgaG9zdDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCd2YXJpYWJsZScgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlblszXSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1bnVzZWRQYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLmRlZmF1bHRzICYmIHRva2VuWzNdIGluIHJvdXRlLmRlZmF1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJvdXRlLmRlZmF1bHRzW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGhvc3QgPSB0b2tlblsxXSArIHZhbHVlICsgaG9zdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIEZvby1iYXIhXG4gICAgICAgICAgICB1cmwgPSB0aGlzLmNvbnRleHRfLmJhc2VfdXJsICsgdXJsO1xuXG4gICAgICAgICAgICBpZiAocm91dGUucmVxdWlyZW1lbnRzICYmIFwiX3NjaGVtZVwiIGluIHJvdXRlLnJlcXVpcmVtZW50cyAmJiB0aGlzLmdldFNjaGVtZSgpICE9IHJvdXRlLnJlcXVpcmVtZW50c1tcIl9zY2hlbWVcIl0pIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEhvc3QgPSBob3N0IHx8IHRoaXMuZ2V0SG9zdCgpO1xuXG4gICAgICAgICAgICAgICAgdXJsID0gcm91dGUucmVxdWlyZW1lbnRzW1wiX3NjaGVtZVwiXSArIFwiOi8vXCIgKyBjdXJyZW50SG9zdCArIChjdXJyZW50SG9zdC5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpICsgdXJsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2Ygcm91dGUuc2NoZW1lcyAmJiBcInVuZGVmaW5lZFwiICE9PSB0eXBlb2Ygcm91dGUuc2NoZW1lc1swXSAmJiB0aGlzLmdldFNjaGVtZSgpICE9PSByb3V0ZS5zY2hlbWVzWzBdKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9jdXJyZW50SG9zdCA9IGhvc3QgfHwgdGhpcy5nZXRIb3N0KCk7XG5cbiAgICAgICAgICAgICAgICB1cmwgPSByb3V0ZS5zY2hlbWVzWzBdICsgXCI6Ly9cIiArIF9jdXJyZW50SG9zdCArIChfY3VycmVudEhvc3QuaW5kZXhPZignOicgKyBwb3J0KSA+IC0xIHx8ICcnID09PSBwb3J0ID8gJycgOiAnOicgKyBwb3J0KSArIHVybDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG9zdCAmJiB0aGlzLmdldEhvc3QoKSAhPT0gaG9zdCArIChob3N0LmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB0aGlzLmdldFNjaGVtZSgpICsgXCI6Ly9cIiArIGhvc3QgKyAoaG9zdC5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpICsgdXJsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhYnNvbHV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHVybCA9IHRoaXMuZ2V0U2NoZW1lKCkgKyBcIjovL1wiICsgdGhpcy5nZXRIb3N0KCkgKyAodGhpcy5nZXRIb3N0KCkuaW5kZXhPZignOicgKyBwb3J0KSA+IC0xIHx8ICcnID09PSBwb3J0ID8gJycgOiAnOicgKyBwb3J0KSArIHVybDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVudXNlZFBhcmFtcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBwcmVmaXggPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5UGFyYW1zID0gW107XG4gICAgICAgICAgICAgICAgdmFyIGFkZCA9IGZ1bmN0aW9uIGFkZChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHZhbHVlIGlzIGEgZnVuY3Rpb24gdGhlbiBjYWxsIGl0IGFuZCBhc3NpZ24gaXQncyByZXR1cm4gdmFsdWUgYXMgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZSgpIDogdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlIG51bGwgdG8gZW1wdHkgc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPT09IG51bGwgPyAnJyA6IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLnB1c2goUm91dGVyLmVuY29kZVF1ZXJ5Q29tcG9uZW50KGtleSkgKyAnPScgKyBSb3V0ZXIuZW5jb2RlUXVlcnlDb21wb25lbnQodmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgZm9yIChwcmVmaXggaW4gdW51c2VkUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRRdWVyeVBhcmFtcyhwcmVmaXgsIHVudXNlZFBhcmFtc1twcmVmaXhdLCBhZGQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVybCA9IHVybCArICc/JyArIHF1ZXJ5UGFyYW1zLmpvaW4oJyYnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBnaXZlbiBzdHJpbmcgZW5jb2RlZCB0byBtaW1pYyBTeW1mb255IFVSTCBnZW5lcmF0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfV0sIFt7XG4gICAgICAgIGtleTogJ2dldEluc3RhbmNlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJvdXRpbmc7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uZmlndXJlcyB0aGUgY3VycmVudCBSb3V0ZXIgaW5zdGFuY2Ugd2l0aCB0aGUgcHJvdmlkZWQgZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldERhdGEnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGF0YShkYXRhKSB7XG4gICAgICAgICAgICB2YXIgcm91dGVyID0gUm91dGVyLmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgICAgIHJvdXRlci5zZXRSb3V0aW5nRGF0YShkYXRhKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGN1c3RvbUVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkucmVwbGFjZSgvJTJGL2csICcvJykucmVwbGFjZSgvJTQwL2csICdAJykucmVwbGFjZSgvJTNBL2csICc6JykucmVwbGFjZSgvJTIxL2csICchJykucmVwbGFjZSgvJTNCL2csICc7JykucmVwbGFjZSgvJTJDL2csICcsJykucmVwbGFjZSgvJTJBL2csICcqJykucmVwbGFjZSgvXFwoL2csICclMjgnKS5yZXBsYWNlKC9cXCkvZywgJyUyOScpLnJlcGxhY2UoLycvZywgJyUyNycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGdpdmVuIHBhdGggcHJvcGVybHkgZW5jb2RlZCB0byBtaW1pYyBTeW1mb255IFVSTCBnZW5lcmF0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlbmNvZGVQYXRoQ29tcG9uZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuY29kZVBhdGhDb21wb25lbnQodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBSb3V0ZXIuY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC8lM0QvZywgJz0nKS5yZXBsYWNlKC8lMkIvZywgJysnKS5yZXBsYWNlKC8lMjEvZywgJyEnKS5yZXBsYWNlKC8lN0MvZywgJ3wnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBnaXZlbiBxdWVyeSBwYXJhbWV0ZXIgb3IgdmFsdWUgcHJvcGVybHkgZW5jb2RlZCB0byBtaW1pYyBTeW1mb255IFVSTCBnZW5lcmF0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdlbmNvZGVRdWVyeUNvbXBvbmVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbmNvZGVRdWVyeUNvbXBvbmVudCh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJvdXRlci5jdXN0b21FbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoLyUzRi9nLCAnPycpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJvdXRlcjtcbn0oKTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7e1xuICogICAgIHRva2VuczogKEFycmF5LjxBcnJheS48c3RyaW5nPj4pLFxuICogICAgIGRlZmF1bHRzOiAoT2JqZWN0LjxzdHJpbmcsIHN0cmluZz4pLFxuICogICAgIHJlcXVpcmVtZW50czogT2JqZWN0LFxuICogICAgIGhvc3R0b2tlbnM6IChBcnJheS48c3RyaW5nPilcbiAqIH19XG4gKi9cblxuXG5Sb3V0ZXIuUm91dGU7XG5cbi8qKlxuICogQHR5cGVkZWYge3tcbiAqICAgICBiYXNlX3VybDogKHN0cmluZylcbiAqIH19XG4gKi9cblJvdXRlci5Db250ZXh0O1xuXG4vKipcbiAqIFJvdXRlciBzaW5nbGV0b24uXG4gKiBAY29uc3RcbiAqIEB0eXBlIHtSb3V0ZXJ9XG4gKi9cbnZhciBSb3V0aW5nID0gbmV3IFJvdXRlcigpO1xuXG4gICAgcmV0dXJuIHsgUm91dGVyOiBSb3V0ZXIsIFJvdXRpbmc6IFJvdXRpbmcgfTtcbn0pKTsiXSwic291cmNlUm9vdCI6IiJ9