(function(t){function e(e){for(var r,i,l=e[0],a=e[1],u=e[2],p=0,f=[];p<l.length;p++)i=l[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);c&&c(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,l=1;l<n.length;l++){var a=n[l];0!==o[a]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=a;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/persons"}},[t._v("Persons")])],1),n("router-view")],1)},s=[],i=n("2877"),l={},a=Object(i["a"])(l,o,s,!1,null,null,null);a.options.__file="App.vue";var u=a.exports,c=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"controls"},[n("button",{on:{click:t.onClick}},[t._v(t._s(t.status))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"search title"},domProps:{value:t.search},on:{keyup:t.onSearchChange,input:function(e){e.target.composing||(t.search=e.target.value)}}})]),n("Films",{attrs:{films:t.filteredFilms}})],1)},f=[],d=(n("6762"),n("2fdb"),n("c93e")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"films"},t._l(t.films,function(t,e){return n("Film",{key:e,attrs:{film:t}})}))},v=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"film"},[n("h3",[t._v(t._s(t.film.title))]),n("div",{staticClass:"desc"},[t._v("\n    "+t._s(t._f("truncate")(t.film.opening_crawl,150))+"\n  ")])])},_=[],b={props:["film"]},g=b,x=Object(i["a"])(g,h,_,!1,null,null,null);x.options.__file="Film.vue";var P=x.exports,y={components:{Film:P},props:["films"]},j=y,w=Object(i["a"])(j,m,v,!1,null,null,null);w.options.__file="Films.vue";var $=w.exports,O={methods:{clearStr:function(t){return console.log(t),t.trim().toLowerCase()}}},k=n("2f62"),C={name:"home",mixins:[O],data:function(){return{search:"",filtered:null}},components:{Films:$},computed:{status:function(){return this.$store.state.status},films:function(){return this.$store.state.films},filteredFilms:function(){return this.filtered||this.films}},methods:Object(d["a"])({},Object(k["b"])({onClick:"loadFilms"}),{onSearchChange:function(t){var e=this;this.filtered=this.films.filter(function(n){return e.clearStr(n.title).includes(e.clearStr(t.target.value))})}})},S=C,E=Object(i["a"])(S,p,f,!1,null,null,null);E.options.__file="Home.vue";var F=E.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"persons"},[n("div",{staticClass:"controls"},[t.isPrevExist?n("button",{on:{click:t.onPrev}},[t._v("prev")]):t._e(),n("button",{on:{click:t.onClick}},[t._v(t._s(t.status))]),t.isNextExist?n("button",{on:{click:t.onNext}},[t._v("next")]):t._e()]),n("People")],1)},N=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"people"},t._l(t.people,function(e,r){return n("div",{key:r,staticClass:"human",attrs:{human:e}},[n("div",[t._v(t._s(e.name))])])}))},T=[],B={computed:{people:function(){return this.$store.state.people}}},H=B,J=Object(i["a"])(H,M,T,!1,null,null,null);J.options.__file="People.vue";var A=J.exports,L={name:"Persons",components:{People:A},computed:{status:function(){return this.$store.state.status},isPrevExist:function(){return Boolean(this.$store.state.peopleData.previous)},isNextExist:function(){return Boolean(this.$store.state.peopleData.next)}},methods:{onClick:function(t){console.log(t.target),t.target.disabled=!0,this.$store.dispatch("loadPeople")},onPrev:function(){this.$store.dispatch("loadPeople",{url:this.$store.state.peopleData.previous})},onNext:function(){this.$store.dispatch("loadPeople",{url:this.$store.state.peopleData.next})}}},q=L,z=Object(i["a"])(q,D,N,!1,null,null,null);z.options.__file="Persons.vue";var G=z.exports;r["a"].use(c["a"]);var I=new c["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:F,exact:!0},{path:"/persons",name:"persons",component:G}]});r["a"].use(k["a"]);var K=new k["a"].Store({state:{status:"load data",films:[],people:[],peopleData:{}},mutations:{filmsPending:function(t){return t.status="pending..."},filmsSuccess:function(t,e){t.status="data loaded",t.films=e.results},filmsError:function(t){t.status="error in data loading"},peoplePending:function(t){return t.status="pending..."},peopleSuccess:function(t,e){t.status="data loaded",t.peopleData=e,t.people=e.results},peopleError:function(t){t.status="error in data loading"}},actions:{loadFilms:function(t){var e=t.commit;e("filmsPending"),fetch("https://swapi.co/api/films").then(function(t){return t.json()}).then(function(t){return e("filmsSuccess",t)}).catch(function(t){return e("filmsError",t)})},loadPeople:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e("peoplePending"),fetch(n.url||"https://swapi.co/api/people").then(function(t){return t.json()}).then(function(t){return e("peopleSuccess",t)}).catch(function(t){return e("peopleError",t)})}}});n("f27b");r["a"].config.productionTip=!1,r["a"].filter("truncate",function(t,e,n){return t.slice(0,e)+(e<t.length?n||"...":"")}),new r["a"]({router:I,store:K,render:function(t){return t(u)}}).$mount("#app")},f27b:function(t,e,n){}});
//# sourceMappingURL=app.f2eca5a7.js.map