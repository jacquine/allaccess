(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(19).concat([function(e,t,a){e.exports=a(58)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/main-nyc.c65e8302.png"},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/dropdown-m.b2631ea8.png"},function(e,t,a){e.exports=a.p+"static/media/map.72d5f08a.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/wheelchair.31c0723d.jpg"},function(e,t,a){e.exports=a.p+"static/media/accessiblerestroom.4615b3f8.jpg"},function(e,t,a){e.exports=a.p+"static/media/elevator.28826c2d.jpg"},function(e,t,a){e.exports=a.p+"static/media/cooperpressroom.ba662fee.jpg"},function(e,t,a){e.exports=a.p+"static/media/coopergallery.ab5a7244.jpg"},function(e,t,a){e.exports=a.p+"static/media/coopergallery2.db04fc90.jpg"},function(e,t,a){e.exports=a.p+"static/media/gettingthere1.136ee134.png"},function(e,t,a){e.exports=a.p+"static/media/gettingthere2.bf70f5a3.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/cooperhewitt.2d5c97a4.jpeg"},function(e,t,a){e.exports=a.p+"static/media/info1.1fd55982.png"},function(e,t,a){e.exports=a.p+"static/media/info2.0ce2dec1.png"},function(e,t,a){},,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),i=a(60),s=(a(24),a(1)),o=a(2),m=a(4),u=a(3),p=a(5),h=(a(25),a(6)),E=(a(26),function(e){function t(e){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{href:"/home"},r.a.createElement("h1",{className:"name"},"ALL ACCESS!")),r.a.createElement(h.h,{className:"audio",size:30}),r.a.createElement(h.f,{className:"zoom",size:20}),r.a.createElement(h.e,{className:"zout",size:20}))}}]),t}(n.Component)),b=(a(27),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){a.setState({selection:e}),console.log(a.state.selection)},a.state={selection:"mobility"},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"welcome"},r.a.createElement("h1",null,"Welcome to NYC!"),r.a.createElement("img",{className:"picture",src:a(28),alt:"new york city outline"})),r.a.createElement("div",{className:"buttons_page"},r.a.createElement("div",{className:"button-row"},r.a.createElement("button",{className:"button buttonAll",onClick:function(){e.handleClick("all")}},"ALL"),r.a.createElement("button",{className:"button buttonMobility",onClick:function(){e.handleClick("mobility")}},"MOBILITY")),r.a.createElement("div",{className:"button-row"},r.a.createElement("button",{className:"button buttonVisual",onClick:function(){e.handleClick("visual")}},"VISUALLY IMPAIRED"),r.a.createElement("button",{className:"button buttonHearing",onClick:function(){e.handleClick("hearing")}},"HEARING IMPAIRED")),r.a.createElement("div",{className:"button-row"},r.a.createElement("a",{href:"/result"},r.a.createElement("button",{className:"button",onClick:"findMuseums()"}," FIND MUSEUMS! ")))))}}]),t}(n.Component)),f=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=a(9),g=Object(d.a)({}),v=(a(29),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pageLayout"},r.a.createElement("div",{className:"dropdown"},r.a.createElement("img",{src:a(30),alt:"list of filters"})),r.a.createElement("div",{className:"map"},r.a.createElement("img",{src:a(31),alt:""})))}}]),t}(n.Component)),j=(a(32),function(e){function t(e){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"museumsList"},r.a.createElement("a",{href:"/museumprofile"},r.a.createElement("div",{className:"cooperContainer"},r.a.createElement("div",{className:"museumName"},this.props.name),r.a.createElement("div",{className:"address"},this.props.address),r.a.createElement("div",{className:"hours"},"Opening hours: ",this.props.hours),r.a.createElement("div",{className:"phone"},"Phone: ",this.props.phone),r.a.createElement("div",{className:"wcAccess"},"Wheelchair Access: ",this.props.wheelchairAccess)),r.a.createElement("div",{className:"frickContainer"})))}}]),t}(n.Component)),N=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{className:"menu"}),r.a.createElement("div",{className:"layout"},r.a.createElement(j,{name:"Cooper Hewitt Smithsonian Design Museum",address:"2 E 91st St, New York, NY 10128",hours:"10:00 AM to 6:00 PM",phone:"212-288-0700",wheelchairAccess:"Yes"})),r.a.createElement(j,{name:"The Frick Collection",address:"1 E 70th St, New York, NY 10021",hours:"10:00 AM to 5:00 PM",phone:"212-288-0700",wheelchairAccess:"Yes"}))}}]),t}(n.Component),O=(a(33),a(34),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Community"),r.a.createElement("p",null,r.a.createElement(h.i,{className:"icons",size:15}),r.a.createElement("h6",null,"Mobility - User Review"),r.a.createElement("p",null,"Use the museum\u2019s wheelchair map for the best route through the museum. Galleries are spacious, and the elevator to each floor was big enough for my chair. Great visit! ")),r.a.createElement("p",null,r.a.createElement(h.c,{className:"icons",size:15}),r.a.createElement("h6",null,"Visual Impairment - User Review "),r.a.createElement("p",null,"My mother appreciated the large print labels and braille throughout. We attended a verbal description tour and had a wonderful visit. ")),r.a.createElement("p",null,r.a.createElement(h.g,{className:"icons",size:15}),r.a.createElement("h6",null,"General - User Review"),r.a.createElement("p",null,"The Sensory Map is so helpful - we found a quiet spot to decompress after we passed through the busier galleries. Take a break when you need it for a long day at the museum. ")),r.a.createElement("p",null,r.a.createElement(h.a,{className:"icons",size:15}),r.a.createElement("h6",null,"Mobility - User Review"),r.a.createElement("p",null,"Always grateful for an institution that allows service dogs. ")),r.a.createElement("p",null,r.a.createElement(h.d,{className:"icons",size:15}),r.a.createElement("h6",null,"Hearing Impairment - User Review"),r.a.createElement("p",null,"I appreciated the captioning on the videos in the galleries, but wish the font had been bigger. ")),r.a.createElement("a",{href:"/museumProfile"}," ",r.a.createElement(h.b,{className:"back",size:30})))}}]),t}(n.Component)),y=(a(35),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:a(36),alt:"Wheelchair Accessibility"}),r.a.createElement("p",null," Wheelchair Entrance"),r.a.createElement("img",{src:a(37),alt:""}),r.a.createElement("p",null," Accessible Restroom "),r.a.createElement("img",{src:a(38),alt:""}),r.a.createElement("p",null," Elevator "),r.a.createElement("img",{src:a(39),alt:""}),r.a.createElement("p",null," Press Room Gallery at Cooper Hewitt Smithsonian Design Museum "),r.a.createElement("img",{src:a(40),alt:""}),r.a.createElement("p",null," Gallery at Cooper Hewitt Smithsonian Design Museum "),r.a.createElement("img",{src:a(41),alt:""}),r.a.createElement("p",null," Gallery at Cooper Hewitt Smithsonian Design Museum "),r.a.createElement("a",{href:"/museumProfile"}," ",r.a.createElement(h.b,{className:"back",size:30})))}}]),t}(n.Component)),w=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null," getting there  "),r.a.createElement("img",{src:a(42),alt:"map1"}),r.a.createElement("img",{src:a(43),alt:"map2"}),r.a.createElement("a",{href:"https://new.mta.info/sites/default/files/2019-03/Accessibility_Guide_8_1.pdf"}," Accessibility Guide - MTA "),r.a.createElement("div",null,r.a.createElement("a",{href:"/museumProfile"}," ",r.a.createElement(h.b,{className:"back",size:30}))))}}]),t}(n.Component),k=function(e){function t(e){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-wrapper"},r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:"/photos"},r.a.createElement("button",{className:"button b1"},"Photos")),r.a.createElement("a",{href:"/directions"},r.a.createElement("button",{className:"button b2"},"Go")),r.a.createElement("a",{href:"/community"},r.a.createElement("button",{className:"button b3"},"Community"))))}}]),t}(n.Component),C=(a(44),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{href:"/info"},r.a.createElement("button",{className:"ratingButton"},"93% in MOBILITY")))}}]),t}(n.Component)),A=(a(45),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pageLayout"},r.a.createElement("div",{className:"rateButton"},r.a.createElement(C,null)),r.a.createElement("div",{className:"info"},r.a.createElement("img",{src:a(46),alt:"map1"}),r.a.createElement("img",{src:a(47),alt:"map2"}),r.a.createElement("img",{src:a(48),alt:"map3"})),r.a.createElement(k,{className:"footer"}))}}]),t}(n.Component)),M=(a(49),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Cooper Hewitt Smithsonian Design Museum Ranks\u2026",r.a.createElement("h3",null,"93% in Mobility"),r.a.createElement("h3",null,"90% in Overall Accessibility"),"So what does this mean? Our proprietary ranking rubric assigns a point for each accessibility feature that an institution has. Here are the features currently included in our score. Don\u2019t see a feature you need, want, believe we should consider? Let us know!"),r.a.createElement("div",{className:"list"},r.a.createElement("a",{href:"#",className:"list-group-item"},"Accessibility Entrance"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"list-group-item"},"Accessibility Events"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"list-group-item"},"Accessibility Parking"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"list-group-item"},"Accessibility Restrooms"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"list-group-item"},"All Floors are Wheelchair-Accessible"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"list-group-item"},"Assistive Listening Devices"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"list-group-item"},"Audio Transcription"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"list-group-item"},"Braille Signage"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"list-group-item"},"Captioning: Closed, Open, Real-time Captioning, ASL interpretation, CART"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"list-group-item"},"Discount - Admission"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"list-group-item"},"Discount - Care-partner & Aid"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"list-group-item"},"Discount - Membership"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"list-group-item"},"Elevators to all floors"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"list-group-item"},"Large Print Labels"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"list-group-item"},"Service Dogs Allowed"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"list-group-item"},"Wheelchair / Device Rental"),r.a.createElement("br",null),r.a.createElement("a",{href:"#",className:"list-group-item"},"Wheelchair Accessible Route"),r.a.createElement("br",null)),r.a.createElement("a",{href:"/museumProfile"}," ",r.a.createElement(h.b,{className:"back",size:30})))}}]),t}(n.Component));c.a.render(r.a.createElement(i.b,{history:g},r.a.createElement(E,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/home",component:f}),r.a.createElement(i.a,{path:"/result",component:N}),r.a.createElement(i.a,{path:"/museumprofile",component:A}),r.a.createElement(i.a,{path:"/info",component:M}),r.a.createElement(i.a,{path:"/photos",component:y}),r.a.createElement(i.a,{path:"/community",component:O}),r.a.createElement(i.a,{path:"/directions",component:w}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[19,1,2]]]);
//# sourceMappingURL=main.5ce1eef3.chunk.js.map