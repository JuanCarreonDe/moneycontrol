import { useEffect, useState } from "react";
import { GetUserBalance, GetMonthTotals } from "../hooks/useApi";

const Balance = () => {
  const [totalAmount, setTotalAmount] = useState(null);
  const [monthTotals, setMonthTotals] = useState(null);

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
  };

  return (
    <>
      <div className="w-[80%] aspect-[5/3] bg-secondary rounded-3xl mb-7">
        <div>Balance actual ${totalAmount}</div>

        <div>{monthTotals?.totalIncome}</div>
        <div>{monthTotals?.totalExpense}</div>
      </div>
    </>
  );
};

export default Balance;
