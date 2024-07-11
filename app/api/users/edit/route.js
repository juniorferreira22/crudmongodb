import connectToDatabase from "@/app/libs/mongodb";
import User from "@/app/models/user";
import { NextResponse } from "next/server";

export async function GET(req) {
        // pegando o id do usuário a ser buscado no banco de dados
        const id = req.nextUrl.searchParams.get('id');
        // conectando ao banco de dados
        await connectToDatabase();
        // buscando os usuários no banco de dados
        const users = await User.findById(id);
        // retornando os usuários encontrados no banco de dados
        return NextResponse.json(users, { status: 200 });
}

export async function PUT(req, {params}) {
    
    try {
        // pegando o id do usuário a ser atualizado no banco de dados
        const id = req.nextUrl.searchParams.get('id');

        // criando novas variaveis para substituir o usuario e email
        const {NewUsername: username, NewUsermail: usermail} = await req.json();

        // conectando ao banco de dados
        await connectToDatabase();

        // atualizando os dados do usuário no banco de dados
        await User.findByIdAndUpdate(id, {username, usermail});

        // retornando uma mensagem de sucesso ao atualizar os dados do usuário no banco de dados
        return NextResponse.json({message:"User updated successfully"}, {status: 201});
        
    } catch (error) {
        console.log(error);
    }

}
