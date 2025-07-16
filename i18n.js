
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
    help_text: "ค่าเช่า + ค่าไฟ + เงินเดือน",
    btn_submit: "🚀 เริ่มวิเคราะห์เลย!",
    back_home: "← กลับหน้าแรก",

    // Analyze page - Complete translations
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

    // Accounting tab translations
    addTransactionTitle: "💰 เพิ่มรายการรายรับรายจ่าย",
    transactionDate: "วันที่",
    transactionType: "ประเภท",
    transactionSelectType: "เลือกประเภท",
    transactionIncome: "รายรับ",
    transactionExpense: "รายจ่าย",
    transactionAmount: "จำนวนเงิน (บาท)",
    transactionDescription: "รายละเอียด",
    transactionDescPlaceholder: "เช่น ขายสินค้า, ค่าเช่า",
    transactionCategory: "หมวดหมู่",
    transactionSelectCategory: "เลือกหมวดหมู่",
    categorySales: "รายได้จากขาย",
    categoryOtherIncome: "รายได้อื่นๆ",
    categoryMaterials: "ค่าวัตถุดิบ",
    categoryRent: "ค่าเช่า",
    categoryUtilities: "ค่าสาธารณูปโภค",
    categoryMarketing: "ค่าการตลาด",
    categoryTransport: "ค่าขนส่ง",
    categoryOtherExpense: "ค่าใช้จ่ายอื่นๆ",
    btnAddTransaction: "เพิ่มรายการ",
    
    // Monthly summary
    monthlySummaryTitle: "📊 สรุปยอดรายเดือน",
    monthlyIncomeTotal: "รายรับรวม",
    monthlyExpenseTotal: "รายจ่ายรวม",
    monthlyBalance: "ยอดคงเหลือ",
    
    // Transaction list
    transactionListTitle: "📋 รายการธุรกรรม",
    transactionListDate: "วันที่",
    transactionListDescription: "รายละเอียด",
    transactionListCategory: "หมวดหมู่",
    transactionListAmount: "จำนวน",
    transactionListDelete: "ลบ",

    // Path analysis tab
    pathAnalysisTitle: "🎯 วิเคราะห์เส้นทางสู่เป้าหมาย",
    pathAnalysisSubtitle: "กรอกข้อมูลเพื่อวิเคราะห์เส้นทางการดำเนินธุรกิจและแผนการบรรลุเป้าหมาย",
    pathProductCost: "ต้นทุนสินค้าต่อชิ้น (บาท)",
    pathMarketingCost: "ค่าการตลาดต่อชิ้น (บาท)",
    pathShippingCost: "ค่าขนส่งต่อชิ้น (บาท)",
    pathSellingPrice: "ราคาขายต่อชิ้น (บาท)",
    pathProfitGoal: "เป้าหมายกำไรต่อเดือน (บาท)",
    pathFixedCosts: "ต้นทุนคงที่ต่อเดือน (บาท)",
    pathSellingDays: "จำนวนวันที่ขายต่อเดือน (วัน)",
    pathAnalysisResult: "📊 ผลการวิเคราะห์",

    // Business overview metrics
    monthlyRevenue: "รายได้ต่อเดือน",
    monthlyProfit: "กำไรต่อเดือน",
    profitMargin: "อัตรากำไร",
    breakeven: "จุดคุ้มทุน (หน่วย)",
    profitPerUnit: "กำไรสุทธิต่อชิ้น",
    unitsPerMonth: "ต้องขายต่อเดือน",
    unitsPerDay: "ต้องขายต่อวัน",
    actualRevenue: "รายได้จริงที่จะได้",
    actualProfit: "กำไรจริงหลังหักต้นทุนคงที่",

    // Business insights
    insightsTitle: "💡 ข้อเสนะแนะ",
    editBusinessData: "📝 แก้ไขข้อมูลธุรกิจ",

    // Daily accounting page
    headerTitle: "💰 บัญชีรายรับรายจ่ายรายวัน",
    headerSubtitle: "บันทึกรายการเงินเข้า-ออกประจำวัน",
    formTitle: "เพิ่มรายการใหม่",
    labelDate: "วันที่",
    labelType: "ประเภท",
    labelAmount: "จำนวนเงิน (บาท)",
    labelDescription: "รายละเอียด",
    labelCategory: "หมวดหมู่",
    incomeOption: "รายรับ",
    expenseOption: "รายจ่าย",
    btnAdd: "เพิ่มรายการ",
    totalIncome: "รายรับรวม (เดือนนี้)",
    totalExpense: "รายจ่ายรวม (เดือนนี้)",
    balanceTitle: "ยอดคงเหลือ",
    chartTitle: "กราฟรายรับรายจ่ายรายเดือน",
    transactionListTitle: "รายการธุรกรรม",
    colDate: "วันที่",
    colDesc: "รายละเอียด",
    colCategory: "หมวดหมู่",
    colAmount: "จำนวน",
    colDelete: "ลบ",
    backHome: "← กลับหน้าแรก",
    deleteBtn: "ลบ",

    // Analysis result page
    analysisResultTitle: "📊 ผลการวิเคราะห์ธุรกิจ",
    monthlyCost: "ต้นทุนต่อเดือน"
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
    help_text: "Rent + Utilities + Salary",
    btn_submit: "🚀 Start Analysis Now!",
    back_home: "← Back to Home",

    // Analyze page - Complete translations
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

    // Accounting tab translations
    addTransactionTitle: "💰 Add Income & Expense Entry",
    transactionDate: "Date",
    transactionType: "Type",
    transactionSelectType: "Select Type",
    transactionIncome: "Income",
    transactionExpense: "Expense",
    transactionAmount: "Amount (THB)",
    transactionDescription: "Description",
    transactionDescPlaceholder: "e.g. Product sales, Rent",
    transactionCategory: "Category",
    transactionSelectCategory: "Select Category",
    categorySales: "Sales Revenue",
    categoryOtherIncome: "Other Income",
    categoryMaterials: "Materials Cost",
    categoryRent: "Rent",
    categoryUtilities: "Utilities",
    categoryMarketing: "Marketing",
    categoryTransport: "Transport",
    categoryOtherExpense: "Other Expenses",
    btnAddTransaction: "Add Entry",
    
    // Monthly summary
    monthlySummaryTitle: "📊 Monthly Summary",
    monthlyIncomeTotal: "Total Income",
    monthlyExpenseTotal: "Total Expenses",
    monthlyBalance: "Balance",
    
    // Transaction list
    transactionListTitle: "📋 Transaction List",
    transactionListDate: "Date",
    transactionListDescription: "Description",
    transactionListCategory: "Category",
    transactionListAmount: "Amount",
    transactionListDelete: "Delete",

    // Path analysis tab
    pathAnalysisTitle: "🎯 Path to Goal Analysis",
    pathAnalysisSubtitle: "Enter data to analyze your business path and goal achievement plan",
    pathProductCost: "Product Cost per Unit (THB)",
    pathMarketingCost: "Marketing Cost per Unit (THB)",
    pathShippingCost: "Shipping Cost per Unit (THB)",
    pathSellingPrice: "Selling Price per Unit (THB)",
    pathProfitGoal: "Monthly Profit Goal (THB)",
    pathFixedCosts: "Monthly Fixed Costs (THB)",
    pathSellingDays: "Selling Days per Month (Days)",
    pathAnalysisResult: "📊 Analysis Result",

    // Business overview metrics
    monthlyRevenue: "Monthly Revenue",
    monthlyProfit: "Monthly Profit",
    profitMargin: "Profit Margin",
    breakeven: "Breakeven (Units)",
    profitPerUnit: "Net Profit per Unit",
    unitsPerMonth: "Units to Sell per Month",
    unitsPerDay: "Units to Sell per Day",
    actualRevenue: "Actual Revenue Expected",
    actualProfit: "Actual Profit After Fixed Costs",

    // Business insights
    insightsTitle: "💡 Recommendations",
    editBusinessData: "📝 Edit Business Data",

    // Daily accounting page
    headerTitle: "💰 Daily Income & Expense Tracking",
    headerSubtitle: "Record daily financial transactions",
    formTitle: "Add New Entry",
    labelDate: "Date",
    labelType: "Type",
    labelAmount: "Amount (THB)",
    labelDescription: "Description",
    labelCategory: "Category",
    incomeOption: "Income",
    expenseOption: "Expense",
    btnAdd: "Add Entry",
    totalIncome: "Total Income (This Month)",
    totalExpense: "Total Expenses (This Month)",
    balanceTitle: "Remaining Balance",
    chartTitle: "Monthly Income vs Expense Chart",
    transactionListTitle: "Transaction List",
    colDate: "Date",
    colDesc: "Description",
    colCategory: "Category",
    colAmount: "Amount",
    colDelete: "Delete",
    backHome: "← Back to Home",
    deleteBtn: "Delete",

    // Analysis result page
    analysisResultTitle: "📊 Business Analysis Results",
    monthlyCost: "Monthly Cost"
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
