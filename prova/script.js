const mensagem = document.getElementById("mensagem_confirmacao");

const onSubmit = () => {
  event.preventDefault();
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  if (mensagem.innerHTML == "") {
    mensagem.innerHTML += `Muito obrigado(a), senhor(a) ${nome.value}. Acabamos de enviar um e-mail para: ${email.value} `;
  }
};
