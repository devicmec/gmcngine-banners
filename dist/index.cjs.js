'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactToPrint = require('react-to-print');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactToPrint__default = /*#__PURE__*/_interopDefaultLegacy(ReactToPrint);

var img = "data:image/png;base64,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";

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
reactIs_development.AsyncMode;
reactIs_development.ConcurrentMode;
reactIs_development.ContextConsumer;
reactIs_development.ContextProvider;
reactIs_development.Element;
reactIs_development.ForwardRef;
reactIs_development.Fragment;
reactIs_development.Lazy;
reactIs_development.Memo;
reactIs_development.Portal;
reactIs_development.Profiler;
reactIs_development.StrictMode;
reactIs_development.Suspense;
reactIs_development.isAsyncMode;
reactIs_development.isConcurrentMode;
reactIs_development.isContextConsumer;
reactIs_development.isContextProvider;
reactIs_development.isElement;
reactIs_development.isForwardRef;
reactIs_development.isFragment;
reactIs_development.isLazy;
reactIs_development.isMemo;
reactIs_development.isPortal;
reactIs_development.isProfiler;
reactIs_development.isStrictMode;
reactIs_development.isSuspense;
reactIs_development.isValidElementType;
reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var mode = {
	MODE_NUMBER :		1 << 0,
	MODE_ALPHA_NUM : 	1 << 1,
	MODE_8BIT_BYTE : 	1 << 2,
	MODE_KANJI :		1 << 3
};

function QR8bitByte(data) {
	this.mode = mode.MODE_8BIT_BYTE;
	this.data = data;
}

QR8bitByte.prototype = {

	getLength : function(buffer) {
		return this.data.length;
	},
	
	write : function(buffer) {
		for (var i = 0; i < this.data.length; i++) {
			// not JIS ...
			buffer.put(this.data.charCodeAt(i), 8);
		}
	}
};

var _8BitByte = QR8bitByte;

var ErrorCorrectLevel = {
	L : 1,
	M : 0,
	Q : 3,
	H : 2
};

// ErrorCorrectLevel


function QRRSBlock(totalCount, dataCount) {
	this.totalCount = totalCount;
	this.dataCount  = dataCount;
}

QRRSBlock.RS_BLOCK_TABLE = [

	// L
	// M
	// Q
	// H

	// 1
	[1, 26, 19],
	[1, 26, 16],
	[1, 26, 13],
	[1, 26, 9],
	
	// 2
	[1, 44, 34],
	[1, 44, 28],
	[1, 44, 22],
	[1, 44, 16],

	// 3
	[1, 70, 55],
	[1, 70, 44],
	[2, 35, 17],
	[2, 35, 13],

	// 4		
	[1, 100, 80],
	[2, 50, 32],
	[2, 50, 24],
	[4, 25, 9],
	
	// 5
	[1, 134, 108],
	[2, 67, 43],
	[2, 33, 15, 2, 34, 16],
	[2, 33, 11, 2, 34, 12],
	
	// 6
	[2, 86, 68],
	[4, 43, 27],
	[4, 43, 19],
	[4, 43, 15],
	
	// 7		
	[2, 98, 78],
	[4, 49, 31],
	[2, 32, 14, 4, 33, 15],
	[4, 39, 13, 1, 40, 14],
	
	// 8
	[2, 121, 97],
	[2, 60, 38, 2, 61, 39],
	[4, 40, 18, 2, 41, 19],
	[4, 40, 14, 2, 41, 15],
	
	// 9
	[2, 146, 116],
	[3, 58, 36, 2, 59, 37],
	[4, 36, 16, 4, 37, 17],
	[4, 36, 12, 4, 37, 13],
	
	// 10		
	[2, 86, 68, 2, 87, 69],
	[4, 69, 43, 1, 70, 44],
	[6, 43, 19, 2, 44, 20],
	[6, 43, 15, 2, 44, 16],

	// 11
	[4, 101, 81],
	[1, 80, 50, 4, 81, 51],
	[4, 50, 22, 4, 51, 23],
	[3, 36, 12, 8, 37, 13],

	// 12
	[2, 116, 92, 2, 117, 93],
	[6, 58, 36, 2, 59, 37],
	[4, 46, 20, 6, 47, 21],
	[7, 42, 14, 4, 43, 15],

	// 13
	[4, 133, 107],
	[8, 59, 37, 1, 60, 38],
	[8, 44, 20, 4, 45, 21],
	[12, 33, 11, 4, 34, 12],

	// 14
	[3, 145, 115, 1, 146, 116],
	[4, 64, 40, 5, 65, 41],
	[11, 36, 16, 5, 37, 17],
	[11, 36, 12, 5, 37, 13],

	// 15
	[5, 109, 87, 1, 110, 88],
	[5, 65, 41, 5, 66, 42],
	[5, 54, 24, 7, 55, 25],
	[11, 36, 12],

	// 16
	[5, 122, 98, 1, 123, 99],
	[7, 73, 45, 3, 74, 46],
	[15, 43, 19, 2, 44, 20],
	[3, 45, 15, 13, 46, 16],

	// 17
	[1, 135, 107, 5, 136, 108],
	[10, 74, 46, 1, 75, 47],
	[1, 50, 22, 15, 51, 23],
	[2, 42, 14, 17, 43, 15],

	// 18
	[5, 150, 120, 1, 151, 121],
	[9, 69, 43, 4, 70, 44],
	[17, 50, 22, 1, 51, 23],
	[2, 42, 14, 19, 43, 15],

	// 19
	[3, 141, 113, 4, 142, 114],
	[3, 70, 44, 11, 71, 45],
	[17, 47, 21, 4, 48, 22],
	[9, 39, 13, 16, 40, 14],

	// 20
	[3, 135, 107, 5, 136, 108],
	[3, 67, 41, 13, 68, 42],
	[15, 54, 24, 5, 55, 25],
	[15, 43, 15, 10, 44, 16],

	// 21
	[4, 144, 116, 4, 145, 117],
	[17, 68, 42],
	[17, 50, 22, 6, 51, 23],
	[19, 46, 16, 6, 47, 17],

	// 22
	[2, 139, 111, 7, 140, 112],
	[17, 74, 46],
	[7, 54, 24, 16, 55, 25],
	[34, 37, 13],

	// 23
	[4, 151, 121, 5, 152, 122],
	[4, 75, 47, 14, 76, 48],
	[11, 54, 24, 14, 55, 25],
	[16, 45, 15, 14, 46, 16],

	// 24
	[6, 147, 117, 4, 148, 118],
	[6, 73, 45, 14, 74, 46],
	[11, 54, 24, 16, 55, 25],
	[30, 46, 16, 2, 47, 17],

	// 25
	[8, 132, 106, 4, 133, 107],
	[8, 75, 47, 13, 76, 48],
	[7, 54, 24, 22, 55, 25],
	[22, 45, 15, 13, 46, 16],

	// 26
	[10, 142, 114, 2, 143, 115],
	[19, 74, 46, 4, 75, 47],
	[28, 50, 22, 6, 51, 23],
	[33, 46, 16, 4, 47, 17],

	// 27
	[8, 152, 122, 4, 153, 123],
	[22, 73, 45, 3, 74, 46],
	[8, 53, 23, 26, 54, 24],
	[12, 45, 15, 28, 46, 16],

	// 28
	[3, 147, 117, 10, 148, 118],
	[3, 73, 45, 23, 74, 46],
	[4, 54, 24, 31, 55, 25],
	[11, 45, 15, 31, 46, 16],

	// 29
	[7, 146, 116, 7, 147, 117],
	[21, 73, 45, 7, 74, 46],
	[1, 53, 23, 37, 54, 24],
	[19, 45, 15, 26, 46, 16],

	// 30
	[5, 145, 115, 10, 146, 116],
	[19, 75, 47, 10, 76, 48],
	[15, 54, 24, 25, 55, 25],
	[23, 45, 15, 25, 46, 16],

	// 31
	[13, 145, 115, 3, 146, 116],
	[2, 74, 46, 29, 75, 47],
	[42, 54, 24, 1, 55, 25],
	[23, 45, 15, 28, 46, 16],

	// 32
	[17, 145, 115],
	[10, 74, 46, 23, 75, 47],
	[10, 54, 24, 35, 55, 25],
	[19, 45, 15, 35, 46, 16],

	// 33
	[17, 145, 115, 1, 146, 116],
	[14, 74, 46, 21, 75, 47],
	[29, 54, 24, 19, 55, 25],
	[11, 45, 15, 46, 46, 16],

	// 34
	[13, 145, 115, 6, 146, 116],
	[14, 74, 46, 23, 75, 47],
	[44, 54, 24, 7, 55, 25],
	[59, 46, 16, 1, 47, 17],

	// 35
	[12, 151, 121, 7, 152, 122],
	[12, 75, 47, 26, 76, 48],
	[39, 54, 24, 14, 55, 25],
	[22, 45, 15, 41, 46, 16],

	// 36
	[6, 151, 121, 14, 152, 122],
	[6, 75, 47, 34, 76, 48],
	[46, 54, 24, 10, 55, 25],
	[2, 45, 15, 64, 46, 16],

	// 37
	[17, 152, 122, 4, 153, 123],
	[29, 74, 46, 14, 75, 47],
	[49, 54, 24, 10, 55, 25],
	[24, 45, 15, 46, 46, 16],

	// 38
	[4, 152, 122, 18, 153, 123],
	[13, 74, 46, 32, 75, 47],
	[48, 54, 24, 14, 55, 25],
	[42, 45, 15, 32, 46, 16],

	// 39
	[20, 147, 117, 4, 148, 118],
	[40, 75, 47, 7, 76, 48],
	[43, 54, 24, 22, 55, 25],
	[10, 45, 15, 67, 46, 16],

	// 40
	[19, 148, 118, 6, 149, 119],
	[18, 75, 47, 31, 76, 48],
	[34, 54, 24, 34, 55, 25],
	[20, 45, 15, 61, 46, 16]
];

QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
	
	var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
	
	if (rsBlock == undefined) {
		throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
	}

	var length = rsBlock.length / 3;
	
	var list = new Array();
	
	for (var i = 0; i < length; i++) {

		var count = rsBlock[i * 3 + 0];
		var totalCount = rsBlock[i * 3 + 1];
		var dataCount  = rsBlock[i * 3 + 2];

		for (var j = 0; j < count; j++) {
			list.push(new QRRSBlock(totalCount, dataCount) );	
		}
	}
	
	return list;
};

QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {

	switch(errorCorrectLevel) {
	case ErrorCorrectLevel.L :
		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
	case ErrorCorrectLevel.M :
		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
	case ErrorCorrectLevel.Q :
		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
	case ErrorCorrectLevel.H :
		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
	default :
		return undefined;
	}
};

var RSBlock = QRRSBlock;

function QRBitBuffer() {
	this.buffer = new Array();
	this.length = 0;
}

