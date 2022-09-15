import { CustomThemeProvider } from "./contexts";
import { AppLayout } from "./layout";


function App() {
  return (
    <CustomThemeProvider>
      
      <AppLayout/>
       
    </CustomThemeProvider>
  );
}

export default App;
