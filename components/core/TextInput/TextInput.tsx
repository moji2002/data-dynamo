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
      />
    </>
  )
}

export default TextInput
