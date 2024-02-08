import { useEffect, useState } from "react";
// import AddTransaction from "./AddTransaction";
import Transaction from "./Transaction";

import { GetDaysTotals } from "../hooks/useApi";

const Transactions = () => {
  const [days, setDays] = useState(null);

  useEffect(() => {
    // Función para obtener los totales de días al montar el componente
    const getDaysTotals = async (idUser) => {
      const data = await GetDaysTotals(idUser);
      setDays(data);
    };

    // Llamada a la función al montar el componente
    getDaysTotals(1);
    console.log(days);
  }, []); // Array vacío como segundo argumento para que se ejecute solo al montar el componente

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-[40px] mr-3">Transacciones</h2>
        <div className="w-full h-[1px] bg-gray-600"></div>
      </div>
      {days?.map((day, i) => (
        <Transaction key={i} day={day} />
      ))}
    </div>
  );
};

export default Transactions;