QRBitBuffer.prototype = {

	get : function(index) {
		var bufIndex = Math.floor(index / 8);
		return ( (this.buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
	},
	
	put : function(num, length) {
		for (var i = 0; i < length; i++) {
			this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
		}
	},
	
	getLengthInBits : function() {
		return this.length;
	},
	
	putBit : function(bit) {
	
		var bufIndex = Math.floor(this.length / 8);
		if (this.buffer.length <= bufIndex) {
			this.buffer.push(0);
		}
	
		if (bit) {
			this.buffer[bufIndex] |= (0x80 >>> (this.length % 8) );
		}
	
		this.length++;
	}
};

var BitBuffer = QRBitBuffer;

var QRMath = {

	glog : function(n) {
	
		if (n < 1) {
			throw new Error("glog(" + n + ")");
		}
		
		return QRMath.LOG_TABLE[n];
	},
	
	gexp : function(n) {
	
		while (n < 0) {
			n += 255;
		}
	
		while (n >= 256) {
			n -= 255;
		}
	
		return QRMath.EXP_TABLE[n];
	},
	
	EXP_TABLE : new Array(256),
	
	LOG_TABLE : new Array(256)

};
	
for (var i = 0; i < 8; i++) {
	QRMath.EXP_TABLE[i] = 1 << i;
}
for (var i = 8; i < 256; i++) {
	QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4]
		^ QRMath.EXP_TABLE[i - 5]
		^ QRMath.EXP_TABLE[i - 6]
		^ QRMath.EXP_TABLE[i - 8];
}
for (var i = 0; i < 255; i++) {
	QRMath.LOG_TABLE[QRMath.EXP_TABLE[i] ] = i;
}

var math = QRMath;

function QRPolynomial(num, shift) {

	if (num.length == undefined) {
		throw new Error(num.length + "/" + shift);
	}

	var offset = 0;

	while (offset < num.length && num[offset] == 0) {
		offset++;
	}

	this.num = new Array(num.length - offset + shift);
	for (var i = 0; i < num.length - offset; i++) {
		this.num[i] = num[i + offset];
	}
}

QRPolynomial.prototype = {

	get : function(index) {
		return this.num[index];
	},
	
	getLength : function() {
		return this.num.length;
	},
	
	multiply : function(e) {
	
		var num = new Array(this.getLength() + e.getLength() - 1);
	
		for (var i = 0; i < this.getLength(); i++) {
			for (var j = 0; j < e.getLength(); j++) {
				num[i + j] ^= math.gexp(math.glog(this.get(i) ) + math.glog(e.get(j) ) );
			}
		}
	
		return new QRPolynomial(num, 0);
	},
	
	mod : function(e) {
	
		if (this.getLength() - e.getLength() < 0) {
			return this;
		}
	
		var ratio = math.glog(this.get(0) ) - math.glog(e.get(0) );
	
		var num = new Array(this.getLength() );
		
		for (var i = 0; i < this.getLength(); i++) {
			num[i] = this.get(i);
		}
		
		for (var i = 0; i < e.getLength(); i++) {
			num[i] ^= math.gexp(math.glog(e.get(i) ) + ratio);
		}
	
		// recursive call
		return new QRPolynomial(num, 0).mod(e);
	}
};

var Polynomial = QRPolynomial;

var QRMaskPattern = {
	PATTERN000 : 0,
	PATTERN001 : 1,
	PATTERN010 : 2,
	PATTERN011 : 3,
	PATTERN100 : 4,
	PATTERN101 : 5,
	PATTERN110 : 6,
	PATTERN111 : 7
};

var QRUtil = {

    PATTERN_POSITION_TABLE : [
	    [],
	    [6, 18],
	    [6, 22],
	    [6, 26],
	    [6, 30],
	    [6, 34],
	    [6, 22, 38],
	    [6, 24, 42],
	    [6, 26, 46],
	    [6, 28, 50],
	    [6, 30, 54],		
	    [6, 32, 58],
	    [6, 34, 62],
	    [6, 26, 46, 66],
	    [6, 26, 48, 70],
	    [6, 26, 50, 74],
	    [6, 30, 54, 78],
	    [6, 30, 56, 82],
	    [6, 30, 58, 86],
	    [6, 34, 62, 90],
	    [6, 28, 50, 72, 94],
	    [6, 26, 50, 74, 98],
	    [6, 30, 54, 78, 102],
	    [6, 28, 54, 80, 106],
	    [6, 32, 58, 84, 110],
	    [6, 30, 58, 86, 114],
	    [6, 34, 62, 90, 118],
	    [6, 26, 50, 74, 98, 122],
	    [6, 30, 54, 78, 102, 126],
	    [6, 26, 52, 78, 104, 130],
	    [6, 30, 56, 82, 108, 134],
	    [6, 34, 60, 86, 112, 138],
	    [6, 30, 58, 86, 114, 142],
	    [6, 34, 62, 90, 118, 146],
	    [6, 30, 54, 78, 102, 126, 150],
	    [6, 24, 50, 76, 102, 128, 154],
	    [6, 28, 54, 80, 106, 132, 158],
	    [6, 32, 58, 84, 110, 136, 162],
	    [6, 26, 54, 82, 110, 138, 166],
	    [6, 30, 58, 86, 114, 142, 170]
    ],

    G15 : (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
    G18 : (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
    G15_MASK : (1 << 14) | (1 << 12) | (1 << 10)	| (1 << 4) | (1 << 1),

    getBCHTypeInfo : function(data) {
	    var d = data << 10;
	    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
		    d ^= (QRUtil.G15 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) ) ); 	
	    }
	    return ( (data << 10) | d) ^ QRUtil.G15_MASK;
    },

    getBCHTypeNumber : function(data) {
	    var d = data << 12;
	    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
		    d ^= (QRUtil.G18 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) ) ); 	
	    }
	    return (data << 12) | d;
    },

    getBCHDigit : function(data) {

	    var digit = 0;

	    while (data != 0) {
		    digit++;
		    data >>>= 1;
	    }

	    return digit;
    },

    getPatternPosition : function(typeNumber) {
	    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },

    getMask : function(maskPattern, i, j) {
	    
	    switch (maskPattern) {
		    
	    case QRMaskPattern.PATTERN000 : return (i + j) % 2 == 0;
	    case QRMaskPattern.PATTERN001 : return i % 2 == 0;
	    case QRMaskPattern.PATTERN010 : return j % 3 == 0;
	    case QRMaskPattern.PATTERN011 : return (i + j) % 3 == 0;
	    case QRMaskPattern.PATTERN100 : return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0;
	    case QRMaskPattern.PATTERN101 : return (i * j) % 2 + (i * j) % 3 == 0;
	    case QRMaskPattern.PATTERN110 : return ( (i * j) % 2 + (i * j) % 3) % 2 == 0;
	    case QRMaskPattern.PATTERN111 : return ( (i * j) % 3 + (i + j) % 2) % 2 == 0;

	    default :
		    throw new Error("bad maskPattern:" + maskPattern);
	    }
    },

    getErrorCorrectPolynomial : function(errorCorrectLength) {

	    var a = new Polynomial([1], 0);

	    for (var i = 0; i < errorCorrectLength; i++) {
		    a = a.multiply(new Polynomial([1, math.gexp(i)], 0) );
	    }

	    return a;
    },

    getLengthInBits : function(mode$1, type) {

	    if (1 <= type && type < 10) {

		    // 1 - 9

		    switch(mode$1) {
		    case mode.MODE_NUMBER 	: return 10;
		    case mode.MODE_ALPHA_NUM 	: return 9;
		    case mode.MODE_8BIT_BYTE	: return 8;
		    case mode.MODE_KANJI  	: return 8;
		    default :
			    throw new Error("mode:" + mode$1);
		    }

	    } else if (type < 27) {

		    // 10 - 26

		    switch(mode$1) {
		    case mode.MODE_NUMBER 	: return 12;
		    case mode.MODE_ALPHA_NUM 	: return 11;
		    case mode.MODE_8BIT_BYTE	: return 16;
		    case mode.MODE_KANJI  	: return 10;
		    default :
			    throw new Error("mode:" + mode$1);
		    }

	    } else if (type < 41) {

		    // 27 - 40

		    switch(mode$1) {
		    case mode.MODE_NUMBER 	: return 14;
		    case mode.MODE_ALPHA_NUM	: return 13;
		    case mode.MODE_8BIT_BYTE	: return 16;
		    case mode.MODE_KANJI  	: return 12;
		    default :
			    throw new Error("mode:" + mode$1);
		    }

	    } else {
		    throw new Error("type:" + type);
	    }
    },

    getLostPoint : function(qrCode) {
	    
	    var moduleCount = qrCode.getModuleCount();
	    
	    var lostPoint = 0;
	    
	    // LEVEL1
	    
	    for (var row = 0; row < moduleCount; row++) {

		    for (var col = 0; col < moduleCount; col++) {

			    var sameCount = 0;
			    var dark = qrCode.isDark(row, col);

				for (var r = -1; r <= 1; r++) {

				    if (row + r < 0 || moduleCount <= row + r) {
					    continue;
				    }

				    for (var c = -1; c <= 1; c++) {

					    if (col + c < 0 || moduleCount <= col + c) {
						    continue;
					    }

					    if (r == 0 && c == 0) {
						    continue;
					    }

					    if (dark == qrCode.isDark(row + r, col + c) ) {
						    sameCount++;
					    }
				    }
			    }

			    if (sameCount > 5) {
				    lostPoint += (3 + sameCount - 5);
			    }
		    }
	    }

	    // LEVEL2

	    for (var row = 0; row < moduleCount - 1; row++) {
		    for (var col = 0; col < moduleCount - 1; col++) {
			    var count = 0;
			    if (qrCode.isDark(row,     col    ) ) count++;
			    if (qrCode.isDark(row + 1, col    ) ) count++;
			    if (qrCode.isDark(row,     col + 1) ) count++;
			    if (qrCode.isDark(row + 1, col + 1) ) count++;
			    if (count == 0 || count == 4) {
				    lostPoint += 3;
			    }
		    }
	    }

	    // LEVEL3

	    for (var row = 0; row < moduleCount; row++) {
		    for (var col = 0; col < moduleCount - 6; col++) {
			    if (qrCode.isDark(row, col)
					    && !qrCode.isDark(row, col + 1)
					    &&  qrCode.isDark(row, col + 2)
					    &&  qrCode.isDark(row, col + 3)
					    &&  qrCode.isDark(row, col + 4)
					    && !qrCode.isDark(row, col + 5)
					    &&  qrCode.isDark(row, col + 6) ) {
				    lostPoint += 40;
			    }
		    }
	    }

	    for (var col = 0; col < moduleCount; col++) {
		    for (var row = 0; row < moduleCount - 6; row++) {
			    if (qrCode.isDark(row, col)
					    && !qrCode.isDark(row + 1, col)
					    &&  qrCode.isDark(row + 2, col)
					    &&  qrCode.isDark(row + 3, col)
					    &&  qrCode.isDark(row + 4, col)
					    && !qrCode.isDark(row + 5, col)
					    &&  qrCode.isDark(row + 6, col) ) {
				    lostPoint += 40;
			    }
		    }
	    }

	    // LEVEL4
	    
	    var darkCount = 0;

	    for (var col = 0; col < moduleCount; col++) {
		    for (var row = 0; row < moduleCount; row++) {
			    if (qrCode.isDark(row, col) ) {
				    darkCount++;
			    }
		    }
	    }
	    
	    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
	    lostPoint += ratio * 10;

	    return lostPoint;		
    }
};

var util = QRUtil;

function QRCode(typeNumber, errorCorrectLevel) {
	this.typeNumber = typeNumber;
	this.errorCorrectLevel = errorCorrectLevel;
	this.modules = null;
	this.moduleCount = 0;
	this.dataCache = null;
	this.dataList = [];
}

// for client side minification
var proto = QRCode.prototype;

proto.addData = function(data) {
	var newData = new _8BitByte(data);
	this.dataList.push(newData);
	this.dataCache = null;
};

proto.isDark = function(row, col) {
	if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
		throw new Error(row + "," + col);
	}
	return this.modules[row][col];
};

proto.getModuleCount = function() {
	return this.moduleCount;
};

proto.make = function() {
	// Calculate automatically typeNumber if provided is < 1
	if (this.typeNumber < 1 ){
		var typeNumber = 1;
		for (typeNumber = 1; typeNumber < 40; typeNumber++) {
			var rsBlocks = RSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);

			var buffer = new BitBuffer();
			var totalDataCount = 0;
			for (var i = 0; i < rsBlocks.length; i++) {
				totalDataCount += rsBlocks[i].dataCount;
			}

			for (var i = 0; i < this.dataList.length; i++) {
				var data = this.dataList[i];
				buffer.put(data.mode, 4);
				buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber) );
				data.write(buffer);
			}
			if (buffer.getLengthInBits() <= totalDataCount * 8)
				break;
		}
		this.typeNumber = typeNumber;
	}
	this.makeImpl(false, this.getBestMaskPattern() );
};

proto.makeImpl = function(test, maskPattern) {
	
	this.moduleCount = this.typeNumber * 4 + 17;
	this.modules = new Array(this.moduleCount);
	
	for (var row = 0; row < this.moduleCount; row++) {
		
		this.modules[row] = new Array(this.moduleCount);
		
		for (var col = 0; col < this.moduleCount; col++) {
			this.modules[row][col] = null;//(col + row) % 3;
		}
	}

	this.setupPositionProbePattern(0, 0);
	this.setupPositionProbePattern(this.moduleCount - 7, 0);
	this.setupPositionProbePattern(0, this.moduleCount - 7);
	this.setupPositionAdjustPattern();
	this.setupTimingPattern();
	this.setupTypeInfo(test, maskPattern);
	
	if (this.typeNumber >= 7) {
		this.setupTypeNumber(test);
	}

	if (this.dataCache == null) {
		this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
	}

	this.mapData(this.dataCache, maskPattern);
};

proto.setupPositionProbePattern = function(row, col)  {
	
	for (var r = -1; r <= 7; r++) {
		
		if (row + r <= -1 || this.moduleCount <= row + r) continue;
		
		for (var c = -1; c <= 7; c++) {
			
			if (col + c <= -1 || this.moduleCount <= col + c) continue;
			
			if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
					|| (0 <= c && c <= 6 && (r == 0 || r == 6) )
					|| (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
				this.modules[row + r][col + c] = true;
			} else {
				this.modules[row + r][col + c] = false;
			}
		}		
	}		
};

proto.getBestMaskPattern = function() {

	var minLostPoint = 0;
	var pattern = 0;

	for (var i = 0; i < 8; i++) {
		
		this.makeImpl(true, i);

		var lostPoint = util.getLostPoint(this);

		if (i == 0 || minLostPoint >  lostPoint) {
			minLostPoint = lostPoint;
			pattern = i;
		}
	}

	return pattern;
};

proto.createMovieClip = function(target_mc, instance_name, depth) {

	var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
	var cs = 1;

	this.make();

	for (var row = 0; row < this.modules.length; row++) {
		
		var y = row * cs;
		
		for (var col = 0; col < this.modules[row].length; col++) {

			var x = col * cs;
			var dark = this.modules[row][col];
		
			if (dark) {
				qr_mc.beginFill(0, 100);
				qr_mc.moveTo(x, y);
				qr_mc.lineTo(x + cs, y);
				qr_mc.lineTo(x + cs, y + cs);
				qr_mc.lineTo(x, y + cs);
				qr_mc.endFill();
			}
		}
	}
	
	return qr_mc;
};

proto.setupTimingPattern = function() {
	
	for (var r = 8; r < this.moduleCount - 8; r++) {
		if (this.modules[r][6] != null) {
			continue;
		}
		this.modules[r][6] = (r % 2 == 0);
	}

	for (var c = 8; c < this.moduleCount - 8; c++) {
		if (this.modules[6][c] != null) {
			continue;
		}
		this.modules[6][c] = (c % 2 == 0);
	}
};

proto.setupPositionAdjustPattern = function() {

	var pos = util.getPatternPosition(this.typeNumber);
	
	for (var i = 0; i < pos.length; i++) {
	
		for (var j = 0; j < pos.length; j++) {
		
			var row = pos[i];
			var col = pos[j];
			
			if (this.modules[row][col] != null) {
				continue;
			}
			
			for (var r = -2; r <= 2; r++) {
			
				for (var c = -2; c <= 2; c++) {
				
					if (r == -2 || r == 2 || c == -2 || c == 2
							|| (r == 0 && c == 0) ) {
						this.modules[row + r][col + c] = true;
					} else {
						this.modules[row + r][col + c] = false;
					}
				}
			}
		}
	}
};

proto.setupTypeNumber = function(test) {

	var bits = util.getBCHTypeNumber(this.typeNumber);

	for (var i = 0; i < 18; i++) {
		var mod = (!test && ( (bits >> i) & 1) == 1);
		this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
	}

	for (var i = 0; i < 18; i++) {
		var mod = (!test && ( (bits >> i) & 1) == 1);
		this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
	}
};

proto.setupTypeInfo = function(test, maskPattern) {

	var data = (this.errorCorrectLevel << 3) | maskPattern;
	var bits = util.getBCHTypeInfo(data);

	// vertical		
	for (var i = 0; i < 15; i++) {

		var mod = (!test && ( (bits >> i) & 1) == 1);

		if (i < 6) {
			this.modules[i][8] = mod;
		} else if (i < 8) {
			this.modules[i + 1][8] = mod;
		} else {
			this.modules[this.moduleCount - 15 + i][8] = mod;
		}
	}

	// horizontal
	for (var i = 0; i < 15; i++) {

		var mod = (!test && ( (bits >> i) & 1) == 1);
		
		if (i < 8) {
			this.modules[8][this.moduleCount - i - 1] = mod;
		} else if (i < 9) {
			this.modules[8][15 - i - 1 + 1] = mod;
		} else {
			this.modules[8][15 - i - 1] = mod;
		}
	}

	// fixed module
	this.modules[this.moduleCount - 8][8] = (!test);
};

