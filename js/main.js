// ===== FAMILY CAFE — MAIN.JS =====

// ── TRANSLATIONS ──
const i18n = {
  uz: {
    "nav.home":"Bosh sahifa","nav.menu":"Menyu","nav.about":"Biz haqimizda",
    "nav.reservation":"Bron","nav.contact":"Kontakt",
    "hero.titleSpan":"Milliy Taomlar",
    "hero.desc":"Oila va yaqinlaringiz davrasida an'anaviy retseptlar, tandirdan uzilgan issiq non va sog'ingan milliy taomlar.",
    "hero.btn1":"🍽 Menyuni ko'rish","hero.btn2":"📅 Stol bron qilish",
    "stat.years":"Yil tajriba","stat.guests":"Mamnun mijoz","stat.dishes":"Taom turi",
    "feat.label":"Nima uchun biz?",
    "feat.title":"Bizning afzalliklarimiz",
    "feat.subtitle":"Har bir mehmonimizga eng yaxshi xizmat ko'rsatish bizning asosiy maqsadimiz",
    "feat.c1.title":"Tajribali oshpazlar","feat.c1.desc":"20+ yillik tajribaga ega milliy oshpazlarimiz har bir taomni sevgi bilan tayyorlaydi.",
    "feat.c2.title":"Tabiiy mahsulotlar","feat.c2.desc":"Faqat mahalliy, yangi va sifatli mahsulotlardan foydalanamiz. Har kuni yangi.",
    "feat.c3.title":"Qulay muhit","feat.c3.desc":"Oilaviy kechalar uchun ideal, issiq va qulay atmosfera. 200+ mehmon sig'adi.",
    "feat.c4.title":"Tezkor xizmat","feat.c4.desc":"Buyurtmangiz 20-30 daqiqa ichida tayyor bo'ladi. Vaqtingizni qadrlaymiz.",
    "menu.label":"Bizning taomlar","menu.title":"Mazali Menyumiz",
    "menu.desc":"O'zbek milliy taomlarining to'liq to'plami — har bir taom yurakdan tayyorlanadi",
    "tab.all":"🍽 Barchasi","tab.taom":"🥘 Asosiy taomlar","tab.ichimlik":"🥤 Ichimliklar",
    "tab.non":"🫓 Non va pishiriq","tab.desert":"🍰 Desertlar","tab.salat":"🥗 Salatlar",
    "about.label":"Biz haqimizda",
    "about.title.html":"Family Cafe — <em>2010 yildan</em> beri xizmatda",
    "about.p1":"Biz 15 yildan ortiq vaqt davomida Toshkent markazida o'zbek milliy taomlarini tayyorlab kelmoqdamiz. Har bir taom — bu bizning qalbimiz va sevgimizning ifodasi.",
    "about.p2":"Restoranmizda oilaviy kechalar, to'ylar, tug'ilgan kun va biznes uchrashuv uchun maxsus zallar mavjud. 200+ mehmon qabul qilish imkoniyatimiz bor.",
    "about.btn":"Stol bron qilish →",
    "testi.label":"Mijozlar fikri",
    "testi.title.html":"Ular nima <em>deydi?</em>",
    "testi.q1":"\"Hayotimda yegan eng mazali osh mana shu yerda! Oshpazlarga rahmat, kayfiyatim zo'r bo'ldi.\"",
    "testi.q2":"\"Oilamiz bilan har haftasiga kelamiz. Atmosfera juda yoqimli, bolalar uchun ham ajoyib joy.\"",
    "testi.q3":"\"Biznes uchrashuv uchun mukammal joy. Xizmat tez, taomlar mazali, narxlar adolatli.\"",
    "testi.r1":"Doimiy mijoz","testi.r2":"Oilaviy mijoz","testi.r3":"Biznes mijozi",
    "res.label":"Stol bron qilish",
    "res.title.html":"Joyingizni <em>band qiling</em>",
    "res.subtitle":"Xush kelibsiz! Stolni oldindan bron qilib qo'ying.",
    "res.name":"Ismingiz","res.phone":"Telefon","res.date":"Sana",
    "res.guests":"Mehmonlar soni","res.note":"Izoh (ixtiyoriy)",
    "res.btn":"✓ Bron qilish","res.btn2":"Stol bron qilish →",
    "res.success":"✅ Bron qabul qilindi! Tez orada bog'lanamiz.",
    "contact.label":"Aloqa",
    "contact.title.html":"Biz bilan <em>bog'laning</em>",
    "contact.subtitle":"Har qanday savol yoki takliflar uchun murojaat qiling",
    "contact.addr":"Manzil","contact.phone":"Telefon",
    "contact.hours":"Ish vaqti","contact.hoursVal":"Dushanba–Yakshanba, 09:00–23:00",
    "footer.desc":"Haqiqiy o'zbekona mehmondo'stlik va qadrdon ta'mlar. 2010 yildan beri xizmatda.",
    "footer.pages":"Sahifalar","footer.dishes":"Taomlar",
    "footer.copy":"© 2026 Family Cafe. Barcha huquqlar himoyalangan.",
    "footer.made":"Ishlab chiqildi ❤️",
    "toast.cart":"savatga qo'shildi!"
  },
  ru: {
    "nav.home":"Главная","nav.menu":"Меню","nav.about":"О нас",
    "nav.reservation":"Бронь","nav.contact":"Контакты",
    "hero.titleSpan":"Национальная Кухня",
    "hero.desc":"В кругу семьи и близких — традиционные рецепты, горячий хлеб из тандыра и любимые национальные блюда.",
    "hero.btn1":"🍽 Смотреть меню","hero.btn2":"📅 Забронировать стол",
    "stat.years":"Лет опыта","stat.guests":"Довольных гостей","stat.dishes":"Видов блюд",
    "feat.label":"Почему мы?",
    "feat.title":"Наши преимущества",
    "feat.subtitle":"Наша главная цель — обеспечить лучший сервис для каждого гостя",
    "feat.c1.title":"Опытные повара","feat.c1.desc":"Повара с 20+ летним опытом готовят каждое блюдо с любовью.",
    "feat.c2.title":"Натуральные продукты","feat.c2.desc":"Только местные, свежие и качественные продукты. Каждый день свежее.",
    "feat.c3.title":"Уютная атмосфера","feat.c3.desc":"Идеально для семейных вечеров. Тёплая обстановка на 200+ гостей.",
    "feat.c4.title":"Быстрое обслуживание","feat.c4.desc":"Заказ будет готов за 20-30 минут. Мы ценим ваше время.",
    "menu.label":"Наши блюда","menu.title":"Наше Меню",
    "menu.desc":"Полная коллекция узбекских национальных блюд — каждое готовится с душой",
    "tab.all":"🍽 Все","tab.taom":"🥘 Основные","tab.ichimlik":"🥤 Напитки",
    "tab.non":"🫓 Хлеб и выпечка","tab.desert":"🍰 Десерты","tab.salat":"🥗 Салаты",
    "about.label":"О нас",
    "about.title.html":"Family Cafe — <em>работает с 2010 года</em>",
    "about.p1":"Более 15 лет мы работаем в центре Ташкента, готовя блюда узбекской национальной кухни. Каждое блюдо — это выражение нашей души и любви.",
    "about.p2":"В нашем ресторане есть специальные залы для семейных вечеров, свадеб, дней рождения и деловых встреч. Вмещаем более 200 гостей.",
    "about.btn":"Забронировать стол →",
    "testi.label":"Отзывы клиентов",
    "testi.title.html":"Что говорят <em>гости?</em>",
    "testi.q1":"\"Самый вкусный плов в Ташкенте именно здесь! Спасибо поварам, настроение отличное.\"",
    "testi.q2":"\"Приходим каждую неделю с семьёй. Атмосфера очень приятная, отличное место для детей.\"",
    "testi.q3":"\"Отличное место для деловых встреч. Быстрое обслуживание, вкусная еда, справедливые цены.\"",
    "testi.r1":"Постоянный клиент","testi.r2":"Семейный клиент","testi.r3":"Бизнес-клиент",
    "res.label":"Бронирование",
    "res.title.html":"Забронируйте <em>место</em>",
    "res.subtitle":"Добро пожаловать! Забронируйте стол заранее.",
    "res.name":"Ваше имя","res.phone":"Телефон","res.date":"Дата",
    "res.guests":"Количество гостей","res.note":"Примечание (необязательно)",
    "res.btn":"✓ Забронировать","res.btn2":"Забронировать стол →",
    "res.success":"✅ Бронирование принято! Скоро свяжемся с вами.",
    "contact.label":"Контакты",
    "contact.title.html":"Свяжитесь <em>с нами</em>",
    "contact.subtitle":"Обращайтесь по любым вопросам или предложениям",
    "contact.addr":"Адрес","contact.phone":"Телефон",
    "contact.hours":"Часы работы","contact.hoursVal":"Понедельник – Воскресенье, 09:00 – 23:00",
    "footer.desc":"Настоящее узбекское гостеприимство и родные вкусы. Работаем с 2010 года.",
    "footer.pages":"Страницы","footer.dishes":"Блюда",
    "footer.copy":"© 2026 Family Cafe. Все права защищены.",
    "footer.made":"Разработано ❤️",
    "toast.cart":"добавлен в корзину!"
  },
  en: {
    "nav.home":"Home","nav.menu":"Menu","nav.about":"About Us",
    "nav.reservation":"Reserve","nav.contact":"Contact",
    "hero.titleSpan":"National Cuisine",
    "hero.desc":"Gather with family and loved ones — traditional recipes, fresh bread from the tandoor and the national dishes you've been craving.",
    "hero.btn1":"🍽 View Menu","hero.btn2":"📅 Book a Table",
    "stat.years":"Years of Experience","stat.guests":"Happy Guests","stat.dishes":"Dish Varieties",
    "feat.label":"Why choose us?",
    "feat.title":"Our Advantages",
    "feat.subtitle":"Our main goal is to provide the best service for every guest",
    "feat.c1.title":"Experienced Chefs","feat.c1.desc":"Our chefs with 20+ years experience prepare each dish with love and care.",
    "feat.c2.title":"Natural Ingredients","feat.c2.desc":"Only local, fresh and quality ingredients. Fresh delivery every day.",
    "feat.c3.title":"Cozy Atmosphere","feat.c3.desc":"Perfect for family evenings. Warm and comfortable atmosphere for 200+ guests.",
    "feat.c4.title":"Fast Service","feat.c4.desc":"Your order will be ready in 20-30 minutes. We value your time.",
    "menu.label":"Our Dishes","menu.title":"Our Menu",
    "menu.desc":"A complete collection of Uzbek national cuisine — every dish made with love",
    "tab.all":"🍽 All","tab.taom":"🥘 Main Dishes","tab.ichimlik":"🥤 Drinks",
    "tab.non":"🫓 Bread & Pastry","tab.desert":"🍰 Desserts","tab.salat":"🥗 Salads",
    "about.label":"About Us",
    "about.title.html":"Family Cafe — <em>Serving Since 2010</em>",
    "about.p1":"For over 15 years we have been preparing Uzbek national cuisine in the center of Tashkent. Every dish is an expression of our soul and love.",
    "about.p2":"Our restaurant has special halls for family evenings, weddings, birthdays and business meetings. We can accommodate 200+ guests.",
    "about.btn":"Book a Table →",
    "testi.label":"Customer Reviews",
    "testi.title.html":"What do guests <em>say?</em>",
    "testi.q1":"\"The most delicious plov in Tashkent is right here! Thank you to the chefs, my mood is great.\"",
    "testi.q2":"\"We come every week with our family. The atmosphere is very pleasant, a great place for children.\"",
    "testi.q3":"\"Perfect place for business meetings. Fast service, delicious food, fair prices.\"",
    "testi.r1":"Regular Customer","testi.r2":"Family Customer","testi.r3":"Business Client",
    "res.label":"Reservation",
    "res.title.html":"Book Your <em>Table</em>",
    "res.subtitle":"Welcome! Reserve your table in advance.",
    "res.name":"Your Name","res.phone":"Phone","res.date":"Date",
    "res.guests":"Number of Guests","res.note":"Note (optional)",
    "res.btn":"✓ Reserve","res.btn2":"Book a Table →",
    "res.success":"✅ Reservation accepted! We will contact you soon.",
    "contact.label":"Contact",
    "contact.title.html":"Get <em>in Touch</em>",
    "contact.subtitle":"Feel free to reach out with any questions or suggestions",
    "contact.addr":"Address","contact.phone":"Phone",
    "contact.hours":"Working Hours","contact.hoursVal":"Monday – Sunday, 09:00 – 23:00",
    "footer.desc":"Authentic Uzbek hospitality and familiar flavors. Serving since 2010.",
    "footer.pages":"Pages","footer.dishes":"Dishes",
    "footer.copy":"© 2026 Family Cafe. All rights reserved.",
    "footer.made":"Made with ❤️",
    "toast.cart":"added to cart!"
  }
};

