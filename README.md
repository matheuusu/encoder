# Projeto de Criptografia e Descriptografica

Este projeto permite criptografar e descriptografar mensagens usando um conjunto específico de substituições de caracteres.

## Funcionalidades

- **Criptografar**: Transforma o texto inserido substituindo caracteres específicos por seus equivalentes criptografados.
- **Descriptografar**: Reverte o texto criptografado de volta ao texto original.
- **Copiar para a Área de Transferência**: Permite copiar o texto criptografado ou descriptografado para a área de transferência com um clique.

## Tecnologias Utilizadas

- **HTML**
- **CSS**
- **JavaScript**

## Como Usar

1. **Inserir Texto**: Digite o texto que deseja criptografar ou descriptografar em uma área de texto.
2. **Selecionar Ação**:
   - Clique no botão **"Criptografar"** para transformar o texto.
   - Clique no botão **"Descriptografar"** para reverter o texto criptografado.
3. **Copiar Texto**: Após a criptografia ou descriptografia, clique no botão **"Copiar"** para copiar o texto processado para a área de transferência.

## Estrutura do Projeto

#### Scripts

- **Criptografia e Descriptografia**:
  - `encrypt(text)`: Criptografa o texto substituindo caracteres por seus equivalentes criptografados.
  - `decrypt(text)`: Descriptografa o texto substituindo caracteres criptografados de volta aos caracteres originais.

- **Copiar para a Área de Transferência**:
  - `copyToClipboard(text)`: Copia o texto fornecido para a área de transferência.
