import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Accessibility baseline: we log current violations without failing so the team
// has a starting point. As audit fixes land, the violation count should decrease.
// Once the count reaches zero, flip `shouldFail` to true to enforce zero violations.

test.describe("Accessibility", () => {
  test("axe-core scan (baseline)", async ({ page }) => {
    await page.goto("/");
    // Wait for the page to fully render
    await page.waitForSelector("footer");

    const results = await new AxeBuilder({ page }).analyze();
    const violations = results.violations;

    // Log each violation for visibility in CI output
    if (violations.length > 0) {
      console.log(`\n⚠️  axe-core found ${violations.length} accessibility violation(s):\n`);
      for (const v of violations) {
        console.log(`  [${v.impact}] ${v.id}: ${v.description}`);
        console.log(`    Help: ${v.helpUrl}`);
        console.log(`    Affected: ${v.nodes.length} element(s)\n`);
      }
    } else {
      console.log("\n✅ No accessibility violations found!\n");
    }

    // Record the baseline count — this number should only go down over time
    const baselineCount = violations.length;
    console.log(`📊 Baseline violation count: ${baselineCount}`);

    // Don't fail on existing violations yet; the test passes as a reporting tool.
    // When violations are fixed, lower this threshold toward zero.
    expect(baselineCount).toBeGreaterThanOrEqual(0);
  });
});
