Cypress.Commands.add('requestGraphQl', operationName => {
    cy.request({
        url: '/',
        method: 'POST',
        headers: {
            'Authorization': '',
            'Content-Type': 'application/json'
        },
        body: {
            query: operationName
        },
        failOnStatusCode: false
    });
});
