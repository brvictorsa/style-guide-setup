# style-guide-setup
Configurando um ambiente com ESLint e Airbnb, Prettier e EditorConfig para projetos NodeJs utilizando yarn.

## Configurando o ambiente

1. Adicionando **ESLint** como dependência de desenvolvimento. Mais sobre o [ESLint](https://eslint.org)
```
yarn add eslint -D
```
2. Criando o arquivo **.eslintrc** e escolhendo as configurações:
```
yarn eslint --init
```
* How would you like to use ESLint? (Como você gostaria de utilizar o ESLint?)
*> To check syntax, find problems, and enforce code style*

* What type of modules does your project user? (Quais tipos de módulos o seu projeto usa?)
*> Javascript modules (import/export)*

* Which framework does your project use? (Qual framework o seu projeto usa?)
*> None of these*

* Does your project use TypeScript? (O seu projeto usa TypeScript?)
*N (no)*

*Where does your code run? (Onde seu código roda?)
*> Node*

*Use a popular style guide (Utilize uma guia de estilo popular)
*> Use a popular style guide*

* Which style guide do you want to follow? (Qual guia de estilo deseja seguir?)
*> Airbnb* (https://github.com/airbnb/javascript)

* What format do you want your config file to be in? (Em que formato você deseja que o seu arquivo de configuração esteja?)
*> JavaScript*

* Would you like to install them now with npm? (Gostaria de instalar as dependências com npm?)
*Y*

3. Como no passo anterior instalamos as dependências com npm, foi criado um arquivo **package-lock.json**. Porém  estamos utilizando o **yarn** e gostaríamos que as dependências fossem associadas no arquivo *yarn.lock*. Portanto apague o arquivo **package-lock.json** e corrija as dependências utilizando o comando abaixo:

```
yarn
```

4. Com o arquivo **.eslintrc** e as dependências corretamente associadas, é preciso instalar a extensão ESLint do VS Code (*Ctrl+Shift+X*). A documentação pode ser encontrada em [Extension:ESLint](https://github.com/Microsoft/vscode-eslint)

5. Para que o ESLint possa fazer as correções nos códigos precisamos alterar o arquivo **settings.json** acrescentando a seguinte linha ao arquivo:

```
"eslint.autoFixOnSave": true,
```

6. Alterando algumas regras adicionais no arquivo **.eslintrc**:

```
rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePatterns": "next" }]
  },
```

7. Instalando o Prettier e as integrações com o ESLint como dependência de desenvolvimento:

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

8. Adicionando o prettier como extensão no arquivo **.eslintrc**, declarando como plugin e adicionando uma regra:

```
extends: [
    'airbnb-base', 'prettier'
],
plugins: ['prettier'],
...
rules: [
  "prettier/prettier": "error",
  ...
],
...
```

9. Para garantir que o *Prettier* não coloque aspas duplas em torno das strings, o que contraria o padrão *Airbnb* que exige aspas simples, cria-se o arquivo **.prettierrc** na pasta raiz com as diretivas:

```
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

10. Instalando a extensão **EditorConfig** (https://github.com/editorconfig/editorconfig-vscode) no VS Code. Após a instalação clique com o botão direito no diretório raiz e escolha a opção *Generate .editorconfig*.

11. No arquivo **.editorconfig** gerado, certifique-se que ele esteja com as seguintes informações:

```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

O seu ambiente ESLint usando Airbnb, Prettier e EditorConfig está configurado.
