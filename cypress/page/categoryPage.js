export default class CategoryPage {

visitMenu(){
    cy.get('.inline-block').click
}    
visitMenuProductos() {
    cy.get('.MobileMegaMenu_submenu-mobile-back__XPHIU').click;
    cy.get('https://www.adidas.cl/hombre').should('be.visible');
}
visitMenuOutlet() {
    cy.get('.menuCmsContentMobile > :nth-child(1) > :nth-child(1) > .columnGroup_root__UEATy > .column_root__siq0I > :nth-child(2)').click
}
}