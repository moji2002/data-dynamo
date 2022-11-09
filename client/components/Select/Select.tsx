import { SelectItem } from 'types/components'
import { ChangeEventHandler, FC } from 'react'

type Props = {
  data?: SelectItem[]
  value: string
  onSelect: ChangeEventHandler<HTMLSelectElement>
  className?: string
  label?: string
  name: string
}

const Select: FC<Props> = ({
  data = [],
  value,
  onSelect,
  className = '',
  label,
  name,
}) => {
  return (
    <>
      {label && <div className="mb-1 px-1 capitalize">{label}</div>}

      <select
        className={
          'select select-bordered select-sm w-full max-w-xs ' + className
        }
        onChange={onSelect}
        name={name}
      >
        {data.map((item) => (
          <option
            disabled={item.value === value}
            selected={item.value === value}
            key={item.value}
            value={item.value}
          >
            {item.label}
          </option>
        ))}
      </select>
    </>
  )
}

export default Select
