import { ChangeEventHandler, FC } from 'react'

type Props = {
  label?: string
  min?: number
  max?: number
  step?: number
  onChange: ChangeEventHandler<HTMLInputElement>
  value: number
  name: string
}

const Range: FC<Props> = ({ min, max, step, onChange, value, label, name }) => {
  return (
    <>
      {label && <div className="mb-1 px-1 capitalize">{label}</div>}
      <input
        name={name}
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={value}
        className="range range-primary mb-1"
      />
    </>
  )
}

export default Range
