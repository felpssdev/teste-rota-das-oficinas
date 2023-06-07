import { useState } from "react";
import AddClients from "./AddClients";
import AddProducts from "./AddProducts";
import Bill from "./Bill";

function ThirdTask() {
  const [stage, setStage] = useState(1);
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

  return (
    <div
      className="border-4 p-4 rounded-xl h-80 w-80 flex-col text-center bg-slate-800"
    >
      <h2
        className=" font-bold text-sm"
      >
        DIVISOR DE CONTA DE RESTAURANTE
      </h2>
      {stage === 1 && <AddClients setStage={ setStage } customers={ customers } setCustomers={ setCustomers } />}
      {stage === 2 && <AddProducts setStage={ setStage } customers={ customers } products={ products } setProducts={ setProducts } />}
      {stage === 3 && <Bill products={ products } customers={ customers } />}
    </div>
  )
}

export default ThirdTask;
