import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // Cypress-konfiguraatiot
    baseUrl: 'http://localhost:5173', // sovelluksen sijaintiurl kehitykympäristössä
    specPattern: 'cypress-testit/cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}', // polku ja tiedostonimimuoto, jolla Cypress etsii testitiedostot
    supportFile: 'cypress-testit/cypress/support/e2e.js', // polku ja tiedostonimimuoto, jolla Cypress etsii supportFilen
    fixturesFolder: 'cypress-testit/cypress/fixtures', // polku ja tiedostonimimuoto, jolla Cypress etsii fixtures-kansion
  },
});
