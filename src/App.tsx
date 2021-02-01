/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import Button from './components/Button/Button';
import IconCar from './assets/icons/carrinho-retirada.png';

function App() {
  return (
    <>
      <Button
        background="#d4db26"
        color="#004b35"
        iconEnd={<img src={IconCar} alt="Carrinho Retirada" style={{ marginLeft: '8px' }} />}
      >
        Botão
      </Button>
    </>
  );
}

export default App;
