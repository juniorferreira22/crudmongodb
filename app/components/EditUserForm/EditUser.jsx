'use client'

const findUser = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/users/edit/?id=${id}`, { cache: "no-store" }, { method: "GET" });
        const user = res.json();
        if (!res.ok) {
            throw new Error(`Usuário não encontrado: ${res.status}, ${res.statusText}`);
        }

        return user;

    } catch (error) {
        console.log(error);
    }
}

export default async function EditUserForm({ id }) {
    
    const id_local = id
    const userdata = await findUser(id_local);

    return (

        <form>
            <div className="flex flex-col max-w-3xl m-auto gap-2 text-center mt-4 bg-slate-900 p-4 pb-12 rounded-lg">
                <h1 className="mt-2 m-4">Editar usuário</h1>

                <input
                    className="flex p-3 rounded-lg bg-slate-600"
                    type="text"
                    placeholder="Nome"
                    onChange={(e) => SetNewName(e.target.value)}
                    defaultValue={userdata.username}
                />

                <input
                    className="flex p-3 rounded-lg bg-slate-600"
                    type="email"
                    placeholder="email"
                    onChange={(e) => SetNewMail(e.target.value)}
                    defaultValue={userdata.usermail}
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