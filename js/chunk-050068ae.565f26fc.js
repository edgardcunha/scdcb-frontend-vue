(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-050068ae"],{"5b39":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h3",{staticClass:"text-center"},[t._v("UF")]),a("div",{staticClass:"container"},[a("form",{on:{submit:t.save}},[t.errors.length?a("div",t._l(t.errors,(function(e,s){return a("div",{key:s,staticClass:"alert alert-warning"},[t._v(t._s(e))])})),0):t._e(),a("fieldset",{staticClass:"form-group"},[a("label",[t._v("Id")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.uf.id,expression:"uf.id"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.uf.id},on:{input:function(e){e.target.composing||t.$set(t.uf,"id",e.target.value)}}})]),a("fieldset",{staticClass:"form-group"},[a("label",[t._v("Sigla")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.uf.sigla,expression:"uf.sigla"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.uf.sigla},on:{input:function(e){e.target.composing||t.$set(t.uf,"sigla",e.target.value)}}})]),a("fieldset",{staticClass:"form-group"},[a("label",[t._v("Nome")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.uf.nome,expression:"uf.nome"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.uf.nome},on:{input:function(e){e.target.composing||t.$set(t.uf,"nome",e.target.value)}}})]),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Salvar")])])])])},n=[],o=a("a999"),r={name:"UF",data:function(){return{uf:{},errors:[]}},computed:{id:function(){return this.$route.params.id}},methods:{refresh:function(){var t=this;this.id>0&&o["a"].retrieve(this.id).then((function(e){t.uf=e.data}))},save:function(t){var e=this;t.preventDefault(),this.id>0?o["a"].update(this.id,this.uf,{id:this.id,uf:this.uf}).then((function(){e.$router.push("/ufs")})).catch((function(t){console.log(t),t.response&&e.$store.dispatch("setSnackbar",{showing:!0,text:t.response.data.message,timeout:8e3,color:"error"})})):o["a"].create(this.uf,{uf:this.uf}).then((function(){e.$router.push("/ufs")})).catch((function(t){console.log(t),t.response&&e.$store.dispatch("setSnackbar",{showing:!0,text:t.response.data.message,timeout:8e3,color:"error"})}))}},created:function(){this.refresh()}},i=r,u=a("2877"),c=Object(u["a"])(i,s,n,!1,null,null,null);e["default"]=c.exports},a999:function(t,e,a){"use strict";var s=a("d4ec"),n=a("bee2"),o=a("bc3a"),r=a.n(o),i="http://localhost:8080/",u="".concat(i,"/ufs"),c=function(){function t(){Object(s["a"])(this,t)}return Object(n["a"])(t,[{key:"retrieveAll",value:function(){return r.a.get("".concat(u))}},{key:"retrieve",value:function(t){return r.a.get("".concat(u,"/").concat(t))}},{key:"remove",value:function(t){return r.a.delete("".concat(u,"/").concat(t))}},{key:"update",value:function(t,e){return r.a.put("".concat(u,"/").concat(t),e)}},{key:"create",value:function(t){return r.a.post("".concat(u),t)}}]),t}();e["a"]=new c}}]);
//# sourceMappingURL=chunk-050068ae.565f26fc.js.map