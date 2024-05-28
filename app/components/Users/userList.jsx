import Link from "next/link";
import RemoveBtn from "../removeButton/removeButton";

export default function UserList() {
    return (
        <>
            <div className="flex flex-row border border-slate-800 rounded-lg content-between justify-between p-4 max-w-3xl items-center m-auto mt-2">
                <div className="flex flex-col pl-2">
                    <h3 className="font-bold text-lg">Nome do Usuário</h3>
                    <p>email do usuário</p>
                </div>

                <div className="flex flex-row gap-3 pr-3">
                    <RemoveBtn />

                    <Link className="border border-slate-400 px-6 p-4 rounded-lg" href={"/pages/EditUser/123"}>
                        Editar
                    </Link>
                </div>

            </div>
        </>
    );
}