// Adiciona eventos para os botões de criptografar e descriptografar
document.querySelector('.btn-encrypt').addEventListener('click', (event) => {
  event.preventDefault();
  handleEncryptionDecryption('encrypt');
});

document.querySelector('.btn-decrypt').addEventListener('click', (event) => {
  event.preventDefault();
  handleEncryptionDecryption('decrypt');
});

// Função para criptografia e descriptografia
function handleEncryptionDecryption(type) {
  const textArea = document.querySelector('textarea[name="message"]');
  const textAreaValue = textArea.value.trim().toLowerCase();

  if (textAreaValue === '') {
    alert('O campo de texto não pode estar vazio!');
    return;
  }

  const processedText = type === 'encrypt' ? encrypt(textAreaValue) : decrypt(textAreaValue);

  // Atualiza o conteúdo do <h2>
  document.querySelector('.message-title').textContent = processedText;

  // Oculta o <p> e a imagem
  document.querySelector('.message-text').style.display = 'none';
  document.querySelector('#right-panel img').style.display = 'none';

  // Adiciona o botão de copiar se ainda não existir
  let copyButton = document.querySelector('.btn-copy');
  if (!copyButton) {
    copyButton = document.createElement('button');
    copyButton.textContent = 'Copiar';
    copyButton.className = 'btn-copy'; // Simplificado
    document.querySelector('.right-panel__message').appendChild(copyButton);
    copyButton.addEventListener('click', () => copyToClipboard(processedText));
  }
}

// Função para copiar o texto para o clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Texto copiado para a área de transferência!');
  }).catch(err => {
    console.error('Falha ao copiar o texto: ', err);
  });
}

// Funções de criptografia e descriptografiação
const encrypt = (text) => text.replace(/e/g, "enter")
  .replace(/i/g, "imes")
  .replace(/a/g, "ai")
  .replace(/o/g, "ober")
  .replace(/u/g, "ufat");

const decrypt = (text) => text.replace(/enter/g, "e")
  .replace(/imes/g, "i")
  .replace(/ai/g, "a")
  .replace(/ober/g, "o")
  .replace(/ufat/g, "u");
