import express from "express";

import { Router } from "express";

const server = express();

const routes = new Router();


server.use(express.json());
server.use(express.urlencoded({extended:false}));


// Clientes
routes.get("/clientes", (req, res, next)=>{
    return res.status(200).json({message: "Seja bem vindo!"});
});



server.use(routes);
server.listen(3000);

