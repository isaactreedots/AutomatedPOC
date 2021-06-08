import LoginPage from '../pages/loginPage';

export default class UiScenario {
    static login(email, password) {
        cy.get(LoginPage.updatePopUp).get(LoginPage.okUpdatePopUp).click();
        cy.get(LoginPage.skipButton).click({force: true});
        cy.get(LoginPage.signInWithPasswordBtn).click({force: true});
        cy.get(LoginPage.emailField).clear().type(email);
        cy.get(LoginPage.passwordField).clear().type(password);
        cy.get(LoginPage.signInButton).click();
    }
}