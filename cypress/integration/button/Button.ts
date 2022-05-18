import Given from 'cypress-cucumber-preprocessor/steps'
import { test } from '$cypress/lib/auth.helper'


Given('I open NextJS Page', function() {
  const result = test()
  cy.visit('/')
})