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
    <div className="border-2 border-red-700 w-full">
      <h2>Transacciones</h2>
       {days?.map((day, i) =>(
          <div key={i} className="border-2 border-red-100 rounded-xl">
            <li className="list-none">Dia: {day.day}</li>
            <li className="list-none">+${day.totalIncome}</li>
            <li className="list-none">-${day.totalExpense}</li>
          </div>
        ))}
    </div>
  );
};

export default Transactions;
