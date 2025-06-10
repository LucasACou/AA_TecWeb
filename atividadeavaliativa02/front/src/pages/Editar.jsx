import { useContext, useEffect, useState } from "react";
import { RotaContext } from "../contexts/RotaContext.jsx";
import { LivroContext } from "../contexts/LivroContext.jsx";
import Formulario from "./FormularioLivro.jsx";

function Editar() {
  const { rota, setRota } = useContext(RotaContext);
  const { buscarLivroPorId, editarLivro } = useContext(LivroContext);
  const [livro, setLivro] = useState({});
  const [erro, setErro] = useState("");
  const id = rota.replace("/editar/", "");

  useEffect(() => {
    const carregar = async () => {
      const resposta = await buscarLivroPorId(id);
      if (resposta.sucesso) {
        setLivro(resposta.dados);
        setErro("");
      } else {
        setErro(resposta.mensagem);
      }
    };
    carregar();
  }, [id, buscarLivroPorId]);

  const handleSalvar = async (livroAtualizado) => {
    const resposta = await editarLivro(id, livroAtualizado);
    if (resposta.sucesso) {
      setErro("");
      setRota("/listar");
    } else {
      setErro(resposta.mensagem);
    }
  };

  return (
    <>
      <h2>Editar Livro</h2>
      <Formulario onSubmit={handleSalvar} valores={livro} />
      {erro && <p>{erro}</p>}
    </>
  );
}

export default Editar;
