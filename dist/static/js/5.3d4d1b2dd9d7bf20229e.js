webpackJsonp([5],{181:function(t,e,n){function r(t){n(212)}var a=n(18)(n(199),n(225),r,"data-v-2216a6cd",null);t.exports=a.exports},183:function(t,e,n){t.exports={default:n(185),__esModule:!0}},184:function(t,e,n){"use strict";e.__esModule=!0;var r=n(183),a=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=a.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},185:function(t,e,n){n(189),t.exports=n(7).Object.assign},186:function(t,e,n){"use strict";var r=n(65),a=n(187),i=n(188),o=n(66),u=n(64),s=Object.assign;t.exports=!s||n(35)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r})?function(t,e){for(var n=o(t),s=arguments.length,c=1,l=a.f,f=i.f;s>c;)for(var p,d=u(arguments[c++]),m=l?r(d).concat(l(d)):r(d),v=m.length,b=0;v>b;)f.call(d,p=m[b++])&&(n[p]=d[p]);return n}:s},187:function(t,e){e.f=Object.getOwnPropertySymbols},188:function(t,e){e.f={}.propertyIsEnumerable},189:function(t,e,n){var r=n(34);r(r.S+r.F,"Object",{assign:n(186)})},190:function(t,e,n){"use strict";function r(t){return/^[1][3,4,5,7,8][0-9]{9}$/.test(t)}function a(t){return/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(t)}function i(t){return/^[0-9]*[1-9][0-9]*$/.test(t)}function o(t){return/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?/.test(t)}function u(t){return t.replace(/\s/g,"")}function s(t){for(var e in t)if(""==u(t[e])){if("dname"==e)return alert("域名不能为空"),!1;if("whichone"==e)return alert("联系人不能为空"),!1;if("phone"==e)return alert("手机不能为空"),!1;if("email"==e)return alert("邮箱不能为空"),!1;if("price"==e)return alert("出价不能为空"),!1}else{if(!o(t.dname))return alert("请输入正确的域名格式"),!1;if(!r(t.phone))return alert("请输入正确的手机格式"),!1;if(!a(t.email))return alert("请输入正确的邮箱格式"),!1;if(!i(t.price))return alert("请输入正确的价格格式"),!1;if(!t.agree)return alert("请点击同意服务协议后才能提交"),!1}return!0}function c(t){for(var e in t)if(""==u(t[e])){if("content"==e)return alert("爆料内容不能为空"),!1;if("contact"==e)return alert("联系方式不能为空"),!1}else if(t.content.length<15)return void alert("爆料内容不能少于15个字符");return!0}e.b=s,e.a=c},199:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(184),a=n.n(r),i=n(67),o=n(19),u=n(190);e.default={data:function(){return{msg:"sdkfj"}},mounted:function(){},methods:a()({},n.i(i.b)(["postTellUsNews"]),{submitForm:function(t){t.preventDefault();var e=new FormData(document.getElementById("tell_form")),r=n.i(o.c)(e);n.i(u.a)(r)&&this.postTellUsNews(r)}}),computed:a()({},n.i(i.c)({reqState:function(t){return t.request}}))}},203:function(t,e,n){e=t.exports=n(175)(!1),e.push([t.i,"",""])},212:function(t,e,n){var r=n(203);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(176)("a4eb1a48",r,!0)},225:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg"},[n("form",{attrs:{id:"tell_form"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"btn-box mt20"},[n("input",{staticClass:"btn",attrs:{type:"submit",value:"提交"},on:{click:function(e){t.submitForm(e)}}})])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sec broke"},[n("textarea",{attrs:{name:"content",placeholder:"如果身边有经纪交易要爆，快告诉我们把"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lianxi_box"},[n("input",{staticClass:"lianxi",attrs:{type:"text",name:"contact",placeholder:"联系方式(QQ或微信)"}})])}]}}});