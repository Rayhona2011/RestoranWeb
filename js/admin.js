// ===== FAMILY CAFE — ADMIN.JS =====

// ── AUTH ──
function adminLogout(){ sessionStorage.removeItem("fc_admin"); window.location.href="index.html"; }
function checkAuth(){ if(!sessionStorage.getItem("fc_admin")) window.location.href="index.html"; }

// ── TOAST ──
function toast(msg,type){
  const t=document.getElementById("adminToast"); if(!t) return;
  t.textContent=(type==="err"?"❌ ":type==="info"?"ℹ️ ":"✅ ")+msg;
  t.classList.add("show"); setTimeout(()=>t.classList.remove("show"),2800);
}

// ── TAB ──
const TAB_TITLES={dashboard:"Dashboard",orders:"Buyurtmalar",tables:"Stollar boshqaruvi",menu:"Menyu",inventory:"Omborxona",staff:"Xodimlar",finance:"Moliya va Analitika",crm:"CRM / Mijozlar"};
function goTab(name){
  document.querySelectorAll(".ad-tab-content").forEach(t=>t.classList.remove("active"));
  document.querySelectorAll(".ad-tab-btn").forEach(b=>b.classList.remove("active"));
  document.getElementById("tab-"+name)?.classList.add("active");
  document.querySelector(`.ad-tab-btn[data-tab="${name}"]`)?.classList.add("active");
  const pt=document.getElementById("pageTitle"); if(pt) pt.textContent=TAB_TITLES[name]||name;
  document.getElementById("adSidebar")?.classList.remove("open");
  document.getElementById("adOverlay")?.classList.remove("show");
  const renders={dashboard:renderDashboard,orders:()=>renderOrders("all"),tables:renderTablesAdmin,menu:()=>renderMenuAdmin("all"),inventory:renderInventory,staff:renderStaff,finance:renderFinance,crm:renderCRM};
  if(renders[name]) renders[name]();
}

// ── MODAL ──
function openAdModal(id){ document.getElementById(id)?.classList.add("open"); }
function closeAdModal(id){ document.getElementById(id)?.classList.remove("open"); }

// ══════════════════════════════
// 1. DASHBOARD
// ══════════════════════════════
function renderDashboard(){
  const orders=getOrders(), tables=getTables(), menu=getMenuItemsWithOverride();
  const today=new Date().toISOString().slice(0,10);
  const todayOrders=orders.filter(o=>(o.date||"").startsWith(today));
  const revenue=todayOrders.reduce((s,o)=>s+(o.total||0),0);
  const newCount=orders.filter(o=>o.status==="yangi").length;
  const bandTables=tables.filter(t=>t.status==="band").length;
  const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
  set("st-total",orders.length); set("st-new",newCount);
  set("st-rev",revenue.toLocaleString()+" so'm");
  set("st-tables",bandTables+"/15");
  set("st-menu",menu.length);
  const dot=document.getElementById("newOrderDot");
  if(dot) dot.style.display=newCount>0?"block":"none";
  renderTopDishes(orders); renderRecentOrdersList(orders.slice(-5).reverse());
}

function renderTopDishes(orders){
  const el=document.getElementById("topDishesEl"); if(!el) return;
  const counts={};
  orders.forEach(o=>{
    if(Array.isArray(o.items)) o.items.forEach(i=>{counts[i.name]=(counts[i.name]||0)+(i.qty||1);});
    else if(typeof o.itemsText==="string") o.itemsText.split(",").forEach(s=>{const n=s.trim().replace(/×\d+/,"").trim();if(n) counts[n]=(counts[n]||0)+1;});
  });
  const sorted=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,5);
  if(!sorted.length){el.innerHTML="<p style='color:var(--text2);text-align:center;padding:20px'>Hali sotuvlar yo'q</p>";return;}
  const max=sorted[0][1];
  el.innerHTML=sorted.map(([name,cnt],i)=>`<div style="margin-bottom:13px"><div style="display:flex;justify-content:space-between;margin-bottom:5px"><span style="font-size:.87rem;color:var(--text)">${i+1}. ${name}</span><span style="color:var(--gold);font-size:.82rem;font-weight:600">${cnt} ta</span></div><div class="progress-bar"><div class="progress-fill" style="width:${Math.round(cnt/max*100)}%"></div></div></div>`).join("");
}

function renderRecentOrdersList(orders){
  const tbody=document.getElementById("recentOrdersBody"); if(!tbody) return;
  if(!orders.length){tbody.innerHTML="<tr><td colspan='5' style='text-align:center;padding:20px;color:var(--text2)'>Buyurtmalar yo'q</td></tr>";return;}
  tbody.innerHTML=orders.map(o=>`<tr><td><strong>#${String(o.id).slice(-4)}</strong></td><td>${o.customer||"—"}</td><td>${o.tableNum||"—"}</td><td style="color:var(--gold);font-weight:700">${(o.total||0).toLocaleString()} so'm</td><td><span class="badge badge-${o.status||"yangi"}">${o.status||"yangi"}</span></td></tr>`).join("");
}

// ══════════════════════════════
// 2. BUYURTMALAR
// ══════════════════════════════
let curOrderFilter="all";
function filterOrders(status,btn){
  curOrderFilter=status;
  document.querySelectorAll("[data-of]").forEach(b=>b.classList.remove("active"));
  if(btn) btn.classList.add("active");
  renderOrders(status);
}

function renderOrders(status){
  curOrderFilter=status||curOrderFilter;
  const wrap=document.getElementById("orderCardsWrap"); if(!wrap) return;
  let orders=getOrders().slice().reverse();
  if(curOrderFilter!=="all") orders=orders.filter(o=>o.status===curOrderFilter);
  if(!orders.length){wrap.innerHTML="<p style='color:var(--text2);text-align:center;padding:30px;grid-column:1/-1'>Buyurtmalar yo'q</p>";return;}
  wrap.innerHTML=orders.map(o=>`
    <div class="order-card" id="oc-${o.id}">
      <div class="order-card-head"><span class="order-card-id">#${String(o.id).slice(-4)} ${o.tableNum?`🪑 ${o.tableNum}-stol`:""}</span><span class="badge badge-${o.status||"yangi"}">${o.status||"yangi"}</span></div>
      <div class="order-card-body">
        <p>👤 <strong>${o.customer||"—"}</strong></p>
        <p>📞 ${o.phone||"—"}</p>
        <p>💳 ${o.pay||"Naqd"}</p>
        <p>📅 ${o.date||"—"}</p>
        <p>🍽 ${Array.isArray(o.items)?o.items.map(i=>`${i.name}×${i.qty}`).join(", "):(o.itemsText||"—")}</p>
        ${o.note?`<p>📝 ${o.note}</p>`:""}
      </div>
      <div class="order-card-total">${(o.total||0).toLocaleString()} so'm</div>
      <div class="order-card-actions">
        ${o.status!=="qabul"?`<button class="btn-sm btn-toggle" onclick="setOrderStatus(${o.id},'qabul')">✅ Qabul</button>`:""}
        ${o.status!=="oshpaz"?`<button class="btn-sm btn-edit" onclick="setOrderStatus(${o.id},'oshpaz')">👨‍🍳 Oshpaz</button>`:""}
        ${o.status!=="tayyor"?`<button class="btn-sm" style="background:rgba(168,85,247,.12);color:#c084fc" onclick="setOrderStatus(${o.id},'tayyor')">🍽 Tayyor</button>`:""}
        ${o.status!=="yetkazildi"?`<button class="btn-sm btn-toggle" onclick="setOrderStatus(${o.id},'yetkazildi')">🏁 Bajarildi</button>`:""}
        <button class="btn-sm" style="background:rgba(245,197,24,.1);color:var(--gold)" onclick="showCheck(${o.id})">🧾 Chek</button>
        <button class="btn-sm btn-del" onclick="deleteOrder(${o.id})">🗑</button>
      </div>
    </div>`).join("");
}

function setOrderStatus(id,status){
  const orders=getOrders(); const o=orders.find(x=>x.id===id);
  if(o){ o.status=status; saveOrders(orders); renderOrders(); renderDashboard(); toast("Holat yangilandi!"); }
}

function deleteOrder(id){
  if(!confirm("O'chirishni tasdiqlaysizmi?")) return;
  saveOrders(getOrders().filter(o=>o.id!==id));
  renderOrders(); renderDashboard(); toast("Buyurtma o'chirildi","info");
}

