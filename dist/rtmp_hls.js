(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = require("./src");

},{"./src":14}],2:[function(require,module,exports){
/**
 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseAssign = require('lodash._baseassign'),
    createAssigner = require('lodash._createassigner'),
    keys = require('lodash.keys');

/**
 * A specialized version of `_.assign` for customizing assigned values without
 * support for argument juggling, multiple sources, and `this` binding `customizer`
 * functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 */
function assignWith(object, source, customizer) {
  var index = -1,
      props = keys(source),
      length = props.length;

  while (++index < length) {
    var key = props[index],
        value = object[key],
        result = customizer(value, source[key], key, object, source);

    if ((result === result ? (result !== value) : (value === value)) ||
        (value === undefined && !(key in object))) {
      object[key] = result;
    }
  }
  return object;
}

/**
 * Assigns own enumerable properties of source object(s) to the destination
 * object. Subsequent sources overwrite property assignments of previous sources.
 * If `customizer` is provided it is invoked to produce the assigned values.
 * The `customizer` is bound to `thisArg` and invoked with five arguments:
 * (objectValue, sourceValue, key, object, source).
 *
 * **Note:** This method mutates `object` and is based on
 * [`Object.assign`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign).
 *
 * @static
 * @memberOf _
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {*} [thisArg] The `this` binding of `customizer`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
 * // => { 'user': 'fred', 'age': 40 }
 *
 * // using a customizer callback
 * var defaults = _.partialRight(_.assign, function(value, other) {
 *   return _.isUndefined(value) ? other : value;
 * });
 *
 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
 * // => { 'user': 'barney', 'age': 36 }
 */
var assign = createAssigner(function(object, source, customizer) {
  return customizer
    ? assignWith(object, source, customizer)
    : baseAssign(object, source);
});

module.exports = assign;

},{"lodash._baseassign":3,"lodash._createassigner":5,"lodash.keys":9}],3:[function(require,module,exports){
/**
 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseCopy = require('lodash._basecopy'),
    keys = require('lodash.keys');

/**
 * The base implementation of `_.assign` without support for argument juggling,
 * multiple sources, and `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return source == null
    ? object
    : baseCopy(source, keys(source), object);
}

module.exports = baseAssign;

},{"lodash._basecopy":4,"lodash.keys":9}],4:[function(require,module,exports){
/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property names to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @returns {Object} Returns `object`.
 */
function baseCopy(source, props, object) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    object[key] = source[key];
  }
  return object;
}

module.exports = baseCopy;

},{}],5:[function(require,module,exports){
/**
 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var bindCallback = require('lodash._bindcallback'),
    isIterateeCall = require('lodash._isiterateecall'),
    restParam = require('lodash.restparam');

/**
 * Creates a function that assigns properties of source object(s) to a given
 * destination object.
 *
 * **Note:** This function is used to create `_.assign`, `_.defaults`, and `_.merge`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return restParam(function(object, sources) {
    var index = -1,
        length = object == null ? 0 : sources.length,
        customizer = length > 2 ? sources[length - 2] : undefined,
        guard = length > 2 ? sources[2] : undefined,
        thisArg = length > 1 ? sources[length - 1] : undefined;

    if (typeof customizer == 'function') {
      customizer = bindCallback(customizer, thisArg, 5);
      length -= 2;
    } else {
      customizer = typeof thisArg == 'function' ? thisArg : undefined;
      length -= (customizer ? 1 : 0);
    }
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;

},{"lodash._bindcallback":6,"lodash._isiterateecall":7,"lodash.restparam":8}],6:[function(require,module,exports){
/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * A specialized version of `baseCallback` which only supports `this` binding
 * and specifying the number of arguments to provide to `func`.
 *
 * @private
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function bindCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  if (thisArg === undefined) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
    case 5: return function(value, other, key, object, source) {
      return func.call(thisArg, value, other, key, object, source);
    };
  }
  return function() {
    return func.apply(thisArg, arguments);
  };
}

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = bindCallback;

},{}],7:[function(require,module,exports){
/**
 * lodash 3.0.9 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/**
 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if the provided arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
      ? (isArrayLike(object) && isIndex(index, object.length))
      : (type == 'string' && index in object)) {
    var other = object[index];
    return value === value ? (value === other) : (other !== other);
  }
  return false;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isIterateeCall;

},{}],8:[function(require,module,exports){
/**
 * lodash 3.6.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as an array.
 *
 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.restParam(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */
function restParam(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        rest = Array(length);

    while (++index < length) {
      rest[index] = args[start + index];
    }
    switch (start) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, args[0], rest);
      case 2: return func.call(this, args[0], args[1], rest);
    }
    var otherArgs = Array(start + 1);
    index = -1;
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = rest;
    return func.apply(this, otherArgs);
  };
}

module.exports = restParam;

},{}],9:[function(require,module,exports){
/**
 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = require('lodash._getnative'),
    isArguments = require('lodash.isarguments'),
    isArray = require('lodash.isarray');

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? null : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object != 'function' && isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length > 0;

  while (++index < length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keys;

},{"lodash._getnative":10,"lodash.isarguments":11,"lodash.isarray":12}],10:[function(require,module,exports){
/**
 * lodash 3.9.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/**
 * Used to match `RegExp` [special characters](http://www.regular-expressions.info/characters.html#special).
 * In addition to special characters the forward slash is escaped to allow for
 * easier `eval` use and `Function` compilation.
 */
var reRegExpChars = /[.*+?^${}()|[\]\/\\]/g,
    reHasRegExpChars = RegExp(reRegExpChars.source);

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` or `undefined` values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  if (typeof value == 'string') {
    return value;
  }
  return value == null ? '' : (value + '');
}

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  escapeRegExp(fnToString.call(hasOwnProperty))
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (objToString.call(value) == funcTag) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

/**
 * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
 * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
 */
function escapeRegExp(string) {
  string = baseToString(string);
  return (string && reHasRegExpChars.test(string))
    ? string.replace(reRegExpChars, '\\$&')
    : string;
}

module.exports = getNative;

},{}],11:[function(require,module,exports){
/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `arguments` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  return isObjectLike(value) && isArrayLike(value) && objToString.call(value) == argsTag;
}

module.exports = isArguments;

},{}],12:[function(require,module,exports){
/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    funcTag = '[object Function]';

/**
 * Used to match `RegExp` [special characters](http://www.regular-expressions.info/characters.html#special).
 * In addition to special characters the forward slash is escaped to allow for
 * easier `eval` use and `Function` compilation.
 */
var reRegExpChars = /[.*+?^${}()|[\]\/\\]/g,
    reHasRegExpChars = RegExp(reRegExpChars.source);

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` or `undefined` values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  if (typeof value == 'string') {
    return value;
  }
  return value == null ? '' : (value + '');
}

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  escapeRegExp(fnToString.call(hasOwnProperty))
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (objToString.call(value) == funcTag) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

/**
 * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
 * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
 */
function escapeRegExp(string) {
  string = baseToString(string);
  return (string && reHasRegExpChars.test(string))
    ? string.replace(reRegExpChars, '\\$&')
    : string;
}

module.exports = isArray;

},{}],13:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Mediator = require("mediator");

var HLSEvents = (function () {
  function HLSEvents(instanceId) {
    _classCallCheck(this, HLSEvents);

    this.instanceId = instanceId;
  }

  _createClass(HLSEvents, {
    ready: {
      value: function ready() {
        Mediator.trigger("" + this.instanceId + ":flashready");
      }
    },
    videoSize: {
      value: function videoSize(width, height) {
        Mediator.trigger("" + this.instanceId + ":videosizechanged", width, height);
      }
    },
    complete: {
      value: function complete() {
        Mediator.trigger("" + this.instanceId + ":complete");
      }
    },
    error: {
      value: function error(code, url, message) {
        Mediator.trigger("" + this.instanceId + ":error", code, url, message);
      }
    },
    manifest: {
      value: function manifest(duration, loadmetrics) {
        Mediator.trigger("" + this.instanceId + ":manifestloaded", duration, loadmetrics);
      }
    },
    audioLevelLoaded: {
      value: function audioLevelLoaded(loadmetrics) {
        Mediator.trigger("" + this.instanceId + ":audiolevelloaded", loadmetrics);
      }
    },
    levelLoaded: {
      value: function levelLoaded(loadmetrics) {
        Mediator.trigger("" + this.instanceId + ":levelloaded", loadmetrics);
      }
    },
    fragmentLoaded: {
      value: function fragmentLoaded(loadmetrics) {
        Mediator.trigger("" + this.instanceId + ":fragmentloaded", loadmetrics);
      }
    },
    fragmentPlaying: {
      value: function fragmentPlaying(playmetrics) {
        Mediator.trigger("" + this.instanceId + ":fragmentplaying", playmetrics);
      }
    },
    position: {
      value: function position(timemetrics) {
        Mediator.trigger("" + this.instanceId + ":timeupdate", timemetrics);
      }
    },
    state: {
      value: function state(newState) {
        Mediator.trigger("" + this.instanceId + ":playbackstate", newState);
      }
    },
    seekState: {
      value: function seekState(newState) {
        Mediator.trigger("" + this.instanceId + ":seekstate", newState);
      }
    },
    "switch": {
      value: function _switch(newLevel) {
        Mediator.trigger("" + this.instanceId + ":levelchanged", newLevel);
      }
    },
    audioTracksListChange: {
      value: function audioTracksListChange(trackList) {
        Mediator.trigger("" + this.instanceId + ":audiotracklistchanged", trackList);
      }
    },
    audioTrackChange: {
      value: function audioTrackChange(trackId) {
        Mediator.trigger("" + this.instanceId + ":audiotrackchanged", trackId);
      }
    }
  });

  return HLSEvents;
})();

module.exports = HLSEvents;

},{"mediator":"mediator"}],14:[function(require,module,exports){
"use strict";

module.exports = require("./main.js");

},{"./main.js":15}],15:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var Playback = require("playback");
var assign = require("lodash.assign");
var template = require("template");
//var uniqueId = require('utils').uniqueId //TODO: actually use the uniqueID generator

var RTMP = require("./rtmp.js");

var Mediator = require("mediator");
var Browser = require("browser");
var Events = require("events");

var JST = require("./rtmp_jst"); //TODO: bring all of the templates into here, generated by bin/hook

var $ = require("zepto");

var HLSEvents = require("./flashls_events");

var objectIE = "<object type=\"application/x-shockwave-flash\" id=\"<%= cid %>\" class=\"hls-playback\" classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" data-hls=\"\" width=\"100%\" height=\"100%\"><param name=\"movie\" value=\"<%= baseUrl %>/assets/HLSPlayer.swf\"> <param name=\"quality\" value=\"autohigh\"> <param name=\"swliveconnect\" value=\"true\"> <param name=\"allowScriptAccess\" value=\"always\"> <param name=\"bgcolor\" value=\"#001122\"> <param name=\"allowFullScreen\" value=\"false\"> <param name=\"wmode\" value=\"transparent\"> <param name=\"tabindex\" value=\"1\"> <param name=FlashVars value=\"playbackId=<%= playbackId %>\" /> </object>";

