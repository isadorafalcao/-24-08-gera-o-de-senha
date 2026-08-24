
// Localiza o campo onde a senha será exibida
const campoSenha = document.querySelector("#campo-senha");
// Localiza o número que mostra o tamanho da senha
const numeroSenha = document.querySelector("#numero-senha");

// NOVO: Localiza as caixas de seleção do HTML
const chkMaiusculas = document.querySelector("#chk-maiusculas");
const chkMinusculas = document.querySelector("#chk-minusculas");
const chkNumeros = document.querySelector("#chk-numeros");
const chkSimbolos = document.querySelector("#chk-simbolos");

// Suas listas de caracteres originais
const LetrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LetrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const Numeros = "0123456789";
const Simbolos = "#+-?!@%*&$";

// Tamanho inicial da senha
let tamanhoSenha = 8;

// Gera a primeira senha quando a página abrir
geraSenha();

// Função responsável por gerar a senha
function geraSenha() {
  // NOVO: Começa com a lista de caracteres vazia para construir com base nas marcações
  let caracteresPermitidos = "";
  
  // NOVO: Verifica quais caixas estão marcadas e adiciona os caracteres correspondentes
  if (chkMaiusculas.checked) caracteresPermitidos += LetrasMaiusculas;
  if (chkMinusculas.checked) caracteresPermitidos += LetrasMinusculas;
  if (chkNumeros.checked) caracteresPermitidos += Numeros;
  if (chkSimbolos.checked) caracteresPermitidos += Simbolos;

  // NOVO: Se nenhuma caixa estiver marcada, exibe um aviso e não gera a senha
  if (caracteresPermitidos === "") {
    campoSenha.value = "Selecione uma opção!";
    return;
  }

  let senha = "";
  
  // Repete o processo conforme o tamanho escolhido
  for (let i = 0; i < tamanhoSenha; i++) {
    // Agora o caracteresPermitidos muda dinamicamente conforme os checkboxes
    let numeroAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
    senha = senha + caracteresPermitidos[numeroAleatorio];
  }
  
  // Exibe a senha na tela
  campoSenha.value = senha;
}

// Diminui o tamanho da senha
function diminuiTamanho() {
  if (tamanhoSenha > 1) {
    tamanhoSenha--;
  }
  numeroSenha.textContent = tamanhoSenha;
  geraSenha();
}

// Aumenta o tamanho da senha
function aumentaTamanho() {
  if (tamanhoSenha < 20) {
    tamanhoSenha++;
  }
  numeroSenha.textContent = tamanhoSenha;
  geraSenha();
}

