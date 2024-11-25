document.addEventListener('DOMContentLoaded', function () {
    // Elementos de controle do menu
    const menuToggle = document.getElementById('menuToggle');
    const menuAberto = document.querySelector('.menu-aberto');

    // Abre/fecha o menu ao mudar o estado do checkbox
    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            menuAberto.classList.add('active');
        } else {
            menuAberto.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Elementos de controle do menu
    const menuToggle = document.getElementById('menuToggle');
    const menuAberto = document.querySelector('.menu-aberto');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const body = document.body;

    // Abre/fecha o menu ao mudar o estado do checkbox
    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            menuAberto.classList.add('active');
            body.classList.add('no-scroll');
        } else {
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });

    // Fecha o menu ao clicar em um link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.checked = false;
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
});

    // Seçao de filtragem de proutos
    document.getElementById("applyFilters").addEventListener("click", function () {
    const categoryFilter = document.getElementById("categoryFilter").value;
    const priceFilter = document.getElementById("priceFilter").value;
    const popularityFilter = document.getElementById("popularityFilter").value;

    const products = document.querySelectorAll(".pro");

    products.forEach((product) => {
      const category = product.dataset.category;
      const price = parseFloat(product.dataset.price);
      const popularity = product.dataset.popularity;

      // Verificar os filtros aplicados
      let categoryMatch = categoryFilter === "all" || category === categoryFilter;
      let priceMatch =
        priceFilter === "all" ||
        (priceFilter === "low" && price < 50) ||
        (priceFilter === "medium" && price >= 50 && price <= 100) ||
        (priceFilter === "high" && price > 100);
      let popularityMatch =
        popularityFilter === "all" ||
        popularity === popularityFilter;

      // Mostrar ou ocultar o produto com base nos filtros
      if (categoryMatch && priceMatch && popularityMatch) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });