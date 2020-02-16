import React from"react";import ReactDOM from"react-dom";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var classCallCheck=_classCallCheck;function _defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}var createClass=_createClass;function unwrapExports(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var _typeof_1=createCommonjsModule(function(e){function t(o){"@babel/helpers - typeof";return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(o)}e.exports=t});function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var assertThisInitialized=_assertThisInitialized;function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof_1(t)&&"function"!=typeof t?assertThisInitialized(e):t}var possibleConstructorReturn=_possibleConstructorReturn,getPrototypeOf=createCommonjsModule(function(e){function t(o){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(o)}e.exports=t}),setPrototypeOf=createCommonjsModule(function(e){function t(o,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(o,n)}e.exports=t});function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&setPrototypeOf(e,t)}var inherits=_inherits;function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var defineProperty=_defineProperty,reactIs_production_min=createCommonjsModule(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&Symbol.for,n=o?Symbol.for("react.element"):60103,r=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,a=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,u=o?Symbol.for("react.async_mode"):60111,l=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,_=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.suspense_list"):60120,f=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,h=o?Symbol.for("react.fundamental"):60117,I=o?Symbol.for("react.responder"):60118,w=o?Symbol.for("react.scope"):60119;function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case l:case i:case s:case c:case _:return e;default:switch(e=e&&e.$$typeof){case p:case d:case y:case f:case a:return e;default:return t}}case r:return t}}}function b(e){return v(e)===l}t.typeOf=v,t.AsyncMode=u,t.ConcurrentMode=l,t.ContextConsumer=p,t.ContextProvider=a,t.Element=n,t.ForwardRef=d,t.Fragment=i,t.Lazy=y,t.Memo=f,t.Portal=r,t.Profiler=s,t.StrictMode=c,t.Suspense=_,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===l||e===s||e===c||e===_||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===f||e.$$typeof===a||e.$$typeof===p||e.$$typeof===d||e.$$typeof===h||e.$$typeof===I||e.$$typeof===w)},t.isAsyncMode=function(e){return b(e)||v(e)===u},t.isConcurrentMode=b,t.isContextConsumer=function(e){return v(e)===p},t.isContextProvider=function(e){return v(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return v(e)===d},t.isFragment=function(e){return v(e)===i},t.isLazy=function(e){return v(e)===y},t.isMemo=function(e){return v(e)===f},t.isPortal=function(e){return v(e)===r},t.isProfiler=function(e){return v(e)===s},t.isStrictMode=function(e){return v(e)===c},t.isSuspense=function(e){return v(e)===_}});unwrapExports(reactIs_production_min);var reactIs_production_min_1=reactIs_production_min.typeOf,reactIs_production_min_2=reactIs_production_min.AsyncMode,reactIs_production_min_3=reactIs_production_min.ConcurrentMode,reactIs_production_min_4=reactIs_production_min.ContextConsumer,reactIs_production_min_5=reactIs_production_min.ContextProvider,reactIs_production_min_6=reactIs_production_min.Element,reactIs_production_min_7=reactIs_production_min.ForwardRef,reactIs_production_min_8=reactIs_production_min.Fragment,reactIs_production_min_9=reactIs_production_min.Lazy,reactIs_production_min_10=reactIs_production_min.Memo,reactIs_production_min_11=reactIs_production_min.Portal,reactIs_production_min_12=reactIs_production_min.Profiler,reactIs_production_min_13=reactIs_production_min.StrictMode,reactIs_production_min_14=reactIs_production_min.Suspense,reactIs_production_min_15=reactIs_production_min.isValidElementType,reactIs_production_min_16=reactIs_production_min.isAsyncMode,reactIs_production_min_17=reactIs_production_min.isConcurrentMode,reactIs_production_min_18=reactIs_production_min.isContextConsumer,reactIs_production_min_19=reactIs_production_min.isContextProvider,reactIs_production_min_20=reactIs_production_min.isElement,reactIs_production_min_21=reactIs_production_min.isForwardRef,reactIs_production_min_22=reactIs_production_min.isFragment,reactIs_production_min_23=reactIs_production_min.isLazy,reactIs_production_min_24=reactIs_production_min.isMemo,reactIs_production_min_25=reactIs_production_min.isPortal,reactIs_production_min_26=reactIs_production_min.isProfiler,reactIs_production_min_27=reactIs_production_min.isStrictMode,reactIs_production_min_28=reactIs_production_min.isSuspense,reactIs_development=createCommonjsModule(function(e,t){});unwrapExports(reactIs_development);var reactIs_development_1=reactIs_development.typeOf,reactIs_development_2=reactIs_development.AsyncMode,reactIs_development_3=reactIs_development.ConcurrentMode,reactIs_development_4=reactIs_development.ContextConsumer,reactIs_development_5=reactIs_development.ContextProvider,reactIs_development_6=reactIs_development.Element,reactIs_development_7=reactIs_development.ForwardRef,reactIs_development_8=reactIs_development.Fragment,reactIs_development_9=reactIs_development.Lazy,reactIs_development_10=reactIs_development.Memo,reactIs_development_11=reactIs_development.Portal,reactIs_development_12=reactIs_development.Profiler,reactIs_development_13=reactIs_development.StrictMode,reactIs_development_14=reactIs_development.Suspense,reactIs_development_15=reactIs_development.isValidElementType,reactIs_development_16=reactIs_development.isAsyncMode,reactIs_development_17=reactIs_development.isConcurrentMode,reactIs_development_18=reactIs_development.isContextConsumer,reactIs_development_19=reactIs_development.isContextProvider,reactIs_development_20=reactIs_development.isElement,reactIs_development_21=reactIs_development.isForwardRef,reactIs_development_22=reactIs_development.isFragment,reactIs_development_23=reactIs_development.isLazy,reactIs_development_24=reactIs_development.isMemo,reactIs_development_25=reactIs_development.isPortal,reactIs_development_26=reactIs_development.isProfiler,reactIs_development_27=reactIs_development.isStrictMode,reactIs_development_28=reactIs_development.isSuspense,reactIs=createCommonjsModule(function(e){e.exports=reactIs_production_min}),getOwnPropertySymbols=Object.getOwnPropertySymbols,hasOwnProperty=Object.prototype.hasOwnProperty,propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function shouldUseNative(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}var objectAssign=shouldUseNative()?Object.assign:function(e,t){for(var o,n,r=toObject(e),i=1;i<arguments.length;i++){for(var c in o=Object(arguments[i]))hasOwnProperty.call(o,c)&&(r[c]=o[c]);if(getOwnPropertySymbols){n=getOwnPropertySymbols(o);for(var s=0;s<n.length;s++)propIsEnumerable.call(o,n[s])&&(r[n[s]]=o[n[s]])}}return r},ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ReactPropTypesSecret_1=ReactPropTypesSecret,has$1=Function.call.bind(Object.prototype.hasOwnProperty);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction;var factoryWithThrowingShims=function(){function e(e,t,o,n,r,i){if(i!==ReactPropTypesSecret_1){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return o.PropTypes=o,o},propTypes=createCommonjsModule(function(e){e.exports=factoryWithThrowingShims()}),NewWindow=function(e){function t(e){var o;return classCallCheck(this,t),(o=possibleConstructorReturn(this,getPrototypeOf(t).call(this,e))).container=document.createElement("div"),o.window=null,o.windowCheckerInterval=null,o.released=!1,o.state={mounted:!1},o}return inherits(t,e),createClass(t,[{key:"render",value:function(){return this.state.mounted?ReactDOM.createPortal(this.props.children,this.container):null}},{key:"componentDidMount",value:function(){this.openChild(),this.setState({mounted:!0})}},{key:"openChild",value:function(){var e=this,t=this.props,o=t.url,n=t.title,r=t.name,i=t.features,c=t.onBlock,s=t.onOpen,a=t.center;if("string"!=typeof a||void 0!==i.width&&void 0!==i.height){if("parent"===a)i.left=window.top.outerWidth/2+window.top.screenX-i.width/2,i.top=window.top.outerHeight/2+window.top.screenY-i.height/2;else if("screen"===a){var p=void 0!==window.screenLeft?window.screenLeft:window.screen.left,u=void 0!==window.screenTop?window.screenTop:window.screen.top,l=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:window.screen.width,d=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:window.screen.height;i.left=l/2-i.width/2+p,i.top=d/2-i.height/2+u}}else console.warn("width and height window features must be present when a center prop is provided");this.window=window.open(o,r,toWindowFeatures(i)),this.windowCheckerInterval=setInterval(function(){e.window&&!e.window.closed||e.release()},50),this.window?(this.window.document.title=n,this.window.document.body.appendChild(this.container),this.props.copyStyles&&setTimeout(function(){return copyStyles(document,e.window.document)},0),"function"==typeof s&&s(this.window),this.window.addEventListener("beforeunload",function(){return e.release()})):"function"==typeof c?c(null):console.warn("A new window could not be opened. Maybe it was blocked.")}},{key:"componentWillUnmount",value:function(){this.window&&this.window.close()}},{key:"release",value:function(){if(!this.released){this.released=!0,clearInterval(this.windowCheckerInterval);var e=this.props.onUnload;"function"==typeof e&&e(null)}}}]),t}(React.PureComponent);function copyStyles(e,t){Array.from(e.styleSheets).forEach(function(o){var n;try{n=o.cssRules}catch(e){console.error(e)}var r=n&&Object.values(n).some(function(e){return e instanceof CSSFontFaceRule})&&o.href;if(n&&!r){var i=e.createElement("style");Array.from(o.cssRules).forEach(function(t){var o=t.cssText,n=t.type,r=o;[3,5].includes(n)&&(r=o.split("url(").map(function(e){return"/"===e[1]?"".concat(e.slice(0,1)).concat(window.location.origin).concat(e.slice(1)):e}).join("url(")),i.appendChild(e.createTextNode(r))}),t.head.appendChild(i)}else if(o.href){var c=e.createElement("link");c.rel="stylesheet",c.href=o.href,t.head.appendChild(c)}})}function toWindowFeatures(e){return Object.keys(e).reduce(function(t,o){var n=e[o];return"boolean"==typeof n?t.push("".concat(o,"=").concat(n?"yes":"no")):t.push("".concat(o,"=").concat(n)),t},[]).join(",")}defineProperty(NewWindow,"defaultProps",{url:"",name:"",title:"",features:{width:"600px",height:"640px"},onBlock:null,onOpen:null,onUnload:null,center:"parent",copyStyles:!0}),NewWindow.propTypes={children:propTypes.node,url:propTypes.string,name:propTypes.string,title:propTypes.string,features:propTypes.object,onUnload:propTypes.func,onBlock:propTypes.func,onOpen:propTypes.func,center:propTypes.oneOf(["parent","screen"]),copyStyles:propTypes.bool};export default NewWindow;
//# sourceMappingURL=react-new-window.js.map
