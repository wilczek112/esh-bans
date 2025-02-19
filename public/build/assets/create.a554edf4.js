document.addEventListener("change",function(e){if(e.target.matches("#permanent")){var t=document.getElementById("expires");t.disabled=e.target.checked,e.target.checked&&(t.value="")}});
