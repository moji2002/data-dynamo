import fs from "fs";
import Chance from "chance";
import schema from "./schema";

const chance = new Chance();

const generateSeeds = () => {
  const db: any = {};

  for (const table of schema.tables) {
    const data: any = [];
    for (let index = 0; index < table.quantity; index++) {
      let record:any = {};
      for (const field of table.fields) {        
        record[field.fieldName] = (chance as any)[field.fn]();
      }
      data.push(record);
      record = {};
    }

    db[table.name] = data;
  }

  const json = JSON.stringify(db, null, 2);

  fs.writeFile("data/db.json", json, (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Mock data generated.");
    }
  });
};

generateSeeds();

export default generateSeeds;
