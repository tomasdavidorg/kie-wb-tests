export class LoginPage {
    static readonly USER_NAME_LOCATOR = "[name='j_username']"
    static readonly PASSWORD_LOCATOR = "[name='j_password']"
    static readonly SIGN_IN_BUTTON_LOCATOR = ".btn-lg"
    static readonly LOGIN_ERROR_LOCATOR = "#login-content h3"
    static readonly LOGOUT_SUCCESSFUL_LOCATOR = "#logout"
    static readonly LOGIN_AGAIN_BUTTON_LOCATOR = "[value='Login again']"

    public static login(user: string, password: string) {
        cy.get(LoginPage.USER_NAME_LOCATOR).type(user)
        cy.get(LoginPage.PASSWORD_LOCATOR).type(password)
        cy.get(LoginPage.SIGN_IN_BUTTON_LOCATOR).click()
    }
}