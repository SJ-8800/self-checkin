# Car Rental Self Check-in

A clickable iPad prototype for a Japanese car rental shop. Guests pick one of five languages (日本語 / English / 中文 / 한국어 / ไทย), tick all 11 rental terms, choose an optional add-on (CDW or CDW+NOC; basic coverage is already included), sign, and the shop gets a filled 2-page PDF to print over AirPrint.

This is a static web app. Guest details and generated PDFs stay on the device; they are not uploaded.

A public copy of the program and blank contract templates is published at:

https://sj-8800.github.io/self-checkin/

## Offline / Add to Home Screen

On an iPad or iPhone, open the address above in **Safari**, then **Share → Add to Home Screen**. After the first online load, the app works offline. Later, open it from the home-screen icon and lock the iPad with **Guided Access**.

After a program update, open the app once while online so the new version can install; it takes effect the next time the app is launched.

To rebuild the offline cache list after changing files:

```bash
python3 tools/build-sw.py
```

## Run locally

```bash
./serve.sh          # http://127.0.0.1:8765/
```

Open that URL in Safari on the shop iPad, then **Share → Add to Home Screen**. After opening from the home screen, lock the iPad with **Guided Access** so guests cannot leave the app.

## Flow

1. Language (日本語 / English / 中文 / 한국어 / ไทย)
2. Read and tick each of the 11 rental terms (Continue only when all 11 are ticked)
3. Read the compensation policy. Basic coverage is included; optionally add CDW or CDW+NOC
4. One handwritten signature is placed on both contract signature lines; the date is filled automatically (Japan time)
5. Download the PDF and print it (uses the iPad print sheet / AirPrint). Turn on two-sided / 両面 printing, flip on the long edge / 長辺とじ, so each copy is one sheet printed front and back (shop copy, then customer copy).
6. **Reset for next guest** (vehicle class is cleared; staff should set it again for the next guest)

Vehicle class is set from the small **スタッフ設定** button on the language screen. It applies to the current guest only and is cleared on reset (manual or idle auto-reset) and on page reload. Fuel type is not a staff preset.

Passport, driver’s license, and contact details are not collected.

## Files

- `index.html`, `styles.css`, `app.js`, `contract-data.js`, `pdf-fill.js` — the app
- `contracts/` — official EN / JA / ZH / KO / TH A4 PDFs (wording is not changed; the app only overlays the mark-up)
- `vendor/` — client-side PDF libraries (pdf-lib, fontkit, pdf.js)
- `sw.js`, `manifest.webmanifest` — offline PWA cache and home-screen settings
- `tools/build-sw.py` — regenerates `sw.js` and `tools/deploy-list.txt`
- `screenshots-review/` and `samples/` — review screenshots and sample signed PDFs

## Printing (duplex / 両面)

The filled contract is a 4-page A4 PDF in this order: shop page 1, shop page 2, customer page 1, customer page 2. Pages are not rotated. With long-edge two-sided printing, you get two sheets: the shop copy on the first sheet (front and back) and the customer copy on the second sheet (front and back).

Safari on iPad cannot be forced by a web page to print two-sided. In the print sheet, turn on **両面** (Two-Sided) and choose **長辺とじ** (flip on the long edge). You can also set the printer itself to default to two-sided / 両面 printing.

The PDF includes a `/ViewerPreferences /Duplex /DuplexFlipLongEdge` hint. Some desktop readers honour it; iOS AirPrint often ignores it, so please check the 両面 switch each time, especially when printing from the home-screen app.
