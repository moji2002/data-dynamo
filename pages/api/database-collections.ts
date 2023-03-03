import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@libs/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET' && typeof req.query.id === 'string') {
    const result = await db.collection.findUnique({
      where: { id: +req.query.id },
      include: { Fields: true,_count:true, },
    })

    return res.status(200).json({ collection: result })
  }

  if (req.method === 'GET') {
    const result = await db.collection.findMany()
    return res.status(200).json({ collections: result })
  }

  if (req.method === 'POST') {
    const name = req.body.name
    const desc = req.body.desc

    if (typeof name !== 'string' || typeof desc !== 'string') {
      return res.status(400).json({})
    }

    const result = await db.collection.create({
      data: {
        title: name,
        desc: desc,
      },
    })
    return res.status(200).json({ collection: result })
  }

  if (req.method === 'DELETE') {
    const id = req.query.id

    if (typeof id !== 'string') {
      return res.status(400).json({})
    }

    await db.collection.delete({ where: { id: +id } })

    return res.status(200).json({ success: true })
  }

  res.status(500).json({ collections: [] })
}
