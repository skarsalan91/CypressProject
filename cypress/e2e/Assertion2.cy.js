describe('testing Assertion', function()

    {
it('Launching of URL', function()
    {
    cy.visit("https://qaplayground.com/auth/sign-in")
//     //cy.get("input[id='email']").type("shaikharsalan123@gmail.com")
//     cy.get('[data-testid="email-input"]').type("shaikharsalan123@gmail.com")
//    // cy.get("input[id='password']").type("Arsalan@123")
//     cy.get('[data-testid="password-input"]').type("Arsalan@123")
//     //cy.get("button[type='submit']").click()
//     cy.get('[data-testid="sign-in-submit"]').click()
    let actualHeader = "Welcome back"
   cy.get('.auth-module__Cgra4q__auth-heading').then( function(x)
{
    let expectedHeader = x.text()
    expect(expectedHeader).to.equal(actualHeader)
})


    })
    })