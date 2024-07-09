import CommonPage from "../page/commonPage";
import CategoryPage from "../page/categoryPage";
import { LoginRegister } from "../Page/loginPage";

const categoryPage = new CategoryPage();
//const commonPage = new CommonPage();
const login = new LoginRegister();
const userData = require('../fixtures/personalInfo.json');

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Pruebas de la categoria de productos', () => {
    beforeEach(() => {
        cy.visit('https://www.casaideas.cl/');
        cy.wait(10000) //timeout
        cy.get('.decline-button').click({force:true});
        login.clickIconLogin();
        //commonPage.userLogin(userData.email, userData.password);
      });
    it('Mostrar las tarjetas en la categoria', () => {
        login.typeEmail(userData.email);
        login.typePassword(userData.password);  
        login.clickOnLogin();
        cy.wait(10000) //timeout
        categoryPage.visitMobileMenu();
        categoryPage.visitMenuProductos();
        categoryPage.visitMenuOutlet();
      });
});

 



