import Range from '@components/Range'
import Select from '@components/Select'
import TextInput from '@components/TextInput'
import Toggle from '@components/Toggle'
import { ChangeEvent, FC } from 'react'
import { MethodOption, MethodType } from 'types/method'

type Props = {
  methodOption: MethodOption
  values: any
  setValues: Function
}

const Elements: FC<Props> = ({ methodOption, setValues, values }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('input',e)
  }

  const onToggle = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('input',e)
  }

  const onSelect = (e:ChangeEvent<HTMLSelectElement>)=>{
    console.log('select',e);
    
  }

  const label = methodOption.label || methodOption.name

  if (methodOption.type === MethodType.range)
    return (
      <Range
        name={methodOption.name}
        value={values[methodOption.name]}
        onChange={onChange}
        label={label}
        max={methodOption.max}
        min={methodOption.min}
        step={methodOption.step}
        // default={methodOption.default}
        // data={methodOption.items}
      />
    )
  if (methodOption.type === MethodType.string)
    return (
      <TextInput
        name={methodOption.name}
        value={values[methodOption.name]}
        onChange={onChange}
        label={label}
        placeholder={methodOption.placeholder}
        // default={methodOption.default}
        // data={methodOption.items}
      />
    )
  if (methodOption.type === MethodType.stringArray)
    return (
      <TextInput
        name={methodOption.name}
        value={values[methodOption.name]}
        onChange={onChange}
        label={label}
        placeholder={methodOption.placeholder}
        // default={methodOption.default}
        // data={methodOption.items}
      />
    )
  if (methodOption.type === MethodType.number)
    return (
      <TextInput
        name={methodOption.name}
        value={values[methodOption.name]}
        onChange={onChange}
        label={label}
        placeholder={methodOption.placeholder}
        // default={methodOption.default}
        // data={methodOption.items}
      />
    )
  if (methodOption.type === MethodType.enum)
    return (
      <Select
        name={methodOption.name}
        value={values[methodOption.name]}
        onSelect={onSelect}
        label={label}
        // placeholder={methodOption.placeholder}
        // default={methodOption.default}
        data={methodOption.items}
      />
    )
  if (methodOption.type === MethodType.boolean)
    return (
      <Toggle
        name={methodOption.name}
        value={values[methodOption.name]}
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
