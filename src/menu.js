export function menu() {
    const contentDiv2 = document.querySelector('#content');
    contentDiv2.innerHTML = '';
    
    // Crear un contenedor de página
    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');
   
    // Crear y añadir un elemento de título para starters
    const startersHeading = document.createElement('h4');
    startersHeading.textContent = 'Starters';
    startersHeading.classList.add('heading');
    menuContent.appendChild(startersHeading);

    // Crear un contenedor para los precios de starters
    const startersPrices = document.createElement("div");
    startersPrices.classList.add('items');

    const starterItems = [
        {
          name: "shrimp crudo",
          price: 10.99,
          description: "freshly caught shrimp, olive oil, garlic aioli, focaccia",
        },
        {
          name: "chicken wings",
          price: 12.99,
          description:
            "12 crispy wings that come in 3 sauces of your choice, or leave it up to the chef to decide",
        },
      ];

    // Iterar sobre el arreglo de items de starters
    starterItems.forEach(item => {
        const menuNamePriceDescription = document.createElement('div');
        menuNamePriceDescription.classList.add("menuPriceDescription");
        
        // Crear un div para el nombre y el precio
        const namePriceDiv = document.createElement('div');
        namePriceDiv.classList.add('name-price');

        // Agregar el nombre al div namePriceDiv
        const name = document.createElement('p');
        name.textContent = item.name;
        namePriceDiv.appendChild(name);
        
        // Agregar el precio al div namePriceDiv
        const price = document.createElement('p');
        price.textContent = `$${item.price.toFixed(2)}`;
        namePriceDiv.appendChild(price);
        
        // Agregar namePriceDiv al contenedor de precio y nombre
        menuNamePriceDescription.appendChild(namePriceDiv);
        
        // Crear un div para la descripción
        const menuDescriptionDiv = document.createElement('div');
        menuDescriptionDiv.classList.add('description'); // Agregar clase description al contenedor de descripción
        
        // Agregar la descripción al contenedor de descripción
        const description = document.createElement('p');
        description.textContent = item.description;
        menuDescriptionDiv.appendChild(description);
        
        // Agregar el contenedor de descripción al contenedor de precio y nombre
        menuNamePriceDescription.appendChild(menuDescriptionDiv);

        // Añadir menuNamePriceDescription al contenedor de precios de starters
        startersPrices.appendChild(menuNamePriceDescription);
    });

    // Añadir el contenedor de precios de starters al menú
    menuContent.appendChild(startersPrices);
  
    // Crear y añadir un elemento de título para mains
    const mainsHeading = document.createElement('h4');
    mainsHeading.textContent = 'Mains';
    mainsHeading.classList.add('heading');
    menuContent.appendChild(mainsHeading);

    // Crear un contenedor para los precios de mains
    const mainsPrices = document.createElement("div");
    mainsPrices.classList.add('items');

    const mainsItems = [
        {
          name: "Salmon Fillet",
          price: 18.99,
          description: "Freshly caught salmon fillet with a side of seasonal vegetables and roasted potatoes.",
        },
        {
          name: "Ribeye Steak",
          price: 24.99,
          description:
            "10oz ribeye steak cooked to your preference, served with mashed potatoes and sautéed asparagus.",
        },
      ];

    // Iterar sobre el arreglo de items de mains
    mainsItems.forEach(item => {
        const menuNamePriceDescription = document.createElement('div');
        menuNamePriceDescription.classList.add("menuPriceDescription");
        
        // Crear un div para el nombre y el precio
        const namePriceDiv = document.createElement('div');
        namePriceDiv.classList.add('name-price');

        // Agregar el nombre al div namePriceDiv
        const name = document.createElement('p');
        name.textContent = item.name;
        namePriceDiv.appendChild(name);
        
        // Agregar el precio al div namePriceDiv
        const price = document.createElement('p');
        price.textContent = `$${item.price.toFixed(2)}`;
        namePriceDiv.appendChild(price);
        
        // Agregar namePriceDiv al contenedor de precio y nombre
        menuNamePriceDescription.appendChild(namePriceDiv);
        
        // Crear un div para la descripción
        const menuDescriptionDiv = document.createElement('div');
        menuDescriptionDiv.classList.add('description'); // Agregar clase description al contenedor de descripción
        
        // Agregar la descripción al contenedor de descripción
        const description = document.createElement('p');
        description.textContent = item.description;
        menuDescriptionDiv.appendChild(description);
        
        // Agregar el contenedor de descripción al contenedor de precio y nombre
        menuNamePriceDescription.appendChild(menuDescriptionDiv);

        // Añadir menuNamePriceDescription al contenedor de precios de mains
        mainsPrices.appendChild(menuNamePriceDescription);
    });

    // Añadir el contenedor de precios de mains al menú
    menuContent.appendChild(mainsPrices);

    // Crear y añadir un elemento de título para desserts
    const dessertsHeading = document.createElement('h4');
    dessertsHeading.textContent = 'Desserts';
    dessertsHeading.classList.add('heading');
    menuContent.appendChild(dessertsHeading);

    // Crear un contenedor para los precios de desserts
    const dessertsPrices = document.createElement("div");
    dessertsPrices.classList.add('items');

    const dessertItems = [
        {
          name: "Chocolate Lava Cake",
          price: 8.99,
          description: "Decadent chocolate lava cake served with vanilla ice cream and raspberry sauce.",
        },
        {
          name: "New York Cheesecake",
          price: 7.99,
          description:
            "Classic New York-style cheesecake topped with fresh berries and whipped cream.",
        },
      ];

    // Iterar sobre el arreglo de items de desserts
    dessertItems.forEach(item => {
        const menuNamePriceDescription = document.createElement('div');
        menuNamePriceDescription.classList.add("menuPriceDescription");
        
        // Crear un div para el nombre y el precio
        const namePriceDiv = document.createElement('div');
        namePriceDiv.classList.add('name-price');

        // Agregar el nombre al div namePriceDiv
        const name = document.createElement('p');
        name.textContent = item.name;
        namePriceDiv.appendChild(name);
        
        // Agregar el precio al div namePriceDiv
        const price = document.createElement('p');
        price.textContent = `$${item.price.toFixed(2)}`;
        namePriceDiv.appendChild(price);
        
        // Agregar namePriceDiv al contenedor de precio y nombre
        menuNamePriceDescription.appendChild(namePriceDiv);
        
        // Crear un div para la descripción
        const menuDescriptionDiv = document.createElement('div');
        menuDescriptionDiv.classList.add('description'); // Agregar clase description al contenedor de descripción
        
        // Agregar la descripción al contenedor de descripción
        const description = document.createElement('p');
        description.textContent = item.description;
        menuDescriptionDiv.appendChild(description);
        
        // Agregar el contenedor de descripción al contenedor de precio y nombre
        menuNamePriceDescription.appendChild(menuDescriptionDiv);

        // Añadir menuNamePriceDescription al contenedor de precios de desserts
        dessertsPrices.appendChild(menuNamePriceDescription);
    });

    // Añadir el contenedor de precios de desserts al menú
    menuContent.appendChild(dessertsPrices);
    
    // Reemplazar el contenido del contenedor principal
    contentDiv2.innerHTML = '';
    contentDiv2.appendChild(menuContent);
}
