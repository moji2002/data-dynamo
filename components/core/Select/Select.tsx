import { SelectInputItem } from 'types/components'
import { ChangeEventHandler, FC } from 'react'

type Props = {
  list?: SelectInputItem[]
  value?: string
  onChange?: ChangeEventHandler<HTMLSelectElement>
  className?: string
  label?: string
  name?: string
  defaultValue?: string | number
  required?: boolean
}

const Select: FC<Props> = ({
  list = [],
  value,
  onChange,
  className = '',
  label,
  name,
  defaultValue,
  required,
}) => {
  return (
    <>
      {label && <div className="mb-2 px-1 capitalize">{label}</div>}

      <select
        className={'select select-bordered w-full' + className}
        onChange={onChange}
        name={name}
        value={value}
        defaultValue={defaultValue}
        required={required}
      >
        <option value="">Please Select</option>
        {list.map((item) => (
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
