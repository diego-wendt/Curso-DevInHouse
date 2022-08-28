import "./App.css";
import { Footer, Header, Secao } from "./Components";
import { pratos } from "./services/pratos.json";

const produtos = pratos;

function App() {
  const tiposPrincipais = [...new Set(produtos.map((p) => p.secao))];
  // console.log(tiposPrincipais);

  return (
    <div className="App">
      <Header />

      {tiposPrincipais.map((p) => (
        <Secao key={p} secao={p} produtos={produtos} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
