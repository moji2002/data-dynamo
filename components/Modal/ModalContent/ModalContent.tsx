import Elements from '@components/Inputs'
import { FC } from 'react'
import { DynamicInputProp } from 'types/method'

type Props = {
  elements: DynamicInputProp[]
  setValues: (e: any) => any
  values: any
}

const ModalContent: FC<Props> = ({ elements, setValues, values }) => {
  
  return (
    <>
      {elements.map((element) => (
        <div key={element.name} className="mb-4 ">
          <Elements input={element} setValues={setValues} values={values} />
          {element.desc && (
            <div className="p-2 text-xs ">
              {element.desc}
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default ModalContent
