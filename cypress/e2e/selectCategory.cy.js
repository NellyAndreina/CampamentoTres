import CommonPage from "../page/commonPage";
import CategoryPage from "../page/categoryPage";

const categoryPage = new CategoryPage();
const commonPage = new CommonPage();
const userData = require('../fixtures/personalInfo.json');

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Pruebas de la categoria de productos', () => {
    beforeEach(() => {
        cy.visit('https://www.casaideas.cl/');
        cy.wait(5000) //timeout
        cy.get('.decline-button').click({force:true});
        commonPage.userLogin(userData.email, userData.password);
      });
    it('Mostrar las tarjetas en la categoria', () => {
        categoryPage.visitMobileMenu();
        categoryPage.visitMenuProductos();
        categoryPage.visitMenuOutlet();
      });
});

 



