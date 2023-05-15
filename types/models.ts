export interface DatabaseCollection {
  id: number
  name: string
  desc: string
}

export interface DatabaseCollectionPayload {
  name: string
  desc?: string
}


export interface FieldPayload {
  arguments: string
  collectionId: number
  id?: number
  methodName: string
  name: string
}

export interface FieldDetails {
  id?: number
  name: string
  methodName: string
  arguments: string
  collectionId: number
  createdAt: string
  updatedAt: string
}

export interface DatabaseCollectionDetails {
  id: number
  name: string
  desc: string
  createdAt: string
  updatedAt: string

  Fields: FieldDetails[]
}
