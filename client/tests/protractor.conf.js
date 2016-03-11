exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/*.js'],
  allScriptsTimeout: 72000,
  troubleshoot: false,
  baseUrl: 'http://localhost:3000',
  directConnect: true,
  multiCapabilities: [
    {
      browserName: 'chrome',
      chromeOptions: {
        args: [
          '--start-maximized'
        ]
      }
    }
  ],
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 72000
  }
};