let currentLang = localStorage.getItem("lang") || "uz";
let currentTable = sessionStorage.getItem("fc_table") || null;

// ── LANG — TO'LIQ TARJIMA ──
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  const t = i18n[lang];
  if (!t) return;

  // 1. data-i18n attributlari
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // 2. Hero sarlavhasi
  const heroTitle = document.getElementById("heroTitle");
  if (heroTitle) {
    const prefix = {uz:"O'zbekona ", ru:"Настоящая ", en:"Authentic "}[lang] || "";
    heroTitle.innerHTML = prefix + "<span>" + (t["hero.titleSpan"]||"") + "</span>";
  }

  // 3. Features bo'limi (id orqali)
  const featMap = {
    featTitle:"feat.title", featSubtitle:"feat.subtitle",
    feat1Title:"feat.c1.title", feat1Desc:"feat.c1.desc",
    feat2Title:"feat.c2.title", feat2Desc:"feat.c2.desc",
    feat3Title:"feat.c3.title", feat3Desc:"feat.c3.desc",
    feat4Title:"feat.c4.title", feat4Desc:"feat.c4.desc"
  };
  Object.entries(featMap).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && t[key]) el.textContent = t[key];
  });

  // 4. em tegli sarlavhalar (ID orqali innerHTML)
  const emMap = [
    ["about-title",   {uz:"Family Cafe — <em>2010 yildan</em> beri xizmatda", ru:"Family Cafe — <em>с 2010 года</em>",    en:"Family Cafe — <em>Serving Since 2010</em>"}],
    ["menu-title",    {uz:"Mazali <em>Menyumiz</em>",                          ru:"Наше <em>Меню</em>",                    en:"Our <em>Menu</em>"}],
    ["testi-title",   {uz:"Ular nima <em>deydi?</em>",                          ru:"Что говорят <em>гости?</em>",           en:"What do guests <em>say?</em>"}],
    ["res-title",     {uz:"Joyingizni <em>band qiling</em>",                    ru:"Забронируйте <em>место</em>",           en:"Book Your <em>Table</em>"}],
    ["contact-title", {uz:"Biz bilan <em>bog\'laning</em>",                    ru:"Свяжитесь <em>с нами</em>",             en:"Get <em>in Touch</em>"}]
  ];
  emMap.forEach(([id, map]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = map[lang] || map["uz"];
  });

  // 5. Menu tabs matni
  const tabKeys = {barchasi:"tab.all", taom:"tab.taom", ichimlik:"tab.ichimlik", non:"tab.non", desert:"tab.desert", salat:"tab.salat"};
  document.querySelectorAll(".menu-tab").forEach(btn => {
    const key = tabKeys[btn.dataset.cat];
    if (key && t[key]) btn.textContent = t[key];
  });

  // 6. Reservation forma
  const fMap = {"res-label-name":"res.name","res-label-phone":"res.phone","res-label-date":"res.date","res-label-guests":"res.guests","res-label-note":"res.note","res-form-btn":"res.btn"};
  Object.entries(fMap).forEach(([id, key]) => { const el=document.getElementById(id); if(el&&t[key]) el.textContent=t[key]; });

  // 7. Til tugmasi
  const flagEl = document.getElementById("langFlag");
  if (flagEl) flagEl.textContent = "Til";

  // 8. html lang
  document.documentElement.lang = lang;

  // 9. Menyu kartochkalarini qayta render
  renderMenuCards(document.querySelector(".menu-tab.active")?.dataset.cat || "barchasi");
}

