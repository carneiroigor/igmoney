import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título:</th>
                        <th>Valor:</th>
                        <th>Categoria:</th>
                        <th>Data:</th>
                    </tr>
                </thead>
            <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>08/11/2023</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.100</td>
                        <td>Casa</td>
                        <td>05/11/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}