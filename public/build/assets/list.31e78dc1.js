import"./jquery.e8a081b2.js";import{D as e}from"./dataTables.responsive.8ca70206.js";import"./_commonjsHelpers.b8add541.js";function r(){new e("#groupsList",{processing:!0,serverSide:!0,responsive:!0,ajax:{url:groupsListUrl,headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")},type:"POST",dataType:"json"},language:{search:"Search by group",processing:'<div class="spinner"></div>'},order:[[0,"desc"]],columns:[{data:"id"},{data:"name"},{data:"flags"},{data:"actions",width:"200px",render:function(a,t,s,n){return'<div class="action-container">'+a+"</div>"}}]})}r();
