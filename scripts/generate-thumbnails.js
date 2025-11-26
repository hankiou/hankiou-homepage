import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');
const PORTFOLIO_JSON = path.join(PUBLIC_DIR, 'portfolio.json');
const THUMBNAILS_DIR = path.join(PUBLIC_DIR, 'portfolio', 'thumbnails');
const WEBP_QUALITY = 90;

/**
 * Sanitize filename from portfolio title
 * Example: "Loot² UI" -> "loot2-ui"
 */
function sanitizeFilename(title) {
  return title
    .toLowerCase()
    .normalize('NFD')                    // Decompose accents
    .replace(/[\u0300-\u036f]/g, '')    // Remove diacritics
    .replace(/[²³¹]/g, match => {       // Handle superscripts
      return { '²': '2', '³': '3', '¹': '1' }[match];
    })
    .replace(/™/g, '')                   // Remove trademark symbol
    .replace(/[^a-z0-9\s-]/g, '')       // Keep only alphanumeric, spaces, hyphens
    .replace(/\s+/g, '-')               // Spaces to hyphens
    .replace(/-+/g, '-')                // Multiple hyphens to single
    .replace(/^-+|-+$/g, '');           // Trim hyphens
}

/**
 * Ensure thumbnails directory exists
 */
async function ensureThumbnailDirectory() {
  await fs.mkdir(THUMBNAILS_DIR, { recursive: true });
}

/**
 * Convert image to WebP
 */
async function convertToWebP(inputPath, outputFilename) {
  const absoluteInputPath = path.join(PUBLIC_DIR, inputPath);
  const outputPath = path.join(THUMBNAILS_DIR, outputFilename);

  const metadata = await sharp(absoluteInputPath)
    .webp({ quality: WEBP_QUALITY, effort: 6 })
    .toFile(outputPath);

  return metadata;
}

/**
 * Process single portfolio entry
 */
async function processEntry(entry, index, total) {
  console.log(`[${index + 1}/${total}] ${entry.title}`);

  if (!entry.files || entry.files.length === 0) {
    console.log('  ⚠ No files, skipping');
    return null;
  }

  const firstFile = entry.files[0];
  const sanitized = sanitizeFilename(entry.title);
  const filename = `${sanitized}.webp`;
  const thumbnailPath = `/portfolio/thumbnails/${filename}`;

  try {
    const stats = await convertToWebP(firstFile.path, filename);
    console.log(`  ✓ Converted: ${filename} (${Math.round(stats.size / 1024)}KB)`);
    return thumbnailPath;
  } catch (error) {
    console.error(`  ✗ Failed: ${error.message}`);
    return null;
  }
}

/**
 * Update portfolio.json with thumbnail paths
 */
async function updatePortfolioJson(portfolioData, thumbnailPaths) {
  // Backup original file
  await fs.copyFile(PORTFOLIO_JSON, `${PORTFOLIO_JSON}.backup`);
  console.log('✓ Backup created: portfolio.json.backup');

  // Update data with thumbnail fields
  const updated = portfolioData.map((entry, i) => {
    const result = {
      title: entry.title,
      description: entry.description,
      url: entry.url,
      tags: entry.tags,
      tech: entry.tech,
      year: entry.year,
      featured: entry.featured
    };

    // Add thumbnail if it was successfully generated
    if (thumbnailPaths[i]) {
      result.thumbnail = thumbnailPaths[i];
    }

    // Add files array
    result.files = entry.files;

    return result;
  });

  // Write updated JSON with pretty formatting
  await fs.writeFile(
    PORTFOLIO_JSON,
    JSON.stringify(updated, null, 2) + '\n',
    'utf-8'
  );
}

/**
 * Main execution
 */
async function main() {
  console.log('Starting thumbnail generation...\n');

  try {
    // Load portfolio data
    const data = JSON.parse(await fs.readFile(PORTFOLIO_JSON, 'utf-8'));
    console.log(`Loaded ${data.length} portfolio entries\n`);

    // Create thumbnails directory
    await ensureThumbnailDirectory();
    console.log('✓ Created thumbnails directory\n');

    // Process each entry
    const thumbnailPaths = [];
    for (let i = 0; i < data.length; i++) {
      const thumbnailPath = await processEntry(data[i], i, data.length);
      thumbnailPaths.push(thumbnailPath);
    }

    // Update portfolio.json
    console.log('');
    await updatePortfolioJson(data, thumbnailPaths);
    console.log('✓ Updated portfolio.json');

    // Summary
    const successful = thumbnailPaths.filter(Boolean).length;
    const failed = data.length - successful;

    console.log(`\nSummary:`);
    console.log(`- Entries processed: ${data.length}`);
    console.log(`- Successful: ${successful}`);
    console.log(`- Failed: ${failed}`);
    console.log('\nDone!');

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main().catch(console.error);
