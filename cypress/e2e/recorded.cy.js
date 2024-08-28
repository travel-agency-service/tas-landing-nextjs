describe("recorded test", () => {
  let testData;

  // Load fixture data before any tests run
  before(async () => {
    const data = await cy.fixture("params");
    testData = data;
  });

  it(`this is for testing login flow`, () => {
    cy.visit("https://panel.hobs.ai/signin/"); // visit the landing page
    cy.request(
      `https://jsonplaceholder.typicode.com/todos/${testData.id}`
    ).then((response) => {
      const json = response.body; // Access the response body directly

      cy.get("#\\:R1d9uura\\:-form-item").clear().type("test@test.com");
      cy.get("#\\:R2d9uura\\:-form-item").clear().type(json.title);
      cy.get(".inline-flex").click();
    });
  });
});
