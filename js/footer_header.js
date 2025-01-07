// Cargar el encabezado
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    // Cargar el estilo del header
    const headerStyle = document.createElement("link");
    //headerStyle.rel = "stylesheet";
    //headerStyle.href = "css/header_footer.css";
    document.head.appendChild(headerStyle);
  });

// Cargar el footer
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    // Insertar el contenido del footer en el div con id "footer"
    document.getElementById("footer").innerHTML = data;

    // Cargar el estilo del footer
    const footerStyle = document.createElement("link");
    footerStyle.rel = "stylesheet";
    footerStyle.href = "css/header_footer.css";
    document.head.appendChild(footerStyle);

    // Actualizar el año en el footer
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
  });