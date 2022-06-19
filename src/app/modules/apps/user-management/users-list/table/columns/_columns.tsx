import {Column} from 'react-table'
import {UserTextCell} from './UserTextCell'
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
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Sr. No.' className='min-w-125px' />
    ),
    id: 'srNo.',
    Cell: ({...props}) => <UserTextCell text={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Investor' className='min-w-125px' />
    ),
    accessor: 'investor',
    Cell: ({...props}) => <UserTextCell text={props.data[props.row.index].investor} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='UCC' className='min-w-125px' />,
    accessor: 'ucc',
    Cell: ({...props}) => <UserTextCell text={props.data[props.row.index].ucc} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='ISIN' className='min-w-125px' />,
    id: 'isin',
    Cell: ({...props}) => <UserTextCell text={props.data[props.row.index].isin} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Folio No ' className='min-w-125px' />
    ),
    id: 'folioNo ',
    Cell: ({...props}) => <UserTextCell text={props.data[props.row.index].folioNo} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Date' className='min-w-125px' />,
    accessor: 'startDate',
    Cell: ({...props}) => <UserTextCell text={props.data[props.row.index].startDate} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Product Type' className='min-w-125px' />
    ),
    accessor: 'productType',
    Cell: ({...props}) => (
      <UserLastLoginCell last_login={props.data[props.row.index].productType} />
    ),
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Amount (Rs)' className='min-w-125px' />
    ),
    accessor: 'investmentAmount',
    Cell: ({...props}) => <UserTextCell text={props.data[props.row.index].investmentAmount} />,
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
      <UserCustomHeader
        tableProps={props}
        title='Annualized Return (%)
      '
        className='min-w-125px'
      />
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
