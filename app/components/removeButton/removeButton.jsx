import Link from "next/link"


export default function RemoveBtn() {
    return (
        <Link className="border border-red-700 px-6 p-4 rounded-lg" href={""}>
            Excluir
        </Link>
    )
}