import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility", () => {
  test("axe-core scan (zero violations)", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector("footer");

    const results = await new AxeBuilder({ page }).analyze();
    const violations = results.violations;

    if (violations.length > 0) {
      const summary = violations
        .map((v) => `[${v.impact}] ${v.id}: ${v.description} (${v.nodes.length} element(s))`)
        .join("\n  ");
      expect(violations.length, `Accessibility violations:\n  ${summary}`).toBe(0);
    }

    expect(violations.length).toBe(0);
  });
});
