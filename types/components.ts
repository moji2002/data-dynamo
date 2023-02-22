import { MouseEventHandler } from 'react'

export type SelectInputItem = {
  label: string
  value: string
}

export type ActionButton = {
  label: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  isLoading?: boolean
  type?: 'reset' | 'submit' | 'button'
}
