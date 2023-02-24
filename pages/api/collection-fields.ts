import type { NextApiRequest, NextApiResponse } from 'next'
import type { DatabaseCollectionItem } from 'types/types'
import formParser from 'libs/formParser'
import db from '@libs/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
if(req.method === 'get'){
 const result =  db.collection.findMany()
}


  res.status(200).json({})
}

export const config = {
  api: {
    bodyParser: false,
  },
}
