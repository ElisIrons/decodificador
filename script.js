const btnCrip = document.querySelector(".btn");
const btnCopy = document.querySelector(".btn-copiar");

function criptografarMensagem() {
  const mensagem = document.querySelector(".insercao-mensagem");
  const mensagemOriginal = mensagem.value;
  if (verificarCaracteres(mensagemOriginal)) {
    alert("🚫 Não são permitidas letras maiúsculas e acentuadas! 🚫");
    return;
  }
  if (mensagemOriginal.trim() === "") {
    return;
  }

  function substituirVogais(letra) {
    switch (letra) {
      case "a":
        return "ai";
      case "e":
        return "enter";
      case "i":
        return "imes";
      case "o":
        return "ober";
      case "u":
        return "ufat";
      default:
        return letra;
    }
  }

  const mensagemCriptografada = mensagemOriginal
    .split("")
    .map(substituirVogais)
    .join("");
  atualizaResultado(mensagemCriptografada);
}

function descriptografarMensagem() {
  const mensagem = document.querySelector(".insercao-mensagem");
  const mensagemCriptografada = mensagem.value;
  if (verificarCaracteres(mensagemCriptografada)) {
    alert("🚫 Não são permitidas letras maiúsculas e acentuadas! 🚫");
    return;
  }
  const mapeamentoDescriptografar = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  function descriptografarSequencia(sequencia) {
    return mapeamentoDescriptografar[sequencia] || sequencia;
  }

  const sequenciasCriptografadas = mensagemCriptografada.match(
    /(ai|enter|imes|ober|ufat)|./gi
  );

  const mensagemDescriptografada = sequenciasCriptografadas
    .map(descriptografarSequencia)
    .join("");

  return atualizaResultado(mensagemDescriptografada);
}

function atualizaResultado(resultado) {
  const saidaTexto = document.querySelector(".saida-texto");
  saidaTexto.textContent = resultado;
}

function copiarMensagem() {
  const saidaTexto = document.querySelector(".saida-texto");
  const textoParaCopiar = saidaTexto.textContent;

  navigator.clipboard
    .writeText(textoParaCopiar)
    .then(() => {})
    .catch((error) => {
      console.error(`Erro ao copiar o texto: ${error}`);
    });
  showToast("Texto copiado 🚀");
  limparCampo();
}

function limparCampo() {
  const mensagemCrip = document.querySelector(".insercao-mensagem");
  const saidaTexto = document.querySelector(".saida-texto");

  mensagemCrip.value = "";
  saidaTexto.textContent = "";
}

function verificarCaracteres(texto) {
  const regexCaractereEspecial = /[A-Z]/;
  const regexAcentuacao = /[áàãâéèêíïóôõöúüç]/i;
  return regexCaractereEspecial.test(texto) || regexAcentuacao.test(texto);
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 500);
  }, 3000);
}
