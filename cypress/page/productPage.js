export default class ProductPage {

    searchItem(item){
        cy.get('.Navbar_mobile-search-icon__BfW6v > .flex > .Searchbar_searchbar-main__mcbXv > #mobile-search')
          .type(item)
          .type('{enter}');
    }
    clickOnDesireItem(){
        cy.wait(3000);
        cy.get(':nth-child(2) > .SearchAutocomplete_autocomplete-product-tiny-name__GbqnK > :nth-child(1) > h6')
          .click();
        cy.wait(6000);
    }
    validateImage(){
        cy.get('[alt="Imagen de producto"]').should('exist');
    }
    validatePrice(){
        cy.get('.ProductPrice_total-price__taby6').should('exist')
    }
    addFavorite(){
        cy.get('.PDP_add-to-wishlist-btn__vfxn1').click();
    }
    clickOnPromotion(){
        cy.get('.btn2').click();
    }
    clickOnCookies(){
        cy.get('.FeatureBar_root__oNfaI > .Button_root__mZAHs > span').click();
    }
   
    //cy.get('.PDP_add-to-cart-button__4FR37')
}