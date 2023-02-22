import type { NextApiRequest, NextApiResponse } from 'next'
import type { DatabaseCollectionItem } from 'types/types'
import formParser from 'libs/formParser'

import db from '@libs/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if(req.method === '')

 const result = await db.user.create({
    data: {
      email: 'fsadf@fds.com',
      id: 34,
      name: 'fdsf',
    },
  })

  // console.log(req.query)



  // form.uploadDir = "./";
  // form.keepExtensions = true;

  res.status(200).json({ result })
}

export const config = {
  api: {
    bodyParser: false,
  },
}
