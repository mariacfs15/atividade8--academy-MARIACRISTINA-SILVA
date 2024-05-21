import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CadastroPage from '../pages/cadastropage';
import { faker } from '@faker-js/faker';
import { Before } from '@badeball/cypress-cucumber-preprocessor';

const paginaCadastro = new CadastroPage();

const senha = 'senhateste12';
var usuarioCriado;

Before({ tags: '@usuarioCadastrado'}, () => {
    cy.criarUsuario().then((response) => {
        usuarioCriado = response;
      });
})

Given('que acessei a página inicial da Raromdb', function () {
    cy.visit('');
});

Given('que acessei a página {string}', function () {
    paginaCadastro.clickButtonRegistrar();
});

Given('que existe um usuário cadastrado', function () {
    cy.log(usuarioCriado);   
});

Given('acessar a página {string}', function () {
    paginaCadastro.clickButtonPerfil();
});

Given('acessar a opção {string}', function () {
    paginaCadastro.clickButtonGerenciarConta();
});

When('informar um novo nome', function () {
    const nome = faker.person.fullName();
    paginaCadastro.typeNome(nome);
});

When('informar um novo e-mail', function () {
    const email = faker.internet.email();
    paginaCadastro.typeEmail(email);
});

When('informar uma senha', function () {
    paginaCadastro.typeSenha(senha);
});

When('confirmar a senha', function () {
    paginaCadastro.typeConfirmarSenha(senha);
});

When('clicar no botão {string}', function () {
    cy.intercept(
        'POST',
        'https://raromdb-3c39614e42d4.herokuapp.com/api/users'
      ).as('postUser');
      paginaCadastro.clickButtonCadastrar();
});

When('informar uma senha com menos de 6 dígitos', function () {
    paginaCadastro.typeSenha('senha');
});

When('confirmar a senha com menos de 6 dígitos', function () {
    paginaCadastro.typeConfirmarSenha('senha');
});

When('informar uma senha com mais de 12 dígitos', function () {
    paginaCadastro.typeSenha('senhateste1234');
});

When('confirmar a senha com mais de 12 dígitos', function () {
    paginaCadastro.typeConfirmarSenha('senhateste1234');
});

When('confirmar uma senha diferente da informada', function () {
    paginaCadastro.typeConfirmarSenha('senhateste1');
});

When('informar um e-mail já cadastrado', function () {
    paginaCadastro.typeEmail(usuarioCriado.email);
});

When('informar um e-mail invalido {string}', function (email) {
    paginaCadastro.typeEmail(email)
});

When('informar um novo nome valido {string}', function (nome) {
    paginaCadastro.typeNome(nome)
});

When('informar um novo nome com mais de 100 caracteres', function () {
    paginaCadastro.typeNome('Maria Julieta Avelino Castro Torres Silva Sales Guimarães Santos Drummond Fernandes Oliveira Teixeira da Costa Souto')
});

Then('o usuário será salvo com sucesso', function () {
    cy.wait('@postUser');
    
    cy.get(paginaCadastro.mensagemSucesso).contains('Cadastro realizado!');
    cy.contains('Sucesso').should('be.visible')
    cy.contains('Cadastro realizado!').should('be.visible')
});

Then('o usuário não será cadastrado com sucesso e o sistema vai solicitar que um nome seja informado', function () {
    cy.contains('Informe o nome').should('be.visible')
});

Then('o usuário não será cadastrado com sucesso e o sistema vai solicitar que um e-mail seja informado', function () {
    cy.contains('Informe o e-mail').should('be.visible')
});

Then('o usuário não será cadastrado com sucesso e o sistema vai solicitar que uma senha seja informada', function () {
    cy.contains('Informe a senha').should('be.visible')
});

Then('o usuário não será cadastrado com sucesso e será exibida a mensagem de erro {string}', function () {
    cy.contains('As senhas devem ser iguais.').should('be.visible')
});

Then('o usuário não será cadastrado com sucesso e será exibida a mensagem {string}', function () {
    cy.contains('A senha deve ter pelo menos 6 dígitos').should('be.visible')
});

Then('não deve ser possível criar o usuário e o sistema devolverá a mensagem {string}', function () {
    
    cy.wait('@postUser');
    
    cy.contains('Falha no cadastro').should('be.visible')
    cy.contains('E-mail já cadastrado. Utilize outro e-mail').should('be.visible')
});   

Then('o usuário não será salvo com sucesso e o sistema apresenta a seguinte mensagem: {string}', function () {
    cy.contains('Falha no cadastro').should('be.visible')
    cy.contains('Não foi possível cadastrar o usuário.').should('be.visible')
}); 

Then('será possível visualizar o tipo de usuário que pode estar cadastrado no sistema', function () {   
    
    cy.get(paginaCadastro.inputProfile).contains('Comum');
    cy.get(paginaCadastro.inputProfile).contains('Administrador');
    cy.get(paginaCadastro.inputProfile).contains('Crítico');
           
}); 

Then('o usuário não será cadastrado com sucesso e retornará uma mensagem de erro {string}', function () {
    cy.contains('A senha deve ter no máximo 12 dígitos.').should('be.visible')
}); 

Then('será possível visualizar que o usuário cadastrado no sistema é {string}', function () {   
    
    cy.get(paginaCadastro.inputProfile).contains('Comum');   
    cy.get(paginaCadastro.inputProfile).should('be.disabled');
    cy.get(paginaCadastro.inputProfile).invoke('val').should('equal', '0');
    
}); 