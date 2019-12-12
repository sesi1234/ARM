exports.config = {
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
      },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test.js'],
}
