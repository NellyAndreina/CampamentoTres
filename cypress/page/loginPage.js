export class LoginRegister { 
    constructor() {
      this.emailInput = '#email';
      this.passwordInput = '#password';
      //this.loginButton = '#login-button';
    }
    visitPageLogin () {
      cy.visit('/');
    }
    getUsername = (email) => {
      cy.get(this.emailInput).clear().type(email);
    }
    getPassword = (password) => {
      cy.get(this.passwordInput).clear().type(password);
    }
    //clickLogin = () => {
      //cy.get(this.loginButton).click();
    //}
    submit = () => {
      this.clickLogin();
    }
}
//cy.get('.Auth_form-actions__prI_q > .Button_root__mZAHs')