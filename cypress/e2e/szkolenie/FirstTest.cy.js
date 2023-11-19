/// <reference types="cypress" />

import user from "../../fixtures/userData.json"

let number = randomIntiger(1,999)
let email = 'email.szkolenie' + number + '@email.com'

beforeEach(() => {
    cy.visit('/') //adres z pliku konfiguracyjnego
    //cy.visit('https://automationexercise.com/')
    cy.url().should('include', 'automationexercise')
  })



it('Test Case 1', () => {


    cy.log(number)
    cy.log('twój email to: ', email)

    cy.log('jakiś test')
    //cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.contains('Login').click()

    //cy.get('.signup-form > h2').should('have.text', 'New User Signup!')
    cy.contains('New User Signup!').should('exist')

    //cy.get('[data-qa="signup-name"]').type('Imię')
    cy.get('[data-qa="signup-name"]').type(user.user1.login)

    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()
    cy.contains('Enter Account Information').should('exist')
    cy.get('#id_gender2').click()
    //cy.get('[data-qa="name"]').should('have.value', 'Imię')
    cy.get('[data-qa="name"]').should('have.value', user.user1.login)

    cy.get('[data-qa="email"]').should('have.value', email)
    cy.get('[data-qa="password"]').type('1234567890')
    cy.get('[data-qa="days"]').select('1')
    cy.get('[data-qa="months"]').select('January')
    cy.get('[data-qa="years"]').select('2000')
    cy.get('#newsletter').check()
    cy.get('#optin').check()

    cy.get('[data-qa="first_name"]').type('Imię')
    cy.get('[data-qa="last_name"]').type('Szkolenie')
    cy.get('[data-qa="company"]').type('JIT')
    cy.get('[data-qa="address"]').type('Adres')
    cy.get('[data-qa="country"]').select('Australia')
    cy.get('[data-qa="state"]').type('Pomorze')
    cy.get('[data-qa="city"]').type('Miasto')
    cy.get('[data-qa="zipcode"]').type('11-111')
    cy.get('[data-qa="mobile_number"]').type('111222333')
    cy.get('[data-qa="create-account"]').click()
    cy.contains('Account Created!').should('exist')
    cy.get('[data-qa="continue-button"]').click()
    cy.contains('Logged in as ' + user.user1.login).should('exist')
    // cy.get('.shop-menu > .nav > :nth-child(5) > a').click({force:true})
    // cy.contains('Account Deleted!').should('exist')
    // cy.get('[data-qa="continue-button"]').click()

});

it('Test Case 2', () => {

    cy.contains('Login').click()
    cy.contains('Login to your account').should('exist')
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type('1234567890')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as user1').should('exist')
    // cy.get('.shop-menu > .nav > :nth-child(5) > a').click({force:true})
    // cy.contains('Account Deleted!').should('exist')
    // cy.get('[data-qa="continue-button"]').click()
});

it('Test Case 3', () => {
    cy.url().should('include', 'automationexercise')
    cy.contains('Login').click()
    cy.contains('Login to your account').should('exist')
    cy.get('[data-qa="login-email"]').type('e@e.e')
    cy.get('[data-qa="login-password"]').type('1234567890')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Your email or password is incorrect!').should('exist')
    // cy.get('.shop-menu > .nav > :nth-child(5) > a').click({force:true})
    // cy.contains('Account Deleted!').should('exist')
    // cy.get('[data-qa="continue-button"]').click()
});

it('Test Case 4', () => {
    cy.url().should('include', 'automationexercise')
    cy.contains('Login').click()
    cy.contains('Login to your account').should('exist')
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type('1234567890')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as user1').should('exist')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.url().should('include', 'https://automationexercise.com/login')
});


function randomIntiger(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}