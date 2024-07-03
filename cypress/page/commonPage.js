import { LoginRegister } from './loginPage';

const login = LoginRegister();
const userData = require('../fixtures/personalInfo.json');

export default class CommonPage {
    userLogin (){
        login.visitPageLogin();
        login.getemail(userData.email);
        login.getpassword(userData.password);
        //login.submit();
    }
}