import { Navigate, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import LogIn from "./pages/LogIn"

type ProtectedProps = {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedProps) => {
  if (!localStorage.getItem("formValues")) {
    return <Navigate to="/login" state={{ fromProtectedRoute: true }} />
  }
  return children
}

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/login" element={<LogIn />} />
    </Routes>
  )
}
