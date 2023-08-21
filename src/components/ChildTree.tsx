type Props = {
  subDepartment: string
  handleSelectSubDepartment: (subDepartment: string, checked: boolean) => void
  selected: Record<string, boolean>
}

export default function ChildTree({
  subDepartment,
  handleSelectSubDepartment,
  selected,
}: Props) {
  return (
    <li>
      <input
        type="checkbox"
        checked={!!selected[subDepartment]}
        onChange={(e) =>
          handleSelectSubDepartment(subDepartment, e.target.checked)
        }
      />
      <label>{subDepartment}</label>
    </li>
  )
}
