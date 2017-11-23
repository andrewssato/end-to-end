const seleniumPath = require('selenium-server').path;
const chromedriverPath = require('chromedriver').path;

if (process.env.ENV) {
  //console.log("ENV: " + process.env.ENV);
  process.env.SAUCE_USERNAME = process.env.SAUCE_USERNAME;
  process.env.SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY;
  process.env.SELENIUM_HOST = process.env.SELENIUM_HOST || "ondemand.saucelabs.com";
  process.env.SELENIUM_PORT = process.env.SELENIUM_PORT || 80;
  process.env.SELENIUM_PROCESS = process.env.SELENIUM_PROCESS || false;
}

const SAUCE_USERNAME = process.env.SAUCE_USERNAME;
const SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY;
const SELENIUM_HOST = process.env.SELENIUM_HOST || "localhost";
const SELENIUM_PORT = process.env.SELENIUM_PORT || 4444;
const SELENIUM_PROCESS = process.env.SELENIUM_PROCESS || true;

// console.log("SAUCE_USERNAME: " + SAUCE_USERNAME);
// console.log("SAUCE_ACCESS_KEY: " + SAUCE_ACCESS_KEY);
// console.log("SELENIUM_HOST: " + SELENIUM_HOST);
// console.log("SELENIUM_PORT: " + SELENIUM_PORT);
// console.log("SELENIUM_PROCESS: " + SELENIUM_PROCESS);

module.exports = {
  "src_folders": ["tests"],
  "output_folder": "reports",
  "custom_commands_path": ["custom_commands"],

  "selenium": {
    "start_process": SELENIUM_PROCESS,
    "server_path": seleniumPath,
    "log_path": "reports",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": chromedriverPath
    }
  },

  "test_settings": {
    "default": {
      "launch_url": "http://localhost",
      "selenium_port" : SELENIUM_PORT,
      "selenium_host" : SELENIUM_HOST,
      "silent": true,
      "screenshots": {
        "enabled": false,
        "path": ""
      },
      "username": SAUCE_USERNAME,
      "access_key": SAUCE_ACCESS_KEY,
      "skip_testcases_on_fail": false,
      "desiredCapabilities": {
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    "dev": {
      "desiredCapabilities": {
        "browserName": "chrome",
      }
    },

    "chrome": {
      "desiredCapabilities": {
        "platform": "Windows 7",
        "browserName": "chrome",
        "version": "51"
      }
    },

    "firefox": {
      "desiredCapabilities": {
        "platform": "Windows 7",
        "browserName": "firefox",
        "version": "33"
      }
    },

    "safari": {
      "desiredCapabilities": {
        "platform": "OS X 10.11",
        "browserName": "safari"
      }
    },
    
    "ie": {
      "desiredCapabilities": {
        "platform": "Windows 7",
        "browserName": "internet explorer",
        "version": "10"
      }
    }

  }
}
