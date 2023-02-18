import { ChangeEventHandler, useState } from 'react'
import Select from '@components/core/Select'
import themes from 'constants/themes'

const Navbar = ({ setDrawerOpen }: { setDrawerOpen: (e: boolean) => void }) => {
  const [theme, setTheme] = useState(themes[0].value)

  const onThemeChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setTheme(e.target.value)
    document.body.setAttribute('data-theme', e.target.value)
  }

  return (
    <div className="navbar mb-4 bg-base-100 shadow-lg">
      <div className="flex-none">
        <button
          onClick={() => setDrawerOpen(true)}
          className="btn btn-ghost btn-square"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl normal-case">
          Cool JSON Placeholder
        </a>
      </div>
      <div className="pr-4">
        <Select
          name="theme-selector"
          className=""
          data={themes}
          value={theme}
          onChange={onThemeChange}
        />
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost btn-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar
