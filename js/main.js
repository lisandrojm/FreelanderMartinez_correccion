///////////////////////////////////////////////////////////////////////////////////////
//función contenedora que ejecuta todas las funciones.
const container = (e) => {
  e.preventDefault();

  /*  moneda */
  let monedaInput = document.getElementById("monedaInput").value;
  console.log("La moneda es ingresada es  : " + monedaInput);
  let moneda = monedaAbreviada(monedaInput);
  console.log("Abreviatura : " + moneda);

  /* ingresos */
  let ingresos = parseInt(document.getElementById("ingresosInput").value);
  console.log("Pretensión de ingresos mensuales: " + ingresos);
  console.log(ingresos);

  /* dias */
  let dias = parseInt(document.getElementById("diasInput").value);
  console.log("Cantidad de días laborables " + dias);
  console.log(dias);

  /* horas */
  let horas = parseInt(document.getElementById("horasInput").value);
  console.log("Cantidad de horas laborables: " + horas);
  console.log(horas);

  /* ejecución de la función que calcula los cantidad de dias y horas saludables */
  /* se le pasan como parametros los las variables que reciben los valores de los inputs */
  cantidadDiasHoras(dias, horas);
  /* gastos */
  let gastosOficina = parseInt(document.getElementById("oficinaInput").value);
  console.log("Gastos de Oficina mensuales: " + gastosOficina);
  console.log(gastosOficina);

  let gastosSoftware = parseInt(document.getElementById("softwareInput").value);
  console.log("Gastos de Software Mensuales: " + gastosSoftware);
  console.log(gastosSoftware);

  /* costos */
  let costosImpuestos = parseInt(
    document.getElementById("impuestosInput").value
  );
  console.log("Costos Impuesto Mensuales: " + costosImpuestos);
  console.log(costosImpuestos);

  let costosOtros = parseInt(document.getElementById("otrosCostosInput").value);
  console.log("Otros Costos Mensuales: " + costosOtros);
  console.log(costosOtros);

  /* ejecución de la función que calcula los gastos totales mensuales en un objeto */
  /* se le pasan como parametros los las variables que reciben los valores de los inputs */
  let totalGastos = gastosTotalesEnObjeto(gastosOficina, gastosSoftware);

  /* ejecución de la función que calcula los gastos totales mensuales en un array */
  /* se le pasan como parametros los las variables que reciben los valores de los inputs */
  console.log(costosTotalesEnArray(costosImpuestos, costosOtros));
  let totalCostos = costosTotalesEnArray(costosImpuestos, costosOtros);

  /* ejecución de la función que calcula costos por hora */
  calcularPorHora(ingresos, dias, horas, totalGastos, totalCostos, moneda);
  let porHoraTotal = calcularPorHora(
    ingresos,
    dias,
    horas,
    totalGastos,
    totalCostos,
    moneda
  );

  console.log(porHoraTotal);

  /* ejecución de la función que modifica el DOM */
  domTabla(
    moneda,
    ingresos,
    dias,
    horas,
    gastosOficina,
    gastosSoftware,
    costosImpuestos,
    costosOtros,
    porHoraTotal
  );
};

///////////////////////////////////////////////////////////////////////////////////////
/* EVENTOS */
let btnMoneda = document.getElementById("btn");
btnMoneda.addEventListener("click", container);

///////////////////////////////////////////////////////////////////////////////////////
/* ARROW FUNCTION para cambiar el nombre de la moneda por la abreviatura para la tabla */
/* recibe como parámetro el ingreso del usuario en el formulario con el id:monedaInput */
function monedaAbreviada(moneda) {
  /*   OPERADOR TERNARIO */
  /*   SWITCH */
  switch (moneda) {
    case "Dólares":
      moneda = "USD";
      break;

    default:
      moneda = "EUR";
      break;
  }
  return moneda;
}

