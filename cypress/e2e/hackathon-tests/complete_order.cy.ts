describe("Complete Order for the products in the cart", () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('Completes an order with more than one item in the cart', () => {
        cy.get('.products').find('.loadind').should('not.exist')
        cy.get('.products').find('.product').each($product => {
            cy.wrap($product.find('.product-action > button')).should('have.text', 'ADD TO CART')
            cy.wrap($product.find('.product-action > button')).click()
        })

        cy.get('.cart .cart-icon > img').click()
        cy.get('.cart-preview.active > .action-block > button').click()

        cy.url().should('include', '/cart')

        cy.get('button').contains('Place Order').click()

        cy.url().should('include', '/country')

        cy.get('select').select('Greece').should('have.value', 'Greece')

        cy.get('.chkAgree').check().should('be.checked')

        cy.get('button').contains('Proceed').click()

        cy.get('span').contains('Thank you, your order has been placed successfully')
    })

    it('Tests if an order can be completed with no items in the cart', () => {
        cy.get('.cart .cart-icon > img').click()
        cy.get('.cart-preview.active > .action-block > button').click()

        cy.url().should('include', '/cart')

        cy.get('.empty-cart > h2').should('have.text', 'You cart is empty!')

        cy.get('button').contains('Place Order').should('be.disabled')
    })

    it('Tests if Terms & Conditions is mandatory for completing an order', () => {
        cy.get('.products').find('.loadind').should('not.exist')
        cy.get('.products').find('.product').first().find('.product-action > button').should('have.text', 'ADD TO CART').click()

        cy.get('.cart .cart-icon > img').click()
        cy.get('.cart-preview.active > .action-block > button').click()

        cy.url().should('include', '/cart')

        cy.get('button').contains('Place Order').click()

        cy.url().should('include', '/country')

        cy.get('select').select('Greece').should('have.value', 'Greece')

        cy.get('button').contains('Proceed').click()

        cy.get('.errorAlert > b').should('have.text', 'Please accept Terms & Conditions - Required')
    })

    it('Tests if an order can be completed when no country is sellected', () => {
        cy.get('.products').find('.loadind').should('not.exist')
        cy.get('.products').find('.product').first().find('.product-action > button').should('have.text', 'ADD TO CART').click()

        cy.get('.cart .cart-icon > img').click()
        cy.get('.cart-preview.active > .action-block > button').click()

        cy.url().should('include', '/cart')

        cy.get('button').contains('Place Order').click()

        cy.url().should('include', '/country')

        cy.get('select').should('have.value', null)

        cy.get('.chkAgree').check().should('be.checked')

        cy.get('button').should('be.disabled')
    })
})
