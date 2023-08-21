import { Box } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import useFetch from "../hooks/useFetch"

export default function PostList() {
  const url = `https://jsonplaceholder.typicode.com/posts`
  const { posts } = useFetch(url)
  
  const columns: GridColDef[] = [
    { field: "id", headerName: "id", width: 100 },
    { field: "userId", headerName: "UserID", width: 100 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "body", headerName: "Body", width: 200 },
  ]

  return (
    <Box sx={{ height: 550, width: "100%" }}>
      <DataGrid
        rows={posts}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          "& .MuiDataGrid-cell": {
            fontSize: 18,
          },
          "& .MuiDataGrid-columnHeader": {
            fontSize: 20,
          },
          marginRight: 8,
        }}
      />
    </Box>
  )
}
