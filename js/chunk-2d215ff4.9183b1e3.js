(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d215ff4"],{c11a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"text-center"},[t._v("Relatorio 01 - Listar Cestas Básicas Entregues (Por Beneficiado, Data Início e Data Término)")]),a("div",{staticClass:"container"},[a("table",{staticClass:"table table-borderless table-striped table-image mt-4"},[t._m(0),a("tbody",t._l(t.entregas,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"text-center"},[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.beneficiado.nome))]),a("td",[t._v(t._s(e.qtdCestas))])])})),0)])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v("ID")]),a("th",[t._v("Beneficiado")]),a("th",[t._v("Quantidade de Cestas")])])])}],r=a("d4ec"),i=a("bee2"),c=a("bc3a"),o=a.n(c),l="http://localhost:8080/",d="".concat(l,"/entregas/relatorio/"),u=function(){function t(){Object(r["a"])(this,t)}return Object(i["a"])(t,[{key:"relatorio01",value:function(){return o.a.get("".concat(d))}}]),t}(),f=new u,h={name:"Relatório 01",data:function(){return{entregas:[],message:""}},methods:{refresh:function(){var t=this;f.relatorio01().then((function(e){t.entregas=e.data}))}},created:function(){this.refresh()}},_=h,b=a("2877"),v=Object(b["a"])(_,n,s,!1,null,"3442e673",null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d215ff4.9183b1e3.js.map