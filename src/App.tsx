import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./themes/default";
import { Home } from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { GitProvider } from "./contexts/GitContext";

/* Usei primeiro o "npm install styled-components@latest", e 
depois um "npm audit fix --force" pra forçar as correções no que 
estava desatualizado para funcionar o <GlobalStyle />*/

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GitProvider>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
      </GitProvider>
    </ThemeProvider>
  );
}

export default App;
