describe("Login test", () => {
    it("should login into workbench", () => {
        const user = "testadmin"
        const password = "admin1234;"
        cy.visit("http://localhost:8080/business-central/")
        cy.get("[name='j_username']").type(user)
        cy.get("[name='j_password']").type(password)
        cy.get(".btn-lg").click()
        cy.get("[data-field='welcome']").should("have.text", "Welcome to Red Hat Process Automation Manager")
        cy.get("#mega-menu").get("a:has(span.pficon-user)").should("have.text", user)


    })
})
