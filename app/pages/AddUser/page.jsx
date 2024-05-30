"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddUser() {

    const [username, setUsername] = useState('')
    const [usermail, setUsermail] = useState('')

    const router = useRouter();

    const HandleSubmit = async (e) => {
        e.preventDefault();
    // se nao existir usuario ou email preenchidos, retorna um alerta.
    if(!username || !usermail){
        alert('Preencha todos os campos')
        return;
    }

    // utilizando o metodo post para enviar os dados dos campos preenchidos para a API criada
    try {
        const res = fetch('http://localhost:3000/api/users/post/', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, usermail })
        })
        
    if (res){
        alert('Usuário cadastrado com sucesso!');
        router.push('/');
    }
    } catch (error) {
        throw new Error('erro ao criar usuario');
    }




    }

    return (
        <form onSubmit={HandleSubmit} className="flex flex-col max-w-3xl m-auto gap-2 text-center mt-4 bg-slate-900 p-4 pb-12 rounded-lg">
            <h1 className="mt-2 m-4">Cadastrar usuário</h1>

            <input
                className="flex p-3 rounded-lg bg-slate-600"
                type="text"
                placeholder="Nome"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />

            <input
                className="flex p-3 rounded-lg bg-slate-600"
                type="email"
                placeholder="email"
                onChange={(e) => setUsermail(e.target.value)}
                value={usermail}
            />

            <button
                className=" mt-2 bg-white text-slate-950 p-4 rounded-lg"
                type="submit">
                Cadastrar
            </button>
        </form>
    )
}