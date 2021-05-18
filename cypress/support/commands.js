Cypress.Commands.add('requestGraphQl', operationName => {
    cy.request({
        url: '/',
        method: 'POST',
        headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIwOTQsInVzZXJUeXBlSWQiOjYsImJ1eWVyVHlwZSI6MSwiY291bnRyeSI6eyJpZCI6MTkzLCJuYW1lIjoiU0ciLCJkZXNjcmlwdGlvbiI6IlNpbmdhcG9yZSIsImN1cnJlbmN5X2NvZGUiOiJTR0QiLCJjdXJyZW5jeV9zeW1ib2wiOiJTJCIsImFjdGl2ZSI6dHJ1ZX0sImlhdCI6MTYyMDE3MzcxMX0.monHX_4UCDFpjXy1slEp4AEIEUfBTCB2wCLdm0LTX8k',
            'Content-Type': 'application/json'
        },
        body: {
            query: operationName
        },
        failOnStatusCode: false
    });
});