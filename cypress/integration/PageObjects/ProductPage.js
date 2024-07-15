  class ProductPage
  {
    getCheckoutPage()
    {
      return cy.get('.nav-link.btn.btn-primary')
    }

    getCheckoutButton()
    {
      return cy.get('.btn.btn-success')
    }

    getCountry()
    {
      return cy.get('#country')
    }

    getCountryOption()
    {
      return cy.get('.suggestions > ul > li > a')
    }
  }

  export default ProductPage;