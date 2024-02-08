import { FaPlus } from "react-icons/fa6";
const AddTransaction = () => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="flex justify-center items-center rounded-2xl w-16 h-16 bg-[#1A1D1A] fixed bottom-[10%] right-[10%] focus-visible:outline-none z-10 hover:rounded-[50%] transition-all duration-300 shadow-md"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <FaPlus className="text-green-500" />
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box w-[90%] flex flex-col items-center">
          <h3 className="font-bold text-red-600 text-lg">Gasto</h3>
          <form className="flex flex-col items-center border-2 w-[90%]">
            <div className="w-full">
              <input
                type="text"
                placeholder="amount"
                className="input w-full max-w-xs focus-visible:outline-none"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="description"
                className="input w-full max-w-xs focus-visible:outline-none"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="category"
                className="input w-full max-w-xs focus-visible:outline-none"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Account"
                className="input w-full max-w-xs focus-visible:outline-none"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="IsIncome"
                className="input w-full max-w-xs focus-visible:outline-none"
              />
            </div>
            <div className="w-full">
              <input
                type="date"
                placeholder="Type here"
                className="input w-full max-w-xs focus-visible:outline-none"
              />
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default AddTransaction;
