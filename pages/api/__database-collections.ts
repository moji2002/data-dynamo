import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@libs/db'
import { HttpResponse, Response } from 'types/api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET' && typeof req.query.id === 'string') {
    const result = await db.collection.findUnique({
      where: { id: +req.query.id },
      include: { Fields: true },
    })

    const response: HttpResponse<any> = {
      message: Response.SUCCESS,
      data: result,
    }

    return res.status(200).json(response)
  }

  if (req.method === 'GET') {
    const result = await db.collection.findMany()
    const response: HttpResponse<any> = {
      message: Response.SUCCESS,
      data: result,
    }
    return res.status(200).json(response)
  }

  if (req.method === 'POST') {
    const name = req.body.name
    const desc = req.body.desc

    if (typeof name !== 'string') {
      const response: HttpResponse<any> = {
        message: Response.INVALID_ERROR,
      }
      return res.status(400).json(response)
    }

    const result = await db.collection.create({
      data: {
        name: name,
        desc: typeof desc === 'string' ? desc : '',
      },
    })

    const response: HttpResponse<any> = {
      message: Response.SUCCESS,
      data: result,
    }

    return res.status(200).json(response)
  }

  if (req.method === 'DELETE') {
    const id = req.query.id

    if (typeof id !== 'string') {
      const response: HttpResponse<any> = {
        message: Response.SUCCESS,
      }

      return res.status(400).json(response)
    }

    await db.collection.delete({ where: { id: +id } })

    const response: HttpResponse<any> = {
      message: Response.SUCCESS,
    }

    return res.status(200).json(response)
  }

  res.status(500).json({ error: 'SERVER_ERROR' })
}
