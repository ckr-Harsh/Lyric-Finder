(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(8),l=t.n(r),s=t(25),o=t.n(s),i=t(31),m=t(14),u=t(32),f=t.n(u),E=t(21),d=t(10),h=t(62),p=t.n(h);var b=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:p.a,alt:"loading",style:{width:"70px",margin:"40px auto",display:"block"}}))},g=t(131),v=t(135);function k(e,a){var t=Object(n.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):a}catch(n){return console.log(n),a}})),c=Object(m.a)(t,2),r=c[0],l=c[1];return[r,function(a){try{var t=a instanceof Function?a(r):a;l(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}]}var y=function(e){var a=k("data",{}),t=Object(m.a)(a,2),r=t[0],l=t[1],s=Object(n.useState)(),u=Object(m.a)(s,2),d=u[0],h=u[1];Object(n.useEffect)((function(){p()}),[]);var p=function(){var a=Object(i.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=".concat(e.match.params.id,"&apikey=").concat("0f721c28a837fc8fd3d2d83f073539eb")).then((function(e){var a=e.data.message.body.lyrics;l(a)})).catch((function(e){h("Try again,".concat(e))}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),y=function(){return void 0===r||0===Object.keys(r).length?c.a.createElement(b,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(E.b,{to:"/"},c.a.createElement(g.a,{startIcon:c.a.createElement(v.a,null),color:"secondary",size:"small",variant:"outlined"},"Go Back")),c.a.createElement("h2",null,d),c.a.createElement("div",{className:"lyrics"},c.a.createElement("h2",{className:"song"},"Lyrics:"),c.a.createElement("p",{className:"info"},r.lyrics_body),c.a.createElement("h2",{className:"song"},"Copyright:"),c.a.createElement("p",{className:"info"},r.lyrics_copyright)))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,null))};var O=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"track"},c.a.createElement("h3",{className:"song"},e.track),c.a.createElement("h4",{className:"info"},"Album: ",e.album),c.a.createElement("h4",{className:"info"},"Artist: ",e.artist),c.a.createElement(E.b,{to:"/lyrics/".concat(e.t_id)},c.a.createElement(g.a,{color:"primary",onClick:Set},"Get Lyrics"))),c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/lyrics/:id",component:y})))},j=t(136),N=t(142);var _=function(){var e=k("res",[]),a=Object(m.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(),s=Object(m.a)(l,2),u=s[0],E=s[1],d=Object(n.useState)(),h=Object(m.a)(d,2),p=h[0],v=h[1],y=Object(n.useState)(!1),_=Object(m.a)(y,2),x=_[0],w=_[1],S=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0f721c28a837fc8fd3d2d83f073539eb",e.next=3,f.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?\n        q_track=".concat(p,"&page=1&page_size=5&s_track_rating=desc&apikey=").concat("0f721c28a837fc8fd3d2d83f073539eb")).then((function(e){r(e.data.message.body.track_list)})).catch((function(e){console.log(e),E("Try Again,".concat(e))}));case 3:console.log(p),w(""===t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(x),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header"},c.a.createElement("h2",null,c.a.createElement(j.a,null),"Enter the Name of the Song",c.a.createElement(j.a,null)),c.a.createElement("br",null),c.a.createElement("div",{className:"input"},c.a.createElement(N.a,{label:"Enter Song Name",id:"outlined-size-small",placeholder:"Enter Name of the song",onChange:function(e){v(e.target.value)},value:p,variant:"outlined",size:"small"})),c.a.createElement("div",{className:"btn"},c.a.createElement(g.a,{variant:"outlined",onClick:function(){v(""),S(),w(!0)},color:"secondary"},"Search"))),c.a.createElement("h3",null,u),c.a.createElement("div",{className:"tracks"},t.map((function(e,a){return c.a.createElement(O,{artist:e.track.artist_name,track:e.track.track_name,key:a,album:e.track.album_name,t_id:e.track.track_id})}))),x?c.a.createElement(b,null):"")},x=Object(n.createContext)();var w=function(e){var a=Object(n.useState)(),t=Object(m.a)(a,2),r=(t[0],t[1],Object(n.useState)([])),l=Object(m.a)(r,2),s=l[0],u=l[1];Object(n.useEffect)((function(){E()}),[]);var E=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0f721c28a837fc8fd3d2d83f073539eb",e.next=3,f.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?\n           page=1&page_size=10&country=us&f_has_lyrics=1&apikey=".concat("0f721c28a837fc8fd3d2d83f073539eb")).then((function(e){var a=e.data.message.body.track_list;u(a),console.log(e)})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(x.Provider,{value:[s,u]},e.children))};var S=function(){var e=Object(n.useState)(),a=Object(m.a)(e,2),t=a[0],r=(a[1],Object(n.useContext)(x)),l=Object(m.a)(r,2),s=l[0];return l[1],c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header"},c.a.createElement("h2",null,"Top 20 Tracks")),c.a.createElement("h2",null,t),c.a.createElement("div",{className:"tracks"},s.map((function(e,a){return c.a.createElement(O,{artist:e.track.artist_name,track:e.track.track_name,key:a,album:e.track.album_name,t_id:e.track.track_id})}))),""===s?c.a.createElement(b,null):"")},F=t(137),C=t(143),T=t(139),z=t(138),I=t(140),J=t(141);t(99);var A=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"LyricFinder",c.a.createElement("span",{className:"git"},c.a.createElement("a",{href:"https://github.com/ckr-Harsh"},c.a.createElement(z.a,{className:"github"})))),c.a.createElement("nav",null,c.a.createElement(F.a,{square:!0,className:"navbar"},c.a.createElement(C.a,{variant:"fullWidth",indicatorColor:"secondary",textColor:"secondary",centered:!0},c.a.createElement(E.c,{to:"/",exact:!0,activeClassName:"active"},c.a.createElement(T.a,{icon:c.a.createElement(I.a,null),label:"Top Tracks"})),c.a.createElement(E.c,{to:"/search",exact:!0,activeClassName:"active"},c.a.createElement(T.a,{icon:c.a.createElement(J.a,null),label:"Search"}))))),c.a.createElement("div",{className:"router"},c.a.createElement(d.c,null,c.a.createElement(d.a,{active:!0,exact:!0,path:"/",component:S}),c.a.createElement(d.a,{exact:!0,path:"/search",component:_}),c.a.createElement(d.a,{path:"/lyrics/:id",component:y}))))};var L=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,null,c.a.createElement(w,null,c.a.createElement(A,null))))};t(100);l.a.render(c.a.createElement(L,null),document.getElementById("root"))},62:function(e,a,t){e.exports=t.p+"static/media/triangle.894673b4.gif"},71:function(e,a,t){e.exports=t(101)},99:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.3a57ea0c.chunk.js.map