proto.mapData = function(data, maskPattern) {
	
	var inc = -1;
	var row = this.moduleCount - 1;
	var bitIndex = 7;
	var byteIndex = 0;
	
	for (var col = this.moduleCount - 1; col > 0; col -= 2) {

		if (col == 6) col--;

		while (true) {

			for (var c = 0; c < 2; c++) {
				
				if (this.modules[row][col - c] == null) {
					
					var dark = false;

					if (byteIndex < data.length) {
						dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
					}

					var mask = util.getMask(maskPattern, row, col - c);

					if (mask) {
						dark = !dark;
					}
					
					this.modules[row][col - c] = dark;
					bitIndex--;

					if (bitIndex == -1) {
						byteIndex++;
						bitIndex = 7;
					}
				}
			}
							
			row += inc;

			if (row < 0 || this.moduleCount <= row) {
				row -= inc;
				inc = -inc;
				break;
			}
		}
	}
};

QRCode.PAD0 = 0xEC;
QRCode.PAD1 = 0x11;

QRCode.createData = function(typeNumber, errorCorrectLevel, dataList) {
	
	var rsBlocks = RSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
	
	var buffer = new BitBuffer();
	
	for (var i = 0; i < dataList.length; i++) {
		var data = dataList[i];
		buffer.put(data.mode, 4);
		buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber) );
		data.write(buffer);
	}

	// calc num max data.
	var totalDataCount = 0;
	for (var i = 0; i < rsBlocks.length; i++) {
		totalDataCount += rsBlocks[i].dataCount;
	}

	if (buffer.getLengthInBits() > totalDataCount * 8) {
		throw new Error("code length overflow. ("
			+ buffer.getLengthInBits()
			+ ">"
			+  totalDataCount * 8
			+ ")");
	}

	// end code
	if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
		buffer.put(0, 4);
	}

	// padding
	while (buffer.getLengthInBits() % 8 != 0) {
		buffer.putBit(false);
	}

	// padding
	while (true) {
		
		if (buffer.getLengthInBits() >= totalDataCount * 8) {
			break;
		}
		buffer.put(QRCode.PAD0, 8);
		
		if (buffer.getLengthInBits() >= totalDataCount * 8) {
			break;
		}
		buffer.put(QRCode.PAD1, 8);
	}

	return QRCode.createBytes(buffer, rsBlocks);
};

QRCode.createBytes = function(buffer, rsBlocks) {

	var offset = 0;
	
	var maxDcCount = 0;
	var maxEcCount = 0;
	
	var dcdata = new Array(rsBlocks.length);
	var ecdata = new Array(rsBlocks.length);
	
	for (var r = 0; r < rsBlocks.length; r++) {

		var dcCount = rsBlocks[r].dataCount;
		var ecCount = rsBlocks[r].totalCount - dcCount;

		maxDcCount = Math.max(maxDcCount, dcCount);
		maxEcCount = Math.max(maxEcCount, ecCount);
		
		dcdata[r] = new Array(dcCount);
		
		for (var i = 0; i < dcdata[r].length; i++) {
			dcdata[r][i] = 0xff & buffer.buffer[i + offset];
		}
		offset += dcCount;
		
		var rsPoly = util.getErrorCorrectPolynomial(ecCount);
		var rawPoly = new Polynomial(dcdata[r], rsPoly.getLength() - 1);

		var modPoly = rawPoly.mod(rsPoly);
		ecdata[r] = new Array(rsPoly.getLength() - 1);
		for (var i = 0; i < ecdata[r].length; i++) {
            var modIndex = i + modPoly.getLength() - ecdata[r].length;
			ecdata[r][i] = (modIndex >= 0)? modPoly.get(modIndex) : 0;
		}

	}
	
	var totalCodeCount = 0;
	for (var i = 0; i < rsBlocks.length; i++) {
		totalCodeCount += rsBlocks[i].totalCount;
	}

	var data = new Array(totalCodeCount);
	var index = 0;

	for (var i = 0; i < maxDcCount; i++) {
		for (var r = 0; r < rsBlocks.length; r++) {
			if (i < dcdata[r].length) {
				data[index++] = dcdata[r][i];
			}
		}
	}

	for (var i = 0; i < maxEcCount; i++) {
		for (var r = 0; r < rsBlocks.length; r++) {
			if (i < ecdata[r].length) {
				data[index++] = ecdata[r][i];
			}
		}
	}

	return data;
};

var QRCode_1 = QRCode;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // qr.js doesn't handle error level of zero (M) so we need to do it right,
// thus the deep require.




 // TODO: pull this off of the QRCode class type so it matches.


// Convert from UTF-16, forcing the use of byte-mode encoding in our QR Code.
// This allows us to encode Hanji, Kanji, emoji, etc. Ideally we'd do more
// detection and not resort to byte-mode if possible, but we're trading off
// a smaller library for a smaller amount of data we can potentially encode.
// Based on http://jonisalonen.com/2012/from-utf-16-to-utf-8-in-javascript/
function convertStr(str) {
  var out = '';

  for (var i = 0; i < str.length; i++) {
    var charcode = str.charCodeAt(i);

    if (charcode < 0x0080) {
      out += String.fromCharCode(charcode);
    } else if (charcode < 0x0800) {
      out += String.fromCharCode(0xc0 | charcode >> 6);
      out += String.fromCharCode(0x80 | charcode & 0x3f);
    } else if (charcode < 0xd800 || charcode >= 0xe000) {
      out += String.fromCharCode(0xe0 | charcode >> 12);
      out += String.fromCharCode(0x80 | charcode >> 6 & 0x3f);
      out += String.fromCharCode(0x80 | charcode & 0x3f);
    } else {
      // This is a surrogate pair, so we'll reconsitute the pieces and work
      // from that
      i++;
      charcode = 0x10000 + ((charcode & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
      out += String.fromCharCode(0xf0 | charcode >> 18);
      out += String.fromCharCode(0x80 | charcode >> 12 & 0x3f);
      out += String.fromCharCode(0x80 | charcode >> 6 & 0x3f);
      out += String.fromCharCode(0x80 | charcode & 0x3f);
    }
  }

  return out;
}

var DEFAULT_PROPS = {
  size: 128,
  level: 'L',
  bgColor: '#FFFFFF',
  fgColor: '#000000',
  includeMargin: false
};
var PROP_TYPES = process.env.NODE_ENV !== 'production' ? {
  value: propTypes.string.isRequired,
  size: propTypes.number,
  level: propTypes.oneOf(['L', 'M', 'Q', 'H']),
  bgColor: propTypes.string,
  fgColor: propTypes.string,
  includeMargin: propTypes.bool,
  imageSettings: propTypes.shape({
    src: propTypes.string.isRequired,
    height: propTypes.number.isRequired,
    width: propTypes.number.isRequired,
    excavate: propTypes.bool,
    x: propTypes.number,
    y: propTypes.number
  })
} : {};
var MARGIN_SIZE = 4; // This is *very* rough estimate of max amount of QRCode allowed to be covered.
// It is "wrong" in a lot of ways (area is a terrible way to estimate, it
// really should be number of modules covered), but if for some reason we don't
// get an explicit height or width, I'd rather default to something than throw.

var DEFAULT_IMG_SCALE = 0.1;

function generatePath(modules) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var ops = [];
  modules.forEach(function (row, y) {
    var start = null;
    row.forEach(function (cell, x) {
      if (!cell && start !== null) {
        // M0 0h7v1H0z injects the space with the move and drops the comma,
        // saving a char per operation
        ops.push("M".concat(start + margin, " ").concat(y + margin, "h").concat(x - start, "v1H").concat(start + margin, "z"));
        start = null;
        return;
      } // end of row, clean up or skip


      if (x === row.length - 1) {
        if (!cell) {
          // We would have closed the op above already so this can only mean
          // 2+ light modules in a row.
          return;
        }

        if (start === null) {
          // Just a single dark module.
          ops.push("M".concat(x + margin, ",").concat(y + margin, " h1v1H").concat(x + margin, "z"));
        } else {
          // Otherwise finish the current line.
          ops.push("M".concat(start + margin, ",").concat(y + margin, " h").concat(x + 1 - start, "v1H").concat(start + margin, "z"));
        }

        return;
      }

      if (cell && start === null) {
        start = x;
      }
    });
  });
  return ops.join('');
} // We could just do this in generatePath, except that we want to support
// non-Path2D canvas, so we need to keep it an explicit step.


function excavateModules(modules, excavation) {
  return modules.slice().map(function (row, y) {
    if (y < excavation.y || y >= excavation.y + excavation.h) {
      return row;
    }

    return row.map(function (cell, x) {
      if (x < excavation.x || x >= excavation.x + excavation.w) {
        return cell;
      }

      return false;
    });
  });
}

function getImageSettings(props, cells) {
  var imageSettings = props.imageSettings,
      size = props.size,
      includeMargin = props.includeMargin;

  if (imageSettings == null) {
    return null;
  }

  var margin = includeMargin ? MARGIN_SIZE : 0;
  var numCells = cells.length + margin * 2;
  var defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
  var scale = numCells / size;
  var w = (imageSettings.width || defaultSize) * scale;
  var h = (imageSettings.height || defaultSize) * scale;
  var x = imageSettings.x == null ? cells.length / 2 - w / 2 : imageSettings.x * scale;
  var y = imageSettings.y == null ? cells.length / 2 - h / 2 : imageSettings.y * scale;
  var excavation = null;

  if (imageSettings.excavate) {
    var floorX = Math.floor(x);
    var floorY = Math.floor(y);
    var ceilW = Math.ceil(w + x - floorX);
    var ceilH = Math.ceil(h + y - floorY);
    excavation = {
      x: floorX,
      y: floorY,
      w: ceilW,
      h: ceilH
    };
  }

  return {
    x: x,
    y: y,
    h: h,
    w: w,
    excavation: excavation
  };
} // For canvas we're going to switch our drawing mode based on whether or not
// the environment supports Path2D. We only need the constructor to be
// supported, but Edge doesn't actually support the path (string) type
// argument. Luckily it also doesn't support the addPath() method. We can
// treat that as the same thing.


var SUPPORTS_PATH2D = function () {
  try {
    new Path2D().addPath(new Path2D());
  } catch (e) {
    return false;
  }

  return true;
}();

var QRCodeCanvas =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(QRCodeCanvas, _React$PureComponent);

  function QRCodeCanvas() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, QRCodeCanvas);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(QRCodeCanvas)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_canvas", void 0);

    _defineProperty(_assertThisInitialized(_this), "_image", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      imgLoaded: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleImageLoad", function () {
      _this.setState({
        imgLoaded: true
      });
    });

    return _this;
  }

  _createClass(QRCodeCanvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._image && this._image.complete) {
        this.handleImageLoad();
      }

      this.update();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props$imageSett, _nextProps$imageSetti;

      var currentSrc = (_this$props$imageSett = this.props.imageSettings) === null || _this$props$imageSett === void 0 ? void 0 : _this$props$imageSett.src;
      var nextSrc = (_nextProps$imageSetti = nextProps.imageSettings) === null || _nextProps$imageSetti === void 0 ? void 0 : _nextProps$imageSetti.src;

      if (currentSrc !== nextSrc) {
        this.setState({
          imgLoaded: false
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var _this$props = this.props,
          value = _this$props.value,
          size = _this$props.size,
          level = _this$props.level,
          bgColor = _this$props.bgColor,
          fgColor = _this$props.fgColor,
          includeMargin = _this$props.includeMargin,
          imageSettings = _this$props.imageSettings; // We'll use type===-1 to force QRCode to automatically pick the best type

      var qrcode = new QRCode_1(-1, ErrorCorrectLevel[level]);
      qrcode.addData(convertStr(value));
      qrcode.make();

      if (this._canvas != null) {
        var canvas = this._canvas;
        var ctx = canvas.getContext('2d');

        if (!ctx) {
          return;
        }

        var cells = qrcode.modules;

        if (cells === null) {
          return;
        }

        var margin = includeMargin ? MARGIN_SIZE : 0;
        var numCells = cells.length + margin * 2;
        var calculatedImageSettings = getImageSettings(this.props, cells);

        if (imageSettings != null && calculatedImageSettings != null) {
          if (calculatedImageSettings.excavation != null) {
            cells = excavateModules(cells, calculatedImageSettings.excavation);
          }
        } // We're going to scale this so that the number of drawable units
        // matches the number of cells. This avoids rounding issues, but does
        // result in some potentially unwanted single pixel issues between
        // blocks, only in environments that don't support Path2D.


        var pixelRatio = window.devicePixelRatio || 1;
        canvas.height = canvas.width = size * pixelRatio;
        var scale = size / numCells * pixelRatio;
        ctx.scale(scale, scale); // Draw solid background, only paint dark modules.

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, numCells, numCells);
        ctx.fillStyle = fgColor;

        if (SUPPORTS_PATH2D) {
          // $FlowFixMe: Path2D c'tor doesn't support args yet.
          ctx.fill(new Path2D(generatePath(cells, margin)));
        } else {
          cells.forEach(function (row, rdx) {
            row.forEach(function (cell, cdx) {
              if (cell) {
                ctx.fillRect(cdx + margin, rdx + margin, 1, 1);
              }
            });
          });
        }

        if (this.state.imgLoaded && this._image && calculatedImageSettings != null) {
          ctx.drawImage(this._image, calculatedImageSettings.x + margin, calculatedImageSettings.y + margin, calculatedImageSettings.w, calculatedImageSettings.h);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props;
          _this$props2.value;
          var size = _this$props2.size;
          _this$props2.level;
          _this$props2.bgColor;
          _this$props2.fgColor;
          var style = _this$props2.style;
          _this$props2.includeMargin;
          var imageSettings = _this$props2.imageSettings,
          otherProps = _objectWithoutProperties(_this$props2, ["value", "size", "level", "bgColor", "fgColor", "style", "includeMargin", "imageSettings"]);

      var canvasStyle = _objectSpread({
        height: size,
        width: size
      }, style);

      var img = null;
      var imgSrc = imageSettings && imageSettings.src;

      if (imageSettings != null && imgSrc != null) {
        img = React__default['default'].createElement("img", {
          src: imgSrc,
          style: {
            display: 'none'
          },
          onLoad: this.handleImageLoad,
          ref: function ref(_ref) {
            return _this2._image = _ref;
          }
        });
      }

      return React__default['default'].createElement(React__default['default'].Fragment, null, React__default['default'].createElement("canvas", _extends({
        style: canvasStyle,
        height: size,
        width: size,
        ref: function ref(_ref2) {
          return _this2._canvas = _ref2;
        }
      }, otherProps)), img);
    }
  }]);

  return QRCodeCanvas;
}(React__default['default'].PureComponent);

_defineProperty(QRCodeCanvas, "defaultProps", DEFAULT_PROPS);

if (process.env.NODE_ENV !== 'production') {
  QRCodeCanvas.propTypes = PROP_TYPES;
}

