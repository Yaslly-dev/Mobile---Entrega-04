# 📱 Mobile - Entrega 04 | Portal de Notícias

<p align="center">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Backend-Fastify-blue?style=for-the-badge&logo=fastify" alt="Backend">
  <img src="https://img.shields.io/badge/Database-SQLite-003B57?style=for-the-badge&logo=sqlite" alt="SQLite">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
</p>

## 💻 Sobre o Projeto

Este projeto faz parte da **Entrega 04** da disciplina de desenvolvimento mobile. Trata-se de uma aplicação completa que gerencia um sistema de notícias, contando com um backend robusto para persistência de dados.

O foco desta etapa foi a integração entre o servidor e o banco de dados utilizando tecnologias modernas de mercado, garantindo performance e segurança no tráfego de informações.

## 🛠 Tecnologias Utilizadas

### **Backend**
- **Node.js** & **TypeScript**: Ambiente de execução e tipagem estática.
- **Drizzle ORM**: Ferramenta de mapeamento objeto-relacional para consultas type-safe.
- **SQLite**: Banco de dados relacional leve para armazenamento local.

---

## 📁 Estrutura do Projeto

```text
├── Backend/
│   ├── src/
│   │   ├── controllers/      # Lógica de negócio (noticiasController.ts)
│   │   ├── db/               # Configuração do banco e schemas (schema.ts, db.ts)
│   │   ├── routes/           # Definição dos endpoints (noticiasRoutes.ts)
│   ├── drizzle.config.ts     # Configuração das migrações do banco ├── drizzle.config.ts     # Configuração das migrações do banco
|   ├── app.ts            # Configuração de entrada do servidor
│   └── tsconfig.json         # Configurações do compilador TypeScript
```
## 🚀 Como Executar o Projeto
Pré-requisitos
1. Node.js instalado;
2. Gerenciador de pacotes (NPM ou Yarn)

## Passo a Passo
1. Clone o repositório:git clone [https://github.com/Yaslly-dev/Mobile---Entrega-04.git](https://github.com/Yaslly-dev/Mobile---Entrega-04.git)
2. Entre na pasta do backend:cd Mobile---Entrega-04/Backend
3. Instale as dependências:npm install
4. Execute as migrações do banco de dados (se necessário):drizzle-kit push:sqlite
5. Inicie o servidor de desenvolvimento: npx ts-node app.ts

O servidor estará rodando em http://localhost:3000.
