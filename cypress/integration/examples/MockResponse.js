/// <reference types = 'Cypress'/>

describe('My First Mock API test',function()
{
    it('Mock API',function()
    {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo")
        //This format is used below:> "cy.intercept({requestObject},{responseObject})"

        // (CYPRESS will not make the below call,
        // it will just listen for this call to be made on the browser)
        cy.intercept(
            {      //To make a response call : we will send the below body
            
            method : "GET",
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

            },
            {   // now we can either get the real response here or 
                // we can get the MOCK response due to 
                // dynamic library APIs from other party's database 
                // which keeps changing and we don't know it
                statuscode: 200,
                body : [{   "book_name": "RestAssured with Java",
                            "isbn": "BSG",
                            "aisle": "2302"     
                        }]
            }).as('bookRetrieval')
        cy.get('.btn.btn-primary').click()
        cy.wait('@bookRetrieval')
        cy.get('p').should('have.text',"Oops only 1 Book available")
        
        
    })
})