// ── CHEK ──
function showCheck(id){
  const o=getOrders().find(x=>x.id===id); if(!o) return;
  const items=Array.isArray(o.items)?o.items:[];
  const el=document.getElementById("checkContent");
  if(el) el.innerHTML=`
    <div id="printArea" style="font-family:monospace;font-size:.88rem;color:var(--text);background:#fff;padding:20px;border-radius:10px;color:#000">
      <div style="text-align:center;margin-bottom:12px"><strong style="font-size:1.1rem">Family Cafe</strong><br>Toshkent, Chilonzor, 15-uy<br><small>${formatDate()}</small></div>
      <hr style="border:1px dashed #ccc;margin:10px 0">
      <div><strong>Buyurtma:</strong> #${String(o.id).slice(-4)}</div>
      <div><strong>Mijoz:</strong> ${o.customer||"—"}</div>
      <div><strong>Stol:</strong> ${o.tableNum?o.tableNum+"-stol":"—"}</div>
      <div><strong>Telefon:</strong> ${o.phone||"—"}</div>
      <hr style="border:1px dashed #ccc;margin:10px 0">
      ${items.map(i=>`<div style="display:flex;justify-content:space-between"><span>${i.name} × ${i.qty}</span><span>${((i.price||0)*i.qty).toLocaleString()} so'm</span></div>`).join("")}
      ${!items.length?`<div>${o.itemsText||"—"}</div>`:""}
      <hr style="border:1px dashed #ccc;margin:10px 0">
      <div style="display:flex;justify-content:space-between;font-size:1rem;font-weight:700"><span>JAMI:</span><span>${(o.total||0).toLocaleString()} so'm</span></div>
      <div style="margin-top:4px"><strong>To'lov:</strong> ${o.pay||"Naqd"}</div>
      <hr style="border:1px dashed #ccc;margin:10px 0">
      <div style="text-align:center;font-size:.8rem">Xarid uchun rahmat!<br>Yana tashrif buyuring 😊</div>
    </div>`;
  openAdModal("checkModal");
}

function printCheck(){
  const pa=document.getElementById("printArea"); if(!pa) return;
  const w=window.open("","_blank","width=400,height=600");
  w.document.write(`<html><head><title>Chek</title></head><body style="margin:0;padding:20px">${pa.innerHTML}<script>window.onload=function(){window.print();window.close();}</script></body></html>`);
  w.document.close();
}

// ══════════════════════════════
// 3. STOLLAR
// ══════════════════════════════
function renderTablesAdmin(){
  const grid=document.getElementById("tablesAdminGrid"); if(!grid) return;
  const tables=getTables();
  grid.innerHTML=tables.map(t=>`
    <div class="table-admin-card ${t.status==="band"?"table-admin-band":""}">
      <div class="tac-top">
        <span class="tac-num">${t.id}-stol</span>
        <span class="tac-dot ${t.status==="band"?"dot-red":"dot-green"}"></span>
      </div>
      <div class="tac-icon">🪑</div>
      <div class="tac-status">${t.status==="band"?`<span style="color:#f87171">Band</span>${t.customer?`<br><small>${t.customer}</small>`:""}`:""
      }</div>
      <div class="tac-actions">
        ${t.status==="band"?`<button class="btn-sm btn-toggle" onclick="freeTable(${t.id})">✅ Bo'shatish</button>`:"<span style='color:var(--green);font-size:.8rem'>Bo'sh ✓</span>"}
      </div>
    </div>`).join("");
}

function freeTable(id){
  const tables=getTables(); const t=tables.find(x=>x.id===id);
  if(t){ t.status="bosh"; t.orderId=null; t.customer=null; saveTables(tables); renderTablesAdmin(); renderDashboard(); toast("Stol bo'shatildi!"); }
}

function resetAllTables(){
  if(!confirm("Barcha stollarni bo'shatishni tasdiqlaysizmi?")) return;
  const tables=getTables().map(t=>({...t,status:"bosh",orderId:null,customer:null}));
  saveTables(tables); renderTablesAdmin(); renderDashboard(); toast("Barcha stollar bo'shatildi","info");
}

// ══════════════════════════════
// 4. MENYU
// ══════════════════════════════
let curMenuFilter="all";
function filterMenuAdmin(cat,btn){
  curMenuFilter=cat;
  document.querySelectorAll("[data-mf]").forEach(b=>b.classList.remove("active"));
  if(btn) btn.classList.add("active");
  renderMenuAdmin(cat);
}

function renderMenuAdmin(cat){
  curMenuFilter=cat||curMenuFilter;
  const wrap=document.getElementById("menuAdminGrid"); if(!wrap) return;
  const search=(document.getElementById("menuSearch")||{}).value||"";
  let items=getMenuItemsWithOverride();
  if(curMenuFilter!=="all") items=items.filter(i=>i.category===curMenuFilter);
  if(search) items=items.filter(i=>i.name.toLowerCase().includes(search.toLowerCase()));
  const catMap={taom:"🥘 Asosiy",ichimlik:"🥤 Ichimlik",non:"🫓 Non",desert:"🍰 Desert",salat:"🥗 Salat"};
  wrap.innerHTML=items.map(item=>`
    <div class="menu-admin-card ${!item.available?"mac-stoplist":""}">
      <div class="mac-img">${item.img?`<img src="${item.img}" alt="${item.name}" onerror="this.style.display='none'">`:"<span>🍽</span>"}</div>
      <div class="mac-body">
        <div class="mac-name">${item.name}</div>
        <div class="mac-cat">${catMap[item.category]||item.category}</div>
        <div class="mac-price">${(item.price||0).toLocaleString()} so'm</div>
        <div class="mac-actions">
          <button class="btn-sm btn-edit" onclick='editMenuItem(${item.id})'>✏️</button>
          <button class="btn-sm ${item.available?"btn-toggle":"btn-del"}" onclick="toggleStop(${item.id})">${item.available?"👁 Ko'rinadi":"🚫 Stop-list"}</button>
          <button class="btn-sm btn-del" onclick="delMenuItem(${item.id})">🗑</button>
        </div>
      </div>
    </div>`).join("");
}

document.getElementById("menuSearch")?.addEventListener("input",()=>renderMenuAdmin());
document.getElementById("menuItemForm")?.addEventListener("submit",function(e){
  e.preventDefault();
  const id=document.getElementById("mId").value;
  const newItem={id:id?parseInt(id):Date.now(),name:document.getElementById("mName").value.trim(),category:document.getElementById("mCat").value,price:parseInt(document.getElementById("mPrice").value)||0,img:document.getElementById("mImg").value.trim(),desc:document.getElementById("mDesc").value.trim(),available:true,name_ru:"",name_en:"",desc_ru:"",desc_en:""};
  let items=getMenuItemsWithOverride();
  if(id){ items=items.map(i=>i.id===newItem.id?{...i,...newItem}:i); toast("Taom yangilandi!"); }
  else{ items.push(newItem); toast("Yangi taom qo'shildi!"); }
  saveMenuItems(items); closeAdModal("menuModal"); renderMenuAdmin(); renderDashboard();
  this.reset(); document.getElementById("mId").value="";
});

function editMenuItem(id){
  const item=getMenuItemsWithOverride().find(i=>i.id===id); if(!item) return;
  document.getElementById("mId").value=item.id;
  document.getElementById("mName").value=item.name;
  document.getElementById("mCat").value=item.category;
  document.getElementById("mPrice").value=item.price;
  document.getElementById("mImg").value=item.img||"";
  document.getElementById("mDesc").value=item.desc;
  document.getElementById("menuModalTitle").textContent="Taomni tahrirlash";
  openAdModal("menuModal");
}

function openMenuModal(){
  document.getElementById("menuItemForm")?.reset();
  document.getElementById("mId").value="";
  document.getElementById("menuModalTitle").textContent="Yangi taom qo'shish";
  openAdModal("menuModal");
}

function toggleStop(id){
  let items=getMenuItemsWithOverride();
  const item=items.find(i=>i.id===id); if(!item) return;
  item.available=!item.available; saveMenuItems(items); renderMenuAdmin();
  toast(item.available?"Menyuga qaytarildi":"Stop-listga o'tkazildi");
}

function delMenuItem(id){
  if(!confirm("O'chirishni tasdiqlaysizmi?")) return;
  saveMenuItems(getMenuItemsWithOverride().filter(i=>i.id!==id));
  renderMenuAdmin(); renderDashboard(); toast("Taom o'chirildi","info");
}

// ══════════════════════════════
// 5. OMBORXONA
// ══════════════════════════════
function renderInventory(){
  const tbody=document.getElementById("inventoryBody"); if(!tbody) return;
  const inv=getInventory();
  if(!inv.length){tbody.innerHTML="<tr><td colspan='5' style='text-align:center;padding:20px;color:var(--text2)'>Mahsulotlar yo'q</td></tr>";renderLowStock(inv);return;}
  tbody.innerHTML=inv.map(item=>{
    const low=item.qty<=item.minQty;
    return `<tr>
      <td><strong>${item.name}</strong></td>
      <td>${item.qty} ${item.unit}</td>
      <td>${item.minQty} ${item.unit}</td>
      <td><span class="badge ${low?"badge-bekor":"badge-yetkazildi"}">${low?"⚠️ Kam":"✅ OK"}</span></td>
      <td style="white-space:nowrap">
        <button class="btn-sm btn-edit" onclick="editInv(${item.id})">✏️</button>
        <button class="btn-sm btn-del" onclick="delInv(${item.id})">🗑</button>
      </td>
    </tr>`;
  }).join("");
  renderLowStock(inv);
}

function renderLowStock(inv){
  const el=document.getElementById("lowStockEl"); if(!el) return;
  const low=inv.filter(i=>i.qty<=i.minQty);
  if(!low.length){el.innerHTML="<p style='color:var(--green);text-align:center;padding:20px'>✅ Barcha mahsulotlar yetarli</p>";return;}
  el.innerHTML=low.map(i=>`<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)"><span>⚠️ ${i.name}</span><span style="color:#f87171;font-weight:700">${i.qty} ${i.unit} qoldi</span></div>`).join("");
}

