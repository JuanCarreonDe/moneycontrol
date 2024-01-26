import { useEffect, useState } from "react";
import { GetTransactionsOfDay } from "../hooks/useApi";

const DayTransactions = () => {
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    // Función para obtener los totales de días al montar el componente
    const getTransactions = async (idUser) => {
      const data = await GetTransactionsOfDay(idUser);
      setTransactions(data);
    };

    // Llamada a la función al montar el componente
    getTransactions(1);
  }, []);

  return (
    <div className="bg-red-800">
      <p>DayTransactions</p>
      {transactions?.map((transaction, i) => (
        <div key={i} className="border-2">
          <p>{transaction.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default DayTransactions;
