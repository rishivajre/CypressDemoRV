describe('website checking: Child PopUp Windows', function()
{
    

    it('Web UI Testing', function(){

        //rahulshettyacademy.com
        cy.visit(Cypress.env('url')+ "/AutomationPractice/") // here env varianble is set as url in config.js

        cy.get('#opentab').then(function(e1)
        {
            const newUrl = e1.prop('href')
            cy.visit(newUrl)
            cy.origin(newUrl,  ()=>{

                cy.get('#navbarSupportedContent\ a[href*="about.html"]').click()

            })
        })
    })


})