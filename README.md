# Atividades Avaliativas - Tecnologias Web

## Atividade Avaliativa 01 – Tecnologias Web

Este projeto é uma aplicação web simples que permite o **cadastro**, **listagem** e **remoção de itens**, com armazenamento em memória. Desenvolvido como parte da disciplina _Tecnologias para Web_.

---

### Como executar o projeto

Siga os passos abaixo para rodar o projeto localmente:

1. Acesse o repositório no GitHub:  
[https://github.com/LucasACou/AA_TecWeb](https://github.com/LucasACou/AA_TecWeb)

2. Clone o repositório no VS Code:
```bash
git clone https://github.com/LucasACou/AA_TecWeb
```

3. Use o comando para entrar na pasta principal do projeto:
```bash
cd atividadeavaliativa01
```

4. Use os comandos para poder rodar o projeto:
```bash
npm install
npm run dev
```

5. Abra o link gerado, no navegador(*geralmente http://localhost:5173*)

---

## Atividade Avaliativa 02 – Tecnologias Web

Este projeto é uma aplicação web que permite por meio de API REST o **cadastro**, **listagem**, **edição** e **remoção de itens**,usando um contexto de usa chamandos HTTP do tipo GET, POST, PUT, DELETE. Desenvolvido como parte da disciplina _Tecnologias para Web_.

---

### Como executar o projeto

Siga os passos abaixo para rodar o projeto localmente:

1. Acesse o repositório no GitHub:  
[https://github.com/LucasACou/AA_TecWeb](https://github.com/LucasACou/AA_TecWeb)

2. Clone o repositório no VS Code:
```bash
git clone https://github.com/LucasACou/AA_TecWeb
```

3. Use o comando para entrar na pasta principal do projeto:
```bash
cd atividadeavaliativa02
```

4. Use os comandos para instalar o pacote json-server na pasta **back** e iniciar a execução da API REST:

```bash
cd back
npm install json-server
npx json-server db.json
```

5. Abra outro terminal e use os comando para instalar as dependências do projeto e a biblioteca axios na pasta **front** e executar o front-end do projeto :

```bash
cd ../front
npm install 
npm install axios
npm run dev
```

6. Abra o link gerado, no navegador(*geralmente http://localhost:5173*)

Integrantes: 
Arthur José Guedes Oliveira - 2222130059
Lucas Assunção Coutinho - 2222130011
