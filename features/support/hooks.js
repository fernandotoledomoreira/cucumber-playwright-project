const {Before, BeforeAll, After, AfterAll} = require ('cucumber')
const { firefox } = require('@playwright/test');

Before(async () => {

})

After(() => {
    
})

BeforeAll(async () => {
    browser = await firefox.launch({headless:false})
    context = await browser.newContext();
    page = await context.newPage()
})

AfterAll(() => {
    browser.close();
})
