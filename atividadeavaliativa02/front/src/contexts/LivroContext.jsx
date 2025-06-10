import { createContext, useState, useEffect } from "react";
import { buscarTodos, adicionar, modificar, remover, buscarPorId} from "../services/LivroService";

const LivroContext = createContext();

function LivroProvider({ children }) {
  const [livros, setLivros] = useState([]);

  const carregarLivros = async () => {
    const resultado = await buscarTodos();
    if (resultado.sucesso) {
      setLivros(resultado.dados);
    }
  };

  const adicionarLivro = async (livro) => {
    const resultado = await adicionar(livro);
    if (resultado.sucesso) {
      setLivros([...livros, resultado.dados]);
    }
    return resultado;
  };

  const editarLivro = async (id, livroAtualizado) => {
    const resultado = await modificar(id, livroAtualizado);
    if (resultado.sucesso) {
      setLivros(livros.map((livro) => livro.id === id ? resultado.dados : livro));
    }
    return resultado;
  };

  const removerLivro = async (id) => {
    const resultado = await remover(id);
    if (resultado.sucesso) {
      setLivros(livros.filter((livro) => livro.id !== id));
    }
    return resultado;
  };

  const buscarLivroPorId = async (id) => {
    const resultado = await buscarPorId(id);
    return resultado;
  };

  useEffect(() => {
    carregarLivros();
  }, []);

  return (
    <LivroContext.Provider value={{ livros, adicionarLivro, editarLivro, removerLivro, buscarLivroPorId}}>
      {children}
    </LivroContext.Provider>
  );
}

export {LivroContext, LivroProvider};