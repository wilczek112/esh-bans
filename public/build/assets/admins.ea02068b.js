import"./jquery.e8a081b2.js";import{D as n}from"./dataTables.responsive.8ca70206.js";import{c as d}from"./utility.35c60188.js";import"./dataTables.fixedColumns.be792f05.js";import"./_commonjsHelpers.b8add541.js";new n("#adminsList",{processing:!0,responsive:!0,serverSide:!0,ajax:{url:adminListUrl,headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},type:"POST",dataType:"json"},language:{search:"Search by admin name:",processing:'<div class="spinner"></div>'},columns:[{data:"id"},{data:"player_name",render:function(r,t,a,i){return`<a href="https://steamcommunity.com/profiles/${a.player_steamid}">${r}</a>`}},{data:"flags"},{data:"hostnames",width:"50px"},{data:"created"},{data:"ends"},{data:"actions",width:"200px",render:function(r,t,a,i){return'<div class="action-container">'+r+"</div>"}},{data:"ends",width:"100px",render:function(r,t,a,i){let e=d(a.created,a.ends),s="bg-warning";return e===100?s="bg-success":a.ends.includes("badge badge-primary")&&(s="bg-danger"),e=isNaN(e)?100:e,`
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated custom-progress ${s}"
                    role="progressbar" style="width:  ${e}%" aria-valuenow="${e}"
                    aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>`}}]});
