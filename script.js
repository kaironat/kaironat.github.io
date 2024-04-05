document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.getElementById("close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const counter = document.getElementById("image-counter");
    const sections = document.querySelectorAll("section");
    let currentImageIndex = 0;
    let currentSectionImages = []; // Variable para almacenar las imágenes de la sección actual


    // Función para abrir el modal con una imagen específica
    function openModal(index, images) {
        currentImageIndex = index;
        modal.style.display = "block";
        modalImg.src = images[currentImageIndex].src;
        updateCounter();
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Función para actualizar el contador de imágenes
    function updateCounter() {
        counter.textContent = (currentImageIndex + 1) + "/" + currentSectionImages.length;
    }

    // Event listener para abrir el modal al hacer clic en una imagen de la galería
    sections.forEach((section) => {
        const images = section.querySelectorAll(".gallery img");
        images.forEach((img, index) => {
            img.addEventListener("click", function() {
                openModal(index, images);
            });
        });
    });

    // Event listener para cerrar el modal al hacer clic en el botón de cierre
    closeBtn.addEventListener("click", closeModal);

    // Event listener para cerrar el modal al hacer clic fuera del modal
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Event listener para la flecha izquierda
    prevBtn.addEventListener("click", function() {
        if (currentImageIndex === 0) {
            currentImageIndex = currentSectionImages.length - 1;
        } else {
            currentImageIndex--;
        }
        modalImg.src = currentSectionImages[currentImageIndex].src;
        updateCounter();
    });

    // Event listener para la flecha derecha
    nextBtn.addEventListener("click", function() {
        if (currentImageIndex === currentSectionImages.length - 1) {
            currentImageIndex = 0;
        } else {
            currentImageIndex++;
        }
        modalImg.src = currentSectionImages[currentImageIndex].src;
        updateCounter();
    });

    // Event listener para el teclado
    document.addEventListener("keydown", function(event) {
        if (modal.style.display === "block") {
            if (event.key === "ArrowLeft") {
                prevBtn.click();
            } else if (event.key === "ArrowRight") {
                nextBtn.click();
            } else if (event.key === "Escape") {
                closeModal();
            }
        }
    });


    // Función para aplicar o quitar la clase "large" según si la imagen está en el centro de la ventana
    function toggleImageSize() {
        currentSectionImages.forEach((img) => {
            img.classList.toggle("large", isElementInViewport(img));
        });
    }

    // Oculta todas las imágenes de la galería al inicio
    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach((img) => {
        img.style.display = "none";
    });

    // Event listener para mostrar las imágenes de la sección correspondiente al hacer clic en el encabezado
    const headers = document.querySelectorAll("header li a");
    headers.forEach((header) => {
        header.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSectionId = header.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetSectionId);
            currentSectionImages = Array.from(targetSection.querySelectorAll(".gallery img"));

            // Oculta todas las imágenes de las secciones
            sections.forEach((section) => {
                const images = section.querySelectorAll(".gallery img");
                images.forEach((img) => {
                    img.style.display = "none";
                });
            });

            // Muestra las imágenes de la sección correspondiente
            currentSectionImages.forEach((img) => {
                img.style.display = "block";
            });
        });
    });


    // Llama a toggleImageSize al cargar la página y al desplazarse
    window.addEventListener("DOMContentLoaded", toggleImageSize);
    window.addEventListener("scroll", toggleImageSize);

    // Event listener para girar la imagen horizontalmente
    modalImg.addEventListener("dblclick", function() {
        modalImg.classList.toggle("horizontal");
        if (modalImg.classList.contains("horizontal")) {
            modal.style.backgroundColor = "black";
        } else {
            modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        }
    });

    // Event listener para el zoom de la imagen
    modalImg.addEventListener("click", function() {
        modalImg.classList.toggle("zoom");
    });
})

document.addEventListener("DOMContentLoaded", function() {
    // Tu código existente aquí...

    // Seleccionar automáticamente el primer hipervínculo al cargar la página
    const firstNavLink = document.querySelector("nav ul li a");
    if (firstNavLink) {
        firstNavLink.click(); // Simula un clic en el primer hipervínculo
    }

     const navLinks = document.querySelectorAll('.nav-link');

    // Función para quitar la clase "active" de todos los enlaces del menú
    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    // Event listener para cada enlace del menú
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            removeActiveClass(); // Quita la clase "active" de todos los enlaces
            link.classList.add('active'); // Agrega la clase "active" al enlace seleccionado
        });
    });   
});