var RtmpHls = (function (_Playback) {
  function RtmpHls(options) {
    _classCallCheck(this, RtmpHls);

    _get(Object.getPrototypeOf(RtmpHls.prototype), "constructor", this).call(this, options);

    this.options = options;
    this.src = options.hls.src; //Set this just in case - what happens if we remove it?

    //TODO: this is a hack.
    this.uniqueIdStart = 100;
    this.hlsCid = "c" + ++this.uniqueIdStart;
    this.hlsUniqueId = "o" + ++this.uniqueIdStart;
    this.rtmpCid = "c" + ++this.uniqueIdStart;
    this.rtmpUniqueId = "o" + ++this.uniqueIdStart;

    this.bootstrapCount = 0;

    //HLS Options
    this.hls = {};
    this.hls.baseUrl = options.baseUrl;
    this.hls.flushLiveURLCache = options.hls.flushLiveURLCache === undefined ? true : options.hls.flushLiveURLCache;
    this.hls.capLevelToStage = options.hls.capLevelToStage === undefined ? false : options.hls.capLevelToStage;
    this.hls.useHardwareVideoDecoder = options.hls.useHardwareVideoDecoder === undefined ? !Browser.isChrome : options.hls.useHardwareVideoDecoder;
    this.hls.maxBufferLength = options.hls.maxBufferLength === undefined ? 120 : options.hls.maxBufferLength;
    this.hls.hlsMinimumDvrSize = options.hls.hlsMinimumDvrSize == undefined ? 60 : options.hls.hlsMinimumDvrSize;

    //RTMP Options
    this.rtmp = {};
    this.rtmp.src = options.rtmp.src;
    this.rtmp.baseUrl = options.baseUrl;
    this.rtmp.swfPath = "/assets/RTMP.swf";

    //General player options
    this.highDefinition = false;
    this.autoPlay = options.autoPlay;
    this.defaultSettings = {
      left: ["playstop"],
      "default": ["seekbar"],
      right: ["fullscreen"],
      seekEnabled: false
    };

    this.playbackType = "live";
    this.settings.seekEnabled = true; //Should always be true

    this.settings = assign({}, this.defaultSettings);
    //this.trigger(Events.PLAYBACK_SETTINGSUPDATE)

    this.addListeners();
  }

  _inherits(RtmpHls, _Playback);

  _createClass(RtmpHls, {
    name: {
      get: function () {
        return "rtmp_hls";
      }
    },
    tagName: {
      get: function () {
        return "div";
      }
    },
    hlsTemplate: {
      //Template copied from HLS in clappr

      get: function () {
        return template("<object class=\"hls-playback\" data-hls type=\"application/x-shockwave-flash\" width=\"100%\" height=\"100\"><param name=\"movie\" value=\"<%= baseUrl %>/assets/HLSPlayer.swf?inline=1\"><param name=\"quality\" value=\"autohigh\"><param name=\"swliveconnect\" value=\"true\"><param name=\"allowScriptAccess\" value=\"always\"><param name=\"bgcolor\" value=\"#001122\"><param name=\"allowFullScreen\" value=\"false\"><param name=\"wmode\" value=\"transparent\"><param name=\"tabindex\" value=\"1\"><param name=FlashVars value=\"playbackId=<%= playbackId %>&callback=<%= callbackName %>\" /><embed type=\"application/x-shockwave-flash\" tabindex=\"1\" enablecontextmenu=\"false\" allowScriptAccess=\"always\" quality=\"autohigh\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" wmode=\"transparent\" swliveconnect=\"true\" type=\"application/x-shockwave-flash\" allowfullscreen=\"false\" bgcolor=\"#000000\" FlashVars=\"playbackId=<%= playbackId %>&callback=<%= callbackName %>\" src=\"<%= baseUrl %>/assets/HLSPlayer.swf\" width=\"100%\" height=\"100%\"></embed></object>");
      }
    },
    rtmpTemplate: {
      get: function () {
        return JST.rtmp;
      }
    },
    clapprId: {
      get: function () {
        return this.cid;
      }
    },
    attributes: {
      get: function () {
        return {
          "class": "rtmpHlsContainer",
          style: "height: 100%;"
        };
      }
    },
    addListeners: {
      value: function addListeners() {
        var _this = this;

        //HLS
        Mediator.on(this.hlsCid + ":flashready", function () {
          return _this.bootstrap();
        });
        Mediator.on(this.hlsCid + ":timeupdate", function (timeMetrics) {
          return _this.updateTime(timeMetrics);
        });

        //RTMP
        Mediator.on(this.rtmpUniqueId + ":flashready", this.bootstrap, this);
      }
    },
    addHlsListeners: {
      value: function addHlsListeners() {
        var _this = this;

        Mediator.on(this.hlsCid + ":playbackstate", function (state) {
          return _this.setPlaybackState(state);
        });
        Mediator.on(this.hlsCid + ":levelchanged", function (level) {
          return _this.updateHighDefinition(level);
        });
        Mediator.on(this.hlsCid + ":playbackerror", function () {
          return _this.flashPlaybackError();
        });
      }
    },
    removeHlsListeners: {
      value: function removeHlsListeners() {
        //Mediator.off(this.hlsCid + ':timeupdate')
        Mediator.off(this.hlsCid + ":playbackstate");
        Mediator.off(this.hlsCid + ":levelchanged");
        Mediator.off(this.hlsCid + ":playbackerror");
      }
    },
    addRtmpListeners: {
      value: function addRtmpListeners() {
        Mediator.on(this.rtmpUniqueId + ":progress", this.rtmpProgress, this);
        Mediator.on(this.rtmpUniqueId + ":timeupdate", this.rtmpUpdateTime, this);
        Mediator.on(this.rtmpUniqueId + ":statechanged", this.rtmpCheckState, this);
      }
    },
    removeRtmpListeners: {
      value: function removeRtmpListeners() {
        Mediator.off(this.rtmpUniqueId + ":progress");
        Mediator.off(this.rtmpUniqueId + ":timeupdate");
        Mediator.off(this.rtmpUniqueId + ":statechanged");
      }
    },
    stopListening: {
      value: function stopListening() {
        _get(Object.getPrototypeOf(RtmpHls.prototype), "stopListening", this).call(this);

        //HLS
        Mediator.off(this.hlsCid + ":flashready");
        Mediator.off(this.hlsCid + ":timeupdate");
        Mediator.off(this.hlsCid + ":playbackstate");
        Mediator.off(this.hlsCid + ":levelchanged");
        Mediator.off(this.hlsCid + ":playbackerror");

        //RTMP
        Mediator.off(this.rtmpUniqueId + ":progress");
        Mediator.off(this.rtmpUniqueId + ":timeupdate");
        Mediator.off(this.rtmpUniqueId + ":statechanged");
        Mediator.off(this.rtmpUniqueId + ":flashready");
      }
    },
    bootstrap: {
      value: function bootstrap() {

        if (++this.bootstrapCount != 2) {
          return;
        } //Wait for the other player to bootstrap

        this.el.width = "100%";
        this.el.height = "100%";
        this.isReady = true;
        this.srcLoaded = false;
        this.currentState = "IDLE";
        this.setHlsFlashSettings();

        this.updatePlaybackType();

        this.addRtmpListeners();
        $(this.hlsEl).css("display", "hidden");

        this.autoPlay && this.play();
        this.trigger(Events.PLAYBACK_READY, this.name);
      }
    },
    changePlayer: {
      value: function changePlayer(newPlayer) {
        this.currentPlayer = newPlayer;
        if (newPlayer == "RTMP") {
          this.$hlsEl.css("visibility", "hidden");
          this.$rtmpEl.css("visibility", "visible");
          this.hlsEl.playerStop();
          this.removeHlsListeners();
          this.addRtmpListeners();
          this.play();
        } else {
          this.$hlsEl.css("visibility", "visible");
          this.$rtmpEl.css("visibility", "hidden");
          this.rtmpEl.playerPause();
          this.removeRtmpListeners();

          this.addHlsListeners();
        }
      }
    },
    setHlsFlashSettings: {
      value: function setHlsFlashSettings() {
        this.hlsEl.playerSetflushLiveURLCache(this.hls.flushLiveURLCache);
        this.hlsEl.playerCapLeveltoStage(this.hls.capLevelToStage);
        this.hlsEl.playerSetmaxBufferLength(this.hls.maxBufferLength);
        this.hlsEl.playerSetUseHardwareVideoDecoder(this.hls.useHardwareVideoDecoder);
      }
    },
    updateHighDefinition: {
      value: function updateHighDefinition(level) {
        var currentLevel = this.getLevels()[level];
        this.highDefinition = currentLevel.height >= 720 || currentLevel.bitrate / 1000 >= 2000;
        this.trigger(Events.PLAYBACK_HIGHDEFINITIONUPDATE);
        this.trigger(Events.PLAYBACK_BITRATE, { bitrate: this.getCurrentBitrate() });
      }
    },
    updateTime: {
      value: function updateTime(timeMetrics) {
        if (this.currentState === "IDLE") {
          return;
        }var duration = this.normalizeDuration(timeMetrics.duration);
        var position = Math.min(Math.max(timeMetrics.position, 0), duration);
        var previousDVRStatus = this.dvrEnabled;
        var livePlayback = this.playbackType === "live";
        this.dvrEnabled = livePlayback && duration > this.hls.hlsMinimumDvrSize;
        //console.log(this.playbackType, duration, this.hls.hlsMinimumDvrSize)
        if (duration === 100 || livePlayback === undefined) {
          return;
        }

        if (this.dvrEnabled !== previousDVRStatus) {
          this.updateSettings();
          this.trigger(Events.PLAYBACK_SETTINGSUPDATE, this.name);
        }

        if (livePlayback && (!this.dvrEnabled || !this.dvrInUse)) {
          position = duration;
        }

        this.trigger(Events.PLAYBACK_TIMEUPDATE, position, duration, this.name);
      }
    },
    play: {
      value: function play() {

        if (!this.srcLoaded && this.currentState !== "PLAYING") {
          return this.firstPlay();
        }switch (this.currentPlayer) {
          case "RTMP":
            this.rtmpEl.playerResume();
            this.trigger(Events.PLAYBACK_PLAY, this.name);

            console.log("playing");
            break;

          case "HLS":
            if (this.currentState === "PAUSED") {
              this.hlsEl.playerResume();
            } else {
              this.hlsEl.playerPlay();
            }
            break;
        }
      }
    },
    getPlaybackType: {
      value: function getPlaybackType() {
        return this.playbackType ? this.playbackType : null;
      }
    },
    getCurrentBitrate: {
      value: function getCurrentBitrate() {
        var currentLevel = this.getLevels()[this.hlsEl.getLevel()];
        return currentLevel.bitrate;
      }
    },
    isHighDefinitionInUse: {
      value: function isHighDefinitionInUse() {
        return this.highDefinition;
      }
    },
    getLevels: {
      value: function getLevels() {
        if (!this.levels || this.levels.length === 0) {
          this.levels = this.hlsEl.getLevels();
        }
        return this.levels;
      }
    },
    rtmpCheckState: {
      value: function rtmpCheckState() {
        if (this.currentPlayer == "HLS") {
          return;
        }if (this.currentState === "PAUSED") {
          return;
        } else if (this.currentState !== "PLAYING_BUFFERING" && this.rtmpEl.getState() === "PLAYING_BUFFERING") {
          this.trigger(Events.PLAYBACK_BUFFERING, this.name);
          this.currentState = "PLAYING_BUFFERING";
        } else if (this.rtmpEl.getState() === "PLAYING") {
          this.trigger(Events.PLAYBACK_BUFFERFULL, this.name);
          this.currentState = "PLAYING";
        } else if (this.rtmpEl.getState() === "IDLE") {
          this.currentState = "IDLE";
        } else if (this.rtmpEl.getState() === "ENDED") {
          this.trigger(Events.PLAYBACK_ENDED, this.name);
          this.trigger(Events.PLAYBACK_TIMEUPDATE, 0, this.rtmpEl.getDuration(), this.name);
          this.currentState = "ENDED";
        }
      }
    },
    rtmpProgress: {
      value: function rtmpProgress() {
        if (this.currentState !== "IDLE" && this.currentState !== "ENDED") {}
      }
    },
    rtmpUpdateTime: {
      value: function rtmpUpdateTime() {}
    },
    setPlaybackState: {
      value: function setPlaybackState(state) {
        if (this.currentPlayer == "RTMP") {
          return;
        }if (["PLAYING_BUFFERING", "PAUSED_BUFFERING"].indexOf(state) >= 0) {
          this.trigger(Events.PLAYBACK_BUFFERING, this.name);
          this.updateCurrentState(state);
        } else if (["PLAYING", "PAUSED"].indexOf(state) >= 0) {
          if (["PLAYING_BUFFERING", "PAUSED_BUFFERING", "IDLE"].indexOf(this.currentState) >= 0) {
            this.trigger(Events.PLAYBACK_BUFFERFULL, this.name);
          }
          this.updateCurrentState(state);
        } else if (state === "IDLE") {
          this.updateCurrentState(state);
          this.trigger(Events.PLAYBACK_TIMEUPDATE, 0, this.hlsEl.getDuration(), this.name);
          this.trigger(Events.PLAYBACK_ENDED, this.name);
        }
      }
    },
    updateCurrentState: {
      value: function updateCurrentState(state) {
        this.currentState = state;
        this.updatePlaybackType();
        if (state === "PLAYING") {
          this.trigger(Events.PLAYBACK_PLAY, this.name);
        } else if (state === "PAUSED") {
          this.trigger(Events.PLAYBACK_PAUSE, this.name);
        }
      }
    },
    updatePlaybackType: {
      value: function updatePlaybackType() {
        this.playbackType = "live"; //TODO: HACK?! was this.hlsEl.getType()
        if (this.playbackType) {
          this.playbackType = this.playbackType.toLowerCase();
          if (this.playbackType === "vod") {
            this.startReportingProgress();
          } else {
            this.stopReportingProgress();
          }
        }
        this.trigger(Events.PLAYBACK_PLAYBACKSTATE);
      }
    },
    startReportingProgress: {
      value: function startReportingProgress() {
        var _this = this;

        if (!this.reportingProgress) {
          this.reportingProgress = true;
          Mediator.on(this.hlsCid + ":fragmentloaded", function () {
            return _this.onFragmentLoaded();
          });
        }
      }
    },
    stopReportingProgress: {
      value: function stopReportingProgress() {
        Mediator.off(this.hlsCid + ":fragmentloaded", this.onFragmentLoaded, this);
      }
    },
    onFragmentLoaded: {
      value: function onFragmentLoaded() {
        var buffered = this.hlsEl.getPosition() + this.hlsEl.getbufferLength();
        this.trigger(Events.PLAYBACK_PROGRESS, this.hlsEl.getPosition(), buffered, this.hlsEl.getDuration(), this.name);
      }
    },
    manifestRefreshed: {
      value: function manifestRefreshed(duration, loadmetrics) {
        if (this.currentPlayer == "HLS") {
          return;
        }console.log("manifestRefreshed", this.hlsEl.getDuration());

        this.updateTime({
          position: this.hlsEl.getDuration() - 1, //Fake this, we're pretending we're at the end as we're using RTMP at the moment
          duration: this.hlsEl.getDuration()
        });

        var self = this;

        window.setTimeout(function () {
          if (self.currentPlayer == "HLS") return;

          self.hlsEl.playerStop();

          self.hlsEl.playerLoad(self.options.hls.src);
        }, 3000);
      }
    },
    firstPlay: {
      value: function firstPlay() {
        this.setHlsFlashSettings(); //ensure flushLiveURLCache will work (#327)

        this.rtmpEl.playerPlay(this.rtmp.src);
        this.currentState = "PLAYING";

        this.hlsEl.playerLoad(this.options.hls.src);
        Mediator.on(this.hlsCid + ":manifestloaded", this.manifestRefreshed, this);
        this.srcLoaded = true;
      }
    },
    volume: {
      value: function volume(value) {
        var _this = this;

        if (this.isReady) {
          this.hlsEl.playerVolume(value);
        } else {
          this.listenToOnce(this, Events.PLAYBACK_BUFFERFULL, function () {
            return _this.volume(value);
          });
        }
      }
    },
    pause: {
      value: function pause() {
        if (this.playbackType !== "live" || this.dvrEnabled) {
          this.hlsEl.playerPause();
          if (this.playbackType === "live" && this.dvrEnabled) {
            this.updateDvr(true);
          }
        }
      }
    },
    stop: {
      value: function stop() {
        this.hlsEl.playerStop();
        this.trigger(Events.PLAYBACK_TIMEUPDATE, 0, this.name);
      }
    },
    isPlaying: {
      value: function isPlaying() {
        if (this.currentState) {
          return !!this.currentState.match(/playing/i);
        }
        return false;
      }
    },
    getDuration: {
      value: function getDuration() {
        return this.normalizeDuration(this.hlsEl.getDuration());
      }
    },
    normalizeDuration: {
      value: function normalizeDuration(duration) {
        return duration - 10;
      }
    },
    seek: {
      value: function seek(time) {
        var duration = this.hlsEl.getDuration();
        if (time > 0) {
          time = duration * time / 100;
        }

        // seek operations to a time within 5 seconds from live stream will position playhead back to live
        var dvrInUse = time >= 0 && duration - time > 5;
        if (!dvrInUse) {
          this.changePlayer("RTMP");
          time = duration - 1;
        } else {
          console.log("SEEKING!!!");
          this.changePlayer("HLS");
          //this.hlsEl.playerStop();
          //this.hlsEl.playerLoad(this.options.hls.src);

          //Mediator.once(this.hlsCid + ':manifestloaded', function(){
          //console.log('manifestloaded')
          //this.hlsEl.playerPlay()
          this.hlsEl.playerSeek(time);
          this.trigger(Events.PLAYBACK_TIMEUPDATE, time, duration, this.name);
          this.trigger(Events.PLAYBACK_HIGHDEFINITIONUPDATE);
        }

        this.updateDvr(dvrInUse);
      }
    },
    updateDvr: {
      value: function updateDvr(dvrInUse) {
        var previousDvrInUse = !!this.dvrInUse;
        this.dvrInUse = dvrInUse;
        if (this.dvrInUse !== previousDvrInUse) {
          this.updateSettings();
          this.trigger(Events.PLAYBACK_DVR, this.dvrInUse);
          this.trigger(Events.PLAYBACK_STATS_ADD, { dvr: this.dvrInUse });
        }
      }
    },
    flashPlaybackError: {
      value: function flashPlaybackError() {
        this.trigger(Events.PLAYBACK_STOP);
      }
    },
    timeUpdate: {
      value: function timeUpdate(time, duration) {
        this.trigger(Events.PLAYBACK_TIMEUPDATE, time, duration, this.name);
      }
    },
    destroy: {
      value: function destroy() {
        this.stopListening();
        this.$hlsEl.remove();
        this.$rtmpEl.remove();
      }
    },
    updateSettings: {
      value: function updateSettings() {
        this.settings = assign({}, this.defaultSettings);
        if (this.playbackType === "vod" || this.dvrInUse) {
          this.settings.left = ["playpause", "position", "duration"];
          this.settings.seekEnabled = true;
        } else if (this.dvrEnabled) {
          this.settings.left = ["playpause"];
          this.settings.seekEnabled = true;
        } else {
          this.settings.seekEnabled = false;
        }
      }
    },
    setElement: {
      value: function setElement(element) {
        this.$el = element;
        this.el = element[0];
      }
    },
    createCallbacks: {
      value: function createCallbacks() {
        var _this = this;

        if (!window.Clappr.flashlsCallbacks) {
          window.Clappr.flashlsCallbacks = {};
        }
        this.flashlsEvents = new HLSEvents(this.hlsCid);
        window.Clappr.flashlsCallbacks[this.hlsCid] = function (eventName, args) {
          _this.flashlsEvents[eventName].apply(_this.flashlsEvents, args);
        };
      }
    },
    rtmpRender: {
      value: function rtmpRender() {
        this.$rtmpEl = $(this.rtmpTemplate({ cid: this.rtmpCid, swfPath: this.rtmp.swfPath, playbackId: this.rtmpUniqueId }));
        if (Browser.isFirefox) {
          this.$rtmpEl.attr("data-flash", "");
        } else if (Browser.isLegacyIE) {
          this.$rtmpEl = $(template(objectIE)({ cid: this.rtmpCid, baseUrl: this.rtmp.baseUrl, playbackId: this.rtmpUniqueId }));
        }
        this.rtmpEl = this.$rtmpEl[0];
        this.$el.append(this.$rtmpEl);
      }
    },
    hlsRender: {
      value: function hlsRender() {
        var style = ["<style class=\"clappr-style\">", "[data-hls]{position:absolute;display:block;pointer-events:none;top:0;height:100%}", "</style>"].join("");

        this.$hlsEl = {};

        if (Browser.isLegacyIE) {
          this.$hlsEl = $(template(objectIE)({ cid: this.hlsCid, baseUrl: this.rtmp.baseUrl, playbackId: this.hlsUniqueId }));
        } else {
          var callbackName = this.createCallbacks();
          this.$hlsEl = $(this.hlsTemplate({ cid: this.hlsCid, baseUrl: this.rtmp.baseUrl, playbackId: this.hlsUniqueId, callbackName: "window.Clappr.flashlsCallbacks." + this.hlsCid }));

          if (Browser.isFirefox) {
            this.$hlsEl.attr("data-hls", "");
          } else if (Browser.isIE) {
            this.$hlsEl.attr("embed").remove();
          }
        }

        //this.el.id = this.cid //?????
        this.$hlsEl.append(style);
        this.hlsEl = this.$hlsEl[0];
        this.$el.append(this.$hlsEl);
      }
    },
    render: {
      value: function render() {
        this.$el.html("");
        this.hlsRender();
        this.rtmpRender();

        //this.$el.html

        /*
        //if(Browser.isLegacyIE) {
        //  this.setupIE()
        //} else {
          var callbackName = this.createCallbacks()
          var divEl = $(this.template({cid: this.hlsCid, baseUrl: this.baseUrl, playbackId: this.uniqueId, callbackName: `window.Clappr.flashlsCallbacks.${this.hlsCid}`})).attr('id', this.hlsCid)
           this.$el.html(divEl)
           this.RTMP.render()
          this.$el.append(this.RTMP.el)
          this.rtmpEl = this.RTMP.el
           console.log(this.rtmpEl)
          
          //if(Browser.isFirefox) {
          //  this.setupFirefox()
          //} else if (Browser.isIE) {
          //  this.$('embed').remove()
          //}
        //}
        this.el.id = this.cid
        this.$el.append(style)
         this.hlsEl = divEl[0]
        */
        window.rtmpEl = this.rtmpEl;
        window.hlsEl = this.hlsEl;

        window.elDebug = this.el;
        return this;
      }
    }
  });

  return RtmpHls;
})(Playback);

RtmpHls.canPlay = function (resource, mimeType) {
  return true;

  var resourceParts = resource.split("?")[0].match(/.*\.(.*)$/) || [];
  return Browser.hasFlash && (resourceParts.length > 1 && resourceParts[1] == "m3u8" || mimeType === "application/x-mpegURL" || mimeType === "application/vnd.apple.mpegurl");
};

module.exports = window.RtmpHls = RtmpHls;
//this.rtmpEl.playerPlay(this.rtmp.src)
//this.hlsEl.playerStop()
//this.currentState = "PLAYING"

//this.hlsEl.playerLoad(this.options.hls.src)
//Mediator.on(this.hlsCid + ':manifestloaded', this.manifestRefreshed, this)

//this.trigger(Events.PLAYBACK_PROGRESS, 0, this.rtmpEl.getBytesLoaded(), this.rtmpEl.getBytesTotal(), this.name)

//this.trigger(Events.PLAYBACK_TIMEUPDATE, this.rtmpEl.getPosition(), this.rtmpEl.getDuration(), this.name)
//}, this)

},{"./flashls_events":13,"./rtmp.js":16,"./rtmp_jst":17,"browser":"browser","events":"events","lodash.assign":2,"mediator":"mediator","playback":"playback","template":"template","zepto":"zepto"}],16:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// Copyright 2014 Globo.com Player authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

var Playback = require("playback");
var JST = require("./rtmp_jst");
var Browser = require("browser");
var Events = require("events");
var Mediator = Clappr.Mediator;
var template = require("template");
var $ = require("zepto");
var Events = require("events");

var objectIE = "<object type=\"application/x-shockwave-flash\" id=\"<%= cid %>\" classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" data-flash-vod=\"\"><param name=\"movie\" value=\"<%= swfPath %>\"> <param name=\"quality\" value=\"autohigh\"> <param name=\"swliveconnect\" value=\"true\"> <param name=\"allowScriptAccess\" value=\"always\"> <param name=\"bgcolor\" value=\"#001122\"> <param name=\"allowFullScreen\" value=\"false\"> <param name=\"wmode\" value=\"gpu\"> <param name=\"tabindex\" value=\"1\"> <param name=FlashVars value=\"playbackId=<%= playbackId %>\" /> </object>";

