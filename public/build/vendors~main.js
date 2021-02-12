(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~main"],{

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "./node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-url.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/native-url.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});


/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-punycode-to-ascii.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/string-punycode-to-ascii.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
// eslint-disable-next-line  max-statements
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      output.push(stringFromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    output.push(delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        for (var k = base; /* no condition */; k += base) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
        }

        output.push(stringFromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;
  }
  return output.join('');
};

module.exports = function (input) {
  var encoded = [];
  var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
  }
  return encoded.join('.');
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
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


/***/ }),

/***/ "./node_modules/core-js/modules/web.url-search-params.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/web.url-search-params.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ "./node_modules/core-js/internals/native-url.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var hasOwn = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "./node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var $fetch = getBuiltIn('fetch');
var Headers = getBuiltIn('Headers');
var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = it.replace(plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = result.replace(percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replace = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replace[match];
};

var serialize = function (it) {
  return encodeURIComponent(it).replace(find, replacer);
};

var parseSearchParams = function (result, query) {
  if (query) {
    var attributes = query.split('&');
    var index = 0;
    var attribute, entry;
    while (index < attributes.length) {
      attribute = attributes[index++];
      if (attribute.length) {
        entry = attribute.split('=');
        result.push({
          key: deserialize(entry.shift()),
          value: deserialize(entry.join('='))
        });
      }
    }
  }
};

var updateSearchParams = function (query) {
  this.entries.length = 0;
  parseSearchParams(this.entries, query);
};

var validateArgumentsLength = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
});

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  var that = this;
  var entries = [];
  var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;

  setInternalState(that, {
    type: URL_SEARCH_PARAMS,
    entries: entries,
    updateURL: function () { /* empty */ },
    updateSearchParams: updateSearchParams
  });

  if (init !== undefined) {
    if (isObject(init)) {
      iteratorMethod = getIteratorMethod(init);
      if (typeof iteratorMethod === 'function') {
        iterator = iteratorMethod.call(init);
        next = iterator.next;
        while (!(step = next.call(iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if (
            (first = entryNext.call(entryIterator)).done ||
            (second = entryNext.call(entryIterator)).done ||
            !entryNext.call(entryIterator).done
          ) throw TypeError('Expected sequence with length 2');
          entries.push({ key: first.value + '', value: second.value + '' });
        }
      } else for (key in init) if (hasOwn(init, key)) entries.push({ key: key, value: init[key] + '' });
    } else {
      parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
    }
  }
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    state.entries.push({ key: name + '', value: value + '' });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) entries.splice(index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) result.push(entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = name + '';
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = name + '';
    var val = value + '';
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) entries.splice(index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) entries.push({ key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    var entries = state.entries;
    // Array#sort is not stable in some engines
    var slice = entries.slice();
    var entry, entriesIndex, sliceIndex;
    entries.length = 0;
    for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
      entry = slice[sliceIndex];
      for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
        if (entries[entriesIndex].key > entry.key) {
          entries.splice(entriesIndex, 0, entry);
          break;
        }
      }
      if (entriesIndex === sliceIndex) entries.push(entry);
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries);

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine(URLSearchParamsPrototype, 'toString', function toString() {
  var entries = getInternalParamsState(this).entries;
  var result = [];
  var index = 0;
  var entry;
  while (index < entries.length) {
    entry = entries[index++];
    result.push(serialize(entry.key) + '=' + serialize(entry.value));
  } return result.join('&');
}, { enumerable: true });

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` for correct work with polyfilled `URLSearchParams`
// https://github.com/zloirock/core-js/issues/674
if (!USE_NATIVE_URL && typeof $fetch == 'function' && typeof Headers == 'function') {
  $({ global: true, enumerable: true, forced: true }, {
    fetch: function fetch(input /* , init */) {
      var args = [input];
      var init, body, headers;
      if (arguments.length > 1) {
        init = arguments[1];
        if (isObject(init)) {
          body = init.body;
          if (classof(body) === URL_SEARCH_PARAMS) {
            headers = init.headers ? new Headers(init.headers) : new Headers();
            if (!headers.has('content-type')) {
              headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
            init = create(init, {
              body: createPropertyDescriptor(0, String(body)),
              headers: createPropertyDescriptor(0, headers)
            });
          }
        }
        args.push(init);
      } return $fetch.apply(this, args);
    }
  });
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),

/***/ "./node_modules/core-js/modules/web.url.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/web.url.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(/*! ../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var USE_NATIVE_URL = __webpack_require__(/*! ../internals/native-url */ "./node_modules/core-js/internals/native-url.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");
var arrayFrom = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var codeAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").codeAt;
var toASCII = __webpack_require__(/*! ../internals/string-punycode-to-ascii */ "./node_modules/core-js/internals/string-punycode-to-ascii.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var URLSearchParamsModule = __webpack_require__(/*! ../modules/web.url-search-params */ "./node_modules/core-js/modules/web.url-search-params.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var NativeURL = global.URL;
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;
var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var floor = Math.floor;
var pow = Math.pow;

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[A-Za-z]/;
var ALPHANUMERIC = /[\d+-.A-Za-z]/;
var DIGIT = /\d/;
var HEX_START = /^(0x|0X)/;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\dA-Fa-f]+$/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/;
// eslint-disable-next-line no-control-regex
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g;
// eslint-disable-next-line no-control-regex
var TAB_AND_NEW_LINE = /[\u0009\u000A\u000D]/g;
var EOF;

var parseHost = function (url, input) {
  var result, codePoints, index;
  if (input.charAt(0) == '[') {
    if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
    result = parseIPv6(input.slice(1, -1));
    if (!result) return INVALID_HOST;
    url.host = result;
  // opaque host
  } else if (!isSpecial(url)) {
    if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
    result = '';
    codePoints = arrayFrom(input);
    for (index = 0; index < codePoints.length; index++) {
      result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
    }
    url.host = result;
  } else {
    input = toASCII(input);
    if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
    result = parseIPv4(input);
    if (result === null) return INVALID_HOST;
    url.host = result;
  }
};

var parseIPv4 = function (input) {
  var parts = input.split('.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.pop();
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && part.charAt(0) == '0') {
      radix = HEX_START.test(part) ? 16 : 8;
      part = part.slice(radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
      number = parseInt(part, radix);
    }
    numbers.push(number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = numbers.pop();
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// eslint-disable-next-line max-statements
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var char = function () {
    return input.charAt(pointer);
  };

  if (char() == ':') {
    if (input.charAt(1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (char()) {
    if (pieceIndex == 8) return;
    if (char() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && HEX.test(char())) {
      value = value * 16 + parseInt(char(), 16);
      pointer++;
      length++;
    }
    if (char() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (char()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (char() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!DIGIT.test(char())) return;
        while (DIGIT.test(char())) {
          number = parseInt(char(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (char() == ':') {
      pointer++;
      if (!char()) return;
    } else if (char()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      result.unshift(host % 256);
      host = floor(host / 256);
    } return result.join('.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += host[index].toString(16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (char, set) {
  var code = codeAt(char, 0);
  return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
};

var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

var isSpecial = function (url) {
  return has(specialSchemes, url.scheme);
};

var includesCredentials = function (url) {
  return url.username != '' || url.password != '';
};

var cannotHaveUsernamePasswordPort = function (url) {
  return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
};

var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && ALPHA.test(string.charAt(0))
    && ((second = string.charAt(1)) == ':' || (!normalized && second == '|'));
};

var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (
    string.length == 2 ||
    ((third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

var shortenURLsPath = function (url) {
  var path = url.path;
  var pathSize = path.length;
  if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
    path.pop();
  }
};

var isSingleDot = function (segment) {
  return segment === '.' || segment.toLowerCase() === '%2e';
};

var isDoubleDot = function (segment) {
  segment = segment.toLowerCase();
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

// eslint-disable-next-line max-statements
var parseURL = function (url, input, stateOverride, base) {
  var state = stateOverride || SCHEME_START;
  var pointer = 0;
  var buffer = '';
  var seenAt = false;
  var seenBracket = false;
  var seenPasswordToken = false;
  var codePoints, char, bufferCodePoints, failure;

  if (!stateOverride) {
    url.scheme = '';
    url.username = '';
    url.password = '';
    url.host = null;
    url.port = null;
    url.path = [];
    url.query = null;
    url.fragment = null;
    url.cannotBeABaseURL = false;
    input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
  }

  input = input.replace(TAB_AND_NEW_LINE, '');

  codePoints = arrayFrom(input);

  while (pointer <= codePoints.length) {
    char = codePoints[pointer];
    switch (state) {
      case SCHEME_START:
        if (char && ALPHA.test(char)) {
          buffer += char.toLowerCase();
          state = SCHEME;
        } else if (!stateOverride) {
          state = NO_SCHEME;
          continue;
        } else return INVALID_SCHEME;
        break;

      case SCHEME:
        if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
          buffer += char.toLowerCase();
        } else if (char == ':') {
          if (stateOverride && (
            (isSpecial(url) != has(specialSchemes, buffer)) ||
            (buffer == 'file' && (includesCredentials(url) || url.port !== null)) ||
            (url.scheme == 'file' && !url.host)
          )) return;
          url.scheme = buffer;
          if (stateOverride) {
            if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
            return;
          }
          buffer = '';
          if (url.scheme == 'file') {
            state = FILE;
          } else if (isSpecial(url) && base && base.scheme == url.scheme) {
            state = SPECIAL_RELATIVE_OR_AUTHORITY;
          } else if (isSpecial(url)) {
            state = SPECIAL_AUTHORITY_SLASHES;
          } else if (codePoints[pointer + 1] == '/') {
            state = PATH_OR_AUTHORITY;
            pointer++;
          } else {
            url.cannotBeABaseURL = true;
            url.path.push('');
            state = CANNOT_BE_A_BASE_URL_PATH;
          }
        } else if (!stateOverride) {
          buffer = '';
          state = NO_SCHEME;
          pointer = 0;
          continue;
        } else return INVALID_SCHEME;
        break;

      case NO_SCHEME:
        if (!base || (base.cannotBeABaseURL && char != '#')) return INVALID_SCHEME;
        if (base.cannotBeABaseURL && char == '#') {
          url.scheme = base.scheme;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          url.cannotBeABaseURL = true;
          state = FRAGMENT;
          break;
        }
        state = base.scheme == 'file' ? FILE : RELATIVE;
        continue;

      case SPECIAL_RELATIVE_OR_AUTHORITY:
        if (char == '/' && codePoints[pointer + 1] == '/') {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          pointer++;
        } else {
          state = RELATIVE;
          continue;
        } break;

      case PATH_OR_AUTHORITY:
        if (char == '/') {
          state = AUTHORITY;
          break;
        } else {
          state = PATH;
          continue;
        }

      case RELATIVE:
        url.scheme = base.scheme;
        if (char == EOF) {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
        } else if (char == '/' || (char == '\\' && isSpecial(url))) {
          state = RELATIVE_SLASH;
        } else if (char == '?') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.query = base.query;
          url.fragment = '';
          state = FRAGMENT;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          url.path = base.path.slice();
          url.path.pop();
          state = PATH;
          continue;
        } break;

      case RELATIVE_SLASH:
        if (isSpecial(url) && (char == '/' || char == '\\')) {
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        } else if (char == '/') {
          state = AUTHORITY;
        } else {
          url.username = base.username;
          url.password = base.password;
          url.host = base.host;
          url.port = base.port;
          state = PATH;
          continue;
        } break;

      case SPECIAL_AUTHORITY_SLASHES:
        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
        if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
        pointer++;
        break;

      case SPECIAL_AUTHORITY_IGNORE_SLASHES:
        if (char != '/' && char != '\\') {
          state = AUTHORITY;
          continue;
        } break;

      case AUTHORITY:
        if (char == '@') {
          if (seenAt) buffer = '%40' + buffer;
          seenAt = true;
          bufferCodePoints = arrayFrom(buffer);
          for (var i = 0; i < bufferCodePoints.length; i++) {
            var codePoint = bufferCodePoints[i];
            if (codePoint == ':' && !seenPasswordToken) {
              seenPasswordToken = true;
              continue;
            }
            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
            if (seenPasswordToken) url.password += encodedCodePoints;
            else url.username += encodedCodePoints;
          }
          buffer = '';
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (seenAt && buffer == '') return INVALID_AUTHORITY;
          pointer -= arrayFrom(buffer).length + 1;
          buffer = '';
          state = HOST;
        } else buffer += char;
        break;

      case HOST:
      case HOSTNAME:
        if (stateOverride && url.scheme == 'file') {
          state = FILE_HOST;
          continue;
        } else if (char == ':' && !seenBracket) {
          if (buffer == '') return INVALID_HOST;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PORT;
          if (stateOverride == HOSTNAME) return;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url))
        ) {
          if (isSpecial(url) && buffer == '') return INVALID_HOST;
          if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
          failure = parseHost(url, buffer);
          if (failure) return failure;
          buffer = '';
          state = PATH_START;
          if (stateOverride) return;
          continue;
        } else {
          if (char == '[') seenBracket = true;
          else if (char == ']') seenBracket = false;
          buffer += char;
        } break;

      case PORT:
        if (DIGIT.test(char)) {
          buffer += char;
        } else if (
          char == EOF || char == '/' || char == '?' || char == '#' ||
          (char == '\\' && isSpecial(url)) ||
          stateOverride
        ) {
          if (buffer != '') {
            var port = parseInt(buffer, 10);
            if (port > 0xFFFF) return INVALID_PORT;
            url.port = (isSpecial(url) && port === specialSchemes[url.scheme]) ? null : port;
            buffer = '';
          }
          if (stateOverride) return;
          state = PATH_START;
          continue;
        } else return INVALID_PORT;
        break;

      case FILE:
        url.scheme = 'file';
        if (char == '/' || char == '\\') state = FILE_SLASH;
        else if (base && base.scheme == 'file') {
          if (char == EOF) {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
          } else if (char == '?') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.host = base.host;
            url.path = base.path.slice();
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
              url.host = base.host;
              url.path = base.path.slice();
              shortenURLsPath(url);
            }
            state = PATH;
            continue;
          }
        } else {
          state = PATH;
          continue;
        } break;

      case FILE_SLASH:
        if (char == '/' || char == '\\') {
          state = FILE_HOST;
          break;
        }
        if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
          if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);
          else url.host = base.host;
        }
        state = PATH;
        continue;

      case FILE_HOST:
        if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
          if (!stateOverride && isWindowsDriveLetter(buffer)) {
            state = PATH;
          } else if (buffer == '') {
            url.host = '';
            if (stateOverride) return;
            state = PATH_START;
          } else {
            failure = parseHost(url, buffer);
            if (failure) return failure;
            if (url.host == 'localhost') url.host = '';
            if (stateOverride) return;
            buffer = '';
            state = PATH_START;
          } continue;
        } else buffer += char;
        break;

      case PATH_START:
        if (isSpecial(url)) {
          state = PATH;
          if (char != '/' && char != '\\') continue;
        } else if (!stateOverride && char == '?') {
          url.query = '';
          state = QUERY;
        } else if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          state = PATH;
          if (char != '/') continue;
        } break;

      case PATH:
        if (
          char == EOF || char == '/' ||
          (char == '\\' && isSpecial(url)) ||
          (!stateOverride && (char == '?' || char == '#'))
        ) {
          if (isDoubleDot(buffer)) {
            shortenURLsPath(url);
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else if (isSingleDot(buffer)) {
            if (char != '/' && !(char == '\\' && isSpecial(url))) {
              url.path.push('');
            }
          } else {
            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
              if (url.host) url.host = '';
              buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
            }
            url.path.push(buffer);
          }
          buffer = '';
          if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
            while (url.path.length > 1 && url.path[0] === '') {
              url.path.shift();
            }
          }
          if (char == '?') {
            url.query = '';
            state = QUERY;
          } else if (char == '#') {
            url.fragment = '';
            state = FRAGMENT;
          }
        } else {
          buffer += percentEncode(char, pathPercentEncodeSet);
        } break;

      case CANNOT_BE_A_BASE_URL_PATH:
        if (char == '?') {
          url.query = '';
          state = QUERY;
        } else if (char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case QUERY:
        if (!stateOverride && char == '#') {
          url.fragment = '';
          state = FRAGMENT;
        } else if (char != EOF) {
          if (char == "'" && isSpecial(url)) url.query += '%27';
          else if (char == '#') url.query += '%23';
          else url.query += percentEncode(char, C0ControlPercentEncodeSet);
        } break;

      case FRAGMENT:
        if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
        break;
    }

    pointer++;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLConstructor, 'URL');
  var base = arguments.length > 1 ? arguments[1] : undefined;
  var urlString = String(url);
  var state = setInternalState(that, { type: 'URL' });
  var baseState, failure;
  if (base !== undefined) {
    if (base instanceof URLConstructor) baseState = getInternalURLState(base);
    else {
      failure = parseURL(baseState = {}, String(base));
      if (failure) throw TypeError(failure);
    }
  }
  failure = parseURL(state, urlString, null, baseState);
  if (failure) throw TypeError(failure);
  var searchParams = state.searchParams = new URLSearchParams();
  var searchParamsState = getInternalSearchParamsState(searchParams);
  searchParamsState.updateSearchParams(state.query);
  searchParamsState.updateURL = function () {
    state.query = String(searchParams) || null;
  };
  if (!DESCRIPTORS) {
    that.href = serializeURL.call(that);
    that.origin = getOrigin.call(that);
    that.protocol = getProtocol.call(that);
    that.username = getUsername.call(that);
    that.password = getPassword.call(that);
    that.host = getHost.call(that);
    that.hostname = getHostname.call(that);
    that.port = getPort.call(that);
    that.pathname = getPathname.call(that);
    that.search = getSearch.call(that);
    that.searchParams = getSearchParams.call(that);
    that.hash = getHash.call(that);
  }
};

var URLPrototype = URLConstructor.prototype;

var serializeURL = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var username = url.username;
  var password = url.password;
  var host = url.host;
  var port = url.port;
  var path = url.path;
  var query = url.query;
  var fragment = url.fragment;
  var output = scheme + ':';
  if (host !== null) {
    output += '//';
    if (includesCredentials(url)) {
      output += username + (password ? ':' + password : '') + '@';
    }
    output += serializeHost(host);
    if (port !== null) output += ':' + port;
  } else if (scheme == 'file') output += '//';
  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
  if (query !== null) output += '?' + query;
  if (fragment !== null) output += '#' + fragment;
  return output;
};

var getOrigin = function () {
  var url = getInternalURLState(this);
  var scheme = url.scheme;
  var port = url.port;
  if (scheme == 'blob') try {
    return new URL(scheme.path[0]).origin;
  } catch (error) {
    return 'null';
  }
  if (scheme == 'file' || !isSpecial(url)) return 'null';
  return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
};

var getProtocol = function () {
  return getInternalURLState(this).scheme + ':';
};

var getUsername = function () {
  return getInternalURLState(this).username;
};

var getPassword = function () {
  return getInternalURLState(this).password;
};

var getHost = function () {
  var url = getInternalURLState(this);
  var host = url.host;
  var port = url.port;
  return host === null ? ''
    : port === null ? serializeHost(host)
    : serializeHost(host) + ':' + port;
};

var getHostname = function () {
  var host = getInternalURLState(this).host;
  return host === null ? '' : serializeHost(host);
};

var getPort = function () {
  var port = getInternalURLState(this).port;
  return port === null ? '' : String(port);
};

var getPathname = function () {
  var url = getInternalURLState(this);
  var path = url.path;
  return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
};

var getSearch = function () {
  var query = getInternalURLState(this).query;
  return query ? '?' + query : '';
};

var getSearchParams = function () {
  return getInternalURLState(this).searchParams;
};

var getHash = function () {
  var fragment = getInternalURLState(this).fragment;
  return fragment ? '#' + fragment : '';
};

var accessorDescriptor = function (getter, setter) {
  return { get: getter, set: setter, configurable: true, enumerable: true };
};

if (DESCRIPTORS) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor(serializeURL, function (href) {
      var url = getInternalURLState(this);
      var urlString = String(href);
      var failure = parseURL(url, urlString);
      if (failure) throw TypeError(failure);
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor(getOrigin),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor(getProtocol, function (protocol) {
      var url = getInternalURLState(this);
      parseURL(url, String(protocol) + ':', SCHEME_START);
    }),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor(getUsername, function (username) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(username));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.username = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor(getPassword, function (password) {
      var url = getInternalURLState(this);
      var codePoints = arrayFrom(String(password));
      if (cannotHaveUsernamePasswordPort(url)) return;
      url.password = '';
      for (var i = 0; i < codePoints.length; i++) {
        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    }),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor(getHost, function (host) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(host), HOST);
    }),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor(getHostname, function (hostname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      parseURL(url, String(hostname), HOSTNAME);
    }),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor(getPort, function (port) {
      var url = getInternalURLState(this);
      if (cannotHaveUsernamePasswordPort(url)) return;
      port = String(port);
      if (port == '') url.port = null;
      else parseURL(url, port, PORT);
    }),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor(getPathname, function (pathname) {
      var url = getInternalURLState(this);
      if (url.cannotBeABaseURL) return;
      url.path = [];
      parseURL(url, pathname + '', PATH_START);
    }),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor(getSearch, function (search) {
      var url = getInternalURLState(this);
      search = String(search);
      if (search == '') {
        url.query = null;
      } else {
        if ('?' == search.charAt(0)) search = search.slice(1);
        url.query = '';
        parseURL(url, search, QUERY);
      }
      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
    }),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor(getSearchParams),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor(getHash, function (hash) {
      var url = getInternalURLState(this);
      hash = String(hash);
      if (hash == '') {
        url.fragment = null;
        return;
      }
      if ('#' == hash.charAt(0)) hash = hash.slice(1);
      url.fragment = '';
      parseURL(url, hash, FRAGMENT);
    })
  });
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
redefine(URLPrototype, 'toJSON', function toJSON() {
  return serializeURL.call(this);
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
redefine(URLPrototype, 'toString', function toString() {
  return serializeURL.call(this);
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
    return nativeCreateObjectURL.apply(NativeURL, arguments);
  });
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  // eslint-disable-next-line no-unused-vars
  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
    return nativeRevokeObjectURL.apply(NativeURL, arguments);
  });
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS11cmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXB1bnljb2RlLXRvLWFzY2lpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmRhdGUudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi51cmwtc2VhcmNoLXBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi51cmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDSmE7QUFDYixXQUFXLG1CQUFPLENBQUMscUdBQW9DO0FBQ3ZELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0MsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDO0FBQzFGLDRCQUE0QixtQkFBTyxDQUFDLDJHQUF1QztBQUMzRSxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLHFCQUFxQixtQkFBTyxDQUFDLHlGQUE4QjtBQUMzRCx3QkFBd0IsbUJBQU8sQ0FBQyxpR0FBa0M7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG1DQUFtQztBQUM3QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFVBQVUsZUFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeENBLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0Msb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWmE7QUFDYixrQkFBa0IsbUJBQU8sQ0FBQyxtRkFBMkI7QUFDckQsMkJBQTJC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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZCQUE2QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGNBQWM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsR0FBRyxtQkFBbUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHQUFHLG1CQUFtQjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBLEdBQUcsNERBQTREO0FBQy9EO0FBQ0EsQ0FBQyIsImZpbGUiOiJ2ZW5kb3Jzfm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCAnICsgKG5hbWUgPyBuYW1lICsgJyAnIDogJycpICsgJ2ludm9jYXRpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIG1hcGZuID0gYXJndW1lbnRzTGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBnZXRJdGVyYXRvck1ldGhvZChPKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvciwgbmV4dCwgdmFsdWU7XG4gIGlmIChtYXBwaW5nKSBtYXBmbiA9IGJpbmQobWFwZm4sIGFyZ3VtZW50c0xlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAvLyBpZiB0aGUgdGFyZ2V0IGlzIG5vdCBpdGVyYWJsZSBvciBpdCdzIGFuIGFycmF5IHdpdGggdGhlIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2UgYSBzaW1wbGUgY2FzZVxuICBpZiAoaXRlcmF0b3JNZXRob2QgIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlcmF0b3JNZXRob2QpKSkge1xuICAgIGl0ZXJhdG9yID0gaXRlcmF0b3JNZXRob2QuY2FsbChPKTtcbiAgICBuZXh0ID0gaXRlcmF0b3IubmV4dDtcbiAgICByZXN1bHQgPSBuZXcgQygpO1xuICAgIGZvciAoOyEoc3RlcCA9IG5leHQuY2FsbChpdGVyYXRvcikpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgIHZhbHVlID0gbWFwcGluZyA/IGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWU7XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICByZXN1bHQgPSBuZXcgQyhsZW5ndGgpO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF07XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1ByaW1pdGl2ZShrZXkpO1xuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbn07XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCduYXZpZ2F0b3InLCAndXNlckFnZW50JykgfHwgJyc7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBnZXRJdGVyYXRvck1ldGhvZChpdCk7XG4gIGlmICh0eXBlb2YgaXRlcmF0b3JNZXRob2QgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbiAgfSByZXR1cm4gYW5PYmplY3QoaXRlcmF0b3JNZXRob2QuY2FsbChpdCkpO1xufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvcikge1xuICB2YXIgcmV0dXJuTWV0aG9kID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICBpZiAocmV0dXJuTWV0aG9kICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYW5PYmplY3QocmV0dXJuTWV0aG9kLmNhbGwoaXRlcmF0b3IpKS52YWx1ZTtcbiAgfVxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHVybCA9IG5ldyBVUkwoJ2I/YT0xJmI9MiZjPTMnLCAnaHR0cDovL2EnKTtcbiAgdmFyIHNlYXJjaFBhcmFtcyA9IHVybC5zZWFyY2hQYXJhbXM7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdXJsLnBhdGhuYW1lID0gJ2MlMjBkJztcbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBzZWFyY2hQYXJhbXNbJ2RlbGV0ZSddKCdiJyk7XG4gICAgcmVzdWx0ICs9IGtleSArIHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIChJU19QVVJFICYmICF1cmwudG9KU09OKVxuICAgIHx8ICFzZWFyY2hQYXJhbXMuc29ydFxuICAgIHx8IHVybC5ocmVmICE9PSAnaHR0cDovL2EvYyUyMGQ/YT0xJmM9MydcbiAgICB8fCBzZWFyY2hQYXJhbXMuZ2V0KCdjJykgIT09ICczJ1xuICAgIHx8IFN0cmluZyhuZXcgVVJMU2VhcmNoUGFyYW1zKCc/YT0xJykpICE9PSAnYT0xJ1xuICAgIHx8ICFzZWFyY2hQYXJhbXNbSVRFUkFUT1JdXG4gICAgLy8gdGhyb3dzIGluIEVkZ2VcbiAgICB8fCBuZXcgVVJMKCdodHRwczovL2FAYicpLnVzZXJuYW1lICE9PSAnYSdcbiAgICB8fCBuZXcgVVJMU2VhcmNoUGFyYW1zKG5ldyBVUkxTZWFyY2hQYXJhbXMoJ2E9YicpKS5nZXQoJ2EnKSAhPT0gJ2InXG4gICAgLy8gbm90IHB1bnljb2RlZCBpbiBFZGdlXG4gICAgfHwgbmV3IFVSTCgnaHR0cDovL9GC0LXRgdGCJykuaG9zdCAhPT0gJ3huLS1lMWF5YmMnXG4gICAgLy8gbm90IGVzY2FwZWQgaW4gQ2hyb21lIDYyLVxuICAgIHx8IG5ldyBVUkwoJ2h0dHA6Ly9hI9CxJykuaGFzaCAhPT0gJyMlRDAlQjEnXG4gICAgLy8gZmFpbHMgaW4gQ2hyb21lIDY2LVxuICAgIHx8IHJlc3VsdCAhPT0gJ2ExYzMnXG4gICAgLy8gdGhyb3dzIGluIFNhZmFyaVxuICAgIHx8IG5ldyBVUkwoJ2h0dHA6Ly94JywgdW5kZWZpbmVkKS5ob3N0ICE9PSAneCc7XG59KTtcbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgb3B0aW9ucykge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIG9wdGlvbnMpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXN0aWVqcy9wdW55Y29kZS5qcy9ibG9iL21hc3Rlci9wdW55Y29kZS5qc1xudmFyIG1heEludCA9IDIxNDc0ODM2NDc7IC8vIGFrYS4gMHg3RkZGRkZGRiBvciAyXjMxLTFcbnZhciBiYXNlID0gMzY7XG52YXIgdE1pbiA9IDE7XG52YXIgdE1heCA9IDI2O1xudmFyIHNrZXcgPSAzODtcbnZhciBkYW1wID0gNzAwO1xudmFyIGluaXRpYWxCaWFzID0gNzI7XG52YXIgaW5pdGlhbE4gPSAxMjg7IC8vIDB4ODBcbnZhciBkZWxpbWl0ZXIgPSAnLSc7IC8vICdcXHgyRCdcbnZhciByZWdleE5vbkFTQ0lJID0gL1teXFwwLVxcdTAwN0VdLzsgLy8gbm9uLUFTQ0lJIGNoYXJzXG52YXIgcmVnZXhTZXBhcmF0b3JzID0gL1suXFx1MzAwMlxcdUZGMEVcXHVGRjYxXS9nOyAvLyBSRkMgMzQ5MCBzZXBhcmF0b3JzXG52YXIgT1ZFUkZMT1dfRVJST1IgPSAnT3ZlcmZsb3c6IGlucHV0IG5lZWRzIHdpZGVyIGludGVnZXJzIHRvIHByb2Nlc3MnO1xudmFyIGJhc2VNaW51c1RNaW4gPSBiYXNlIC0gdE1pbjtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgc3RyaW5nRnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG51bWVyaWMgY29kZSBwb2ludHMgb2YgZWFjaCBVbmljb2RlXG4gKiBjaGFyYWN0ZXIgaW4gdGhlIHN0cmluZy4gV2hpbGUgSmF2YVNjcmlwdCB1c2VzIFVDUy0yIGludGVybmFsbHksXG4gKiB0aGlzIGZ1bmN0aW9uIHdpbGwgY29udmVydCBhIHBhaXIgb2Ygc3Vycm9nYXRlIGhhbHZlcyAoZWFjaCBvZiB3aGljaFxuICogVUNTLTIgZXhwb3NlcyBhcyBzZXBhcmF0ZSBjaGFyYWN0ZXJzKSBpbnRvIGEgc2luZ2xlIGNvZGUgcG9pbnQsXG4gKiBtYXRjaGluZyBVVEYtMTYuXG4gKi9cbnZhciB1Y3MyZGVjb2RlID0gZnVuY3Rpb24gKHN0cmluZykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIHZhciBjb3VudGVyID0gMDtcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG4gIHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcbiAgICBpZiAodmFsdWUgPj0gMHhEODAwICYmIHZhbHVlIDw9IDB4REJGRiAmJiBjb3VudGVyIDwgbGVuZ3RoKSB7XG4gICAgICAvLyBJdCdzIGEgaGlnaCBzdXJyb2dhdGUsIGFuZCB0aGVyZSBpcyBhIG5leHQgY2hhcmFjdGVyLlxuICAgICAgdmFyIGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcbiAgICAgIGlmICgoZXh0cmEgJiAweEZDMDApID09IDB4REMwMCkgeyAvLyBMb3cgc3Vycm9nYXRlLlxuICAgICAgICBvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSXQncyBhbiB1bm1hdGNoZWQgc3Vycm9nYXRlOyBvbmx5IGFwcGVuZCB0aGlzIGNvZGUgdW5pdCwgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gbmV4dCBjb2RlIHVuaXQgaXMgdGhlIGhpZ2ggc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXIuXG4gICAgICAgIG91dHB1dC5wdXNoKHZhbHVlKTtcbiAgICAgICAgY291bnRlci0tO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgZGlnaXQvaW50ZWdlciBpbnRvIGEgYmFzaWMgY29kZSBwb2ludC5cbiAqL1xudmFyIGRpZ2l0VG9CYXNpYyA9IGZ1bmN0aW9uIChkaWdpdCkge1xuICAvLyAgMC4uMjUgbWFwIHRvIEFTQ0lJIGEuLnogb3IgQS4uWlxuICAvLyAyNi4uMzUgbWFwIHRvIEFTQ0lJIDAuLjlcbiAgcmV0dXJuIGRpZ2l0ICsgMjIgKyA3NSAqIChkaWdpdCA8IDI2KTtcbn07XG5cbi8qKlxuICogQmlhcyBhZGFwdGF0aW9uIGZ1bmN0aW9uIGFzIHBlciBzZWN0aW9uIDMuNCBvZiBSRkMgMzQ5Mi5cbiAqIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzNDkyI3NlY3Rpb24tMy40XG4gKi9cbnZhciBhZGFwdCA9IGZ1bmN0aW9uIChkZWx0YSwgbnVtUG9pbnRzLCBmaXJzdFRpbWUpIHtcbiAgdmFyIGsgPSAwO1xuICBkZWx0YSA9IGZpcnN0VGltZSA/IGZsb29yKGRlbHRhIC8gZGFtcCkgOiBkZWx0YSA+PiAxO1xuICBkZWx0YSArPSBmbG9vcihkZWx0YSAvIG51bVBvaW50cyk7XG4gIGZvciAoOyBkZWx0YSA+IGJhc2VNaW51c1RNaW4gKiB0TWF4ID4+IDE7IGsgKz0gYmFzZSkge1xuICAgIGRlbHRhID0gZmxvb3IoZGVsdGEgLyBiYXNlTWludXNUTWluKTtcbiAgfVxuICByZXR1cm4gZmxvb3IoayArIChiYXNlTWludXNUTWluICsgMSkgKiBkZWx0YSAvIChkZWx0YSArIHNrZXcpKTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzIChlLmcuIGEgZG9tYWluIG5hbWUgbGFiZWwpIHRvIGFcbiAqIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgbWF4LXN0YXRlbWVudHNcbnZhciBlbmNvZGUgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuXG4gIC8vIENvbnZlcnQgdGhlIGlucHV0IGluIFVDUy0yIHRvIGFuIGFycmF5IG9mIFVuaWNvZGUgY29kZSBwb2ludHMuXG4gIGlucHV0ID0gdWNzMmRlY29kZShpbnB1dCk7XG5cbiAgLy8gQ2FjaGUgdGhlIGxlbmd0aC5cbiAgdmFyIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXG4gIC8vIEluaXRpYWxpemUgdGhlIHN0YXRlLlxuICB2YXIgbiA9IGluaXRpYWxOO1xuICB2YXIgZGVsdGEgPSAwO1xuICB2YXIgYmlhcyA9IGluaXRpYWxCaWFzO1xuICB2YXIgaSwgY3VycmVudFZhbHVlO1xuXG4gIC8vIEhhbmRsZSB0aGUgYmFzaWMgY29kZSBwb2ludHMuXG4gIGZvciAoaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgIGN1cnJlbnRWYWx1ZSA9IGlucHV0W2ldO1xuICAgIGlmIChjdXJyZW50VmFsdWUgPCAweDgwKSB7XG4gICAgICBvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoY3VycmVudFZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2ljTGVuZ3RoID0gb3V0cHV0Lmxlbmd0aDsgLy8gbnVtYmVyIG9mIGJhc2ljIGNvZGUgcG9pbnRzLlxuICB2YXIgaGFuZGxlZENQQ291bnQgPSBiYXNpY0xlbmd0aDsgLy8gbnVtYmVyIG9mIGNvZGUgcG9pbnRzIHRoYXQgaGF2ZSBiZWVuIGhhbmRsZWQ7XG5cbiAgLy8gRmluaXNoIHRoZSBiYXNpYyBzdHJpbmcgd2l0aCBhIGRlbGltaXRlciB1bmxlc3MgaXQncyBlbXB0eS5cbiAgaWYgKGJhc2ljTGVuZ3RoKSB7XG4gICAgb3V0cHV0LnB1c2goZGVsaW1pdGVyKTtcbiAgfVxuXG4gIC8vIE1haW4gZW5jb2RpbmcgbG9vcDpcbiAgd2hpbGUgKGhhbmRsZWRDUENvdW50IDwgaW5wdXRMZW5ndGgpIHtcbiAgICAvLyBBbGwgbm9uLWJhc2ljIGNvZGUgcG9pbnRzIDwgbiBoYXZlIGJlZW4gaGFuZGxlZCBhbHJlYWR5LiBGaW5kIHRoZSBuZXh0IGxhcmdlciBvbmU6XG4gICAgdmFyIG0gPSBtYXhJbnQ7XG4gICAgZm9yIChpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdXJyZW50VmFsdWUgPSBpbnB1dFtpXTtcbiAgICAgIGlmIChjdXJyZW50VmFsdWUgPj0gbiAmJiBjdXJyZW50VmFsdWUgPCBtKSB7XG4gICAgICAgIG0gPSBjdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW5jcmVhc2UgYGRlbHRhYCBlbm91Z2ggdG8gYWR2YW5jZSB0aGUgZGVjb2RlcidzIDxuLGk+IHN0YXRlIHRvIDxtLDA+LCBidXQgZ3VhcmQgYWdhaW5zdCBvdmVyZmxvdy5cbiAgICB2YXIgaGFuZGxlZENQQ291bnRQbHVzT25lID0gaGFuZGxlZENQQ291bnQgKyAxO1xuICAgIGlmIChtIC0gbiA+IGZsb29yKChtYXhJbnQgLSBkZWx0YSkgLyBoYW5kbGVkQ1BDb3VudFBsdXNPbmUpKSB7XG4gICAgICB0aHJvdyBSYW5nZUVycm9yKE9WRVJGTE9XX0VSUk9SKTtcbiAgICB9XG5cbiAgICBkZWx0YSArPSAobSAtIG4pICogaGFuZGxlZENQQ291bnRQbHVzT25lO1xuICAgIG4gPSBtO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdXJyZW50VmFsdWUgPSBpbnB1dFtpXTtcbiAgICAgIGlmIChjdXJyZW50VmFsdWUgPCBuICYmICsrZGVsdGEgPiBtYXhJbnQpIHtcbiAgICAgICAgdGhyb3cgUmFuZ2VFcnJvcihPVkVSRkxPV19FUlJPUik7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFZhbHVlID09IG4pIHtcbiAgICAgICAgLy8gUmVwcmVzZW50IGRlbHRhIGFzIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXIuXG4gICAgICAgIHZhciBxID0gZGVsdGE7XG4gICAgICAgIGZvciAodmFyIGsgPSBiYXNlOyAvKiBubyBjb25kaXRpb24gKi87IGsgKz0gYmFzZSkge1xuICAgICAgICAgIHZhciB0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcbiAgICAgICAgICBpZiAocSA8IHQpIGJyZWFrO1xuICAgICAgICAgIHZhciBxTWludXNUID0gcSAtIHQ7XG4gICAgICAgICAgdmFyIGJhc2VNaW51c1QgPSBiYXNlIC0gdDtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHQgKyBxTWludXNUICUgYmFzZU1pbnVzVCkpKTtcbiAgICAgICAgICBxID0gZmxvb3IocU1pbnVzVCAvIGJhc2VNaW51c1QpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyhxKSkpO1xuICAgICAgICBiaWFzID0gYWRhcHQoZGVsdGEsIGhhbmRsZWRDUENvdW50UGx1c09uZSwgaGFuZGxlZENQQ291bnQgPT0gYmFzaWNMZW5ndGgpO1xuICAgICAgICBkZWx0YSA9IDA7XG4gICAgICAgICsraGFuZGxlZENQQ291bnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgKytkZWx0YTtcbiAgICArK247XG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gIHZhciBlbmNvZGVkID0gW107XG4gIHZhciBsYWJlbHMgPSBpbnB1dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UocmVnZXhTZXBhcmF0b3JzLCAnXFx1MDAyRScpLnNwbGl0KCcuJyk7XG4gIHZhciBpLCBsYWJlbDtcbiAgZm9yIChpID0gMDsgaSA8IGxhYmVscy5sZW5ndGg7IGkrKykge1xuICAgIGxhYmVsID0gbGFiZWxzW2ldO1xuICAgIGVuY29kZWQucHVzaChyZWdleE5vbkFTQ0lJLnRlc3QobGFiZWwpID8gJ3huLS0nICsgZW5jb2RlKGxhYmVsKSA6IGxhYmVsKTtcbiAgfVxuICByZXR1cm4gZW5jb2RlZC5qb2luKCcuJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgdGVzdCA9IFtdO1xudmFyIG5hdGl2ZVNvcnQgPSB0ZXN0LnNvcnQ7XG5cbi8vIElFOC1cbnZhciBGQUlMU19PTl9VTkRFRklORUQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSk7XG4vLyBWOCBidWdcbnZhciBGQUlMU19PTl9OVUxMID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQobnVsbCk7XG59KTtcbi8vIE9sZCBXZWJLaXRcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnc29ydCcpO1xuXG52YXIgRk9SQ0VEID0gRkFJTFNfT05fVU5ERUZJTkVEIHx8ICFGQUlMU19PTl9OVUxMIHx8ICFTVFJJQ1RfTUVUSE9EO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNvcnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29ydFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pIHtcbiAgICByZXR1cm4gY29tcGFyZWZuID09PSB1bmRlZmluZWRcbiAgICAgID8gbmF0aXZlU29ydC5jYWxsKHRvT2JqZWN0KHRoaXMpKVxuICAgICAgOiBuYXRpdmVTb3J0LmNhbGwodG9PYmplY3QodGhpcyksIGFGdW5jdGlvbihjb21wYXJlZm4pKTtcbiAgfVxufSk7XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcblxudmFyIERhdGVQcm90b3R5cGUgPSBEYXRlLnByb3RvdHlwZTtcbnZhciBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJztcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIG5hdGl2ZURhdGVUb1N0cmluZyA9IERhdGVQcm90b3R5cGVbVE9fU1RSSU5HXTtcbnZhciBnZXRUaW1lID0gRGF0ZVByb3RvdHlwZS5nZXRUaW1lO1xuXG4vLyBgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1kYXRlLnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKG5ldyBEYXRlKE5hTikgKyAnJyAhPSBJTlZBTElEX0RBVEUpIHtcbiAgcmVkZWZpbmUoRGF0ZVByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgdmFsdWUgPSBnZXRUaW1lLmNhbGwodGhpcyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyBuYXRpdmVEYXRlVG9TdHJpbmcuY2FsbCh0aGlzKSA6IElOVkFMSURfREFURTtcbiAgfSk7XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcikpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogaW4gY29yZS1qc0A0LCBtb3ZlIC9tb2R1bGVzLyBkZXBlbmRlbmNpZXMgdG8gcHVibGljIGVudHJpZXMgZm9yIGJldHRlciBvcHRpbWl6YXRpb24gYnkgdG9vbHMgbGlrZSBgcHJlc2V0LWVudmBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3InKTtcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgVVNFX05BVElWRV9VUkwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXVybCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUtYWxsJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3RvcicpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBnZXRJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3InKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkZmV0Y2ggPSBnZXRCdWlsdEluKCdmZXRjaCcpO1xudmFyIEhlYWRlcnMgPSBnZXRCdWlsdEluKCdIZWFkZXJzJyk7XG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgVVJMX1NFQVJDSF9QQVJBTVMgPSAnVVJMU2VhcmNoUGFyYW1zJztcbnZhciBVUkxfU0VBUkNIX1BBUkFNU19JVEVSQVRPUiA9IFVSTF9TRUFSQ0hfUEFSQU1TICsgJ0l0ZXJhdG9yJztcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxQYXJhbXNTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFVSTF9TRUFSQ0hfUEFSQU1TKTtcbnZhciBnZXRJbnRlcm5hbEl0ZXJhdG9yU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihVUkxfU0VBUkNIX1BBUkFNU19JVEVSQVRPUik7XG5cbnZhciBwbHVzID0gL1xcKy9nO1xudmFyIHNlcXVlbmNlcyA9IEFycmF5KDQpO1xuXG52YXIgcGVyY2VudFNlcXVlbmNlID0gZnVuY3Rpb24gKGJ5dGVzKSB7XG4gIHJldHVybiBzZXF1ZW5jZXNbYnl0ZXMgLSAxXSB8fCAoc2VxdWVuY2VzW2J5dGVzIC0gMV0gPSBSZWdFeHAoJygoPzolW1xcXFxkYS1mXXsyfSl7JyArIGJ5dGVzICsgJ30pJywgJ2dpJykpO1xufTtcblxudmFyIHBlcmNlbnREZWNvZGUgPSBmdW5jdGlvbiAoc2VxdWVuY2UpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHNlcXVlbmNlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gc2VxdWVuY2U7XG4gIH1cbn07XG5cbnZhciBkZXNlcmlhbGl6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gaXQucmVwbGFjZShwbHVzLCAnICcpO1xuICB2YXIgYnl0ZXMgPSA0O1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB3aGlsZSAoYnl0ZXMpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKHBlcmNlbnRTZXF1ZW5jZShieXRlcy0tKSwgcGVyY2VudERlY29kZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5cbnZhciBmaW5kID0gL1shJygpfl18JTIwL2c7XG5cbnZhciByZXBsYWNlID0ge1xuICAnISc6ICclMjEnLFxuICBcIidcIjogJyUyNycsXG4gICcoJzogJyUyOCcsXG4gICcpJzogJyUyOScsXG4gICd+JzogJyU3RScsXG4gICclMjAnOiAnKydcbn07XG5cbnZhciByZXBsYWNlciA9IGZ1bmN0aW9uIChtYXRjaCkge1xuICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG59O1xuXG52YXIgc2VyaWFsaXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaXQpLnJlcGxhY2UoZmluZCwgcmVwbGFjZXIpO1xufTtcblxudmFyIHBhcnNlU2VhcmNoUGFyYW1zID0gZnVuY3Rpb24gKHJlc3VsdCwgcXVlcnkpIHtcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBxdWVyeS5zcGxpdCgnJicpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGF0dHJpYnV0ZSwgZW50cnk7XG4gICAgd2hpbGUgKGluZGV4IDwgYXR0cmlidXRlcy5sZW5ndGgpIHtcbiAgICAgIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNbaW5kZXgrK107XG4gICAgICBpZiAoYXR0cmlidXRlLmxlbmd0aCkge1xuICAgICAgICBlbnRyeSA9IGF0dHJpYnV0ZS5zcGxpdCgnPScpO1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAga2V5OiBkZXNlcmlhbGl6ZShlbnRyeS5zaGlmdCgpKSxcbiAgICAgICAgICB2YWx1ZTogZGVzZXJpYWxpemUoZW50cnkuam9pbignPScpKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnZhciB1cGRhdGVTZWFyY2hQYXJhbXMgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgdGhpcy5lbnRyaWVzLmxlbmd0aCA9IDA7XG4gIHBhcnNlU2VhcmNoUGFyYW1zKHRoaXMuZW50cmllcywgcXVlcnkpO1xufTtcblxudmFyIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gZnVuY3Rpb24gKHBhc3NlZCwgcmVxdWlyZWQpIHtcbiAgaWYgKHBhc3NlZCA8IHJlcXVpcmVkKSB0aHJvdyBUeXBlRXJyb3IoJ05vdCBlbm91Z2ggYXJndW1lbnRzJyk7XG59O1xuXG52YXIgVVJMU2VhcmNoUGFyYW1zSXRlcmF0b3IgPSBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yKGZ1bmN0aW9uIEl0ZXJhdG9yKHBhcmFtcywga2luZCkge1xuICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICB0eXBlOiBVUkxfU0VBUkNIX1BBUkFNU19JVEVSQVRPUixcbiAgICBpdGVyYXRvcjogZ2V0SXRlcmF0b3IoZ2V0SW50ZXJuYWxQYXJhbXNTdGF0ZShwYXJhbXMpLmVudHJpZXMpLFxuICAgIGtpbmQ6IGtpbmRcbiAgfSk7XG59LCAnSXRlcmF0b3InLCBmdW5jdGlvbiBuZXh0KCkge1xuICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbEl0ZXJhdG9yU3RhdGUodGhpcyk7XG4gIHZhciBraW5kID0gc3RhdGUua2luZDtcbiAgdmFyIHN0ZXAgPSBzdGF0ZS5pdGVyYXRvci5uZXh0KCk7XG4gIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gIGlmICghc3RlcC5kb25lKSB7XG4gICAgc3RlcC52YWx1ZSA9IGtpbmQgPT09ICdrZXlzJyA/IGVudHJ5LmtleSA6IGtpbmQgPT09ICd2YWx1ZXMnID8gZW50cnkudmFsdWUgOiBbZW50cnkua2V5LCBlbnRyeS52YWx1ZV07XG4gIH0gcmV0dXJuIHN0ZXA7XG59KTtcblxuLy8gYFVSTFNlYXJjaFBhcmFtc2AgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jaW50ZXJmYWNlLXVybHNlYXJjaHBhcmFtc1xudmFyIFVSTFNlYXJjaFBhcmFtc0NvbnN0cnVjdG9yID0gZnVuY3Rpb24gVVJMU2VhcmNoUGFyYW1zKC8qIGluaXQgKi8pIHtcbiAgYW5JbnN0YW5jZSh0aGlzLCBVUkxTZWFyY2hQYXJhbXNDb25zdHJ1Y3RvciwgVVJMX1NFQVJDSF9QQVJBTVMpO1xuICB2YXIgaW5pdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkO1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBlbnRyaWVzID0gW107XG4gIHZhciBpdGVyYXRvck1ldGhvZCwgaXRlcmF0b3IsIG5leHQsIHN0ZXAsIGVudHJ5SXRlcmF0b3IsIGVudHJ5TmV4dCwgZmlyc3QsIHNlY29uZCwga2V5O1xuXG4gIHNldEludGVybmFsU3RhdGUodGhhdCwge1xuICAgIHR5cGU6IFVSTF9TRUFSQ0hfUEFSQU1TLFxuICAgIGVudHJpZXM6IGVudHJpZXMsXG4gICAgdXBkYXRlVVJMOiBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sXG4gICAgdXBkYXRlU2VhcmNoUGFyYW1zOiB1cGRhdGVTZWFyY2hQYXJhbXNcbiAgfSk7XG5cbiAgaWYgKGluaXQgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChpc09iamVjdChpbml0KSkge1xuICAgICAgaXRlcmF0b3JNZXRob2QgPSBnZXRJdGVyYXRvck1ldGhvZChpbml0KTtcbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JNZXRob2QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaXRlcmF0b3IgPSBpdGVyYXRvck1ldGhvZC5jYWxsKGluaXQpO1xuICAgICAgICBuZXh0ID0gaXRlcmF0b3IubmV4dDtcbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IG5leHQuY2FsbChpdGVyYXRvcikpLmRvbmUpIHtcbiAgICAgICAgICBlbnRyeUl0ZXJhdG9yID0gZ2V0SXRlcmF0b3IoYW5PYmplY3Qoc3RlcC52YWx1ZSkpO1xuICAgICAgICAgIGVudHJ5TmV4dCA9IGVudHJ5SXRlcmF0b3IubmV4dDtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoZmlyc3QgPSBlbnRyeU5leHQuY2FsbChlbnRyeUl0ZXJhdG9yKSkuZG9uZSB8fFxuICAgICAgICAgICAgKHNlY29uZCA9IGVudHJ5TmV4dC5jYWxsKGVudHJ5SXRlcmF0b3IpKS5kb25lIHx8XG4gICAgICAgICAgICAhZW50cnlOZXh0LmNhbGwoZW50cnlJdGVyYXRvcikuZG9uZVxuICAgICAgICAgICkgdGhyb3cgVHlwZUVycm9yKCdFeHBlY3RlZCBzZXF1ZW5jZSB3aXRoIGxlbmd0aCAyJyk7XG4gICAgICAgICAgZW50cmllcy5wdXNoKHsga2V5OiBmaXJzdC52YWx1ZSArICcnLCB2YWx1ZTogc2Vjb25kLnZhbHVlICsgJycgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBmb3IgKGtleSBpbiBpbml0KSBpZiAoaGFzT3duKGluaXQsIGtleSkpIGVudHJpZXMucHVzaCh7IGtleToga2V5LCB2YWx1ZTogaW5pdFtrZXldICsgJycgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlU2VhcmNoUGFyYW1zKGVudHJpZXMsIHR5cGVvZiBpbml0ID09PSAnc3RyaW5nJyA/IGluaXQuY2hhckF0KDApID09PSAnPycgPyBpbml0LnNsaWNlKDEpIDogaW5pdCA6IGluaXQgKyAnJyk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlID0gVVJMU2VhcmNoUGFyYW1zQ29uc3RydWN0b3IucHJvdG90eXBlO1xuXG5yZWRlZmluZUFsbChVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUsIHtcbiAgLy8gYFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuYXBwZW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLyNkb20tdXJsc2VhcmNocGFyYW1zLWFwcGVuZFxuICBhcHBlbmQ6IGZ1bmN0aW9uIGFwcGVuZChuYW1lLCB2YWx1ZSkge1xuICAgIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGFyZ3VtZW50cy5sZW5ndGgsIDIpO1xuICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsUGFyYW1zU3RhdGUodGhpcyk7XG4gICAgc3RhdGUuZW50cmllcy5wdXNoKHsga2V5OiBuYW1lICsgJycsIHZhbHVlOiB2YWx1ZSArICcnIH0pO1xuICAgIHN0YXRlLnVwZGF0ZVVSTCgpO1xuICB9LFxuICAvLyBgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5kZWxldGVgIG1ldGhvZFxuICAvLyBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI2RvbS11cmxzZWFyY2hwYXJhbXMtZGVsZXRlXG4gICdkZWxldGUnOiBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGFyZ3VtZW50cy5sZW5ndGgsIDEpO1xuICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsUGFyYW1zU3RhdGUodGhpcyk7XG4gICAgdmFyIGVudHJpZXMgPSBzdGF0ZS5lbnRyaWVzO1xuICAgIHZhciBrZXkgPSBuYW1lICsgJyc7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB3aGlsZSAoaW5kZXggPCBlbnRyaWVzLmxlbmd0aCkge1xuICAgICAgaWYgKGVudHJpZXNbaW5kZXhdLmtleSA9PT0ga2V5KSBlbnRyaWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBlbHNlIGluZGV4Kys7XG4gICAgfVxuICAgIHN0YXRlLnVwZGF0ZVVSTCgpO1xuICB9LFxuICAvLyBgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5nZXRgIG1ldGhvZFxuICAvLyBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI2RvbS11cmxzZWFyY2hwYXJhbXMtZ2V0XG4gIGdldDogZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgICB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aChhcmd1bWVudHMubGVuZ3RoLCAxKTtcbiAgICB2YXIgZW50cmllcyA9IGdldEludGVybmFsUGFyYW1zU3RhdGUodGhpcykuZW50cmllcztcbiAgICB2YXIga2V5ID0gbmFtZSArICcnO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgZm9yICg7IGluZGV4IDwgZW50cmllcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChlbnRyaWVzW2luZGV4XS5rZXkgPT09IGtleSkgcmV0dXJuIGVudHJpZXNbaW5kZXhdLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgLy8gYFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuZ2V0QWxsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLyNkb20tdXJsc2VhcmNocGFyYW1zLWdldGFsbFxuICBnZXRBbGw6IGZ1bmN0aW9uIGdldEFsbChuYW1lKSB7XG4gICAgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGgoYXJndW1lbnRzLmxlbmd0aCwgMSk7XG4gICAgdmFyIGVudHJpZXMgPSBnZXRJbnRlcm5hbFBhcmFtc1N0YXRlKHRoaXMpLmVudHJpZXM7XG4gICAgdmFyIGtleSA9IG5hbWUgKyAnJztcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBmb3IgKDsgaW5kZXggPCBlbnRyaWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGVudHJpZXNbaW5kZXhdLmtleSA9PT0ga2V5KSByZXN1bHQucHVzaChlbnRyaWVzW2luZGV4XS52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG4gIC8vIGBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmhhc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jZG9tLXVybHNlYXJjaHBhcmFtcy1oYXNcbiAgaGFzOiBmdW5jdGlvbiBoYXMobmFtZSkge1xuICAgIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGFyZ3VtZW50cy5sZW5ndGgsIDEpO1xuICAgIHZhciBlbnRyaWVzID0gZ2V0SW50ZXJuYWxQYXJhbXNTdGF0ZSh0aGlzKS5lbnRyaWVzO1xuICAgIHZhciBrZXkgPSBuYW1lICsgJyc7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB3aGlsZSAoaW5kZXggPCBlbnRyaWVzLmxlbmd0aCkge1xuICAgICAgaWYgKGVudHJpZXNbaW5kZXgrK10ua2V5ID09PSBrZXkpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIC8vIGBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLnNldGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jZG9tLXVybHNlYXJjaHBhcmFtcy1zZXRcbiAgc2V0OiBmdW5jdGlvbiBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aChhcmd1bWVudHMubGVuZ3RoLCAxKTtcbiAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFBhcmFtc1N0YXRlKHRoaXMpO1xuICAgIHZhciBlbnRyaWVzID0gc3RhdGUuZW50cmllcztcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICB2YXIga2V5ID0gbmFtZSArICcnO1xuICAgIHZhciB2YWwgPSB2YWx1ZSArICcnO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGVudHJ5O1xuICAgIGZvciAoOyBpbmRleCA8IGVudHJpZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgICAgaWYgKGVudHJ5LmtleSA9PT0ga2V5KSB7XG4gICAgICAgIGlmIChmb3VuZCkgZW50cmllcy5zcGxpY2UoaW5kZXgtLSwgMSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBlbnRyeS52YWx1ZSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZvdW5kKSBlbnRyaWVzLnB1c2goeyBrZXk6IGtleSwgdmFsdWU6IHZhbCB9KTtcbiAgICBzdGF0ZS51cGRhdGVVUkwoKTtcbiAgfSxcbiAgLy8gYFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuc29ydGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jZG9tLXVybHNlYXJjaHBhcmFtcy1zb3J0XG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoKSB7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxQYXJhbXNTdGF0ZSh0aGlzKTtcbiAgICB2YXIgZW50cmllcyA9IHN0YXRlLmVudHJpZXM7XG4gICAgLy8gQXJyYXkjc29ydCBpcyBub3Qgc3RhYmxlIGluIHNvbWUgZW5naW5lc1xuICAgIHZhciBzbGljZSA9IGVudHJpZXMuc2xpY2UoKTtcbiAgICB2YXIgZW50cnksIGVudHJpZXNJbmRleCwgc2xpY2VJbmRleDtcbiAgICBlbnRyaWVzLmxlbmd0aCA9IDA7XG4gICAgZm9yIChzbGljZUluZGV4ID0gMDsgc2xpY2VJbmRleCA8IHNsaWNlLmxlbmd0aDsgc2xpY2VJbmRleCsrKSB7XG4gICAgICBlbnRyeSA9IHNsaWNlW3NsaWNlSW5kZXhdO1xuICAgICAgZm9yIChlbnRyaWVzSW5kZXggPSAwOyBlbnRyaWVzSW5kZXggPCBzbGljZUluZGV4OyBlbnRyaWVzSW5kZXgrKykge1xuICAgICAgICBpZiAoZW50cmllc1tlbnRyaWVzSW5kZXhdLmtleSA+IGVudHJ5LmtleSkge1xuICAgICAgICAgIGVudHJpZXMuc3BsaWNlKGVudHJpZXNJbmRleCwgMCwgZW50cnkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZW50cmllc0luZGV4ID09PSBzbGljZUluZGV4KSBlbnRyaWVzLnB1c2goZW50cnkpO1xuICAgIH1cbiAgICBzdGF0ZS51cGRhdGVVUkwoKTtcbiAgfSxcbiAgLy8gYFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2sgLyogLCB0aGlzQXJnICovKSB7XG4gICAgdmFyIGVudHJpZXMgPSBnZXRJbnRlcm5hbFBhcmFtc1N0YXRlKHRoaXMpLmVudHJpZXM7XG4gICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMyk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgZW50cnk7XG4gICAgd2hpbGUgKGluZGV4IDwgZW50cmllcy5sZW5ndGgpIHtcbiAgICAgIGVudHJ5ID0gZW50cmllc1tpbmRleCsrXTtcbiAgICAgIGJvdW5kRnVuY3Rpb24oZW50cnkudmFsdWUsIGVudHJ5LmtleSwgdGhpcyk7XG4gICAgfVxuICB9LFxuICAvLyBgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5rZXlzYCBtZXRob2RcbiAga2V5czogZnVuY3Rpb24ga2V5cygpIHtcbiAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtc0l0ZXJhdG9yKHRoaXMsICdrZXlzJyk7XG4gIH0sXG4gIC8vIGBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLnZhbHVlc2AgbWV0aG9kXG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKCkge1xuICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zSXRlcmF0b3IodGhpcywgJ3ZhbHVlcycpO1xuICB9LFxuICAvLyBgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5lbnRyaWVzYCBtZXRob2RcbiAgZW50cmllczogZnVuY3Rpb24gZW50cmllcygpIHtcbiAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtc0l0ZXJhdG9yKHRoaXMsICdlbnRyaWVzJyk7XG4gIH1cbn0sIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcblxuLy8gYFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGVbQEBpdGVyYXRvcl1gIG1ldGhvZFxucmVkZWZpbmUoVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLCBJVEVSQVRPUiwgVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLmVudHJpZXMpO1xuXG4vLyBgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHNlYXJjaHBhcmFtcy1zdHJpbmdpZmljYXRpb24tYmVoYXZpb3JcbnJlZGVmaW5lKFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHZhciBlbnRyaWVzID0gZ2V0SW50ZXJuYWxQYXJhbXNTdGF0ZSh0aGlzKS5lbnRyaWVzO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBlbnRyeTtcbiAgd2hpbGUgKGluZGV4IDwgZW50cmllcy5sZW5ndGgpIHtcbiAgICBlbnRyeSA9IGVudHJpZXNbaW5kZXgrK107XG4gICAgcmVzdWx0LnB1c2goc2VyaWFsaXplKGVudHJ5LmtleSkgKyAnPScgKyBzZXJpYWxpemUoZW50cnkudmFsdWUpKTtcbiAgfSByZXR1cm4gcmVzdWx0LmpvaW4oJyYnKTtcbn0sIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcblxuc2V0VG9TdHJpbmdUYWcoVVJMU2VhcmNoUGFyYW1zQ29uc3RydWN0b3IsIFVSTF9TRUFSQ0hfUEFSQU1TKTtcblxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiAhVVNFX05BVElWRV9VUkwgfSwge1xuICBVUkxTZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc0NvbnN0cnVjdG9yXG59KTtcblxuLy8gV3JhcCBgZmV0Y2hgIGZvciBjb3JyZWN0IHdvcmsgd2l0aCBwb2x5ZmlsbGVkIGBVUkxTZWFyY2hQYXJhbXNgXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc0XG5pZiAoIVVTRV9OQVRJVkVfVVJMICYmIHR5cGVvZiAkZmV0Y2ggPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgSGVhZGVycyA9PSAnZnVuY3Rpb24nKSB7XG4gICQoeyBnbG9iYWw6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG4gICAgZmV0Y2g6IGZ1bmN0aW9uIGZldGNoKGlucHV0IC8qICwgaW5pdCAqLykge1xuICAgICAgdmFyIGFyZ3MgPSBbaW5wdXRdO1xuICAgICAgdmFyIGluaXQsIGJvZHksIGhlYWRlcnM7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaW5pdCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgaWYgKGlzT2JqZWN0KGluaXQpKSB7XG4gICAgICAgICAgYm9keSA9IGluaXQuYm9keTtcbiAgICAgICAgICBpZiAoY2xhc3NvZihib2R5KSA9PT0gVVJMX1NFQVJDSF9QQVJBTVMpIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBpbml0LmhlYWRlcnMgPyBuZXcgSGVhZGVycyhpbml0LmhlYWRlcnMpIDogbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgICAgIGlmICghaGVhZGVycy5oYXMoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgICAgICAgIGhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluaXQgPSBjcmVhdGUoaW5pdCwge1xuICAgICAgICAgICAgICBib2R5OiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgU3RyaW5nKGJvZHkpKSxcbiAgICAgICAgICAgICAgaGVhZGVyczogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIGhlYWRlcnMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXJncy5wdXNoKGluaXQpO1xuICAgICAgfSByZXR1cm4gJGZldGNoLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBVUkxTZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc0NvbnN0cnVjdG9yLFxuICBnZXRTdGF0ZTogZ2V0SW50ZXJuYWxQYXJhbXNTdGF0ZVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IGluIGNvcmUtanNANCwgbW92ZSAvbW9kdWxlcy8gZGVwZW5kZW5jaWVzIHRvIHB1YmxpYyBlbnRyaWVzIGZvciBiZXR0ZXIgb3B0aW1pemF0aW9uIGJ5IHRvb2xzIGxpa2UgYHByZXNldC1lbnZgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvcicpO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBVU0VfTkFUSVZFX1VSTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtdXJsJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtYXNzaWduJyk7XG52YXIgYXJyYXlGcm9tID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZyb20nKTtcbnZhciBjb2RlQXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZScpLmNvZGVBdDtcbnZhciB0b0FTQ0lJID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1wdW55Y29kZS10by1hc2NpaScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgVVJMU2VhcmNoUGFyYW1zTW9kdWxlID0gcmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIudXJsLXNlYXJjaC1wYXJhbXMnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBOYXRpdmVVUkwgPSBnbG9iYWwuVVJMO1xudmFyIFVSTFNlYXJjaFBhcmFtcyA9IFVSTFNlYXJjaFBhcmFtc01vZHVsZS5VUkxTZWFyY2hQYXJhbXM7XG52YXIgZ2V0SW50ZXJuYWxTZWFyY2hQYXJhbXNTdGF0ZSA9IFVSTFNlYXJjaFBhcmFtc01vZHVsZS5nZXRTdGF0ZTtcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxVUkxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKCdVUkwnKTtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgcG93ID0gTWF0aC5wb3c7XG5cbnZhciBJTlZBTElEX0FVVEhPUklUWSA9ICdJbnZhbGlkIGF1dGhvcml0eSc7XG52YXIgSU5WQUxJRF9TQ0hFTUUgPSAnSW52YWxpZCBzY2hlbWUnO1xudmFyIElOVkFMSURfSE9TVCA9ICdJbnZhbGlkIGhvc3QnO1xudmFyIElOVkFMSURfUE9SVCA9ICdJbnZhbGlkIHBvcnQnO1xuXG52YXIgQUxQSEEgPSAvW0EtWmEtel0vO1xudmFyIEFMUEhBTlVNRVJJQyA9IC9bXFxkKy0uQS1aYS16XS87XG52YXIgRElHSVQgPSAvXFxkLztcbnZhciBIRVhfU1RBUlQgPSAvXigweHwwWCkvO1xudmFyIE9DVCA9IC9eWzAtN10rJC87XG52YXIgREVDID0gL15cXGQrJC87XG52YXIgSEVYID0gL15bXFxkQS1GYS1mXSskLztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG52YXIgRk9SQklEREVOX0hPU1RfQ09ERV9QT0lOVCA9IC9bXFx1MDAwMFxcdTAwMDlcXHUwMDBBXFx1MDAwRCAjJS86P0BbXFxcXF1dLztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG52YXIgRk9SQklEREVOX0hPU1RfQ09ERV9QT0lOVF9FWENMVURJTkdfUEVSQ0VOVCA9IC9bXFx1MDAwMFxcdTAwMDlcXHUwMDBBXFx1MDAwRCAjLzo/QFtcXFxcXV0vO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbnZhciBMRUFESU5HX0FORF9UUkFJTElOR19DMF9DT05UUk9MX09SX1NQQUNFID0gL15bXFx1MDAwMC1cXHUwMDFGIF0rfFtcXHUwMDAwLVxcdTAwMUYgXSskL2c7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udHJvbC1yZWdleFxudmFyIFRBQl9BTkRfTkVXX0xJTkUgPSAvW1xcdTAwMDlcXHUwMDBBXFx1MDAwRF0vZztcbnZhciBFT0Y7XG5cbnZhciBwYXJzZUhvc3QgPSBmdW5jdGlvbiAodXJsLCBpbnB1dCkge1xuICB2YXIgcmVzdWx0LCBjb2RlUG9pbnRzLCBpbmRleDtcbiAgaWYgKGlucHV0LmNoYXJBdCgwKSA9PSAnWycpIHtcbiAgICBpZiAoaW5wdXQuY2hhckF0KGlucHV0Lmxlbmd0aCAtIDEpICE9ICddJykgcmV0dXJuIElOVkFMSURfSE9TVDtcbiAgICByZXN1bHQgPSBwYXJzZUlQdjYoaW5wdXQuc2xpY2UoMSwgLTEpKTtcbiAgICBpZiAoIXJlc3VsdCkgcmV0dXJuIElOVkFMSURfSE9TVDtcbiAgICB1cmwuaG9zdCA9IHJlc3VsdDtcbiAgLy8gb3BhcXVlIGhvc3RcbiAgfSBlbHNlIGlmICghaXNTcGVjaWFsKHVybCkpIHtcbiAgICBpZiAoRk9SQklEREVOX0hPU1RfQ09ERV9QT0lOVF9FWENMVURJTkdfUEVSQ0VOVC50ZXN0KGlucHV0KSkgcmV0dXJuIElOVkFMSURfSE9TVDtcbiAgICByZXN1bHQgPSAnJztcbiAgICBjb2RlUG9pbnRzID0gYXJyYXlGcm9tKGlucHV0KTtcbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBjb2RlUG9pbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgcmVzdWx0ICs9IHBlcmNlbnRFbmNvZGUoY29kZVBvaW50c1tpbmRleF0sIEMwQ29udHJvbFBlcmNlbnRFbmNvZGVTZXQpO1xuICAgIH1cbiAgICB1cmwuaG9zdCA9IHJlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dCA9IHRvQVNDSUkoaW5wdXQpO1xuICAgIGlmIChGT1JCSURERU5fSE9TVF9DT0RFX1BPSU5ULnRlc3QoaW5wdXQpKSByZXR1cm4gSU5WQUxJRF9IT1NUO1xuICAgIHJlc3VsdCA9IHBhcnNlSVB2NChpbnB1dCk7XG4gICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgcmV0dXJuIElOVkFMSURfSE9TVDtcbiAgICB1cmwuaG9zdCA9IHJlc3VsdDtcbiAgfVxufTtcblxudmFyIHBhcnNlSVB2NCA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICB2YXIgcGFydHMgPSBpbnB1dC5zcGxpdCgnLicpO1xuICB2YXIgcGFydHNMZW5ndGgsIG51bWJlcnMsIGluZGV4LCBwYXJ0LCByYWRpeCwgbnVtYmVyLCBpcHY0O1xuICBpZiAocGFydHMubGVuZ3RoICYmIHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdID09ICcnKSB7XG4gICAgcGFydHMucG9wKCk7XG4gIH1cbiAgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG4gIGlmIChwYXJ0c0xlbmd0aCA+IDQpIHJldHVybiBpbnB1dDtcbiAgbnVtYmVycyA9IFtdO1xuICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBwYXJ0c0xlbmd0aDsgaW5kZXgrKykge1xuICAgIHBhcnQgPSBwYXJ0c1tpbmRleF07XG4gICAgaWYgKHBhcnQgPT0gJycpIHJldHVybiBpbnB1dDtcbiAgICByYWRpeCA9IDEwO1xuICAgIGlmIChwYXJ0Lmxlbmd0aCA+IDEgJiYgcGFydC5jaGFyQXQoMCkgPT0gJzAnKSB7XG4gICAgICByYWRpeCA9IEhFWF9TVEFSVC50ZXN0KHBhcnQpID8gMTYgOiA4O1xuICAgICAgcGFydCA9IHBhcnQuc2xpY2UocmFkaXggPT0gOCA/IDEgOiAyKTtcbiAgICB9XG4gICAgaWYgKHBhcnQgPT09ICcnKSB7XG4gICAgICBudW1iZXIgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIShyYWRpeCA9PSAxMCA/IERFQyA6IHJhZGl4ID09IDggPyBPQ1QgOiBIRVgpLnRlc3QocGFydCkpIHJldHVybiBpbnB1dDtcbiAgICAgIG51bWJlciA9IHBhcnNlSW50KHBhcnQsIHJhZGl4KTtcbiAgICB9XG4gICAgbnVtYmVycy5wdXNoKG51bWJlcik7XG4gIH1cbiAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgcGFydHNMZW5ndGg7IGluZGV4KyspIHtcbiAgICBudW1iZXIgPSBudW1iZXJzW2luZGV4XTtcbiAgICBpZiAoaW5kZXggPT0gcGFydHNMZW5ndGggLSAxKSB7XG4gICAgICBpZiAobnVtYmVyID49IHBvdygyNTYsIDUgLSBwYXJ0c0xlbmd0aCkpIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSBpZiAobnVtYmVyID4gMjU1KSByZXR1cm4gbnVsbDtcbiAgfVxuICBpcHY0ID0gbnVtYmVycy5wb3AoKTtcbiAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbnVtYmVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBpcHY0ICs9IG51bWJlcnNbaW5kZXhdICogcG93KDI1NiwgMyAtIGluZGV4KTtcbiAgfVxuICByZXR1cm4gaXB2NDtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtc3RhdGVtZW50c1xudmFyIHBhcnNlSVB2NiA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICB2YXIgYWRkcmVzcyA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcbiAgdmFyIHBpZWNlSW5kZXggPSAwO1xuICB2YXIgY29tcHJlc3MgPSBudWxsO1xuICB2YXIgcG9pbnRlciA9IDA7XG4gIHZhciB2YWx1ZSwgbGVuZ3RoLCBudW1iZXJzU2VlbiwgaXB2NFBpZWNlLCBudW1iZXIsIHN3YXBzLCBzd2FwO1xuXG4gIHZhciBjaGFyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpbnB1dC5jaGFyQXQocG9pbnRlcik7XG4gIH07XG5cbiAgaWYgKGNoYXIoKSA9PSAnOicpIHtcbiAgICBpZiAoaW5wdXQuY2hhckF0KDEpICE9ICc6JykgcmV0dXJuO1xuICAgIHBvaW50ZXIgKz0gMjtcbiAgICBwaWVjZUluZGV4Kys7XG4gICAgY29tcHJlc3MgPSBwaWVjZUluZGV4O1xuICB9XG4gIHdoaWxlIChjaGFyKCkpIHtcbiAgICBpZiAocGllY2VJbmRleCA9PSA4KSByZXR1cm47XG4gICAgaWYgKGNoYXIoKSA9PSAnOicpIHtcbiAgICAgIGlmIChjb21wcmVzcyAhPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgcG9pbnRlcisrO1xuICAgICAgcGllY2VJbmRleCsrO1xuICAgICAgY29tcHJlc3MgPSBwaWVjZUluZGV4O1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhbHVlID0gbGVuZ3RoID0gMDtcbiAgICB3aGlsZSAobGVuZ3RoIDwgNCAmJiBIRVgudGVzdChjaGFyKCkpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlICogMTYgKyBwYXJzZUludChjaGFyKCksIDE2KTtcbiAgICAgIHBvaW50ZXIrKztcbiAgICAgIGxlbmd0aCsrO1xuICAgIH1cbiAgICBpZiAoY2hhcigpID09ICcuJykge1xuICAgICAgaWYgKGxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgICBwb2ludGVyIC09IGxlbmd0aDtcbiAgICAgIGlmIChwaWVjZUluZGV4ID4gNikgcmV0dXJuO1xuICAgICAgbnVtYmVyc1NlZW4gPSAwO1xuICAgICAgd2hpbGUgKGNoYXIoKSkge1xuICAgICAgICBpcHY0UGllY2UgPSBudWxsO1xuICAgICAgICBpZiAobnVtYmVyc1NlZW4gPiAwKSB7XG4gICAgICAgICAgaWYgKGNoYXIoKSA9PSAnLicgJiYgbnVtYmVyc1NlZW4gPCA0KSBwb2ludGVyKys7XG4gICAgICAgICAgZWxzZSByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFESUdJVC50ZXN0KGNoYXIoKSkpIHJldHVybjtcbiAgICAgICAgd2hpbGUgKERJR0lULnRlc3QoY2hhcigpKSkge1xuICAgICAgICAgIG51bWJlciA9IHBhcnNlSW50KGNoYXIoKSwgMTApO1xuICAgICAgICAgIGlmIChpcHY0UGllY2UgPT09IG51bGwpIGlwdjRQaWVjZSA9IG51bWJlcjtcbiAgICAgICAgICBlbHNlIGlmIChpcHY0UGllY2UgPT0gMCkgcmV0dXJuO1xuICAgICAgICAgIGVsc2UgaXB2NFBpZWNlID0gaXB2NFBpZWNlICogMTAgKyBudW1iZXI7XG4gICAgICAgICAgaWYgKGlwdjRQaWVjZSA+IDI1NSkgcmV0dXJuO1xuICAgICAgICAgIHBvaW50ZXIrKztcbiAgICAgICAgfVxuICAgICAgICBhZGRyZXNzW3BpZWNlSW5kZXhdID0gYWRkcmVzc1twaWVjZUluZGV4XSAqIDI1NiArIGlwdjRQaWVjZTtcbiAgICAgICAgbnVtYmVyc1NlZW4rKztcbiAgICAgICAgaWYgKG51bWJlcnNTZWVuID09IDIgfHwgbnVtYmVyc1NlZW4gPT0gNCkgcGllY2VJbmRleCsrO1xuICAgICAgfVxuICAgICAgaWYgKG51bWJlcnNTZWVuICE9IDQpIHJldHVybjtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSBpZiAoY2hhcigpID09ICc6Jykge1xuICAgICAgcG9pbnRlcisrO1xuICAgICAgaWYgKCFjaGFyKCkpIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoYXIoKSkgcmV0dXJuO1xuICAgIGFkZHJlc3NbcGllY2VJbmRleCsrXSA9IHZhbHVlO1xuICB9XG4gIGlmIChjb21wcmVzcyAhPT0gbnVsbCkge1xuICAgIHN3YXBzID0gcGllY2VJbmRleCAtIGNvbXByZXNzO1xuICAgIHBpZWNlSW5kZXggPSA3O1xuICAgIHdoaWxlIChwaWVjZUluZGV4ICE9IDAgJiYgc3dhcHMgPiAwKSB7XG4gICAgICBzd2FwID0gYWRkcmVzc1twaWVjZUluZGV4XTtcbiAgICAgIGFkZHJlc3NbcGllY2VJbmRleC0tXSA9IGFkZHJlc3NbY29tcHJlc3MgKyBzd2FwcyAtIDFdO1xuICAgICAgYWRkcmVzc1tjb21wcmVzcyArIC0tc3dhcHNdID0gc3dhcDtcbiAgICB9XG4gIH0gZWxzZSBpZiAocGllY2VJbmRleCAhPSA4KSByZXR1cm47XG4gIHJldHVybiBhZGRyZXNzO1xufTtcblxudmFyIGZpbmRMb25nZXN0WmVyb1NlcXVlbmNlID0gZnVuY3Rpb24gKGlwdjYpIHtcbiAgdmFyIG1heEluZGV4ID0gbnVsbDtcbiAgdmFyIG1heExlbmd0aCA9IDE7XG4gIHZhciBjdXJyU3RhcnQgPSBudWxsO1xuICB2YXIgY3Vyckxlbmd0aCA9IDA7XG4gIHZhciBpbmRleCA9IDA7XG4gIGZvciAoOyBpbmRleCA8IDg7IGluZGV4KyspIHtcbiAgICBpZiAoaXB2NltpbmRleF0gIT09IDApIHtcbiAgICAgIGlmIChjdXJyTGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgIG1heEluZGV4ID0gY3VyclN0YXJ0O1xuICAgICAgICBtYXhMZW5ndGggPSBjdXJyTGVuZ3RoO1xuICAgICAgfVxuICAgICAgY3VyclN0YXJ0ID0gbnVsbDtcbiAgICAgIGN1cnJMZW5ndGggPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY3VyclN0YXJ0ID09PSBudWxsKSBjdXJyU3RhcnQgPSBpbmRleDtcbiAgICAgICsrY3Vyckxlbmd0aDtcbiAgICB9XG4gIH1cbiAgaWYgKGN1cnJMZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICBtYXhJbmRleCA9IGN1cnJTdGFydDtcbiAgICBtYXhMZW5ndGggPSBjdXJyTGVuZ3RoO1xuICB9XG4gIHJldHVybiBtYXhJbmRleDtcbn07XG5cbnZhciBzZXJpYWxpemVIb3N0ID0gZnVuY3Rpb24gKGhvc3QpIHtcbiAgdmFyIHJlc3VsdCwgaW5kZXgsIGNvbXByZXNzLCBpZ25vcmUwO1xuICAvLyBpcHY0XG4gIGlmICh0eXBlb2YgaG9zdCA9PSAnbnVtYmVyJykge1xuICAgIHJlc3VsdCA9IFtdO1xuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IDQ7IGluZGV4KyspIHtcbiAgICAgIHJlc3VsdC51bnNoaWZ0KGhvc3QgJSAyNTYpO1xuICAgICAgaG9zdCA9IGZsb29yKGhvc3QgLyAyNTYpO1xuICAgIH0gcmV0dXJuIHJlc3VsdC5qb2luKCcuJyk7XG4gIC8vIGlwdjZcbiAgfSBlbHNlIGlmICh0eXBlb2YgaG9zdCA9PSAnb2JqZWN0Jykge1xuICAgIHJlc3VsdCA9ICcnO1xuICAgIGNvbXByZXNzID0gZmluZExvbmdlc3RaZXJvU2VxdWVuY2UoaG9zdCk7XG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgODsgaW5kZXgrKykge1xuICAgICAgaWYgKGlnbm9yZTAgJiYgaG9zdFtpbmRleF0gPT09IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKGlnbm9yZTApIGlnbm9yZTAgPSBmYWxzZTtcbiAgICAgIGlmIChjb21wcmVzcyA9PT0gaW5kZXgpIHtcbiAgICAgICAgcmVzdWx0ICs9IGluZGV4ID8gJzonIDogJzo6JztcbiAgICAgICAgaWdub3JlMCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgKz0gaG9zdFtpbmRleF0udG9TdHJpbmcoMTYpO1xuICAgICAgICBpZiAoaW5kZXggPCA3KSByZXN1bHQgKz0gJzonO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJ1snICsgcmVzdWx0ICsgJ10nO1xuICB9IHJldHVybiBob3N0O1xufTtcblxudmFyIEMwQ29udHJvbFBlcmNlbnRFbmNvZGVTZXQgPSB7fTtcbnZhciBmcmFnbWVudFBlcmNlbnRFbmNvZGVTZXQgPSBhc3NpZ24oe30sIEMwQ29udHJvbFBlcmNlbnRFbmNvZGVTZXQsIHtcbiAgJyAnOiAxLCAnXCInOiAxLCAnPCc6IDEsICc+JzogMSwgJ2AnOiAxXG59KTtcbnZhciBwYXRoUGVyY2VudEVuY29kZVNldCA9IGFzc2lnbih7fSwgZnJhZ21lbnRQZXJjZW50RW5jb2RlU2V0LCB7XG4gICcjJzogMSwgJz8nOiAxLCAneyc6IDEsICd9JzogMVxufSk7XG52YXIgdXNlcmluZm9QZXJjZW50RW5jb2RlU2V0ID0gYXNzaWduKHt9LCBwYXRoUGVyY2VudEVuY29kZVNldCwge1xuICAnLyc6IDEsICc6JzogMSwgJzsnOiAxLCAnPSc6IDEsICdAJzogMSwgJ1snOiAxLCAnXFxcXCc6IDEsICddJzogMSwgJ14nOiAxLCAnfCc6IDFcbn0pO1xuXG52YXIgcGVyY2VudEVuY29kZSA9IGZ1bmN0aW9uIChjaGFyLCBzZXQpIHtcbiAgdmFyIGNvZGUgPSBjb2RlQXQoY2hhciwgMCk7XG4gIHJldHVybiBjb2RlID4gMHgyMCAmJiBjb2RlIDwgMHg3RiAmJiAhaGFzKHNldCwgY2hhcikgPyBjaGFyIDogZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpO1xufTtcblxudmFyIHNwZWNpYWxTY2hlbWVzID0ge1xuICBmdHA6IDIxLFxuICBmaWxlOiBudWxsLFxuICBodHRwOiA4MCxcbiAgaHR0cHM6IDQ0MyxcbiAgd3M6IDgwLFxuICB3c3M6IDQ0M1xufTtcblxudmFyIGlzU3BlY2lhbCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIGhhcyhzcGVjaWFsU2NoZW1lcywgdXJsLnNjaGVtZSk7XG59O1xuXG52YXIgaW5jbHVkZXNDcmVkZW50aWFscyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIHVybC51c2VybmFtZSAhPSAnJyB8fCB1cmwucGFzc3dvcmQgIT0gJyc7XG59O1xuXG52YXIgY2Fubm90SGF2ZVVzZXJuYW1lUGFzc3dvcmRQb3J0ID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gIXVybC5ob3N0IHx8IHVybC5jYW5ub3RCZUFCYXNlVVJMIHx8IHVybC5zY2hlbWUgPT0gJ2ZpbGUnO1xufTtcblxudmFyIGlzV2luZG93c0RyaXZlTGV0dGVyID0gZnVuY3Rpb24gKHN0cmluZywgbm9ybWFsaXplZCkge1xuICB2YXIgc2Vjb25kO1xuICByZXR1cm4gc3RyaW5nLmxlbmd0aCA9PSAyICYmIEFMUEhBLnRlc3Qoc3RyaW5nLmNoYXJBdCgwKSlcbiAgICAmJiAoKHNlY29uZCA9IHN0cmluZy5jaGFyQXQoMSkpID09ICc6JyB8fCAoIW5vcm1hbGl6ZWQgJiYgc2Vjb25kID09ICd8JykpO1xufTtcblxudmFyIHN0YXJ0c1dpdGhXaW5kb3dzRHJpdmVMZXR0ZXIgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHZhciB0aGlyZDtcbiAgcmV0dXJuIHN0cmluZy5sZW5ndGggPiAxICYmIGlzV2luZG93c0RyaXZlTGV0dGVyKHN0cmluZy5zbGljZSgwLCAyKSkgJiYgKFxuICAgIHN0cmluZy5sZW5ndGggPT0gMiB8fFxuICAgICgodGhpcmQgPSBzdHJpbmcuY2hhckF0KDIpKSA9PT0gJy8nIHx8IHRoaXJkID09PSAnXFxcXCcgfHwgdGhpcmQgPT09ICc/JyB8fCB0aGlyZCA9PT0gJyMnKVxuICApO1xufTtcblxudmFyIHNob3J0ZW5VUkxzUGF0aCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgdmFyIHBhdGggPSB1cmwucGF0aDtcbiAgdmFyIHBhdGhTaXplID0gcGF0aC5sZW5ndGg7XG4gIGlmIChwYXRoU2l6ZSAmJiAodXJsLnNjaGVtZSAhPSAnZmlsZScgfHwgcGF0aFNpemUgIT0gMSB8fCAhaXNXaW5kb3dzRHJpdmVMZXR0ZXIocGF0aFswXSwgdHJ1ZSkpKSB7XG4gICAgcGF0aC5wb3AoKTtcbiAgfVxufTtcblxudmFyIGlzU2luZ2xlRG90ID0gZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgcmV0dXJuIHNlZ21lbnQgPT09ICcuJyB8fCBzZWdtZW50LnRvTG93ZXJDYXNlKCkgPT09ICclMmUnO1xufTtcblxudmFyIGlzRG91YmxlRG90ID0gZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgc2VnbWVudCA9IHNlZ21lbnQudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIHNlZ21lbnQgPT09ICcuLicgfHwgc2VnbWVudCA9PT0gJyUyZS4nIHx8IHNlZ21lbnQgPT09ICcuJTJlJyB8fCBzZWdtZW50ID09PSAnJTJlJTJlJztcbn07XG5cbi8vIFN0YXRlczpcbnZhciBTQ0hFTUVfU1RBUlQgPSB7fTtcbnZhciBTQ0hFTUUgPSB7fTtcbnZhciBOT19TQ0hFTUUgPSB7fTtcbnZhciBTUEVDSUFMX1JFTEFUSVZFX09SX0FVVEhPUklUWSA9IHt9O1xudmFyIFBBVEhfT1JfQVVUSE9SSVRZID0ge307XG52YXIgUkVMQVRJVkUgPSB7fTtcbnZhciBSRUxBVElWRV9TTEFTSCA9IHt9O1xudmFyIFNQRUNJQUxfQVVUSE9SSVRZX1NMQVNIRVMgPSB7fTtcbnZhciBTUEVDSUFMX0FVVEhPUklUWV9JR05PUkVfU0xBU0hFUyA9IHt9O1xudmFyIEFVVEhPUklUWSA9IHt9O1xudmFyIEhPU1QgPSB7fTtcbnZhciBIT1NUTkFNRSA9IHt9O1xudmFyIFBPUlQgPSB7fTtcbnZhciBGSUxFID0ge307XG52YXIgRklMRV9TTEFTSCA9IHt9O1xudmFyIEZJTEVfSE9TVCA9IHt9O1xudmFyIFBBVEhfU1RBUlQgPSB7fTtcbnZhciBQQVRIID0ge307XG52YXIgQ0FOTk9UX0JFX0FfQkFTRV9VUkxfUEFUSCA9IHt9O1xudmFyIFFVRVJZID0ge307XG52YXIgRlJBR01FTlQgPSB7fTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1zdGF0ZW1lbnRzXG52YXIgcGFyc2VVUkwgPSBmdW5jdGlvbiAodXJsLCBpbnB1dCwgc3RhdGVPdmVycmlkZSwgYmFzZSkge1xuICB2YXIgc3RhdGUgPSBzdGF0ZU92ZXJyaWRlIHx8IFNDSEVNRV9TVEFSVDtcbiAgdmFyIHBvaW50ZXIgPSAwO1xuICB2YXIgYnVmZmVyID0gJyc7XG4gIHZhciBzZWVuQXQgPSBmYWxzZTtcbiAgdmFyIHNlZW5CcmFja2V0ID0gZmFsc2U7XG4gIHZhciBzZWVuUGFzc3dvcmRUb2tlbiA9IGZhbHNlO1xuICB2YXIgY29kZVBvaW50cywgY2hhciwgYnVmZmVyQ29kZVBvaW50cywgZmFpbHVyZTtcblxuICBpZiAoIXN0YXRlT3ZlcnJpZGUpIHtcbiAgICB1cmwuc2NoZW1lID0gJyc7XG4gICAgdXJsLnVzZXJuYW1lID0gJyc7XG4gICAgdXJsLnBhc3N3b3JkID0gJyc7XG4gICAgdXJsLmhvc3QgPSBudWxsO1xuICAgIHVybC5wb3J0ID0gbnVsbDtcbiAgICB1cmwucGF0aCA9IFtdO1xuICAgIHVybC5xdWVyeSA9IG51bGw7XG4gICAgdXJsLmZyYWdtZW50ID0gbnVsbDtcbiAgICB1cmwuY2Fubm90QmVBQmFzZVVSTCA9IGZhbHNlO1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZShMRUFESU5HX0FORF9UUkFJTElOR19DMF9DT05UUk9MX09SX1NQQUNFLCAnJyk7XG4gIH1cblxuICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoVEFCX0FORF9ORVdfTElORSwgJycpO1xuXG4gIGNvZGVQb2ludHMgPSBhcnJheUZyb20oaW5wdXQpO1xuXG4gIHdoaWxlIChwb2ludGVyIDw9IGNvZGVQb2ludHMubGVuZ3RoKSB7XG4gICAgY2hhciA9IGNvZGVQb2ludHNbcG9pbnRlcl07XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgY2FzZSBTQ0hFTUVfU1RBUlQ6XG4gICAgICAgIGlmIChjaGFyICYmIEFMUEhBLnRlc3QoY2hhcikpIHtcbiAgICAgICAgICBidWZmZXIgKz0gY2hhci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHN0YXRlID0gU0NIRU1FO1xuICAgICAgICB9IGVsc2UgaWYgKCFzdGF0ZU92ZXJyaWRlKSB7XG4gICAgICAgICAgc3RhdGUgPSBOT19TQ0hFTUU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gSU5WQUxJRF9TQ0hFTUU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNDSEVNRTpcbiAgICAgICAgaWYgKGNoYXIgJiYgKEFMUEhBTlVNRVJJQy50ZXN0KGNoYXIpIHx8IGNoYXIgPT0gJysnIHx8IGNoYXIgPT0gJy0nIHx8IGNoYXIgPT0gJy4nKSkge1xuICAgICAgICAgIGJ1ZmZlciArPSBjaGFyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PSAnOicpIHtcbiAgICAgICAgICBpZiAoc3RhdGVPdmVycmlkZSAmJiAoXG4gICAgICAgICAgICAoaXNTcGVjaWFsKHVybCkgIT0gaGFzKHNwZWNpYWxTY2hlbWVzLCBidWZmZXIpKSB8fFxuICAgICAgICAgICAgKGJ1ZmZlciA9PSAnZmlsZScgJiYgKGluY2x1ZGVzQ3JlZGVudGlhbHModXJsKSB8fCB1cmwucG9ydCAhPT0gbnVsbCkpIHx8XG4gICAgICAgICAgICAodXJsLnNjaGVtZSA9PSAnZmlsZScgJiYgIXVybC5ob3N0KVxuICAgICAgICAgICkpIHJldHVybjtcbiAgICAgICAgICB1cmwuc2NoZW1lID0gYnVmZmVyO1xuICAgICAgICAgIGlmIChzdGF0ZU92ZXJyaWRlKSB7XG4gICAgICAgICAgICBpZiAoaXNTcGVjaWFsKHVybCkgJiYgc3BlY2lhbFNjaGVtZXNbdXJsLnNjaGVtZV0gPT0gdXJsLnBvcnQpIHVybC5wb3J0ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnVmZmVyID0gJyc7XG4gICAgICAgICAgaWYgKHVybC5zY2hlbWUgPT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEZJTEU7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc1NwZWNpYWwodXJsKSAmJiBiYXNlICYmIGJhc2Uuc2NoZW1lID09IHVybC5zY2hlbWUpIHtcbiAgICAgICAgICAgIHN0YXRlID0gU1BFQ0lBTF9SRUxBVElWRV9PUl9BVVRIT1JJVFk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc1NwZWNpYWwodXJsKSkge1xuICAgICAgICAgICAgc3RhdGUgPSBTUEVDSUFMX0FVVEhPUklUWV9TTEFTSEVTO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29kZVBvaW50c1twb2ludGVyICsgMV0gPT0gJy8nKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IFBBVEhfT1JfQVVUSE9SSVRZO1xuICAgICAgICAgICAgcG9pbnRlcisrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmwuY2Fubm90QmVBQmFzZVVSTCA9IHRydWU7XG4gICAgICAgICAgICB1cmwucGF0aC5wdXNoKCcnKTtcbiAgICAgICAgICAgIHN0YXRlID0gQ0FOTk9UX0JFX0FfQkFTRV9VUkxfUEFUSDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIXN0YXRlT3ZlcnJpZGUpIHtcbiAgICAgICAgICBidWZmZXIgPSAnJztcbiAgICAgICAgICBzdGF0ZSA9IE5PX1NDSEVNRTtcbiAgICAgICAgICBwb2ludGVyID0gMDtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBJTlZBTElEX1NDSEVNRTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTk9fU0NIRU1FOlxuICAgICAgICBpZiAoIWJhc2UgfHwgKGJhc2UuY2Fubm90QmVBQmFzZVVSTCAmJiBjaGFyICE9ICcjJykpIHJldHVybiBJTlZBTElEX1NDSEVNRTtcbiAgICAgICAgaWYgKGJhc2UuY2Fubm90QmVBQmFzZVVSTCAmJiBjaGFyID09ICcjJykge1xuICAgICAgICAgIHVybC5zY2hlbWUgPSBiYXNlLnNjaGVtZTtcbiAgICAgICAgICB1cmwucGF0aCA9IGJhc2UucGF0aC5zbGljZSgpO1xuICAgICAgICAgIHVybC5xdWVyeSA9IGJhc2UucXVlcnk7XG4gICAgICAgICAgdXJsLmZyYWdtZW50ID0gJyc7XG4gICAgICAgICAgdXJsLmNhbm5vdEJlQUJhc2VVUkwgPSB0cnVlO1xuICAgICAgICAgIHN0YXRlID0gRlJBR01FTlQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUgPSBiYXNlLnNjaGVtZSA9PSAnZmlsZScgPyBGSUxFIDogUkVMQVRJVkU7XG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBjYXNlIFNQRUNJQUxfUkVMQVRJVkVfT1JfQVVUSE9SSVRZOlxuICAgICAgICBpZiAoY2hhciA9PSAnLycgJiYgY29kZVBvaW50c1twb2ludGVyICsgMV0gPT0gJy8nKSB7XG4gICAgICAgICAgc3RhdGUgPSBTUEVDSUFMX0FVVEhPUklUWV9JR05PUkVfU0xBU0hFUztcbiAgICAgICAgICBwb2ludGVyKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGUgPSBSRUxBVElWRTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBicmVhaztcblxuICAgICAgY2FzZSBQQVRIX09SX0FVVEhPUklUWTpcbiAgICAgICAgaWYgKGNoYXIgPT0gJy8nKSB7XG4gICAgICAgICAgc3RhdGUgPSBBVVRIT1JJVFk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGUgPSBQQVRIO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVMQVRJVkU6XG4gICAgICAgIHVybC5zY2hlbWUgPSBiYXNlLnNjaGVtZTtcbiAgICAgICAgaWYgKGNoYXIgPT0gRU9GKSB7XG4gICAgICAgICAgdXJsLnVzZXJuYW1lID0gYmFzZS51c2VybmFtZTtcbiAgICAgICAgICB1cmwucGFzc3dvcmQgPSBiYXNlLnBhc3N3b3JkO1xuICAgICAgICAgIHVybC5ob3N0ID0gYmFzZS5ob3N0O1xuICAgICAgICAgIHVybC5wb3J0ID0gYmFzZS5wb3J0O1xuICAgICAgICAgIHVybC5wYXRoID0gYmFzZS5wYXRoLnNsaWNlKCk7XG4gICAgICAgICAgdXJsLnF1ZXJ5ID0gYmFzZS5xdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyID09ICcvJyB8fCAoY2hhciA9PSAnXFxcXCcgJiYgaXNTcGVjaWFsKHVybCkpKSB7XG4gICAgICAgICAgc3RhdGUgPSBSRUxBVElWRV9TTEFTSDtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyID09ICc/Jykge1xuICAgICAgICAgIHVybC51c2VybmFtZSA9IGJhc2UudXNlcm5hbWU7XG4gICAgICAgICAgdXJsLnBhc3N3b3JkID0gYmFzZS5wYXNzd29yZDtcbiAgICAgICAgICB1cmwuaG9zdCA9IGJhc2UuaG9zdDtcbiAgICAgICAgICB1cmwucG9ydCA9IGJhc2UucG9ydDtcbiAgICAgICAgICB1cmwucGF0aCA9IGJhc2UucGF0aC5zbGljZSgpO1xuICAgICAgICAgIHVybC5xdWVyeSA9ICcnO1xuICAgICAgICAgIHN0YXRlID0gUVVFUlk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PSAnIycpIHtcbiAgICAgICAgICB1cmwudXNlcm5hbWUgPSBiYXNlLnVzZXJuYW1lO1xuICAgICAgICAgIHVybC5wYXNzd29yZCA9IGJhc2UucGFzc3dvcmQ7XG4gICAgICAgICAgdXJsLmhvc3QgPSBiYXNlLmhvc3Q7XG4gICAgICAgICAgdXJsLnBvcnQgPSBiYXNlLnBvcnQ7XG4gICAgICAgICAgdXJsLnBhdGggPSBiYXNlLnBhdGguc2xpY2UoKTtcbiAgICAgICAgICB1cmwucXVlcnkgPSBiYXNlLnF1ZXJ5O1xuICAgICAgICAgIHVybC5mcmFnbWVudCA9ICcnO1xuICAgICAgICAgIHN0YXRlID0gRlJBR01FTlQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXJsLnVzZXJuYW1lID0gYmFzZS51c2VybmFtZTtcbiAgICAgICAgICB1cmwucGFzc3dvcmQgPSBiYXNlLnBhc3N3b3JkO1xuICAgICAgICAgIHVybC5ob3N0ID0gYmFzZS5ob3N0O1xuICAgICAgICAgIHVybC5wb3J0ID0gYmFzZS5wb3J0O1xuICAgICAgICAgIHVybC5wYXRoID0gYmFzZS5wYXRoLnNsaWNlKCk7XG4gICAgICAgICAgdXJsLnBhdGgucG9wKCk7XG4gICAgICAgICAgc3RhdGUgPSBQQVRIO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGJyZWFrO1xuXG4gICAgICBjYXNlIFJFTEFUSVZFX1NMQVNIOlxuICAgICAgICBpZiAoaXNTcGVjaWFsKHVybCkgJiYgKGNoYXIgPT0gJy8nIHx8IGNoYXIgPT0gJ1xcXFwnKSkge1xuICAgICAgICAgIHN0YXRlID0gU1BFQ0lBTF9BVVRIT1JJVFlfSUdOT1JFX1NMQVNIRVM7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PSAnLycpIHtcbiAgICAgICAgICBzdGF0ZSA9IEFVVEhPUklUWTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cmwudXNlcm5hbWUgPSBiYXNlLnVzZXJuYW1lO1xuICAgICAgICAgIHVybC5wYXNzd29yZCA9IGJhc2UucGFzc3dvcmQ7XG4gICAgICAgICAgdXJsLmhvc3QgPSBiYXNlLmhvc3Q7XG4gICAgICAgICAgdXJsLnBvcnQgPSBiYXNlLnBvcnQ7XG4gICAgICAgICAgc3RhdGUgPSBQQVRIO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGJyZWFrO1xuXG4gICAgICBjYXNlIFNQRUNJQUxfQVVUSE9SSVRZX1NMQVNIRVM6XG4gICAgICAgIHN0YXRlID0gU1BFQ0lBTF9BVVRIT1JJVFlfSUdOT1JFX1NMQVNIRVM7XG4gICAgICAgIGlmIChjaGFyICE9ICcvJyB8fCBidWZmZXIuY2hhckF0KHBvaW50ZXIgKyAxKSAhPSAnLycpIGNvbnRpbnVlO1xuICAgICAgICBwb2ludGVyKys7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNQRUNJQUxfQVVUSE9SSVRZX0lHTk9SRV9TTEFTSEVTOlxuICAgICAgICBpZiAoY2hhciAhPSAnLycgJiYgY2hhciAhPSAnXFxcXCcpIHtcbiAgICAgICAgICBzdGF0ZSA9IEFVVEhPUklUWTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBicmVhaztcblxuICAgICAgY2FzZSBBVVRIT1JJVFk6XG4gICAgICAgIGlmIChjaGFyID09ICdAJykge1xuICAgICAgICAgIGlmIChzZWVuQXQpIGJ1ZmZlciA9ICclNDAnICsgYnVmZmVyO1xuICAgICAgICAgIHNlZW5BdCA9IHRydWU7XG4gICAgICAgICAgYnVmZmVyQ29kZVBvaW50cyA9IGFycmF5RnJvbShidWZmZXIpO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnVmZmVyQ29kZVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvZGVQb2ludCA9IGJ1ZmZlckNvZGVQb2ludHNbaV07XG4gICAgICAgICAgICBpZiAoY29kZVBvaW50ID09ICc6JyAmJiAhc2VlblBhc3N3b3JkVG9rZW4pIHtcbiAgICAgICAgICAgICAgc2VlblBhc3N3b3JkVG9rZW4gPSB0cnVlO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlbmNvZGVkQ29kZVBvaW50cyA9IHBlcmNlbnRFbmNvZGUoY29kZVBvaW50LCB1c2VyaW5mb1BlcmNlbnRFbmNvZGVTZXQpO1xuICAgICAgICAgICAgaWYgKHNlZW5QYXNzd29yZFRva2VuKSB1cmwucGFzc3dvcmQgKz0gZW5jb2RlZENvZGVQb2ludHM7XG4gICAgICAgICAgICBlbHNlIHVybC51c2VybmFtZSArPSBlbmNvZGVkQ29kZVBvaW50cztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnVmZmVyID0gJyc7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgY2hhciA9PSBFT0YgfHwgY2hhciA9PSAnLycgfHwgY2hhciA9PSAnPycgfHwgY2hhciA9PSAnIycgfHxcbiAgICAgICAgICAoY2hhciA9PSAnXFxcXCcgJiYgaXNTcGVjaWFsKHVybCkpXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChzZWVuQXQgJiYgYnVmZmVyID09ICcnKSByZXR1cm4gSU5WQUxJRF9BVVRIT1JJVFk7XG4gICAgICAgICAgcG9pbnRlciAtPSBhcnJheUZyb20oYnVmZmVyKS5sZW5ndGggKyAxO1xuICAgICAgICAgIGJ1ZmZlciA9ICcnO1xuICAgICAgICAgIHN0YXRlID0gSE9TVDtcbiAgICAgICAgfSBlbHNlIGJ1ZmZlciArPSBjaGFyO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBIT1NUOlxuICAgICAgY2FzZSBIT1NUTkFNRTpcbiAgICAgICAgaWYgKHN0YXRlT3ZlcnJpZGUgJiYgdXJsLnNjaGVtZSA9PSAnZmlsZScpIHtcbiAgICAgICAgICBzdGF0ZSA9IEZJTEVfSE9TVDtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyID09ICc6JyAmJiAhc2VlbkJyYWNrZXQpIHtcbiAgICAgICAgICBpZiAoYnVmZmVyID09ICcnKSByZXR1cm4gSU5WQUxJRF9IT1NUO1xuICAgICAgICAgIGZhaWx1cmUgPSBwYXJzZUhvc3QodXJsLCBidWZmZXIpO1xuICAgICAgICAgIGlmIChmYWlsdXJlKSByZXR1cm4gZmFpbHVyZTtcbiAgICAgICAgICBidWZmZXIgPSAnJztcbiAgICAgICAgICBzdGF0ZSA9IFBPUlQ7XG4gICAgICAgICAgaWYgKHN0YXRlT3ZlcnJpZGUgPT0gSE9TVE5BTUUpIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBjaGFyID09IEVPRiB8fCBjaGFyID09ICcvJyB8fCBjaGFyID09ICc/JyB8fCBjaGFyID09ICcjJyB8fFxuICAgICAgICAgIChjaGFyID09ICdcXFxcJyAmJiBpc1NwZWNpYWwodXJsKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKGlzU3BlY2lhbCh1cmwpICYmIGJ1ZmZlciA9PSAnJykgcmV0dXJuIElOVkFMSURfSE9TVDtcbiAgICAgICAgICBpZiAoc3RhdGVPdmVycmlkZSAmJiBidWZmZXIgPT0gJycgJiYgKGluY2x1ZGVzQ3JlZGVudGlhbHModXJsKSB8fCB1cmwucG9ydCAhPT0gbnVsbCkpIHJldHVybjtcbiAgICAgICAgICBmYWlsdXJlID0gcGFyc2VIb3N0KHVybCwgYnVmZmVyKTtcbiAgICAgICAgICBpZiAoZmFpbHVyZSkgcmV0dXJuIGZhaWx1cmU7XG4gICAgICAgICAgYnVmZmVyID0gJyc7XG4gICAgICAgICAgc3RhdGUgPSBQQVRIX1NUQVJUO1xuICAgICAgICAgIGlmIChzdGF0ZU92ZXJyaWRlKSByZXR1cm47XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNoYXIgPT0gJ1snKSBzZWVuQnJhY2tldCA9IHRydWU7XG4gICAgICAgICAgZWxzZSBpZiAoY2hhciA9PSAnXScpIHNlZW5CcmFja2V0ID0gZmFsc2U7XG4gICAgICAgICAgYnVmZmVyICs9IGNoYXI7XG4gICAgICAgIH0gYnJlYWs7XG5cbiAgICAgIGNhc2UgUE9SVDpcbiAgICAgICAgaWYgKERJR0lULnRlc3QoY2hhcikpIHtcbiAgICAgICAgICBidWZmZXIgKz0gY2hhcjtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBjaGFyID09IEVPRiB8fCBjaGFyID09ICcvJyB8fCBjaGFyID09ICc/JyB8fCBjaGFyID09ICcjJyB8fFxuICAgICAgICAgIChjaGFyID09ICdcXFxcJyAmJiBpc1NwZWNpYWwodXJsKSkgfHxcbiAgICAgICAgICBzdGF0ZU92ZXJyaWRlXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChidWZmZXIgIT0gJycpIHtcbiAgICAgICAgICAgIHZhciBwb3J0ID0gcGFyc2VJbnQoYnVmZmVyLCAxMCk7XG4gICAgICAgICAgICBpZiAocG9ydCA+IDB4RkZGRikgcmV0dXJuIElOVkFMSURfUE9SVDtcbiAgICAgICAgICAgIHVybC5wb3J0ID0gKGlzU3BlY2lhbCh1cmwpICYmIHBvcnQgPT09IHNwZWNpYWxTY2hlbWVzW3VybC5zY2hlbWVdKSA/IG51bGwgOiBwb3J0O1xuICAgICAgICAgICAgYnVmZmVyID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGF0ZU92ZXJyaWRlKSByZXR1cm47XG4gICAgICAgICAgc3RhdGUgPSBQQVRIX1NUQVJUO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIElOVkFMSURfUE9SVDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRklMRTpcbiAgICAgICAgdXJsLnNjaGVtZSA9ICdmaWxlJztcbiAgICAgICAgaWYgKGNoYXIgPT0gJy8nIHx8IGNoYXIgPT0gJ1xcXFwnKSBzdGF0ZSA9IEZJTEVfU0xBU0g7XG4gICAgICAgIGVsc2UgaWYgKGJhc2UgJiYgYmFzZS5zY2hlbWUgPT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgaWYgKGNoYXIgPT0gRU9GKSB7XG4gICAgICAgICAgICB1cmwuaG9zdCA9IGJhc2UuaG9zdDtcbiAgICAgICAgICAgIHVybC5wYXRoID0gYmFzZS5wYXRoLnNsaWNlKCk7XG4gICAgICAgICAgICB1cmwucXVlcnkgPSBiYXNlLnF1ZXJ5O1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PSAnPycpIHtcbiAgICAgICAgICAgIHVybC5ob3N0ID0gYmFzZS5ob3N0O1xuICAgICAgICAgICAgdXJsLnBhdGggPSBiYXNlLnBhdGguc2xpY2UoKTtcbiAgICAgICAgICAgIHVybC5xdWVyeSA9ICcnO1xuICAgICAgICAgICAgc3RhdGUgPSBRVUVSWTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNoYXIgPT0gJyMnKSB7XG4gICAgICAgICAgICB1cmwuaG9zdCA9IGJhc2UuaG9zdDtcbiAgICAgICAgICAgIHVybC5wYXRoID0gYmFzZS5wYXRoLnNsaWNlKCk7XG4gICAgICAgICAgICB1cmwucXVlcnkgPSBiYXNlLnF1ZXJ5O1xuICAgICAgICAgICAgdXJsLmZyYWdtZW50ID0gJyc7XG4gICAgICAgICAgICBzdGF0ZSA9IEZSQUdNRU5UO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXN0YXJ0c1dpdGhXaW5kb3dzRHJpdmVMZXR0ZXIoY29kZVBvaW50cy5zbGljZShwb2ludGVyKS5qb2luKCcnKSkpIHtcbiAgICAgICAgICAgICAgdXJsLmhvc3QgPSBiYXNlLmhvc3Q7XG4gICAgICAgICAgICAgIHVybC5wYXRoID0gYmFzZS5wYXRoLnNsaWNlKCk7XG4gICAgICAgICAgICAgIHNob3J0ZW5VUkxzUGF0aCh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdGUgPSBQQVRIO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlID0gUEFUSDtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBicmVhaztcblxuICAgICAgY2FzZSBGSUxFX1NMQVNIOlxuICAgICAgICBpZiAoY2hhciA9PSAnLycgfHwgY2hhciA9PSAnXFxcXCcpIHtcbiAgICAgICAgICBzdGF0ZSA9IEZJTEVfSE9TVDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmFzZSAmJiBiYXNlLnNjaGVtZSA9PSAnZmlsZScgJiYgIXN0YXJ0c1dpdGhXaW5kb3dzRHJpdmVMZXR0ZXIoY29kZVBvaW50cy5zbGljZShwb2ludGVyKS5qb2luKCcnKSkpIHtcbiAgICAgICAgICBpZiAoaXNXaW5kb3dzRHJpdmVMZXR0ZXIoYmFzZS5wYXRoWzBdLCB0cnVlKSkgdXJsLnBhdGgucHVzaChiYXNlLnBhdGhbMF0pO1xuICAgICAgICAgIGVsc2UgdXJsLmhvc3QgPSBiYXNlLmhvc3Q7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUgPSBQQVRIO1xuICAgICAgICBjb250aW51ZTtcblxuICAgICAgY2FzZSBGSUxFX0hPU1Q6XG4gICAgICAgIGlmIChjaGFyID09IEVPRiB8fCBjaGFyID09ICcvJyB8fCBjaGFyID09ICdcXFxcJyB8fCBjaGFyID09ICc/JyB8fCBjaGFyID09ICcjJykge1xuICAgICAgICAgIGlmICghc3RhdGVPdmVycmlkZSAmJiBpc1dpbmRvd3NEcml2ZUxldHRlcihidWZmZXIpKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IFBBVEg7XG4gICAgICAgICAgfSBlbHNlIGlmIChidWZmZXIgPT0gJycpIHtcbiAgICAgICAgICAgIHVybC5ob3N0ID0gJyc7XG4gICAgICAgICAgICBpZiAoc3RhdGVPdmVycmlkZSkgcmV0dXJuO1xuICAgICAgICAgICAgc3RhdGUgPSBQQVRIX1NUQVJUO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmYWlsdXJlID0gcGFyc2VIb3N0KHVybCwgYnVmZmVyKTtcbiAgICAgICAgICAgIGlmIChmYWlsdXJlKSByZXR1cm4gZmFpbHVyZTtcbiAgICAgICAgICAgIGlmICh1cmwuaG9zdCA9PSAnbG9jYWxob3N0JykgdXJsLmhvc3QgPSAnJztcbiAgICAgICAgICAgIGlmIChzdGF0ZU92ZXJyaWRlKSByZXR1cm47XG4gICAgICAgICAgICBidWZmZXIgPSAnJztcbiAgICAgICAgICAgIHN0YXRlID0gUEFUSF9TVEFSVDtcbiAgICAgICAgICB9IGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2UgYnVmZmVyICs9IGNoYXI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFBBVEhfU1RBUlQ6XG4gICAgICAgIGlmIChpc1NwZWNpYWwodXJsKSkge1xuICAgICAgICAgIHN0YXRlID0gUEFUSDtcbiAgICAgICAgICBpZiAoY2hhciAhPSAnLycgJiYgY2hhciAhPSAnXFxcXCcpIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFzdGF0ZU92ZXJyaWRlICYmIGNoYXIgPT0gJz8nKSB7XG4gICAgICAgICAgdXJsLnF1ZXJ5ID0gJyc7XG4gICAgICAgICAgc3RhdGUgPSBRVUVSWTtcbiAgICAgICAgfSBlbHNlIGlmICghc3RhdGVPdmVycmlkZSAmJiBjaGFyID09ICcjJykge1xuICAgICAgICAgIHVybC5mcmFnbWVudCA9ICcnO1xuICAgICAgICAgIHN0YXRlID0gRlJBR01FTlQ7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhciAhPSBFT0YpIHtcbiAgICAgICAgICBzdGF0ZSA9IFBBVEg7XG4gICAgICAgICAgaWYgKGNoYXIgIT0gJy8nKSBjb250aW51ZTtcbiAgICAgICAgfSBicmVhaztcblxuICAgICAgY2FzZSBQQVRIOlxuICAgICAgICBpZiAoXG4gICAgICAgICAgY2hhciA9PSBFT0YgfHwgY2hhciA9PSAnLycgfHxcbiAgICAgICAgICAoY2hhciA9PSAnXFxcXCcgJiYgaXNTcGVjaWFsKHVybCkpIHx8XG4gICAgICAgICAgKCFzdGF0ZU92ZXJyaWRlICYmIChjaGFyID09ICc/JyB8fCBjaGFyID09ICcjJykpXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChpc0RvdWJsZURvdChidWZmZXIpKSB7XG4gICAgICAgICAgICBzaG9ydGVuVVJMc1BhdGgodXJsKTtcbiAgICAgICAgICAgIGlmIChjaGFyICE9ICcvJyAmJiAhKGNoYXIgPT0gJ1xcXFwnICYmIGlzU3BlY2lhbCh1cmwpKSkge1xuICAgICAgICAgICAgICB1cmwucGF0aC5wdXNoKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGlzU2luZ2xlRG90KGJ1ZmZlcikpIHtcbiAgICAgICAgICAgIGlmIChjaGFyICE9ICcvJyAmJiAhKGNoYXIgPT0gJ1xcXFwnICYmIGlzU3BlY2lhbCh1cmwpKSkge1xuICAgICAgICAgICAgICB1cmwucGF0aC5wdXNoKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHVybC5zY2hlbWUgPT0gJ2ZpbGUnICYmICF1cmwucGF0aC5sZW5ndGggJiYgaXNXaW5kb3dzRHJpdmVMZXR0ZXIoYnVmZmVyKSkge1xuICAgICAgICAgICAgICBpZiAodXJsLmhvc3QpIHVybC5ob3N0ID0gJyc7XG4gICAgICAgICAgICAgIGJ1ZmZlciA9IGJ1ZmZlci5jaGFyQXQoMCkgKyAnOic7IC8vIG5vcm1hbGl6ZSB3aW5kb3dzIGRyaXZlIGxldHRlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsLnBhdGgucHVzaChidWZmZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidWZmZXIgPSAnJztcbiAgICAgICAgICBpZiAodXJsLnNjaGVtZSA9PSAnZmlsZScgJiYgKGNoYXIgPT0gRU9GIHx8IGNoYXIgPT0gJz8nIHx8IGNoYXIgPT0gJyMnKSkge1xuICAgICAgICAgICAgd2hpbGUgKHVybC5wYXRoLmxlbmd0aCA+IDEgJiYgdXJsLnBhdGhbMF0gPT09ICcnKSB7XG4gICAgICAgICAgICAgIHVybC5wYXRoLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjaGFyID09ICc/Jykge1xuICAgICAgICAgICAgdXJsLnF1ZXJ5ID0gJyc7XG4gICAgICAgICAgICBzdGF0ZSA9IFFVRVJZO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PSAnIycpIHtcbiAgICAgICAgICAgIHVybC5mcmFnbWVudCA9ICcnO1xuICAgICAgICAgICAgc3RhdGUgPSBGUkFHTUVOVDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnVmZmVyICs9IHBlcmNlbnRFbmNvZGUoY2hhciwgcGF0aFBlcmNlbnRFbmNvZGVTZXQpO1xuICAgICAgICB9IGJyZWFrO1xuXG4gICAgICBjYXNlIENBTk5PVF9CRV9BX0JBU0VfVVJMX1BBVEg6XG4gICAgICAgIGlmIChjaGFyID09ICc/Jykge1xuICAgICAgICAgIHVybC5xdWVyeSA9ICcnO1xuICAgICAgICAgIHN0YXRlID0gUVVFUlk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhciA9PSAnIycpIHtcbiAgICAgICAgICB1cmwuZnJhZ21lbnQgPSAnJztcbiAgICAgICAgICBzdGF0ZSA9IEZSQUdNRU5UO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXIgIT0gRU9GKSB7XG4gICAgICAgICAgdXJsLnBhdGhbMF0gKz0gcGVyY2VudEVuY29kZShjaGFyLCBDMENvbnRyb2xQZXJjZW50RW5jb2RlU2V0KTtcbiAgICAgICAgfSBicmVhaztcblxuICAgICAgY2FzZSBRVUVSWTpcbiAgICAgICAgaWYgKCFzdGF0ZU92ZXJyaWRlICYmIGNoYXIgPT0gJyMnKSB7XG4gICAgICAgICAgdXJsLmZyYWdtZW50ID0gJyc7XG4gICAgICAgICAgc3RhdGUgPSBGUkFHTUVOVDtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyICE9IEVPRikge1xuICAgICAgICAgIGlmIChjaGFyID09IFwiJ1wiICYmIGlzU3BlY2lhbCh1cmwpKSB1cmwucXVlcnkgKz0gJyUyNyc7XG4gICAgICAgICAgZWxzZSBpZiAoY2hhciA9PSAnIycpIHVybC5xdWVyeSArPSAnJTIzJztcbiAgICAgICAgICBlbHNlIHVybC5xdWVyeSArPSBwZXJjZW50RW5jb2RlKGNoYXIsIEMwQ29udHJvbFBlcmNlbnRFbmNvZGVTZXQpO1xuICAgICAgICB9IGJyZWFrO1xuXG4gICAgICBjYXNlIEZSQUdNRU5UOlxuICAgICAgICBpZiAoY2hhciAhPSBFT0YpIHVybC5mcmFnbWVudCArPSBwZXJjZW50RW5jb2RlKGNoYXIsIGZyYWdtZW50UGVyY2VudEVuY29kZVNldCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHBvaW50ZXIrKztcbiAgfVxufTtcblxuLy8gYFVSTGAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsLWNsYXNzXG52YXIgVVJMQ29uc3RydWN0b3IgPSBmdW5jdGlvbiBVUkwodXJsIC8qICwgYmFzZSAqLykge1xuICB2YXIgdGhhdCA9IGFuSW5zdGFuY2UodGhpcywgVVJMQ29uc3RydWN0b3IsICdVUkwnKTtcbiAgdmFyIGJhc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgdmFyIHVybFN0cmluZyA9IFN0cmluZyh1cmwpO1xuICB2YXIgc3RhdGUgPSBzZXRJbnRlcm5hbFN0YXRlKHRoYXQsIHsgdHlwZTogJ1VSTCcgfSk7XG4gIHZhciBiYXNlU3RhdGUsIGZhaWx1cmU7XG4gIGlmIChiYXNlICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoYmFzZSBpbnN0YW5jZW9mIFVSTENvbnN0cnVjdG9yKSBiYXNlU3RhdGUgPSBnZXRJbnRlcm5hbFVSTFN0YXRlKGJhc2UpO1xuICAgIGVsc2Uge1xuICAgICAgZmFpbHVyZSA9IHBhcnNlVVJMKGJhc2VTdGF0ZSA9IHt9LCBTdHJpbmcoYmFzZSkpO1xuICAgICAgaWYgKGZhaWx1cmUpIHRocm93IFR5cGVFcnJvcihmYWlsdXJlKTtcbiAgICB9XG4gIH1cbiAgZmFpbHVyZSA9IHBhcnNlVVJMKHN0YXRlLCB1cmxTdHJpbmcsIG51bGwsIGJhc2VTdGF0ZSk7XG4gIGlmIChmYWlsdXJlKSB0aHJvdyBUeXBlRXJyb3IoZmFpbHVyZSk7XG4gIHZhciBzZWFyY2hQYXJhbXMgPSBzdGF0ZS5zZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gIHZhciBzZWFyY2hQYXJhbXNTdGF0ZSA9IGdldEludGVybmFsU2VhcmNoUGFyYW1zU3RhdGUoc2VhcmNoUGFyYW1zKTtcbiAgc2VhcmNoUGFyYW1zU3RhdGUudXBkYXRlU2VhcmNoUGFyYW1zKHN0YXRlLnF1ZXJ5KTtcbiAgc2VhcmNoUGFyYW1zU3RhdGUudXBkYXRlVVJMID0gZnVuY3Rpb24gKCkge1xuICAgIHN0YXRlLnF1ZXJ5ID0gU3RyaW5nKHNlYXJjaFBhcmFtcykgfHwgbnVsbDtcbiAgfTtcbiAgaWYgKCFERVNDUklQVE9SUykge1xuICAgIHRoYXQuaHJlZiA9IHNlcmlhbGl6ZVVSTC5jYWxsKHRoYXQpO1xuICAgIHRoYXQub3JpZ2luID0gZ2V0T3JpZ2luLmNhbGwodGhhdCk7XG4gICAgdGhhdC5wcm90b2NvbCA9IGdldFByb3RvY29sLmNhbGwodGhhdCk7XG4gICAgdGhhdC51c2VybmFtZSA9IGdldFVzZXJuYW1lLmNhbGwodGhhdCk7XG4gICAgdGhhdC5wYXNzd29yZCA9IGdldFBhc3N3b3JkLmNhbGwodGhhdCk7XG4gICAgdGhhdC5ob3N0ID0gZ2V0SG9zdC5jYWxsKHRoYXQpO1xuICAgIHRoYXQuaG9zdG5hbWUgPSBnZXRIb3N0bmFtZS5jYWxsKHRoYXQpO1xuICAgIHRoYXQucG9ydCA9IGdldFBvcnQuY2FsbCh0aGF0KTtcbiAgICB0aGF0LnBhdGhuYW1lID0gZ2V0UGF0aG5hbWUuY2FsbCh0aGF0KTtcbiAgICB0aGF0LnNlYXJjaCA9IGdldFNlYXJjaC5jYWxsKHRoYXQpO1xuICAgIHRoYXQuc2VhcmNoUGFyYW1zID0gZ2V0U2VhcmNoUGFyYW1zLmNhbGwodGhhdCk7XG4gICAgdGhhdC5oYXNoID0gZ2V0SGFzaC5jYWxsKHRoYXQpO1xuICB9XG59O1xuXG52YXIgVVJMUHJvdG90eXBlID0gVVJMQ29uc3RydWN0b3IucHJvdG90eXBlO1xuXG52YXIgc2VyaWFsaXplVVJMID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdXJsID0gZ2V0SW50ZXJuYWxVUkxTdGF0ZSh0aGlzKTtcbiAgdmFyIHNjaGVtZSA9IHVybC5zY2hlbWU7XG4gIHZhciB1c2VybmFtZSA9IHVybC51c2VybmFtZTtcbiAgdmFyIHBhc3N3b3JkID0gdXJsLnBhc3N3b3JkO1xuICB2YXIgaG9zdCA9IHVybC5ob3N0O1xuICB2YXIgcG9ydCA9IHVybC5wb3J0O1xuICB2YXIgcGF0aCA9IHVybC5wYXRoO1xuICB2YXIgcXVlcnkgPSB1cmwucXVlcnk7XG4gIHZhciBmcmFnbWVudCA9IHVybC5mcmFnbWVudDtcbiAgdmFyIG91dHB1dCA9IHNjaGVtZSArICc6JztcbiAgaWYgKGhvc3QgIT09IG51bGwpIHtcbiAgICBvdXRwdXQgKz0gJy8vJztcbiAgICBpZiAoaW5jbHVkZXNDcmVkZW50aWFscyh1cmwpKSB7XG4gICAgICBvdXRwdXQgKz0gdXNlcm5hbWUgKyAocGFzc3dvcmQgPyAnOicgKyBwYXNzd29yZCA6ICcnKSArICdAJztcbiAgICB9XG4gICAgb3V0cHV0ICs9IHNlcmlhbGl6ZUhvc3QoaG9zdCk7XG4gICAgaWYgKHBvcnQgIT09IG51bGwpIG91dHB1dCArPSAnOicgKyBwb3J0O1xuICB9IGVsc2UgaWYgKHNjaGVtZSA9PSAnZmlsZScpIG91dHB1dCArPSAnLy8nO1xuICBvdXRwdXQgKz0gdXJsLmNhbm5vdEJlQUJhc2VVUkwgPyBwYXRoWzBdIDogcGF0aC5sZW5ndGggPyAnLycgKyBwYXRoLmpvaW4oJy8nKSA6ICcnO1xuICBpZiAocXVlcnkgIT09IG51bGwpIG91dHB1dCArPSAnPycgKyBxdWVyeTtcbiAgaWYgKGZyYWdtZW50ICE9PSBudWxsKSBvdXRwdXQgKz0gJyMnICsgZnJhZ21lbnQ7XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG52YXIgZ2V0T3JpZ2luID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdXJsID0gZ2V0SW50ZXJuYWxVUkxTdGF0ZSh0aGlzKTtcbiAgdmFyIHNjaGVtZSA9IHVybC5zY2hlbWU7XG4gIHZhciBwb3J0ID0gdXJsLnBvcnQ7XG4gIGlmIChzY2hlbWUgPT0gJ2Jsb2InKSB0cnkge1xuICAgIHJldHVybiBuZXcgVVJMKHNjaGVtZS5wYXRoWzBdKS5vcmlnaW47XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuICBpZiAoc2NoZW1lID09ICdmaWxlJyB8fCAhaXNTcGVjaWFsKHVybCkpIHJldHVybiAnbnVsbCc7XG4gIHJldHVybiBzY2hlbWUgKyAnOi8vJyArIHNlcmlhbGl6ZUhvc3QodXJsLmhvc3QpICsgKHBvcnQgIT09IG51bGwgPyAnOicgKyBwb3J0IDogJycpO1xufTtcblxudmFyIGdldFByb3RvY29sID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZ2V0SW50ZXJuYWxVUkxTdGF0ZSh0aGlzKS5zY2hlbWUgKyAnOic7XG59O1xuXG52YXIgZ2V0VXNlcm5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBnZXRJbnRlcm5hbFVSTFN0YXRlKHRoaXMpLnVzZXJuYW1lO1xufTtcblxudmFyIGdldFBhc3N3b3JkID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZ2V0SW50ZXJuYWxVUkxTdGF0ZSh0aGlzKS5wYXNzd29yZDtcbn07XG5cbnZhciBnZXRIb3N0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdXJsID0gZ2V0SW50ZXJuYWxVUkxTdGF0ZSh0aGlzKTtcbiAgdmFyIGhvc3QgPSB1cmwuaG9zdDtcbiAgdmFyIHBvcnQgPSB1cmwucG9ydDtcbiAgcmV0dXJuIGhvc3QgPT09IG51bGwgPyAnJ1xuICAgIDogcG9ydCA9PT0gbnVsbCA/IHNlcmlhbGl6ZUhvc3QoaG9zdClcbiAgICA6IHNlcmlhbGl6ZUhvc3QoaG9zdCkgKyAnOicgKyBwb3J0O1xufTtcblxudmFyIGdldEhvc3RuYW1lID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaG9zdCA9IGdldEludGVybmFsVVJMU3RhdGUodGhpcykuaG9zdDtcbiAgcmV0dXJuIGhvc3QgPT09IG51bGwgPyAnJyA6IHNlcmlhbGl6ZUhvc3QoaG9zdCk7XG59O1xuXG52YXIgZ2V0UG9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHBvcnQgPSBnZXRJbnRlcm5hbFVSTFN0YXRlKHRoaXMpLnBvcnQ7XG4gIHJldHVybiBwb3J0ID09PSBudWxsID8gJycgOiBTdHJpbmcocG9ydCk7XG59O1xuXG52YXIgZ2V0UGF0aG5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB1cmwgPSBnZXRJbnRlcm5hbFVSTFN0YXRlKHRoaXMpO1xuICB2YXIgcGF0aCA9IHVybC5wYXRoO1xuICByZXR1cm4gdXJsLmNhbm5vdEJlQUJhc2VVUkwgPyBwYXRoWzBdIDogcGF0aC5sZW5ndGggPyAnLycgKyBwYXRoLmpvaW4oJy8nKSA6ICcnO1xufTtcblxudmFyIGdldFNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHF1ZXJ5ID0gZ2V0SW50ZXJuYWxVUkxTdGF0ZSh0aGlzKS5xdWVyeTtcbiAgcmV0dXJuIHF1ZXJ5ID8gJz8nICsgcXVlcnkgOiAnJztcbn07XG5cbnZhciBnZXRTZWFyY2hQYXJhbXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBnZXRJbnRlcm5hbFVSTFN0YXRlKHRoaXMpLnNlYXJjaFBhcmFtcztcbn07XG5cbnZhciBnZXRIYXNoID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZnJhZ21lbnQgPSBnZXRJbnRlcm5hbFVSTFN0YXRlKHRoaXMpLmZyYWdtZW50O1xuICByZXR1cm4gZnJhZ21lbnQgPyAnIycgKyBmcmFnbWVudCA6ICcnO1xufTtcblxudmFyIGFjY2Vzc29yRGVzY3JpcHRvciA9IGZ1bmN0aW9uIChnZXR0ZXIsIHNldHRlcikge1xuICByZXR1cm4geyBnZXQ6IGdldHRlciwgc2V0OiBzZXR0ZXIsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogdHJ1ZSB9O1xufTtcblxuaWYgKERFU0NSSVBUT1JTKSB7XG4gIGRlZmluZVByb3BlcnRpZXMoVVJMUHJvdG90eXBlLCB7XG4gICAgLy8gYFVSTC5wcm90b3R5cGUuaHJlZmAgYWNjZXNzb3JzIHBhaXJcbiAgICAvLyBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI2RvbS11cmwtaHJlZlxuICAgIGhyZWY6IGFjY2Vzc29yRGVzY3JpcHRvcihzZXJpYWxpemVVUkwsIGZ1bmN0aW9uIChocmVmKSB7XG4gICAgICB2YXIgdXJsID0gZ2V0SW50ZXJuYWxVUkxTdGF0ZSh0aGlzKTtcbiAgICAgIHZhciB1cmxTdHJpbmcgPSBTdHJpbmcoaHJlZik7XG4gICAgICB2YXIgZmFpbHVyZSA9IHBhcnNlVVJMKHVybCwgdXJsU3RyaW5nKTtcbiAgICAgIGlmIChmYWlsdXJlKSB0aHJvdyBUeXBlRXJyb3IoZmFpbHVyZSk7XG4gICAgICBnZXRJbnRlcm5hbFNlYXJjaFBhcmFtc1N0YXRlKHVybC5zZWFyY2hQYXJhbXMpLnVwZGF0ZVNlYXJjaFBhcmFtcyh1cmwucXVlcnkpO1xuICAgIH0pLFxuICAgIC8vIGBVUkwucHJvdG90eXBlLm9yaWdpbmAgZ2V0dGVyXG4gICAgLy8gaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLyNkb20tdXJsLW9yaWdpblxuICAgIG9yaWdpbjogYWNjZXNzb3JEZXNjcmlwdG9yKGdldE9yaWdpbiksXG4gICAgLy8gYFVSTC5wcm90b3R5cGUucHJvdG9jb2xgIGFjY2Vzc29ycyBwYWlyXG4gICAgLy8gaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLyNkb20tdXJsLXByb3RvY29sXG4gICAgcHJvdG9jb2w6IGFjY2Vzc29yRGVzY3JpcHRvcihnZXRQcm90b2NvbCwgZnVuY3Rpb24gKHByb3RvY29sKSB7XG4gICAgICB2YXIgdXJsID0gZ2V0SW50ZXJuYWxVUkxTdGF0ZSh0aGlzKTtcbiAgICAgIHBhcnNlVVJMKHVybCwgU3RyaW5nKHByb3RvY29sKSArICc6JywgU0NIRU1FX1NUQVJUKTtcbiAgICB9KSxcbiAgICAvLyBgVVJMLnByb3RvdHlwZS51c2VybmFtZWAgYWNjZXNzb3JzIHBhaXJcbiAgICAvLyBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI2RvbS11cmwtdXNlcm5hbWVcbiAgICB1c2VybmFtZTogYWNjZXNzb3JEZXNjcmlwdG9yKGdldFVzZXJuYW1lLCBmdW5jdGlvbiAodXNlcm5hbWUpIHtcbiAgICAgIHZhciB1cmwgPSBnZXRJbnRlcm5hbFVSTFN0YXRlKHRoaXMpO1xuICAgICAgdmFyIGNvZGVQb2ludHMgPSBhcnJheUZyb20oU3RyaW5nKHVzZXJuYW1lKSk7XG4gICAgICBpZiAoY2Fubm90SGF2ZVVzZXJuYW1lUGFzc3dvcmRQb3J0KHVybCkpIHJldHVybjtcbiAgICAgIHVybC51c2VybmFtZSA9ICcnO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2RlUG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHVybC51c2VybmFtZSArPSBwZXJjZW50RW5jb2RlKGNvZGVQb2ludHNbaV0sIHVzZXJpbmZvUGVyY2VudEVuY29kZVNldCk7XG4gICAgICB9XG4gICAgfSksXG4gICAgLy8gYFVSTC5wcm90b3R5cGUucGFzc3dvcmRgIGFjY2Vzc29ycyBwYWlyXG4gICAgLy8gaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLyNkb20tdXJsLXBhc3N3b3JkXG4gICAgcGFzc3dvcmQ6IGFjY2Vzc29yRGVzY3JpcHRvcihnZXRQYXNzd29yZCwgZnVuY3Rpb24gKHBhc3N3b3JkKSB7XG4gICAgICB2YXIgdXJsID0gZ2V0SW50ZXJuYWxVUkxTdGF0ZSh0aGlzKTtcbiAgICAgIHZhciBjb2RlUG9pbnRzID0gYXJyYXlGcm9tKFN0cmluZyhwYXNzd29yZCkpO1xuICAgICAgaWYgKGNhbm5vdEhhdmVVc2VybmFtZVBhc3N3b3JkUG9ydCh1cmwpKSByZXR1cm47XG4gICAgICB1cmwucGFzc3dvcmQgPSAnJztcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29kZVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB1cmwucGFzc3dvcmQgKz0gcGVyY2VudEVuY29kZShjb2RlUG9pbnRzW2ldLCB1c2VyaW5mb1BlcmNlbnRFbmNvZGVTZXQpO1xuICAgICAgfVxuICAgIH0pLFxuICAgIC8vIGBVUkwucHJvdG90eXBlLmhvc3RgIGFjY2Vzc29ycyBwYWlyXG4gICAgLy8gaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLyNkb20tdXJsLWhvc3RcbiAgICBob3N0OiBhY2Nlc3NvckRlc2NyaXB0b3IoZ2V0SG9zdCwgZnVuY3Rpb24gKGhvc3QpIHtcbiAgICAgIHZhciB1cmwgPSBnZXRJbnRlcm5hbFVSTFN0YXRlKHRoaXMpO1xuICAgICAgaWYgKHVybC5jYW5ub3RCZUFCYXNlVVJMKSByZXR1cm47XG4gICAgICBwYXJzZVVSTCh1cmwsIFN0cmluZyhob3N0KSwgSE9TVCk7XG4gICAgfSksXG4gICAgLy8gYFVSTC5wcm90b3R5cGUuaG9zdG5hbWVgIGFjY2Vzc29ycyBwYWlyXG4gICAgLy8gaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLyNkb20tdXJsLWhvc3RuYW1lXG4gICAgaG9zdG5hbWU6IGFjY2Vzc29yRGVzY3JpcHRvcihnZXRIb3N0bmFtZSwgZnVuY3Rpb24gKGhvc3RuYW1lKSB7XG4gICAgICB2YXIgdXJsID0gZ2V0SW50ZXJuYWxVUkxTdGF0ZSh0aGlzKTtcbiAgICAgIGlmICh1cmwuY2Fubm90QmVBQmFzZVVSTCkgcmV0dXJuO1xuICAgICAgcGFyc2VVUkwodXJsLCBTdHJpbmcoaG9zdG5hbWUpLCBIT1NUTkFNRSk7XG4gICAgfSksXG4gICAgLy8gYFVSTC5wcm90b3R5cGUucG9ydGAgYWNjZXNzb3JzIHBhaXJcbiAgICAvLyBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI2RvbS11cmwtcG9ydFxuICAgIHBvcnQ6IGFjY2Vzc29yRGVzY3JpcHRvcihnZXRQb3J0LCBmdW5jdGlvbiAocG9ydCkge1xuICAgICAgdmFyIHVybCA9IGdldEludGVybmFsVVJMU3RhdGUodGhpcyk7XG4gICAgICBpZiAoY2Fubm90SGF2ZVVzZXJuYW1lUGFzc3dvcmRQb3J0KHVybCkpIHJldHVybjtcbiAgICAgIHBvcnQgPSBTdHJpbmcocG9ydCk7XG4gICAgICBpZiAocG9ydCA9PSAnJykgdXJsLnBvcnQgPSBudWxsO1xuICAgICAgZWxzZSBwYXJzZVVSTCh1cmwsIHBvcnQsIFBPUlQpO1xuICAgIH0pLFxuICAgIC8vIGBVUkwucHJvdG90eXBlLnBhdGhuYW1lYCBhY2Nlc3NvcnMgcGFpclxuICAgIC8vIGh0dHBzOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jZG9tLXVybC1wYXRobmFtZVxuICAgIHBhdGhuYW1lOiBhY2Nlc3NvckRlc2NyaXB0b3IoZ2V0UGF0aG5hbWUsIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgdmFyIHVybCA9IGdldEludGVybmFsVVJMU3RhdGUodGhpcyk7XG4gICAgICBpZiAodXJsLmNhbm5vdEJlQUJhc2VVUkwpIHJldHVybjtcbiAgICAgIHVybC5wYXRoID0gW107XG4gICAgICBwYXJzZVVSTCh1cmwsIHBhdGhuYW1lICsgJycsIFBBVEhfU1RBUlQpO1xuICAgIH0pLFxuICAgIC8vIGBVUkwucHJvdG90eXBlLnNlYXJjaGAgYWNjZXNzb3JzIHBhaXJcbiAgICAvLyBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI2RvbS11cmwtc2VhcmNoXG4gICAgc2VhcmNoOiBhY2Nlc3NvckRlc2NyaXB0b3IoZ2V0U2VhcmNoLCBmdW5jdGlvbiAoc2VhcmNoKSB7XG4gICAgICB2YXIgdXJsID0gZ2V0SW50ZXJuYWxVUkxTdGF0ZSh0aGlzKTtcbiAgICAgIHNlYXJjaCA9IFN0cmluZyhzZWFyY2gpO1xuICAgICAgaWYgKHNlYXJjaCA9PSAnJykge1xuICAgICAgICB1cmwucXVlcnkgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCc/JyA9PSBzZWFyY2guY2hhckF0KDApKSBzZWFyY2ggPSBzZWFyY2guc2xpY2UoMSk7XG4gICAgICAgIHVybC5xdWVyeSA9ICcnO1xuICAgICAgICBwYXJzZVVSTCh1cmwsIHNlYXJjaCwgUVVFUlkpO1xuICAgICAgfVxuICAgICAgZ2V0SW50ZXJuYWxTZWFyY2hQYXJhbXNTdGF0ZSh1cmwuc2VhcmNoUGFyYW1zKS51cGRhdGVTZWFyY2hQYXJhbXModXJsLnF1ZXJ5KTtcbiAgICB9KSxcbiAgICAvLyBgVVJMLnByb3RvdHlwZS5zZWFyY2hQYXJhbXNgIGdldHRlclxuICAgIC8vIGh0dHBzOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jZG9tLXVybC1zZWFyY2hwYXJhbXNcbiAgICBzZWFyY2hQYXJhbXM6IGFjY2Vzc29yRGVzY3JpcHRvcihnZXRTZWFyY2hQYXJhbXMpLFxuICAgIC8vIGBVUkwucHJvdG90eXBlLmhhc2hgIGFjY2Vzc29ycyBwYWlyXG4gICAgLy8gaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLyNkb20tdXJsLWhhc2hcbiAgICBoYXNoOiBhY2Nlc3NvckRlc2NyaXB0b3IoZ2V0SGFzaCwgZnVuY3Rpb24gKGhhc2gpIHtcbiAgICAgIHZhciB1cmwgPSBnZXRJbnRlcm5hbFVSTFN0YXRlKHRoaXMpO1xuICAgICAgaGFzaCA9IFN0cmluZyhoYXNoKTtcbiAgICAgIGlmIChoYXNoID09ICcnKSB7XG4gICAgICAgIHVybC5mcmFnbWVudCA9IG51bGw7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICgnIycgPT0gaGFzaC5jaGFyQXQoMCkpIGhhc2ggPSBoYXNoLnNsaWNlKDEpO1xuICAgICAgdXJsLmZyYWdtZW50ID0gJyc7XG4gICAgICBwYXJzZVVSTCh1cmwsIGhhc2gsIEZSQUdNRU5UKTtcbiAgICB9KVxuICB9KTtcbn1cblxuLy8gYFVSTC5wcm90b3R5cGUudG9KU09OYCBtZXRob2Rcbi8vIGh0dHBzOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jZG9tLXVybC10b2pzb25cbnJlZGVmaW5lKFVSTFByb3RvdHlwZSwgJ3RvSlNPTicsIGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgcmV0dXJuIHNlcmlhbGl6ZVVSTC5jYWxsKHRoaXMpO1xufSwgeyBlbnVtZXJhYmxlOiB0cnVlIH0pO1xuXG4vLyBgVVJMLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI1VSTC1zdHJpbmdpZmljYXRpb24tYmVoYXZpb3JcbnJlZGVmaW5lKFVSTFByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBzZXJpYWxpemVVUkwuY2FsbCh0aGlzKTtcbn0sIHsgZW51bWVyYWJsZTogdHJ1ZSB9KTtcblxuaWYgKE5hdGl2ZVVSTCkge1xuICB2YXIgbmF0aXZlQ3JlYXRlT2JqZWN0VVJMID0gTmF0aXZlVVJMLmNyZWF0ZU9iamVjdFVSTDtcbiAgdmFyIG5hdGl2ZVJldm9rZU9iamVjdFVSTCA9IE5hdGl2ZVVSTC5yZXZva2VPYmplY3RVUkw7XG4gIC8vIGBVUkwuY3JlYXRlT2JqZWN0VVJMYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1VSTC9jcmVhdGVPYmplY3RVUkxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGlmIChuYXRpdmVDcmVhdGVPYmplY3RVUkwpIHJlZGVmaW5lKFVSTENvbnN0cnVjdG9yLCAnY3JlYXRlT2JqZWN0VVJMJywgZnVuY3Rpb24gY3JlYXRlT2JqZWN0VVJMKGJsb2IpIHtcbiAgICByZXR1cm4gbmF0aXZlQ3JlYXRlT2JqZWN0VVJMLmFwcGx5KE5hdGl2ZVVSTCwgYXJndW1lbnRzKTtcbiAgfSk7XG4gIC8vIGBVUkwucmV2b2tlT2JqZWN0VVJMYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1VSTC9yZXZva2VPYmplY3RVUkxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGlmIChuYXRpdmVSZXZva2VPYmplY3RVUkwpIHJlZGVmaW5lKFVSTENvbnN0cnVjdG9yLCAncmV2b2tlT2JqZWN0VVJMJywgZnVuY3Rpb24gcmV2b2tlT2JqZWN0VVJMKHVybCkge1xuICAgIHJldHVybiBuYXRpdmVSZXZva2VPYmplY3RVUkwuYXBwbHkoTmF0aXZlVVJMLCBhcmd1bWVudHMpO1xuICB9KTtcbn1cblxuc2V0VG9TdHJpbmdUYWcoVVJMQ29uc3RydWN0b3IsICdVUkwnKTtcblxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiAhVVNFX05BVElWRV9VUkwsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIFVSTDogVVJMQ29uc3RydWN0b3Jcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==