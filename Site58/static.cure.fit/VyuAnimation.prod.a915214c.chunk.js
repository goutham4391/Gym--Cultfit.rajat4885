(window.webpackJsonp=window.webpackJsonp||[]).push([["VyuAnimation"],{"./src/common/designframework/VyuAnimation/index.tsx":function(e,t,r){"use strict";r.r(t);var n=r("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),c=r("./node_modules/react/index.js"),o=r.n(c),i=r("./src/common/utils/lodashUtil.ts");const a=function(e){return e*window.innerHeight},u=function(e,t){e.current&&(e.current.style.transform=`translate3d(0,${t}px,0)`)},s=function(e,t){e.current&&(e.current.style.opacity=String(t))},l=function(e,t,r){e.current&&(e.current.style.transform=`scale3d(${t},${r},1)`)};var f=r("./src/common/utils/HTMLUtil.ts");var m=function(e,t,r,n){const c=window.innerHeight,o=i.a.get(t,r.current+".triggerInitBaseOffset",0),u=i.a.get(t,r.current+".range.1",0),s=i.a.get(t,r.current+".range.0",0),l=i.a.get(t,r.current+".triggerEndBaseOffset",0)-o;let m=0;const d=a(o)+Object(f.b)(e.current)-c,b=d+l*c;return window.scrollY<d?(r.current&&r.current-1>=0&&(r.current-=1),s):window.scrollY>=b+5?(null!==r.current&&r.current+1<t.length&&(r.current+=1),u):(m=(u-s)/a(l)*(window.scrollY-d)+s,m.toFixed(n))},d=r("./node_modules/react-is-visible/lib/index.js");const b=function(e){const{hasOpacityAnimation:t,hasTransformAnimation:r}=e,n=[];return t&&n.push("opacity"),r&&n.push("transform"),n.join(", ")};var g;!function(e){e.DOWN="DOWN",e.UP="UP",e.NONE="NONE"}(g||(g={}));const p=Object(n.a)("div",{target:"e432xdk2"})((function(e){return Object.assign({transformStyle:"preserve-3d",willChange:b(e)},e.customStyles)}),""),w=Object(n.a)("div",{target:"e432xdk1"})((function(e){return{background:e.debugName?"green":"transparent",width:e.debugName?"50px":0,height:e.debugName?"50px":0,position:"absolute",zIndex:10,top:e.topPixelOffset?e.topPixelOffset:0}}),""),O=Object(n.a)("div",{target:"e432xdk0"})((function(e){return{background:e.debugName?"red":"transparent",width:e.debugName?"50px":0,height:e.debugName?"50px":0,position:"absolute",zIndex:10,bottom:e.bottomPixelOffset?e.bottomPixelOffset:0}}),"");t.default=function(e){const{config:t={},debugName:r,customStyles:n,topPixelOffset:f,bottomPixelOffset:b}=e,x=function(){return r?console.log:function(){}},j=Object(c.useRef)(null),N=Object(c.useRef)(null),y=Object(c.useRef)(null),h=Object(c.useRef)(0),v=Object(c.useRef)(0),R=Object(c.useRef)(0),P=Object(c.useRef)(0),T=Object(c.useRef)(!1),A=Object(c.useRef)(g.NONE),Y=Object(d.useIsVisible)(N),E=Object(d.useIsVisible)(y),$=Object(c.useRef)(!1),k=Object(c.useRef)(!1),U=Object(c.useRef)(!1),W=Object(c.useRef)(null),D=Object(c.useRef)(null),S=Object(c.useRef)(null),V=!!i.a.get(t,"translate",[]).length,F=!!i.a.get(t,"opacity",[]).length,I=!!i.a.get(t,"scale",[]).length,M=Object(c.useRef)([]);Object(c.useEffect)((function(){return window.addEventListener("scroll",q,!1),function(){window.removeEventListener("scroll",q,!1)}}),[]);const B=function(){P.current<window.scrollY?(A.current=g.DOWN,P.current=window.scrollY):P.current>window.scrollY&&(A.current=g.UP,P.current=window.scrollY)};Object(c.useEffect)((function(){B(),Y?(k.current=Y,$.current=!0,x()(`%c🚧 [Target ${r}] is visible, top pixel is visible`,"color:blue")):E?(U.current=E,$.current=!0,x()(`%c🚧 [Target ${r}] is visible, bottom pixel is visible`,"color:blue")):k.current&&!Y&&A.current===g.DOWN?(k.current=Y,x()(`%c🚧 [Target ${r}] Top Pixel exited viewport from top | DOWN Movement`,"color:brown")):U.current&&!E&&A.current===g.DOWN?(U.current=E,$.current=!1,x()(`%c🚧 [Target ${r}] is not visible, bottomPixel exited viewport from top | DOWN Movement`,"color:red")):U.current&&!E&&A.current===g.UP?(U.current=E,x()(`%c🚧 [Target ${r}] Bottom Pixel exited viewport from bottom | UP Movement`,"color:brown")):k.current&&!Y&&A.current===g.UP&&(k.current=Y,$.current=!1,x()(`%c🚧 [Target ${r}] is not visible, Top pixel went back below bottom | UP Movement`,"color:red"))}),[Y,E]);const q=function(){!T.current&&$.current&&window.requestAnimationFrame(_)};Object(c.useEffect)((function(){M.current=i.a.get(t,"translate",[]).map((function(e){return Object.assign(Object.assign({},e),{range:[a(i.a.get(e,"range.0",0)),a(i.a.get(e,"range.1",0))]})})),H(),t&&(T.current=!0,P.current=window.scrollY,window.requestAnimationFrame(_))}),[t]);const H=function(){P.current=0,F&&(v.current=i.a.get(t,"opacity.0.range.0","initial"),D.current=0,s(j,v.current)),V&&(h.current=a(i.a.get(t,"translate.0.range.0",0)),W.current=0,u(j,h.current)),I&&(R.current=i.a.get(t,"scale.0.range",1),S.current=0,l(j,R.current,R.current))},L=function(e){const{hasTranslateAnimation:t=!1,hasScaleAnimation:r=!1,hasOpacityAnimation:n=!1,dynamicTargetRef:c,translateY:o,opacity:i,scale:a}=e;return function(e){const{translateYNext:f,opacityNext:m,scaleNext:d}=e;var b,g,p,w,O;t&&r?o.current===f&&a.current===d||(g=0,p=f,w=d,O=d,(b=c).current&&(b.current.style.transform=`translate3d(${g},${p}px,0) scale3d(${w},${O},1)`),o.current=f,a.current=d):t&&o.current!==f?(u(c,f),o.current=f):r&&a.current!==d&&(l(c,d,d),a.current=d),n&&i.current!==m&&(s(c,m),i.current=m)}}({hasTranslateAnimation:V,hasScaleAnimation:I,hasOpacityAnimation:F,translateY:h,opacity:v,scale:R,dynamicTargetRef:j}),_=function(){const e=window.scrollY;if(T.current=!0,!$.current)return void(T.current=!1);if(P.current===e)return void(T.current=!1);if(!T.current)return;let r,n,c;B(),P.current=window.scrollY,V&&(r=m(j,M.current,W,4)),F&&(n=m(j,i.a.get(t,"opacity",[]),D,2)),I&&(c=m(j,i.a.get(t,"scale",[]),S,4)),L({translateYNext:r,opacityNext:n,scaleNext:c}),T.current&&window.requestAnimationFrame(_)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{ref:N,className:"targetWrapperTopVisibilityRef",debugName:r,topPixelOffset:f}),o.a.createElement(p,{ref:j,customStyles:n,hasOpacityAnimation:F,hasTransformAnimation:V||I},e.children),o.a.createElement(O,{ref:y,className:"targetWrapperBottomVisibilityRef",debugName:r,bottomPixelOffset:b}))}}}]);