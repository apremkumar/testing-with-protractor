const { browser } = require("protractor");

it('login to amazon', function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.amazon.in/');

    element(by.id('nav-link-accountList')).click();
    expect(browser.getTitle()).toEqual('Amazon Sign In');

    element(by.id('ap_email')).sendKeys('@gmail.com');
    // element(by.id('ap_email')).sendKeys('sivagami.premkumar@gmail.com');
    element(by.id('continue')).click();

    element(by.id('ap_password')).sendKeys('');
    element(by.id('signInSubmit')).click();

    var nameTag = element(by.id('nav-link-accountList')).$('.nav-line-1');
    var until = protractor.ExpectedConditions;
    browser.wait(until.presenceOf(nameTag), 40000, 'Name tag taking too long to appear in the DOM');

    expect(nameTag.getText()).toBe('Hello, Premkumar');
    // expect(nameTag.getText()).toBe('Hello, Sivagami');
});