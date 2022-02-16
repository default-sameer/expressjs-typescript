import { Router } from "express";

const auth = Router()


auth.get('/', (req, res) => {
    res.send(200)
})

export default auth