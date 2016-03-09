describe('imagewall filtering', function() {

    beforeEach(function(){
        browser.get(browser.baseUrl+'/index.html#/');
    });

    afterEach(function() {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });

    it('should stay in login page with failed login', function() {

        expect(browser.getCurrentUrl()).toContain('login');
        element(by.id('login_username')).sendKeys("asdf");
        element(by.id('login_password')).sendKeys("asdf");
        element(by.id('login_button')).click();
        expect(browser.getCurrentUrl()).toContain('login');

    });

    it('should move onwards with ok credentials', function() {

        expect(browser.getCurrentUrl()).toContain('login');
        element(by.id('login_username')).sendKeys("test");
        element(by.id('login_password')).sendKeys("1234");
        element(by.id('login_button')).click();
        expect(browser.getCurrentUrl()).toContain('consents');
        element(by.id('logout')).click();

    });

});
