import {
  Alert,
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
} from "@mui/material"
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

  // saving form details in local state
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // save details in localStorage
    localStorage.setItem("formValues", JSON.stringify(formValues))
    // check if localStorage has value
    if (localStorage.getItem("formValues")) {
      navigate("/")
    } else {
      setShowMsg(true)
    }
  }

  useEffect(() => {
    // Check if the user was redirected from a protected route.
    if (location.state && location.state.fromProtectedRoute) {
      // Check if the user has previously visited the login page.
      if (sessionStorage.getItem("hasVisitedLoginPage")) {
        setShowMsg(true)
      } else {
        // Save that they have not visited the login page.
        sessionStorage.setItem("hasVisitedLoginPage", "true")
      }
      // Clear the location state.
      navigate(location.pathname, { replace: true, state: {} })
    }
  }, [location])

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
      {showMsg ? (
        <Alert severity="warning">
          Enter all details before accessing the page
        </Alert>
      ) : null}

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
          type="number"
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
