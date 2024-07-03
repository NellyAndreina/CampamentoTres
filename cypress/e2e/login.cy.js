import { LoginRegister } from "../Page/loginPage";
const loginPage = new LoginRegister();
const userData = require('../fixtures/personalInfo.json');

describe('Prueba de login con usuarios', () => {
  beforeEach(() => {
    loginPage.visitPageLogin();
  });
  it('Login con usuario', () => {
    loginPage.getemail(userData.email) 
    loginPage.getPassword(userData.password)
    loginPage.submit()
    });
  });