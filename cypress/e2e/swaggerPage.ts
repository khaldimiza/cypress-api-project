export class SwaggerPage {
  visit() {
    cy.visit("https://reqres.in/api-docs/#/");
  }

  getSection(title: string) {
    return cy.contains("span", title);
  }

  expandEndpoint(endpoint: string) {
    cy.contains("div.opblock-summary", endpoint).click();
  }
}
