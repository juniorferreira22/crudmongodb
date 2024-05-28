import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex flex-row bg-slate-900 rounded-lg items-center justify-between max-w-3xl m-auto mt-3 py-4 pr-7">
            <Link className="font-bold pl-7" href={"/"} >Home</Link>
            <Link className="bg-slate-950 p-4 px-9 rounded-lg border border-slate-300" href={`/pages/AddUser/`} >Adicionar Usuario</Link>
        </div>
    );
}