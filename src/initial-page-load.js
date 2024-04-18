export function initialPageLoad() {
  const contentDiv = document.querySelector("#content");
  // Crear un contenedor de página
  const pageContent = document.createElement("div");
  pageContent.classList.add("homePage"); // Agregar la clase content

  // Crear un div para la imagen
  const imageContainer = document.createElement("div");
  const topImage = document.createElement("img");
  topImage.classList.add("top-image");
  topImage.src = "../assets/img/pexels-malidate-van-784633.jpg";
  topImage.alt = "Image of restaurant";
  topImage.height = "300";
  topImage.classList.add('imgHome');
  imageContainer.appendChild(topImage);
  pageContent.appendChild(imageContainer);

  // Crear un div para los textos
  const textContainer = document.createElement("div");

  // Crear y añadir un elemento de título
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to our restaurant!";
  heading.classList.add("h1Home");
  textContainer.appendChild(heading);

  // Crear y añadir párrafos
  const para1 = document.createElement("p");
  para1.textContent = "Paragraph 1";
  para1.classList.add("class");
  textContainer.appendChild(para1);

  const para2 = document.createElement("p");
  para2.textContent = "Paragraph 2";
  textContainer.appendChild(para2);

  const para3 = document.createElement("p");
  para3.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis saepe aspernatur quas cupiditate, distinctio porro nostrum est illo! Esse delectus veritatis reiciendis fugiat quaerat blanditiis, cum consequatur optio enim?";
  textContainer.appendChild(para3);

  // Agregar el contenedor de textos al contenedor de página
  pageContent.appendChild(textContainer);

  // Agregar el contenido de la página al contenedor principal
  contentDiv.appendChild(pageContent);
}
