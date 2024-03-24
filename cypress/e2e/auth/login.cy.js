describe('Login page', () => {
  beforeEach('Visit to the Login page', () => {
    cy.visit('/user/login')
  })

  it('TC - 001 Login with valid credentials', () => {
    cy.get('#normal_login_email').type(Cypress.env('email'))
    cy.get('#normal_login_password').type(Cypress.env('password'))
    cy.get('[type="submit"]').click()
    cy.get('button.ant-btn-primary').should('be.visible').and('have.text','Create Client')
    cy.get('[data-qa="userInfoName"]').should('be.visible').and('have.text', 'Alice Cooper')
  })

  it('TC - 014 Check Login with an invalid email(user does not exist)', () => {
    cy.get('#normal_login_email').type('ss@owner.com')
    cy.get('#normal_login_password').type(Cypress.env('password'))
    cy.get('[type="submit"]').click()
    cy.get('.ant-notification-notice-error').should('be.visible').and('have.text', 'Auth failed')
  })

  it('TC - 016 Login with invalid password', () => {
    cy.get('#normal_login_email').type(Cypress.env('email'))
    cy.get('#normal_login_password').type('45689')
    cy.get('[type="submit"]').click()
    cy.get('.ant-notification-notice-error').should('be.visible').and('have.text', 'Auth failed')
  })

  it('TC - 018 Check user can\'t log in without an email', () => {
    cy.get('#normal_login_email').type(Cypress.env('email')).clear()
    cy.get('#normal_login_password').type(Cypress.env('password'))
    cy.contains('[type="submit"]', 'Log in').should('exist').and('be.disabled')

  })

  it('TC - 019 Check user can\'t log in without a password', () => {
    cy.get('#normal_login_email').type(Cypress.env('email'))
    cy.contains('[type="submit"]', 'Log in').should('exist').and('be.disabled')
  })
})
