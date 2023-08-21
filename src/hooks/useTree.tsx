import { useState } from "react"

type Department = {
  department: string
  sub_departments: string[]
}

export const useTree = (data: Department[]) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [selected, setSelected] = useState<Record<string, boolean>>({})

  const handleExpand = (department: string) => {
    // Step 1: Update the expanded state for the department
    setExpanded((prev) => {
      // Step 2: Create a new object to represent the updated expanded state
      const newExpanded = { ...prev }

      // Step 3: Toggle the expanded state of the department
      newExpanded[department] = !prev[department]

      // Step 4: Return the updated expanded state
      return newExpanded
    })
  }

  const handleSelectDepartment = (department: string, checked: boolean) => {
    setSelected((prev) => {
      // Step 1: Create a new object to represent the updated selected state
      const newSelected = { ...prev, [department]: checked }

      // Step 2: Find the department in the data array
      const departmentData = data.find((item) => item.department === department)

      // Step 3: Check if the department was found
      if (departmentData) {
        // Step 4: Update the selected state of all sub departments
        departmentData.sub_departments.forEach((subDepartment) => {
          newSelected[subDepartment] = checked
        })
      }

      // Step 5: Return the updated selected state
      return newSelected
    })
  }

  const handleSelectSubDepartment = (
    subDepartment: string,
    checked: boolean
  ) => {
    setSelected((prev) => {
      // Step 1: Create a new object to represent the updated selected state
      const newSelected = { ...prev, [subDepartment]: checked }

      // Step 2: Find the parent department of the sub department
      const parentDepartment = data.find((item) =>
        item.sub_departments.includes(subDepartment)
      )

      // Step 3: Check if the parent department was found
      if (parentDepartment) {
        // Step 4: Check if all sub departments of the parent department are selected
        const allSubDepartmentsSelected =
          parentDepartment.sub_departments.every(
            (subDepartment) => newSelected[subDepartment]
          )

        // Step 5: Update the selected state of the parent department
        newSelected[parentDepartment.department] = allSubDepartmentsSelected
      }

      // Step 6: Return the updated selected state
      return newSelected
    })
  }

  return {
    expanded,
    selected,
    handleExpand,
    handleSelectDepartment,
    handleSelectSubDepartment,
  }
}
