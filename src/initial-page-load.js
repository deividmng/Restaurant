export function initialPageLoad() {
  const contentDiv = document.querySelector("#content");
  // Crear un contenedor de página
  /// en este div quiero la img
  const pageContent = document.createElement("div");
  // i en este el esto a ver como lo hacemos
  const imagen = document.createElement("div");

  // Crear y añadir un elemento de título
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to our restaurant!";
  pageContent.appendChild(heading);
  heading.classList.add("h1Home");

  // Crear y añadir un elemento de imagen
  const topImage = document.createElement("img");
  topImage.classList.add("top-image");
  topImage.src = "../assets/img/pexels-malidate-van-784633.jpg";
  topImage.alt = "Image of restaurant";
  topImage.height = "300";
  topImage.classList.add('imgHome')
  imagen.appendChild(topImage);

  // Crear y añadir párrafos
  const para1 = document.createElement("p");
  para1.textContent = "Paragraph 1";
  para1.classList.add("class");
  pageContent.appendChild(para1);

  const para2 = document.createElement("p");
  para2.textContent = "Paragraph 2";
  pageContent.appendChild(para2);

  const para3 = document.createElement("p");
  para3.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis saepe aspernatur quas cupiditate, distinctio porro nostrum est illo! Esse delectus veritatis reiciendis fugiat quaerat blanditiis, cum consequatur optio enim?";
  pageContent.appendChild(para3);

  // Agregar el contenido de la página al contenedor principal
  contentDiv.appendChild(imagen);
  contentDiv.appendChild(pageContent);
}
