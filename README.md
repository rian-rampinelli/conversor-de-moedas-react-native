# Conversor de moedas

Aplicativo mobile para consultar moedas disponíveis, salvar favoritas e converter valores entre moedas.

## Requisitos

- Node.js 
- Uma chave de API do [ExchangeRate-API](https://www.exchangerate-api.com/)

## Configuração

Na raiz do projeto, crie um arquivo `.env` e adicione sua chave:

```env
EXPO_PUBLIC_KEY_API=sua_chave_da_api
```

Obtenha a chave criando uma conta no serviço ExchangeRate-API. O aplicativo precisa dessa chave para carregar moedas e consultar cotações. Não compartilhe nem envie o arquivo `.env` para o Git.

## Instalação e execução

```bash
npm install
npm expo start
```

Use o Expo para abrir o aplicativo em um dispositivo ou emulador.
