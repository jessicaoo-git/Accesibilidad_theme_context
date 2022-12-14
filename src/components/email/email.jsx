/*

3.3.1 - Identificación de errores [A]

Cada vez que se muestra un mensaje de error,
debe identificarse claramente el elemento
que generó el error de forma visual y sonora (ejemplo:
cambio de color en el elemento + un icono de alerta +
un mensaje de texto).

*/

import { useContext } from "react";
import ThemeContext from "../../context/ThemeContex";
import "./emails_style.css";

const Email = () => {
  const{theme}=useContext(ThemeContext);
  return (
    // Se debe verificar si el campo de
    // el correo electrónico contiene algo escrito. Si no, debe
    // marcar un error en el input.
    // Para esto se puede utilizar en el input de correo electrónico el atributo "required".
    <form className={theme}>
      <input type="email" placeholder="Ingresá tu email aquí" />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Email;
