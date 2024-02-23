import "./App.css";
import { useState } from "react";

const App = () => {
  const precoUnitario = 10.50;

  const [quantidade, setQuantidade] = useState(1);
  const [frete, setFrete] = useState(5.50);

  const calcularTotal = () => precoUnitario * quantidade;

  const maisUm = () => {
    setQuantidade(quantidade + 1);
  };

  const menosUm = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const atualizarFrete = () => {
    const total = calcularTotal();
    if (total >= 50) {
      setFrete("Frete grátis!");
    } else {
      setFrete(5.50);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Sacola</h1>
      </div>
      <div>
        <h2>Produtos</h2>
        <button onClick={() => { menosUm(); atualizarFrete(); }}>-</button>
        <p>{quantidade}</p>
        <button onClick={() => { maisUm(); atualizarFrete(); }}>+</button>
      </div>
      <div>
        <h3>Preço unitário: R$10,50</h3>
        <h2>Total: {calcularTotal()}</h2>
        <h3>Frete: {frete}</h3>
      </div>
    </div>
  );
};

export default App;


