// Variáveis
const navegacao = document.getElementById("navegacaoPrincipal")
const formularioContacto = document.getElementById("formularioContacto")
const seccoesAnimadas = document.querySelectorAll("section")

// Função para adicionar classe ao menu quando rolar a página
function atualizarNavegacao() {
  if (window.scrollY > 50) {
    navegacao.classList.add("scrolled")
  } else {
    navegacao.classList.remove("scrolled")
  }
}

// Inicializar tooltips do Bootstrap
document.addEventListener("DOMContentLoaded", () => {
  // Ativar scrollspy
  const bootstrap = window.bootstrap // Declara a variável bootstrap
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#navegacaoPrincipal",
    offset: 100,
  })

  // Adicionar evento de envio ao formulário
  if (formularioContacto) {
    formularioContacto.addEventListener("submit", (evento) => {
      evento.preventDefault()

      // Obter valores do formulário
      const nome = document.getElementById("nome").value
      const email = document.getElementById("email").value
      const assunto = document.getElementById("assunto").value
      const mensagem = document.getElementById("mensagem").value

      // Aqui seria implementada a lógica para enviar o email
      // Por enquanto, apenas mostramos um alerta
      alert(`Obrigado ${nome}! A sua mensagem foi enviada com sucesso.`)

      // Limpar formulário
      formularioContacto.reset()
    })
  }

  // Adicionar navegação suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const alvoId = this.getAttribute("href")
      const alvoElemento = document.querySelector(alvoId)

      if (alvoElemento) {
        window.scrollTo({
          top: alvoElemento.offsetTop - 70,
          behavior: "smooth",
        })

        // Fechar menu móvel se estiver aberto
        const navbarToggler = document.querySelector(".navbar-toggler")
        const navbarCollapse = document.querySelector(".navbar-collapse")

        if (navbarCollapse.classList.contains("show")) {
          navbarToggler.click()
        }
      }
    })
  })
})

// Adicionar evento de scroll
window.addEventListener("scroll", atualizarNavegacao)

// Chamar a função uma vez para definir o estado inicial
atualizarNavegacao()

