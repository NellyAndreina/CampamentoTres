import VerifyShoppingCart from "../page/shoppingCart";
import { LoginRegister } from "../Page/loginPage";
import ProductPage from "../page/productPage";
import CategoryPage from "../page/categoryPage";

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


  it('Mostrar el carro de compras y realizar el checkout', () => {
    
    shoppingCart.verifyCart();
    shoppingCart.clickOnPay();
    shoppingCart.clickOnAddAddress();
    shoppingCart.addCheckoutInformation();
    
  });