const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const http = require('http');
const fs = require('fs');

const MIME = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.map': 'application/json',
    '.webmanifest': 'application/manifest+json',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav'
};

const BUILD_DIR = app.isPackaged
    ? path.join(process.resourcesPath, 'build')
    : path.join(__dirname, '..', 'build');

let mainWindow;
let server;

function startServer (port) {
    return new Promise((resolve, reject) => {
        server = http.createServer((req, res) => {
            let filePath = path.join(BUILD_DIR, req.url === '/' ? '/editor.html' : req.url.split('?')[0]);
            const ext = path.extname(filePath).toLowerCase();
            const contentType = MIME[ext] || 'application/octet-stream';

            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end('Not Found');
                    return;
                }
                res.writeHead(200, {'Content-Type': contentType});
                res.end(data);
            });
        });
        server.listen(port, '127.0.0.1', () => resolve(port));
        server.on('error', reject);
    });
}

async function createWindow () {
    await startServer(0);

    const port = server.address().port;

    mainWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        minWidth: 800,
        minHeight: 600,
        title: 'MlogScratch TW',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        },
        show: false
    });

    mainWindow.loadURL(`http://127.0.0.1:${port}/editor.html`);

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    Menu.setApplicationMenu(null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (server) server.close();
    app.quit();
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
