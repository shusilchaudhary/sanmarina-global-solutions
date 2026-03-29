const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

const visas = [
  // blurBoxes: [x, y, w, h] as percentages
  { file: 'visa_01.jpeg', blurBoxes: [ [0.55, 0.05, 0.45, 0.15] ] },
  { file: 'visa_02.jpeg', blurBoxes: [ [0.55, 0.52, 0.45, 0.12] ] },
  { file: 'visa_03.jpeg', blurBoxes: [ [0.55, 0.48, 0.45, 0.12] ] },
  { file: 'visa_04.jpeg', blurBoxes: [ [0.60, 0.35, 0.40, 0.15] ] },
  { file: 'visa_05.jpeg', blurBoxes: [ [0.55, 0.25, 0.45, 0.10] ] },
  { file: 'visa_06.jpeg', blurBoxes: [ [0.45, 0.45, 0.40, 0.12] ] },
  { file: 'visa_07.jpeg', blurBoxes: [ [0.55, 0.35, 0.40, 0.10] ] }
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
        
        // Pixelate the top right number heavily
        let pixelSize = Math.max(15, Math.floor(width / 60));
        image.pixelate(pixelSize, x, y, w, h);
      }

      await image.writeAsync(filePath);
      console.log(`Saved redacted top-right number for ${v.file}`);
    } catch(err) {
      console.error(`Error on ${v.file}: ${err.message}`);
    }
  }
}

redactVisas();
