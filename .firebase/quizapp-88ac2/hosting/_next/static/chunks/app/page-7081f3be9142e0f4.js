(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7853:(e,t,s)=>{Promise.resolve().then(s.bind(s,2987))},2987:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var a=s(7437),l=s(2265);function n(e,t,s,l,n,i){let d="bg-[#5F5980] text-white p-5 text-left rounded-lg w-full",r="bg-[#417F43] text-white p-5 text-left rounded-lg w-full",c="bg-[#892325] text-white p-5 text-left rounded-lg w-full";return(0,a.jsx)("div",{className:"grid grid-cols-1 gap-5 p-10",children:e.map((e,o)=>o==t?(0,a.jsx)("button",{onClick:e=>{i(n+1),s||(e.target.className=r,l(!0))},id:"right-answer",className:d,children:e},o):(0,a.jsx)("button",{onClick:e=>(function(e){if(s)return;e.target.className=c,e.target.id="wrong-answer",function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;setTimeout(()=>{e.target.className=d},t),setTimeout(()=>{e.target.className=c},2*t),setTimeout(()=>{e.target.className=d},3*t),setTimeout(()=>{e.target.className=c},4*t),setTimeout(()=>{e.target.className=d},5*t),setTimeout(()=>{e.target.className=c},6*t)}(e,300);let t=document.getElementById("right-answer");setTimeout(()=>{t.className=r},2100),l(!0)})(e),className:d,children:e},o))})}function i(e,t){return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-2 bg-white text-black p-5 rounded-lg shadow-md",children:[(0,a.jsx)("h2",{className:"leading-tight",children:e}),(0,a.jsx)("img",{className:"rounded-xl h-[350px] m-auto object-contain",src:"./images/"+t,alt:t})]})})}function d(){let[e,t]=(0,l.useState)([{answers:["not loaded"],correctIndex:0,question:"not loaded",image:"not loaded"}]),[s,d]=(0,l.useState)(0),[r,c]=(0,l.useState)(!1),[o,u]=(0,l.useState)(0),[g,m]=(0,l.useState)(1);return(0,l.useEffect)(()=>{fetch("questionsDb.json").then(e=>{e.json().then(e=>{t(e),d(Math.floor(10*Math.random()))})})},[]),(0,a.jsxs)("div",{className:"text-center text-lg font-irish text-[50px] bg-[#2F3061]",children:[(0,a.jsx)("div",{className:"flex flex-row justify-around align-center p-5 bg-[#5F5980]",children:(0,a.jsx)("h1",{className:"m-auto",children:"Quiz Page"})}),(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{id:"answer-box",children:e.length>0?n(e[s].answers,e[s].correctIndex,r,c,o,u):n(["not loaded"],0,r,c,o,u)}),(0,a.jsx)("div",{className:"p-10",children:(0,a.jsx)("button",{onClick:function(){d(s+1),9==s&&d(0);let e=document.getElementById("right-answer");e&&(e.className="bg-[#5F5980] text-white p-5 text-left rounded-lg w-full");let t=document.getElementById("wrong-answer");t&&(t.className="bg-[#5F5980] text-white p-5 text-left rounded-lg w-full"),c(!1),m(g+1)},className:"text-white p-5 text-center rounded-lg w-full bg-[#417F43] m-auto ",children:"Next question"})})]}),(0,a.jsxs)("div",{className:"m-5",children:[e.length>0?i(e[s].question,e[s].image):i("not loaded","not loaded"),(0,a.jsxs)("div",{className:"text-white text-center text-5xl m-5",children:["Score = ",o,"/",g]})]})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[130,215,744],()=>t(7853)),_N_E=e.O()}]);