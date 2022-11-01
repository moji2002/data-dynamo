import { Method, Option } from 'constants/methods'

const ModalContent = ({ elements, setValues }) => {
  const onChangeHandler = (name, value) => {
    setValues((prev: any) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  return (
    <>
      {elements.map((option: Option) => (
        <div key={option.name} className="mb-4 ">
          <Elements option={option} onChangeHandler={onChangeHandler} />
          <div className="mb-2 px-1 text-xs">{option.desc}</div>
        </div>
      ))}
    </>
  )
}

export default ModalContent

const Elements = ({
  option,
  onChangeHandler,
}: {
  option: Option
  onChangeHandler: any
}) => {
  if (option.type === 'range')
    return <Range option={option} onChangeHandler={onChangeHandler} />
  if (option.type === 'number')
    return <TextInput option={option} onChangeHandler={onChangeHandler} />
  if (option.type === 'enum')
    return <Select option={option} onChangeHandler={onChangeHandler} />
  if (option.type === 'string')
    return <TextInput option={option} onChangeHandler={onChangeHandler} />
  if (option.type === 'stringArray')
    return <TextInput option={option} onChangeHandler={onChangeHandler} />
  if (option.type === 'boolean')
    return <Toggle option={option} onChangeHandler={onChangeHandler} />
  return null
}

const Range = ({
  option,
  onChangeHandler,
}: {
  option: Option
  onChangeHandler: any
}) => {
  return (
    <>
      <div className="mb-1 px-1 capitalize">{option.label || option.name}</div>
      <input
        type="range"
        min={option.min}
        max={option.max}
        step={option.step}
        onChange={(e) => onChangeHandler(option.name, e.target.valueAsNumber)}
        // value="40"
        className="range range-primary mb-1"
      />
    </>
  )
}
const Select = ({
  option,
  onChangeHandler,
}: {
  option: Option
  onChangeHandler: any
}) => {
  return (
    <>
      <div className="mb-1 px-1 capitalize">{option.label || option.name}</div>

      <select
        className="select select-primary mb-1  w-full"
        onChange={(e) => onChangeHandler(option.name, e.target.value)}
      >
        {option.enumValues?.map((value) => {
          return (
            <option value={value} key={value}>
              {value}
            </option>
          )
        })}
        {/* <option disabled selected> */}
      </select>
    </>
  )
}

const TextInput = ({
  option,
  onChangeHandler,
}: {
  option: Option
  onChangeHandler: any
}) => {
  return (
    <>
      <div className="mb-1 px-1 capitalize">{option.label || option.name}</div>

      <input
        type="text"
        // type="text"
        placeholder={option.placeholder}
        className="input input-bordered input-primary mb-2 w-full"
        onChange={(e) => onChangeHandler(option.name, e.target.value)}
      />
    </>
  )
}
const Toggle = ({
  option,
  onChangeHandler,
}: {
  option: Option
  onChangeHandler: any
}) => {
  return (
    <div className="form-control mb-2 w-1/2">
      <label className="label cursor-pointer">
        <span className="label-text">{option.label || option.name}</span>
        <input
          type="checkbox"
          onChange={(e) => onChangeHandler(option.name, e.target.checked)}
          className="toggle toggle-primary"
        />
      </label>
    </div>
  )
}