// ── THEME — kunduzgi/tungi rejim ──
function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  // Saqlanmagan bo'lsa — tungi (default)
  if (!saved) return true;
  return saved === "dark";
}

let isDark = getInitialTheme();

function applyTheme(dark) {
  isDark = dark;
  localStorage.setItem("theme", dark ? "dark" : "light");
  if (dark) {
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
  }
  const btn = document.getElementById("themeToggle");
  if (btn) btn.textContent = dark ? "🌙" : "☀️";
}

// ── CAROUSEL ──
(function () {
  const slides = document.querySelectorAll(".hero-slide");
  const dots   = document.querySelectorAll(".dot");
  let cur = 0, timer;
  function goTo(i) {
    slides[cur].classList.remove("active"); dots[cur]?.classList.remove("active");
    cur = (i + slides.length) % slides.length;
    slides[cur].classList.add("active"); dots[cur]?.classList.add("active");
  }
  function start() { clearInterval(timer); timer = setInterval(() => goTo(cur + 1), 2500); }
  document.getElementById("heroNext")?.addEventListener("click", () => { goTo(cur + 1); start(); });
  document.getElementById("heroPrev")?.addEventListener("click", () => { goTo(cur - 1); start(); });
  dots.forEach(d => d.addEventListener("click", () => { goTo(parseInt(d.dataset.index)); start(); }));
  if (slides.length) start();
})();