function openInvModal(){ document.getElementById("invForm")?.reset(); document.getElementById("invId").value=""; openAdModal("invModal"); }
function editInv(id){ const item=getInventory().find(i=>i.id===id); if(!item) return; document.getElementById("invId").value=item.id; document.getElementById("invName").value=item.name; document.getElementById("invUnit").value=item.unit; document.getElementById("invQty").value=item.qty; document.getElementById("invMin").value=item.minQty; document.getElementById("invPrice").value=item.price||0; openAdModal("invModal"); }
function delInv(id){ if(!confirm("O'chirishni tasdiqlaysizmi?")) return; saveInventory(getInventory().filter(i=>i.id!==id)); renderInventory(); toast("Mahsulot o'chirildi","info"); }
document.getElementById("invForm")?.addEventListener("submit",function(e){
  e.preventDefault();
  const id=document.getElementById("invId").value;
  const item={id:id?parseInt(id):Date.now(),name:document.getElementById("invName").value.trim(),unit:document.getElementById("invUnit").value,qty:parseFloat(document.getElementById("invQty").value)||0,minQty:parseFloat(document.getElementById("invMin").value)||0,price:parseInt(document.getElementById("invPrice").value)||0};
  let inv=getInventory();
  if(id){ inv=inv.map(i=>i.id===item.id?item:i); toast("Yangilandi!"); }
  else{ inv.push(item); toast("Qo'shildi!"); }
  saveInventory(inv); closeAdModal("invModal"); renderInventory();
});

