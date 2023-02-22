import { SelectInputItem } from './components'

export enum InputType {
  select = 'select',
  range = 'range',
  number = 'number',
  text = 'text',
  toggle = 'toggle',
}

type CommonInputProps = {
  name: string
  label?: string
  desc?: string
  placeholder?: string
}

type SelectInputProps = {
  type: InputType.select
  defaultValue?: string | number | boolean
  list: SelectInputItem[]
}
type RangeInputProps = {
  type: InputType.range
  defaultValue?: number
  min?: number
  max?: number
  step?: number
}
type NumberInputProps = {
  type: InputType.number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
}
type TextInputProps = {
  type: InputType.text
  defaultValue?: string
}
type ToggleInputProps = {
  type: InputType.toggle
  defaultValue?: boolean
}

export type DynamicInputProps = CommonInputProps &
  (
    | SelectInputProps
    | RangeInputProps
    | NumberInputProps
    | TextInputProps
    | ToggleInputProps
  )

export type Method = {
  name: string
  label?: string
  desc?: string
  arguments?: any[]
}
