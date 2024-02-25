/// <reference types="cypress"/>



describe('Login Validation',()=>{


    before(()=>{
        cy.visit('/')
        cy.get('.css-1abzdwk > .css-u707vm').click()
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('archibonggodwin965@gmail.com')
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Godwin50058')
        cy.get('.MuiBox-root > .MuiButtonBase-root').click()
        cy.wait(6000)
    
    })
    after(()=>{

    })

    it('login with valid credentials',()=>{
        
              cy.contains("Instructor").click()
        cy.wait(6000)
        cy.contains('Create A Centre').click()
        cy.wait(6000)
        cy.get(':nth-child(4) > .MuiPaper-root > .MuiCardActionArea-root > .MuiCardContent-root > .css-1gzjj2t > .MuiStack-root > .MuiButton-outlinedSecondary').click()
        cy.get('.css-nuqp4w > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('EdtifyDom')
        cy.wait(5000)
        cy.get(':nth-child(2) > [rows="1"]').type("this is expected to allow users to visit domain and have access to content")
        cy.get(':nth-child(3) > [rows="1"]').type("This will give users full access to courses")
        cy.wait(5000)
        cy.get(':nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        cy.wait(6000)
        cy.get('.css-5vb4lz > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('ed-website.com')
        cy.get('.MuiFormGroup-root > :nth-child(3) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        cy.wait(6000)
        cy.get('.MuiButton-root').click()
        cy.wait(3000)
        

        
        
    
      
   
    })
})
