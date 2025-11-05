import React from "react";
import clsx from "clsx";

type TableProps = {
  headers: string[],
  data: object[]
}

const Table: React.FC<TableProps & { className?: string }> = ({headers, data, className}) => {
  const tableClass = clsx("w-full border-collapse border border-gray-200", className);

  return (
    <table className={tableClass}>
      <thead className="bg-gray-100 border-b">
      <tr>
        {headers.map((header) => (
          <th key={header} className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
            {header}
          </th>
        ))}
      </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
      {data.map((row, index) => (
        <tr key={index} className="hover:bg-gray-50">
          {Object.values(row).map((value, i) => (
            <td key={i} className="px-6 py-4 text-sm text-gray-700">
              {value}
            </td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default Table;