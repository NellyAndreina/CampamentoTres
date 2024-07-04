export class LoginRegister { 
    
    visitPageLogin () {
      cy.visit('/');
      //cy.get('.close').click();
      cy.get('.UserNav_list__dJ5pz > :nth-child(2)').click({force:true});
    }

    typeEmail = (email) => {
      cy.get('#email').type(email,{force:true});
    }

    typePassword = (password) => {
      cy.get('#password').type(password,{force:true});
    }

    clickOnLogin = () => {
      cy.get('.Button_root__mZAHs').click({force:true});
    }
}
//cy.get('.Auth_form-actions__prI_q > .Button_root__mZAHs')