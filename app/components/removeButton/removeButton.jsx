"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";

export default async function RemoveBtn({id}){

    const router = useRouter();

    const deleteUser = async() => {
        // confirma se o usuario quer mesmo deletar o usuario.
        const confirmation = confirm("Quer mesmo deletar o usuario?");
        // se a confirmacao for aceita, ele envia a query para a API com o metodo DELETE, passando o ID do usuario como parametro
        if (confirmation) {
            const res = await fetch(`http://localhost:3000/api/users/delete/?id=${id}`, {method: 'DELETE'});
            console.log(id);

            // se houver o fetch do banco de dados, retorna um alerta e a pagina recarrega sozinha. 
            if (res.ok) {
                alert('Usuário excluído com sucesso!');
                router.refresh();
            }
            if(!res.ok) {
            alert('Exclusão abortada.');
            }
        }
        else {
            alert('Não foi possível excluir o usuário');
        }
    };
    return (
        <Link onClick={deleteUser} className="border border-red-700 px-6 p-4 rounded-lg" href={""}>
            Excluir
        </Link>
    )
}