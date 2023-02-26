import Range from '@components/core/Range'
import Select from '@components/core/Select'
import TextInput from '@components/core/TextInput'
import Toggle from '@components/core/Toggle'
import { FC } from 'react'
import { DynamicInputProps, InputType } from 'types/method'

type Props = {
  elements: DynamicInputProps[]
  setValues?: (e: any) => any
  values?: any
}

const ModalContent: FC<Props> = ({ elements, setValues, values }) => {
  return (
    <>
      {elements.map((element) => (
        <div key={element.name} className="mb-4 ">
          {element.type === InputType.text && (
            <TextInput
              key={element.name}
              defaultValue={element.defaultValue}
              name={element.name}
              placeholder={element.placeholder}
              label={element.label||element.name}
            />
          )}
          {element.type === InputType.number && (
            <TextInput
              key={element.name}
              defaultValue={element.defaultValue}
              name={element.name}
              placeholder={element.placeholder}
              label={element.label||element.name}
              type='number'
            />
          )}
          {element.type === InputType.range && (
            <Range
              key={element.name}
              defaultValue={element.defaultValue}
              name={element.name}
              label={element.label || element.name}
              max={element.max}
              min={element.min}
              step={element.step}
            />
          )}
          {element.type === InputType.select && (
            <Select
              key={element.name}
              name={element.name}
              label={element.label || element.name}
              list={element.list}
              onChange={element.onChange}
              value={element.value}
            />
          )}
          {element.type === InputType.toggle && (
            <Toggle
              key={element.name}
              name={element.name}
              label={element.label || element.name}
              defaultChecked={element.defaultValue}

            />
          )}
          {element.desc && <div className="p-2 text-xs ">{element.desc}</div>}
        </div>
      ))}
    </>
  )
}

export default ModalContent
