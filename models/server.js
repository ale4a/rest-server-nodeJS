const express = require('express');
const cors = require('cors');

class Server {
    constructor () {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';
        // Middlewares
        this.middlewares();
        // Routes of my application
        this.routes();
    }

    middlewares () {
        // CORS
        this.app.use( cors() );
        // Parse and read from Body
        this.app.use( express.json() );
        // Public directory
        this.app.use( express.static('public') );
    }

    routes () {
        this.app.use( this.userPath  , require('../routes/user.routes'));
    }

    listen () {
        this.app.listen( this.port, () => {
            console.log('Server listengin in port', this.port);
        });
    }
}

module.exports = Server;