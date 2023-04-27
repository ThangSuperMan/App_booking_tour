import React from "react"

const Payment: React.FC = () => {
  return (
    <div className="payment">
      <h1>PayPal Payment</h1>
      <form>
        <label>Name on Card:</label>
        <input type="text" id="name" name="name" required />

        <label>Card Number:</label>
        <input type="text" id="card-number" name="card-number" required />

        <label>Expiry Date:</label>
        <input
          type="text"
          id="expiry-date"
          name="expiry-date"
          placeholder="MM/YY"
          required
        />

        <label>CVV:</label>
        <input type="text" id="cvv" name="cvv" required />

        <button type="submit">Pay Now</button>
      </form>
    </div>
  )
}

export default Payment
