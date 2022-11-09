import { FC, MouseEventHandler } from 'react'

type Props = {
  buttons: ActionButton[]
}

type ActionButton = {
  name: string
  onClick: MouseEventHandler<HTMLButtonElement>
  className: string
  isLoading: boolean
}

const ModalAction: FC<Props> = ({ buttons }) => {
  return (
    <div className="card-actions justify-end">
      {buttons.map(({ name, onClick, className, isLoading }) => {
        return (
          <button
            key={name}
            disabled={isLoading}
            onClick={onClick}
            className={'btn ml-2 ' + className}
          >
            {isLoading ? '...' : name}
          </button>
        )
      })}
    </div>
  )
}

export default ModalAction
