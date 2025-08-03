# 🎬 SamucaFlix

Uma plataforma de streaming de filmes e séries inspirada na Netflix, desenvolvida com Next.js 15, React 19 e TypeScript.

## 📋 Descrição

O SamucaFlix é uma aplicação web moderna que oferece uma experiência de streaming similar à Netflix, com interface responsiva e funcionalidades completas para navegação, busca e reprodução de conteúdo audiovisual.

## ✨ Funcionalidades

### 🎯 Principais Recursos
- **Interface Netflix-like**: Design inspirado na Netflix com gradientes e efeitos visuais
- **Navegação por Gêneros**: Filmes organizados por categorias (Drama, Action, Comedy, Animation)
- **Sistema de Busca**: Busca por título e gênero com filtros avançados
- **Player de Vídeo**: Reprodução de conteúdo com controles personalizados
- **Sistema de Avaliação**: Classificação de filmes por faixa etária
- **Autenticação**: Sistema de login e registro de usuários
- **Perfil de Usuário**: Gerenciamento de conta e preferências
- **Responsividade**: Interface adaptável para desktop, tablet e mobile

### 🎨 Componentes Principais
- **Banner**: Exibição de filmes em destaque
- **MovieRow**: Listas horizontais de filmes por gênero
- **MovieCard**: Cards individuais com informações dos filmes
- **Header**: Navegação principal com busca e perfil
- **Player**: Reprodutor de vídeo customizado
- **SearchForm**: Formulário de busca avançada

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15.4.2** - Framework React com App Router
- **React 19.1.0** - Biblioteca para interface de usuário
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **Heroicons** - Ícones SVG
- **Vidstack React** - Player de vídeo customizado
- **Maverick.js** - Biblioteca de mídia

### Backend & Dados
- **JSON Server** - API REST simulada
- **Zod** - Validação de esquemas

### Desenvolvimento & Testes
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Jest** - Framework de testes
- **Testing Library** - Utilitários para testes React
- **Turbopack** - Bundler rápido para desenvolvimento

## 🚀 Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- Yarn (recomendado) ou npm

### Passos para Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd samucaflix-client
```

2. **Instale as dependências**
```bash
yarn install
# ou
npm install
```

3. **Configure o banco de dados**
```bash
# Inicie o JSON Server em uma nova aba
yarn json-server
# ou
npm run json-server
```

4. **Inicie o servidor de desenvolvimento**
```bash
yarn dev
# ou
npm run dev
```

5. **Acesse a aplicação**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
samucaflix-client/
├── src/
│   ├── app/
│   │   ├── auth/                 # Autenticação
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── forgot-password/
│   │   ├── components/           # Componentes React
│   │   │   ├── Banner.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── MovieCard.tsx
│   │   │   ├── MovieRow.tsx
│   │   │   ├── Player.tsx
│   │   │   └── ...
│   │   ├── hooks/               # Custom Hooks
│   │   │   └── useScroll.tsx
│   │   ├── service/             # Serviços de API
│   │   │   ├── ApiRequest.ts
│   │   │   └── MovieService.ts
│   │   ├── types/               # Definições TypeScript
│   │   │   └── movie.ts
│   │   ├── search/              # Página de busca
│   │   ├── watch/               # Página do player
│   │   └── page.tsx             # Página inicial
│   ├── __tests__/               # Testes
│   └── public/                  # Assets estáticos
├── db.json                      # Banco de dados JSON
├── package.json
└── README.md
```

## 🎮 Como Usar

### Navegação Principal
- **Página Inicial**: Exibe filmes em destaque e listas por gênero
- **Busca**: Use a barra de pesquisa no header para encontrar filmes
- **Gêneros**: Navegue pelas categorias disponíveis
- **Player**: Clique em qualquer filme para assistir

### Funcionalidades de Usuário
- **Login/Registro**: Acesse sua conta ou crie uma nova
- **Perfil**: Gerencie suas informações pessoais
- **Avaliações**: Veja a classificação etária dos filmes

## 🧪 Testes

Execute os testes com:
```bash
yarn test
# ou
npm test
```

Os testes incluem:
- Componentes React
- Custom Hooks
- Validações de formulário

## 📦 Scripts Disponíveis

```json
{
  "dev": "next dev --turbopack",     // Desenvolvimento com Turbopack
  "build": "next build",             // Build de produção
  "start": "next start",             // Servidor de produção
  "lint": "next lint",               // Verificação de código
  "test": "jest --watch",            // Testes em modo watch
  "json-server": "json-server --watch db.json --port 3333"  // API simulada
}
```

## 🎨 Personalização

### Temas e Estilos
- O projeto usa Tailwind CSS para estilização
- Cores e gradientes podem ser personalizados no `tailwind.config.js`
- Componentes seguem um design system consistente

### Adicionando Conteúdo
- Edite o arquivo `db.json` para adicionar novos filmes
- Estrutura de dados definida em `src/app/types/movie.ts`
- Imagens e vídeos podem ser hospedados externamente

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Samuca** - Desenvolvedor Full Stack

## 📚 Referencial Teórico
- **[FULL CYCLE](https://fullcycle.com.br/)** - Modulo Projeto prático - Portal do usuário - React.js (Front-end).
- **Repositório de referência do curso**: [FC3 Admin Catálogo de Vídeos](https://github.com/devfullcycle/FC3-admin-catalogo-de-videos-java)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
