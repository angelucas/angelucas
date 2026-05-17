import sharp from 'sharp';
import path from 'path';

const src = path.resolve(
  'C:/Users/Lucas/.cursor/projects/c-projects-angelucas/assets/c__Users_Lucas_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_lucas_angelo-5ad109e5-f197-4a71-8400-22a761894c71.png'
);
const outDir = path.resolve('public/images');

const meta = await sharp(src).metadata();
const { width, height } = meta;
const targetAspect = 4 / 5;

let cropW;
let cropH;
let left;
let top;

if (width / height > targetAspect) {
  cropH = height;
  cropW = Math.round(height * targetAspect);
  left = Math.round((width - cropW) / 2);
  top = 0;
} else {
  cropW = width;
  cropH = Math.round(width / targetAspect);
  left = 0;
  top = Math.round((height - cropH) * 0.1);
}

/* Remove Gemini watermark in bottom-right corner */
const trimRight = 40;
const trimBottom = 36;
cropW = Math.max(cropW - trimRight, Math.round(cropW * 0.92));
cropH = Math.max(cropH - trimBottom, Math.round(cropH * 0.94));

const portrait = sharp(src).extract({ left, top, width: cropW, height: cropH });

await portrait
  .clone()
  .resize(960, 1200, { fit: 'cover' })
  .webp({ quality: 86 })
  .toFile(path.join(outDir, 'lucas-hero.webp'));

await portrait
  .clone()
  .resize(960, 1200, { fit: 'cover' })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(outDir, 'lucas-hero.jpg'));

await portrait
  .clone()
  .resize(640, 800, { fit: 'cover' })
  .webp({ quality: 86 })
  .toFile(path.join(outDir, 'lucas-avatar.webp'));

const ogBg = { r: 10, g: 10, b: 15, alpha: 1 };

await sharp(src)
  .extract({
    left: Math.round(width * 0.08),
    top: Math.round(height * 0.05),
    width: Math.round(width * 0.84),
    height: Math.round(height * 0.9),
  })
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .flatten({ background: ogBg })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(path.join(outDir, 'og-cover.jpg'));

console.log('Done');
