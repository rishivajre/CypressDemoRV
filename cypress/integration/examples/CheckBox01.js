describe('website checking: dropdoen etc...', function()
{
    

    it('Web UI Testing', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //to check multiple check boxes at a time
        cy.get('input[type="checkbox"').check(['option2','option3'])
    })


})