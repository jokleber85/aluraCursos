Alura

TypeScript parte 1: Evoluindo seu Javascript (08 horas)
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
        "noImplicitAny": true // não deixa adotar o any (tipo nenhum)
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

Rodar o compilador</br>
```js
// npm run compile
npm start
```
</br>