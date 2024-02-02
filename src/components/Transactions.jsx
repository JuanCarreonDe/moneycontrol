import { IoIosArrowDown } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
// import AddTransaction from "./AddTransaction";

import { GetDaysTotals } from "../hooks/useApi";

const Transactions = () => {
  const [days, setDays] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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
        <div key={i} className="collapse my-4 bg-[#1D1B20]">
          <input type="checkbox" />
          {/* header */}
          <div className="collapse-title flex items-center justify-between px-[10%]">
            <div className="h-fit flex items-center">
              <span className="text-[35px] mr-4 font-semibold">{day.day}</span>
              <div className="flex flex-col h-fit">
                <span className="list-none">Lunes</span>
                <span className="list-none">Enero</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col h-fit">
                <span className="list-none text-[#4CAF50]">
                  +${day.totalIncome}
                </span>
                <span className="list-none text-[#4D4B51]">
                  -${day.totalExpense}
                </span>
              </div>
              <IoIosArrowDown className="ml-4" />
            </div>
          </div>
          {/* Content */}
          <div className="collapse-content border-t-2 px-[10%]">
            <div className="pt-4">
              <div className="border-2 flex border-red-400 pr-4">
                <div className="border-2 w-fit">
                  <figure className="w-[40px] h-[40px] rounded-full bg-[#4D4B51] flex justify-center items-center">
                    <span>A</span>
                  </figure>
                </div>
                <div className="flex flex-col w-full">
                  <div className="border-2 flex items-center">
                    <span>Categoria</span>
                    <TbPointFilled />
                    <span>Descripción</span>
                  </div>
                  <div className="border-2 flex items-center justify-between w-full pr-">
                    <span>Efectivo</span>
                    <span className="text-[#4CAF50]">+$534</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
