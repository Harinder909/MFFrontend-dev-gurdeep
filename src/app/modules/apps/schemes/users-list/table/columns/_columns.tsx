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
    Header: (props) => <UserCustomHeader tableProps={props} title='Scheme Name' className='min-w-125px' />,
    id: 'schemeName',
    Cell: ({...props}) => <UserLastLoginCell last_login={props.data[props.row.index].schemeName} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='ISIN' className='min-w-125px' />,
    id: 'isin',
    Cell: ({...props}) => <UserLastLoginCell last_login={props.data[props.row.index].isin} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='price' className='min-w-125px' />
    ),
    id: 'price',
    Cell: ({...props}) => <UserLastLoginCell last_login={props.data[props.row.index].price} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Sub Type' className='min-w-125px' />
    ),
    id: 'subTypeId',
    Cell: ({...props}) => <UserTwoStepsCell two_steps={props.data[props.row.index].subTypeId} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='AMC' className='min-w-125px' />
    ),
    id: 'amcId',
    Cell: ({...props}) => <UserTwoStepsCell two_steps={props.data[props.row.index].amcId} />,
  },

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Exit Load' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='NAV Date' className='text-end min-w-100px' />
    ),
    id: 'actions1',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='NAV Price' className='text-end min-w-100px' />
    ),
    id: 'actions2',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions3',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
