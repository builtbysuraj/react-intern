import data from "../data/data.json"
import SingleItem from "./SingleItem"

export default function NestedTree() {
  return (
    <ul>
      {data?.map((item) => (
        <SingleItem
          key={item.department}
          department={item.department}
          sub_departments={item.sub_departments}
        />
      ))}
    </ul>
  )
}
