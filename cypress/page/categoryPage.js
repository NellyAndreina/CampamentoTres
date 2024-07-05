
export default class CategoryPage {

visitMobileMenu(){
    cy.get('.Navbar_megamenu-cms__cBjN3 MegaMenu_megaMenuCms__5k0_O').click(); 
    //cy.get('.Navbar_nav-container-inner__SAqO_')
   // cy.get('.Navbar_nav-container-inner__SAqO_')
}    

visitMenuProductos() {
    cy.get('.MobileMegaMenu_mobile-categories__unxpJ > :nth-child(2) > span > p').first().click();
    //cy.get('https://www.casaideas.cl/').should('be.visible');
}

visitMenuOutlet() {
    cy.get('.menuCmsContentMobile > :nth-child(1) > :nth-child(1) > .columnGroup_root__UEATy > .column_root__siq0I > :nth-child(2)').click();
}
}