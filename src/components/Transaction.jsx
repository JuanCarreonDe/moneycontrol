import { useEffect, useState } from "react";
import { GetTransactionsOfDay } from "../hooks/useApi";
import { TbPointFilled } from "react-icons/tb";

const Transaction = ({date}) => {
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    // Función para obtener los totales de días al montar el componente
    const getTransactionsOfDay = async (date) => {
      const data = await GetTransactionsOfDay(date, 1);
      setTransactions(data);
    };

    // Llamada a la función al montar el componente
    getTransactionsOfDay(date);
    const palabra = "ejemplo";
    console.log(palabra.charAt(0));
  }, []);


  const getInitialOfCategory = (word) =>{
    const initial = word.charAt(0)
    return initial
  }

  return (
    <div className="w-80% border-t-2 border-gray">
      {transactions?.map((transaction, i) => (
        <div key={i} className="flex pr-4 py-4 border-b-2 border-neutral-800">
          <div className="w-fit mr-4">
            <figure className="w-[40px] h-[40px] rounded-full bg-gray flex justify-center items-center">
              <span>{getInitialOfCategory(transaction.category)}</span>
            </figure>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center">
              <span>{transaction.category}</span>
              <TbPointFilled className="mx-1" />
              <span className="">{transaction.description}</span>
            </div>
            <div className="flex items-center justify-between w-full pr-4">
              <span className="text-gray">{transaction.account}</span>

              <span className={transaction.isIncome === 1 ? "text-green" : "text-gray"}>
              {`${transaction.isIncome === 1 ? "+$" : "-$"}${transaction.amount}`}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transaction;
