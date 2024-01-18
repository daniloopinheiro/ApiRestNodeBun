import jwt from "jsonwebtoken";

export const verificaToken = (token: string) => {
    let payload: any;

    //Verifica o token JWT
    jwt.verify(token, process.env.SECRET_JWT as string, (error, decoded) => {
        if (error) {
            throw new Error("Token inválido");
        }
        payload = decoded;
    });
    return payload;
};

export const logaUsuarioToken = (data: {id: number; email: string}) => {
    //Assina o token JWT
    const token = jwt.sign(
        {
            id: data.id,
            email: data.email,
        },
        process.env.SECRET_JWT as string,
        {expiresIn: process.env.EXPIRE_JWT}
    );
    return token;
};