# PokémonApp 🎮

Aplicativo mobile desenvolvido com **Ionic Framework + Angular**, que combina busca de endereço por CEP com um sistema de batalha entre Pokémons. O app consome duas APIs públicas externas e utiliza recursos nativos do dispositivo via Capacitor.

---

## 📱 Funcionalidades

### Aba 1 — Buscar Pokémon
- O usuário informa um **CEP** brasileiro
- O app consulta a **API ViaCEP** e exibe o endereço correspondente (logradouro, bairro, cidade, UF)
- Simultaneamente, busca um **Pokémon aleatório** na **PokéAPI** e exibe:
  - Nome, imagem, altura, peso e número de habilidades

### Aba 2 — Batalhar
- Gera um **Pokémon adversário** aleatório automaticamente ao entrar na tela
- Compara o número de habilidades do seu Pokémon (buscado na Aba 1) com o adversário
- Exibe o **resultado da batalha**: Ganhou 🔴 / Perdeu 🟢 / Empatou 🟡
- Botão de câmera para **capturar fotos** via câmera do dispositivo (Capacitor)

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| [Angular](https://angular.io/) | 16 | Framework principal |
| [Ionic Framework](https://ionicframework.com/) | 7 | Componentes UI mobile |
| [Capacitor](https://capacitorjs.com/) | 5 | Acesso a recursos nativos (câmera) |
| [TypeScript](https://www.typescriptlang.org/) | ~5.0 | Linguagem principal |
| [RxJS](https://rxjs.dev/) | ~7.8 | Programação reativa / chamadas HTTP |
| [PokéAPI](https://pokeapi.co/) | — | API pública de Pokémons |
| [ViaCEP](https://viacep.com.br/) | — | API pública de CEPs brasileiros |

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm v9 ou superior

Verifique as versões instaladas:
```bash
node -v
npm -v
```

### 1. Instalar as dependências

```bash
npm install
```

### 2. Rodar no navegador

```bash
npm start
```

Acesse em: **http://localhost:4200**

### 3. Rodar no Android (opcional)

Requisitos adicionais: [Android Studio](https://developer.android.com/studio) + JDK 17+

```bash
# Gerar o build
npm run build

# Adicionar plataforma Android (apenas na primeira vez)
npx cap add android

# Sincronizar o build com o projeto nativo
npx cap sync android

# Abrir no Android Studio
npx cap open android
```

No Android Studio, clique em **Run** para executar no emulador ou em um dispositivo físico conectado via USB.

---

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── services/
│   │   ├── poke-api.service.ts   # Integração com a PokéAPI
│   │   ├── via-cep.service.ts    # Integração com a ViaCEP
│   │   └── photo.service.ts      # Captura de foto via Capacitor
│   ├── tab1/                     # Tela de busca de Pokémon por CEP
│   ├── tab2/                     # Tela de batalha entre Pokémons
│   ├── tab3/                     # Tela exploratória
│   └── tabs/                     # Navegação por abas
├── assets/
├── environments/
└── theme/
```

---

## 🔌 APIs Externas

### PokéAPI
- **Endpoint:** `https://pokeapi.co/api/v2/pokemon/{id}`
- Busca um Pokémon por ID aleatório (1–100)
- Retorna: nome, sprites, altura, peso e habilidades

### ViaCEP
- **Endpoint:** `https://viacep.com.br/ws/{cep}/json`
- Busca dados de endereço a partir de um CEP brasileiro
- Retorna: logradouro, bairro, localidade e UF

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run lint` | Executa a análise de código (ESLint) |
| `npm test` | Executa os testes unitários |
