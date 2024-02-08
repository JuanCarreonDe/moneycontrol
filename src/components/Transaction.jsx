/* eslint-disable react/prop-types */
import { useEffect,useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { GetTransactionsOfDay } from "../hooks/useApi";

// eslint-disable-next-line react/prop-types
const Transaction = ({ day }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    // Función para obtener los totales de días al montar el componente
    const getTransactions = async (idUser) => {
      const data = await GetTransactionsOfDay(idUser);
      setTransactions(data);
    };

    // Llamada a la función al montar el componente
    getTransactions(1);
    console.log(transactions?.amount);
  }, []);

  return (
    <div className="collapse my-4 bg-[#1D1B20]">
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
          <div className="flex flex-col h-fit">
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
        <div className="pt-4 border-t-2 border-gray">
          <div className="flex pr-4">
            <div className="w-fit mr-4">
              <figure className="w-[40px] h-[40px] rounded-full bg-gray flex justify-center items-center">
                <span>A</span>
              </figure>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex items-center">
                <span>Categoria</span>
                <TbPointFilled className="mx-1" />
                <span>Descripción</span>
              </div>
              <div className="flex items-center justify-between w-full pr-4">
                <span className="text-gray">Efectivo</span>
                <span className="text-green">+$534</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mapear */}
    </div>
  );
};

export default Transaction;
