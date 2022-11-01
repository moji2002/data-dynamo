const ModalAction = ({ actionButtons }) => {
  return (
    <div className="card-actions justify-end">
      {actionButtons.map(({ name, onClick, className }) => {
        return (
          <button onClick={onClick} className={'btn ml-2 ' + className}>
            {name}
          </button>
        )
      })}
    </div>
  )
}

export default ModalAction
