import type { NextApiRequest, NextApiResponse } from 'next'
import db from '@libs/db'
import generateRecords from '@libs/generateRecords'
import { nanoid } from 'nanoid'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // return res.status(200).json({ error: 'DEBUG' })

  if (req.method === 'POST') {
    const collectionName = req.query.collectionName
    const quantity =
      typeof req.query.quantity === 'string' ? +req.query.quantity : undefined

    if (typeof collectionName !== 'string') {
      return res.status(401).json({ message: 'INVALID' })
    }

    await db.record.deleteMany({ where: { collectionName } })

    const result = await db.collection.findFirst({
      where: {
        name: collectionName,
      },

      include: {
        Fields: true,
      },
    })

    if (!result) {
      return res.status(404).json({ message: 'NOT_FOUND' })
    }

    const records = generateRecords(result?.Fields, quantity)

    const reshaped = records.map((d) => {
      return {
        json: JSON.stringify(d),
        id: nanoid(),
        collectionName,
      }
    })

    reshaped.forEach(async (record) => await db.record.create({ data: record }))

    return res.status(200).json({ message: 'SUCCESS' })
  }

  res.status(500).json({ message: 'SERVER_ERROR' })
}
