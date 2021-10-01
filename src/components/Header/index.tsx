import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';
import Modal from 'react-modal';

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleIsOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleIsClosedNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />      
        <button 
          type="button" 
          onClick={handleIsOpenNewTransactionModal}
        >
          Nova transação
        </button>

        <Modal isOpen={isNewTransactionModalOpen}>
          <h2>Cadastrar transação</h2>
        </Modal>
      </Content>
    </Container>
  )
}