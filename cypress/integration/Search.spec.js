describe('Search Screen Unit test', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/api/search?q=')
    cy.fixture('example.json')
    cy.visit('http://localhost:3000')
  })

  it('search for a specific term', () => {
    cy.get('#close-modal').click({ force: true }).get('#modal-portal').should('exist')
    cy.get('#search').type('margin-left')
    cy.get('#search-results').contains('margin side', { matchCase: false })
    cy.get('#search').clear().type('margin-left')
    cy.get('#search-results div').first().click()
    cy.get('#search-results > :nth-child(1)').contains('transition', { matchCase: false })
  })
})