///////////////////////////////////////////////////////////////////////////////////////
/* ARROW FUNCTION para cambiar el nombre de la moneda por la abreviatura para la tabla */
/* recibe como parámetro el ingreso del usuario en el formulario con el id:monedaInput */
function cantidadDiasHoras(dias, horas) {
  /* OPERADOR LÖGICO && */
  /* CONDICIONALES ANIDADAS */
  if (dias > 15 && dias < 23) {
    console.log("Pretendes trabajar una cantidad de días logicos");
  } else if (dias < 10) {
    console.log("Pretendes trabajar muy pocos días en relación a la media.");
  } else if (dias > 23 || horas > 8) {
    console.log(
      "Pretendes trabajar muchos días o muchas horas en relación a la media. Cuida tu salud."
    );
  } else {
  }
}

///////////////////////////////////////////////////////////////////////////////////////
/* OBJETOS / CLASS  */
//Calcular gastos fijos totales en un objeto.

/* recibe como parámetro el ingreso del usuario en el formulario con los id:oficinaInput y id:gastosInput*/
const gastosTotalesEnObjeto = (oficinaInput, softwareInput) => {
  class GastosFijos {
    constructor(oficina, software) {
      this.oficina = oficina;
      this.software = software;
    }
    resumen(gastosFijosTotales) {
      console.log(
        "OBJETO/CLASS: El total de tus Gastos Fijos mensuales (Oficina + Software) son: " +
          gastosFijosTotales
      );
    }
  }
  const persona1 = new GastosFijos(oficinaInput, softwareInput);
  // DESESTRUCTURACIÓN del objeto creado con el constructor class: persona1
  const { oficina, software } = persona1;
  let gastosFijosTotales = oficina + software;
  persona1.resumen(gastosFijosTotales);

  /*   Objeto construido */
  console.log(persona1);

  return gastosFijosTotales;
};

///////////////////////////////////////////////////////////////////////////////////////
//ARRAYS
//Calcular la costosFijosTotales de Costos de Vida en un array

function costosTotalesEnArray(impuestosInput, otrosCostosInput) {
  /*   guardar inputs en un array vacío */
  let costosInputs = [];
  /*   bucle WHILE para hacer un pushear los argumentos recibidos en el array vacío */
  let i = 0;
  while (i < 2) {
    costosInputs.push(arguments[i]);
    i++;
  }

  /*   bucle FOR para sumar todos los elementos del array */
  let suma = 0;
  for (let n of costosInputs) {
    suma += n;
  }

  console.log("Tus Impuestos: " + costosInputs[0]);
  console.log("Otros Costos: " + costosInputs[1]);
  console.log(costosInputs);
  console.log("La suma del array es :" + suma);

  //Utilización del Operador SPREAD para detectar el costo de vida mas alto y en el caso
  //que ese sea Otros Costos decirle al usuario que lo revise para intentar bajarlo.

  console.log("Spreed operator test");

  /*   Condicional if.. else */
  if (costosInputs[1] > costosInputs[0]) {
    console.log(
      //Utilización del OPERADOR AVANZADO SPREAD para concatenar el valor ingresado más alto
      "El valor mayor de tus Costos de vida es de " +
        Math.max(...costosInputs) +
        " que corresponde al ingreso de Otros Costos. Este valor supera el costo de Tus Impuestos: " +
        /* Concatenación utilizando el index de un array */
        costosInputs[0] +
        ". Es un mal indicador. Tenlo en cuenta e intenta reducirlos a futuro."
    );
  } else {
    console.log(
      "El balance de tus Costos de Vida entre tus Impuestos y tus Otros costos es lógico."
    );
  }

  return suma;
}

////////////////////////////////////////////////////////////////////////////////
// ARROW FUNCTION calcularPorHora para sacar el valor por hora con parámetros dinámicos // Abstracción para reutilizar en Ingresos pretendidos, Gastos fijos y Costos de vida mensuales.

