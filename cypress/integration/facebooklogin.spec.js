
const emails = ['andrewkhr20@gmail.com', 'aazm03935@gmail.com'];
const passwords=['01211782855','01096057485']

describe('quiz', function(){
    emails.forEach(emails => {
        passwords.forEach(passwords => {

    it(' case1', function(){
        cy.visit('https://ar-ar.facebook.com/')
        cy.get('.fcb > a').click()
        cy.wait(6000)

        cy.wait(6000)
        cy.get('[data-testid="royal_email"]').type(emails)
        cy.get('[data-testid="royal_pass"]').type(passwords)
        cy.wait(6000)
        cy.get('[data-testid="royal_login_button"]').click()
        cy.wait(6000)

       
       
    })

})

    })

})