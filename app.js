(function () {
  const STAFF_KEY = "rental-checkin-staff-v1";
  const TZ = "Asia/Tokyo";

  const LANG_NAMES = { ja: "日本語", en: "English", zh: "中文", ko: "한국어", th: "ไทย" };
  const HTML_LANG = { ja: "ja", en: "en", zh: "zh-Hans", ko: "ko", th: "th" };
  const IDLE_TIMEOUT_MS = 180000; // 3 minutes of inactivity before warning
  const IDLE_COUNTDOWN_SEC = 30;  // 30-second countdown before auto-reset

  const UI = {
    en: {
      brandTitle: "Car Rental Self Check-in",
      brandSub: "Please choose your language",
      staff: "Staff settings",
      staffNote: "Set the vehicle class for this guest. It is cleared on reset (manual or idle auto-reset) and is not kept for the next guest.",
      fuelType: "Fuel type",
      vehicleClass: "Vehicle class",
      regular: "Regular",
      premium: "Premium",
      diesel: "Diesel",
      compact: "Compact",
      other: "Other classes",
      notSet: "Not set",
      save: "Save",
      close: "Close",
      back: "Back",
      continue: "Continue",
      rulesIntro: "Please read each of the 11 terms and tick the box beside it. Continue is enabled when all 11 are ticked.",
      confirmRules: "I have read and agree to all 11 terms.",
      tickedCount: "{n} / 11 ticked",
      scrollHint: "Please scroll to the end",
      compIntro: "Basic coverage is already included at no extra charge. You may optionally add CDW or CDW+NOC to reduce what you pay if there is an accident. Please also read the policy below.",
      includedBanner: "Basic coverage is included (free)",
      noAddon: "No add-on (basic only)",
      addCdw: "Add CDW",
      addCdwNoc: "Add CDW+NOC",
      choosePlan: "Choose an option",
      planFree: "Included / free",
      maxLiability: "Maximum accident liability",
      riskHigh: "Highest risk",
      riskMid: "Still at risk",
      riskZero: "0 (*except total loss and damage to specific parts)",
      bothPrices: "See both prices in the table",
      signTitle: "Signature",
      signIntro: "Your handwritten signature will be placed on both signature lines of the contract:",
      signItem1: "Page 1 — Rental Car Agreement (all 11 terms ticked)",
      signItem2Prefix: "Page 2 — Compensation Policy — ",
      date: "Date",
      plan: "Plan",
      signHint: "Please sign in the box with your finger or a stylus.",
      signPlaceholder: "Sign here",
      clearSign: "Clear signature",
      confirmSign: "Confirm signature",
      needSign: "Please sign before continuing.",
      summaryTitle: "Check-in complete",
      summaryIntro: "Your signed 4-page contract (Shop copy + Customer copy) is ready. Tapping Print once prints both copies.",
      pdfReady: "PDF is ready",
      returnDevice: "Please return the device to the staff",
      download: "Save PDF (Staff)",
      print: "Print contract (2 copies)",
      reset: "Reset for next guest",
      resetQ: "Clear this guest’s information and start over? Vehicle class will also be cleared.",
      cancel: "Cancel",
      preparing: "Preparing the contract…",
      fuelUnset: "Fuel type is not set — please ask a staff member.",
      classUnset: "Vehicle class is not set",
      language: "Language",
      fuel: "Fuel type",
      class: "Vehicle class"
    },
    ja: {
      brandTitle: "レンタカー セルフチェックイン",
      brandSub: "言語を選んでください",
      staff: "スタッフ設定",
      staffNote: "車両クラスはこのお客様用です。リセット（手動／一定時間操作なし）すると消えます。次のお客様の前に、スタッフが選び直してください。",
      fuelType: "油種",
      vehicleClass: "車両クラス",
      regular: "レギュラー",
      premium: "ハイオク",
      diesel: "軽油",
      compact: "小型車",
      other: "その他車種",
      notSet: "未設定",
      save: "保存",
      close: "閉じる",
      back: "戻る",
      continue: "次へ",
      rulesIntro: "以下の11項目をそれぞれお読みのうえ、各項目の左の枠にチェックを入れてください。11項目すべてにチェックが入ると次へ進めます。",
      confirmRules: "全11項目を読み、同意しました。",
      tickedCount: "{n} / 11 チェック済み",
      scrollHint: "最後までスクロールしてください",
      compIntro: "基本補償は料金に含まれています（無料）。事故時の負担を減らしたい場合は、任意で CDW または CDW+NOC を追加できます。以下の補償制度もご確認ください。",
      includedBanner: "基本補償（無料）が含まれています",
      noAddon: "追加しない（基本補償のみ）",
      addCdw: "CDWを追加する",
      addCdwNoc: "CDW+NOCを追加する",
      choosePlan: "オプションを選択",
      planFree: "含まれています・無料",
      maxLiability: "事故時の最大負担総額",
      riskHigh: "リスク極めて高い",
      riskMid: "リスクあり",
      riskZero: "0（※全損及び特定部位の損傷を除く）",
      bothPrices: "料金は下の表をご覧ください",
      signTitle: "署名",
      signIntro: "この署名は契約書の両方の署名欄に記載されます。",
      signItem1: "1ページ目 — レンタカー貸渡契約書（全11項目にチェック済み）",
      signItem2Prefix: "2ページ目 — 補償制度 — ",
      date: "日付",
      plan: "プラン",
      signHint: "枠の中に、指またはペンで署名してください。",
      signPlaceholder: "ここに署名",
      clearSign: "書き直す",
      confirmSign: "署名を確定",
      needSign: "署名してから進んでください。",
      summaryTitle: "チェックイン完了",
      summaryIntro: "署名済みの契約書（店舗控え＋お客様控えの計4ページ）をご用意しました。1回の印刷で2部とも出力されます。",
      pdfReady: "PDFの準備ができました",
      returnDevice: "端末をスタッフにお返しください",
      download: "PDFを保存（スタッフ用）",
      print: "契約書を印刷（2部）",
      reset: "次のお客様用にリセット",
      resetQ: "このお客様の内容を消去して最初に戻りますか？車両クラスもクリアされます。",
      cancel: "キャンセル",
      preparing: "契約書を作成しています…",
      fuelUnset: "油種が未設定です。スタッフにお知らせください。",
      classUnset: "車両クラスは未設定",
      language: "言語",
      fuel: "油種",
      class: "車両クラス"
    },
    zh: {
      brandTitle: "租车自助办理",
      brandSub: "请选择语言",
      staff: "スタッフ設定",
      staffNote: "车辆级别按每位客人设置。重置（手动或超时自动重置）后会清空，请在下一位客人办理前重新选择。",
      fuelType: "油种",
      vehicleClass: "车辆级别",
      regular: "普通汽油",
      premium: "高级汽油",
      diesel: "柴油",
      compact: "小型车",
      other: "其他车型",
      notSet: "未设置",
      save: "保存",
      close: "关闭",
      back: "返回",
      continue: "下一步",
      rulesIntro: "请逐条阅读以下 11 项条款，并在每条左侧勾选。全部勾选后即可继续。",
      confirmRules: "我已阅读并同意全部 11 项条款。",
      tickedCount: "已勾选 {n} / 11",
      scrollHint: "请滑动至最底部",
      compIntro: "基础补偿已包含在内（免费）。如需降低事故时的负担，可自愿加购 CDW 或 CDW+NOC。请同时阅读下方的补偿制度说明。",
      includedBanner: "基础补偿（免费）已包含",
      noAddon: "不加购（仅基础补偿）",
      addCdw: "加购 CDW",
      addCdwNoc: "加购 CDW+NOC",
      choosePlan: "请选择",
      planFree: "已包含 / 免费",
      maxLiability: "事故最大负担总额",
      riskHigh: "风险极高",
      riskMid: "仍有风险",
      riskZero: "0（*全损及特定部位损伤除外）",
      bothPrices: "价格请见下方对照表",
      signTitle: "签名",
      signIntro: "此手写签名将填写在合同两处签名栏：",
      signItem1: "第 1 页 — 租车合同（已勾选全部 11 项）",
      signItem2Prefix: "第 2 页 — 补偿制度 — ",
      date: "日期",
      plan: "方案",
      signHint: "请在框内用手指或触控笔签名。",
      signPlaceholder: "请在此签名",
      clearSign: "重写签名",
      confirmSign: "确认签名",
      needSign: "请先签名再继续。",
      summaryTitle: "办理完成",
      summaryIntro: "已生成含店铺联与客户联的 4 页签字合同。点一次打印即可直接印出两份。",
      pdfReady: "PDF 已准备好",
      returnDevice: "请将设备交还给店员",
      download: "保存 PDF（店员用）",
      print: "打印合同（两份）",
      reset: "为下一位客人重置",
      resetQ: "清除这位客人的信息并重新开始？车辆级别也会被清空。",
      cancel: "取消",
      preparing: "正在生成合同…",
      fuelUnset: "尚未设置油种，请告知店员。",
      classUnset: "车辆级别未设置",
      language: "语言",
      fuel: "油种",
      class: "车辆级别"
    },
    ko: {
      brandTitle: "렌터카 셀프 체크인",
      brandSub: "언어를 선택해 주십시오",
      staff: "スタッフ設定",
      staffNote: "차량 등급은 이번 고객용입니다. 재설정(수동 또는 일정 시간 미조작)하면 지워집니다. 다음 고객 전에 직원이 다시 선택해 주십시오.",
      fuelType: "유종",
      vehicleClass: "차량 등급",
      regular: "보통 휘발유",
      premium: "고급 휘발유",
      diesel: "경유",
      compact: "소형차",
      other: "기타 차종",
      notSet: "미설정",
      save: "저장",
      close: "닫기",
      back: "뒤로",
      continue: "다음",
      rulesIntro: "아래 11개 조항을 각각 읽고 왼쪽 칸에 체크해 주십시오. 11개 모두 체크하면 다음으로 진행할 수 있습니다.",
      confirmRules: "전체 11개 조항을 읽고 동의합니다.",
      tickedCount: "{n} / 11 체크 완료",
      scrollHint: "끝까지 스크롤해 주십시오",
      compIntro: "기본 보상은 이미 포함되어 있습니다(무료). 사고 시 부담을 줄이려면 CDW 또는 CDW+NOC를 추가로 가입할 수 있습니다. 아래 보상제도도 읽어 주십시오.",
      includedBanner: "기본 보상(무료)이 포함되어 있습니다",
      noAddon: "추가 가입 안 함 (기본 보상만)",
      addCdw: "CDW 추가 가입",
      addCdwNoc: "CDW+NOC 추가 가입",
      choosePlan: "옵션 선택",
      planFree: "포함 / 무료",
      maxLiability: "사고 시 최대 부담 총액",
      riskHigh: "위험 매우 높음",
      riskMid: "위험 남아 있음",
      riskZero: "0 (*전손 및 특정 부위 손상 제외)",
      bothPrices: "요금은 아래 표를 확인해 주십시오",
      signTitle: "서명",
      signIntro: "이 손글씨 서명은 계약서의 두 서명란에 모두 기입됩니다.",
      signItem1: "1페이지 — 자동차 임대차 계약서 (11개 조항 모두 체크됨)",
      signItem2Prefix: "2페이지 — 보상제도 — ",
      date: "날짜",
      plan: "플랜",
      signHint: "상자 안에 손가락 또는 펜으로 서명해 주십시오.",
      signPlaceholder: "여기에 서명",
      clearSign: "다시 쓰기",
      confirmSign: "서명 확인",
      needSign: "서명한 뒤 진행해 주십시오.",
      summaryTitle: "체크인 완료",
      summaryIntro: "서명된 계약서(매장 보관용 + 고객용 총 4페이지)가 준비되었습니다. 한 번 인쇄로 2부가 모두 출력됩니다.",
      pdfReady: "PDF가 준비되었습니다",
      returnDevice: "기기를 직원에게 반납해 주세요",
      download: "PDF 저장 (직원용)",
      print: "계약서 인쇄 (2부)",
      reset: "다음 고객을 위해 초기화",
      resetQ: "이 고객의 정보를 지우고 처음부터 다시 시작할까요? 차량 등급도 초기화됩니다.",
      cancel: "취소",
      preparing: "계약서를 작성하는 중입니다…",
      fuelUnset: "유종이 설정되지 않았습니다. 직원에게 알려 주십시오.",
      classUnset: "차량 등급 미설정",
      language: "언어",
      fuel: "유종",
      class: "차량 등급"
    },
    th: {
      brandTitle: "เช็คอินเช่ารถด้วยตนเอง",
      brandSub: "กรุณาเลือกภาษา",
      staff: "スタッフ設定",
      staffNote: "ประเภทรถตั้งค่าสำหรับลูกค้าคนนี้ เมื่อรีเซ็ต (กดเองหรือไม่มีการใช้งานสักพัก) จะถูกล้าง กรุณาเลือกใหม่ก่อนลูกค้าคนถัดไป",
      fuelType: "ชนิดน้ำมัน",
      vehicleClass: "ประเภทรถ",
      regular: "เบนซิน",
      premium: "พรีเมียม",
      diesel: "ดีเซล",
      compact: "รถขนาดเล็ก",
      other: "รถประเภทอื่น",
      notSet: "ยังไม่กำหนด",
      save: "บันทึก",
      close: "ปิด",
      back: "กลับ",
      continue: "ถัดไป",
      rulesIntro: "กรุณาอ่านข้อกำหนดทั้ง 11 ข้อ และทำเครื่องหมายที่ช่องด้านซ้ายของแต่ละข้อ เมื่อทำเครื่องหมายครบ 11 ข้อ จึงไปต่อได้",
      confirmRules: "ข้าพเจ้าได้อ่านและยอมรับข้อกำหนดทั้ง 11 ข้อ",
      tickedCount: "ทำเครื่องหมายแล้ว {n} / 11",
      scrollHint: "กรุณาเลื่อนไปจนถึงท้ายหน้า",
      compIntro: "การชดเชยพื้นฐานรวมอยู่ในบริการแล้ว (ฟรี) หากต้องการลดภาระเมื่อเกิดอุบัติเหตุ สามารถเลือกซื้อเพิ่ม CDW หรือ CDW+NOC ได้ กรุณาอ่านนโยบายด้านล่างด้วย",
      includedBanner: "รวมการชดเชยพื้นฐานแล้ว (ฟรี)",
      noAddon: "ไม่ซื้อเพิ่ม (การชดเชยพื้นฐานเท่านั้น)",
      addCdw: "ซื้อเพิ่ม CDW",
      addCdwNoc: "ซื้อเพิ่ม CDW+NOC",
      choosePlan: "เลือกตัวเลือก",
      planFree: "รวมอยู่แล้ว / ฟรี",
      maxLiability: "ยอดรับผิดชอบสูงสุดกรณีเกิดอุบัติเหตุ",
      riskHigh: "ความเสี่ยงสูงมาก",
      riskMid: "ยังมีความเสี่ยง",
      riskZero: "0 (*ยกเว้นกรณีรถเสียหายทั้งคันและความเสียหายของชิ้นส่วนเฉพาะ)",
      bothPrices: "ดูราคาทั้งสองแบบในตารางด้านล่าง",
      signTitle: "ลายมือชื่อ",
      signIntro: "ลายมือชื่อนี้จะถูกนำไปใส่ในช่องลายมือชื่อทั้งสองแห่งของสัญญา:",
      signItem1: "หน้า 1 — สัญญาเช่ารถยนต์ (ทำเครื่องหมายครบทั้ง 11 ข้อแล้ว)",
      signItem2Prefix: "หน้า 2 — ระบบการชดเชย — ",
      date: "วันที่",
      plan: "แผน",
      signHint: "กรุณาลงลายมือชื่อในกรอบด้วยนิ้วหรือปากกา",
      signPlaceholder: "ลงลายมือชื่อที่นี่",
      clearSign: "เขียนใหม่",
      confirmSign: "ยืนยันลายมือชื่อ",
      needSign: "กรุณาลงลายมือชื่อก่อนดำเนินการต่อ",
      summaryTitle: "เช็คอินเสร็จสิ้น",
      summaryIntro: "สัญญาพร้อมลายมือชื่อ (ฉบับร้าน + ฉบับลูกค้า รวม 4 หน้า) พร้อมแล้ว กดพิมพ์ครั้งเดียวจะได้ทั้ง 2 ชุด",
      pdfReady: "PDF พร้อมแล้ว",
      returnDevice: "กรุณาคืนอุปกรณ์ให้พนักงาน",
      download: "บันทึก PDF (สำหรับพนักงาน)",
      print: "พิมพ์สัญญา (2 ชุด)",
      reset: "รีเซ็ตสำหรับลูกค้าคนถัดไป",
      resetQ: "ล้างข้อมูลของลูกค้าคนนี้แล้วเริ่มใหม่หรือไม่ ประเภทรถจะถูกล้างด้วย",
      cancel: "ยกเลิก",
      preparing: "กำลังจัดทำสัญญา…",
      fuelUnset: "ยังไม่ได้กำหนดชนิดน้ำมัน กรุณาแจ้งพนักงาน",
      classUnset: "ยังไม่ได้กำหนดประเภทรถ",
      language: "ภาษา",
      fuel: "ชนิดน้ำมัน",
      class: "ประเภทรถ"
    }
  };

  const state = {
    lang: "en",
    langSelected: false,
    fuel: null,
    vehicleClass: null,
    plan: null,
    thirdPartyAck: false,
    rulesChecked: [false, false, false, false, false, false, false, false, false, false, false],
    compScrolled: false,
    signatureDataUrl: null,
    hasStroke: false,
    signedAt: null,
    pdfBlob: null,
    pdfUrl: null,
    printHtml: null,
    screen: "language"
  };

  let sigDrawing = false;
  let sigLast = null;

  function t(key) {
    return (UI[state.lang] || UI.en)[key] || key;
  }
  function C() {
    return window.CONTRACT[state.lang] || window.CONTRACT.en;
  }

  function tokyoNow() {
    return new Date(new Date().toLocaleString("en-US", { timeZone: TZ }));
  }

  function formatDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}/${m}/${day}`;
  }

  function formatDateLong(d) {
    const y = d.getFullYear();
    const m = d.getMonth() + 1;
    const day = d.getDate();
    if (state.lang === "ja" || state.lang === "zh") return `${y}年${m}月${day}日`;
    if (state.lang === "ko") return `${y}년 ${m}월 ${day}일`;
    if (state.lang === "th") {
      const months = ["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];
      return `${day} ${months[d.getMonth()]} ${y}`;
    }
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return `${day} ${months[d.getMonth()]} ${y}`;
  }

  function allRulesTicked() {
    return state.rulesChecked.length === 11 && state.rulesChecked.every(Boolean);
  }

  let toastTimer = null;
  function showFlowToast(msg) {
    const el = $("#flow-toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.remove("hidden");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.add("hidden"), 3800);
  }
  function hideFlowToast() {
    const el = $("#flow-toast");
    if (el) el.classList.add("hidden");
    clearTimeout(toastTimer);
  }
  function pulseEl(el) {
    if (!el) return;
    el.classList.remove("attention");
    void el.offsetWidth;
    el.classList.add("attention");
    setTimeout(() => el.classList.remove("attention"), 2000);
  }
  function setBtnInactive(btn, inactive) {
    if (!btn) return;
    btn.classList.toggle("is-disabled", !!inactive);
    btn.setAttribute("aria-disabled", inactive ? "true" : "false");
  }

  function updateRulesProgress() {
    const n = state.rulesChecked.filter(Boolean).length;
    const el = $("#rules-progress");
    if (el) {
      el.textContent = t("tickedCount").replace("{n}", String(n));
      el.classList.toggle("done", n === 11);
    }
    setBtnInactive($("#btn-rules-next"), !allRulesTicked());
  }

  function clearPersistedStaff() {
    // Vehicle class is per guest and must not survive reset or a page reload.
    try { localStorage.removeItem(STAFF_KEY); } catch (e) { /* ignore */ }
  }

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function resetPaneScroll(paneId) {
    const pane = document.getElementById(paneId);
    if (pane) pane.scrollTop = 0;
  }

  function showScreen(id) {
    state.screen = id;
    hideFlowToast();
    $all(".screen").forEach((el) => el.classList.toggle("hidden", el.id !== "screen-" + id));
    window.scrollTo(0, 0);
    if (id === "rules") {
      resetPaneScroll("rules-pane");
    }
    if (id === "compensation") {
      if (!state.compScrolled) resetPaneScroll("comp-pane");
      setupScrollWatch("comp-pane", "comp");
      updateTableSwipeHint();
    }
    if (id === "signature") {
      refreshSignInfo();
      requestAnimationFrame(() => {
        resizeCanvas();
        requestAnimationFrame(resizeCanvas);
      });
    }
    if (id === "summary") prepareSummary();
    resetIdleTimer();
  }

  function applyChrome() {
    document.documentElement.lang = (state.screen === "language" && !state.langSelected)
      ? "ja"
      : (HTML_LANG[state.lang] || "ja");
    $all("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    applyReturnDevice();
    applyStaffLabels();
    const closeBtn = $("#help-close-btn");
    if (closeBtn) closeBtn.textContent = hu("close") || t("close");
    const disc = $("#help-disclaimer");
    if (disc) disc.textContent = hu("disclaimer");
    updateStaffChips();
    renderRules();
    renderCompensation();
  }

  function fuelLabel(fuel, lang) {
    const L = UI[lang || state.lang];
    if (fuel === "regular") return L.regular;
    if (fuel === "premium") return L.premium;
    if (fuel === "diesel") return L.diesel;
    return L.notSet;
  }
  function classLabel(v, lang) {
    const L = UI[lang || state.lang];
    if (v === "compact") return L.compact;
    if (v === "other") return L.other;
    return L.notSet;
  }

  function updateStaffChips() {
    const box = $("#staff-status");
    if (!box) return;
    // Always Japanese on the language screen so guests are not shown English staff hints.
    const ja = UI.ja;
    if (state.vehicleClass === "compact" || state.vehicleClass === "other") {
      const label = state.vehicleClass === "compact" ? ja.compact : ja.other;
      box.innerHTML = `<span class="chip ok" lang="ja" data-testid="staff-class-set">${ja.class}：${label}</span>`;
    } else {
      // Hide the class line when unset so guests don't see 「車両クラス：未設定」.
      box.innerHTML = "";
    }
    const btn = $("#btn-staff");
    if (btn) btn.classList.toggle("needs-class", !state.vehicleClass);
  }

  /* ---------- Rules ---------- */
  function setBalancedTitle(el, text) {
    if (!el) return;
    el.replaceChildren();
    const str = String(text || "");
    const words = str.trim().split(/\s+/);
    if (words.length >= 3) {
      el.append(document.createTextNode(words.slice(0, -2).join(" ") + " "));
      const span = document.createElement("span");
      span.className = "no-break";
      span.textContent = words.slice(-2).join(" ");
      el.append(span);
    } else {
      el.textContent = str;
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }


  function hu(key) {
    const H = window.HELP && window.HELP.ui && window.HELP.ui[key];
    if (!H) return "";
    return H[state.lang] || H.en || "";
  }

  function helpChipLabel(id) {
    const map = window.HELP && window.HELP.ui && window.HELP.ui.chipLabels;
    const entry = map && map[id];
    if (!entry) return "";
    return entry[state.lang] || entry.en || "";
  }

  function helpBtn(id, extraClass) {
    const disc = hu("disclaimer") || "Help";
    const chip = helpChipLabel(id);
    const aria = chip ? `${chip} (${disc})` : disc;
    const cls = extraClass ? "help-q " + extraClass : "help-q";
    const textHtml = chip ? `<span class="hq-label">${escapeHtml(chip)}</span>` : "";
    return `<span class="${cls}" role="button" tabindex="0" data-help="${id}" data-testid="help-${id}" aria-label="${escapeHtml(aria)}"><span aria-hidden="true">❓</span>${textHtml}</span>`;
  }

  function openHelp(id) {
    const term = window.HELP && window.HELP.terms && window.HELP.terms[id];
    if (!term) return;
    const lang = state.lang;
    const title = (term.title && (term.title[lang] || term.title.en)) || "";
    const paras = (term.body && (term.body[lang] || term.body.en)) || [];
    const disc = $("#help-disclaimer");
    if (disc) disc.textContent = hu("disclaimer");
    const ht = $("#help-title");
    if (ht) ht.textContent = title;
    const body = $("#help-body");
    if (body) {
      let html = "";
      if (term.image) {
        html += `<img class="help-fuel-img" src="${term.image}" alt="">`;
      }
      html += paras.map((para) => `<p>${escapeHtml(para)}</p>`).join("");
      body.innerHTML = html;
    }
    const closeBtn = $("#help-close-btn");
    if (closeBtn) closeBtn.textContent = hu("close") || t("close");
    const modal = $("#help-modal");
    if (modal) modal.classList.remove("hidden");
  }

  function closeHelp() {
    const modal = $("#help-modal");
    if (modal) modal.classList.add("hidden");
  }

  const RULE_HELP = {
    0: ["full_tank", "fuel_type"],
    3: ["penalty_vs_fine"],
    4: ["child_seat"],
    6: ["police_report"],
    8: ["hidden_damage"],
    9: ["gross_negligence"]
  };
  const RULE_NOTE_KEYS = { 3: "ruleNote4", 4: "ruleNote5" };
  const ROW_HELP = ["property_vehicle", "property_vehicle", "noc", "roadside", "deductible"];

  function renderFuelGuide() {
    const host = $("#fuel-guide");
    if (!host) return;
    host.innerHTML = `
      <span class="explain-tag">${escapeHtml(hu("explainTag"))}</span>
      <h3>${escapeHtml(hu("fuelGuideTitle"))}${helpBtn("fuel_type")}${helpBtn("full_tank")}</h3>
      <p>${escapeHtml(hu("fuelGuideIntro"))}</p>
      <div class="fuel-types">
        <div class="fuel-type regular"><span class="swatch" aria-hidden="true"></span>${escapeHtml(hu("fuelRegular"))}</div>
        <div class="fuel-type premium"><span class="swatch" aria-hidden="true"></span>${escapeHtml(hu("fuelPremium"))}</div>
        <div class="fuel-type diesel"><span class="swatch" aria-hidden="true"></span>${escapeHtml(hu("fuelDiesel"))}</div>
      </div>`;
  }

  function renderFaq() {
    const host = $("#comp-faq");
    const items = window.HELP && window.HELP.faq;
    if (!host || !items) return;
    const lang = state.lang;
    const lis = items.map((it, i) => {
      const q = (it.q && (it.q[lang] || it.q.en)) || "";
      const a = (it.a && (it.a[lang] || it.a.en)) || "";
      return `<details data-testid="faq-${i}"><summary>${escapeHtml(q)}</summary><p>${escapeHtml(a)}</p></details>`;
    }).join("");
    host.innerHTML = `
      <span class="explain-tag">${escapeHtml(hu("explainTag"))}</span>
      <h3>${escapeHtml(hu("faqTitle"))}</h3>
      <div class="faq-list">${lis}</div>`;
  }

  function renderRules() {
    const host = $("#rules-list");
    if (!host) return;
    const c = C();
    setBalancedTitle($("#rules-title"), c.agreementTitle);
    const badges = $("#rules-badges");
    if (badges) {
      const bits = [];
      if (state.vehicleClass) bits.push(`<span class="chip ok">${t("class")}: ${classLabel(state.vehicleClass)}</span>`);
      badges.innerHTML = bits.join("");
    }
    renderFuelGuide();
    host.innerHTML = c.rules.map((rule, idx) => {
      const blocks = rule.blocks.map((b) => {
        const lead = b.lead ? `<span class="lead">${escapeHtml(b.lead)} </span>` : "";
        const cls = b.highlight ? " class=\"hl\"" : "";
        return `<p${cls}>${lead}${escapeHtml(b.text)}</p>`;
      }).join("");
      const checked = state.rulesChecked[idx] ? " checked" : "";
      const helps = (RULE_HELP[idx] || []).map((id) => helpBtn(id)).join("");
      const noteKey = RULE_NOTE_KEYS[idx];
      const note = noteKey ? hu(noteKey) : "";
      const noteHtml = note
        ? `<p class="rule-note" data-testid="rule-note-${idx}"><span class="explain-tag">${escapeHtml(hu("explainTag"))}</span> ${escapeHtml(note)}</p>`
        : "";
      return `<button type="button" class="rule${rule.highlight ? " highlight" : ""}${checked}" data-rule-idx="${idx}" data-testid="rule-${idx}">
        <span class="tickbox" aria-hidden="true">✓</span>
        <div>
          <h3>${escapeHtml(rule.num)}. ${escapeHtml(rule.title)}${helps}</h3>
          ${blocks}
          ${noteHtml}
        </div>
      </button>`;
    }).join("");
    updateRulesProgress();
  }

  /* ---------- Compensation ---------- */
  function planPriceLine(plan) {
    const c = C();
    if (plan === "basic") return t("planFree");
    const prices = c.planPrices[plan];
    const notes = c.planHeaderNotes || {};
    if (state.vehicleClass === "compact") return (prices && prices.compact) || "";
    if (state.vehicleClass === "other") return (prices && prices.other) || "";
    // No class set: list both prices, reusing the localized table-header notes.
    if (plan === "cdw") return [notes.cdwCompact, notes.cdwOther].filter(Boolean).join("\n");
    if (plan === "cdw_noc") return [notes.nocCompact, notes.nocOther].filter(Boolean).join("\n");
    if (prices && prices.compact && prices.other) return prices.compact + "\n" + prices.other;
    return "";
  }

  function planNameAndPrice(plan) {
    const c = C();
    const name = c.planFullNames[plan] || "";
    const price = planPriceLine(plan);
    if (!price) return name;
    if (price.indexOf("\n") >= 0) return name + "\n" + price;
    return name + "  (" + price + ")";
  }

  function escapeWithBreaks(s) {
    return escapeHtml(s).replace(/\n/g, "<br>");
  }

  function renderThirdPartyNotice() {
    const host = $("#third-party-box");
    if (!host) return;
    const checked = state.thirdPartyAck ? " checked" : "";
    host.innerHTML = `
      <h3>${escapeHtml(hu("thirdPartyTitle"))}${helpBtn("third_party")}</h3>
      <p class="tp-body">${escapeHtml(hu("thirdPartyNotice"))}</p>
      <button type="button" class="third-party-ack${checked}" id="third-party-ack" data-testid="third-party-ack">
        <span class="tickbox" aria-hidden="true">✓</span>
        <span>${escapeHtml(hu("thirdPartyAck"))}</span>
      </button>`;
  }

  function renderCompensation() {
    const c = C();
    setBalancedTitle($("#comp-title"), c.compensationTitle);
    const banner = $("#included-banner");
    if (banner) {
      banner.innerHTML = `<span class="mark">✓</span><span>${escapeHtml(t("includedBanner"))}</span>${helpBtn("basic")}`;
    }
    renderThirdPartyNotice();
    const plans = ["basic", "cdw", "cdw_noc"];
    const titles = { basic: t("noAddon"), cdw: t("addCdw"), cdw_noc: t("addCdwNoc") };
    const risks = { basic: t("riskHigh") + " · 400,000+", cdw: t("riskMid") + " · 150,000+", cdw_noc: t("riskZero") };
    const grid = $("#plan-grid");
    grid.innerHTML = plans.map((p) => {
      const selected = state.plan === p ? " selected" : "";
      const price = p === "basic" ? t("planFree") : planPriceLine(p);
      const sub = `<div class="price-sub">${escapeHtml(c.planFullNames[p])}${state.vehicleClass && p !== "basic" ? " · " + classLabel(state.vehicleClass) : ""}</div>`;
      return `<button type="button" class="plan-card${selected}" data-plan="${p}" data-testid="plan-${p}">
        <span class="tick">✓</span>
        <h3>${escapeHtml(titles[p])}${helpBtn(p)}</h3>
        <div class="price${(!state.vehicleClass && p !== "basic") ? " varies" : ""}">${escapeWithBreaks(price)}</div>
        ${sub}
        <div class="risk">${escapeHtml(risks[p])}</div>
      </button>`;
    }).join("");

    const notes = c.planHeaderNotes;
    const html = `<table class="comp">
      <caption>${escapeHtml(c.tableCaption)}</caption>
      <thead>
        <tr>
          <th>${escapeHtml(c.tableHeaders[0])}</th>
          <th class="hd-basic">${escapeHtml(c.tableHeaders[1])}${helpBtn("basic")}<span class="subhead">${escapeHtml(notes.basic)}</span></th>
          <th class="hd-cdw">${escapeHtml(c.tableHeaders[2])}${helpBtn("cdw")}<span class="subhead yellow">${escapeHtml(notes.cdwCompact)}<br>${escapeHtml(notes.cdwOther)}</span></th>
          <th class="hd-noc">${escapeHtml(c.tableHeaders[3])}${helpBtn("cdw_noc")}<span class="subhead yellow">${escapeHtml(notes.nocCompact)}<br>${escapeHtml(notes.nocOther)}</span></th>
        </tr>
      </thead>
      <tbody>
        ${c.tableRows.map((row, ri) => {
          const cls = row.emphasize ? " class=\"max\"" : "";
          const bCls = row.emphasize ? " risk-high" : "";
          const dCls = row.emphasize ? " risk-mid" : "";
          const nCls = row.emphasize ? " risk-zero" : "";
          const rowHelp = ROW_HELP[ri] ? helpBtn(ROW_HELP[ri]) : "";
          return `<tr${cls}>
            <td class="item">${escapeHtml(row.item)}${rowHelp}</td>
            <td class="${bCls}">${escapeHtml(row.basic)}</td>
            <td class="${dCls}">${escapeHtml(row.cdw)}</td>
            <td class="${nCls}">${escapeHtml(row.noc)}</td>
          </tr>`;
        }).join("")}
      </tbody>
    </table>`;
    $("#comp-table").innerHTML = html;
    $("#comp-notes").innerHTML = c.footnotes.map((f) => `<p>${escapeHtml(f)}</p>`).join("");

    const noticeItems = c.importantItems.map((it) => {
      let text = escapeHtml(it.text);
      if (it.emphasis) {
        const em = escapeHtml(it.emphasis);
        text = text.replace(em, `<strong>${em}</strong>`);
      }
      return `<li>${text}</li>`;
    }).join("");
    $("#comp-notice").innerHTML = `<h3>${escapeHtml(c.importantTitle)}${helpBtn("police_report")}</h3><ul>${noticeItems}</ul>`;

    const excl = c.exclusions.map((e) => {
      const isSpecific = /特定部位|Damage to specific parts|특정 부위|ชิ้นส่วนเฉพาะ/.test(e.lead || "");
      const h = isSpecific ? helpBtn("specific_parts") : "";
      return `<p><span class="lead">${escapeHtml(e.lead)} </span>${h}${escapeHtml(e.text)}</p>`;
    }).join("");
    let total = escapeHtml(c.totalLoss);
    if (c.totalLossEmphasis) {
      const em = escapeHtml(c.totalLossEmphasis);
      total = total.replace(em, `<strong>${em}</strong>`);
    }
    $("#comp-extra").innerHTML = `
      <div class="box">
        <h3>${escapeHtml(c.exclusionsTitle)}</h3>
        <p class="lead-note">${escapeHtml(c.exclusionsLead)}</p>
        ${excl}
      </div>
      <div>
        <div class="box" style="margin-bottom:12px">
          <h3>${escapeHtml(c.totalLossTitle)}${helpBtn("total_loss")}</h3>
          <p>${total}</p>
        </div>
        <div class="box alert">
          <h3>${escapeHtml(c.specialTitle)}</h3>
          <p>${escapeHtml(c.special)}</p>
        </div>
      </div>`;
    $("#comp-ack").textContent = c.confirmComp;
    renderFaq();
    updateCompContinue();
    updateTableSwipeHint();
  }

  function updateTableSwipeHint() {
    const hint = $("#table-swipe-hint");
    const wrap = $("#comp-table");
    if (!hint || !wrap) return;
    hint.textContent = hu("tableSwipeHint");
    requestAnimationFrame(() => {
      const needsScroll = wrap.scrollWidth > wrap.clientWidth + 4;
      hint.classList.toggle("hidden", !needsScroll);
    });
  }

  function updateCompContinue() {
    setBtnInactive($("#btn-comp-next"), !(state.plan && state.compScrolled && state.thirdPartyAck));
  }

  /* ---------- Scroll lock ---------- */
  function isAtBottom(el) {
    return el.scrollHeight - el.clientHeight - el.scrollTop <= 12;
  }

  function setupScrollWatch(paneId, kind) {
    const pane = document.getElementById(paneId);
    const update = () => {
      const ok = isAtBottom(pane);
      if (kind === "comp") {
        if (ok) state.compScrolled = true;
        const hint = $("#comp-scroll-hint");
        if (hint) hint.classList.toggle("hidden", state.compScrolled);
        updateCompContinue();
      }
    };
    pane.onscroll = update;
    // If content already fits, treat as scrolled.
    requestAnimationFrame(() => {
      if (pane.scrollHeight <= pane.clientHeight + 4) {
        pane.scrollTop = pane.scrollHeight;
      }
      update();
    });
  }

  /* ---------- Signature canvas ---------- */
  function sigCanvas() { return $("#sig-canvas"); }

  function resizeCanvas() {
    const canvas = sigCanvas();
    if (!canvas) return;
    const frame = canvas.parentElement;
    const dpr = Math.max(2, window.devicePixelRatio || 1);
    const w = frame.clientWidth;
    const h = frame.clientHeight;
    if (w < 10 || h < 10) return;
    const prev = canvas.toDataURL("image/png");
    const had = state.hasStroke;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = 2.4 * dpr;
    if (had && prev) {
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      img.src = prev;
    }
  }

  function posOnCanvas(ev) {
    const canvas = sigCanvas();
    const r = canvas.getBoundingClientRect();
    const src = ev.touches ? ev.touches[0] : ev;
    const x = (src.clientX - r.left) * (canvas.width / r.width);
    const y = (src.clientY - r.top) * (canvas.height / r.height);
    return { x, y };
  }

  function startDraw(ev) {
    ev.preventDefault();
    if (ev.pointerId != null && ev.target && ev.target.setPointerCapture) {
      try { ev.target.setPointerCapture(ev.pointerId); } catch (err) { /* ignore */ }
    }
    sigDrawing = true;
    sigLast = posOnCanvas(ev);
    const ctx = sigCanvas().getContext("2d");
    ctx.beginPath();
    ctx.arc(sigLast.x, sigLast.y, ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.fill();
    state.hasStroke = true;
    $(".pad-placeholder").classList.add("hide");
    $(".pad-frame").classList.add("dirty");
    setBtnInactive($("#btn-sign-next"), false);
  }
  function moveDraw(ev) {
    if (!sigDrawing) return;
    ev.preventDefault();
    const p = posOnCanvas(ev);
    const ctx = sigCanvas().getContext("2d");
    ctx.beginPath();
    ctx.moveTo(sigLast.x, sigLast.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    sigLast = p;
  }
  function endDraw(ev) {
    if (!sigDrawing) return;
    ev.preventDefault();
    sigDrawing = false;
    sigLast = null;
  }

  function clearSignature() {
    const canvas = sigCanvas();
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    state.hasStroke = false;
    state.signatureDataUrl = null;
    $(".pad-placeholder").classList.remove("hide");
    $(".pad-frame").classList.remove("dirty");
    setBtnInactive($("#btn-sign-next"), true);
  }

  function exportSignature() {
    const canvas = sigCanvas();
    // Trim mostly-empty margins and export PNG with transparency.
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;
    const img = ctx.getImageData(0, 0, width, height);
    const data = img.data;
    let minX = width, minY = height, maxX = 0, maxY = 0;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const a = data[(y * width + x) * 4 + 3];
        if (a > 10) {
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        }
      }
    }
    if (maxX < minX) return null;
    const pad = 8;
    minX = Math.max(0, minX - pad);
    minY = Math.max(0, minY - pad);
    maxX = Math.min(width - 1, maxX + pad);
    maxY = Math.min(height - 1, maxY + pad);
    const w = maxX - minX + 1;
    const h = maxY - minY + 1;
    const out = document.createElement("canvas");
    out.width = w;
    out.height = h;
    out.getContext("2d").drawImage(canvas, minX, minY, w, h, 0, 0, w, h);
    return out.toDataURL("image/png");
  }

  function refreshSignInfo() {
    const c = C();
    $("#sign-item2").textContent = t("signItem2Prefix") + c.planFullNames[state.plan];
    const d = tokyoNow();
    state.signedAt = d;
    $("#sign-date").textContent = formatDateLong(d);
    $("#sign-plan").textContent = planNameAndPrice(state.plan);
    setBtnInactive($("#btn-sign-next"), !state.hasStroke);
  }

  /* ---------- PDF / summary ---------- */
  function filenameForPdf() {
    const d = state.signedAt || tokyoNow();
    const stamp = `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}`;
    const plan = state.plan ? state.plan.replace("_", "+") : "unsigned";
    return `rental-contract-${stamp}-${state.lang.toUpperCase()}-${plan}.pdf`;
  }

  async function generatePdf() {
    if (state.pdfUrl) {
      URL.revokeObjectURL(state.pdfUrl);
      state.pdfUrl = null;
    }
    const dataUrl = state.signatureDataUrl || exportSignature();
    state.signatureDataUrl = dataUrl;
    const blob = await fillContractPdf({
      lang: state.lang,
      plan: state.plan,
      signatureDataUrl: dataUrl,
      dateText: formatDate(state.signedAt || tokyoNow()),
      rulesChecked: state.rulesChecked.slice(),
      thirdPartyAck: !!state.thirdPartyAck
    });
    state.pdfBlob = blob;
    state.pdfUrl = URL.createObjectURL(blob);
    try {
      state.printHtml = await buildPrintHtml(blob);
    } catch (err) {
      console.error(err);
      state.printHtml = null;
    }
    return blob;
  }

  const PRINT_DPI = 200;

  async function buildPrintHtml(blob) {
    const lib = window.pdfjsLib;
    if (!lib) throw new Error("pdf.js failed to load");
    const bytes = new Uint8Array(await blob.arrayBuffer());
    const srcDoc = await lib.getDocument({ data: bytes }).promise;
    const targetW = Math.round((210 / 25.4) * PRINT_DPI);
    const images = [];
    for (let i = 1; i <= srcDoc.numPages; i++) {
      const page = await srcDoc.getPage(i);
      const base = page.getViewport({ scale: 1 });
      const viewport = page.getViewport({ scale: targetW / base.width });
      const canvas = document.createElement("canvas");
      canvas.width = Math.ceil(viewport.width);
      canvas.height = Math.ceil(viewport.height);
      const ctx = canvas.getContext("2d", { alpha: false });
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      await page.render({ canvasContext: ctx, viewport }).promise;
      images.push(canvas.toDataURL("image/jpeg", 0.92));
      canvas.width = 0;
      canvas.height = 0;
    }
    if (srcDoc.destroy) await srcDoc.destroy();
    const pages = images.map((src, i) => {
      const last = i === images.length - 1 ? " last" : "";
      return '<div class="print-page' + last + '"><img src="' + src + '" width="210" height="297" alt=""></div>';
    }).join("");
    return '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Print</title><style>'
      + '@page { size: A4; margin: 0; }'
      + 'html, body { margin: 0; padding: 0; background: #fff; }'
      + '.print-page { width: 210mm; height: 297mm; margin: 0; padding: 0; overflow: hidden; page-break-after: always; break-after: page; }'
      + '.print-page.last { page-break-after: auto; break-after: auto; }'
      + '.print-page img { width: 210mm; height: 297mm; display: block; border: 0; }'
      + '</style></head><body>' + pages + '</body></html>';
  }

  const STAFF_UI = {
    panelTitle: "スタッフ用",
    savePdf: "PDFを保存",
    print: "印刷する",
    reset: "リセット",
    cancel: "キャンセル",
    resetQ: "このお客様の内容を消去して最初に戻りますか？車両クラスもクリアされます。",
    printGo: "印刷画面を開く",
    preparing: "契約書を作成しています…"
  };

  function staffJa(key) {
    if (key === "printConfirm" || key === "printHint" || key === "printContinue") {
      const H = window.HELP && window.HELP.ui && window.HELP.ui[key];
      return (H && (H.ja || H.en)) || "";
    }
    return STAFF_UI[key] || "";
  }

  function applyReturnDevice() {
    const main = $("#return-device-main");
    if (main) main.textContent = t("returnDevice");
    const ja = $("#return-device-ja");
    if (ja) ja.classList.toggle("hidden", state.lang === "ja");
  }

  function applyStaffLabels() {
    const title = document.querySelector(".staff-panel-title");
    if (title) title.textContent = STAFF_UI.panelTitle;
    const dl = $("#btn-download");
    if (dl) dl.textContent = STAFF_UI.savePdf;
    const pr = $("#btn-print");
    if (pr) pr.textContent = STAFF_UI.print;
    const rs = $("#btn-reset");
    if (rs) rs.textContent = STAFF_UI.reset;
    const resetText = $("#reset-confirm-text");
    if (resetText) resetText.textContent = STAFF_UI.resetQ;
    const resetNo = $("#btn-reset-no");
    if (resetNo) resetNo.textContent = STAFF_UI.cancel;
    const resetYes = $("#btn-reset-yes");
    if (resetYes) resetYes.textContent = STAFF_UI.reset;
    const printCancel = $("#btn-print-cancel");
    if (printCancel) printCancel.textContent = STAFF_UI.cancel;
    const printGo = $("#btn-print-go");
    if (printGo) printGo.textContent = STAFF_UI.printGo;
  }

  async function prepareSummary() {
    const c = C();
    $("#sum-lang").textContent = LANG_NAMES[state.lang] || state.lang;
    applyReturnDevice();
    applyStaffLabels();
    $("#sum-plan").textContent = planNameAndPrice(state.plan);
    $("#sum-date").textContent = formatDateLong(state.signedAt || tokyoNow());
    const img = $("#sum-sig");
    const dataUrl = state.signatureDataUrl || exportSignature();
    state.signatureDataUrl = dataUrl;
    img.src = dataUrl || "";
    const status = $("#pdf-status");
    if (status) {
      status.textContent = STAFF_UI.preparing;
      status.classList.remove("hidden");
    }
    $("#btn-download").disabled = true;
    $("#btn-print").disabled = true;
    try {
      await generatePdf();
      if (status) {
        status.textContent = "";
        status.classList.add("hidden");
      }
      $("#btn-download").disabled = false;
      $("#btn-print").disabled = false;
    } catch (err) {
      if (status) {
        status.textContent = String(err.message || err);
        status.classList.remove("hidden");
      }
      console.error(err);
    }
  }

  function downloadPdf() {
    if (!state.pdfUrl) return;
    const a = document.createElement("a");
    a.href = state.pdfUrl;
    a.download = filenameForPdf();
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function openPrintConfirm() {
    if (!state.pdfUrl) return;
    const text = $("#print-confirm-text");
    if (text) text.textContent = staffJa("printConfirm");
    const go = $("#btn-print-go");
    if (go) go.textContent = STAFF_UI.printGo;
    const modal = $("#print-modal");
    if (modal) modal.classList.remove("hidden");
  }
  function closePrintConfirm() {
    const modal = $("#print-modal");
    if (modal) modal.classList.add("hidden");
  }
  function waitForFrameImages(frame) {
    const doc = frame.contentDocument;
    if (!doc) return Promise.resolve();
    const imgs = Array.from(doc.images || []);
    return Promise.all(imgs.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    }));
  }

  function pageCountFromPrintHtml(html) {
    const matches = String(html || "").match(/class="print-page/g);
    return (matches && matches.length) || 4;
  }

  function sizePrintFrame(frame, pageCount) {
    const n = Math.max(1, Number(pageCount) || 4);
    frame.style.width = "210mm";
    frame.style.height = (n * 297) + "mm";
  }

  function loadPrintFrame(frame, html, onReady) {
    sizePrintFrame(frame, pageCountFromPrintHtml(html));
    frame.onload = onReady;
    frame.srcdoc = html;
  }

  function printPdf() {
    if (!state.printHtml && !state.pdfBlob) return;
    closePrintConfirm();
    const frame = $("#print-frame");
    const html = state.printHtml;
    const runPrint = () => {
      waitForFrameImages(frame).then(() => {
        try {
          frame.contentWindow.focus();
          frame.contentWindow.print();
        } catch (err) {
          // Do not fall back to window.open: Guided Access blocks it.
          console.error(err);
        }
      });
    };
    const go = () => {
      if (!html) {
        buildPrintHtml(state.pdfBlob).then((built) => {
          state.printHtml = built;
          loadPrintFrame(frame, built, runPrint);
        }).catch((err) => console.error(err));
        return;
      }
      loadPrintFrame(frame, html, runPrint);
    };
    go();
  }

  let idleTimer = null;
  let idleInterval = null;
  let idleLeft = IDLE_COUNTDOWN_SEC;

  function stopIdleTimers() {
    clearTimeout(idleTimer);
    clearInterval(idleInterval);
    idleTimer = null;
    idleInterval = null;
  }

  function closeIdleModal() {
    const m = $("#idle-modal");
    if (m) m.classList.add("hidden");
    clearInterval(idleInterval);
    idleInterval = null;
  }

  function updateIdleCountdownText() {
    const body = $("#idle-body");
    if (body) body.textContent = hu("idleBody").replace("{s}", String(idleLeft));
  }

  function openIdleWarning(seconds) {
    if (state.screen === "language") return;
    stopIdleTimers();
    idleLeft = typeof seconds === "number" ? seconds : IDLE_COUNTDOWN_SEC;
    const title = $("#idle-title");
    if (title) title.textContent = hu("idleTitle");
    const btnStay = $("#btn-idle-continue");
    if (btnStay) btnStay.textContent = hu("idleContinue");
    const btnReset = $("#btn-idle-reset");
    if (btnReset) btnReset.textContent = hu("idleReset");
    updateIdleCountdownText();
    const m = $("#idle-modal");
    if (m) m.classList.remove("hidden");
    idleInterval = setInterval(() => {
      idleLeft -= 1;
      if (idleLeft <= 0) {
        resetGuest();
        return;
      }
      updateIdleCountdownText();
    }, 1000);
  }

  function resetIdleTimer() {
    const m = $("#idle-modal");
    if (m && !m.classList.contains("hidden")) return;
    clearTimeout(idleTimer);
    idleTimer = null;
    if (state.screen === "language") return;
    idleTimer = setTimeout(() => openIdleWarning(IDLE_COUNTDOWN_SEC), IDLE_TIMEOUT_MS);
  }

  function closeAllModals() {
    closeHelp();
    closePrintConfirm();
    closeResetConfirm();
    closeIdleModal();
  }

  function resetGuest() {
    stopIdleTimers();
    closeAllModals();
    hideFlowToast();
    if (state.pdfUrl) URL.revokeObjectURL(state.pdfUrl);
    const frame = $("#print-frame");
    if (frame) frame.src = "about:blank";
    state.plan = null;
    state.fuel = null;
    state.thirdPartyAck = false;
    state.rulesChecked = [false, false, false, false, false, false, false, false, false, false, false];
    state.compScrolled = false;
    state.signatureDataUrl = null;
    state.hasStroke = false;
    state.signedAt = null;
    state.pdfBlob = null;
    state.pdfUrl = null;
    state.printHtml = null;
    state.langSelected = false;
    state.vehicleClass = null;
    clearPersistedStaff();
    clearSignatureQuiet();
    resetPaneScroll("rules-pane");
    resetPaneScroll("comp-pane");
    state.lang = "en";
    showScreen("language");
    applyChrome();
  }

  function clearSignatureQuiet() {
    const canvas = sigCanvas();
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const ph = $(".pad-placeholder");
    if (ph) ph.classList.remove("hide");
    const fr = $(".pad-frame");
    if (fr) fr.classList.remove("dirty");
  }

  /* ---------- Staff modal ---------- */
  function openStaff() {
    $all(".choice[data-class]").forEach((b) => b.classList.toggle("selected", b.dataset.class === (state.vehicleClass || "")));
    $("#btn-staff").classList.add("hidden");
    $("#staff-modal").classList.remove("hidden");
  }
  function closeStaff() {
    $("#btn-staff").classList.remove("hidden");
    $("#staff-modal").classList.add("hidden");
    updateStaffChips();
    if (state.screen === "compensation") renderCompensation();
  }

  /* ---------- Confirm reset ---------- */
  function openResetConfirm() {
    $("#reset-modal").classList.remove("hidden");
  }
  function closeResetConfirm() {
    $("#reset-modal").classList.add("hidden");
  }

  /* ---------- Events ---------- */
  function bind() {
    $("#lang-grid").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-lang]");
      if (!btn) return;
      state.lang = btn.dataset.lang;
      state.langSelected = true;
      state.rulesChecked = [false, false, false, false, false, false, false, false, false, false, false];
      state.plan = null;
      state.thirdPartyAck = false;
      state.compScrolled = false;
      state.hasStroke = false;
      state.signatureDataUrl = null;
      clearSignatureQuiet();
      resetPaneScroll("rules-pane");
      resetPaneScroll("comp-pane");
      applyChrome();
      showScreen("rules");
    });
    $("#btn-staff").addEventListener("click", openStaff);
    $("#btn-staff-close").addEventListener("click", () => {
      closeStaff();
    });
    $all(".choice[data-class]").forEach((b) => {
      b.addEventListener("click", () => {
        state.vehicleClass = b.dataset.class || null;
        $all(".choice[data-class]").forEach((x) => x.classList.toggle("selected", x === b));
      });
    });

    $("#rules-list").addEventListener("click", (e) => {
      if (e.target.closest(".help-q")) return;
      const card = e.target.closest("[data-rule-idx]");
      if (!card) return;
      const idx = Number(card.dataset.ruleIdx);
      state.rulesChecked[idx] = !state.rulesChecked[idx];
      card.classList.toggle("checked", state.rulesChecked[idx]);
      updateRulesProgress();
    });
    $("#btn-rules-next").addEventListener("click", () => {
      if (!allRulesTicked()) {
        const firstIdx = state.rulesChecked.findIndex((v) => !v);
        const left = state.rulesChecked.filter((v) => !v).length;
        const msg = hu("needRule")
          .replace("{n}", String(firstIdx + 1))
          .replace("{left}", String(left));
        showFlowToast(msg);
        const card = $(`[data-rule-idx="${firstIdx}"]`);
        if (card) {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
          pulseEl(card);
        }
        return;
      }
      showScreen("compensation");
    });
    $("#btn-rules-back").addEventListener("click", () => showScreen("language"));

    const tpHost = $("#third-party-box");
    if (tpHost) {
      tpHost.addEventListener("click", (e) => {
        if (e.target.closest(".help-q")) return;
        const btn = e.target.closest("#third-party-ack, .third-party-ack");
        if (!btn) return;
        state.thirdPartyAck = !state.thirdPartyAck;
        btn.classList.toggle("checked", state.thirdPartyAck);
        updateCompContinue();
      });
    }

    $("#plan-grid").addEventListener("click", (e) => {
      if (e.target.closest(".help-q")) return;
      const card = e.target.closest(".plan-card");
      if (!card) return;
      state.plan = card.dataset.plan;
      $all(".plan-card").forEach((c) => c.classList.toggle("selected", c === card));
      updateCompContinue();
    });
    $("#btn-comp-next").addEventListener("click", () => {
      if (!state.thirdPartyAck) {
        showFlowToast(hu("needThirdParty"));
        const box = $("#third-party-box");
        if (box) {
          box.scrollIntoView({ behavior: "smooth", block: "center" });
          pulseEl(box);
        }
        return;
      }
      if (!state.plan) {
        showFlowToast(hu("needPlan"));
        const grid = $("#plan-grid");
        if (grid) {
          grid.scrollIntoView({ behavior: "smooth", block: "center" });
          pulseEl(grid);
        }
        return;
      }
      if (!state.compScrolled) {
        showFlowToast(hu("needScroll"));
        const pane = $("#comp-pane");
        if (pane) pane.scrollBy({ top: 240, behavior: "smooth" });
        pulseEl($("#comp-scroll-hint"));
        return;
      }
      showScreen("signature");
    });
    $("#btn-comp-back").addEventListener("click", () => showScreen("rules"));

    const canvas = sigCanvas();
    canvas.addEventListener("pointerdown", startDraw);
    canvas.addEventListener("pointermove", moveDraw);
    canvas.addEventListener("pointerup", endDraw);
    canvas.addEventListener("pointercancel", endDraw);
    canvas.addEventListener("pointerleave", endDraw);
    // Touch events as a fallback when PointerEvent is missing (older WebKit).
    const touchOpts = { passive: false };
    const skipIfPointer = (handler) => (ev) => {
      if ("PointerEvent" in window) return;
      handler(ev);
    };
    canvas.addEventListener("touchstart", skipIfPointer(startDraw), touchOpts);
    canvas.addEventListener("touchmove", skipIfPointer(moveDraw), touchOpts);
    canvas.addEventListener("touchend", skipIfPointer(endDraw), touchOpts);
    canvas.addEventListener("touchcancel", skipIfPointer(endDraw), touchOpts);
    $("#btn-clear-sig").addEventListener("click", clearSignature);
    $("#btn-sign-next").addEventListener("click", () => {
      if (!state.hasStroke) {
        showFlowToast(t("needSign"));
        pulseEl($("#pad-frame"));
        return;
      }
      state.signatureDataUrl = exportSignature();
      showScreen("summary");
    });
    $("#btn-sign-back").addEventListener("click", () => showScreen("compensation"));

    $("#btn-download").addEventListener("click", downloadPdf);
    $("#btn-print").addEventListener("click", openPrintConfirm);
    const printGo = $("#btn-print-go");
    if (printGo) printGo.addEventListener("click", printPdf);
    const printCancel = $("#btn-print-cancel");
    if (printCancel) printCancel.addEventListener("click", closePrintConfirm);
    $("#btn-reset").addEventListener("click", openResetConfirm);
    $("#btn-reset-yes").addEventListener("click", () => { closeResetConfirm(); resetGuest(); });
    $("#btn-reset-no").addEventListener("click", closeResetConfirm);

    window.addEventListener("resize", () => {
      syncVisualViewport();
      if (state.screen === "signature") resizeCanvas();
      if (state.screen === "compensation") updateTableSwipeHint();
    });
    if (window.visualViewport) {
      const onVv = () => {
        syncVisualViewport();
        if (state.screen === "signature") resizeCanvas();
      };
      window.visualViewport.addEventListener("resize", onVv);
      window.visualViewport.addEventListener("scroll", onVv);
    }

    const idleStay = $("#btn-idle-continue");
    if (idleStay) idleStay.addEventListener("click", () => {
      closeIdleModal();
      resetIdleTimer();
    });
    const idleReset = $("#btn-idle-reset");
    if (idleReset) idleReset.addEventListener("click", resetGuest);

    ["pointerdown", "touchstart", "keydown", "click"].forEach((evt) => {
      document.addEventListener(evt, () => resetIdleTimer(), { passive: true, capture: true });
    });
    ["rules-pane", "comp-pane"].forEach((pid) => {
      const el = document.getElementById(pid);
      if (el) el.addEventListener("scroll", () => resetIdleTimer(), { passive: true });
    });

    const helpCloseX = $("#help-close-x");
    if (helpCloseX) helpCloseX.addEventListener("click", closeHelp);
    const helpCloseBtn = $("#help-close-btn");
    if (helpCloseBtn) helpCloseBtn.addEventListener("click", closeHelp);
    const helpModal = $("#help-modal");
    if (helpModal) {
      helpModal.addEventListener("click", (e) => {
        if (e.target === helpModal) closeHelp();
      });
    }

    // Capture so ❓ inside a rule/plan button does not toggle the card.
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".help-q");
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      openHelp(btn.getAttribute("data-help"));
    }, true);
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const btn = e.target.closest && e.target.closest(".help-q");
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      openHelp(btn.getAttribute("data-help"));
    }, true);

    // Prevent pinch-zoom / rubber-band where possible
    document.addEventListener("gesturestart", (e) => e.preventDefault());
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    const scriptUrl = new URL("sw.js", document.baseURI);
    navigator.serviceWorker.register(scriptUrl, { scope: "./" }).catch(() => {
      // Best-effort; the app still works online without a worker.
    });
  }

  function syncVisualViewport() {
    const root = document.documentElement;
    const vv = window.visualViewport;
    if (!vv) {
      root.style.setProperty("--vv-height", window.innerHeight + "px");
      root.style.setProperty("--vv-top", "0px");
      root.style.setProperty("--vv-bottom", "0px");
      return;
    }
    const top = Math.max(0, vv.offsetTop);
    const bottom = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
    root.style.setProperty("--vv-height", Math.round(vv.height) + "px");
    root.style.setProperty("--vv-top", Math.round(top) + "px");
    root.style.setProperty("--vv-bottom", Math.round(bottom) + "px");
  }

  function init() {
    clearPersistedStaff();
    state.vehicleClass = null;
    syncVisualViewport();
    applyChrome();
    bind();
    showScreen("language");
    registerServiceWorker();
  }

  // Test helpers for Playwright (draw a signature, read state)
  window.__checkin = {
    getState: () => ({ ...state, pdfUrl: !!state.pdfUrl }),
    tickAllRules: () => {
      state.rulesChecked = state.rulesChecked.map(() => true);
      document.querySelectorAll(".rule").forEach((el) => el.classList.add("checked"));
      updateRulesProgress();
    },
    tickRule: (idx) => {
      state.rulesChecked[idx] = true;
      const el = document.querySelector(`[data-rule-idx="${idx}"]`);
      if (el) el.classList.add("checked");
      updateRulesProgress();
    },
    getPrintHtml: async () => {
      if (state.printHtml) return state.printHtml;
      let blob = state.pdfBlob;
      if (!blob) blob = await generatePdf();
      if (!state.printHtml) state.printHtml = await buildPrintHtml(blob);
      return state.printHtml;
    },
    loadPrintPreview: async () => {
      const html = await window.__checkin.getPrintHtml();
      const frame = document.getElementById("print-frame");
      if (!frame || !html) return null;
      return new Promise((resolve) => {
        sizePrintFrame(frame, pageCountFromPrintHtml(html));
        frame.onload = () => resolve({
          pageCount: pageCountFromPrintHtml(html),
          styleHeight: frame.style.height,
          styleWidth: frame.style.width
        });
        frame.srcdoc = html;
      });
    },
    getPdfBase64: async () => {
      let blob = state.pdfBlob;
      if (!blob) blob = await generatePdf();
      const ab = await blob.arrayBuffer();
      const bytes = new Uint8Array(ab);
      let s = "";
      for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
      return btoa(s);
    },
    setStaff: (fuel, vehicleClass) => {
      // Fuel is no longer a staff preset; the first argument is ignored.
      // Vehicle class is in-memory only and is not written to localStorage.
      state.fuel = null;
      if (typeof vehicleClass !== "undefined") state.vehicleClass = vehicleClass;
      clearPersistedStaff();
      updateStaffChips();
      if (state.screen === "compensation") renderCompensation();
    },
    openHelp,
    closeHelp,
    triggerIdleForTest: (seconds) => openIdleWarning(seconds),
    resetGuest,
    drawTestSignature: function (kind) {
      const canvas = sigCanvas();
      resizeCanvas();
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#163048";
      const w = canvas.width, h = canvas.height;
      ctx.lineWidth = Math.max(6, w / 180);
      ctx.beginPath();
      if (kind === "ja") {
        // A stylized "印"-like brush stroke plus a short name flourish
        ctx.moveTo(w * 0.18, h * 0.62);
        ctx.bezierCurveTo(w * 0.22, h * 0.20, w * 0.38, h * 0.18, w * 0.42, h * 0.55);
        ctx.moveTo(w * 0.22, h * 0.40);
        ctx.lineTo(w * 0.48, h * 0.38);
        ctx.moveTo(w * 0.52, h * 0.70);
        ctx.bezierCurveTo(w * 0.62, h * 0.25, w * 0.80, h * 0.30, w * 0.86, h * 0.58);
        ctx.moveTo(w * 0.58, h * 0.48);
        ctx.lineTo(w * 0.84, h * 0.46);
      } else {
        ctx.moveTo(w * 0.10, h * 0.62);
        ctx.bezierCurveTo(w * 0.12, h * 0.20, w * 0.28, h * 0.20, w * 0.30, h * 0.58);
        ctx.bezierCurveTo(w * 0.32, h * 0.82, w * 0.22, h * 0.78, w * 0.20, h * 0.60);
        ctx.moveTo(w * 0.34, h * 0.70);
        ctx.bezierCurveTo(w * 0.42, h * 0.30, w * 0.55, h * 0.30, w * 0.52, h * 0.68);
        ctx.moveTo(w * 0.58, h * 0.72);
        ctx.bezierCurveTo(w * 0.66, h * 0.28, w * 0.86, h * 0.34, w * 0.90, h * 0.58);
        ctx.moveTo(w * 0.62, h * 0.50);
        ctx.lineTo(w * 0.88, h * 0.48);
      }
      ctx.stroke();
      state.hasStroke = true;
      $(".pad-placeholder").classList.add("hide");
      $(".pad-frame").classList.add("dirty");
      setBtnInactive($("#btn-sign-next"), false);
      state.signatureDataUrl = exportSignature();
      return true;
    }
  };

  document.addEventListener("DOMContentLoaded", init);
})();
