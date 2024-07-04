import { LoginRegister } from "../Page/loginPage";
const loginPage = new LoginRegister();
const userData = require('../fixtures/personalInfo.json');

describe('Prueba de login con usuarios', () => {
  beforeEach(() => {
    loginPage.visitPageLogin();
  });
  it('Login con usuario', () => {
    cy.wait(5000)
    cy.get('.decline-button').click({force:true});
    loginPage.typeEmail(userData.email) 
    loginPage.typePassword(userData.password)
    loginPage.clickOnLogin()
    });
  });