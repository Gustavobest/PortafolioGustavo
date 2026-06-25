form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mkoljvbl", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        statusMessage.textContent = "Mensaje enviado correctamente 🚀";
        statusMessage.style.display = "block";
        form.reset();
    } else {
        statusMessage.textContent = "Error al enviar el mensaje ❌";
        statusMessage.style.display = "block";
    }

    setTimeout(() => {
        statusMessage.style.display = "none";
    }, 3000);
});