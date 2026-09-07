class LogoutLC
{
      LogoutlinkLC = ".shop-menu > .nav > :nth-child(4) > a";
        incLoginVerify = "input[type='password']";
        SignupLoginLink = "[class=['fa fa-lock']";

    //  VerifyLoginUserAs()
    // {
    //     cy.get(":nth-child(10) > a").should('be.visible');
    // }
    clickLogout()
    {
        cy.get(this.LogoutlinkLC).click()
    }
   logoutVerification()
    {
        cy.get(this.SignupLoginLink).should('be.visible')
    }
}
 export default LogoutLC;