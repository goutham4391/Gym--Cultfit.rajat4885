(window.webpackJsonp=window.webpackJsonp||[]).push([["SEOFooterWidgetV2"],{"./src/common/components/widgets/SEOFooterWidget/SEOFooterWidgetV2.tsx":function(e,t,o){"use strict";o.r(t);var n=o("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),r=o("./node_modules/react/index.js"),a=o.n(r),s=o("./node_modules/react-redux/es/index.js"),i=o("./src/common/designframework/elements/Fonts/index.tsx"),c=o("./src/common/designframework/layout/containers/index.ts"),m=o("./src/common/designframework/layout/sections/index.ts"),l=o("./node_modules/url-parse/index.js"),d=o.n(l),u=o("./src/common/designframework/elements/Anchor/index.tsx"),g=o("./src/common/styles/variables/colors.ts"),f=o("./src/common/designframework/Styles/__commonStyle.ts");const p={padding:"40px 0",backgroundColor:g.a.mirage,[f.g]:{padding:"10px 0 20px"}},h={columnCount:2,columnGap:"2em",maxWidth:"100%",[f.g]:{columnCount:1,padding:"0 15px 15px 15px"}},b={marginTop:30,marginBottom:15},w={position:"relative",transition:"all 80ms ease","&::after":{content:'" "',opacity:0,position:"absolute",bottom:-2,width:"100%",height:1,left:0,background:g.d.white30},"&:hover":{"&::after":{opacity:1}}},x=Object(n.a)("div",{target:"evdwdmj0"})((function(e){return{margin:1===e.dataLength?"0 0 2% 0":"0 1% 2% 0",[f.g]:{margin:"0 1% 2% 0"}}}),""),y=function(e){const{dataLength:t,title:o,description:n}=e,s=Object(r.useMemo)((function(){return function(e=""){const t=/\[\*.*?\*\].*?\(\*.*?\*\)/gim,o=e?e.split(t):[""];if(o.length<=1)return e||"";const n=e.match(t);return o.reduce((function(e,t,o){if(n&&n[o]){const r=/\(\*.*?\*\)/gim,s=n[o].match(/\[\*.*?\*\]/gim),i=n[o].match(r);let c,m;if(s&&(c=s[0],c=c.replace("[*",""),c=c.replace("*]",""),c=c.trim()),i&&(m=i[0],m=m.replace("(*",""),m=m.replace("*)",""),m=m.trim()),m&&c){const n=d()(m);return[...e,t,a.a.createElement(u.a,{href:""+n.href,enableRedirect:!0,anchorProps:{target:"_blank",rel:"noreferrer noopener"},key:o,customStyles:w},c)]}return[...e,t]}return[...e,t]}),[])}(n)}),[n]);return a.a.createElement(x,{dataLength:t},a.a.createElement(i.d,{variant:i.b.P5,fontColor:i.a.white60,alignment:"left",customStyles:b},o),a.a.createElement(i.d,{variant:i.b.P5,fontColor:i.a.white30,alignment:"left"},s))};t.default=Object(s.connect)((function(e){var t;return{seoFooter:null===(t=e.seo.seoData)||void 0===t?void 0:t.seoFooter}}))((function(e){const{seoFooter:t}=e;return t&&(null==t?void 0:t.footerData)?a.a.createElement(m.a,{customStyles:p},a.a.createElement(c.a,{customStyles:h},t.footerData.map((function(e,o){return a.a.createElement(y,Object.assign({},e,{dataLength:t.footerData.length,key:o}))})))):null}))}}]);