const ListBox = ({ options, selected, onChange, className = '' }) => {
  return (
    <select
      className={
        'select select-bordered select-sm w-full max-w-xs ' + className
      }
      onChange={onChange}
    >
      {options.map((option) => (
        <option
          disabled={selected.value === option.value}
          selected={selected.value === option.value}
          key={option.value}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default ListBox
