import React, { useEffect, useState } from "react";
import "./prueba2.css";
import axios from "axios";

const Prueba2 = () => {
  const [contador, setContador] = useState(0);

  const getImage = async () => {

    // con esta funcion debes traer la imagen de la api, usar axios
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="prueba-2-container">
      <section>
        <h3>
          Crea un botón que incremente el contador en 1 cuando le des click y otro que lo decremente
        </h3>
        <div>
          <button>-</button>
          <button>+</button>
          <div>contador = {contador} </div>
        </div>
      </section>

      <section>
        <h3>
          Hace un llamado basico a la siguiente api que trae un objecto con la
          información de un personaje. mostrar sus datos:
          https://rickandmortyapi.com/api/character/1.
        </h3>
      </section>

      <section>
        <h3>
          Crea un botón que muestre un mensaje alternativo cada vez que se haga
          click:
        </h3>
        <div>
          <button>Hola soy un botón</button>
          <div>mensaje = {contador} </div>
        </div>
      </section>
    </div>
  );
};

export default Prueba2;