// ── NAVBAR ──
window.addEventListener("scroll", () => {
  document.getElementById("navbar")?.classList.toggle("scrolled", window.scrollY > 60);
});
const hbg = document.getElementById("hamburger");
const nvl = document.getElementById("navLinks");
if (hbg) {
  hbg.addEventListener("click", () => { hbg.classList.toggle("active"); nvl.classList.toggle("open"); });
  nvl?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    hbg.classList.remove("active"); nvl.classList.remove("open");
  }));
}

// ── LANG DROPDOWN ──
const ldb = document.getElementById("langDropBtn");
const lmn = document.getElementById("langMenu");
if (ldb && lmn) {
  ldb.addEventListener("click", e => { e.stopPropagation(); lmn.classList.toggle("open"); });
  document.addEventListener("click", () => lmn.classList.remove("open"));
  lmn.addEventListener("click", e => e.stopPropagation());
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.innerHTML = `<span class="toast-icon">✓</span> ${msg}`;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3200);
}

// ── CART ──
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
function saveCart() { localStorage.setItem("cart", JSON.stringify(cart)); }
function getCartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }

function updateCartBadge() {
  const cnt = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById("cartCount");
  if (badge) badge.textContent = cnt;
  const fb = document.getElementById("floatCartBtn");
  if (fb) {
    if (cnt > 0) fb.classList.add("visible");
    else fb.classList.remove("visible");
  }
}

