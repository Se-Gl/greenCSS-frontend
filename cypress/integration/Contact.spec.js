describe('Contact Index Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/contact')
  })
  it('renders the contact page', () => {
    cy.get('#contact-index').should('be.visible').should('exist')
  })
  it('renders the contact form', () => {
    cy.get('#contact-form').should('be.visible').should('exist')
  })
  it('type a dummy request', () => {
    cy.get('#fullname').type('John Doe {enter}', { force: true })
    cy.get('#checkmark').should('be.visible').should('exist')
    cy.get('#email').type('john.doe@email.com {enter}', { force: true })
    cy.get('#subject').type('Test Title {enter}', { force: true })
    cy.get('#message').type('tba... {enter}', { force: true })

    cy.get('#submit-button').click({ force: true })
  })
})
