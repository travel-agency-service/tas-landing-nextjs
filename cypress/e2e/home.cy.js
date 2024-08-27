describe("landing page", () => {
  it("this is for testing login flow in tas project", () => {
    cy.visit("http://localhost:5000/"); //visit the landing page

    cy.viewport(2000, 1000);

    cy.get("input#name").type("Alireza"); //get input by Id and fill it out with defined value

    cy.get("input#email").type("mahooresorkh@gmail.com"); //get input by Id and fill it out with defined value

    cy.get("textarea#message").type("hi there..."); //get textarea by Id and fill it out with defined value

    cy.get('a[aria-label="Signup/Login"]').click(); //get link by aria-label value and click on it

    console.log("ok");
  });
});
