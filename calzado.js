const contenedor = document.getElementById("productosCalzado");
// arreglo objs productos
const zapatos = [
  {
    descripcion: "Zapato de tacón negro clásico, cómodo y elegante.",
    costo: 62999,
    ruta: "\\src\\assets\\img\\zapatos\\zapato.jpg"
  },
  {
    descripcion: "Balerina rosa suave con detalle de lazo frontal.",
    costo: 39999,
    ruta: "\\src\\assets\\img\\zapatos\\zapato.jpg"
  },
  {
    descripcion: "Sandalia dorada de tiras, ideal para eventos formales.",
    costo: 54999,
    ruta: "\\src\\assets\\img\\zapatos\\zapato.jpg"
  },
  {
    descripcion: "Zapatilla deportiva blanca, estilo urbano y casual.",
    costo: 49999,
    ruta: "\\src\\assets\\img\\zapatos\\zapato.jpg"
  },
  {
    descripcion: "Botín negro de cuero, cierre lateral y tacón medio.",
    costo: 71999,
    ruta: "\\src\\assets\\img\\zapatos\\zapato.jpg"
  },
  {
    descripcion: "Sandalia plana azul con tiras cruzadas, cómoda.",
    costo: 45999,
    ruta: "\\src\\assets\\img\\zapatos\\zapato.jpg"
  },
  {
    descripcion: "Zapato de tacón rojo con punta cerrada, elegante.",
    costo: 64999,
    ruta: "\\src\\assets\\img\\zapatos\\zapato.jpg"
  },
  {
    descripcion: "Zapatilla deportiva negra con detalles blancos.",
    costo: 49999,
    ruta: "\\src\\assets\\img\\zapatos\\zapato.jpg"
  },
  {
    descripcion: "Bota alta marrón de gamuza, ideal para invierno.",
    costo: 79999,
    ruta: "\\src\\assets\\img\\zapatos\\zapato.jpg"
  },
  {
    descripcion: "Sandalia nude de tacón bajo, versátil y cómoda.",
    costo: 53999,
    ruta: "\\src\\assets\\img\\zapatos\\zapato.jpg"
  }
];


//limpio contenido de la seccion
contenedor.innerHTML = "";
let i;
for (i = 0; i < zapatos.length; i++) {
  let cardModal = document.createElement("div");
  cardModal.setAttribute("class", "col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4");

  // ids únicos
  const modalId = `modal${i}`;
  const labelId = `modalLabel${i}`;
  const titulo =`Producto ${i+1}:`;

  cardModal.innerHTML = `
    <div class="card text-center mb-3" style="width: 15rem;">
      <div class="card-body">
        <h5 class="card-title">${titulo}</h5>
        <img src="${zapatos[i].ruta}" class="card-img-top" alt="Abrigo ${i + 1}">
        <!-- Botón despliega modal -->
        <button type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#${modalId}">
          Ver más
        </button>
        <!-- Modal -->
        <div class="modal fade" id="${modalId}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
          aria-labelledby="${labelId}" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="${labelId}">${zapatos[i].descripcion}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p><i class="fa-solid fa-tag"></i> ${zapatos[i].descripcion}</p>
                <p><i class="fa-solid fa-dollar-sign"></i> ${zapatos[i].costo}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i> Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  contenedor.appendChild(cardModal);
}

