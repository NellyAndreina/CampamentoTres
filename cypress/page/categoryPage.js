
export default class CategoryPage {

visitMobileMenu(){
    cy.get('.Navbar_nav-container-inner__SAqO_ > .Navbar_megamenu-cms__cBjN3 > .DesktopMegamenu_desktop-megamenu__SwitM > .opacity-100').click();
}

visitMenuProductos() {
    cy.get('.MobileMegaMenu_mobile-categories__unxpJ > :nth-child(2) > span > p').first().click();
    //cy.get('https://www.casaideas.cl/').should('be.visible');
}

visitMenuOutlet() {
    cy.wait(4000)
    cy.get('span > strong > a').click();
    //cy.get('.menuCmsContentMobile > :nth-child(1) > :nth-child(1) > .columnGroup_root__UEATy > .column_root__siq0I > :nth-child(2) > p').click({force:true});
}

closeSecondMenu(){
    cy.get('.exponea-close').click();
}
}