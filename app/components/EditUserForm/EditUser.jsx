import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function EditUserForm({ id }) {
    
    const [user, setUser] = useState({ username: "", usermail: "" });
    const router = useRouter();
    const [newName, setNewName] = useState();
    const [newMail, setNewMail] = useState();

    useEffect(() => {
        // buscando o user pelo ID passado pelo params, dentro da API
        const fetchUser = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/users/edit/?id=${id}`, { cache: "no-store" });
                if (!res.ok) {
                    throw new Error(`Usuário não encontrado: ${res.status}, ${res.statusText}`);
                }
                const userData = await res.json();
                setUser(userData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUser();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await fetch(`http://localhost:3000/api/users/edit/?id=${id}`, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ NewUsername: newName, NewUsermail: newMail })
            });

            if (!res.ok) {
                throw new Error(`Erro ao editar usuário: ${res.status}, ${res.statusText}`);
            }


            if (res.ok) {
                alert('Usuário editado com sucesso!');
                router.push('/');
                router.refresh();
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col max-w-3xl m-auto gap-2 text-center mt-4 bg-slate-900 p-4 pb-12 rounded-lg">
                <h1 className="mt-2 m-4">Editar usuário</h1>

                <input
                    className="flex p-3 rounded-lg bg-slate-600"
                    type="text"
                    placeholder="Nome"
                    onChange={(e) => setNewName(e.target.value)}
                    defaultValue={user.username}
                />

                <input
                    className="flex p-3 rounded-lg bg-slate-600"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setNewMail(e.target.value)}
                    defaultValue={user.usermail}
                />

                <button
                    className=" mt-2 bg-white text-slate-950 p-4 rounded-lg"
                    type="submit">
                    Editar
                </button>
            </div>
        </form>
    )
}