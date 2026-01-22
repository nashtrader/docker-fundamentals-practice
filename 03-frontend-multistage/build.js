// Simple build script - simulates npm run build
const fs = require('fs');
const path = require('path');

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Create index.html
const html = `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Docker Frontend Demo</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: linear-gradient(135deg, #00bcd4 0%, #e91e63 100%);
            min-height: 100vh;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        h1 { color: #00bcd4; }
        .badge {
            display: inline-block;
            padding: 4px 12px;
            background: #e91e63;
            color: white;
            border-radius: 20px;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🐳 Docker Frontend Demo</h1>
        <p><span class="badge">Multi-Stage Build</span></p>
        <p>Diese Seite wurde mit einem Multi-Stage Build erstellt:</p>
        <ol>
            <li><strong>Stage 1 (builder)</strong>: Node.js führt build.js aus</li>
            <li><strong>Stage 2 (production)</strong>: Nur nginx + diese HTML-Datei</li>
        </ol>
        <p>Das finale Image enthält <strong>kein Node.js</strong> - nur nginx (~25 MB)!</p>
        <hr>
        <p><em>Build time: ${new Date().toISOString()}</em></p>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), html);
console.log('✅ Build complete! Output in dist/');
