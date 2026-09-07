describe ('cssLocator', function()
{
   it('cssLocator', function()
{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.get("[name='username']").type("Admin")
cy.get("[name='password']").type("admin123")
//cy.get("button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button").click() // css locator using class
cy.get("[type='submit']").click()                                      //css locator using attribute
cy.get("img[alt='client brand banner']").should('have.attr', 'src')

})
})
