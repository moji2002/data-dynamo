const CollectionTable = ({  rows, onDeleteClick, onDetailsClick }) => {
  return (
    <div className="w-full overflow-x-auto ">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Description</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr key={row.id} className="hover ">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold capitalize">{row.name}</div>
                    </div>
                  </div>
                </td>
                <td className="">
                  {row.desc}
  
                </td>
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

export default CollectionTable
