import { ChangeEventHandler, FC } from 'react'

type Props = {
  label?: string
  min?: number
  max?: number
  step?: number
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: number
  name?: string
  defaultValue?: string | number
}

const Range: FC<Props> = ({
  min,
  max,
  step,
  onChange,
  value,
  label,
  name,
  defaultValue,
}) => {
  return (
    <>
      {label && <div className="p-2 capitalize">{`${label} (${value})`}</div>}
      <input
        name={name}
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        className="range range-primary mb-1"
      />
    </>
  )
}

export default Range
