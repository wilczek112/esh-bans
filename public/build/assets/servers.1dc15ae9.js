import{a as d}from"./index.f0052de0.js";import{s as n,h as o,a as l}from"./utility.35c60188.js";import{j as c}from"./jquery.e8a081b2.js";import"./_commonjsHelpers.b8add541.js";n("server_list_loader");d.get(serversListUrl).then(t=>{o("server_list_loader"),l(p(t.data),"serverList")}).catch(t=>{o("server_list_loader"),console.error("Error:",t)});function p(t){let r="";return t.forEach((a,s)=>{r+=`
      <tr>
        <td>${a.name}</td>
        <td>
            <a href="#" class="view-players">
                <i class="fas fa-eye" data-server-id="${a.id}"></i>
            </a>
            ${a.players}
        </td>
        <td>
            <a href="#" class="copy-ipandport" data-ip="${a.ip}" data-port="${a.port}">
                <i class="fas fa-copy"></i>
            </a>
            ${a.ip}:${a.port}
        </td>
        <td>${a.map}</td>
        <td>${a.connect_button}</td>
      </tr>
    `}),r}document.addEventListener("click",function(t){if(t.target.classList.contains("fa-eye")){t.preventDefault();const r=t.target.dataset.serverId;r?i(r):console.error("Server ID not found.")}if(t.target.parentNode.classList.contains("player")){t.preventDefault();const r=t.target.parentNode.dataset.playerName,a=t.target.parentNode.dataset.action,s=t.target.parentNode.dataset.serverId,e=prompt("Please provide reason for this action:");if(e!==null&&e.trim()!=="")f(r,a,s,e);else return}if(t.target.classList.contains("fa-copy")){t.preventDefault();const r=t.target.parentNode.dataset.ip,a=t.target.parentNode.dataset.port;u(`${r}:${a}`)}});function i(t){n();const r=getPlayerInfoUrl(t);d.get(r).then(a=>{c("#modalBody").html(a.data),showModal(),o()}).catch(a=>{console.error("Error fetching players:",a)})}function f(t,r,a,s){n(),c.ajax({url:playerActionUrl,type:"POST",dataType:"json",data:{name:t,action:r,serverId:a,reason:s},headers:{"X-CSRF-TOKEN":c('meta[name="csrf-token"]').attr("content")},success:function(e){o(),c("#"+t).remove(),toastr.success("Player "+r+" successful.")},error:function(e,y,h){o(),toastr.error("Failed to perform action!. Either RCON PORT NOT OPEN OR RCON PASSWORD IS INCORRECT")}})}function u(t){if(navigator.clipboard)navigator.clipboard.writeText(t).then(()=>{toastr.success("IP and port copied to clipboard!")}).catch(r=>{console.error("Failed to copy text: ",r),toastr.error("Failed to copy IP and port.")});else{let r=document.createElement("textarea");r.value=t,document.body.appendChild(r),r.focus(),r.select();try{document.execCommand("copy"),toastr.success("IP and port copied to clipboard!")}catch(a){console.error("Fallback: Oops, unable to copy",a),toastr.error("Failed to copy IP and port.")}document.body.removeChild(r)}}
