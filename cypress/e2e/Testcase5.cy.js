   import LoginPageLC from "../PageObject/LoginPageLC";
   import RegistrationPage from '../PageObject/RegistrationPageLC';

    describe('Login Page Tests', () =>  {

        it('Register a user with existing email', () => {

        cy.fixture('LoginCred').then((data) => {
        cy.fixture('Registration').then((registrationData) => {

        cy.visit(data.URL);

        const login = new LoginPageLC();
        const register = new RegistrationPage();

        login.HomepageVerification()
        register.setSignupemail(data.username)
        
        register.setSignupName(registrationData.signupname)
        
        register.clickSignupButton()
        login.emailAlreadyExist()

       

  });

    });
    });
    });