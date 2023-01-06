import Range from '@components/Range'
import Select from '@components/Select'
import TextInput from '@components/TextInput'
import Toggle from '@components/Toggle'
import { ChangeEvent, FC } from 'react'
import { DynamicInputProp, InputType } from 'types/method'

type Props = {
  input: DynamicInputProp
  values: any
  setValues: Function
}

const Inputs: FC<Props> = ({ input, setValues, values }) => {


  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const onToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.checked }
    })
  }


  const label = input.label || input.name

  if (input.type === InputType.range)
    return (
      <Range
        name={input.name}
        value={values[input.name]}
        onChange={onChange}
        label={label}
        max={input.max}
        min={input.min}
        step={input.step}
        // default={methodOption.default}
        // data={methodOption.items}
      />
    )
  if (input.type === InputType.text)
    return (
      <TextInput
        name={input.name}
        value={values[input.name]}
        onChange={onChange}
        label={label}
        placeholder={input.placeholder}
        // default={methodOption.default}
        // data={methodOption.items}
      />
    )
  if (input.type === InputType.spaceSeparatedText)
    return (
      <TextInput
        name={input.name}
        value={values[input.name]}
        onChange={onChange}
        label={label}
        placeholder={input.placeholder}
        // default={methodOption.default}
        // data={methodOption.items}
      />
    )
  if (input.type === InputType.number)
    return (
      <TextInput
        name={input.name}
        value={values[input.name]}
        onChange={onChange}
        label={label}
        placeholder={input.placeholder}
        // default={methodOption.default}
        // data={methodOption.items}
      />
    )
  if (input.type === InputType.select)
    return (
      <Select
        name={input.name}
        value={values[input.name]}
        onChange={onChange}
        label={label}
        // placeholder={methodOption.placeholder}
        // default={methodOption.default}
        data={input.selectInputItems}
      />
    )
  if (input.type === InputType.toggle)
    return (
      <Toggle
        name={input.name}
        value={values[input.name]}
        onToggle={onToggle}
        label={label}

        // default={methodOption.default}
      />
    )
  return null
}

export default Inputs
