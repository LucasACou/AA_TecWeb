import { useContext, useState } from "react";
import Listagem from "../components/Listagem.jsx";
import { RotaContext } from "../contexts/RotaContext.jsx";
import { LivroContext } from "../contexts/LivroContext.jsx";

function Listar() {
  const [erro, setErro] = useState("");
  const { livros, removerLivro } = useContext(LivroContext);
  const { setRota } = useContext(RotaContext);

  const handleModificar = (id) => {
    setRota(`/editar/${id}`);
  };

  const handleRemover = async (id) => {
    const resposta = await removerLivro(id);
    if (!resposta.sucesso) {
      setErro(resposta.mensagem);
    }
  };

  return (
    <>
      <h2>Meus Livros</h2>
      <Listagem
        itens={livros}
        onModificar={handleModificar}
        onRemover={handleRemover}
      />
      {erro && <p>{erro}</p>}
    </>
  );
}

export default Listar;
