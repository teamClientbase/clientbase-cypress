describe('Profile', ()=> {
  beforeEach('Login by API', () => {
    cy.loginByToken()
    cy.visit('/client')
  })

  it('TC-025 Logout', () => {
    cy.get('[data-qa="userInfoName"]').click()
    cy.get('[data-qa="logout"]').click()
    cy.url().should('include','/user/login')
  })
})
