import { Box, Button, FormControl, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function LogIn() {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  })
  const [showMsg, setShowMsg] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    localStorage.setItem("formValues", JSON.stringify(formValues))
    if (localStorage.getItem("formValues")) {
      navigate("/")
    } else {
      console.log("You must fill all details")
    }
  }

  useEffect(() => {
    // check if user try to visit Home page
    if (location.state && location.state.fromProtectedRoute) {
      setShowMsg(true)
      // clear location state
      navigate(location.pathname, { replace: true, state: {} })
    }
  }, [location])

  if (showMsg) console.log("dont do it")

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Typography variant="h3">Log In</Typography>
      <FormControl>
        <TextField
          required
          value={formValues.name}
          onChange={handleInputChange}
          id="name"
          label="Name"
          type="name"
          name="name"
        />
        <TextField
          required
          value={formValues.phone}
          onChange={handleInputChange}
          id="phone"
          label="Phone Number"
          type="phone"
          name="phone"
        />
        <TextField
          required
          value={formValues.email}
          onChange={handleInputChange}
          id="email"
          label="Email"
          type="email"
          name="email"
        />
        <Button sx={{ m: 1, p: 1.5 }} variant="contained" type="submit">
          Login
        </Button>
      </FormControl>
    </Box>
  )
}
