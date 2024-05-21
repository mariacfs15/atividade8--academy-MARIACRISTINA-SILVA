export default class GerenciarPage {

    inputNome = 'input[placeholder="Nome"]';
    
    inputSenha = 'input[placeholder="Senha"]';
    inputConfirmarSenha = 'input[placeholder="Confirmar senha"]';
    
    buttonLogin = '[href="/login"]';
    buttonSalvar = '.account-save-button';
    buttonAlterarSenha = '.account-password-button';
    buttonPerfil = '[href="/profile"]';
    buttonGerenciarConta = '[href="/account"]'

    clickButtonPerfil() {
        cy.get(this.buttonPerfil).click();
    }

    clickButtonLogin() {
        cy.get(this.buttonLogin).click();
    }

    clickButtonSalvar() {
        cy.get(this.buttonSalvar).click();
    }

    clickButtonAlterarSenha() {
        cy.get(this.buttonAlterarSenha).click();
    }

    clickButtonGerenciarConta() {
        cy.get(this.buttonGerenciarConta).click();
    }

    typeNome(nome) {
        cy.get(this.inputNome).type(nome);
    }

    clearNome(nome){
        cy.get(this.inputNome).clear(nome);
    }

    typeSenha(senha) {
        cy.get(this.inputSenha).type(senha);
    }

    typeConfirmarSenha(senha) {
        cy.get(this.inputConfirmarSenha).type(senha);
    }
}