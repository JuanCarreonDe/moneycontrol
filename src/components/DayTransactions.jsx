/* eslint-disable react/prop-types */
import { useEffect,useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { GetTransactionsOfDay } from "../hooks/useApi";
import Transaction from "./Transaction"

// eslint-disable-next-line react/prop-types
const DayTransactions = ({ day }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    // Función para obtener los totales de días al montar el componente
    // const getTransactionsOfDay = async (idUser) => {
    //   const data = await GetTransactionsOfDay(idUser);
    //   setTransactions(data);
    // };

    // // Llamada a la función al montar el componente
    // getTransactionsOfDay(1);
    console.log(day.fullDate);
  }, []);

  return (
    <div className="collapse my-4 bg-cardBg w-full">
      <input type="checkbox" onClick={() => setIsOpen(!isOpen)} />
      {/* header */}
      <div className="collapse-title flex items-center justify-between px-[10%]">
        <div className="h-fit flex items-center">
          <span className="text-[35px] mr-4 font-semibold">{day.day}</span>
          <div className="flex flex-col h-fit">
            <span className="list-none">Lunes</span>
            <span className="list-none text-gray">Enero</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col h-fit text-right">
            <span className="list-none text-green">
              +${day.totalIncome}
            </span>
            <span className="list-none text-gray">-${day.totalExpense}</span>
          </div>
          <IoIosArrowDown className={`ml-4 ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </div>
      {/* Content  --MAPEAR POR CADA TRANSACCIÓN*/}
      <div className="collapse-content px-[10%]">
        <Transaction date={day.fullDate}/>
      </div>
      {/* Mapear */}
    </div>
  );
};

export default DayTransactions;
