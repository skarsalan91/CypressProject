    class RegistrationPage {

        homePageHeading = ".active > :nth-child(1) > h2";
        signupLink = ".shop-menu > .nav > :nth-child(4) > a";
        newUserSignupText = ".signup-form > h2";
        signupName = "[data-qa='signup-name']";
        signupEmail = "[data-qa='signup-email']";
        SignupButton = "[data-qa='signup-button']";

        accountInformationText = ":nth-child(1) > b";
        titleRadio = ":nth-child(3) > .top > [data-qa='title'] > span > [name='title']"
        RegistrationPassword = "[data-qa='password']";
        DayDropdown = "#days";
        MonthDropdown = "#months";
        YearDropdown ="#years";

        NewLetterCheckbox = "[name='newsletter']";
        firstNameLC = "[data-qa='first_name']";
        lastNameLC = "[data-qa='last_name']";
        companyLC = "[data-qa='company']";
        AddressLC ="[data-qa='address']";
        ContryLC = "#country";
        StateLC = "[data-qa='state']";
        CityLC = "[data-qa='city']";
        ZipcodeLC ="[data-qa='zipcode']"; 
        MobileLC = "[data-qa='mobile_number']";
        createAccountButtonLC = "[data-qa='create-account']";
        accountCreatedConfirmation =".col-sm-9 > :nth-child(2)";
        continueButton="[data-qa='continue-button']";
        logoutVeification = ".shop-menu > .nav > :nth-child(4) > a";
        delete = ".shop-menu > .nav > :nth-child(5) > a";
        accountDelete = ".col-sm-9 > :nth-child(2)";

    isHomePageDisplayed() 
    {
        cy.get(this.homePageHeading)
    }

    clickSignup()
    {
        cy.get(this.signupLink).click()

    }
 
    verifyNewUserSignupIsDisplayed()
    {
        cy.get(this.newUserSignupText).should('be.visible')
    }

    
    setSignupName(signupname)
    {
        cy.get(this.signupName).type(signupname)

    }
    setSignupemail(email)
    {
        cy.get(this.signupEmail).type(email)

    }

    clickSignupButton()
    {
        cy.get(this.SignupButton).click()

    }

    verifyAccountInformationText()
    {
        cy.get(this.accountInformationText).should('be.visible')
    }


      clickRadioButton()
    {
        cy.get(this.titleRadio).click()

    }
    setRegistrationPassowrd(RegPassword)
    {
        cy.get(this.RegistrationPassword).type(RegPassword)
    }
    setDOB()
    {
        cy.get(this.DayDropdown).select('15').should('have.value','15')
        cy.get(this.MonthDropdown).select('May').should('have.value','5')
        cy.get(this.YearDropdown).select('1991').should('have.value','1991')
    }
    checkNewLetterCheckbox()
    {
        cy.get(this.NewLetterCheckbox).check()
    }
    setFirstName(firstname)
    {
        cy.get(this.firstNameLC).type(firstname)
    }
    setLastName(lastname)
    {
        cy.get(this.lastNameLC).type(lastname)
    }
      setCompany(company)
    {
        cy.get(this.companyLC).type(company)
    } 
     setAddress(address)
    {
        cy.get(this.AddressLC).type(address)
    } 
    setCountry()
    {
        cy.get(this.ContryLC).select('United States').should('have.value','United States')
    }
     setState(State)
    {
        cy.get(this.StateLC).type(State)
    }
    setCity(City)
    {
        cy.get(this.CityLC).type(City)
    } 
      setZipcode(Zipcode)
    {
        cy.get(this.ZipcodeLC).type(Zipcode)
    } 
    setMobile(Mobile)
    {
        cy.get(this.MobileLC).type(Mobile)
    } 
    setcreateAccountButton()
    {
        cy.get(this.createAccountButtonLC).click()
    } 
    

}


    export default RegistrationPage;