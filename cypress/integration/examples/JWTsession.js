/// <reference types="Cypress"/>

describe('JWT Session', ()=>
{
    it('is logged in through local storage', () =>
    {
        //the custome commands you created dont know how to resolve the promises,
        //hence .then()
        cy.LoginAPI().then(function ()
    {
        cy.visit('https://rahulshettyacademy.com/client/',
            {
                onBeforeLoad : function(window)
                {
                    window.localStorage.setItem('token',Cypress.env("token"))
                }
            })
    })
    })
})