// ══════════════════════════════
// 6. XODIMLAR
// ══════════════════════════════
const roleLabel={admin:"👑 Admin",kassir:"💵 Kassir",ofitsiant:"🤵 Ofitsiant",oshpaz:"👨‍🍳 Oshpaz"};

function renderStaff(){
  const tbody=document.getElementById("staffBody"); if(!tbody) return;
  const staff=getStaff();
  if(!staff.length){tbody.innerHTML="<tr><td colspan='6' style='text-align:center;padding:20px;color:var(--text2)'>Xodimlar yo'q</td></tr>";return;}
  tbody.innerHTML=staff.map(s=>`<tr>
    <td><strong>${s.name}</strong></td>
    <td><span class="badge badge-qabul">${roleLabel[s.role]||s.role}</span></td>
    <td>${s.phone||"—"}</td>
    <td style="color:var(--gold)">${s.salary?(parseInt(s.salary)).toLocaleString()+" so'm":"—"}</td>
    <td>${(s.sales||0).toLocaleString()} so'm</td>
    <td style="white-space:nowrap">
      <button class="btn-sm btn-edit" onclick="editStaff(${s.id})">✏️</button>
      <button class="btn-sm btn-del" onclick="delStaff(${s.id})">🗑</button>
    </td>
  </tr>`).join("");
}

