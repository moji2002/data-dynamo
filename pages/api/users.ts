import type { NextApiRequest, NextApiResponse } from 'next'
import type { DatabaseCollectionItem } from 'types/types'
import formParser from 'libs/formParser'

import db from '@libs/db'

const Users: DatabaseCollectionItem[] = [
  {
    desc: 'some dummy database collection',
    id: '1',
    name: 'hello db collection',
  },
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if(req.method === '')

  

  console.log(req.query);
  

  try {
    const result = await formParser(req)
    console.log(result.fields)
  } catch (error) {
    console.log(error)
  }

  // form.uploadDir = "./";
  // form.keepExtensions = true;

  res.status(200).json({collections: Users})
}

export const config = {
  api: {
    bodyParser: false,
  },
}
