import { booking, api_method } from '../endpoints/endpoints'

/* eslint-disable no-undef */
context('Booking API testing', () => {

    it('Website homepage is able to show.', () => {
        cy.visit('/')
        cy.contains('Restful-Booker')
    })

    it('get a list of booking.', () => {
        cy.request(api_method.get, booking.booking_url).then(
            (res) => {
                expect(res.status).to.eq(200)
                cy.log(res.body[0])
                expect(res.body[0]).to.have.property('bookingid')
            }
        )
    })

    it('Add a booking.', () => {
        cy.fixture('bookingData.json').then((booking_body) => {
            cy.request(api_method.post, booking.booking_url, booking_body).then(
                (res) => {
                    expect(res.status).to.eq(200)
                    cy.log(res.body)
                    expect(res.body).to.have.property('bookingid')
                    expect(res.body).to.have.property('booking')
                    expect(res.body.booking).to.have.property('firstname')
                    expect(res.body.booking.lastname).to.have.string(booking_body.lastname)
                }
            )
        })
    })

    it.skip('delete a booking by id.', () => {
        cy.add_a_booking().then((res) => {
            cy.log(res.body.bookingid)
            let id = res.body.bookingid
            cy.request(api_method.delete, booking.booking_url + id).then(
                (res) => {
                    expect(res.status).to.eq(200)
                    cy.log(res.body)
                }
            )
        })
    })

    it('get a booking by id.', () => {
        cy.add_a_booking().then((res) => {
            cy.log(res.body.bookingid)
            var id = res.body.bookingid
            cy.request(api_method.get, booking.booking_url + id).then(
                (res) => {
                    cy.log(res)
                    expect(res.status).to.eq(200)
                    cy.fixture('bookingData.json').then((booking) => {
                        expect(res.body.lastname).to.eq(booking.lastname)
                    })
                }
            )
        })
    })

})