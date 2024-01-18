//user.controller.ts
import Elysia from "elysia";
import { criaNovoUsuario, loga } from "../services/user.service";

export const usuarioController = (app: Elysia) => {
    app.post("/cadastra", async(context) => {
        try{
            const dadosUsuario: any = context.body;

            const novoUsuario = await criaNovoUsuario({
                nome: dadosUsuario.nome,
                email: dadosUsuario.email,
                senha: dadosUsuario.senha,
            });

            return{
                usuario: novoUsuario,
            };
        }catch(error: any){
            return{
                error: error.message,
            };
        }
    });

    app.post("/loga", async (context) => {
        try{
            const dadosUsuario: any = context.body;

            const logaUsuario = await loga({
                email: dadosUsuario.email,
                senha: dadosUsuario.senha,
            });

            return logaUsuario;
        }catch(error: any){
            console.log(error);
            return{
                error: error.message,
            };
        }
    });
};