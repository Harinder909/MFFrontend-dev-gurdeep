import {ID, Response} from '../../../../../../_metronic/helpers'
export type User = {
  id?: ID
  investor?: string
  ucc?: string
  isin?: string
  folioNo?: string
  startDate?: string
  productType?: string
  investmentAmount?: string
  divReinv?: string
  nav?: string

  noofunit?: string
  navDate?: string
  trnDays?: string
  currentNAV?: string
  currentValue?: string
  divR?: string

  divP?: string
  total?: string
  annualizedReturn?: string
  absReturn?: string
  investmentRoute?:string
  initials?: {
    label: string
    state: string
  }
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  investor: 'avatars/300-6.jpg',
  ucc: 'Art Director',
  isin: 'Administrator',
  folioNo: '',
  startDate: '',
  productType: '',
  investmentAmount: '',
  divReinv: '',
  nav: '',

  noofunit:'',
  navDate: '',
  trnDays:'',
  currentNAV:'',
  currentValue:'',
  divR:'',

  divP:'',
  total:'',
  annualizedReturn:'',
  absReturn :'',
  investmentRoute:'',
}