const calcularPorHora = (
  resultadoIngresos,
  resultadoDias,
  resultadoHoras,
  resultadoGastos,
  resultadoCostos,
  moneda
) => {
  let totalIngresos = resultadoIngresos;
  let totalDias = resultadoDias;
  let totalHoras = resultadoHoras;
  let totalGastos = resultadoGastos;
  let totalCostos = resultadoCostos;
  function porHora(total, dias, horas) {
    return total / (dias * horas);
  }
  let precioPorHora = porHora(totalIngresos, totalDias, totalHoras);
  let gastosPorHora = porHora(totalGastos, totalDias, totalHoras);
  let costosPorHora = porHora(totalCostos, totalDias, totalHoras);
  let precioPorHoraLibreDeGastos =
    precioPorHora + gastosPorHora + costosPorHora;
  resultadoIngresos < resultadoGastos + resultadoCostos
    ? /*   OPERADOR TERNARIO */
      console.log(
        "Tus pretensiones de Ingreso son mas bajas que tus gastos. Esperemos que no trabajes de programador."
      )
    : console.log(
        "Según los datos que ingresaste el cálculo en Horas de trabajo es:\n" +
          "\n" +
          "Dinero pretendido por Hora de Trabajo libre de gastos: " +
          // metodo toFixed() para devolver el precio por hora con dos decimales.
          precioPorHora.toFixed(2) +
          " " +
          moneda +
          ".\n" +
          "Gastos por Hora de Trabajo: " +
          gastosPorHora.toFixed(2) +
          " " +
          moneda +
          ".\n" +
          "Costo de Vida por Hora de Trabajo: " +
          costosPorHora.toFixed(2) +
          " " +
          moneda +
          ".\n" +
          "\n" +
          "Para ganar  " +
          resultadoIngresos +
          " " +
          moneda +
          " mensuales trabajando " +
          resultadoHoras +
          " horas por día durante " +
          resultadoDias +
          " días por mes, debes cobrar " +
          precioPorHoraLibreDeGastos.toFixed(2) +
          " " +
          moneda +
          " por Hora de Trabajo."
      );
  return precioPorHoraLibreDeGastos.toFixed(2);
};

///////////////////////////////////////////////////////////////////////////////////////
/* funcion DOM */

const domTabla = (
  moneda,
  ingresos,
  dias,
  horas,
  gastosOficina,
  gastosSoftware,
  costosImpuestos,
  otrosCostos,
  porHoraTotal
) => {
  let container = document.getElementById("dom");
  container.innerHTML = `
          <!--          START domTabla -->
          <div class="pt-4 pb-4">
            <div
              class="text-light row justify-content-evenly p-2 border border-light rounded-3"
            >
              <div>
                <h3><b>Resultado</b></h3>
              </div>
              <div>
                <p class="section__1__p">
                  Según los datos que ingresaste para ganar ${moneda} ${ingresos}
                  mensuales trabajando ${horas} horas por día durante ${dias} días por
                  mes, debes cobrar ${moneda} ${porHoraTotal} por Hora de Trabajo.

               <h6 class="section__1__p">* El precio de tu hora de trabajo ya tiene incluidos los gastos y los costos por hora.</h6>
                </p>
              </div>
            </div>
            <div
              id="domTabla"
              class="text-light row justify-content-evenly pt-4"
            >
              <div>
                <h4>Datos Ingresados</h4>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Detalle</th>
                    <th scope="col">Ingreso</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Moneda</td>
                    <td>${moneda}</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Ingresos pretendido</td>
                    <td>${ingresos}</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Días por Mes</td>
                    <td>${dias}</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Horas por día</td>
                    <td>${horas}</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Gastos de Oficina mensuales</td>
                    <td>${gastosOficina}</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Gastos de Software mensuales</td>
                    <td>${gastosSoftware}</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Costo mensual de impuestos</td>
                    <td>${costosImpuestos}</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Otros costos mensuales</td>
                    <td>${otrosCostos}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--          END domTabla -->
  `;
};

///////////////////////////////////////////////////////////////////////////////////////
/* funcion que guarda todos los inputs en localStorage y los muestra al recargar la página */
const form = document.getElementById("formulario");

form.addEventListener("click", function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input");

  let data = {};

  inputs.forEach(function (input) {
    data[input.id] = input.value;
  });

  localStorage.setItem("formData", JSON.stringify(data));
});

window.addEventListener("load", function () {
  const data = JSON.parse(localStorage.getItem("formData"));

  if (data !== null) {
    const inputs = form.querySelectorAll("input");

    inputs.forEach(function (input) {
      input.value = data[input.id];
    });
  }
});
