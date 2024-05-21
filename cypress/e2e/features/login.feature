#language: pt 

Funcionalidade: Login de usuário
    Como um usuário 
    Desejo efetuar login no sistema
    Para fazer uso das suas funcionalidades 

Contexto: O usuário deve ter acessado a página 
    Dado que acessei a página inicial da Raromdb 
    E que acessei a página "Login" 

@CriarUsuarios
Cenário: Login de usuário com sucesso
    Quando informar o e-mail cadastrado
    E informar a senha salva
    E clicar no botão "Login"
    Então o usuário conseguirá acessar a página de filmes

Cenário: Não deve ser possível efetuar login sem preencher o campo e-mail
    Quando informar a senha salva
    E clicar no botão "Login"
    Então o usuário não conseguirá efetuar o login e uma mensagem solicitando o e-mail será exibida

Cenário: Não deve ser possível efetuar login sem preencher o campo senha
    Quando informar o e-mail cadastrado
    E clicar no botão "Login"
    Então o usuário não conseguirá efetuar o login e uma mensagem solicitando a senha será exibida

Cenário: Não deve ser possível efetuar login utilizando um e-mail não cadastrado na base de dados
    Quando informar um e-mail não cadastrado  
    E informar a senha salva
    E clicar no botão "Login"
    Então o usuário não conseguirá efetuar o login e a mensagem "Usuário ou senha inválidos." será exibida

Cenário: Não deve ser possível efetuar login utilizando uma senha/ou e-mail incorretos
    Quando informar o e-mail cadastrado
    E informar uma senha incorreta
    E clicar no botão "Login"
    Então o usuário não conseguirá efetuar o login e a mensagem "Usuário ou senha inválidos." será exibida