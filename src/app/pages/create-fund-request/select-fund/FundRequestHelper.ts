import * as Yup from 'yup'

export interface ICreateAccount {
  fundType: string
  action: string
}

const createAccountSchemas = [
  Yup.object({
    fundType: Yup.string().required().label('Fund Type'),
  }),
  Yup.object({
    action: Yup.string().required().label('Action'),
  }),
]

const inits: ICreateAccount = {
  fundType: '',
  action: '',
}

export {createAccountSchemas, inits}
