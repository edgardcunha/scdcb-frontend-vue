(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e2b4764"],{6631:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"mt-4",attrs:{dark:""}},[a("v-card-title",[e._v(" Entregas "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Pesquisar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-btn",{attrs:{fab:"",small:"",color:"primary ml-4",dark:"",title:"Entregar Cesta Básica"},on:{click:function(t){return e.add()}}},[a("i",{staticClass:"material-icons"},[e._v("add")])])],1),a("v-data-table",{attrs:{headers:e.headers,items:e.entregas,"items-per-page":5,dark:""},scopedSlots:e._u([{key:"item.actions",fn:function(t){var n=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.update(n.cdEntrega)}}},[e._v("edit")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.remove(n.cdEntrega)}}},[e._v("delete")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])]},proxy:!0}])})],1)},c=[],r=a("a97b"),i={data:function(){return{search:"",entregas:[],message:"",headers:[{text:"#",align:"start",sortable:!1,value:"cdEntrega"},{text:"Beneficiado",value:"solicitacao.beneficiado.nome"},{text:"Data",align:"center",value:"solicitacao.dtSolicitacao"},{text:"Qtd de Cestas",align:"center",value:"solicitacao.qtdCestas"},{text:"Tipo de Cesta",align:"center",value:"solicitacao.tpCesta.nome"},{text:"Status",align:"center",value:"solicitacao.status"},{text:"Ações",align:"center",value:"actions",sortable:!1}]}},methods:{initialize:function(){},refresh:function(){var e=this;r["a"].retrieveAll().then((function(t){e.entregas=t.data}))},add:function(){this.$router.push("/entregas/add")},update:function(e){this.$router.push("/entregas/".concat(e))},remove:function(e){var t=this;r["a"].remove(e).then((function(){t.refresh()})).catch((function(e){console.log(e),e.response&&t.$store.dispatch("setSnackbar",{showing:!0,text:e.response.data.message,timeout:8e3,color:"error"})}))}},created:function(){this.refresh()}},s=i,o=a("2877"),l=Object(o["a"])(s,n,c,!1,null,"19226e53",null);t["default"]=l.exports},a97b:function(e,t,a){"use strict";var n=a("d4ec"),c=a("bee2"),r=a("bc3a"),i=a.n(r),s="http://localhost:8080/",o="".concat(s,"/entregas"),l=function(){function e(){Object(n["a"])(this,e)}return Object(c["a"])(e,[{key:"retrieveAll",value:function(){return i.a.get("".concat(o))}},{key:"retrieve",value:function(e){return i.a.get("".concat(o,"/").concat(e))}},{key:"remove",value:function(e){return i.a.delete("".concat(o,"/").concat(e))}},{key:"update",value:function(e,t){return i.a.put("".concat(o,"/").concat(e),t)}},{key:"create",value:function(e){return i.a.post("".concat(o),e)}}]),e}();t["a"]=new l}}]);
//# sourceMappingURL=chunk-9e2b4764.e404d90f.js.map