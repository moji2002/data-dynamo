import Chance from 'chance'
import { FieldPayload } from 'types/models'

const chance = new Chance()

const generateRecords = (fields:FieldPayload[], n = 10) => {
  const records: any = []

  
  let newRecord: any = {}
  for (let index = 0; index < n; index++) {
    for (const field of fields) {
      
      newRecord[field.name] = (chance as any)[field.methodName](
        JSON.parse(field.arguments)
      )
    }
    records.push(newRecord)
    newRecord = {}
  }



  return records
}

export default generateRecords
