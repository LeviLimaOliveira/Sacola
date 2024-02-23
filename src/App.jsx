import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const precoUnitario = 10.50;

  const [quantidade, setQuantidade] = useState(1);
  const [frete, setFrete] = useState(5.50);
  let [precoTotal, setprecoTotal] = useState(precoUnitario)
  const maisUm = () => {
    setQuantidade(quantidade + 1);
  };

  const menosUm = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  useEffect(() => {
    if(precoTotal > 50) {
      setFrete("frete gratis")
    }else{
      setFrete(precoTotal * 0.5)
    }
    setprecoTotal(quantidade * precoUnitario)
  },[quantidade]) 

  return (
    <div className="App">
      <div>
        <h1>Sacola</h1>
      </div>
      <div>
        <h2>Produtos</h2>
        <button onClick={menosUm}>-</button>
        <p>{quantidade}</p>
        <button onClick={maisUm}>+</button>
      </div>
      <div>
        <h3>Preço unitário: R$10,50</h3>
        <h2>Total: {precoTotal}</h2>
        <h3>Frete: {frete}</h3>
      </div>
    </div>
  );
};

export default App;


