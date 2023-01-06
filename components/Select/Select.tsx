import { SelectInputItem } from 'types/components'
import { ChangeEventHandler, FC } from 'react'

type Props = {
  data?: SelectInputItem[]
  value: string
  onChange: ChangeEventHandler<HTMLSelectElement>
  className?: string
  label?: string
  name: string
}

const Select: FC<Props> = ({
  data = [],
  value,
  onChange,
  className = '',
  label,
  name,
}) => {
  return (
    <>
      {label && <div className="mb-2 px-1 capitalize">{label}</div>}

      <select
        className={
          'select select-bordered w-full' + className
        }
        onChange={onChange}
        name={name}
      >
        <option value="">Please Select</option>
        {data.map((item) => (
          <option
            disabled={item.value === value}
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
