// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interface Chainable<Subject = any> {

        login(user: string, password: string): void; //Chainable<Element>;
    }
}

Cypress.Commands.add("login", (user: string, password: string) => {
    cy.get("[name='j_username']").type(user)
    cy.get("[name='j_password']").type(password)
    cy.get(".btn-lg").click()
})
