(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(8),l=t.n(r),s=t(25),o=t.n(s),m=t(31),i=t(12),u=t(32),f=t.n(u),E=t(21),p=t(10),d=t(62),h=t.n(d);var b=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:h.a,alt:"loading",style:{width:"70px",margin:"40px auto",display:"block"}}))},g=Object(n.createContext)(),v=Object(n.createContext)();var k=function(e){var a=Object(n.useState)(),t=Object(i.a)(a,2),r=t[0],l=t[1],s=Object(n.useState)([]),u=Object(i.a)(s,2),E=u[0],p=u[1];Object(n.useEffect)((function(){d()}),[]);var d=function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0f721c28a837fc8fd3d2d83f073539eb",e.next=3,f.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?\n           page=1&page_size=10&country=us&f_has_lyrics=1&apikey=".concat("0f721c28a837fc8fd3d2d83f073539eb")).then((function(e){var a=e.data.message.body.track_list;p(a),console.log(e)})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(g.Provider,{value:[E,p]},c.a.createElement(v.Provider,{value:[r,l]},e.children)))},y=t(132),j=t(136);var O=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(),s=Object(i.a)(l,2),u=s[0],p=s[1],d=Object(n.useContext)(v),h=Object(i.a)(d,2),g=h[0],k=(h[1],Object(n.useState)(!0)),O=Object(i.a)(k,2),N=O[0],_=O[1];Object(n.useEffect)((function(){x()}),[]);var x=function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=".concat(g,"&apikey=").concat("0f721c28a837fc8fd3d2d83f073539eb")).then((function(e){var a=[e.data.message.body.lyrics];console.log(a),r(a),t.lyrics_body===[""]?_(!0):_(!1)})).catch((function(e){console.log(e),p("Try again,".concat(e))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.b,{to:"/"},c.a.createElement(y.a,{"aria-label":"delete",color:"secondary"},c.a.createElement(j.a,null))),c.a.createElement("h2",null,u),c.a.createElement("div",null),N?c.a.createElement(b,null):t.map((function(e){return c.a.createElement("div",{className:"lyrics"},c.a.createElement("h2",{className:"song"},"Lyrics:"),c.a.createElement("p",{className:"info"},e.lyrics_body),c.a.createElement("h4",{className:"song"},"Copyright:"),c.a.createElement("p",{className:"info"},e.lyrics_copyright))})))},N=t(137);var _=function(e){var a=Object(n.useContext)(v),t=Object(i.a)(a,2),r=(t[0],t[1]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"track"},c.a.createElement("h3",{className:"song"},e.track),c.a.createElement("h4",{className:"info"},"Album: ",e.album),c.a.createElement("h4",{className:"info"},"Artist: ",e.artist),c.a.createElement(E.b,{to:"/lyrics"},c.a.createElement(N.a,{color:"primary",onClick:function(){r(e.t_id)}},"Get Lyrics"))),c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/lyrics",component:O})))},x=t(138),w=t(144);var S=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(),s=Object(i.a)(l,2),u=s[0],E=s[1],p=Object(n.useState)(),d=Object(i.a)(p,2),h=d[0],g=d[1],v=Object(n.useState)(!1),k=Object(i.a)(v,2),y=k[0],j=k[1],O=function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0f721c28a837fc8fd3d2d83f073539eb",e.next=3,f.a.get("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?\n        q_track=".concat(h,"&page=1&page_size=5&s_track_rating=desc&apikey=").concat("0f721c28a837fc8fd3d2d83f073539eb")).then((function(e){r(e.data.message.body.track_list)})).catch((function(e){console.log(e),E("Try Again,".concat(e))}));case 3:console.log(h),j(""===t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(y),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header"},c.a.createElement("h2",null,c.a.createElement(x.a,null),"Enter the Name of the Song",c.a.createElement(x.a,null)),c.a.createElement("br",null),c.a.createElement("div",{className:"input"},c.a.createElement(w.a,{label:"Enter Song Name",id:"outlined-size-small",placeholder:"Enter Name of the song",onChange:function(e){g(e.target.value)},value:h,variant:"outlined",size:"small"})),c.a.createElement("div",{className:"btn"},c.a.createElement(N.a,{variant:"outlined",onClick:function(){g(""),O(),j(!0)},color:"secondary"},"Search"))),c.a.createElement("h3",null,u),c.a.createElement("div",{className:"tracks"},t.map((function(e,a){return c.a.createElement(_,{artist:e.track.artist_name,track:e.track.track_name,key:a,album:e.track.album_name,t_id:e.track.track_id})}))),y?c.a.createElement(b,null):"")};var C=function(){var e=Object(n.useState)(),a=Object(i.a)(e,2),t=a[0],r=(a[1],Object(n.useContext)(g)),l=Object(i.a)(r,2),s=l[0];return l[1],c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header"},c.a.createElement("h2",null,"Top 20 Tracks")),c.a.createElement("h2",null,t),c.a.createElement("div",{className:"tracks"},s.map((function(e,a){return c.a.createElement(_,{artist:e.track.artist_name,track:e.track.track_name,key:a,album:e.track.album_name,t_id:e.track.track_id})}))),""===s?c.a.createElement(b,null):"")},F=t(139),T=t(145),z=t(141),A=t(140),L=t(142),q=t(143);t(99);var J=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"LyricFinder",c.a.createElement("span",{className:"git"},c.a.createElement("a",{href:"https://github.com/ckr-Harsh"},c.a.createElement(A.a,{className:"github"})))),c.a.createElement("nav",null,c.a.createElement(F.a,{square:!0,className:"navbar"},c.a.createElement(T.a,{variant:"fullWidth",indicatorColor:"secondary",textColor:"secondary",centered:!0},c.a.createElement(E.c,{to:"/",exact:!0,activeClassName:"active"},c.a.createElement(z.a,{icon:c.a.createElement(L.a,null),label:"Top Tracks"})),c.a.createElement(E.c,{to:"/search",exact:!0,activeClassName:"active"},c.a.createElement(z.a,{icon:c.a.createElement(q.a,null),label:"Search"}))))),c.a.createElement("div",{className:"router"},c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:"/",component:C}),c.a.createElement(p.a,{exact:!0,path:"/search",component:S}),c.a.createElement(p.a,{path:"/lyrics",component:O}))))};var P=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,null,c.a.createElement(k,null,c.a.createElement(J,null))))};t(100);l.a.render(c.a.createElement(P,null),document.getElementById("root"))},62:function(e,a,t){e.exports=t.p+"static/media/triangle.894673b4.gif"},71:function(e,a,t){e.exports=t(101)},99:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.7a81bab9.chunk.js.map