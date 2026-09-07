
describe('My first test', function() 
{
       it('Verifing title', function()
       {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
       })

       it('Verifing Negative title', function()
       {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OArangeHRM')
       })


})
