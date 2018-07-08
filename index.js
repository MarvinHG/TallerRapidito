const http = require('http'),
    connect = require('connect'),
    serveStatic = require('serve-static'),
    nodemon = require('nodemon');

let port = 8000;

connect().use(serveStatic(__dirname)).listen(port, ()=>{
    console.log(`El servidor esta levantado dentro del puerto ${port}`)
    console.log(`http://localhost:${port}/public/index.html`);
    nodemon({
        script: 'api/server.js',
        ext: 'js'
    });
});