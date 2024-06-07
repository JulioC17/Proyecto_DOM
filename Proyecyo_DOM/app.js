const products = [
    {
      nombre: "Camiseta Roja",
      color: "Rojo",
      precio: 15.50,
      talla: "L",    
      vendedor: "Pull&Bear",
      imagen: "./assets/3.jpg",
      imagenModelo: "./assets/modelo3.jpg"
     },
     {
        nombre: "Camiseta Negra",
        color: "Negro",
        precio: 15.50,
        talla: "S",    
        vendedor: "Pull&Bear",
        imagen: "./assets/4.jpg",
        imagenModelo: "./assets/modelo4.jpg"
       },
       {
        nombre: "Camiseta Gris",
        color: "Gris",
        precio: 15.50,
        talla: "S",    
        vendedor: "Pull&Bear",
        imagen: "./assets/6.jpg",
        imagenModelo: "./assets/modelo6.jpg"
       },
       {
        nombre: "Camiseta Azul",
        color: "Azul",
        precio: 15.50,
        talla: "M",    
        vendedor: "Pull&Bear",
        imagen: "./assets/7.jpg",
        imagenModelo: "./assets/modelo7.jpg"
       },
       {
        nombre: "Camiseta Stands Out",
        color: "Blanco",
        precio: 21.50,
        talla: "L",    
        vendedor: "Pull&Bear",
        imagen: "./assets/2.jpg",
        imagenModelo: "./assets/modelo2.jpg"
       },
       {
        nombre: "Camiseta CoffeShop",
        color: "Negro",
        precio: 18.30,
        talla: "S",    
        vendedor: "Pull&Bear",
        imagen: "./assets/5.jpg",
        imagenModelo: "./assets/modelo5.jpg"
       },
       {
        nombre: "Camiseta Marron",
        color: "Marrón",
        precio: 25.00,
        talla: "L",    
        vendedor: "Pull&Bear",
        imagen: "./assets/8.jpg",
        imagenModelo: "./assets/modelo8.jpg"
       },
       {
        nombre: "Camiseta Metallica",
        color: "Negro",
        precio: 25.00,
        talla: "M",    
        vendedor: "Pull&Bear",
        imagen: "./assets/9.jpg",
        imagenModelo: "./assets/modelo9.jpg"
       },
       {
        nombre: "Camiseta Metropolitan",
        color: "Gris",
        precio: 18.90,
        talla: "L",    
        vendedor: "Pull&Bear",
        imagen: "./assets/10.jpg",
        imagenModelo: "./assets/modelo10.jpg"
       },
       {
        nombre: "Camiseta Pause Cafe",
        color: "Gris",
        precio: 23.20,
        talla: "S",    
        vendedor: "Pull&Bear",
        imagen: "./assets/1.jpg",
        imagenModelo: "./assets/modelo1.jpg"
       },
    ];

    const linksBarraDeNavegacion = ["zapatillas", "pantalones", "abrigos", "ropa interior", "accesorios"]
    const barraDeNavegacion = document.createElement("nav")
    const listaBarraDeNavegacion = document.createElement("ul")
    const otroTitulo = document.createElement("h3")
    otroTitulo.innerText = "ropaDeportiva"
    const header = document.querySelector("#header")
    header.appendChild(barraDeNavegacion)
    barraDeNavegacion.appendChild(otroTitulo)
    barraDeNavegacion.appendChild(listaBarraDeNavegacion)

    for (const link of linksBarraDeNavegacion){
      const linkBarraDeNavegacion = document.createElement("li")
      const enlace = document.createElement("a")
      enlace.href = "#"
      enlace.textContent = link
      linkBarraDeNavegacion.appendChild(enlace)
      listaBarraDeNavegacion.appendChild(linkBarraDeNavegacion)
      }
              
   const titulo = document.createElement("h1")
   titulo.innerText = "colecciónMasculina"
   header.appendChild(titulo)

   
   
    function inicio() {
    const main = document.querySelector("#main")
      main.innerHTML = ""
        for ( const producto of products){

        const articulo = document.createElement("article")
        const tituloArticulo = document.createElement("h2")
        const precioArticulo = document.createElement("h3")
        const tallaArticulo = document.createElement("h3")
        const carta = document.createElement("img")
        carta.src = producto.imagen
        const modelo = document.createElement("img")
        modelo.src = producto.imagenModelo


        tituloArticulo.innerText = producto.nombre
        precioArticulo.innerText = producto.precio
        tallaArticulo.innerText = "Talla " + producto.talla

        articulo.appendChild(carta)
        articulo.appendChild(tituloArticulo)
        articulo.appendChild(precioArticulo)
        articulo.appendChild(tallaArticulo)

        main.appendChild(articulo)
         
        articulo.addEventListener("mouseover", () => {
        carta.src = producto.imagenModelo 
          })

        articulo.addEventListener("mouseout", () => {
        carta.src = producto.imagen     
          })
        }

    }

    inicio ()

  const aside = document.querySelector("aside")
  const filtrar = document.createElement("h2")
  filtrar.classList = "filtrar"
  filtrar.innerText = "Filtrar"
  aside.appendChild(filtrar)

  const section1Aside = document.createElement("section")
  section1Aside.classList = "Precios"
  const precios = document.createElement("h3")
  precios.innerText = "Ordenar por precios"
  aside.appendChild(section1Aside)
  section1Aside.appendChild(precios)
  const botonAside = document.createElement("button")
  botonAside.innerText = "Precios Ascendentes"
  const botonAside2 = document.createElement("button")
  botonAside2.innerText = "Precios Descendentes"

  section1Aside.appendChild(botonAside)
  section1Aside.appendChild(botonAside2)

  const section2Aside = document.createElement("section")
  const formularioAside = document.createElement("form")
  const tituloFormulario = document.createElement("h3")
  tituloFormulario.innerText = "Por Tallas"
  section2Aside.appendChild(tituloFormulario)
  section2Aside.appendChild(formularioAside)
  

  const inputS = document.createElement("input")
  inputS.type = "checkbox"
  inputS.name = "talla"
  inputS.id = "talla_S"
  const labelS = document.createElement("label")
  labelS.htmlFor = "talla_S"
  labelS.innerText = "Talla S"

  const inputM = document.createElement("input")
  inputM.type = "checkbox"
  inputM.name = "talla"
  inputM.id = "talla_M"
  const labelM = document.createElement("label")
  labelM.htmlFor = "talla_M"
  labelM.innerText = "Talla M"

  const inputL = document.createElement("input")
  inputL.type = "checkbox"
  inputL.name = "talla"
  inputL.id = "talla_L"
  const labelL = document.createElement("label")
  labelL.htmlFor = "talla_L"
  labelL.innerText = "Talla L"

  formularioAside.appendChild(labelS)
  formularioAside.appendChild(inputS)
  formularioAside.appendChild(labelM)
  formularioAside.appendChild(inputM)
  formularioAside.appendChild(labelL)
  formularioAside.appendChild(inputL)
  aside.appendChild(section2Aside)

  const botonReiniciarFiltros = document.createElement("button")
  const botonAplicarFiltros = document.createElement("button")
  const botonesDiv = document.createElement("div")

  botonReiniciarFiltros.innerText = "Reiniciar Filtros"
  botonAplicarFiltros.innerText = "Aplicar Filtros"

  botonesDiv.appendChild(botonReiniciarFiltros)
  botonesDiv.appendChild(botonAplicarFiltros)
  aside.appendChild(botonesDiv)

 
 
  botonReiniciarFiltros.onclick = function (){
    
    const main = document.querySelector("main")
    main.innerHTML = "";

    inicio ()
    
    };
    
    const checkS = document.querySelector("#talla_S")
    const checkM = document.querySelector("#talla_M")
    const checkL = document.querySelector("#talla_L")  


    const copiaProducts = [...products]
   
  botonAside.onclick = function (){
    const main = document.querySelector("main")
    main.innerHTML = ""
    
    const precioAscendente = copiaProducts.sort((a,b) => a.precio - b.precio)
    for ( const precio of precioAscendente){

      const articulo = document.createElement("article")
      const tituloArticulo = document.createElement("h2")
      const precioArticulo = document.createElement("h3")
      const tallaArticulo = document.createElement("h3")
      const carta = document.createElement("img")
      carta.src = precio.imagen
      const modelo = document.createElement("img")
      modelo.src = precio.imagenModelo


      tituloArticulo.innerText = precio.nombre
      precioArticulo.innerText = precio.precio
      tallaArticulo.innerText = "Talla " + precio.talla

      articulo.appendChild(carta)
      articulo.appendChild(tituloArticulo)
      articulo.appendChild(precioArticulo)
      articulo.appendChild(tallaArticulo)

      main.appendChild(articulo)
       
      articulo.addEventListener("mouseover", () => {
      carta.src = precio.imagenModelo 
        })

      articulo.addEventListener("mouseout", () => {
      carta.src = precio.imagen     
        })
      }
     
      if (checkS.checked ===true || checkM.checked === true || checkL.checked ===true ){
        const main = document.querySelector("main")
         main.innerHTML = ""
      }
      if (checkS.checked === true){
        
        for ( const productoTalla of copiaProducts){
             
           if ( productoTalla.talla === "S"){
            const articulo = document.createElement("article")
           const tituloArticulo = document.createElement("h2")
           const precioArticulo = document.createElement("h3")
           const tallaArticulo = document.createElement("h3")
           const carta = document.createElement("img")
           carta.src = productoTalla.imagen
           const modelo = document.createElement("img")
           modelo.src = productoTalla.imagenModelo
    
    
           tituloArticulo.innerText = productoTalla.nombre
           precioArticulo.innerText = productoTalla.precio
           tallaArticulo.innerText = "Talla " + productoTalla.talla
    
           articulo.appendChild(carta)
           articulo.appendChild(tituloArticulo)
           articulo.appendChild(precioArticulo)
           articulo.appendChild(tallaArticulo)
    
           main.appendChild(articulo)
            
           articulo.addEventListener("mouseover", () => {
           carta.src = productoTalla.imagenModelo 
             })
    
           articulo.addEventListener("mouseout", () => {
           carta.src = productoTalla.imagen     
             })
             
          }      
        }
      }
      if (checkM.checked === true){
        
        for ( const productoTalla of copiaProducts){
             
           if ( productoTalla.talla === "M"){
            const articulo = document.createElement("article")
           const tituloArticulo = document.createElement("h2")
           const precioArticulo = document.createElement("h3")
           const tallaArticulo = document.createElement("h3")
           const carta = document.createElement("img")
           carta.src = productoTalla.imagen
           const modelo = document.createElement("img")
           modelo.src = productoTalla.imagenModelo
    
    
           tituloArticulo.innerText = productoTalla.nombre
           precioArticulo.innerText = productoTalla.precio
           tallaArticulo.innerText = "Talla " + productoTalla.talla

    
           articulo.appendChild(carta)
           articulo.appendChild(tituloArticulo)
           articulo.appendChild(precioArticulo)
           articulo.appendChild(tallaArticulo)
    
           main.appendChild(articulo)
            
           articulo.addEventListener("mouseover", () => {
           carta.src = productoTalla.imagenModelo 
             })
    
           articulo.addEventListener("mouseout", () => {
           carta.src = productoTalla.imagen     
             })
             
          }      
        }
      }
    
      if (checkL.checked === true){
          
        for ( const productoTalla of copiaProducts){
             
           if ( productoTalla.talla === "L"){
            const articulo = document.createElement("article")
           const tituloArticulo = document.createElement("h2")
           const precioArticulo = document.createElement("h3")
           const tallaArticulo = document.createElement("h3")
           const carta = document.createElement("img")
           carta.src = productoTalla.imagen
           const modelo = document.createElement("img")
           modelo.src = productoTalla.imagenModelo
    
    
           tituloArticulo.innerText = productoTalla.nombre
           precioArticulo.innerText = productoTalla.precio
           tallaArticulo.innerText = "Talla " + productoTalla.talla
    
           articulo.appendChild(carta)
           articulo.appendChild(tituloArticulo)
           articulo.appendChild(precioArticulo)
           articulo.appendChild(tallaArticulo)
    
           main.appendChild(articulo)
            
           articulo.addEventListener("mouseover", () => {
           carta.src = productoTalla.imagenModelo 
             })
    
           articulo.addEventListener("mouseout", () => {
           carta.src = productoTalla.imagen     
             })
             
          }      
        }
      }
}

