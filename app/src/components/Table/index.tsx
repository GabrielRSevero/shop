import { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import axios from "axios"

export const Table = forwardRef(({ endpoint, columns }: any, ref) => {

  const [data, setData] = useState([])

  const fetch = async () => {

    const { data } = await axios.get(endpoint)

    setData(data)

  }

  useEffect(() => {
    fetch()
  }, [])

  const refetch = () => {
    fetch()
  }

  useImperativeHandle(ref, () => {
    return {
      refetch() {
        refetch()
      }
    }
  })
   
  return (
    <table className="w-full text-sm text-left text-gray-500 bg-gray-300 rounded-lg">
      <thead className="border-b text-gray-700 uppercase">
        <tr>
          {columns.map((column: any, key: number) => (
            <th key={key} className="px-6 py-3">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
        <tbody>
          {data.map((item: any, key: number) => (
            <tr key={key} className="border-b">
              {columns.map((col: any, key: number) => (
                <th key={key} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {col.render ? (
                    col.render(item[col.name], key, item)
                  ) : (
                    item[col.name]
                  )}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
    </table>
  )
})