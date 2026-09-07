
describe('Dropdown function', function ()
{
    // it('Handle Dropdown with select', function()
    // {
     
    // cy.visit ("https://phptravels.com/demo/")
    
    // cy.get('.country_id')                               // get the element
    // .select('American Samoa +1684')                     // select the value
    // .should('have.value','American Samoa +1684')        // verify the selected value 

    // })

    // it('Handle Dropdown without Search text box', function()
    // {
    // cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    // cy.get("#select2-billing_country-container").click()
    // cy.get(".select2-search__field").type("Japan").type('{enter}')
    // cy.get("#select2-billing_country-container").should('have.text', 'Japan')
    // })

    // it('dropdown auto suggestion', function()
    //     {
    //         cy.visit("https://www.wikipedia.org/")
    //         cy.get("#searchInput").type("Delhi")
    //         cy.get(".suggestion-title").contains("Delhi University").click()
    //     }
    
    it('Dynamic Dropdown', function() {
    cy.visit("https://www.google.com/")
    cy.get('#APjFqb').type("Italy")

         cy.get('div.wM6W7d>span').should('have.length', 12)
        

    cy.get('div.wM6W7d>span').each(($el, index, $list) => {
        
        if ($el.text() == 'italy currency')
        
        {
            cy.wrap($el).click()
        }
    })

})
})