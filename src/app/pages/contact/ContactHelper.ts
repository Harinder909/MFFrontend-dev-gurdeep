import * as Yup from 'yup'

export interface ICreateAccount {
  queryHead: string
  queryBody: string
}

const createAccountSchemas = [
  Yup.object({
    queryHead: Yup.string().required().label('Subject'),
  }),
  Yup.object({
    queryBody: Yup.string().required().label('Message'),
  }),
]

const inits: ICreateAccount = {
  queryHead: '',
  queryBody: '',
}

export {createAccountSchemas, inits}
