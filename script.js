const header = document.querySelector('header');

// Sombra do cabeçalho
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Animação de Colocar e Tirar (Esquerda <-> Centro)
const slideElements = document.querySelectorAll('.slide-left');

const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Elemento entra na zona visível: Desliza para o centro
            entry.target.classList.add('show');
        } else {
            // Elemento sai da zona visível: Desliza de volta para a esquerda
            entry.target.classList.remove('show');
        }
    });
}, {
    // Margens em -15% fazem a animação de saída começar antes do elemento 
    // sumir da tela, permitindo que você veja ele voltando para a esquerda.
    rootMargin: "-15% 0px -15% 0px"
});

slideElements.forEach((el) => slideObserver.observe(el));