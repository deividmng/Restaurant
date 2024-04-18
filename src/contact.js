export function contact() {
    const contact = document.querySelector("#content");
    contact.innerHTML = ''; // Limpiar el contenido anterior si lo hay

    // Crear un contenedor de página
    const pageContent = document.createElement("div");
    pageContent.classList.add("contactPage");

    // Crear un formulario
    const form = document.createElement("form");

    // Crear y añadir un elemento de título
    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";
    heading.classList.add("contact-heading");
    pageContent.appendChild(heading);

    // Crear campos de entrada y etiquetas
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");

    const messageLabel = document.createElement("label");
    messageLabel.textContent = "Message:";
    const messageInput = document.createElement("textarea");

    // Botón de enviar
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";

    // Agregar campos y botón al formulario
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(messageLabel);
    form.appendChild(messageInput);
    form.appendChild(submitButton);

    // Agregar formulario al contenido de la página
    pageContent.appendChild(form);

    // Agregar el contenido de la página al contenedor principal
    contact.appendChild(pageContent);
}
