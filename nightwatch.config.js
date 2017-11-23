module.exports = (function(settings) {
  if (process.env.SELENIUM_HOST) {
    settings.selenium.host = process.env.SELENIUM_HOST;
  }
  if (process.env.SELENIUM_PORT) {
    settings.selenium.port = process.env.SELENIUM_PORT;
  }

  return settings;
})(require('./nightwatch.js'));
