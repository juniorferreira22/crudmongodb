import connectToDatabase from "@/app/libs/mongodb";
import User from "@/app/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
    
    try {
        // pegando os dados do body da requisição
        const {username, usermail} = await req.json();
        // conectando ao banco de dados
        await connectToDatabase();
        // criando um novo usuário no banco de dados
        await User.create({username, usermail});
        // retornando uma mensagem de sucesso ao criar o usuário no banco de dados
        return NextResponse.json({message:"User created successfully"}, {status: 201});
    } catch (error) {
        // caso ocorra algum erro ao criar o usuário no banco de dados, imprime o erro no console.log;
        console.log(error);
    }

}