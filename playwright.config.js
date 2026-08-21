const { defineConfig } = require('playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  use: { baseURL: 'http://127.0.0.1:8765', channel: 'chrome' },
  webServer: { command: 'python -m http.server 8765', port: 8765, reuseExistingServer: true },
  reporter: 'line'
});

