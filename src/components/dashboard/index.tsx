import { TransactionsTable } from '../TransactionsTable';
import { Summary } from '../summary';
import { Container } from './styles';

export function Dashboard() {

    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    );
}