function openStaffModal(){ document.getElementById("staffForm")?.reset(); document.getElementById("sfId").value=""; document.getElementById("staffModalTitle").textContent="Yangi xodim"; openAdModal("staffModal"); }
function editStaff(id){ const s=getStaff().find(x=>x.id===id); if(!s) return; document.getElementById("sfId").value=s.id; document.getElementById("sfName").value=s.name; document.getElementById("sfRole").value=s.role; document.getElementById("sfPhone").value=s.phone||""; document.getElementById("sfSalary").value=s.salary||""; document.getElementById("staffModalTitle").textContent="Xodimni tahrirlash"; openAdModal("staffModal"); }
function delStaff(id){ if(!confirm("O'chirishni tasdiqlaysizmi?")) return; saveStaff(getStaff().filter(s=>s.id!==id)); renderStaff(); toast("Xodim o'chirildi","info"); }
document.getElementById("staffForm")?.addEventListener("submit",function(e){
  e.preventDefault();
  const id=document.getElementById("sfId").value;
  const item={id:id?parseInt(id):Date.now(),name:document.getElementById("sfName").value.trim(),role:document.getElementById("sfRole").value,phone:document.getElementById("sfPhone").value.trim(),salary:parseInt(document.getElementById("sfSalary").value)||0,sales:0};
  let staff=getStaff();
  if(id){ staff=staff.map(s=>s.id===item.id?{...s,...item}:s); toast("Yangilandi!"); }
  else{ staff.push(item); toast("Qo'shildi!"); }
  saveStaff(staff); closeAdModal("staffModal"); renderStaff();
});

// ══════════════════════════════
// 7. MOLIYA
// ══════════════════════════════
function renderFinance(){
  const orders=getOrders(); const expenses=getExpenses();
  const income=orders.filter(o=>o.status==="yetkazildi").reduce((s,o)=>s+(o.total||0),0);
  const expTotal=expenses.reduce((s,e)=>s+(e.amount||0),0);
  const profit=income-expTotal;
  const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
  set("fin-in",income.toLocaleString()+" so'm");
  set("fin-ex",expTotal.toLocaleString()+" so'm");
  set("fin-pr",profit.toLocaleString()+" so'm");
  // Payment stats
  const payEl=document.getElementById("payStatsEl");
  if(payEl){
    const pays={}; orders.forEach(o=>{const p=o.pay||"Naqd";pays[p]=(pays[p]||0)+(o.total||0);});
    const total=Object.values(pays).reduce((s,v)=>s+v,1);
    payEl.innerHTML=Object.entries(pays).map(([k,v])=>`<div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-size:.87rem;color:var(--text)">${k}</span><span style="color:var(--gold);font-size:.82rem;font-weight:600">${v.toLocaleString()} so'm</span></div><div class="progress-bar"><div class="progress-fill" style="width:${Math.round(v/total*100)}%"></div></div></div>`).join("")||"<p style='color:var(--text2)'>Ma'lumot yo'q</p>";
  }
  // Expenses
  const tbody=document.getElementById("expBody"); if(!tbody) return;
  if(!expenses.length){tbody.innerHTML="<tr><td colspan='5' style='text-align:center;padding:20px;color:var(--text2)'>Xarajatlar yo'q</td></tr>";return;}
  tbody.innerHTML=expenses.slice().reverse().map(e=>`<tr><td>${e.date||"—"}</td><td>${e.type}</td><td style="color:#f87171;font-weight:700">${(e.amount||0).toLocaleString()} so'm</td><td>${e.note||"—"}</td><td><button class="btn-sm btn-del" onclick="delExpense(${e.id})">🗑</button></td></tr>`).join("");
}

