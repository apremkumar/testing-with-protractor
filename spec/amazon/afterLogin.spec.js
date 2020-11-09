const { browser, element } = require("protractor");

var products = ['laptops', 'iphone', 'speaker', 'apple watch'];

it('checking for logged in user first name', function(){
    var nameTag = element(by.id('nav-link-accountList')).$('.nav-line-1');
    expect(nameTag.getText()).toBe('Hello, Premkumar');
});

products.map(function(product, index) {
    it('browse through the products', function() {
        console.log(product);

        element(by.id('twotabsearchtextbox')).click().clear().sendKeys(product);
        element(by.id('nav-search-submit-text')).$('input[type=submit]').click();

        var dropdown = element(by.id('a-autoid-0'));
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(dropdown), 5000, 'Dropdown taking too long to appear in the DOM');

        dropdown.click();
        
        var popover = element(by.id('a-popover-3'));
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(popover), 5000, 'Popover taking too long to appear in the DOM');

        element(by.id('s-result-sort-select_3')).click();

        browser.sleep(3000);

        var topResult = element.all(by.css('[data-component-type=s-search-result]')).filter(function(elem){
            return elem.$('.a-price-whole').isPresent();
        }).first();

        topResult.$('.a-link-normal .a-text-normal').click().then(function() {
            browser.getAllWindowHandles().then(async function(handles) {
                await browser.switchTo().window(handles.pop());
                //.then(function () {
                    // await browser.switchTo().window(handles.pop()).then(function () {
                    // element(by.id('add-to-cart-button')).click().then(function(){
                    //     browser.driver.close();
                    // });
                // });
                await element(by.id('add-to-cart-button')).click();
                await browser.driver.close();
                await browser.switchTo().window(handles[0]);
            });
        });
    });
});

it('go to the cart', function(){
    element(by.id('nav-cart')).click();
    browser.driver.pause();
});