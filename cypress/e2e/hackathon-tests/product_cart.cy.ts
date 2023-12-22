describe("Add Products in the Cart", () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    let total_price = 0
    it('Add product', () => {
        cy.get('.products').find('.loading').should('not.exist')

        cy.get('.products').find('.product').each($product => {
            let price: number = +$product.find('p.product-price').text()
            let quantity: number;
            cy.wrap($product.find('.increment')).click()
            cy.wrap($product.find('.stepper-input .quantity'))
                .invoke('val')
                .then((inputVal: string | string[] | null) => quantity = +inputVal)

            // cy.log(price, $product, quantity)
            cy.wrap($product.find('.product-action > button')).should('have.text', 'ADD TO CART')
            cy.wrap($product.find('.product-action > button')).click()
            cy.wrap($product.find('.product-action > button')).should('have.text', '✔ ADDED')
            total_price += quantity * price

        })

    })
})
