const AddTransaction = () => {
  return (
    <div className="w-screen h-screen absolute top-0 right-0 opacity-[.7] bg-black flex justify-center items-center">
        <div className="w-[80%] h-[80%] border-2 border-red-700 rounded-xl p-3 flex items-center flex-col">
            <h1 className="text-white text-3xl mb-6">Agregar transaccion</h1>
            <div className="border-2 border-white w-full h-full rounded-xl flex flex-col items-center justify-around">
                <input type="text" placeholder="Monto"/>
                <select name="fuente">
                    <option value="0">--Seleccione la fuente--</option>
                    <option value="4">Billetera</option>
                    <option value="5">Cuenta banco</option>
                </select>
                <select name="categoria">
                    <option value="0">--Seleccione la categoria--</option>
                    <option value="2">Food</option>
                    <option value="3">Bills</option>
                    <option value="4">Transport</option>
                    <option value="5">Shopping</option>
                    <option value="6">Gifts</option>
                    <option value="7">Education</option>
                    <option value="8">Cravings</option>
                </select>
                <textarea name="description" placeholder="descripcion"></textarea>
                <input type="date" />
                <button className="border-2 border-yellow-500 p-3 rounded-xl text-white">Enviar</button>
            </div>
        </div>
    </div>
  )
}

export default AddTransaction