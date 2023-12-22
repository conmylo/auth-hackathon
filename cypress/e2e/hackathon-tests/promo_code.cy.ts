/*
    User Story: As a user, I want to be able to redeem a promo code to get a discount on my order so that I can save money on my purchase.
    Actors: user
    Preconditions:System must be connected to the internet
    Acceptance Criteria:The products selected are the ones dipslayed in the search results' screen

*/
describe('Promo Code Redemption', () => {
    it('should allow the user to see Top Deals', () => {
      // Visit the website
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        // Search for the button "Top Deals"
        cy.get('a.cart-header-navlink[href="#/offers"]').should('have.text', 'Top Deals')

        // Click on the button Top Deals
        cy.get('a.cart-header-navlink[href="#/offers"]').click()

        // assert if there is a table with the list of deals
        cy.get('table').should('be.visible')



    })
  })