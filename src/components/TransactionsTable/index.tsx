import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

interface Transaction {
    id: number;
    tittle: string;
    amount: number;
    category: string;
    createdAt: string;
    type: string;
}

export function TransactionsTable(){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [] );

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
                {transactions.map(transaction => {
                    return (
                        <tr key={transaction.id}>
                        <td>{transaction.tittle}</td>
                        <td className={transaction.type}>
                            {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(transaction.amount)}</td>
                        <td>{transaction.category}</td>
                        <td>
                        {new Intl.DateTimeFormat('pt-BR').format(
                            new Date(transaction.createdAt)
                        )}
                        </td>
                    </tr>
                    )
                })}
            </tbody>
            </table>
        </Container>
    );
}