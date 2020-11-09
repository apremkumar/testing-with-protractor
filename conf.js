exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // specs: ["spec/**/*.spec.js"],
    suites: {
        login: 'spec/amazon/login.spec.js',
        browse: 'spec/amazon/afterLogin.spec.js'
      },
    //   seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',
    //   chromeDriver: '../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.26',
      baseUrl: 'https://www.amazon.in/',
      params: {
        login: {
          user: 'sivagami.premkumar@gmail.com',
          password: 'venbavennila'
        }
      },
  }