var QRCodeSVG =
/*#__PURE__*/
function (_React$PureComponent2) {
  _inherits(QRCodeSVG, _React$PureComponent2);

  function QRCodeSVG() {
    _classCallCheck(this, QRCodeSVG);

    return _possibleConstructorReturn(this, _getPrototypeOf(QRCodeSVG).apply(this, arguments));
  }

  _createClass(QRCodeSVG, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          size = _this$props3.size,
          level = _this$props3.level,
          bgColor = _this$props3.bgColor,
          fgColor = _this$props3.fgColor,
          includeMargin = _this$props3.includeMargin,
          imageSettings = _this$props3.imageSettings,
          otherProps = _objectWithoutProperties(_this$props3, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "imageSettings"]); // We'll use type===-1 to force QRCode to automatically pick the best type


      var qrcode = new QRCode_1(-1, ErrorCorrectLevel[level]);
      qrcode.addData(convertStr(value));
      qrcode.make();
      var cells = qrcode.modules;

      if (cells === null) {
        return null;
      }

      var margin = includeMargin ? MARGIN_SIZE : 0;
      var numCells = cells.length + margin * 2;
      var calculatedImageSettings = getImageSettings(this.props, cells);
      var image = null;

      if (imageSettings != null && calculatedImageSettings != null) {
        if (calculatedImageSettings.excavation != null) {
          cells = excavateModules(cells, calculatedImageSettings.excavation);
        }

        image = React__default['default'].createElement("image", {
          xlinkHref: imageSettings.src,
          height: calculatedImageSettings.h,
          width: calculatedImageSettings.w,
          x: calculatedImageSettings.x + margin,
          y: calculatedImageSettings.y + margin,
          preserveAspectRatio: "none"
        });
      } // Drawing strategy: instead of a rect per module, we're going to create a
      // single path for the dark modules and layer that on top of a light rect,
      // for a total of 2 DOM nodes. We pay a bit more in string concat but that's
      // way faster than DOM ops.
      // For level 1, 441 nodes -> 2
      // For level 40, 31329 -> 2


      var fgPath = generatePath(cells, margin);
      return React__default['default'].createElement("svg", _extends({
        shapeRendering: "crispEdges",
        height: size,
        width: size,
        viewBox: "0 0 ".concat(numCells, " ").concat(numCells)
      }, otherProps), React__default['default'].createElement("path", {
        fill: bgColor,
        d: "M0,0 h".concat(numCells, "v").concat(numCells, "H0z")
      }), React__default['default'].createElement("path", {
        fill: fgColor,
        d: fgPath
      }), image);
    }
  }]);

  return QRCodeSVG;
}(React__default['default'].PureComponent);

_defineProperty(QRCodeSVG, "defaultProps", DEFAULT_PROPS);

if (process.env.NODE_ENV !== 'production') {
  QRCodeSVG.propTypes = PROP_TYPES;
}

var QRCode$1 = function QRCode(props) {
  var renderAs = props.renderAs,
      otherProps = _objectWithoutProperties(props, ["renderAs"]);

  var Component = renderAs === 'svg' ? QRCodeSVG : QRCodeCanvas;
  return React__default['default'].createElement(Component, otherProps);
};

QRCode$1.defaultProps = _objectSpread({
  renderAs: 'canvas'
}, DEFAULT_PROPS);
var lib = QRCode$1;

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty$1;

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck$1;

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass$1;

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var defaultOptions = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: true,
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: true
};
var i18nInstance;
var I18nContext = React__default['default'].createContext();
function setDefaults() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  defaultOptions = _objectSpread$1(_objectSpread$1({}, defaultOptions), options);
}
function getDefaults() {
  return defaultOptions;
}
var ReportNamespaces = function () {
  function ReportNamespaces() {
    classCallCheck(this, ReportNamespaces);

    this.usedNamespaces = {};
  }

  createClass(ReportNamespaces, [{
    key: "addUsedNamespaces",
    value: function addUsedNamespaces(namespaces) {
      var _this = this;

      namespaces.forEach(function (ns) {
        if (!_this.usedNamespaces[ns]) _this.usedNamespaces[ns] = true;
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  }]);

  return ReportNamespaces;
}();
function setI18n(instance) {
  i18nInstance = instance;
}
function getI18n() {
  return i18nInstance;
}
var initReactI18next = {
  type: '3rdParty',
  init: function init(instance) {
    setDefaults(instance.options.react);
    setI18n(instance);
  }
};

function warn() {
  if (console && console.warn) {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);

    (_console = console).warn.apply(_console, args);
  }
}
var alreadyWarned = {};
function warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
  if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
  warn.apply(void 0, args);
}
function loadNamespaces(i18n, ns, cb) {
  i18n.loadNamespaces(ns, function () {
    if (i18n.isInitialized) {
      cb();
    } else {
      var initialized = function initialized() {
        setTimeout(function () {
          i18n.off('initialized', initialized);
        }, 0);
        cb();
      };

      i18n.on('initialized', initialized);
    }
  });
}
function hasLoadedNamespace(ns, i18n) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!i18n.languages || !i18n.languages.length) {
    warnOnce('i18n.languages were undefined or empty', i18n.languages);
    return true;
  }

  var lng = i18n.languages[0];
  var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
  var lastLng = i18n.languages[i18n.languages.length - 1];
  if (lng.toLowerCase() === 'cimode') return true;

  var loadNotPending = function loadNotPending(l, n) {
    var loadState = i18n.services.backendConnector.state["".concat(l, "|").concat(n)];
    return loadState === -1 || loadState === 2;
  };

  if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
  if (i18n.hasResourceBundle(lng, ns)) return true;
  if (!i18n.services.backendConnector.backend) return true;
  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
  return false;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function useTranslation(ns) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var i18nFromProps = props.i18n;

  var _ref = React.useContext(I18nContext) || {},
      i18nFromContext = _ref.i18n,
      defaultNSFromContext = _ref.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || getI18n();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();

  if (!i18n) {
    warnOnce('You will need to pass in an i18next instance by using initReactI18next');

    var notReadyT = function notReadyT(k) {
      return Array.isArray(k) ? k[k.length - 1] : k;
    };

    var retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }

  if (i18n.options.react && i18n.options.react.wait !== undefined) warnOnce('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');

  var i18nOptions = _objectSpread$2(_objectSpread$2(_objectSpread$2({}, getDefaults()), i18n.options.react), props);

  var useSuspense = i18nOptions.useSuspense;
  var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
  var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
    return hasLoadedNamespace(n, i18n, i18nOptions);
  });

  function getT() {
    return {
      t: i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0])
    };
  }

  var _useState = React.useState(getT()),
      _useState2 = slicedToArray(_useState, 2),
      t = _useState2[0],
      setT = _useState2[1];

  var isMounted = React.useRef(true);
  React.useEffect(function () {
    var bindI18n = i18nOptions.bindI18n,
        bindI18nStore = i18nOptions.bindI18nStore;
    isMounted.current = true;

    if (!ready && !useSuspense) {
      loadNamespaces(i18n, namespaces, function () {
        if (isMounted.current) setT(getT());
      });
    }

    function boundReset() {
      if (isMounted.current) setT(getT());
    }

    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
    return function () {
      isMounted.current = false;
      if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
        return i18n.off(e, boundReset);
      });
      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
        return i18n.store.off(e, boundReset);
      });
    };
  }, [namespaces.join()]);
  var ret = [t.t, i18n, ready];
  ret.t = t.t;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise(function (resolve) {
    loadNamespaces(i18n, namespaces, function () {
      resolve();
    });
  });
}

var BannerHeader = function (_a) {
    var bannerColor = _a.bannerColor, pageOrientation = _a.pageOrientation;
    var _b = useTranslation("translation"), t = _b.t, i18n = _b.i18n;
    var headerBackground = bannerColor === "red" ? "#C72828" : bannerColor;
    var headerColor = bannerColor === "white" ? "#C72828" : "white";
    var headerWidth = pageOrientation === "landscape" ? "11in" : "8.5in";
    var headerSize = i18n.language === "es" ? "0.6in" : "0.763in";
    return (React__default['default'].createElement("div", { className: "banner-header-container", style: {
            backgroundColor: headerBackground,
            color: headerColor,
            width: headerWidth,
        } },
        React__default['default'].createElement("div", { className: "banner-header-agency-wrapper" },
            React__default['default'].createElement("img", { src: img, alt: "agency-logo", className: "banner-header-agency-logo" })),
        React__default['default'].createElement("div", null,
            React__default['default'].createElement("h1", { className: "banner-header-text", style: { fontSize: headerSize } }, t("header.missing"))),
        React__default['default'].createElement("div", { className: "banner-header-qrCode" },
            React__default['default'].createElement(lib, { value: "www.google.com", size: 110 }))));
};

var img$1 = "data:image/png;base64,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";

var BannerFooter = function (_a) {
    var pageOrientation = _a.pageOrientation;
    var headerWidth = pageOrientation === "landscape" ? "11in" : "8.5in";
    return (React__default['default'].createElement("div", { className: "banner-footer-container", style: { width: headerWidth } },
        React__default['default'].createElement("div", { className: "banner-footer-phone-number-wrapper" },
            React__default['default'].createElement("h3", { className: "banner-footer-ncmec-number" }, "CALL: 1-800-843-5678 (1-800-THE-LOST)"),
            React__default['default'].createElement("h4", { className: "banner-footer-agency-number" }, "Lompoc Police Department (California) 1-805-736-2341")),
        React__default['default'].createElement("div", { className: "banner-footer-gmcngine-logo" },
            React__default['default'].createElement("img", { src: img$1, width: 105 }))));
};

var SingleChildPortraitDetails = function (_a) {
    var caseData = _a.caseData, childData = _a.childData;
    var t = useTranslation("translation").t;
    return (React__default['default'].createElement("div", { className: "scp-details-table" },
        React__default['default'].createElement("div", { className: "scp-details-column" },
            React__default['default'].createElement("div", { className: "scp-row" },
                React__default['default'].createElement("p", { className: "scp-labels" }, t("labels.missingDate")),
                React__default['default'].createElement("p", { className: "scp-child-info" }, caseData.missingDate || t("information.unknown"))),
            React__default['default'].createElement("div", { className: "scp-row" },
                React__default['default'].createElement("p", { className: "scp-labels" }, t("labels.location")),
                React__default['default'].createElement("p", { className: "scp-child-info" },
                    caseData.city || t("information.unknown"),
                    ",",
                    " ",
                    caseData.state || t("information.unknown"))),
            React__default['default'].createElement("div", { className: "scp-row" },
                React__default['default'].createElement("p", { className: "scp-labels" }, t("labels.birthdate")),
                React__default['default'].createElement("p", { className: "scp-child-info" }, childData.birthDate || t("information.unknown"))),
            React__default['default'].createElement("div", { className: "scp-row" },
                React__default['default'].createElement("p", { className: "scp-labels" }, t("labels.currentAge")),
                React__default['default'].createElement("p", { className: "scp-child-info" }, childData.age || t("information.unknown"))),
            React__default['default'].createElement("div", { className: "scp-row" },
                React__default['default'].createElement("p", { className: "scp-labels" }, t("labels.sex")),
                React__default['default'].createElement("p", { className: "scp-child-info" }, childData.sex || t("information.unknown")))),
        React__default['default'].createElement("div", { className: "scp-details-column" },
            React__default['default'].createElement("div", { className: "scp-row" },
                React__default['default'].createElement("p", { className: "scp-labels" }, t("labels.height")),
                React__default['default'].createElement("p", { className: "scp-child-info" },
                    childData.height || t("information.unknown"),
                    childData.heightUnit)),
            React__default['default'].createElement("div", { className: "scp-row" },
                React__default['default'].createElement("p", { className: "scp-labels" }, t("labels.weight")),
                React__default['default'].createElement("p", { className: "scp-child-info" },
                    childData.weight || t("information.unknown"),
                    " ",
                    childData.weightUnit)),
            React__default['default'].createElement("div", { className: "scp-row" },
                React__default['default'].createElement("p", { className: "scp-labels" }, t("labels.eyeColor")),
                React__default['default'].createElement("p", { className: "scp-child-info" }, childData.eyeColor || t("information.unknown"))),
            React__default['default'].createElement("div", { className: "scp-row" },
                React__default['default'].createElement("p", { className: "scp-labels" }, t("labels.hairColor")),
                React__default['default'].createElement("p", { className: "scp-child-info" }, childData.hairColor || t("information.unknown"))),
            React__default['default'].createElement("div", { className: "scp-row" },
                React__default['default'].createElement("p", { className: "scp-labels" }, t("labels.country")),
                React__default['default'].createElement("p", { className: "scp-child-info" }, caseData.country)))));
};

var BannerCard = function (_a) {
    var children = _a.children, dimensions = _a.dimensions;
    return (React__default['default'].createElement("div", { className: "banner-card-container", style: dimensions }, children));
};

var no_photo_found = "https://s3.us-east-2.amazonaws.com/caseview-children-assets/Images/no_photo_found.jpg";

var AbductorsCard = function (_a) {
    var bannerOrientation = _a.bannerOrientation, abductorData = _a.abductorData;
    var t = useTranslation("translation").t;
    var portraitDimensions = {
        width: "4.3in",
        height: "1.55in",
    };
    var landscapeDimensions = {
        width: "4in",
        height: "1.65in",
    };
    var cardDimensions = bannerOrientation === "portrait" ? portraitDimensions : landscapeDimensions;
    return (React__default['default'].createElement(BannerCard, { dimensions: cardDimensions },
        React__default['default'].createElement("div", { className: "banner-abductor-card-content-wrapper" },
            React__default['default'].createElement("div", { className: "banner-abductor-image-wrapper" },
                React__default['default'].createElement("img", { src: abductorData.images[0] || no_photo_found, className: "banner-abductor-image", alt: "abductor" })),
            React__default['default'].createElement("div", { className: "banner-abductor-details-container" },
                React__default['default'].createElement("h3", null, abductorData.fullName),
                React__default['default'].createElement("div", { className: "banner-abductor-row" },
                    React__default['default'].createElement("p", { className: "banner-abductor-label" }, t("labels.birthdate")),
                    React__default['default'].createElement("p", { className: "banner-abductor-info" }, abductorData.birthDate)),
                React__default['default'].createElement("div", { className: "banner-abductor-row" },
                    React__default['default'].createElement("p", { className: "banner-abductor-label" }, t("labels.sex")),
                    React__default['default'].createElement("p", { className: "banner-abductor-info" }, abductorData.sex)),
                React__default['default'].createElement("div", { className: "banner-abductor-row" },
                    React__default['default'].createElement("p", { className: "banner-abductor-label" }, t("labels.height")),
                    React__default['default'].createElement("p", { className: "banner-abductor-info" }, abductorData.height))))));
};

