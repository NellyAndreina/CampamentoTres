import { LoginRegister } from "../Page/loginPage";
import CategoryPage from "../page/categoryPage";
import ProductPage from "../page/productPage";
import VerifyShoppingCart from "../page/shoppingCart";

const itemData = require('../fixtures/productData.json');
const userData = require('../fixtures/personalInfo.json');
const checkoutData = require('../fixtures/checkoutInf.json');
const productPage = new ProductPage();
const login = new LoginRegister();
const categoryPage = new CategoryPage();
const shoppingCart = new VerifyShoppingCart();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Buscar productos', () => {
  beforeEach(() => {
    cy.visit('https://www.casaideas.cl/');
    cy.wait(5000) //timeout
    cy.get('.decline-button').click({ force: true });
  });
  it('Mostrar el carro de compras y realizar el checkout', () => {
    login.clickIconLogin();
    login.typeEmail(userData.email);
    login.typePassword(userData.password);
    login.clickOnLogin();
    cy.wait(5000) //timeout
    //categoryPage.closeSecondMenu();
    categoryPage.visitMobileMenu();
    categoryPage.visitMenuProductos();
    categoryPage.visitMenuOutlet();
    productPage.searchItem(itemData.productName);
    productPage.clickOnDesireItem();
    productPage.validateImage();
    productPage.validatePrice();
    productPage.addFavorite();
    //productPage.clickOnPromotion();
    productPage.clickOnCookies();
    productPage.verifyMenuFavorite();
    productPage.verifyListFavorite();
    productPage.addItemToCart();

    shoppingCart.verifyCart();
    shoppingCart.clickOnPay();
    shoppingCart.clickOnModal();
    shoppingCart.clickOnAddAddress();
    shoppingCart.addCheckoutInformation(checkoutData.firstName, checkoutData.lastName, checkoutData.rut, checkoutData.telephone, checkoutData.street1Dir,
      checkoutData.street2Num, checkoutData.street3Depto);
    //shoppingCart.selectDropdownRegion();  
    shoppingCart.selectByTextRegion('COQUIMBO')
    shoppingCart.selectByTextComuna('CANELA')
  });
});