import{a as o}from"./index.f0052de0.js";import{a as d,c as l,f as i}from"./utility.35c60188.js";import"./_commonjsHelpers.b8add541.js";o.get(recentMutesUrl).then(r=>{d(c(r.data),"recentMutes")}).catch(r=>{console.error("Error:",r)});o.get(recentBansUrl).then(r=>{d(c(r.data),"recentBans")}).catch(r=>{console.error("Error:",r)});function c(r){let t="";return r.forEach((a,u)=>{let s=l(a.created,a.ends),e="bg-warning";s===100?e="bg-success":a.status==="UNBANNED"||a.status==="UNMUTED"?e="bg-primary":a.duration===0&&(e="bg-danger"),s=isNaN(s)?100:s,t+=`
      <tr>
        <td><a href="https://steamcommunity.com/profiles/${a.player_steamid}/">${n(a.player_name)}</a></td>
        <td><a href="https://steamcommunity.com/profiles/${a.admin_steamid}/">${n(a.admin_name)}</a></td>
        <td>${i(a.created)}</td>
        <td>${a.ends}</td>
        <td>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated custom-progress ${e}"
                role="progressbar" style="width:  ${s}%" aria-valuenow="${s}"
                aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </td>
      </tr>
    `}),t}function n(r){return r===null?"Unknown":r.length>19?r.substring(0,16)+"...":r}
