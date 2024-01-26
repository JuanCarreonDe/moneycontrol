const MonthPicker = () => {
  return (
    <div className="w-fit bg-secondary p-3 text-sm mb-3 rounded-full">
      <input
        type="month"
        // id="start"
        // name="start"
        min="2018-03"
        // value="2018-05"
        className="bg-transparent"
      />
    </div>
  );
};

export default MonthPicker;
