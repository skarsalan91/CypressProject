// import ContactUsLC from "../PageObject/ContactUsLC";


// describe('Test Contact us page', () => 
// {
// it('verify the Test Contact us page', ()=>{
//     cy.fixture('contactUsDetails').then((datas) =>{

//         cy.visit(datas.ContactURL);
//     const contUs = new ContactUsLC();
    
//     contUs.VerifyGetInTouchText()
//     contUs.VerifyContactName(datas.contactnametext)
//     contUs.verifyContactEmail(datas.contactemailtext)
//     contUs.verifyContactSubject(datas.contactsubjecttext)
//     contUs.verifyContactYourMessage(datas.ContactYourMessagetext)
//     contUs.verifyChooseFile()
//     contUs.verifyContactSubmit()
// })
// })
// })

import ContactUsLC from "../PageObject/ContactUsLC";

describe('Test Contact us page', () => {

    it('verify the Test Contact us page', () => {

        cy.fixture('contactUsDetails').then((datas) => {

            cy.visit(datas.URL);

            const contUs = new ContactUsLC();

          //  contUs.VerifyGetInTouchText();
            contUs.VerifyContactName(datas.contactnametext);
            contUs.verifyContactEmail(datas.contactemailtext);
            contUs.verifyContactSubject(datas.contactsubjecttext);
            contUs.verifyContactYourMessage(datas.ContactYourMessagetext);
            contUs.verifyChooseFile();
            contUs.verifyContactSubmit();

        });
    });
});

