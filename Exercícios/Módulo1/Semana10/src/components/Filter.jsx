export const Filter = () => {

    function funcaoQualquer() {
        console.log("função qualquer");
      }

return (
   
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

)
}