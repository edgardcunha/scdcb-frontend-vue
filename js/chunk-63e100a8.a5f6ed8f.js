(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63e100a8"],{2853:function(e,t,n){"use strict";var c=n("d4ec"),o=n("bee2"),a=n("bc3a"),i=n.n(a),r="http://localhost:8080/",s="".concat(r,"/tipos-cestas"),u=function(){function e(){Object(c["a"])(this,e)}return Object(o["a"])(e,[{key:"retrieveAll",value:function(){return i.a.get("".concat(s))}},{key:"retrieve",value:function(e){return i.a.get("".concat(s,"/").concat(e))}},{key:"remove",value:function(e){return i.a.delete("".concat(s,"/").concat(e))}},{key:"update",value:function(e,t){return i.a.put("".concat(s,"/").concat(e),t)}},{key:"create",value:function(e){return i.a.post("".concat(s),e)}}]),e}();t["a"]=new u},"82c3":function(e,t,n){"use strict";var c=n("d4ec"),o=n("bee2"),a=n("bc3a"),i=n.n(a),r="http://localhost:8080/",s="".concat(r,"/recebimentos"),u=function(){function e(){Object(c["a"])(this,e)}return Object(o["a"])(e,[{key:"retrieveAll",value:function(){return i.a.get("".concat(s))}},{key:"retrieve",value:function(e){return i.a.get("".concat(s,"/").concat(e))}},{key:"remove",value:function(e){return i.a.delete("".concat(s,"/").concat(e))}},{key:"update",value:function(e,t){return i.a.put("".concat(s,"/").concat(e),t)}},{key:"create",value:function(e){return i.a.post("".concat(s),e)}}]),e}();t["a"]=new u},a37b:function(e,t,n){"use strict";var c=n("d4ec"),o=n("bee2"),a=n("bc3a"),i=n.n(a),r="http://localhost:8080/",s="".concat(r,"/doadores"),u=function(){function e(){Object(c["a"])(this,e)}return Object(o["a"])(e,[{key:"retrieveAll",value:function(){return i.a.get("".concat(s))}},{key:"retrieve",value:function(e){return i.a.get("".concat(s,"/").concat(e))}},{key:"remove",value:function(e){return i.a.delete("".concat(s,"/").concat(e))}},{key:"update",value:function(e,t){return i.a.put("".concat(s,"/").concat(e),t)}},{key:"create",value:function(e){return i.a.post("".concat(s),e)}}]),e}();t["a"]=new u},b5a5:function(e,t,n){"use strict";var c=n("d4ec"),o=n("bee2"),a=n("bc3a"),i=n.n(a),r="http://localhost:8080/",s="".concat(r,"/instituicoes"),u=function(){function e(){Object(c["a"])(this,e)}return Object(o["a"])(e,[{key:"retrieveAll",value:function(){return i.a.get("".concat(s))}},{key:"retrieve",value:function(e){return i.a.get("".concat(s,"/").concat(e))}},{key:"remove",value:function(e){return i.a.delete("".concat(s,"/").concat(e))}},{key:"update",value:function(e,t){return i.a.put("".concat(s,"/").concat(e),t)}},{key:"create",value:function(e){return i.a.post("".concat(s),e)}}]),e}();t["a"]=new u},b7a2:function(e,t,n){"use strict";var c=n("d4ec"),o=n("bee2"),a=n("bc3a"),i=n.n(a),r="http://localhost:8080/",s="".concat(r,"/intencoes"),u=function(){function e(){Object(c["a"])(this,e)}return Object(o["a"])(e,[{key:"retrieveAll",value:function(){return i.a.get("".concat(s))}},{key:"retrieve",value:function(e){return i.a.get("".concat(s,"/").concat(e))}},{key:"remove",value:function(e){return i.a.delete("".concat(s,"/").concat(e))}},{key:"update",value:function(e,t){return i.a.put("".concat(s,"/").concat(e),t)}},{key:"create",value:function(e){return i.a.post("".concat(s),e)}}]),e}();t["a"]=new u},c945:function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form",on:{submit:function(e){e.preventDefault()}}},[n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-subheader",{staticClass:"text-center"},[e._v("Receber Cesta Básica")])],1),n("v-row",{attrs:{"align-center":"",hidden:""}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"6"}},[n("v-text-field",{attrs:{label:"Id",outlined:"",disabled:""},model:{value:this.recebimento.cdRecebimento,callback:function(t){e.$set(this.recebimento,"cdRecebimento",t)},expression:"this.recebimento.cdRecebimento"}})],1)],1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"12",md:"8",lg:"6",xl:"6"}},[n("v-combobox",{attrs:{items:e.intencoes,hint:""+e.formatedHint(this.recebimento.intencao.dtIntencao,"Data da Solicitação: "+this.recebimento.intencao.dtIntencao),"persistent-hint":"","item-text":"codigo","item-value":"cdIntencao",label:"Intenção - Código",placeholder:"Escolha a Intenção de Doar","return-object":"",dense:"",outlined:"",required:""},model:{value:e.recebimento.intencao,callback:function(t){e.$set(e.recebimento,"intencao",t)},expression:"recebimento.intencao"}})],1)],1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"6"}},[n("v-combobox",{attrs:{items:this.doadores,hint:"CPF:"+this.recebimento.intencao.doador.cpf,"persistent-hint":"","item-text":"nome","item-value":"cdUsuario",label:"Doador",placeholder:"Escolha o Doador","return-object":"",dense:"",disabled:"",outlined:"",required:""},model:{value:this.recebimento.intencao.doador,callback:function(t){e.$set(this.recebimento.intencao,"doador",t)},expression:"this.recebimento.intencao.doador"}})],1)],1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"6"}},[n("v-combobox",{attrs:{items:this.instituicoes,hint:""+e.formatedHint2,"persistent-hint":"","item-text":"nome","item-value":"cdUsuario",label:"Instituição",placeholder:"Escolha a Instituição","return-object":"",dense:"",disabled:"",outlined:"",required:""},model:{value:e.recebimento.intencao.instituicao,callback:function(t){e.$set(e.recebimento.intencao,"instituicao",t)},expression:"recebimento.intencao.instituicao"}})],1)],1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"6"}},[n("v-combobox",{attrs:{items:e.tpCestas,hint:""+e.recebimento.intencao.tpCesta.descricao,"persistent-hint":"","item-text":"nome","item-value":"id",label:"Tipo de Cesta",placeholder:"Escolha o Tipo de Cesta","return-object":"",dense:"",disabled:"",outlined:"",required:""},model:{value:e.recebimento.intencao.tpCesta,callback:function(t){e.$set(e.recebimento.intencao,"tpCesta",t)},expression:"recebimento.intencao.tpCesta"}})],1)],1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"6"}},[n("v-text-field",{attrs:{counter:150,label:"Nota Fiscal",placeholder:"Número da Nota Fiscal",dense:"",outlined:"",required:""},model:{value:e.recebimento.nfCesta,callback:function(t){e.$set(e.recebimento,"nfCesta",t)},expression:"recebimento.nfCesta"}})],1)],1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"6"}},[n("v-slider",{attrs:{type:"number",min:"1",max:"50",value:""+e.recebimento.qtdCestas,"thumb-label":"always",label:"Qtd. Cestas",dense:"",outlined:"",required:""},model:{value:e.recebimento.qtdCestas,callback:function(t){e.$set(e.recebimento,"qtdCestas",t)},expression:"recebimento.qtdCestas"}})],1)],1),n("v-row",{attrs:{align:"center",justify:"end"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"6"}},[n("v-btn",{attrs:{color:"success"},on:{click:e.save}},[e._v("Salvar")])],1)],1)],1)],1)},o=[],a=n("82c3"),i=n("a37b"),r=n("b5a5"),s=n("b7a2"),u=n("2853"),l={data:function(){return{doadores:[],instituicoes:[],intencoes:[],tpCestas:[],recebimento:{cdRecebimento:0,codigo:"",dtRecebimento:"",qtdCestas:0,nfCesta:"",intencao:{cdIntencao:0,qtdCestas:0,status:0,tpCesta:{id:0,nome:"",descricao:""},doador:{cdUsuario:0,nome:"",login:"",senha:"",cpf:"",rua:"",numCasa:"",bairro:{id:0,nome:"",cidade:{id:0,nome:"",uf:{id:0,sigla:"",nome:""}}}},instituicao:{cdUsuario:0,nome:"",senha:"",cnpj:"",rua:"",numImovel:"",bairro:{id:0,nome:"",cidade:{id:0,nome:"",uf:{id:0,sigla:"",nome:""}}}}}}}},computed:{id:function(){return this.$route.params.id},now:function(){return(new Date).toISOString()},formatedHint2:function(){return this.recebimento.intencao.instituicao.bairro.nome+" - "+this.recebimento.intencao.instituicao.bairro.cidade.nome+" - "+this.recebimento.intencao.instituicao.bairro.cidade.uf.nome}},watch:{},methods:{formatedHint:function(e,t){return e?t:""},initialize:function(){var e=this;this.id>0&&a["a"].retrieve(this.id).then((function(t){e.recebimento=t.data})),i["a"].retrieveAll().then((function(t){e.doadores=t.data})),r["a"].retrieveAll().then((function(t){e.instituicoes=t.data})),s["a"].retrieveAll().then((function(t){e.intencoes=t.data})),u["a"].retrieveAll().then((function(t){e.tpCestas=t.data}))},save:function(e){var t=this;e.preventDefault(),this.id>0?a["a"].update(this.id,this.recebimento,{id:this.id,recebimento:this.recebimento}).then((function(){t.$router.push("/recebimentos")})).catch((function(e){console.log(e),e.response&&t.$store.dispatch("setSnackbar",{showing:!0,text:e.response.data.message,timeout:8e3,color:"error"})})):(this.recebimento.dtRecebimento=this.now,this.recebimento.intencao.status=1,a["a"].create(this.recebimento,{recebimento:this.recebimento}).then((function(e){console.log(e),t.$router.push("/recebimentos")})).catch((function(e){console.log(e),e.response&&t.$store.dispatch("setSnackbar",{showing:!0,text:e.response.data.message,timeout:8e3,color:"error"})})))}},created:function(){this.initialize()}},d=l,b=n("2877"),m=Object(b["a"])(d,c,o,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-63e100a8.a5f6ed8f.js.map