/// <reference types= "Cypress"/>
///<reference types= "cypress-iframe"/>
import 'cypress-iframe'

describe('Cypress-iframes ', () =>
{
    it('Should Handle: Cypress-iframes', () => 
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")

        cy.frameLoaded("#courses-iframe")
        //Cypress gets the knowledge about the iframe web UI and it gets loaded into the object

        //switching to iframe mode and getting on the 'Mentorship' page
        cy.iframe().find("a[href*='mentorship']").eq(0).click()        

        cy.wait(5000)

        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
        //this also works fine
    })
})