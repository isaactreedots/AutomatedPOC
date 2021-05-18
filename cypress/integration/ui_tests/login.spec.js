import LoginPage from '../../pages/loginPage';

describe('Login Test', () => {
    beforeEach(function () {
        cy.viewport('iphone-6');
        cy.visit('https://test.thetreedots.com/');
    });

    afterEach(() => {
        try {
            cy.clearLocalStorage();
            cy.clearCookies();
        } catch (e) {
            console.log(e)
        }
        cy.reload();
    });

    it('Login using correct credentials', function () {
        cy.get(LoginPage.updatePopUp).get(LoginPage.okUpdatePopUp).click();
        cy.get(LoginPage.skipButton).click({force: true});
        cy.get(LoginPage.signInWithPasswordBtn).click();
        cy.get(LoginPage.emailField).clear().type('myb2c2@gmail.com');
        cy.get(LoginPage.passwordField).clear().type('12345678');
        cy.get(LoginPage.signInButton).click();
    })

    it('Login using incorrect credentials', function () {
        cy.get(LoginPage.updatePopUp).get(LoginPage.okUpdatePopUp).click();
        cy.get(LoginPage.skipButton).click({force: true});
        cy.get(LoginPage.signInWithPasswordBtn).click();
        cy.get(LoginPage.emailField).clear().type('asdasd@gmail.com');
        cy.get(LoginPage.passwordField).clear().type('asdasda');
        cy.get(LoginPage.signInButton).click();
        cy.get(LoginPage.updatePopUp).should('contain', 'Hmm...');
    })
})