document.getElementById("expenseForm")?.addEventListener("submit",function(e){
  e.preventDefault();
  const item={id:Date.now(),type:document.getElementById("expType").value,amount:parseInt(document.getElementById("expAmt").value)||0,note:document.getElementById("expNote").value,date:formatDate()};
  const exp=getExpenses(); exp.push(item); saveExpenses(exp); renderFinance(); toast("Xarajat saqlandi!"); this.reset();
});
function delExpense(id){ if(!confirm("O'chirishni tasdiqlaysizmi?")) return; saveExpenses(getExpenses().filter(e=>e.id!==id)); renderFinance(); toast("O'chirildi","info"); }

// ══════════════════════════════
// 8. CRM
// ══════════════════════════════
function renderCRM(){
  const tbody=document.getElementById("crmBody"); if(!tbody) return;
  let customers=getCustomers();
  if(!customers.length){
    // Auto generate from orders
    const orders=getOrders(); const map={};
    orders.forEach(o=>{ const k=o.phone||o.customer; if(!k) return; if(!map[k]) map[k]={id:Date.now()+Math.random(),name:o.customer||"—",phone:o.phone||"—",orders:0,total:0,bonus:0}; map[k].orders++; map[k].total+=(o.total||0); map[k].bonus=Math.round(map[k].total*0.03); });
    customers=Object.values(map); if(customers.length) saveCustomers(customers);
  }
  if(!customers.length){tbody.innerHTML="<tr><td colspan='5' style='text-align:center;padding:20px;color:var(--text2)'>Mijozlar yo'q</td></tr>";renderReviews();return;}
  tbody.innerHTML=customers.slice(0,20).map((c,i)=>`<tr><td><strong>${c.name}</strong></td><td>${c.phone}</td><td style="color:var(--blue)">${c.orders||0}</td><td style="color:var(--gold);font-weight:700">${(c.total||0).toLocaleString()} so'm</td><td style="color:var(--green)">${(c.bonus||0).toLocaleString()} so'm</td></tr>`).join("");
  renderReviews();
}

function renderReviews(){
  const el=document.getElementById("reviewsEl"); if(!el) return;
  const reviews=getReviews();
  if(!reviews.length){el.innerHTML="<p style='color:var(--text2);text-align:center;padding:20px'>Sharhlar yo'q</p>";return;}
  el.innerHTML=reviews.slice().reverse().map(r=>`<div style="padding:12px 0;border-bottom:1px solid var(--border)"><div style="display:flex;justify-content:space-between;margin-bottom:5px"><strong style="color:var(--white)">${r.name}</strong><span style="color:var(--gold)">${"⭐".repeat(parseInt(r.rating))}</span></div><p style="color:rgba(255,255,255,.65);font-size:.85rem;font-style:italic">"${r.text}"</p><small style="color:var(--text2)">${r.date}</small></div>`).join("");
}

function openReviewModal(){ openAdModal("reviewModal"); }
function saveReview(){
  const name=document.getElementById("rvName").value.trim()||"Anonim";
  const rating=document.getElementById("rvRating").value.replace(/\D/g,"");
  const text=document.getElementById("rvText").value.trim();
  if(!text){ toast("Sharh matni kiriting!","err"); return; }
  const reviews=getReviews();
  reviews.push({id:Date.now(),name,rating,text,date:formatDate()});
  saveReviews(reviews); closeAdModal("reviewModal"); renderReviews(); toast("Sharh saqlandi!");
  document.getElementById("rvName").value=""; document.getElementById("rvText").value="";
}

// ── INIT ──
document.addEventListener("DOMContentLoaded",()=>{
  const loginForm=document.getElementById("loginForm");
  if(loginForm){ loginForm.addEventListener("submit",function(e){ e.preventDefault(); const u=document.getElementById("adminUser").value.trim(); const p=document.getElementById("adminPass").value; if(u===ADMIN_USER&&p===ADMIN_PASS){ sessionStorage.setItem("fc_admin","1"); window.location.href="dashboard.html"; } else{ const err=document.getElementById("loginError"); if(err) err.style.display="block"; } }); return; }
  checkAuth();
  renderDashboard();
  // Auto-refresh every 20s
  setInterval(()=>{ renderDashboard(); if(document.getElementById("tab-orders")?.classList.contains("active")) renderOrders(); },20000);
});
