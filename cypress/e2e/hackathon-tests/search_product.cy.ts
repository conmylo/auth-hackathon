describe("Search for Products", () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('Tests search should display the corresponding products', () => {
        cy.get('.search > .search-form > input').type('brocolli')

        cy.get('.products').find('.loadind').should('not.exist')
        cy.get('.products').find('.product').first().get('h4.product-name').should('have.text', 'Brocolli - 1 Kg')
    })
})