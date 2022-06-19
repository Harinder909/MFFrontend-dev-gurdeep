import {ID, Response} from '../../../../../../_metronic/helpers'
export type User = {
  id?: ID
  applicantTaxStatus?: string
  dateofBirth?: string
  mobileNo?: string
  email?: string
  /*date?: string
  subType?: string
  amount?: string
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
  
  initials?: {
    label: string
    state: string
  }*/
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  applicantTaxStatus: 'avatars/300-6.jpg',
  dateofBirth: 'Art Director',  
  mobileNo: '',
  email: '',
 /* subType: '',
  amount: '',
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
  absReturn :'',*/
}
