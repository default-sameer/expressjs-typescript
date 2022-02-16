import { Router } from "express";
import auth from './auth'

const mainrouter = Router();

mainrouter.use('/auth', auth);

mainrouter.use('/', (req, res) => {
    res.send('Hello World');
})

export default mainrouter