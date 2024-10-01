
# Decodificador de Texto 🚀

Este projeto foi desenvolvido como parte do **Desafio Iniciante em Programação** do programa **ONE (Oracle Next Education) - Turma 06**, em parceria com a **Oracle + Alura**. O objetivo do desafio era criar uma aplicação capaz de criptografar e descriptografar textos, permitindo a troca de mensagens secretas entre os usuários que conhecem o método de criptografia utilizado.

## Descrição
O **Decodificador de Texto** é uma aplicação que transforma textos com base em uma chave de criptografia pré-definida, utilizando um conjunto de regras de substituição de letras. A aplicação oferece uma interface simples e intuitiva, onde o usuário pode inserir uma mensagem e escolher entre criptografá-la ou descriptografá-la. A mensagem criptografada pode ser copiada facilmente com o clique de um botão.

## Funcionalidades
- **Criptografar mensagens**: Substitui letras específicas de acordo com a chave de criptografia.
- **Descriptografar mensagens**: Retorna o texto criptografado para a sua forma original.
- **Copiar mensagens**: Possibilidade de copiar o texto gerado (criptografado ou descriptografado) diretamente para a área de transferência.
- **Regras de criptografia**:
  - A letra **"e"** é convertida para **"enter"**.
  - A letra **"i"** é convertida para **"imes"**.
  - A letra **"a"** é convertida para **"ai"**.
  - A letra **"o"** é convertida para **"ober"**.
  - A letra **"u"** é convertida para **"ufat"**.

## Requisitos do Desafio
- A criptografia deve funcionar apenas com **letras minúsculas**.
- Não devem ser aceitas **letras com acentos**.
- O usuário deve poder inserir o texto e escolher entre criptografá-lo ou descriptografá-lo.
- O texto criptografado/descriptografado deve poder ser **copiado para a área de transferência** através de um botão.

## Tecnologias Utilizadas
- **HTML5**: Estrutura da página.
- **CSS3**: Estilização da página, incluindo efeitos de fundo e animação de estrelas.
- **JavaScript**: Lógica para criptografar, descriptografar e copiar textos.
- **Playwright**: Teste automatizado
  
## Acesso à Aplicação
Você pode acessar a aplicação diretamente através do seguinte link:  
👉 [Acessar Decodificador de Texto](https://elisirons.github.io/decodificador/)

## Como Executar o Projeto
1. Faça o clone do repositório:
   ```bash
   git clone https://github.com/elisirons/decodificador-texto.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd decodificador-texto
   ```
3. Abra o arquivo `index.html` em seu navegador preferido para utilizar a aplicação.


## Testes Automatizados
Este projeto possui teste automatizado para verificar o funcionamento da aplicação.

### Detalhes do Teste

- O teste simula a entrada de texto para criptografar, descriptograr e copiar.
  
### Estrutura do Teste

O teste está localizado na pasta `tests/` e consiste em um arquivo:

- `decodificador.spec.js`: Testes automatizados para o Decodificador.

### Ferramentas Utilizadas

- **Playwright**: Para automação de testes com suporte a múltiplos navegadores.

### Como Executar os Testes

#### Requisitos

- Node.js instalado.

1. Instale as dependências do projeto:

   ```bash
   npm install
   ```

2. Execute o teste automatizado:

  ```bash
  npm run test
  ```


![Design sem nome](https://github.com/ElisIrons/decodificador/assets/86434261/392bb0f4-acb2-4ffe-99e1-22de0f4348eb)
