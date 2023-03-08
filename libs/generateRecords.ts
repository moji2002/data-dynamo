import fs from 'fs'
import Chance from 'chance'

const chance = new Chance()

const generateRecords = (fields, n = 10) => {
  const records: any = []

  

  let newRecord: any = {}
  for (let index = 0; index < n; index++) {
    for (const field of fields) {
      
      newRecord[field.title] = (chance as any)[field.methodName](
        JSON.parse(field.arguments)
      )
    }
    records.push(newRecord)
    newRecord = {}
  }

  return records
}

export default generateRecords
