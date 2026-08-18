import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'line',
  use: {
    baseURL: 'http://localhost:4321',
    channel: 'msedge',
    trace: 'retain-on-failure'
  }
});
