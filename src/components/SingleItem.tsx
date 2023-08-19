import { useState } from "react"

type Props = {
  department: string
  sub_departments: string[]
}

export default function SingleItem({ department, sub_departments }: Props) {
  const [expanded, setExpanded] = useState(false)

  const handleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <li>
      <div onClick={handleExpand}>{department}</div>
      {expanded ? (
        <ul>
          {sub_departments?.map((sub_department: string) => (
            <li key={sub_department}>{sub_department}</li>
          ))}
        </ul>
      ) : null}
    </li>
  )
}
