import connectToDatabase from "@/app/libs/mongodb";
import User from "@/app/models/user";
import { NextResponse } from "next/server";

export async function GET(params) {
        // pegando o id do usuário a ser buscado no banco de dados
        const { id } = params;
         // conectando ao banco de dados
        await connectToDatabase();
        // buscando os usuários no banco de dados
        const users = await User.find(id);
        // retornando os usuários encontrados no banco de dados
        return NextResponse.json(users, { status: 200 });
}

