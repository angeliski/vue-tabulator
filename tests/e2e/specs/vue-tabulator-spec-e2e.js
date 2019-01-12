// https://docs.cypress.io/api/introduction/api.html

describe('VueTabulator', () => {
  it('Render value in the table', () => {
    cy.visit('/');
    cy.contains('.tabulator-cell', 'Teste');
  });

  it('Bind model to tabulator', () => {
    cy.visit('/');
    cy.get('#row').click();
    cy.contains('.tabulator-cell', 'Teste 2');
  });

  it('Bind options to tabulator', () => {
    cy.visit('/');
    cy.get('#column').click();
    cy.contains('.tabulator-col-title', 'age');
  });
});
