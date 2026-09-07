describe('XpathLocator', function ()
{
    it('Find number of locator', function()
{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.xpath("//h6[contains(@class, 'orangehrm-logo-name')]").contains('have.text', 'OrangeHRM OS 5.9')

})

 it('Find number of locator', function()
{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.xpath("//h6[contains(@class, 'orangehrm-logo-name')]").contains('have.text', 'OrangeHRM OS 5.9')

})

})