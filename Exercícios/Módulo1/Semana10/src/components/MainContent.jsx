import { Summary, Filter, TipCard, CardList } from "../components";
import { useAppContext } from "../contexts/app-context";

export const MainContent = () => {
  const { tips } = useAppContext();

  return (
    <main className="main-container">
      <Summary />

      <Filter />

      <CardList>
        {tips.map((card, index) => (
          <TipCard key={index} tip={card} />
        ))}
      </CardList>
    </main>
  );
};
