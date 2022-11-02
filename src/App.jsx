/*
  4.1.2 - Nombre, función, valor [A]
  El código debe ser semánticamente correcto y sin
  errores significativos.
  ---
  4.1.1 - Análisis (código) [A]
  Toda tecnología accesible hace uso de las propiedades de
  nombre, función y valor para identificar correctamente los
  elementos HTML estándar. Cualquier componente
  personalizado también debe traer estos atributos de forma adecuada.
*/

import "./App.css";
import Navbar from "./components/navbar/navbar";
import Email from "./components/email/email";
import About from "./components/about/about";
import Video from "./components/video/video";
import { ThemeProvider } from "./context/ThemeContex";

const App = () => {
  return (
    <>
  <ThemeProvider>
      <Navbar />
      <main className="footerPage">
        <aside>
          <h2>Vídeo</h2>
          <Video />
        </aside>
        <div className="about">
          <h2>Sobre Rick and Morty</h2>
          <About />
        </div>
        <div className="section">
          <h2>Recibir noticias sobre la serie</h2>
          <Email />
        </div>
      </main>
      </ThemeProvider>
    </>
  );
};

export default App;
