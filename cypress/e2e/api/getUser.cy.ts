describe("GET Single User", () => {
  it("Fetches user 2", () => {
    cy.request("GET", "https://reqres.in/api/users/2").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data.id).to.eq(2);
      expect(res.body.data.email).to.contain("@");
    });
  });
});
