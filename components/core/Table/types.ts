import { ReactNode } from 'react'

export interface TableColumn<T> {
  id?: string
  label?: ReactNode
  render?: (item: T) => ReactNode
  name: string
  minWidth?: number
}
