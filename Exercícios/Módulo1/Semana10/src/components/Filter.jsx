import { useState } from "react";
import { useAppContext } from "../contexts/app-context";

export const Filter = () => {
  const { filterTips } = useAppContext();

  const [campoFiltro, setCampoFiltro] = useState("");

  function filtrar() {
    filterTips(campoFiltro);
  }

  function limparFiltro() {
    setCampoFiltro("");
    filterTips("");
  }

  return (
    <div className="filter-container">
      <input
        placeholder="Busque por uma dica..."
        type="text"
        className="inputField"
        value={campoFiltro}
        onChange={(e) => setCampoFiltro(e.target.value)}

        // caso queira usar o filtro automatico ao digitar, aí nao é necessário os botoes e as funções filtrar e limpa filtro
        // onChange={e => filterTips(e.target.value)}
      />

      <button
        onClick={() => {
          filtrar(campoFiltro);
        }}
        className="searchButton"
      >
        Buscar
      </button>
      <button onClick={limparFiltro} className="searchButton">
        Limpar
      </button>
    </div>
  );
};
