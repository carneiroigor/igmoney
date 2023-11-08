import logoImg from "../../assets/logo.svg";
import { Content, Container } from './styles';
export function Header() {

    return(
        <Container>
            <Content>
            <img src={logoImg} alt="ig-money" />
            <button type="button">
                Nova Transação
            </button>
            </Content>
        </Container>
    )
}