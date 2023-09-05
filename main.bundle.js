(()=>{"use strict";var n={945:(n,r,e)=>{e.d(r,{Z:()=>g});var t=e(81),o=e.n(t),i=e(645),a=e.n(i),l=e(667),d=e.n(l),c=new URL(e(808),e.b),s=new URL(e(36),e.b),p=a()(o()),u=d()(c),f=d()(s);p.push([n.id,'html,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbutton {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 100%;\r\n  vertical-align: baseline;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  color: inherit;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nbody {\r\n  font-family: "Roboto", sans-serif;\r\n  background: #f5f5f5;\r\n  color: #111111;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  font-weight: 300;\r\n}\r\n\r\n.container {\r\n  min-width: 230px;\r\n  max-width: 550px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.header {\r\n  background-image: linear-gradient(\r\n    224deg,\r\n    hsl(240deg 100% 50%) 2%,\r\n    hsl(249deg 100% 59%) 63%,\r\n    hsl(252deg 99% 64%) 78%,\r\n    hsl(253deg 98% 68%) 87%,\r\n    hsl(254deg 96% 73%) 92%,\r\n    hsl(253deg 93% 77%) 96%,\r\n    hsl(251deg 89% 81%) 98%,\r\n    hsl(246deg 81% 85%) 99%,\r\n    hsl(232deg 68% 88%) 100%,\r\n    hsl(200deg 53% 90%) 100%\r\n  );\r\n  padding-bottom: 4rem;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.todoapp-wrapper {\r\n  position: relative;\r\n  top: -40px;\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\r\n  overflow: hidden;\r\n}\r\n\r\n.todoapp input::-webkit-input-placeholder {\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.todoapp input::-moz-placeholder {\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.todoapp input::input-placeholder {\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.header h1 {\r\n  width: 100%;\r\n  font-size: 3rem;\r\n  font-weight: 200;\r\n  color: white;\r\n  padding-top: 2rem;\r\n  margin: 0;\r\n}\r\n\r\n.header h1 + p {\r\n  margin: 0;\r\n  color: white;\r\n  padding-bottom: 1.2rem;\r\n}\r\n\r\n.new-todo,\r\n.edit {\r\n  position: relative;\r\n  margin: 0;\r\n  width: 100%;\r\n  font-size: 24px;\r\n  font-family: inherit;\r\n  font-weight: inherit;\r\n  line-height: 1.4em;\r\n  color: inherit;\r\n  padding: 6px;\r\n  border: 1px solid #999;\r\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.new-todo {\r\n  padding: 2rem;\r\n  height: 65px;\r\n  border: none;\r\n  background: white;\r\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\r\n  border-radius: 8px;\r\n}\r\n\r\n.main {\r\n  position: relative;\r\n  z-index: 2;\r\n  border-top: 1px solid #e6e6e6;\r\n}\r\n\r\n.toggle-all {\r\n  width: 1px;\r\n  height: 1px;\r\n  border: none;\r\n  /* Mobile Safari */\r\n  opacity: 0;\r\n  position: absolute;\r\n  right: 100%;\r\n  bottom: 100%;\r\n}\r\n\r\n.toggle-all + label {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 45px;\r\n  height: 65px;\r\n  font-size: 0;\r\n  position: absolute;\r\n  top: -65px;\r\n  left: -0;\r\n}\r\n\r\n.toggle-all + label:before {\r\n  content: "❯";\r\n  display: inline-block;\r\n  font-size: 22px;\r\n  color: #949494;\r\n  padding: 10px 27px 10px 27px;\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.toggle-all:checked + label:before {\r\n  color: #484848;\r\n}\r\n\r\n.todo-list {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.todo-list li {\r\n  position: relative;\r\n  font-size: 24px;\r\n  border-bottom: 1px solid #ededed;\r\n  padding: 0rem 1rem;\r\n}\r\n\r\n.todo-list li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.todo-list li.editing {\r\n  border-bottom: none;\r\n  padding: 0;\r\n}\r\n\r\n.todo-list li.editing .edit {\r\n  display: block;\r\n  width: calc(100% - 4rem);\r\n  padding: 12px 16px;\r\n  margin: 0 0 0 4rem;\r\n}\r\n\r\n.todo-list li.editing .view {\r\n  display: none;\r\n}\r\n\r\n.todo-list li .toggle {\r\n  text-align: center;\r\n  width: 40px;\r\n  /* auto, since non-WebKit browsers doesn\'t support input styling */\r\n  height: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto 0;\r\n  border: none;\r\n  /* Mobile Safari */\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n}\r\n\r\n.todo-list li .toggle {\r\n  opacity: 0;\r\n}\r\n\r\n.todo-list li .toggle + label {\r\n  /*\r\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\r\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\r\n\t*/\r\n  background-image: url('+u+");\r\n  background-repeat: no-repeat;\r\n  background-position: center left;\r\n}\r\n\r\n.todo-list li .toggle:checked + label {\r\n  background-image: url("+f+');\r\n}\r\n\r\n.todo-list li label {\r\n  word-break: break-all;\r\n  padding: 15px 15px 15px 60px;\r\n  display: block;\r\n  line-height: 1.2;\r\n  transition: color 0.4s;\r\n  font-weight: 400;\r\n  color: #484848;\r\n}\r\n\r\n.todo-list li.completed label {\r\n  color: #949494;\r\n  text-decoration: line-through;\r\n}\r\n\r\n.todo-list li .destroy {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 10px;\r\n  bottom: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: auto 0;\r\n  font-size: 30px;\r\n  color: #949494;\r\n  transition: color 0.2s ease-out;\r\n}\r\n\r\n.todo-list li .destroy:hover,\r\n.todo-list li .destroy:focus {\r\n  color: #c18585;\r\n}\r\n\r\n.todo-list li .destroy:after {\r\n  content: "×";\r\n  display: block;\r\n  height: 100%;\r\n  line-height: 1.1;\r\n}\r\n\r\n.todo-list li:hover .destroy {\r\n  display: block;\r\n}\r\n\r\n.todo-list li .edit {\r\n  display: none;\r\n}\r\n\r\n.todo-list li.editing:last-child {\r\n  margin-bottom: -1px;\r\n}\r\n\r\n.footer {\r\n  padding: 1rem 1.5rem;\r\n  height: 20px;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  border-top: 1px solid #e6e6e6;\r\n}\r\n\r\n.todo-count {\r\n  float: left;\r\n  text-align: left;\r\n}\r\n\r\n.todo-count strong {\r\n  font-weight: 300;\r\n}\r\n\r\n.filters {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.filters li {\r\n  display: inline;\r\n}\r\n\r\n.filters li a {\r\n  color: inherit;\r\n  margin: 3px;\r\n  padding: 3px 7px;\r\n  text-decoration: none;\r\n  border: 1px solid transparent;\r\n  border-radius: 3px;\r\n}\r\n\r\n.filters li a:hover {\r\n  border-color: #6e49fe;\r\n}\r\n\r\n.filters li a.selected {\r\n  border-color: #4c33b1;\r\n}\r\n\r\n.clear-completed,\r\nhtml .clear-completed:active {\r\n  float: right;\r\n  position: relative;\r\n  line-height: 19px;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.clear-completed:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.info {\r\n  margin: 65px auto 0;\r\n  color: #4d4d4d;\r\n  font-size: 11px;\r\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n  text-align: center;\r\n}\r\n\r\n.info p {\r\n  line-height: 1;\r\n}\r\n\r\n.info a {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\n\r\n.info a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n/*\r\n\tHack to remove background from Mobile Safari.\r\n\tCan\'t use it globally since it destroys checkboxes in Firefox\r\n*/\r\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\r\n  .toggle-all,\r\n  .todo-list li .toggle {\r\n    background: none;\r\n  }\r\n\r\n  .todo-list li .toggle {\r\n    height: 40px;\r\n  }\r\n}\r\n\r\n@media (max-width: 430px) {\r\n  .footer {\r\n    height: 50px;\r\n  }\r\n\r\n  .filters {\r\n    bottom: 10px;\r\n  }\r\n}\r\n\r\n:focus {\r\n  outline: 0;\r\n}\r\n',""]);const g=p},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var l=0;l<this.length;l++){var d=this[l][0];null!=d&&(a[d]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),r.push(s))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],l=0;l<n.length;l++){var d=n[l],c=t.base?d[0]+t.base:d[0],s=i[c]||0,p="".concat(c," ").concat(s);i[c]=s+1;var u=e(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var g=o(f,t);t.byIndex=l,r.splice(l,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=e(i[a]);r[l].references--}for(var d=t(n,o),c=0;c<i.length;c++){var s=e(i[c]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}i=d}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},36:n=>{n.exports="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E"},808:n=>{n.exports="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),l=e(565),d=e.n(l),c=e(216),s=e.n(c),p=e(589),u=e.n(p),f=e(945),g={};function h(n,r){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),e.push.apply(e,t)}return e}function m(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?h(Object(e),!0).forEach((function(r){b(n,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))}))}return n}function b(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}g.styleTagTransform=u(),g.setAttributes=d(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=s(),r()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var v=JSON.parse(localStorage.getItem("mydayapp-js"))||[],y=function(n,r){var e=v.findIndex((function(r){return r.id==n}));return v[e]=m(m({},v[e]),r),localStorage.setItem("mydayapp-js",JSON.stringify(v)),v[e]},x=function(n){var r=document.createElement(null),e=function(n){return"<li data-todo-id=".concat(n.id,' class="').concat(n.completed?"completed":"",'">\n    <div class="view">\n      <input class="toggle" type="checkbox" ').concat(n.completed?"checked":"","/>\n      <label>").concat(n.title,'</label>\n      <button class="destroy"></button>\n    </div>\n    <input class="edit" value="').concat(n.title,'" />\n  </li>')}(n);r.innerHTML=e;var t=r.querySelector("input.toggle"),o=r.querySelector("label"),i=r.querySelector("input.edit"),a=r.querySelector("button.destroy");t.addEventListener("change",(function(r){return E(n.id,r.target.checked)})),o.addEventListener("dblclick",(function(){return L(n.id)})),i.addEventListener("focusout",(function(){return D(n.id)})),i.addEventListener("keydown",(function(r){"Enter"===r.key&&S(n.id,r.target.value),"Escape"===r.key&&i.blur()})),a.addEventListener("click",(function(){return k(n.id)})),document.querySelector(".todo-list").appendChild(r.firstElementChild);var l=document.querySelector(".todoapp-wrapper");l.classList.contains("hidden")&&l.classList.remove("hidden"),O()},w=function(n){document.querySelector(".todo-list").innerHTML="",n.forEach((function(n){return x(n)}))},k=function(n){var r,e;r=n,e=v.findIndex((function(n){return n.id==r})),v.splice(e,1),localStorage.setItem("mydayapp-js",JSON.stringify(v)),document.querySelector('li[data-todo-id="'.concat(n,'"]')).remove();var t=document.querySelector(".todoapp-wrapper");0==v.length&&t.classList.add("hidden"),O(),q()},S=function(n,r){var e=r.trim();if(e){y(n,{title:e});var t=document.querySelector('li[data-todo-id="'.concat(n,'"]')),o=t.querySelector("label"),i=t.querySelector("input.edit");o.innerHTML=e,i.blur()}},E=function(n,r){y(n,{completed:r});var e=document.querySelector('li[data-todo-id="'.concat(n,'"]'));r?e.classList.add("completed"):e.classList.remove("completed"),O(),q()},L=function(n){var r=document.querySelector('li[data-todo-id="'.concat(n,'"]'));r.classList.add("editing");var e,t=r.querySelector("input.edit");t.value=(e=n,v.find((function(n){return n.id==e}))).title,t.focus()},D=function(n){document.querySelector('li[data-todo-id="'.concat(n,'"]')).classList.remove("editing")},O=function(){var n,r=document.querySelector(".todo-count"),e=(n=v.filter((function(n){return!n.completed})).length,"<strong>".concat(n,"</strong> ").concat(1==n?"item":"items"," left"));r.innerHTML=e},q=function(){var n=document.querySelector(".clear-completed");0==v.filter((function(n){return n.completed})).length?n.classList.add("hidden"):n.classList.remove("hidden")},j=function(){var n=!1;Array.from(document.querySelectorAll(".filters a")).forEach((function(r){r.href==location.href?(n=!0,r.classList.add("selected")):r.classList.remove("selected")})),n||document.querySelector(".filters a[href='#/']").classList.add("selected")},C={"/":function(){return w(v)},"/all":function(){return w(v)},"/pending":function(){return w(v.filter((function(n){return!n.completed})))},"/completed":function(){return w(v.filter((function(n){return n.completed})))}},z=function(){var n=location.hash.slice(1).toLocaleLowerCase();(n&&C[n]?C[n]:C["/"])()};window.addEventListener("DOMContentLoaded",(function(){z(),j()})),window.addEventListener("hashchange",(function(){z(),j()})),document.querySelector(".new-todo").addEventListener("keydown",(function(n){"Enter"===n.key&&(function(n){var r=n.trim();if(r){var e=function(n){var r={id:Date.now(),title:n,completed:!1};return v.push(r),localStorage.setItem("mydayapp-js",JSON.stringify(v)),r}(r);x(e),q()}}(n.target.value),n.target.value="")})),document.querySelector(".clear-completed").addEventListener("click",(function(){v.filter((function(n){return n.completed})).forEach((function(n){return k(n.id)}))})),q()})()})();