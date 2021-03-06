describe('Calculation Section', () => {
  before(() => {
    cy.visit('http://localhost:3000')
    cy.viewport(1001, 800)
  })
  it('renders the calculation section', () => {
    cy.get('#calculate-footprint').scrollIntoView().should('exist').contains('Calculate your green footprint', {
      matchCase: false
    })
  })

  it('changes the range slider input and gets a result', () => {
    cy.get('#range-slider-W input').as('range').invoke('val', 750).trigger('change', { force: true })
    cy.get('#range-slider-h input').as('range').invoke('val', 10).trigger('change', { force: true })
    cy.get('#calculation-result').should('not.be.empty')
  })
})

describe('Donation Section', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })
  it('renders the donation section', () => {
    cy.get('#donation')
      .scrollIntoView()
      .should('exist')
      .contains('Change the world. Even a small donation does a lot.', {
        matchCase: false
      })
  })
})
