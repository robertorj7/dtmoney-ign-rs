import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

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
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleIsClosedNewTransactionModal}/>
      <GlobalStyle />
    </div>
  );
}
