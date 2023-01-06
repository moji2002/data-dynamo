import { ReactNode } from 'react'
import { SelectInputItem } from './components'

export enum InputType {
  select = 'enum',
  range = 'range',
  number = 'number',
  text = 'string',
  spaceSeparatedText = 'stringArray',
  toggle = 'boolean',
}

export interface DynamicInputProp {
  name: string
  label?: string
  desc?: string
  type: InputType
  selectInputItems?: SelectInputItem[]
  default?: string | number | boolean
  placeholder?: string
  min?: number
  max?: number
  step?: number
}

export type Method = {
  name: string
  label?: string
  desc?: string
  arguments?: any[]
}

export type TableColumn = {
  id?: string
  label?: ReactNode
  render?: (a: any) => ReactNode
  name: string
  minWidth?: number
  onClick?: (e: any) => any
}
