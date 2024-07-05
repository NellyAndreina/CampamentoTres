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

    clickOnLogin(){
        cy.get('button[aria-label="slim"] span').click({force:true});
      }
}
