const fs = require('fs');
const https = require('https');

const LOGO_URL = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/logo-1765665334064.png?width=8000&height=8000&resize=contain';
const REMOVEBG_API_KEY = process.env.REMOVEBG_API_KEY;
const OUTPUT_PATH = 'public/logo-no-bg.png';

if (!REMOVEBG_API_KEY) {
  console.error('Error: REMOVEBG_API_KEY not found in environment variables');
  process.exit(1);
}

console.log('Downloading logo...');
https.get(LOGO_URL, (response) => {
  const chunks = [];
  response.on('data', (chunk) => chunks.push(chunk));
  response.on('end', () => {
    const imageBuffer = Buffer.concat(chunks);
    console.log('Logo downloaded, removing background...');
    
    const postData = JSON.stringify({
      image_file_b64: imageBuffer.toString('base64'),
      size: 'auto'
    });

    const options = {
      hostname: 'api.remove.bg',
      path: '/v1.0/removebg',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': REMOVEBG_API_KEY,
        'Content-Length': postData.length
      }
    };

    const req = https.request(options, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        if (res.statusCode === 200) {
          const resultBuffer = Buffer.concat(chunks);
          fs.writeFileSync(OUTPUT_PATH, resultBuffer);
          console.log(`Success! Logo with transparent background saved to ${OUTPUT_PATH}`);
        } else {
          console.error(`Error: ${res.statusCode}`);
          console.error(Buffer.concat(chunks).toString());
        }
      });
    });

    req.on('error', (e) => {
      console.error(`Request error: ${e.message}`);
    });

    req.write(postData);
    req.end();
  });
}).on('error', (e) => {
  console.error(`Download error: ${e.message}`);
});
