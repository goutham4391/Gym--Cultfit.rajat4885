(window.webpackJsonp=window.webpackJsonp||[]).push([["CommunityWidget"],{"./src/common/components/widgets/CommunityWidget/index.tsx":function(e,t,i){"use strict";i.r(t);var n=i("./node_modules/react/index.js"),a=i.n(n),o=i("./node_modules/react-redux/es/index.js"),r=i("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),c=i("./src/common/designframework/Styles/__commonStyle.ts"),l=i("./src/common/styles/variables/colors.ts");const s={padding:"20px 0px",[c.g]:{padding:"7px 0px",opacity:1},[c.i]:{fontSize:"18px",fontFamily:"Inter-Medium,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif",letterSpacing:"-0.2px",lineHeight:"28px",padding:"7px 0px",opacity:1}},d={padding:"20px 0px",marginBottom:"30px",[c.e]:{padding:"7px 0px",marginBottom:"16px"},[c.i]:{fontSize:"24px",fontFamily:"Inter-Extra-Bold,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif",letterSpacing:"-0.3px",lineHeight:"30px"}},m={width:"88%",[c.g]:{width:"100%"},[c.i]:{width:"100%"}},p={display:"flex",justifyContent:"center",alignItems:"flex-start",[c.g]:{flexDirection:"column"}},g={cursor:"pointer",width:"50%",[c.g]:{width:"auto"},[c.i]:{fontSize:"16px",fontFamily:"Inter-Medium,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif",letterSpacing:"0px",lineHeight:"25px"}},u={color:l.d.blueCrayola,cursor:"pointer",marginTop:"30px",textAlign:"left",[c.i]:{fontSize:"14px",fontFamily:"Inter-Bold,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif",letterSpacing:"0px",lineHeight:"18px"}};var x=i("./src/common/designframework/elements/Fonts/index.tsx"),f=i("./src/common/designframework/components/Image/index.tsx"),b=i("./src/common/utils/CloudinaryUtil.ts"),y=i("./src/common/designframework/elements/Anchor/index.tsx"),h=i("./src/app.config.ts"),w=i("./src/client/analytics/hoc/ClickAnalyticsWrapper/WidgetClickAnalyticsWrapper.tsx");const v=Object(r.a)("div",{target:"e1yegi3r4"})(c.a,""),O=Object(r.a)("div",{target:"e1yegi3r3"})((function(e){return{width:"100%",padding:"130px 0px 150px",backgroundImage:`url(${e.backgroundImage})`,position:"relative",backgroundPosition:"center right",backgroundRepeat:"no-repeat",backgroundSize:"cover",[c.f]:{marginBottom:50},[c.g]:{padding:"20px 0 70px",backgroundPosition:"center bottom"},[c.i]:{padding:"20px 0 70px",backgroundPosition:"center bottom"}}}),""),k=Object(r.a)("div",{target:"e1yegi3r2"})((function(){return{width:"60%",position:"relative",right:"-5vw",[c.e]:{width:"100%",right:"unset",marginTop:"50px"}}}),""),E=Object(r.a)("div",{target:"e1yegi3r1"})((function(){return{height:"100%",display:"flex",flexDirection:"column",width:"38%",[c.g]:{width:"100%",padding:"6% 0 2% 28px"},[c.i]:{width:"100%",padding:"6% 0 2% 28px"}}}),""),S=Object(r.a)("div",{target:"e1yegi3r0"})(p,"");var H=function(e){const{title:t,subTitle:i,description:n,isMobile:o,image:r,backgroundImage:c,widgetMetric:l}=e,p={resize:{aspectRatio:o?"0.55":"2",width:o?375:1600}},H={resize:{aspectRatio:o?"1.53":"1.315",width:o?330:700}};return a.a.createElement(w.default,{widgetMetric:l,actionMetric:{actionText:"JOIN NOW",actionTarget:h.a.FACEBOOK_GROUP_WORKOUT}},a.a.createElement(y.a,{href:h.a.FACEBOOK_GROUP_WORKOUT,enableRedirect:!0},a.a.createElement(O,{backgroundImage:Object(b.a)(c,p)},a.a.createElement(v,null,a.a.createElement(S,null,a.a.createElement(E,null,a.a.createElement(x.d,{variant:x.b.H3_2,customStyles:s,alignment:"left",fontColor:o?x.a.white70:x.a.white80},t),a.a.createElement(x.d,{variant:x.b.H2_1,customStyles:d,alignment:"left",fontColor:x.a.white},i),a.a.createElement(x.d,{variant:x.b.P1,fontColor:x.a.white80,alignment:"left",customStyles:g},n),a.a.createElement(x.d,{variant:x.b.P3_1,customStyles:u},"JOIN NOW")),a.a.createElement(k,null,a.a.createElement(f.a,{src:Object(b.a)(r,H),hasDynamicWidth:!0,aspectRatio:o?1.53:1.315,alt:"cult community",imageStyle:m})))))))};t.default=Object(o.connect)((function(e){return{isMobile:e.device.isMobile}}))((function(e){return a.a.createElement(H,Object.assign({},e))}))}}]);