var SingleChildPortraitHeadline = function (_a) {
    var caseData = _a.caseData, childData = _a.childData;
    var t = useTranslation().t;
    return (React__default['default'].createElement("div", { className: "scpa-headline-container" },
        React__default['default'].createElement("img", { src: childData.images[0], alt: "childPhotoLeft", className: "scpa-child-image" }),
        caseData.abductors.length ? (React__default['default'].createElement("div", { className: "scpa-abductors-container" },
            React__default['default'].createElement("h4", null, t("labels.companions")),
            caseData.abductors.map(function (abductor, index) { return (React__default['default'].createElement(AbductorsCard, { bannerOrientation: "portrait", abductorData: abductor, key: abductor.abductorId + index })); }))) : null));
};

var SingleChildPortraitBody = function (_a) {
    var caseData = _a.caseData;
    var childSelected = caseData.children[0];
    var t = useTranslation("translation").t;
    return (React__default['default'].createElement("div", { className: "scp-body-container" },
        React__default['default'].createElement("div", { className: "scp-banner-headline" },
            React__default['default'].createElement(SingleChildPortraitHeadline, { caseData: caseData, childData: childSelected }),
            React__default['default'].createElement("div", { className: "scp-banner-title" },
                React__default['default'].createElement("h2", null, childSelected.fullName),
                React__default['default'].createElement("h3", null,
                    t("labels.missingFrom"),
                    caseData.city || t("information.unknown"),
                    ",",
                    " ",
                    caseData.state || t("information.unknown")))),
        React__default['default'].createElement("div", { className: "scp-banner-details" },
            React__default['default'].createElement(SingleChildPortraitDetails, { caseData: caseData, childData: childSelected }),
            React__default['default'].createElement("div", { className: "scp-circumstances" },
                React__default['default'].createElement("p", null, caseData.circumstances)))));
};

function useCases() {
    var caseData = React.useContext(DataContext);
    return caseData;
}

var SingleChildPortraitBanner = function () {
    var data = useCases().data;
    return (React__default['default'].createElement("div", { className: "scp-container" },
        React__default['default'].createElement(BannerHeader, { bannerColor: "red", pageOrientation: "portrait" }),
        React__default['default'].createElement(SingleChildPortraitBody, { caseData: data }),
        React__default['default'].createElement(BannerFooter, { pageOrientation: "portrait" })));
};

var LandscapeChildCard = function (_a) {
    var childrenAmount = _a.childrenAmount, childData = _a.childData;
    var t = useTranslation("translation").t;
    var landscapeChildCardDimensions = {
        width: childrenAmount <= 3 ? "3.25in" : "2.5in",
        height: "3.7in",
    };
    return (React__default['default'].createElement(BannerCard, { dimensions: landscapeChildCardDimensions },
        React__default['default'].createElement("div", { className: "mcl-card-content-wrapper" },
            React__default['default'].createElement("div", { className: "mcl-image-wrapper" },
                React__default['default'].createElement("img", { src: childData.images[0] || no_photo_found, className: "mcl-child-image", alt: "medium-child-card" })),
            React__default['default'].createElement("div", { className: "mcl-card-details-container" },
                React__default['default'].createElement("h2", null, childData.fullName),
                React__default['default'].createElement("div", null,
                    React__default['default'].createElement("div", { className: "mcl-child-card-row" },
                        React__default['default'].createElement("p", { className: "mcl-child-card-label" }, t("labels.currentAge")),
                        React__default['default'].createElement("p", { className: "mcl-child-card-info" }, childData.age || t("information.unknown"))),
                    React__default['default'].createElement("div", { className: "mcl-child-card-row" },
                        React__default['default'].createElement("p", { className: "mcl-child-card-label" }, t("labels.sex")),
                        React__default['default'].createElement("p", { className: "mcl-child-card-info" }, childData.sex || t("information.unknown"))),
                    React__default['default'].createElement("div", { className: "mcl-child-card-row" },
                        React__default['default'].createElement("p", { className: "mcl-child-card-label" }, t("labels.height")),
                        React__default['default'].createElement("p", { className: "mcl-child-card-info" },
                            childData.height || t("information.unknown"),
                            " ",
                            childData.heightUnit)),
                    React__default['default'].createElement("div", { className: "mcl-child-card-row" },
                        React__default['default'].createElement("p", { className: "mcl-child-card-label" }, t("labels.weight")),
                        React__default['default'].createElement("p", { className: "mcl-child-card-info" },
                            childData.weight || t("information.unknown"),
                            " ",
                            childData.weightUnit)))))));
};

var MultipleChildLandscapeBody = function (_a) {
    var caseData = _a.caseData;
    var t = useTranslation("translation").t;
    return (React__default['default'].createElement("div", { className: "mcl-body-container" },
        React__default['default'].createElement("div", { className: "mcl-cards-container" }, caseData.children.map(function (child, index) { return (React__default['default'].createElement(LandscapeChildCard, { key: caseData.caseId + index, childrenAmount: caseData.children.length, childData: child })); })),
        React__default['default'].createElement("div", { className: "mcl-missing-date-location" },
            React__default['default'].createElement("div", { className: "mcl-column" },
                React__default['default'].createElement("div", { className: "mcl-row" },
                    React__default['default'].createElement("p", { className: "mcl-label" }, t("labels.missingDate")),
                    React__default['default'].createElement("p", { className: "mcl-child-info" }, caseData.missingDate))),
            React__default['default'].createElement("div", { className: "mcl-column" },
                React__default['default'].createElement("div", { className: "mcl-row" },
                    React__default['default'].createElement("p", { className: "mcl-label" }, t("labels.location")),
                    React__default['default'].createElement("p", { className: "mcl-child-info" },
                        caseData.city || t("information.unknown"),
                        ",",
                        " ",
                        caseData.state || t("information.unknown"))))),
        React__default['default'].createElement("div", { className: "mcl-circumstances" },
            React__default['default'].createElement("p", null, caseData.circumstances))));
};

var MultipleChildLandscapeBanner = function () {
    var data = useCases().data;
    return (React__default['default'].createElement("div", { className: "mcl-container" },
        React__default['default'].createElement(BannerHeader, { bannerColor: "red", pageOrientation: "landscape" }),
        React__default['default'].createElement(MultipleChildLandscapeBody, { caseData: data }),
        React__default['default'].createElement(BannerFooter, { pageOrientation: "landscape" })));
};

var MediumPortraitChildCard = function (_a) {
    var childData = _a.childData;
    var t = useTranslation("translation").t;
    var mediumPortraitChildCardDimensions = {
        width: "7.986in",
        height: "1.83in",
    };
    return (React__default['default'].createElement(BannerCard, { dimensions: mediumPortraitChildCardDimensions },
        React__default['default'].createElement("div", { className: "mcp-md-card-content-wrapper" },
            React__default['default'].createElement("div", { className: "mcp-md-image-wrapper" },
                React__default['default'].createElement("img", { src: childData.images[0] || no_photo_found, className: "mcp-md-child-image", alt: "medium-child-card" })),
            React__default['default'].createElement("div", { className: "mcp-md-card-details-container" },
                React__default['default'].createElement("h2", null, childData.fullName),
                React__default['default'].createElement("div", { className: "mcp-md-card-details-table" },
                    React__default['default'].createElement("div", { className: "mcp-md-child-card-column" },
                        React__default['default'].createElement("div", { className: "mcp-md-child-card-row" },
                            React__default['default'].createElement("p", { className: "mcp-md-child-card-label" }, t("labels.currentAge")),
                            React__default['default'].createElement("p", { className: "mcp-md-child-card-info" }, childData.age || t("information.unknown"))),
                        React__default['default'].createElement("div", { className: "mcp-md-child-card-row" },
                            React__default['default'].createElement("p", { className: "mcp-md-child-card-label" }, t("labels.sex")),
                            React__default['default'].createElement("p", { className: "mcp-md-child-card-info" }, childData.sex || t("information.unknown"))),
                        React__default['default'].createElement("div", { className: "mcp-md-child-card-row" },
                            React__default['default'].createElement("p", { className: "mcp-md-child-card-label" },
                                t("labels.height"),
                                ":"),
                            React__default['default'].createElement("p", { className: "mcp-md-child-card-info" },
                                childData.height || t("information.unknown"),
                                " ",
                                childData.heightUnit))),
                    React__default['default'].createElement("div", { className: "mcp-md-child-card-column" },
                        React__default['default'].createElement("div", { className: "mcp-md-child-card-row" },
                            React__default['default'].createElement("p", { className: "mcp-md-child-card-label" }, t("labels.weight")),
                            React__default['default'].createElement("p", { className: "mcp-md-child-card-info" },
                                childData.weight || t("information.unknown"),
                                " ",
                                childData.weightUnit)),
                        React__default['default'].createElement("div", { className: "mcp-md-child-card-row" },
                            React__default['default'].createElement("p", { className: "mcp-md-child-card-label" }, t("labels.eyeColor")),
                            React__default['default'].createElement("p", { className: "mcp-md-child-card-info" }, childData.eyeColor || t("information.unknown"))),
                        React__default['default'].createElement("div", { className: "mcp-md-child-card-row" },
                            React__default['default'].createElement("p", { className: "mcp-md-child-card-label" }, t("labels.hairColor")),
                            React__default['default'].createElement("p", { className: "mcp-md-child-card-info" }, childData.hairColor || t("information.unknown")))))))));
};

var SmallPortraitChildCard = function (_a) {
    var childData = _a.childData;
    var t = useTranslation("translation").t;
    var smallPortraitChildCardDimensions = {
        width: "7.986in",
        height: "1.5in",
    };
    return (React__default['default'].createElement(BannerCard, { dimensions: smallPortraitChildCardDimensions },
        React__default['default'].createElement("div", { className: "mcp-sm-card-content-wrapper" },
            React__default['default'].createElement("div", { className: "mcp-sm-image-wrapper" },
                React__default['default'].createElement("img", { src: childData.images[0] || no_photo_found, className: "mcp-sm-child-image", alt: "medium-child-card" })),
            React__default['default'].createElement("div", { className: "mcp-sm-card-details-container" },
                React__default['default'].createElement("h2", null, childData.fullName),
                React__default['default'].createElement("div", { className: "mcp-sm-card-details-table" },
                    React__default['default'].createElement("div", { className: "mcp-sm-child-card-column" },
                        React__default['default'].createElement("div", { className: "mcp-sm-child-card-row" },
                            React__default['default'].createElement("p", { className: "mcp-sm-child-card-label" }, t("labels.currentAge")),
                            React__default['default'].createElement("p", { className: "mcp-sm-child-card-info" }, childData.age || t("information.unknown"))),
                        React__default['default'].createElement("div", { className: "mcp-sm-child-card-row" },
                            React__default['default'].createElement("p", { className: "mcp-sm-child-card-label" }, t("labels.sex")),
                            React__default['default'].createElement("p", { className: "mcp-sm-child-card-info" }, childData.sex || t("information.unknown"))),
                        React__default['default'].createElement("div", { className: "mcp-sm-child-card-row" },
                            React__default['default'].createElement("p", { className: "mcp-sm-child-card-label" }, t("labels.height")),
                            React__default['default'].createElement("p", { className: "mcp-sm-child-card-info" },
                                childData.height || t("information.unknown"),
                                " ",
                                childData.heightUnit))),
                    React__default['default'].createElement("div", { className: "mcp-sm-child-card-column" },
                        React__default['default'].createElement("div", { className: "mcp-sm-child-card-row" },
                            React__default['default'].createElement("p", { className: "mcp-sm-child-card-label" }, t("labels.weight")),
                            React__default['default'].createElement("p", { className: "mcp-sm-child-card-info" },
                                childData.weight || t("information.unknown"),
                                " ",
                                childData.weightUnit)),
                        React__default['default'].createElement("div", { className: "mcp-sm-child-card-row" },
                            React__default['default'].createElement("p", { className: "mcp-sm-child-card-label" }, t("labels.eyeColor")),
                            React__default['default'].createElement("p", { className: "mcp-sm-child-card-info" }, childData.eyeColor || t("information.unknown"))),
                        React__default['default'].createElement("div", { className: "mcp-sm-child-card-row" },
                            React__default['default'].createElement("p", { className: "mcp-sm-child-card-label" }, t("labels.hairColor")),
                            React__default['default'].createElement("p", { className: "mcp-sm-child-card-info" }, childData.hairColor || t("information.unknown")))))))));
};

var MultipleChildPortraitHeadline = function (_a) {
    var caseData = _a.caseData;
    var childrenAmount = caseData.children.length;
    return (React__default['default'].createElement("div", { className: "mcp-headline-container" }, childrenAmount <= 3
        ? caseData.children.map(function (child, index) { return (React__default['default'].createElement(MediumPortraitChildCard, { childData: child, key: child.childId + index })); })
        : caseData.children.map(function (child, index) { return (React__default['default'].createElement(SmallPortraitChildCard, { childData: child, key: child.childId + index })); })));
};

var MultipleChildPortraitDetails = function (_a) {
    var caseData = _a.caseData;
    var t = useTranslation("translation").t;
    return (React__default['default'].createElement("div", { className: "mcp-details-container" },
        React__default['default'].createElement("div", { className: "mcp-banner-details" },
            React__default['default'].createElement("div", { className: "mcp-date-location-container" },
                React__default['default'].createElement("div", { className: "mcp-details-column" },
                    React__default['default'].createElement("div", { className: "mcp-details-row" },
                        React__default['default'].createElement("p", { className: "mcp-details-label-missingDate" }, t("labels.missingDate")),
                        React__default['default'].createElement("p", { className: "mcp-details-children-info" }, caseData.missingDate))),
                React__default['default'].createElement("div", { className: "mcp-details-column" },
                    React__default['default'].createElement("div", { className: "mcp-details-row" },
                        React__default['default'].createElement("p", { className: "mcp-details-label-location" }, t("labels.location")),
                        React__default['default'].createElement("p", { className: "mcp-details-children-info" },
                            caseData.city || t("information.unknown"),
                            ",",
                            " ",
                            caseData.state || t("information.unknown"))))),
            React__default['default'].createElement("div", { className: "mcp-circumstances" },
                React__default['default'].createElement("p", null, caseData.circumstances)))));
};

