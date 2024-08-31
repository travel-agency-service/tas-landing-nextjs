import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    defaultCommandTimeout: 5000, //wait for any .get or other commands to pass
    chromeWebSecurity: false, // this is for clicking on a capthca checkbox through an iframe
  },
});
