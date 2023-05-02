(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>v});var r=e(81),a=e.n(r),o=e(645),i=e.n(o),c=e(667),s=e.n(c),l=new URL(e(202),e.b),d=new URL(e(370),e.b),u=new URL(e(862),e.b),p=i()(a()),f=s()(l),h=s()(d),m=s()(u);p.push([n.id,"body {\n  margin: 0;\n}\n\n@font-face {\n  font-family: Assistant;\n  src: url("+f+");\n}\n@font-face {\n  font-family: Assistant-SemiBold;\n  src: url("+h+");\n}\n\n@font-face {\n  font-family: Aerstriko;\n  src: url("+m+");\n}\n\n.game-container {\n  display: grid;\n  max-height: 100vh;\n}\n\n.header-title {\n  height: 20vh;\n}\n.header-action-button {\n  height: max-content;\n}\n\n.gameboard-title-row {\n  height: max-content;\n  padding: 10px 0px 10px 0px;\n}\n\n.place-ships-modal-background {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n  /* pointer-events: none;\n  opacity: 0; */\n}\n\n.place-ships-modal {\n  width: 50%;\n  aspect-ratio: 1/1;\n  overflow: hidden;\n  background-color: rgb(255, 255, 255);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 5px;\n  box-shadow: 0px 0px 100px 10px black;\n  display: grid;\n  justify-items: center;\n  grid-template-rows: 1.4fr 1.4fr 8fr;\n  gap: 10px;\n}\n\n.place-ship-message {\n  display: grid;\n  align-self: end;\n  font-family: Assistant-SemiBold;\n  font-size: 2vw;\n}\n\n.switch-orientation-button {\n  font-size: inherit;\n  align-self: center;\n  font-family: Assistant;\n  font-size: 1.3vw;\n  width: 30%;\n  height: 80%;\n  border-radius: 5px;\n  border: none;\n  background-color: rgb(152, 201, 200);\n  color: white;\n  white-space: nowrap;\n  transition: transform 0.14s, opacity 0s;\n}\n\n.switch-orientation-button:hover {\n  background-color: rgb(120, 162, 162);\n}\n\n.switch-orientation-button-clicked {\n  transform: scale(0.98);\n}\n\n.player1-gameboard-clone {\n  width: 70%;\n  height: 70%;\n  padding-bottom: 10px;\n}\n\n.gameboard-title-row,\n.gameboard-row,\n.stats-row {\n  display: grid;\n  grid-template-columns: 16vw clamp(30px, 32vw, 680px) 4vw clamp(30px, 32vw, 680px) 16vw;\n  justify-content: center;\n}\n\n.header {\n  display: grid;\n  justify-content: center;\n  justify-self: center;\n  width: 75vw;\n}\n\n.header-title {\n  display: grid;\n  align-content: center;\n  font-size: clamp(50px, 15vw, 150px);\n  font-family: Aerstriko;\n  letter-spacing: 15px;\n  transform: translateY(20px);\n}\n\n.header-action-button,\n.header-action-button-hoverable {\n  justify-self: center;\n  font-size: 2vw;\n  font-family: Assistant-SemiBold;\n  max-height: 200px;\n  min-height: 5vh;\n  margin: 0px 0px 10px 0px;\n  width: 30%;\n  border-radius: 5px;\n  border: none;\n  background-color: rgb(152, 201, 200);\n  color: white;\n}\n\n.header-action-button-hoverable {\n  background-color: rgb(152, 201, 200);\n}\n.header-action-button-hoverable:hover {\n  background-color: rgb(120, 162, 162);\n}\n\n.header-action-button:hover {\n  opacity: 0.9;\n  transition: opacity 1s;\n}\n\n.name {\n  font-size: clamp(20px, 2vw, 40px);\n  font-family: Assistant;\n  display: grid;\n  justify-content: center;\n}\n\n.ship-container {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: flex-start;\n  margin: 0px 0px 0px 20px;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  aspect-ratio: 1/1;\n  justify-self: center;\n  width: 30vw;\n  max-width: 700px;\n  position: relative;\n}\n\n.cell {\n  position: relative;\n  padding-top: 100%;\n  border: 1px solid rgb(255, 255, 255);\n  background-color: rgb(152, 201, 200);\n  transition: background-color 0.5s, opacity 0s;\n}\n\n.cell:hover {\n  opacity: 0.9;\n  transition: opacity 0s;\n}\n\n.cloneCell {\n  position: relative;\n  padding-top: 100%;\n  border: 1px solid rgb(255, 255, 255);\n  background-color: rgb(152, 201, 200);\n}\n\n.ship-pre-placement {\n  background-color: grey;\n}\n\n.ship-pre-placement-transition {\n  transition: 0s;\n}\n\n.ship-pre-placement:hover {\n  opacity: 1;\n}\n\n.ship-pre-placement-illegal {\n  cursor: not-allowed;\n  background-color: red;\n}\n\n.ships-left,\n.hits-taken {\n  font-size: 1.5vw;\n  font-family: Assistant;\n  display: flex;\n}\n\n.stats {\n  padding-left: 3%;\n}\n\n.ships-left-player-value,\n.ships-left-computer-value,\n.hits-taken-player-value,\n.hits-taken-computer-value {\n  margin-left: 8px;\n}\n\n.shipOnSquare {\n  background-color: #20aaaf;\n}\n\n.shipVisible {\n  opacity: 1;\n}\n\n.shipInvisible {\n  background-color: rgb(152, 201, 200);\n}\n\n.cell-hit,\n.ship-hit {\n  cursor: not-allowed;\n}\n\n.ship-miss {\n  background-color: rgba(90, 233, 255, 0.417);\n}\n\n.ship-hit {\n  background-color: red;\n}\n\n.win {\n  background-color: rgb(24, 95, 0);\n  opacity: 0.5;\n  transition: 1s;\n}\n\n.lose {\n  background-color: rgb(95, 0, 0);\n  opacity: 0.5;\n  transition: 1s;\n}\n\n.you-lose-message,\n.you-win-message {\n  font-size: clamp(12px, 2.5vw, 80px);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50%;\n  font-family: Assistant-SemiBold;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  background-color: rgba(0, 0, 0, 0.75);\n  padding: 25px;\n  border-radius: 5px;\n  opacity: 0;\n  transition: opacity 1s ease-in-out;\n}\n\n.impact-img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  transition: 0.5s;\n  opacity: 0;\n  cursor: not-allowed;\n}\n\n.cell-shake {\n  z-index: 1;\n  animation: shake 1s;\n}\n\n@keyframes shake-1 {\n  0% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n  30% {\n    transform: translate(0px, 0px) rotate(7deg) scale(1.3);\n  }\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n\n@keyframes shake-2 {\n  0% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n  30% {\n    transform: translate(0px, 0px) rotate(-7deg) scale(1.3);\n  }\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n\n@keyframes shake-3 {\n  0% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n  30% {\n    transform: translate(10px, 0px) rotate(-12deg) scale(1.2);\n  }\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n\n@keyframes shake-4 {\n  0% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n  30% {\n    transform: translate(0px, 0px) rotate(15deg) scale(1.4);\n  }\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n\n@keyframes shake-5 {\n  0% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n  30% {\n    transform: translate(0px, 10px) rotate(-20deg) scale(1.5);\n  }\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n\n@media (min-width: 640px) {\n}\n\n@media (min-width: 768px) {\n}\n@media (min-width: 1024px) {\n}\n@media (min-width: 1280px) {\n}\n@media (min-width: 1536px) {\n}\n\n/* @media (max-height: 800px) {\n  .gameboard-row {\n    grid-template-columns: 10vw 300px 10vw 300px 10vw;\n    display: grid;\n    justify-content: center;\n  }\n  .gameboard {\n    width: 300px;\n    height: 300px;\n  }\n  .cell {\n  }\n} */\n",""]);const v=p},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=a(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function a(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=e(o[i]);t[c].references--}for(var s=r(n,a),l=0;l<o.length;l++){var d=e(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,a&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},862:(n,t,e)=>{n.exports=e.p+"b3fe68197de8673e5e96.ttf"},202:(n,t,e)=>{n.exports=e.p+"60737989f301343ac559.ttf"},370:(n,t,e)=>{n.exports=e.p+"a060991a18e5d33ae2ab.ttf"}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),t=e.n(n),r=e(795),a=e.n(r),o=e(569),i=e.n(o),c=e(565),s=e.n(c),l=e(216),d=e.n(l),u=e(589),p=e.n(u),f=e(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=function(n){return Array.from({length:n*n},(function(t,e){var r=Math.floor(e/n),a=e%n;return{coord:"".concat(r,".").concat(a),containsShip:!1,cellHit:!1}}))},v=[],g=[],y=1,b=function(n,t,e,r){var a={id:y++,length:n,hits:t,sunk:e,player:r,coord:"",orientation:""};return 1===r&&v.push(a),2===r&&g.push(a),a};function x(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var w=function(n,t){return n.find((function(n){return n.coord===t}))},k=function(n,t,e,r){if("horizontal"===r||"vertical"===r){for(var a=(h=e.split(".").map(Number),m=2,function(n){if(Array.isArray(n))return n}(h)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,a,o,i,c=[],s=!0,l=!1;try{if(o=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;s=!1}else for(;!(s=(r=o.call(e)).done)&&(c.push(r.value),c.length!==t);s=!0);}catch(n){l=!0,a=n}finally{try{if(!s&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(l)throw a}}return c}}(h,m)||function(n,t){if(n){if("string"==typeof n)return x(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?x(n,t):void 0}}(h,m)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],i=a[1],c=n.length,s=[],l=!1;0<c;0){if("horizontal"===r){var d="".concat(o,".").concat(i+--c),u=w(t,d);s.push(u)}if("vertical"===r){var p="".concat(o+--c,".").concat(i),f=w(t,p);s.push(f)}}return s.forEach((function(n){n.containsShip&&(l=!0)})),!0!==l&&(s.forEach((function(t){t.containsShip=n.id})),t)}var h,m};function S(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var L=document.querySelector(".player-gameboard"),E=document.querySelector(".computer-gameboard"),A=m(10),C=m(10),M=(b(5,0,!1,1),b(4,0,!1,1),b(3,0,!1,1),b(2,0,!1,1),b(1,0,!1,1),b(5,0,!1,2),b(4,0,!1,2),b(3,0,!1,2),b(2,0,!1,2),b(1,0,!1,2),{value:!1}),T=function n(t,e,r){!0===M.value&&function(n,t){for(var e=function(n){if(Array.isArray(n))return S(n)}(a=n.children)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(a)||function(n,t){if(n){if("string"==typeof n)return S(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?S(n,t):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=Math.floor(100*Math.random());!0===t[r].cellHit;)r=Math.floor(100*Math.random());var a,o=Math.floor(600*Math.random())+550;setTimeout((function(){e[r].click()}),o)}(t,e),t.addEventListener("click",(function a(o){var i=new CustomEvent("checkIfValidAttack",{detail:{target:o.target,isValid:!0}});if(t.dispatchEvent(i),!1!==i.detail.isValid){var c,s,l,d=(c=e,s=o.target.dataset.coord,!0!==(l=c.find((function(n){return n.coord===s}))).cellHit&&(l.cellHit=!0,l.containsShip)),u=new CustomEvent("registerHit",{detail:{target:o.target}});if(t.dispatchEvent(u),!1!==d){var p=function(n,t){return n.find((function(n){return n.id===t}))||!1}(r,d);if(p.hits+=1,!0===function(n){if(n.hits===n.length)return n.sunk=!0,!0}(p)){var f=new CustomEvent("registerShipSunk",{detail:{target:o.target}});if(t.dispatchEvent(f),!1!==function(n){return n.every((function(n){return!1!==n.containsShip&&!0===n.cellHit||!1===n.containsShip}))}(e)){var h=new CustomEvent("registerWinner",{detail:M});return document.dispatchEvent(h),t.removeEventListener("click",a),void j.addEventListener("click",q)}}}t.removeEventListener("click",a),!0===M.value?(M.value=!1,n(O.dom,O.gameboard,O.ships)):(M.value=!0,n(I.dom,I.gameboard,I.ships))}}))},j=document.querySelector(".header-action-button"),q=function n(){T(O.dom,O.gameboard,O.ships),j.removeEventListener("click",n)},I={dom:L,gameboard:A,ships:v},O={dom:E,gameboard:C,ships:g};T(O.dom,O.gameboard,O.ships);const N=e.p+"dc29c951c6855ca566e8.png",z=e.p+"4dfd9005aaa36f1d7420.png",H=e.p+"3aff2bb366d271c8592f.mp3",U=e.p+"dc1a825b8ae824106dd3.mp3",P=e.p+"db3b7fe75e121aeaa02a.mp3",V=e.p+"dac4acbd2961ca87b98d.mp3",X=e.p+"2a7faf4d2c7c39aead5d.mp3",Y=e.p+"4b0c620914f88d49d324.mp3",$=e.p+"5eccd17c5bcff1762667.mp3";function B(n){return function(n){if(Array.isArray(n))return R(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return R(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?R(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var Z=document.querySelector(".header-action-button"),F=document.querySelector(".player-gameboard"),_=document.querySelector(".computer-gameboard"),D=document.querySelector(".ships-left-player-value"),W=document.querySelector(".ships-left-computer-value"),J=document.querySelector(".hits-taken-player-value"),Q=document.querySelector(".hits-taken-computer-value"),G=function(n){var t=new Audio(n);if("fire.mp3"===t.src.slice(-8)&&(t.volume=.6),"hits.mp3"===t.src.slice(-8)&&(t.volume=.45),"deny.mp3"===t.src.slice(-8)&&(t.volume=.45),"wave.mp3"===t.src.slice(-8)){t.volume=0;var e=setInterval((function(){t.volume+=.05,t.volume>=.3&&clearInterval(e)}),500)}t.play()},K=function(n,t){var e=document.createElement("img");e.classList.add("impact-img"),e.src=t,setTimeout((function(){e.style.opacity="1"}),0),n.appendChild(e)},nn=function(n,t,e){var r=document.createElement("div");r.textContent="".concat(t),r.classList.add(e),setTimeout((function(){r.style.opacity="1"}),0),n.appendChild(r)},tn=function(n,t){for(var e=0;e<t;e++){var r=document.createElement("div");r.classList.add("cell"),r.dataset.coord=A[e].coord,n.appendChild(r)}},en=function(n,t){n.forEach((function(n){if(!1!==n.containsShip){var e=t.querySelector('[data-coord="'.concat(n.coord,'"]'));t===_?e.classList.add("shipOnSquare","shipInvisible"):e.classList.add("shipOnSquare","shipVisible")}}))};Z.textContent="Sink Their Ships",tn(F,A.length),tn(_,A.length),en(A,F);var rn=document.createElement("div");rn.classList.add("place-ships-modal-background"),document.body.appendChild(rn);var an=document.createElement("div");an.classList.add("place-ships-modal"),rn.appendChild(an);var on=document.createElement("div");on.classList.add("place-ship-message"),on.textContent="Place the Aircraft Carrier",an.appendChild(on);var cn=document.createElement("button");cn.classList.add("switch-orientation-button"),cn.textContent="Change orientation: X",an.appendChild(cn);var sn=F.cloneNode(!0);sn.classList.add("player1-gameboard-clone"),an.appendChild(sn);var ln=function(){dn="X"===dn?"Y":"X",cn.textContent="Change orientation: ".concat(dn),cn.classList.add("switch-orientation-button-clicked"),setTimeout((function(){cn.classList.remove("switch-orientation-button-clicked")}),140),G($)},dn="X";cn.addEventListener("click",ln),sn.addEventListener("contextmenu",(function(n){n.preventDefault(),ln()})),sn.querySelectorAll(".cell").forEach((function(n){n.classList.remove("cell"),n.classList.add("cloneCell")})),v.sort((function(n,t){return t.length-n.length}));var un=B(v);sn.addEventListener("mouseover",(function(n){for(var t=un[0].length,e=n.target.dataset.coord.split("."),r=[],a=0;a<t;a++){var o=Number,i=String;"X"===dn&&(o=Number(e[1])+(t-a-1),i=e[0]+"."+o),"Y"===dn&&(i=(o=Number(e[0])+(t-a-1))+"."+e[1]),r.push.apply(r,B(sn.querySelectorAll('[data-coord="'.concat(i,'"]'))))}r.forEach((function(n){n.classList.add("ship-pre-placement","ship-pre-placement-transition")}));var c=sn.querySelectorAll(".ship-pre-placement");"X"===dn&&Number(e[1])+t>Math.sqrt(sn.children.length)&&c.forEach((function(n){n.classList.add("ship-pre-placement-illegal")})),"Y"===dn&&Number(e[0])+t>Math.sqrt(sn.children.length)&&c.forEach((function(n){n.classList.add("ship-pre-placement-illegal")})),Array.from(r).some((function(n){return n.classList.contains("shipOnSquare")}))&&r.forEach((function(n){n.classList.add("ship-pre-placement-illegal")}))})),sn.addEventListener("mouseout",(function(n){for(var t=function(n){sn.childNodes[n].classList.remove("ship-pre-placement"),sn.childNodes[n].classList.remove("ship-pre-placement-illegal"),setTimeout((function(){sn.childNodes[n].classList.remove("ship-pre-placement-transition")}),800)},e=0;e<sn.children.length;e++)t(e)})),sn.addEventListener("click",(function(n){return n.target.classList.contains("ship-pre-placement-illegal")&&G(U),("X"!==dn||!1!==k(un[0],A,n.target.dataset.coord,"horizontal"))&&("Y"!==dn||!1!==k(un[0],A,n.target.dataset.coord,"vertical"))&&(G(H),en(A,sn),en(A,F),un.shift(),0!==un.length&&(t="",4===un[0].length&&(t="Battle Cruiser"),3===un[0].length&&(t="Cruiser"),2===un[0].length&&(t="Destoyer"),1===un[0].length&&(t="Frigate"),on.textContent="Place the ".concat(t)),void(0===un.length&&(rn.style.opacity=0,rn.style.display="none")));var t}));var pn=function(){var n=Math.random();return n>.5?"horizontal":n<=.5?"vertical":void 0},fn=function(){g.forEach((function(n){for(var t=Math.floor(10*Math.random())+"."+Math.floor(10*Math.random()),e=!1;!1===e;){try{e=k(n,C,t,pn())}catch(n){}e||(t=Math.floor(10*Math.random())+"."+Math.floor(10*Math.random()))}}))};fn(),en(C,_);var hn={value:0},mn={value:0},vn={value:v.length},gn={value:g.length},yn=[vn.value],bn=[gn.value];D.textContent="".concat(vn.value," / ").concat(yn),W.textContent="".concat(gn.value," / ").concat(bn);var xn=function(n,t,e){G(P),setTimeout((function(){n.classList.contains("shipOnSquare")&&!n.classList.contains("ship-hit")?(n.classList.add("ship-hit"),e.value+=1,t.textContent=e.value,K(n,z),G(V)):(n.classList.add("ship-miss"),K(n,N),G(X),function(n){var t=Math.random(),e=["shake-1","shake-2","shake-3","shake-4","shake-5"][Math.floor(t/.2)];n.style.animation="".concat(e," 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)"),n.classList.add("cell-shake")}(n),setTimeout((function(){n.classList.remove("cell-shake")}),500))}),300)},wn=function(n,t,e){t.value-=1,n.textContent="".concat(t.value," / ").concat(e)};_.addEventListener("checkIfValidAttack",(function(n){n.detail.target.classList.contains("impact-img")&&(n.detail.isValid=!1,G(U))})),F.addEventListener("registerHit",(function(n){xn(n.detail.target,J,hn)})),_.addEventListener("registerHit",(function(n){xn(n.detail.target,Q,mn)})),F.addEventListener("registerShipSunk",(function(n){wn(D,vn,yn),setTimeout((function(){G(Y)}),600)})),_.addEventListener("registerShipSunk",(function(n){wn(W,gn,bn),setTimeout((function(){G(Y)}),600)})),document.addEventListener("registerWinner",(function(n){!1===n.detail.value&&kn(F,_),!0===n.detail.value&&kn(_,F),Z.addEventListener("click",Tn)}));var kn=function(n,t){var e=Array.from(n.children);setTimeout((function(){e.forEach((function(n){return n.classList.add("win")})),nn(n,"YOU WIN","you-win-message"),Z.textContent="Play Again",Z.classList.add("header-action-button-hoverable")}),1e3);var r=Array.from(t.children);setTimeout((function(){nn(t,"YOU LOSE","you-lose-message"),r.forEach((function(n){return n.classList.add("lose")})),Z.textContent="Play Again"}),1e3)},Sn=function(n){Array.from(n.children).forEach((function(n){n.classList.remove("win","lose","shipOnSquare","ship-hit","ship-miss"),n.firstChild&&n.removeChild(n.firstChild)}))},Ln=function(n){var t=n.querySelector(".you-lose-message")||n.querySelector(".you-win-message");n.removeChild(t)},En=function(n){n.forEach((function(n){n.containsShip=!1,n.cellHit=!1}))},An=function(n){n.forEach((function(n){n.hits=0,n.sunk=!1})),n===v&&(un=B(v))},Cn=function(n,t){n.value=0,t.textContent=n.value},Mn=function(n,t,e,r){t.value=e.length,n.textContent="".concat(t.value," / ").concat(r)},Tn=function(){Z.classList.remove("header-action-button-hoverable"),Sn(F),Sn(sn),Sn(_),En(A),En(C),An(v),An(g),Cn(hn,J),Cn(mn,Q),Mn(D,vn,v,yn),Mn(W,gn,g,bn),Ln(F),Ln(_),rn.style.opacity=1,rn.style.display="block",fn(),en(C,_),Z.removeEventListener("click",Tn)}})()})();