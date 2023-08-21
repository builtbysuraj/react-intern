import { Grid, Typography } from "@mui/material"
import NestedTree from "../components/ParentTree"
import PostList from "../components/PostList"

export default function Home() {
  return (
    <Grid container spacing={3} m={2}>
      <Grid item xs={12}>
        <Typography variant="h3">Welcome</Typography>
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
