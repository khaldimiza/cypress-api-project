import { SwaggerPage } from "./swaggerPage";

describe("Swagger UI tests", () => {
  const page = new SwaggerPage();

describe("Swagger UI tests", () => {
  it("Loads Swagger UI correctly", () => {
    cy.visit("https://reqres.in/api-docs/");
    cy.contains("h2", "ReqRes API").should("be.visible");
  });
});

// it("Clicks Fetch User block", () => {
//   cy.visit("https://reqres.in/api-docs/");

//   cy.get("#operations-default-get_users__id_").click();

//   cy.contains("h4", "Parameters").should("be.visible");
// });
});
