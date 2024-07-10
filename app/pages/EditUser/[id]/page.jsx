'use client'

import EditUserForm from "@/app/components/EditUserForm/EditUser";
import { useParams } from "next/navigation";

export default function EditUser() {
    // obtendo o id do usuario a ser editado via query params
    const params = useParams();
    const { id } = params;
    
    return (
        <EditUserForm id={id} />
    )
}