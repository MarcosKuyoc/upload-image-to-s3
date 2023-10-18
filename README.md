# Serverless Framework: Node Con Typescript y S3Event

Se crea un servicio para crear una URL firmada que puedar subir una imagen a S3 usando node y serverless, tambien se crea una funcion que ejecuta un evento para redimenciona images una vez que sean cargadas al bucket.


## Setup

Corra este comando e inicialice el proyecto en su espacio de trabajo.

```
npm install
```

## Usage

**Deploy**

```
$ npm run deploy:offline
```

**Invoke la función de forma local.**

```
sls invoke local --function hello
```

**Pruebe la función**

```
curl https://localhost:3000/
```

# Observaciones par Mac M1 y la libreria sharp
```shell
npm i sharp --arch=x64 --platform=linux
npm i --production --arch=x64 --platform=linux
```

# Crear una lambda Layer
```shell
npm i --production --arch=x64 --platform=linux
mkdir nodejs
mv node_modules nodejs
zip -r nodejs.zip nodejs/
```