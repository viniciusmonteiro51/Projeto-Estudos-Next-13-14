import DataTableUsuarios from "@/components/usuarios/DataTableUsuarios";

export default function Usuarios() {
    return(
        <>
        <div className="flex items-center justify-between">
            <h1>Usuários</h1> 
        </div>
        <DataTableUsuarios/>
        </>
    )
}