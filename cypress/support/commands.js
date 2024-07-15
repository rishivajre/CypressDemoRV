// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('selectProduct', (productName) => { 
    
    cy.get('h4.card-title').each(($e1, index, $list) =>{

        const prodTitle = $e1.text()

        if (prodTitle.includes(productName))
            {cy.get('button.btn.btn-info').eq(index).click()}
    })
  })
//New custom command is created here for Login API testing with token
 Cypress.Commands.add('LoginAPI', ()=>
{
  // cy.request("method", "request URL", "payload")   ---  To make API request
  cy.request('POST',"https://rahulshettyacademy.com/api/ecom/auth/login",
    {userEmail: "virenshukla@gmail.com", userPassword: "Viren@123"}).then(function(response)
    {
        // now we can do assertion or login validation that status 200
        expect(response.status).to.eq(200)
        
        //Cypress.env makes the global env variable 
        // & will be available to any folder in the project
        Cypress.env("token", response.body.token)

    })

})
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })