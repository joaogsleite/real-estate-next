_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"6IqN":function(n,e,t){"use strict";t.r(e),t.d(e,"__N_SSG",(function(){return f}));var a=t("q1tI"),l=t.n(a),i=t("YFqc"),o=t.n(i),u=t("apO0"),r=l.a.createElement,c=function(n){var e=n.data;return r(o.a,{href:"/ads/[id]",as:"/ads/".concat(e.id)},r("a",null,e.name,": ",e.price))},s=a.createElement,p=function(n){var e=n.items;return s("ul",null,e.map((function(n){return s("li",{key:n.link},s(c,{data:n}))})))},d=l.a.createElement,f=!0;e.default=function(n){var e=n.items,t=Object(a.useState)(""),l=t[0],i=t[1],r=Object(a.useCallback)((function(n){i(n.currentTarget.value)}),[i]);return e=e.filter((function(n){return!l||n.concelho===l})),d(u.a,{title:"Ads List | Next.js + TypeScript Example"},d("h1",null,"Ads List"),d("p",null,"Ads fetched from imovirtual"),d("select",{onChange:r},d("option",{value:"",selected:!0},"(select concelho)"),d("option",null,"Mafra"),d("option",null,"Sintra"),d("option",null,"Cascais"),d("option",null,"Oeiras"),d("option",null,"Amadora")),d(p,{items:e}),d("p",null,d(o.a,{href:"/"},d("a",null,"Go home"))))}},B5vz:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ads",function(){return t("6IqN")}])}},[["B5vz",0,2,1,3]]]);