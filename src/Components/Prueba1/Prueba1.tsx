import "./prueba1.css";

const Prueba1 = () => {
  let arrayDeNumeros = [2, 5, 6, 123, 2, 4, 65, 1, 124, 6357, 4, 25, 7, 76];
  arrayDeNumeros.sort(function (a, b) {
    return a - b;
  });
  console.log(arrayDeNumeros);
  function generarLetra() {
    var letras = "";
    var numero = (Math.random() * 15).toFixed(0);
    return letras;
  }

  function colorHEX() {
    var coolor = "";
    for (var i = 0; i < 6; i++) {
      coolor = coolor + generarLetra();
    }
    return "#" + coolor;
  }

  //tenes que crear una funcion que devuelva colores aleatorios y agregarlos al style

  function sumarNumerosPares() {
    let suma = 0;
    for (let numero of arrayDeNumeros) {
      if (numero % 2 === 0) {
        suma += numero;
      }
    }
    return suma;
  }
  const suma = sumarNumerosPares();
  console.log("la suma de los numeros pares es:", suma);

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
        <div>
          {arrayDeNumeros.map((numero) => (
            <div
              style={{
                background: `${colorHEX}`,
              }}
            >
              {numero}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>Mostrar la suma de todos los numeros pares del array</h3>
        <div>{suma}</div>
      </section>

      <body>
        <h3>Muestra la información del usuario en una card creada </h3>

        <div className="card">
          <div className="content">
            <h1>Informacion de Pablo</h1>

            <h2>Nombre: "Pablo"</h2>
            <h2>Edad: "27"</h2>
            <h2>Profesión: "Abogado"</h2>
            <h2>Pasatiempos:"Ir al gym", "comer", "salir" </h2>
          </div>
        </div>
      </body>

      <section>
        <h3>
          Acomodar los puntos usando css: el primero al centro, el segundo
          arriba a la derecha, el tercero abajo a la izquierda{" "}
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
