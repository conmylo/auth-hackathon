describe("Add Products in the Cart", () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('Add product', () => {
        cy.get('.product-image').should('exist')
        cy.get('.products.loading').should('not.exist')
        cy.get('.products').each($product => {
            let price: string = $product.find('p.product-price').text()
            cy.log(price, $product)
        })
    })
})
