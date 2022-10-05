const CollectionTable = ({ children, rows, onDeleteClick, onDetailsClick }) => {
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
            <th>Name</th>
            <th>Description</th>
            <th />
            <th/>
  
            
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

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
                      {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                  </div>
                </td>
                <td className="">
                  {row.desc}
                  <br />
                  {/* <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span> */}
                </td>
                <td>
                  <button
                    onClick={() => onDetailsClick(row)}
                    className="btn btn-info btn-xs"
                  >
                    details
                  </button>
                </td>
                <th>
                  <button
                    onClick={() => onDeleteClick(row)}
                    className="btn btn-error btn-xs"
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
