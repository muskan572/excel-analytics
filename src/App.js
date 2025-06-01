import { HashRouter } from "react-router-dom";
import { Router } from "./routes";

import ThemeProvider from "./theme";


export default function App() {
  return (
    
      <HashRouter basename="">
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </HashRouter>
  
  );
}
