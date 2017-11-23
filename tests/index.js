module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementPresent('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementPresent('input[name=btnK]', 1000)
      .click('input[name=btnK]')
      .pause(1000)
      .waitForElementPresent('#appbar', 5000)
      .end();
  }
};
