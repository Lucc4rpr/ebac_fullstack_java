const { defineConfig } = require("cypress");

module.exports = {
    e2e: {
      setupNodeEvents(on, config) {
        on('before:browser:launch', (browser = {}, launchOptions) => {
          if (browser.name === 'firefox') {
            launchOptions.preferences['network.proxy.allow_hijacking_localhost'] = true;
            launchOptions.preferences['network.http.referer.spoofSource'] = false;
            launchOptions.preferences['network.cors_preflight.allow'] = true;
          }
  
          return launchOptions;
        });
      }
    }
  }