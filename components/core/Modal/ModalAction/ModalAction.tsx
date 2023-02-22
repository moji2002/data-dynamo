import { FC } from 'react'
import { ActionButton } from 'types/components'

type Props = {
  actionButtons: ActionButton[]
}

const ModalAction: FC<Props> = ({ actionButtons }) => {
  return (
    <div className="card-actions justify-end">
      {actionButtons.map(({ label, onClick, className, isLoading }) => {
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
