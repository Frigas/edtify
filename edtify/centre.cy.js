/// <reference types="cypress"/>


describe('Login Validation',()=>{


    it('login with valid credentials',()=>{
        cy.visit('https://www.edtify.com/')
        cy.get('.css-1abzdwk > .css-u707vm').click()
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('archibonggodwin965@gmail.com')
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Godwin50058')
        cy.get('.MuiBox-root > .MuiButtonBase-root').click()
        
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-disableElevation.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-disableElevation.jss78.css-1qpwwxv').click()
        
    
      
   
    })
})