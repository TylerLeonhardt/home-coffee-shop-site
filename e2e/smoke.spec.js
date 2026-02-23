import { test, expect } from "@playwright/test";

test.describe("Smoke tests", () => {
  test("page loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Tyler/);
  });

  test("header renders logo and Instagram link", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("header .logo")).toBeVisible();
    await expect(page.locator("text=Cafe by Tyler").first()).toBeVisible();
    const instaLink = page.locator('header a[href*="instagram"]');
    await expect(instaLink).toBeVisible();
  });

  test("all four menu sections render", async ({ page }) => {
    await page.goto("/");
    for (const section of ["Coffee", "Espresso", "Tea", "Boozy"]) {
      await expect(page.locator(`h4:has-text("${section}")`)).toBeVisible();
    }
  });

  test("known menu items are present", async ({ page }) => {
    await page.goto("/");
    for (const item of ["Pour over", "Latte", "Matcha latte"]) {
      await expect(page.locator(`.item-name:has-text("${item}")`).first()).toBeVisible();
    }
  });

  test("footer renders with attribution", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("footer")).toBeVisible();
    await expect(page.locator("footer .logo")).toBeVisible();
    const attribution = page.locator('footer a[href*="autumnchris"]').first();
    await expect(attribution).toBeVisible();
  });

  test("no console errors on page load", async ({ page }) => {
    const errors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto("/");
    // Wait for React to finish rendering
    await page.waitForSelector("footer");
    expect(errors).toEqual([]);
  });
});
