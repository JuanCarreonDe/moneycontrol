import { useState } from "react";
import { MonthPicker, MonthInput } from "react-lite-month-picker";

const Month = () => {
  const [selectedMonthData, setSelectedMonthData] = useState({
    month: 9,
    year: 2023,
  });
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  return (
    // <input
    //   type="month"
    //   placeholder="Type here"
    //   className="input w-fit max-w-xs"
    // />

    <div>
      <MonthInput
        selected={selectedMonthData}
        setShowMonthPicker={setIsPickerOpen}
        showMonthPicker={isPickerOpen}
        size={"small"}
        bgColor={"#1D1B20"}
      />
      {isPickerOpen ? (
        <MonthPicker
          setIsOpen={setIsPickerOpen}
          selected={selectedMonthData}
          onChange={setSelectedMonthData}
          size={"small"}
          bgColor={"#1D1B20"}

        />
      ) : null}
    </div>
  );
};

export default Month;
