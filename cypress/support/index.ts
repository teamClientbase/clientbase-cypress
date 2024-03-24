declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Login in using token & userId
     * @example
     * cy.loginByToken()
     */
    loginByToken(): Chainable<any>
    /**
     * Login using email & password
     *  @example
     *  cy.login('example@gmail.com', '111')
     */
    login(email: string, password: string): Chainable<any>
  }
}
