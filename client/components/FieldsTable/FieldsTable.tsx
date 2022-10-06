const FieldsTable = ({
  headers,
  rows,
  onDeleteClick,
  onDetailsClick,
}) => {
  return (
    <div className="w-full overflow-x-auto ">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const cells = Object.values(row)

            return (
              <tr key={row.id} className="hover ">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>

                {cells.map((cell) => (
                  <td key={cell} className="">
                    {cell}
                  </td>
                ))}
                <th className="w-0">
                  <button
                    onClick={() => onDetailsClick(row)}
                    className="btn  btn-outline btn-info btn-xs"
                  >
                    details
                  </button>
                </th>
                <th className="w-0">
                  <button
                    onClick={() => onDeleteClick(row)}
                    className="btn  btn-outline btn-error btn-xs"
                  >
                    delete
                  </button>
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default FieldsTable
