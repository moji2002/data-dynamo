import formidable from 'formidable'
import { NextApiRequest } from 'next'

type Form = {
  fields: { [key: string]: string|string[] }
}

const formParser = async (req: NextApiRequest) => {
  const form = new formidable.IncomingForm()

  return new Promise<Form>((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err)
      resolve({ fields })
    })
  })
}

export default formParser
