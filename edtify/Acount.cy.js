/// <reference types="cypress"/>


describe('creating edtify account',()=>{


    it('Validate that users can successfully create an account',()=>{
        cy.visit('https://www.edtify.com/')
        cy.get('.MuiBox-root > .css-1abzdwk > .MuiButtonBase-root').click()
        cy.get(':nth-child(1) > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Godwin')
        cy.get('.css-ikzlcq > :nth-child(1) > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Archibong')
        cy.get('.css-13sljp9 > .MuiInputBase-root > .MuiInputBase-input').type('archibonggodwin965@gmail.com')
        cy.get('.form-control').type('8167350058')
        cy.get(':nth-child(5) > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Godwin50058')
        cy.get('.MuiBox-root > .MuiButtonBase-root').type('Godwin50058')
        cy.get('.MuiBox-root > .MuiButtonBase-root').click()
        cy.screenshot();
   
    })
})