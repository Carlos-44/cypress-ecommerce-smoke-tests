const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: "Test Results",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      reportDir: "cypress/reports/mochawesome",
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/results/results-[hash].xml",
      toConsole: false,
    },
  },
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    viewportWidth: 1366,
    viewportHeight: 768,
  },
});
