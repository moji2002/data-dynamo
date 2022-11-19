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
  value='',
  placeholder,
  name,
}) => {
  return (
    <>
      {label && <div className="mb-1 px-1 capitalize">{label}</div>}
      <input
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        className="input input-bordered input-primary mb-2 w-full"
        onChange={onChange}
      />
    </>
  )
}

export default TextInput
