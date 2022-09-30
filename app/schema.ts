const schema = {
  tables: [
    {
      name: "users",
      quantity: 30,
      fields: [
        {
          fieldName: "id",
          fn: "natural",
        },
        {
          fieldName: "firstName",
          fn: "first",
        },
        {
          fieldName: "lastName",
          fn: "last",
        },
        {
          fieldName: "email",
          fn: "email",
        },
        {
          fieldName: "age",
          fn: "age",
        },
      ],
    },
  ],
};



export default schema