var MultipleChildPortraitBanner = function () {
    var data = useCases().data;
    return (React__default['default'].createElement("div", { className: "mcp-container" },
        React__default['default'].createElement(BannerHeader, { bannerColor: "red", pageOrientation: "portrait" }),
        React__default['default'].createElement(MultipleChildPortraitHeadline, { caseData: data }),
        React__default['default'].createElement(MultipleChildPortraitDetails, { caseData: data }),
        React__default['default'].createElement(BannerFooter, { pageOrientation: "portrait" })));
};

var SingleChildLandscapeDetails = function (_a) {
    var childData = _a.childData, caseData = _a.caseData;
    var t = useTranslation("translation").t;
    return (React__default['default'].createElement("div", { className: "scl-details-table" },
        React__default['default'].createElement("div", { className: "scl-row" },
            React__default['default'].createElement("p", { className: "scl-label" }, t("labels.missingDate")),
            React__default['default'].createElement("p", { className: "scl-child-info" }, caseData.missingDate)),
        React__default['default'].createElement("div", { className: "scl-row" },
            React__default['default'].createElement("p", { className: "scl-label" }, t("labels.location")),
            React__default['default'].createElement("p", { className: "scl-child-info" },
                caseData.city || t("information.unknown"),
                ",",
                " ",
                caseData.state || t("information.unknown"))),
        React__default['default'].createElement("div", { className: "scl-row" },
            React__default['default'].createElement("p", { className: "scl-label" }, t("labels.birthdate")),
            React__default['default'].createElement("p", { className: "scl-child-info" }, childData.birthDate || t("information.unknown"))),
        React__default['default'].createElement("div", { className: "scl-row" },
            React__default['default'].createElement("p", { className: "scl-label" }, t("labels.currentAge")),
            React__default['default'].createElement("p", { className: "scl-child-info" }, childData.age || t("information.unknown"))),
        React__default['default'].createElement("div", { className: "scl-row" },
            React__default['default'].createElement("p", { className: "scl-label" }, t("labels.sex")),
            React__default['default'].createElement("p", { className: "scl-child-info" }, childData.sex || t("information.unknown"))),
        React__default['default'].createElement("div", { className: "scl-row" },
            React__default['default'].createElement("p", { className: "scl-label" }, t("labels.height")),
            React__default['default'].createElement("p", { className: "scl-child-info" },
                childData.height || t("information.unknown"),
                " ",
                childData.heightUnit)),
        React__default['default'].createElement("div", { className: "scl-row" },
            React__default['default'].createElement("p", { className: "scl-label" }, t("labels.weight")),
            React__default['default'].createElement("p", { className: "scl-child-info" },
                childData.weight || t("information.unknown"),
                " ",
                childData.weightUnit)),
        React__default['default'].createElement("div", { className: "scl-row" },
            React__default['default'].createElement("p", { className: "scl-label" }, t("labels.eyeColor")),
            React__default['default'].createElement("p", { className: "scl-child-info" }, childData.eyeColor || t("information.unknown"))),
        React__default['default'].createElement("div", { className: "scl-row" },
            React__default['default'].createElement("p", { className: "scl-label" }, t("labels.hairColor")),
            React__default['default'].createElement("p", { className: "scl-child-info" }, childData.hairColor || t("information.unknown"))),
        React__default['default'].createElement("div", { className: "scl-row" },
            React__default['default'].createElement("p", { className: "scl-label" }, t("labels.country")),
            React__default['default'].createElement("p", { className: "scl-child-info" }, caseData.country))));
};

var SingleChildLandscapeHeadline = function (_a) {
    var childData = _a.childData, hasAbductors = _a.hasAbductors;
    return (React__default['default'].createElement("div", { className: "scl-images-container" },
        React__default['default'].createElement("img", { src: childData.images[0] || no_photo_found, alt: "childPhotoLeft", className: "scl-child-image" }),
        childData.images[1] && !hasAbductors ? (React__default['default'].createElement("img", { src: childData.images[1], alt: "childPhotoRight", className: "scl-child-image" })) : null));
};

var SingleChildLandscapeBody = function (_a) {
    var caseData = _a.caseData;
    var t = useTranslation("translation").t;
    var childSelected = caseData.children[0];
    return (React__default['default'].createElement("div", { className: "scl-body-container" },
        React__default['default'].createElement("div", { className: "scl-upper-section" },
            React__default['default'].createElement(SingleChildLandscapeHeadline, { childData: childSelected, hasAbductors: Boolean(caseData.abductors.length) }),
            React__default['default'].createElement(SingleChildLandscapeDetails, { childData: childSelected, caseData: caseData }),
            caseData.abductors.length ? (React__default['default'].createElement("div", { className: "scl-abductors-wrapper" },
                React__default['default'].createElement("h4", null, t("labels.companions")),
                caseData.abductors.map(function (abductor, index) { return (React__default['default'].createElement(AbductorsCard, { bannerOrientation: "landscape", abductorData: abductor, key: abductor.abductorId + index })); }))) : null),
        React__default['default'].createElement("div", { className: "scl-banner-title" },
            React__default['default'].createElement("h2", null, childSelected.fullName),
            React__default['default'].createElement("h3", null,
                t("labels.missingFrom"),
                " ",
                caseData.city || t("information.unknown"),
                ",",
                " ",
                caseData.state || t("information.unknown"))),
        React__default['default'].createElement("div", { className: "scl-circumstances" },
            React__default['default'].createElement("p", null, caseData.circumstances))));
};

var SingleChildLandscapeBanner = function () {
    var data = useCases().data;
    return (React__default['default'].createElement("div", { className: "scl-container" },
        React__default['default'].createElement(BannerHeader, { bannerColor: "red", pageOrientation: "landscape" }),
        React__default['default'].createElement(SingleChildLandscapeBody, { caseData: data }),
        React__default['default'].createElement(BannerFooter, { pageOrientation: "landscape" })));
};

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}

function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty$2(target, key, source[key]);
    });
  }

  return target;
}

function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2(Constructor, staticProps);
  return Constructor;
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$1(self);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

var consoleLogger = {
  type: 'logger',
  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};

var Logger = function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$2(this, Logger);

    this.init(concreteLogger, options);
  }

  _createClass$2(Logger, [{
    key: "init",
    value: function init(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.prefix = options.prefix || 'i18next:';
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.forward(args, 'log', '', true);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.forward(args, 'warn', '', true);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.forward(args, 'error', '');
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug) return null;
      if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger(this.logger, _objectSpread$3({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }, this.options));
    }
  }]);

  return Logger;
}();

var baseLogger = new Logger();

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck$2(this, EventEmitter);

    this.observers = {};
  }

  _createClass$2(EventEmitter, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;

      events.split(' ').forEach(function (event) {
        _this.observers[event] = _this.observers[event] || [];

        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.observers[event]) return;

      if (!listener) {
        delete this.observers[event];
        return;
      }

      this.observers[event] = this.observers[event].filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function (observer) {
          observer.apply(void 0, args);
        });
      }

      if (this.observers['*']) {
        var _cloned = [].concat(this.observers['*']);

        _cloned.forEach(function (observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);

  return EventEmitter;
}();

function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null) return '';
  return '' + object;
}
function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();

    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  var value = getPath(data, key);

  if (value !== undefined) {
    return value;
  }

  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (var prop in source) {
    if (prop !== '__proto__' && prop !== 'constructor') {
      if (prop in target) {
        if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }

  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
function escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }

  return data;
}
var isIE10 = typeof window !== 'undefined' && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;

var ResourceStore = function (_EventEmitter) {
  _inherits$1(ResourceStore, _EventEmitter);

  function ResourceStore(data) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };

    _classCallCheck$2(this, ResourceStore);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(ResourceStore).call(this));

    if (isIE10) {
      EventEmitter.call(_assertThisInitialized$1(_this));
    }

    _this.data = data || {};
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    return _this;
  }

  _createClass$2(ResourceStore, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);

      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var path = [lng, ns];
      if (key && typeof key !== 'string') path = path.concat(key);
      if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
      }

      return getPath(this.data, path);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === undefined) keySeparator = '.';
      var path = [lng, ns];
      if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        value = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      setPath(this.data, path, value);
      if (!options.silent) this.emit('added', lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        silent: false
      };

      for (var m in resources) {
        if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
      }

      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        deep = resources;
        resources = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      var pack = getPath(this.data, path) || {};

      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = _objectSpread$3({}, pack, resources);
      }

      setPath(this.data, path, pack);
      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }

      this.removeNamespaces(ns);
      this.emit('removed', lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== undefined;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns) ns = this.options.defaultNS;
      if (this.options.compatibilityAPI === 'v1') return _objectSpread$3({}, {}, this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);

  return ResourceStore;
}(EventEmitter);

var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

var checkedLoadedFor = {};

var Translator = function (_EventEmitter) {
  _inherits$1(Translator, _EventEmitter);

  function Translator(services) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$2(this, Translator);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Translator).call(this));

    if (isIE10) {
      EventEmitter.call(_assertThisInitialized$1(_this));
    }

    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, _assertThisInitialized$1(_this));
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    _this.logger = baseLogger.create('translator');
    return _this;
  }

  _createClass$2(Translator, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng) this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };
      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== undefined;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
      if (nsSeparator === undefined) nsSeparator = ':';
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS;

      if (nsSeparator && key.indexOf(nsSeparator) > -1) {
        var m = key.match(this.interpolator.nestingRegexp);

        if (m && m.length > 0) {
          return {
            key: key,
            namespaces: namespaces
          };
        }

        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
        key = parts.join(keySeparator);
      }

      if (typeof namespaces === 'string') namespaces = [namespaces];
      return {
        key: key,
        namespaces: namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options, lastKey) {
      var _this2 = this;

      if (_typeof$1(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
        options = this.options.overloadTranslationOptionHandler(arguments);
      }

      if (!options) options = {};
      if (keys === undefined || keys === null) return '';
      if (!Array.isArray(keys)) keys = [String(keys)];
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;

      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
          key = _this$extractFromKey.key,
          namespaces = _this$extractFromKey.namespaces;

      var namespace = namespaces[namespaces.length - 1];
      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

      if (lng && lng.toLowerCase() === 'cimode') {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;
          return namespace + nsSeparator + key;
        }

        return key;
      }

      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
      var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';

      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
        if (!options.returnObjects && !this.options.returnObjects) {
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
          return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, options) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
        }

        if (keySeparator) {
          var resTypeIsArray = resType === '[object Array]';
          var copy = resTypeIsArray ? [] : {};
          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

          for (var m in res) {
            if (Object.prototype.hasOwnProperty.call(res, m)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
              copy[m] = this.translate(deepKey, _objectSpread$3({}, options, {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy[m] === deepKey) copy[m] = res[m];
            }
          }

          res = copy;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
        res = res.join(joinArrays);
        if (res) res = this.extendTranslation(res, keys, options, lastKey);
      } else {
        var usedDefault = false;
        var usedKey = false;

        if (!this.isValidLookup(res) && options.defaultValue !== undefined) {
          usedDefault = true;

          if (options.count !== undefined) {
            var suffix = this.pluralResolver.getSuffix(lng, options.count);
            res = options["defaultValue".concat(suffix)];
          }

          if (!res) res = options.defaultValue;
        }

        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        }

        var updateMissing = options.defaultValue && options.defaultValue !== res && this.options.updateMissing;

        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? options.defaultValue : res);

          if (keySeparator) {
            var fk = this.resolve(key, _objectSpread$3({}, options, {
              keySeparator: false
            }));
            if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
          }

          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);

          if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === 'all') {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }

          var send = function send(l, k) {
            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
            }

            _this2.emit('missingKey', l, namespace, k, res);
          };

          if (this.options.saveMissing) {
            var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';

            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function (l) {
                var plurals = _this2.pluralResolver.getPluralFormsOfKey(l, key);

                plurals.forEach(function (p) {
                  return send([l], p);
                });
              });
            } else {
              send(lngs, key);
            }
          }
        }

        res = this.extendTranslation(res, keys, options, resolved, lastKey);
        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);
        if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
      }

      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved, lastKey) {
      var _this3 = this;

      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, options, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved: resolved
        });
      } else if (!options.skipInterpolation) {
        if (options.interpolation) this.interpolator.init(_objectSpread$3({}, options, {
          interpolation: _objectSpread$3({}, this.options.interpolation, options.interpolation)
        }));
        var skipOnVariables = options.interpolation && options.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
        var nestBef;

        if (skipOnVariables) {
          var nb = res.match(this.interpolator.nestingRegexp);
          nestBef = nb && nb.length;
        }

        var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
        if (this.options.interpolation.defaultVariables) data = _objectSpread$3({}, this.options.interpolation.defaultVariables, data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options);

        if (skipOnVariables) {
          var na = res.match(this.interpolator.nestingRegexp);
          var nestAft = na && na.length;
          if (nestBef < nestAft) options.nest = false;
        }

        if (options.nest !== false) res = this.interpolator.nest(res, function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (lastKey && lastKey[0] === args[0] && !options.context) {
            _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));

            return null;
          }

          return _this3.translate.apply(_this3, args.concat([key]));
        }, options);
        if (options.interpolation) this.interpolator.reset();
      }

      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

      if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$3({
          i18nResolved: resolved
        }, options) : options, this);
      }

      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var found;
      var usedKey;
      var exactUsedKey;
      var usedLng;
      var usedNS;
      if (typeof keys === 'string') keys = [keys];
      keys.forEach(function (k) {
        if (_this4.isValidLookup(found)) return;

        var extracted = _this4.extractFromKey(k, options);

        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function (ns) {
          if (_this4.isValidLookup(found)) return;
          usedNS = ns;

          if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
            checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;

            _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
          }

          codes.forEach(function (code) {
            if (_this4.isValidLookup(found)) return;
            usedLng = code;
            var finalKey = key;
            var finalKeys = [finalKey];

            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count);
              if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix);
              if (needsContextHandling) finalKeys.push(finalKey += "".concat(_this4.options.contextSeparator).concat(options.context));
              if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);
            }

            var possibleKey;

            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey: usedKey,
        exactUsedKey: exactUsedKey,
        usedLng: usedLng,
        usedNS: usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }]);

  return Translator;
}(EventEmitter);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtil = function () {
  function LanguageUtil(options) {
    _classCallCheck$2(this, LanguageUtil);

    this.options = options;
    this.whitelist = this.options.supportedLngs || false;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create('languageUtils');
  }

  _createClass$2(LanguageUtil, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return null;
      var p = code.split('-');
      if (p.length === 2) return null;
      p.pop();
      if (p[p.length - 1].toLowerCase() === 'x') return null;
      return this.formatLanguageCode(p.join('-'));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return code;
      var p = code.split('-');
      return this.formatLanguageCode(p[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      if (typeof code === 'string' && code.indexOf('-') > -1) {
        var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
        var p = code.split('-');

        if (this.options.lowerCaseLng) {
          p = p.map(function (part) {
            return part.toLowerCase();
          });
        } else if (p.length === 2) {
          p[0] = p[0].toLowerCase();
          p[1] = p[1].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        } else if (p.length === 3) {
          p[0] = p[0].toLowerCase();
          if (p[1].length === 2) p[1] = p[1].toUpperCase();
          if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
          if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
        }

        return p.join('-');
      }

      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isWhitelisted",
    value: function isWhitelisted(code) {
      this.logger.deprecate('languageUtils.isWhitelisted', 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.');
      return this.isSupportedCode(code);
    }
  }, {
    key: "isSupportedCode",
    value: function isSupportedCode(code) {
      if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
        code = this.getLanguagePartFromCode(code);
      }

      return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function getBestMatchFromCodes(codes) {
      var _this = this;

      if (!codes) return null;
      var found;
      codes.forEach(function (code) {
        if (found) return;

        var cleanedLng = _this.formatLanguageCode(code);

        if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
      });

      if (!found && this.options.supportedLngs) {
        codes.forEach(function (code) {
          if (found) return;

          var lngOnly = _this.getLanguagePartFromCode(code);

          if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
          found = _this.options.supportedLngs.find(function (supportedLng) {
            if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
          });
        });
      }

      if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
      return found;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks) return [];
      if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
      if (!code) return fallbacks["default"] || [];
      var found = fallbacks[code];
      if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found) found = fallbacks[this.formatLanguageCode(code)];
      if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
      if (!found) found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this2 = this;

      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];

      var addCode = function addCode(c) {
        if (!c) return;

        if (_this2.isSupportedCode(c)) {
          codes.push(c);
        } else {
          _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
        }
      };

      if (typeof code === 'string' && code.indexOf('-') > -1) {
        if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
        if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === 'string') {
        addCode(this.formatLanguageCode(code));
      }

      fallbackCodes.forEach(function (fc) {
        if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);

  return LanguageUtil;
}();

var sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he', 'iw'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};

function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver = function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$2(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    this.rules = createRules();
  }

  _createClass$2(PluralResolver, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var rule = this.getRule(code);
      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var _this = this;

      var ret = [];
      var rule = this.getRule(code);
      if (!rule) return ret;
      rule.numbers.forEach(function (n) {
        var suffix = _this.getSuffix(code, n);

        ret.push("".concat(key).concat(suffix));
      });
      return ret;
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var _this2 = this;

      var rule = this.getRule(code);

      if (rule) {
        var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
        var suffix = rule.numbers[idx];

        if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          if (suffix === 2) {
            suffix = 'plural';
          } else if (suffix === 1) {
            suffix = '';
          }
        }

        var returnSuffix = function returnSuffix() {
          return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
        };

        if (this.options.compatibilityJSON === 'v1') {
          if (suffix === 1) return '';
          if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
          return returnSuffix();
        } else if (this.options.compatibilityJSON === 'v2') {
          return returnSuffix();
        } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          return returnSuffix();
        }

        return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
      }

      this.logger.warn("no plural rule found for: ".concat(code));
      return '';
    }
  }]);

  return PluralResolver;
}();

