import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@libs/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!Array.isArray(req.query.slug)) throw 'SOMETHING WENT WRONG'
  const [collectionName, id] = req.query.slug

  if (req.method === 'GET' && id) {
    const record = await db.record.findFirst({ where: { id, collectionName } })
    if (record) {
      return res
        .status(200)
        .json({
          data: {
            id: record.id,
            ...JSON.parse(record.json),
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
          },
        })
    }

    return res.status(404).json({ error: 'NOT_FOUND' })
  }

  if (req.method === 'GET') {
    const records = await db.record.findMany({ where: { collectionName } })
    const reshaped = records.map((r) => {
      return {
        id: r.id,
        ...JSON.parse(r.json),
        createdAt: r.createdAt,
        updatedAt: r.updatedAt,
      }
    })

    return res.status(200).json({ data: reshaped, message: 'SUCCESS' })
  }

  if (req.method === 'POST') {
    res.status(501).json({ error: 'NOT_IMPLEMENTED' })
  }

  if (req.method === 'DELETE' && id) {
    const { count } = await db.record.deleteMany({
      where: {
        collectionName,
        id,
      },
    })

    if (count > 0) {
      return res.status(200).json({ message: 'SUCCESS' })
    } else {
      return res.status(404).json({ error: 'NOT_FOUND' })
    }
  }

  res.status(500).json({ error: 'SERVER_ERROR' })
}
