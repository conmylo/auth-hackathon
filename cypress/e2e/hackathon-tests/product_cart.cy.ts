describe("Add Products in the Cart", () => {
    before(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    let products_length = 0
    let quantity: number = 0;
    let total_price = 0
    it('Add product in the cart', () => {

        cy.get('.products').find('.loading').should('not.exist')

        cy.get('.products').find('.product').each(($product, index) => {
            products_length++;
            let price: number = +$product.find('p.product-price').text()

            cy.get('.cart-preview.active').should('not.exist')
            cy.get('.cart-icon').click();
            cy.get('.cart-preview.active').should('exist')
            if (index === 0)
                cy.get('.empty-cart').should('exist')
            cy.get('.cart-icon').click();


            const random_quantities = Math.floor(Math.random() * 1);
            for (let i = 0; i < random_quantities; i++)
                cy.wrap($product.find('.increment')).click()

            cy.wrap($product.find('.stepper-input .quantity'))
                .invoke('val')
                .then((inputVal: string | string[] | null) => {
                    quantity += +inputVal
                    total_price += +inputVal * price
                })

            cy.wrap($product.find('.product-action > button')).should('have.text', 'ADD TO CART')
            cy.wrap($product.find('.product-action > button')).click()
            cy.wrap($product.find('.product-action > button')).should('have.text', '✔ ADDED')

            // let product_price = quantity * price

        })
    })

    it('Total Items and Price', () => {
        cy.get('.cart-info table tbody tr').each($tr => {
            const tds = $tr.find('td')

            if (tds.eq(0).text().includes('Items')) {
                cy.wrap(tds).should('have.text', `Items:${products_length * quantity}`)
            }
            else if (tds.eq(0).text().includes('Price')) {
                cy.wrap(tds).should('have.text', `Price:${total_price}`)
            }
        })

        cy.get('ul.cart-items > li.cart-item')
            .should('not.have.class', 'fadeIn-enter')
            .should('not.have.class', 'fadeIn-enter-active')

        // cy.get('ul.cart-items').each($li => cy.log($li))
        cy.get('ul.cart-items').should('have.length', products_length)

    })
})
