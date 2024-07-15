/// <reference types = 'Cypress'/>

describe('My First Mock API test',function()
{
    it('Mock API',function()
    {
        cy.visit("https://www.npr.org/2021/08/18/1027159166/best-books-science-fiction-fantasy-past-decade")
        //This format is used below:> "cy.intercept({requestObject},{responseObject})"
        cy.get('.onetrust-accept-btn-handler').click()
        // (CYPRESS will not make the below call,
        // it will just listen for this call to be made on the browser)
        cy.intercept(
            {      //To make a response call : we will send the below body
            
            method : "GET",
            url : 'https://www.npr.org/2021/08/18/1027159166/best-books-science-fiction-fantasy-past-decade'

            },
            {   // now we can either get the real response here or 
                // we can get the MOCK response due to 
                // dynamic library APIs from other party's database 
                // which keeps changing and we don't know it
                statuscode: 200,
                body : [
                      {
                        "href": "https://www.npr.org/2024/04/03/1239855818/best-stephen-king",
                        "storyId": "1239855818",
                        "title": "'Carrie' turns 50! Here are the best Stephen King novels — chosen by you",
                        "slugUrl": "https://www.npr.org/series/1242295180/books-you-love",
                        "slugTitle": "Books You Love",
                        "imageHtml": "<div\n    class=\"imagewrap has-source-dimensions\"\n    data-crop-type=\"wide\"\n    style=\"\n        --source-width: 2884;\n        --source-height: 1621;\n    \"\n>\n        <picture>\n            <source srcset=\"https://media.npr.org/assets/img/2024/04/02/wgh0d2_wide-6b092bb09d9a889d5aa0af21d0c812619973df77.jpg?s=2600&c=15&f=jpeg\" data-original=\"https://media.npr.org/assets/img/2024/04/02/wgh0d2_wide-6b092bb09d9a889d5aa0af21d0c812619973df77.jpg?s=2600&c=100&f=jpeg\" data-template=\"https://media.npr.org/assets/img/2024/04/02/wgh0d2_wide-6b092bb09d9a889d5aa0af21d0c812619973df77.jpg?s={width}&c={quality}&f={format}\" data-format=\"webp\" class=\"respArchListImg lazyOnLoad\" type=\"image/webp\" />\n            <source srcset=\"https://media.npr.org/assets/img/2024/04/02/wgh0d2_wide-6b092bb09d9a889d5aa0af21d0c812619973df77.jpg?s=2600&c=15&f=jpeg\" data-original=\"https://media.npr.org/assets/img/2024/04/02/wgh0d2_wide-6b092bb09d9a889d5aa0af21d0c812619973df77.jpg?s=2600&c=100&f=jpeg\" data-template=\"https://media.npr.org/assets/img/2024/04/02/wgh0d2_wide-6b092bb09d9a889d5aa0af21d0c812619973df77.jpg?s={width}&c={quality}&f={format}\" data-format=\"jpeg\" class=\"respArchListImg lazyOnLoad\" type=\"image/jpeg\" />\n            <img src=\"https://media.npr.org/assets/img/2024/04/02/wgh0d2_wide-6b092bb09d9a889d5aa0af21d0c812619973df77.jpg?s=2600&c=15&f=jpeg\" data-original=\"https://media.npr.org/assets/img/2024/04/02/wgh0d2_wide-6b092bb09d9a889d5aa0af21d0c812619973df77.jpg?s=2600&c=100&f=jpeg\" data-template=\"https://media.npr.org/assets/img/2024/04/02/wgh0d2_wide-6b092bb09d9a889d5aa0af21d0c812619973df77.jpg?s={width}&c={quality}&f={format}\" data-format=\"jpeg\" class=\"respArchListImg lazyOnLoad\" alt=\"&#039;Carrie&#039; turns 50! Here are the best Stephen King novels — chosen by you\" loading=\"lazy\" />\n        </picture>\n</div>\n<div class=\"credit-caption\">\n    <div class=\"caption-wrap\">\n        <div class=\"caption\" aria-label=\"Image caption\">\n        </div>\n\n\n    </div>\n\n</div>\n"
                      }]
            }).as('bookRetrieval')
        //cy.get('.onetrust-accept-btn-handler').click()
        cy.wait('@bookRetrieval')
        //cy.get('p').should('have.text',"Oops only 1 Book available")
        
        
    })
})