function addToCart(id) {
  const item = getMenuItemsWithOverride().find(i => i.id === id);
  if (!item || !item.available) return;
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty++;
  else cart.push({ id: item.id, name: item.name, price: item.price, img: item.img || "", qty: 1 });
  saveCart(); updateCartBadge(); renderCartItems();
  showToast(`${item.name} ${i18n[currentLang]["toast.cart"]}`);
}

function changeQty(id, d) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart(); updateCartBadge(); renderCartItems();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart(); updateCartBadge(); renderCartItems();
}

function clearCart() {
  if (!cart.length) return;
  if (confirm("Savatni tozalashni tasdiqlaysizmi?")) {
    cart = []; saveCart(); updateCartBadge(); renderCartItems(); closeCart();
  }
}

function renderCartItems() {
  const list = document.getElementById("cartItemsList");
  if (!list) return;
  const totalEl = document.getElementById("cartTotalSum");
  if (!cart.length) {
    list.innerHTML = `<div class="cart-empty-state">
      <div class="cart-empty-icon">🛒</div>
      <p>Savat bo'sh</p>
      <small>Menyu bo'limidan taom qo'shing</small>
    </div>`;
    if (totalEl) totalEl.textContent = "0 so'm";
    return;
  }
  list.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        ${item.img ? `<img src="${item.img}" alt="${item.name}" onerror="this.style.display='none'">` : "<span>🍽</span>"}
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${(item.price * item.qty).toLocaleString()} so'm</div>
        <div class="cart-item-controls">
          <button class="cart-qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="cart-qty-num">${item.qty}</span>
          <button class="cart-qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>`).join("");
  if (totalEl) totalEl.textContent = getCartTotal().toLocaleString() + " so'm";
}

