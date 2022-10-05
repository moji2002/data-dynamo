const Card = ({ children }) => {
  return (
    <div className="card  mb-4 border bg-base-100 shadow-xl">
      <div className="card-body">{children}</div>
    </div>
  )
}

export default Card
