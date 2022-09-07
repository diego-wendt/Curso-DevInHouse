import { Summary, Filter, TipCard, CardList } from "../components";
import { useAppContext } from "../contexts/app-context";

const dica = {
  titulo: "Teste",
  linguagem: "mais um teste",
  categoria: "devOps",
  descricao: "lorem10 lorem10 lorem10 lorem10lorem10 lorem10 lorem10 lorem10",
  video: "http://www.globo.com",
};

export const MainContent = () => {

  const result = useAppContext();
  console.log(result)


  return (
    <main className="main-container">
      <Summary />

      <Filter />

      <CardList>
        <TipCard tip={dica} />
        <TipCard tip={dica} />
        <TipCard tip={dica} />
      </CardList>
    </main>
  );
};
