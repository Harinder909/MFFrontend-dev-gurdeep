import * as Yup from 'yup'

export interface ICreateAccount {
  customerId: number
  productType: string
  bankName: string
  frequency: string
  investmentAmount: number
  lockinPeriod: string
  numOfInstallments: number
  sipStartMonth: number
  startDate: Date
  accountNum: number
  ifsc: string
  mandate: string
  payableAmount: number
  brokerage: number
}

const createAccountSchemas = [
  Yup.object({
    customerId: Yup.number().required('Required').label('Customer Id'),
  }),
  Yup.object({
    productType: Yup.string().required('Required').label('Product Type'),
  }),
  Yup.object({
    bankName: Yup.string().label('Bank Name'),
  }),
  Yup.object({
    frequency: Yup.string().label('Frequency'),
  }),
  Yup.object({
    investmentAmount: Yup.number()
      .required('Required')
      .label('Investment Amount')
      .min(500, 'Minimum amount should be Rs. 500'),
  }),
  Yup.object({
    lockinPeriod: Yup.string().label('Lockin Period'),
  }),
  Yup.object({
    numOfInstallments: Yup.number().label('Number of Installments'),
  }),
  Yup.object({
    sipStartMonth: Yup.number().label('Start Month'),
  }),
  Yup.object({
    startDate: Yup.date().label('Start Date'),
  }),
  Yup.object({
    accountNum: Yup.number().required().label('Account Number'),
  }),
  Yup.object({
    ifsc: Yup.string().required().label('IFSC'),
  }),
  Yup.object({
    mandate: Yup.string().label('Mandate'),
  }),
  Yup.object({
    payableAmount: Yup.number().label('Payable Amount'),
  }),
  Yup.object({
    brokerage: Yup.number().label('Brokerage'),
  }),
]

const inits: ICreateAccount = {
  customerId: 0,
  productType: '',
  bankName: '',
  frequency: '',
  investmentAmount: 0,
  lockinPeriod: '',
  numOfInstallments: 0,
  sipStartMonth: 0,
  startDate: new Date(),
  accountNum: 0,
  ifsc: '',
  mandate: 'false',
  payableAmount: 0,
  brokerage: 0,
}

export {createAccountSchemas, inits}
