import sharp from 'sharp';
const fs = await import('fs');
for (const f of fs.readdirSync('public/images/orig')) {
  const m = await sharp('public/images/orig/'+f).metadata();
  console.log(f, m.width+'x'+m.height);
}
