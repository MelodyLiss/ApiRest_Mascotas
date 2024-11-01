const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.middlewares();
        this.router();
    }

    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));

    }

    router(){
        this.app.use('/mascotas', require('../routers/mascota'));
        this.app.use('/cuidadores',require('../routers/cuidador'))
    }

    listen(){
        const reset = "\x1b[0m";
        const colorLog = "\x1b[45m";

        this.app.listen(this.port, () =>{
            console.log(`${colorLog} Servidor inicializado en el puerto ${this.port} ${reset}`);
        });
    }
}

module.exports=Server