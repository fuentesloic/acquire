// https://docs.cypress.io/api/introduction/api.html

describe('Shop page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Acquire')
  })
})
