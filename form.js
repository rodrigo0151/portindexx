function abrirWhatsapp() {
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let mensagem = document.getElementById('mensagem').value;
  let numero = "553299702829"; // Substitua pelo seu número com código do país e DDD

  let texto = Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem};
  let link = https://wa.me/${numero}?text=${encodeURIComponent(texto)};

  window.open(link);
}