var Interpolator = function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck$2(this, Interpolator);

    this.logger = baseLogger.create('interpolator');
    this.options = options;

    this.format = options.interpolation && options.interpolation.format || function (value) {
      return value;
    };

    this.init(options);
  }

  _createClass$2(Interpolator, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!options.interpolation) options.interpolation = {
        escapeValue: true
      };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
      this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
      this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
      this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
      this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options) this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, 'g');
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;

      var match;
      var value;
      var replaces;
      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

      function regexSafe(val) {
        return val.replace(/\$/g, '$$$$');
      }

      var handleFormat = function handleFormat(key) {
        if (key.indexOf(_this.formatSeparator) < 0) {
          var path = getPathWithDefaults(data, defaultData, key);
          return _this.alwaysFormat ? _this.format(path, undefined, lng) : path;
        }

        var p = key.split(_this.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(_this.formatSeparator).trim();
        return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, options);
      };

      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
      var todos = [{
        regex: this.regexpUnescape,
        safeValue: function safeValue(val) {
          return regexSafe(val);
        }
      }, {
        regex: this.regexp,
        safeValue: function safeValue(val) {
          return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
        }
      }];
      todos.forEach(function (todo) {
        replaces = 0;

        while (match = todo.regex.exec(str)) {
          value = handleFormat(match[1].trim());

          if (value === undefined) {
            if (typeof missingInterpolationHandler === 'function') {
              var temp = missingInterpolationHandler(str, match, options);
              value = typeof temp === 'string' ? temp : '';
            } else if (skipOnVariables) {
              value = match[0];
              continue;
            } else {
              _this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));

              value = '';
            }
          } else if (typeof value !== 'string' && !_this.useRawValueToEscape) {
            value = makeString(value);
          }

          str = str.replace(match[0], todo.safeValue(value));
          todo.regex.lastIndex = 0;
          replaces++;

          if (replaces >= _this.maxReplaces) {
            break;
          }
        }
      });
      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var _this2 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var match;
      var value;

      var clonedOptions = _objectSpread$3({}, options);

      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;

      function handleHasOptions(key, inheritedOptions) {
        var sep = this.nestingOptionsSeparator;
        if (key.indexOf(sep) < 0) return key;
        var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
        var optionsString = "{".concat(c[1]);
        key = c[0];
        optionsString = this.interpolate(optionsString, clonedOptions);
        optionsString = optionsString.replace(/'/g, '"');

        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions) clonedOptions = _objectSpread$3({}, inheritedOptions, clonedOptions);
        } catch (e) {
          this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
          return "".concat(key).concat(sep).concat(optionsString);
        }

        delete clonedOptions.defaultValue;
        return key;
      }

      while (match = this.nestingRegexp.exec(str)) {
        var formatters = [];
        var doReduce = false;

        if (match[0].includes(this.formatSeparator) && !/{.*}/.test(match[1])) {
          var r = match[1].split(this.formatSeparator).map(function (elem) {
            return elem.trim();
          });
          match[1] = r.shift();
          formatters = r;
          doReduce = true;
        }

        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
        if (value && match[0] === str && typeof value !== 'string') return value;
        if (typeof value !== 'string') value = makeString(value);

        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = '';
        }

        if (doReduce) {
          value = formatters.reduce(function (v, f) {
            return _this2.format(v, f, options.lng, options);
          }, value.trim());
        }

        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }

      return str;
    }
  }]);

  return Interpolator;
}();

function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}

var Connector = function (_EventEmitter) {
  _inherits$1(Connector, _EventEmitter);

  function Connector(backend, store, services) {
    var _this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck$2(this, Connector);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Connector).call(this));

    if (isIE10) {
      EventEmitter.call(_assertThisInitialized$1(_this));
    }

    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create('backendConnector');
    _this.state = {};
    _this.queue = [];

    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }

    return _this;
  }

  _createClass$2(Connector, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;

      var toLoad = [];
      var pending = [];
      var toLoadLanguages = [];
      var toLoadNamespaces = [];
      languages.forEach(function (lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function (ns) {
          var name = "".concat(lng, "|").concat(ns);

          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2;
          } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
            if (pending.indexOf(name) < 0) pending.push(name);
          } else {
            _this2.state[name] = 1;
            hasAllNamespaces = false;
            if (pending.indexOf(name) < 0) pending.push(name);
            if (toLoad.indexOf(name) < 0) toLoad.push(name);
            if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
          }
        });
        if (!hasAllNamespaces) toLoadLanguages.push(lng);
      });

      if (toLoad.length || pending.length) {
        this.queue.push({
          pending: pending,
          loaded: {},
          errors: [],
          callback: callback
        });
      }

      return {
        toLoad: toLoad,
        pending: pending,
        toLoadLanguages: toLoadLanguages,
        toLoadNamespaces: toLoadNamespaces
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      if (err) this.emit('failedLoading', lng, ns, err);

      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      }

      this.state[name] = err ? -1 : 2;
      var loaded = {};
      this.queue.forEach(function (q) {
        pushPath(q.loaded, [lng], ns);
        remove(q.pending, name);
        if (err) q.errors.push(err);

        if (q.pending.length === 0 && !q.done) {
          Object.keys(q.loaded).forEach(function (l) {
            if (!loaded[l]) loaded[l] = [];

            if (q.loaded[l].length) {
              q.loaded[l].forEach(function (ns) {
                if (loaded[l].indexOf(ns) < 0) loaded[l].push(ns);
              });
            }
          });
          q.done = true;

          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      });
      this.emit('loaded', loaded);
      this.queue = this.queue.filter(function (q) {
        return !q.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;

      var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 350;
      var callback = arguments.length > 5 ? arguments[5] : undefined;
      if (!lng.length) return callback(null, {});
      return this.backend[fcName](lng, ns, function (err, data) {
        if (err && data && tried < 5) {
          setTimeout(function () {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }

        callback(err, data);
      });
    }
  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      if (!this.backend) {
        this.logger.warn('No backend was added via i18next.use. Will not load resources.');
        return callback && callback();
      }

      if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === 'string') namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);

      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length) callback();
        return null;
      }

      toLoad.toLoad.forEach(function (name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      this.read(lng, ns, 'read', undefined, undefined, function (err, data) {
        if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);

        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
        this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        return;
      }

      if (key === undefined || key === null || key === '') return;

      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace, key, fallbackValue, null, _objectSpread$3({}, options, {
          isUpdate: isUpdate
        }));
      }

      if (!languages || !languages[0]) return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);

  return Connector;
}(EventEmitter);

function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    whitelist: false,
    nonExplicitWhitelist: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: 'all',
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: 'fallback',
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: true,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      var ret = {};
      if (_typeof$1(args[1]) === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];

      if (_typeof$1(args[2]) === 'object' || _typeof$1(args[3]) === 'object') {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function (key) {
          ret[key] = options[key];
        });
      }

      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng, options) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1000,
      skipOnVariables: false
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

  if (options.whitelist) {
    if (options.whitelist && options.whitelist.indexOf('cimode') < 0) {
      options.whitelist = options.whitelist.concat(['cimode']);
    }

    options.supportedLngs = options.whitelist;
  }

  if (options.nonExplicitWhitelist) {
    options.nonExplicitSupportedLngs = options.nonExplicitWhitelist;
  }

  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }

  return options;
}

function noop() {}

var I18n = function (_EventEmitter) {
  _inherits$1(I18n, _EventEmitter);

  function I18n() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck$2(this, I18n);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(I18n).call(this));

    if (isIE10) {
      EventEmitter.call(_assertThisInitialized$1(_this));
    }

    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };

    if (callback && !_this.isInitialized && !options.isClone) {
      if (!_this.options.initImmediate) {
        _this.init(options, callback);

        return _possibleConstructorReturn$1(_this, _assertThisInitialized$1(_this));
      }

      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }

    return _this;
  }

  _createClass$2(I18n, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      if (options.whitelist && !options.supportedLngs) {
        this.logger.deprecate('whitelist', 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.');
      }

      if (options.nonExplicitWhitelist && !options.nonExplicitSupportedLngs) {
        this.logger.deprecate('whitelist', 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.');
      }

      this.options = _objectSpread$3({}, get(), this.options, transformOptions(options));
      this.format = this.options.interpolation.format;
      if (!callback) callback = noop;

      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject) return null;
        if (typeof ClassOrObject === 'function') return new ClassOrObject();
        return ClassOrObject;
      }

      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }

        var lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });
        s.interpolator = new Interpolator(this.options);
        s.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
        s.backendConnector.on('*', function (event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });

        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }

        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init) s.i18nFormat.init(this);
        }

        this.translator = new Translator(this.services, this.options);
        this.translator.on('*', function (event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function (m) {
          if (m.init) m.init(_this2);
        });
      }

      if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
      }

      if (!this.services.languageDetector && !this.options.lng) {
        this.logger.warn('init: no languageDetector is used and no lng is defined');
      }

      var storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
      storeApi.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store;

          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
      storeApiChained.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store2;

          (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);

          return _this2;
        };
      });
      var deferred = defer();

      var load = function load() {
        var finish = function finish(err, t) {
          _this2.isInitialized = true;
          if (!_this2.options.isClone) _this2.logger.log('initialized', _this2.options);

          _this2.emit('initialized', _this2.options);

          deferred.resolve(t);
          callback(err, t);
        };

        if (_this2.languages && _this2.options.compatibilityAPI !== 'v1') return finish(null, _this2.t.bind(_this2));

        _this2.changeLanguage(_this2.options.lng, finish);
      };

      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }

      return deferred;
    }
  }, {
    key: "loadResources",
    value: function loadResources(language) {
      var _this3 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var usedCallback = callback;
      var usedLng = typeof language === 'string' ? language : this.language;
      if (typeof language === 'function') usedCallback = language;

      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
        var toLoad = [];

        var append = function append(lng) {
          if (!lng) return;

          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };

        if (!usedLng) {
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function (l) {
            return append(l);
          });
        } else {
          append(usedLng);
        }

        if (this.options.preload) {
          this.options.preload.forEach(function (l) {
            return append(l);
          });
        }

        this.services.backendConnector.load(toLoad, this.options.ns, usedCallback);
      } else {
        usedCallback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs) lngs = this.languages;
      if (!ns) ns = this.options.ns;
      if (!callback) callback = noop;
      this.services.backendConnector.reload(lngs, ns, function (err) {
        deferred.resolve();
        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module) {
      if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
      if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');

      if (module.type === 'backend') {
        this.modules.backend = module;
      }

      if (module.type === 'logger' || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }

      if (module.type === 'languageDetector') {
        this.modules.languageDetector = module;
      }

      if (module.type === 'i18nFormat') {
        this.modules.i18nFormat = module;
      }

      if (module.type === 'postProcessor') {
        postProcessor.addPostProcessor(module);
      }

      if (module.type === '3rdParty') {
        this.modules.external.push(module);
      }

      return this;
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;

      this.isLanguageChangingTo = lng;
      var deferred = defer();
      this.emit('languageChanging', lng);

      var done = function done(err, l) {
        if (l) {
          _this4.language = l;
          _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);

          _this4.translator.changeLanguage(l);

          _this4.isLanguageChangingTo = undefined;

          _this4.emit('languageChanged', l);

          _this4.logger.log('languageChanged', l);
        } else {
          _this4.isLanguageChangingTo = undefined;
        }

        deferred.resolve(function () {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback) callback(err, function () {
          return _this4.t.apply(_this4, arguments);
        });
      };

      var setLng = function setLng(lngs) {
        var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);

        if (l) {
          if (!_this4.language) {
            _this4.language = l;
            _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
          }

          if (!_this4.translator.language) _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
        }

        _this4.loadResources(l, function (err) {
          done(err, l);
        });
      };

      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }

      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns) {
      var _this5 = this;

      var fixedT = function fixedT(key, opts) {
        var options;

        if (_typeof$1(opts) !== 'object') {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }

          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = _objectSpread$3({}, opts);
        }

        options.lng = options.lng || fixedT.lng;
        options.lngs = options.lngs || fixedT.lngs;
        options.ns = options.ns || fixedT.ns;
        return _this5.t(key, options);
      };

      if (typeof lng === 'string') {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }

      fixedT.ns = ns;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;

      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;

      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function hasLoadedNamespace(ns) {
      var _this6 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.isInitialized) {
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
        return false;
      }

      if (!this.languages || !this.languages.length) {
        this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
        return false;
      }

      var lng = this.languages[0];
      var fallbackLng = this.options ? this.options.fallbackLng : false;
      var lastLng = this.languages[this.languages.length - 1];
      if (lng.toLowerCase() === 'cimode') return true;

      var loadNotPending = function loadNotPending(l, n) {
        var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];

        return loadState === -1 || loadState === 2;
      };

      if (options.precheck) {
        var preResult = options.precheck(this, loadNotPending);
        if (preResult !== undefined) return preResult;
      }

      if (this.hasResourceBundle(lng, ns)) return true;
      if (!this.services.backendConnector.backend) return true;
      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
      return false;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this7 = this;

      var deferred = defer();

      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }

      if (typeof ns === 'string') ns = [ns];
      ns.forEach(function (n) {
        if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
      });
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === 'string') lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function (lng) {
        return preloaded.indexOf(lng) < 0;
      });

      if (!newLngs.length) {
        if (callback) callback();
        return Promise.resolve();
      }

      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng) lng = this.languages && this.languages.length > 0 ? this.languages[0] : this.language;
      if (!lng) return 'rtl';
      var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
    }
  }, {
    key: "createInstance",
    value: function createInstance() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      return new I18n(options, callback);
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this8 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var mergedOptions = _objectSpread$3({}, this.options, options, {
        isClone: true
      });

      var clone = new I18n(mergedOptions);
      var membersToCopy = ['store', 'services', 'language'];
      membersToCopy.forEach(function (m) {
        clone[m] = _this8[m];
      });
      clone.services = _objectSpread$3({}, this.services);
      clone.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      clone.translator = new Translator(clone.services, clone.options);
      clone.translator.on('*', function (event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options;
      clone.translator.backendConnector.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      return clone;
    }
  }]);

  return I18n;
}(EventEmitter);

