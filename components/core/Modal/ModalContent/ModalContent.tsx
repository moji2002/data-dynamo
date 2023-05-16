import Range from '@components/core/Range'
import Select from '@components/core/Select'
import TextInput from '@components/core/TextInput'
import Toggle from '@components/core/Toggle'
import { FC } from 'react'
import { DynamicInputProps, InputType } from 'types/method'

type Props = {
  elements: DynamicInputProps[]
  values: { [key: string]: number | string | boolean }
  handleSetValue: (key: string, value: number | string | boolean) => any
}

const ModalContent: FC<Props> = ({ elements, values, handleSetValue }) => {
  if (!values || !elements || !handleSetValue)
    new Error('ModalContent: props not provided')

  return (
    <>
      {elements.map((element) => {
        const value = values[element?.name]
        return (
          <div key={element.name} className="mb-4">
            {element.type === InputType.text && (
              <TextInput
                key={element.name}
                defaultValue={element.defaultValue}
                name={element.name}
                placeholder={element.placeholder}
                label={element.label || element.name}
                value={typeof value === 'string' ? value : ''}
                onChange={(e) => handleSetValue(element.name, e.target.value)}
                required={element.required}
              />
            )}
            {element.type === InputType.number && (
              <TextInput
                key={element.name}
                defaultValue={element.defaultValue}
                name={element.name}
                placeholder={element.placeholder}
                label={element.label || element.name}
                max={element.max}
                min={element.min}
                type="number"
                value={typeof value === 'string' ? value : ''}
                onChange={(e) => handleSetValue(element.name, e.target.value)}
                required={element.required}
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
                value={typeof value === 'number' ? value : 0}
                onChange={(e) => handleSetValue(element.name, +e.target.value)}
              />
            )}
            {element.type === InputType.select && (
              <Select
                key={element.name}
                name={element.name}
                label={element.label || element.name}
                list={element.list}
                value={typeof value === 'string' ? value : ''}
                onChange={(e) => handleSetValue(element.name, e.target.value)}
                required={element.required}
              />
            )}
            {element.type === InputType.toggle && (
              <Toggle
                key={element.name}
                name={element.name}
                label={element.label || element.name}
                defaultChecked={element.defaultValue}
                checked={!!value}
                onToggle={(e) => handleSetValue(element.name, e.target.checked)}
              />
            )}
            {element.desc && <div className="p-2 text-xs ">{element.desc}</div>}
          </div>
        )
      })}
    </>
  )
}

export default ModalContent
