const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "reports",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on);
    },
  },
});
