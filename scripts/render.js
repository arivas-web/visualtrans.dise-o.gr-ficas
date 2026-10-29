#!/usr/bin/env node
// Motor Claude: renderiza a PNG una pieza compuesta en HTML/SVG, al tamaño final exacto.
// Uso: node scripts/render.js <pieza.html> <ancho> <alto> <salida.png> [escala]
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const [src, w, h, out, scale = '1'] = process.argv.slice(2);
  if (!src || !w || !h || !out) {
    console.error('Uso: node scripts/render.js <pieza.html> <ancho> <alto> <salida.png> [escala]');
    process.exit(1);
  }
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: +w, height: +h },
    deviceScaleFactor: +scale,
  });
  await page.goto('file://' + path.resolve(src));
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: out, clip: { x: 0, y: 0, width: +w, height: +h } });
  await browser.close();
  console.log(out);
})().catch((e) => { console.error(e); process.exit(1); });
