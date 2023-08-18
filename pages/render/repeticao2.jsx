import listaProdutos from '../../data/listaProdutos'

export default function repeticao2() {

    const comborda = {
        border: "1px solid #000"
    }

    function renderizarLinhas() {


        return listaProdutos.map((produto => {
            return (
                <tr key={produto.id}>
                    <td style={comborda}>{produto.id} </td>
                    <td style={comborda}> {produto.nome}</td>
                    <td style={comborda}>{produto.preco} </td>
                </tr>
            )
        }))
    }


    return (
        <div>
            <table style={comborda}>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>{renderizarLinhas()}</tbody>
            </table>
        </div>
    )
}