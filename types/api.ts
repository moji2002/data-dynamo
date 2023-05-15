export interface HttpResponse<T> {
  message: Response
  data?: T
}

export enum Response {
  SUCCESS = 'SUCCESS',
  INVALID_ERROR = 'INVALID_ERROR',
  SERVER_ERROR = 'SERVER_ERROR',
  NOT_FOUND = 'NOT_FOUND',
  NOT_IMPLEMENTED = 'NOT_IMPLEMENTED',
}
