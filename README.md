
# URL Shortener Service

Este projeto é um serviço de encurtamento de URLs construído com NestJS. Ele permite que os usuários forneçam URLs longas e obtenham versões encurtadas, que podem ser usadas para redirecionar para as URLs originais.

## Sumário

- [Instalação](#instalação)
- [Uso](#uso)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Testes](#testes)

## Instalação

1. Clone o repositório:
   ```sh
   git clone git@github.com:CarolinaRUtsch/url-shortener.git
   cd url-shortener
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Certifique-se de ter o Nest CLI instalado globalmente:
   ```sh
   npm install -g @nestjs/cli
   ```

## Uso

1. Compile o projeto:
   ```sh
   npm run build
   ```

2. Inicie o servidor:
   ```sh
   npm run start
   ```

3. Acesse o servidor em `http://localhost:3000`.

## Scripts Disponíveis

- `npm run build`: Compila o projeto TypeScript para JavaScript.
- `npm run start`: Inicia o servidor em modo de produção.
- `npm run start:dev`: Inicia o servidor em modo de desenvolvimento com recarga automática.
- `npm run test`: Executa os testes utilizando Jest.

## Estrutura do Projeto

```plaintext
url-shortener/
├── dist/                   # Arquivos compilados
├── src/                    # Código fonte
│   ├── shortener/
│   │   ├── shortener.service.ts
│   │   └── shortener.service.spec.ts
│   └── main.ts
├── test/                   # Arquivos de teste
│   └── shortener.service.spec.ts
├── .gitignore
├── jest.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Testes

Para executar os testes, utilize o seguinte comando:

```sh
npm run test
```

Os testes são escritos utilizando Jest e estão localizados no diretório `test`. Eles cobrem os principais casos de uso do serviço de encurtamento de URLs.

### Cenários de Teste

- **Definição do Serviço**: Verifica se o serviço está definido corretamente.
- **Encurtar uma URL Válida**: Testa o encurtamento de uma URL válida.
- **Lançar Erro para URL Inválida**: Verifica se uma URL inválida lança uma `BadRequestException`.
- **Retornar a URL Original para um ID Encurtado**: Testa se a URL original é retornada corretamente para um ID encurtado.
- **Lançar Erro se o ID Encurtado Não Existir**: Verifica se uma `NotFoundException` é lançada para um ID inexistente.
- **Tratar Diferentes Tipos de URLs**: Testa URLs com diferentes protocolos, subdomínios, portas, caminhos, strings de consulta e fragmentos.
