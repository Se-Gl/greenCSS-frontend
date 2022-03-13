describe('Home Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('renders the 3D phone', () => {
    cy.get('.threed-canvas div canvas').should('exist').should('be.visible')
  })
  it('renders the header', () => {
    cy.get('main div h1').contains('A classy way to write CSS design', { matchCase: false })
  })

  it('includes layout component', () => {
    cy.get('nav').should('exist')
    cy.get('main .container').should('exist')
  })
  it('renders the linkedbutton', () => {
    cy.get('#linkedbutton').should('be.visible').should('exist')
    cy.get('#linkedbutton').trigger('mouseover')
  })
  it('reveals presentation section with animation', () => {
    cy.get('#presentation').should('exist')
    cy.get('#production').should('exist')
    cy.get('#animated').should('exist')
    cy.get('#responsive').should('exist')
    cy.get('#presentation').scrollIntoView().wait(1000).should('exist').should('be.visible')
    cy.get('#animated').should('exist').should('be.visible')
    cy.get('#production').should('exist').should('be.visible')
  })
  it('reveals supporters section with animation', () => {
    cy.get('#supporters').scrollIntoView()
    cy.get(':nth-child(1) > .min-w-50rem > .min-h-25rem > .h-25rem')
      .should('exist')
      .should('be.visible')
      .click({ force: true })
    cy.get(':nth-child(2) > .min-w-50rem > .min-h-25rem > .h-25rem')
      .should('exist')
      .should('be.visible')
      .trigger('touchmove', {
        touches: [{ pageY: 0, pageX: 100 }],
        force: true
      })
      .click({ force: true })
    cy.get(':nth-child(3) > .min-w-50rem > .min-h-25rem > .h-25rem').should('exist').should('be.visible')
  })
  it('render dummy blog post card', () => {
    cy.get('#recent-news').should('exist').scrollIntoView().wait(1000)
    cy.get('#blog-card').should('exist').should('exist').should('have.attr', 'style')
  })
  it('render the testimonial section', () => {
    cy.get('#testimonial').should('exist').scrollIntoView().wait(500).should('be.visible')
    cy.get('#creator-memoji-1')
      .should('exist')
      .should('be.visible')
      .should('have.attr', 'alt')
      .then((alttext) => {
        expect(alttext).contains('Severin Glaser - Memoji 1', { matchCase: false })
      })
  })
  it('render dummy doc section and cards', () => {
    cy.get('#service-section').should('exist').scrollIntoView().wait(1000)
    cy.get('#service-card').contains('Getting started', { matchCase: false })
  })
})
