webpackJsonp([2],{11:function(e,t,n){(function(e,r){function o(e,t){this._id=e,this._clearFn=t}var i=n(45).nextTick,u=Function.prototype.apply,a=Array.prototype.slice,c={},l=0;t.setTimeout=function(){return new o(u.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new o(u.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},t.setImmediate="function"==typeof e?e:function(e){var n=l++,r=!(arguments.length<2)&&a.call(arguments,1);return c[n]=!0,i(function(){c[n]&&(r?e.apply(null,r):e.call(null),t.clearImmediate(n))}),n},t.clearImmediate="function"==typeof r?r:function(e){delete c[e]}}).call(t,n(11).setImmediate,n(11).clearImmediate)},15:function(e,t){e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},20:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),i=r(o),u=n(26),a=function(e){var t=e.color;return i.default.createElement("div",{className:"absolute top-1-4 left-1"},i.default.createElement(u.Link,{to:"/",className:t+" pv1 ph2 w-100 br2 white no-underline"},"Home"))};t.default=a},31:function(e,t,n){"use strict";var r=n(46);e.exports=function(e,t,n){e&&r(function(){e.apply(n||null,t||[])})}},32:function(e,t,n){"use strict";var r=n(15),o=n(31);e.exports=function(e,t){var n=t||{},i={};return void 0===e&&(e={}),e.on=function(t,n){return i[t]?i[t].push(n):i[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var r=arguments.length;if(1===r)delete i[t];else if(0===r)i={};else{var o=i[t];if(!o)return e;o.splice(o.indexOf(n),1)}return e},e.emit=function(){var t=r(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var u=(i[t]||[]).slice(0);return function(){var i=r(arguments),a=this||e;if("error"===t&&n.throws!==!1&&!u.length)throw 1===i.length?i[0]:i;return u.forEach(function(r){n.async?o(r,i,a):r.apply(a,i),r._once&&e.off(t,r)}),e}},e}},33:function(e,t,n){(function(t){"use strict";function r(e,t,n,r){return e.addEventListener(t,n,r)}function o(e,t,n){return e.attachEvent("on"+t,l(e,t,n))}function i(e,t,n,r){return e.removeEventListener(t,n,r)}function u(e,t,n){var r=f(e,t,n);if(r)return e.detachEvent("on"+t,r)}function a(e,t,n){function r(){var e;return p.createEvent?(e=p.createEvent("Event"),e.initEvent(t,!0,!0)):p.createEventObject&&(e=p.createEventObject()),e}function o(){return new d(t,{detail:n})}var i=v.indexOf(t)===-1?o():r();e.dispatchEvent?e.dispatchEvent(i):e.fireEvent("on"+t,i)}function c(e,n,r){return function(n){var o=n||t.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,r.call(e,o)}}function l(e,t,n){var r=f(e,t,n)||c(e,t,n);return g.push({wrapper:r,element:e,type:t,fn:n}),r}function f(e,t,n){var r=s(e,t,n);if(r){var o=g[r].wrapper;return g.splice(r,1),o}}function s(e,t,n){var r,o;for(r=0;r<g.length;r++)if(o=g[r],o.element===e&&o.type===t&&o.fn===n)return r}var d=n(35),v=n(34),p=t.document,m=r,h=i,g=[];t.addEventListener||(m=o,h=u),e.exports={add:m,remove:h,fabricate:a}}).call(t,function(){return this}())},34:function(e,t){(function(t){"use strict";var n=[],r="",o=/^on/;for(r in t)o.test(r)&&n.push(r.slice(2));e.exports=n}).call(t,function(){return this}())},35:function(e,t){(function(t){function n(){try{var e=new r("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(t){}return!1}var r=t.CustomEvent;e.exports=n()?r:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(t,function(){return this}())},36:function(e,t){"use strict";function n(e){var t=i[e];return t?t.lastIndex=0:i[e]=t=new RegExp(u+e+a,"g"),t}function r(e,t){var r=e.className;r.length?n(t).test(r)||(e.className+=" "+t):e.className=t}function o(e,t){e.className=e.className.replace(n(t)," ").trim()}var i={},u="(?:^|\\s)",a="(?:\\s|$)";e.exports={add:r,rm:o}},37:function(e,t,n){(function(t){"use strict";function r(e,t){function n(e){return fe.containers.indexOf(e)!==-1||le.isContainer(e)}function r(e){var t=e?"remove":"add";o(x,t,"mousedown",S),o(x,t,"mouseup",M)}function a(e){var t=e?"remove":"add";o(x,t,"mousemove",C)}function m(e){var t=e?"remove":"add";w[t](x,"selectstart",N),w[t](x,"click",N)}function g(){r(!0),M({})}function N(e){ae&&e.preventDefault()}function S(e){te=e.clientX,ne=e.clientY;var t=1!==i(e)||e.metaKey||e.ctrlKey;if(!t){var n=e.target,r=_(n);r&&(ae=r,a(),"mousedown"===e.type&&(p(n)?n.focus():e.preventDefault()))}}function C(e){if(ae){if(0===i(e))return void M({});if(void 0===e.clientX||e.clientX!==te||void 0===e.clientY||e.clientY!==ne){if(le.ignoreInputTextSelection){var t=b("clientX",e),n=b("clientY",e),r=T.elementFromPoint(t,n);if(p(r))return}var o=ae;a(!0),m(),j(),B(o);var c=u(W);Z=b("pageX",e)-c.left,ee=b("pageY",e)-c.top,E.add(ie||W,"gu-transit"),z(),R(e)}}}function _(e){if(!(fe.dragging&&q||n(e))){for(var t=e;v(e)&&n(v(e))===!1;){if(le.invalid(e,t))return;if(e=v(e),!e)return}var r=v(e);if(r&&!le.invalid(e,t)){var o=le.moves(e,r,t,h(e));if(o)return{item:e,source:r}}}}function O(e){return!!_(e)}function I(e){var t=_(e);t&&B(t)}function B(e){V(e.item,e.source)&&(ie=e.item.cloneNode(!0),fe.emit("cloned",ie,e.item,"copy")),Q=e.source,W=e.item,re=oe=h(e.item),fe.dragging=!0,fe.emit("drag",W,Q)}function k(){return!1}function j(){if(fe.dragging){var e=ie||W;P(e,v(e))}}function L(){ae=!1,a(!0),m(!0)}function M(e){if(L(),fe.dragging){var t=ie||W,n=b("clientX",e),r=b("clientY",e),o=c(q,n,r),i=F(o,n,r);i&&(ie&&le.copySortSource||!ie||i!==Q)?P(t,i):le.removeOnSpill?X():A()}}function P(e,t){var n=v(e);ie&&le.copySortSource&&t===Q&&n.removeChild(W),D(t)?fe.emit("cancel",e,Q,Q):fe.emit("drop",e,t,Q,oe),Y()}function X(){if(fe.dragging){var e=ie||W,t=v(e);t&&t.removeChild(e),fe.emit(ie?"cancel":"remove",e,t,Q),Y()}}function A(e){if(fe.dragging){var t=arguments.length>0?e:le.revertOnSpill,n=ie||W,r=v(n),o=D(r);o===!1&&t&&(ie?r&&r.removeChild(ie):Q.insertBefore(n,re)),o||t?fe.emit("cancel",n,Q,Q):fe.emit("drop",n,r,Q,oe),Y()}}function Y(){var e=ie||W;L(),G(),e&&E.rm(e,"gu-transit"),ue&&clearTimeout(ue),fe.dragging=!1,ce&&fe.emit("out",e,ce,Q),fe.emit("dragend",e),Q=W=ie=re=oe=ue=ce=null}function D(e,t){var n;return n=void 0!==t?t:q?oe:h(ie||W),e===Q&&n===re}function F(e,t,r){function o(){var o=n(i);if(o===!1)return!1;var u=K(i,e),a=U(i,u,t,r),c=D(i,a);return!!c||le.accepts(W,i,Q,a)}for(var i=e;i&&!o();)i=v(i);return i}function R(e){function t(e){fe.emit(e,l,ce,Q)}function n(){d&&t("over")}function r(){ce&&t("out")}if(q){e.preventDefault();var o=b("clientX",e),i=b("clientY",e),u=o-Z,a=i-ee;q.style.left=u+"px",q.style.top=a+"px";var l=ie||W,f=c(q,o,i),s=F(f,o,i),d=null!==s&&s!==ce;(d||null===s)&&(r(),ce=s,n());var p=v(l);if(s===Q&&ie&&!le.copySortSource)return void(p&&p.removeChild(l));var m,g=K(s,f);if(null!==g)m=U(s,g,o,i);else{if(le.revertOnSpill!==!0||ie)return void(ie&&p&&p.removeChild(l));m=re,s=Q}(null===m&&d||m!==l&&m!==h(l))&&(oe=m,s.insertBefore(l,m),fe.emit("shadow",l,s,Q))}}function H(e){E.rm(e,"gu-hide")}function J(e){fe.dragging&&E.add(e,"gu-hide")}function z(){if(!q){var e=W.getBoundingClientRect();q=W.cloneNode(!0),q.style.width=s(e)+"px",q.style.height=d(e)+"px",E.rm(q,"gu-transit"),E.add(q,"gu-mirror"),le.mirrorContainer.appendChild(q),o(x,"add","mousemove",R),E.add(le.mirrorContainer,"gu-unselectable"),fe.emit("cloned",q,W,"mirror")}}function G(){q&&(E.rm(le.mirrorContainer,"gu-unselectable"),o(x,"remove","mousemove",R),v(q).removeChild(q),q=null)}function K(e,t){for(var n=t;n!==e&&v(n)!==e;)n=v(n);return n===x?null:n}function U(e,t,n,r){function o(){var t,o,i,u=e.children.length;for(t=0;t<u;t++){if(o=e.children[t],i=o.getBoundingClientRect(),a&&i.left+i.width/2>n)return o;if(!a&&i.top+i.height/2>r)return o}return null}function i(){var e=t.getBoundingClientRect();return u(a?n>e.left+s(e)/2:r>e.top+d(e)/2)}function u(e){return e?h(t):t}var a="horizontal"===le.direction,c=t!==e?i():o();return c}function V(e,t){return"boolean"==typeof le.copy?le.copy:le.copy(e,t)}var $=arguments.length;1===$&&Array.isArray(e)===!1&&(t=e,e=[]);var q,Q,W,Z,ee,te,ne,re,oe,ie,ue,ae,ce=null,le=t||{};void 0===le.moves&&(le.moves=f),void 0===le.accepts&&(le.accepts=f),void 0===le.invalid&&(le.invalid=k),void 0===le.containers&&(le.containers=e||[]),void 0===le.isContainer&&(le.isContainer=l),void 0===le.copy&&(le.copy=!1),void 0===le.copySortSource&&(le.copySortSource=!1),void 0===le.revertOnSpill&&(le.revertOnSpill=!1),void 0===le.removeOnSpill&&(le.removeOnSpill=!1),void 0===le.direction&&(le.direction="vertical"),void 0===le.ignoreInputTextSelection&&(le.ignoreInputTextSelection=!0),void 0===le.mirrorContainer&&(le.mirrorContainer=T.body);var fe=y({containers:le.containers,start:I,end:j,cancel:A,remove:X,destroy:g,canMove:O,dragging:!1});return le.removeOnSpill===!0&&fe.on("over",H).on("out",J),r(),fe}function o(e,n,r,o){var i={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},u={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},a={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};t.navigator.pointerEnabled?w[n](e,u[r],o):t.navigator.msPointerEnabled?w[n](e,a[r],o):(w[n](e,i[r],o),w[n](e,r,o))}function i(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function u(e){var t=e.getBoundingClientRect();return{left:t.left+a("scrollLeft","pageXOffset"),top:t.top+a("scrollTop","pageYOffset")}}function a(e,n){return"undefined"!=typeof t[n]?t[n]:x.clientHeight?x[e]:T.body[e]}function c(e,t,n){var r,o=e||{},i=o.className;return o.className+=" gu-hide",r=T.elementFromPoint(t,n),o.className=i,r}function l(){return!1}function f(){return!0}function s(e){return e.width||e.right-e.left}function d(e){return e.height||e.bottom-e.top}function v(e){return e.parentNode===T?null:e.parentNode}function p(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||m(e)}function m(e){return!!e&&("false"!==e.contentEditable&&("true"===e.contentEditable||m(v(e))))}function h(e){function t(){var t=e;do t=t.nextSibling;while(t&&1!==t.nodeType);return t}return e.nextElementSibling||t()}function g(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}function b(e,t){var n=g(t),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in n)&&r[e]in n&&(e=r[e]),n[e]}var y=n(32),w=n(33),E=n(36),T=document,x=T.documentElement;e.exports=r}).call(t,function(){return this}())},43:function(e,t,n){"use strict";function r(){function e(e){t(e),i(e.getElementsByTagName("*")).forEach(t)}function t(e){e.removeAttribute("data-reactid")}return o.apply(this,i(arguments)).on("cloned",e)}var o=n(37),i=n(15);e.exports=r},46:function(e,t,n){(function(t){var n,r="function"==typeof t;n=r?function(e){t(e)}:function(e){setTimeout(e,0)},e.exports=n}).call(t,n(11).setImmediate)},232:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),l=r(c),f=n(20),s=r(f),d=n(43),v=r(d),p=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={words:{afraid:{text:"1. The church of Luther's time taught that God was only an angry judge who punished. This made people ",word:"afraid"},place:{text:"2. Martin Luther read in the Bible that God loves people and sent his Son, Jesus, to be punished in our ",word:"place"},heaven:{text:"3. The church taught that people needed to do good things to earn ",word:"Heaven"},sinful:{text:"4. Luther knew that he was very ",word:"sinful"},enough:{text:"5. By teaching that people could earn their own salvation, the church was saying that the saving work of Jesus was not ",word:"enough"},jesus:{text:"6. From reading the Bible, Luther learned that sinners only saved through ",word:"Jesus"}}},n}return u(t,e),a(t,[{key:"shuffle",value:function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),r-=1,t=e[r],e[r]=e[n],e[n]=t;return e}},{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("dropzone"),t=Array.prototype.slice.call(e);t.push(document.getElementById("words")),(0,v.default)({containers:t}).on("drop",function(e,t,n){if(e.innerHTML===t.id){var r=document.createElement("b");r.innerHTML=t.id,t.parentNode.insertBefore(r,t.nextSibling),t.parentNode.removeChild(t)}else n.appendChild(e);if(n.getElementsByTagName("li").length<=0){var o=document.createElement("h2");o.setAttribute("class","bg-neptune white pv3 ph4 dib br2"),o.innerHTML="Great job!",document.getElementById("success").appendChild(o)}})}},{key:"render",value:function(){var e=this.state.words,t=this.shuffle(Object.keys(e));return l.default.createElement("div",null,l.default.createElement("h2",null,"Luther Learned"),l.default.createElement("p",null,"Finish each sentence. Drag a word from the right and drop it in the correct blank space."),l.default.createElement("div",{id:"success"}),l.default.createElement("div",{className:"pa2 f6"},l.default.createElement("div",{className:"fl w-100 w-75-ns pr0 pr2-ns"},l.default.createElement("ul",{className:"list b--neptune ba bw1 br2 pa4 bg-white tl lh-copy"},Object.keys(e).map(function(t,n){return l.default.createElement("li",{className:"pb3",key:n},e[t].text," ",l.default.createElement("span",{id:e[t].word,className:"dropzone"})," .")}))),l.default.createElement("div",{className:"fl w-100 w-25-ns pl0 pl2-ns"},l.default.createElement("div",{className:"b--neptune ba bw1 br2 pv3 bg-white"},l.default.createElement("ul",{id:"words",className:"list lh-double pa0 w3 center"},t.map(function(t,n){return l.default.createElement("li",{className:"grow pointer dib"+(e[t].active?" dn":""),key:n},e[t].word)}))))),l.default.createElement(s.default,{color:"bg-neptune"}))}}]),t}(c.Component);e.exports=p}});
//# sourceMappingURL=2.d3a9ff64.chunk.js.map