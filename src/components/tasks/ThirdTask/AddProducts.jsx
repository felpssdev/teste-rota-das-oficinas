import PropTypes from "prop-types"
import { useEffect, useState } from "react";

function AddProducts({ customers, products, setProducts, setStage }) {
  const [isDisabled, setIsDisabled] = useState(true)

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    consumedBy: [],
  })

  useEffect(() => {
    if (newProduct.name.length > 0 && newProduct.consumedBy.length > 0 && newProduct.price > 0) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [newProduct])
  

  const handleChange = ({ target: { name, value } }) => {
    setNewProduct({
      ...newProduct,
      [name]: value,
    })
  }

  const addCustomer = (customer) => {
    const currentCustomers = newProduct.consumedBy;

    if (!currentCustomers.includes(customer)) {
      setNewProduct({
        ...newProduct,
        consumedBy: [
          ...newProduct.consumedBy,
          customer,
        ]
      })
    } else {
      setNewProduct({
        ...newProduct,
        consumedBy: currentCustomers.filter((cust) => cust !== customer),
      })
    }
  }

  const addProduct = () => {
    setProducts([
      ...products,
      newProduct,
    ])
    setNewProduct({
      name: '',
      price: 0,
      consumedBy: [],
    })
  }

  return (
    <div
        className="flex-col space-y-3 text-base mb-3 mt-4 border-2 p-2 m-3 rounded-xl bg-slate-100/20 h-60"
      >
      <div>
        <label
          className="font-semibold ml-2 text-xs"
          htmlFor="product-input"
        >
          Produto:
        </label>
        <input
          name="name"
          value={ newProduct.name }
          onChange={ e => handleChange(e) }
          className="border border-gray-500 rounded h-5 w-24 py-2 px-3 ml-2 text-gray-700 text-base"
          type="text"
          id="product-input"
        />
      </div>
      <div>
        <label
          className="font-semibold ml-2 text-xs"
          htmlFor="product-input"
        >
          Preço:
        </label>
        <input
          name="price"
          value={ newProduct.price }
          onChange={ e => handleChange(e) }
          className="border border-gray-500 rounded h-5 w-24 py-2 px-3 ml-6 text-gray-700 text-base"
          type="number"
          id="product-input"
        />
      </div>
      <div
        className="flex-col text-base border-2 p-1 rounded-xl bg-slate-100/20"
      >
        <fieldset
          className="font-semibold ml-2 text-xs"
        >
          Quem consumiu?
        </fieldset>
        {customers.length > 0
          ? customers.map(({ name }, id) => 
          <label
            htmlFor={`customer-${name}`}
            className="text-xs"
            key={id}
          >
            {name}
            <input
              checked={newProduct.consumedBy.some((consumer) => consumer === name )}
              onChange={ () => addCustomer(name) }
              className="h-2"
              id={`customer-${name}`}
              type="checkbox"
              value={ name }
            />
          </label>
          ) 
          : null}
      </div>
      <button
        onClick={ addProduct }
        disabled={ isDisabled }
        className=" bg-green-600 p-2 rounded-xl font-semibold text-xs disabled:bg-red-500"
      >
        CADASTRAR PRODUTO
      </button>
      <button
        onClick={ () => setStage(3) }
        disabled={ !products.length > 0 } 
        className=" bg-green-600 p-2 rounded-xl font-semibold text-xs disabled:bg-red-500"
      >
        GERAR CONTA
      </button>
    </div>
  )
}

AddProducts.propTypes = ({
  customers: PropTypes.array,
  products: PropTypes.array,
  setProducts: PropTypes.func,
}).isRequired;

export default AddProducts;
