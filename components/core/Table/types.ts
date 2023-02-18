import { ReactNode } from 'react'

export type TableColumn = {
  id?: string
  label?: ReactNode
  render?: (a: any) => ReactNode
  name: string
  minWidth?: number
  onClick?: (e: any) => any
}
