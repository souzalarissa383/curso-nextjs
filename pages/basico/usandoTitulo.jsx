import Titulo from "../../components/Titulo"

export default function usandoTitulo(info) {
    console.log(info);
    return (
       <div>
            <Titulo 
            principal="Página de Cadastro" 
            secudario="Incluir, alterar e excluir coisas!" />

        <Titulo 
            principal="Página de Login" 
            secudario="Informe seu email e senha" />
            
        </div>
    )
}