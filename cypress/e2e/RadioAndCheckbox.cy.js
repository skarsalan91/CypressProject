    describe('Radion Buttons', function()
    {
    it('action on radio button', function()
    {
    cy.visit("https://testautomationpractice.blogspot.com/")
  //  cy.get('#post-body-1307673142697428135 > :nth-child(10) > :nth-child(3)').click()
    cy.get('#name').type("John Doe")
    cy.get('#email').type("johndoe@example.com")
    cy.get('#phone').type("123-456-7890")
    cy.get('#textarea').type("This is a sample text.")

    cy.get("input#female").should('be.visible')
    cy.get("input#male").should('be.visible')
    cy.get("input#male").check().should('be.checked')
    cy.get("input#female").should('not.be.checked')


    //to check the ccheckbox
    cy.get('#sunday').check().should('be.checked') // ".should('be.checked')" only verifies that the checkbox is currently checked. It does not perform the action of checking the checkbox.
    cy.get('#sunday').uncheck().should('not.to.be.checked')
    
    //to check the all checkboxes
    cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
  
    // to check the first checkbox
    cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')

    //to check the last checkbox
    cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

  })

    }
    )