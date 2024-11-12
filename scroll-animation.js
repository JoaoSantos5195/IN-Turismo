// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Função para adicionar a classe de animação
function handleScrollAnimation() {
    const images = document.querySelectorAll('.fade-in-on-scroll');
    images.forEach(image => {
        if (isElementInViewport(image)) {
            image.classList.add('visible');
        }
    });
}

// Evento de rolagem para acionar a animação
window.addEventListener('scroll', handleScrollAnimation);

// Executa a função uma vez ao carregar a página
window.addEventListener('load', handleScrollAnimation);
