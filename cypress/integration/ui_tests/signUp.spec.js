import LoginPage from '../../pages/loginPage';
import SignUpPage from '../../pages/signUpPage';

describe('Login Test', () => {
    beforeEach(function () {
        cy.viewport('iphone-6');
        cy.visit('https://test.thetreedots.com/');
        try {
            cy.clearLocalStorage();
            cy.clearCookies();
        } catch (e) {
            console.log(e)
        }
        cy.reload();
    });

    it('Verify error pop up when user failed to sign Up', function () {
        cy.get(LoginPage.updatePopUp).get(LoginPage.okUpdatePopUp).click();
        cy.get(LoginPage.skipButton).click({force: true});
        cy.wait(2000);
        cy.contains(LoginPage.signUp).click({force: true});
        cy.url().should('eq', 'https://test.thetreedots.com/sign-up');
        cy.contains('Sign Up').should('be.exist');
        cy.get(SignUpPage.firstName).clear().type('firstname');
        cy.get(SignUpPage.lastName).clear().type('lastName');
        cy.get(SignUpPage.mobilePhone).clear().type('123456');
        cy.contains(SignUpPage.selectCountry).click();
        cy.get(SignUpPage.countryMalaysia).eq(0).click();
        cy.get(SignUpPage.emailField).clear().type('email@email.com');
        cy.contains(SignUpPage.accountType).click();
        cy.contains(SignUpPage.personalAccount).click();
        cy.get(SignUpPage.password).clear().type('12345678');
        cy.get(SignUpPage.confirmPassword).clear().type('12345678');
        cy.get(SignUpPage.confirmBtn).click();
        cy.contains('Unable to send OTP, please check your mobile number');
    });
});