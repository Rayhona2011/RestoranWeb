// ===== FAMILY CAFE — DATA.JS =====

// ── MENU ──
const defaultMenuItems = [
  { id:1, category:"taom", price:35000, available:true, img:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80", name:"Osh (Palov)", name_ru:"Плов", name_en:"Plov (Pilaf)", desc:"Klassik o'zbek oshi, mol go'sht va sabzavotlar bilan", desc_ru:"Классический узбекский плов с говядиной и овощами", desc_en:"Classic Uzbek pilaf with beef and vegetables" },
  { id:2, category:"taom", price:45000, available:true, img:"https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80", name:"Shashlik", name_ru:"Шашлык", name_en:"Shashlik", desc:"Ko'mirda pishirilgan qo'y go'shtidan shashlik", desc_ru:"Шашлык из баранины на углях", desc_en:"Lamb shashlik grilled over coals" },
  { id:3, category:"taom", price:28000, available:true, img:"https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80", name:"Lag'mon", name_ru:"Лагман", name_en:"Lagman", desc:"Qo'lda tortilgan lag'mon, go'sht va sabzavotlar bilan", desc_ru:"Ручная лапша с мясом и овощами", desc_en:"Hand-pulled noodles with meat and vegetables" },
  { id:4, category:"taom", price:30000, available:true, img:"https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80", name:"Manti", name_ru:"Манты", name_en:"Manti", desc:"Bug'da pishirilgan manti, qo'y go'shti bilan", desc_ru:"Манты на пару с бараниной", desc_en:"Steamed dumplings with lamb" },
  { id:5, category:"taom", price:32000, available:true, img:"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80", name:"Dimlama", name_ru:"Димлама", name_en:"Dimlama", desc:"Go'sht va sabzavotlardan tayyorlangan dimlama", desc_ru:"Тушёное мясо с овощами", desc_en:"Braised meat and vegetables" },
  { id:6, category:"taom", price:22000, available:true, img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80", name:"Mastava", name_ru:"Мастава", name_en:"Mastava Soup", desc:"Go'shtli guruch sho'rvasi", desc_ru:"Мясной рисовый суп", desc_en:"Meat and rice soup" },
  { id:7, category:"ichimlik", price:6000, available:true, img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80", name:"Ko'k Choy", name_ru:"Зелёный чай", name_en:"Green Tea", desc:"Issiq ko'k choy, choynakcha bilan", desc_ru:"Горячий зелёный чай", desc_en:"Hot green tea in a teapot" },
  { id:8, category:"ichimlik", price:12000, available:true, img:"https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=600&q=80", name:"Limonad", name_ru:"Лимонад", name_en:"Lemonade", desc:"Uy usulida tayyorlangan limonad", desc_ru:"Домашний лимонад", desc_en:"Homemade lemonade" },
  { id:9, category:"ichimlik", price:10000, available:true, img:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80", name:"Kompot", name_ru:"Компот", name_en:"Compote", desc:"Mavsumiy mevalardan tabiiy kompot", desc_ru:"Натуральный компот", desc_en:"Natural seasonal compote" },
  { id:10, category:"ichimlik", price:8000, available:true, img:"https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=600&q=80", name:"Ayron", name_ru:"Айран", name_en:"Ayran", desc:"Sovuq va sog'lom tabiiy ayron", desc_ru:"Холодный натуральный айран", desc_en:"Cold natural ayran" },
  { id:11, category:"non", price:5000, available:true, img:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80", name:"Tandirda Non", name_ru:"Лепёшка из тандыра", name_en:"Tandoor Bread", desc:"Tandirda pishirilgan issiq milliy non", desc_ru:"Горячая лепёшка из тандыра", desc_en:"Hot traditional tandoor bread" },
  { id:12, category:"non", price:8000, available:true, img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", name:"Samsa", name_ru:"Самса", name_en:"Samsa", desc:"Go'shtli samsa, tandirda pishirilgan", desc_ru:"Самса с мясом из тандыра", desc_en:"Meat-filled samsa from tandoor" },
  { id:13, category:"desert", price:15000, available:true, img:"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80", name:"Halvo", name_ru:"Халва", name_en:"Halva", desc:"An'anaviy o'zbek halvasi, yong'oqli", desc_ru:"Традиционная халва с орехами", desc_en:"Traditional halva with nuts" },
  { id:14, category:"desert", price:18000, available:true, img:"https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&q=80", name:"Baklava", name_ru:"Пахлава", name_en:"Baklava", desc:"Sharq shirinligi baklava", desc_ru:"Восточная сладость пахлава", desc_en:"Eastern sweet baklava" },
  { id:15, category:"salat", price:12000, available:true, img:"https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80", name:"Achichuk", name_ru:"Ачичук", name_en:"Achichuk Salad", desc:"Pomidor, piyoz va o'tlardan tayyorlangan salat", desc_ru:"Салат из помидоров и лука", desc_en:"Tomato and onion salad" },
  { id:16, category:"salat", price:19000, available:true, img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80", name:"Toshkent Salati", name_ru:"Ташкентский салат", name_en:"Tashkent Salad", desc:"Mol tili, piyoz va qaymoq bilan salat", desc_ru:"Салат с говяжьим языком и сметаной", desc_en:"Beef tongue salad with cream" }
];

// ── OMBORXONA (Ingredients) ──
const defaultInventory = [
  { id:1, name:"Mol go'sht", unit:"kg", qty:25, minQty:5, price:85000 },
  { id:2, name:"Qo'y go'sht", unit:"kg", qty:18, minQty:5, price:95000 },
  { id:3, name:"Guruch", unit:"kg", qty:40, minQty:10, price:12000 },
  { id:4, name:"Un", unit:"kg", qty:30, minQty:8, price:6000 },
  { id:5, name:"Sabzi", unit:"kg", qty:20, minQty:5, price:4000 },
  { id:6, name:"Piyoz", unit:"kg", qty:15, minQty:4, price:3000 },
  { id:7, name:"O'simlik yog'i", unit:"litr", qty:12, minQty:3, price:22000 },
  { id:8, name:"Pomidor", unit:"kg", qty:10, minQty:3, price:8000 },
  { id:9, name:"Choy", unit:"kg", qty:3, minQty:1, price:45000 },
  { id:10, name:"Limon", unit:"kg", qty:5, minQty:2, price:15000 }
];

// ── XODIMLAR ──
const defaultStaff = [
  { id:1, name:"Murod Yusupov", role:"admin", phone:"+998901234567", salary:5000000, joinDate:"2020-01-15", sales:0 },
  { id:2, name:"Dilnoza Rahimova", role:"kassir", phone:"+998902345678", salary:3000000, joinDate:"2021-03-10", sales:0 },
  { id:3, name:"Bobur Toshmatov", role:"ofitsiant", phone:"+998903456789", salary:2500000, joinDate:"2022-06-01", sales:125000 },
  { id:4, name:"Hamida Nazarova", role:"oshpaz", phone:"+998904567890", salary:3500000, joinDate:"2021-08-20", sales:0 }
];

// ── STOLLAR ──
const TOTAL_TABLES = 15;

// ── UTILS ──
function getMenuItems() { return defaultMenuItems; }
function saveMenuItems(items) { localStorage.setItem("fc_menu_override", JSON.stringify(items)); }
function getMenuItemsWithOverride() {
  const override = localStorage.getItem("fc_menu_override");
  if (override) return JSON.parse(override);
  return defaultMenuItems;
}

function getOrders() { return JSON.parse(localStorage.getItem("fc_orders") || "[]"); }
function saveOrders(o) { localStorage.setItem("fc_orders", JSON.stringify(o)); }

function getInventory() {
  const s = localStorage.getItem("fc_inventory");
  return s ? JSON.parse(s) : [...defaultInventory];
}
function saveInventory(inv) { localStorage.setItem("fc_inventory", JSON.stringify(inv)); }

function getStaff() {
  const s = localStorage.getItem("fc_staff");
  return s ? JSON.parse(s) : [...defaultStaff];
}
function saveStaff(st) { localStorage.setItem("fc_staff", JSON.stringify(st)); }

function getExpenses() { return JSON.parse(localStorage.getItem("fc_expenses") || "[]"); }
function saveExpenses(e) { localStorage.setItem("fc_expenses", JSON.stringify(e)); }

function getCustomers() { return JSON.parse(localStorage.getItem("fc_customers") || "[]"); }
function saveCustomers(c) { localStorage.setItem("fc_customers", JSON.stringify(c)); }

function getReviews() { return JSON.parse(localStorage.getItem("fc_reviews") || "[]"); }
function saveReviews(r) { localStorage.setItem("fc_reviews", JSON.stringify(r)); }

function getTables() {
  const saved = localStorage.getItem("fc_tables");
  if (saved) return JSON.parse(saved);
  const tables = [];
  for (let i = 1; i <= TOTAL_TABLES; i++) tables.push({ id:i, status:"bosh", orderId:null, customer:null });
  return tables;
}
function saveTables(t) { localStorage.setItem("fc_tables", JSON.stringify(t)); }

function getSettings() {
  return JSON.parse(localStorage.getItem("fc_settings") || JSON.stringify({
    restaurantName:"Family Cafe", phone:"+998 90 123 45 67",
    address:"Toshkent, Chilonzor, 15-uy",
    workHours:"09:00 – 23:00", isOpen:true
  }));
}
function saveSettings(s) { localStorage.setItem("fc_settings", JSON.stringify(s)); }

function formatPrice(p) { return (p||0).toLocaleString("uz-UZ") + " so'm"; }
function formatDate() { return new Date().toLocaleString("uz-UZ"); }

// ── AUTH ──
const ADMIN_USER = "admin";
const ADMIN_PASS = "familycafe";
