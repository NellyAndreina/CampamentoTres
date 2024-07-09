import { LoginRegister } from "../Page/loginPage";
const loginPage = new LoginRegister();
const userData = require('../fixtures/personalInfo.json');

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Prueba de login con usuarios', () => {
  beforeEach(() => {
    loginPage.visitPageLogin();
    cy.wait(5000) //timeout
    cy.get('.decline-button').click({force:true});
    loginPage.clickIconLogin();
  });
  it('Login con usuario', () => {
    //agregar una codición si muestra o no el modal
    loginPage.typeEmail(userData.email); 
    loginPage.typePassword(userData.password);
    loginPage.clickOnLogin();
    });
  });