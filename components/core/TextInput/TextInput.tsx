import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from 'react'

type Props = {
  label?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: string
  placeholder?: string
  name?: string
  defaultValue?: string | number
  type?: HTMLInputTypeAttribute
  required?: boolean
  min?: number
  max?: number
}

const TextInput: FC<Props> = ({
  label,
  onChange,
  value,
  placeholder,
  name,
  defaultValue,
  type = 'text',
  required,
  max,
  min,
}) => {
  return (
    <>
      {label && <div className="p-2 capitalize">{label}</div>}
      <input
        name={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="input input-bordered input-primary w-full"
        onChange={onChange}
        required={required}
        min={min}
        max={max}
      />
    </>
  )
}

export default TextInput
