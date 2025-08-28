/// <reference types ="Cypress"/>
import HomePage from '../PageObjects/HomePage' //../ is used to come to the folder level and then to access the file
import ProductPage from '../PageObjects/ProductPage'


describe('AngularWebPractice', ()=>
{

    before(function(){
        cy.fixture('example').then(function(data)
    {
        this.data = data
    })
    })                                                    
    //Arrow functions (=>) do not have their own this context; //they inherit this from the parent scope, which can lead to unexpected behavior.
                                                                    
    it('FrameworkPart1: Starting', function()                    //hence we have not given ()=> in the below it module ; it was not getting (this.data)
    {
        cy.visit(Cypress.env('url')+"/angularpractice")
        const homePage = new HomePage()                             // this object 'homepage' now has the full knowledge of the methods present in HomePage class
        const productPage = new ProductPage()
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')       //should have.attribute = minlength is used here
        homePage.getEnterpreneur().should('be.disabled')
        homePage.getShopTab().click()
        this.data.productName.forEach(function(element){        //this is used to resolve the promise of ".forEach()" to get through each product mention in the array in commands.js
            cy.selectProduct(element)     //"selectProduct" is the custom command here
        })

        productPage.getCheckoutPage().click()

        var sum = 0;
        cy.get('tr td:nth-child(4) strong').each((el, index, $list)=>       //".each" is used here for iterating and collecting the amount of each product
        {
            const amount = el.text()
            var res = amount.split(" ")         //here ".text(),.split(),.trim()" are all javascript commands 
            res = res[1].trim()
            sum = Number(sum)+Number(res)       //Hence,  you need to resolve the promise below with the ".then()"
            
        }).then(function()                  //resolving the above promise with ".then()"
        {
            cy.log(sum)
        })

        cy.get('h3 strong').then(function(element)      //here .then() is directly used bcuz no need to iterate, just need one element value
        {
            const amount = element.text()
            var res = amount.split(" ")         //here ".text(),.split(),.trim()" are all javascript commands 
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)
        })

        productPage.getCheckoutButton().click()
        productPage.getCountry().type('India')
        Cypress.config('defaultCommandTimeout',10000)       
         //this timeout will be applied to the current spec only; it {} just like explicit wait in selenium

        productPage.getCountryOption().click()
        cy.get('.checkbox').click({force : true})
        cy.get('.ng-untouched > .btn').click()
        //cy.get('.alert').should('have.value', "Success")

        //following method ".then()" is used bcuz ".includes()" is a Jquery method
        //and cannot be called without resolving the promise
        cy.get('.alert').then(function(element)
        {
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true
        })
    })
})

//always end you test cases with assertion/validation