botonAside2.onclick = function (){
  const main = document.querySelector("main")
  main.innerHTML = ""
  
  const precioDescendente = copiaProducts.sort((a,b) => b.precio - a.precio)
  for ( const precio of precioDescendente){

    const articulo = document.createElement("article")
    const tituloArticulo = document.createElement("h2")
    const precioArticulo = document.createElement("h3")
    const tallaArticulo = document.createElement("h3")
    const carta = document.createElement("img")
    carta.src = precio.imagen
    const modelo = document.createElement("img")
    modelo.src = precio.imagenModelo


    tituloArticulo.innerText = precio.nombre
    precioArticulo.innerText = precio.precio
    tallaArticulo.innerText = "Talla " + precio.talla

    articulo.appendChild(carta)
    articulo.appendChild(tituloArticulo)
    articulo.appendChild(precioArticulo)
    articulo.appendChild(tallaArticulo)

    main.appendChild(articulo)
     
    articulo.addEventListener("mouseover", () => {
    carta.src = precio.imagenModelo 
      })

    articulo.addEventListener("mouseout", () => {
    carta.src = precio.imagen     
      })
    }

    if (checkS.checked ===true || checkM.checked === true || checkL.checked ===true ){
      const main = document.querySelector("main")
       main.innerHTML = ""
    }

    if (checkS.checked === true){
      
      for ( const productoTalla of copiaProducts){
           
         if ( productoTalla.talla === "S"){
          const articulo = document.createElement("article")
         const tituloArticulo = document.createElement("h2")
         const precioArticulo = document.createElement("h3")
         const tallaArticulo = document.createElement("h3")
         const carta = document.createElement("img")
         carta.src = productoTalla.imagen
         const modelo = document.createElement("img")
         modelo.src = productoTalla.imagenModelo
  
  
         tituloArticulo.innerText = productoTalla.nombre
         precioArticulo.innerText = productoTalla.precio
         tallaArticulo.innerText = "Talla " + productoTalla.talla
  
         articulo.appendChild(carta)
         articulo.appendChild(tituloArticulo)
         articulo.appendChild(precioArticulo)
         articulo.appendChild(tallaArticulo)
  
         main.appendChild(articulo)
          
         articulo.addEventListener("mouseover", () => {
         carta.src = productoTalla.imagenModelo 
           })
  
         articulo.addEventListener("mouseout", () => {
         carta.src = productoTalla.imagen     
           })
           
        }      
      }
    }
    if (checkM.checked === true){
      
      for ( const productoTalla of copiaProducts){
           
         if ( productoTalla.talla === "M"){
          const articulo = document.createElement("article")
         const tituloArticulo = document.createElement("h2")
         const precioArticulo = document.createElement("h3")
         const tallaArticulo = document.createElement("h3")
         const carta = document.createElement("img")
         carta.src = productoTalla.imagen
         const modelo = document.createElement("img")
         modelo.src = productoTalla.imagenModelo
  
  
         tituloArticulo.innerText = productoTalla.nombre
         precioArticulo.innerText = productoTalla.precio
         tallaArticulo.innerText = "Talla " + productoTalla.talla
  
         articulo.appendChild(carta)
         articulo.appendChild(tituloArticulo)
         articulo.appendChild(precioArticulo)
         articulo.appendChild(tallaArticulo)
  
         main.appendChild(articulo)
          
         articulo.addEventListener("mouseover", () => {
         carta.src = productoTalla.imagenModelo 
           })
  
         articulo.addEventListener("mouseout", () => {
         carta.src = productoTalla.imagen     
           })
           
        }      
      }
    }
  
    if (checkL.checked === true){
        
      for ( const productoTalla of copiaProducts){
           
         if ( productoTalla.talla === "L"){
          const articulo = document.createElement("article")
         const tituloArticulo = document.createElement("h2")
         const precioArticulo = document.createElement("h3")
         const tallaArticulo = document.createElement("h3")
         const carta = document.createElement("img")
         carta.src = productoTalla.imagen
         const modelo = document.createElement("img")
         modelo.src = productoTalla.imagenModelo
  
  
         tituloArticulo.innerText = productoTalla.nombre
         precioArticulo.innerText = productoTalla.precio
         tallaArticulo.innerText = "Talla " + productoTalla.talla
  
         articulo.appendChild(carta)
         articulo.appendChild(tituloArticulo)
         articulo.appendChild(precioArticulo)
         articulo.appendChild(tallaArticulo)
  
         main.appendChild(articulo)
          
         articulo.addEventListener("mouseover", () => {
         carta.src = productoTalla.imagenModelo 
           })
  
         articulo.addEventListener("mouseout", () => {
         carta.src = productoTalla.imagen     
           })
           
        }      
      }
    }
}


