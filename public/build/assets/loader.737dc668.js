window.addEventListener("load",function(){var s=document.getElementById("load_screen");document.body.removeChild(s);var r="Collapsible Menu";let e="";var a={admin:"Css Bans Template",settings:{layout:{name:r,darkMode:themeMode}},reset:!1};if(a.reset&&localStorage.clear(),localStorage.length===0)e=a;else{let o=localStorage.getItem("theme"),t=JSON.parse(o);o!==null?t.admin==="Css Bans Template"?t.settings.layout.name===r?e=t:e=a:t.admin===void 0&&(e=a):e=a}if(e.settings.layout.darkMode){localStorage.setItem("theme",JSON.stringify(e));let o=localStorage.getItem("theme");if(JSON.parse(o).settings.layout.darkMode){let t=document.body.getAttribute("page")==="starter-pack";document.body.classList.add("layout-dark"),t&&document.querySelector(".navbar-logo")&&document.querySelector(".navbar-logo").setAttribute("src","/images/logo.svg")}}else{localStorage.setItem("theme",JSON.stringify(e));let o=localStorage.getItem("theme");if(!JSON.parse(o).settings.layout.darkMode){let t=document.body.getAttribute("page")==="starter-pack";document.body.classList.remove("layout-dark"),t&&document.querySelector(".navbar-logo")&&document.querySelector(".navbar-logo").setAttribute("src","../../src/assets/img/logo2.svg")}}document.body.getAttribute("layout")==="full-width"&&(document.body.classList.remove("layout-boxed"),document.querySelector(".header-container")&&document.querySelector(".header-container").classList.remove("container-xxl"),document.querySelector(".middle-content")&&document.querySelector(".middle-content").classList.remove("container-xxl"))});
