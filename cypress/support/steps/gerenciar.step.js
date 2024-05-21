import { Given, When, Then, Before, After} from '@badeball/cypress-cucumber-preprocessor';
import CadastroPage from '../pages/cadastropage';
import LoginPage from '../pages/loginpage';
import GerenciarPage from '../pages/gerenciarpage';
import { faker } from '@faker-js/faker';

const paginaCadastro = new CadastroPage();
const paginaLogin = new LoginPage();
const paginaGerenciar = new GerenciarPage();

const senha = 'senhateste12';
var usuarioCriado;

Before({ tags: '@usuarioLogado'},() => {
  //O usuário é criado
  cy.criarUsuario().then((response) => {
    usuarioCriado = response;
  });

  //o usuário efetua login com a sua conta 
  cy.loginUsuario().then((login) => {
    token = login;
  });
})

After({ tags: '@usuarioLogado'},() => {
  //o usuário se torna Admin, uma vez que só ele é capaz apagar um usuário  
  cy.usuarioAdmin();

  //exclusão de usuário da base de dados
  cy.deletarUsuario(usuarioCriado.id);
})

Given('que acessei a página {string}', function () {
  cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/login');

  paginaLogin.typeEmail(usuarioCriado.email);
  paginaLogin.typeSenha(senha);

  paginaLogin.clickButtonFazerLogin();

  paginaGerenciar.clickButtonPerfil();
});

Given('que acessei a página Raromdb', function () {
  cy.visit('');
});

When('acessar a opção {string}', function () {
  paginaGerenciar.clickButtonGerenciarConta();
});

When('não efetuar login', function () {
  paginaGerenciar.clickButtonLogin();
});

When('informar um novo nome', function () {
  paginaGerenciar.clearNome();

  const nome = faker.person.fullName();
  paginaGerenciar.typeNome(nome);
});

When('clicar no botão {string}', function () {
  paginaGerenciar.clickButtonSalvar();
});

When('clicar em {string}', function () {
  paginaGerenciar.clickButtonAlterarSenha();
});

When('informar uma nova senha válida', function () {
  paginaGerenciar.typeSenha('senha890');
});

When('informar uma nova senha com menos de 6 dígitos', function () {
  paginaGerenciar.typeSenha('senh');
});

When('informar uma nova senha com mais de 12 dígitos', function () {
  paginaGerenciar.typeSenha('senha123456789');
});

When('confirmar a senha', function () {
  paginaGerenciar.typeConfirmarSenha('senha890');
});

When('confirmar a senha com menos de 6 dígitos', function () {
  paginaGerenciar.typeConfirmarSenha('senh');
});

When('confirmar a senha com mais de 12 dígitos', function () {
  paginaGerenciar.typeConfirmarSenha('senha123456789');
});

When('informar um novo nome valido {string}', function (nome) {
  paginaGerenciar.typeNome(nome)
});

When('informar um novo nome com mais de 100 caracteres', function () {
  paginaGerenciar.typeNome('Maria Julieta Avelino Castro Torres Silva Sales Guimarães Santos Drummond Fernandes Oliveira Teixeira da Costa Souto')
});

When('apagar o nome', function () {
  paginaGerenciar.clearNome();
});

Then('o usuário deve visualizar as informações que podem ser alteradas', function () {
  cy.contains('Gerenciar conta').should('be.visible')
  cy.contains('Atualize informações da sua conta').should('be.visible')
  cy.get(paginaCadastro.inputNome).should('be.visible');
  cy.get(paginaCadastro.inputEmail).should('be.visible');
  cy.contains('Comum').should('be.visible')
  cy.get(paginaCadastro.inputProfile).should('be.disabled');

});

Then('o usuário será alterado com sucesso e o sistema retornará a mensagem {string}', function () {
  cy.contains('Informações atualizadas').should('be.visible')
});

Then('o usuário não será alterado com sucesso e o sistema socilitará um nome', function () {
  cy.contains('Informe o nome').should('be.visible')
});

Then('o usuário não será alterado com sucesso e o sistema retornará a mensagem {string}', function () {
  cy.contains('As senhas devem ser iguais').should('be.visible')
});

Then('o usuário não será alterado com sucesso e o sistema retornará uma mensagem {string}', function () {
  cy.contains('A senha deve ter pelo menos 6 dígitos').should('be.visible')
});

Then('o usuário não será alterado com sucesso e o sistema retornará {string}', function () {
  cy.contains('Não foi possível atualizar os dados').should('be.visible')
}); 

Then('o usuário não poderá ver a opção {string}', function () {
  cy.contains(paginaGerenciar.buttonPerfil).should('not.exist')
  cy.contains('Perfil').should('not.exist')
}); 