
const ModalContent = ({ actionButtons }) => {
  return (
    <>
      <div className="mt-2">
        <p className="text-sm  ">
          Your payment has been successfully submitted. We’ve sent you an email
          with all of the details of your order.
        </p>
      </div>
      <div className="mt-4">
        <div className="card-actions justify-end">
          {actionButtons.map(({ name, onClick, className }) => {
            return (
              <button onClick={onClick} className={'btn ml-2 ' + className}>
                {name}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ModalContent