var RTMP = (function (_Playback) {
  function RTMP(options) {
    _classCallCheck(this, RTMP);

    _get(Object.getPrototypeOf(RTMP.prototype), "constructor", this).call(this, options);
    this.options = options;

    this.swfPath = "/assets/RTMP.swf";
    this.setupPlaybackType();

    this.src = options.src;
    this.baseUrl = options.baseUrl;
    this.autoPlay = options.autoPlay;
    this.settings = { "default": ["seekbar"] };
    this.settings.left = ["playpause", "position", "duration"];
    this.settings.right = ["fullscreen", "volume"];
    this.settings.seekEnabled = true;
    this.isReady = false;
    this.addListeners();
  }

  _inherits(RTMP, _Playback);

  _createClass(RTMP, {
    name: {
      get: function () {
        return "rtmp";
      }
    },
    tagName: {
      get: function () {
        return "object";
      }
    },
    template: {
      get: function () {
        return JST.rtmp;
      }
    },
    attributes: {
      get: function () {
        return {
          "data-rtmp": "",
          type: "application/x-shockwave-flash",
          width: "100%",
          height: "100%",
          style: "height: 100%;"
        };
      }
    },
    bootstrap: {
      value: function bootstrap() {
        this.el.width = "100%";
        this.el.height = "100%";
        this.isReady = true;
        if (this.currentState === "PLAYING") {
          this.firstPlay();
        } else {
          this.currentState = "IDLE";
          this.autoPlay && this.play();
        }
        $("<div style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%\" />").insertAfter(this.$el);
        this.trigger(Events.PLAYBACK_READY, this.name);
      }
    },
    getPlaybackType: {
      value: function getPlaybackType() {
        return this.playbackType;
      }
    },
    setupFirefox: {
      value: function setupFirefox() {
        var $el = this.$("embed");
        $el.attr("data-flash", "");
        this.setElement($el[0]);
      }
    },
    isHighDefinitionInUse: {
      value: function isHighDefinitionInUse() {
        return false;
      }
    },
    updateTime: {
      value: function updateTime() {
        this.trigger(Events.PLAYBACK_TIMEUPDATE, this.el.getPosition(), this.el.getDuration(), this.name);
      }
    },
    addListeners: {
      value: function addListeners() {
        Mediator.on(this.uniqueId + ":progress", this.progress, this);
        Mediator.on(this.uniqueId + ":timeupdate", this.updateTime, this);
        Mediator.on(this.uniqueId + ":statechanged", this.checkState, this);
        Mediator.on(this.uniqueId + ":flashready", this.bootstrap, this);
      }
    },
    stopListening: {
      value: function stopListening() {
        _get(Object.getPrototypeOf(RTMP.prototype), "stopListening", this).call(this);
        Mediator.off(this.uniqueId + ":progress");
        Mediator.off(this.uniqueId + ":timeupdate");
        Mediator.off(this.uniqueId + ":statechanged");
        Mediator.off(this.uniqueId + ":flashready");
      }
    },
    checkState: {
      value: function checkState() {
        if (this.currentState === "PAUSED") {
          return;
        } else if (this.currentState !== "PLAYING_BUFFERING" && this.el.getState() === "PLAYING_BUFFERING") {
          this.trigger(Events.PLAYBACK_BUFFERING, this.name);
          this.currentState = "PLAYING_BUFFERING";
        } else if (this.el.getState() === "PLAYING") {
          this.trigger(Events.PLAYBACK_BUFFERFULL, this.name);
          this.currentState = "PLAYING";
        } else if (this.el.getState() === "IDLE") {
          this.currentState = "IDLE";
        } else if (this.el.getState() === "ENDED") {
          this.trigger(Events.PLAYBACK_ENDED, this.name);
          this.trigger(Events.PLAYBACK_TIMEUPDATE, 0, this.el.getDuration(), this.name);
          this.currentState = "ENDED";
        }
      }
    },
    progress: {
      value: function progress() {
        if (this.currentState !== "IDLE" && this.currentState !== "ENDED") {
          this.trigger(Events.PLAYBACK_PROGRESS, 0, this.el.getBytesLoaded(), this.el.getBytesTotal(), this.name);
        }
      }
    },
    firstPlay: {
      value: function firstPlay() {
        var _this = this;

        if (this.el.playerPlay) {
          this.el.playerPlay(this.src);
          this.listenToOnce(this, Events.PLAYBACK_BUFFERFULL, function () {
            return _this.checkInitialSeek();
          });
          this.currentState = "PLAYING";
        } else {
          this.listenToOnce(this, Events.PLAYBACK_READY, this.firstPlay);
        }
      }
    },
    checkInitialSeek: {
      value: function checkInitialSeek() {
        var seekTime = seekStringToSeconds(window.location.href);
        if (seekTime !== 0) {
          this.seekSeconds(seekTime);
        }
      }
    },
    play: {
      value: function play() {
        if (this.el.getState() === "PAUSED" || this.el.getState() === "PLAYING_BUFFERING") {
          this.currentState = "PLAYING";
          this.el.playerResume();
        } else if (this.el.getState() !== "PLAYING") {
          this.firstPlay();
        }
        this.trigger(Events.PLAYBACK_PLAY, this.name);
      }
    },
    volume: {
      value: function volume(value) {
        var _this = this;

        if (this.isReady) {
          this.el.playerVolume(value);
        } else {
          this.listenToOnce(this, Events.PLAYBACK_BUFFERFULL, function () {
            return _this.volume(value);
          });
        }
      }
    },
    pause: {
      value: function pause() {
        this.currentState = "PAUSED";
        this.el.playerPause();
        this.trigger(Events.PLAYBACK_PAUSE, this.name);
      }
    },
    stop: {
      value: function stop() {
        this.el.playerStop();
        this.trigger(Events.PLAYBACK_TIMEUPDATE, 0, this.name);
      }
    },
    isPlaying: {
      value: function isPlaying() {
        return !!(this.isReady && this.currentState.indexOf("PLAYING") > -1);
      }
    },
    getDuration: {
      value: function getDuration() {
        return this.el.getDuration();
      }
    },
    seek: {
      value: function seek(seekBarValue) {
        var seekTo = this.el.getDuration() * (seekBarValue / 100);
        this.seekSeconds(seekTo);
      }
    },
    seekSeconds: {
      value: function seekSeconds(seekTo) {
        this.el.playerSeek(seekTo);
        this.trigger(Events.PLAYBACK_TIMEUPDATE, seekTo, this.el.getDuration(), this.name);
        if (this.currentState === "PAUSED") {
          this.el.playerPause();
        }
      }
    },
    destroy: {
      value: function destroy() {
        clearInterval(this.bootstrapId);
        _get(Object.getPrototypeOf(RTMP.prototype), "stopListening", this).call(this);
        this.$el.remove();
      }
    },
    setupIE: {
      value: function setupIE() {
        this.setElement($(template(objectIE)({ cid: this.cid, baseUrl: this.baseUrl, playbackId: this.uniqueId })));
      }
    },
    setupPlaybackType: {
      value: function setupPlaybackType() {
        if (this.options.src.indexOf("live") > -1) {
          this.playbackType = "live";
          this.settings = { left: ["playstop"], "default": ["seekbar"], right: ["fullscreen", "volume"] };
          this.settings.seekEnabled = false;
          this.trigger(Events.PLAYBACK_SETTINGSUPDATE);
        } else {
          this.playbackType = "vod";
        }
      }
    },
    render: {
      value: function render() {
        this.$el.html(this.template({ cid: this.cid, swfPath: this.swfPath, playbackId: this.uniqueId }));
        if (Browser.isFirefox) {
          this.setupFirefox();
        } else if (Browser.isLegacyIE) {
          this.setupIE();
        }
        return this;
      }
    }
  });

  return RTMP;
})(Playback);

RTMP.canPlay = function (source) {
  return !!(source.indexOf("rtmp://") > -1 && Browser.hasFlash);
};

