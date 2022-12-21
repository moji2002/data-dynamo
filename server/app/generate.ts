import fs from "fs";
import Chance from "chance";

const chance = new Chance();

const generateRecords = () => {
  const records: any = [];
  const file = fs.readFileSync("data/db.json", "utf8");
  const { collections, fields } = JSON.parse(file);

  for (const collection of collections) {
    const filterFields = fields.filter(
      (field: any) => collection.id === +field.collectionId
    );

    if (!filterFields.length) continue;

    let newRecord: any = {};
    for (let index = 0; index < 3; index++) {
      for (const field of filterFields) {
        newRecord[field.label] = (chance as any)[field.name](field.arguments);
        records.push(newRecord);
      }
      // console.log({ newRecord });

      newRecord = {};
    }
  }
  console.log({ records });
};

generateRecords();

export default generateRecords;
