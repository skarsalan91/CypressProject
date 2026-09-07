import RegistrationPage from '../PageObject/RegistrationPageLC';
import { data } from "ospath";

describe('RegistrationPage', ()=>
{
 it('test Registration Page', ()=>
{
cy.fixture('LoginCred').then((data) =>{
    cy.fixture('Registration').then((registrationData) => {

    cy.visit(data.URL);

        const register = new RegistrationPage();

     //   register.isHomePageDisplayed().shoulds('be.visible')
        register.clickSignup()
        register.verifyNewUserSignupIsDisplayed()
        register.setSignupName(registrationData.signupname)
        register.setSignupemail(registrationData.email)
        register.clickSignupButton()
        register.clickRadioButton()
        register.verifyAccountInformationText()
        register.clickRadioButton()
        register.setRegistrationPassowrd(registrationData.RegPassword)
        register.setDOB()
        register.checkNewLetterCheckbox()
        register.setFirstName(registrationData.firstname)
        register.setLastName(registrationData.lastname)
        register.setCompany(registrationData.company)
        register.setAddress(registrationData.address)
        register.setCountry()
        register.setState(registrationData.State)
        register.setCity(registrationData.City)
        register.setZipcode(registrationData.Zipcode)
        register.setMobile(registrationData.Mobile)

});
});
});
});