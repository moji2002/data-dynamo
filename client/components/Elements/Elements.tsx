import Range from '@components/Range'
import Select from '@components/Select'
import TextInput from '@components/TextInput'
import Toggle from '@components/Toggle'
import { ChangeEvent, FC } from 'react'
import { Element, ElementType } from 'types/method'

type Props = {
  element: Element
  values: any
  setValues: Function
}

const Elements: FC<Props> = ({ element, setValues, values }) => {


  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const onToggle = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('input', e)
  }

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log('select', e)
  }

  const label = element.label || element.name

  if (element.type === ElementType.rangeInput)
    return (
      <Range
        name={element.name}
        value={values[element.name]}
        onChange={onChange}
        label={label}
        max={element.max}
        min={element.min}
        step={element.step}
        // default={methodOption.default}
        // data={methodOption.items}
      />
    )
  if (element.type === ElementType.textInput)
    return (
      <TextInput
        name={element.name}
        value={values[element.name]}
        onChange={onChange}
        label={label}
        placeholder={element.placeholder}
        // default={methodOption.default}
        // data={methodOption.items}
      />
    )
  if (element.type === ElementType.spaceSeparatedTextInput)
    return (
      <TextInput
        name={element.name}
        value={values[element.name]}
        onChange={onChange}
        label={label}
        placeholder={element.placeholder}
        // default={methodOption.default}
        // data={methodOption.items}
      />
    )
  if (element.type === ElementType.numberInput)
    return (
      <TextInput
        name={element.name}
        value={values[element.name]}
        onChange={onChange}
        label={label}
        placeholder={element.placeholder}
        // default={methodOption.default}
        // data={methodOption.items}
      />
    )
  if (element.type === ElementType.selectInput)
    return (
      <Select
        name={element.name}
        value={values[element.name]}
        onSelect={onSelect}
        label={label}
        // placeholder={methodOption.placeholder}
        // default={methodOption.default}
        data={element.selectInputItems}
      />
    )
  if (element.type === ElementType.toggle)
    return (
      <Toggle
        name={element.name}
        value={values[element.name]}
        onToggle={onToggle}
        label={label}

        // default={methodOption.default}
      />
    )
  return null
}

export default Elements

// const Select = ({
//   option,
//   onChangeHandler,
// }: {
//   option: Option
//   onChangeHandler: any
// }) => {
//   return (
//     <>
//       <div className="mb-1 px-1 capitalize">{option.label || option.name}</div>

//       <select
//         className="select select-primary mb-1  w-full"
//         onChange={(e) => onChangeHandler(option.name, e.target.value)}
//       >
//         {option.enumValues?.map((value) => {
//           return (
//             <option value={value} key={value}>
//               {value}
//             </option>
//           )
//         })}
//         {/* <option disabled selected> */}
//       </select>
//     </>
//   )
// }
