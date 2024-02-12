import { useEffect, useState } from "react";
// import AddTransaction from "./AddTransaction";
import { GetDaysTotals } from "../hooks/useApi";
import DayTransactions from "./DayTransactions";

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
    <div className="w-[90vw] border-2 border-green">
      <div className="flex items-center justify-between">
        <h2 className="text-[40px] mr-3">Transacciones</h2>
        <div className="w-full h-[1px] bg-black"></div>
      </div>
      {days?.map((day, i) => (
        <DayTransactions key={i} day={day} />
      ))}
    </div>
  );
};

export default Transactions;
