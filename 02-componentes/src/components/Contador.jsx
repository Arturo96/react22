import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);

  const decrementar = () => setContador(contador - 1);

  return (
    <>
      <h3>{contador}</h3>
      <div>
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
      </div>
    </>
  );
};

export default Contador;
