export function about() {
    const contentDiv = document.querySelector("#content");
    // Crear un contenedor de página
    const pageContent = document.createElement("div");
    pageContent.classList.add("aboutPage"); // Agregar la clase content
  
    // Crear un div para la imagen
    const imageContainer = document.createElement("div");
    const topImage = document.createElement("img");
    topImage.classList.add("top-image");
    topImage.src = "../assets/img/pizza-8319463_1280.jpg";
    topImage.alt = "Image of restaurant";
    topImage.height = "300";
    topImage.classList.add('imgHome');
    imageContainer.appendChild(topImage);
    pageContent.appendChild(imageContainer);
  
    // Crear un div para los textos
    const textContainer = document.createElement("div");
  
    // Crear y añadir un elemento de título
    const heading = document.createElement("h1");
    heading.textContent = "about us";
    heading.classList.add("h1About");
    textContainer.appendChild(heading);
  
    // Crear y añadir párrafos
    const para1 = document.createElement("p");
    para1.textContent = "We are a passionate team of chefs dedicated to providing you with the best dining experience.";
    para1.classList.add("class");
    textContainer.appendChild(para1);
  
    const para2 = document.createElement("p");
    para2.textContent = "Our mission is to use fresh, high-quality ingredients to create delicious dishes that delight our customers.";
    textContainer.appendChild(para2);
  
    const para3 = document.createElement("p");
    para3.textContent = "Come visit us and taste the difference!";
    textContainer.appendChild(para3);
  
    // Agregar el contenedor de textos al contenedor de página
    pageContent.appendChild(textContainer);
  
    // Agregar el contenido de la página al contenedor principal
    contentDiv.appendChild(pageContent);
}
