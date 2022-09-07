import { Home } from "./pages/Home";
import { AppContextProvider } from "./contexts/app-context";

function App() {
  return (
    <>
      <AppContextProvider>
        <Home />
      </AppContextProvider>
    </>
  );
}

export default App;
