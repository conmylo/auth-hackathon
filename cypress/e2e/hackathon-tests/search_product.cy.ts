describe("Search for Products", () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('Tests search should display the corresponding products', () => {
        cy.get('.search > .search-keyword').type('brocolli')

        cy.get('.products').find('.loadind').should('not.exist')
        cy.get('.products').find('.product').first().get('.product-name').should('have.value', 'Brocolli - 1 Kg')
    })
})