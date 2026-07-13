// Aguarda todo o HTML carregar antes de rodar o código
document.addEventListener("DOMContentLoaded", () => {
  // 1. Controle do Cabeçalho (Header) - Adiciona sombra ao rolar
  const header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
      } else {
        header.style.boxShadow = "none";
      }
    });
  }

  // 2. Animação ao Rolar a Página (Intersection Observer)
  const slideElements = document.querySelectorAll(".slide-left");

  const slideObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    {
      rootMargin: "-15% 0px -15% 0px",
    },
  );

  slideElements.forEach((el) => slideObserver.observe(el));

  // 3. Controle das Janelas Modais (Popups Dinâmicos)
  const botoesAbrir = document.querySelectorAll(".ver-mais-btn");
  const modais = document.querySelectorAll(".modal-overlay");
  const botoesFechar = document.querySelectorAll(".modal-close");

  // Abre o modal correspondente baseado na ordem (índice) do botão clicado
  botoesAbrir.forEach((botao, index) => {
    botao.addEventListener("click", (e) => {
      e.preventDefault();
      const modalCorreto = modais[index]; // Pega o modal na mesma posição do botão

      if (modalCorreto) {
        modalCorreto.classList.add("open");
        document.body.style.overflow = "hidden"; // Trava o scroll da página no fundo
      }
    });
  });

  // Fecha o modal ao clicar no respectivo botão de fechar
  botoesFechar.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const modalCorreto = modais[index];
      if (modalCorreto) {
        modalCorreto.classList.remove("open");
        document.body.style.overflow = "auto"; // Destrava o scroll
      }
    });
  });

  // Fecha o modal se o usuário clicar no fundo escuro de qualquer um deles
  modais.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("open");
        document.body.style.overflow = "auto";
      }
    });
  });
});
