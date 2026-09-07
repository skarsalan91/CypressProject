class TestcasePageLC 
{
AutomationExercise = "img"; 
testCaseButton = ".active > :nth-child(1) > .test_cases_list > .btn";
testcaseText = "b"; 

ClickOnAutomationExercise()
{
    cy.get(this.AutomationExercise).click()
}

ClicktestCaseButton()
{
    cy.get(this.testCaseButton).click()
}
VerifytestcaseText()
{
    cy.get(this.testcaseText).should('to.have','Test Cases')
}

}
export default TestcasePageLC;