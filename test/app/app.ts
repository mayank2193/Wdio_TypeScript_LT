// Assuming this block is inside an async test function (e.g., `it(...)`)
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
      
// 1. Find element by Accessibility ID and wait for it to be clickable
const okbutton = await $('id=android:id/button1');
await okbutton.waitForDisplayed({ timeout: 10000 });
await okbutton.click();
const searchElement = await $('~Search Wikipedia');
await searchElement.waitForDisplayed({ timeout: 10000 });
await searchElement.click();

// 2. Find element by ID and wait for it to be clickable
const insertTextElement = await $('id=org.wikipedia.alpha:id/search_src_text');
await insertTextElement.waitForDisplayed({ timeout: 10000 });

// Uncomment to use sendKeys (in WebdriverIO, this is setValue or addValue)
// await insertTextElement.setValue("Lambdatest");
// await insertTextElement.setValue(Pre);

// 3. Print the session ID
console.log(`${browser.sessionId}       ******`);

// 4. Thread.sleep(10000) becomes browser.pause()
await browser.pause(10000);

// 5. Execute LambdaTest script
await browser.execute('lambdatest_executor: {"action": "stepcontext", "arguments": {"data": "test message logger *****", "level": "debug"}}');

// 6. Find all elements by class name
// Note: In Appium + WebdriverIO, XPath is often the most reliable way to target standard Android widget class names.
const allProductsName = await $$('//android.widget.TextView');

// 7. Assert that elements were found (assuming Jest/WebdriverIO's built-in `expect` library)
expect(allProductsName.length).toBeGreaterThan(0);

// 8. Update LambdaTest Status
const status = "passed";

await browser.execute('lambdatest_executor: {"action": "stepcontext", "arguments": {"data": "", "level": "debug"}}');
await browser.execute(`lambda-status=${status}`);
 });
});