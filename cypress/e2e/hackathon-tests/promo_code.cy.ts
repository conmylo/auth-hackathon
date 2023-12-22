/*
    User Story: As a user, I want to be able to redeem a promo code to get a discount on my order so that I can save money on my purchase.
    Actors: user
    Preconditions:System must be connected to the internet
    Acceptance Criteria:The products selected are the ones dipslayed in the search results' screen

*/
describe('Promo Code Redemption', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    })

    it('should allow the user to see Top Deals', () => {
        // Assert if search field is visible
        cy.get('#search-field ').should('be.visible')

        // Type rice in the search field
        cy.get('#search-field ').type('rice')

        // assert the search field contains rice
        cy.get('#search-field ').should('have.value', 'rice')

        // Assert if page size is visible
        cy.get('#page-menu ').should('be.visible')
        
        
        })


})

        
      // Visit the website
 

        // 






        // 

 // Test 
