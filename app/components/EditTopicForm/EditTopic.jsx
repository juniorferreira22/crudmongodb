export default function EditTopicForm(){
    return(

        <>
        <div className="flex flex-col max-w-3xl m-auto gap-2 text-center mt-4 bg-slate-900 p-4 pb-12 rounded-lg">
                    <h1 className="mt-2 m-4">Editar usuário</h1>

                    <input
                        className="flex p-3 rounded-lg bg-slate-600"
                        type="text"
                        placeholder="Nome"
                        onChange={""}
                        defaultValue={""}
                    />

                    <input
                        className="flex p-3 rounded-lg bg-slate-600"
                        type="email"
                        placeholder="email"
                        onChange={""}
                        defaultValue={""}
                    />

                    <button
                        className=" mt-2 bg-white text-slate-950 p-4 rounded-lg"
                        type="submit">
                        Editar
                    </button>
                </div>
        </>
    )
}