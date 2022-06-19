import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {UserLastLoginCell} from './UserLastLoginCell'
import {UserTwoStepsCell} from './UserTwoStepsCell'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import {User} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Sr. No.' className='min-w-125px' />,
    id: 'srNo.',
    Cell: ({...props}) => <UserInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Investor' className='min-w-125px' />,
    accessor: 'investor',
    Cell: ({...props}) => <UserInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='UCC' className='min-w-125px' />,
    accessor: 'ucc',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='ISIN' className='min-w-125px' />
    ),
    id: 'isin',
    Cell: ({...props}) => <UserLastLoginCell last_login={props.data[props.row.index].last_login} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Folio No ' className='min-w-125px' />
    ),
    id: 'folioNo ',
    Cell: ({...props}) => <UserTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Date' className='min-w-125px' />
    ),
    accessor: 'date',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Sub Type' className='min-w-125px' />
    ),
    accessor: 'subType',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Amount (Rs)' className='min-w-125px' />
    ),
    accessor: 'amount',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Div.Reinv.(Rs)' className='min-w-125px' />
    ),
    accessor: 'divReinv',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='NAV (Rs)' className='min-w-125px' />
    ),
    accessor: 'nav',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='No Of Unit' className='min-w-125px' />
    ),
    accessor: 'noofunit',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='NAV Date ' className='min-w-125px' />
    ),
    accessor: 'navDate',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Trn Days ' className='min-w-125px' />
    ),
    accessor: 'trnDays',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Current NAV (Rs)' className='min-w-125px' />
    ),
    accessor: 'currentNAV',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Current Value (Rs)' className='min-w-125px' />
    ),
    accessor: 'currentValue',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Div R(Rs)' className='min-w-125px' />
    ),
    accessor: 'divR',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Div P (Rs)' className='min-w-125px' />
    ),
    accessor: 'divP',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Total (Rs)' className='min-w-125px' />
    ),
    accessor: 'total',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Annualized Return (%)
      ' className='min-w-125px' />
    ),
    accessor: 'annualizedReturn',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Abs.Return(%)' className='min-w-125px' />
    ),
    accessor: 'absReturn',
  },
   {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
