import sharp from 'sharp';
import fs from 'fs';
const dir = '/tmp/ssd/img';
const files = fs.readdirSync(dir).filter(f => /\.(webp|jpeg|jpg)$/.test(f)).sort();
const cols = 6, tw = 300, th = 220;
const items = [];
for (const f of files) {
  const m = await sharp(`${dir}/${f}`).metadata();
  items.push({ f, w: m.width, h: m.height });
}
console.log(items.map(i => `${i.f} ${i.w}x${i.h}`).join('\n'));
const composites = [];
for (let i = 0; i < items.length; i++) {
  const buf = await sharp(`${dir}/${items[i].f}`).resize(tw, th, { fit: 'cover' }).toBuffer();
  composites.push({ input: buf, left: (i % cols) * tw, top: Math.floor(i / cols) * th });
}
const rows = Math.ceil(items.length / cols);
await sharp({ create: { width: cols * tw, height: rows * th, channels: 3, background: '#ffffff' } })
  .composite(composites).jpeg({ quality: 72 }).toFile('/tmp/sheet.jpg');
console.log('rows', rows);
