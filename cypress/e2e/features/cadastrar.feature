#language: pt 

Funcionalidade: Cadastro de usuário
    Como um usuário 
    Desejo me cadastrar no sistema
    Para conseguir avaliar filmes

Contexto: O usuário deve ter acessado a página inicial do Raromdb e a página de resgistro
    Dado que acessei a página inicial da Raromdb 
    E que acessei a página "Registre-se" 

Cenário: Cadastro de usuário com sucesso
    Quando informar um novo nome
    E informar um novo e-mail
    E informar uma senha
    E confirmar a senha
    E clicar no botão "Cadastrar"
    Então o usuário será salvo com sucesso

Cenário: Não deve ser possível cadastrar um usuário sem informar um nome
    Quando informar um novo e-mail
    E informar uma senha
    E confirmar a senha
    E clicar no botão "Cadastrar"
    Então o usuário não será cadastrado com sucesso e o sistema vai solicitar que um nome seja informado

Cenário: Não deve ser possível cadastrar um usuário sem informar um e-mail
    Quando informar um novo nome
    E informar uma senha
    E confirmar a senha
    E clicar no botão "Cadastrar"
    Então o usuário não será cadastrado com sucesso e o sistema vai solicitar que um e-mail seja informado
 
Cenário: Não deve ser possível cadastrar um usuário sem informar uma senha
    Quando informar um novo nome
    E informar um novo e-mail
    E clicar no botão "Cadastrar"
    Então o usuário não será cadastrado com sucesso e o sistema vai solicitar que uma senha seja informada

Cenário: Não deve ser possível cadastrar um usuário informando uma senha com menos de 6 dígitos
    Quando informar um novo nome
    E informar um novo e-mail
    E informar uma senha com menos de 6 dígitos
    E confirmar a senha com menos de 6 dígitos
    E clicar no botão "Cadastrar"
    Então o usuário não será cadastrado com sucesso e será exibida a mensagem "A senha deve ter pelo menos 6 dígitos"    

Cenário: Não deve ser possível cadastrar um usuário informando uma senha com mais de 12 dígitos
    Quando informar um novo nome
    E informar um novo e-mail
    E informar uma senha com mais de 12 dígitos
    E confirmar a senha com mais de 12 dígitos
    E clicar no botão "Cadastrar"
    Então o usuário não será cadastrado com sucesso e retornará uma mensagem de erro "A senha deve ter no máximo 12 dígitos."   

Cenário: Não deve ser possível cadastrar um usuário sem informar a confirmação da senha
    Quando informar um novo nome
    E informar um novo e-mail
    E informar uma senha 
    E clicar no botão "Cadastrar"
    Então o usuário não será cadastrado com sucesso e o sistema vai solicitar que uma senha seja informada        

Cenário: Não deve ser possível cadastrar um usuário informando senhas diferentes
    Quando informar um novo nome
    E informar um novo e-mail
    E informar uma senha 
    E confirmar uma senha diferente da informada
    E clicar no botão "Cadastrar"
    Então o usuário não será cadastrado com sucesso e será exibida a mensagem de erro "As senhas devem ser iguais." 

@usuarioCadastrado
Cenário: Não deve ser possível cadastrar um usuário com e-mail já utilizado por outro usuário
    E que existe um usuário cadastrado 
    Quando informar um novo nome
    E informar um e-mail já cadastrado
    E informar uma senha
    E confirmar a senha
    E clicar no botão "Cadastrar"
    Então não deve ser possível criar o usuário e o sistema devolverá a mensagem "E-mail já cadastrado.Utilize outro e-mail"   

Esquema do Cenário: Não deve ser possível cadastrar um usuário utilizando um e-mail inválido
    Quando informar um novo nome
    E informar um e-mail invalido "<email>"
    E informar uma senha
    E confirmar a senha
    E clicar no botão "Cadastrar"
    Então o usuário não será salvo com sucesso e o sistema apresenta a seguinte mensagem: "Não foi possível cadastrar o usuário."
    Exemplos:
    | email                                                             | 
    | emailinvalido                                                     |
    | emailinvalido@teste                                               |
    | @                                                                 |
    | @teste                                                            |
    | .com                                                              |
    | @.com                                                             |
    |paulapimentaguimaraessoutoaguiarsilvadrummond123457890245678@qa.com|

Esquema do Cenário: Deve ser possível cadastrar um usuário utilizando qualquer tipo de nome no sistema
    Quando informar um novo nome valido "<nome>"
    E informar um novo e-mail
    E informar uma senha
    E confirmar a senha
    E clicar no botão "Cadastrar"
    Então o usuário será salvo com sucesso
    Exemplos:
    | nome      | 
    | Maria     |                                                                                              
    | 4         |
    |😀        |
    | d         |
    | ______    |

# Apesar das regras de negócio não restringirem o nome, o front e a API não aceitam o cadastro de nomes com mais de 100 caracteres. 

Cenário: Não deve ser possível cadastrar um usuário com um nome com mais de 100 caracteres
    Quando informar um novo nome com mais de 100 caracteres
    E informar um novo e-mail
    E informar uma senha
    E confirmar a senha
    E clicar no botão "Cadastrar"
    Então o usuário não será salvo com sucesso e o sistema apresenta a seguinte mensagem: "Não foi possível cadastrar o usuário."

Cenário: Deve ser possível visualizar o tipo de usuário cadastrado
    Quando informar um novo nome
    E informar um novo e-mail
    E informar uma senha
    E confirmar a senha
    E clicar no botão "Cadastrar"
    E acessar a página "Perfil"
    E acessar a opção "Gerenciar conta"
    Então será possível visualizar o tipo de usuário que pode estar cadastrado no sistema

Cenário: Deve ser possível visualizar que sempre ao ser criado, o usuário é do tipo Comum 
    Quando informar um novo nome
    E informar um novo e-mail
    E informar uma senha
    E confirmar a senha
    E clicar no botão "Cadastrar"
    E acessar a página "Perfil"
    E acessar a opção "Gerenciar conta"
    Então será possível visualizar que o usuário cadastrado no sistema é "Comum"    