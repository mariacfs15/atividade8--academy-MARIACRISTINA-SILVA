#language: pt 

Funcionalidade: Gerenciar conta 
    Como um usuário 
    Desejo poder ferenciar minha conta no sistema
    Para acessar minhas informações

Cenário: Não deve ser possível acessar a edição de informações sem estar autenticado no site 
    Dado que acessei a página Raromdb
    Quando não efetuar login 
    Então o usuário não poderá ver a opção "Perfil"

@usuarioLogado  
Cenário: Deve ser possível visualizar as informações do usuário  
    Dado que acessei a página "Perfil"
    Quando acessar a opção "Gerenciar conta"
    Então o usuário deve visualizar as informações que podem ser alteradas

@usuarioLogado
Cenário: Deve ser possível alterar o nome cadastrado
    Dado que acessei a página "Perfil"
    Quando acessar a opção "Gerenciar conta"
    E informar um novo nome 
    E clicar no botão "Salvar"
    Então o usuário será alterado com sucesso e o sistema retornará a mensagem "Informações atualizadas"

@usuarioLogado
Cenário: Não deve ser possível deixar campo nome em branco
    Dado que acessei a página "Perfil"
    Quando acessar a opção "Gerenciar conta"
    E apagar o nome
    E clicar no botão "Salvar"
    Então o usuário não será alterado com sucesso e o sistema socilitará um nome

@usuarioLogado
Cenário: Deve ser possível alterar a senha cadastrada
    Dado que acessei a página "Perfil"
    Quando acessar a opção "Gerenciar conta"
    E clicar em "Alterar Senha"
    E informar uma nova senha válida
    E confirmar a senha
    E clicar no botão "Salvar"
    Então o usuário será alterado com sucesso e o sistema retornará a mensagem "Informações atualizadas"

@usuarioLogado
Cenário: Não deve ser possível alterar a senha cadastrada sem confirmar a senha
    Dado que acessei a página "Perfil"
    Quando acessar a opção "Gerenciar conta"
    E clicar em "Alterar Senha"
    E informar uma nova senha válida
    E clicar no botão "Salvar"
    Então o usuário não será alterado com sucesso e o sistema retornará a mensagem "As senhas devem ser iguais"

@usuarioLogado
Esquema do Cenário: Deve ser possível alterar o nome utilizando qualquer tipo de nome no sistema
    Dado que acessei a página "Perfil"
    Quando acessar a opção "Gerenciar conta"
    E informar um novo nome valido "<nome>"
    E clicar no botão "Salvar"
    Então o usuário será alterado com sucesso e o sistema retornará a mensagem "Informações atualizadas"
    Exemplos:
    | nome      | 
    | Maria     |                                                                                              
    | 4         |
    |😀        |
    | d         |
    | ______    |

@usuarioLogado
Cenário: Não deve ser possível alterar a senha utilizando menos de 6 dígitos 
    Dado que acessei a página "Perfil"
    Quando acessar a opção "Gerenciar conta"
    E clicar em "Alterar Senha"
    E informar uma nova senha com menos de 6 dígitos
    E confirmar a senha com menos de 6 dígitos
    E clicar no botão "Salvar"
    Então o usuário não será alterado com sucesso e o sistema retornará uma mensagem "A senha deve ter pelo menos 6 dígitos"

@usuarioLogado
Cenário: Não deve ser possível alterar a senha utilizando mais de 12 dígitos 
    Dado que acessei a página "Perfil"
    Quando acessar a opção "Gerenciar conta"
    E clicar em "Alterar Senha"
    E informar uma nova senha com mais de 12 dígitos
    E confirmar a senha com mais de 12 dígitos
    E clicar no botão "Salvar"
    Então o usuário não será alterado com sucesso e o sistema retornará "Não foi possível atualizar os dados"

@usuarioLogado
Cenário: Não deve ser possível cadastrar um usuário com um nome com mais de 100 caracteres
    Dado que acessei a página "Perfil"
    Quando acessar a opção "Gerenciar conta"
    Quando informar um novo nome com mais de 100 caracteres
    E clicar no botão "Salvar"
    Então o usuário não será alterado com sucesso e o sistema retornará "Não foi possível atualizar os dados."
