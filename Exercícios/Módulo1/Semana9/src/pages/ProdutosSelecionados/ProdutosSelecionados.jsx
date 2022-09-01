
import { ListaCards } from "@components"
import { useProdutosSelecionados } from "@contexts"

export const ProdutosSelecionados = () =>{
    
    const {produtosSelecionados} = useProdutosSelecionados()
    
    return (
        <>
        
        <h1>Produtos Selecionados</h1>

        <ListaCards produtos={produtosSelecionados}/>

        </>
    )
}