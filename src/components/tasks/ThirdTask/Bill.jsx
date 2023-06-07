import PropTypes from "prop-types"
import { useEffect, useState } from "react";

const Bill = ({ products, customers }) => {
  const [bill, setBill] = useState([])

  useEffect(() => {
    const billArray = []
    customers.forEach(({name, tax}) => {
      const productsByCustomer = products.filter(({consumedBy}) => consumedBy.includes(name))
      let expenseByCustomer = 0
      productsByCustomer.forEach(({price, consumedBy}) => {
        expenseByCustomer += price/consumedBy.length
      })

      if (tax) {
        expenseByCustomer = expenseByCustomer + (expenseByCustomer * 0.1)
      }
      
      billArray.push({
        name,
        expense: expenseByCustomer.toFixed(2)
      })
    })
    setBill(billArray)
  }, [])

  return (
    <div>
      <h2>CONTA</h2>
      <ul>
        {bill.map(({ name, expense }) => (
          <li key={ name }><strong>{name}</strong>{`: R$ ${expense}`}</li>
        ))}
      </ul>
    </div>
  )
}

Bill.propTypes = ({
  customers: PropTypes.array,
  products: PropTypes.array,
}).isRequired;

export default Bill;
