(this["webpackJsonpcovid-generator"]=this["webpackJsonpcovid-generator"]||[]).push([[0],{22:function(n,t,e){},38:function(n,t,e){"use strict";e.r(t);var i=e(1),r=e(0),o=e.n(r),a=e(13),c=e.n(a),d=(e(22),e(4)),x=e(2),s=e(3),l=e.p+"static/media/data.4c03ce01.tsv",u=null,p=new XMLHttpRequest;function m(n){for(var t=n.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),i=[n[e],n[t]];n[t]=i[0],n[e]=i[1]}}function h(n,t,e){for(var i=(t+=1)-n,r=[],o=n;o<t;o++)r=r.concat(e[o]);m(r);for(var a=[],c=0;c<i;c++){var d=Math.floor(Math.random()*(r.length-1));a.push(r.splice(d,1))}return a}function f(n,t){var e=t[n],i=e.length;return m(e),e[Math.floor(Math.random()*(i-1))]}function b(){var n={},t=h(0,3,u),e=Object(d.a)(t,4);n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=f(4,u),n[5]=f(5,u),n[6]=function(){var n=Math.random();return n<=.25?"zwolnione z kwarantanny":(n=Math.random(),"zobowi\u0105zane do odbycia kwarantanny przez "+(7+Math.floor(7*n))+" dni")}(),n[7]=f(7,u);var i=h(8,11,u),r=Object(d.a)(i,4);n[8]=r[0],n[9]=r[1],n[10]=r[2],n[11]=r[3];var o,a,c=h(12,16,u),x=Object(d.a)(c,5);n[12]=x[0],n[13]=x[1],n[14]=x[2],n[15]=x[3],n[16]=x[4],n[17]=f(17,u),n[18]=f(18,u),n[19]=(o=n[18],a=f(19,u),o.includes("zamkni\u0119te")?".":", pod warunkiem ".concat(a,".")),n[20]=f(20,u),n[21]=f(21,u),n[22]=f(22,u),n[23]=f(23,u),n[24]=f(24,u),n[25]=f(25,u);var s,l=h(26,27,u),p=Object(d.a)(l,2);return n[26]=p[0],n[27]=p[1],n[28]=f(28,u),n[29]=f(29,u),n[30]=f(30,u),n[31]=f(31,u),n[32]=(s=n[31],Math.floor(60*Number(s)/100)),n.meta={},n.meta[7]=(Number(n[7])%10).between(2,4)?["mog\u0105","osoby"]:["mo\u017ce","os\xf3b"],n}p.open("GET",l,!0),p.onload=function(){if(4===p.readyState)if(200===p.status){u=p.responseText.replace(/[\r]+/g,"").split("\n").filter((function(n){return n}));for(var n=0;n<u.length;n++)u[n]=u[n].split("\t").filter((function(n){return n}))}else console.error(p.statusText)},p.send(null),Number.prototype.between=function(n,t){return n<=this&&this<=t};var w=e(5),j=e.n(w),g={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:2e3,xxxl:3e3};function z(){var n=Object(x.a)(["\n  margin-top: 1rem;\n  padding: 0.3rem;\n  background-color: white;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-size: 10px;\n  font-style: italic;\n  border-top: 1px solid;\n  border-color: red;\n  clear: both;\n  text-align: center;\n  width: 100vw;\n  flex-shrink: 0;\n"]);return z=function(){return n},n}function v(){var n=Object(x.a)(["\n  background-color: white;\n  color: rgb(4, 59, 116);\n  border: 3px solid;\n  border-radius: 4px;\n  font-size: 18px;\n  font-weight: bold;\n  min-width: 150px;\n  max-width: 150px;\n  min-height: 30px;\n  max-height: 30px;\n  margin: 10px;\n  &:hover {\n    background-color: rgb(4, 59, 116);\n    color: white;\n    border-radius: 10px;\n  }\n  cursor: pointer;\n  @media (min-width: ","px) {\n    font-size: 30px;\n    min-width: 250px;\n    max-width: 250px;\n    min-height: 60px;\n    max-height: 60px;\n  }\n"]);return v=function(){return n},n}function O(){var n=Object(x.a)(["\n  margin: 10px 0;\n  @media (min-width: ","px) {\n    margin: 16px 0;\n  }\n  @media (min-width: ","px) {\n    margin: 20px 0;\n  }\n  @media (min-width: ","px) {\n    margin: 28px 0;\n  }\n"]);return O=function(){return n},n}function y(){var n=Object(x.a)(["\n  list-style-position: inside;\n  padding-left: 0;\n  margin: 0;\n  @media (min-width: ","px) {\n    padding-left: 1.5em;\n    list-style-position: outside;\n  }\n  @media (min-width: ","px) {\n    font-size: 20px;\n  }\n  @media (min-width: ","px) {\n    font-size: 30px;\n  }\n"]);return y=function(){return n},n}function k(){var n=Object(x.a)(["\n  font-size: 18px;\n  width: 100%;\n  margin-top: 20px;\n  @media (min-width: ","px) {\n    margin-top: 30px;\n    margin-bottom: 15px;\n  }\n  @media (min-width: ","px) {\n    margin-top: 45px;\n    font-size: 24px;\n  }\n  @media (min-width: ","px) {\n    margin-top: 60px;\n    font-size: 36px;\n  }\n"]);return k=function(){return n},n}function M(){var n=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1 0 auto;\n  width: 90vw;\n  @media (min-width: ","px) {\n    width: 600px;\n  }\n  @media (min-width: ","px) {\n    width: 750px;\n  }\n  @media (min-width: ","px) {\n    width: 900px;\n  }\n  @media (min-width: ","px) {\n    width: 1400px;\n  }\n"]);return M=function(){return n},n}function F(){var n=Object(x.a)(["\n  margin: 6px;\n  font-size: 16px;\n  @media (min-width: ","px) {\n    font-size: 20px;\n  }\n  @media (min-width: ","px) {\n    font-size: 28px;\n  }\n  @media (min-width: ","px) {\n    font-size: 36px;\n  }\n"]);return F=function(){return n},n}function B(){var n=Object(x.a)(["\n  margin: 6px;\n  font-size: 24px;\n  max-width: 300px;\n  @media (min-width: ","px) {\n    max-width: 90vw;\n    font-size: 36px;\n  }\n  @media (min-width: ","px) {\n    font-size: 56px;\n  }\n  @media (min-width: ","px) {\n    font-size: 72px;\n  }\n"]);return B=function(){return n},n}function S(){var n=Object(x.a)(["\n  position: absolute;\n  color: white;\n  font-weight: bold;\n  max-width: 100vw;\n  width: 100vw;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n"]);return S=function(){return n},n}function I(){var n=Object(x.a)(["\n  height: 100%;\n"]);return I=function(){return n},n}function P(){var n=Object(x.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  // justify-content: center;\n  align-items: center;\n  height: 150px;\n  @media (min-width: ","px) {\n    height: 200px;\n  }\n  @media (min-width: ","px) {\n    height: 300px;\n  }\n  @media (min-width: ","px) {\n    height: 400px;\n  }\n"]);return P=function(){return n},n}function T(){var n=Object(x.a)(["\n  background-color: rgb(255, 198, 5);\n  width: 100vw;\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  font-weight: bold;\n  @media (min-width: ","px) {\n    padding-left: 30px;\n  }\n  @media (min-width: ","px) {\n    font-size: 18px;\n  }\n  @media (min-width: ","px) {\n    font-size: 26px;\n  }\n"]);return T=function(){return n},n}function C(){var n=Object(x.a)(['\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: "Open Sans", sans-serif;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n']);return C=function(){return n},n}var E=s.a.div(C()),L=s.a.div(T(),g.lg,g.xxl,g.xxxl),N=s.a.div(P(),g.md,g.xxl,g.xxxl),W=s.a.img(I()),D=s.a.div(S()),R=s.a.div(B(),g.md,g.xxl,g.xxxl),G=s.a.p(F(),g.md,g.xxl,g.xxxl),J=s.a.div(M(),g.md,g.lg,g.xxl,g.xxxl),H=s.a.h2(k(),g.md,g.xxl,g.xxxl),K=s.a.ul(y(),g.md,g.xxl,g.xxxl),V=s.a.li(O(),g.lg,g.xxl,g.xxxl),q=s.a.button(v(),g.xxxl),U=s.a.div(z());function X(n){for(var t,e,i=n.length;0!==i;)e=Math.floor(Math.random()*i),t=n[i-=1],n[i]=n[e],n[e]=t;return n}var Z=function(n){var t=Object(r.useState)(null),e=Object(d.a)(t,2),o=e[0],a=e[1],c=[function(n){return Object(i.jsxs)(V,{children:["Wszystkie osoby przybywaj\u0105ce do Polski z ",n[4]," ",n[5]," s\u0105 ",n[6],"."]})},function(n){return Object(i.jsxs)(V,{children:["Restauracje i bary s\u0105 ",n[18],n[19]]})},function(n){return Object(i.jsxs)(V,{children:["\u017b\u0142obki i przedszkola s\u0105 ",n[25],"."]})},function(n){return Object(i.jsxs)(V,{children:["W godzinach ",n[29]," zakupy mog\u0105 robi\u0107 tylko osoby ",n[30],"."]})},function(n){return Object(i.jsxs)(V,{children:["W autobusach mo\u017ce by\u0107 zaj\u0119te max. ",n[32]," miejsc siedz\u0105cych (lub ",n[31],"% wszystkich miejsc)."]})}],x=[function(n){return Object(i.jsxs)(V,{children:["Hotele dost\u0119pne s\u0105 tylko dla ",n[0],", ",n[1],", ",n[2]," oraz ",n[3],"."]})},function(n){return Object(i.jsxs)(V,{children:["W zgromadzeniach ",n.meta[7][0]," uczestniczy\u0107 maksymalnie ",n[7]," ",n.meta[7][1]," (nie dotyczy ",n[8]," oraz ",n[9],")."]})},function(n){return Object(i.jsxs)(V,{children:["Obowi\u0105zuje zakaz organizacji ",n[10]," oraz ",n[11],"."]})},function(n){return Object(i.jsxs)(V,{children:["W ",n[26]," i ",n[27]," mo\u017ce przebywa\u0107 maksymalnie jedna osoba na ",n[28]," m kw. pomieszczenia."]})},function(n){return Object(i.jsxs)(V,{children:["Nauka zdalna w klasach ",n[20]," szk\xf3\u0142 podstawowych, ",n[21],", oraz ",n[22],", za wyj\u0105tkiem ",n[23]," (chyba, \u017ce ",n[24],")."]})},function(n){return Object(i.jsxs)(V,{children:["Zamkni\u0119te s\u0105 ",n[12],", ",n[13]," i ",n[14],". Otwarte zostan\u0105 ",n[15]," oraz ",n[16],", ale wy\u0142\u0105cznie w ",n[17],"."]})}],s=(new Date).toLocaleDateString("pl-PL",{day:"numeric",month:"long",year:"numeric"}),l=X(c),u=[].concat(x,[l[0],l[1]]);return n.breakpoints,n.currentBreakpoint,Object(i.jsxs)(E,{children:[Object(i.jsx)(L,{id:"topBar",children:"Koronawirus: wa\u017cne informacje"}),Object(i.jsxs)(N,{children:[Object(i.jsx)(W,{src:"logo.jpg"}),Object(i.jsxs)(D,{children:[Object(i.jsx)(R,{children:"Generator obostrze\u0144 COVID-19"}),Object(i.jsx)(w.Media,{children:function(n){var t=n.breakpoints,e=n.currentBreakpoint;return console.log(t[e]),t[e]>=t.sm?Object(i.jsx)(G,{children:"Sprawd\u017a, co dzisiaj wolno, a czego nie"}):Object(i.jsx)(i.Fragment,{})}})]})]}),Object(i.jsxs)(J,{children:[Object(i.jsxs)(H,{children:["Kancelaria Prezesa Rady Ministr\xf3w informuje, \u017ce od ",s," roku:"]}),o&&Object(i.jsx)(K,{children:X(u).map((function(n){return n(o)}))}),Object(i.jsx)(q,{onClick:function(){a(b()),document.getElementById("topBar").scrollIntoView()},children:"GENERUJ"})]}),Object(i.jsxs)(U,{children:["Ta strona to ",Object(i.jsx)("b",{children:"\u017cart"}),". Po prawdziwe informacje na temat obostrze\u0144 udaj si\u0119 ",Object(i.jsx)("a",{href:"https://www.gov.pl/web/koronawirus",children:"tutaj"}),". Ikony dzi\u0119ki ",Object(i.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," przez ",Object(i.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})},A=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,39)).then((function(t){var e=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;e(n),i(n),r(n),o(n),a(n)}))};c.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(j.a,{breakpoints:g,children:Object(i.jsx)(Z,{})})}),document.getElementById("root")),A()}},[[38,1,2]]]);
//# sourceMappingURL=main.356b515c.chunk.js.map