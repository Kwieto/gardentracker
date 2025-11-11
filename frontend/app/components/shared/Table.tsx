import React from "react";
import clsx from "clsx";
import Link from "next/link";

// Note: Ideally this would take a () => {}, but this is fine for now
type TableAction = {
  key: string,
  label: string,
  route: string
};

type TableProps = {
  headers: string[],
  data: Record<string, unknown>[],
  actions: TableAction[],
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
            <td key={index + key} className="px-6 py-4 text-sm text-gray-700">
              {String(value)}
            </td>
          ))}

          {actions.length > 0 && (
            <td key="actions" className="px-6 py-4 text-sm text-gray-700">
              {actions.map((action: TableAction) => (
                <Link
                  className="p-1 text-blue-500 underline"
                  key={"action-" + action.label}
                  href={action.route.replace('{' + action.key + '}', String(row[action.key]))}
                >
                  {action.label}
                </Link>
              ))}
            </td>
          )}
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default Table;