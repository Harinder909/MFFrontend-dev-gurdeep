import {ID, Response} from '../../../../../../_metronic/helpers'
export type User = {
  id?: ID
  investor?: string
  ucc?: string
  isin?: string
  folioNo?: string
  date?: string
  subType?: string
  amount?: string
  divReinv?: string
  nav?: string
  applicantTaxStatus?: string
  dateofBirth?: string

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
  date: '',
  subType: '',
  amount: '',
  divReinv: '',
  nav: '',
  applicantTaxStatus: '',
  dateofBirth: '',
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
}
