# Serverless Framework: Node Con Typescript y HTTP API En AWS

Se crea un servicio para subir una imagen a S3 usando serverless la imagen resultante sera una url firmada


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

# Crear una lamnda Layer
```shell
npm i --production --arch=x64 --platform=linux
mkdir nodejs
mv node_modules nodejs
#apt update -y && apt install zip -y
zip -r nodejs.zip nodejs/
```