import { ReactNode } from 'react'
import { SelectInputItem } from './components'

export enum InputType {
  select = 'select',
  range = 'range',
  number = 'number',
  text = 'text',
  stringArray = 'stringArray',
  toggle = 'toggle',
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
