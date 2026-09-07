            describe('', function()
            {
            it('', function()
            {
            cy.visit("https://www.saucedemo.com/")
            cy.get("input[id='user-name']").type("standard_user")
            cy.get("input[id='password']").type("secret_sauce")
            cy.get("input[id='login-button']").click()

            // cy.url().should('include', 'sauce')
            // .should('eq', 'https://www.saucedemo.com/inventory.html')
            // .should('contain', 'saucedemo')

        //     let ActualName = "Swag Labs";
        //     cy.get("").then ( function(x)
        //     {
        // let ExpectedName = x.text()
        //  expect(ExpectedName).to.eq(ActualName)




        // let actualname = "Products";
        // cy.get(".title").then( function(x)
        // {
        //  let expectedName = x.text()
        //  expect(expectedName).to.equal(actualname)    
        //     })
        let FooterText = "© 2023 Sauce Labs. All rights reserved. Terms of Service | Privacy Policy";
        cy.get(".footer_copy").then (function(x)
    {
        let Expectedfooter = x.text;
        expect(Expectedfooter).to.equal(FooterText)
    })
    });
});






