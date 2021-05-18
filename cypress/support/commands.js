Cypress.Commands.add('requestGraphQl', operationName => {
    cy.request({
        url: '/',
        method: 'POST',
        headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIyMDgsInVzZXJUeXBlSWQiOjYsImJ1eWVyVHlwZSI6MiwiY291bnRyeSI6eyJpZCI6MTkzLCJuYW1lIjoiU0ciLCJkZXNjcmlwdGlvbiI6IlNpbmdhcG9yZSIsImN1cnJlbmN5X2NvZGUiOiJTR0QiLCJjdXJyZW5jeV9zeW1ib2wiOiJTJCIsImFjdGl2ZSI6dHJ1ZX0sImlhdCI6MTYyMTI0MDE5MX0.fgFzpKDjrRkUKko9-JncZxkyDvOKe5KL0Lrh7fF93PI',
            'Content-Type': 'application/json'
        },
        body: {
            query: operationName
        },
        failOnStatusCode: false
    });
});
