exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/*.js'],
    allScriptsTimeout: 72000,
    troubleshoot: false,
    baseUrl: 'http://192.168.33.11',
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
