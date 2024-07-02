export default class CategoryPage {

visitPageHombres() {
    cy.get('a[href="/hombre"]').trigger('mouseover');
    cy.get('https://www.adidas.cl/hombre').should('be.visible');
}
visitPageOffer() {
    cy.get('a[href="/ropa-outlet-hombre"] div').eq(0)
}
}