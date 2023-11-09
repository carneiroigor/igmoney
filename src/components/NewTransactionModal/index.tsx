import Modal from "react-modal";
import closeImg from "../../assets/fechar.svg";
import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saídas.svg";
import { Container, TransactionTypeContainer, RadioBox} from "./styles";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModal) {
    const [tittle, setTittle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
        const data = {
            tittle,
            value,
            category,
            type,
        };
        api.post('/transactions', data)
    }
    return (
        <Modal 
        isOpen= {isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
        <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
        >
            <img src={closeImg} alt="Fechar" />
        </button> 
        <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
        type="text"
        value={tittle}
        onChange={event => setTittle(event.target.value)}
        placeholder="Título"
        />

        <input 
        type="number"
        value={value}
        onChange={event => setValue(Number(event.target.value))}
        placeholder="Valor"
        />

        <TransactionTypeContainer>
            <RadioBox
                type="button"
                onClick={() => { setType('deposit'); }}
                $isActive = {type == 'deposit'}
                $activeColor= "green"
            >
                <img src={incomeImg} alt="entrada" />
                <span>Entrada</span>
            </RadioBox>

            <RadioBox
                type="button"
                onClick={() => { setType('withdraw'); }}
                $isActive = {type == 'withdraw'}
                $activeColor= "red"
            >
                <img src={outcomeImg} alt="saída" />
                <span>Saída</span>
            </RadioBox>
        </TransactionTypeContainer>

        <input
        type="text"
        value={category}
        onChange={event => setCategory(event.target.value)}
        placeholder="Categoria"
        />

        <button type="submit">
            CADASTRAR
        </button>
        </Container>
        </Modal>
    );
}