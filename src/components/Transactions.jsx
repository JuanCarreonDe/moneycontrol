import { useEffect, useState } from "react";
// import AddTransaction from "./AddTransaction";

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
  }, []); // Array vacío como segundo argumento para que se ejecute solo al montar el componente

  return (
    <div className="border-2 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-[40px] mr-3">Transacciones</h2>
        <div className="w-full h-[1px] bg-gray-600"></div>
      </div>
      {days?.map((day, i) => (
        <div key={i} className="collapse bg-base-200 my-4">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Click me to show/hide content
          </div>
          <div className="collapse-content">
            <li className="list-none">Dia: {day.day}</li>
            <li className="list-none">+${day.totalIncome}</li>
            <li className="list-none">-${day.totalExpense}</li>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
