export type Option = {
  name: string
  label?: string
  desc: string
  type: 'enum' | 'range' | 'number' | 'string' | 'stringArray' | 'boolean'
  enumValues?: string[]
  default?: string | number | boolean
  placeholder?: string
  min?: number
  max?: number
  step?: number
}
export interface Method {
  name: string
  label?: string
  desc: string
  options: Option[]
}

const methods: Method[] = [
  {
    name: 'natural',
    label: 'number',
    desc: 'Generate a natural number.',
    options: [
      {
        name: 'min',
        type: 'number',
        desc: 'Can optionally provide min',
      },
      {
        name: 'max',
        type: 'number',
        desc: 'Can optionally provide max',
      },
      {
        name: 'excludes',
        type: 'number',
        desc: 'numbers you wish to exclude',
      },
    ],
  },
  {
    name: 'first',
    label: 'first name',
    desc: 'Generate a random first name',

    options: [
      {
        name: 'nationality',
        desc: 'Optionally specify a nationality to limit first names to those most common of that nationality',
        type: 'enum',
        enumValues: ['us', 'it'],
      },
      {
        name: 'gender',
        desc: 'Optionally specify a gender to limit first names to that gender',
        type: 'enum',
        enumValues: ['female', 'male'],
      },
    ],
  },
  {
    name: 'last',
    label: 'last name',
    desc: 'Generate a random last name',

    options: [
      {
        name: 'nationality',
        desc: 'Optionally specify a nationality to limit first names to those most common of that nationality',
        type: 'enum',
        enumValues: ['en', 'it', 'nl', 'uk', 'de', 'jp', 'es', 'fr'],
      },
    ],
  },
  {
    name: 'email',
    desc: 'Generate a random email with a random domain.',

    options: [
      {
        name: 'domain',
        desc: 'Optionally specify a domain and the email will be random but the domain will not.',
        type: 'string',
        placeholder: 'gmail.com',
      },
    ],
  },
  {
    name: 'age',
    desc: 'Generate a random age, default range is between 1 and 120',

    options: [
      {
        name: 'type',
        desc: 'Optionally specify one of a handful of enumerated age types.',
        type: 'enum',
        enumValues: ['child', 'teen', 'adult', 'senior'],
      },
    ],
  },
  {
    name: 'paragraph',
    desc: 'Return a random paragraph generated from sentences populated by semi-pronounceable random (nonsense) words.',

    options: [
      {
        name: 'sentences',
        desc: 'Optionally specify the number of sentences in the paragraph.',
        type: 'number',
      },
    ],
  },
  {
    name: 'gender',
    desc: 'Generate a random gender',
    options: [
      {
        name: 'extraGenders',
        label: 'extra genders',
        desc: 'Optionally specify the number of sentences in the paragraph.',
        type: 'stringArray',
        placeholder: 'Agender Genderqueer Trans Pangender',
      },
    ],
  },
  {
    name: 'animal',
    desc: 'Generate a random animal',
    options: [
      {
        name: 'type',
        desc: 'Optionally specify a specific type of animal',
        type: 'enum',
        enumValues: [
          'ocean',
          'desert',
          'grassland',
          'forest',
          'farm',
          'pet',
          'zoo',
        ],
      },
    ],
  },
  {
    name: 'color',
    desc: 'Return a random color.',
    options: [
      {
        name: 'type',
        desc: 'These are the kinds usable in HTML or CSS. The type can optionally be specified',
        type: 'enum',
        enumValues: ['hex', 'shorthex', 'rgb', '0x'],
      },
      {
        name: 'grayscale',
        desc: 'Can optionally specify that only grayscale colors be generated',
        type: 'boolean',
      },
    ],
  },
  {
    name: 'company',
    desc: 'Return a random company name.',
    options: [],
  },

  {
    name: 'domain',
    desc: 'Return a random domain with a random tld.',
    options: [
      {
        name: 'tld',
        desc: 'Optionally specify a tld and the domain will be random but the tld will not.',
        type: 'string',
      },
    ],
  },
  {
    name: 'url',
    desc: 'Return a random domain with a random tld.',
    options: [
      {
        name: 'protocol',
        desc: 'Optionally specify a protocol and the url will be random but the protocol will not.',
        type: 'string',
        placeholder: 'ftp',
      },
      {
        name: 'domain',
        desc: 'Optionally specify a domain and the url will be random but the domain will not.',
        type: 'string',
        placeholder: 'www.socialradar.com',
      },
      {
        name: 'domain_prefix',
        label: 'domain prefix',
        desc: 'Optionally specify a domain prefix and domain will be random, and domain prefix will not.',
        type: 'string',
        placeholder: 'docs',
      },
      {
        name: 'path',
        desc: 'Optionally specify a path and it will be obeyed.',
        type: 'string',
        placeholder: 'images',
      },
      {
        name: 'extensions',
        desc: 'Optionally specify an array of extensions and one will be picked at random.',
        type: 'stringArray',
        placeholder: 'gif jpg png',
      },
    ],
  },

  {
    name: 'country',
    desc: 'Generate a random country',
    options: [
      {
        name: 'full',
        label: 'Full country name',
        desc: 'Optionally specify that it ought to return a full country name.',
        type: 'boolean',
        default: true,
      },
    ],
  },
  {
    name: 'city',
    desc: 'Generate a random city name.',
    options: [],
  },
  {
    name: 'timestamp',
    desc: 'Generate a random timestamp. This is a standard Unix time, so a random number of seconds since January 1, 1970.',
    options: [],
  },
  {
    name: 'month',
    desc: 'Generate a random month.',
    options: [],
  },
  {
    name: 'date',
    desc: 'Generate a random date',
    options: [
      {
        name: 'string',
        label: 'String',
        desc: 'Can optionally specify that a date be returned as a string',
        type: 'boolean',
        default: false,
      },
      {
        name: 'american',
        label: 'American',
        desc: 'Dates in DD/MM/YYYY format',
        type: 'boolean',
        default: false,
      },
      {
        name: 'year',
        desc: 'Optionally specify defaults for year.',
        type: 'number',
      },
      {
        name: 'month',
        desc: 'Optionally specify defaults for of month',
        type: 'range',
        min: 1,
        max: 12,
        step: 1,
      },
      {
        name: 'day',
        desc: 'Optionally specify defaults for of day',
        type: 'range',
        min: 1,
        max: 31,
        step: 1,
      },
    ],
  },
  {
    name: 'weekday',
    desc: 'Generate a random image uri',
    options: [
      {
        name: 'weekday_only',
        label: 'Only workdays',
        desc: 'It will never return Saturday or Sunday.',
        type: 'boolean',
        default: false,
      },
    ],
  },
  {
    name: 'image',
    desc: 'Return a random image uri',
    options: [
      {
        name: 'width',
        desc: 'set image width',
        type: 'number',
      },
      {
        name: 'height',
        desc: 'set image height',
        type: 'number',
      },
      {
        name: 'search',
        desc: 'Generate images from search terms.',
        type: 'string',
      },
    ],
  },
]

export default methods
