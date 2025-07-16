
// i18n.js - ระบบแปลภาษาสมบูรณ์

const translations = {
  th: {
    // Index page
    heroTitle: "Math4Startup: เครื่องมือวิเคราะห์การเงินด้วย AI",
    heroSubtitle: "เริ่มต้นด้วยการเลือกสินค้าที่คุณสนใจ หรือดูแนวโน้มสินค้าขายดีในตลาด",
    labelProduct: "🛍️ ชื่อสินค้าหรือบริการที่คุณสนใจ",
    btnStart: "เริ่มต้นวิเคราะห์ธุรกิจ →",
    trendingTitle: "🔥 ธุรกิจแนะนำในช่วงนี้",
    refreshBtn: "🔄 รีเฟรชข้อมูล",
    trendingCategory: "หมวดหมู่ทั่วไป",
    productPlaceholder: "เช่น กาแฟ, เสื้อผ้า, คอร์สออนไลน์",

    // Form page
    form_title: "⚡ กรอกข้อมูลสั้นๆ",
    form_subtitle: "เพียง 5 ข้อมูลสำคัญ ก็วิเคราะห์ธุรกิจได้แล้ว!",
    selected_product: "🎯 สินค้าที่เลือก:",
    quick_note: "✨ ใส่ข้อมูลง่ายๆ 5 ข้อ ระบบจะช่วยวิเคราะห์ให้เอง!",
    label_product: "1. ชื่อสินค้า/บริการ",
    label_cost: "2. ต้นทุนต่อชิ้น (บาท)",
    label_price: "3. ราคาขายต่อชิ้น (บาท)",
    label_units: "4. จำนวนที่จะขายต่อเดือน (หน่วย)",
    label_expense: "5. ค่าใช้จ่ายประจำเดือน (บาท)",
    btn_analyze: "🚀 วิเคราะห์ธุรกิจเลย!",
    productPlaceholder_form: "เช่น กาแฟคั่วสด",
    costPlaceholder: "เช่น 15",
    pricePlaceholder: "เช่น 35",
    unitsPlaceholder: "เช่น 500",
    expensePlaceholder: "เช่น 10000",

    // Analyze page
    dashboardTitle: "📊 ศูนย์วิเคราะห์ธุรกิจครบวงจร",
    dashboardSubtitle: "วิเคราะห์ธุรกิจ จัดการเงิน และเป้าหมายต่อเดือน",
    productLabel: "🎯 สินค้า/บริการ:",
    businessTypeLabel: "ประเภทธุรกิจ:",
    tabOverview: "📈 ภาพรวม",
    tabAccounting: "💰 บัญชีรายวัน",
    tabGoalAnalysis: "🎯 วิเคราะห์เส้นทางสู่เป้าหมาย",
    overviewHeader: "📊 ผลการวิเคราะห์ธุรกิจ",
    langThai: "ไทย",
    langEnglish: "English",

    // Daily accounting page
    headerTitle: "💰 บัญชีรายรับรายจ่ายรายวัน",
    headerSubtitle: "บันทึกรายการเงินเข้า-ออกประจำวัน",
    formTitle: "เพิ่มรายการใหม่",
    labelDate: "วันที่",
    labelType: "ประเภท",
    labelAmount: "จำนวนเงิน (บาท)",
    labelDescription: "รายละเอียด",
    incomeOption: "รายรับ",
    expenseOption: "รายจ่าย",
    btnAdd: "เพิ่มรายการ",

    // Analysis result page
    analysisResultTitle: "📊 ผลการวิเคราะห์ธุรกิจ",
    monthlyRevenue: "รายได้ต่อเดือน",
    monthlyCost: "ต้นทุนต่อเดือน",
    monthlyProfit: "กำไรต่อเดือน",
    profitMargin: "อัตรากำไร"
  },

  en: {
    // Index page
    heroTitle: "Math4Startup: AI-Powered Financial Decision Engine",
    heroSubtitle: "Start by entering a product or exploring trending business ideas.",
    labelProduct: "🛍️ Product or Service Name",
    btnStart: "Start Business Analysis →",
    trendingTitle: "🔥 Recommended Businesses Now",
    refreshBtn: "🔄 Refresh Data",
    trendingCategory: "General Category",
    productPlaceholder: "e.g. Coffee, Clothing, Online Course",

    // Form page
    form_title: "⚡ Quick Business Info",
    form_subtitle: "Just 5 key data points to analyze your business!",
    selected_product: "🎯 Selected Product:",
    quick_note: "✨ Enter 5 simple details and let the system analyze for you!",
    label_product: "1. Product/Service Name",
    label_cost: "2. Cost per Unit (THB)",
    label_price: "3. Selling Price per Unit (THB)",
    label_units: "4. Monthly Sales Volume (Units)",
    label_expense: "5. Monthly Fixed Expenses (THB)",
    btn_analyze: "🚀 Analyze Business Now!",
    productPlaceholder_form: "e.g. Fresh Roasted Coffee",
    costPlaceholder: "e.g. 15",
    pricePlaceholder: "e.g. 35",
    unitsPlaceholder: "e.g. 500",
    expensePlaceholder: "e.g. 10000",

    // Analyze page
    dashboardTitle: "📊 All-in-One Business Analysis Center",
    dashboardSubtitle: "Analyze your business, manage finances, and set monthly goals",
    productLabel: "🎯 Product/Service:",
    businessTypeLabel: "Business Type:",
    tabOverview: "📈 Overview",
    tabAccounting: "💰 Daily Accounting",
    tabGoalAnalysis: "🎯 Path to Goal Analysis",
    overviewHeader: "📊 Business Analysis Result",
    langThai: "ไทย",
    langEnglish: "English",

    // Daily accounting page
    headerTitle: "💰 Daily Income & Expense Tracking",
    headerSubtitle: "Record daily financial transactions",
    formTitle: "Add New Entry",
    labelDate: "Date",
    labelType: "Type",
    labelAmount: "Amount (THB)",
    labelDescription: "Description",
    incomeOption: "Income",
    expenseOption: "Expense",
    btnAdd: "Add Entry",

    // Analysis result page
    analysisResultTitle: "📊 Business Analysis Results",
    monthlyRevenue: "Monthly Revenue",
    monthlyCost: "Monthly Cost",
    monthlyProfit: "Monthly Profit",
    profitMargin: "Profit Margin"
  }
};

// ฟังก์ชันแปลภาษา
function setLanguage(lang) {
  localStorage.setItem("language", lang);
  translatePage();
}

function translatePage() {
  const lang = localStorage.getItem("language") || "th";
  
  // แปลข้อความทั่วไป
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // แปล placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // แปล option ใน select
  document.querySelectorAll("option[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // อัพเดท language selector
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.value = lang;
  }
}

// เรียกใช้เมื่อโหลดหน้า
window.addEventListener("DOMContentLoaded", translatePage);

// Export สำหรับใช้ในไฟล์อื่น
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations, setLanguage, translatePage };
}
