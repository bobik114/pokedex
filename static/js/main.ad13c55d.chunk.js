(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/pokeball.8e1cb718.png"},,,,,,,function(e,a,t){e.exports=t(27)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(7),r=t.n(l),s=(t(16),function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark"},c.a.createElement("a",{className:"navbar-brand col-sm-3 col-md-2",href:"/pokedex"},"Pokedex"))}),o=(t(17),t(18),t(1)),m=t(10),i=t(8),u=(t(19),function(e){return e.length?e.charAt(0).toUpperCase()+e.slice(1):e}),p=t(4),E=t.n(p),f=function(e){var a=Object(n.useState)(null),t=Object(o.a)(a,2),l=t[0],r=t[1];Object(n.useEffect)((function(){fetch("".concat(e.pokeUrl)).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[e]);var s;return c.a.createElement("div",{className:"col-sm-6 col-lg-3 my-3",onClick:function(){e.clickPokemon(l)}},c.a.createElement("div",{className:"card pointer"},null===l?c.a.createElement("h5",null,"Trwa \u0142adowanie pokemona"):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card-header"},c.a.createElement("h5",null,u(l.name))),c.a.createElement("div",{className:"card-body"},c.a.createElement("img",{alt:"#",src:(s=l.sprites.front_default,s||E.a)})))))},d=t(9),b=t.n(d),g=function(e){switch(e){case"normal":return 1;case"fighting":return 2;case"flying":return 3;case"poison":return 4;case"ground":return 5;case"rock":return 6;case"bug":return 7;case"ghost":return 8;case"steel":return 9;case"fire":return 10;case"water":return 11;case"grass":return 12;case"electric":return 13;case"psychic":return 14;case"ice":return 15;case"dragon":return 16;case"dark":return 17;case"fairy":return 18;default:return 1}},v=(t(25),function(e){var a=[],t=Object(n.useState)(8),l=Object(o.a)(t,2),r=l[0],s=l[1],u=Object(n.useState)(null),p=Object(o.a)(u,2),E=p[0],d=p[1],v=Object(n.useState)(null),h=Object(o.a)(v,2),N=h[0],k=h[1],j=Object(n.useState)(""),O=Object(o.a)(j,2),y=O[0],w=O[1],x=Object(n.useState)(null),C=Object(o.a)(x,2),S=C[0],P=C[1],_=Object(n.useState)(null),F=Object(o.a)(_,2),L=F[0],D=F[1],B=Object(n.useState)(0),M=Object(o.a)(B,2),T=M[0],U=M[1],W=Object(n.useState)(0),A=Object(o.a)(W,2),H=A[0],I=A[1],J=Object(n.useState)(!1),R=Object(o.a)(J,2),G=R[0],$=R[1],q="https://pokeapi.co/api/v2/pokemon?limit=".concat(r,"&offset="),z="https://pokeapi.co/api/v2/type/".concat(g(S));function K(){fetch(q+T*r).then((function(e){return e.json()})).then((function(e){d(e.results),I(Math.ceil(807/r))}))}Object(n.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon?limit=807").then((function(e){return e.json()})).then((function(e){k(e.results),I(Math.ceil(807/r))}))}),[]),Object(n.useEffect)((function(){K()}),[T,r]),Object(n.useEffect)((function(){if(L){var e,t=Object(i.a)(L);try{for(t.s();!(e=t.n()).done;){var n=e.value;a=[].concat(Object(m.a)(a),[n.pokemon])}}catch(c){t.e(c)}finally{t.f()}d(a)}}),[L]),Object(n.useEffect)((function(){S&&fetch(z).then((function(e){return e.json()})).then((function(e){D(e.pokemon)}))}),[S]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row  my-2"},c.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""!==y){if(!E)return;var a=new RegExp("w*".concat(y,"w*"),"i"),t=N.filter((function(e){return a.test(e.name)}));d(t),$(!0)}else K(),$(!1)},className:"form-inline  col-xl-4 input-group my-1"},c.a.createElement("input",{onChange:function(e){w(e.target.value)},type:"text",className:"form-control",value:y}),c.a.createElement("input",{type:"submit",className:"btn btn-primary ",value:"Search"})),c.a.createElement("form",{className:"form-inline col-md-3 my-1"},c.a.createElement("label",{htmlFor:"types",className:"type-label"},"Type:"),c.a.createElement("select",{onChange:function(e){P(e.target.value),$(!0)},id:"types",className:"form-control pointer"},["normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","physic","ice","dragon","dark","fairy"].map((function(e,a){return c.a.createElement("option",{key:a,value:e},e)})))),G?null:c.a.createElement("form",{className:"form-inline col-md-5 my-1"},c.a.createElement("label",{htmlFor:"pokemons-per-page",className:"per-page-label"},"Pokemons per page:"),c.a.createElement("select",{onChange:function(e){s(e.target.value)},id:"pokemons-per-page",className:"form-control pointer"},c.a.createElement("option",{value:8},"8"),c.a.createElement("option",{value:16},"16"),c.a.createElement("option",{value:24},"24"),c.a.createElement("option",{value:40},"40"),c.a.createElement("option",{value:100},"100")))),c.a.createElement("div",{className:"row"},null===E?c.a.createElement("h1",null,"Trwa \u0142adowanie pokemon\xf3w"):c.a.createElement(c.a.Fragment,null,E.map((function(a,t){return c.a.createElement(f,{clickPokemon:e.clickPokemon,key:t,pokeUrl:a.url})})))),c.a.createElement("div",{className:"row"},c.a.createElement("nav",{"aria-label":"Page navigation example",className:"mx-auto pointer"},G?null:c.a.createElement(b.a,{pageCount:H,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:function(e){U(e.selected)},previousLabel:"previous",nextLabel:"next",breakLabel:"...",pageClassName:"page-item",pageLinkClassName:"page-link",nextClassName:"page-item next-item",nextLinkClassName:"page-link",previousClassName:"page-item prev-item",previousLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"page-item active"}))))}),h=(t(26),function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 col-md-10 my-5 mx-auto"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header justify-content-center"},c.a.createElement("h1",null,u(e.pokeObject.name))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 col-md-6 mx-auto"},c.a.createElement("img",{alt:"#",src:(a=e.pokeObject.sprites.front_default,a||E.a)})),c.a.createElement("div",{className:"col-12 col-md-6 mx-auto"},c.a.createElement("div",{className:"row mx-5 my-2 justify-content-center"},c.a.createElement("h2",null,"Data")),c.a.createElement("div",{className:"row mx-5 my-2"},c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-right"},"ID:")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-left"},e.pokeObject.id)),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-right"},"Height:")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-left"},e.pokeObject.height/10," m")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-right"},"Weight:")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-left"},e.pokeObject.weight/10," kg")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-right"},"Experience:")),c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-left"},e.pokeObject.base_experience," xp"))),c.a.createElement("div",{className:"row mx-5 my-2 justify-content-center"},c.a.createElement("h2",null,"Stats")),c.a.createElement("div",{className:"row mx-5 my-1"},c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-right"},"HP")),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"progress"},c.a.createElement("div",{className:"progress-bar ",role:"progressbar",style:{width:"".concat(e.pokeObject.stats[5].base_stat,"%"),backgroundColor:"red"}},c.a.createElement("small",null,e.pokeObject.stats[5].base_stat))))),c.a.createElement("div",{className:"row mx-5 my-1"},c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-right"},"Attack")),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"progress"},c.a.createElement("div",{className:"progress-bar ",role:"progressbar",style:{width:"".concat(e.pokeObject.stats[4].base_stat,"%"),backgroundColor:"red"}},c.a.createElement("small",null,e.pokeObject.stats[4].base_stat))))),c.a.createElement("div",{className:"row mx-5 my-1"},c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-right"},"Deffence")),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"progress"},c.a.createElement("div",{className:"progress-bar ",role:"progressbar",style:{width:"".concat(e.pokeObject.stats[3].base_stat,"%"),backgroundColor:"red"}},c.a.createElement("small",null,e.pokeObject.stats[3].base_stat))))),c.a.createElement("div",{className:"row mx-5 my-1"},c.a.createElement("div",{className:"col-6"},c.a.createElement("h6",{className:"float-right"},"Speed")),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"progress"},c.a.createElement("div",{className:"progress-bar ",role:"progressbar",style:{width:"".concat(e.pokeObject.stats[0].base_stat,"%"),backgroundColor:"red"}},c.a.createElement("small",null,e.pokeObject.stats[0].base_stat)))))))))));var a}),N=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),m=s[0],i=s[1],u=function(){i(!1)};return c.a.createElement(c.a.Fragment,null,m?c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{pokeObject:t,clickBack:u}),c.a.createElement("button",{className:"btn btn-primary",onClick:u},"Go Back to Pokemon List")):c.a.createElement(v,{clickPokemon:function(e){l(e),i(!0)}}))};var k=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null),c.a.createElement("div",{className:"container"},c.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.ad13c55d.chunk.js.map