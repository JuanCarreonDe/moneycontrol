import Balance from "./components/Balance";
import Month from "./components/Month";
// import NavTop from "./components/NavTop";
import Transactions from "./components/Transactions";
// import Line from "./components/Line";
// import DayTransactions from "./components/DayTransactions";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <>
      <div
        className="min-h-screen w-full flex flex-col items-center justify-center">
        <div
          className="w-[90vw] flex flex-col items-center h-[90vh] border-2">
          {/* <NavTop /> */}
          <Month />
          <Balance />
          {/* <Line /> */}
          <Transactions />
          {/* <DayTransactions /> */}
          <AddTransaction/>
        </div>
      </div>
    </>
  );
}

export default App;
