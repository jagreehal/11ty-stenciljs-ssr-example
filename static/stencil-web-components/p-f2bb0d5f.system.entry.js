System.register(["./p-eb1eeb88.system.js"],(function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.r;n=t.h;r=t.H}],execute:function(){var s="//api.github.com/search/repositories";var o=function(t){var e=t.result;return n("div",{class:"result"},n("div",null,n("a",{href:e.html_url,target:"_blank"},e.full_name),"🌟",n("strong",null,e.stargazers_count)),n("p",null,e.description))};var l=t("fetch_example",function(){function t(t){e(this,t);this.q="stencil";this.results=[]}t.prototype.componentDidLoad=function(){var t=this;fetch(s+"?q="+this.q).then((function(t){return t.json()})).then((function(e){t.results=e&&e.items||[]}))};t.prototype.render=function(){return n("div",null,n("div",{class:"list"},this.results.map((function(t){return n(o,{result:t})}))))};return t}());var i=".text.sc-scoped-example{color:red}";var u=t("scoped_example",function(){function t(t){e(this,t)}t.prototype.render=function(){return n("div",{class:"text"},"Hello, my name is ",this.first," ",this.last)};return t}());u.style=i;var c=".text{color:orange}";var a=t("shadow_example",function(){function t(t){e(this,t)}t.prototype.render=function(){return n("div",{class:"text"},"Hello, my name is ",this.first," ",this.last)};return t}());a.style=c;var p=t("slot_example",function(){function t(t){e(this,t)}t.prototype.render=function(){return n("div",null,n("div",null,"Above the slot"),n("slot",null),n("div",null,"Below the slot"))};return t}());var f=".text.sc-slot-scoped-example{color:rgb(110, 110, 173)}";var h=t("slot_scoped_example",function(){function t(t){e(this,t)}t.prototype.render=function(){return n(r,null,n("div",{class:"text"},"Above the slot"),n("slot",null),n("div",{class:"text"},"Below the slot"))};return t}());h.style=f;var v=".text{color:green}";var d=t("slot_shadow_example",function(){function t(t){e(this,t)}t.prototype.render=function(){return n(r,null,n("div",{class:"text"},"Above the slot"),n("slot",null),n("div",{class:"text"},"Below the slot"))};return t}());d.style=v}}}));