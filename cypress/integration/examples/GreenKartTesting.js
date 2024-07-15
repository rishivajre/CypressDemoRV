//Cypress - spec file
/// <reference types="Cypress" />


describe('My First Cypress Test Suit', function(){

    it ('My First Test Case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        //cy.get("input[type='search']").type("broco")  <=== this alse works fine!
        cy.get('.search-keyword').type("ca")
        cy.wait(3000)
        //Selenium: .get() hits url in browser; Cypress: .get() acts like findElements of selenium
        
        cy.get('.products').as('prodLocator')
       
        //now to dynamically get the product name regardless if it remains on same index or not
        cy.get('@prodLocator').find('.product').each(($el, index, $list) => {

        const vegText = $el.find('h4.product-name').text()
        if(vegText.includes('Cashews')) 

        {
            cy.wrap($el).find('button').click()
        }

        
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})