import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Balance from "./components/Balance";
import MonthPicker from "./components/MonthPicker";
import NavTop from "./components/NavTop";
import Transactions from "./components/Transactions";
import Line from "./components/Line";
import DayTransactions from './components/DayTransactions';

function App({children}) {
  return (
    <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
      <div
        className="bg-primary text-[#E6E0E9]
                    min-h-screen w-full
                    flex flex-col items-center"
      >
        <NavTop />
        <MonthPicker />
        <Balance />
        <Line/>
        <Transactions />
        <DayTransactions/>
      </div>
    </LocalizationProvider>

    </>
  );
}

export default App;
