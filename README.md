# Projeto de Testes Automatizados E2E para o case prático da SEF/MG

## Descrição

Este projeto foi desenvolvido para automatizar os testes do site [Sauce Demo](https://www.saucedemo.com/) utilizando a ferramenta Playwright. O objetivo é garantir a qualidade e a funcionalidade do site através de testes automatizados.

## Tecnologias Utilizadas

- **Playwright**: Framework de automação de testes para aplicações web.
- **TypeScript**: Linguagem de programação utilizada para escrever os testes.
- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.

## Estrutura do Projeto

- **tests**: Diretório que contém os arquivos de testes.
  - `login.spec.ts`: Testes relacionados ao login.
  - `logout.spec.ts`: Testes relacionados ao logout.
  - `inventory.spec.ts`: Testes relacionados ao inventário.
  - `checkout.spec.ts`: Testes relacionados ao processo de checkout.
- **pages**: Diretório que contém as classes de páginas utilizadas nos testes.
  - `LoginPage.ts`: Classe que representa a página de login.
  - `LogoutPage.ts`: Classe que representa a página de logout.
  - `InventoryPage.ts`: Classe que representa a página de inventário.
  - `CartPage.ts`: Classe que representa a página do carrinho.
  - `CheckoutPage.ts`: Classe que representa a página de checkout.
- **playwright.config.ts**: Arquivo de configuração do Playwright.

## Configuração do Ambiente

1. **Instalar as dependências**:
   ```sh
   npm install
   ```
2. **Executar os testes**:
npx playwright test

3. Visualizar os relatórios: Após a execução dos testes, os relatórios serão gerados na pasta *test-results*. Abra o arquivo **index.html** no navegador para visualizar o relatório detalhado.

### Testes Criados
## Login
- **Login com sucesso:** Verifica se o usuário consegue fazer login com sucesso utilizando credenciais válidas.
- **Falha ao fazer login com usuário bloqueado:** Verifica se o usuário bloqueado recebe a mensagem de erro apropriada.

## Logout
- **Logout com sucesso:** Verifica se o usuário consegue fazer logout com sucesso.

## Inventário
- **Adicionar item ao carrinho:** Verifica se o usuário consegue adicionar um item ao carrinho.
- **Ir para o carrinho:** Verifica se o usuário consegue navegar para a página do carrinho.

## Checkout
- **Completar o checkout com sucesso:** Verifica se o usuário consegue completar o processo de checkout com sucesso.
- **Completar o checkout e voltar para home clicando no botão Back Home:** Verifica se o usuário consegue completar o checkout e voltar para a página inicial clicando no botão "Back Home".