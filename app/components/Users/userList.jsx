import Link from "next/link";
import RemoveBtn from "../removeButton/removeButton";


//primeiro, criamos uma funcao assincrona para puxar todos os usuarios do banco de dados e retornar para o front
const GetUsers = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/users/get/`, { cache: "no-store" }, {method: "GET"});
        console.log('users fetched successfully');
        if (!res.ok) {
            throw new Error(`Erro ao buscar usuários: ${res.status}`);
        }

        return res.json();

    } catch (error) {
        console.log(error + error.message);
    }
}

export default async function UserList() {

    //mapeando a resposta para ser impressa em uma div
    const users = await GetUsers();

    return (
        <>
            {users.map(user => (
                <div className="flex flex-row border text-white border-slate-800 rounded-lg content-between justify-between p-4 max-w-3xl items-center m-auto mt-2">
                    <div className="flex flex-col pl-2">
                        <h3 className="font-bold text-lg">{user.username}</h3>
                        <p>{user.usermail}</p>
                    </div>

                    <div className="flex flex-row gap-3 pr-3">
                        <RemoveBtn id = {user._id} />
                        <Link className="border border-slate-400 px-6 p-4 rounded-lg" href={`/pages/EditUser/${user._id}`}>
                            Editar
                        </Link>
                    </div>
                </div>
            ))}

        </>
    );
}