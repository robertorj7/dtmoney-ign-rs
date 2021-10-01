import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleIsOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleIsClosedNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <div className="App">
      <Header onOpenNewTransactionModal={handleIsOpenNewTransactionModal}/>
      <Dashboard />

      <Modal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleIsClosedNewTransactionModal}
        >
          <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </div>
  );
}
