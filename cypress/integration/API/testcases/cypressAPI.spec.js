/* eslint-disable jest/valid-expect-in-promise */
import {booking, api_method} from '../endpoints/endpoints'

/* eslint-disable no-undef */
context('API testing', () => {

    it('API get method with query', () => {
        // will execute request
        // https://jsonplaceholder.cypress.io/comments?postId=1&id=3
        cy.request({
          url: 'https://jsonplaceholder.cypress.io/comments',
          qs: {
            postId: 1,
            id: 3,
          },
        }).then((res) =>{
            // cy.log(res.body[0].postId)
            expect(res.status).to.eq(200)
            expect(res.body[0].postId).to.eq(1)
            expect(res.body[0].id).to.eq(3)
        })
      })

})