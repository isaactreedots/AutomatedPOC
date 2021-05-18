import { allCountries } from '../../support/graphql-queries';

describe('GraphQL Requests', () => {
    it('Test 2nd', () => {
        cy.requestGraphQl(allCountries).then(response => {
            expect(response.status).to.be.eq(200);
            expect(response.body.data.allCountries[0].name).to.be.eq('AF');
            // expect(response.body.data.allCountries[9].name).to.be.eq('');
        });
    });
});