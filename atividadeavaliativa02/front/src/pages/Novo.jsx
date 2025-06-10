import { useContext, useState } from "react";
import { RotaContext } from "../contexts/RotaContext.jsx";
import { LivroContext } from "../contexts/LivroContext.jsx";
import FormularioLivro from "./FormularioLivro.jsx";

function Novo() {
  const [erro, setErro] = useState("");
  const { setRota } = useContext(RotaContext);
  const { adicionarLivro } = useContext(LivroContext);

  const handleSalvar = async (livro) => {
    const resposta = await adicionarLivro(livro);
    if (resposta.sucesso) {
      setErro("");
      setRota("/listar");
    } else {
      setErro(resposta.mensagem);
    }
  };

  return (
    <>
      <h2>Novo Livro</h2>
      <FormularioLivro onSubmit={handleSalvar} />
      {erro && <p>{erro}</p>}
    </>
  );
}

export default Novo;
