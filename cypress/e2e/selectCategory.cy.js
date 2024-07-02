import CommonPage from "../page/commonPage";
import CategoryPage from "../page/category";

const categoryPage = new CategoryPage();
const commonPage = new CommonPage();

describe('Pruebas de la categoria de productos', () => {
    beforeEach(() => {
     cy.visit('https://www.adidas.cl')
    });
    it('Mostrar las tarjetas en la categoria', () => {
        categoryPage.visitPageHombres();
        categoryPage.visitPageOffer();
      });
});

 



