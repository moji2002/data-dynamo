import Elements from '@components/Elements'

const ModalContent = ({ elements, setValues, values }) => {
  return (
    <>
      {elements.map((option) => (
        <div key={option.name} className="mb-4 ">
          <Elements option={option} onChange={onChange} values={values} />
          <div className="mb-2 px-1 text-xs">{option.desc}</div>
        </div>
      ))}
    </>
  )
}

export default ModalContent
