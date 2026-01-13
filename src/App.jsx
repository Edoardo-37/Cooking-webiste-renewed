import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTopOnRouteChange from "./components/UI/ScrollToTopOnRouteChange";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
// pages imports
import Home from "./pages/Home";
import ListaRicette from "./pages/ListaRicette";
import PaginaNewsletter from "./pages/PaginaNewsletter";
import RicettaInDettaglio from "./pages/RicettaInDettaglio";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      {/* reset coordinate scroll della finestra quando si passa da una pagina all'altra tramite componente Link di react-router */}
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ListaRicette" element={<ListaRicette />}></Route>
        <Route path="/PaginaNewsletter" element={<PaginaNewsletter />}></Route>
        {/* Le signole ricette sono ciclate e create dinamicamente con route dinamica*/}
        <Route
          path="/ListaRicette/:slug"
          element={<RicettaInDettaglio />}
        ></Route>
      </Routes>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
