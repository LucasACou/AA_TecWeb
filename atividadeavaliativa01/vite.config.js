export default {
  appType: "mpa",
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        home: "./src/home.html",
        cadastro: "./src/cadastro.html",
        itens: "./src/itens.html",
      },
    },
  },
};
