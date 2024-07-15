/// <reference types = "Cypress"/>

describe('Handling child windows', () =>{

    it('should handle child windows', () =>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice")

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.origin("https://www.qaclickacademy.com",()=>
        {
            cy.get('#navbarSupportedContent [href*="about"]').click()
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy')
        })
    })
})