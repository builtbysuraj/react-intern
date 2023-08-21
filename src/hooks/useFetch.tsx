import { useEffect, useState } from "react"

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export default function useFetch(url: string) {
  const [posts, setPosts] = useState<Post[]>([])
  const [err, setErr] = useState<boolean>(false)

  const fetchData = async () => {
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error("Responce is not OK!")
      const data = await res.json()
      setPosts(data)
    } catch (error) {
      setErr(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { posts, err }
}
