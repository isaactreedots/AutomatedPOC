import LoginPage from '../../pages/loginPage';
import HomePage from '../../pages/homePage';
import AccountPage from '../../pages/accountPage';
import UiScenario from '../../components/ui_scenarios';

describe('Login Test', () => {
    beforeEach(function () {
        cy.fixture('user').then(function (user) {
            this.user = user;
        })
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

    it('Login with password - email', function () {
        UiScenario.login(this.user.email, this.user.password);
        cy.get(HomePage.accountMenu).should('exist');
    });

    it('Login with password - phone', function () {
        cy.get(LoginPage.updatePopUp).get(LoginPage.okUpdatePopUp).click();
        cy.get(LoginPage.skipButton).click({force: true});
        cy.get(LoginPage.signInWithPasswordBtn).click();
        cy.get(LoginPage.loginWithPhone).click()
        cy.get(LoginPage.countryDropdown).click();
        cy.contains(LoginPage.indonesiaCountry).click();
        cy.get(LoginPage.mobilePhoneField).clear().type(this.user.phone);
        cy.get(LoginPage.passwordField).clear().type(this.user.password);
        cy.get(LoginPage.signInButton).click();
    });

    it('Login using incorrect credentials', function () {
        UiScenario.login(this.user.invalidEmail, this.user.invalidPassword);
        cy.get(LoginPage.updatePopUp).should('contain', 'Hmm...');
    });

    it('Login and logout succesfully', function () {
        UiScenario.login(this.user.email, this.user.password);
        cy.get(HomePage.accountMenu).should('exist');
        cy.get(HomePage.accountMenu).click();
        cy.get(AccountPage.signOut).click();
        cy.contains(AccountPage.confirmSignOutPopUp).click();
    });

    it('Validate error when email and password field is left empty', function () {
        cy.get(LoginPage.updatePopUp).get(LoginPage.okUpdatePopUp).click();
        cy.get(LoginPage.skipButton).click({force: true});
        cy.get(LoginPage.signInWithPasswordBtn).click();
        cy.get(LoginPage.emailField).click();
        cy.get(LoginPage.passwordField).click();
        cy.get(LoginPage.emailField).click();
        cy.contains(LoginPage.emptyEmailNotification).should('be.visible');
        cy.contains(LoginPage.emptyPasswordNotification).should('be.visible');
    });

    it('Login using OTP', function () {
        cy.get(LoginPage.updatePopUp).get(LoginPage.okUpdatePopUp).click();
        cy.get(LoginPage.skipButton).click({force: true});
        cy.get(LoginPage.signInWithMobilePhoneBtn).click({force: true});
        cy.get(LoginPage.countryDropdown).click();
        cy.contains(LoginPage.unitedStatesCountry).click();
        cy.get(LoginPage.mobilePhoneField).type(this.user.phone2);
        cy.get(LoginPage.signInButton).click();
        cy.wait(10000);
        cy.request({
            method: 'GET',
            url: Cypress.env('twilioUrl'),
            auth: {
                    username: Cypress.env('username'),
                    password: Cypress.env('password')
                }
        }).then((response) => {
            const message = response.body.messages[0].body;
            const s = /\d+/g;
            const match = message.match(s);
            const otp = match[0]
            cy.log(otp);
            cy.get(LoginPage.otpCode).type(otp);
        });
        });

    it('Login using OTP and fill incorrect OTP code', function () {
        cy.get(LoginPage.updatePopUp).get(LoginPage.okUpdatePopUp).click();
        cy.get(LoginPage.skipButton).click({force: true});
        cy.get(LoginPage.signInWithMobilePhoneBtn).click({force: true});
        cy.get(LoginPage.countryDropdown).click();
        cy.contains(LoginPage.unitedStatesCountry).click();
        cy.get(LoginPage.mobilePhoneField).type(this.user.phone2);
        cy.get(LoginPage.signInButton).click();
        cy.get(LoginPage.otpCode).type(this.user.incorrectOtp);
        cy.get(LoginPage.updatePopUp).should('be.exist').contains('Failed');
    });

    it('Login using OTP with incorrect phone number', function () {
        cy.get(LoginPage.updatePopUp).get(LoginPage.okUpdatePopUp).click();
        cy.get(LoginPage.skipButton).click({force: true});
        cy.get(LoginPage.signInWithMobilePhoneBtn).click({force: true});
        cy.get(LoginPage.countryDropdown).click();
        cy.contains(LoginPage.unitedStatesCountry).click();
        cy.get(LoginPage.mobilePhoneField).type('839427292');
        cy.get(LoginPage.signInButton).click();
        cy.get(LoginPage.numberNotExistPopUp).should('be.exist').contains('You do not have an account with us.');
    });
});