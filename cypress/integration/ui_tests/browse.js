import HomePage from '../../pages/homePage';
import BrowsePage from '../../pages/browsePage';
import UiScenario from '../../components/ui_scenarios';


describe('Browse Page Test', () => {
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
        cy.get(HomePage.selectCollectionPoint).click();
        cy.get(HomePage.poUpCollectionPoint).click();
        cy.get(HomePage.browsePage).click();
        
        // Check from all categories one by one by selecting ALL as subcategories
        cy.get(BrowsePage.category).then(() => {
            // From Meat Category
            cy.contains('Meat').get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            // From Seafood Category
            cy.contains('Seafood').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            // From Snacks Category
            cy.contains('Snacks').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            // From Vegetables Category
            cy.contains('Vegetables').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });
            
            // From Fruits Category
            cy.contains('Fruits').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            // From Soup Category
            cy.contains('Soup').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            // From Staples Category
            cy.contains('Staples').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            // From Condiments Category
            cy.contains('Condiments').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');      
                    });
                });

            // From Beverages Category
            cy.contains('Beverages').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            // From Pastries Category
            cy.contains('Pastries').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            // From General Category
            cy.contains('General').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            // From Dairy Category
            cy.contains('Dairy').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            // From Eggs Category
            cy.contains('Eggs').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            // From Appliance Category
            cy.contains('Appliance').click();
            cy.get(BrowsePage.subCategoryAll).click().then(() => {
                cy.wait(5000);
                cy.get('div').should(($div) => {
                    const text = $div.text();
                    expect(text).not.to.include('RM0.00');
                   });
                });

            // From Pet Category
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
  
