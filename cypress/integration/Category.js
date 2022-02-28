describe('Category slug Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/docs/category/animation')
  })
  it('renders the dynamic section', () => {
    cy.get('#category-animation').should('be.visible').should('exist')
  })
  it('renders the header', () => {
    cy.get('h1').should('be.visible').should('exist').contains('Browse by category: animation', { matchCase: false })
  })
})

describe('Category Index Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/docs')
  })
  it('renders the static index page', () => {
    cy.get('#docs-index').should('be.visible').should('exist')
  })

  it('renders the sidebar, hide it on medium and small screens', () => {
    cy.get('#sidebar').should('be.visible').should('exist')
    cy.viewport(320, 768)
    cy.get('#sidebar').should('not.be.visible')
  })
})
