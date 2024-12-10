document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById("page-select");
    const pages = document.querySelectorAll(".page");

    // Esconde todas as páginas
    const hideAllPages = () => {
        pages.forEach((page) => {
        page.style.display = "none";
        });
    };

    // Exibe uma página específica
    const showPage = (pageId) => {
        const activePage = document.getElementById(pageId);
        if (activePage) {
        activePage.style.display = "flex"; // Mostra a página com layout flex
        }
    };

    // Configura a página padrão ao carregar
    const initializeDefaultPage = () => {
      const defaultPageId = "page-1"; // ID da página padrão
        hideAllPages();
        showPage(defaultPageId);

      // Define o valor padrão do <select>
        selectElement.value = "1";
    };

    // Evento de mudança no select
    selectElement.addEventListener("change", (e) => {
        const selectedPageId = `page-${e.target.value}`;
        hideAllPages();
        showPage(selectedPageId);
    });

    // Inicializa com a página padrão
    initializeDefaultPage();
});