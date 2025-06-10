import { useContext } from "react";
import { RotaContext } from "../contexts/RotaContext.jsx";

function Menu() {
  const { setRota } = useContext(RotaContext);
  const handleNavegar = (rota) => (e) => {
    e.preventDefault();
    setRota(rota);
  };
  return (
    <nav>
      <ul>
        <li>
          <button onClick={handleNavegar("/listar")}>Meus Livros</button>
        </li>
        <li>
          <button onClick={handleNavegar("/novo")}>Adicionar Livro</button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;