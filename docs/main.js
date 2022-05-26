(()=>{"use strict";var n={176:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"/* CSS declarations go here */\nbody {\n  font-family: sans-serif;\n  background-color: #315481;\n  background-image: linear-gradient(to bottom, #315481, #918e82 100%);\n  background-attachment: fixed;\n\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  padding: 0;\n  margin: 0;\n\n  font-size: 14px;\n}\n\n.container {\n  max-width: 600px;\n  margin: 0 auto;\n  min-height: 100%;\n  background: white;\n}\n\nheader {\n  background: #d2edf4;\n  background-image: linear-gradient(to bottom, #d0edf5, #e1e5f0 100%);\n  padding: 20px 15px 15px 15px;\n  position: relative;\n}\n\n#login-buttons {\n  display: block;\n}\n\nh1 {\n  font-size: 1.5em;\n  margin: 0;\n  margin-bottom: 10px;\n  display: inline-block;\n  margin-right: 1em;\n}\n\nform {\n  margin-top: 10px;\n  margin-bottom: -10px;\n  position: relative;\n}\n\n.new-task input {\n  box-sizing: border-box;\n  padding: 10px 0;\n  background: transparent;\n  border: none;\n  width: 100%;\n  padding-right: 80px;\n  font-size: 1em;\n}\n\n.new-task input:focus{\n  outline: 0;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  background: white;\n}\n\n.delete {\n  float: right;\n  font-weight: bold;\n  background: none;\n  font-size: 1em;\n  border: none;\n  position: relative;\n}\n\nli {\n  position: relative;\n  list-style: none;\n  padding: 15px;\n  border-bottom: #eee solid 1px;\n}\n\nli .text {\n  margin-left: 10px;\n}\n\n/* isDone = true */\nli.checked {\n  color: #888;\n}\n\nli.checked .text {\n  text-decoration: line-through;\n}\n\nli.private {\n  background: #eee;\n  border-color: #ddd;\n}\n\nheader .hide-completed {\n  float: right;\n}\n\n.toggle-private {\n  margin-left: 5px;\n}\n\n@media (max-width: 600px) {\n  li {\n    padding: 12px 15px;\n  }\n\n  .search {\n    width: 150px;\n    clear: both;\n  }\n\n  .new-task input {\n    padding-bottom: 5px;\n  }\n}\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var g=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n=document.querySelector("#todos"),e=e=>{!function(n){window.localStorage.setItem("todos",JSON.stringify(n))}(e);const t=e.map(((n,e)=>{const t=n.isDone?"checked":"";return`\n        <li data-index="${e}" class="${t}">\n            <button class="delete">×</button>\n            <input type="checkbox" class="toggle-checked" ${t} />\n            <span class="text">${n.title}</span>\n        </li>\n      `}));n.innerHTML=`<ul>${t.join("")}</ul>`},o=document.querySelector(".new-task"),r=document.querySelector(".new-task > input");var a=t(379),i=t.n(a),s=t(795),c=t.n(s),d=t(569),l=t.n(d),u=t(565),p=t.n(u),f=t(216),g=t.n(f),m=t(589),h=t.n(m),v=t(176),b={};b.styleTagTransform=h(),b.setAttributes=p(),b.insert=l().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=g(),i()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals;const x=function(){const n=window.localStorage.getItem("todos")||"[]";return JSON.parse(n)}()||[],y=()=>{e(x)};document.body.addEventListener("click",(n=>{const e=parseInt(n.target.parentNode.dataset.index);"delete"===n.target.className?(n=>{console.log("delete",n),x.splice(n,1),y()})(e):"toggle-checked"===n.target.className&&(n=>{console.log("toggle"),x[n].isDone=!x[n].isDone,y()})(e)})),function(n){o.addEventListener("submit",(t=>{t.preventDefault(),console.log(r.value);const o={title:r.value,isDone:!1};n.push(o),console.log(n),r.value="",e(n)}))}(x),y()})()})();