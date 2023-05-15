import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@libs/db'
import { HttpResponse, Response } from 'types/api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    await db.field.create({
      data: {
        methodName: req.body.methodName,
        arguments: req.body.arguments,
        name: req.body.name,
        collection: {
          connect: { id: req.body.collectionId },
        },
      },
    })
    const response: HttpResponse<any> = { message: Response.SUCCESS }
    return res.status(200).json(response)
  }

  if (req.method === 'DELETE' && typeof req.query.id === 'string') {
    await db.field.delete({
      where: {
        id: +req.query.id,
      },
    })
    const response: HttpResponse<any> = { message: Response.SUCCESS }

    return res.status(200).json(response)
  }

  const response: HttpResponse<any> = { message: Response.SERVER_ERROR }

  res.status(500).json(response)
}
