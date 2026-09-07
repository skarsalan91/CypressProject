    class LoginPageLC {
        HomePage = ".nav > :nth-child(1) > a";
        UserNameLC = "[data-qa='login-email']";
        PasswordLC = "[data-qa='login-password']";
        LoginButtonLC = "[data-qa='login-button']";
        LogoutlinkLC = ".shop-menu > .nav > :nth-child(4) > a";
        emailExist = ".signup-form > form > p";
      
     HomepageVerification()
    {
            cy.get(this.HomePage).should('contain', ' Home')
    }
    emailAlreadyExist()
    {
        cy.get(this.emailExist).should('contain', 'Email Address already exist!')
    }
    
    setUsername(username) 
    {
        cy.get(this.UserNameLC).type(username)
    }

    setPassword(password)
    {
        cy.get(this.PasswordLC).type(password)

    }
 
    clickSubmit()
    {
        cy.get(this.LoginButtonLC).click()

    } 
    LogoutLinkVerification()
    {
        cy.get(this.LogoutlinkLC).contains('Logout')
    }
    incorrectLoginVerification()
    {
        cy.get(this.incLoginVerify).should('be.visible')
    }
   

}
    export default LoginPageLC;