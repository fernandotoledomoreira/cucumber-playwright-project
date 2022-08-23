const {Given, When, Then} = require ('cucumber')
const { expect } = require('@playwright/test');


Given('que possua a API do legal person', async () => {
   console.log('test')
});


Given('que possua legal person cadastrado', async () => {
    await page.goto('https://react-redux.realworld.io/#/login')
    const title = await page.title()
    expect(title).toBe('Conduit')
});


When('consultar dados de legal person cadastrados no kafka e no postgres', async () => {
    console.log('123')
});


Then('os dados de legal person devem ter sido cadastrados com sucesso', async () => {
    console.log('9867')
});


Then('o contrato do POST legal person deve ser igual ao esperado', async () => {
    console.log('teabcst')
});