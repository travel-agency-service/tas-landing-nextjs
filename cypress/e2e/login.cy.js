describe("login page", () => {
  it("this is for testing login flow in tas project", () => {
    cy.visit("https://panel.hobs.ai/signin"); //visit the login page

    cy.get('input[type="email"]').as("emailField"); // select email field and assign an alias
    cy.get("@emailField").clear(); //remove the initial content
    cy.get("@emailField").type("mahooresorkh@gmail.com"); //fill it out with defined value

    cy.get('input[type="password"]').type("Qwer!234Y$DF3ve9uf"); // select password field and fill it out with defined value

    cy.intercept("POST", "https://panel.hobs.ai/signin").as("loginRequest"); //adjust the api endpoint

    cy.get('button[type="submit"]').click(); //click on submit button

    //wait for the api to fetch the response then test and process the response
    cy.wait("@loginRequest", { timeout: 20000 }).then((interception) => {
      expect(interception.response.statusCode).to.eq(303);
      console.log(interception.response.body);
      // expect(interception.response.body).to.have.property("name", "Alireza");
    });
  });
});
