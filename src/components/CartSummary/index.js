// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let totalAmount = 0
      const lengthOfItems = cartList.length

      cartList.map(eachItem => {
        totalAmount += eachItem.price * eachItem.quantity
        return true
      })
      console.log(totalAmount)

      return (
        <div className="cart-summary-bg">
          <div className="cart-summary-container">
            <div className="order-container">
              <h1 className="amount-heading">
                <span className="order-heading">Order Total:</span>
                {` Rs ${totalAmount}/-`}
              </h1>
              <p className="order-length">{lengthOfItems} Items in Cart</p>
            </div>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
