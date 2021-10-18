describe('Movie app', () => {
  it('should show all results for movies that contain "Star Wars" in their titles', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('.navbar-top-links > :nth-child(3) > a').click();
    cy.get('.search-input').clear();
    cy.get('.search-input').type('Star Wars');
    cy.get('[type="submit"]').click();
    cy.get(':nth-child(2) > .breakpoint__medium-up > .movie-component > .movie-poster').click();
    cy.get('.movie-details-reviews > :nth-child(3)').click();
    cy.get('.fa').click();
    /* ==== End Cypress Studio ==== */
  })
})