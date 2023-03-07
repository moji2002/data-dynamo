import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@libs/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const result = await db.field.create({
      data: {
        methodName: req.body.methodName,
        arguments: req.body.arguments,
        title: req.body.title,
        collection: {
          connect: { id: req.body.collectionId },
        },
      },
    })
    return res.status(200).json({ result,message: 'SUCCESS' })
  }

  if (req.method === 'DELETE' && typeof req.query.id === 'string') {
    const result = await db.field.delete({
      where: {
        id: +req.query.id,
      },
    })
    return res.status(200).json({ result ,message: 'SUCCESS'})
  }

  res.status(500).json({ error: 'SERVER_ERROR'  })
}
