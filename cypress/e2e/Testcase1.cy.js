   import LoginPageLC from "../PageObject/LoginPageLC";

    describe('Login Page Tests', () =>  {

        it('Login test', () => {

        cy.fixture('LoginCred').then((data) => {


        cy.visit(data.URL);

        const login = new LoginPageLC();

        login.setUsername(data.username);
        login.setPassword(data.password);
        login.clickSubmit();
        login.LogoutLinkVerification()

    });
    });
    });

// import LoginPageLC from "../PageObject/LoginPageLC";

// describe('Login Page Tests', () => {

//     it('Login Test', () => {

//         cy.fixture('LoginCred').then((data) => {

//             cy.visit(data.URL);

//             const login = new LoginPageLC();

//             login.setUsername(data.username);
//             login.setPassword(data.password);
//             login.clickSubmit();

//         });

//     });

// });