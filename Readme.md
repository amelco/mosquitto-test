# Integração Autonomus / Autonomus Casa

Breve descrição de como executar os testes de comunicação em nosso ambiente
de desenvovimento. Apresenta 2 scripts simples de comunicação pelo protocolo `mqtt`:

- **`listen.js`**: Fica ouvindo o que o broker mandar em um tópico
- **`publish.js`**: Publica uma mensagem em um tópico

## Configurando o ambiente

- Instale o servidor mqtt mosquitto:  (`$ sudo apt install mosquitto`)
- Instale o módulo `mqtt` do node: (`$ npm install mosquitto`)
- Inicie o servidor `mqtt`:  (`$ mosquitto -p [porta] -v`)

## Rodando os scripts

- Execute o script `listen.js` com o node em um terminal.
- Utilize outro terminal para fazer as publicações dos reports através do script `publish.js`

Você verá o resultado da publicação no terminal que está rodando o `listen.js`.

