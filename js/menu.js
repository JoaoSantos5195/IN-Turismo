// Menu Lateral
function openMenu() {
    document.getElementById("side-menu").style.width = "250px"; // Largura do menu
}

function closeMenu() {
    document.getElementById("side-menu").style.width = "0"; // Fecha o menu
}

// Aciona o menu ao clicar no botão
document.getElementById("menu-btn").onclick = openMenu;
