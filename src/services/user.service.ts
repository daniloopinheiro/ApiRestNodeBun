import { prisma } from "../index";
import { logaUsuarioToken } from "./auth.service";

export const criaNovoUsuario = async (data: {
    name: string;
    email: string;
    senha: string;
}) => {
    try{

        const { name, email, senha } = data;
    
        //Hash a senha usando o pacote Bun e o algoritmo bcrypt
        const hashSenha = await Bun.senha.hash(senha, {
            algorithm: "bcrypt",
        });
        //Cria o usuário
        const usuario = await prisma.usuario.create({
            data: {
                name,
                email,
                senha: hashSenha,
            },
        });
        return usuario;
    }catch (error){
        throw error;
    }
};