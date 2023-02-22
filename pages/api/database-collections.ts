import type { NextApiRequest, NextApiResponse } from 'next'
import type { DatabaseCollectionItem } from 'types/types'
import formParser from 'libs/formParser'
import db from '@libs/db'

const DatabaseCollections: DatabaseCollectionItem[] = [
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
  const result = await db.user.create({
    data: {
      email: parseInt(Math.random() * 100000+"")+'fsadf@fds.com',
      id: parseInt(Math.random() * 100000+""),
      name: 'mmmmmmdda',
    },
  })

  console.log(result)

  try {
    const result = await formParser(req)
    console.log(result.fields)
  } catch (error) {
    console.log(error)
  }

  // form.uploadDir = "./";
  // form.keepExtensions = true;

  res.status(200).json({ collections: DatabaseCollections })
}

export const config = {
  api: {
    bodyParser: false,
  },
}
