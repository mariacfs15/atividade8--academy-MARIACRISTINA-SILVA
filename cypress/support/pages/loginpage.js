export default class LoginPage {

    buttonLogin = '[href="/login"]';
      
    inputEmail = 'input[placeholder="E-mail"]';
    inputSenha = 'input[placeholder="Password"]';
    
    buttonFazerLogin = '.login-button';
        
    buttonPerfil = '[href="/profile"]';

    clickButtonLogin() {
        cy.get(this.buttonLogin).click();
    }

    clickButtonFazerLogin() {
        cy.get(this.buttonFazerLogin).click();
    }
    
    typeEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    typeSenha(senha) {
        cy.get(this.inputSenha).type(senha);
    }
}