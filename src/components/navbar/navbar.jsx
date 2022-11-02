import { useContext } from "react";
import ThemeContext from "../../context/ThemeContex";
import "./navbar_style.css";

const Navbar = () => {
  const{theme,handleTheme}=useContext(ThemeContext);
  return (
    <>
    <nav className={theme} style={{color: "white"}}>
      <h1>Ricky and Morty</h1>
      
      <input type="radio" 
      name="theme" 
      id="light-context" 
      onClick={handleTheme} 
      value= "light"
      />
      
      <label htlmlFor="light-context">Light</label>

      <input
      type="radio"
      name="theme"
      id="dark-context"
      onClick={handleTheme}
      value="dark"
      />

      <label htmlFor="dark-context">Dark</label>



    </nav>
    </>
  );
};

export default Navbar;
