(window.webpackJsonp=window.webpackJsonp||[]).push([["LiveClassCarousalWidget","LiveClassBaseWidget"],{"./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/__styles.ts":function(e,t,n){"use strict";n.d(t,"n",(function(){return o})),n.d(t,"f",(function(){return a})),n.d(t,"l",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"j",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"g",(function(){return m})),n.d(t,"k",(function(){return u})),n.d(t,"p",(function(){return g})),n.d(t,"h",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return y})),n.d(t,"m",(function(){return C})),n.d(t,"e",(function(){return v})),n.d(t,"q",(function(){return w})),n.d(t,"o",(function(){return x}));var s=n("./src/common/designframework/Styles/__commonStyle.ts"),i=n("./src/common/styles/variables/colors.ts");const o={marginBottom:20},a=function(){return{display:"flex",overflowX:"scroll",overflowY:"hidden",scrollSnapType:"x proximity",paddingLeft:20,"::-webkit-scrollbar":{display:"none "}}},r=(Object.assign({bottom:"5%",willChange:"transform opacity",transition:"opacity 0.3s cubic-bezier(0.4, 0, 1, 1)",transform:"scale(0.9)",opacity:0},{position:"absolute",width:"fit-content",left:0,right:0,margin:"auto"}),{display:"flex",margin:0,alignItems:"center"}),c={display:"flex",flexDirection:"column",width:"100%"},l=function({isTablet:e}){return{display:"flex",flexDirection:"column",marginRight:20,borderRadius:10,overflow:"hidden",[s.g]:{minWidth:e?"15vw":"85vw"},[s.i]:{minWidth:"15vw"}}},d={position:"relative"},m={display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#2d3745",flexDirection:"column",padding:"12px 0px",zIndex:1},u={display:"flex",flexDirection:"column",alignItems:"center"},g={whiteSpace:"nowrap",width:280,overflow:"hidden",textOverflow:"ellipsis",paddingBottom:6,[s.i]:{width:200}},p={display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10},f=Object.assign(Object.assign({},g),{fontSize:12,paddingBottom:6,color:i.d.subtleGrey}),b=Object.assign(Object.assign({},g),{paddingBottom:6,color:i.d.subtleGrey}),y={position:"relative",zIndex:2},C={display:"flex",paddingLeft:20},v={top:"-10%",right:0},w={position:"absolute",top:10,left:10,backgroundColor:"rgba(0, 0, 0, 0.4)",padding:"4px 10px 0px",borderRadius:10},x={position:"relative"}},"./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/components/LiveClassBaseWidget/LiveClassBaseWidget.tsx":function(e,t,n){"use strict";n.r(t);var s=n("./src/common/designframework/elements/Fonts/index.tsx"),i=n("./node_modules/react/index.js"),o=n.n(i),a=n("./node_modules/react-redux/es/index.js"),r=n("./src/common/designframework/Styles/__commonStyle.ts");const c={textAlign:"center",cursor:"default"},l=Object.assign(Object.assign({},c),{marginBottom:10,[r.g]:{marginBottom:5}}),d=Object.assign(Object.assign({},c),{marginBottom:50,[r.g]:{marginBottom:35}}),m={width:"100%",[r.g]:{marginBottom:"auto"}},u={display:"flex",marginLeft:"auto",marginRight:"auto",[r.f]:{marginTop:40},[r.g]:{marginBottom:"auto"}},g={position:"relative"};var p=n("./src/common/designframework/elements/Anchor/index.tsx"),f=n("./src/common/designframework/layout/containers/index.ts"),b=n("./src/common/designframework/layout/sections/index.ts"),y=n("./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/components/LiveClassCarousel.tsx"),C=n("./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/components/LiveClassWidget.tsx"),v=n("./src/common/designframework/elements/Button/Contained/Secondary/index.tsx");t.default=Object(a.connect)((function(e){return{isMobile:e.device.isMobile,isTablet:e.device.isTablet}}))((function(e){const{header:t,isMobile:n,action:i,isTablet:a}=e;return o.a.createElement(b.a,null,o.a.createElement(f.a,{customStyles:g,gridMobile:10},o.a.createElement(s.d,{variant:s.b.P1,customStyles:l,fontColor:s.a.white80},t.title),o.a.createElement(s.d,{variant:s.b.H9,customStyles:d,fontColor:s.a.white},t.subTitle),o.a.createElement(n||a?C.b:y.a,Object.assign({},e)),i?o.a.createElement(p.a,{action:i,customStyles:m},o.a.createElement(v.a,{customStyles:u},i.title)):null))}))},"./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/components/LiveClassCarousel.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n("./node_modules/react/index.js"),i=n.n(s),o=n("./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/components/LiveClassWidget.tsx"),a=n("./src/common/designframework/components/Carousel/index.tsx"),r=n("./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/__styles.ts");const c=function(e){return{arrows:!e,autoplay:!1,dots:e,fade:!1,swipeToSlide:!0,slidesToScroll:1,slidesToShow:3,speed:500,variableWidth:!1,infinite:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3}}]}},l=function(e){const{widgets:t,isMobile:n,isTablet:s}=e;return i.a.createElement(a.b,{settings:c(n),carouselWrapperStyle:r.d,slickTrackWrapperStyle:r.m},t.map((function(e,t){return i.a.createElement(o.a,Object.assign({},e,{key:t,isMobile:n,isTablet:s}))})))}},"./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/components/LiveClassWidget.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return W}));var s=n("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),i=n("./node_modules/react/index.js"),o=n.n(i),a=n("./src/common/designframework/components/Image/index.tsx"),r=n("./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/__styles.ts"),c=n("./src/common/designframework/elements/Fonts/index.tsx"),l=n("./src/common/designframework/elements/Button/constants.ts"),d=n("./src/common/utils/CloudinaryUtil.ts"),m=n("./src/common/designframework/elements/Button/Contained/Secondary/index.tsx"),u=n("./src/common/utils/ActionHandler.ts"),g=n("./node_modules/react-redux/es/index.js"),p=n("./src/common/utils/lodashUtil.ts"),f=n("./src/client/analytics/main.ts");const b=Object(s.a)("div",{target:"e1kaeypi6"})(r.a,""),y=Object(s.a)("div",{target:"e1kaeypi5"})(r.f,""),C=Object(s.a)("div",{target:"e1kaeypi4"})(r.j,""),v=Object(s.a)("div",{target:"e1kaeypi3"})(r.i,""),w=Object(s.a)("div",{target:"e1kaeypi2"})(r.g,""),x=Object(s.a)("div",{target:"e1kaeypi1"})(r.k,""),h=Object(s.a)("div",{target:"e1kaeypi0"})(r.h,""),j=Object(g.connect)(null,(function(e){return{triggerAction:function(t){e(Object(u.c)(t))},sendAnalyticsEventAction:function(t){return e(Object(f.sendAnalyticsEvent)(t))}}}))((function(e){const{action:t,title:n,isMobile:s,image:u,imageTag:g,triggerAction:b,cardAction:y,sendAnalyticsEventAction:j,isTablet:W,isLive:E}=e,k=Object(d.a)(u,{resize:{aspectRatio:1.77.toString(),width:400}}),O=Object(i.useCallback)((function(){if(b(y),j){const t={type:f.EventTypes.CUSTOM_EVENT,name:f.EventNames.NOW_LIVE_WIDGET_CLICKED,payload:{clevertapEventData:{widgetTitle:p.a.get(e,"header.title",""),widgetId:p.a.get(e,"widgetMetric.widgetId","")}}};j(t)}}),[y]),L=Object(i.useCallback)((function(){t&&b&&b(t)}),[t]),S=s?r.c:r.b,T=s?l.a.md:l.a.sm;return o.a.createElement(C,{isTablet:W},o.a.createElement(v,null,o.a.createElement(a.a,{src:k,aspectRatio:1.77,alt:n||"prgram card",hasDynamicWidth:!0,wrapperStyle:r.i,onClick:O}),g.title&&o.a.createElement(c.d,{variant:c.b.P3,customStyles:r.q},g.title)),o.a.createElement(w,null,o.a.createElement(x,null,o.a.createElement(c.d,{variant:c.b.P5,customStyles:S,fontColor:c.a.white60,alignment:"center"},e.trainers),o.a.createElement(c.d,{variant:c.b.P1,fontColor:c.a.white,customStyles:r.p,alignment:"center"},n),o.a.createElement(c.d,{variant:c.b.P5,fontColor:c.a.white60,customStyles:S,alignment:"center"},e.subTitle)),o.a.createElement(h,null,o.a.createElement(m.a,{size:T,customStyles:r.l,onClick:L,showLiveDot:E},t.title))))})),W=function(e){const{widgets:t,isMobile:n,isTablet:s}=e;return o.a.createElement(b,null,o.a.createElement(y,null,t.map((function(e,t){return o.a.createElement(j,Object.assign({},e,{key:t,isMobile:n,isTablet:s}))}))))}},"./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/index.tsx":function(e,t,n){"use strict";n.r(t);var s=n("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),i=n("./node_modules/react/index.js"),o=n.n(i),a=n("./node_modules/react-redux/es/index.js"),r=n("./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/__styles.ts"),c=n("./src/common/designframework/layout/containers/index.ts"),l=n("./src/common/designframework/layout/sections/index.ts"),d=n("./src/common/designframework/elements/Fonts/index.tsx"),m=n("./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/components/LiveClassWidget.tsx");var u=n("./src/common/utils/CloudinaryUtil.ts"),g=n("./src/common/designframework/components/Image/GradientCircle/index.tsx"),p=n("./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/components/LiveClassBaseWidget/LiveClassBaseWidget.tsx"),f=n("./src/common/designframework/elements/Video/index.tsx");const b=Object(s.a)("div",{target:"e9zhltw0"})({display:"flex",marginTop:-50},"");t.default=Object(a.connect)((function(e){return{isMobile:e.device.isMobile,isTablet:e.device.isTablet}}))((function(e){const{header:{background:t},isTablet:n}=e,s=t?Object(u.b)(t,{resize:{height:n?600:400,aspectRatio:"1"}}):"";return t?o.a.createElement(l.a,null,o.a.createElement(c.a,{gridMobile:10,customStyles:r.o},o.a.createElement(g.c,{color:g.a.malibu,dimension:"100vh",customStyles:r.e}),o.a.createElement(d.d,{variant:d.b.H9,customStyles:r.n,fontColor:d.a.white,alignment:"center"},e.header.title),t&&o.a.createElement(f.a,{src:s,type:"video/mp4",playsInline:!0,loop:!0,autoPlay:!0,muted:!0,customStyles:{height:n?600:400,width:"100%"}}),o.a.createElement(b,null,o.a.createElement(m.b,Object.assign({},e))))):o.a.createElement(p.default,Object.assign({},e))}))}}]);