import LoginPage from '../../pages/loginPage';
import HomePage from '../../pages/homePage';
import BrowsePage from '../../pages/browsePage';
import AccountPage from '../../pages/accountPage';
import UiScenario from '../../components/ui_scenarios';
import user from '../../fixtures/user.json';

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

    it('Check Price on Browse', function () {
        UiScenario.login(this.user.emailMY, this.user.password);
        cy.get(HomePage.accountMenu).should('exist');
        cy.get('.expand_icon').click();
        cy.get('.text-grey > :nth-child(1) > .q-item__section').click();
        cy.get(HomePage.browsePage).click();
        cy.get(BrowsePage.category).then(() => {
            cy.contains('Meat').get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            cy.contains('Seafood').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            cy.contains('Snacks').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            cy.contains('Vegetables').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });
            
            cy.contains('Fruits').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            cy.contains('Soup').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            cy.contains('Staples').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            cy.contains('Condiments').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');      
                    });
                });

            cy.contains('Beverages').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            cy.contains('Pastries').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            cy.contains('General').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            cy.contains('Dairy').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            cy.contains('Eggs').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            cy.contains('Appliance').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            cy.contains('Pet').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });
   
            });

        });
  
    });
