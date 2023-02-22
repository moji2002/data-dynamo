import TextInput from '@components/core/TextInput/TextInput'
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
              label={element.label}
            />
          )}
          {element.desc && <div className="p-2 text-xs ">{element.desc}</div>}
        </div>
      ))}
    </>
  )
}

export default ModalContent
