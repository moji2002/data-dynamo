import { FC, MouseEventHandler } from 'react'

type Props = {
  buttonsData: ActionButton[]
}

type ActionButton = {
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
  className?: string
  isLoading?: boolean
}

const ModalAction: FC<Props> = ({ buttonsData }) => {
  return (
    <div className="card-actions justify-end">
      {buttonsData.map(({ label, onClick, className, isLoading }) => {
        return (
          <button
            key={label}
            disabled={isLoading}
            onClick={onClick}
            className={'btn ml-2 ' + className}
          >
            {isLoading ? '...' : label}
          </button>
        )
      })}
    </div>
  )
}

export default ModalAction
