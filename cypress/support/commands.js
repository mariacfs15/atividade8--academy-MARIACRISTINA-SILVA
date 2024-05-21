// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from '@faker-js/faker';

var token;

const senha = 'senhateste12';
const usuarioCadastrado = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: senha,
};

Cypress.Commands.add('criarUsuario', function () {
  return cy
    .request({
      method: 'POST',
      url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users',
      body: usuarioCadastrado,
    }).then((response) => {
      return response.body;
    });
});

Cypress.Commands.add('loginUsuario', function () {
  return cy
    .request({
      method: 'POST',
      url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/auth/login',
      body: {
        email: usuarioCadastrado.email,
        password: senha,
      }
    }).then((login) => {
      return token = login.body.accessToken;
    });
});

Cypress.Commands.add('usuarioAdmin', function () {
    cy.request({
      method: 'PATCH',
      url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users/admin',
      headers: {
        Authorization: 'Bearer ' + token,
      }
    })
});

Cypress.Commands.add('deletarUsuario', function (id) {
  cy.request({
      method: 'DELETE',
      url: 'https://raromdb-3c39614e42d4.herokuapp.com/api/users/' + id,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
});

