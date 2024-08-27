describe("recorded test", () => {
  it("this is for testing login flow in tas project", () => {
    cy.visit("https://panel.hobs.ai/signin/"); //visit the landing page
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#\\:R1dpuura\\:-form-item').clear('m');
    cy.get('#\\:R1dpuura\\:-form-item').type('mahooresorkh@gmail.com');
    cy.get('#\\:R2dpuura\\:-form-item').clear();
    cy.get('#\\:R2dpuura\\:-form-item').type('@345Wert');
    cy.get('.inline-flex').click();
    cy.get('#\\:R1dpuura\\:-form-item').clear('mahooresorkh@gmail.com');
    cy.get('#\\:R1dpuura\\:-form-item').type('mahooresorkh@test.ir');
    /* ==== End Cypress Studio ==== */
  });
});
