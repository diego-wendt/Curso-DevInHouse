import { Summary } from "./Summary";

export const MainContent = () => {
  function funcaoQualquer() {
    console.log("função qualquer");
  }

  return (
    <main className="main-container">
      {/* <!-- summary --> */}

      <Summary />

      {/* <!-- filter --> */}
      <div className="filter-container">
        <input
          placeholder="Busque por uma dica..."
          type="text"
          className="inputField"
        />
        <button onClick={funcaoQualquer} className="searchButton">
          Buscar
        </button>
        <button onClick={funcaoQualquer} className="searchButton">
          Limpar
        </button>
      </div>

      {/* <!-- card list --> */}
      <div className="cardList">
        {/* <!-- card --> */}
        <div className="tipcard-container">
          <h2 className="title">Título da dica</h2>
          <div className="metadata">
            <div>
              Linguagem: <span className="metaValue">JavaScript</span>
            </div>
            <div>
              Categoria: <span className="metaValue">Back End</span>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            sunt harum et velit, eveniet molestiae est repellat dicta hic
            aspernatur officiis beatae aliquid itaque sit aut nulla error culpa
            ratione?
          </div>
          <div className="btn-group align-left">
            <button className="btn primary" type="submit">
              editar
            </button>
            <button className="btn secondary" type="submit">
              YouTube
            </button>
            <button className="btn secondary" type="submit">
              apagar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
