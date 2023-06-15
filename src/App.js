import { useState } from 'react';
import './App.css';

function App() {
  const [adress, setAdress] = useState({});

  const adressManipulation = (event) => {
    const cep = event.target.value ;

    setAdress({ 
      cep
    });

    if (cep && cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
          setAdress(oldAdress => ({
            ...oldAdress,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf
          }));
        });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder='Digite o CEP' onChange={adressManipulation}/>
        <ul>
          <li>CEP: {adress.cep}</li>
          <li>Rua: {adress.rua}</li>
          <li>Bairro: {adress.bairro}</li>
          <li>Cidade: {adress.cidade}</li>
          <li>Estado: {adress.estado}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
