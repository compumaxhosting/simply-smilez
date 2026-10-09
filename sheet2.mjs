import sharp from 'sharp';
const dir='/tmp/ssd/img';
const files=['susheel.webp','about.webp','ankush.webp','susheel3.webp'];
const composites=[];
for(let i=0;i<files.length;i++){const b=await sharp(`${dir}/${files[i]}`).resize(400,400,{fit:'cover'}).toBuffer();composites.push({input:b,left:i*400,top:0});}
await sharp({create:{width:1600,height:400,channels:3,background:'#fff'}}).composite(composites).jpeg({quality:75}).toFile('/app/sheet2.jpg');
console.log('ok');
