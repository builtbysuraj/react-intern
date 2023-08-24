import { Button, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import NestedTree from "../components/ParentTree"
import PostList from "../components/PostList"

export default function Home() {
  const navigate = useNavigate()
  return (
    <Grid container spacing={3} m={2}>
      <Grid item xs={12}>
        <Typography variant="h3" textAlign={"center"} mx={5}>
          Welcome
          <Button
            onClick={() => {
              localStorage.clear()
              navigate("/login")
            }}
            variant="contained"
            size="medium"
          >
            Log out
          </Button>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <NestedTree />
      </Grid>
      <Grid item xs={6}>
        <PostList />
      </Grid>
    </Grid>
  )
}
