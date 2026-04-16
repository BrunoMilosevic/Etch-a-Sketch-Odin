const { test, expect } = require('@playwright/test');
const URL = 'https://brunomilosevic.github.io/Etch-a-Sketch-Odin/';


test('Test-001 : Grid renders on page load', async({page}) =>{
    await page.goto(URL)

    const squares = page.locator(".sketch-pixel");

    await expect(squares.first()).toBeVisible();
});

test('Test-002: Square changes a color when user hovers the mouse over it', async({page}) =>{
    await page.goto(URL)

    const square = page.locator(".sketch-pixel").first();

    const colorBefore = await square.evaluate(el => getComputedStyle(el).backgroundColor);

    await square.hover();

    const colorAfter = await square.evaluate(el => getComputedStyle(el).backgroundColor);

    expect(colorAfter).not.toBe(colorBefore);

});

test('Test-003: "Gray" button changes a color of hover effect to gray', async({page}) =>{
    await page.goto(URL);
    await page.getByText("Gray").click();
    const square = page.locator(".sketch-pixel").first();
    await square.hover();

    const color = await square.evaluate(el => getComputedStyle(el).backgroundColor);

    expect(color).toContain('211');


});

test('Test-004: "Random" button changes a color of hover effect to a random color', async({page}) =>{
    await page.goto(URL);
    await page.getByText("Random").click();
    const square = page.locator(".sketch-pixel").first();
    await square.hover();

    const color = await square.evaluate(el => getComputedStyle(el).backgroundColor);
    const allowedColors = [
                            "rgb(0, 0, 0)",
                            "rgb(211, 211, 211)",
                            "rgb(255, 255, 0)",
                            "rgb(0, 128, 0)",
                            "rgb(0, 0, 255)",
                            "rgb(128, 0, 128)"
                           ];
    expect(allowedColors).toContain(color);
});

test('Test-005: "Erase" button changes the color of the square back to default gray', async({page}) =>{
    await page.goto(URL);
    const square = page.locator(".sketch-pixel").first();
    square.hover();
    await page.getByText("Erase").click();
    square.hover();
    const color = await square.evaluate(el => getComputedStyle(el).backgroundColor);
    expect(color).toContain("128");
})