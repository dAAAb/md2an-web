(window.webpackJsonpmd2an=window.webpackJsonpmd2an||[]).push([[0],{45:function(e,a,t){e.exports=t(69)},50:function(e,a,t){},62:function(e,a){},69:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(39),o=t.n(c),i=t(26),l=t(87),s=t(85),p=t(86),u=t(84),d=t(70),m=t(40),h=t.n(m),f=(t(50),t(51),t(54)),v=t(59),g=t(63),b=t(64),w=Object(d.a)(function(e){return{appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbar:{flexWrap:"wrap"},toolbarTitle:{flexGrow:1},link:{margin:e.spacing(1,1.5)}}}),x=function(e){var a=[],t=[],n=[],r=e.replace(/\n:::info\n[\d\D]*?\n:::\n/,"").split("###");if(t.push({heading:(e.match(/^#* (.*)/)||[])[1]}),r.map(function(e){if(/\S/.test(e))if(/\ud83c\udf10|\ud83d\udcc5|\ud83c\udfe1/.exec(e)){e.split(/\n+/).map(function(e){if(/(?=.*>)(?=.*\[)(?=.*\uff08).*/.exec(e)){var a=e.match(/\[(.*?)\]/)[1],n=e.match(/\((.*?)\)/)[1],r=e.match(/> (.*?)\[/)[1],c=e.match(/\)(.*?)\\uff09/)[0].replace(")",""),o={name:"narrative",children:[{p:{i:"".concat(r,'<a href="').concat(n,'">').concat(a,"</a>").concat(c)}}]};t.push(o)}else;})}else{var a=(e.match(/ (.*?)[:\uff1a]\n/)||[])[1];if(a)e.replace(/ (.*?)[:\uff1a]\n/,"").split(/[\r\n]{2,}/).map(function(e){if(/\S/.test(e))if(/^>/.exec(e)){var n={name:"narrative",children:[{p:{i:e.replace(/>/,"").replace(/\s+/,"")}}]};t.push(n)}else{var r={name:"speech",attrs:{by:"#"+a},children:[{p:b.decode(g(e.replace(/^[\r\n]+/,""),{smartypants:!0})).replace(/^\s*<p>\s*|\s*<\/p>\s*$/g,"")}]};if(/<a href="/.test(r.children[0].p)){var c=r.children[0].p.match(/<a href(.*?)>/)[0],o=c.replace("&","&#x26;");r.children[0].p=r.children[0].p.replace(c,o)}t.push(r)}}),n.push(a)}}),(n=h.a.uniq(n)).map(function(e){var t={name:"TLCPerson",attrs:{href:"/ontology/person/::/"+e,id:e,showAs:e}};a.push(t)}),/Office Hour_/.test(t[0].heading)){var c=t[0].heading.replace(/_[^_]*$/,"");t[0].heading=t[0].heading.replace(/.*Office Hour_/,""),t=[{heading:c},{debateSection:t}]}var o=f({akomaNtoso:{debate:{meta:{references:a},debateBody:{debateSection:t}}}},{xmlHeader:!0});return v(o)},E=function(e){return(e.match(/^#* (.*)/)||[])[1].replace(/\s/g,"-").replace(/Office-Hour_.*/,"Office-Hour")+".an.xml"};var O=function(){var e=w(),a=Object(n.useState)(""),t=Object(i.a)(a,2),c=t[0],o=t[1],d=Object(n.useState)("md2an"),m=Object(i.a)(d,2),h=m[0],f=m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(l.a,{position:"static",color:"default",elevation:0,className:e.appBar},r.a.createElement(s.a,{className:e.toolbar},r.a.createElement(p.a,{variant:"h6",color:"inherit",noWrap:!0,className:e.toolbarTitle},h))),r.a.createElement("textarea",{autoFocus:!0,id:"input",onChange:function(e){var a=x(e.target.value),t=E(e.target.value);o(a),f(t)},style:{background:"#ddd"}}),r.a.createElement("textarea",{id:"output",value:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.574c27a2.chunk.js.map