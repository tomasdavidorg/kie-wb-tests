import { LoginPage } from "./LoginPage"

/* eslint-disable */
declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            login: typeof LoginPage.login
        }
    }
}

Cypress.Commands.add("login", LoginPage.login)
