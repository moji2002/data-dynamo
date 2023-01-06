import { ChangeEventHandler, FC } from 'react'

type Props = {
  label: string
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string
  placeholder?: string
  name: string
}

const TextInput: FC<Props> = ({
  label,
  onChange,
  value = '',
  placeholder,
  name,
}) => {

  return (
    <>
      {label && <div className="p-2 capitalize">{label}</div>}
      <input
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        className="input input-bordered input-primary w-full"
        onChange={onChange}
      />
    </>
  )
}

export default TextInput
