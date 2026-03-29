const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

const visas = [
  { file: 'visa_01.jpeg', blurBoxes: [ [0, 0.22, 1, 0.78] ] },
  { file: 'visa_02.jpeg', blurBoxes: [ [0, 0.58, 1, 0.42] ] },
  { file: 'visa_03.jpeg', blurBoxes: [ [0, 0.56, 1, 0.44] ] },
  { file: 'visa_04.jpeg', blurBoxes: [ [0, 0.45, 1, 0.55] ] },
  { file: 'visa_05.jpeg', blurBoxes: [ [0, 0.35, 1, 0.65] ] },
  { file: 'visa_06.jpeg', blurBoxes: [ [0, 0.53, 1, 0.20] ] },
  { file: 'visa_07.jpeg', blurBoxes: [ [0, 0.42, 1, 0.20] ] }
];

async function redactVisas() {
  for (const v of visas) {
    const filePath = path.join(__dirname, 'public', v.file);
    if (!fs.existsSync(filePath)) {
      console.log(`Missing ${v.file}`);
      continue;
    }
    
    console.log(`Processing ${v.file}...`);
    try {
      const image = await Jimp.read(filePath);
      const width = image.bitmap.width;
      const height = image.bitmap.height;

      for (const box of v.blurBoxes) {
        const x = Math.round(box[0] * width);
        const y = Math.round(box[1] * height);
        const w = Math.round(box[2] * width);
        const h = Math.round(box[3] * height);
        
        let pixelSize = Math.max(20, Math.floor(width / 50));
        image.pixelate(pixelSize, x, y, w, h);
      }

      await image.writeAsync(filePath);
      console.log(`Saved redacted ${v.file}`);
    } catch(err) {
      console.error(`Error on ${v.file}: ${err.message}`);
    }
  }
}

redactVisas();
