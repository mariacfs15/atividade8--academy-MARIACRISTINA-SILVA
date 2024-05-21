import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/loginpage';
import { faker } from '@faker-js/faker';
import { Before } from '@badeball/cypress-cucumber-preprocessor';

const paginaLogin = new LoginPage();

const senha = 'senhateste12';
var usuarioCriado;

Before({ tags: '@CriarUsuarios' }, () => {
    cy.criarUsuario().then((response) => {
        usuarioCriado = response;
    });
})

Given('que acessei a página inicial da Raromdb', function () {
    cy.visit('');
});

Given('que acessei a página {string}', function () {
    paginaLogin.clickButtonLogin();
});

When('informar o e-mail cadastrado', function () {
    paginaLogin.typeEmail(usuarioCriado.email);
});

When('informar a senha salva', function () {
    paginaLogin.typeSenha(senha);
});

When('clicar no botão "Login"', function () {
    paginaLogin.clickButtonFazerLogin();
});

When('informar um e-mail não cadastrado', function () {
    paginaLogin.typeEmail(faker.internet.email());
});

When('informar uma senha incorreta', function () {
    paginaLogin.typeSenha('senha12km');
});

Then('o usuário conseguirá acessar a página de filmes', function () {
    cy.get(paginaLogin.buttonPerfil)
        .contains('Perfil')
    cy.get(paginaLogin.buttonPerfil).should('not.be.disabled')
});

Then('o usuário não conseguirá efetuar o login e uma mensagem solicitando o e-mail será exibida', function () {
    cy.contains('Informe o e-mail').should('be.visible')
});

Then('o usuário não conseguirá efetuar o login e uma mensagem solicitando a senha será exibida', function () {
    cy.contains('Informe a senha').should('be.visible')
});

Then('o usuário não conseguirá efetuar o login e a mensagem {string} será exibida', function () {
    cy.contains('Falha ao autenticar').should('be.visible')
    cy.contains('Usuário ou senha inválidos').should('be.visible')
});

