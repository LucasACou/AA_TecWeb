import { useState, useEffect } from "react";
import InputNome from "../components/InputNome";

function FormularioLivro(props) {
  const [nome, setNome] = useState("");
  const [erroNome, setErroNome] = useState("");
  const [autor, setAutor] = useState("");
  const [erroAutor, setErroAutor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome) {
      setErroNome("Nome é obrigatório");
    }
    if (!autor) {
      setErroAutor("Autor é obrigatório");
    }
    if (nome && autor) {
      props.onSubmit({ nome, autor });
      setNome("");
      setAutor("");
      setErroNome("");
      setErroAutor("");
    }
  };

  useEffect(() => {
    if (props.valores) {
      setNome(props.valores.nome || "");
      setAutor(props.valores.autor || "");
    }
  }, [props.valores]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputNome
          id="nome"
          label="Nome do Livro"
          valor={nome}
          onChange={(e) => setNome(e.target.value)}
          erro={erroNome}
          required
        />
        <InputNome
          id="autor"
          label="Nome do Autor"
          valor={autor}
          onChange={(e) => setAutor(e.target.value)}
          erro={erroAutor}
          required
        />
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default FormularioLivro;
