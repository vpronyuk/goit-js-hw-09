const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let a=null;t.addEventListener("click",(()=>{a=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0,d.disabled=!1})),d.addEventListener("click",(()=>{t.disabled=!1,d.dosabled=!0,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.1a1863ff.js.map
