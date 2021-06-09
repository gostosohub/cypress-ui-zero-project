import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://www.saucedemo.com/'

Given('I open Saucedemo page', () => {
  cy.visit(url)
})

Then('I see "Swag Labs" in the title', () => {
  cy.title().should('include', 'Swag Labs')
})