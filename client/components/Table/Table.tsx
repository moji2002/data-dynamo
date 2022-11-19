import { FC, ReactNode } from 'react'
import { Column } from 'types/method'

type Props = {
  data: any[]
  columns: Column[]
}

const Table: FC<Props> = ({ data, columns }) => {
  if (!data?.length) return null

  return (
    <div className="w-full overflow-x-auto ">
      <table className="table w-full">
        <thead>
          <tr>
            {[
              columns.map((col, index) => {
                const HeadTag = !!index ? 'th' : 'td'
                return <HeadTag key={col.id}>{col.label}</HeadTag>
              }),
            ]}
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => {
            return (
              <tr key={row?.id} className="hover ">
                {columns.map((col, index) => {
                  const HeadTag = !!index ? 'th' : 'td'
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
