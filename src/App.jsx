import Balance from "./components/Balance";
import MonthPicker from "./components/MonthPicker";
import NavTop from "./components/NavTop";
import Transactions from "./components/Transactions";
import Line from "./components/Line";
import DayTransactions from "./components/DayTransactions";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <>
      <div
        className="bg-primary text-[#E6E0E9]
                    min-h-screen w-full
                    flex flex-col items-center
                    "
      >
        <div
          className="w-[90%]
                    flex flex-col items-center py-[10%]
                    border-2 min-h-screen"
        >
          {/* <NavTop /> */}
          <MonthPicker />
          <Balance />
          {/* <Line /> */}
          <Transactions />
          <DayTransactions />
          <AddTransaction/>
        </div>
      </div>
    </>
  );
}

export default App;
