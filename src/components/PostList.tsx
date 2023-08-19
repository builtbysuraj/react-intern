import { Box } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { useEffect, useState } from "react"

export default function PostList() {
  interface Post {
    userId: number
    id: number
    title: string
    body: string
  }

  const [posts, setPosts] = useState<Post[]>([])

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      if (!res.ok) throw new Error("Responce is not OK!")
      const data = await res.json()
      setPosts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const columns: GridColDef[] = [
    { field: "id", headerName: "id", width: 200 },
    { field: "userId", headerName: "UserID", width: 200 },
    { field: "title", headerName: "Title", width: 250 },
    { field: "body", headerName: "Body", width: 200 },
  ]

  return (
    <Box sx={{ height: 450, width: "100%" }}>
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
        }}
      />
    </Box>
  )
}
