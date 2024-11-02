import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { Link } from 'react-router-dom';
import './panier.css';
import {  useStripe} from '@stripe/react-stripe-js';

function Cart ()  {
  const { cartDetails, removeItem, clearCart, totalPrice, cartCount, incrementItem, decrementItem } = useShoppingCart();
  const stripe = useStripe();

  const handleCheckout = async (event) => {
    event.preventDefault()
 

    if (!stripe) {
      console.error('Stripe has not loaded yet')
      return
    }

    try {
      const items = Object.values(cartDetails).map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
            images: item.image ? [item.image] : [],
          },
          unit_amount: Math.round(item.price),
        },
        quantity: item.quantity,
      }))

      console.log('Sending to checkout:', items)

       // const response = await fetch('http://localhost:8000/api/payment/processpayment', {
        const response = await fetch('https://projet-laravel2024.vercel.app/api/api/payment/processpayment', {
       method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          line_items: items,
          success_url: `${window.location.origin}/success`,
          cancel_url: `${window.location.origin}/cart`
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Network response was not ok')
      }

      const data = await response.json()
      console.log('Response from server:', data)

      if (data.id) {
        const result = await stripe.redirectToCheckout({
          sessionId: data.id
        })

        if (result.error) {
          console.error('Stripe redirect error:', result.error)
          throw new Error(result.error.message)
        }
      } else {
        throw new Error('No session ID received from server')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Payment failed: ' + error.message)
    }
  }

  return (
    <div className="cart-container">
 
      <h2>Shopping Cart</h2>
      {cartCount === 0 ? (
        <div className="cart-empty">
          <p>Panier Vide</p>
          <div className="start-shopping">
            <Link to="/articlescard">
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cartDetails && Object.values(cartDetails).map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={`${cartItem.image}`} alt={cartItem.title} />
                  <div>
                    <h3>{cartItem.title}</h3>
                    <button onClick={() => removeItem(cartItem.id)}>
                      <i className="fa-solid fa-trash-can" style={{ fontSize: "14px", color: "red" }}></i>
                    </button>
                  </div>
                </div>
                <div className="cart-product-price"> {cartItem.price} TND</div>
                <div className="cart-product-quantity">
                  <button className="button-actions" onClick={() => decrementItem(cartItem.id)}>
                    -
                  </button>
                  <div className="count">{cartItem.quantity}</div>
                  <button className="button-actions" onClick={() => incrementItem(cartItem.id)}>
                    +
                  </button>
                </div>
                <div className="cart-product-total-price">
                  {cartItem.quantity * cartItem.price} TND
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => clearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">{totalPrice} TND</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button onClick={handleCheckout} > Ckeck Out
              </button>
              <div className="continue-shopping">
                <Link to="/articlescard">
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Cart;
