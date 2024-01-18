//index.ts
import { PrismaClient } from "@prisma/client";
import Elysia from "elysia";
import { usuarioController } from "./controllers/usuario.controller";

//Cria instâncias de prisma e Elysia
const prisma = new PrismaClient();
const app = new Elysia();

//Use controladores como middleware
app.use( usuarioController as any);

//Ouve o tráfego
app.listen(4040, () => {
    console.log('O servidor está rodando na porta 4040 - Server is running on port 4040');
});

export { app, prisma };