$(document).ready(function(){function t(e){if(!e.id)return e.text;var a=$('<span><img src="'+$(e.element).data("image")+'" class="flag-width" alt="flag" /> '+e.text+"</span>");return a}$("#language-dropdown").select2({templateResult:t,templateSelection:t,width:"resolve"}).on("change",function(){const e=$(this).val();document.cookie="language="+e+";path=/",location.reload()})});
