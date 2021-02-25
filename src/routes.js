import { Router } from "express";

const routes = new Router();

// Clientes
routes.get("/clientes", (req, res, next)=>{
    return res.status(200).json({message: "Seja bem vindo!"});
});

export default routes;