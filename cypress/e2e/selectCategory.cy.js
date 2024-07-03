import CommonPage from "../page/commonPage";
import CategoryPage from "../page/categoryPage";

const categoryPage = new CategoryPage();
const commonPage = new CommonPage();

describe('Pruebas de la categoria de productos', () => {
    beforeEach(() => {
        cy.on("uncaught:exception", (err, runnable) => {
          return false;
        });
        cy.visit('https://www.casaideas.cl/');
      });
    it('Mostrar las tarjetas en la categoria', () => {
        categoryPage.visitMenu();
        categoryPage.visitMenuProductos();
        categoryPage.visitMenuOutlet();
      });
});

 



