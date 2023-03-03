import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@libs/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  
  if (req.method === 'POST') {
    const result =await db.field.create({
      data: {
        methodName: req.body.methodName,
        arguments: req.body.arguments,
        title: req.body.title,
        collection: {
          connect: { id: req.body.collectionId },
        },
      },
    })
   return  res.status(200).json({ result })
  }

  res.status(500).json({ error:'something went wrong' })

}
