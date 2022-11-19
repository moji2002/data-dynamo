import { ReactNode } from 'react'
import { SelectItem } from './components'

export enum ElementType {
  selectInput = 'enum',
  rangeInput = 'range',
  numberInput = 'number',
  textInput = 'string',
  spaceSeparatedTextInput = 'stringArray',
  toggle = 'boolean',
}

export type Element = {
  name: string
  label?: string
  desc?: string
  type: ElementType
  selectInputItems?: SelectItem[]
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
  arguments?: Element[]
}

export type Column = {
  id: string
  label: ReactNode
  render?: (a:any)=>ReactNode
  name: string
  minWidth?: number
  onClick?: (e: any) => any
}