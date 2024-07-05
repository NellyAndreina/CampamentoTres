import { LoginRegister } from './loginPage';

const loginPage = new LoginRegister();

export default class CommonPage {
    userLogin (email, password){
        loginPage.visitPageLogin();
        loginPage.typeEmail(email);
        loginPage.typePassword(password);
        loginPage.clickOnLogin();
    }
}