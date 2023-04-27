import React, { useState } from "react"
import { Box, Grid, Typography, Button, TextField } from "@mui/material"

const Payment: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("") // const stripe = useStripe()

  const handleSubmit = async (event: any) => {
    event.preventDefault()
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Trang thanh toán
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          sx={{ mt: 3 }}
          required
          id="cardNumber"
          label="Card Number"
          fullWidth
          autoComplete="cc-number"
        />
        <TextField
          sx={{ mt: 3 }}
          required
          id="expDate"
          label="Expiration Date"
          fullWidth
          autoComplete="cc-exp"
        />
        <TextField
          sx={{ mt: 3 }}
          required
          id="cvv"
          label="CVV"
          fullWidth
          autoComplete="cc-csc"
        />
        <TextField
          sx={{ mt: 3 }}
          required
          id="name"
          label="Name on Card"
          fullWidth
          autoComplete="cc-name"
        />
        <Box sx={{ mt: 3 }}>
          <Button type="submit" variant="contained" color="primary">
            Thanh toán ngay
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Payment
