describe('API Testing', () => {
    
   
    
    it('GET - read', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('of undefined')
              done()
              return false
            });
        cy.request('https://api.nationalize.io?name=nathaniel').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body).has.property("name","nathaniel");
            expect(response.body).has.property("country"); 
            expect(response.body.name.length).to.equal(9)
            expect(response.body.country).to.be.a('array')
            cy.log(JSON.stringify(response.body))
           
        })
    })
    it('GET - read', () => {
        cy.request('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.duration).to.not.be.greaterThan(1000)
            expect(response.body).has.property("data");
            expect(response.body).has.property("source");
            expect(response.body.data).to.be.a('array')
            expect(response.body.source).to.be.a('array')
            cy.log(JSON.stringify(response.body))
           
        })
    })




  
   
})