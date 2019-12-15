import { LoginPage } from "./LoginPage"

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            login: typeof LoginPage.login
        }
    }
}

Cypress.Commands.add("login", LoginPage.login)
