    import 'cypress-file-upload'
import { drop, includes } from 'lodash'
    describe('File Upload', function()
    {
    it('single file upload', function() {
            cy.visit("https://automationexercise.com/contact_us")
            cy.get("locator").attachedfile('path of fixture where file is uploaded')
            cy.get("locator of button").click()
    })
    it('Drag and Drop', ()=>{

    cy.visit("http://the-internet.herokuapp.com/upload")
    cy.get("#drag-drop-upload").attachedfile('pngegg.png',{subjectType : 'drag-n drop'})
    })
            
    it('Multiple File', ()=>{

    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
    cy.get("#filesToUpload").attachedFile(['pngegg.png','test.jpg'])
    
    })

    it.only('Inside Shadow DOM', ()=>{
    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
cy.get("input[smart-id='browseInput']", { includeShadowDom: true }).attachFile('pngegg.png');
      //  cy.wait(5000);
    })    

})
    