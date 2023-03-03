import type { NextApiRequest, NextApiResponse } from 'next'
import formParser from 'libs/formParser'

import db from '@libs/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await formParser(req)
    console.log(result.fields)
  } catch (error) {
    console.log(error)
  }

  res.status(200).json({ collections: [] })
}

export const config = {
  api: {
    bodyParser: false,
  },
}
