import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Card: FC<Props> = ({ children }) => {
  return (
    <div className="card border bg-base-100 shadow-xl">
      <div className="card-body">{children}</div>
    </div>
  )
}

export default Card
