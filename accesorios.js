const contenedor = document.getElementById("productosAccesorios");
// arreglo objs productos
const accesorios = [
  {
    descripcion: "Collar dorado con colgante pequeño y elegante.",
    costo: 15999,
    ruta: "\\src\\assets\\img\\accesorios\\accesorio.jpg"
  },
  {
    descripcion: "Pulsera plateada con cierre ajustable y detalles finos.",
    costo: 12999,
    ruta: "\\src\\assets\\img\\accesorios\\accesorio.jpg"
  },
  {
    descripcion: "Aros pequeños dorados, ideales para uso diario.",
    costo: 8999,
    ruta: "\\src\\assets\\img\\accesorios\\accesorio.jpg"
  },
  {
    descripcion: "Bolso de mano negro con asa corta, elegante y práctico.",
    costo: 34999,
    ruta: "\\src\\assets\\img\\accesorios\\accesorio.jpg"
  },
  {
    descripcion: "Cinturón marrón de cuero con hebilla metálica.",
    costo: 17999,
    ruta: "\\src\\assets\\img\\accesorios\\accesorio.jpg"
  },
  {
    descripcion: "Gorro de lana gris, cálido y versátil.",
    costo: 10999,
    ruta: "\\src\\assets\\img\\accesorios\\accesorio.jpg"
  },
  {
    descripcion: "Bufanda estampada con tonos cálidos, suave al tacto.",
    costo: 14999,
    ruta: "\\src\\assets\\img\\accesorios\\accesorio.jpg"
  },
  {
    descripcion: "Cartera pequeña azul con cierre metálico.",
    costo: 25999,
    ruta: "\\src\\assets\\img\\accesorios\\accesorio.jpg"
  },
  {
    descripcion: "Pulsera de cuentas multicolor, estilo bohemio.",
    costo: 11999,
    ruta: "\\src\\assets\\img\\accesorios\\accesorio.jpg"
  },
  {
    descripcion: "Sombrero negro de ala ancha, moderno y elegante.",
    costo: 22999,
    ruta: "\\src\\assets\\img\\accesorios\\accesorio.jpg"
  }
];


//limpio contenido de la seccion
contenedor.innerHTML = "";
let i;
for (i = 0; i < accesorios.length; i++) {
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
        <img src="${accesorios[i].ruta}" class="card-img-top" alt="Abrigo ${i + 1}">
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
                <h1 class="modal-title fs-5" id="${labelId}">${accesorios[i].descripcion}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p><i class="fa-solid fa-tag"></i> ${accesorios[i].descripcion}</p>
                <p><i class="fa-solid fa-dollar-sign"></i> ${accesorios[i].costo}</p>
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

