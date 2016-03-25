(function(){
  describe('MarsRobot App', function() {

    browser.get(browser.baseUrl);

    beforeEach(function(){
      browser.waitForAngular();
      browser.sleep(1000);
    });

    it('should start in robot state', function() {
      expect(browser.getCurrentUrl()).toContain('robot');
    });

    it('should redirect to robot state with unmatched route', function() {
      browser.get(browser.baseUrl + '/not-really-an-existing-address');
      expect(browser.getCurrentUrl()).toContain('robot');
    });

    it('should have controls hidden', function() {
      expect(element(by.id('world-creation-panel')).isDisplayed()).toBeTruthy();
    });

    it('should not show control panel with bad input', function() {
      element(by.id('size')).sendKeys("bad input");
      element(by.id('world-creation-button')).click();
      expect(element(by.id('robot-control-panel')).isDisplayed()).toBeFalsy();
    });

    it('should show control panel with proper input', function() {
      element(by.id('size')).clear();
      element(by.id('size')).sendKeys("3,3");
      element(by.id('world-creation-button')).click();
      expect(element(by.id('robot-control-panel')).isDisplayed()).toBeTruthy();
    });
    
    it('should visualize correct amount of cells', function() {
      element.all(by.repeater('column in columns')).then(function(cells) {
        expect(cells.length).toBe(16);
      });
    });

  });
})();