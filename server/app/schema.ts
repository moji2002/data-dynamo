import type Chance from "chance";
// const chance = new Chance();


type Fields = {
  fieldName: string;
  method: string;
  arguments?: any;
};

interface Collection {
  name: string;
  rows: number;
  fields: Fields[];
}

interface Schema {
  collections: Collection[];
}


const schema: Schema = {
  collections: [
    {
      name: "users",
      rows: 5,
      fields: [
        {
          fieldName: "id",
          method: "natural",
          arguments:{min: 1, max: 20}
        },
        {
          fieldName: "firstName",
          method: "first",
        },
        {
          fieldName: "lastName",
          method: "last",
        },
        {
          fieldName: "email",
          method: "email",
        },
        {
          fieldName: "age",
          method: "age",
        },
      ],
    },
  ],
};

export default schema;