function toggleCart(e) { if (e) e.preventDefault(); document.getElementById("cartSidebar")?.classList.contains("open") ? closeCart() : openCart(); }
function openCart() { document.getElementById("cartSidebar")?.classList.add("open"); document.getElementById("cartOverlay")?.classList.add("open"); document.body.style.overflow = "hidden"; renderCartItems(); }
function closeCart() { document.getElementById("cartSidebar")?.classList.remove("open"); document.getElementById("cartOverlay")?.classList.remove("open"); document.body.style.overflow = ""; }

function openOrderModal() {
  if (!cart.length) { showToast("Avval savatga taom qo'shing! ⚠️"); return; }
  closeCart();
  const sb = document.getElementById("orderSummaryBlock");
  if (sb) sb.innerHTML = `<div class="order-summary">
    ${cart.map(i => `<div class="order-summary-item"><span>${i.name} × ${i.qty}</span><strong>${(i.price * i.qty).toLocaleString()} so'm</strong></div>`).join("")}
    <div class="order-summary-item" style="border-top:1px solid rgba(245,197,24,.15);margin-top:8px;padding-top:8px;">
      <span style="font-weight:700;color:var(--white)">Jami:</span>
      <strong style="color:var(--gold);font-size:1.05rem">${getCartTotal().toLocaleString()} so'm</strong>
    </div>
  </div>`;
  const fs = document.getElementById("orderFinalSum");
  if (fs) fs.textContent = getCartTotal().toLocaleString() + " so'm";
  const to = document.getElementById("orderTableNum");
  if (to) to.textContent = currentTable ? `${currentTable}-stol` : "—";
  document.getElementById("orderModalOverlay")?.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeOrderModal() { document.getElementById("orderModalOverlay")?.classList.remove("open"); document.body.style.overflow = ""; }

// ── MENU RENDER — til bilan ──
function renderMenuCards(category) {
  category = category || "barchasi";
  const grid = document.getElementById("menuGrid");
  if (!grid) return;
  const allItems = getMenuItemsWithOverride().filter(i => i.available);
  const filtered = category === "barchasi" ? allItems : allItems.filter(i => i.category === category);
  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:#aaa">
      <div style="font-size:3rem;margin-bottom:12px">🍽️</div>
      <p>Bu kategoriyada taomlar mavjud emas</p>
    </div>`;
    return;
  }
  const lang = currentLang;
  grid.innerHTML = filtered.map(item => {
    const name = lang === "ru" ? (item.name_ru || item.name)
               : lang === "en" ? (item.name_en || item.name)
               : item.name;
    const desc = lang === "ru" ? (item.desc_ru || item.desc)
               : lang === "en" ? (item.desc_en || item.desc)
               : item.desc;
    return `<div class="menu-card">
      <div class="menu-card-img">
        ${item.img ? `<img src="${item.img}" alt="${name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">` : ""}
        <span style="font-size:4rem;display:${item.img ? "none" : "flex"};align-items:center;justify-content:center;width:100%;height:100%">🍽</span>
      </div>
      <div class="menu-card-body">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="menu-card-footer">
          <span class="price">${item.price.toLocaleString()} so'm</span>
          <button class="add-btn" onclick="addToCart(${item.id})">+</button>
        </div>
      </div>
    </div>`;
  }).join("");
}

document.querySelectorAll(".menu-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".menu-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderMenuCards(tab.dataset.cat);
  });
});

// ── RESERVATION ──
const resForm = document.getElementById("reservationForm");
if (resForm) {
  const di = document.getElementById("resDate");
  if (di) di.min = new Date().toISOString().split("T")[0];
  resForm.addEventListener("submit", function (e) {
    e.preventDefault();
    showToast(i18n[currentLang]["res.success"]);
    resForm.reset();
  });
}

