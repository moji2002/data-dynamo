import Elements from '@components/Elements'
import { FC } from 'react'
import { Element } from 'types/method'

type Props = {
  elements: Element[]
  setValues: (e: any) => any
  values: any
}

const ModalContent: FC<Props> = ({ elements, setValues, values }) => {
  return (
    <>
      {elements.map((element) => (
        <div key={element.name} className="mb-4 ">
          <Elements element={element} setValues={setValues} values={values} />
          {element.desc && (
            <div className="p-2 text-xs text-info-content">
              {element.desc}
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default ModalContent
