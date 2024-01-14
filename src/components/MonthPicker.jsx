import { StaticDatePicker } from "@mui/x-date-pickers";

const MonthPicker = () => {
  return (
    <div className="w-fit bg-secondary p-3 text-sm mb-3 rounded-full">
      {/* <StaticDatePicker
        sx={{
          ".MuiMonthCalendar-root": {
            color: "#bbdefb",
            borderRadius: 3,
            borderWidth: 0,
            borderColor: "#2196f3",
            border: "0px solid",
            backgroundColor: "#0d47a1",
          },
        }}
        label={'"month" and "year"'}
        views={["month", "year"]}
      /> */}
      <input
        type="month"
        id="start"
        name="start"
        min="2018-03"
        value="2018-05"
        className="bg-transparent"
      />
    </div>
  );
};

export default MonthPicker;
