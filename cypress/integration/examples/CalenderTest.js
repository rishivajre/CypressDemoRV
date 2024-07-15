/// <reference types= "Cypress"/>

describe('Calender_Test', function()
{
    

    it('Calender: Verify the selected Date', function(){

        const monthNumber = "6";
        const date = "15";
        const year = "2028";

        const wholeDate = [monthNumber,date,year];

        //rahulshettyacademy.com
        cy.visit(Cypress.env('url')+ "/seleniumPractise/#/offers") // here env varianble is set as url in config.js

        cy.get(".react-date-picker__inputGroup").click()        //clicks on the calender opener

        cy.get('.react-calendar__navigation__label').click()        //clicks on month selector 
        cy.get('.react-calendar__navigation__label').click()        //clicks on year selecor

        cy.contains("button",year).click()      //clicks on 2028 with the use of contains method 

        cy.get('.react-calendar__year-view__months__month').eq(Number(monthNumber)-1).click()       //12 month = 1 to 11 index; Month-1; clicks on June

        cy.contains('abbr',date).click()            // here contains method used and only tagname is capture

        
        //Assertion
        
        cy.get('input.react-date-picker__inputGroup__input').each(($el, index) =>
        {
            cy.wrap($el).invoke('val').should('eq', wholeDate[index]);
        })


    })

                                //ANOTHER WAY OF DOING THE SAME ASSERSION                   

    it("From Udemy Comments: Calendar",()=>{
 
        const year="2023"
        const month="October"
        const months="10"
        const date="6"
        const monthDate=month.concat(" ",date,", ",year)
        cy.log(monthDate)
 
        const data=[months,date,year]
 
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("a[href*=offer]").invoke("removeAttr","target").click()
        cy.get("div.react-date-picker__inputGroup").click()
        cy.wait(1000)
        cy.get(".react-calendar__navigation__label").click()
        cy.wait(1000)
        cy.get(".react-calendar__navigation__label").click()
        cy.wait(1000)
        cy.contains("button",year).click()
        cy.wait(1000)
        cy.contains("button",month).click()
        //cy.get("button[class*='react-calendar__tile react-calendar']").eq(Number(month)-1).click()
        cy.wait(1000)
        cy.get("abbr[aria-label='"+monthDate+"']").click()
 
        cy.get("input.react-date-picker__inputGroup__input").each(($e1,index,$list)=>{
            cy.wrap($e1).invoke("val").should("eq",data[index])
        })
 
    })





})
