export default class ProductPage {

    clickBottonVerTodo() {
        cy.get('.buttons_root___xxnk > div > .Button_root__mZAHs > span').click()
    }

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
    validatePrice(){

    }

    ValidateImage(){
        
    }
    

}