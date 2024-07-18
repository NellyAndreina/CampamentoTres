export default class VerifyShoppingCart {

    verifyCart(){
        cy.get('.UserNav_cart-quantity__1GbgW > p').should('have.text', '0');
        //Que el carrito no se muestre el mensaje de carrito vacio
        //Sub total y total exista
    }

    clickOnPay(){
        cy.get('.CartSidebarView_minicart-item-totals__uaI8v > .Button_root__mZAHs').click(); 
    }
    clickOnAddAddress(){
        cy.get('.ShippingMethodsForm_add-address__Bpqoz').click();
    }
    
    addCheckoutInformation(firstName, lastName, rut, telephone, street1Dir, street2Num, street3Depto){
        cy.get('#firstname').clear().type(firstName);
        cy.get('#lastname').clear().type(lastName);
        cy.get(':nth-child(1) > .form-section > :nth-child(3) > .appearance-none').clear().type(rut);
        cy.get('#telephone').clear().type(telephone);
        cy.get('#street1').clear().type(street1Dir);
        cy.get('#street2').clear().type(street2Num);
        cy.get('#street3').clear().type(street3Depto);
    }
}