const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT; 

        this.middlewares();

        this.routes();
    }

    middlewares() {
        //directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.get('/api', function (req, res) {
            res.json({
                msg: "msg get API"
            })
        })
        this.app.put('/api', function (req, res) {
            res.json({
                msg: "msg put API"
            })
        })
        this.app.post('/api', function (req, res) {
            res.json({
                msg: "msg post API"
            })
        })
        this.app.delete('/api', function (req, res) {
            res.json({
                msg: "msg delete API"
            })
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("servidor corriendo en " + this.port);
        })
    }
}

module.exports = Server;