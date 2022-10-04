type Arguments = {
  name: string;
  displayName?: string;
  desc: string;
  type: "enum" | "number" | "string" | "stringArray" | "boolean";
  enumValues?: string[];
  default?: string | number | boolean;
};
interface Method {
  name: string;
  displayName?: string;
  desc: string;
  arguments: Arguments[];
}

const methods: Method[] = [
  {
    name: "natural",
    desc: "",
    arguments: [
      {
        name: "min",
        type: "number",
        desc: "",
      },
      {
        name: "max",
        type: "number",
        desc: "",
      },
      {
        name: "excludes",
        type: "number",
        desc: "numbers you wish to exclude",
      },
    ],
  },
  {
    name: "first",
    desc: "Generate a random first name",

    arguments: [
      {
        name: "nationality",
        desc: "Optionally specify a nationality to limit first names to those most common of that nationality",
        type: "enum",
        enumValues: ["us", "it"],
      },
      {
        name: "gender",
        desc: "Optionally specify a gender to limit first names to that gender",
        type: "enum",
        enumValues: ["female", "male"],
      },
    ],
  },
  {
    name: "last",
    desc: "Generate a random last name",

    arguments: [
      {
        name: "nationality",
        desc: "Optionally specify a nationality to limit first names to those most common of that nationality",
        type: "enum",
        enumValues: ["en", "it", "nl", "uk", "de", "jp", "es", "fr"],
      },
    ],
  },
  {
    name: "email",
    desc: "Generate a random email with a random domain.",

    arguments: [
      {
        name: "domain",
        desc: "Optionally specify a domain and the email will be random but the domain will not.",
        type: "string",
      },
    ],
  },
  {
    name: "age",
    desc: "Generate a random age, default range is between 1 and 120",

    arguments: [
      {
        name: "type",
        desc: "Optionally specify one of a handful of enumerated age types.",
        type: "enum",
        enumValues: ["child", "teen", "adult", "senior"],
      },
    ],
  },
  {
    name: "paragraph",
    desc: "Return a random paragraph generated from sentences populated by semi-pronounceable random (nonsense) words.",

    arguments: [
      {
        name: "sentences",
        desc: "Optionally specify the number of sentences in the paragraph.",
        type: "number",
      },
    ],
  },
  {
    name: "gender",
    desc: "Generate a random gender",

    arguments: [
      {
        name: "extraGenders",
        desc: "Optionally specify the number of sentences in the paragraph.",
        type: "stringArray",
      },
    ],
  },
  {
    name: "animal",
    desc: "Generate a random animal",
    arguments: [
      {
        name: "type",
        desc: "Optionally specify a specific type of animal",
        type: "enum",
        enumValues: [
          "ocean",
          "desert",
          "grassland",
          "forest",
          "farm",
          "pet",
          "zoo",
        ],
      },
    ],
  },
  {
    name: "color",
    desc: "Return a random color.",
    arguments: [
      {
        name: "type",
        desc: "These are the kinds usable in HTML or CSS. The type can optionally be specified",
        type: "enum",
        enumValues: ["hex", "shorthex", "rgb", "0x"],
      },
      {
        name: "grayscale",
        desc: "Can optionally specify that only grayscale colors be generated",
        type: "boolean",
      },
    ],
  },
  {
    name: "company",
    desc: "Return a random company name.",
    arguments: [],
  },

  {
    name: "domain",
    desc: "Return a random domain with a random tld.",
    arguments: [
      {
        name: "tld",
        desc: "Optionally specify a tld and the domain will be random but the tld will not.",
        type: "string",
      },
    ],
  },
  {
    name: "url",
    desc: "Return a random domain with a random tld.",
    arguments: [
      {
        name: "protocol",
        desc: "Optionally specify a protocol and the url will be random but the protocol will not.",
        type: "string",
      },
      {
        name: "domain",
        desc: "Optionally specify a domain and the url will be random but the domain will not.",
        type: "string",
      },
      {
        name: "domain_prefix",
        displayName: "domain prefix",
        desc: "Optionally specify a domain prefix and domain will be random, and domain prefix will not.",
        type: "string",
      },
      {
        name: "path",
        desc: "Optionally specify a path and it will be obeyed.",
        type: "string",
      },
      {
        name: "extensions",
        desc: "Optionally specify an array of extensions and one will be picked at random.",
        type: "stringArray",
      },
    ],
  },

  {
    name: "country",
    desc: "Generate a random country",
    arguments: [
      {
        name: "full",
        desc: "Optionally specify that it ought to return a full country name.",
        type: "boolean",
        default: true,
      },
    ],
  },
  {
    name: "city",
    desc: "generate a random city name.",
    arguments: [],
  },
  {
    name: "timestamp",
    desc: "Generate a random timestamp. This is a standard Unix time, so a random number of seconds since January 1, 1970.",
    arguments: [],
  },
  {
    name: "month",
    desc: "GGenerate a random month.",
    arguments: [],
  },
  {
    name: "date",
    desc: "Generate a random date",
    arguments: [
      {
        name: "string",
        desc: "Can optionally specify that a date be returned as a string",
        type: "boolean",
        default: false,
      },
      {
        name: "american",
        desc: "dates in DD/MM/YYYY format",
        type: "boolean",
        default: false,
      },
      {
        name: "year",
        desc: "optionally specify defaults for year.",
        type: "number",
      },
      {
        name: "month",
        desc: "optionally specify defaults for of month",
        type: "number",
      },
      {
        name: "day",
        desc: "optionally specify defaults for of day",
        type: "number",
      },
    ],
  },
  {
    name: "weekday",
    desc: "Return a weekday",
    arguments: [
      {
        name: "weekday_only",
        displayName: "workdays",
        desc: "It will never return Saturday or Sunday.",
        type: "boolean",
        default: false,
      },
    ],
  },
];