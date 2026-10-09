import sharp from 'sharp';
const files = ['susheel2','wisdom','crowns','veneers','one','teeth-1'];
const comps = [];
for (let i=0;i<files.length;i++){
  const b = await sharp(`public/images/orig/${files[i]}.webp`).resize(360,360,{fit:'cover'}).toBuffer();
  comps.push({input:b, left:i*360, top:0});
}
await sharp({create:{width:360*files.length,height:360,channels:3,background:'#fff'}}).composite(comps).jpeg({quality:80}).toFile('shots/prev.jpg');
console.log('ok', files.join(', '));