var i18next = new I18n();

var header = {
	missing: "MISSING"
};
var labels = {
	missingFrom: "Missing From: ",
	missingDate: "Missing Date:",
	location: "Location:",
	birthdate: "Birthdate:",
	currentAge: "Current Age:",
	sex: "Sex:",
	height: "Height:",
	weight: "Weight:",
	eyeColor: "Eye Color:",
	hairColor: "Hair Color:",
	country: "Country:",
	companions: "Companions"
};
var information = {
	unknown: "Unknown"
};
var translationEN = {
	header: header,
	labels: labels,
	information: information
};

var header$1 = {
	missing: "DESAPARECIDO"
};
var labels$1 = {
	missingFrom: "Desapareció en: ",
	missingDate: "Desapareció el:",
	location: "Lugar:",
	birthdate: "Nacimiento:",
	currentAge: "Edad Actual:",
	sex: "Sexo:",
	height: "Altura:",
	weight: "Peso:",
	eyeColor: "Ojos:",
	hairColor: "Cabello:",
	country: "País:",
	companions: "Acompañantes"
};
var information$1 = {
	unknown: "Desconocido"
};
var translationES = {
	header: header$1,
	labels: labels$1,
	information: information$1
};

var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

// eslint-disable-next-line no-control-regex
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

var serializeCookie = function serializeCookie(name, val, options) {
  var opt = options || {};
  opt.path = opt.path || '/';
  var value = encodeURIComponent(val);
  var str = name + '=' + value;

  if (opt.maxAge > 0) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) str += '; HttpOnly';
  if (opt.secure) str += '; Secure';

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;

      case 'lax':
        str += '; SameSite=Lax';
        break;

      case 'strict':
        str += '; SameSite=Strict';
        break;

      case 'none':
        str += '; SameSite=None';
        break;

      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
};

var cookie = {
  create: function create(name, value, minutes, domain) {
    var cookieOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      path: '/',
      sameSite: 'strict'
    };

    if (minutes) {
      cookieOptions.expires = new Date();
      cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1000);
    }

    if (domain) cookieOptions.domain = domain;
    document.cookie = serializeCookie(name, encodeURIComponent(value), cookieOptions);
  },
  read: function read(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }

      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }

    return null;
  },
  remove: function remove(name) {
    this.create(name, '', -1);
  }
};
var cookie$1 = {
  name: 'cookie',
  lookup: function lookup(options) {
    var found;

    if (options.lookupCookie && typeof document !== 'undefined') {
      var c = cookie.read(options.lookupCookie);
      if (c) found = c;
    }

    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupCookie && typeof document !== 'undefined') {
      cookie.create(options.lookupCookie, lng, options.cookieMinutes, options.cookieDomain, options.cookieOptions);
    }
  }
};

var querystring = {
  name: 'querystring',
  lookup: function lookup(options) {
    var found;

    if (typeof window !== 'undefined') {
      var query = window.location.search.substring(1);
      var params = query.split('&');

      for (var i = 0; i < params.length; i++) {
        var pos = params[i].indexOf('=');

        if (pos > 0) {
          var key = params[i].substring(0, pos);

          if (key === options.lookupQuerystring) {
            found = params[i].substring(pos + 1);
          }
        }
      }
    }

    return found;
  }
};

var hasLocalStorageSupport = null;

var localStorageAvailable = function localStorageAvailable() {
  if (hasLocalStorageSupport !== null) return hasLocalStorageSupport;

  try {
    hasLocalStorageSupport = window !== 'undefined' && window.localStorage !== null;
    var testKey = 'i18next.translate.boo';
    window.localStorage.setItem(testKey, 'foo');
    window.localStorage.removeItem(testKey);
  } catch (e) {
    hasLocalStorageSupport = false;
  }

  return hasLocalStorageSupport;
};

var localStorage = {
  name: 'localStorage',
  lookup: function lookup(options) {
    var found;

    if (options.lookupLocalStorage && localStorageAvailable()) {
      var lng = window.localStorage.getItem(options.lookupLocalStorage);
      if (lng) found = lng;
    }

    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupLocalStorage && localStorageAvailable()) {
      window.localStorage.setItem(options.lookupLocalStorage, lng);
    }
  }
};

var hasSessionStorageSupport = null;

var sessionStorageAvailable = function sessionStorageAvailable() {
  if (hasSessionStorageSupport !== null) return hasSessionStorageSupport;

  try {
    hasSessionStorageSupport = window !== 'undefined' && window.sessionStorage !== null;
    var testKey = 'i18next.translate.boo';
    window.sessionStorage.setItem(testKey, 'foo');
    window.sessionStorage.removeItem(testKey);
  } catch (e) {
    hasSessionStorageSupport = false;
  }

  return hasSessionStorageSupport;
};

var sessionStorage = {
  name: 'sessionStorage',
  lookup: function lookup(options) {
    var found;

    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      var lng = window.sessionStorage.getItem(options.lookupSessionStorage);
      if (lng) found = lng;
    }

    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupSessionStorage && sessionStorageAvailable()) {
      window.sessionStorage.setItem(options.lookupSessionStorage, lng);
    }
  }
};

var navigator$1 = {
  name: 'navigator',
  lookup: function lookup(options) {
    var found = [];

    if (typeof navigator !== 'undefined') {
      if (navigator.languages) {
        // chrome only; not an array, so can't use .push.apply instead of iterating
        for (var i = 0; i < navigator.languages.length; i++) {
          found.push(navigator.languages[i]);
        }
      }

      if (navigator.userLanguage) {
        found.push(navigator.userLanguage);
      }

      if (navigator.language) {
        found.push(navigator.language);
      }
    }

    return found.length > 0 ? found : undefined;
  }
};

var htmlTag = {
  name: 'htmlTag',
  lookup: function lookup(options) {
    var found;
    var htmlTag = options.htmlTag || (typeof document !== 'undefined' ? document.documentElement : null);

    if (htmlTag && typeof htmlTag.getAttribute === 'function') {
      found = htmlTag.getAttribute('lang');
    }

    return found;
  }
};

var path = {
  name: 'path',
  lookup: function lookup(options) {
    var found;

    if (typeof window !== 'undefined') {
      var language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);

      if (language instanceof Array) {
        if (typeof options.lookupFromPathIndex === 'number') {
          if (typeof language[options.lookupFromPathIndex] !== 'string') {
            return undefined;
          }

          found = language[options.lookupFromPathIndex].replace('/', '');
        } else {
          found = language[0].replace('/', '');
        }
      }
    }

    return found;
  }
};

var subdomain = {
  name: 'subdomain',
  lookup: function lookup(options) {
    var found;

    if (typeof window !== 'undefined') {
      var language = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);

      if (language instanceof Array) {
        if (typeof options.lookupFromSubdomainIndex === 'number') {
          found = language[options.lookupFromSubdomainIndex].replace('http://', '').replace('https://', '').replace('.', '');
        } else {
          found = language[0].replace('http://', '').replace('https://', '').replace('.', '');
        }
      }
    }

    return found;
  }
};

function getDefaults$1() {
  return {
    order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    // cache user language
    caches: ['localStorage'],
    excludeCacheFor: ['cimode'] //cookieMinutes: 10,
    //cookieDomain: 'myDomain'

  };
}

var Browser =
/*#__PURE__*/
function () {
  function Browser(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$2(this, Browser);

    this.type = 'languageDetector';
    this.detectors = {};
    this.init(services, options);
  }

  _createClass$2(Browser, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i18nOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.services = services;
      this.options = defaults(options, this.options || {}, getDefaults$1()); // backwards compatibility

      if (this.options.lookupFromUrlIndex) this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
      this.i18nOptions = i18nOptions;
      this.addDetector(cookie$1);
      this.addDetector(querystring);
      this.addDetector(localStorage);
      this.addDetector(sessionStorage);
      this.addDetector(navigator$1);
      this.addDetector(htmlTag);
      this.addDetector(path);
      this.addDetector(subdomain);
    }
  }, {
    key: "addDetector",
    value: function addDetector(detector) {
      this.detectors[detector.name] = detector;
    }
  }, {
    key: "detect",
    value: function detect(detectionOrder) {
      var _this = this;

      if (!detectionOrder) detectionOrder = this.options.order;
      var detected = [];
      detectionOrder.forEach(function (detectorName) {
        if (_this.detectors[detectorName]) {
          var lookup = _this.detectors[detectorName].lookup(_this.options);

          if (lookup && typeof lookup === 'string') lookup = [lookup];
          if (lookup) detected = detected.concat(lookup);
        }
      });
      if (this.services.languageUtils.getBestMatchFromCodes) return detected; // new i18next v19.5.0

      return detected.length > 0 ? detected[0] : null; // a little backward compatibility
    }
  }, {
    key: "cacheUserLanguage",
    value: function cacheUserLanguage(lng, caches) {
      var _this2 = this;

      if (!caches) caches = this.options.caches;
      if (!caches) return;
      if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
      caches.forEach(function (cacheName) {
        if (_this2.detectors[cacheName]) _this2.detectors[cacheName].cacheUserLanguage(lng, _this2.options);
      });
    }
  }]);

  return Browser;
}();

Browser.type = 'languageDetector';

var resources = {
    en: { translation: translationEN },
    es: { translation: translationES },
};
i18next
    .use(Browser)
    .use(initReactI18next)
    .init({
    detection: {
        lookupCookie: "next-i18next",
    },
    resources: resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
        escapeValue: false,
    },
});

var _a;
(function (BannerType) {
    BannerType["SINGLE_CHILD_PORTRAIT"] = "SINGLE_CHILD_PORTRAIT";
    BannerType["SINGLE_CHILD_LANDSCAPE"] = "SINGLE_CHILD_LANDSCAPE";
    BannerType["MULTIPLE_CHILD_PORTRAIT"] = "MULTIPLE_CHILD_PORTRAIT";
    BannerType["MULTIPLE_CHILD_LANDSCAPE"] = "MULTIPLE_CHILD_LANDSCAPE";
})(exports.BannerType || (exports.BannerType = {}));
var Banners = (_a = {},
    _a["SINGLE_CHILD_PORTRAIT"] = SingleChildPortraitBanner,
    _a["SINGLE_CHILD_LANDSCAPE"] = SingleChildLandscapeBanner,
    _a["MULTIPLE_CHILD_PORTRAIT"] = MultipleChildPortraitBanner,
    _a["MULTIPLE_CHILD_LANDSCAPE"] = MultipleChildLandscapeBanner,
    _a);
var DataContext = React.createContext({ data: {} });
var MissingBanners = function (_a) {
    var data = _a.data, type = _a.type, printTrigger = _a.printTrigger, language = _a.language;
    var componentRef = React.useRef(null);
    var renderBanner = React.useMemo(function () {
        var BannerToBeRendered = Banners[type];
        return React__default['default'].createElement(BannerToBeRendered, null);
    }, [type]);
    var orientation = type === exports.BannerType.SINGLE_CHILD_LANDSCAPE ||
        type === exports.BannerType.MULTIPLE_CHILD_LANDSCAPE
        ? "landscape"
        : "portrait";
    var bannerPrintStyles = "@media print {\n    @page {\n      size: " + orientation + ";\n    }\n  }\n  ";
    React.useEffect(function () {
        if (language) {
            i18next.changeLanguage(language);
        }
    }, [language]);
    return (React__default['default'].createElement(React.Suspense, { fallback: "loading" },
        React__default['default'].createElement(DataContext.Provider, { value: { data: data } },
            React__default['default'].createElement(ReactToPrint__default['default'], { trigger: printTrigger, content: function () { return componentRef.current; } }),
            React__default['default'].createElement("div", { style: { display: "none" } },
                React__default['default'].createElement("div", { ref: componentRef },
                    React__default['default'].createElement("style", null, bannerPrintStyles),
                    renderBanner)))));
};

exports.MissingBanners = MissingBanners;
