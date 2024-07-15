/// <reference types ="Cypress"/>

describe('AngularWebPractice', ()=>
{

    before(function(){

        cy.fixture('example').then(function(data)
    {
        this.data = data
    })
    })

    it('FrameworkPart1: Starting', function()       
    //Arrow functions (=>) do not have their own this context; 
    //they inherit this from the parent scope, which can lead to unexpected behavior.
    {

        cy.visit(Cypress.env('url')+"/angularpractice")
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.get('select').select(this.data.gender)  // remember to give the capitol Male in the example.json

        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
        
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2')
            //should have.attribute = minlength is used here

            cy.get('#inlineRadio3').should('be.disabled')
    })
})

            //always end you test cases with assertion/validation
