module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementPresent('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementPresent('input[name=btnK]', 1000)
      .click('input[name=btnK]')
      .end();
  },

  afterEach: function(browser, done) {
    browser.sauceEnd(browser, done);

    setTimeout(function() {
        done();
    }, 1000);
  }
};
