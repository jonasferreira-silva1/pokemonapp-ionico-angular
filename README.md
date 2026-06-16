# 🎮 PokémonApp: A Jornada do Treinador-Desenvolvedor

> "No mundo dos monstrinhos de bolso, a tecnologia e a aventura caminham juntas. Mas o que acontece quando o seu mapa de exploração é o sistema de correspondência postal brasileiro?"

<p align="center">
  <img src="pokemonApp/src/assets/icon/Captura%20de%20tela%202026-06-16%20144804.png" alt="Visão Geral do PokémonApp" width="800">
</p>

---

## 📖 A História: Em Busca do CEP Sagrado

Era uma vez um jovem programador que sonhava em se tornar um Mestre Pokémon. Cansado de procurar criaturas no capim alto convencional, ele decidiu construir um dispositivo revolucionário: o **PokémonApp**.

Em sua jornada pelas rotas do código, ele descobriu que o mundo físico e o digital podiam se fundir. Em vez de caminhar quilômetros, bastava digitar um **CEP (Código de Endereçamento Postal)** brasileiro. O dispositivo enviava um sinal luminoso para a nuvem através do satélite **ViaCEP**, mapeando as ruas do Brasil. Ao mesmo tempo, a energia do sinal atraía um Pokémon selvagem diretamente da grande rede da **PokéAPI**.

### Os Três Módulos do Dispositivo

1.  **Aba 1 — O Radar de Exploração (Buscar Pokémon)**
    *   O treinador digita o CEP de seu paradeiro.
    *   O dispositivo decodifica a rua, o bairro e o estado brasileiro correspondente.
    *   Ao mesmo tempo, as ondas de rádio vasculham a área e trazem um Pokémon aleatório com seus atributos físicos e habilidades escaneados em tempo real.
    
2.  **Aba 2 — A Arena Lendária (Batalhar)**
    *   Todo Pokémon selvagem capturado precisa provar seu valor. Ao entrar na Arena, um oponente aleatório surge das sombras.
    *   O treinador inicia o combate físico! Em um design clássico de RPG retro, os Pokémons avançam, colidem e sofrem dano físico enquanto barras de HP (vida) decrescem na tela.
    *   O critério para decidir o grande vencedor? O **número de habilidades** de cada um.
    *   *Recurso Extra:* Com a câmera de viagem acoplada (Capacitor), o treinador pode registrar fotos do momento em sua galeria de memórias.

3.  **Aba 3 — O Registro Histórico (Pokédex)**
    *   Após o calor da batalha na Arena, a Pokédex registra os dados do último confronto, exibindo lado a lado o Pokémon do treinador e seu oponente, coroando o grande vencedor com uma insígnia de ouro.

---

## 📱 O Compartimento Secreto: Mockup iPhone 14 Pro Max

Para dar ao treinador a sensação real de usar um dispositivo de última geração, o simulador do app no computador foi encapsulado dentro de um **iPhone 14 Pro Max**:
- Moldura fosca que imita titânio escuro.
- Cantos arredondados e a famosa **Dynamic Island** integrada no topo.
- Design responsivo que se transforma em tela cheia ao ser aberto em um celular físico de verdade!

---

## 🚀 Como Iniciar a Sua Jornada (Como Rodar o Projeto)

Siga os passos abaixo para baixar o dispositivo de exploração em sua máquina local e começar a sua jornada.

### 📋 Pré-requisitos
Antes de tudo, garanta que você tem instalado em seu computador:
*   [Node.js](https://nodejs.org/) (versão 18 ou superior)
*   [Git](https://git-scm.com/) (para clonar o repositório)

Verifique se estão prontos rodando no terminal:
```bash
node -v
npm -v
```

---

### 1. Clonar o Repositório (Baixar o Projeto)
Abra o terminal do seu sistema operacional e clone o repositório em sua máquina:
```bash
git clone https://github.com/SEU-USUARIO/projeto-mobile.git
```
*(Substitua o link acima pelo link oficial do seu repositório do GitHub)*

Navegue para a pasta do projeto clonado:
```bash
cd projeto-mobile
```

---

### 2. Acessar a Pasta do Aplicativo
O código-fonte do aplicativo está contido dentro da pasta `pokemonApp`. Acesse-a:
```bash
cd pokemonApp
```

---

### 3. Instalar as Dependências do Dispositivo
Instale todas as ferramentas necessárias para rodar o aplicativo:
```bash
npm install
```

---

### 4. Lançar o Servidor de Desenvolvimento
Inicie o sistema e execute o app no seu navegador local:
```bash
npm start
```
Após o processo de compilação terminar, abra o seu navegador no endereço:
👉 **[http://localhost:4200](http://localhost:4200)**

---

## 🏆 As Regras da Arena de Habilidades

O combate é decidido friamente com base na versatilidade do Pokémon:

| Situação | Resultado Visual |
|---|---|
| Seu Pokémon possui **mais habilidades** que o oponente | 👑 **VITÓRIA!** (Oponente HP cai a 0) |
| Seu Pokémon possui **menos habilidades** que o oponente | 💀 **DERROTA!** (Seu HP cai a 0) |
| Ambos possuem a **mesma quantidade** de habilidades | 🤝 **EMPATE!** (Ambos HP caem a 20%) |

---

## 🛠️ Tecnologias de Elite Utilizadas

| Tecnologia | Versão | Função na Aventura |
|---|---|---|
| [Angular](https://angular.io/) | 16 | O motor principal que gerencia o fluxo de telas |
| [Ionic Framework](https://ionicframework.com/) | 7 | O design do visor do dispositivo móvel |
| [Capacitor](https://capacitorjs.com/) | 5 | Conexão com a câmera física de fotos |
| [TypeScript](https://www.typescriptlang.org/) | ~5.0 | Tipagem rigorosa dos dados de combate |
| [ViaCEP](https://viacep.com.br/) | — | O radar postal de endereçamento no Brasil |
| [PokéAPI](https://pokeapi.co/) | — | O catálogo mundial de dados Pokémon |

---

## 🏗️ Estrutura de Arquivos da Jornada

```
src/
├── app/
│   ├── services/
│   │   ├── poke-api.service.ts   # Conexão com PokéAPI e persistência do placar
│   │   ├── via-cep.service.ts    # Conector com o satélite ViaCEP
│   │   └── photo.service.ts      # Controle nativo da câmera de fotos
│   ├── tab1/                     # Visor de busca de Pokémon por CEP
│   ├── tab2/                     # A Arena de Batalha com animações e logs
│   ├── tab3/                     # Pokédex (painel com os dois últimos lutadores)
│   └── tabs/                     # Botões inferiores de alternância do dispositivo
├── global.scss                   # Estilos globais (contém o Mockup do iPhone 14)
```

> **Que a sorte esteja com você nesta jornada para se tornar o maior Treinador-Desenvolvedor de todos os tempos!** 🚀
