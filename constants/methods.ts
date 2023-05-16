import { Method, InputType } from '../types/method'

const methods: Method[] = [
  {
    name: 'natural',
    label: 'number',
    desc: 'Generate a natural number.',
    arguments: [
      {
        name: 'min',
        type: InputType.number,
        desc: 'Can optionally provide min',
      },
      {
        name: 'max',
        type: InputType.number,
        desc: 'Can optionally provide max',
      },
      {
        name: 'excludes',
        type: InputType.number,
        desc: 'numbers you wish to exclude',
      },
    ],
  },
  {
    name: 'first',
    label: 'first name',
    desc: 'Generate a random first name',

    arguments: [
      {
        name: 'gender',
        desc: 'Optionally specify a gender to limit first names to that gender',
        type: InputType.select,
        list: [
          { label: 'female', value: 'female' },
          { label: 'male', value: 'male' },
        ],
      },
    ],
  },
  {
    name: 'last',
    label: 'last name',
    desc: 'Generate a random last name',

    arguments: [
      {
        name: 'nationality',
        desc: 'Optionally specify a nationality to limit first names to those most common of that nationality',
        type: InputType.select,
        list: [
          { label: 'en', value: 'en' },
          { label: 'it', value: 'it' },
          { label: 'nl', value: 'nl' },
          { label: 'uk', value: 'uk' },
          { label: 'de', value: 'de' },
          { label: 'jp', value: 'jp' },
          { label: 'es', value: 'es' },
          { label: 'fr', value: 'fr' },
        ],
      },
    ],
  },
  {
    name: 'email',
    desc: 'Generate a random email with a random domain.',

    arguments: [
      {
        name: 'domain',
        desc: 'Optionally specify a domain and the email will be random but the domain will not.',
        type: InputType.text,

        placeholder: 'gmail.com',
      },
    ],
  },
  {
    name: 'age',
    desc: 'Generate a random age, default range is between 1 and 120',

    arguments: [
      {
        name: 'type',
        desc: 'Optionally specify one of a handful of enumerated age types.',
        type: InputType.select,
        list: [
          { label: 'child', value: 'child' },
          { label: 'teen', value: 'teen' },
          { label: 'adult', value: 'adult' },
          { label: 'senior', value: 'senior' },
        ],
      },
    ],
  },
  {
    name: 'paragraph',
    desc: 'Return a random paragraph generated from sentences populated by semi-pronounceable random (nonsense) words.',

    arguments: [
      {
        name: 'sentences',
        desc: 'Optionally specify the number of sentences in the paragraph.',
        type: InputType.number,
      },
    ],
  },
  {
    name: 'gender',
    desc: 'Generate a random gender',
    arguments: [
      {
        name: 'extraGenders',
        label: 'extra genders',
        desc: 'Optionally specify the number of sentences in the paragraph.',
        type: InputType.text,
        placeholder: 'Agender Genderqueer Trans Pangender',
      },
    ],
  },
  {
    name: 'animal',
    desc: 'Generate a random animal',
    arguments: [
      {
        name: 'type',
        desc: 'Optionally specify a specific type of animal',
        type: InputType.select,
        list: [
          { label: 'ocean', value: 'ocean' },
          { label: 'desert', value: 'desert' },
          { label: 'grassland', value: 'grassland' },
          { label: 'forest', value: 'forest' },
          { label: 'farm', value: 'farm' },
          { label: 'pet', value: 'pet' },
          { label: 'zoo', value: 'zoo' },
        ],
      },
    ],
  },
  {
    name: 'color',
    desc: 'Return a random color.',
    arguments: [
      {
        name: 'format',
        desc: 'These are the kinds usable in HTML or CSS. The type can optionally be specified',
        type: InputType.select,
        list: [
          { label: 'hex', value: 'hex' },
          { label: 'shorthex', value: 'shorthex' },
          { label: 'rgb', value: 'rgb' },
          { label: '0x', value: '0x' },
        ],
      },
      {
        name: 'grayscale',
        desc: 'Can optionally specify that only grayscale colors be generated',
        type: InputType.toggle,
      },
    ],
  },
  {
    name: 'company',
    desc: 'Return a random company name.',
    arguments: [],
  },

  {
    name: 'domain',
    desc: 'Return a random domain with a random tld.',
    arguments: [
      {
        name: 'tld',
        desc: 'Optionally specify a tld and the domain will be random but the tld will not.',
        type: InputType.text,
      },
    ],
  },
  {
    name: 'url',
    desc: 'Return a random domain with a random tld.',
    arguments: [
      {
        name: 'protocol',
        desc: 'Optionally specify a protocol and the url will be random but the protocol will not.',
        type: InputType.text,
        placeholder: 'ftp',
      },
      {
        name: 'domain',
        desc: 'Optionally specify a domain and the url will be random but the domain will not.',
        type: InputType.text,
        placeholder: 'www.socialradar.com',
      },
      {
        name: 'domain_prefix',
        label: 'domain prefix',
        desc: 'Optionally specify a domain prefix and domain will be random, and domain prefix will not.',
        type: InputType.text,
        placeholder: 'docs',
      },
      {
        name: 'path',
        desc: 'Optionally specify a path and it will be obeyed.',
        type: InputType.text,
        placeholder: 'images',
      },
      {
        name: 'extensions',
        desc: 'Optionally specify an array of extensions and one will be picked at random.',
        type: InputType.text,
        placeholder: 'gif jpg png',
      },
    ],
  },

  {
    name: 'country',
    desc: 'Generate a random country',
    arguments: [
      {
        name: 'full',
        label: 'Full country name',
        desc: 'Optionally specify that it ought to return a full country name.',
        type: InputType.toggle,
        defaultValue: true,
      },
    ],
  },
  {
    name: 'city',
    desc: 'Generate a random city name.',
    arguments: [],
  },
  {
    name: 'timestamp',
    desc: 'Generate a random timestamp. This is a standard Unix time, so a random number of seconds since January 1, 1970.',
    arguments: [],
  },
  {
    name: 'month',
    desc: 'Generate a random month.',
    arguments: [],
  },
  {
    name: 'date',
    desc: 'Generate a random date',
    arguments: [
      {
        name: 'string',
        label: 'String',
        desc: 'Can optionally specify that a date be returned as a string',
        type: InputType.toggle,
        defaultValue: false,
      },
      {
        name: 'american',
        label: 'American',
        desc: 'Dates in DD/MM/YYYY format',
        type: InputType.toggle,
        defaultValue: false,
      },
      {
        name: 'year',
        desc: 'Optionally specify defaults for year.',
        type: InputType.number,
        min: 1900,
        defaultValue: 2023,
      },
      {
        name: 'month',
        desc: 'Optionally specify defaults for of month',
        type: InputType.range,
        min: 0,
        max: 12,
        step: 1,
      },
      {
        name: 'day',
        desc: 'Optionally specify defaults for of day',
        type: InputType.range,
        min: 0,
        max: 31,
        step: 1,
      },
    ],
  },
  {
    name: 'weekday',
    desc: 'Generate a random image uri',
    arguments: [
      {
        name: 'weekday_only',
        label: 'Only workdays',
        desc: 'It will never return Saturday or Sunday.',
        type: InputType.toggle,
        defaultValue: false,
      },
    ],
  },
  // {
  //   name: 'image',
  //   desc: 'Return a random image uri',
  //   arguments: [
  //     {
  //       name: 'width',
  //       desc: 'set image width',
  //       type: InputType.number,
  //     },
  //     {
  //       name: 'height',
  //       desc: 'set image height',
  //       type: InputType.number,
  //     },
  //     {
  //       name: 'search',
  //       desc: 'Generate images from search terms.',
  //       type: InputType.text,
  //     },
  //   ],
  // },
]

export default methods
