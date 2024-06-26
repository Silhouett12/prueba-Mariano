import "./prueba1.css";

const Prueba1 = () => {
  const arrayDeNumeros = [2, 5, 6, 123, 2, 4, 65, 1, 124, 6357, 4, 25, 7, 76];

  const suma = arrayDeNumeros;

  const usuario = {
    nombre: "Pablo",
    edad: "27",
    profesión: "Abogado",
    pasatiempos: ["Ir al gym", "comer", "salir"],
  };

  return (
    <div className="prueba-1-container">
      <h1>JAVASCRIPT BASICO, CSS Y REACT BASICO</h1>
      <section>
        <h3>
          Dado un array de numeros, ordenarlos de menor a mayor y mostrarlos en
          la pantalla con colores distintos
        </h3>
        <div>{arrayDeNumeros}</div>
      </section>

      <section>
        <h3>Mostrar la suma de todos los numeros pares del array</h3>
        <div>{suma}</div>
      </section>

      <section>
        <h3>Muestra la información del usuario en una card creada </h3>

        {/* ACÁ SE DEBE CREAR LA CARD */}
      </section>

      <section>
        <h3>
          Acomodar los puntos usando css: el primero al centro, el segundo arriba a la
          derecha, el tercero abajo a la izquierda{" "}
        </h3>

        <section style={{ display: "flex", gap: "20px" }}>
          <div className="cuadrado1">
            <p className="punto1">.</p>
          </div>
          <div className="cuadrado2">
            <p className="punto2">.</p>
          </div>
          <div className="cuadrado3">
            <p className="punto3">.</p>
          </div>
        </section>
      </section>

      <section>
        <h3>
          * Para poder pasar a la siguiente prueba tenes que crear un tab de
          navegación usando react router *
        </h3>
      </section>
    </div>
  );
};

export default Prueba1;
