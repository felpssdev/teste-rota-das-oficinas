import PropTypes from "prop-types"
import { useState } from 'react'

function AddClients({ customers, setCustomers, setStage }) {
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    tax: false,
  });

  const addCustomer = () => {
    setCustomers([
      ...customers,
      newCustomer,
    ])
    setNewCustomer({
      name: '',
      tax: false,
    })
  };

  return (
    <div
        className="flex-col space-y-3 text-base mb-3 mt-4 border-2 p-2 m-3 rounded-xl bg-slate-100/20 h-52"
      >
        <div>
          <label
            className="font-semibold ml-2"
            htmlFor="product-input"
          >
            Cliente:
          </label>
          <input
            className="border border-gray-500 rounded h-8 w-24 py-2 px-3 ml-2 text-gray-700 text-base"
            type="text"
            id="product-input"
            value={ newCustomer.name }
            onChange={ e => setNewCustomer({ ...newCustomer, name: e.target.value }) }
          />
        </div>
        <div>
          <label
            htmlFor="tax-input"
            className="text-xs"
          >
            Taxa de Serviço?
          </label>
          <input
            className="ml-2 h-4"
            onChange={ () => setNewCustomer({ ...newCustomer, tax: newCustomer.tax ? false : true })}
            type="checkbox"
            checked={ newCustomer.tax }
          />
        </div>
        <div
         className="flex-col space-x-3 w-40 h-26 m-auto"
        >
          <button
            disabled={ !newCustomer.name.length > 0 }
            className="bg-green-600 p-2 rounded-xl font-semibold disabled:bg-red-500"
            type="button"
            onClick={ addCustomer }
          >
            CADASTRAR CLIENTE
          </button>
        </div>
        <div>
          <button
            onClick={() => setStage(2)}
            disabled={ !customers.length > 0 }
            className="bg-green-600 p-1 rounded-xl font-semibold text-xs disabled:bg-red-500"
          >
            Cadastrar produtos
          </button>
        </div>
    </div>
  )
}

AddClients.propTypes = {
  customers: PropTypes.any,
  setCustomers: PropTypes.func,
  setStage: PropTypes.func,
}

export default AddClients;
