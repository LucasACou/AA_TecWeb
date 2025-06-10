function Listagem(props) {
  return (
    <ul>
      <li>
        <span>Nome do Livro</span>
        <span>Autor do Livro</span>
        <span>Ações</span>
      </li>
      {props.itens.map((livro) => (
        <li key={livro.id}>
          <span>{livro.nome}</span>
          <span>{livro.autor}</span>
          <span>
            <button onClick={() => props.onModificar(livro.id)}>
              Modificar
            </button>
            <button onClick={() => props.onRemover(livro.id)}>Remover</button>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Listagem;