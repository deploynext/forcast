import fs from "fs-extra";
import path from "path";
import sharp from "sharp";

const inputDir = path.join(process.cwd(), "public/images");
const outputDir = path.join(process.cwd(), "public/optimized");
const htmlDir = path.join(process.cwd(), "out"); // adjust if needed

const sizes = [168, 336, 768];
const quality = 70;

async function optimizeImage(file) {
  const filePath = path.join(inputDir, file);
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const generated = [];

  for (const size of sizes) {
    const outPath = path.join(outputDir, `${base}-${size}.webp`);
    await sharp(filePath)
      .resize(size)
      .webp({ quality })
      .toFile(outPath);
    generated.push(`/optimized/${base}-${size}.webp ${size}w`);
  }
  return generated;
}

async function updateHTML(file, imgMap) {
  const filePath = path.join(htmlDir, file);
  let html = await fs.readFile(filePath, "utf8");

  html = html.replace(
    /<img\s+([^>]*?)src=["']([^"']+)["']([^>]*)>/gi,
    (match, before, src, after) => {
      const filename = path.basename(src);
      if (!imgMap[filename]) return match; // skip if no optimized version

      const srcset = imgMap[filename].join(", ");
      const base = path.basename(filename, path.extname(filename));

      // keep existing attributes intact
      return `<img ${before}src="/optimized/${base}-168.webp" srcset="${srcset}" sizes="(max-width: 768px) 100vw, 768px" loading="lazy"${after}>`;
    }
  );

  await fs.writeFile(filePath, html, "utf8");
  console.log(`✏️ Updated: ${filePath}`);
}

async function run() {
  await fs.ensureDir(outputDir);

  const imgFiles = await fs.readdir(inputDir);
  const imgMap = {};

  for (const file of imgFiles) {
    if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
      console.log(`🖼️ Processing ${file}...`);
      imgMap[file] = await optimizeImage(file);
    }
  }

  const htmlFiles = await fs.readdir(htmlDir);
  for (const file of htmlFiles) {
    if (file.endsWith(".html")) {
      await updateHTML(file, imgMap);
    }
  }
}

run().catch(console.error);
