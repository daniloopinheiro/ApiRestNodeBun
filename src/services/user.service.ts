import { prisma } from "../index";
import { logaUsuarioToken } from "./auth.service";

export const criaNovoUsuario = async (data: {
    nome: string;
    email: string;
    senha: string;
}) => {
    try{

        const { nome, email, senha } = data;
    
        //Hash a senha usando o pacote Bun e o algoritmo bcrypt
        const hashSenha = await Bun.password.hash(senha, {
            algorithm: "bcrypt",
        });
        //Cria o usuário
        const usuario = await prisma.usuario.create({
            data: {
                nome,
                email,
                senha: hashSenha,
            },
        });
        return usuario;
    }catch (error){
        throw error;
    }
};

export const loga = async (data: { email: string; senha: string}) => {
    try{
        const { email, senha} = data;

        const usuario = await prisma.usuario.findUnique({
            where: {
                email,
            },
        });

        if(!usuario){
            throw new Error("Usuário não encontrado");
        }

        const valido = await Bun.password.verify(senha, usuario.senha);

        if(!valido){
            throw new Error("credenciais invalidas");
        }

        const token = logaUsuarioToken({
            id: usuario.id,
            email: usuario.email,
        });

        return{
            message:"Usuário logado com sucesso",
            token,
        };
    }catch(error){
        throw error;
    }
};