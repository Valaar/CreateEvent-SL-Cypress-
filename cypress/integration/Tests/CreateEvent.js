describe("Create New Event", function() {
    it('Sign in', function() {
        cy.visit('https://smartlifepath-client-qa.herokuapp.com/web-site/home')
        cy.get('input[placeholder="Email"]').type('li4.sloboda@gmail.com')
        cy.get('input[placeholder="Password"]').type('Qwerty123')
        cy.get('.mat-button-wrapper').contains('Login').should('be.visible').click()
        //cy.contains('Getting Started').should('be.visible')

        //Create Event
        cy.get(':nth-child(7) > .mat-button-wrapper').contains('Create').click()
        cy.get('.mat-menu-item').contains('Event').should('be.visible').click()
        cy.get('.images').first().click()
        cy.get('.mat-button-toggle-label-content').contains('PUBLIC').should('be.visible').click()
        cy.get('input[placeholder="Event title"]').type('Event Cypress')
        cy.get('.mat-select-value').contains('Select an education category').should('be.visible').click()
        cy.get('.mat-option-text').contains('Pre school').should('be.visible').click()
        cy.get('.textarea > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ')
        cy.get('.mat-button-wrapper').contains('NEXT').should('be.visible').click()
        cy.wait(1000)
        cy.get('.mat-checkbox-label').contains('Online event').click()
        cy.get(':nth-child(7) > .float-right').contains('NEXT').click()
        cy.get('.mb-n2 > .float-right').contains('NEXT').click()
        cy.get('#cdk-step-content-0-3 > :nth-child(4) > .float-right > .mat-button-wrapper').contains('Create').click()
        cy.wait(3000)
        cy.get('.mat-button-wrapper').contains(' Delete ').click()
        cy.get('.mat-button-wrapper').contains('Yes').click()

        cy.contains('Getting Started').should('be.visible')

    })
})


