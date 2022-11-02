import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

const initialTheme = "light";
//tenemos q hacer uso de la propiedas especial de los componentes de react
//q son los children
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvider };
export default ThemeContext;
