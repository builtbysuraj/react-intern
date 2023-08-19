import { Grid, Typography } from "@mui/material"
import PostList from "../components/PostList"

export default function Home() {
  return (
    <Grid>
      <Typography  variant="h3">Welcome</Typography>
      <PostList />
    </Grid>
  )
}
