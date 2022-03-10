import express, { Express } from 'express';
import cors from 'cors'
// import session from 'express-session';

import routes from '../routes'

export function createApp() : Express {
    const app = express();

    // Enable Parsing Middleware for Request
    app.use(express.json());
    app.use(express.urlencoded());

    app.use(cors({
        // Fornt End Url
        origin: ['http://localhost:3000'],
        credentials: true
    }));

    // app.use(session({
    //     secret: 'secret',
    //     resave: false,
    //     saveUninitialized: false,
    //     cookie: {
    //         maxAge: 60000 * 60 * 24 * 7,
    //     }
    // }))
    app.use('/api', routes);
    return app;
}