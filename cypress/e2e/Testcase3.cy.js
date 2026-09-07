import LoginPageLC from "../PageObject/LoginPageLC";

    describe('Incorrect Login Page Tests', () =>  {

        it('Login with incorrrct password test', () => {

        cy.fixture('LoginCred').then((data) => {


        cy.visit(data.URL);

        const login = new LoginPageLC();

        login.setUsername(data.username);
        login.setPassword(data.incorrectpass);
        login.clickSubmit();
        login.incorrectLoginVerification()

    });
    });
    });