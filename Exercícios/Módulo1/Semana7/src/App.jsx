import "./App.css";
import { Footer, Header, Secao } from "./Components";
import { pratos } from "./services/pratos.json";

const produtos = pratos;

function App() {


  return (
    <div className="App">

      {/* <Header /> */}

      <Secao secao="Entradas" produtos={produtos}/>
      <Secao secao="Principais" produtos={produtos}/>
      <Secao secao="Sobremesas" produtos={produtos}/>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
