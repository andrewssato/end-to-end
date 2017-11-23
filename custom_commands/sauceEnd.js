exports.command = function (browser, done) {
  var SauceLabs = require("saucelabs");

  var saucelabs = new SauceLabs({
      username: process.env.SAUCE_USERNAME,
      password: process.env.SAUCE_ACCESS_KEY
  });

  var sessionid = this.capabilities['webdriver.remote.sessionid'],
      jobName = this.currentTest.name,
      passed = this.currentTest.results.testcases[jobName].failed === 0;

  saucelabs.updateJob(sessionid, {
      passed: passed,
      name: jobName
  }, done());

  return this; // allows the command to be chained.
};
