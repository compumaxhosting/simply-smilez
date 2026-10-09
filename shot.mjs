import { chromium } from 'playwright';

const base = 'http://localhost:3000';
const jobs = JSON.parse(process.argv[2]);

const browser = await chromium.launch();
for (const j of jobs) {
  const ctx = await browser.newContext({ viewport: { width: j.w || 1440, height: j.h || 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push(String(e)));
  await page.goto(base + j.path, { waitUntil: 'networkidle', timeout: 45000 });
  await page.waitForTimeout(1500);
  await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; });
  if (j.find) {
    await page.evaluate((text) => {
      const el = [...document.querySelectorAll('h1,h2,h3,p,span,div,section,ul,dt')].find(
        (n) => n.textContent && n.textContent.trim().startsWith(text) && n.children.length >= 0
      );
      if (el) el.scrollIntoView({ block: 'start' });
      window.scrollBy(0, -160);
    }, j.find);
    await page.waitForTimeout(1000);
  } else if (j.scroll) {
    await page.evaluate(y => window.scrollTo(0, y), j.scroll);
    await page.waitForTimeout(900);
  }
  if (j.click) {
    await page.click(j.click).catch((e) => console.log('click failed', j.name, String(e).slice(0, 120)));
    await page.waitForTimeout(800);
  }
  if (j.hover) {
    await page.hover(j.hover).catch((e) => console.log('hover failed', j.name, String(e).slice(0, 120)));
    await page.waitForTimeout(900);
  }
  await page.screenshot({ path: `shots/${j.name}.png` });
  if (errors.length) console.log(j.name, 'CONSOLE ERRORS:', errors.slice(0, 4));
  await ctx.close();
}
await browser.close();
console.log('done');
