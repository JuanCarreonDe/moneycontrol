import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa6";
const AddTransaction = () => {
  const { register, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* The button to open modal */}
      <button
        htmlFor="my_modal_7"
        className="flex justify-center items-center rounded-2xl w-16 h-16 bg-[#1A1D1A] fixed bottom-[10%] right-[10%] focus-visible:outline-none z-10 hover:rounded-[50%] transition-all duration-300 shadow-xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaPlus className="text-green-500" />
      </button>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="my_modal_7"
        className="modal-toggle"
        checked={isOpen}
        onChange={()=>{}}
      />
      <div className="modal" role="dialog">
        <div className="modal-box w-[90%] flex flex-col items-center gap-4">
          <h3 className="font-semibold text-2xl">Transacción</h3>
          <form
            className="flex flex-col items-center w-[90%] gap-4 justify-center"
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <div className="w-full flex justify-center">
              <input
                type="number"
                placeholder="Monto"
                {...register("amount")}
                className="input input-bordered w-full max-w-xs focus-visible:outline-none"
              />
            </div>
            <div className="w-full flex justify-center">
              <input
                type="text"
                placeholder="Descripción"
                {...register("description")}
                className="input input-bordered w-full max-w-xs focus-visible:outline-none"
              />
            </div>
            <div className="w-full flex justify-center">
              <select
                type="text"
                placeholder="category"
                {...register("category")}
                // className="input input-bordered w-full max-w-xs focus-visible:outline-none"
                className="select select-bordered w-full max-w-xs"
              >
                <option value="1">Alimentos</option>
                <option value="2">Facturas</option>
                <option value="3">Transporte</option>
                <option value="4">Compras</option>
                <option value="5">Regalos</option>
                <option value="6">Educación</option>
              </select>
            </div>
            <div className="w-full flex justify-center">
              <select
                type="text"
                placeholder="Account"
                {...register("account")}
                // className="input input-bordered w-full max-w-xs focus-visible:outline-none"
                className="select select-bordered w-full max-w-xs"
              >
                <option value="1">Biletera</option>
                <option value="2">Cuenta bancaria</option>
              </select>
            </div>
            <div className="w-full flex justify-center">
              <select
                type="text"
                placeholder="IsIncome"
                {...register("isIncome")}
                // className="input input-bordered w-full max-w-xs focus-visible:outline-none"
                className="select select-bordered w-full max-w-xs"
              >
                <option value="0">Gasto</option>
                <option value="1">Ingreso</option>
              </select>
            </div>
            <div className="w-full flex justify-center">
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs focus-visible:outline-none"
              />
            </div>
            <div className="w-[80%] flex justify-end">
              {/* <button htmlFor="my_modal_7" className="p-2 px-3 rounded-badge text-txtColor bg-transparent mr-4">
                Cancelar
              </button> */}
              <button
                className="p-2 px-3 rounded-badge text-txtColor bg-transparent mr-4 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="p-2 px-3 rounded-badge bg-green text-txtColor"
                onClick={() => setIsOpen(false)}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>

        <label
          className="modal-backdrop"
          htmlFor="my_modal_7"
          onClick={() => setIsOpen(!isOpen)}
        >
          Close
        </label>
      </div>
    </>
  );
};

export default AddTransaction;
