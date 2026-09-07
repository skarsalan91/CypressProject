class ContactUsLC {

GetInTouchText = ".title text-center";
ContactName = "input[name='name']";
ContactEmail = "[data-qa='email']";
ContactSubject = "input[name='subject']";
ContactYourMessage = "[data-qa='message']";
ChooseFile = "input[type='file']";
ContactSubmit = "input[type='submit']";
FileUploadStatus = ".status";



VerifyGetInTouchText()
{
cy.get(this.GetInTouchText).should('have.text', 'Get In Touch')

}
VerifyContactName(contactnametext)
{
cy.get(this.ContactName).type(contactnametext)
}
verifyContactEmail(contactemailtext)
{
    cy.get(this.ContactEmail).type(contactemailtext)
}
verifyContactSubject(contactsubjecttext)
{
cy.get(this.ContactSubject).type(contactsubjecttext)
}
verifyContactYourMessage(ContactYourMessagetext)
{
    cy.get(this.ContactYourMessage).type(ContactYourMessagetext)
}
verifyChooseFile()
{
    cy.get(this.ChooseFile).attachFile('pngegg.png');
}
verifyContactSubmit()
{
cy.get(this.ContactSubmit).click()
}
verifyFileUploadStatus()
{
    cy.get(this.FileUploadStatus).should('have.text', 'Success! Your details have been submitted successfully.')
}


}
export default ContactUsLC;

