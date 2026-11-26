/* Overlay signature, date, plan check, the 11 rule ticks, the platform-insurance notice,
   and Shop/Customer copy labels onto a 4-page A4 contract PDF.
   Contract wording is never changed; Page 2 bottom bands are repositioned via lossless
   vector page clipping so the added full-width notice fits at 8.5–9pt without overlap.
   Fuel graphic is left unmarked (no box is drawn on any fuel type). */
(function (global) {
  const PAGE = { width: 594.95996, height: 841.91998 };
  const yPdf = (topY) => PAGE.height - topY;

  const SIG_COMMON_P1 = { x: 125, lineTop: 821.5, width: 210, height: 36 };
  const DATE_COMMON_P1 = { x: 418, baselineTop: 816, size: 11 };
  // round21 official contracts: EN/JA/KO/TH page-1 signature line moved down.
  const SIG_SHIFTED_P1 = { x: 125, lineTop: 836.5, width: 210, height: 36 };
  const DATE_SHIFTED_P1 = { x: 418, baselineTop: 831, size: 11 };

  const LAYOUT = {
    en: {
      page1: {
        sig: SIG_SHIFTED_P1,
        date: DATE_SHIFTED_P1,
        rules: [
          { x1: 22.6, yTop: 81.1, x2: 33.6, yBottom: 92.2 },
          { x1: 22.6, yTop: 169.0, x2: 33.6, yBottom: 180.0 },
          { x1: 22.6, yTop: 217.0, x2: 33.6, yBottom: 228.0 },
          { x1: 22.6, yTop: 277.4, x2: 33.6, yBottom: 289.0 },
          { x1: 22.6, yTop: 325.4, x2: 33.6, yBottom: 337.0 },
          { x1: 22.6, yTop: 386.4, x2: 33.6, yBottom: 397.4 },
          { x1: 22.6, yTop: 421.0, x2: 33.6, yBottom: 432.0 },
          { x1: 22.6, yTop: 515.7, x2: 33.6, yBottom: 526.8 },
          { x1: 22.6, yTop: 551.7, x2: 33.6, yBottom: 562.8 },
          { x1: 22.6, yTop: 657.5, x2: 33.6, yBottom: 668.5 },
          { x1: 22.6, yTop: 746.0, x2: 33.6, yBottom: 757.0 }
        ]
      },
      page2: {
        // 2026-11-25: topEnd moved down so the longer “specific parts” clause
        // (box bottom ~740) is not cropped. mid shift reduced so the ack
        // line stays below the box; notice box is slightly shorter.
        slices: {
          topEnd: 741.5, shiftTopUp: 11,
          midStart: 742.5, midEnd: 778, shiftMidUp: 8,
          botStart: 784, botEnd: 826, shiftBotDown: 12
        },
        boxes: {
          basic: { x1: 60.0, yTop: 755.9, x2: 71.0, yBottom: 766.4 },
          cdw: { x1: 210.7, yTop: 755.9, x2: 221.8, yBottom: 766.4 },
          cdw_noc: { x1: 300.0, yTop: 755.9, x2: 311.0, yBottom: 766.4 }
        },
        sig: { x: 122, lineTop: 833.5, width: 148, height: 28 },
        date: { x: 418, baselineTop: 828, size: 11 },
        thirdParty: { x: 22, width: 551, yTop: 771.5, yBottom: 794.5 }
      }
    },
    ja: {
      page1: {
        sig: SIG_SHIFTED_P1,
        date: DATE_SHIFTED_P1,
        rules: [
          { x1: 22.6, yTop: 81.6, x2: 33.6, yBottom: 93.1 },
          { x1: 22.6, yTop: 165.6, x2: 33.6, yBottom: 177.1 },
          { x1: 22.6, yTop: 205.0, x2: 33.6, yBottom: 216.0 },
          { x1: 22.6, yTop: 258.7, x2: 33.6, yBottom: 269.8 },
          { x1: 22.6, yTop: 312.0, x2: 33.6, yBottom: 323.0 },
          { x1: 22.6, yTop: 381.1, x2: 33.6, yBottom: 392.2 },
          { x1: 22.6, yTop: 420.0, x2: 33.6, yBottom: 431.0 },
          { x1: 22.6, yTop: 519.5, x2: 33.6, yBottom: 530.5 },
          { x1: 22.6, yTop: 557.0, x2: 33.6, yBottom: 568.0 },
          { x1: 22.6, yTop: 667.2, x2: 33.6, yBottom: 678.3 },
          { x1: 22.6, yTop: 737.7, x2: 33.6, yBottom: 748.8 }
        ]
      },
      page2: {
        slices: {
          topEnd: 732, shiftTopUp: 8,
          midStart: 737, midEnd: 776, shiftMidUp: 10,
          botStart: 783, botEnd: 826, shiftBotDown: 12
        },
        boxes: {
          basic: { x1: 60.0, yTop: 751.8, x2: 71.0, yBottom: 763.3 },
          cdw: { x1: 169.0, yTop: 751.8, x2: 180.0, yBottom: 763.3 },
          cdw_noc: { x1: 257.3, yTop: 751.8, x2: 268.3, yBottom: 763.3 }
        },
        sig: { x: 122, lineTop: 833.5, width: 148, height: 28 },
        date: { x: 418, baselineTop: 828, size: 11 },
        thirdParty: { x: 22, width: 551, yTop: 767.5, yBottom: 793.5 }
      }
    },
    zh: {
      page1: {
        sig: { x: 142, lineTop: 821.5, width: 200, height: 36 },
        date: DATE_COMMON_P1,
        rules: [
          { x1: 22.6, yTop: 81.1, x2: 33.6, yBottom: 92.2 },
          { x1: 22.6, yTop: 169.0, x2: 33.6, yBottom: 180.0 },
          { x1: 22.6, yTop: 217.0, x2: 33.6, yBottom: 228.0 },
          { x1: 22.6, yTop: 277.4, x2: 33.6, yBottom: 289.0 },
          { x1: 22.6, yTop: 325.4, x2: 33.6, yBottom: 337.0 },
          { x1: 22.6, yTop: 386.4, x2: 33.6, yBottom: 397.4 },
          { x1: 22.6, yTop: 421.0, x2: 33.6, yBottom: 432.0 },
          { x1: 22.6, yTop: 511.9, x2: 33.6, yBottom: 523.0 },
          { x1: 22.6, yTop: 546.5, x2: 33.6, yBottom: 557.5 },
          { x1: 22.6, yTop: 652.2, x2: 33.6, yBottom: 663.3 },
          { x1: 22.6, yTop: 726.5, x2: 33.6, yBottom: 737.5 }
        ]
      },
      page2: {
        // New EN-layout Chinese contract: same geometry as EN, box not extended.
        slices: {
          topEnd: 732, shiftTopUp: 8,
          midStart: 740, midEnd: 778, shiftMidUp: 11,
          botStart: 784, botEnd: 826, shiftBotDown: 12
        },
        boxes: {
          basic: { x1: 60.0, yTop: 752.7, x2: 71.0, yBottom: 763.7 },
          cdw: { x1: 210.7, yTop: 752.7, x2: 221.8, yBottom: 763.7 },
          cdw_noc: { x1: 300.0, yTop: 752.7, x2: 311.0, yBottom: 763.7 }
        },
        sig: { x: 142, lineTop: 833.5, width: 200, height: 28 },
        date: { x: 418, baselineTop: 828, size: 11 },
        thirdParty: { x: 22, width: 551, yTop: 768.5, yBottom: 794.5 }
      }
    },
    ko: {
      page1: {
        sig: SIG_SHIFTED_P1,
        date: DATE_SHIFTED_P1,
        rules: [
          { x1: 22.6, yTop: 81.6, x2: 33.6, yBottom: 93.1 },
          { x1: 22.6, yTop: 170.4, x2: 33.6, yBottom: 181.4 },
          { x1: 22.6, yTop: 210.7, x2: 33.6, yBottom: 221.8 },
          { x1: 22.6, yTop: 267.8, x2: 33.6, yBottom: 278.9 },
          { x1: 22.6, yTop: 324.0, x2: 33.6, yBottom: 335.0 },
          { x1: 22.6, yTop: 380.2, x2: 33.6, yBottom: 391.7 },
          { x1: 22.6, yTop: 421.0, x2: 33.6, yBottom: 432.0 },
          { x1: 22.6, yTop: 530.0, x2: 33.6, yBottom: 541.0 },
          { x1: 22.6, yTop: 570.5, x2: 33.6, yBottom: 581.5 },
          { x1: 22.6, yTop: 677.7, x2: 33.6, yBottom: 688.8 },
          { x1: 22.6, yTop: 743.0, x2: 33.6, yBottom: 754.0 }
        ]
      },
      page2: {
        slices: {
          topEnd: 718, shiftTopUp: 0,
          midStart: 738, midEnd: 776, shiftMidUp: 15,
          botStart: 783, botEnd: 826, shiftBotDown: 10
        },
        boxes: {
          basic: { x1: 60.0, yTop: 746.8, x2: 71.0, yBottom: 758.3 },
          cdw: { x1: 169.0, yTop: 746.8, x2: 180.0, yBottom: 758.3 },
          cdw_noc: { x1: 256.3, yTop: 746.8, x2: 267.8, yBottom: 758.3 }
        },
        sig: { x: 122, lineTop: 831.5, width: 148, height: 28 },
        date: { x: 418, baselineTop: 826, size: 11 },
        thirdParty: { x: 22, width: 551, yTop: 763.5, yBottom: 790.5 }
      }
    },
    th: {
      page1: {
        sig: SIG_SHIFTED_P1,
        date: DATE_SHIFTED_P1,
        rules: [
          { x1: 22.6, yTop: 76.3, x2: 33.6, yBottom: 87.8 },
          { x1: 22.6, yTop: 147.8, x2: 33.6, yBottom: 158.9 },
          { x1: 22.6, yTop: 187.7, x2: 33.6, yBottom: 198.7 },
          { x1: 22.6, yTop: 242.9, x2: 33.6, yBottom: 254.4 },
          { x1: 22.6, yTop: 298.6, x2: 33.6, yBottom: 309.6 },
          { x1: 22.6, yTop: 353.8, x2: 33.6, yBottom: 365.3 },
          { x1: 22.6, yTop: 393.6, x2: 33.6, yBottom: 405.1 },
          { x1: 22.6, yTop: 494.7, x2: 33.6, yBottom: 505.8 },
          { x1: 22.6, yTop: 533.0, x2: 33.6, yBottom: 544.0 },
          { x1: 22.6, yTop: 658.2, x2: 33.6, yBottom: 669.3 },
          { x1: 22.6, yTop: 742.2, x2: 33.6, yBottom: 753.3 }
        ]
      },
      page2: {
        // 2026-11-25: topEnd moved down so the longer exclusions box
        // (bottom ~733) is not cropped. mid shift reduced; notice slightly shorter.
        // shiftTopUp stays 8 — the Thai title already sits close to the top edge.
        slices: {
          topEnd: 734.5, shiftTopUp: 8,
          midStart: 735.5, midEnd: 775, shiftMidUp: 7,
          botStart: 779, botEnd: 826, shiftBotDown: 12
        },
        boxes: {
          basic: { x1: 60.0, yTop: 754.6, x2: 71.0, yBottom: 765.1 },
          cdw: { x1: 209.3, yTop: 754.6, x2: 220.3, yBottom: 765.1 },
          cdw_noc: { x1: 297.6, yTop: 754.6, x2: 309.1, yBottom: 765.1 }
        },
        sig: { x: 122, lineTop: 833.5, width: 148, height: 28 },
        date: { x: 418, baselineTop: 828, size: 11 },
        thirdParty: { x: 22, width: 551, yTop: 769.5, yBottom: 789.5 }
      }
    }
  };

  const COPY_LABELS = {
    zh: { shop: ["店舗控え / ", "店铺联"], cust: ["お客様控え / ", "客户联"] },
    en: { shop: ["店舗控え / Shop copy"], cust: ["お客様控え / Customer copy"] },
    ja: { shop: ["店舗控え（ショップ用）"], cust: ["お客様控え"] },
    ko: { shop: ["店舗控え / ", "매장 보관용"], cust: ["お客様控え / ", "고객용"] },
    th: { shop: ["店舗控え / ", "สำหรับร้าน"], cust: ["お客様控え / ", "สำหรับลูกค้า"] }
  };

  const FONT_URL = {
    zh: "assets/fonts/notice-zh.ttf",
    ja: "assets/fonts/notice-ja.ttf",
    ko: "assets/fonts/notice-ko.ttf",
    th: "assets/fonts/notice-th.ttf"
  };

  const fontByteCache = {};
  async function loadFontBytes(url) {
    if (!fontByteCache[url]) {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Could not load font: " + url);
      fontByteCache[url] = await res.arrayBuffer();
    }
    return fontByteCache[url];
  }

  function dataUrlToBytes(dataUrl) {
    const b64 = dataUrl.split(",")[1];
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }

  function drawCheck(page, box, rgb) {
    const x1 = box.x1, x2 = box.x2;
    const y1 = yPdf(box.yBottom);
    const y2 = yPdf(box.yTop);
    const w = x2 - x1, h = y2 - y1;
    const color = rgb(0.72, 0.05, 0.08);
    page.drawRectangle({
      x: x1 + 0.5,
      y: y1 + 0.5,
      width: w - 1,
      height: h - 1,
      color: rgb(1, 0.93, 0.93)
    });
    const t = Math.max(1.2, w * 0.14);
    page.drawLine({
      start: { x: x1 + w * 0.15, y: y1 + h * 0.48 },
      end: { x: x1 + w * 0.40, y: y1 + h * 0.18 },
      thickness: t,
      color,
      lineCap: PDFLib.LineCapStyle.Round
    });
    page.drawLine({
      start: { x: x1 + w * 0.40, y: y1 + h * 0.18 },
      end: { x: x1 + w * 0.88, y: y1 + h * 0.82 },
      thickness: t,
      color,
      lineCap: PDFLib.LineCapStyle.Round
    });
  }

  function placeSignature(page, png, slot) {
    page.drawImage(png, {
      x: slot.x,
      y: yPdf(slot.lineTop),
      width: slot.width,
      height: slot.height
    });
  }

  function placeDate(page, font, text, slot, rgb) {
    page.drawText(text, {
      x: slot.x,
      y: yPdf(slot.baselineTop),
      size: slot.size,
      font,
      color: rgb(0.08, 0.08, 0.08)
    });
  }

  function noticeText(lang) {
    const H = (typeof window !== "undefined" && window.HELP && window.HELP.ui && window.HELP.ui.thirdPartyNotice) || {};
    return H[lang] || H.en || "";
  }

  function splitFontRuns(text, primaryFont, asciiFallback) {
    if (!asciiFallback || asciiFallback === primaryFont) return [{ text, font: primaryFont }];
    const runs = [];
    let cur = "";
    let curIsAscii = null;
    for (const ch of text) {
      const isAscii = ch.charCodeAt(0) <= 0x7f;
      if (curIsAscii === null || isAscii === curIsAscii) {
        cur += ch;
        curIsAscii = isAscii;
      } else {
        runs.push({ text: cur, font: curIsAscii ? asciiFallback : primaryFont });
        cur = ch;
        curIsAscii = isAscii;
      }
    }
    if (cur) runs.push({ text: cur, font: curIsAscii ? asciiFallback : primaryFont });
    return runs;
  }

  function measureTextMixed(text, size, primaryFont, asciiFallback) {
    let w = 0;
    for (const r of splitFontRuns(text, primaryFont, asciiFallback)) {
      w += r.font.widthOfTextAtSize(r.text, size);
    }
    return w;
  }

  function drawTextMixed(page, text, opts, primaryFont, asciiFallback) {
    let x = opts.x;
    for (const r of splitFontRuns(text, primaryFont, asciiFallback)) {
      page.drawText(r.text, { ...opts, x, font: r.font });
      x += r.font.widthOfTextAtSize(r.text, opts.size);
    }
  }

  function wrapVectorText(font, text, size, maxWidth, asciiFallback) {
    const lines = [];
    let line = "";
    const tokens = String(text).split(/(\s+)/);
    const pushChar = (ch) => {
      const trial = line + ch;
      if (!line || measureTextMixed(trial, size, font, asciiFallback) <= maxWidth) line = trial;
      else { lines.push(line); line = ch; }
    };
    for (const tok of tokens) {
      const trial = line + tok;
      if (measureTextMixed(trial, size, font, asciiFallback) <= maxWidth) {
        line = trial;
      } else if (line && measureTextMixed(tok.replace(/^\s+/, ""), size, font, asciiFallback) <= maxWidth) {
        if (line.trim()) lines.push(line.replace(/\s+$/g, ""));
        line = tok.replace(/^\s+/, "");
      } else {
        for (const ch of tok) pushChar(ch);
      }
    }
    if (line) lines.push(line);
    return lines;
  }


  async function renderShapedTextPng(pdf, text, sizePt, maxWidthPt, colorHex, fontCss, align) {
    const scale = 6; // 432 DPI for crisp AirPrint vector-like output
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const fontStr = `${sizePt * scale}px ${fontCss}`;
    ctx.font = fontStr;
    const rawW = Math.ceil(ctx.measureText(text).width);
    const wPx = Math.max(4, Math.min(Math.ceil(maxWidthPt * scale), rawW + 8));
    const hPx = Math.ceil(sizePt * 1.45 * scale);
    canvas.width = wPx;
    canvas.height = hPx;
    const c2 = canvas.getContext("2d");
    c2.font = fontStr;
    c2.fillStyle = colorHex || "#1f1a0d";
    c2.textBaseline = "alphabetic";
    c2.textAlign = align || "left";
    c2.fillText(text, align === "right" ? wPx - 2 : 0, Math.round(sizePt * 1.08 * scale));
    const pngBytes = dataUrlToBytes(canvas.toDataURL("image/png"));
    const png = await pdf.embedPng(pngBytes);
    return { png, widthPt: wPx / scale, heightPt: hPx / scale, baselineOffsetPt: sizePt * 1.08 };
  }

  function wrapCanvasText(text, sizePt, maxWidthPt, fontCss) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = `${sizePt}px ${fontCss}`;
    const lines = [];
    let line = "";
    const tokens = String(text).split(/(\s+)/);
    for (const tok of tokens) {
      const trial = line + tok;
      if (ctx.measureText(trial).width <= maxWidthPt) {
        line = trial;
      } else if (line && ctx.measureText(tok.replace(/^\s+/, "")).width <= maxWidthPt) {
        if (line.trim()) lines.push(line.replace(/\s+$/g, ""));
        line = tok.replace(/^\s+/, "");
      } else {
        for (const ch of tok) {
          const t2 = line + ch;
          if (!line || ctx.measureText(t2).width <= maxWidthPt) line = t2;
          else { lines.push(line); line = ch; }
        }
      }
    }
    if (line) lines.push(line);
    return lines;
  }

  async function drawThirdPartyNotice(page, font, asciiFallback, box, text, rgb) {
    if (!box || !text) return;
    const x = box.x, width = box.width;
    const y = yPdf(box.yBottom);
    const h = box.yBottom - box.yTop;
    page.drawRectangle({
      x,
      y,
      width,
      height: h,
      color: rgb(1, 0.965, 0.86),
      borderColor: rgb(0.55, 0.32, 0.05),
      borderWidth: 0.9
    });
    const tick = 9.5;
    const tickBox = {
      x1: x + 4.5,
      yTop: box.yTop + (h - tick) / 2,
      x2: x + 4.5 + tick,
      yBottom: box.yTop + (h - tick) / 2 + tick
    };
    page.drawRectangle({
      x: tickBox.x1,
      y: yPdf(tickBox.yBottom),
      width: tick,
      height: tick,
      borderColor: rgb(0.72, 0.05, 0.08),
      borderWidth: 0.8,
      color: rgb(1, 0.93, 0.93)
    });
    drawCheck(page, tickBox, rgb);

    const textX = x + 18.0;
    const textW = width - 26.0;
    if (asciiFallback === "THAI_CANVAS") {
      const thFontCss = '"Sarabun", "Noto Sans Thai", "Thonburi", "Tahoma", sans-serif';
      let size = 9.0;
      let lines = wrapCanvasText(text, size, textW, thFontCss);
      if (lines.length > 2) { size = 8.5; lines = wrapCanvasText(text, size, textW, thFontCss); }
      if (lines.length > 2) { size = 8.2; lines = wrapCanvasText(text, size, textW, thFontCss); }
      const leading = size + 1.9;
      const blockH = (lines.length - 1) * leading + size * 0.72;
      let ty = y + (h - blockH) / 2 + (lines.length - 1) * leading;
      for (const line of lines) {
        const img = await renderShapedTextPng(page.doc, line, size, textW, "#1f1a0d", thFontCss);
        page.drawImage(img.png, {
          x: textX,
          y: ty - (img.heightPt - img.baselineOffsetPt),
          width: img.widthPt,
          height: img.heightPt
        });
        if (font) {
          try {
            page.drawText(line, { x: textX, y: ty, size, font, opacity: 0, color: rgb(0, 0, 0) });
          } catch (e) { /* ignore missing glyphs in hidden layer */ }
        }
        ty -= leading;
      }
      return;
    }
    let size = 9.0;
    let lines = wrapVectorText(font, text, size, textW, asciiFallback);
    if (lines.length > 2) {
      size = 8.5;
      lines = wrapVectorText(font, text, size, textW, asciiFallback);
    }
    if (lines.length > 2) {
      size = 8.0;
      lines = wrapVectorText(font, text, size, textW, asciiFallback);
    }
    const leading = size + 1.9;
    const blockH = (lines.length - 1) * leading + size * 0.72;
    let ty = y + (h - blockH) / 2 + (lines.length - 1) * leading;
    const color = rgb(0.12, 0.10, 0.05);
    for (const line of lines) {
      drawTextMixed(page, line, { x: textX, y: ty, size, color }, font, asciiFallback);
      ty -= leading;
    }
  }

  // pdf-lib embedPages() clips visually but leaves the full original text
  // stream in each Form XObject, so pdftotext/screen readers would see every
  // paragraph 3 times. Rebuild page 2 as a high-DPI image of the three bands
  // plus a single invisible (opacity 0) text layer remapped to the new layout.
  const PAGE2_RASTER_SCALE = 3; // 216 dpi

  async function rebuildPage2WithRoom(pdf, officialBytes, slices, langFont, helv) {
    if (!slices) return pdf.getPages()[1];
    if (!global.pdfjsLib) throw new Error("pdf.js failed to load; cannot rebuild page 2");

    const loading = global.pdfjsLib.getDocument({ data: new Uint8Array(officialBytes) });
    const srcDoc = await loading.promise;
    const srcPage = await srcDoc.getPage(2);
    const scale = PAGE2_RASTER_SCALE;
    const viewport = srcPage.getViewport({ scale });

    const full = document.createElement("canvas");
    full.width = Math.ceil(viewport.width);
    full.height = Math.ceil(viewport.height);
    const fctx = full.getContext("2d", { alpha: false });
    fctx.fillStyle = "#ffffff";
    fctx.fillRect(0, 0, full.width, full.height);
    await srcPage.render({ canvasContext: fctx, viewport, background: "#ffffff" }).promise;
    await srcDoc.destroy();

    const out = document.createElement("canvas");
    out.width = Math.round(PAGE.width * scale);
    out.height = Math.round(PAGE.height * scale);
    const ctx = out.getContext("2d", { alpha: false });
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, out.width, out.height);

    const sy = (topY) => Math.round(topY * scale);
    const sh = (a, b) => Math.max(1, sy(b) - sy(a));
    ctx.drawImage(full, 0, 0, full.width, sy(slices.topEnd),
      0, -sy(slices.shiftTopUp), out.width, sy(slices.topEnd));
    ctx.drawImage(full, 0, sy(slices.midStart), full.width, sh(slices.midStart, slices.midEnd),
      0, sy(slices.midStart) - sy(slices.shiftMidUp), out.width, sh(slices.midStart, slices.midEnd));
    ctx.drawImage(full, 0, sy(slices.botStart), full.width, sh(slices.botStart, slices.botEnd),
      0, sy(slices.botStart) + sy(slices.shiftBotDown), out.width, sh(slices.botStart, slices.botEnd));

    // JPEG is fully opaque, so it hides the original page 2 ink while leaving
    // that page's official text stream (embedded once below) extractable.
    const img = await pdf.embedJpg(dataUrlToBytes(out.toDataURL("image/jpeg", 0.97)));
    const origP2 = pdf.getPages()[1];
    const [origEmb] = await pdf.embedPages([origP2]);
    const newPage = pdf.addPage([PAGE.width, PAGE.height]);
    newPage.drawPage(origEmb, { x: 0, y: 0, width: PAGE.width, height: PAGE.height });
    newPage.drawImage(img, { x: 0, y: 0, width: PAGE.width, height: PAGE.height });
    return newPage;
  }

  async function drawCopyBadge(page, kind, parts, fonts, rgb, useThaiCanvas) {
    const size = 7.6;
    const padX = 5.5;
    const boxH = 12.5;
    const x = 18;
    const y = yPdf(18.0);
    const isShop = kind === "shop";
    const pickFont = (i) => (parts.length === 1 ? fonts.single : (i === 0 ? fonts.ja : fonts.lang));
    const thFontCss = '"Sarabun", "Noto Sans Thai", "Thonburi", "Tahoma", sans-serif';
    const colHex = isShop ? "#1c3b54" : "#0d6647";
    let thaiSuffixImg = null;
    let textW = 0;
    for (let i = 0; i < parts.length; i++) {
      if (useThaiCanvas && i === 1) {
        thaiSuffixImg = await renderShapedTextPng(page.doc, parts[i], size, 160, colHex, thFontCss);
        textW += thaiSuffixImg.widthPt;
      } else {
        textW += pickFont(i).widthOfTextAtSize(parts[i], size);
      }
    }
    const boxW = textW + padX * 2;
    page.drawRectangle({
      x,
      y,
      width: boxW,
      height: boxH,
      color: isShop ? rgb(0.93, 0.96, 0.99) : rgb(0.90, 0.97, 0.94),
      borderColor: isShop ? rgb(0.11, 0.23, 0.33) : rgb(0.05, 0.48, 0.34),
      borderWidth: 0.8
    });
    let tx = x + padX;
    const ty = y + (boxH - size * 0.72) / 2;
    const col = isShop ? rgb(0.11, 0.23, 0.33) : rgb(0.05, 0.40, 0.28);
    for (let i = 0; i < parts.length; i++) {
      if (useThaiCanvas && i === 1 && thaiSuffixImg) {
        page.drawImage(thaiSuffixImg.png, {
          x: tx,
          y: ty - (thaiSuffixImg.heightPt - thaiSuffixImg.baselineOffsetPt),
          width: thaiSuffixImg.widthPt,
          height: thaiSuffixImg.heightPt
        });
        tx += thaiSuffixImg.widthPt;
      } else {
        const f = pickFont(i);
        page.drawText(parts[i], { x: tx, y: ty, size, font: f, color: col });
        tx += f.widthOfTextAtSize(parts[i], size);
      }
    }
  }

  async function fillContract(opts) {
    const { lang, plan, signatureDataUrl, dateText, rulesChecked, thirdPartyAck } = opts;
    const code = (lang || "en").toUpperCase();
    const url = `contracts/rental_contract_${code}_A4.pdf`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Could not load contract PDF: " + url);
    const bytes = await res.arrayBuffer();

    const pdf = await PDFLib.PDFDocument.load(bytes);
    if (global.fontkit) pdf.registerFontkit(global.fontkit);

    const helv = await pdf.embedFont(PDFLib.StandardFonts.Helvetica);
    const jaBytes = await loadFontBytes(FONT_URL.ja);
    const jaFont = await pdf.embedFont(jaBytes);
    let langFont = jaFont;
    if (lang === "en") langFont = helv;
    else if (lang && lang !== "ja" && FONT_URL[lang]) {
      langFont = await pdf.embedFont(await loadFontBytes(FONT_URL[lang]));
    }

    const png = await pdf.embedPng(dataUrlToBytes(signatureDataUrl));
    const { rgb } = PDFLib;
    const layout = LAYOUT[lang] || LAYOUT.en;
    const origPages = pdf.getPages();

    // Page 1: rules ticks, signature, date (fuel graphic left unmarked)
    const p1 = origPages[0];
    const ticked = rulesChecked || [true, true, true, true, true, true, true, true, true, true, true];
    (layout.page1.rules || []).forEach((box, i) => {
      if (ticked[i]) drawCheck(p1, box, rgb);
    });
    placeSignature(p1, png, layout.page1.sig);
    placeDate(p1, helv, dateText, layout.page1.date, rgb);

    // Page 2: shift the bottom bands to make room for the 8.5–9pt notice,
    // as a single raster + one hidden text layer (no duplicated text stream).
    const p2 = await rebuildPage2WithRoom(pdf, bytes, layout.page2.slices, langFont, helv);
    if (p2 !== origPages[1]) {
      pdf.removePage(1); // remove original page 2 (new page 2 is at the end -> becomes 1)
    }

    if (plan && layout.page2.boxes[plan]) {
      drawCheck(p2, layout.page2.boxes[plan], rgb);
    }
    if (thirdPartyAck) {
      const fallback = lang === "zh" ? helv : (lang === "th" ? "THAI_CANVAS" : null);
      await drawThirdPartyNotice(p2, langFont, fallback, layout.page2.thirdParty, noticeText(lang), rgb);
    }
    placeSignature(p2, png, layout.page2.sig);
    placeDate(p2, helv, dateText, layout.page2.date, rgb);

    // Build 4-page PDF: pages 1-2 Shop copy, pages 3-4 Customer copy
    const outPdf = await PDFDocumentWithFonts(pdf, p1, p2, lang, COPY_LABELS[lang] || COPY_LABELS.en, rgb);
    // Hint to print duplex, flipping on the long edge (A4 portrait). Safari / AirPrint
    // may ignore this; staff should still turn on 両面 in the print sheet.
    try {
      const prefs = outPdf.catalog.getOrCreateViewerPreferences();
      if (prefs && typeof prefs.setDuplex === "function") {
        prefs.setDuplex("DuplexFlipLongEdge");
      }
    } catch (err) {
      console.warn("Could not set PDF ViewerPreferences.Duplex:", err);
    }
    const out = await outPdf.save();
    return new Blob([out], { type: "application/pdf" });
  }

  async function PDFDocumentWithFonts(workPdf, _p1, _p2, lang, labels, rgb) {
    const outPdf = await PDFLib.PDFDocument.create();
    if (global.fontkit) outPdf.registerFontkit(global.fontkit);
    const jaBytes = await loadFontBytes(FONT_URL.ja);
    const jaFont = await outPdf.embedFont(jaBytes);
    let langFont = jaFont;
    if (lang === "en") langFont = await outPdf.embedFont(PDFLib.StandardFonts.Helvetica);
    else if (lang && lang !== "ja" && FONT_URL[lang]) {
      langFont = await outPdf.embedFont(await loadFontBytes(FONT_URL[lang]));
    }
    // Load workPdf bytes into two independent documents so copyPages never shares
    // underlying content streams between pages 1–2 (Shop copy) and 3–4 (Customer copy).
    const workBytes = await workPdf.save();
    const docShop = await PDFLib.PDFDocument.load(workBytes);
    const docCust = await PDFLib.PDFDocument.load(workBytes);
    const shopPages = await outPdf.copyPages(docShop, [0, 1]);
    const custPages = await outPdf.copyPages(docCust, [0, 1]);
    const fontSet = { ja: jaFont, lang: langFont, single: jaFont };
    for (const pg of shopPages) {
      outPdf.addPage(pg);
      await drawCopyBadge(pg, "shop", labels.shop, fontSet, rgb, lang === "th");
    }
    for (const pg of custPages) {
      outPdf.addPage(pg);
      await drawCopyBadge(pg, "cust", labels.cust, fontSet, rgb, lang === "th");
    }
    return outPdf;
  }

  global.fillContractPdf = fillContract;
})(window);
