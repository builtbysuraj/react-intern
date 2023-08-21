import data from "../data/data.json"
import { useTree } from "../hooks/useTree"
import ChildTree from "./ChildTree"

export default function ParentTree() {
  const {
    expanded,
    selected,
    handleExpand,
    handleSelectDepartment,
    handleSelectSubDepartment,
  } = useTree(data)

  return (
    <ul style={{ listStyle: "none" }}>
      {data.map((department) => (
        <li key={department.department}>
          <input
            type="checkbox"
            checked={!!selected[department.department]}
            onChange={(e) =>
              handleSelectDepartment(department.department, e.target.checked)
            }
          />
          <button onClick={() => handleExpand(department.department)}>
            {expanded[department.department] ? "-" : "+"}
          </button>
          <label>{department.department}</label>
          {expanded[department.department] && (
            <ul style={{ listStyle: "none" }}>
              {department.sub_departments.map((subDepartment) => (
                <ChildTree
                  key={subDepartment}
                  subDepartment={subDepartment}
                  handleSelectSubDepartment={handleSelectSubDepartment}
                  selected={selected}
                />
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}
