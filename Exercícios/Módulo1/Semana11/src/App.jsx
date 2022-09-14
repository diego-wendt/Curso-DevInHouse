import { CustomThemeProvider } from "./contexts";
import { AppLayout } from "./layout";
import { GlobalStyle } from "./themes";


function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle/>
      <AppLayout>
      <p>Olá</p>
      </AppLayout>
    </CustomThemeProvider>
  );
}

export default App;
