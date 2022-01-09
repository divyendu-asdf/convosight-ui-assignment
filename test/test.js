const { expect } = require('chai');
const puppeteer = require('puppeteer');

describe('DefaultTest', () => {

    it('Go to Automation Practice and search.', async () => { 
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('http://automationpractice.com/index.php');
        await page.type('#search_query_top', 'bl');
        await page.waitForSelector('.ac_results', {visible: false}, 2000)
    });  

    it('Go to Automation Practice and search.', async () => { 
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('http://automationpractice.com/index.php');
        await page.type('#search_query_top', 'blou');
        await page.waitForSelector('.ac_results', {visible: true})
        const name = await page.$eval('.ac_results > ul > li', el => el.textContent.trim())
        expect(name).to.be.eq('Blouses > Blouse')
    });


    it('Go to Automation Practice and search.', async () => { 
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('http://automationpractice.com/index.php');
        await page.click('#block_top_menu > ul > li:nth-child(3)');
        await page.waitForSelector('#layered_id_attribute_group_3', {visible: true});
        await page.click('#layered_id_attribute_group_3');
        await page.click('#columns > div.breadcrumb.clearfix > a:nth-child(3)');
        await page.waitForSelector('#center_column > ul > li:nth-child(1) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span', {visible: true})
        for (let i = 1; i <= 5; i++) {
            await page.click(`#center_column > ul > li:nth-child(${i}) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span`);
            await page.waitForSelector('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > span', {visible: true})
        await page.click('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > span');
          }
    });
    

    after(async () => driver.quit());
});