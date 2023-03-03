import { PropsWithChildren, ReactNode } from 'react'
import { TableColumn } from './types'

interface Props<T> {
  data: any[]
  columns: TableColumn<T>[]
}

const Table: <T>(p: PropsWithChildren<Props<T>>) => ReactNode = ({
  data,
  columns,
}) => {
  if (!data?.length) return null

  return (
    <div className="w-full overflow-x-auto ">
      <table className="table w-full">
        <thead>
          <tr>
            {columns.map((col, index) => {
              const HeadTag = index === 0 ? 'th' : 'td'
              return <HeadTag key={col.id}>{col.label || col.name}</HeadTag>
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => {
            return (
              <tr key={row?.id} className="hover ">
                {columns.map((col, index) => {
                  const HeadTag = index === 0 ? 'th' : 'td'
                  const render = !!col.render ? col.render(row) : row[col.name]!
                  return <HeadTag key={col?.id}>{render}</HeadTag>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
