import { SelectItem } from './components'

export enum MethodType {
  enum = 'enum',
  range = 'range',
  number = 'number',
  string = 'string',
  stringArray = 'stringArray',
  boolean = 'boolean',
}

export type MethodOption = {
  name: string
  label?: string
  desc: string
  type: MethodType
  items?: SelectItem[]
  default?: string | number | boolean
  placeholder?: string
  min?: number
  max?: number
  step?: number
}

export type Method = {
  name: string
  label?: string
  desc: string
  options: MethodOption[]
}
