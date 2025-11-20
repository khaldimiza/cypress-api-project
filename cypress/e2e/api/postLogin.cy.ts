describe("POST Login", () => {
  it("Should return 401 because proxy requires API key", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/login",
      failOnStatusCode: false,
      body: {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      }
    }).then((res) => {
      expect(res.status).to.eq(401);
      expect(res.body.error).to.eq("Missing API key");
    });
  });
});
