// Aguarda todo o HTML carregar antes de rodar o código
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Controle do Cabeçalho (Header) - Adiciona sombra ao rolar
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }

    // 2. Animação ao Rolar a Página (Intersection Observer)
    const slideElements = document.querySelectorAll('.slide-left');
    
    const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {  
        rootMargin: "-15% 0px -15% 0px"
    });

    slideElements.forEach((el) => slideObserver.observe(el));


    // 3. Controle da Janela Modal (Popup de Projetos)
    const botoesAbrir = document.querySelectorAll('.ver-mais-btn');
    const btnFechar = document.getElementById('close-modal1');
    const modal = document.getElementById('modal-projeto1');

    // Abre o modal para qualquer um dos 6 botões clicados
    if (botoesAbrir.length > 0 && modal) {
        botoesAbrir.forEach(botao => {
            botao.addEventListener('click', (e) => {
                e.preventDefault(); 
                modal.classList.add('open');
                document.body.style.overflow = 'hidden'; 
            });
        });
    }

    // Fecha o modal ao clicar no botão de fechar (X)
    if (btnFechar && modal) {
        btnFechar.addEventListener('click', () => {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto'; 
        });
    }

    // Fecha o modal se o usuário clicar no fundo escuro (fora da caixa de conteúdo)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });

}); 