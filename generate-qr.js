import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = 'https://encytro.vercel.app';
const outputPath = path.join(__dirname, 'public', 'encytro-qr-code.png');

QRCode.toFile(
  outputPath,
  url,
  {
    errorCorrectionLevel: 'H',
    type: 'png',
    quality: 0.92,
    margin: 2,
    color: {
      dark: '#000000',
      light: '#FFFFFF'
    },
    width: 1000
  },
  function (err) {
    if (err) {
      console.error('Error generating QR code:', err);
      process.exit(1);
    }
    console.log('QR code generated successfully!');
    console.log('Saved to:', outputPath);
  }
);
