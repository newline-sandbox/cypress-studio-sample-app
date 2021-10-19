describe('Movie app', () => {
  it('should show all results for movies that contain "Star Wars" in their titles', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get('.navbar-top-links > :nth-child(3) > a').click();
    cy.get('.search-label').should('contain', 'Search Movie Titles Here:'); // user added
    cy.get('.search-input').clear();
    cy.get('.search-input').type('Star Wars');
    cy.get('[type="submit"]').click();
    cy.get('.card-component').should('have.length', 20); // user added
    cy.get(':nth-child(2) > .breakpoint__medium-up > .movie-component > .movie-poster').click();
    cy.get('.movie-details-info__overview').should('contain', 'Movie Overview'); // user added
    cy.get('div').should('contain', "1977-05-25") // user added
    cy.get('div').should('contain', "8.2") // user added
    cy.get('.movie-details-reviews > :nth-child(3)').click();
    cy.get('.fa').click();
    /* ==== End Cypress Studio ==== */
  })
})