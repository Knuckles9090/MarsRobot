(function(){
  describe('ImageWall App', function() {

    beforeEach(function(){
      browser.get(browser.baseUrl);
    });

    afterEach(function() {
      browser.executeScript('window.sessionStorage.clear();');
      browser.executeScript('window.localStorage.clear();');
    });

    it('should start in images state', function() {
      expect(browser.getCurrentUrl()).toContain('images');
    });

    it('should redirect to images state with unmatched route', function() {
      browser.get(browser.baseUrl + "/not-really-an-existing-address");
      expect(browser.getCurrentUrl()).toContain('images');
    });

    it('should be able to load images and start with 10', function() {
      element.all(by.repeater('image in images')).then(function(images) {
        expect(images.length).toBe(10);
      });
    });

    it('should show 20 elements when page items are set to 20', function() {
      element(by.id('page-items-desktop')).clear();
      element(by.id('page-items-desktop')).sendKeys('20');
      element.all(by.repeater('image in images')).then(function(images) {
        expect(images.length).toBe(20);
      });
    });

    it('should show only 1 element when page items are set to 1337', function() {
      element(by.id('page-items-desktop')).clear();
      element(by.id('page-items-desktop')).sendKeys('1337');
      element.all(by.repeater('image in images')).then(function(images) {
        expect(images.length).toBe(1);
      });
    });

  });
})();