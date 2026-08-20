import puppeteer from 'puppeteer';
import { spawn } from 'child_process';

const server = spawn('npm', ['run', 'dev'], { cwd: 'e:\\cn', shell: true });

server.stdout.on('data', (data) => {
  if (data.toString().includes('Local:')) {
    setTimeout(async () => {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      page.on('console', msg => console.log('PAGE LOG:', msg.text()));
      page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
      await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
      await browser.close();
      server.kill();
      process.exit(0);
    }, 2000);
  }
});

server.stderr.on('data', (data) => {
  console.error('SERVER ERROR:', data.toString());
});
