export default class CadastroPage {

    inputNome = 'input[placeholder="Nome"]';
    inputEmail = 'input[placeholder="E-mail"]';
    inputSenha = 'input[placeholder="Senha"]';
    inputConfirmarSenha = 'input[placeholder="Confirmar senha"]';
    inputProfile = 'select.profile-input';

    buttonCadastrar = '.account-save-button';

    mensagemSucesso = '.error-message'

    buttonRegistrar = '[href="/register"]';
    buttonPerfil = '[href="/profile"]';
    buttonGerenciarConta = '[href="/account"]'

    clickButtonRegistrar() {
        cy.get(this.buttonRegistrar).click();
    }

    clickButtonPerfil() {
        cy.get(this.buttonPerfil).click();
    }

    clickButtonGerenciarConta() {
        cy.get(this.buttonGerenciarConta).click();
    }

    typeNome(nome) {
        cy.get(this.inputNome).type(nome);
    }

    typeEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    typeSenha(senha) {
        cy.get(this.inputSenha).type(senha);
    }

    typeConfirmarSenha(senha) {
        cy.get(this.inputConfirmarSenha).type(senha);
    }

    clickButtonCadastrar() {
        cy.get(this.buttonCadastrar).click();
    }
}