import { ChangeEventHandler, FC } from 'react'

type Props = {
  label?: string
  onToggle?: ChangeEventHandler<HTMLInputElement>
  name: string
  defaultChecked?: boolean
  checked?: boolean
}

const Toggle: FC<Props> = ({
  label,
  onToggle,
  name,
  defaultChecked,
  checked,
}) => {
  return (
    <div className="form-control w-1/2">
      <label className="label cursor-pointer">
        {label && <span className="label-text">{label}</span>}
        <input
          name={name}
          type="checkbox"
          defaultChecked={defaultChecked}
          checked={checked}
          onChange={onToggle}
          className="toggle toggle-primary"
        />
      </label>
    </div>
  )
}

export default Toggle