botonAplicarFiltros.onclick = function (){

  const main = document.querySelector("main")
  main.innerHTML = ""

  if (checkS.checked === true){
      
    for ( const productoTalla of copiaProducts){
         
       if ( productoTalla.talla === "S"){
        const articulo = document.createElement("article")
       const tituloArticulo = document.createElement("h2")
       const precioArticulo = document.createElement("h3")
       const tallaArticulo = document.createElement("h3")
       const carta = document.createElement("img")
       carta.src = productoTalla.imagen
       const modelo = document.createElement("img")
       modelo.src = productoTalla.imagenModelo


       tituloArticulo.innerText = productoTalla.nombre
       precioArticulo.innerText = productoTalla.precio
       tallaArticulo.innerText = "Talla " + productoTalla.talla

       articulo.appendChild(carta)
       articulo.appendChild(tituloArticulo)
       articulo.appendChild(precioArticulo)
       articulo.appendChild(tallaArticulo)

       main.appendChild(articulo)
        
       articulo.addEventListener("mouseover", () => {
       carta.src = productoTalla.imagenModelo 
         })

       articulo.addEventListener("mouseout", () => {
       carta.src = productoTalla.imagen     
         })
         
      }      
    }
  }
  if (checkM.checked === true){
      
    for ( const productoTalla of copiaProducts){
         
       if ( productoTalla.talla === "M"){
        const articulo = document.createElement("article")
       const tituloArticulo = document.createElement("h2")
       const precioArticulo = document.createElement("h3")
       const tallaArticulo = document.createElement("h3")
       const carta = document.createElement("img")
       carta.src = productoTalla.imagen
       const modelo = document.createElement("img")
       modelo.src = productoTalla.imagenModelo


       tituloArticulo.innerText = productoTalla.nombre
       precioArticulo.innerText = productoTalla.precio
       tallaArticulo.innerText = "Talla " + productoTalla.talla

       articulo.appendChild(carta)
       articulo.appendChild(tituloArticulo)
       articulo.appendChild(precioArticulo)
       articulo.appendChild(tallaArticulo)

       main.appendChild(articulo)
        
       articulo.addEventListener("mouseover", () => {
       carta.src = productoTalla.imagenModelo 
         })

       articulo.addEventListener("mouseout", () => {
       carta.src = productoTalla.imagen     
         })
         
      }      
    }
  }

  if (checkL.checked === true){
      
    for ( const productoTalla of copiaProducts){
         
       if ( productoTalla.talla === "L"){
        const articulo = document.createElement("article")
       const tituloArticulo = document.createElement("h2")
       const precioArticulo = document.createElement("h3")
       const tallaArticulo = document.createElement("h3")
       const carta = document.createElement("img")
       carta.src = productoTalla.imagen
       const modelo = document.createElement("img")
       modelo.src = productoTalla.imagenModelo


       tituloArticulo.innerText = productoTalla.nombre
       precioArticulo.innerText = productoTalla.precio
       tallaArticulo.innerText = "Talla " + productoTalla.talla

       articulo.appendChild(carta)
       articulo.appendChild(tituloArticulo)
       articulo.appendChild(precioArticulo)
       articulo.appendChild(tallaArticulo)

       main.appendChild(articulo)
        
       articulo.addEventListener("mouseover", () => {
       carta.src = productoTalla.imagenModelo 
         })

       articulo.addEventListener("mouseout", () => {
       carta.src = productoTalla.imagen     
         })
         
      }      
    }
  }
}

const footer = document.querySelector("footer")
const preguntasFrecuentes = document.createElement("h3")
const quienesSomos = document.createElement("h3")
const envios = document.createElement("h3")
const politiDePrivacidad = document.createElement("h3")

preguntasFrecuentes.innerText = "Preguntas Frecuentes"
quienesSomos.innerText = "Quienes Somos"
envios.innerText = "Envios"
politiDePrivacidad.innerText = "Política de Privacidad"

footer.appendChild(preguntasFrecuentes)
footer.appendChild(quienesSomos)
footer.appendChild(envios)
footer.appendChild(politiDePrivacidad)





 




  
    
  
  
  

  
  
  
  
  
  
 



  

  

  

  

  

  
  
  



  




  
  
  


  

  
  


  


  

  
  

  
  


   
   
  

   
  