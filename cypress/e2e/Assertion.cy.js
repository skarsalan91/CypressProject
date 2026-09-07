describe('test the assertion', function()
{
    it('should display the correct title',function()
{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   
    // cy.url().should('contain','login')  // compare url with login
    // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //compare url with exact url
    // cy.url().should('include','orangehrmlive') //compare url with include
    
    
    // .should('contain','login')                                   //another way of writing the above 3 lines 
    // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // .should('include','orangehrmlive')

    // cy.title().should('include',"Orange")
    //   .and('eq',"OrangeHRM")
    //   .and('contain',"HRM")  

      cy.get('.orangehrm-login-branding > img').should('be.visible')
      .should('exist')

      cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Username']").should('have.value','Admin')      
      


    //console.log(cy.title())
})
})
