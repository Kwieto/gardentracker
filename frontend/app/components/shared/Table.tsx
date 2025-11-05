import React from "react";
import clsx from "clsx";

type TableProps = {
  headers: string[],
  data: object[],
  actions: ("edit" | "delete")[],
}

const Table: React.FC<TableProps & { className?: string }> = ({headers, data, actions, className}) => {
  const tableClass = clsx("w-full border-collapse border border-gray-200", className);
  const tableHeaderClass = "px-6 py-3 text-left text-sm font-semibold text-gray-900"

  return (
    <table className={tableClass}>
      <thead className="bg-gray-100 border-b">
      <tr>
        {headers.map((header) => (
          <th key={header} className={tableHeaderClass}>
            {header}
          </th>
        ))}
        {actions.length > 0 && (
          <th key="actions" className={tableHeaderClass}>Actions</th>
        )}
      </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
      {data.map((row, index) => (
        <tr key={index} className="hover:bg-gray-50">
          {Object.entries(row).map(([key, value]) => (
            <td key={key} className="px-6 py-4 text-sm text-gray-700">
              {value}
            </td>
          ))}

          {actions.values().map((value) => (
            // wip
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default Table;