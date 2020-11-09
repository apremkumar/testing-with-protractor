import { browser } from "protractor";describe("TODO app", () => {
    const url: string = "http://todomvc.com/examples/angularjs/#/";
    it("should go to a valid URL", () => {
         browser.get(url);
         expect(browser.getCurrentUrl()).toContain(url);
    });
});