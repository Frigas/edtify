/// <reference types="cypress"/>


describe('Login Validation',()=>{


    it('login with valid credentials',()=>{
        cy.visit('https://www.edtify.com/')
        cy.get('.css-1abzdwk > .css-u707vm').click()
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('archibonggodwin965@gmail.com')
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Godwin50058')
        cy.get('.MuiBox-root > .MuiButtonBase-root').click()
             cy.wait(6000)
        cy.get('.css-76x2f2 > .MuiDrawer-root > .MuiPaper-root > [style="padding-top: 20px; background: rgb(252, 252, 252);"] > .MuiList-root > .css-1k0t4ux > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
      
      
   
    })
})
