    import TestcasePageLC from "../PageObject/TestcasePageLC";
    
    
    
    describe ('Testcase Page', ()=>{

    it('Verify testcase page ',()=>{
    
        cy.fixture("LoginCred").then((data) =>{
             cy.visit(data.URL);

            const TestPg = new TestcasePageLC();
            TestPg.ClickOnAutomationExercise()
            TestPg.ClicktestCaseButton()
            TestPg.VerifytestcaseText()
    })

        
    })

    })