// ── ORDER FORM ──
document.getElementById("orderForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name     = document.getElementById("orderName").value.trim();
  const phone    = document.getElementById("orderPhone").value.trim();
  const addr     = document.getElementById("orderAddr")?.value.trim() || "";
  const time     = document.getElementById("orderTime")?.value || "Naqd pul";
  const note     = document.getElementById("orderNote")?.value.trim() || "";
  const tableNum = currentTable || "—";
  const orders   = getOrders();
  const orderId  = Date.now();
  const newOrder = {
    id: orderId, customer: name, phone, address: addr, tableNum, time, note,
    items: cart.map(i => ({ id: i.id, name: i.name, price: i.price, qty: i.qty })),
    itemsText: cart.map(i => `${i.name}×${i.qty}`).join(", "),
    total: getCartTotal(), status: "yangi", pay: time, date: formatDate()
  };
  orders.push(newOrder);
  saveOrders(orders);
  // Stolni band qilish
  if (tableNum && tableNum !== "—") {
    const tables = getTables();
    const tbl = tables.find(t => t.id === parseInt(tableNum));
    if (tbl) { tbl.status = "band"; tbl.orderId = orderId; tbl.customer = name; saveTables(tables); }
  }
  // CRM
  const customers = getCustomers();
  const ex = customers.find(c => c.phone === phone);
  if (ex) { ex.orders = (ex.orders || 0) + 1; ex.total = (ex.total || 0) + getCartTotal(); ex.bonus = Math.round((ex.total || 0) * 0.03); }
  else customers.push({ id: Date.now(), name, phone, orders: 1, total: getCartTotal(), bonus: Math.round(getCartTotal() * 0.03), date: formatDate() });
  saveCustomers(customers);
  cart = []; saveCart(); updateCartBadge(); closeOrderModal();
  this.reset();
  showToast("🎉 Buyurtmangiz qabul qilindi! Tez orada bog'lanamiz.");
});

// ── COUNTER ──
function animateCounters() {
  document.querySelectorAll(".count-up").forEach(el => {
    if (el.dataset.animated) return;
    el.dataset.animated = "1";
    const target = parseInt(el.dataset.target);
    let count = 0;
    const step = Math.max(1, Math.ceil(target / 80));
    const tmr = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = count.toLocaleString();
      if (count >= target) clearInterval(tmr);
    }, 25);
  });
}
const aboutSec = document.querySelector(".about");
if (aboutSec) {
  new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) animateCounters(); });
  }, { threshold: 0.3 }).observe(aboutSec);
}

// ── TABLE SELECTION ──
function showTableModal() {
  document.getElementById("tableModalOverlay")?.classList.add("open");
  document.body.style.overflow = "hidden";
  renderTableGrid();
}

function renderTableGrid() {
  const grid = document.getElementById("tableSelectGrid");
  if (!grid) return;
  const tables = getTables();
  grid.innerHTML = tables.map(t => `
    <button class="table-select-btn ${t.status === "band" ? "table-band" : ""}"
      onclick="${t.status === "bosh" ? `selectTable(${t.id})` : "void(0)"}"
      ${t.status === "band" ? "disabled title='Bu stol band'" : 'title="Bu stolni tanlash"'}>
      <span class="table-icon">🪑</span>
      <span class="table-num">${t.id}-stol</span>
      <span class="table-status-dot ${t.status === "band" ? "dot-red" : "dot-green"}"></span>
    </button>`).join("");
}

function selectTable(num) {
  currentTable = num;
  sessionStorage.setItem("fc_table", num);
  document.getElementById("tableModalOverlay")?.classList.remove("open");
  document.body.style.overflow = "";
  const badge = document.getElementById("selectedTableBadge");
  if (badge) { badge.textContent = `🪑 ${num}-stol`; badge.classList.add("visible"); }
  renderMenuCards(document.querySelector(".menu-tab.active")?.dataset.cat || "barchasi");
}

// ── INIT ──
document.addEventListener("DOMContentLoaded", () => {
  // 1. Tema qo'llash
  applyTheme(isDark);
  // 2. Til qo'llash (barcha tarjimalar)
  applyLang(currentLang);
  // 3. Menyu render
  renderMenuCards("barchasi");
  // 4. Savat
  updateCartBadge();
  renderCartItems();
  // 5. Tema tugmasi
  document.getElementById("themeToggle")?.addEventListener("click", () => applyTheme(!isDark));
  // 6. Order modal yopish
  document.getElementById("orderModalOverlay")?.addEventListener("click", function (e) {
    if (e.target === this) closeOrderModal();
  });
  // 7. Stol tanlash
  if (!currentTable) {
    setTimeout(showTableModal, 600);
  } else {
    const badge = document.getElementById("selectedTableBadge");
    if (badge) { badge.textContent = `🪑 ${currentTable}-stol`; badge.classList.add("visible"); }
  }
});


