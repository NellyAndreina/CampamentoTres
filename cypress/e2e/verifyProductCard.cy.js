import ProductPage from "../page/productPage";
import { LoginRegister } from "../Page/loginPage";
import CategoryPage from "../page/categoryPage";

const itemData = require('../fixtures/productData.json');
const userData = require('../fixtures/personalInfo.json');
const productPage = new ProductPage();
const login = new LoginRegister();
const categoryPage = new CategoryPage();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Buscar productos', () => {
    beforeEach(() => {
        cy.visit('https://www.casaideas.cl/');
        cy.wait(5000) //timeout
        cy.get('.decline-button').click({force:true});
      });
    it('Mostrar las tarjetas en la categoria', () => {
        login.clickIconLogin();
        login.typeEmail(userData.email);
        login.typePassword(userData.password);  
        login.clickOnLogin();
        cy.wait(5000) //timeout
        categoryPage.closeSecondMenu();
        categoryPage.visitMobileMenu();
        categoryPage.visitMenuProductos();
        categoryPage.visitMenuOutlet();
        productPage.searchItem(itemData.productName);
        productPage.clickOnDesireItem();
        productPage.validateImage();
        productPage.validatePrice(); 
        productPage.addFavorite();
        productPage.clickOnPromotion();
        productPage.clickOnCookies();
        productPage.verifyMenuFavorite();
        productPage.verifyListFavorite();
        productPage.addItemToCart();
      });
});



