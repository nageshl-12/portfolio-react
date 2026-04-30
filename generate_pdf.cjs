const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ size: 'A4' });
doc.pipe(fs.createWriteStream('public/resume.pdf'));

// Add the resume image securely scaled to fit A4 layout
doc.image('public/resume.png', 0, 0, {
  width: 595.28, // A4 width
});

doc.end();
console.log('PDF Generated!');
