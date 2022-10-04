import fs from "fs";
import Chance from "chance";
import schema from "./schema";

const chance = new Chance();

const seed = () => {
  const db: any = {};

  for (const collection of schema.collections) {
    const data: any = [];
    for (let index = 0; index < collection.rows; index++) {
      let record: any = {};
      for (const field of collection.fields) {
        record[field.fieldName] = (chance as any)[field.method](
          field.arguments
        );
      }
      data.push(record);
      record = {};
    }

    db[collection.name] = data;
  }

  const json = JSON.stringify(db);

  fs.writeFile("data/db.json", json, (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Mock data generated.");
    }
  });
};

seed();

export default seed;
