!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,o){const n=o(1),r=o(2);n(),r()},function(t,e){t.exports=function(){document.addEventListener("click",function(t){t.target.classList.contains("authorization_button")&&(document.querySelector(".authorization_button").style.display="none",document.querySelector(".authorization").classList.remove("off"),document.querySelector(".welcome").classList.add("off"))})}},function(t,e){t.exports=function(){var t=document.querySelector("#blog"),e=t.querySelectorAll(".text-block"),o=document.querySelector("#menu-blog");e.forEach(function(t,e){t.id="text"+(e+1).toString();var n=document.createElement("li");n.id="menu-"+t.id,n.innerText=t.querySelector("h3").innerText,0==e&&n.classList.add("menu-blog-active"),o.appendChild(n)}),t.addEventListener("scroll",function(){e.forEach(function(o,n){var r=t.scrollTop,c=t.scrollTop+100;r<=o.offsetTop&&c>o.offsetTop&&setActiveTextBlok(e[n])})})}}]);