// Simple build script
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

const html = `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fullstack Docker Demo</title>
    <style>
        * { box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #00bcd4 0%, #e91e63 100%);
            min-height: 100vh;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        h1 { color: #00bcd4; margin-top: 0; }
        .badge {
            display: inline-block;
            padding: 4px 12px;
            background: #e91e63;
            color: white;
            border-radius: 20px;
            font-size: 12px;
            margin-right: 8px;
        }
        .status {
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
        }
        .status.success { background: #d4edda; border: 1px solid #28a745; }
        .status.error { background: #f8d7da; border: 1px solid #dc3545; }
        .status.loading { background: #fff3cd; border: 1px solid #ffc107; }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }
        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th { background: #f8f9fa; }
        button {
            background: #00bcd4;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
        }
        button:hover { background: #00acc1; }
        pre {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🐳 Fullstack Docker Demo</h1>
        <p>
            <span class="badge">Frontend</span>
            <span class="badge">Backend</span>
            <span class="badge">PostgreSQL</span>
        </p>

        <h2>Backend Status</h2>
        <div id="backend-status" class="status loading">⏳ Checking backend...</div>
        <button onclick="checkBackend()">🔄 Refresh</button>

        <h2>API Response: /api/items</h2>
        <div id="items-container">
            <div class="status loading">⏳ Loading items...</div>
        </div>

        <h2>Architecture</h2>
        <pre>
┌─────────────────────────────────────────────────────────────┐
│  Browser                                                    │
│    ↓                                                        │
│  Frontend (nginx:3000)  ← You are here!                     │
│    ↓                                                        │
│  Backend (FastAPI:8000)                                     │
│    ↓                                                        │
│  Database (PostgreSQL:5432)                                 │
└─────────────────────────────────────────────────────────────┘
        </pre>
    </div>

    <script>
        const BACKEND_URL = 'http://localhost:8000';

        async function checkBackend() {
            const statusEl = document.getElementById('backend-status');
            statusEl.className = 'status loading';
            statusEl.innerHTML = '⏳ Checking backend...';

            try {
                const res = await fetch(BACKEND_URL + '/health');
                const data = await res.json();
                statusEl.className = 'status success';
                statusEl.innerHTML = '✅ Backend is healthy! Response: ' + JSON.stringify(data);
            } catch (err) {
                statusEl.className = 'status error';
                statusEl.innerHTML = '❌ Cannot reach backend: ' + err.message;
            }
        }

        async function loadItems() {
            const container = document.getElementById('items-container');
            try {
                const res = await fetch(BACKEND_URL + '/api/items');
                const data = await res.json();

                let html = '<table><tr><th>ID</th><th>Name</th><th>Category</th></tr>';
                data.items.forEach(item => {
                    html += '<tr><td>' + item.id + '</td><td>' + item.name + '</td><td>' + item.category + '</td></tr>';
                });
                html += '</table>';
                container.innerHTML = html;
            } catch (err) {
                container.innerHTML = '<div class="status error">❌ Failed to load items: ' + err.message + '</div>';
            }
        }

        // Load on page ready
        checkBackend();
        loadItems();
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), html);
console.log('✅ Frontend build complete!');
