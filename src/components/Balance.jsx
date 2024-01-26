import { useEffect, useState } from "react";
import { GetUserBalance, GetMonthTotals } from "../hooks/useApi";

const Balance = () => {
  const [totalAmount, setTotalAmount] = useState(null);
  const [monthTotals, setMonthTotals] = useState(null);
  const [incomePercentage, setIncomePercentage] = useState(null);

  useEffect(() => {
    getUserBalance(1);
    getMonthTotals(1);
    console.log(monthTotals);
  }, []);

  const getUserBalance = async (idUser) => {
    const { totalAmount } = await GetUserBalance(idUser);
    setTotalAmount(totalAmount);
  };

  const getMonthTotals = async (idUser) => {
    const data = await GetMonthTotals(idUser);
    setMonthTotals(data);
    const { totalIncome, totalExpense } = data;
    setIncomePercentage(calculateGraphic(totalIncome, totalExpense));
  };

  const calculateGraphic = (totalIncome, totalExpense) => {
    const total = totalExpense + totalIncome;
    const incomePercentage = (totalIncome * 100) / total;
    return incomePercentage;
  };

  return (
    <>
      <div className="w-[80%] p-5 rounded-3xl mb-7 flex flex-col items-center justify-center">
        <div className="text-[40px] font-light">${totalAmount}</div>
        <div className="flex flex-col w-[70%]  text-sm text-gray-500 items-center">
          <div className="flex w-full justify-between">
            <div>+${monthTotals?.totalIncome}</div>
            <div>-${monthTotals?.totalExpense}</div>
          </div>
          <div className="w-full h-2 rounded-md bg-gray-600 flex">
            <div
              className={`w-[${incomePercentage}%] w-[62.5465%] h-2 rounded-md bg-green-500`}
            ></div>
          </div>
          <a href="#" className="underline mt-2 text-slate-300">Ver cuentas</a>
        </div>
      </div>
    </>
  );
};

export default Balance;
