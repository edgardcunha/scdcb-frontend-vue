(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-515ab906"],{2853:function(t,e,o){"use strict";var a=o("d4ec"),s=o("bee2"),i=o("bc3a"),n=o.n(i),c="http://localhost:8080/",r="".concat(c,"/tipos-cestas"),l=function(){function t(){Object(a["a"])(this,t)}return Object(s["a"])(t,[{key:"retrieveAll",value:function(){return n.a.get("".concat(r))}},{key:"retrieve",value:function(t){return n.a.get("".concat(r,"/").concat(t))}},{key:"remove",value:function(t){return n.a.delete("".concat(r,"/").concat(t))}},{key:"update",value:function(t,e){return n.a.put("".concat(r,"/").concat(t),e)}},{key:"create",value:function(t){return n.a.post("".concat(r),t)}}]),t}();e["a"]=new l},a5ea:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-form",{ref:"form",on:{submit:function(t){t.preventDefault()}}},[o("v-container",[o("v-subheader",[t._v("Tipo de Cesta")]),o("v-row",{attrs:{align:"center"}},[o("v-col",{staticClass:"d-flex",attrs:{cols:"12"}},[o("v-text-field",{attrs:{label:"Id",placeholder:"Id do Tipo da Cesta",outlined:"",disabled:""},model:{value:t.tipoCesta.id,callback:function(e){t.$set(t.tipoCesta,"id",e)},expression:"tipoCesta.id"}})],1)],1),o("v-row",{attrs:{align:"center"}},[o("v-col",{staticClass:"d-flex",attrs:{cols:"12"}},[o("v-text-field",{attrs:{counter:50,label:"Nome",placeholder:"Nome do Tipo da Cesta",outlined:"",required:""},model:{value:t.tipoCesta.nome,callback:function(e){t.$set(t.tipoCesta,"nome",e)},expression:"tipoCesta.nome"}})],1)],1),o("v-row",[o("v-col",{staticClass:"d-flex",attrs:{cols:"12"}},[o("v-textarea",{attrs:{outlined:"",label:"Descrição",placeholder:"Descrição do Tipo da Cesta"},model:{value:t.tipoCesta.descricao,callback:function(e){t.$set(t.tipoCesta,"descricao",e)},expression:"tipoCesta.descricao"}})],1)],1),o("v-btn",{attrs:{color:"success"},on:{click:t.save}},[t._v("Salvar")])],1)],1)},s=[],i=o("2853"),n={name:"TiposCestas",data:function(){return{tipoCesta:{id:0,nome:"",descricao:""}}},computed:{id:function(){return this.$route.params.id}},methods:{refresh:function(){var t=this;this.id>0&&i["a"].retrieve(this.id).then((function(e){t.tipoCesta=e.data}))},save:function(t){var e=this;t.preventDefault(),this.id>0?i["a"].update(this.id,this.tipoCesta,{id:this.id,tipoCesta:this.tipoCesta}).then((function(){console.log(e.tipoCesta),e.$router.push("/tipos-cestas")})).catch((function(t){console.log(t),t.response&&e.$store.dispatch("setSnackbar",{showing:!0,text:t.response.data.message,timeout:8e3,color:"error"})})):(console.log(this.tipoCesta),i["a"].create(this.tipoCesta,{tipoCesta:this.tipoCesta}).then((function(){console.log(e.tipoCesta),e.$router.push("/tipos-cestas")})).catch((function(t){console.log(t),t.response&&e.$store.dispatch("setSnackbar",{showing:!0,text:t.response.data.message,timeout:8e3,color:"error"})})))}},created:function(){this.refresh()}},c=n,r=o("2877"),l=Object(r["a"])(c,a,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-515ab906.f4ae4c3b.js.map