//Cypress - spec file
/// <reference types="Cypress" />


describe('My First Cypress Test Suit', function(){

    it ('My First Test Case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        //cy.get("input[type='search']").type("broco")  <=== this alse works fine!
        cy.get('.search-keyword').type("ca")
        cy.wait(3000)
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        //parent-child chaining
        cy.get('.products').as('prodLocator')
        cy.get('@prodLocator').find('.product').should('have.length',4)
        cy.get(':nth-child(3) > .product-action > button').click()//if you want to get via cypress locators to the exact button click, but! it can change in the future
        //manually-to be strong in case of customization
        cy.get('@prodLocator').find('.product').eq(2).contains('ADD TO CART').click() // third product got clicked here via hard coding i.e. going through index elements
        
        //now to dynamically get the product name regardless if it remains on same index or not
        cy.get('@prodLocator').find('.product').each(($el, index, $list) => {

        const vegText = $el.find('h4.product-name').text()
                //below text Cashews is case sensitive. Makes sure u spell and capitalize it correctly
        if(vegText.includes('Cash')) //.includes() method is used here to get the substring, if that String is present in the prod name
            
        {
        //using .click() .find() mehtod is not allowed 
            cy.wrap($el).find('button').click().then(function(){
                console.log("Find me in the Develope tools's Console Tab")            
            })
        //thats why cy.wrap($el) method for $el is used here to complete the promise of resolving the promise of finding theelement
                
        }

        })
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')
                        //.should() belongs to 'Chai' library

        //thsi is to print in logs
        cy.get('.brand').then(function(logoElement) // here we are completing the promise under then() with a function
        {// then cy.log can get the text of the above '.brand' locator
        cy.log(logoElement.text()) //in this way only we can get the text of an element in the output
        })
                               //const logo=cy.get('.brand') // const is not a cypress command so cant use .text() here
                                //cy.log(logo.text()) herer we cant use text() bcz it is a jquerry method().
    })
})