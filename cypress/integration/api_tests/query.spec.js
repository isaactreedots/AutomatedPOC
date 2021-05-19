import { allCountries, allMenus } from '../../support/graphql-queries';

describe('GraphQL Requests', () => {
    it('Fetch All countries', () => {
        cy.requestGraphQl(allCountries).then(response => {
            expect(response.status).to.be.eq(200);
            expect(response.body.data.allCountries).to.have.lengthOf('240')
            expect(response.body.data.allCountries[0].name).to.be.eq('AF');
        });
    });

    it('Fetch All menus', () => {
        cy.requestGraphQl(allMenus).then(response => {
            expect(response.status).to.be.eq(200);
        });
    });
});