import UiScenario from '../../components/ui_scenarios';
import HomePage from '../../pages/homePage';

describe('Login Test', () => {
    beforeEach(function () {
        cy.fixture('user').then(function (user) {
            this.user = user;
        });
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

    it('Validate all menu are available and clickable', function () {
        UiScenario.login(this.user.email, this.user.password);
        cy.get(HomePage.browseMenu).should('exist').click();
        cy.get(HomePage.browsePageTitle).should('have.text', 'Browse ');
        cy.get(HomePage.ordersMenu).should('exist').click();
        cy.get(HomePage.orderPageTitle).should('have.text', 'Orders');
        cy.get(HomePage.cartMenu).should('exist').click();
        cy.get(HomePage.cartPageTitle).should('have.text', 'Cart');
        cy.get(HomePage.accountMenu).should('exist').click();
        cy.contains('Update Profile').should('exist');
        cy.get(HomePage.homeMenu).should('exist').click();
        cy.contains('Top Picks').should('exist');
    });
});