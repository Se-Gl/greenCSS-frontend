describe('Home Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('renders the hero image', () => {
    cy.get('#hero-section').should('exist')
  })
  it('renders the header', () => {
    cy.get('main div h1').contains('A classy way to write sustainable CSS', { matchCase: false })
  })
  it('includes layout component', () => {
    cy.get('nav').should('exist')
    cy.get('main .container').should('exist')
  })
  it('reveals service section', () => {
    cy.get('#service').should('exist')
  })
  it('reveals faq section', () => {
    cy.get('#faq').should('exist').contains('There’s more to know about greenCSS', { matchCase: false })
  })
  it('render dummy blog post card', () => {
    cy.get('#recent-news').should('exist').scrollIntoView()
  })
  it('render the testimonial section', () => {
    cy.get('#testimonial').should('exist')
  })
})
