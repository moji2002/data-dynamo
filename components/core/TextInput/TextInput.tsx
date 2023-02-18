import { ChangeEventHandler, FC } from 'react'

type Props = {
  label?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: string
  placeholder?: string
  name?: string
  defaultValue?: string | number
}

const TextInput: FC<Props> = ({
  label,
  onChange,
  value = '',
  placeholder,
  name,
  defaultValue,
}) => {
  return (
    <>
      {label && <div className="p-2 capitalize">{label}</div>}
      <input
        name={name}
        type="text"
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="input input-bordered input-primary w-full"
        onChange={onChange}
      />
    </>
  )
}

export default TextInput
