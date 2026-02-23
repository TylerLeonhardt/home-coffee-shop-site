import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  use: {
    baseURL: "http://localhost:3737",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
  outputDir: "test-results/",
  webServer: {
    command: "npx serve public/ -l 3737",
    url: "http://localhost:3737",
    reuseExistingServer: !process.env.CI,
  },
});
