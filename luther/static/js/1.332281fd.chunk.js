webpackJsonp([1],{11:function(e,t,n){(function(e,r){function o(e,t){this._id=e,this._clearFn=t}var i=n(45).nextTick,a=Function.prototype.apply,u=Array.prototype.slice,c={},l=0;t.setTimeout=function(){return new o(a.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new o(a.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},t.setImmediate="function"==typeof e?e:function(e){var n=l++,r=!(arguments.length<2)&&u.call(arguments,1);return c[n]=!0,i(function(){c[n]&&(r?e.apply(null,r):e.call(null),t.clearImmediate(n))}),n},t.clearImmediate="function"==typeof r?r:function(e){delete c[e]}}).call(t,n(11).setImmediate,n(11).clearImmediate)},15:function(e,t){e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},20:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),i=r(o),a=n(26),u=function(e){var t=e.color;return i.default.createElement("div",{className:"absolute top-1-4 left-1"},i.default.createElement(a.Link,{to:"/",className:t+" pv1 ph2 w-100 br2 white no-underline"},"Home"))};t.default=u},31:function(e,t,n){"use strict";var r=n(46);e.exports=function(e,t,n){e&&r(function(){e.apply(n||null,t||[])})}},32:function(e,t,n){"use strict";var r=n(15),o=n(31);e.exports=function(e,t){var n=t||{},i={};return void 0===e&&(e={}),e.on=function(t,n){return i[t]?i[t].push(n):i[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var r=arguments.length;if(1===r)delete i[t];else if(0===r)i={};else{var o=i[t];if(!o)return e;o.splice(o.indexOf(n),1)}return e},e.emit=function(){var t=r(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var a=(i[t]||[]).slice(0);return function(){var i=r(arguments),u=this||e;if("error"===t&&n.throws!==!1&&!a.length)throw 1===i.length?i[0]:i;return a.forEach(function(r){n.async?o(r,i,u):r.apply(u,i),r._once&&e.off(t,r)}),e}},e}},33:function(e,t,n){(function(t){"use strict";function r(e,t,n,r){return e.addEventListener(t,n,r)}function o(e,t,n){return e.attachEvent("on"+t,l(e,t,n))}function i(e,t,n,r){return e.removeEventListener(t,n,r)}function a(e,t,n){var r=s(e,t,n);if(r)return e.detachEvent("on"+t,r)}function u(e,t,n){function r(){var e;return m.createEvent?(e=m.createEvent("Event"),e.initEvent(t,!0,!0)):m.createEventObject&&(e=m.createEventObject()),e}function o(){return new f(t,{detail:n})}var i=p.indexOf(t)===-1?o():r();e.dispatchEvent?e.dispatchEvent(i):e.fireEvent("on"+t,i)}function c(e,n,r){return function(n){var o=n||t.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,r.call(e,o)}}function l(e,t,n){var r=s(e,t,n)||c(e,t,n);return g.push({wrapper:r,element:e,type:t,fn:n}),r}function s(e,t,n){var r=d(e,t,n);if(r){var o=g[r].wrapper;return g.splice(r,1),o}}function d(e,t,n){var r,o;for(r=0;r<g.length;r++)if(o=g[r],o.element===e&&o.type===t&&o.fn===n)return r}var f=n(35),p=n(34),m=t.document,v=r,h=i,g=[];t.addEventListener||(v=o,h=a),e.exports={add:v,remove:h,fabricate:u}}).call(t,function(){return this}())},34:function(e,t){(function(t){"use strict";var n=[],r="",o=/^on/;for(r in t)o.test(r)&&n.push(r.slice(2));e.exports=n}).call(t,function(){return this}())},35:function(e,t){(function(t){function n(){try{var e=new r("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(t){}return!1}var r=t.CustomEvent;e.exports=n()?r:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(t,function(){return this}())},36:function(e,t){"use strict";function n(e){var t=i[e];return t?t.lastIndex=0:i[e]=t=new RegExp(a+e+u,"g"),t}function r(e,t){var r=e.className;r.length?n(t).test(r)||(e.className+=" "+t):e.className=t}function o(e,t){e.className=e.className.replace(n(t)," ").trim()}var i={},a="(?:^|\\s)",u="(?:\\s|$)";e.exports={add:r,rm:o}},37:function(e,t,n){(function(t){"use strict";function r(e,t){function n(e){return se.containers.indexOf(e)!==-1||le.isContainer(e)}function r(e){var t=e?"remove":"add";o(N,t,"mousedown",C),o(N,t,"mouseup",L)}function u(e){var t=e?"remove":"add";o(N,t,"mousemove",_)}function v(e){var t=e?"remove":"add";y[t](N,"selectstart",S),y[t](N,"click",S)}function g(){r(!0),L({})}function S(e){ue&&e.preventDefault()}function C(e){te=e.clientX,ne=e.clientY;var t=1!==i(e)||e.metaKey||e.ctrlKey;if(!t){var n=e.target,r=x(n);r&&(ue=r,u(),"mousedown"===e.type&&(m(n)?n.focus():e.preventDefault()))}}function _(e){if(ue){if(0===i(e))return void L({});if(void 0===e.clientX||e.clientX!==te||void 0===e.clientY||e.clientY!==ne){if(le.ignoreInputTextSelection){var t=w("clientX",e),n=w("clientY",e),r=T.elementFromPoint(t,n);if(m(r))return}var o=ue;u(!0),v(),B(),k(o);var c=a(Q);Z=w("pageX",e)-c.left,ee=w("pageY",e)-c.top,E.add(ie||Q,"gu-transit"),F(),D(e)}}}function x(e){if(!(se.dragging&&$||n(e))){for(var t=e;p(e)&&n(p(e))===!1;){if(le.invalid(e,t))return;if(e=p(e),!e)return}var r=p(e);if(r&&!le.invalid(e,t)){var o=le.moves(e,r,t,h(e));if(o)return{item:e,source:r}}}}function O(e){return!!x(e)}function I(e){var t=x(e);t&&k(t)}function k(e){V(e.item,e.source)&&(ie=e.item.cloneNode(!0),se.emit("cloned",ie,e.item,"copy")),q=e.source,Q=e.item,re=oe=h(e.item),se.dragging=!0,se.emit("drag",Q,q)}function z(){return!1}function B(){if(se.dragging){var e=ie||Q;P(e,p(e))}}function M(){ue=!1,u(!0),v(!0)}function L(e){if(M(),se.dragging){var t=ie||Q,n=w("clientX",e),r=w("clientY",e),o=c($,n,r),i=Y(o,n,r);i&&(ie&&le.copySortSource||!ie||i!==q)?P(t,i):le.removeOnSpill?j():X()}}function P(e,t){var n=p(e);ie&&le.copySortSource&&t===q&&n.removeChild(Q),G(t)?se.emit("cancel",e,q,q):se.emit("drop",e,t,q,oe),A()}function j(){if(se.dragging){var e=ie||Q,t=p(e);t&&t.removeChild(e),se.emit(ie?"cancel":"remove",e,t,q),A()}}function X(e){if(se.dragging){var t=arguments.length>0?e:le.revertOnSpill,n=ie||Q,r=p(n),o=G(r);o===!1&&t&&(ie?r&&r.removeChild(ie):q.insertBefore(n,re)),o||t?se.emit("cancel",n,q,q):se.emit("drop",n,r,q,oe),A()}}function A(){var e=ie||Q;M(),J(),e&&E.rm(e,"gu-transit"),ae&&clearTimeout(ae),se.dragging=!1,ce&&se.emit("out",e,ce,q),se.emit("dragend",e),q=Q=ie=re=oe=ae=ce=null}function G(e,t){var n;return n=void 0!==t?t:$?oe:h(ie||Q),e===q&&n===re}function Y(e,t,r){function o(){var o=n(i);if(o===!1)return!1;var a=K(i,e),u=U(i,a,t,r),c=G(i,u);return!!c||le.accepts(Q,i,q,u)}for(var i=e;i&&!o();)i=p(i);return i}function D(e){function t(e){se.emit(e,l,ce,q)}function n(){f&&t("over")}function r(){ce&&t("out")}if($){e.preventDefault();var o=w("clientX",e),i=w("clientY",e),a=o-Z,u=i-ee;$.style.left=a+"px",$.style.top=u+"px";var l=ie||Q,s=c($,o,i),d=Y(s,o,i),f=null!==d&&d!==ce;(f||null===d)&&(r(),ce=d,n());var m=p(l);if(d===q&&ie&&!le.copySortSource)return void(m&&m.removeChild(l));var v,g=K(d,s);if(null!==g)v=U(d,g,o,i);else{if(le.revertOnSpill!==!0||ie)return void(ie&&m&&m.removeChild(l));v=re,d=q}(null===v&&f||v!==l&&v!==h(l))&&(oe=v,d.insertBefore(l,v),se.emit("shadow",l,d,q))}}function R(e){E.rm(e,"gu-hide")}function H(e){se.dragging&&E.add(e,"gu-hide")}function F(){if(!$){var e=Q.getBoundingClientRect();$=Q.cloneNode(!0),$.style.width=d(e)+"px",$.style.height=f(e)+"px",E.rm($,"gu-transit"),E.add($,"gu-mirror"),le.mirrorContainer.appendChild($),o(N,"add","mousemove",D),E.add(le.mirrorContainer,"gu-unselectable"),se.emit("cloned",$,Q,"mirror")}}function J(){$&&(E.rm(le.mirrorContainer,"gu-unselectable"),o(N,"remove","mousemove",D),p($).removeChild($),$=null)}function K(e,t){for(var n=t;n!==e&&p(n)!==e;)n=p(n);return n===N?null:n}function U(e,t,n,r){function o(){var t,o,i,a=e.children.length;for(t=0;t<a;t++){if(o=e.children[t],i=o.getBoundingClientRect(),u&&i.left+i.width/2>n)return o;if(!u&&i.top+i.height/2>r)return o}return null}function i(){var e=t.getBoundingClientRect();return a(u?n>e.left+d(e)/2:r>e.top+f(e)/2)}function a(e){return e?h(t):t}var u="horizontal"===le.direction,c=t!==e?i():o();return c}function V(e,t){return"boolean"==typeof le.copy?le.copy:le.copy(e,t)}var W=arguments.length;1===W&&Array.isArray(e)===!1&&(t=e,e=[]);var $,q,Q,Z,ee,te,ne,re,oe,ie,ae,ue,ce=null,le=t||{};void 0===le.moves&&(le.moves=s),void 0===le.accepts&&(le.accepts=s),void 0===le.invalid&&(le.invalid=z),void 0===le.containers&&(le.containers=e||[]),void 0===le.isContainer&&(le.isContainer=l),void 0===le.copy&&(le.copy=!1),void 0===le.copySortSource&&(le.copySortSource=!1),void 0===le.revertOnSpill&&(le.revertOnSpill=!1),void 0===le.removeOnSpill&&(le.removeOnSpill=!1),void 0===le.direction&&(le.direction="vertical"),void 0===le.ignoreInputTextSelection&&(le.ignoreInputTextSelection=!0),void 0===le.mirrorContainer&&(le.mirrorContainer=T.body);var se=b({containers:le.containers,start:I,end:B,cancel:X,remove:j,destroy:g,canMove:O,dragging:!1});return le.removeOnSpill===!0&&se.on("over",R).on("out",H),r(),se}function o(e,n,r,o){var i={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},a={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},u={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};t.navigator.pointerEnabled?y[n](e,a[r],o):t.navigator.msPointerEnabled?y[n](e,u[r],o):(y[n](e,i[r],o),y[n](e,r,o))}function i(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function a(e){var t=e.getBoundingClientRect();return{left:t.left+u("scrollLeft","pageXOffset"),top:t.top+u("scrollTop","pageYOffset")}}function u(e,n){return"undefined"!=typeof t[n]?t[n]:N.clientHeight?N[e]:T.body[e]}function c(e,t,n){var r,o=e||{},i=o.className;return o.className+=" gu-hide",r=T.elementFromPoint(t,n),o.className=i,r}function l(){return!1}function s(){return!0}function d(e){return e.width||e.right-e.left}function f(e){return e.height||e.bottom-e.top}function p(e){return e.parentNode===T?null:e.parentNode}function m(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||v(e)}function v(e){return!!e&&("false"!==e.contentEditable&&("true"===e.contentEditable||v(p(e))))}function h(e){function t(){var t=e;do t=t.nextSibling;while(t&&1!==t.nodeType);return t}return e.nextElementSibling||t()}function g(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}function w(e,t){var n=g(t),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in n)&&r[e]in n&&(e=r[e]),n[e]}var b=n(32),y=n(33),E=n(36),T=document,N=T.documentElement;e.exports=r}).call(t,function(){return this}())},43:function(e,t,n){"use strict";function r(){function e(e){t(e),i(e.getElementsByTagName("*")).forEach(t)}function t(e){e.removeAttribute("data-reactid")}return o.apply(this,i(arguments)).on("cloned",e)}var o=n(37),i=n(15);e.exports=r},46:function(e,t,n){(function(t){var n,r="function"==typeof t;n=r?function(e){t(e)}:function(e){setTimeout(e,0)},e.exports=n}).call(t,n(11).setImmediate)},234:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),l=r(c),s=n(20),d=r(s),f=n(43),p=r(f),m=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={words:{catechisms:{word:"catechisms"},deserve:{word:"deserve"},works:{word:"works"},complete:{word:"complete"},save:{word:"save"},declare:{word:"declare"},hymns:{word:"hymns"},worship:{word:"worship"},thanks:{word:"thanks"},translated:{word:"translated"},rose:{word:"rose"},punishment:{word:"punishment"},fearing:{word:"fearing"},perfect:{word:"perfect"}}},n}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("dropzone"),t=Array.prototype.slice.call(e);t.push(document.getElementById("words")),(0,p.default)({containers:t}).on("drop",function(e,t,n){if(e.innerHTML===t.id){var r=document.createElement("b");r.innerHTML=t.id,t.parentNode.insertBefore(r,t.nextSibling),t.parentNode.removeChild(t)}else n.appendChild(e);if(n.getElementsByTagName("li").length<=0){var o=document.createElement("h2");o.setAttribute("class","bg-highland white pv3 ph4 dib br2"),o.innerHTML="Great job!",document.getElementById("success").appendChild(o)}})}},{key:"render",value:function(){var e=this.state.words;return l.default.createElement("div",null,l.default.createElement("h2",null,"Luther & Lutherans"),l.default.createElement("p",null,"Drag words from the word bank on the bottom to complete the paragraph."),l.default.createElement("div",{id:"success"}),l.default.createElement("div",{className:"pa2 f6 tl"},l.default.createElement("p",{className:"fl w-100 lh-double b--highland b--solid bw1 br2 pa3 ma1 bg-white"},"The church of Martin Luther's day taught that good (1) ",l.default.createElement("span",{id:"works",className:"dropzone"})," were necessary to gain God's favor and salvation. Martin knew he was sinful and grew up (2) ",l.default.createElement("span",{id:"fearing",className:"dropzone"})," God. Only as he studied God's Word did he learn that Jesus did the (3) ",l.default.createElement("span",{id:"complete",className:"dropzone"})," job of saving people from their sins and from (4) ",l.default.createElement("span",{id:"punishment",className:"dropzone"})," in hell. Jesus was (5) ",l.default.createElement("span",{id:"perfect",className:"dropzone"})," in our place, died on the cross to suffer the punishment we (6) ",l.default.createElement("span",{id:"deserve",className:"dropzone"}),", and (7) ",l.default.createElement("span",{id:"rose",className:"dropzone"})," from the dead. Good works do not (8) ",l.default.createElement("span",{id:"save",className:"dropzone"}),". They are done to show (9) ",l.default.createElement("span",{id:"thanks",className:"dropzone"})," to God for saving us.",l.default.createElement("br",null),"So the others would learn God's saving truths, Martin Luther (10) ",l.default.createElement("span",{id:"translated",className:"dropzone"})," the Bible into German. He wrote (11) ",l.default.createElement("span",{id:"catechisms",className:"dropzone"})," to help adults teach and children learn God's truths in simple straight forward ways. To help people be active participants in (12) ",l.default.createElement("span",{id:"worship",className:"dropzone"}),", Luther wrote (13) ",l.default.createElement("span",{id:"hymns",className:"dropzone"})," and found and adapted others that could be used to praise God and to (14) ",l.default.createElement("span",{id:"declare",className:"dropzone"})," his truths to others."),l.default.createElement("ul",{id:"words",className:"list tc pa0"},Object.keys(e).map(function(t,n){return l.default.createElement("li",{className:"b--highland b--solid bw1 br2 pa2 ma1 bg-white pointer"+(e[t].active?" dn":" dib"),key:n},e[t].word)}))),l.default.createElement(d.default,{color:"bg-highland"}))}}]),t}(c.Component);e.exports=m}});
//# sourceMappingURL=1.332281fd.chunk.js.map