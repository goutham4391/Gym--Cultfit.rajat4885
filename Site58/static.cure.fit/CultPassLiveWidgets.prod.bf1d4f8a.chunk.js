(window.webpackJsonp=window.webpackJsonp||[]).push([["CultPassLiveWidgets","Care-LandingPageWidgets~Care-PrescriptionWidgets~CentreAddressDetailWidget~FrequentlyAskedQuestionsW~b1c53d11","ConfirmationModals~FormatCarouselWidget~LiveClassBaseWidget~LiveClassCarousalWidget~ScrollZoomImageW~b335cbcd"],{"./assets/images/LiveAnimationEssentials/phone.png":function(e,t,n){e.exports=n.p+"assets/images/phone.png"},"./assets/images/buttons/dice_disabled.svg":function(e,t,n){e.exports=n.p+"assets/images/dice_disabled.svg"},"./assets/images/buttons/dice_secondary.svg":function(e,t,n){e.exports=n.p+"assets/images/dice_secondary.svg"},"./src/common/components/widgets/CultPassWidget/GenericCarousalWidget/components/FormatCardCarousel/index.tsx":function(e,t,n){"use strict";var i=n("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),a=n("./node_modules/react/index.js"),o=n.n(a),r=n("./src/common/designframework/components/Carousel/index.tsx"),s=n("./src/common/designframework/Styles/__commonStyle.ts");const c={position:"relative",zIndex:2,[s.g]:{marginTop:-150}},l={display:"flex"};Object.assign(Object.assign({},{textAlign:"center"}),{opacity:"60%",position:"relative",bottom:"10%"});var d=n("./src/common/components/widgets/CultPassWidget/GenericCarousalWidget/components/FormatCardItem/FormatCardItem.tsx");const m=Object(i.a)("div",{target:"eect4g70"})(c,""),u=function(e){return{arrows:!e,autoplay:!1,dots:e,fade:!1,swipeToSlide:!0,slidesToScroll:e?1.9:1,slidesToShow:e?1.9:4,speed:500,variableWidth:!1,infinite:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:4}}]}};t.a=function(e){const{items:t,isMobile:n,isTablet:i}=e;return(null==t?void 0:t.length)?o.a.createElement(m,null,o.a.createElement(r.b,{settings:u(n),carouselWrapperStyle:c,slickTrackWrapperStyle:l},t.map((function(e,t){return o.a.createElement(d.a,Object.assign({},e,{isMobile:n,key:t,isTablet:i}))})))):null}},"./src/common/components/widgets/CultPassWidget/GenericCarousalWidget/components/FormatCardItem/FormatCardItem.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),a=n("./node_modules/react/index.js"),o=n.n(a),r=n("./src/common/utils/CloudinaryUtil.ts"),s=n("./src/common/designframework/elements/Anchor/index.tsx"),c=n("./src/common/designframework/components/Image/index.tsx"),l=n("./src/common/components/widgets/CultPassWidget/GenericCarousalWidget/components/FormatCardItem/__styles.ts"),d=n("./src/common/designframework/elements/Button/Contained/Secondary/index.tsx"),m=n("./src/common/utils/ActionHandler.ts"),u=n("./node_modules/react-redux/es/index.js"),g=n("./node_modules/url-parse/index.js"),p=n.n(g);const f=Object(i.a)("div",{target:"e4v7jpo0"})(l.a,""),b=function(e){return function(e){let t;try{t=new URL(e)}catch(e){return!1}return"http:"===t.protocol||"https:"===t.protocol}(e)?p()(e).pathname.slice("/curefit-content".length):e},h=Object(u.connect)(null,(function(e){return{triggerAction:function(t){e(Object(m.c)(t))}}}),null,{withRef:!0})((function(e){const{action:t,tagText:n,title:i,triggerAction:m,isTablet:u}=e,g=Object(r.a)(b(e.image),{resize:{width:300,aspectRatio:"0.75"}}),p=Object(a.useCallback)((function(e){e.preventDefault(),t&&m(t)}),[t]);return o.a.createElement(f,{isTablet:u},o.a.createElement(s.a,{action:t||void 0,onClick:p,customStyles:l.b},o.a.createElement(c.a,{src:g,aspectRatio:.75,alt:i||n||"alt",hasDynamicWidth:!0,displayShimmer:!1}),t&&o.a.createElement(d.a,{onClick:function(){},customStyles:l.c},t.title||"Explore")))}))},"./src/common/components/widgets/CultPassWidget/GenericCarousalWidget/components/FormatCardItem/__styles.ts":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r}));var i=n("./src/common/designframework/Styles/__commonStyle.ts");const a={position:"relative",marginBottom:"20px",[i.g]:{scrollSnapAlign:"center"},[i.i]:{scrollSnapAlign:"center"},[i.f]:{transition:"all 0.3s ease-out",minWidth:"100%",filter:"brightness(90%)",willChange:"transform",transform:"scale(0.9)",zIndex:1,"&:hover":{transform:"scale(1)",boxShadow:"0 12px 30px rgb(0 0 0 / 50%)",filter:"brightness(100%)",zIndex:2,button:{opacity:1}}}},o=function({isTablet:e}){return{display:"flex",position:"relative",[i.g]:{marginRight:20,minWidth:e?"15vw":"70vw"},[i.i]:{marginRight:20,minWidth:"15vw"}}},r=Object.assign({bottom:"5%",willChange:"transform opacity",transition:"opacity 0.3s cubic-bezier(0.4, 0, 1, 1)",transform:"scale(0.9)",opacity:0,[i.g]:{opacity:1}},{position:"absolute",width:"fit-content",left:0,right:0,margin:"auto"})},"./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/__styles.ts":function(e,t,n){"use strict";n.d(t,"n",(function(){return o})),n.d(t,"f",(function(){return r})),n.d(t,"l",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"j",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"g",(function(){return m})),n.d(t,"k",(function(){return u})),n.d(t,"p",(function(){return g})),n.d(t,"h",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"m",(function(){return y})),n.d(t,"e",(function(){return v})),n.d(t,"q",(function(){return w})),n.d(t,"o",(function(){return x}));var i=n("./src/common/designframework/Styles/__commonStyle.ts"),a=n("./src/common/styles/variables/colors.ts");const o={marginBottom:20},r=function(){return{display:"flex",overflowX:"scroll",overflowY:"hidden",scrollSnapType:"x proximity",paddingLeft:20,"::-webkit-scrollbar":{display:"none "}}},s=(Object.assign({bottom:"5%",willChange:"transform opacity",transition:"opacity 0.3s cubic-bezier(0.4, 0, 1, 1)",transform:"scale(0.9)",opacity:0},{position:"absolute",width:"fit-content",left:0,right:0,margin:"auto"}),{display:"flex",margin:0,alignItems:"center"}),c={display:"flex",flexDirection:"column",width:"100%"},l=function({isTablet:e}){return{display:"flex",flexDirection:"column",marginRight:20,borderRadius:10,overflow:"hidden",[i.g]:{minWidth:e?"15vw":"85vw"},[i.i]:{minWidth:"15vw"}}},d={position:"relative"},m={display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#2d3745",flexDirection:"column",padding:"12px 0px",zIndex:1},u={display:"flex",flexDirection:"column",alignItems:"center"},g={whiteSpace:"nowrap",width:280,overflow:"hidden",textOverflow:"ellipsis",paddingBottom:6,[i.i]:{width:200}},p={display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10},f=Object.assign(Object.assign({},g),{fontSize:12,paddingBottom:6,color:a.d.subtleGrey}),b=Object.assign(Object.assign({},g),{paddingBottom:6,color:a.d.subtleGrey}),h={position:"relative",zIndex:2},y={display:"flex",paddingLeft:20},v={top:"-10%",right:0},w={position:"absolute",top:10,left:10,backgroundColor:"rgba(0, 0, 0, 0.4)",padding:"4px 10px 0px",borderRadius:10},x={position:"relative"}},"./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/components/LiveClassCarousel.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("./node_modules/react/index.js"),a=n.n(i),o=n("./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/components/LiveClassWidget.tsx"),r=n("./src/common/designframework/components/Carousel/index.tsx"),s=n("./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/__styles.ts");const c=function(e){return{arrows:!e,autoplay:!1,dots:e,fade:!1,swipeToSlide:!0,slidesToScroll:1,slidesToShow:3,speed:500,variableWidth:!1,infinite:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3}}]}},l=function(e){const{widgets:t,isMobile:n,isTablet:i}=e;return a.a.createElement(r.b,{settings:c(n),carouselWrapperStyle:s.d,slickTrackWrapperStyle:s.m},t.map((function(e,t){return a.a.createElement(o.a,Object.assign({},e,{key:t,isMobile:n,isTablet:i}))})))}},"./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/components/LiveClassWidget.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return E}));var i=n("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),a=n("./node_modules/react/index.js"),o=n.n(a),r=n("./src/common/designframework/components/Image/index.tsx"),s=n("./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/__styles.ts"),c=n("./src/common/designframework/elements/Fonts/index.tsx"),l=n("./src/common/designframework/elements/Button/constants.ts"),d=n("./src/common/utils/CloudinaryUtil.ts"),m=n("./src/common/designframework/elements/Button/Contained/Secondary/index.tsx"),u=n("./src/common/utils/ActionHandler.ts"),g=n("./node_modules/react-redux/es/index.js"),p=n("./src/common/utils/lodashUtil.ts"),f=n("./src/client/analytics/main.ts");const b=Object(i.a)("div",{target:"e1kaeypi6"})(s.a,""),h=Object(i.a)("div",{target:"e1kaeypi5"})(s.f,""),y=Object(i.a)("div",{target:"e1kaeypi4"})(s.j,""),v=Object(i.a)("div",{target:"e1kaeypi3"})(s.i,""),w=Object(i.a)("div",{target:"e1kaeypi2"})(s.g,""),x=Object(i.a)("div",{target:"e1kaeypi1"})(s.k,""),j=Object(i.a)("div",{target:"e1kaeypi0"})(s.h,""),O=Object(g.connect)(null,(function(e){return{triggerAction:function(t){e(Object(u.c)(t))},sendAnalyticsEventAction:function(t){return e(Object(f.sendAnalyticsEvent)(t))}}}))((function(e){const{action:t,title:n,isMobile:i,image:u,imageTag:g,triggerAction:b,cardAction:h,sendAnalyticsEventAction:O,isTablet:E,isLive:C}=e,k=Object(d.a)(u,{resize:{aspectRatio:1.77.toString(),width:400}}),S=Object(a.useCallback)((function(){if(b(h),O){const t={type:f.EventTypes.CUSTOM_EVENT,name:f.EventNames.NOW_LIVE_WIDGET_CLICKED,payload:{clevertapEventData:{widgetTitle:p.a.get(e,"header.title",""),widgetId:p.a.get(e,"widgetMetric.widgetId","")}}};O(t)}}),[h]),T=Object(a.useCallback)((function(){t&&b&&b(t)}),[t]),R=i?s.c:s.b,W=i?l.a.md:l.a.sm;return o.a.createElement(y,{isTablet:E},o.a.createElement(v,null,o.a.createElement(r.a,{src:k,aspectRatio:1.77,alt:n||"prgram card",hasDynamicWidth:!0,wrapperStyle:s.i,onClick:S}),g.title&&o.a.createElement(c.d,{variant:c.b.P3,customStyles:s.q},g.title)),o.a.createElement(w,null,o.a.createElement(x,null,o.a.createElement(c.d,{variant:c.b.P5,customStyles:R,fontColor:c.a.white60,alignment:"center"},e.trainers),o.a.createElement(c.d,{variant:c.b.P1,fontColor:c.a.white,customStyles:s.p,alignment:"center"},n),o.a.createElement(c.d,{variant:c.b.P5,fontColor:c.a.white60,customStyles:R,alignment:"center"},e.subTitle)),o.a.createElement(j,null,o.a.createElement(m.a,{size:W,customStyles:s.l,onClick:T,showLiveDot:C},t.title))))})),E=function(e){const{widgets:t,isMobile:n,isTablet:i}=e;return o.a.createElement(b,null,o.a.createElement(h,null,t.map((function(e,t){return o.a.createElement(O,Object.assign({},e,{key:t,isMobile:n,isTablet:i}))}))))}},"./src/common/components/widgets/VerticalWiseWidgets/CultPassLiveWidgets.tsx":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/react/index.js"),a=n.n(i),o=n("./src/common/constants/WidgetConstants.ts"),r=n("./node_modules/react-redux/es/index.js"),s=n("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),c=n("./node_modules/gsap/index.js"),l=n("./node_modules/gsap/dist/ScrollTrigger.js");const d="@media only screen and (max-height: 900px)",m={position:"fixed",top:"10vh",left:0,textAlign:"center",color:"#fff",display:"none",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",overflowX:"clip",[d]:{top:"10vh"}},u=Object.assign(Object.assign({},m),{top:"17vh",[d]:{top:"15vh"}}),g={position:"absolute",top:"50%",left:0,marginLeft:"100px",marginTop:"-92px","@media only screen and (max-width: 1200px)":{marginLeft:"30px",maxWidth:"30%"}},p={textAlign:"center",position:"absolute",display:"flex",margin:"0 auto",left:"105%",top:0,bottom:0,transform:"rotate(270deg)",[d]:{left:"95%"}};var f=n("./src/common/designframework/elements/Fonts/index.tsx");var b=function(e){const{heading:t,subHeading:n}=e;return a.a.createElement(a.a.Fragment,null,t&&a.a.createElement(f.d,{variant:f.b.P1,alignment:"center",fontColor:f.a.white70},t),n&&a.a.createElement(f.d,{variant:f.b.H9,alignment:"center",fontColor:f.a.white},n))};const h={marginBottom:"15px"},y={marginBottom:"40px"},v=Object(s.a)("div",{target:"euxnrwx0"})({color:"#fff",maxWidth:"400px"},"");var w=function(e){const{heading:t,subHeading:n}=e;return a.a.createElement(v,null,a.a.createElement(f.d,{variant:f.b.P1,alignment:"left",fontColor:f.a.white70,customStyles:h},t),a.a.createElement(f.d,{variant:f.b.H10,alignment:"left",fontColor:f.a.white,customStyles:y},n))},x=n("./src/common/designframework/components/Carousel/index.tsx"),j=n("./src/common/utils/CloudinaryUtil.ts");const O={maxWidth:"930px",width:"84%","@media only screen and (max-width: 1439px)":{maxWidth:"600px",width:"65%"}},E={width:"100%",height:"650px",display:"flex",flexDirection:"column",[d]:{height:"500px"}},C={position:"relative",zIndex:2},k={display:"flex"},S={background:"linear-gradient(180deg, rgba(29, 31, 42, 0.0001) 19.69%, #0F1B2B 125.18%);",backgroundPosition:"center bottom",backgroundSize:"cover",height:"100%",width:"100%",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"flex-end",paddingBottom:"10px"},T=Object(s.a)("div",{target:"e1cupfpt5"})(O,""),R=Object(s.a)("div",{target:"e1cupfpt4"})((function(e){return{width:"100%",height:"100%",background:`url(${e.background}) center no-repeat`,backgroundPosition:e.placement?e.placement:"center bottom",backgroundSize:"contain",display:"flex",alignItems:"flex-end",justifyContent:"center"}}),""),W=Object(s.a)("div",{target:"e1cupfpt3"})(E,""),_=Object(s.a)("div",{target:"e1cupfpt2"})({flex:1,marginRight:"2%",marginBottom:"2%",borderRadius:"20px",flexBasis:"31%",height:"45%",maxHeight:"30vh",background:"#232e3c linear-gradient(180deg, rgba(29, 31, 42, 0.0001) 19.69%, #0F1B2B 125.18%)"},""),I=Object(s.a)("div",{target:"e1cupfpt1"})(S,""),z=Object(s.a)("div",{target:"e1cupfpt0"})({height:"100%",width:"100%"},""),A=function(e,t){return{arrows:!1,autoplay:!1,dots:!0,fade:!1,swipeToSlide:!0,slidesToScroll:3,slidesToShow:t,speed:500,variableWidth:!1,infinite:!1}},P={resize:{aspectRatio:"0.79",width:288}};var L=function(e){const{items:t,isMobile:n,slidesToShow:i}=e,o=t.length%2==0?t:t.slice(0,t.length-1);return a.a.createElement(T,null,a.a.createElement(x.b,{settings:A(0,i),carouselWrapperStyle:C,slickTrackWrapperStyle:k},o.reduce((function(e,t,n,i){return n%2==0&&e.push(i.slice(n,n+2)),e}),[]).map((function(e){return a.a.createElement(W,null,e.map((function(e,t){return a.a.createElement(_,{key:t},a.a.createElement(z,null,a.a.createElement(R,{background:Object(j.a)(e.imageUrl,P)},a.a.createElement(I,null,a.a.createElement(f.d,{variant:f.b.H6,alignment:"center",fontColor:f.a.white},e.title),a.a.createElement(f.d,{variant:f.b.P4,alignment:"center",fontColor:f.a.white80},e.subTitle)))))})))}))))};const M={width:"35vw",height:"50vw",background:`url(${Object(j.a)("/image/test/cult-pass-live-animation/last_frame_tablet_new.png",{resize:{aspectRatio:"0.562",width:668}})}) no-repeat center right`,backgroundPosition:"center right",backgroundSize:"contain"};var D=Object(s.a)("div",{target:"e1rdy8u40"})(M,"");const B={width:"30vw",height:"30vw",maxHeight:"90vh",background:`url(${Object(j.a)("/image/test/cult-pass-live-animation/last_frame_laptop_v2.png",{resize:{aspectRatio:"1",width:700}})}) no-repeat`,backgroundPosition:"center right",backgroundSize:"contain"};var F=Object(s.a)("div",{target:"eyx41560"})(B,""),H=n("./src/common/designframework/components/Image/index.tsx");const U=Object(j.a)("/image/test/cult-pass-live-animation/appleTv.png",{resize:{aspectRatio:"2.189",width:81}}),N=Object(j.a)("/image/test/cult-pass-live-animation/fireTv.png",{resize:{aspectRatio:"1.909",width:84}}),G=Object(j.a)("/image/test/cult-pass-live-animation/androidTv.png",{resize:{aspectRatio:"5.67",width:204}}),Y=Object(j.a)("/image/test/cult-pass-live-animation/chromecast.png",{resize:{aspectRatio:"5.371",width:188}}),V={margin:"5px"},X=Object(s.a)("div",{target:"ekzza920"})({display:"flex",justifyContent:"space-between"},"");var q=function(){return a.a.createElement(X,null,a.a.createElement(H.a,{src:U,alt:"appleTv",width:81,aspectRatio:81/37,wrapperStyle:V}),a.a.createElement(H.a,{src:G,alt:"androidTv",width:204,aspectRatio:204/36,wrapperStyle:V}),a.a.createElement(H.a,{src:N,alt:"fireTv",width:84,aspectRatio:84/44,wrapperStyle:V}),a.a.createElement(H.a,{src:Y,alt:"appleTv",width:188,aspectRatio:188/35,wrapperStyle:V}))},J=n("./src/common/components/widgets/CultPassWidget/LiveClassCarousalWidget/components/LiveClassCarousel.tsx");const $={width:"90%",minWidth:"500px",height:"380px",position:"absolute",bottom:"-200px",left:0,right:0,marginLeft:"auto",marginRight:"auto","@media only screen and (max-height: 900px)":{width:"100%",bottom:"-30vh"}},K=Object(s.a)("div",{target:"e1mnfh5q0"})($,"");var Q=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(K,null,a.a.createElement(J.a,Object.assign({},e))))},Z=n("./src/common/components/widgets/CultPassWidget/GenericCarousalWidget/components/FormatCardCarousel/index.tsx"),ee=n("./src/common/utils/ActionHandler.ts");const te={width:"80%",minWidth:"500px",height:"300px",position:"absolute",bottom:"-100px","@media only screen and (max-height: 900px)":{bottom:"-20vh"}},ne=Object(s.a)("div",{target:"e7f8is40"})(te,"");var ie=Object(r.connect)(null,(function(e){return{triggerAction:function(t){e(Object(ee.c)(t))}}}))((function(e){const{isMobile:t,tickers:n,triggerAction:i}=e;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ne,null,a.a.createElement(Z.a,{isMobile:t,items:n,triggerAction:i,isTablet:!1})))}));const ae=Object(s.a)("div",{target:"e1kzm2gm20"})({padding:"50vh 0 50vh"},""),oe=Object(s.a)("div",{target:"e1kzm2gm19"})(u,""),re=Object(s.a)("div",{target:"e1kzm2gm18"})(m,""),se=Object(s.a)("div",{target:"e1kzm2gm17"})({position:"relative"},""),ce=Object(s.a)("div",{target:"e1kzm2gm16"})({position:"relative"},""),le=Object(s.a)("div",{target:"e1kzm2gm15"})({position:"fixed",top:"7vh",left:0,textAlign:"center",color:"#fff",display:"none",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"},""),de=Object(s.a)("div",{target:"e1kzm2gm14"})({visibility:"hidden",height:"0",position:"relative",zIndex:5},""),me=Object(s.a)("div",{target:"e1kzm2gm13"})({position:"relative",transformOrigin:"center",overflowX:"clip"},""),ue=Object(s.a)("div",{target:"e1kzm2gm12"})({display:"flex",justifyContent:"center"},""),ge=Object(s.a)("div",{target:"e1kzm2gm11"})({display:"flex",alignItems:"center",justifyContent:"center",position:"relative",maxWidth:"100vw",maxHeight:"100vh"},""),pe=Object(s.a)("div",{target:"e1kzm2gm10"})({display:"flex",alignItems:"center",justifyContent:"center",position:"relative",maxWidth:"100vw",maxHeight:"100vh",marginTop:"100vh"},""),fe=Object(s.a)("div",{target:"e1kzm2gm9"})(g,""),be=Object(s.a)("div",{target:"e1kzm2gm8"})({position:"absolute",top:0,left:"50px",zIndex:15,width:"100%"},""),he=Object(s.a)("div",{target:"e1kzm2gm7"})({position:"absolute",top:"0",bottom:"0",marginTop:"auto",marginBottom:"auto",left:0,height:"30vw"},""),ye=Object(s.a)("div",{target:"e1kzm2gm6"})({position:"absolute",top:"0",bottom:"0",marginTop:"auto",marginBottom:"auto",right:0,height:"50vw"},""),ve=Object(s.a)("div",{target:"e1kzm2gm5"})({color:"#fff"},""),we=Object(s.a)("div",{target:"e1kzm2gm4"})({display:"block"},""),xe=Object(s.a)("div",{target:"e1kzm2gm3"})(p,""),je=n("./assets/images/LiveAnimationEssentials/phone.png"),Oe=Object(j.a)("/image/test/cult-pass-live-animation/image_app_screen_v6.png",{resize:{aspectRatio:"2.16",width:836}}),Ee=Object(s.a)("div",{target:"e1kzm2gm2"})({fontSize:"50px",lineHeight:"60px",margin:"0 auto"},""),Ce=Object(s.a)("div",{target:"e1kzm2gm1"})((function(e){return{background:"transparent",width:"auto",maxHeight:e.maxHeight?e.maxHeight:"550px",maxWidth:"90vw",position:"relative",margin:"0 auto"}}),""),ke=Object(s.a)("div",{target:"e1kzm2gm0"})((function(e){return{background:"transparent",width:"auto",maxHeight:e.maxHeight?e.maxHeight:"550px",maxWidth:"90vw",position:"relative",margin:"0 auto"}}),"");var Se=function(e){const{isMobile:t,windowWidth:n,videoUrlLiveSession:o,videoUrlLiveFormat:r,formatCarouselWidgetData:s,liveClassCarouselWidgetData:d,firstSectionHeading:m,firstSectionSubHeading:u,secondSectionHeading:g,secondSectionSubHeading:p,trainerSectionHeading:f,trainerSectionSubHeading:h,deviceSectionHeading:y,deviceSectionSubHeading:v,trainerCarouselWidgetData:x}=e,j=Object(i.useRef)(null),O=Object(i.useRef)(null),E=Object(i.useRef)(null),C=Object(i.useRef)(null),k=Object(i.useRef)(null),S=Object(i.useRef)(null),T=Object(i.useRef)(null),R=Object(i.useRef)(null),W=Object(i.useRef)(null),_=Object(i.useRef)(null),I=Object(i.useRef)(null),z=Object(i.useRef)(null),A=Object(i.useRef)(null),P=Object(i.useRef)(null),M=Object(i.useRef)(null),B=Object(i.useRef)(null),U=Object(i.useRef)(null),N=Object(i.useRef)(null),G=Object(i.useRef)(null),Y=Object(i.useRef)(0),V=Object(i.useRef)(null),X=Object(i.useRef)(null);c.a.registerPlugin(l.ScrollTrigger);const J=Object(i.useRef)(1.3),$=Object(i.useRef)(450),K=Object(i.useRef)(3),Z=Object(i.useRef)(1.6),ee=Object(i.useRef)(1.2),te=Object(i.useRef)("550px");return Object(i.useEffect)((function(){let e=window.matchMedia("(max-width: 1399px)"),t=window.matchMedia("(max-width: 1200px)");window.matchMedia("(max-height: 900px)").matches&&(te.current="400px"),e.matches&&($.current=.9*window.innerWidth*.8*.2),t.matches&&(J.current=1.1,K.current=2,Z.current=1.15,ee.current=1.1)}),[n]),Object(i.useEffect)((function(){Y.current=window.innerWidth/2-$.current;const e=c.a.timeline({scrollTrigger:{trigger:R.current,start:"top bottom",end:"bottom top",scrub:!0,id:"masterTimeLine"}}),t=c.a.timeline({scrollTrigger:{trigger:k.current,start:"center center",end:"+=20%",scrub:!0}}),n=c.a.timeline({scrollTrigger:{trigger:C.current,start:"top bottom",end:"center center",scrub:!0,id:"firstMobileTimeLineJustBeforePin"}}),i=c.a.timeline({scrollTrigger:{trigger:C.current,endTrigger:k.current,start:"center center",end:"top bottom",scrub:!0,pin:C.current,id:"firstMobileTimeline"}}),a=c.a.timeline({scrollTrigger:{trigger:k.current,start:"center center",end:"=+4500vh",scrub:!0,pin:k.current,id:"secondMobileTimeline"}});n.fromTo(O.current,{scale:Z.current,y:"40vh"},{scale:ee.current,y:"0",duration:1}).fromTo(j.current,{borderRadius:0},{borderRadius:0,duration:1}),i.add("videoFrameReachedCenter",0).fromTo(O.current,{scale:ee.current},{scale:1,duration:1.5},"videoFrameReachedCenter").fromTo(M.current,{visibility:"hidden",opacity:0,scale:1.5},{visibility:"unset",opacity:1,scale:1,height:"max-content"},"videoFrameReachedCenter").to(U.current,{position:"absolute",borderRadius:"100px",ease:"slow"},"videoFrameReachedCenter").fromTo(S.current,{display:"none",y:"20vh",autoAlpha:0},{display:"flex",y:"0",duration:1,autoAlpha:1},"videoFrameReachedCenter").add("videoIsInsideFrame",1.5).fromTo(V.current,{y:"20vh",autoAlpha:0},{y:0,autoAlpha:1,duration:1},"videoIsInsideFrame").add("liveSliderAdded",2.5).to(O.current,{scale:.8,duration:2},"liveSliderAdded").to(V.current,{scale:1.15,y:"5vh",duration:3},"liveSliderAdded").add("beforeFirstFrameAnimationEnd",5.5).to(S.current,{y:"-30vh",duration:.5,autoAlpha:0},"beforeFirstFrameAnimationEnd"),a.add("afterPhonePinned",0).fromTo(T.current,{display:"none",y:"5vh",opacity:0},{display:"flex",y:"0",opacity:1,duration:1},"afterPhonePinned").to(E.current,{scale:.8,y:"-5vh",duration:1.5},"afterPhonePinned").to(W.current,{scale:J.current,y:"5vh",duration:1.5},"afterPhonePinned").to(T.current,{scale:.8,duration:2},"afterPhonePinned").add("phoneSliderShowcaseCompleted",2.2).to(W.current,{autoAlpha:0,display:"none",duration:.05},"phoneSliderShowcaseCompleted").to(E.current,{x:Y.current,duration:2,scale:1},"phoneSliderShowcaseCompleted").to(N.current,{opacity:0,duration:1.5},"phoneSliderShowcaseCompleted").fromTo(I.current,{display:"none",opacity:"0",y:"40vh",x:"20vw"},{display:"block",opacity:"1",duration:2.2,y:"50px",x:"0"},"phoneSliderShowcaseCompleted").to(T.current,{y:"-50vh",duration:.5},"phoneSliderShowcaseCompleted").add("phoneFrameGoingRight",3).fromTo(_.current,{display:"none",opacity:0,y:"0vh"},{display:"block",opacity:1,y:"-5vh",duration:.5},"phoneFrameGoingRight").add("afterTrainerTileAndTextPlaced",5).to(I.current,{display:"none",opacity:"0",duration:.1},"afterTrainerTileAndTextPlaced").to(_.current,{y:"-50vh",opacity:"0",duration:.1},"afterTrainerTileAndTextPlaced").to(E.current,{x:0,rotate:90,scale:.55,duration:2,y:"5vh"},"afterTrainerTileAndTextPlaced").fromTo(G.current,{display:"none",opacity:0},{display:"block",opacity:1,duration:2},"afterTrainerTileAndTextPlaced").add("afterMobileInPortrait",7).fromTo(z.current,{display:"none",opacity:0,x:"-50vh"},{display:"block",opacity:1,x:"0",duration:1},"afterMobileInPortrait").fromTo(A.current,{display:"none",opacity:0,x:"50vh"},{display:"block",opacity:1,x:"0",duration:1},"afterMobileInPortrait").fromTo(X.current,{display:"none",opacity:0},{display:"block",opacity:1,duration:.5},"afterMobileInPortrait").fromTo(P.current,{display:"flex",opacity:0,y:"10vh"},{opacity:1,y:"0vh",duration:.5},"afterMobileInPortrait").add("mobileWithDeviceAnimationDone",8).to(P.current,{autoAlpha:0,duration:.5},"mobileWithDeviceAnimationDone"),e.add(n,0).add(i,1).add(t,2).add(a,2)}),[]),a.a.createElement(ae,{ref:R},a.a.createElement(oe,{ref:S},a.a.createElement(b,{heading:m,subHeading:u})),a.a.createElement(ge,{ref:C},a.a.createElement(se,null,a.a.createElement(me,{ref:O},a.a.createElement(Ce,{ref:j,maxHeight:te.current},a.a.createElement(de,{ref:M},a.a.createElement(H.a,{src:je,aspectRatio:2.03,alt:"phone",hasDynamicWidth:!0,displayShimmer:!1,wrapperStyle:{position:"relative",zIndex:5},imageStyle:{maxHeight:te.current}})),a.a.createElement("video",{width:"100%",ref:U,style:{position:"relative",top:0,zIndex:2,maxHeight:"100%"},autoPlay:!0,muted:!0,controls:!1,loop:!0,src:r}))),a.a.createElement(we,{ref:V},d&&a.a.createElement(Q,Object.assign({isMobile:t},d,{isTablet:!1}))))),a.a.createElement(re,{ref:T},a.a.createElement(b,{heading:g,subHeading:p})),a.a.createElement(le,{ref:P},a.a.createElement(Ee,null,a.a.createElement(b,{heading:y,subHeading:v}))),a.a.createElement(pe,{ref:k},a.a.createElement(he,{ref:z},a.a.createElement(F,null)),a.a.createElement(fe,{ref:_},a.a.createElement(w,{heading:f,subHeading:h})),a.a.createElement(se,null,a.a.createElement(me,{ref:E},a.a.createElement(ke,{maxHeight:te.current,ref:B},a.a.createElement(H.a,{src:je,aspectRatio:2.03,alt:"phone",hasDynamicWidth:!0,displayShimmer:!1,wrapperStyle:{position:"relative",zIndex:5},imageStyle:{maxHeight:te.current}}),a.a.createElement("video",{width:"100%",ref:N,style:{position:"absolute",top:0,zIndex:2,borderRadius:100},autoPlay:!0,muted:!0,controls:!1,loop:!0,src:o}),a.a.createElement(ve,{ref:G},a.a.createElement(H.a,{src:Oe,aspectRatio:.48,alt:"app screen",hasDynamicWidth:!0,displayShimmer:!1,wrapperStyle:{position:"absolute",zIndex:3,top:20,left:0,borderRadius:"100px"}}))),a.a.createElement(ce,null),x&&x.items&&a.a.createElement(be,{ref:I},a.a.createElement(L,{isMobile:t,slidesToShow:K.current,items:x.items})),a.a.createElement(xe,{ref:X},a.a.createElement(q,null))),a.a.createElement(ue,{ref:W},s&&a.a.createElement(ie,Object.assign({isMobile:t},s)))),a.a.createElement(ye,{ref:A},a.a.createElement(D,null))))};var Te=Object(r.connect)((function(e){return{isMobile:e.device.isMobile}}))((function(e){const[t,n]=Object(i.useState)(0);Object(i.useLayoutEffect)((function(){o()}),[]);const o=function(){void 0!==window&&n(window.innerWidth)};return Object(i.useEffect)((function(){addEventListener("resize",o)}),[t]),a.a.createElement(a.a.Fragment,null,a.a.createElement(Se,Object.assign({windowWidth:t},e)))})),Re=(n("./src/common/styles/__commonStyle.ts"),n("./src/common/designframework/Styles/__commonStyle.ts"));const We={cursor:"default"},_e=Object.assign(Object.assign({},We),{[Re.g]:{marginBottom:5}}),Ie=Object.assign(Object.assign({},We),{marginBottom:60,[Re.g]:{marginBottom:20}}),ze={[Re.g]:{height:330,width:120}},Ae={[Re.g]:{height:280,width:140,marginTop:80}},Pe={[Re.g]:{height:330,width:100}};const Le=Object(s.a)("div",{target:"esh6f7v0"})({name:"1fd7y38",styles:"display:flex;justify-content:center;margin-top:30px"}),Me={marginRight:5},De=function(e){return Object(j.a)(e,{})},Be=function({castingDevices:e}){const{appleTV:t,androidTV:n,fireTV:i,chromeCast:o}=e;return a.a.createElement(Le,null,a.a.createElement(H.a,{src:De(t),aspectRatio:2.25,alt:"appleTV",width:45,wrapperStyle:Me}),a.a.createElement(H.a,{src:De(n),aspectRatio:5.25,width:105,alt:"appleTV",wrapperStyle:Me}),a.a.createElement(H.a,{src:De(i),aspectRatio:2.25,alt:"appleTV",width:45,wrapperStyle:Me}),a.a.createElement(H.a,{src:De(o),aspectRatio:5.5,width:110,alt:"appleTV"}))};var Fe=n("./src/common/designframework/layout/containers/index.ts"),He=n("./src/common/designframework/layout/sections/index.ts");const Ue=Object(s.a)("div",{target:"ewnl4cw0"})({display:"flex",justifyContent:"space-between"},"");var Ne=Object(r.connect)((function(e){return{isMobile:e.device.isMobile}}))((function(e){const{subTitle:t,title:n,laptopImage:i,mobileImage:o,tabletImage:r}=e;return a.a.createElement(He.a,null,a.a.createElement(Fe.a,{gridMobile:10},a.a.createElement(f.d,{variant:f.b.H3,customStyles:_e,fontColor:f.a.white80,alignment:"center"},n),a.a.createElement(f.d,{variant:f.b.P1,customStyles:Ie,fontColor:f.a.white,alignment:"center"},t),a.a.createElement(Ue,null,a.a.createElement(H.a,{src:Object(j.a)(i,{}),aspectRatio:1,alt:"laptop image",hasDynamicWidth:!0,wrapperStyle:ze}),a.a.createElement(H.a,{src:Object(j.a)(o,{}),aspectRatio:1,alt:"mobile image",hasDynamicWidth:!0,wrapperStyle:Ae}),a.a.createElement(H.a,{src:Object(j.a)(r,{}),aspectRatio:1,alt:"tablet image",hasDynamicWidth:!0,wrapperStyle:Pe})),a.a.createElement(Be,{castingDevices:e.castingDevices})))}));t.default=function(e){return function(e){return{[o.a.LIVE_ANIMATION_BIG_SECTION]:a.a.createElement(Te,Object.assign({},e)),[o.a.DEVICE_GROUP_WIDGET]:a.a.createElement(Ne,Object.assign({},e))}}(e)[e.widgetType]}},"./src/common/designframework/elements/Button/Contained/Secondary/index.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n("./node_modules/react/index.js"),a=n.n(i),o=n("./src/common/designframework/elements/Button/constants.ts"),r=n("./src/common/designframework/elements/Button/Contained/index.tsx"),s=n("./src/common/designframework/components/Image/index.tsx"),c=n("./src/common/designframework/elements/Button/Contained/__style.ts");const l=n("./assets/images/buttons/dice_secondary.svg"),d=n("./assets/images/buttons/dice_disabled.svg"),m=function(e){const{size:t=o.a.md,disabled:n=!1,icon:i=!1,showLiveDot:m,transformToUpperCase:u=!0}=e,g=n?d:l,p={size:t,icon:g};return a.a.createElement(r.c,Object.assign({size:t,color:r.a.secondary},e),i&&a.a.createElement(s.a,{src:g,aspectRatio:1,alt:"::",width:o.f[t].width,wrapperStyle:Object(c.d)(p)}),m&&a.a.createElement(c.b,null),a.a.createElement(c.a,{className:o.c,fullWidth:!!e.fullWidth,transformToUpperCase:u},e.children))};t.b=m},"./src/common/designframework/elements/Button/Contained/__style.ts":function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var i=n("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),a=n("./src/common/designframework/elements/Button/Contained/constants.ts"),o=n("./src/common/designframework/elements/Button/constants.ts"),r=n("./src/common/styles/variables/colors.ts");const s=function(e){return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},o.e),a.b[e.color]),o.b[e.size]),e.fullWidth?{width:"100%"}:{}),e.customStyles||{})},c=function(e){return Object.assign({marginRight:"8px"},o.f[e.size])},l=Object(i.a)("div",{target:"elw9ims1"})((function(e){return Object.assign({transition:"all 250ms ease",display:"flex",textTransform:e.transformToUpperCase?"uppercase":"none"},e.fullWidth?{width:"fit-content"}:{})}),""),d=Object(i.a)("div",{target:"elw9ims0"})({height:8,width:8,marginRight:8,borderRadius:4,backgroundColor:r.d.statusGreen},"")},"./src/common/designframework/elements/Button/Contained/constants.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return l}));var i,a=n("./src/common/styles/variables/colors.ts"),o=n("./src/common/designframework/Styles/__commonStyle.ts"),r=n("./src/common/designframework/elements/Button/constants.ts");!function(e){e.primary="primary",e.secondary="secondary"}(i||(i={}));const s=".".concat(r.c),c={[i.primary]:{background:a.d.white,[s]:Object.assign(Object.assign({color:a.d.burntSienna,background:"linear-gradient(134.58deg, #FFDB17 -79.01%, #FF3278 103.85%)"},o.d),{"-webkit-text-fillColor":"initial"}),"&:hover":{[s]:{color:a.d.black,background:"initial","-webkit-text-fill-color":a.d.black}},"&:disabled":{background:a.d.white70,cursor:"not-allowed",[s]:{color:a.d.blackRussian,background:"initial","-webkit-text-fill-color":a.d.blackRussian}}},[i.secondary]:{background:a.d.white10,color:a.d.white,backdropFilter:"blur(50px)","&:hover":{background:a.d.white20},"&:disabled":{background:a.d.white20,backdropFilter:"blur(27.1828px)",cursor:"not-allowed",[s]:{color:a.d.white20}}}};var l;!function(e){e.PRIMARY_FIRST="PRIMARY_FIRST",e.PRIMARY_LAST="PRIMARY_LAST"}(l||(l={}))},"./src/common/designframework/elements/Button/Contained/index.tsx":function(e,t,n){"use strict";n.d(t,"b",(function(){return s.a})),n.d(t,"a",(function(){return r.a}));var i=n("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),a=n("./node_modules/react/index.js"),o=n.n(a),r=n("./src/common/designframework/elements/Button/Contained/constants.ts"),s=n("./src/common/designframework/elements/Button/constants.ts"),c=n("./src/common/designframework/elements/Button/Contained/__style.ts");const l=Object(i.a)("button",{target:"e1ru7deb0"})(c.c,"");t.c=function(e){const{color:t,children:n,customStyles:i,onClick:a=function(){return null},disabled:r=!1,size:s,fullWidth:c=!1}=e;return o.a.createElement(l,{color:t,size:s,customStyles:i,onClick:a,disabled:r,fullWidth:c},n)}},"./src/common/designframework/elements/Button/constants.ts":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return l}));var i=n("./src/common/styles/variables/fonts.ts");const a="button_text";var o;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o||(o={}));const r={[o.sm]:{fontSize:12,lineHeight:"12px",borderRadius:5,padding:"7px 15px",fontWeight:700},[o.md]:{fontSize:14,lineHeight:"14px",borderRadius:5,padding:"11.5px 20px",fontWeight:700},[o.lg]:{fontSize:18,lineHeight:"18px",borderRadius:5,padding:"17px 30px 17px",fontWeight:700},[o.xl]:{fontSize:20,lineHeight:"20px",borderRadius:5,padding:"20px 30px 20px",fontWeight:700}},s={[o.sm]:{height:15,width:15,minWidth:15},[o.md]:{height:18,width:18,minWidth:18},[o.lg]:{height:22,width:22,minWidth:22},[o.xl]:{height:24,width:24,minWidth:24}},c={cursor:"pointer",fontFamily:i.c.interMedium,border:"1px solid transparent",transition:"all 250ms ease",display:"flex",justifyContent:"center",alignItems:"center"};var l;!function(e){e.PRIMARY="PRIMARY",e.SECONDARY="SECONDARY",e.PRIMARY_OUTLINED="PRIMARY_OUTLINED",e.SECONDARY_OUTLINED="SECONDARY_OUTLINED",e.PRIMARY_TEXT_BUTTON="PRIMARY_TEXT_BUTTON"}(l||(l={}))},"./src/common/styles/__commonStyle.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c}));var i=n("./src/common/styles/variables/common.ts"),a=n("./src/common/designframework/Styles/__commonStyle.ts");const o=function(){return{"&:after":{display:"table",content:"' '",clear:"both"},"&:before":{display:"table",content:"' '"}}},r=function(e){return Object.assign(Object.assign({marginRight:"auto",marginLeft:"auto",paddingLeft:i.b,paddingRight:i.b,[a.g]:Object.assign({},e&&e.customMobileStyles||{}),"@media (min-width:768px)":{width:"720px",paddingLeft:i.a,paddingRight:i.a},"@media (min-width:992px)":{width:"944px"},"@media (min-width:1300px)":{width:"1252px"}},o),e&&e.customStyles||{})},s=function(){return Object.assign({marginRight:"auto",marginLeft:"auto",paddingLeft:i.b,paddingRight:i.b,"@media (min-width: 768px)":{paddingLeft:i.a,paddingRight:i.a}},o)},c=function(){return Object.assign({marginLeft:-i.c,marginRight:-i.c,"@media (min-width: 768px)":{marginLeft:-i.c,marginRight:-i.c}},o)}}}]);