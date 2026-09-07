   import LoginPageLC from "../PageObject/LoginPageLC";
   import LogoutLC from "../PageObject/LogoutLC";


    describe('Login Page Tests', () =>  {

        it('Login test', () => {

        cy.fixture('LoginCred').then((data) => {


        cy.visit(data.URL);

        const login = new LoginPageLC();
        const logout = new LogoutLC();


        login.setUsername(data.username);
        login.setPassword(data.password);
        login.clickSubmit();
      //  login.LogoutLinkVerification()
       // login.VerifyLoginUserAs()
       // login.logoutVerification()
       logout.clickLogout();


    });
    });
    });
