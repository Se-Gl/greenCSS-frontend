describe('Blog Screen Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/about/')
  })
  it('renders the page', () => {
    cy.get('#about-index').should('exist')
  })
  it('renders the header', () => {
    cy.get('h1').should('be.visible').should('exist').contains('About greenCSS', { matchCase: false })
  })
  it('reveals presentation section', () => {
    cy.get('#presentation').should('exist')
  })
  it('reveals story section with animation', () => {
    cy.get('#story').should('exist')
  })
})
