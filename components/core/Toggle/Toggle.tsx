import { ChangeEventHandler, FC } from 'react'

type Props = {
  label?: string
  onToggle?: ChangeEventHandler<HTMLInputElement>
  value?: string
  name: string
  defaultChecked?: boolean
}

const Toggle: FC<Props> = ({
  label,
  onToggle,
  value,
  name,
  defaultChecked,
}) => {
  return (
    <div className="form-control w-1/2">
      <label className="label cursor-pointer">
        {label && <span className="label-text">{label}</span>}
        <input
          name={name}
          type="checkbox"
          defaultChecked={defaultChecked}
          value={value}
          onChange={onToggle}
          className="toggle toggle-primary"
        />
      </label>
    </div>
  )
}

export default Toggle
