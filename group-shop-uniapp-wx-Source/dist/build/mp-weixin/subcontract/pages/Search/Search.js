(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subcontract/pages/Search/Search"],{"0656":function(t,e,n){"use strict";n.r(e);var r=n("a6c5"),o=n("8a08");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("689d");var c,u=n("f0c5"),i=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,"56f3ccc6",null,!1,r["a"],c);e["default"]=i.exports},"415c":function(t,e,n){"use strict";(function(t){n("6cdc");var e=r(n("0656"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},5069:function(t,e,n){},"689d":function(t,e,n){"use strict";var r=n("5069"),o=n.n(r);o.a},"8a08":function(t,e,n){"use strict";n.r(e);var r=n("dfff"),o=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a},a6c5:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},dfff:function(t,e,n){"use strict";(function(t){function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("9ab4"),a=n("60a3");function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function f(t,e){return f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},f(t,e)}function l(t){var e=h();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}var v=function(e){s(r,e);var n=l(r);function r(){var t;return c(this,r),t=n.apply(this,arguments),t.historyWords=[],t.hotWord=[],t.queryName="",t.chanel=2,t.keyWord="",t}return i(r,[{key:"onLoad",value:function(e){var n=t.getStorageSync("historyWords")?JSON.parse(t.getStorageSync("historyWords")):[],r=[],o="",a=Number(e.chanel);if(4===a){var c=JSON.parse(e.formData||"{}");r=c.hotWord||[],o=c.keyWord||""}this.setData({historyWords:n,hotWord:r.filter((function(t){return""!==t})),keyWord:o,chanel:a})}},{key:"onChangePop",value:function(t){this.setData({queryName:t.detail})}},{key:"onClick",value:function(){this.addStoreage(),this.queryName=""===this.queryName?this.keyWord:this.queryName,t.navigateTo({url:"/subcontract/pages/spellPage/second-catgoods/second-catgoods?chanel=".concat(this.chanel,"&queryName=").concat(this.queryName)})}},{key:"choose",value:function(t){var e=this,n=t.currentTarget.dataset.variable;this.setData({queryName:n},(function(){e.onClick()}))}},{key:"closeChoose",value:function(){var e=t.getStorageSync("historyWords")?JSON.parse(t.getStorageSync("historyWords")):[];e.length>0&&(e=[],t.removeStorageSync("historyWords"),this.setData({historyWords:e}),t.showToast({title:"删除成功",icon:"none",duration:800}))}},{key:"addStoreage",value:function(){var e=this.queryName,n=t.getStorageSync("historyWords")?JSON.parse(t.getStorageSync("historyWords")):[];-1!==n.findIndex((function(t){return t===e}))&&n.splice(n.findIndex((function(t){return t===e})),1),!n.includes(e)&&e&&n.unshift(e),n.length>6&&n.pop(),this.setData({historyWords:n}),t.setStorageSync("historyWords",JSON.stringify(n))}}]),r}(a.Vue);v=(0,o.__decorate)([(0,a.Component)({})],v);var b=v;e.default=b}).call(this,n("543d")["default"])}},[["415c","common/runtime","common/vendor"]]]);