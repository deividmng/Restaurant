export function contact() {

    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
    // Crear un contenedor de página
    const pageContent = document.createElement('div');
    // pageContent.classList.add('page-content');

    // Crear y añadir un elemento de título
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to our restaurant!';
    pageContent.appendChild(heading);

    // Crear y añadir un elemento de imagen
    const topImage = document.createElement('img');
    topImage.classList.add('top-image');
    topImage.src = '../assets/img/pexels-malidate-van-784633.jpg';
    topImage.alt = 'Image of restaurant';
    topImage.height = '300';
    pageContent.appendChild(topImage);

    // Crear y añadir párrafos
    const para1 = document.createElement('p');
    para1.textContent = 'Paragraph 1';
    // para1.classList.add('class');
    pageContent.appendChild(para1);
    
  
    const para2 = document.createElement('p');
    para2.textContent = 'Paragraph 2';
    pageContent.appendChild(para2);

    const para3 = document.createElement('p');
    para3.textContent = 'Paragraph 3';
    pageContent.appendChild(para3);

    // Agregar el contenido de la página al contenedor principal
    contentDiv.appendChild(pageContent);
    
}
