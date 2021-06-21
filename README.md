Alura

TypeScript parte 2: Mais técnicas e boas práticas (10 horas)
## <br />

Configuração do Arquivo package.json dentro pasta aluraBank</br> 
```js
  npm init;
```
</br>

Instalação do TypeScript dentro da pasta aluraBank</br>
```js
  npm install typescript@2.3.2 --save-dev;
```
</br>

* Alterar nome da pasta "js" para "ts"
* Alterar extensão do arquivo "app.js" para "app.ts"
* Alterar extensão do arquivo "Negociacao.js" para "Negociacao.ts" 

Criar arquivo de configuração do TypeScript "tsconfig.json"</br>
```js
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "js",
        "noEmitOnError": true, // não deixa gerar arquivo pasta js enquanto houver erro no typescript   
        "noImplicitAny": true, // não deixa adotar o any (tipo nenhum)
        "removeComments": true // remover comentários dos arquivos js, feitos nos arquivos ts
    },
    "include": [
        "ts/**/*"
    ]
}
```
</br>

Configurar compilador para rodar o TypeScript "package.json"</br>
```js
{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "directories": {
    "lib": "lib"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",
    "start": "tsc -w"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^2.3.2"
  }
}
```
</br>

Instalando dependecia para que o TypeScript reconheça os comandos em JQUERY (TypeScripDefinition-TSD)
```js
npm install @types/jquery@2.0.42 --save-dev
```
</br>

Rodar o compilador</br>
```js
// npm run compile
npm start
```
</br>

## <br />

Continuação do curso:</br>

Carregamento do loader de modulos</br>

Adicionar lib ao index.html
```html
    <script src="lib/system.js"></script>
    <script>
        System.defaultJSExtensions = true;
        System.import('js/app.js').catch(err => console.error(err));
    </script>
```
<br/>

Configuração o tsconfig.json para reconhecer o modelo de modules + boquear undefined ou null + utilização decorators
```js
{
    "compilerOptions": {
        "target": "es6",
        "outDir": "js",
        "noEmitOnError": true,
        "noImplicitAny": true,
        "removeComments": true,
        "module": "System",
        "strictNullChecks": true // bloquear tipo undefined e null como parametro
        "experimentalDecorators": true // permitir a utilização decorators
    },
    "include": [
        "ts/**/*"
    ]
}
```
</br>

Instalação do servidor para rodar o projeto em tempo real:
```js
npm install lite-server@2.3.0 --save-dev
```
</br>

Configurar o servidor do projeto:
```js
{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "directories": {
    "lib": "lib"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",
    "start": "tsc -w",
    "server": "lite-server --baseDir=aluraBank"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jquery": "^2.0.42",
    "lite-server": "^2.3.0",
    "typescript": "^2.3.2"
  }
}
```
</br>

Rodar o servidor do projeto:</br>
```js
npm run server
```
</br>

Instalar serviço para rodar ambos compiladores (TypeScript e LiteServer) com apenas uma instrução:</br>
```js
npm install concurrently@3.4.0 --save-dev
```
<br>

Configurar o concurrently do projeto:</br>
```js
{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",
    "watch": "tsc -w", //"start": "tsc -w",
    "server": "lite-server --baseDir=app",
    "start": "concurrently \"npm run watch\" \"npm run server\""
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jquery": "^2.0.42",
    "concurrently": "^3.4.0",
    "lite-server": "^2.3.0",
    "typescript": "^2.3.2"
  }
}
```
</br>

Rodar o concurrently do projeto:</br>
```js
npm start
```
</br>

Rodar o servidor da API em outro terminal paralelo(aluraBank/api) </br>
(Endereço acesso dados API)[http://localhost:8080/dados] :</br>
```js
npm start
```
</br> 

