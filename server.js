document.addEventListener("DOMContentLoaded", () => {
    const productos = [
        { nombre: "Producto 1", precio: "$14.067,39 €", imagen: "https://a.1stdibscdn.com/louis-vuitton-x-nike-air-force-1-sneakers-virgil-abloh-42-for-sale/v_588/v_176813721669045930212/v_17681372_1669045930497_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=700" },
        { nombre: "Producto 2", precio: "$560", imagen: "https://a.1stdibscdn.com/archivesE/upload/1121189/v_251072821738222173149/25107282_datamatics.jpg?disable=upscale&auto=webp&quality=60&width=700" },
        { nombre: "Producto 3", precio: "$187", imagen: "https://a.1stdibscdn.com/archivesE/upload/1121189/v_236209821722682895010/23620982_datamatics.jpg?disable=upscale&auto=webp&quality=60&width=700" }
    ];

    const productosContainer = document.getElementById("productos");
    productos.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>${prod.precio}</p>
        `;
        productosContainer.appendChild(div);
    });

    document.getElementById("registroForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const usuario = {
            nombre: document.getElementById("nombre").value,
            rut: document.getElementById("rut").value,
            telefono: document.getElementById("telefono").value,
            email: document.getElementById("email").value
        };
        localStorage.setItem("usuario", JSON.stringify(usuario));
        alert("Registro exitoso!");
    });
});