module.exports = RTMP;

},{"./rtmp_jst":17,"browser":"browser","events":"events","playback":"playback","template":"template","zepto":"zepto"}],17:[function(require,module,exports){
//This file is generated by bin/hook.js
"use strict";

var template = require("template");
module.exports = {

  rtmp: template("<object data-rtmp type=\"application/x-shockwave-flash\" width=\"100%\" height=\"100%\" style=\"height: 100%;\"><param name=\"movie\" value=\"<%= swfPath %>\">  <param name=\"quality\" value=\"autohigh\">  <param name=\"swliveconnect\" value=\"true\">  <param name=\"allowScriptAccess\" value=\"always\">  <param name=\"bgcolor\" value=\"#001122\">  <param name=\"allowFullScreen\" value=\"false\">  <param name=\"wmode\" value=\"transparent\">  <param name=\"tabindex\" value=\"1\">  <param name=FlashVars value=\"playbackId=<%= playbackId %>\" />  <embed    type=\"application/x-shockwave-flash\"    disabled=\"disabled\"    tabindex=\"-1\"    enablecontextmenu=\"false\"    allowScriptAccess=\"always\"    quality=\"autohight\"    pluginspage=\"http://www.macromedia.com/go/getflashplayer\"    wmode=\"transparent\"    swliveconnect=\"true\"    type=\"application/x-shockwave-flash\"    allowfullscreen=\"false\"    bgcolor=\"#000000\"    FlashVars=\"playbackId=<%= playbackId %>\"    src=\"<%= swfPath %>\"    width=\"100%\"    height=\"100%\">  </embed></object>"),

  CSS: {}
};

},{"template":"template"}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL1dvcmsvU2VjdXJvR3JvdXAvZGV2ZWxvcG1lbnQvcGxheV9wZW4vY2xhcHByL2NsYXBwci1ydG1wLWhscy1wbHVnaW4vaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLmFzc2lnbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2guYXNzaWduL25vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2Vhc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLmFzc2lnbi9ub2RlX21vZHVsZXMvbG9kYXNoLl9iYXNlYXNzaWduL25vZGVfbW9kdWxlcy9sb2Rhc2guX2Jhc2Vjb3B5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5hc3NpZ24vbm9kZV9tb2R1bGVzL2xvZGFzaC5fY3JlYXRlYXNzaWduZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLmFzc2lnbi9ub2RlX21vZHVsZXMvbG9kYXNoLl9jcmVhdGVhc3NpZ25lci9ub2RlX21vZHVsZXMvbG9kYXNoLl9iaW5kY2FsbGJhY2svaW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoLmFzc2lnbi9ub2RlX21vZHVsZXMvbG9kYXNoLl9jcmVhdGVhc3NpZ25lci9ub2RlX21vZHVsZXMvbG9kYXNoLl9pc2l0ZXJhdGVlY2FsbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2guYXNzaWduL25vZGVfbW9kdWxlcy9sb2Rhc2guX2NyZWF0ZWFzc2lnbmVyL25vZGVfbW9kdWxlcy9sb2Rhc2gucmVzdHBhcmFtL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5hc3NpZ24vbm9kZV9tb2R1bGVzL2xvZGFzaC5rZXlzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5hc3NpZ24vbm9kZV9tb2R1bGVzL2xvZGFzaC5rZXlzL25vZGVfbW9kdWxlcy9sb2Rhc2guX2dldG5hdGl2ZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2guYXNzaWduL25vZGVfbW9kdWxlcy9sb2Rhc2gua2V5cy9ub2RlX21vZHVsZXMvbG9kYXNoLmlzYXJndW1lbnRzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC5hc3NpZ24vbm9kZV9tb2R1bGVzL2xvZGFzaC5rZXlzL25vZGVfbW9kdWxlcy9sb2Rhc2guaXNhcnJheS9pbmRleC5qcyIsIi9Vc2Vycy9jaHJpcy9Eb2N1bWVudHMvV29yay9TZWN1cm9Hcm91cC9kZXZlbG9wbWVudC9wbGF5X3Blbi9jbGFwcHIvY2xhcHByLXJ0bXAtaGxzLXBsdWdpbi9zcmMvZmxhc2hsc19ldmVudHMuanMiLCIvVXNlcnMvY2hyaXMvRG9jdW1lbnRzL1dvcmsvU2VjdXJvR3JvdXAvZGV2ZWxvcG1lbnQvcGxheV9wZW4vY2xhcHByL2NsYXBwci1ydG1wLWhscy1wbHVnaW4vc3JjL2luZGV4LmpzIiwiL1VzZXJzL2NocmlzL0RvY3VtZW50cy9Xb3JrL1NlY3Vyb0dyb3VwL2RldmVsb3BtZW50L3BsYXlfcGVuL2NsYXBwci9jbGFwcHItcnRtcC1obHMtcGx1Z2luL3NyYy9tYWluLmpzIiwiL1VzZXJzL2NocmlzL0RvY3VtZW50cy9Xb3JrL1NlY3Vyb0dyb3VwL2RldmVsb3BtZW50L3BsYXlfcGVuL2NsYXBwci9jbGFwcHItcnRtcC1obHMtcGx1Z2luL3NyYy9ydG1wLmpzIiwiL1VzZXJzL2NocmlzL0RvY3VtZW50cy9Xb3JrL1NlY3Vyb0dyb3VwL2RldmVsb3BtZW50L3BsYXlfcGVuL2NsYXBwci9jbGFwcHItcnRtcC1obHMtcGx1Z2luL3NyYy9ydG1wX2pzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7OztBQ0FsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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UyxRQUFROztBQTJNM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFTLE1BQU0sRUFBRTtBQUM5QixTQUFPLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUEsQUFBQyxDQUFBO0NBQzlELENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7Ozs7OztBQzlOckIsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sQ0FBQyxPQUFPLEdBQUc7O0FBRWYsUUFBUSxRQUFRLENBQUMsNmlDQUFtK0IsQ0FBQzs7QUFFci9CLEtBQUcsRUFBRSxFQUVKO0NBQ0YsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3JjJyk7IiwiLyoqXG4gKiBsb2Rhc2ggMy4yLjAgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cbnZhciBiYXNlQXNzaWduID0gcmVxdWlyZSgnbG9kYXNoLl9iYXNlYXNzaWduJyksXG4gICAgY3JlYXRlQXNzaWduZXIgPSByZXF1aXJlKCdsb2Rhc2guX2NyZWF0ZWFzc2lnbmVyJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJ2xvZGFzaC5rZXlzJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmFzc2lnbmAgZm9yIGN1c3RvbWl6aW5nIGFzc2lnbmVkIHZhbHVlcyB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBhcmd1bWVudCBqdWdnbGluZywgbXVsdGlwbGUgc291cmNlcywgYW5kIGB0aGlzYCBiaW5kaW5nIGBjdXN0b21pemVyYFxuICogZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGFzc2lnbldpdGgob2JqZWN0LCBzb3VyY2UsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBwcm9wcyA9IGtleXMoc291cmNlKSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF0sXG4gICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIHJlc3VsdCA9IGN1c3RvbWl6ZXIodmFsdWUsIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKTtcblxuICAgIGlmICgocmVzdWx0ID09PSByZXN1bHQgPyAocmVzdWx0ICE9PSB2YWx1ZSkgOiAodmFsdWUgPT09IHZhbHVlKSkgfHxcbiAgICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICAgIG9iamVjdFtrZXldID0gcmVzdWx0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG4vKipcbiAqIEFzc2lnbnMgb3duIGVudW1lcmFibGUgcHJvcGVydGllcyBvZiBzb3VyY2Ugb2JqZWN0KHMpIHRvIHRoZSBkZXN0aW5hdGlvblxuICogb2JqZWN0LiBTdWJzZXF1ZW50IHNvdXJjZXMgb3ZlcndyaXRlIHByb3BlcnR5IGFzc2lnbm1lbnRzIG9mIHByZXZpb3VzIHNvdXJjZXMuXG4gKiBJZiBgY3VzdG9taXplcmAgaXMgcHJvdmlkZWQgaXQgaXMgaW52b2tlZCB0byBwcm9kdWNlIHRoZSBhc3NpZ25lZCB2YWx1ZXMuXG4gKiBUaGUgYGN1c3RvbWl6ZXJgIGlzIGJvdW5kIHRvIGB0aGlzQXJnYCBhbmQgaW52b2tlZCB3aXRoIGZpdmUgYXJndW1lbnRzOlxuICogKG9iamVjdFZhbHVlLCBzb3VyY2VWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSkuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIG11dGF0ZXMgYG9iamVjdGAgYW5kIGlzIGJhc2VkIG9uXG4gKiBbYE9iamVjdC5hc3NpZ25gXShodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtb2JqZWN0LmFzc2lnbikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyBleHRlbmRcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgYXNzaWduZWQgdmFsdWVzLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBjdXN0b21pemVyYC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uYXNzaWduKHsgJ3VzZXInOiAnYmFybmV5JyB9LCB7ICdhZ2UnOiA0MCB9LCB7ICd1c2VyJzogJ2ZyZWQnIH0pO1xuICogLy8gPT4geyAndXNlcic6ICdmcmVkJywgJ2FnZSc6IDQwIH1cbiAqXG4gKiAvLyB1c2luZyBhIGN1c3RvbWl6ZXIgY2FsbGJhY2tcbiAqIHZhciBkZWZhdWx0cyA9IF8ucGFydGlhbFJpZ2h0KF8uYXNzaWduLCBmdW5jdGlvbih2YWx1ZSwgb3RoZXIpIHtcbiAqICAgcmV0dXJuIF8uaXNVbmRlZmluZWQodmFsdWUpID8gb3RoZXIgOiB2YWx1ZTtcbiAqIH0pO1xuICpcbiAqIGRlZmF1bHRzKHsgJ3VzZXInOiAnYmFybmV5JyB9LCB7ICdhZ2UnOiAzNiB9LCB7ICd1c2VyJzogJ2ZyZWQnIH0pO1xuICogLy8gPT4geyAndXNlcic6ICdiYXJuZXknLCAnYWdlJzogMzYgfVxuICovXG52YXIgYXNzaWduID0gY3JlYXRlQXNzaWduZXIoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2UsIGN1c3RvbWl6ZXIpIHtcbiAgcmV0dXJuIGN1c3RvbWl6ZXJcbiAgICA/IGFzc2lnbldpdGgob2JqZWN0LCBzb3VyY2UsIGN1c3RvbWl6ZXIpXG4gICAgOiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbjtcbiIsIi8qKlxuICogbG9kYXNoIDMuMi4wIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgYmFzZUNvcHkgPSByZXF1aXJlKCdsb2Rhc2guX2Jhc2Vjb3B5JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJ2xvZGFzaC5rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFyZ3VtZW50IGp1Z2dsaW5nLFxuICogbXVsdGlwbGUgc291cmNlcywgYW5kIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBzb3VyY2UgPT0gbnVsbFxuICAgID8gb2JqZWN0XG4gICAgOiBiYXNlQ29weShzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuIiwiLyoqXG4gKiBsb2Rhc2ggMy4wLjEgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IG5hbWVzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQ29weShzb3VyY2UsIHByb3BzLCBvYmplY3QpIHtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgIG9iamVjdFtrZXldID0gc291cmNlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ29weTtcbiIsIi8qKlxuICogbG9kYXNoIDMuMS4xIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgYmluZENhbGxiYWNrID0gcmVxdWlyZSgnbG9kYXNoLl9iaW5kY2FsbGJhY2snKSxcbiAgICBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJ2xvZGFzaC5faXNpdGVyYXRlZWNhbGwnKSxcbiAgICByZXN0UGFyYW0gPSByZXF1aXJlKCdsb2Rhc2gucmVzdHBhcmFtJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgYXNzaWducyBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3QocykgdG8gYSBnaXZlblxuICogZGVzdGluYXRpb24gb2JqZWN0LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIGBfLmFzc2lnbmAsIGBfLmRlZmF1bHRzYCwgYW5kIGBfLm1lcmdlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXNzaWduZXIgVGhlIGZ1bmN0aW9uIHRvIGFzc2lnbiB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhc3NpZ25lciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoYXNzaWduZXIpIHtcbiAgcmV0dXJuIHJlc3RQYXJhbShmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gb2JqZWN0ID09IG51bGwgPyAwIDogc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAyID8gc291cmNlc1tsZW5ndGggLSAyXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgdGhpc0FyZyA9IGxlbmd0aCA+IDEgPyBzb3VyY2VzW2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBiaW5kQ2FsbGJhY2soY3VzdG9taXplciwgdGhpc0FyZywgNSk7XG4gICAgICBsZW5ndGggLT0gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VzdG9taXplciA9IHR5cGVvZiB0aGlzQXJnID09ICdmdW5jdGlvbicgPyB0aGlzQXJnIDogdW5kZWZpbmVkO1xuICAgICAgbGVuZ3RoIC09IChjdXN0b21pemVyID8gMSA6IDApO1xuICAgIH1cbiAgICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoc291cmNlc1swXSwgc291cmNlc1sxXSwgZ3VhcmQpKSB7XG4gICAgICBjdXN0b21pemVyID0gbGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IGN1c3RvbWl6ZXI7XG4gICAgICBsZW5ndGggPSAxO1xuICAgIH1cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUFzc2lnbmVyO1xuIiwiLyoqXG4gKiBsb2Rhc2ggMy4wLjEgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VDYWxsYmFja2Agd2hpY2ggb25seSBzdXBwb3J0cyBgdGhpc2AgYmluZGluZ1xuICogYW5kIHNwZWNpZnlpbmcgdGhlIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGJpbmQuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXJnQ291bnRdIFRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBjYWxsYmFjay5cbiAqL1xuZnVuY3Rpb24gYmluZENhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0aGlzQXJnID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZnVuYztcbiAgfVxuICBzd2l0Y2ggKGFyZ0NvdW50KSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgfTtcbiAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA1OiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIG90aGVyLCBrZXksIG9iamVjdCwgc291cmNlKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlLCBvdGhlciwga2V5LCBvYmplY3QsIHNvdXJjZSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBwcm92aWRlZCB0byBpdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxpdHlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqXG4gKiBfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdDtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmRDYWxsYmFjaztcbiIsIi8qKlxuICogbG9kYXNoIDMuMC45IChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eXFxkKyQvO1xuXG4vKipcbiAqIFVzZWQgYXMgdGhlIFttYXhpbXVtIGxlbmd0aF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cbiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIFwibGVuZ3RoXCIgcHJvcGVydHkgdmFsdWUgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhdm9pZCBhIFtKSVQgYnVnXShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQyNzkyKVxuICogdGhhdCBhZmZlY3RzIFNhZmFyaSBvbiBhdCBsZWFzdCBpT1MgOC4xLTguMyBBUk02NC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIFwibGVuZ3RoXCIgdmFsdWUuXG4gKi9cbnZhciBnZXRMZW5ndGggPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aChnZXRMZW5ndGgodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSA/ICt2YWx1ZSA6IC0xO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgcHJvdmlkZWQgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgPyAoaXNBcnJheUxpa2Uob2JqZWN0KSAmJiBpc0luZGV4KGluZGV4LCBvYmplY3QubGVuZ3RoKSlcbiAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KSkge1xuICAgIHZhciBvdGhlciA9IG9iamVjdFtpbmRleF07XG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/ICh2YWx1ZSA9PT0gb3RoZXIpIDogKG90aGVyICE9PSBvdGhlcik7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgYmFzZWQgb24gW2BUb0xlbmd0aGBdKGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlIFtsYW5ndWFnZSB0eXBlXShodHRwczovL2VzNS5naXRodWIuaW8vI3g4KSBvZiBgT2JqZWN0YC5cbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAvLyBBdm9pZCBhIFY4IEpJVCBidWcgaW4gQ2hyb21lIDE5LTIwLlxuICAvLyBTZWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTIyOTEgZm9yIG1vcmUgZGV0YWlscy5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJdGVyYXRlZUNhbGw7XG4iLCIvKipcbiAqIGxvZGFzaCAzLjYuMSAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGVcbiAqIGNyZWF0ZWQgZnVuY3Rpb24gYW5kIGFyZ3VtZW50cyBmcm9tIGBzdGFydGAgYW5kIGJleW9uZCBwcm92aWRlZCBhcyBhbiBhcnJheS5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgYmFzZWQgb24gdGhlIFtyZXN0IHBhcmFtZXRlcl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvRnVuY3Rpb25zL3Jlc3RfcGFyYW1ldGVycykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgc2F5ID0gXy5yZXN0UGFyYW0oZnVuY3Rpb24od2hhdCwgbmFtZXMpIHtcbiAqICAgcmV0dXJuIHdoYXQgKyAnICcgKyBfLmluaXRpYWwobmFtZXMpLmpvaW4oJywgJykgK1xuICogICAgIChfLnNpemUobmFtZXMpID4gMSA/ICcsICYgJyA6ICcnKSArIF8ubGFzdChuYW1lcyk7XG4gKiB9KTtcbiAqXG4gKiBzYXkoJ2hlbGxvJywgJ2ZyZWQnLCAnYmFybmV5JywgJ3BlYmJsZXMnKTtcbiAqIC8vID0+ICdoZWxsbyBmcmVkLCBiYXJuZXksICYgcGViYmxlcydcbiAqL1xuZnVuY3Rpb24gcmVzdFBhcmFtKGZ1bmMsIHN0YXJ0KSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6ICgrc3RhcnQgfHwgMCksIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgcmVzdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgcmVzdFtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXJ0KSB7XG4gICAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpcywgcmVzdCk7XG4gICAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJnc1swXSwgcmVzdCk7XG4gICAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJnc1swXSwgYXJnc1sxXSwgcmVzdCk7XG4gICAgfVxuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIGluZGV4ID0gLTE7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gcmVzdDtcbiAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc3RQYXJhbTtcbiIsIi8qKlxuICogbG9kYXNoIDMuMS4xIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG52YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnbG9kYXNoLl9nZXRuYXRpdmUnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJ2xvZGFzaC5pc2FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2guaXNhcnJheScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXlxcZCskLztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IGdldE5hdGl2ZShPYmplY3QsICdrZXlzJyk7XG5cbi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtbnVtYmVyLm1heF9zYWZlX2ludGVnZXIpXG4gKiBvZiBhbiBhcnJheS1saWtlIHZhbHVlLlxuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbi8qKlxuICogR2V0cyB0aGUgXCJsZW5ndGhcIiBwcm9wZXJ0eSB2YWx1ZSBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGF2b2lkIGEgW0pJVCBidWddKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDI3OTIpXG4gKiB0aGF0IGFmZmVjdHMgU2FmYXJpIG9uIGF0IGxlYXN0IGlPUyA4LjEtOC4zIEFSTTY0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgXCJsZW5ndGhcIiB2YWx1ZS5cbiAqL1xudmFyIGdldExlbmd0aCA9IGJhc2VQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKGdldExlbmd0aCh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YWx1ZSA9ICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpID8gK3ZhbHVlIDogLTE7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGg7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBiYXNlZCBvbiBbYFRvTGVuZ3RoYF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBBIGZhbGxiYWNrIGltcGxlbWVudGF0aW9uIG9mIGBPYmplY3Qua2V5c2Agd2hpY2ggY3JlYXRlcyBhbiBhcnJheSBvZiB0aGVcbiAqIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBzaGltS2V5cyhvYmplY3QpIHtcbiAgdmFyIHByb3BzID0ga2V5c0luKG9iamVjdCksXG4gICAgICBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IHByb3BzTGVuZ3RoICYmIG9iamVjdC5sZW5ndGg7XG5cbiAgdmFyIGFsbG93SW5kZXhlcyA9ICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBwcm9wc0xlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG4gICAgaWYgKChhbGxvd0luZGV4ZXMgJiYgaXNJbmRleChrZXksIGxlbmd0aCkpIHx8IGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZSBbbGFuZ3VhZ2UgdHlwZV0oaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OCkgb2YgYE9iamVjdGAuXG4gKiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgLy8gQXZvaWQgYSBWOCBKSVQgYnVnIGluIENocm9tZSAxOS0yMC5cbiAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yMjkxIGZvciBtb3JlIGRldGFpbHMuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xudmFyIGtleXMgPSAhbmF0aXZlS2V5cyA/IHNoaW1LZXlzIDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciBDdG9yID0gb2JqZWN0ID09IG51bGwgPyBudWxsIDogb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBpZiAoKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUgPT09IG9iamVjdCkgfHxcbiAgICAgICh0eXBlb2Ygb2JqZWN0ICE9ICdmdW5jdGlvbicgJiYgaXNBcnJheUxpa2Uob2JqZWN0KSkpIHtcbiAgICByZXR1cm4gc2hpbUtleXMob2JqZWN0KTtcbiAgfVxuICByZXR1cm4gaXNPYmplY3Qob2JqZWN0KSA/IG5hdGl2ZUtleXMob2JqZWN0KSA6IFtdO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDtcbiAgbGVuZ3RoID0gKGxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKSAmJiBsZW5ndGgpIHx8IDA7XG5cbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICBpbmRleCA9IC0xLFxuICAgICAgaXNQcm90byA9IHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUgPT09IG9iamVjdCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCksXG4gICAgICBza2lwSW5kZXhlcyA9IGxlbmd0aCA+IDA7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gKGluZGV4ICsgJycpO1xuICB9XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShza2lwSW5kZXhlcyAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSkgJiZcbiAgICAgICAgIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuIiwiLyoqXG4gKiBsb2Rhc2ggMy45LjAgKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2Rlcm4gbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgMjAxMi0yMDE1IFRoZSBEb2pvIEZvdW5kYXRpb24gPGh0dHA6Ly9kb2pvZm91bmRhdGlvbi5vcmcvPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCAyMDA5LTIwMTUgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKi9cblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgW3NwZWNpYWwgY2hhcmFjdGVyc10oaHR0cDovL3d3dy5yZWd1bGFyLWV4cHJlc3Npb25zLmluZm8vY2hhcmFjdGVycy5odG1sI3NwZWNpYWwpLlxuICogSW4gYWRkaXRpb24gdG8gc3BlY2lhbCBjaGFyYWN0ZXJzIHRoZSBmb3J3YXJkIHNsYXNoIGlzIGVzY2FwZWQgdG8gYWxsb3cgZm9yXG4gKiBlYXNpZXIgYGV2YWxgIHVzZSBhbmQgYEZ1bmN0aW9uYCBjb21waWxhdGlvbi5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhcnMgPSAvWy4qKz9eJHt9KCl8W1xcXVxcL1xcXFxdL2csXG4gICAgcmVIYXNSZWdFeHBDaGFycyA9IFJlZ0V4cChyZVJlZ0V4cENoYXJzLnNvdXJjZSk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpID4gNSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGlmIGl0J3Mgbm90IG9uZS4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkXG4gKiBmb3IgYG51bGxgIG9yIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6ICh2YWx1ZSArICcnKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZuVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZXNjYXBlUmVnRXhwKGZuVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIHJldHVybiBpc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc05hdGl2ZShBcnJheS5wcm90b3R5cGUucHVzaCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc05hdGl2ZShfKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBmdW5jVGFnKSB7XG4gICAgcmV0dXJuIHJlSXNOYXRpdmUudGVzdChmblRvU3RyaW5nLmNhbGwodmFsdWUpKTtcbiAgfVxuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiByZUlzSG9zdEN0b3IudGVzdCh2YWx1ZSk7XG59XG5cbi8qKlxuICogRXNjYXBlcyB0aGUgYFJlZ0V4cGAgc3BlY2lhbCBjaGFyYWN0ZXJzIFwiXFxcIiwgXCIvXCIsIFwiXlwiLCBcIiRcIiwgXCIuXCIsIFwifFwiLCBcIj9cIixcbiAqIFwiKlwiLCBcIitcIiwgXCIoXCIsIFwiKVwiLCBcIltcIiwgXCJdXCIsIFwie1wiIGFuZCBcIn1cIiBpbiBgc3RyaW5nYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gZXNjYXBlLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZXNjYXBlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZXNjYXBlUmVnRXhwKCdbbG9kYXNoXShodHRwczovL2xvZGFzaC5jb20vKScpO1xuICogLy8gPT4gJ1xcW2xvZGFzaFxcXVxcKGh0dHBzOlxcL1xcL2xvZGFzaFxcLmNvbVxcL1xcKSdcbiAqL1xuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZykge1xuICBzdHJpbmcgPSBiYXNlVG9TdHJpbmcoc3RyaW5nKTtcbiAgcmV0dXJuIChzdHJpbmcgJiYgcmVIYXNSZWdFeHBDaGFycy50ZXN0KHN0cmluZykpXG4gICAgPyBzdHJpbmcucmVwbGFjZShyZVJlZ0V4cENoYXJzLCAnXFxcXCQmJylcbiAgICA6IHN0cmluZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG4iLCIvKipcbiAqIGxvZGFzaCAzLjAuMyAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZGVybiBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCAyMDEyLTIwMTUgVGhlIERvam8gRm91bmRhdGlvbiA8aHR0cDovL2Rvam9mb3VuZGF0aW9uLm9yZy8+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogQXZhaWxhYmxlIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqL1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBVc2VkIGFzIHRoZSBbbWF4aW11bSBsZW5ndGhdKGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBcImxlbmd0aFwiIHByb3BlcnR5IHZhbHVlIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYXZvaWQgYSBbSklUIGJ1Z10oaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE0Mjc5MilcbiAqIHRoYXQgYWZmZWN0cyBTYWZhcmkgb24gYXQgbGVhc3QgaU9TIDguMS04LjMgQVJNNjQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBcImxlbmd0aFwiIHZhbHVlLlxuICovXG52YXIgZ2V0TGVuZ3RoID0gYmFzZVByb3BlcnR5KCdsZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgoZ2V0TGVuZ3RoKHZhbHVlKSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBiYXNlZCBvbiBbYFRvTGVuZ3RoYF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsIi8qKlxuICogbG9kYXNoIDMuMC4zIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kZXJuIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IDIwMTItMjAxNSBUaGUgRG9qbyBGb3VuZGF0aW9uIDxodHRwOi8vZG9qb2ZvdW5kYXRpb24ub3JnLz5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICovXG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBbc3BlY2lhbCBjaGFyYWN0ZXJzXShodHRwOi8vd3d3LnJlZ3VsYXItZXhwcmVzc2lvbnMuaW5mby9jaGFyYWN0ZXJzLmh0bWwjc3BlY2lhbCkuXG4gKiBJbiBhZGRpdGlvbiB0byBzcGVjaWFsIGNoYXJhY3RlcnMgdGhlIGZvcndhcmQgc2xhc2ggaXMgZXNjYXBlZCB0byBhbGxvdyBmb3JcbiAqIGVhc2llciBgZXZhbGAgdXNlIGFuZCBgRnVuY3Rpb25gIGNvbXBpbGF0aW9uLlxuICovXG52YXIgcmVSZWdFeHBDaGFycyA9IC9bLiorP14ke30oKXxbXFxdXFwvXFxcXF0vZyxcbiAgICByZUhhc1JlZ0V4cENoYXJzID0gUmVnRXhwKHJlUmVnRXhwQ2hhcnMuc291cmNlKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkgPiA1KS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgaWYgaXQncyBub3Qgb25lLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWRcbiAqIGZvciBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogKHZhbHVlICsgJycpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZm5Ub1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBlc2NhcGVSZWdFeHAoZm5Ub1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KSlcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQXJyYXkgPSBnZXROYXRpdmUoQXJyYXksICdpc0FycmF5Jyk7XG5cbi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtbnVtYmVyLm1heF9zYWZlX2ludGVnZXIpXG4gKiBvZiBhbiBhcnJheS1saWtlIHZhbHVlLlxuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICByZXR1cm4gaXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBiYXNlZCBvbiBbYFRvTGVuZ3RoYF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcnJheVRhZztcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24uXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOYXRpdmUoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOYXRpdmUoXyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAob2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gZnVuY1RhZykge1xuICAgIHJldHVybiByZUlzTmF0aXZlLnRlc3QoZm5Ub1N0cmluZy5jYWxsKHZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgcmVJc0hvc3RDdG9yLnRlc3QodmFsdWUpO1xufVxuXG4vKipcbiAqIEVzY2FwZXMgdGhlIGBSZWdFeHBgIHNwZWNpYWwgY2hhcmFjdGVycyBcIlxcXCIsIFwiL1wiLCBcIl5cIiwgXCIkXCIsIFwiLlwiLCBcInxcIiwgXCI/XCIsXG4gKiBcIipcIiwgXCIrXCIsIFwiKFwiLCBcIilcIiwgXCJbXCIsIFwiXVwiLCBcIntcIiBhbmQgXCJ9XCIgaW4gYHN0cmluZ2AuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGVzY2FwZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGVzY2FwZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmVzY2FwZVJlZ0V4cCgnW2xvZGFzaF0oaHR0cHM6Ly9sb2Rhc2guY29tLyknKTtcbiAqIC8vID0+ICdcXFtsb2Rhc2hcXF1cXChodHRwczpcXC9cXC9sb2Rhc2hcXC5jb21cXC9cXCknXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHJpbmcpIHtcbiAgc3RyaW5nID0gYmFzZVRvU3RyaW5nKHN0cmluZyk7XG4gIHJldHVybiAoc3RyaW5nICYmIHJlSGFzUmVnRXhwQ2hhcnMudGVzdChzdHJpbmcpKVxuICAgID8gc3RyaW5nLnJlcGxhY2UocmVSZWdFeHBDaGFycywgJ1xcXFwkJicpXG4gICAgOiBzdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsInZhciBNZWRpYXRvciA9IHJlcXVpcmUoJ21lZGlhdG9yJylcblxuY2xhc3MgSExTRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaW5zdGFuY2VJZCkge1xuICAgIHRoaXMuaW5zdGFuY2VJZCA9IGluc3RhbmNlSWRcbiAgfVxuICByZWFkeSgpIHtcbiAgICBNZWRpYXRvci50cmlnZ2VyKGAke3RoaXMuaW5zdGFuY2VJZH06Zmxhc2hyZWFkeWApXG4gIH1cbiAgdmlkZW9TaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICBNZWRpYXRvci50cmlnZ2VyKGAke3RoaXMuaW5zdGFuY2VJZH06dmlkZW9zaXplY2hhbmdlZGAsIHdpZHRoLCBoZWlnaHQpXG4gIH1cbiAgY29tcGxldGUoKSB7XG4gICAgTWVkaWF0b3IudHJpZ2dlcihgJHt0aGlzLmluc3RhbmNlSWR9OmNvbXBsZXRlYClcbiAgfVxuICBlcnJvcihjb2RlLCB1cmwsIG1lc3NhZ2UpIHtcbiAgICBNZWRpYXRvci50cmlnZ2VyKGAke3RoaXMuaW5zdGFuY2VJZH06ZXJyb3JgLCBjb2RlLCB1cmwsIG1lc3NhZ2UpXG4gIH1cbiAgbWFuaWZlc3QoZHVyYXRpb24sIGxvYWRtZXRyaWNzKSB7XG4gICAgTWVkaWF0b3IudHJpZ2dlcihgJHt0aGlzLmluc3RhbmNlSWR9Om1hbmlmZXN0bG9hZGVkYCwgZHVyYXRpb24sIGxvYWRtZXRyaWNzKVxuICB9XG4gIGF1ZGlvTGV2ZWxMb2FkZWQobG9hZG1ldHJpY3MpIHtcbiAgICBNZWRpYXRvci50cmlnZ2VyKGAke3RoaXMuaW5zdGFuY2VJZH06YXVkaW9sZXZlbGxvYWRlZGAsIGxvYWRtZXRyaWNzKVxuICB9XG4gIGxldmVsTG9hZGVkKGxvYWRtZXRyaWNzKSB7XG4gICAgTWVkaWF0b3IudHJpZ2dlcihgJHt0aGlzLmluc3RhbmNlSWR9OmxldmVsbG9hZGVkYCwgbG9hZG1ldHJpY3MpXG4gIH1cbiAgZnJhZ21lbnRMb2FkZWQobG9hZG1ldHJpY3MpIHtcbiAgICBNZWRpYXRvci50cmlnZ2VyKGAke3RoaXMuaW5zdGFuY2VJZH06ZnJhZ21lbnRsb2FkZWRgLCBsb2FkbWV0cmljcylcbiAgfVxuICBmcmFnbWVudFBsYXlpbmcocGxheW1ldHJpY3MpIHtcbiAgICBNZWRpYXRvci50cmlnZ2VyKGAke3RoaXMuaW5zdGFuY2VJZH06ZnJhZ21lbnRwbGF5aW5nYCwgcGxheW1ldHJpY3MpXG4gIH1cbiAgcG9zaXRpb24odGltZW1ldHJpY3MpIHtcbiAgICBNZWRpYXRvci50cmlnZ2VyKGAke3RoaXMuaW5zdGFuY2VJZH06dGltZXVwZGF0ZWAsIHRpbWVtZXRyaWNzKVxuICB9XG4gIHN0YXRlKG5ld1N0YXRlKSB7XG4gICAgTWVkaWF0b3IudHJpZ2dlcihgJHt0aGlzLmluc3RhbmNlSWR9OnBsYXliYWNrc3RhdGVgLCBuZXdTdGF0ZSlcbiAgfVxuICBzZWVrU3RhdGUobmV3U3RhdGUpIHtcbiAgICBNZWRpYXRvci50cmlnZ2VyKGAke3RoaXMuaW5zdGFuY2VJZH06c2Vla3N0YXRlYCwgbmV3U3RhdGUpXG4gIH1cbiAgc3dpdGNoKG5ld0xldmVsKSB7XG4gICAgTWVkaWF0b3IudHJpZ2dlcihgJHt0aGlzLmluc3RhbmNlSWR9OmxldmVsY2hhbmdlZGAsIG5ld0xldmVsKVxuICB9XG4gIGF1ZGlvVHJhY2tzTGlzdENoYW5nZSh0cmFja0xpc3QpIHtcbiAgICBNZWRpYXRvci50cmlnZ2VyKGAke3RoaXMuaW5zdGFuY2VJZH06YXVkaW90cmFja2xpc3RjaGFuZ2VkYCwgdHJhY2tMaXN0KVxuICB9XG4gIGF1ZGlvVHJhY2tDaGFuZ2UodHJhY2tJZCkge1xuICAgIE1lZGlhdG9yLnRyaWdnZXIoYCR7dGhpcy5pbnN0YW5jZUlkfTphdWRpb3RyYWNrY2hhbmdlZGAsIHRyYWNrSWQpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBITFNFdmVudHNcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9tYWluLmpzJyk7IiwiLy8gQ29weXJpZ2h0IDIwMTQgR2xvYm8uY29tIFBsYXllciBhdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGVcbi8vIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cblxudmFyIFBsYXliYWNrID0gcmVxdWlyZSgncGxheWJhY2snKVxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ2xvZGFzaC5hc3NpZ24nKVxudmFyIHRlbXBsYXRlID0gcmVxdWlyZSgndGVtcGxhdGUnKVxuLy92YXIgdW5pcXVlSWQgPSByZXF1aXJlKCd1dGlscycpLnVuaXF1ZUlkIC8vVE9ETzogYWN0dWFsbHkgdXNlIHRoZSB1bmlxdWVJRCBnZW5lcmF0b3JcblxudmFyIFJUTVAgPSByZXF1aXJlKCcuL3J0bXAuanMnKTtcblxudmFyIE1lZGlhdG9yID0gcmVxdWlyZSgnbWVkaWF0b3InKVxudmFyIEJyb3dzZXIgPSByZXF1aXJlKCdicm93c2VyJylcbnZhciBFdmVudHMgPSByZXF1aXJlKCdldmVudHMnKVxuXG52YXIgSlNUID0gcmVxdWlyZSgnLi9ydG1wX2pzdCcpIC8vVE9ETzogYnJpbmcgYWxsIG9mIHRoZSB0ZW1wbGF0ZXMgaW50byBoZXJlLCBnZW5lcmF0ZWQgYnkgYmluL2hvb2tcblxudmFyICQgPSByZXF1aXJlKCd6ZXB0bycpXG5cbnZhciBITFNFdmVudHMgPSByZXF1aXJlKCcuL2ZsYXNobHNfZXZlbnRzJylcblxudmFyIG9iamVjdElFID0gJzxvYmplY3QgdHlwZT1cImFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoXCIgaWQ9XCI8JT0gY2lkICU+XCIgY2xhc3M9XCJobHMtcGxheWJhY2tcIiBjbGFzc2lkPVwiY2xzaWQ6ZDI3Y2RiNmUtYWU2ZC0xMWNmLTk2YjgtNDQ0NTUzNTQwMDAwXCIgZGF0YS1obHM9XCJcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+PHBhcmFtIG5hbWU9XCJtb3ZpZVwiIHZhbHVlPVwiPCU9IGJhc2VVcmwgJT4vYXNzZXRzL0hMU1BsYXllci5zd2ZcIj4gPHBhcmFtIG5hbWU9XCJxdWFsaXR5XCIgdmFsdWU9XCJhdXRvaGlnaFwiPiA8cGFyYW0gbmFtZT1cInN3bGl2ZWNvbm5lY3RcIiB2YWx1ZT1cInRydWVcIj4gPHBhcmFtIG5hbWU9XCJhbGxvd1NjcmlwdEFjY2Vzc1wiIHZhbHVlPVwiYWx3YXlzXCI+IDxwYXJhbSBuYW1lPVwiYmdjb2xvclwiIHZhbHVlPVwiIzAwMTEyMlwiPiA8cGFyYW0gbmFtZT1cImFsbG93RnVsbFNjcmVlblwiIHZhbHVlPVwiZmFsc2VcIj4gPHBhcmFtIG5hbWU9XCJ3bW9kZVwiIHZhbHVlPVwidHJhbnNwYXJlbnRcIj4gPHBhcmFtIG5hbWU9XCJ0YWJpbmRleFwiIHZhbHVlPVwiMVwiPiA8cGFyYW0gbmFtZT1GbGFzaFZhcnMgdmFsdWU9XCJwbGF5YmFja0lkPTwlPSBwbGF5YmFja0lkICU+XCIgLz4gPC9vYmplY3Q+J1xuXG5jbGFzcyBSdG1wSGxzIGV4dGVuZHMgUGxheWJhY2sge1xuICBnZXQgbmFtZSgpIHsgcmV0dXJuICdydG1wX2hscycgfVxuICBnZXQgdGFnTmFtZSgpIHsgcmV0dXJuICdkaXYnIH1cbiAgLy9UZW1wbGF0ZSBjb3BpZWQgZnJvbSBITFMgaW4gY2xhcHByXG4gIGdldCBobHNUZW1wbGF0ZSgpIHsgcmV0dXJuIHRlbXBsYXRlKCc8b2JqZWN0IGNsYXNzPVwiaGxzLXBsYXliYWNrXCIgZGF0YS1obHMgdHlwZT1cImFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwXCI+PHBhcmFtIG5hbWU9XCJtb3ZpZVwiIHZhbHVlPVwiPCU9IGJhc2VVcmwgJT4vYXNzZXRzL0hMU1BsYXllci5zd2Y/aW5saW5lPTFcIj48cGFyYW0gbmFtZT1cInF1YWxpdHlcIiB2YWx1ZT1cImF1dG9oaWdoXCI+PHBhcmFtIG5hbWU9XCJzd2xpdmVjb25uZWN0XCIgdmFsdWU9XCJ0cnVlXCI+PHBhcmFtIG5hbWU9XCJhbGxvd1NjcmlwdEFjY2Vzc1wiIHZhbHVlPVwiYWx3YXlzXCI+PHBhcmFtIG5hbWU9XCJiZ2NvbG9yXCIgdmFsdWU9XCIjMDAxMTIyXCI+PHBhcmFtIG5hbWU9XCJhbGxvd0Z1bGxTY3JlZW5cIiB2YWx1ZT1cImZhbHNlXCI+PHBhcmFtIG5hbWU9XCJ3bW9kZVwiIHZhbHVlPVwidHJhbnNwYXJlbnRcIj48cGFyYW0gbmFtZT1cInRhYmluZGV4XCIgdmFsdWU9XCIxXCI+PHBhcmFtIG5hbWU9Rmxhc2hWYXJzIHZhbHVlPVwicGxheWJhY2tJZD08JT0gcGxheWJhY2tJZCAlPiZjYWxsYmFjaz08JT0gY2FsbGJhY2tOYW1lICU+XCIgLz48ZW1iZWQgdHlwZT1cImFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoXCIgdGFiaW5kZXg9XCIxXCIgZW5hYmxlY29udGV4dG1lbnU9XCJmYWxzZVwiIGFsbG93U2NyaXB0QWNjZXNzPVwiYWx3YXlzXCIgcXVhbGl0eT1cImF1dG9oaWdoXCIgcGx1Z2luc3BhZ2U9XCJodHRwOi8vd3d3Lm1hY3JvbWVkaWEuY29tL2dvL2dldGZsYXNocGxheWVyXCIgd21vZGU9XCJ0cmFuc3BhcmVudFwiIHN3bGl2ZWNvbm5lY3Q9XCJ0cnVlXCIgdHlwZT1cImFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoXCIgYWxsb3dmdWxsc2NyZWVuPVwiZmFsc2VcIiBiZ2NvbG9yPVwiIzAwMDAwMFwiIEZsYXNoVmFycz1cInBsYXliYWNrSWQ9PCU9IHBsYXliYWNrSWQgJT4mY2FsbGJhY2s9PCU9IGNhbGxiYWNrTmFtZSAlPlwiIHNyYz1cIjwlPSBiYXNlVXJsICU+L2Fzc2V0cy9ITFNQbGF5ZXIuc3dmXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPjwvZW1iZWQ+PC9vYmplY3Q+JykgfVxuICBnZXQgcnRtcFRlbXBsYXRlKCkgeyByZXR1cm4gSlNULnJ0bXAgfVxuICBnZXQgY2xhcHBySWQoKSB7IHJldHVybiB0aGlzLmNpZCB9XG4gIGdldCBhdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnY2xhc3MnOiAncnRtcEhsc0NvbnRhaW5lcicsXG4gICAgICAnc3R5bGUnOiAnaGVpZ2h0OiAxMDAlOydcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucylcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLnNyYyA9IG9wdGlvbnMuaGxzLnNyYyAvL1NldCB0aGlzIGp1c3QgaW4gY2FzZSAtIHdoYXQgaGFwcGVucyBpZiB3ZSByZW1vdmUgaXQ/XG5cbiAgICAvL1RPRE86IHRoaXMgaXMgYSBoYWNrLlxuICAgIHRoaXMudW5pcXVlSWRTdGFydCA9IDEwMDtcbiAgICB0aGlzLmhsc0NpZCA9ICdjJysoKyt0aGlzLnVuaXF1ZUlkU3RhcnQpO1xuICAgIHRoaXMuaGxzVW5pcXVlSWQgPSAnbycrKCsrdGhpcy51bmlxdWVJZFN0YXJ0KTtcbiAgICB0aGlzLnJ0bXBDaWQgPSAnYycrKCsrdGhpcy51bmlxdWVJZFN0YXJ0KTtcbiAgICB0aGlzLnJ0bXBVbmlxdWVJZCA9ICdvJysoKyt0aGlzLnVuaXF1ZUlkU3RhcnQpO1xuXG4gICAgdGhpcy5ib290c3RyYXBDb3VudCA9IDBcblxuICAgIC8vSExTIE9wdGlvbnNcbiAgICB0aGlzLmhscyA9IHt9XG4gICAgdGhpcy5obHMuYmFzZVVybCA9IG9wdGlvbnMuYmFzZVVybDtcbiAgICB0aGlzLmhscy5mbHVzaExpdmVVUkxDYWNoZSA9IChvcHRpb25zLmhscy5mbHVzaExpdmVVUkxDYWNoZSA9PT0gdW5kZWZpbmVkKSA/IHRydWUgOiBvcHRpb25zLmhscy5mbHVzaExpdmVVUkxDYWNoZVxuICAgIHRoaXMuaGxzLmNhcExldmVsVG9TdGFnZSA9IChvcHRpb25zLmhscy5jYXBMZXZlbFRvU3RhZ2UgPT09IHVuZGVmaW5lZCkgPyBmYWxzZSA6IG9wdGlvbnMuaGxzLmNhcExldmVsVG9TdGFnZVxuICAgIHRoaXMuaGxzLnVzZUhhcmR3YXJlVmlkZW9EZWNvZGVyID0gKG9wdGlvbnMuaGxzLnVzZUhhcmR3YXJlVmlkZW9EZWNvZGVyID09PSB1bmRlZmluZWQpID8gIUJyb3dzZXIuaXNDaHJvbWUgOiBvcHRpb25zLmhscy51c2VIYXJkd2FyZVZpZGVvRGVjb2RlclxuICAgIHRoaXMuaGxzLm1heEJ1ZmZlckxlbmd0aCA9IChvcHRpb25zLmhscy5tYXhCdWZmZXJMZW5ndGggPT09IHVuZGVmaW5lZCkgPyAxMjAgOiBvcHRpb25zLmhscy5tYXhCdWZmZXJMZW5ndGhcbiAgICB0aGlzLmhscy5obHNNaW5pbXVtRHZyU2l6ZSA9IChvcHRpb25zLmhscy5obHNNaW5pbXVtRHZyU2l6ZSA9PSB1bmRlZmluZWQpID8gNjAgOiBvcHRpb25zLmhscy5obHNNaW5pbXVtRHZyU2l6ZVxuXG4gICAgLy9SVE1QIE9wdGlvbnNcbiAgICB0aGlzLnJ0bXAgPSB7fVxuICAgIHRoaXMucnRtcC5zcmMgPSBvcHRpb25zLnJ0bXAuc3JjXG4gICAgdGhpcy5ydG1wLmJhc2VVcmwgPSBvcHRpb25zLmJhc2VVcmw7XG4gICAgdGhpcy5ydG1wLnN3ZlBhdGggPSBcIi9hc3NldHMvUlRNUC5zd2ZcIlxuXG4gICAgLy9HZW5lcmFsIHBsYXllciBvcHRpb25zXG4gICAgdGhpcy5oaWdoRGVmaW5pdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5hdXRvUGxheSA9IG9wdGlvbnMuYXV0b1BsYXlcbiAgICB0aGlzLmRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgICAgIGxlZnQ6IFtcInBsYXlzdG9wXCJdLFxuICAgICAgZGVmYXVsdDogWydzZWVrYmFyJ10sXG4gICAgICByaWdodDogW1wiZnVsbHNjcmVlblwiXSxcbiAgICAgIHNlZWtFbmFibGVkOiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMucGxheWJhY2tUeXBlID0gJ2xpdmUnXG4gICAgdGhpcy5zZXR0aW5ncy5zZWVrRW5hYmxlZCA9IHRydWUgLy9TaG91bGQgYWx3YXlzIGJlIHRydWVcblxuICAgIHRoaXMuc2V0dGluZ3MgPSBhc3NpZ24oe30sIHRoaXMuZGVmYXVsdFNldHRpbmdzKVxuICAgIC8vdGhpcy50cmlnZ2VyKEV2ZW50cy5QTEFZQkFDS19TRVRUSU5HU1VQREFURSlcblxuICAgIHRoaXMuYWRkTGlzdGVuZXJzKClcbiAgfVxuXG4gIGFkZExpc3RlbmVycygpIHtcbiAgXHQvL0hMU1xuICAgIE1lZGlhdG9yLm9uKHRoaXMuaGxzQ2lkICsgJzpmbGFzaHJlYWR5JywgKCkgPT4gdGhpcy5ib290c3RyYXAoKSlcbiAgICBNZWRpYXRvci5vbih0aGlzLmhsc0NpZCArICc6dGltZXVwZGF0ZScsICh0aW1lTWV0cmljcykgPT4gdGhpcy51cGRhdGVUaW1lKHRpbWVNZXRyaWNzKSlcbiAgICBcbiAgICAvL1JUTVBcbiAgICBNZWRpYXRvci5vbih0aGlzLnJ0bXBVbmlxdWVJZCArICc6Zmxhc2hyZWFkeScsIHRoaXMuYm9vdHN0cmFwLCB0aGlzKVxuICB9XG5cblxuICBhZGRIbHNMaXN0ZW5lcnMoKXtcbiAgXHRcbiAgICBNZWRpYXRvci5vbih0aGlzLmhsc0NpZCArICc6cGxheWJhY2tzdGF0ZScsIChzdGF0ZSkgPT4gdGhpcy5zZXRQbGF5YmFja1N0YXRlKHN0YXRlKSlcbiAgICBNZWRpYXRvci5vbih0aGlzLmhsc0NpZCArICc6bGV2ZWxjaGFuZ2VkJywgKGxldmVsKSA9PiB0aGlzLnVwZGF0ZUhpZ2hEZWZpbml0aW9uKGxldmVsKSlcbiAgICBNZWRpYXRvci5vbih0aGlzLmhsc0NpZCArICc6cGxheWJhY2tlcnJvcicsICgpID0+IHRoaXMuZmxhc2hQbGF5YmFja0Vycm9yKCkpXG4gIH1cblxuICByZW1vdmVIbHNMaXN0ZW5lcnMoKXtcbiAgXHQvL01lZGlhdG9yLm9mZih0aGlzLmhsc0NpZCArICc6dGltZXVwZGF0ZScpXG4gICAgTWVkaWF0b3Iub2ZmKHRoaXMuaGxzQ2lkICsgJzpwbGF5YmFja3N0YXRlJylcbiAgICBNZWRpYXRvci5vZmYodGhpcy5obHNDaWQgKyAnOmxldmVsY2hhbmdlZCcpXG4gICAgTWVkaWF0b3Iub2ZmKHRoaXMuaGxzQ2lkICsgJzpwbGF5YmFja2Vycm9yJylcbiAgfVxuXG4gIGFkZFJ0bXBMaXN0ZW5lcnMoKXtcbiAgXHRNZWRpYXRvci5vbih0aGlzLnJ0bXBVbmlxdWVJZCArICc6cHJvZ3Jlc3MnLCB0aGlzLnJ0bXBQcm9ncmVzcywgdGhpcylcbiAgICBNZWRpYXRvci5vbih0aGlzLnJ0bXBVbmlxdWVJZCArICc6dGltZXVwZGF0ZScsIHRoaXMucnRtcFVwZGF0ZVRpbWUsIHRoaXMpXG4gICAgTWVkaWF0b3Iub24odGhpcy5ydG1wVW5pcXVlSWQgKyAnOnN0YXRlY2hhbmdlZCcsIHRoaXMucnRtcENoZWNrU3RhdGUsIHRoaXMpXG4gIH1cblxuICByZW1vdmVSdG1wTGlzdGVuZXJzKCl7XG4gIFx0TWVkaWF0b3Iub2ZmKHRoaXMucnRtcFVuaXF1ZUlkICsgJzpwcm9ncmVzcycpXG4gICAgTWVkaWF0b3Iub2ZmKHRoaXMucnRtcFVuaXF1ZUlkICsgJzp0aW1ldXBkYXRlJylcbiAgICBNZWRpYXRvci5vZmYodGhpcy5ydG1wVW5pcXVlSWQgKyAnOnN0YXRlY2hhbmdlZCcpXG4gIH1cblxuXG4gIHN0b3BMaXN0ZW5pbmcoKSB7XG4gICAgc3VwZXIuc3RvcExpc3RlbmluZygpXG5cbiAgICAvL0hMU1xuICAgIE1lZGlhdG9yLm9mZih0aGlzLmhsc0NpZCArICc6Zmxhc2hyZWFkeScpXG4gICAgTWVkaWF0b3Iub2ZmKHRoaXMuaGxzQ2lkICsgJzp0aW1ldXBkYXRlJylcbiAgICBNZWRpYXRvci5vZmYodGhpcy5obHNDaWQgKyAnOnBsYXliYWNrc3RhdGUnKVxuICAgIE1lZGlhdG9yLm9mZih0aGlzLmhsc0NpZCArICc6bGV2ZWxjaGFuZ2VkJylcbiAgICBNZWRpYXRvci5vZmYodGhpcy5obHNDaWQgKyAnOnBsYXliYWNrZXJyb3InKVxuXG4gICAgLy9SVE1QXG4gICAgTWVkaWF0b3Iub2ZmKHRoaXMucnRtcFVuaXF1ZUlkICsgJzpwcm9ncmVzcycpXG4gICAgTWVkaWF0b3Iub2ZmKHRoaXMucnRtcFVuaXF1ZUlkICsgJzp0aW1ldXBkYXRlJylcbiAgICBNZWRpYXRvci5vZmYodGhpcy5ydG1wVW5pcXVlSWQgKyAnOnN0YXRlY2hhbmdlZCcpXG4gICAgTWVkaWF0b3Iub2ZmKHRoaXMucnRtcFVuaXF1ZUlkICsgJzpmbGFzaHJlYWR5JylcbiAgfVxuXG5cbiAgYm9vdHN0cmFwKCkge1xuXG4gIFx0aWYoKyt0aGlzLmJvb3RzdHJhcENvdW50ICE9IDIpIHJldHVybjsgLy9XYWl0IGZvciB0aGUgb3RoZXIgcGxheWVyIHRvIGJvb3RzdHJhcFxuXG4gICAgdGhpcy5lbC53aWR0aCA9IFwiMTAwJVwiXG4gICAgdGhpcy5lbC5oZWlnaHQgPSBcIjEwMCVcIlxuICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB0aGlzLnNyY0xvYWRlZCA9IGZhbHNlXG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSBcIklETEVcIlxuICAgIHRoaXMuc2V0SGxzRmxhc2hTZXR0aW5ncygpXG5cbiAgICB0aGlzLnVwZGF0ZVBsYXliYWNrVHlwZSgpXG4gICAgXG4gICAgdGhpcy5hZGRSdG1wTGlzdGVuZXJzKClcbiAgICAkKHRoaXMuaGxzRWwpLmNzcygnZGlzcGxheScsICdoaWRkZW4nKVxuXG4gICAgdGhpcy5hdXRvUGxheSAmJiB0aGlzLnBsYXkoKVxuICAgIHRoaXMudHJpZ2dlcihFdmVudHMuUExBWUJBQ0tfUkVBRFksIHRoaXMubmFtZSlcbiAgfVxuXG4gIGNoYW5nZVBsYXllcihuZXdQbGF5ZXIpe1xuICBcdHRoaXMuY3VycmVudFBsYXllciA9IG5ld1BsYXllclxuICBcdGlmKG5ld1BsYXllciA9PSAnUlRNUCcpe1xuICBcdFx0dGhpcy4kaGxzRWwuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gIFx0XHR0aGlzLiRydG1wRWwuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICBcdFx0dGhpcy5obHNFbC5wbGF5ZXJTdG9wKClcbiAgXHRcdHRoaXMucmVtb3ZlSGxzTGlzdGVuZXJzKClcbiAgXHRcdHRoaXMuYWRkUnRtcExpc3RlbmVycygpXG4gIFx0XHR0aGlzLnBsYXkoKVxuICBcdFx0Ly90aGlzLnJ0bXBFbC5wbGF5ZXJQbGF5KHRoaXMucnRtcC5zcmMpXG4gIFx0XHQvL3RoaXMuaGxzRWwucGxheWVyU3RvcCgpXG4gICAgXHQvL3RoaXMuY3VycmVudFN0YXRlID0gXCJQTEFZSU5HXCJcblxuICAgIFx0Ly90aGlzLmhsc0VsLnBsYXllckxvYWQodGhpcy5vcHRpb25zLmhscy5zcmMpXG4gICAgXHQvL01lZGlhdG9yLm9uKHRoaXMuaGxzQ2lkICsgJzptYW5pZmVzdGxvYWRlZCcsIHRoaXMubWFuaWZlc3RSZWZyZXNoZWQsIHRoaXMpXG4gIFx0fWVsc2V7XG4gIFx0XHR0aGlzLiRobHNFbC5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gIFx0XHR0aGlzLiRydG1wRWwuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gIFx0XHR0aGlzLnJ0bXBFbC5wbGF5ZXJQYXVzZSgpXG4gIFx0XHR0aGlzLnJlbW92ZVJ0bXBMaXN0ZW5lcnMoKVxuICBcdFx0XG4gIFx0XHR0aGlzLmFkZEhsc0xpc3RlbmVycygpXG5cbiAgXHR9XG5cbiAgXHRcbiAgfVxuXG4gIHNldEhsc0ZsYXNoU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5obHNFbC5wbGF5ZXJTZXRmbHVzaExpdmVVUkxDYWNoZSh0aGlzLmhscy5mbHVzaExpdmVVUkxDYWNoZSlcbiAgICB0aGlzLmhsc0VsLnBsYXllckNhcExldmVsdG9TdGFnZSh0aGlzLmhscy5jYXBMZXZlbFRvU3RhZ2UpXG4gICAgdGhpcy5obHNFbC5wbGF5ZXJTZXRtYXhCdWZmZXJMZW5ndGgodGhpcy5obHMubWF4QnVmZmVyTGVuZ3RoKVxuICAgIHRoaXMuaGxzRWwucGxheWVyU2V0VXNlSGFyZHdhcmVWaWRlb0RlY29kZXIodGhpcy5obHMudXNlSGFyZHdhcmVWaWRlb0RlY29kZXIpXG4gIH1cblxuICB1cGRhdGVIaWdoRGVmaW5pdGlvbihsZXZlbCkge1xuICAgIHZhciBjdXJyZW50TGV2ZWwgPSB0aGlzLmdldExldmVscygpW2xldmVsXVxuICAgIHRoaXMuaGlnaERlZmluaXRpb24gPSAoY3VycmVudExldmVsLmhlaWdodCA+PSA3MjAgfHwgKGN1cnJlbnRMZXZlbC5iaXRyYXRlIC8gMTAwMCkgPj0gMjAwMCk7XG4gICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5QTEFZQkFDS19ISUdIREVGSU5JVElPTlVQREFURSlcbiAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLlBMQVlCQUNLX0JJVFJBVEUsIHsnYml0cmF0ZSc6IHRoaXMuZ2V0Q3VycmVudEJpdHJhdGUoKX0pXG4gIH1cblxuICB1cGRhdGVUaW1lKHRpbWVNZXRyaWNzKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFN0YXRlID09PSAnSURMRScpIHJldHVyblxuXG4gICAgdmFyIGR1cmF0aW9uID0gdGhpcy5ub3JtYWxpemVEdXJhdGlvbih0aW1lTWV0cmljcy5kdXJhdGlvbilcbiAgICB2YXIgcG9zaXRpb24gPSBNYXRoLm1pbihNYXRoLm1heCh0aW1lTWV0cmljcy5wb3NpdGlvbiwgMCksIGR1cmF0aW9uKVxuICAgIHZhciBwcmV2aW91c0RWUlN0YXR1cyA9IHRoaXMuZHZyRW5hYmxlZFxuICAgIHZhciBsaXZlUGxheWJhY2sgPSAodGhpcy5wbGF5YmFja1R5cGUgPT09ICdsaXZlJylcbiAgICB0aGlzLmR2ckVuYWJsZWQgPSAobGl2ZVBsYXliYWNrICYmIGR1cmF0aW9uID4gdGhpcy5obHMuaGxzTWluaW11bUR2clNpemUpXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wbGF5YmFja1R5cGUsIGR1cmF0aW9uLCB0aGlzLmhscy5obHNNaW5pbXVtRHZyU2l6ZSlcbiAgICBpZiAoZHVyYXRpb24gPT09IDEwMCB8fCBsaXZlUGxheWJhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmR2ckVuYWJsZWQgIT09IHByZXZpb3VzRFZSU3RhdHVzKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNldHRpbmdzKClcbiAgICAgIHRoaXMudHJpZ2dlcihFdmVudHMuUExBWUJBQ0tfU0VUVElOR1NVUERBVEUsIHRoaXMubmFtZSlcbiAgICB9XG5cbiAgICBpZiAobGl2ZVBsYXliYWNrICYmICghdGhpcy5kdnJFbmFibGVkIHx8ICF0aGlzLmR2ckluVXNlKSkge1xuICAgICAgcG9zaXRpb24gPSBkdXJhdGlvblxuICAgIH1cblxuICAgIHRoaXMudHJpZ2dlcihFdmVudHMuUExBWUJBQ0tfVElNRVVQREFURSwgcG9zaXRpb24sIGR1cmF0aW9uLCB0aGlzLm5hbWUpXG4gIH1cblxuICBwbGF5KCkge1xuXG4gIFx0aWYgKCF0aGlzLnNyY0xvYWRlZCAmJiB0aGlzLmN1cnJlbnRTdGF0ZSAhPT0gXCJQTEFZSU5HXCIpIHJldHVybiB0aGlzLmZpcnN0UGxheSgpXG5cbiAgXHRzd2l0Y2godGhpcy5jdXJyZW50UGxheWVyKXtcbiAgXHRcdGNhc2UgJ1JUTVAnOlxuXHRcdCAgICB0aGlzLnJ0bXBFbC5wbGF5ZXJSZXN1bWUoKVxuXHRcdCAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLlBMQVlCQUNLX1BMQVksIHRoaXMubmFtZSlcblxuXHRcdCAgICBjb25zb2xlLmxvZygncGxheWluZycpXG4gIFx0XHRcdGJyZWFrO1xuXG4gIFx0XHRjYXNlICdITFMnOlxuICBcdFx0XHRpZih0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gJ1BBVVNFRCcpIHtcblx0XHRcdFx0dGhpcy5obHNFbC5wbGF5ZXJSZXN1bWUoKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5obHNFbC5wbGF5ZXJQbGF5KClcblx0XHRcdH1cbiAgXHRcdFx0YnJlYWs7XG4gIFx0fVxuICB9XG5cbiAgZ2V0UGxheWJhY2tUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXliYWNrVHlwZT8gdGhpcy5wbGF5YmFja1R5cGU6IG51bGxcbiAgfVxuXG4gIGdldEN1cnJlbnRCaXRyYXRlKCkge1xuICAgIHZhciBjdXJyZW50TGV2ZWwgPSB0aGlzLmdldExldmVscygpW3RoaXMuaGxzRWwuZ2V0TGV2ZWwoKV1cbiAgICByZXR1cm4gY3VycmVudExldmVsLmJpdHJhdGVcbiAgfVxuXG4gIGlzSGlnaERlZmluaXRpb25JblVzZSgpIHtcbiAgICByZXR1cm4gdGhpcy5oaWdoRGVmaW5pdGlvblxuICB9XG5cbiAgZ2V0TGV2ZWxzKCkge1xuICAgIGlmICghdGhpcy5sZXZlbHMgfHwgdGhpcy5sZXZlbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmxldmVscyA9IHRoaXMuaGxzRWwuZ2V0TGV2ZWxzKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGV2ZWxzXG4gIH1cblxuICBydG1wQ2hlY2tTdGF0ZSgpIHtcbiAgXHRpZih0aGlzLmN1cnJlbnRQbGF5ZXIgPT0gJ0hMUycpIHJldHVyblxuXG4gICAgaWYgKHRoaXMuY3VycmVudFN0YXRlID09PSBcIlBBVVNFRFwiKSB7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFN0YXRlICE9PSBcIlBMQVlJTkdfQlVGRkVSSU5HXCIgJiYgdGhpcy5ydG1wRWwuZ2V0U3RhdGUoKSA9PT0gXCJQTEFZSU5HX0JVRkZFUklOR1wiKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLlBMQVlCQUNLX0JVRkZFUklORywgdGhpcy5uYW1lKVxuICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBcIlBMQVlJTkdfQlVGRkVSSU5HXCJcbiAgICB9IGVsc2UgaWYgKHRoaXMucnRtcEVsLmdldFN0YXRlKCkgPT09IFwiUExBWUlOR1wiKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLlBMQVlCQUNLX0JVRkZFUkZVTEwsIHRoaXMubmFtZSlcbiAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gXCJQTEFZSU5HXCJcbiAgICB9IGVsc2UgaWYgKHRoaXMucnRtcEVsLmdldFN0YXRlKCkgPT09IFwiSURMRVwiKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFwiSURMRVwiXG4gICAgfSBlbHNlIGlmICh0aGlzLnJ0bXBFbC5nZXRTdGF0ZSgpID09PSBcIkVOREVEXCIpIHtcbiAgICAgIHRoaXMudHJpZ2dlcihFdmVudHMuUExBWUJBQ0tfRU5ERUQsIHRoaXMubmFtZSlcbiAgICAgIHRoaXMudHJpZ2dlcihFdmVudHMuUExBWUJBQ0tfVElNRVVQREFURSwgMCwgdGhpcy5ydG1wRWwuZ2V0RHVyYXRpb24oKSwgdGhpcy5uYW1lKVxuICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBcIkVOREVEXCJcbiAgICB9XG4gIH1cblxuICBydG1wUHJvZ3Jlc3MoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFN0YXRlICE9PSBcIklETEVcIiAmJiB0aGlzLmN1cnJlbnRTdGF0ZSAhPT0gXCJFTkRFRFwiKSB7XG4gICAgICAvL3RoaXMudHJpZ2dlcihFdmVudHMuUExBWUJBQ0tfUFJPR1JFU1MsIDAsIHRoaXMucnRtcEVsLmdldEJ5dGVzTG9hZGVkKCksIHRoaXMucnRtcEVsLmdldEJ5dGVzVG90YWwoKSwgdGhpcy5uYW1lKVxuICAgIH1cbiAgfVxuXG4gIHJ0bXBVcGRhdGVUaW1lKCkge1xuICAgIC8vdGhpcy50cmlnZ2VyKEV2ZW50cy5QTEFZQkFDS19USU1FVVBEQVRFLCB0aGlzLnJ0bXBFbC5nZXRQb3NpdGlvbigpLCB0aGlzLnJ0bXBFbC5nZXREdXJhdGlvbigpLCB0aGlzLm5hbWUpXG4gIH1cblxuICBzZXRQbGF5YmFja1N0YXRlKHN0YXRlKSB7XG4gIFx0aWYodGhpcy5jdXJyZW50UGxheWVyID09ICdSVE1QJykgcmV0dXJuXG5cbiAgICBpZiAoW1wiUExBWUlOR19CVUZGRVJJTkdcIiwgXCJQQVVTRURfQlVGRkVSSU5HXCJdLmluZGV4T2Yoc3RhdGUpID49IDApICB7XG4gICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLlBMQVlCQUNLX0JVRkZFUklORywgdGhpcy5uYW1lKVxuICAgICAgdGhpcy51cGRhdGVDdXJyZW50U3RhdGUoc3RhdGUpXG4gICAgfSBlbHNlIGlmIChbXCJQTEFZSU5HXCIsIFwiUEFVU0VEXCJdLmluZGV4T2Yoc3RhdGUpID49IDApIHtcbiAgICAgIGlmIChbXCJQTEFZSU5HX0JVRkZFUklOR1wiLCBcIlBBVVNFRF9CVUZGRVJJTkdcIiwgXCJJRExFXCJdLmluZGV4T2YodGhpcy5jdXJyZW50U3RhdGUpID49IDApIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5QTEFZQkFDS19CVUZGRVJGVUxMLCB0aGlzLm5hbWUpXG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRTdGF0ZShzdGF0ZSlcbiAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBcIklETEVcIikge1xuICAgICAgdGhpcy51cGRhdGVDdXJyZW50U3RhdGUoc3RhdGUpXG4gICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLlBMQVlCQUNLX1RJTUVVUERBVEUsIDAsIHRoaXMuaGxzRWwuZ2V0RHVyYXRpb24oKSwgdGhpcy5uYW1lKVxuICAgICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5QTEFZQkFDS19FTkRFRCwgdGhpcy5uYW1lKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUN1cnJlbnRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuY3VycmVudFN0YXRlID0gc3RhdGVcbiAgICB0aGlzLnVwZGF0ZVBsYXliYWNrVHlwZSgpXG4gICAgaWYgKHN0YXRlID09PSBcIlBMQVlJTkdcIikge1xuICAgICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5QTEFZQkFDS19QTEFZLCB0aGlzLm5hbWUpXG4gICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gXCJQQVVTRURcIikge1xuICAgICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5QTEFZQkFDS19QQVVTRSwgdGhpcy5uYW1lKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVBsYXliYWNrVHlwZSgpIHtcbiAgICB0aGlzLnBsYXliYWNrVHlwZSA9ICdsaXZlJyAvL1RPRE86IEhBQ0s/ISB3YXMgdGhpcy5obHNFbC5nZXRUeXBlKClcbiAgICBpZiAodGhpcy5wbGF5YmFja1R5cGUpIHtcbiAgICAgIHRoaXMucGxheWJhY2tUeXBlID0gdGhpcy5wbGF5YmFja1R5cGUudG9Mb3dlckNhc2UoKVxuICAgICAgaWYgKHRoaXMucGxheWJhY2tUeXBlID09PSAndm9kJykge1xuICAgICAgICB0aGlzLnN0YXJ0UmVwb3J0aW5nUHJvZ3Jlc3MoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9wUmVwb3J0aW5nUHJvZ3Jlc3MoKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLlBMQVlCQUNLX1BMQVlCQUNLU1RBVEUpXG4gIH1cblxuICBzdGFydFJlcG9ydGluZ1Byb2dyZXNzKCkge1xuICAgIGlmICghdGhpcy5yZXBvcnRpbmdQcm9ncmVzcykge1xuICAgICAgdGhpcy5yZXBvcnRpbmdQcm9ncmVzcyA9IHRydWVcbiAgICAgIE1lZGlhdG9yLm9uKHRoaXMuaGxzQ2lkICsgJzpmcmFnbWVudGxvYWRlZCcsKCkgPT4gdGhpcy5vbkZyYWdtZW50TG9hZGVkKCkpXG4gICAgfVxuICB9XG5cbiAgc3RvcFJlcG9ydGluZ1Byb2dyZXNzKCkge1xuICAgIE1lZGlhdG9yLm9mZih0aGlzLmhsc0NpZCArICc6ZnJhZ21lbnRsb2FkZWQnLCB0aGlzLm9uRnJhZ21lbnRMb2FkZWQsIHRoaXMpXG4gIH1cblxuICBvbkZyYWdtZW50TG9hZGVkKCkge1xuICAgIHZhciBidWZmZXJlZCA9IHRoaXMuaGxzRWwuZ2V0UG9zaXRpb24oKSArIHRoaXMuaGxzRWwuZ2V0YnVmZmVyTGVuZ3RoKClcbiAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLlBMQVlCQUNLX1BST0dSRVNTLCB0aGlzLmhsc0VsLmdldFBvc2l0aW9uKCksIGJ1ZmZlcmVkLCB0aGlzLmhsc0VsLmdldER1cmF0aW9uKCksIHRoaXMubmFtZSlcbiAgfVxuXG5cbiAgbWFuaWZlc3RSZWZyZXNoZWQoZHVyYXRpb24sIGxvYWRtZXRyaWNzKSB7XG4gIFx0aWYodGhpcy5jdXJyZW50UGxheWVyID09ICdITFMnKSByZXR1cm5cblxuICBcdGNvbnNvbGUubG9nKCdtYW5pZmVzdFJlZnJlc2hlZCcsIHRoaXMuaGxzRWwuZ2V0RHVyYXRpb24oKSlcblxuICBcdHRoaXMudXBkYXRlVGltZSh7XG4gIFx0XHRwb3NpdGlvbjogdGhpcy5obHNFbC5nZXREdXJhdGlvbigpLTEsIC8vRmFrZSB0aGlzLCB3ZSdyZSBwcmV0ZW5kaW5nIHdlJ3JlIGF0IHRoZSBlbmQgYXMgd2UncmUgdXNpbmcgUlRNUCBhdCB0aGUgbW9tZW50XG4gIFx0XHRkdXJhdGlvbjogdGhpcy5obHNFbC5nZXREdXJhdGlvbigpXG4gIFx0fSk7XG5cbiAgXHRcbiAgXHR2YXIgc2VsZiA9IHRoaXNcbiAgXHRcbiAgXHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICBcdFx0aWYoc2VsZi5jdXJyZW50UGxheWVyID09ICdITFMnKSByZXR1cm47XG5cbiAgXHRcdHNlbGYuaGxzRWwucGxheWVyU3RvcCgpO1xuXG4gIFx0XHRzZWxmLmhsc0VsLnBsYXllckxvYWQoc2VsZi5vcHRpb25zLmhscy5zcmMpO1xuICBcdH0sIDMwMDApO1xuXG4gIH1cblxuXG4gIGZpcnN0UGxheSgpIHtcbiAgICB0aGlzLnNldEhsc0ZsYXNoU2V0dGluZ3MoKSAvL2Vuc3VyZSBmbHVzaExpdmVVUkxDYWNoZSB3aWxsIHdvcmsgKCMzMjcpXG5cbiAgICB0aGlzLnJ0bXBFbC5wbGF5ZXJQbGF5KHRoaXMucnRtcC5zcmMpXG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSBcIlBMQVlJTkdcIlxuXG4gICAgdGhpcy5obHNFbC5wbGF5ZXJMb2FkKHRoaXMub3B0aW9ucy5obHMuc3JjKVxuICAgIE1lZGlhdG9yLm9uKHRoaXMuaGxzQ2lkICsgJzptYW5pZmVzdGxvYWRlZCcsIHRoaXMubWFuaWZlc3RSZWZyZXNoZWQsIHRoaXMpXG4gICAgdGhpcy5zcmNMb2FkZWQgPSB0cnVlXG4gIH1cblxuICB2b2x1bWUodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pc1JlYWR5KSB7XG4gICAgICB0aGlzLmhsc0VsLnBsYXllclZvbHVtZSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0ZW5Ub09uY2UodGhpcywgRXZlbnRzLlBMQVlCQUNLX0JVRkZFUkZVTEwsICgpID0+IHRoaXMudm9sdW1lKHZhbHVlKSlcbiAgICB9XG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICBpZiAodGhpcy5wbGF5YmFja1R5cGUgIT09ICdsaXZlJyB8fCB0aGlzLmR2ckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuaGxzRWwucGxheWVyUGF1c2UoKVxuICAgICAgaWYgKHRoaXMucGxheWJhY2tUeXBlID09PSAnbGl2ZScgJiYgdGhpcy5kdnJFbmFibGVkKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRHZyKHRydWUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLmhsc0VsLnBsYXllclN0b3AoKVxuICAgIHRoaXMudHJpZ2dlcihFdmVudHMuUExBWUJBQ0tfVElNRVVQREFURSwgMCwgdGhpcy5uYW1lKVxuICB9XG5cbiAgaXNQbGF5aW5nKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSkge1xuICAgICAgcmV0dXJuICEhKHRoaXMuY3VycmVudFN0YXRlLm1hdGNoKC9wbGF5aW5nL2kpKVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGdldER1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZUR1cmF0aW9uKHRoaXMuaGxzRWwuZ2V0RHVyYXRpb24oKSlcbiAgfVxuXG4gIG5vcm1hbGl6ZUR1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgcmV0dXJuIGR1cmF0aW9uIC0gMTBcbiAgfVxuXG4gIHNlZWsodGltZSkge1xuICAgIHZhciBkdXJhdGlvbiA9IHRoaXMuaGxzRWwuZ2V0RHVyYXRpb24oKVxuICAgIGlmICh0aW1lID4gMCkge1xuICAgICAgdGltZSA9IGR1cmF0aW9uICogdGltZSAvIDEwMFxuICAgIH1cblxuICAgIC8vIHNlZWsgb3BlcmF0aW9ucyB0byBhIHRpbWUgd2l0aGluIDUgc2Vjb25kcyBmcm9tIGxpdmUgc3RyZWFtIHdpbGwgcG9zaXRpb24gcGxheWhlYWQgYmFjayB0byBsaXZlXG4gICAgdmFyIGR2ckluVXNlID0gKHRpbWUgPj0gMCAmJiBkdXJhdGlvbiAtIHRpbWUgPiA1KVxuICAgIGlmICghZHZySW5Vc2UpIHtcbiAgICAgIHRoaXMuY2hhbmdlUGxheWVyKCdSVE1QJyk7XG4gICAgICB0aW1lID0gZHVyYXRpb24gLSAxXG4gICAgfWVsc2V7XG4gICAgXHRjb25zb2xlLmxvZygnU0VFS0lORyEhIScpXG4gICAgICB0aGlzLmNoYW5nZVBsYXllcignSExTJyk7XG4gICAgICAvL3RoaXMuaGxzRWwucGxheWVyU3RvcCgpO1xuICAgICAgLy90aGlzLmhsc0VsLnBsYXllckxvYWQodGhpcy5vcHRpb25zLmhscy5zcmMpO1xuXG4gICAgICAgLy9NZWRpYXRvci5vbmNlKHRoaXMuaGxzQ2lkICsgJzptYW5pZmVzdGxvYWRlZCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgXHQvL2NvbnNvbGUubG9nKCdtYW5pZmVzdGxvYWRlZCcpXG4gICAgICAgXHQvL3RoaXMuaGxzRWwucGxheWVyUGxheSgpXG4gICAgICAgXHR0aGlzLmhsc0VsLnBsYXllclNlZWsodGltZSlcblx0ICAgIHRoaXMudHJpZ2dlcihFdmVudHMuUExBWUJBQ0tfVElNRVVQREFURSwgdGltZSwgZHVyYXRpb24sIHRoaXMubmFtZSlcblx0ICAgIHRoaXMudHJpZ2dlcihFdmVudHMuUExBWUJBQ0tfSElHSERFRklOSVRJT05VUERBVEUpXG4gICAgICAgLy99LCB0aGlzKVxuXG4gICAgfVxuXG4gICAgXG5cbiAgICB0aGlzLnVwZGF0ZUR2cihkdnJJblVzZSlcbiAgfVxuXG4gIHVwZGF0ZUR2cihkdnJJblVzZSkge1xuICAgIHZhciBwcmV2aW91c0R2ckluVXNlID0gISF0aGlzLmR2ckluVXNlXG4gICAgdGhpcy5kdnJJblVzZSA9IGR2ckluVXNlXG4gICAgaWYgKHRoaXMuZHZySW5Vc2UgIT09IHByZXZpb3VzRHZySW5Vc2UpIHtcbiAgICAgIHRoaXMudXBkYXRlU2V0dGluZ3MoKVxuICAgICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5QTEFZQkFDS19EVlIsIHRoaXMuZHZySW5Vc2UpXG4gICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLlBMQVlCQUNLX1NUQVRTX0FERCwgeydkdnInOiB0aGlzLmR2ckluVXNlfSlcbiAgICB9XG4gIH1cblxuICBmbGFzaFBsYXliYWNrRXJyb3IoKSB7XG4gICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5QTEFZQkFDS19TVE9QKVxuICB9XG5cbiAgdGltZVVwZGF0ZSh0aW1lLCBkdXJhdGlvbikge1xuICAgIHRoaXMudHJpZ2dlcihFdmVudHMuUExBWUJBQ0tfVElNRVVQREFURSwgdGltZSwgZHVyYXRpb24sIHRoaXMubmFtZSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdG9wTGlzdGVuaW5nKClcbiAgICB0aGlzLiRobHNFbC5yZW1vdmUoKVxuICAgIHRoaXMuJHJ0bXBFbC5yZW1vdmUoKVxuICB9XG5cbiAgdXBkYXRlU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IGFzc2lnbih7fSwgdGhpcy5kZWZhdWx0U2V0dGluZ3MpXG4gICAgaWYgKHRoaXMucGxheWJhY2tUeXBlID09PSBcInZvZFwiIHx8IHRoaXMuZHZySW5Vc2UpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3MubGVmdCA9IFtcInBsYXlwYXVzZVwiLCBcInBvc2l0aW9uXCIsIFwiZHVyYXRpb25cIl1cbiAgICAgIHRoaXMuc2V0dGluZ3Muc2Vla0VuYWJsZWQgPSB0cnVlXG4gICAgfSBlbHNlIGlmICh0aGlzLmR2ckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3MubGVmdCA9IFtcInBsYXlwYXVzZVwiXVxuICAgICAgdGhpcy5zZXR0aW5ncy5zZWVrRW5hYmxlZCA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXR0aW5ncy5zZWVrRW5hYmxlZCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgc2V0RWxlbWVudChlbGVtZW50KSB7XG4gICAgdGhpcy4kZWwgPSBlbGVtZW50XG4gICAgdGhpcy5lbCA9IGVsZW1lbnRbMF1cbiAgfVxuXG4gIGNyZWF0ZUNhbGxiYWNrcygpIHtcbiAgICBpZiAoIXdpbmRvdy5DbGFwcHIuZmxhc2hsc0NhbGxiYWNrcykge1xuICAgICAgd2luZG93LkNsYXBwci5mbGFzaGxzQ2FsbGJhY2tzID0ge31cbiAgICB9XG4gICAgdGhpcy5mbGFzaGxzRXZlbnRzID0gbmV3IEhMU0V2ZW50cyh0aGlzLmhsc0NpZClcbiAgICB3aW5kb3cuQ2xhcHByLmZsYXNobHNDYWxsYmFja3NbdGhpcy5obHNDaWRdID0gKGV2ZW50TmFtZSwgYXJncykgPT4ge1xuICAgICAgdGhpcy5mbGFzaGxzRXZlbnRzW2V2ZW50TmFtZV0uYXBwbHkodGhpcy5mbGFzaGxzRXZlbnRzLCBhcmdzKVxuICAgIH1cbiAgfVxuXG5cblx0cnRtcFJlbmRlcigpe1xuXHRcdHRoaXMuJHJ0bXBFbCA9ICQodGhpcy5ydG1wVGVtcGxhdGUoeyBjaWQ6IHRoaXMucnRtcENpZCwgc3dmUGF0aDogdGhpcy5ydG1wLnN3ZlBhdGgsIHBsYXliYWNrSWQ6IHRoaXMucnRtcFVuaXF1ZUlkIH0pKVxuXHRcdGlmKEJyb3dzZXIuaXNGaXJlZm94KSB7XG5cdFx0XHR0aGlzLiRydG1wRWwuYXR0cignZGF0YS1mbGFzaCcsICcnKVxuXHRcdH0gZWxzZSBpZiAoQnJvd3Nlci5pc0xlZ2FjeUlFKSB7XG5cdFx0XHR0aGlzLiRydG1wRWwgPSAkKHRlbXBsYXRlKG9iamVjdElFKSh7IGNpZDogdGhpcy5ydG1wQ2lkLCBiYXNlVXJsOiB0aGlzLnJ0bXAuYmFzZVVybCwgcGxheWJhY2tJZDogdGhpcy5ydG1wVW5pcXVlSWQgfSkpXG5cdFx0fVxuXHRcdHRoaXMucnRtcEVsID0gdGhpcy4kcnRtcEVsWzBdXG5cdFx0dGhpcy4kZWwuYXBwZW5kKHRoaXMuJHJ0bXBFbClcblx0fVxuXG5cdGhsc1JlbmRlcigpe1xuXHRcdHZhciBzdHlsZSA9IFtcblx0XHRcdCc8c3R5bGUgY2xhc3M9XCJjbGFwcHItc3R5bGVcIj4nLFxuXHRcdFx0J1tkYXRhLWhsc117cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jaztwb2ludGVyLWV2ZW50czpub25lO3RvcDowO2hlaWdodDoxMDAlfScsXG5cdFx0XHQnPC9zdHlsZT4nXG5cdFx0XS5qb2luKCcnKVxuXG5cdFx0dGhpcy4kaGxzRWwgPSB7fVxuXG5cdFx0aWYoQnJvd3Nlci5pc0xlZ2FjeUlFKSB7XG5cdFx0XHR0aGlzLiRobHNFbCA9ICQodGVtcGxhdGUob2JqZWN0SUUpKHtjaWQ6IHRoaXMuaGxzQ2lkLCBiYXNlVXJsOiB0aGlzLnJ0bXAuYmFzZVVybCwgcGxheWJhY2tJZDogdGhpcy5obHNVbmlxdWVJZH0pKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgY2FsbGJhY2tOYW1lID0gdGhpcy5jcmVhdGVDYWxsYmFja3MoKVxuXHRcdFx0dGhpcy4kaGxzRWwgPSAkKHRoaXMuaGxzVGVtcGxhdGUoe2NpZDogdGhpcy5obHNDaWQsIGJhc2VVcmw6IHRoaXMucnRtcC5iYXNlVXJsLCBwbGF5YmFja0lkOiB0aGlzLmhsc1VuaXF1ZUlkLCBjYWxsYmFja05hbWU6IGB3aW5kb3cuQ2xhcHByLmZsYXNobHNDYWxsYmFja3MuJHt0aGlzLmhsc0NpZH1gfSkpXG5cdFx0XHRcblx0XHRcdGlmKEJyb3dzZXIuaXNGaXJlZm94KSB7XG5cdFx0XHRcdHRoaXMuJGhsc0VsLmF0dHIoJ2RhdGEtaGxzJywgJycpXG5cdFx0XHR9IGVsc2UgaWYgKEJyb3dzZXIuaXNJRSkge1xuXHRcdFx0XHR0aGlzLiRobHNFbC5hdHRyKCdlbWJlZCcpLnJlbW92ZSgpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdC8vdGhpcy5lbC5pZCA9IHRoaXMuY2lkIC8vPz8/Pz9cblx0XHR0aGlzLiRobHNFbC5hcHBlbmQoc3R5bGUpXG5cdFx0dGhpcy5obHNFbCA9IHRoaXMuJGhsc0VsWzBdXG5cdFx0dGhpcy4kZWwuYXBwZW5kKHRoaXMuJGhsc0VsKVxuXHR9XG5cbiAgcmVuZGVyKCkge1xuICBcdHRoaXMuJGVsLmh0bWwoJycpXG4gIFx0dGhpcy5obHNSZW5kZXIoKVxuICBcdHRoaXMucnRtcFJlbmRlcigpXG5cbiAgXHQvL3RoaXMuJGVsLmh0bWxcblxuICAgIC8qXG4gICAgLy9pZihCcm93c2VyLmlzTGVnYWN5SUUpIHtcbiAgICAvLyAgdGhpcy5zZXR1cElFKClcbiAgICAvL30gZWxzZSB7XG4gICAgICB2YXIgY2FsbGJhY2tOYW1lID0gdGhpcy5jcmVhdGVDYWxsYmFja3MoKVxuICAgICAgdmFyIGRpdkVsID0gJCh0aGlzLnRlbXBsYXRlKHtjaWQ6IHRoaXMuaGxzQ2lkLCBiYXNlVXJsOiB0aGlzLmJhc2VVcmwsIHBsYXliYWNrSWQ6IHRoaXMudW5pcXVlSWQsIGNhbGxiYWNrTmFtZTogYHdpbmRvdy5DbGFwcHIuZmxhc2hsc0NhbGxiYWNrcy4ke3RoaXMuaGxzQ2lkfWB9KSkuYXR0cignaWQnLCB0aGlzLmhsc0NpZClcblxuICAgICAgdGhpcy4kZWwuaHRtbChkaXZFbClcblxuICAgICAgdGhpcy5SVE1QLnJlbmRlcigpXG4gICAgICB0aGlzLiRlbC5hcHBlbmQodGhpcy5SVE1QLmVsKVxuICAgICAgdGhpcy5ydG1wRWwgPSB0aGlzLlJUTVAuZWxcblxuICAgICAgY29uc29sZS5sb2codGhpcy5ydG1wRWwpXG4gICAgICBcbiAgICAgIC8vaWYoQnJvd3Nlci5pc0ZpcmVmb3gpIHtcbiAgICAgIC8vICB0aGlzLnNldHVwRmlyZWZveCgpXG4gICAgICAvL30gZWxzZSBpZiAoQnJvd3Nlci5pc0lFKSB7XG4gICAgICAvLyAgdGhpcy4kKCdlbWJlZCcpLnJlbW92ZSgpXG4gICAgICAvL31cbiAgICAvL31cbiAgICB0aGlzLmVsLmlkID0gdGhpcy5jaWRcbiAgICB0aGlzLiRlbC5hcHBlbmQoc3R5bGUpXG5cbiAgICB0aGlzLmhsc0VsID0gZGl2RWxbMF1cblxuXHQqL1xuICAgIHdpbmRvdy5ydG1wRWwgPSB0aGlzLnJ0bXBFbFxuICAgIHdpbmRvdy5obHNFbCA9IHRoaXMuaGxzRWxcblxuICAgIHdpbmRvdy5lbERlYnVnID0gdGhpcy5lbFxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxuUnRtcEhscy5jYW5QbGF5ID0gZnVuY3Rpb24ocmVzb3VyY2UsIG1pbWVUeXBlKSB7XG5cdHJldHVybiB0cnVlO1xuXG4gIHZhciByZXNvdXJjZVBhcnRzID0gcmVzb3VyY2Uuc3BsaXQoJz8nKVswXS5tYXRjaCgvLipcXC4oLiopJC8pIHx8IFtdXG4gIHJldHVybiBCcm93c2VyLmhhc0ZsYXNoICYmXG4gICAgICAgICgocmVzb3VyY2VQYXJ0cy5sZW5ndGggPiAxICYmIHJlc291cmNlUGFydHNbMV0gPT0gXCJtM3U4XCIpIHx8XG4gICAgICAgICAgbWltZVR5cGUgPT09ICdhcHBsaWNhdGlvbi94LW1wZWdVUkwnIHx8IG1pbWVUeXBlID09PSAnYXBwbGljYXRpb24vdm5kLmFwcGxlLm1wZWd1cmwnKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5SdG1wSGxzID0gUnRtcEhsc1xuIiwiLy8gQ29weXJpZ2h0IDIwMTQgR2xvYm8uY29tIFBsYXllciBhdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGVcbi8vIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cblxudmFyIFBsYXliYWNrID0gcmVxdWlyZSgncGxheWJhY2snKVxudmFyIEpTVCA9IHJlcXVpcmUoJy4vcnRtcF9qc3QnKVxudmFyIEJyb3dzZXIgPSByZXF1aXJlKCdicm93c2VyJylcbnZhciBFdmVudHMgPSByZXF1aXJlKCdldmVudHMnKVxudmFyIE1lZGlhdG9yID0gQ2xhcHByLk1lZGlhdG9yXG52YXIgdGVtcGxhdGUgPSByZXF1aXJlKCd0ZW1wbGF0ZScpXG52YXIgJCA9IHJlcXVpcmUoJ3plcHRvJylcbnZhciBFdmVudHMgPSByZXF1aXJlKCdldmVudHMnKVxuXG5cbnZhciBvYmplY3RJRSA9ICc8b2JqZWN0IHR5cGU9XCJhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaFwiIGlkPVwiPCU9IGNpZCAlPlwiIGNsYXNzaWQ9XCJjbHNpZDpkMjdjZGI2ZS1hZTZkLTExY2YtOTZiOC00NDQ1NTM1NDAwMDBcIiBkYXRhLWZsYXNoLXZvZD1cIlwiPjxwYXJhbSBuYW1lPVwibW92aWVcIiB2YWx1ZT1cIjwlPSBzd2ZQYXRoICU+XCI+IDxwYXJhbSBuYW1lPVwicXVhbGl0eVwiIHZhbHVlPVwiYXV0b2hpZ2hcIj4gPHBhcmFtIG5hbWU9XCJzd2xpdmVjb25uZWN0XCIgdmFsdWU9XCJ0cnVlXCI+IDxwYXJhbSBuYW1lPVwiYWxsb3dTY3JpcHRBY2Nlc3NcIiB2YWx1ZT1cImFsd2F5c1wiPiA8cGFyYW0gbmFtZT1cImJnY29sb3JcIiB2YWx1ZT1cIiMwMDExMjJcIj4gPHBhcmFtIG5hbWU9XCJhbGxvd0Z1bGxTY3JlZW5cIiB2YWx1ZT1cImZhbHNlXCI+IDxwYXJhbSBuYW1lPVwid21vZGVcIiB2YWx1ZT1cImdwdVwiPiA8cGFyYW0gbmFtZT1cInRhYmluZGV4XCIgdmFsdWU9XCIxXCI+IDxwYXJhbSBuYW1lPUZsYXNoVmFycyB2YWx1ZT1cInBsYXliYWNrSWQ9PCU9IHBsYXliYWNrSWQgJT5cIiAvPiA8L29iamVjdD4nXG5cbmNsYXNzIFJUTVAgZXh0ZW5kcyBQbGF5YmFjayB7XG4gIGdldCBuYW1lKCkgeyByZXR1cm4gJ3J0bXAnIH1cbiAgZ2V0IHRhZ05hbWUoKSB7IHJldHVybiAnb2JqZWN0JyB9XG4gIGdldCB0ZW1wbGF0ZSgpIHsgcmV0dXJuIEpTVC5ydG1wIH1cbiAgZ2V0IGF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdkYXRhLXJ0bXAnOiAnJyxcbiAgICAgICd0eXBlJzogJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJyxcbiAgICAgICd3aWR0aCc6ICcxMDAlJyxcbiAgICAgICdoZWlnaHQnOiAnMTAwJScsXG4gICAgICAnc3R5bGUnOiAnaGVpZ2h0OiAxMDAlOydcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG5cbiAgICB0aGlzLnN3ZlBhdGggPSBcIi9hc3NldHMvUlRNUC5zd2ZcIlxuICAgIHRoaXMuc2V0dXBQbGF5YmFja1R5cGUoKVxuXG4gICAgdGhpcy5zcmMgPSBvcHRpb25zLnNyY1xuICAgIHRoaXMuYmFzZVVybCA9IG9wdGlvbnMuYmFzZVVybFxuICAgIHRoaXMuYXV0b1BsYXkgPSBvcHRpb25zLmF1dG9QbGF5XG4gICAgdGhpcy5zZXR0aW5ncyA9IHtkZWZhdWx0OiBbJ3NlZWtiYXInXX1cbiAgICB0aGlzLnNldHRpbmdzLmxlZnQgPSBbXCJwbGF5cGF1c2VcIiwgXCJwb3NpdGlvblwiLCBcImR1cmF0aW9uXCJdXG4gICAgdGhpcy5zZXR0aW5ncy5yaWdodCA9IFtcImZ1bGxzY3JlZW5cIiwgXCJ2b2x1bWVcIl1cbiAgICB0aGlzLnNldHRpbmdzLnNlZWtFbmFibGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlXG4gICAgdGhpcy5hZGRMaXN0ZW5lcnMoKVxuICB9XG5cblxuICBib290c3RyYXAoKSB7XG4gICAgdGhpcy5lbC53aWR0aCA9IFwiMTAwJVwiXG4gICAgdGhpcy5lbC5oZWlnaHQgPSBcIjEwMCVcIlxuICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICBpZiAodGhpcy5jdXJyZW50U3RhdGUgPT09ICdQTEFZSU5HJykge1xuICAgICAgdGhpcy5maXJzdFBsYXkoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFwiSURMRVwiXG4gICAgICB0aGlzLmF1dG9QbGF5ICYmIHRoaXMucGxheSgpXG4gICAgfVxuICAgICQoJzxkaXYgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJVwiIC8+JykuaW5zZXJ0QWZ0ZXIodGhpcy4kZWwpXG4gICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5QTEFZQkFDS19SRUFEWSwgdGhpcy5uYW1lKVxuICB9XG5cbiAgZ2V0UGxheWJhY2tUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXliYWNrVHlwZVxuICB9XG5cbiAgc2V0dXBGaXJlZm94KCkge1xuICAgIHZhciAkZWwgPSB0aGlzLiQoJ2VtYmVkJylcbiAgICAkZWwuYXR0cignZGF0YS1mbGFzaCcsICcnKVxuICAgIHRoaXMuc2V0RWxlbWVudCgkZWxbMF0pXG4gIH1cblxuICBpc0hpZ2hEZWZpbml0aW9uSW5Vc2UoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB1cGRhdGVUaW1lKCkge1xuICAgIHRoaXMudHJpZ2dlcihFdmVudHMuUExBWUJBQ0tfVElNRVVQREFURSwgdGhpcy5lbC5nZXRQb3NpdGlvbigpLCB0aGlzLmVsLmdldER1cmF0aW9uKCksIHRoaXMubmFtZSlcbiAgfVxuXG4gIGFkZExpc3RlbmVycygpIHtcbiAgICBNZWRpYXRvci5vbih0aGlzLnVuaXF1ZUlkICsgJzpwcm9ncmVzcycsIHRoaXMucHJvZ3Jlc3MsIHRoaXMpXG4gICAgTWVkaWF0b3Iub24odGhpcy51bmlxdWVJZCArICc6dGltZXVwZGF0ZScsIHRoaXMudXBkYXRlVGltZSwgdGhpcylcbiAgICBNZWRpYXRvci5vbih0aGlzLnVuaXF1ZUlkICsgJzpzdGF0ZWNoYW5nZWQnLCB0aGlzLmNoZWNrU3RhdGUsIHRoaXMpXG4gICAgTWVkaWF0b3Iub24odGhpcy51bmlxdWVJZCArICc6Zmxhc2hyZWFkeScsIHRoaXMuYm9vdHN0cmFwLCB0aGlzKVxuICB9XG5cbiAgc3RvcExpc3RlbmluZygpIHtcbiAgICBzdXBlci5zdG9wTGlzdGVuaW5nKClcbiAgICBNZWRpYXRvci5vZmYodGhpcy51bmlxdWVJZCArICc6cHJvZ3Jlc3MnKVxuICAgIE1lZGlhdG9yLm9mZih0aGlzLnVuaXF1ZUlkICsgJzp0aW1ldXBkYXRlJylcbiAgICBNZWRpYXRvci5vZmYodGhpcy51bmlxdWVJZCArICc6c3RhdGVjaGFuZ2VkJylcbiAgICBNZWRpYXRvci5vZmYodGhpcy51bmlxdWVJZCArICc6Zmxhc2hyZWFkeScpXG4gIH1cblxuICBjaGVja1N0YXRlKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gXCJQQVVTRURcIikge1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSAhPT0gXCJQTEFZSU5HX0JVRkZFUklOR1wiICYmIHRoaXMuZWwuZ2V0U3RhdGUoKSA9PT0gXCJQTEFZSU5HX0JVRkZFUklOR1wiKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLlBMQVlCQUNLX0JVRkZFUklORywgdGhpcy5uYW1lKVxuICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBcIlBMQVlJTkdfQlVGRkVSSU5HXCJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWwuZ2V0U3RhdGUoKSA9PT0gXCJQTEFZSU5HXCIpIHtcbiAgICAgIHRoaXMudHJpZ2dlcihFdmVudHMuUExBWUJBQ0tfQlVGRkVSRlVMTCwgdGhpcy5uYW1lKVxuICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBcIlBMQVlJTkdcIlxuICAgIH0gZWxzZSBpZiAodGhpcy5lbC5nZXRTdGF0ZSgpID09PSBcIklETEVcIikge1xuICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBcIklETEVcIlxuICAgIH0gZWxzZSBpZiAodGhpcy5lbC5nZXRTdGF0ZSgpID09PSBcIkVOREVEXCIpIHtcbiAgICAgIHRoaXMudHJpZ2dlcihFdmVudHMuUExBWUJBQ0tfRU5ERUQsIHRoaXMubmFtZSlcbiAgICAgIHRoaXMudHJpZ2dlcihFdmVudHMuUExBWUJBQ0tfVElNRVVQREFURSwgMCwgdGhpcy5lbC5nZXREdXJhdGlvbigpLCB0aGlzLm5hbWUpXG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFwiRU5ERURcIlxuICAgIH1cbiAgfVxuXG4gIHByb2dyZXNzKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSAhPT0gXCJJRExFXCIgJiYgdGhpcy5jdXJyZW50U3RhdGUgIT09IFwiRU5ERURcIikge1xuICAgICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5QTEFZQkFDS19QUk9HUkVTUywgMCwgdGhpcy5lbC5nZXRCeXRlc0xvYWRlZCgpLCB0aGlzLmVsLmdldEJ5dGVzVG90YWwoKSwgdGhpcy5uYW1lKVxuICAgIH1cbiAgfVxuXG4gIGZpcnN0UGxheSgpIHtcbiAgICBpZiAodGhpcy5lbC5wbGF5ZXJQbGF5KSB7XG4gICAgICB0aGlzLmVsLnBsYXllclBsYXkodGhpcy5zcmMpXG4gICAgICB0aGlzLmxpc3RlblRvT25jZSh0aGlzLCBFdmVudHMuUExBWUJBQ0tfQlVGRkVSRlVMTCwgKCkgPT4gdGhpcy5jaGVja0luaXRpYWxTZWVrKCkpXG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFwiUExBWUlOR1wiXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdGVuVG9PbmNlKHRoaXMsIEV2ZW50cy5QTEFZQkFDS19SRUFEWSwgdGhpcy5maXJzdFBsYXkpXG4gICAgfVxuICB9XG5cbiAgY2hlY2tJbml0aWFsU2VlaygpIHtcbiAgICB2YXIgc2Vla1RpbWUgPSBzZWVrU3RyaW5nVG9TZWNvbmRzKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChzZWVrVGltZSAhPT0gMCkge1xuICAgICAgdGhpcy5zZWVrU2Vjb25kcyhzZWVrVGltZSlcbiAgICB9XG4gIH1cblxuICBwbGF5KCkge1xuICAgIGlmICh0aGlzLmVsLmdldFN0YXRlKCkgPT09ICdQQVVTRUQnIHx8IHRoaXMuZWwuZ2V0U3RhdGUoKSA9PT0gJ1BMQVlJTkdfQlVGRkVSSU5HJykge1xuICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBcIlBMQVlJTkdcIlxuICAgICAgdGhpcy5lbC5wbGF5ZXJSZXN1bWUoKVxuICAgIH0gZWxzZSBpZiAodGhpcy5lbC5nZXRTdGF0ZSgpICE9PSAnUExBWUlORycpIHtcbiAgICAgIHRoaXMuZmlyc3RQbGF5KClcbiAgICB9XG4gICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5QTEFZQkFDS19QTEFZLCB0aGlzLm5hbWUpXG4gIH1cblxuICB2b2x1bWUodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pc1JlYWR5KSB7XG4gICAgICB0aGlzLmVsLnBsYXllclZvbHVtZSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0ZW5Ub09uY2UodGhpcywgRXZlbnRzLlBMQVlCQUNLX0JVRkZFUkZVTEwsICgpID0+IHRoaXMudm9sdW1lKHZhbHVlKSlcbiAgICB9XG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IFwiUEFVU0VEXCJcbiAgICB0aGlzLmVsLnBsYXllclBhdXNlKClcbiAgICB0aGlzLnRyaWdnZXIoRXZlbnRzLlBMQVlCQUNLX1BBVVNFLCB0aGlzLm5hbWUpXG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMuZWwucGxheWVyU3RvcCgpXG4gICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5QTEFZQkFDS19USU1FVVBEQVRFLCAwLCB0aGlzLm5hbWUpXG4gIH1cblxuICBpc1BsYXlpbmcoKSB7XG4gICAgcmV0dXJuICEhKHRoaXMuaXNSZWFkeSAmJiB0aGlzLmN1cnJlbnRTdGF0ZS5pbmRleE9mKFwiUExBWUlOR1wiKSA+IC0xKVxuICB9XG5cbiAgZ2V0RHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwuZ2V0RHVyYXRpb24oKVxuICB9XG5cbiAgc2VlayhzZWVrQmFyVmFsdWUpIHtcbiAgICB2YXIgc2Vla1RvID0gdGhpcy5lbC5nZXREdXJhdGlvbigpICogKHNlZWtCYXJWYWx1ZSAvIDEwMClcbiAgICB0aGlzLnNlZWtTZWNvbmRzKHNlZWtUbylcbiAgfVxuXG4gIHNlZWtTZWNvbmRzKHNlZWtUbykge1xuICAgIHRoaXMuZWwucGxheWVyU2VlayhzZWVrVG8pXG4gICAgdGhpcy50cmlnZ2VyKEV2ZW50cy5QTEFZQkFDS19USU1FVVBEQVRFLCBzZWVrVG8sIHRoaXMuZWwuZ2V0RHVyYXRpb24oKSwgdGhpcy5uYW1lKVxuICAgIGlmICh0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gXCJQQVVTRURcIikge1xuICAgICAgdGhpcy5lbC5wbGF5ZXJQYXVzZSgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuYm9vdHN0cmFwSWQpXG4gICAgc3VwZXIuc3RvcExpc3RlbmluZygpXG4gICAgdGhpcy4kZWwucmVtb3ZlKClcbiAgfVxuXG4gIHNldHVwSUUoKSB7XG4gICAgdGhpcy5zZXRFbGVtZW50KCQodGVtcGxhdGUob2JqZWN0SUUpKHsgY2lkOiB0aGlzLmNpZCwgYmFzZVVybDogdGhpcy5iYXNlVXJsLCBwbGF5YmFja0lkOiB0aGlzLnVuaXF1ZUlkIH0pKSlcbiAgfVxuXG4gIHNldHVwUGxheWJhY2tUeXBlKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc3JjLmluZGV4T2YoJ2xpdmUnKSA+IC0xKSB7XG4gICAgICB0aGlzLnBsYXliYWNrVHlwZSA9ICdsaXZlJ1xuICAgICAgdGhpcy5zZXR0aW5ncyA9IHsnbGVmdCc6IFtcInBsYXlzdG9wXCJdLCAnZGVmYXVsdCc6IFsnc2Vla2JhciddLCAncmlnaHQnOiBbJ2Z1bGxzY3JlZW4nLCAndm9sdW1lJ119XG4gICAgICB0aGlzLnNldHRpbmdzLnNlZWtFbmFibGVkID0gZmFsc2VcbiAgICAgIHRoaXMudHJpZ2dlcihFdmVudHMuUExBWUJBQ0tfU0VUVElOR1NVUERBVEUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheWJhY2tUeXBlID0gJ3ZvZCdcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHsgY2lkOiB0aGlzLmNpZCwgc3dmUGF0aDogdGhpcy5zd2ZQYXRoLCBwbGF5YmFja0lkOiB0aGlzLnVuaXF1ZUlkIH0pKVxuICAgIGlmKEJyb3dzZXIuaXNGaXJlZm94KSB7XG4gICAgICB0aGlzLnNldHVwRmlyZWZveCgpXG4gICAgfSBlbHNlIGlmIChCcm93c2VyLmlzTGVnYWN5SUUpIHtcbiAgICAgIHRoaXMuc2V0dXBJRSgpXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxuUlRNUC5jYW5QbGF5ID0gZnVuY3Rpb24oc291cmNlKSB7XG4gIHJldHVybiAhIShzb3VyY2UuaW5kZXhPZigncnRtcDovLycpID4gLTEgJiYgQnJvd3Nlci5oYXNGbGFzaClcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUlRNUFxuIiwiLy9UaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IGJpbi9ob29rLmpzXG52YXIgdGVtcGxhdGUgPSByZXF1aXJlKCd0ZW1wbGF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgJ3J0bXAnOiB0ZW1wbGF0ZSgnPG9iamVjdCBkYXRhLXJ0bXAgdHlwZT1cImFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHN0eWxlPVwiaGVpZ2h0OiAxMDAlO1wiPjxwYXJhbSBuYW1lPVwibW92aWVcIiB2YWx1ZT1cIjwlPSBzd2ZQYXRoICU+XCI+ICA8cGFyYW0gbmFtZT1cInF1YWxpdHlcIiB2YWx1ZT1cImF1dG9oaWdoXCI+ICA8cGFyYW0gbmFtZT1cInN3bGl2ZWNvbm5lY3RcIiB2YWx1ZT1cInRydWVcIj4gIDxwYXJhbSBuYW1lPVwiYWxsb3dTY3JpcHRBY2Nlc3NcIiB2YWx1ZT1cImFsd2F5c1wiPiAgPHBhcmFtIG5hbWU9XCJiZ2NvbG9yXCIgdmFsdWU9XCIjMDAxMTIyXCI+ICA8cGFyYW0gbmFtZT1cImFsbG93RnVsbFNjcmVlblwiIHZhbHVlPVwiZmFsc2VcIj4gIDxwYXJhbSBuYW1lPVwid21vZGVcIiB2YWx1ZT1cInRyYW5zcGFyZW50XCI+ICA8cGFyYW0gbmFtZT1cInRhYmluZGV4XCIgdmFsdWU9XCIxXCI+ICA8cGFyYW0gbmFtZT1GbGFzaFZhcnMgdmFsdWU9XCJwbGF5YmFja0lkPTwlPSBwbGF5YmFja0lkICU+XCIgLz4gIDxlbWJlZCAgICB0eXBlPVwiYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2hcIiAgICBkaXNhYmxlZD1cImRpc2FibGVkXCIgICAgdGFiaW5kZXg9XCItMVwiICAgIGVuYWJsZWNvbnRleHRtZW51PVwiZmFsc2VcIiAgICBhbGxvd1NjcmlwdEFjY2Vzcz1cImFsd2F5c1wiICAgIHF1YWxpdHk9XCJhdXRvaGlnaHRcIiAgICBwbHVnaW5zcGFnZT1cImh0dHA6Ly93d3cubWFjcm9tZWRpYS5jb20vZ28vZ2V0Zmxhc2hwbGF5ZXJcIiAgICB3bW9kZT1cInRyYW5zcGFyZW50XCIgICAgc3dsaXZlY29ubmVjdD1cInRydWVcIiAgICB0eXBlPVwiYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2hcIiAgICBhbGxvd2Z1bGxzY3JlZW49XCJmYWxzZVwiICAgIGJnY29sb3I9XCIjMDAwMDAwXCIgICAgRmxhc2hWYXJzPVwicGxheWJhY2tJZD08JT0gcGxheWJhY2tJZCAlPlwiICAgIHNyYz1cIjwlPSBzd2ZQYXRoICU+XCIgICAgd2lkdGg9XCIxMDAlXCIgICAgaGVpZ2h0PVwiMTAwJVwiPiAgPC9lbWJlZD48L29iamVjdD4nKSxcblxuICBDU1M6IHtcbiAgICBcbiAgfVxufTtcbiJdfQ==
